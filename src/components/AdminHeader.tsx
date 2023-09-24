"use client";

import { manrope } from "@/constant/fonts";
import { UserData } from "@/types/User";
import { Card, Container, Link, Typography } from "@mui/material";
import { LayoutDashboardIcon, LogOutIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import React, { useState } from "react";

function AdminHeader() {
  const { data: session } = useSession();
  const sessionData: UserData = JSON.parse(JSON.stringify(session));

  const { theme } = useTheme();

  return (
    <Container>
      <Card
        sx={{
          display: "flex",
          backgroundColor: theme === "dark" ? "white" : "black",
          alignItems: "center",
          borderRadius: "24px",
          color: theme === "dark" ? "dark" : "white",
          padding: "24px",
          marginTop: "18px",
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

        <Link href="/admin/dashboard">
          <Card
            sx={{
              color: theme === "dark" ? "white" : "black",
              backgroundColor: theme === "dark" ? "black" : "white",
              padding: "8px",
              borderRadius: "99px",
              boxShadow: "none",
            }}
          >
            <LayoutDashboardIcon />
          </Card>
        </Link>
        <Link href="">
          <Card
            sx={{
              color: theme === "dark" ? "white" : "black",
              backgroundColor: theme === "dark" ? "black" : "white",
              padding: "8px",
              borderRadius: "99px",
              boxShadow: "none",
              marginLeft: "8px",
            }}
          >
            <LogOutIcon
              onClick={() =>
                signOut({
                  callbackUrl: "/",
                })
              }
            />
          </Card>
        </Link>
      </Card>
    </Container>
  );
}

export default AdminHeader;
