import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { manrope } from "@/constant/fonts";
import { useTheme } from "next-themes";
import { Education } from "@prisma/client";

function EducationTime({ id, instance, address, date }: Education) {
  const { theme } = useTheme();

  return (
    <Stack
      spacing={0}
      sx={{
        paddingLeft: "18px",
      }}
    >
      <ol
        className="relative border-l"
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
                paddingLeft: "16px",
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
                {instance}
              </Typography>
              <Typography
                className={`${manrope.className}`}
                sx={{
                  fontWeight: "400",
                  fontSize: "14px",
                  userSelect: "none",
                }}
              >
                {date} • {address}
              </Typography>
            </div>
          </Box>
        </li>
      </ol>
    </Stack>
  );
}

export default EducationTime;
