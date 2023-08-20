import { Container, Grid, Typography } from "@mui/material";
import HeadingItem from "./HeadingItem";
import { useTheme } from "next-themes";
import { darkTheme, lightTheme } from "@/app/style/themes";

const HeroTitle = () => {
  const { resolvedTheme } = useTheme();
  const headings: string[] = [
    "android",
    "flutter",
    "java",
    "ui/ux",
    "js",
    "next.js",
    "design",
    "express",
    "oop",
  ];

  return (
    <Container disableGutters>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        sx={{
          paddingRight: "8px",
          paddingTop: "18px",
          overflow: "hidden",
          transition: "0.3s ease-in-out",
        }}
      >
        {headings.map((heading, index) => (
          <Grid item key={heading}>
            <HeadingItem heading={heading} />
          </Grid>
        ))}
      </Grid>
      <Typography
        sx={{
          color: resolvedTheme === "dark" ? "#FFFFFF" : "#000000",
          padding: "36px",
          paddingRight: "50px",
          fontSize: "12px",
          fontWeight: "100",
          textAlign: "left",
          userSelect: "none",
          transition: "0.3s ease",
          fontFamily: "Roboto Flex, sans-serif",
          "@media (min-width: 1024px)": {
            textAlign: "right",
            paddingRight: "24px",
          },
        }}
      >
        Words aren’t gonna cut it. Let’s scroll and have a peep into my world,
        shall we?
      </Typography>
    </Container>
  );
};

export default HeroTitle;
