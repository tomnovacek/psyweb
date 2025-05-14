import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { getLocalizedPath } from '../utils/content'

const NotFound = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <Box
      minH="60vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <VStack spacing={6} textAlign="center">
        <Heading size="2xl">404</Heading>
        <Heading size="lg">{t('notFound.title', 'Stránka nenalezena')}</Heading>
        <Text color="gray.600">
          {t('notFound.message', 'Omlouváme se, ale požadovaná stránka neexistuje.')}
        </Text>
        <Button
          colorScheme="green"
          onClick={() => navigate(getLocalizedPath('/'))}
        >
          {t('notFound.backHome', 'Zpět na hlavní stránku')}
        </Button>
      </VStack>
    </Box>
  )
}

export default NotFound 