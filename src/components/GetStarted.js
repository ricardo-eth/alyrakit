import {
  Box,
  Badge,
  Button,
  Heading,
  Text,
  Container,
  Center,
} from "@chakra-ui/react";

const GetStarted = () => {
  return (
    <Box color="white" bg="teal.800">
      <Container as="section" maxW="container.lg" py="20">
        <Center mb="6">
          <Badge
            fontSize="m"
            color="white"
            bg="whiteAlpha.300"
            p="2"
            borderRadius="50"
          >
            Get Started
          </Badge>
        </Center>
        <Heading textAlign="center">Get AlyraKit and save your time</Heading>
        <Text textAlign="center" my="6">
          Stop wasting time trying to do it the "right way" and build a site
          from scratch. AlyraKit is faster, easier, and you still have complete
          control.
        </Text>
        <Center>
          <Button size="lg" colorScheme="teal">
            Buy now
          </Button>
        </Center>
      </Container>
    </Box>
  );
};

export default GetStarted;
