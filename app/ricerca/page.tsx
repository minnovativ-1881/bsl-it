'use client'

import { motion } from 'framer-motion'
import { Moon, AlarmClock, Heart, Users, TrendingDown, Clock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useOptIn } from '@/context/OptInContext'

// ─── Shared primitives ───────────────────────────────────────────────────────

const BADGE = 'GENITORI NEL PRIMO ANNO CON IL BAMBINO'
const FOOTER = 'SONDAGGIO · 1.100 PARTECIPANTI · FEB 2025 · BABYSCHLUMMERLAND.DE'
const BRAND_BLUE = '#71B2D7'    // homepage brand blue
const BRAND_BLUE_BG = '#3E85B0' // darker for dark-card backgrounds

function ChartCard({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 ${dark ? 'text-white' : 'bg-white border border-warm-100'}`}
      style={dark ? { backgroundColor: BRAND_BLUE_BG } : {}}
    >
      <p
        className={`text-[9px] font-semibold tracking-[0.18em] uppercase text-center mb-5 ${dark ? 'text-sky-200' : 'text-warm-300'}`}
      >
        {BADGE}
      </p>
      {children}
      <p className={`text-[8px] tracking-[0.12em] uppercase text-center mt-6 ${dark ? 'text-sky-300/60' : 'text-warm-300'}`}>
        {FOOTER}
      </p>
    </div>
  )
}

// CSS crescent moon (no emoji)
function MoonIcon({ size = 14, color = 'white' }: { size?: number; color?: string }) {
  return (
    <span
      className="inline-block rounded-full"
      style={{
        width: size,
        height: size,
        background: 'transparent',
        border: `${Math.round(size * 0.14)}px solid ${color}`,
        boxShadow: `inset ${Math.round(size * 0.28)}px ${Math.round(size * -0.1)}px 0 0 ${color}`,
      }}
    />
  )
}

// ─── Bar chart helpers (pixel-accurate axis alignment) ────────────────────────

interface BarItem { label: string; value: number; highlight?: boolean }

function BarChart({
  items, max, unit, dark = false,
}: {
  items: BarItem[]; max: number; unit: string; dark?: boolean
}) {
  const LABEL_W = 180 // px — identical for label spacer and tick spacer
  const ticks = Array.from({ length: Math.floor(max / 2) + 1 }, (_, i) => i * 2)

  return (
    <div className="w-full">
      <div className="space-y-1.5">
        {items.map((item) => (
          <div key={item.label} className={`flex items-center gap-3 py-1 px-2 rounded-xl ${item.highlight ? 'bg-blush-50 border border-blush-200' : ''}`}>
            <span
              className={`text-xs leading-tight text-right shrink-0 ${item.highlight ? 'font-bold text-warm-900' : dark ? 'text-sky-100' : 'text-warm-500'}`}
              style={{ width: LABEL_W }}
            >
              {item.label}
            </span>
            <div className="relative flex-1 h-5 rounded-full overflow-hidden bg-white/20">
              <div
                className="absolute inset-y-0 left-0 rounded-full transition-all"
                style={{
                  width: `${(item.value / max) * 100}%`,
                  backgroundColor: item.highlight ? '#C98B85' : dark ? 'rgba(255,255,255,0.75)' : BRAND_BLUE,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Tick marks aligned exactly with bar area */}
      <div className="flex items-center gap-3 mt-1.5">
        <div style={{ width: LABEL_W, flexShrink: 0 }} />
        <div className="relative flex-1 h-4">
          {ticks.map((t) => (
            <span
              key={t}
              className={`absolute text-[10px] ${dark ? 'text-sky-200/70' : 'text-warm-400'}`}
              style={{ left: `${(t / max) * 100}%`, transform: 'translateX(-50%)' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div style={{ width: LABEL_W, flexShrink: 0 }} />
        <p className={`text-[10px] ${dark ? 'text-sky-200/70' : 'text-warm-400'}`}>{unit}</p>
      </div>
    </div>
  )
}

// ─── Chart 1: Genitori in Crisi del Sonno (SVG area, full width) ──────────────

function SleepCrisisChart() {
  return (
    <ChartCard>
      <h3 className="font-sans font-black text-warm-900 text-2xl sm:text-3xl text-center mb-2">
        Genitori in Crisi del Sonno
      </h3>
      <p className="text-warm-500 text-sm text-center mb-6 max-w-sm mx-auto">
        Ecco come diminuisce drasticamente la durata del sonno per i genitori nel primo anno.
      </p>
      {/* Full-width wider SVG */}
      <div className="relative w-full" style={{ aspectRatio: '2 / 1' }}>
        <svg viewBox="0 0 500 250" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          {/* Before birth – large blush triangle */}
          <polygon points="0,250 500,0 500,250" fill="#F4C5BE" opacity="0.9" />
          {/* First year – smaller blue triangle */}
          <polygon points="0,250 500,95 500,250" fill={BRAND_BLUE_BG} opacity="0.9" />
          {/* Labels */}
          <text x="340" y="38" textAnchor="middle" fontSize="13" fontWeight="700" fill="#5C4440">Prima della Nascita</text>
          <text x="370" y="148" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Sonno nel Primo</text>
          <text x="370" y="164" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Anno di Genitorialità</text>
          {/* Y axis label */}
          <text x="12" y="135" fontSize="9" fill="#9A6E69" transform="rotate(-90,12,135)">Ore di Sonno per Notte</text>
          {/* X axis label */}
          <text x="460" y="244" fontSize="9" fill="#9A6E69">1 Anno</text>
        </svg>
      </div>
    </ChartCard>
  )
}

// ─── Chart 2: 109 Notti Senza Sonno (moon grid, full width, two-color) ────────

function SleeplessNightsChart() {
  const total = 365
  const sleepless = 109
  return (
    <ChartCard dark>
      <h3 className="font-sans font-black text-white text-2xl sm:text-3xl text-center mb-2">
        109 Notti Senza Sonno
      </h3>
      <p className="text-sky-100 text-sm text-center mb-8 max-w-sm mx-auto">
        Nel primo anno, i genitori perdono in media <strong className="text-white">912 ore di sonno</strong> —
        l&apos;equivalente di <strong className="text-white">109 notti intere</strong> senza riposare.
      </p>
      {/* Full-width grid: 109 bright + 256 dim = 365 total */}
      <div className="w-full">
        <div className="flex flex-wrap gap-1.5 justify-center">
          {Array.from({ length: total }).map((_, i) => (
            <MoonIcon
              key={i}
              size={16}
              color={i < sleepless ? 'white' : 'rgba(255,255,255,0.22)'}
            />
          ))}
        </div>
        <p className="text-center text-sky-200/70 text-[10px] font-semibold tracking-[0.15em] uppercase mt-5">
          365 Notti in un Anno
        </p>
      </div>
    </ChartCard>
  )
}

// ─── Chart 3: Non Solo Breve — Anche Frammentato (dot grid, full width) ───────

function FragmentedSleepChart() {
  const interruptions = 1126
  return (
    <ChartCard dark>
      <h3 className="font-sans font-black text-white text-2xl sm:text-3xl text-center mb-2">
        Non Solo Breve —<br />Anche Frammentato!
      </h3>
      <p className="text-sky-100 text-sm text-center mb-8 max-w-sm mx-auto">
        Nel primo anno, i genitori subiscono oltre{' '}
        <strong className="text-white">1.126 interruzioni notturne</strong>!
      </p>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-wrap gap-[3px] justify-center">
          {Array.from({ length: interruptions }).map((_, i) => (
            <span
              key={i}
              className="rounded-full inline-block"
              style={{ width: 7, height: 7, backgroundColor: 'rgba(255,255,255,0.8)' }}
            />
          ))}
        </div>
      </div>
    </ChartCard>
  )
}

// ─── Chart 4: Confronto del Sonno (corrected values) ─────────────────────────

function SleepComparisonChart() {
  const items: BarItem[] = [
    { label: 'Bambini piccoli (1–3 anni)', value: 12 },
    { label: 'Adolescenti (14–17 anni)', value: 9 },
    { label: 'Atleti professionisti in allenamento', value: 9 },
    { label: 'Adulti medi', value: 7 },
    { label: 'Medici di guardia notturna', value: 6.5 },
    { label: 'Lavoratori a turni', value: 6.5 },
    { label: 'Astronauti sulla ISS', value: 6 },
    { label: 'Soldati in servizio attivo', value: 5 },
    { label: 'Genitori nel primo anno', value: 5.5, highlight: true },
  ]
  return (
    <ChartCard>
      <h3 className="font-sans font-black text-warm-900 text-2xl sm:text-3xl text-center mb-2">
        Confronto del Sonno
      </h3>
      <p className="text-warm-500 text-sm text-center mb-8 max-w-sm mx-auto">
        I genitori nel primo anno dormono meno dei medici di guardia notturna.
      </p>
      <BarChart items={items} max={12} unit="Ore di Sonno per Notte" />
    </ChartCard>
  )
}

// ─── Chart 5: La Vita Quotidiana (corrected values) ───────────────────────────

function DailyLifeChart() {
  const items: BarItem[] = [
    { label: 'Cullare il bambino per farlo addormentare', value: 11 },
    { label: 'Svegli nel letto, in attesa del sonno', value: 12 },
  ]
  return (
    <ChartCard>
      <h3 className="font-sans font-black text-warm-900 text-2xl sm:text-3xl text-center mb-2">
        La Vita Quotidiana<br />nel Primo Anno
      </h3>
      <p className="text-warm-500 text-sm text-center mb-8 max-w-sm mx-auto">
        Convertito in giorni interi, i genitori trascorrono questo tempo nel primo anno...
      </p>
      <BarChart items={items} max={14} unit="Giorni all'Anno" />
      <div className="mt-6 bg-blush-50 border border-blush-200 rounded-2xl p-4 text-sm text-warm-700 text-center">
        In media, i genitori trascorrono circa{' '}
        <strong className="underline decoration-blush-400">un giorno intero al mese</strong> a cullare il bambino
        e <strong className="underline decoration-blush-400">un altro giorno</strong> cercando di riprendere sonno.
      </div>
    </ChartCard>
  )
}

// ─── Chart 6: Difficoltà Notturne ─────────────────────────────────────────────

function NighttimeStrugglesChart() {
  const stats = [
    { pct: '48%', text: 'dei genitori si sente spesso o sempre stressato perché il bambino non dorme bene.' },
    { pct: '22%', text: 'dei genitori si sente spesso o sempre ansioso prima di andare a letto (solo il 19,8% va a letto sentendosi rilassato).' },
    { pct: '35%', text: 'dei genitori si sente spesso o sempre solo durante le cure notturne.' },
    { pct: '42%', text: 'dei genitori si sente spesso o molto spesso esausto o sopraffatto.' },
  ]
  return (
    <ChartCard>
      <h3 className="font-sans font-black text-warm-900 text-2xl sm:text-3xl text-center mb-8">
        Difficoltà Notturne
      </h3>
      <div className="space-y-5">
        {stats.map((s) => (
          <div key={s.pct} className="flex items-start gap-4">
            <span className="font-black text-3xl sm:text-4xl shrink-0 leading-none w-20 text-right" style={{ color: BRAND_BLUE }}>
              {s.pct}
            </span>
            <p className="text-warm-600 text-sm leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-blush-50 border border-blush-200 rounded-2xl p-4 text-xs text-warm-600 text-center leading-relaxed">
        La privazione del sonno è molto più della semplice stanchezza — porta stress, ansia, solitudine
        ed esaurimento, colpendo i genitori sia fisicamente che emotivamente.
      </div>
    </ChartCard>
  )
}

// ─── Page data ────────────────────────────────────────────────────────────────

const bigStats = [
  { value: '109', unit: 'notti', label: 'equivalenti di notti insonni nel primo anno', icon: Moon, color: 'bg-warm-800 text-white', accent: 'text-blush-300' },
  { value: '1.126', unit: 'volte', label: 'svegliati dal bambino in un anno', icon: AlarmClock, color: 'bg-blush-400 text-white', accent: 'text-white/70' },
  { value: '5,5', unit: 'ore', label: 'di sonno medio per notte — 2,5 ore in meno di prima', icon: Clock, color: 'bg-sky-400 text-white', accent: 'text-white/70' },
  { value: '76%', unit: '', label: 'dei genitori raramente o mai riesce a fare un pisolino di giorno', icon: TrendingDown, color: 'bg-blush-100 text-warm-800', accent: 'text-blush-400' },
  { value: '48%', unit: '', label: 'si sente spesso o sempre stressato a causa del sonno del bambino', icon: Heart, color: 'bg-sky-50 text-warm-800', accent: 'text-sky-500' },
  { value: '35%', unit: '', label: 'si sente spesso o sempre solo durante le cure notturne', icon: Users, color: 'bg-warm-100 text-warm-800', accent: 'text-warm-500' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RicercaPage() {
  const { openModal } = useOptIn()

  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="pt-28 pb-16 bg-warm-800 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '30px 30px' }}
          />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block bg-blush-400/20 text-blush-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-blush-400/30 mb-6">
                Sondaggio 2025 · 1.100 Genitori · Primo Anno con il Bambino
              </span>
              <h1 className="font-serif font-light text-white leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
                Oltre 100 Notti Insonni — Perché la Privazione del Sonno È Molto Più di una Semplice Stanchezza
              </h1>
              <p className="text-warm-300 text-lg leading-relaxed">
                All&apos;inizio del 2025, abbiamo intervistato 1.100 genitori sul loro sonno nel primo anno di vita del loro bambino.
                I risultati confermano ciò che tanti genitori già sentono — ma raramente vedono tradotto in numeri.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stat cards */}
        <section className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-center text-blush-400 font-semibold text-sm uppercase tracking-widest mb-10"
            >
              I numeri
            </motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {bigStats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }} className={`rounded-4xl p-7 ${stat.color}`}
                  >
                    <Icon className={`w-6 h-6 mb-4 ${stat.accent}`} />
                    <div className="font-serif font-light leading-none mb-1" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                      {stat.value}
                      {stat.unit && <span className="text-xl ml-1 opacity-70">{stat.unit}</span>}
                    </div>
                    <p className="text-sm leading-relaxed opacity-80 mt-2">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Article with charts */}
        <article className="max-w-3xl mx-auto px-6 pb-20 space-y-16">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">912 Ore di Sonno Perdute</h2>
            <p className="text-warm-600 leading-relaxed mb-4">
              In media, i genitori dormono solo <strong className="text-warm-800">5,5 ore per notte</strong> — 2,5 ore in meno rispetto a prima della nascita del bambino. Nel corso di un anno, questo si traduce in 912 ore di sonno perdute, equivalenti a <strong className="text-warm-800">38 giorni interi</strong>.
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              In altre parole: i genitori perdono l&apos;equivalente di <strong className="text-warm-800">109 notti insonni</strong> in soli dodici mesi.
            </p>
            <SleepCrisisChart />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">Risvegli Continui</h2>
            <p className="text-warm-600 leading-relaxed mb-4">
              I genitori si svegliano in <strong className="text-warm-800">media 3,1 volte per notte</strong> per prendersi cura del bambino — più di <strong className="text-warm-800">1.126 interruzioni all&apos;anno</strong>.
            </p>
            <p className="text-warm-600 leading-relaxed mb-8">
              E anche quando il bambino si riaddormenta, i genitori non lo fanno immediatamente. In media ci vogliono <strong className="text-warm-800">16 minuti</strong> per riprendere sonno.
            </p>
            <SleeplessNightsChart />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">Recuperare Sonno? Quasi Impossibile.</h2>
            <p className="text-warm-600 leading-relaxed mb-4">&ldquo;Dormi quando dorme il bambino&rdquo; — ma nella realtà, questo non funziona per la maggior parte dei genitori.</p>
            <ul className="space-y-2 text-warm-600 mb-8">
              <li className="flex items-start gap-2"><span className="text-blush-400 mt-1">·</span><span><strong className="text-warm-800">Il 76% dei genitori</strong> raramente o mai riesce a fare un pisolino durante il giorno.</span></li>
              <li className="flex items-start gap-2"><span className="text-blush-400 mt-1">·</span><span>In media, i genitori riescono a fare un pisolino <strong className="text-warm-800">solo una volta a settimana</strong>.</span></li>
            </ul>
            <FragmentedSleepChart />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">Meno Sonno dei Medici di Guardia</h2>
            <p className="text-warm-600 leading-relaxed mb-8">
              Con 5,5 ore di sonno medio per notte, i genitori nel primo anno dormono meno di quasi tutte le categorie professionali — inclusi astronauti, soldati e medici di guardia notturna.
            </p>
            <SleepComparisonChart />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">Quasi 11 Giorni Interi a Cullare il Bambino</h2>
            <p className="text-warm-600 leading-relaxed mb-8">
              I genitori trascorrono in media <strong className="text-warm-800">10,4 minuti per ogni addormentamento</strong> a cullare il bambino — quasi <strong className="text-warm-800">11 giorni interi all&apos;anno</strong>.
            </p>
            <DailyLifeChart />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif font-light text-warm-800 text-2xl sm:text-3xl mb-4">Più della Semplice Stanchezza</h2>
            <p className="text-warm-600 leading-relaxed mb-8">
              Il sonno insufficiente non è solo una sfida fisica. Il nostro sondaggio mostra che pesa anche emotivamente in modo significativo:
            </p>
            <NighttimeStrugglesChart />
          </motion.div>

          {/* Conclusione */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
            className="bg-warm-800 rounded-4xl p-8 sm:p-10 text-center"
          >
            <p className="text-blush-300 font-semibold text-sm uppercase tracking-widest mb-5">Conclusione</p>
            <h2 className="font-serif font-light text-white text-2xl sm:text-3xl leading-snug mb-6">
              La privazione del sonno non è solo una fase —<br />
              <em className="text-blush-300 not-italic">è una sfida che spinge i genitori al limite.</em>
            </h2>
            <p className="text-warm-300 leading-relaxed mb-8 max-w-xl mx-auto">
              Questi numeri dimostrano che ciò che molti genitori vivono come una debolezza personale è in realtà un problema sistemico e misurabile. Non sei sola — e ci sono percorsi dolci ed efficaci per uscirne.
            </p>
            <button
              onClick={openModal}
              className="bg-blush-400 hover:bg-blush-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-medium"
            >
              Iscriviti al corso gratuito via e-mail
            </button>
          </motion.div>

          <p className="text-warm-400 text-xs leading-relaxed border-t border-blush-100 pt-6">
            Sondaggio condotto nel febbraio 2025. Hanno partecipato 1.100 genitori nel primo anno di vita del loro bambino.
            Pubblicato da Il Regno della Nanna (Babyschlummerland). I dati riflettono esperienze auto-riferite.
          </p>

        </article>
      </main>
      <Footer />
    </>
  )
}
