'use client'

import { Box, Container, Heading, Text, Stack, Icon } from '@chakra-ui/react'
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import NextLink from 'next/link'
import { Button } from '@chakra-ui/react'

export default function CTASection() {
  return (
    <Box py={20} bg="gray.100">
      <Container maxW={'7xl'}>
        <Stack
          gap={8}
          align="center"
          textAlign="center"
          maxW={'3xl'}
          mx="auto"
        >
          <Heading as="h2" color="green.500">
              Vydejme se spolu na cestu
          </Heading>
          <Text color="gray.700" fontSize={'xl'} maxW={'2xl'}>
            První krok je často ten nejtěžší. Domluvte si úvodní konzultaci a společně prozkoumáme, jak vám mohu pomoci.
          </Text>
          <Stack
            gap={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
            pt={4}
          >
            <NextLink href="/calendar" passHref legacyBehavior>
              <Button
                as="a"
                colorScheme="green"
                size="lg"
                rounded="full"
                px={8}
              >
                <Icon as={FaCalendarAlt} mr={2} />
                Objednat konzultaci
              </Button>
            </NextLink>
            <NextLink href="/services" passHref legacyBehavior>
              <Button
                as="a"
                colorScheme="green"
                variant="outline"
                size="lg"
                rounded="full"
                px={8}
              >
                Moje služby
                <Icon as={FaArrowRight} ml={2} />
              </Button>
            </NextLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
} 