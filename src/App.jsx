import { ChakraProvider, CSSReset, Box, Container, useColorModeValue } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Calendar from './pages/Calendar'

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
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                </Routes>
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
