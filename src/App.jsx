import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
import { CookiesProvider } from 'react-cookie'
import theme from './theme'
import { LoadingFallback } from './components/Loading'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <CookiesProvider>
            <RouterProvider router={router} fallbackElement={<LoadingFallback />} />
          </CookiesProvider>
        </ChakraProvider>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App
