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
    // Add MDX-specific components
    MDX: {
      baseStyle: {
        h1: {
          color: 'green.600',
          fontSize: '2xl',
          fontWeight: 'bold',
          mb: 4,
        },
        h2: {
          color: 'green.600',
          fontSize: 'xl',
          fontWeight: 'bold',
          mb: 3,
          mt: 8,
        },
        h3: {
          color: 'green.600',
          fontSize: 'xl',
          fontWeight: 'bold',
          mb: 2,
          mt: 6,
        },
        p: {
          color: 'gray.700',
          mb: 4,
          lineHeight: 'tall',
        },
        a: {
          color: 'green.500',
        },
        li: {
          color: 'gray.700',
          pl: 2,
          mb: 2,
          ml: 4,
        },
        blockquote: {
          pl: 4,
          borderLeft: '4px solid',
          borderColor: 'green.500',
          fontStyle: 'italic',
          mb: 4,
          color: 'gray.700',
        },
      },
      variants: {
        dark: {
          h1: { color: 'gray.200' },
          h2: { color: 'gray.200' },
          h3: { color: 'gray.200' },
          p: { color: 'gray.300' },
          li: { color: 'gray.300' },
          blockquote: { color: 'gray.300' },
        },
      },
    },
  },
})

export default theme 