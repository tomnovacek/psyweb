import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'gray.800', // default light mode color
      },
      variants: {
        // You can add different variants if needed
        'blog-heading': {
          color: 'green.600', // your blog heading color
        },
        'section-heading': {
          color: 'green.500',
        }
      },
      defaultProps: {
        variant: 'section-heading', // default variant
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'green.500',
          color: 'white',
          _hover: {
            bg: 'green.600',
          },
        },
      },
    },
  },
})

export default theme 