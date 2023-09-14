import { Container, Grid } from "@mui/material";
import Image from "next/image";
import { useTheme } from "next-themes";

function Preloader() {
  const { theme } = useTheme();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Grid>
        <Image
          height="200"
          width="200"
          alt="xyzuan"
          src={
            theme === "dark"
              ? "/assets/preloader.svg"
              : "/assets/preloader-dark.svg"
          }
          style={{
            width: "auto",
          }}
        />
      </Grid>
    </Container>
  );
}

export default Preloader;
