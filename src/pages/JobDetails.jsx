import { useParams } from "react-router-dom";
import { Container, Box, Text, VStack } from "@chakra-ui/react";
import { useJob } from "../integrations/supabase/index.js";

const JobDetails = () => {
  const { id } = useParams();
  const { data: job, isLoading, isError } = useJob(id);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError || !job) {
    return <Text>Job not found</Text>;
  }

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="3xl" fontWeight="bold">{job.jobs_title}</Text>
        <Text fontSize="xl" color="gray.500">{job.job_area}</Text>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Text>{job.job_type}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default JobDetails;