import { Grid, Typography } from "@mui/material";

const HeroTitle = ({}) => {
  return (
    <Grid
      sx={{
        color: "#A9A9A9",
        textAlign: "right",
        paddingRight: "18px",
        overflow: "hidden",
      }}
    >
      <Typography sx={{ fontSize: "64px", fontFamily: "Laviossa" }}>
        ui/ux
      </Typography>
      <Typography sx={{ fontSize: "64px", fontFamily: "Laviossa" }}>
        androiddev
      </Typography>
      <Typography sx={{ fontSize: "64px", fontFamily: "Laviossa" }}>
        mobile
      </Typography>
    </Grid>
  );
};

export default HeroTitle;
