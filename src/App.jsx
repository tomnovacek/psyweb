import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
import theme from './theme'
import { LoadingFallback } from './components/Loading'

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={router} fallbackElement={<LoadingFallback />} />
      </ChakraProvider>
    </HelmetProvider>
  )
}

export default App
