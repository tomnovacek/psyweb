import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useScrollRestoration } from './hooks/useScrollRestoration'

// Lazy load route components
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Calendar = lazy(() => import('./pages/Calendar'))

// Loading component
export const LoadingFallback = () => (
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

// Layout component that includes Navbar and Footer
const Layout = ({ children }) => {
  useScrollRestoration()
  
  return (
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
        maxW="1680px"
        minH="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        boxShadow="lg"
        bg={useColorModeValue('white', 'gray.800')}
      >
        <Navbar />
        <Box flex="1" width="100%">
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout><Home /></Layout>,
    },
    {
      path: '/about',
      element: <Layout><About /></Layout>,
    },
    {
      path: '/services',
      element: <Layout><Services /></Layout>,
    },
    {
      path: '/calendar',
      element: <Layout><Calendar /></Layout>,
    },
    {
      path: '/blog',
      element: <Layout><Blog /></Layout>,
    },
    {
      path: '/blog/:slug',
      element: <Layout><BlogPost /></Layout>,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
) 