import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Suspense } from 'react'
import { router, LoadingFallback } from './router'

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider>
        <CSSReset />
        <Suspense fallback={<LoadingFallback />}>
          <RouterProvider router={router} />
        </Suspense>
      </ChakraProvider>
    </HelmetProvider>
  )
}

export default App
