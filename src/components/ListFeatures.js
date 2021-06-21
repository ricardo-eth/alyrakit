import working from "../assets/working.svg";

import {
  Box,
  SimpleGrid,
  Container,
  List,
  ListItem,
  ListIcon,
  Heading,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const ListFeatures = () => {
  const list = [
    "Lifetime updates",
    "Tons of assets",
    "Tech support",
    "Integration ready",
  ];
  return (
    <Box as="section" bg="gray.50" id="ListFeatures" py="20">
      <Container as="section" maxW="container.lg" py="10">
        <SimpleGrid columns={[1, 2]} gap="8">
          <Box>
            <img
              src={working}
              alt="Illustration with a computer on the desk"
              width="400"
              height="295"
            />
          </Box>
          <Box color="black">
            <Heading as="h2" size="xl" mb={6}>
              The most useful resource ever created for designers
            </Heading>
            <SimpleGrid columns={[1]} gap="8">
              <List>
                {list.map((el, index) => {
                  return (
                    <ListItem key={index}>
                      <ListIcon as={CheckCircleIcon} color="teal.300" />
                      {el}
                    </ListItem>
                  );
                })}
              </List>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ListFeatures;
