"use client";

import { Card } from "@/components/ui/card";
import { Grid } from "@mui/material";
import { WorkDelete } from "./work-delete";
import { WorkUpdate } from "./work-update";

export function WorkCard({ item }: any) {
  return (
    <Card
      style={{
        padding: "18px",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img height="60" width="60" alt="logo" src={item.logo} />
        <div
          style={{
            paddingLeft: "18px",
          }}
        >
          <p className="text-sm font-medium">{item.jobTitle}</p>
          <div>
            <p className="text-xs text-muted-foreground">{item.instance}</p>
            <p className="text-xs text-muted-foreground">{item.address}</p>
            <p className="text-xs text-muted-foreground">{item.date}</p>
          </div>
        </div>

        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "18px",
          }}
        >
          <WorkDelete item={item} />
          <WorkUpdate item={item} />
        </Grid>
      </Grid>
    </Card>
  );
}
