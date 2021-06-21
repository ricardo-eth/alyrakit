import { Box, Flex, Container, Text, Badge, Button } from "@chakra-ui/react";

const GetStarted = () => {
  return (
    <Box as="section" bg="teal.900" py="20">
      <Container
        as="section"
        id="buy-now"
        maxW="container.lg"
        py="10"
        bg="teal.900"
      >
        <Flex direction="column" alignItems="center">
          <Badge>Get Started</Badge>
          <h2>Get AlyraKit and save your time</h2>
          <Text align="center">
            Stop wasting time trying to do it the "right way" and build a site
            from scratch. AlyraKit is faster, easier, and you still have
            complete control.
          </Text>

          <Button colorScheme="teal">Buy now</Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default GetStarted;
