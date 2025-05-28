import { MDXProvider } from '@mdx-js/react'
import { Box, Heading, Text, Link, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import OptimizedImage from './OptimizedImage'

const components = {
  h1: (props) => {
    const headingColor = useColorModeValue('gray.800', 'gray.200')
    return <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={4} color={headingColor} {...props} />
  },
  h2: (props) => {
    const headingColor = useColorModeValue('gray.800', 'gray.200')
    return <Heading as="h2" fontSize="2xl" fontWeight="bold" mb={3} color={headingColor} {...props} />
  },
  h3: (props) => {
    const headingColor = useColorModeValue('gray.800', 'gray.200')
    return <Heading as="h3" fontSize="xl" fontWeight="bold" mb={2} color={headingColor} {...props} />
  },
  p: (props) => {
    const textColor = useColorModeValue('gray.700', 'gray.300')
    return <Text mb={4} color={textColor} {...props} />
  },
  a: (props) => <Link color="green.500" {...props} />,
  ul: (props) => <List styleType="disc" ml={6} mb={4} {...props} />,
  ol: (props) => <List styleType="decimal" ml={6} mb={4} {...props} />,
  li: (props) => {
    const textColor = useColorModeValue('gray.700', 'gray.300')
    return <ListItem mb={1} color={textColor} {...props} />
  },
  img: (props) => (
    <Box my={6}>
      <OptimizedImage
        src={props.src}
        alt={props.alt}
        borderRadius="md"
        maxW="100%"
        mx="auto"
      />
    </Box>
  ),
}

export default function MDXContent({ children }) {
  return (
    <MDXProvider components={components}>
      <Box className="mdx-content">{children}</Box>
    </MDXProvider>
  )
} 