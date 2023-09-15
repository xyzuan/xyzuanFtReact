"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toBase64 } from "@/utils/useBase64";
import { CardMedia } from "@mui/material";
import { ChangeEvent, useState } from "react";

export async function updatePortofolio(
  id: number,
  title: string,
  content: string,
  img: any,
  href: string
) {
  fetch(`http://localhost:3000/api/portfolios`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      data: {
        title: title,
        content: content,
        img: img,
        href: href,
      },
    }),
  });
}

export function PortfolioCard({ item }: any) {
  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);
  const [href, setHref] = useState(item.href);
  let tempImg: any;

  const generateBlob = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newFiles = Array.from(files);
      newFiles.forEach(async (file) => {
        if (file.size < 1024 * 10024 && file.type.startsWith("image/")) {
          tempImg = await toBase64(file as File);
        }
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
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
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Portofolio</DialogTitle>
          <DialogDescription>
            Make changes to your portofolio here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="desc" className="text-right">
              Summary
            </Label>
            <Input
              id="desc"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="desc" className="text-right">
              Link
            </Label>
            <Input
              id="href"
              value={href}
              onChange={(e) => setHref(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="picture" className="text-right">
              Picture
            </Label>
            <Input
              type="file"
              accept="image/*"
              className="col-span-3"
              onChange={generateBlob}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={async () => {
              await updatePortofolio(item.id, title, content, tempImg, href);
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
