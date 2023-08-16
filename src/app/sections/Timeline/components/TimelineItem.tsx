import React from "react";
import { Paper, Typography, Box, Stack, Grid } from "@mui/material";

interface TimelineEvent {
  title: string;
  summary: string;
}

interface TimelineComponentProps {
  events: TimelineEvent[];
}

const TimelineComponent: React.FC<TimelineComponentProps> = ({ events }) => {
  return (
    <Stack spacing={2}>
      {events.map((event, index) => (
        <Grid key={index}>
          <Box display="flex" p={2} alignItems="center">
            <div
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#D2D2D2",
                borderRadius: "50%",
                marginRight: "24px",
              }}
            ></div>
            <div>
              <Typography
                sx={{
                  fontWeight: "medium",
                  fontSize: "16",
                  fontFamily: "Roboto Flex, sans-serif",
                  userSelect: "none",
                }}
              >
                {event.title}
              </Typography>
              <Typography
                sx={{
                  color: "#DCDCDC",
                  fontWeight: "100",
                  fontSize: "12",
                  fontFamily: "Roboto Flex, sans-serif",
                  userSelect: "none",
                }}
              >
                {event.summary}
              </Typography>
            </div>
          </Box>
        </Grid>
      ))}
    </Stack>
  );
};

export default TimelineComponent;
