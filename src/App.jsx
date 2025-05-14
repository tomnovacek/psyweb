import { ChakraProvider, CSSReset, Box, Container, useColorModeValue } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy load route components
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Contact = lazy(() => import('./pages/Contact'))
const Calendar = lazy(() => import('./pages/Calendar'))

// Loading component
const LoadingFallback = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minH="50vh"
  >
    <Box
      as="div"
      className="loading-spinner"
      width="40px"
      height="40px"
      border="4px solid"
      borderColor="gray.200"
      borderTopColor="blue.500"
      borderRadius="full"
      animation="spin 1s linear infinite"
    />
  </Box>
)

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider>
        <CSSReset />
        <Router>
          <Box
            minH="100vh"
            minW="100vw"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg={useColorModeValue('gray.50', 'gray.900')}
          >
            <Box
              width="100%"
              maxW="1440px"
              minH="100vh"
              display="flex"
              flexDirection="column"
              alignItems="center"
              boxShadow="lg"
              bg={useColorModeValue('white', 'gray.800')}
            >
              <Navbar />
              <Box flex="1" width="100%">
                <Suspense fallback={<LoadingFallback />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                  </Routes>
                </Suspense>
              </Box>
              <Footer />
            </Box>
          </Box>
        </Router>
      </ChakraProvider>
    </HelmetProvider>
  )
}

export default App
