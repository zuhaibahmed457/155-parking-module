import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "What is DMKJ Parking?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What happens after I book a space?",
    answer: "Your booking will be confirmed immediately after payment.",
  },
  {
    question: "Will the parking space be available when I arrive?",
    answer: "Yes, the space will be reserved for you at the selected time.",
  },
  {
    question: "How do I cancel a booking?",
    answer: "You can cancel through your account under 'My Bookings'.",
  },
  {
    question:
      "How do I submit my 30-days notice to end my monthly booking subscription?",
    answer:
      "Submit a 30-day notice in your account settings under 'Subscription'.",
  },
  {
    question: "When do I get paid my earnings?",
    answer: "Earnings are processed and paid at the end of each month.",
  },
];

const FAQ = () => {
  return (
    <Stack mt={4}>
      <Typography variant="body2" color="primary" fontWeight="bold">
        WE'RE HERE TO HELP
      </Typography>
      <Typography my={0.7} variant="h4" fontWeight="bold">
        Have questions?
      </Typography>
      <Box
        sx={{
          bgcolor: "primary.main",
          width: 120,
          p: "2px",
          borderRadius: 8,
          mb: 3,
          mt: 2.5,
        }}
      />
      {faqData.map((item, index) => (
        <Accordion
          key={index}
          elevation={0.2}
          sx={{
            mb: 1,
            borderRadius: 2,
            bgcolor: "white",
            p: 1,
            background:
              "linear-gradient(58deg,rgba(255, 255, 255, 1) 1%, rgba(45, 201, 138, 0.24) 100%)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            // sx={{ bgcolor: "red" }}
          >
            <Typography fontWeight={500}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
};

export default FAQ;
