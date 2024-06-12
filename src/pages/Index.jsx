import { useState } from "react";
import { Container, VStack, HStack, Button, Box, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const jobList = [
  { id: 1, title: "Product Manager", category: "Product" },
  { id: 2, title: "UX Designer", category: "Design" },
  { id: 3, title: "Frontend Engineer", category: "Engineering" },
  { id: 4, title: "Backend Engineer", category: "Engineering" },
  { id: 5, title: "Product Designer", category: "Design" },
];

const Index = () => {
  const [filter, setFilter] = useState("All");

  const filteredJobs = filter === "All" ? jobList : jobList.filter(job => job.category === filter);

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">Remote Tech Job Board</Text>
        <HStack spacing={4} justify="center">
          <Button onClick={() => setFilter("All")} colorScheme={filter === "All" ? "blue" : "gray"}>All</Button>
          <Button onClick={() => setFilter("Product")} colorScheme={filter === "Product" ? "blue" : "gray"}>Product</Button>
          <Button onClick={() => setFilter("Design")} colorScheme={filter === "Design" ? "blue" : "gray"}>Design</Button>
          <Button onClick={() => setFilter("Engineering")} colorScheme={filter === "Engineering" ? "blue" : "gray"}>Engineering</Button>
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {filteredJobs.map(job => (
            <Link to={`/job/${job.id}`} key={job.id}> {/* Wrap job box with Link */}
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
                <Text fontSize="xl" fontWeight="bold">{job.title}</Text>
                <Text mt={2}>{job.category}</Text>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;