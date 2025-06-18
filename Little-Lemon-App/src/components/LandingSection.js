import {
  Avatar,
  Heading,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";

const greeting = "Hello, I'm a React Developer!";
const bio1 = "I build beautiful and scalable front-end applications.";
const bio2 = "Passionate about performance, accessibility, and user experience.";

export default function LandingSection() {
  return (
    <Box
      id="landing-section"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.800"
      color="white"
    >
      <VStack spacing={4}>
        <Avatar size="2xl" src="https://i.pravatar.cc/150?img=7" />
        <Heading size="xl">{greeting}</Heading>
        <Text fontSize="lg">{bio1}</Text>
        <Text fontSize="lg">{bio2}</Text>
      </VStack>
    </Box>
  );
}
