import { Container, Typography } from "@mui/material";
import React from "react";
import EmailForm from "./components/EmailForm";

function ContactSection() {
  return (
    <Container
      id="contact"
      sx={{
        padding: "32px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Laviossa",
          fontSize: "42px",
        }}
      >
        Lets Talk
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "100",
          fontFamily: "Roboto Flex, sans-serif",
        }}
      >
        If want to meet up for work, contact me directly or fill out the form
        and i will get back to you soon.
      </Typography>
      <EmailForm />
    </Container>
  );
}

export default ContactSection;
