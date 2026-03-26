/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Blog-Artikel (alte WordPress-URLs /it/slug/ → neue /blog/slug)
      { source: '/it/bambino-piange-nanna', destination: '/blog/bambino-piange-nanna', permanent: true },
      { source: '/it/bambino-piange-nanna/', destination: '/blog/bambino-piange-nanna', permanent: true },
      { source: '/it/bambino-si-sveglia-notte', destination: '/blog/bambino-si-sveglia-notte', permanent: true },
      { source: '/it/bambino-si-sveglia-notte/', destination: '/blog/bambino-si-sveglia-notte', permanent: true },
      { source: '/it/bambino-non-dorme-lettino-accanto', destination: '/blog/bambino-non-dorme-lettino-accanto', permanent: true },
      { source: '/it/bambino-non-dorme-lettino-accanto/', destination: '/blog/bambino-non-dorme-lettino-accanto', permanent: true },
      { source: '/it/addormentamento-autonomo-bebe', destination: '/blog/addormentamento-autonomo-bebe', permanent: true },
      { source: '/it/addormentamento-autonomo-bebe/', destination: '/blog/addormentamento-autonomo-bebe', permanent: true },
      { source: '/it/bambino-dorme-solo-al-seno', destination: '/blog/bambino-dorme-solo-al-seno', permanent: true },
      { source: '/it/bambino-dorme-solo-al-seno/', destination: '/blog/bambino-dorme-solo-al-seno', permanent: true },
      { source: '/it/anticipare-nanna-bambino', destination: '/blog/anticipare-nanna-bambino', permanent: true },
      { source: '/it/anticipare-nanna-bambino/', destination: '/blog/anticipare-nanna-bambino', permanent: true },
      { source: '/it/bambino-non-dorme-giorno', destination: '/blog/bambino-non-dorme-giorno', permanent: true },
      { source: '/it/bambino-non-dorme-giorno/', destination: '/blog/bambino-non-dorme-giorno', permanent: true },
      { source: '/it/regressione-sonno-4-mesi', destination: '/blog/regressione-sonno-4-mesi', permanent: true },
      { source: '/it/regressione-sonno-4-mesi/', destination: '/blog/regressione-sonno-4-mesi', permanent: true },
      { source: '/it/smettere-allattare-dormire', destination: '/blog/smettere-allattare-dormire', permanent: true },
      { source: '/it/smettere-allattare-dormire/', destination: '/blog/smettere-allattare-dormire', permanent: true },
      { source: '/it/bebe-sveglia-2-ore', destination: '/blog/bebe-sveglia-2-ore', permanent: true },
      { source: '/it/bebe-sveglia-2-ore/', destination: '/blog/bebe-sveglia-2-ore', permanent: true },
      { source: '/it/fabbisogno-sonno-bambino', destination: '/blog/fabbisogno-sonno-bambino', permanent: true },
      { source: '/it/fabbisogno-sonno-bambino/', destination: '/blog/fabbisogno-sonno-bambino', permanent: true },
      { source: '/it/metodo-pal', destination: '/blog/metodo-pal', permanent: true },
      { source: '/it/metodo-pal/', destination: '/blog/metodo-pal', permanent: true },
      // Sonstige Seiten
      { source: '/it/gratis', destination: '/gratis', permanent: true },
      { source: '/it/gratis/', destination: '/gratis', permanent: true },
      { source: '/it/chi-siamo', destination: '/chi-siamo', permanent: true },
      { source: '/it/chi-siamo/', destination: '/chi-siamo', permanent: true },
      { source: '/it/contatti', destination: '/contatti', permanent: true },
      { source: '/it/contatti/', destination: '/contatti', permanent: true },
      { source: '/it/blog', destination: '/blog', permanent: true },
      { source: '/it/blog/', destination: '/blog', permanent: true },
      { source: '/it/un-solo-passo-rimasto', destination: '/confirm', permanent: true },
      { source: '/it/un-solo-passo-rimasto/', destination: '/confirm', permanent: true },
    ]
  },
}

export default nextConfig
