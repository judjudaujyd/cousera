import { SimpleGrid, Box } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    imageSrc: "https://via.placeholder.com/300x200",
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    imageSrc: "https://via.placeholder.com/300x200",
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    imageSrc: "https://via.placeholder.com/300x200",
  },
  {
    title: "Project Four",
    description: "A brief description of Project Four.",
    imageSrc: "https://via.placeholder.com/300x200",
  },
];

export default function ProjectsSection() {
  return (
    <Box id="projects-section" p={10} bg="gray.50">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
