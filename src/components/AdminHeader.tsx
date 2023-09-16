"use client";

import { manrope } from "@/constant/fonts";
import { UserData } from "@/types/User";
import { Card, Link, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import React, { useState } from "react";

function AdminHeader() {
  const { data: session } = useSession();
  const sessionData: UserData = JSON.parse(JSON.stringify(session));

  const { theme } = useTheme();

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
        Hi, {sessionData.user.name}
      </Typography>

      <Link href="/admin/dashboard" color="inherit" underline="none">
        <Card
          sx={{
            color: theme === "dark" ? "white" : "black",
            backgroundColor: theme === "dark" ? "black" : "white",
            padding: "4px",
            paddingX: "18px",
            borderRadius: "99px",
            boxShadow: "none",
          }}
        >
          <Typography
            className={`${manrope.className}`}
            sx={{
              fontWeight: "medium",
              fontSize: "14px",
              userSelect: "none",
            }}
          >
            Dashboard
          </Typography>
        </Card>
      </Link>
    </Card>
  );
}

export default AdminHeader;
