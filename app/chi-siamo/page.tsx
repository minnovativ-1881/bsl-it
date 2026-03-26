'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, BookOpen, Users, Heart, CheckCircle, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useOptIn } from '@/context/OptInContext'

const sarahCredentials = [
  { icon: Award, text: 'Consulente certificata del sonno infantile — Institute of Sensitive Sleep Consulting, Australia' },
  { icon: BookOpen, text: 'Master of Education in Germanistica e Romanistica' },
  { icon: BookOpen, text: 'Autrice di diversi libri specialistici e corsi online' },
  { icon: Users, text: 'Oltre 12 anni di esperienza pratica' },
]

const methods = [
  {
    title: 'Promuoviamo il sonno sereno con un approccio dolce e sensibile',
    body: 'Il nostro metodo mette al centro il benessere del bambino e della famiglia, senza pressioni o regole rigide.',
  },
  {
    title: 'Rifiutiamo metodi drastici come il pianto controllato',
    body: 'Crediamo che sia possibile ottenere risultati duraturi senza ricorrere a metodi che causano stress al bambino.',
  },
  {
    title: 'Non proponiamo soluzioni standardizzate — mettiamo al centro il bambino',
    body: 'Ogni bambino e unico. Le nostre soluzioni tengono conto del carattere, dell\'eta e delle esigenze individuali.',
  },
  {
    title: 'Sosteniamo il legame profondo tra genitori e bambino',
    body: 'Un sonno sereno non significa sacrificare la connessione emotiva — anzi, la rafforza.',
  },
  {
    title: 'Puntiamo su soluzioni efficaci e durature, basate su metodi comprovati',
    body: 'Le nostre strategie sono supportate dalla ricerca scientifica e collaudate da migliaia di famiglie.',
  },
]

const teamMembers = [
  {
    name: 'Sarah',
    role: 'Fondatrice ed Esperta del Sonno Infantile',
    badgeTitle: 'Fondatrice ed Esperta del Sonno',
    image: '/images/sarahmann.webp',
    description: [
      "Ciao, sono Sarah Mann, consulente del sonno certificata, germanista e autrice. Il mio percorso nel Regno della Nanna non e iniziato da esperta, ma da mamma completamente esausta.",
      "Quando uno dei nostri bambini ha sviluppato gravi problemi di sonno, mi sono trovata davanti alle stesse domande che molti genitori si pongono: Come posso accompagnare il mio bambino al sonno in modo amorevole? Perche sembra che gli altri riescano senza problemi — e noi no?",
      "Ho iniziato a studiare a fondo la scienza del sonno infantile e mi sono formata professionalmente. Oggi sono Consulente certificata del sonno infantile (Institute of Sensitive Sleep Consulting, Australia), Master of Education, autrice di diversi libri e consulente con oltre 12 anni di esperienza.",
    ],
    credentials: sarahCredentials,
    accentColor: 'text-blush-400',
    badgeColor: 'bg-blush-100 text-blush-600 border-blush-200',
    ringColor: 'border-dashed border-blush-300/60',
    ringColor2: 'border-blush-300/30',
  },
  {
    name: 'Timon',
    role: 'Co-fondatore, Tecnologia & Organizzazione',
    badgeTitle: 'Co-Fondatore',
    image: '/images/timon.webp',
    initials: 'T',
    gradient: 'from-sky-300 to-sky-400',
    description: [
      "Insieme a Sarah, Timon ha fondato Il Regno della Nanna piu di sei anni fa. Si occupa della gestione tecnica del sito, dell'organizzazione dei corsi online, dell'assistenza clienti e dello sviluppo strategico.",
      "E anche autore di alcuni articoli del blog e di un e-book dedicato ai papa.",
    ],
    credentials: [
      { icon: Users, text: 'Co-fondatore dal 2018 — oltre 6 anni a costruire Il Regno della Nanna' },
      { icon: BookOpen, text: 'Autore dell\'e-book dedicato ai papa' },
      { icon: Award, text: 'Tecnologia & organizzazione — garantisce il funzionamento della piattaforma' },
      { icon: Heart, text: 'Papa di 7 figli — conosce bene la privazione del sonno' },
    ],
    accentColor: 'text-sky-400',
    badgeColor: 'bg-sky-100 text-sky-600 border-sky-200',
  },
  {
    name: 'Julia',
    role: 'Assistenza Clienti & Consulenza sul Sonno',
    badgeTitle: 'Assistenza Clienti',
    image: '/images/julia-weiland.jpg',
    initials: 'J',
    gradient: 'from-blush-300 to-blush-400',
    description: [
      "Julia e il tuo primo punto di contatto per qualsiasi domanda sui nostri prodotti, corsi o e-book. Con la sua esperienza e competenza, e una parte fondamentale del Regno della Nanna — empatica, preparata e sempre pronta ad aiutarti.",
    ],
    credentials: [
      { icon: Heart, text: 'Assistenza clienti con il cuore — sempre disponibile per te' },
      { icon: Users, text: 'Guida e supporto durante tutto il tuo percorso verso notti serene' },
      { icon: Award, text: 'Competente, empatica e affidabile' },
    ],
    accentColor: 'text-blush-400',
    badgeColor: 'bg-blush-100 text-blush-600 border-blush-200',
  },
]

export default function AboutPage() {
  const { openModal } = useOptIn()

  return (
    <>
      <Navbar />

      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative pt-36 pb-20 overflow-hidden bg-cream">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-sky-100/50 blur-3xl pointer-events-none" />
          <div className="section-container relative z-10 max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-sky-500 font-semibold text-sm uppercase tracking-widest mb-4"
            >
              SCOPRI DI PIU SU SARAH E IL SUO TEAM
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-light text-warm-800 leading-tight mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
            >
              <em className="text-sky-400 not-italic">Il Regno della Nanna</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg sm:text-xl text-warm-500 leading-relaxed max-w-2xl mx-auto"
            >
              Chi siamo e cosa rappresentiamo
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base text-warm-500 leading-relaxed max-w-2xl mx-auto mt-4"
            >
              Notti insonni, infiniti tentativi di far addormentare il bambino e la domanda costante: &ldquo;Sto facendo qualcosa di sbagliato?&rdquo; — Lo conosciamo fin troppo bene. Nel Regno della Nanna accompagniamo i genitori verso notti piu serene, senza mai perdere di vista i bisogni del loro bambino. Nessuna regola rigida, nessuna pressione — solo soluzioni dolci, rispettose del legame genitore-bambino e adatte alla vita quotidiana.
            </motion.p>
          </div>
        </section>

        {/* Founding Story */}
        <section className="py-16" style={{ background: '#EBF4FA' }}>
          <div className="section-container max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-warm-600 text-base sm:text-lg leading-relaxed">
                Sarah e Timon hanno fondato <strong className="text-warm-800">Il Regno della Nanna</strong> nel 2018,
                e da allora e diventato una delle principali piattaforme di informazione sul sonno dolce di neonati e bambini piccoli.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Members */}
        {teamMembers.map((member, idx) => (
          <section
            key={member.name}
            className={`py-20 sm:py-28 overflow-hidden ${idx % 2 === 0 ? 'bg-cream' : ''}`}
            style={idx % 2 !== 0 ? { background: '#FBF0EC' } : {}}
          >
            <div className="section-container">
              <div className={`grid lg:grid-cols-2 gap-14 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                {/* Photo / Avatar */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center"
                >
                  <div className="relative">
                    {member.image ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                          className="absolute inset-[-16px] rounded-full border-2 border-dashed border-sky-300/60"
                        />
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                          className="absolute inset-[-32px] rounded-full border border-blush-300/30"
                        />
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-strong">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                      </>
                    ) : (
                      <div
                        className={`w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-strong`}
                      >
                        <span className="text-white font-serif font-light text-7xl">{member.initials}</span>
                      </div>
                    )}

                    {/* Floating badge */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -bottom-4 -right-4 bg-white rounded-3xl px-5 py-3 shadow-medium border border-sky-100"
                    >
                      <p className="text-warm-700 font-semibold text-sm">{member.badgeTitle}</p>
                      <p className="text-warm-400 text-xs">Il Regno della Nanna</p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <p className={`font-semibold text-sm uppercase tracking-widest mb-4 ${member.accentColor}`}>
                    {member.role}
                  </p>
                  <h2
                    className="font-serif font-light text-warm-800 leading-tight mb-6"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                  >
                    {member.name}
                  </h2>

                  <div className="space-y-4 text-warm-600 leading-relaxed mb-8">
                    {member.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {member.credentials.map((cred, i) => {
                      const Icon = cred.icon
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center ${idx % 2 === 0 ? 'bg-sky-100' : 'bg-blush-100'}`}>
                            <Icon className={`w-4 h-4 ${member.accentColor}`} />
                          </div>
                          <p className="text-warm-600 text-sm">{cred.text}</p>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Certificate for Sarah */}
                  {member.name === 'Sarah' && (
                    <div className="mt-8 flex items-center gap-3">
                      <div className="rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/certificate.webp"
                          alt="Certified Sleep Consultant Certificate"
                          width={64}
                          height={64}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-warm-400 text-xs leading-relaxed">Institute of Sensitive Sleep Consulting, Australia</p>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* Our Methods */}
        <section className="py-20 sm:py-28" style={{ background: '#EBF4FA' }}>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="text-center mb-14 max-w-2xl mx-auto"
            >
              <p className="text-sky-500 font-semibold text-sm uppercase tracking-widest mb-4">
                La nostra missione
              </p>
              <h2
                className="font-serif font-light text-warm-800 leading-tight mb-5"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                Cosa ci rende{' '}
                <em className="text-sky-400 not-italic">unici</em>
              </h2>
              <p className="text-warm-500 text-base leading-relaxed">
                Vogliamo aiutare i genitori a comprendere davvero le abitudini e i bisogni di sonno del loro bambino. Il nostro obiettivo e darti la sicurezza e le competenze per risolvere i problemi di sonno in modo rispettoso del legame entro 2-4 settimane.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {methods.map((method, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="bg-white rounded-4xl p-7 shadow-soft border border-sky-100"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-warm-800 text-base">{method.title}</h3>
                  </div>
                  <p className="text-warm-500 text-sm leading-relaxed pl-8">{method.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 sm:py-24 bg-cream">
          <div className="section-container max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-blush-400 font-semibold text-sm uppercase tracking-widest mb-6">
                La nostra missione
              </p>
              <blockquote
                className="font-serif font-light text-warm-700 leading-relaxed"
                style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)' }}
              >
                &ldquo;Vogliamo aiutare i genitori a comprendere davvero le abitudini e i bisogni di sonno del loro bambino. Il nostro obiettivo e darti la sicurezza e le competenze per risolvere i problemi di sonno in modo rispettoso del legame entro 2-4 settimane, cosi potrai tornare a goderti il tuo piccolo e la tua vita. Bambini sereni, famiglie riposate e forti — questo e cio che ci sta piu a cuore.&rdquo;
              </blockquote>
              <p className="text-warm-400 mt-6 text-sm">— Sarah Mann, fondatrice de Il Regno della Nanna</p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative py-24 text-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #D4907F 0%, #E8B4A8 50%, #C07060 100%)' }}
        >
          <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ transform: 'translateY(-1px)' }}>
            <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
              <path d="M0,20 C480,60 960,0 1440,40 L1440,0 L0,0 Z" fill="#FDF8F3" />
            </svg>
          </div>
          <div className="section-container relative z-10 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="font-serif font-light text-white leading-tight mb-5"
                style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)' }}
              >
                Pronta a migliorare il sonno del tuo bambino?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Iscriviti al corso gratuito sul sonno del bambino — amato da 50.000+ famiglie.
              </p>
              <button
                onClick={openModal}
                className="bg-white text-blush-500 hover:bg-blush-50 font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-medium inline-flex items-center gap-2"
              >
                Inizia il corso gratuito
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-white/60 text-sm mt-5">
                Senza impegno. Disiscriviti quando vuoi.
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
