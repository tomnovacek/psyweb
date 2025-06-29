"use client"
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Icon,
} from '@chakra-ui/react';
import { FaShieldAlt, FaUserShield, FaFileAlt, FaLock } from 'react-icons/fa';
import SecureEmail from '@/components/SecureEmail';
import dynamic from 'next/dynamic';
const SEO = dynamic(() => import('@/components/SEO'), { ssr: false });

export default function GDPR() {
  return (
    <>
      <SEO
        title="Ochrana osobních údajů"
        description="Informace o zpracování osobních údajů v rámci psychoterapeutických služeb Tomáše Nováčka. GDPR compliance a práva subjektů údajů."
        keywords="GDPR, ochrana osobních údajů, psychoterapie, Brno, soukromí, práva klientů"
        url="https://tomnovacek.com/gdpr"
      >
        <></>
      </SEO>
      <Container maxW="container.md" py={10}>
        <VStack gap={8} align="stretch">
          <Heading as="h1" size="xl">Ochrana osobních údajů</Heading>
          
          <Box>
            <Heading as="h2" size="lg" mb={4}>Správce osobních údajů</Heading>
            <Text>
              Tomáš Nováček<br />
              Sukova 4<br />
              602 00 Brno-střed<br />
              IČ: 70453217
            </Text>
            <Text mt={2}>
              Email: <SecureEmail email="terapie@tomnovacek.com" displayText="terapie@tomnovacek.com" />
            </Text>
          </Box>

          <Box borderTop="1px" borderColor="gray.200" pt={8} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Rozsah zpracování osobních údajů</Heading>
            <Text mb={4}>
              V rámci poskytování psychoterapeutických služeb zpracovávám následující osobní údaje:
            </Text>
            <VStack gap={3} align="start">
              <Box display="flex" alignItems="center" gap={3}>
                <Icon as={FaUserShield} color="blue.500" />
                <Box>
                  <Text as="span" fontWeight="bold">Identifikační údaje:</Text>
                  <Text>jméno, příjmení, datum narození, kontaktní údaje</Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" gap={3}>
                <Icon as={FaFileAlt} color="blue.500" />
                <Box>
                  <Text as="span" fontWeight="bold">Zdravotní údaje:</Text>
                  <Text>informace o psychickém stavu, anamnéza, průběh terapie</Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" gap={3}>
                <Icon as={FaLock} color="blue.500" />
                <Box>
                  <Text as="span" fontWeight="bold">Ostatní údaje:</Text>
                  <Text>platební údaje, pojištění, doporučení od lékaře</Text>
                </Box>
              </Box>
            </VStack>
          </Box>

          <Box borderTop="1px" borderColor="gray.200" pt={8} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Účel zpracování</Heading>
            <Text>
              Osobní údaje zpracovávám za účelem:
            </Text>
            <VStack gap={2} mt={2} align="start">
              <Text>• Poskytování psychoterapeutických služeb</Text>
              <Text>• Vedení dokumentace o průběhu terapie</Text>
              <Text>• Komunikace s klientem</Text>
              <Text>• Fakturace a účetnictví</Text>
              <Text>• Plnění zákonných povinností</Text>
            </VStack>
          </Box>

          <Box borderTop="1px" borderColor="gray.200" pt={8} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Právní základ zpracování</Heading>
            <Text>
              Zpracování osobních údajů je založeno na:
            </Text>
            <VStack gap={2} mt={2} align="start">
              <Text>• Váš souhlas se zpracováním osobních údajů</Text>
              <Text>• Plnění smlouvy o poskytování služeb</Text>
              <Text>• Plnění zákonných povinností (např. účetnictví)</Text>
              <Text>• Oprávněný zájem správce</Text>
            </VStack>
          </Box>

          <Box borderTop="1px" borderColor="gray.200" pt={8} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Doba zpracování</Heading>
            <Text>
              Osobní údaje zpracovávám po dobu nezbytně nutnou k naplnění výše uvedených účelů:
            </Text>
            <VStack gap={2} mt={2} align="start">
              <Text>• Dokumentace o průběhu terapie: 10 let od poslední terapie</Text>
              <Text>• Účetní doklady: 10 let</Text>
              <Text>• Kontaktní údaje: po dobu aktivní spolupráce</Text>
            </VStack>
          </Box>

          <Box borderTop="1px" borderColor="gray.200" pt={8} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Způsob zpracování</Heading>
            <Text>
              Osobní údaje jsou zpracovávány:
            </Text>
            <VStack gap={2} mt={2} align="start">
              <Text>• Elektronicky v zabezpečených systémech</Text>
              <Text>• Manuálně v uzamčených prostorách</Text>
              <Text>• S využitím šifrované komunikace</Text>
            </VStack>
          </Box>

          <Box borderTop="1px" borderColor="gray.200" pt={8} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Práva subjektu údajů</Heading>
            <Text mb={4}>
              Máte právo na:
            </Text>
            <VStack gap={2} align="start">
              <Text>• Přístup k osobním údajům</Text>
              <Text>• Opravu osobních údajů</Text>
              <Text>• Výmaz osobních údajů (s výjimkou údajů, které musíme ze zákona uchovávat)</Text>
              <Text>• Omezení zpracování</Text>
              <Text>• Přenositelnost údajů</Text>
              <Text>• Odvolání souhlasu se zpracováním</Text>
              <Text>• Podání stížnosti u dozorového úřadu</Text>
            </VStack>
          </Box>

          <Box borderTop="1px" borderColor="gray.200" pt={8} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Předávání údajů</Heading>
            <Text>
              Osobní údaje mohou být předány:
            </Text>
            <VStack gap={2} mt={2} align="start">
              <Text>• Vašemu pojišťovacímu ústavu (na základě vašeho souhlasu)</Text>
              <Text>• Dalším zdravotnickým pracovníkům (na základě vašeho souhlasu)</Text>
              <Text>• Finančnímu úřadu (ze zákona)</Text>
            </VStack>
          </Box>

          <Box borderTop="1px" borderColor="gray.200" pt={8} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Kontaktní údaje</Heading>
            <Text>
              Pro uplatnění vašich práv nebo pro jakékoliv dotazy ohledně zpracování osobních údajů mě můžete kontaktovat na:
            </Text>
            <Text mt={2}>
              Email: <SecureEmail email="terapie@tomnovacek.com" displayText="terapie@tomnovacek.com" />
            </Text>
            <Text mt={2}>
              Telefon: +420 602 773 440
            </Text>
            <Text mt={2}>
              Adresa: Sukova 4, 602 00 Brno-střed
            </Text>
          </Box>

          <Box bg="gray.50" p={4} borderRadius="md">
            <Text fontSize="sm" color="gray.600">
              Poslední aktualizace: {new Date().toLocaleDateString('cs-CZ')}
            </Text>
          </Box>
        </VStack>
      </Container>
    </>
  );
} 