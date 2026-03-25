'use client'

import { Heart, ArrowRight } from 'lucide-react'
import { useOptIn } from '@/context/OptInContext'

export default function InlineOptIn() {
  const { openModal } = useOptIn()

  return (
    <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 my-10">
      <div className="flex items-start gap-3">
        <Heart className="w-5 h-5 text-blush-400 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-warm-800 text-base mb-1">
            Want gentle sleep tips delivered to your inbox?
          </h3>
          <p className="text-warm-500 text-sm leading-relaxed mb-4">
            Join 50,000+ families in the free baby sleep email course — gentle, attachment-based, and completely free.
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 bg-blush-400 hover:bg-blush-500 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300"
          >
            Join the Free Course
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
