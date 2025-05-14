import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Container,
  useColorModeValue,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      <Button as={RouterLink} to="/" fontSize={'sm'} fontWeight={400} variant={'link'}>
        Domů
      </Button>
      <Button as={RouterLink} to="/about" fontSize={'sm'} fontWeight={400} variant={'link'}>
        O mně
      </Button>
      <Button as={RouterLink} to="/services" fontSize={'sm'} fontWeight={400} variant={'link'}>
        Služby
      </Button>
      <Button as={RouterLink} to="/calendar" fontSize={'sm'} fontWeight={400} variant={'link'}>
        Kalendář
      </Button>
      <Button as={RouterLink} to="/blog" fontSize={'sm'} fontWeight={400} variant={'link'}>
        Blog
      </Button>
    </Stack>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      <Stack spacing={4} align="center">
        <Button as={RouterLink} to="/" fontSize={'sm'} fontWeight={400} variant={'link'}>
          Domů
        </Button>
        <Button as={RouterLink} to="/about" fontSize={'sm'} fontWeight={400} variant={'link'}>
          O mně
        </Button>
        <Button as={RouterLink} to="/services" fontSize={'sm'} fontWeight={400} variant={'link'}>
          Služby
        </Button>
        <Button as={RouterLink} to="/calendar" fontSize={'sm'} fontWeight={400} variant={'link'}>
          Kalendář
        </Button>
        <Button as={RouterLink} to="/blog" fontSize={'sm'} fontWeight={400} variant={'link'}>
          Blog
        </Button>
        <Button
          as={RouterLink}
          to="/calendar"
          w="full"
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          bg={'green.400'}
          _hover={{ bg: 'green.500' }}
        >
          Domluvit konzultaci
        </Button>
      </Stack>
    </Stack>
  )
}

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={1000}
      bg={useColorModeValue('white', 'gray.800')}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      width="100%"
    >
      <Container maxW="1680px">
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Přepnout navigaci'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
              as={RouterLink}
              to="/"
            >
              Tom Nováček
            </Text>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Button
              as={RouterLink}
              to="/calendar"
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'green.400'}
              href={'#'}
              _hover={{
                bg: 'green.300',
              }}
            >
              Domluvit konzultaci
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Container>
    </Box>
  )
} 