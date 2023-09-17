import { CardContent, CardMedia, Typography, Grid, Card } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { manrope } from "@/constant/fonts";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PortofolioCardProps {
  title: string;
  desc: string;
  img: string;
  href: string;
}

function PortofolioCard({ title, desc, img, href }: PortofolioCardProps) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          sx={{
            flexGrow: 1,
            boxShadow: isHovered
              ? "0 0 30px rgba(128, 128, 128, 0.5)"
              : "0 0 30px rgba(128, 128, 128, 0.1)",
            borderRadius: "32px",
            backgroundColor: theme === "dark" ? "#212121" : "#F4F4F4",
            color: theme === "dark" ? "#ffffff" : "#000000",
            transition: "0.1s ease-in-out",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <CardMedia
            sx={{
              height: 200,
              objectFit: "cover",
              filter: "grayscale(100%)",
              transition: "0.3s ease",
              scale: isHovered ? "105%" : "100%",
              WebkitFilter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
            }}
            image={img}
            title={title}
          />
          <CardContent>
            <Typography
              className={`${manrope.className}`}
              gutterBottom
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                lineHeight: "1.2em",
                letterSpacing: "0px",
                userSelect: "none",
                paddingY: "8px",
                paddingLeft: "8px",
                paddingRight: "18px",
              }}
            >
              {title}
            </Typography>
            <Typography
              className={`${manrope.className}`}
              sx={{
                fontSize: "14px",
                lineHeight: "1.5em",
                letterSpacing: "0px",
                userSelect: "none",
                paddingLeft: "8px",
              }}
            >
              {desc}
            </Typography>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent
        style={{
          background: theme === "dark" ? "#212121" : "#FFFFFF",
          border: "none",
          borderRadius: "32px",
        }}
      >
        <DialogHeader
          style={{
            textAlign: "start",
          }}
        >
          <CardMedia
            sx={{
              height: "300px",
              objectFit: "cover",
              borderRadius: "24px",
              marginTop: "24px",
              marginBottom: "24px",
            }}
            image={img}
            title={title}
          />
          <Grid
            sx={{
              paddingX: "8px",
            }}
          >
            <DialogTitle
              style={{
                paddingBottom: "8px",
              }}
            >
              {title}
            </DialogTitle>
            <DialogDescription>{desc}</DialogDescription>
          </Grid>
        </DialogHeader>
        <DialogFooter>
          {href && (
            <Button
              style={{
                color: theme === "dark" ? "#000000" : "#ffffff",
                background: theme === "dark" ? "#ffffff" : "#000000",
                borderRadius: "99px",
              }}
              onClick={() => {
                window.location.href = href;
              }}
            >
              See Project
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default PortofolioCard;
