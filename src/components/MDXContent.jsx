import { MDXProvider } from '@mdx-js/react'
import { Box, Heading, Text, Image, Link, List, ListItem } from '@chakra-ui/react'

const components = {
  h1: (props) => <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={4} {...props} />,
  h2: (props) => <Heading as="h2" fontSize="2xl" fontWeight="bold" mb={3} {...props} />,
  h3: (props) => <Heading as="h3" fontSize="xl" fontWeight="bold" mb={2} {...props} />,
  p: (props) => <Text mb={4} {...props} />,
  a: (props) => <Link color="green.500" {...props} />,
  ul: (props) => <List styleType="disc" ml={6} mb={4} {...props} />,
  ol: (props) => <List styleType="decimal" ml={6} mb={4} {...props} />,
  li: (props) => <ListItem mb={1} {...props} />,
  img: (props) => (
    <Box my={6}>
      <Image
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