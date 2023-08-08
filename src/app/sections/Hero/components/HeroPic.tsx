import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const HeroPic = ({}) => {
  return (
    <>
      <Card
        sx={{
          borderRadius: "0 999px 999px 0px",
          height: "400px",
          overflow: "hidden",
          position: "relative",
          backgroundColor: "#CDCBCB",
          backgroundImage: `url("/assets/HeroCardBG.png")`,
          "@media (min-width: 1024px)": {
            height: "auto",
            minWidth: "410px",
            maxWidth: "420px",
            maxHeight: "45vh",
          },
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
              position: "absolute",
              width: "35vh",
              bottom: 0,
              right: 0,
            }}
          />
        </Grid>
      </Card>
    </>
  );
};

export default HeroPic;
