import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useScrollRestoration } from './hooks/useScrollRestoration'
import { LoadingFallback } from './components/Loading'

// Lazy load route components
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Calendar = lazy(() => import('./pages/Calendar'))

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

// Wrap each route component with Suspense
const wrapWithSuspense = (Component) => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Component />
    </Suspense>
  )
}

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout>{wrapWithSuspense(Home)}</Layout>,
    },
    {
      path: '/about',
      element: <Layout>{wrapWithSuspense(About)}</Layout>,
    },
    {
      path: '/services',
      element: <Layout>{wrapWithSuspense(Services)}</Layout>,
    },
    {
      path: '/calendar',
      element: <Layout>{wrapWithSuspense(Calendar)}</Layout>,
    },
    {
      path: '/blog',
      element: <Layout>{wrapWithSuspense(Blog)}</Layout>,
    },
    {
      path: '/blog/:slug',
      element: <Layout>{wrapWithSuspense(BlogPost)}</Layout>,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
) 