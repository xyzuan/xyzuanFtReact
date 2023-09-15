"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardMedia, Grid } from "@mui/material";
import { PortfolioDelete } from "./portfolio-delete";
import { PortfolioUpdate } from "./portfolio-update";

export function PortfolioCard({ item }: any) {
  return (
    <Card>
      <CardMedia
        sx={{
          height: 200,
          objectFit: "cover",
          transition: "0.3s ease",
        }}
        image={item.img}
        title={item.title}
      />
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">{item.content}</p>
      </CardContent>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "18px",
        }}
      >
        <PortfolioDelete item={item} />
        <PortfolioUpdate item={item} />
      </Grid>
    </Card>
  );
}
