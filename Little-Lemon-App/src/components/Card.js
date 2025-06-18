import { HStack, VStack, Image, Heading, Text, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Card({ title, description, imageSrc }) {
  return (
    <VStack
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      spacing={4}
      align="start"
      bg="white"
      boxShadow="md"
      p={4}
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
      <HStack spacing={2}>
        <Link href="#" color="blue.500" fontWeight="bold">
          See more
        </Link>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
}
