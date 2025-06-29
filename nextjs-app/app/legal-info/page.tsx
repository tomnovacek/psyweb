"use client"
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaExclamationTriangle } from 'react-icons/fa';
import dynamic from 'next/dynamic';
const SEO = dynamic(() => import('@/components/SEO'), { ssr: false });

export default function LegalInfo() {
  return (
    <>
      <SEO
        title="Právní informace"
        description="Právní informace a podmínky poskytování psychoterapeutických služeb Tomáše Nováčka. Odborná kvalifikace, odpovědnost a autorská práva."
        keywords="právní informace, psychoterapie, Brno, podmínky, autorská práva, mlčenlivost"
        url="https://tomnovacek.com/legal"
      >
        <></>
      </SEO>
      <Container maxW="container.md" py={10}>
        <VStack gap={8} align="stretch">
          <Heading as="h1" size="xl">Právní informace</Heading>

          <Box>
            <Heading as="h2" size="lg" mb={4}>Předmět činnosti</Heading>
            <Text>
              Poskytování psychoterapeutických služeb v rámci integrativní psychoterapie, poradenství v oblasti duševního zdraví.
            </Text>
          </Box>

          <Box borderTop="1px" borderColor="gray.200" pt={8} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Odborná kvalifikace</Heading>
            <VStack gap={3} align="start">
              <Box>
                <Text>Certifikovaný psychoterapeut</Text>
              </Box>
              <Box>
                <Text>Certifikovaný kouč</Text>
              </Box>
              <Box>
                <Text>Člen České asociace pro psychoterapii</Text>
              </Box>
            </VStack>
          </Box>

          <Box borderTop="1px" borderColor="gray.200" pt={8} />

          <Box bg="orange.50" p={4} borderRadius="md" border="1px" borderColor="orange.200">
            <Box display="flex" alignItems="center" gap={2} mb={2}>
              <FaExclamationTriangle color="orange" />
              <Heading as="h3" size="md">Důležité upozornění</Heading>
            </Box>
            <Text>
              Informace na těchto stránkách nenahrazují odbornou terapeutickou péči.
              V případě akutní krize kontaktujte:
            </Text>
            <VStack gap={1} mt={2} align="start">
              <Text>• Linka důvěry: 116 123</Text>
              <Text>• Krizové centrum: 778 510 510</Text>
              <Text>• Při vážných psychických obtížích vyhledejte lékaře nebo psychiatra</Text>
            </VStack>
          </Box>

          <Box borderTop="1px" borderColor="gray.200" pt={8} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Odpovědnost za obsah</Heading>
            <Text>
              Veškerý obsah na těchto stránkách je poskytován pouze pro informační účely. 
              Nepřebíráme odpovědnost za škody vzniklé v souvislosti s použitím informací z těchto stránek.
            </Text>
          </Box>

          <Box borderTop="1px" borderColor="gray.200" pt={8} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Autorská práva</Heading>
            <VStack gap={2} align="start">
              <Box>
                <Text>Veškerý obsah těchto stránek (texty, obrázky, grafika) je chráněn autorským právem.</Text>
              </Box>
              <Box>
                <Text>Jakékoliv kopírování nebo šíření bez písemného souhlasu je zakázáno.</Text>
              </Box>
            </VStack>
          </Box>

          <Box borderTop="1px" borderColor="gray.200" pt={8} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Mlčenlivost</Heading>
            <VStack gap={2} align="start">
              <Box>
                <Text>
                  Jako psychoterapeut jsem vázán povinností mlčenlivosti dle:
                </Text>
                <VStack gap={1} ml={6} mt={2} align="start">
                  <Text>• Etického kodexu České psychoterapeutické společnosti</Text>
                  <Text>• Nařízení Evropského parlamentu a Rady (EU) 2016/679 (GDPR)</Text>
                  <Text>• Zákona č. 89/2012 Sb., občanský zákoník</Text>
                </VStack>
              </Box>
              <Box>
                <Text>
                  Všechny informace sdělené v rámci terapie jsou přísně důvěrné a podléhají 
                  povinnosti mlčenlivosti. Výjimkou je pouze situace, kdy by klient 
                  mohl být nebezpečný sobě nebo svému okolí, nebo v případě soudního příkazu.
                </Text>
              </Box>
              <Box>
                <Text>
                  Jako soukromý psychoterapeut nejsem poskytovatelem zdravotních služeb 
                  dle zákona č. 373/2011 Sb. a nejsem tedy vázán povinnostmi vyplývajícími 
                  z tohoto zákona.
                </Text>
              </Box>
            </VStack>
          </Box>

          <Box borderTop="1px" borderColor="gray.200" pt={8} />

          <Box>
            <Heading as="h2" size="lg" mb={4}>Řešení sporů</Heading>
            <VStack gap={2} align="start">
              <Box>
                <Text>
                  Případné spory budou řešeny v souladu s právním řádem České republiky 
                  u příslušných soudů.
                </Text>
              </Box>
              <Box>
                <Text>
                  Před soudním řízením se snažíme o mimosoudní řešení sporů formou mediace.
                </Text>
              </Box>
            </VStack>
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