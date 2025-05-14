import { ChakraProvider, ColorModeScript, Box } from '@chakra-ui/react'
import { Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { getLanguageFromPath } from './utils/i18n'
import LanguageErrorBoundary from './components/LanguageErrorBoundary'
import './i18n/config'
import theme from './theme'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LanguageSwitcher from './components/LanguageSwitcher'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()
  const { i18n } = useTranslation()
  const currentLang = getLanguageFromPath(location.pathname)

  // Update i18n language when path changes
  useEffect(() => {
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang)
    }
  }, [currentLang, i18n])

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <LanguageErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Box minH="100vh" display="flex" flexDirection="column">
            <Navbar>
              <LanguageSwitcher />
            </Navbar>
            
            <Box flex="1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/en" element={<Home />} />
                <Route path="/o-mne" element={<About />} />
                <Route path="/en/about" element={<About />} />
                <Route path="/sluzby" element={<Services />} />
                <Route path="/en/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/en/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/en/blog/:slug" element={<BlogPost />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="/en/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Box>
            
            <Footer />
          </Box>
        </Suspense>
      </LanguageErrorBoundary>
    </ChakraProvider>
  )
}

export default App
