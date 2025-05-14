import React from 'react'
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

class LanguageErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Language Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />
    }

    return this.props.children
  }
}

const ErrorFallback = ({ error }) => {
  const { t } = useTranslation()

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      p={4}
    >
      <VStack spacing={6} textAlign="center">
        <Heading size="xl" color="red.500">
          {t('error.title')}
        </Heading>
        <Text fontSize="lg" color="gray.600">
          {t('error.message')}
        </Text>
        {error && (
          <Text fontSize="sm" color="gray.500" fontFamily="mono">
            {error.message}
          </Text>
        )}
        <Button
          as={Link}
          to="/"
          colorScheme="blue"
          size="lg"
        >
          {t('error.retry')}
        </Button>
      </VStack>
    </Box>
  )
}

export default LanguageErrorBoundary 