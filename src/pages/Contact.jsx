import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW={'7xl'} py={12}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Kontaktujte mě</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Jsem tu, abych vám pomohl. Neváhejte mě kontaktovat s jakýmikoli otázkami
            nebo pro domluvení konzultace.
          </Text>
        </Stack>

        <Stack
          spacing={8}
          mt={10}
          as={Container}
          maxW={'3xl'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Jméno</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>Zpráva</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                />
              </FormControl>
              <Button
                type="submit"
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }}
              >
                Odeslat zprávu
              </Button>
            </Stack>
          </form>
        </Stack>

        <Stack spacing={4} mt={10} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'2xl'}>Další způsoby kontaktu</Heading>
          <Text color={'gray.600'} fontSize={'lg'}>
            Email: tom@tomnovacek.com
            <br />
            Telefon: +420 123 456 789
            <br />
            Lokace: Brno, Česká republika
          </Text>
        </Stack>
      </Container>
    </Box>
  )
} 