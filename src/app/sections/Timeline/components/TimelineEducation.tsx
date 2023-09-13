import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { manrope } from "@/app/constant/fonts";
import { useTheme } from "next-themes";

interface TimelineEvent {
  title: string;
  summary: string;
}

interface TimelineEducationProps {
  events: TimelineEvent[];
}

const TimelineEducation: React.FC<TimelineEducationProps> = ({ events }) => {
  const { theme } = useTheme();

  return (
    <Stack
      spacing={0}
      sx={{
        paddingTop: "18px",
        paddingLeft: "18px",
      }}
    >
      {events.map((event, index) => (
        <ol
          className="relative border-l"
          key={index}
          style={{
            borderColor:
              theme === "dark"
                ? "rgba(255, 255, 255, 0.7)"
                : "rgba(0, 0, 0, 0.2)",
          }}
        >
          <li>
            <span
              className="absolute w-3 h-3 rounded-full -left-4 mt-8 ml-[9.5px]"
              style={{
                backgroundColor: theme === "dark" ? "white" : "black",
              }}
            />
            <Box
              p={2}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  paddingLeft: "24px",
                }}
              >
                <Typography
                  className={`${manrope.className}`}
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    userSelect: "none",
                  }}
                >
                  {event.title}
                </Typography>
                <Typography
                  className={`${manrope.className}`}
                  sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                    userSelect: "none",
                  }}
                >
                  {event.summary}
                </Typography>
              </div>
            </Box>
          </li>
        </ol>
      ))}
    </Stack>
  );
};

export default TimelineEducation;
