"use client"
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Icon,
} from '@chakra-ui/react';
import { FaCookieBite } from 'react-icons/fa';
import SecureEmail from '@/components/SecureEmail';
import dynamic from 'next/dynamic';
const SEO = dynamic(() => import('@/components/SEO'), { ssr: false });

export default function CookiePolicy() {
  return (
    <>
      <SEO
        title="Používání cookies"
        description="Informace o používání cookies na webových stránkách Tomáše Nováčka. Jaké cookies používáme a jak je můžete spravovat."
        keywords="cookies, psychoterapie, Brno, webové stránky, soukromí, nastavení"
        url="https://tomnovacek.com/cookies"
      >
        <></>
      </SEO>
      <Container maxW="container.md" py={10}>
        <VStack gap={8} align="stretch">
          <Heading as="h1" size="xl">Používání cookies</Heading>
          
          <Box>
            <Heading as="h2" size="lg" mb={4}>Co jsou cookies?</Heading>
            <Text>
              Cookies jsou malé textové soubory, které se ukládají ve vašem prohlížeči při návštěvě webových stránek.
              Pomáhají nám poskytovat lepší uživatelský zážitek a analyzovat návštěvnost webu.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Jaké cookies používáme?</Heading>
            <VStack gap={3} align="start">
              <Box display="flex" alignItems="flex-start" gap={3}>
                <Icon as={FaCookieBite} color="blue.500" mt={1} />
                <Box>
                  <Text as="span" fontWeight="bold">Nezbytné cookies</Text>
                  <Text>
                    Tyto cookies jsou nezbytné pro fungování webu a nelze je vypnout. Zajišťují základní funkce a bezpečnost webu.
                  </Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={3}>
                <Icon as={FaCookieBite} color="blue.500" mt={1} />
                <Box>
                  <Text as="span" fontWeight="bold">Analytické cookies</Text>
                  <Text>
                    Pomáhají nám pochopit, jak návštěvníci používají náš web. Používáme Google Analytics pro analýzu návštěvnosti.
                    Tyto cookies můžete vypnout v nastavení.
                  </Text>
                </Box>
              </Box>
            </VStack>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Jak spravovat cookies?</Heading>
            <Text>
              Cookies můžete spravovat v nastavení vašeho prohlížeče. Většina prohlížečů umožňuje:
            </Text>
            <VStack gap={2} mt={2} align="start">
              <Text>• Blokovat všechny cookies</Text>
              <Text>• Povolit pouze nezbytné cookies</Text>
              <Text>• Vymazat cookies při zavření prohlížeče</Text>
            </VStack>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Vaše práva</Heading>
            <Text>
              V souladu s nařízením GDPR máte právo:
            </Text>
            <VStack gap={2} mt={2} align="start">
              <Text>• Odvolat souhlas s používáním cookies</Text>
              <Text>• Požadovat informace o tom, jaké cookies používáme</Text>
              <Text>• Požadovat vymazání cookies</Text>
            </VStack>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Kontakt</Heading>
            <Text>
              Pokud máte jakékoliv otázky ohledně používání cookies, neváhejte nás kontaktovat na:
            </Text>
            <Text mt={2}>
              Email: <SecureEmail email="terapie@tomnovacek.com" displayText="terapie@tomnovacek.com" />
            </Text>
          </Box>
        </VStack>
      </Container>
    </>
  );
} 