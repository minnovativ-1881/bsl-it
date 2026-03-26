import { MetadataRoute } from 'next'

// Base URL — set NEXT_PUBLIC_SITE_URL in Vercel env when custom domain is live
const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://bsl-it.vercel.app'

// ─── Blog articles ────────────────────────────────────────────────────────────
// ADD new slugs here whenever a new article is published.
// DO NOT add course parts (be1m1k–be5mk5), sales pages, or /confirm/.
const BLOG_SLUGS = [
  'addormentamento-autonomo-bebe',
  'bambino-non-dorme-giorno',
  'bambino-dorme-solo-al-seno',
  'anticipare-nanna-bambino',
  'bambino-piange-nanna',
  'bambino-si-sveglia-notte',
  'metodo-pal',
  'fabbisogno-sonno-bambino',
  'regressione-sonno-4-mesi',
  'bebe-sveglia-2-ore',
  'smettere-allattare-dormire',
  'bambino-non-dorme-lettino-accanto',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    // ── Main pages ────────────────────────────────────────────────────────────
    { url: `${BASE}/`,          lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/blog`,      lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/ricerca`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/chi-siamo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/gratis`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contatti`,  lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${BASE}/legal`,     lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/privacy`,   lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    // ── Blog articles ─────────────────────────────────────────────────────────
    ...blogEntries,
  ]
}
