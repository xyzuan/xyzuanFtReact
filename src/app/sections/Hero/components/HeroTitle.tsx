import { Grid, Typography } from "@mui/material";

const HeroTitle = ({}) => {
  return (
    <>
      <Grid
        sx={{
          color: "#A9A9A9",
          textAlign: "right",
          paddingRight: "18px",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            fontSize: "64px",
            fontFamily: "Laviossa",
            whiteSpace: "nowrap",
          }}
        >
          c/x++ flutter
        </Typography>
        <Typography
          sx={{
            fontSize: "64px",
            fontFamily: "Laviossa",
            whiteSpace: "nowrap",
          }}
        >
          java ui/ux
        </Typography>
        <Typography
          sx={{
            fontSize: "64px",
            fontFamily: "Laviossa",
            whiteSpace: "nowrap",
          }}
        >
          js next.js
        </Typography>
        <Typography
          sx={{
            fontSize: "64px",
            fontFamily: "Laviossa",
            whiteSpace: "nowrap",
          }}
        >
          design android
        </Typography>
      </Grid>
      <Typography
        sx={{
          padding: "36px",
          paddingRight: "50px",
          fontSize: "12px",
          fontWeight: "100",
        }}
      >
        Words aren’t gonna cut it. Let’s scroll and have a peep into my world,
        shall we?
      </Typography>
    </>
  );
};

export default HeroTitle;
