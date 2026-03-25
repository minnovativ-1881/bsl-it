'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, CheckCircle, Heart, ArrowRight, Award, BookOpen, Users, Quote } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useOptIn } from '@/context/OptInContext'

const courseTestimonials = [
  {
    name: 'Melanie',
    text: "At first, I was skeptical, but after the very first email, my mindset started to shift. By the second day, I was eagerly waiting for Sarah's next email! While reading, I could immediately feel the love and experience behind her words. The practical tips, like the sample daily schedule, are absolutely priceless.",
    stars: 5,
    initials: 'Me',
    gradient: 'from-blush-300 to-blush-400',
    highlight: 'mindset started to shift',
  },
  {
    name: 'Sabrina',
    text: "I especially loved how the emails were spaced out — it didn't feel overwhelming, and I was ready to take the next step each day. By Day 6, our baby slept through the night. I chose the gentle method, and before that, she was waking hourly and would only settle while nursing.",
    stars: 5,
    initials: 'Sa',
    gradient: 'from-sky-300 to-sky-400',
    highlight: 'Day 6 — slept through the night',
  },
  {
    name: 'Linda',
    text: "The email course is fantastic. It's quick to read, and the tips and step-by-step guidance can be applied immediately. Plus, I love that the course is completely free. Thank you so much!",
    stars: 5,
    initials: 'Li',
    gradient: 'from-blush-200 to-blush-300',
    highlight: 'tips applied immediately',
  },
  {
    name: 'Inga',
    text: "In this course, you get a daily email with small, actionable steps in the right direction. Everything can be tailored to your child and family situation. It helped us tremendously — we're finally getting several hours of uninterrupted sleep! Nap time now takes a maximum of 5 minutes.",
    stars: 5,
    initials: 'In',
    gradient: 'from-sky-200 to-sky-300',
    highlight: 'hours of uninterrupted sleep',
  },
  {
    name: 'Juli',
    text: "A thousand thanks for the support! I've gained the courage and confidence to make changes, and the feeling of seeing my little one settle to sleep faster — and in his own bed instead of in my arms — is just indescribable. This course was a game-changer for us.",
    stars: 5,
    initials: 'Ju',
    gradient: 'from-blush-300 to-blush-400',
    highlight: 'game-changer for us',
  },
  {
    name: 'Michelle',
    text: "Thanks to you, we got our evenings as a couple back! It helped me immensely to recognize my baby's rhythm. The course gave me the strength to stay consistent. I also loved that the information was spread over several days — I found myself eagerly waiting for the next email.",
    stars: 5,
    initials: 'Mi',
    gradient: 'from-sky-300 to-sky-400',
    highlight: 'got our evenings as a couple back',
  },
  {
    name: 'Karin',
    text: "Very informative and written with an extraordinary level of empathy! Thank you so much!",
    stars: 5,
    initials: 'Ka',
    gradient: 'from-blush-200 to-blush-300',
    highlight: 'extraordinary empathy',
  },
  {
    name: 'Kristina',
    text: "A well-structured and compact course. I found the individual steps extremely helpful and attachment-focused! At first, I was skeptical — I expected a payment request after the second email, like so many others do. But it truly is completely free, which is amazing considering how many people try to make a fortune off desperate parents.",
    stars: 5,
    initials: 'Kr',
    gradient: 'from-sky-200 to-sky-300',
    highlight: 'truly completely free',
  },
  {
    name: 'Lydia',
    text: "This course helped me immensely — because it helped my daughter. She is my first child, and despite all the well-meaning advice from family and friends, I was feeling completely overwhelmed by her sleep struggles. My days and nights have finally become calmer — thank you, Sarah!",
    stars: 5,
    initials: 'Ly',
    gradient: 'from-blush-300 to-blush-400',
    highlight: 'days and nights finally calmer',
  },
]

const pillars = [
  {
    title: 'Clear & Simple Structure',
    body: 'Made for exhausted parents — bite-sized, essential information delivered one step at a time. Short, concise, and straight to the point.',
    color: 'bg-blush-50 border-blush-200',
    iconColor: 'text-blush-400',
  },
  {
    title: 'Attachment-Based Approach',
    body: "This course doesn't just treat the symptoms of sleep struggles. We focus on nurturing the bond with your child and making gentle, thoughtful changes.",
    color: 'bg-sky-50 border-sky-200',
    iconColor: 'text-sky-400',
  },
  {
    title: 'Valuable Insights',
    body: "You'll learn actionable steps toward peaceful nights, plus in-depth background knowledge. Understanding why certain steps work makes it so much easier to follow through.",
    color: 'bg-blush-50 border-blush-200',
    iconColor: 'text-blush-400',
  },
  {
    title: 'No Judgment — Just Support',
    body: 'My approach is never judgmental. I offer different options and recommendations. You are not to blame for anything. Every parent is doing their best.',
    color: 'bg-sky-50 border-sky-200',
    iconColor: 'text-sky-400',
  },
]

const sleepData = [
  {
    src: '/images/sleepdata01.webp',
    caption: 'Early months: sleep looked manageable at first, but after 2–3 months it deteriorated fast — with regular 1–3 hour crying phases at night.',
  },
  {
    src: '/images/sleepdata02.webp',
    caption: 'By April: waking every 1–2 hours, wide awake from 4 AM onwards. Barely 4 hours of total sleep per night.',
  },
  {
    src: '/images/sleepdata03.webp',
    caption: 'After the gentle attachment-based approach: finally, hours of uninterrupted sleep. A completely transformed night.',
  },
]

export default function CoursePage() {
  const { openModal } = useOptIn()

  return (
    <>
      <Navbar />

      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative pt-36 pb-24 overflow-hidden bg-cream">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blush-100/50 blur-3xl pointer-events-none" />
          <div className="section-container relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blush-100 text-blush-600 rounded-full px-5 py-2 text-sm font-semibold mb-8 border border-blush-200"
            >
              <Heart className="w-3.5 h-3.5 fill-blush-400 text-blush-400" />
              <span>Free · Gentle · Attachment-based</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-light text-warm-800 leading-tight mb-6 text-balance"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
            >
              Are you looking for{' '}
              <em className="text-blush-400 not-italic">better nights</em>
              <br />
              and more relaxation?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg sm:text-xl text-warm-500 leading-relaxed mb-10 max-w-2xl mx-auto text-balance"
            >
              Does your baby turn night into day? Refusing to fall asleep, stay asleep, or go back to sleep?
              I know exactly how you feel — and I've experienced firsthand that sleepless nights can truly improve.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={openModal}
                className="btn-primary text-base sm:text-lg"
              >
                Join the Free Course
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-1.5 text-warm-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="ml-1">50,000+ families</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sarah's Personal Story */}
        <section className="py-20 sm:py-28" style={{ background: '#FBF0EC' }}>
          <div className="absolute inset-0 pointer-events-none" />
          <div className="section-container max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-blush-500 font-semibold text-sm uppercase tracking-widest mb-4 text-center">
                Sarah's story
              </p>
              <h2
                className="font-serif font-light text-warm-800 leading-tight mb-8 text-center"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                How I went from{' '}
                <em className="text-blush-400 not-italic">4 hours of broken sleep</em>
                {' '}to 7–8 hours straight
              </h2>

              <div className="space-y-5 text-warm-600 leading-relaxed text-base sm:text-lg">
                <p>
                  With my fifth baby, I had utterly exhausting nights — almost hourly nursing and long wake phases.
                  I was barely getting <strong className="text-warm-800">4–5 hours of sleep per night</strong> and was completely drained.
                </p>
                <p>
                  But once we gently and lovingly made adjustments and helped our little one sleep better, our nights
                  transformed — to the point where she now sleeps{' '}
                  <strong className="text-warm-800">7–8 hours straight.</strong>
                </p>
                <p>
                  Ever since we started sleeping better, I finally have the energy, love, and patience for my little one
                  during the day again. Suddenly, I was full of life and joy once more.
                </p>
                <p>
                  After years of research, countless trials, and plenty of sleepless nights — thanks to my five (and now seven!)
                  beloved children — I distilled everything into a small but incredibly helpful course, which I'm offering here{' '}
                  <strong className="text-warm-800">completely for free.</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sleep Data Section */}
        <section className="py-20 sm:py-28 bg-cream overflow-hidden">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="text-center mb-14 max-w-2xl mx-auto"
            >
              <p className="text-blush-400 font-semibold text-sm uppercase tracking-widest mb-4">
                The data
              </p>
              <h2
                className="font-serif font-light text-warm-800 leading-tight mb-5"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                How my sleep actually looked — <em className="text-blush-400 not-italic">before and after</em>
              </h2>
              <p className="text-warm-500 text-base leading-relaxed">
                The gaps you see are mostly weekends or nights when sleep tracking was turned off because things were just too rough.
                The graphs reflect exactly what I experienced.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-8">
              {sleepData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="bg-white rounded-4xl overflow-hidden shadow-soft border border-blush-100"
                >
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={item.src}
                      alt={`Sleep data chart ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-warm-500 text-sm leading-relaxed">{item.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <section className="py-16 text-center" style={{ background: '#EBF4FA' }}>
          <div className="section-container max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="font-serif font-light text-warm-800 mb-4"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}
              >
                Many other parents have experienced the same transformation.
              </h3>
              <p className="text-warm-500 mb-8 text-base">
                Sign up now and get your first email within minutes.
              </p>
              <button onClick={openModal} className="btn-primary">
                Start the Free Course
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Why This Course */}
        <section className="py-20 sm:py-28 bg-cream">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="text-center mb-14 max-w-2xl mx-auto"
            >
              <p className="text-blush-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Why it works
              </p>
              <h2
                className="font-serif font-light text-warm-800 leading-tight mb-5"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                What makes this course{' '}
                <em className="text-blush-400 not-italic">different</em>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`rounded-4xl p-7 border ${pillar.color} shadow-soft`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pillar.iconColor}`} />
                    <h3 className="font-semibold text-warm-800 text-base">{pillar.title}</h3>
                  </div>
                  <p className="text-warm-500 text-sm leading-relaxed pl-8">{pillar.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Testimonials */}
        <section className="py-20 sm:py-28 overflow-hidden" style={{ background: '#FBF0EC' }}>
          <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ transform: 'translateY(-1px)' }}>
            <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
              <path d="M0,30 C480,0 960,60 1440,20 L1440,0 L0,0 Z" fill="#FDF8F3" />
            </svg>
          </div>

          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="text-center mb-14 max-w-2xl mx-auto"
            >
              <p className="text-blush-500 font-semibold text-sm uppercase tracking-widest mb-4">
                Course participants say
              </p>
              <h2
                className="font-serif font-light text-warm-800 leading-tight mb-5"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                Real parents,{' '}
                <em className="text-blush-400 not-italic">real results</em>
              </h2>
              <p className="text-warm-500 text-base leading-relaxed">
                Over 50,000 families have taken this course. Here is what some of them say.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseTestimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                  className="bg-white rounded-4xl p-7 shadow-soft border border-blush-100 flex flex-col"
                >
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-warm-600 text-sm leading-relaxed flex-1 mb-5">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="mb-5">
                    <span className="inline-block bg-blush-100 text-blush-500 text-xs font-semibold px-3 py-1 rounded-full">
                      {t.highlight}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-blush-100">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-warm-800 text-sm">{t.name}</p>
                      <p className="text-warm-400 text-xs">Course participant</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Sarah Bio */}
        <section className="py-20 sm:py-28 bg-cream">
          <div className="section-container max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-strong border-4 border-blush-100">
                  <Image
                    src="/images/sarahmann.webp"
                    alt="Sarah Mann — Baby Sleep Consultant"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <p className="text-blush-400 font-semibold text-sm uppercase tracking-widest mb-4">
                  Your guide
                </p>
                <h2
                  className="font-serif font-light text-warm-800 leading-tight mb-6"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                >
                  About <em className="text-blush-400 not-italic">Sarah Mann</em>
                </h2>
                <p className="text-warm-600 leading-relaxed mb-5">
                  Sarah Mann is a mother of seven, a linguist, blogger, author, and certified sleep consultant.
                  Her own sleepless nights with her babies first brought her to the brink of exhaustion — and then
                  led her to create Land of Little Dreamers.
                </p>
                <p className="text-warm-600 leading-relaxed mb-6">
                  Through her blog, personal consultations, and courses, she has helped{' '}
                  <strong className="text-warm-800">over 50,000 parents</strong> achieve better sleep and a
                  happier family life.
                </p>

                <div className="space-y-3">
                  {[
                    { icon: Award, text: 'Certified Sleep Consultant — Institute of Sensitive Sleep Consulting, Australia' },
                    { icon: BookOpen, text: 'Master of Education, author of multiple books and courses' },
                    { icon: Users, text: 'Over 50,000 course participants — 12+ years of experience' },
                    { icon: Heart, text: 'Mom of 7 children — she knows exactly what you\'re going through' },
                  ].map((cred, i) => {
                    const Icon = cred.icon
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-blush-100 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-blush-400" />
                        </div>
                        <p className="text-warm-600 text-sm">{cred.text}</p>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
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
                className="font-serif font-light text-white leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                Start tonight.
                <br />
                <em className="not-italic opacity-80">Better nights are closer than you think.</em>
              </h2>
              <p className="text-white/80 text-lg mb-10">
                Sign up now — completely free. Your first email arrives within minutes.
              </p>
              <button
                onClick={openModal}
                className="bg-white text-blush-500 hover:bg-blush-50 font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-medium inline-flex items-center gap-2"
              >
                Join the Free Course
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-white/60 text-sm mt-5">
                No commitment. Unsubscribe anytime. GDPR-compliant.
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
