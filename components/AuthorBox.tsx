'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AuthorBox() {
  return (
    <div className="flex items-start gap-4 bg-blush-50 border border-blush-100 rounded-2xl p-5 my-8">
      <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
        <Image
          src="/images/sarahmann.webp"
          alt="Sarah Mann"
          width={56}
          height={56}
          className="object-cover object-top w-full h-full"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-warm-800 text-sm">Sarah Mann</p>
        <p className="text-blush-500 text-xs mb-2">L'AUTRICE — Consulente certificata del sonno infantile</p>
        <p className="text-warm-500 text-sm leading-relaxed">
          Sarah Mann e mamma di sette bambini, germanista, blogger, autrice e consulente certificata del sonno infantile. Le notti insonni con i suoi primi figli l'hanno portata prima sull'orlo della disperazione, e poi alla creazione del suo amato sito web Il Regno della Nanna. Attraverso il suo blog, consulenze personalizzate, libri di successo e corsi pratici, ha gia aiutato piu di 30.000 genitori a migliorare il sonno dei loro bambini e a ritrovare una vita familiare piu serena.
        </p>
        <Link href="/chi-siamo" className="inline-block mt-2 text-blush-500 text-xs font-medium hover:text-blush-600 transition-colors">
          Scopri di piu →
        </Link>
      </div>
    </div>
  )
}
