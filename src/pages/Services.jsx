import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  useColorModeValue,
  Button,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'

export default function Services() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW={'7xl'} py={12}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={10}>
          <Heading fontSize={'3xl'}>My Services</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            I offer a range of therapeutic services to support your mental health and personal growth journey. Each service is tailored to meet your unique needs and goals.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {[
            {
              title: 'Individual Therapy',
              price: '$150',
              duration: '50 minutes',
              description: 'One-on-one sessions focused on your personal growth and healing.',
              features: [
                'Personalized treatment plan',
                'Weekly or bi-weekly sessions',
                'Flexible scheduling',
                'Secure video sessions available',
                'Email support between sessions',
              ],
            },
            {
              title: 'Couples Therapy',
              price: '$175',
              duration: '75 minutes',
              description: 'Support for couples looking to improve their relationship and communication.',
              features: [
                'Relationship assessment',
                'Communication skills building',
                'Conflict resolution strategies',
                'Weekly or bi-weekly sessions',
                'Secure video sessions available',
              ],
            },
            {
              title: 'Anxiety & Depression',
              price: '$150',
              duration: '50 minutes',
              description: 'Specialized treatment using evidence-based approaches.',
              features: [
                'Cognitive Behavioral Therapy (CBT)',
                'Mindfulness techniques',
                'Stress management strategies',
                'Weekly sessions recommended',
                'Progress tracking tools',
              ],
            },
          ].map((service, index) => (
            <Box
              key={index}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}
            >
              <Stack spacing={4}>
                <Heading
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'2xl'}
                  fontFamily={'body'}
                >
                  {service.title}
                </Heading>
                <Text color={'gray.500'}>{service.description}</Text>
                <Text fontSize={'3xl'} fontWeight={'bold'}>
                  {service.price}
                  <Text as="span" fontSize={'lg'} fontWeight={'normal'}>
                    /{service.duration}
                  </Text>
                </Text>
                <List spacing={3} mt={4}>
                  {service.features.map((feature, idx) => (
                    <ListItem key={idx}>
                      <ListIcon as={CheckCircleIcon} color="green.500" />
                      {feature}
                    </ListItem>
                  ))}
                </List>
                <Button
                  as={RouterLink}
                  to="/contact"
                  colorScheme={'green'}
                  variant={'outline'}
                  size={'lg'}
                >
                  Schedule Session
                </Button>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>

        <Stack spacing={4} mt={20}>
          <Heading fontSize={'2xl'} textAlign={'center'}>What to Expect</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
              <Heading fontSize={'xl'}>Initial Consultation</Heading>
              <Text color={'gray.600'} fontSize={'lg'}>
                Your first session is an opportunity for us to get to know each other and discuss your goals for therapy. We'll review your history, current concerns, and develop a personalized treatment plan.
              </Text>
            </Stack>
            <Stack spacing={4}>
              <Heading fontSize={'xl'}>Ongoing Sessions</Heading>
              <Text color={'gray.600'} fontSize={'lg'}>
                Regular sessions provide a consistent space for growth and healing. We'll work together to develop practical strategies and insights that you can apply in your daily life.
              </Text>
            </Stack>
          </SimpleGrid>
        </Stack>

        <Stack spacing={4} mt={20}>
          <Heading fontSize={'2xl'} textAlign={'center'}>Insurance & Payment</Heading>
          <Text color={'gray.600'} fontSize={'lg'} textAlign={'center'}>
            I am an out-of-network provider. Many insurance plans offer partial reimbursement for out-of-network mental health services. I can provide you with a detailed receipt for insurance reimbursement. Payment is due at the time of service, and I accept all major credit cards.
          </Text>
          <Button
            as={RouterLink}
            to="/contact"
            colorScheme={'green'}
            size={'lg'}
            alignSelf={'center'}
            mt={4}
          >
            Contact for More Information
          </Button>
        </Stack>
      </Container>
    </Box>
  )
} 