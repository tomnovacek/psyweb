'use client'

import { Box, Container, Heading, Text, SimpleGrid, Icon, VStack } from '@chakra-ui/react'
import { FaUser, FaUserFriends, FaHeartbeat } from 'react-icons/fa'
import { CheckCircleIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { Button } from '@chakra-ui/react'

export default function ServicesSection() {
  const services = [
    {
      icon: FaUser,
      title: 'Osobní potíže',
      description: 'Individuální terapie',
      features: [
        'Úzkost a deprese',
        'Výkyvy nálady',
        'Nároky na sebe',
        'Sebevědomí',
        'Vztah k sobě'
      ]
    },
    {
      icon: FaUserFriends,
      title: 'Vztahy a vztahové problémy',
      description: 'Porozumění a řešení vztahových potíží.',
      features: [
        'Potřeby ve vztazích',
        'Komunikační problémy',
        'Upřednostňování druhých',
        'Mezigenerační vztahy',
        'Intimita a vztahové potíže'
      ]
    },
    {
      icon: FaHeartbeat,
      title: 'Zvládání stresu',
      description: 'Strategie zvládání stresu.',
      features: [
        'Zdravotní potíže',
        'Životní změny',
        'Traumatické zkušenosti',
        'Strategie zvládání',
        'Balancování práce a osobního života'
      ]
    }
  ]

  return (
    <Box py={20} bg="gray.100">
      <Container maxW={'7xl'} centerContent>
        <Box textAlign="center" mb={10}>
          <Heading as="h2" color="green.500" mb={4}>
            S čím vám mohu pomoci
          </Heading>
          <Text color="gray.700" fontSize={'xl'} maxW={'6xl'}>
            Lidé za mnou přicházejí s nejrůznějšími tématy, ale nejčastěji se bavíme o vztazích (k sobě i k druhým), úzkosti, pokleslé náladě a&nbsp;o&nbsp;tom, jak najít klid ve shonu každodenního života.
          </Text>
        </Box>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10} w="full">
          {services.map((service, index) => (
            <Box
              key={index}
              bg="white"
              boxShadow={'2xl'}
              rounded={'xl'}
              overflow={'hidden'}
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: '2xl',
              }}
            >
              <Box p={6}>
                <VStack gap={4} align="start">
                  <Icon
                    as={service.icon}
                    w={10}
                    h={10}
                    color="green.400"
                  />
                  <Heading
                    as="h3"
                    color="green.500"
                    fontSize={'2xl'}
                    fontFamily={'body'}
                  >
                    {service.title}
                  </Heading>
                  <Text color="gray.700" mb={4}>
                    {service.description}
                  </Text>
                  <VStack gap={2} align="start" w="full">
                    {service.features.map((feature, idx) => (
                      <Box key={idx} color="gray.700" display="flex" alignItems="center" gap={2}>
                        <Icon as={CheckCircleIcon} color="green.400" />
                        {feature}
                      </Box>
                    ))}
                  </VStack>
                </VStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
        
        <Box textAlign="center" mt={10}>
          <NextLink href="/services" passHref legacyBehavior>
            <Button
              as="a"
              colorScheme="green"
              variant="outline"
              size="lg"
              rounded="full"
              px={8}
            >
              Více o službách a podmínkách
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Box>
  )
} 