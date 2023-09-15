"use client";

import { manrope } from "@/constant/fonts";
import { UserData } from "@/types/User";
import { Card, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import React, { useState } from "react";

function AdminHeader() {
  const { data: session } = useSession();
  const sessionData: UserData = JSON.parse(JSON.stringify(session));

  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    signOut();
  };

  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: theme === "dark" ? "white" : "black",
        alignItems: "center",
        borderRadius: "24px",
        color: theme === "dark" ? "dark" : "white",
        padding: "24px",
        marginTop: "18px",
        marginX: "18px",
      }}
    >
      <Typography
        className={`${manrope.className}`}
        sx={{
          flexGrow: "1",
        }}
      >
        Logged as admin, {sessionData.user.name}
      </Typography>
      <Card
        sx={{
          color: theme === "dark" ? "white" : "black",
          backgroundColor: theme === "dark" ? "black" : "white",
          padding: "4px",
          paddingX: "18px",
          borderRadius: "99px",
          boxShadow: isHovered ? "0 0 30px rgba(128, 128, 128, 0.5)" : "none",
        }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Typography
          className={`${manrope.className}`}
          sx={{
            fontWeight: "medium",
            userSelect: "none",
          }}
        >
          Sign Out
        </Typography>
      </Card>
    </Card>
  );
}

export default AdminHeader;
