import { useState } from "react";
import { Container, VStack, HStack, Button, Box, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useJobs, useDeleteJob, useSupabaseAuth } from "../integrations/supabase/index.js"; // Import the useJobs, useDeleteJob, and useSupabaseAuth hooks



const Index = () => {
  const [filter, setFilter] = useState("All");

  const { session } = useSupabaseAuth(); // Get the current session
  const { data: jobList, isLoading, isError } = useJobs();
  const deleteJob = useDeleteJob();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error loading jobs</Text>;
  }

  const filteredJobs = filter === "All" ? jobList : jobList.filter(job => job.job_area === filter);

  const handleDelete = (id) => {
    deleteJob.mutate(id);
  };

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
            <Box key={job.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Link to={`/job/${job.id}`}>
                <Text fontSize="xl" fontWeight="bold">{job.jobs_title}</Text>
                <Text mt={2}>{job.job_area}</Text>
              </Link>
              {session && (
                <Button colorScheme="red" mt={4} onClick={() => handleDelete(job.id)}>Delete</Button>
              )}
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;