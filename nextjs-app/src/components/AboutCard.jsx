import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import OptimizedImage from './OptimizedImage'

export default function AboutCard({
  title,
  description,
  image,
  imageAlt,
  icon,
  buttonText,
  buttonHref,
  textColor = 'gray.700',
}) {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'xl'}
      rounded={'2xl'}
      position="relative"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: '2xl',
      }}
      overflow="hidden"
    >
      <Box
        position="relative"
        height="260px"
        overflow="hidden"
      >
        <OptimizedImage
          src={image}
          alt={imageAlt}
          objectFit="cover"
          width="100%"
          height="100%"
          style={{
            filter: 'brightness(1.2)',
          }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.300"
        />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={6}
          bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
        >
          <Flex align="center" gap={3}>
            {icon && <Icon as={icon} w={8} h={8} color="white" />}
            <Heading fontSize={'2xl'} color="white">{title}</Heading>
          </Flex>
        </Box>
      </Box>
      <Box p={8}>
        <Text fontSize={'lg'} mb={6} color={textColor}>
          {description}
        </Text>
        <NextLink href={buttonHref} passHref legacyBehavior>
          <Button
            as="a"
            variant="card"
          >
            {buttonText}
          </Button>
        </NextLink>
      </Box>
    </Box>
  )
} 