import { Container, Grid, Typography } from "@mui/material";
import HeadingItem from "./HeadingItem";
import { useTheme } from "next-themes";
import { manrope } from "@/constant/fonts";

const HeroTitle = () => {
  const { theme } = useTheme();
  const headings: string[] = [
    "android",
    "flutter",
    "kotlin",
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
        className={`${manrope.className}`}
        sx={{
          color: theme === "dark" ? "#FFFFFF" : "#000000",
          padding: "36px",
          paddingRight: "50px",
          fontSize: "12px",
          textAlign: "left",
          userSelect: "none",
          transition: "0.3s ease",
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
