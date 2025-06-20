import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import { useScrollRestoration } from './hooks/useScrollRestoration'
import { LoadingFallback } from './components/Loading'

// Lazy load route components
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Calendar = lazy(() => import('./pages/Calendar'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const GDPR = lazy(() => import('./pages/GDPR'))
const LegalInfo = lazy(() => import('./pages/LegalInfo'))

// Layout component that includes Navbar and Footer
const Layout = ({ children }) => {
  useScrollRestoration()
  
  return (
    <Box
      minH="100vh"
      minW="100vw"
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      bg={useColorModeValue('gray.50', 'gray.900')}
    >
      <Navbar />
      <Box flex="1" width="100%" minH="calc(100vh - 64px)">
        {children}
      </Box>
      <Footer />
      <CookieConsent />
    </Box>
  )
}

// Enhanced layout with content-aware footer rendering
const ContentAwareLayout = ({ children }) => {
  useScrollRestoration()
  
  return (
    <Box
      minH="100vh"
      minW="100vw"
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      bg={useColorModeValue('gray.50', 'gray.900')}
    >
      <Navbar />
      <Suspense fallback={
        <Box flex="1" width="100%" minH="calc(100vh - 64px)">
          <LoadingFallback />
        </Box>
      }>
        <Box flex="1" width="100%" minH="calc(100vh - 64px)">
          {children}
        </Box>
        <Footer />
      </Suspense>
      <CookieConsent />
    </Box>
  )
}

// Wrap each route component with Suspense
const wrapWithSuspense = (Component) => {
  return <Component />
}

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <ContentAwareLayout>{wrapWithSuspense(Home)}</ContentAwareLayout>,
    },
    {
      path: '/about',
      element: <ContentAwareLayout>{wrapWithSuspense(About)}</ContentAwareLayout>,
    },
    {
      path: '/services',
      element: <ContentAwareLayout>{wrapWithSuspense(Services)}</ContentAwareLayout>,
    },
    {
      path: '/calendar',
      element: <ContentAwareLayout>{wrapWithSuspense(Calendar)}</ContentAwareLayout>,
    },
    {
      path: '/blog',
      element: <ContentAwareLayout>{wrapWithSuspense(Blog)}</ContentAwareLayout>,
    },
    {
      path: '/blog/:slug',
      element: <ContentAwareLayout>{wrapWithSuspense(BlogPost)}</ContentAwareLayout>,
    },
    {
      path: '/cookies',
      element: <ContentAwareLayout>{wrapWithSuspense(CookiePolicy)}</ContentAwareLayout>,
    },
    {
      path: '/gdpr',
      element: <ContentAwareLayout>{wrapWithSuspense(GDPR)}</ContentAwareLayout>,
    },
    {
      path: '/legal',
      element: <ContentAwareLayout>{wrapWithSuspense(LegalInfo)}</ContentAwareLayout>,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
) 