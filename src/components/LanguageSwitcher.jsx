import { Button, useColorModeValue } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  
  const currentLang = i18n.language
  const isEnglish = currentLang === 'en'
  
  const handleLanguageSwitch = () => {
    const newLang = isEnglish ? 'cs' : 'en'
    const newPath = isEnglish 
      ? location.pathname.replace('/en', '')
      : `/en${location.pathname}`
    
    i18n.changeLanguage(newLang)
    navigate(newPath)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLanguageSwitch}
      color={useColorModeValue('gray.600', 'gray.400')}
      _hover={{
        bg: useColorModeValue('gray.100', 'gray.700'),
      }}
    >
      {t('language.switch')}
    </Button>
  )
}

export default LanguageSwitcher 