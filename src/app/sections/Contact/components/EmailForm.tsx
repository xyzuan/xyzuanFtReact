"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Grid } from "@mui/material";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const EmailForm: React.FC = () => {
  const { control, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    window.location.href = `mailto:xyzuannihboss@gmail.com?subject=${data.name}-${data.email}&body=${data.message}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Your Name"
                variant="filled"
                fullWidth
                required
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true, pattern: /^\S+@\S+$/i }}
            render={({ field }) => (
              <TextField
                label="Your Email"
                variant="filled"
                fullWidth
                required
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Your Message"
                multiline
                rows={4}
                variant="filled"
                fullWidth
                required
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#666666",
            }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EmailForm;
