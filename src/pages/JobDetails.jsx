import { useParams } from "react-router-dom";
import { Container, Box, Text, VStack } from "@chakra-ui/react";

const jobList = [
  { id: 1, title: "Product Manager", category: "Product", description: "Manage the product lifecycle from ideation to launch." },
  { id: 2, title: "UX Designer", category: "Design", description: "Design user interfaces and improve user experience." },
  { id: 3, title: "Frontend Engineer", category: "Engineering", description: "Develop and maintain the front-end of web applications." },
  { id: 4, title: "Backend Engineer", category: "Engineering", description: "Build and maintain the server-side logic and databases." },
  { id: 5, title: "Product Designer", category: "Design", description: "Create and design product interfaces and experiences." },
];

const JobDetails = () => {
  const { id } = useParams();
  const job = jobList.find(job => job.id === parseInt(id));

  if (!job) {
    return <Text>Job not found</Text>;
  }

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="3xl" fontWeight="bold">{job.title}</Text>
        <Text fontSize="xl" color="gray.500">{job.category}</Text>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Text>{job.description}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default JobDetails;