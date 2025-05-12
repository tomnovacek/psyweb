import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Calendar() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} py={20}>
      <Container maxW={'7xl'}>
        <Stack spacing={4} maxW={'7xl'} textAlign={'center'} mb={10}>
          <Heading fontSize={'3xl'}>Schedule a Session</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Book your appointment at a time that works for you
          </Text>
        </Stack>
        <Box
          width="100%"
          height="800px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="2xl"
        >
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ00ICmDJd6LyX3TG07oRvH7ni-wewoDDs0x0UXJMlWhkKUk1OBWw9wqj-TyqJgYdLOscITBiFtF?gv=true"
            style={{
              border: 0,
              width: '100%',
              height: '100%',
            }}
            allowFullScreen
          />
        </Box>
      </Container>
    </Box>
  )
} 