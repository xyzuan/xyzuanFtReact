import { Box, Card, Grid, Typography } from "@mui/material";
import Image from "next/image";

const HeroPic = ({}) => {
  return (
    <Card
      sx={{
        borderRadius: "0 999px 999px 0px",
        maxHeight: "280px",
        minHeight: "auto",
        overflow: "hidden",
        backgroundColor: "#CDCBCB",
        backgroundImage: `url("/assets/HeroCardBG.png")`,
      }}
    >
      <Grid>
        <Typography
          sx={{
            float: "left",
            fontSize: "48px",
            fontWeight: "bold",
            lineHeight: "2.5rem",
            color: "#666666",
            paddingTop: "24px",
            paddingLeft: "24px",
          }}
        >
          FRO
          <br />
          NTE
          <br />
          ND.
        </Typography>
        <Image
          width="220"
          height="0"
          src="/assets/HeroMe.png"
          alt=""
          style={{
            float: "right",
          }}
        />
      </Grid>
    </Card>
  );
};

export default HeroPic;
