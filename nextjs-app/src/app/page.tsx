import { getLatestPosts } from '@/utils/blogUtils'
import BlogCard from '@/components/BlogCard'
import AboutCard from '@/components/AboutCard'
import ServicesSection from '@/components/ServicesSection'
import CTASection from '@/components/CTASection'

// Metadata for better SEO and performance
export const metadata = {
  title: 'Tomáš Nováček - Psychoterapie v centru Brna',
  description: 'Nabízím psychoterapii pro dospělé v centru Brna. Můžete čerpat podporou z preventivních programů zdravotních pojišťoven.',
  keywords: 'psychoterapie, psychologické poradenství, Brno, individuální terapie, osobní rozvoj, deprese, úzkost, vztahy, stres',
  openGraph: {
    title: 'Tomáš Nováček - Psychoterapie v centru Brna',
    description: 'Nabízím psychoterapii pro dospělé v centru Brna. Můžete čerpat podporou z preventivních programů zdravotních pojišťoven.',
    images: ['/optimized-images/tom1-sm.webp'],
  },
}

export default async function Home() {
  // Fetch blog posts on the server
  let newestPosts: any[] = []
  try {
    newestPosts = await getLatestPosts(3) || []
  } catch (error) {
    console.error('Chyba při načítání příspěvků:', error)
  }

  return (
    <>
      {/* Critical Hero Section - Pure HTML/CSS for LCP */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src="/optimized-images/forrest-sm.webp"
            alt="Lesní cesta"
            className="hero-image"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-container">
            <div className="hero-text">
              <h1 className="hero-title">
                Psychoterapie
                <span className="hero-accent"> v centru Brna</span>
              </h1>
              <p className="hero-description">
                Vítejte, jmenuji se Tomáš Nováček. Věnuji se pomoci lidem překonávat životní výzvy a dosahovat osobního růstu. Společně s klienty se vydávám na cestu k hlubšímu porozumění sobě sama, svým vztahům a slepým uličkám, ve kterých se nacházejí. Snažím se, aby se na tomto putování cítili bezpečně a našli v sobě schopnost zahlédnout světlo nadějě prosvítající i potemnělým lesem.
              </p>
              <div className="hero-buttons">
                <a href="/calendar" className="btn btn-primary">
                  Objednat konzultaci
                </a>
                <a href="/services" className="btn btn-secondary">
                  Moje služby
                </a>
              </div>
            </div>
            
            <div className="hero-image-container">
              <img
                src="/optimized-images/tom1-sm.webp"
                alt="Tom Nováček"
                className="hero-portrait"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">O mně</h2>
            <p className="section-description">
              Jsem psycholog a terapeut s multioborovým vzděláním a zkušenostmi v doprovázení lidí překonávajících své životní výzvy. Znalosti a perspektivy z různých profesních oblastí mi pomáhají pochopit klientovu situaci a následně společně rozšiřovat obzory o perspektivy, které mohou přinášet větší svobodu při hledání cesty vpřed.
            </p>
          </div>
          <div className="about-grid">
            <AboutCard
              title="Moje praxe"
              description={
                <>
                  Posledních sedm let se intenzivně věnuji psychologickému poradenství a čtyři roky praktikuji terapii v soukromé praxi v centru Brna. Vystudoval jsem jednooborovou psychologii a absolvoval dvouletý výcvik v koučování, následně šestiletý výcvik v{' '}
                  <a href="https://www.psychoterapie-integrace.cz" target="_blank" rel="noopener noreferrer" className="external-link">
                    integrativní psychoterapii
                  </a>
                  . Jsem řádným členem{' '}
                  <a href="https://www.czap.cz/" target="_blank" rel="noopener noreferrer" className="external-link">
                    České asociace pro psychoterapii
                  </a>
                  {' '}- komunity, která klade důraz na etické standardy a vysokou kvalifikaci v oboru psychoterapie. Jinými slovy, snažím pracovat poctivě a stále se učit.
                </>
              }
              image="room.jpeg"
              imageAlt="Terapeutická místnost"
              buttonText="Více o mně"
              buttonHref="/about"
            />
            <AboutCard
              title="Můj přístup"
              description="Věřím, že všichni máme vnitřní zdroje k zvládání životních výzev, které se před námi objevují. Mohou se však objevit situace, ve kterých se můžeme cítit uvězněni nebo bezmocní. V takových chvílích  podporuji klienty v pochopení jejich problémů a hledání efektivních způsobů, jak je překonat. Společně prozkoumáváme jejich osobní cestu k sebepoznání a odhalujeme vnitřní síly, které jim mohou pomoci žít plnější a spokojenější život. Nemám všechny odpovědi, pomůžu vám najít ty vaše."
              image="mountinHikeGroup.jpg"
              imageAlt="Skupina lidí na horách"
              buttonText="Moje služby"
              buttonHref="/services"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Latest Posts Section */}
      <section className="posts-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Z mého bloku</h2>
            <p className="section-description">
              Píšu si poznámky – pro sebe, pro práci, pro život. Po čase jsem zjistil, že některé z nich mohou být užitečné i pro ostatní. Nejsou to vědecké články ani návody na štěstí, spíš takové mapy terénu, který znám z vlastní zkušenosti i z práce s klienty.
            </p>
          </div>

          <div className="posts-grid">
            {newestPosts.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="section-footer">
            <a href="/blog" className="btn btn-outline">
              Více článků
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CTASection />
    </>
  )
}
