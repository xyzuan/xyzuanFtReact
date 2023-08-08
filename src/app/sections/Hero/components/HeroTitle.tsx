import { Container, Grid, Typography } from "@mui/material";

const HeroTitle = () => {
  const headings = [
    "c/c++",
    "flutter",
    "java",
    "ui/ux",
    "js",
    "next.js",
    "design",
    "android",
  ];

  return (
    <Container disableGutters>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        sx={{
          color: "#A9A9A9",
          paddingRight: "18px",
          overflow: "hidden",
        }}
      >
        {headings.map((heading, index) => (
          <Typography
            key={heading}
            sx={{
              fontSize: "64px",
              fontFamily: "Laviossa",
              whiteSpace: "nowrap",
              paddingLeft: index !== headings.length - 1 ? "20px" : 0, // Add right padding except for the last heading
              transition: "color 0.3s ease",
              "&:hover": {
                color: "white",
              },
            }}
          >
            {heading}
          </Typography>
        ))}
      </Grid>
      <Typography
        sx={{
          padding: "36px",
          paddingRight: "50px",
          fontSize: "12px",
          fontWeight: "100",
          textAlign: "left",
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
