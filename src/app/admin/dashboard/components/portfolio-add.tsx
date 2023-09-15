"use client";

import { Button } from "@/components/ui/button";
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
import { apiURI } from "@/constant/api";
import { toBase64 } from "@/utils/useBase64";
import { ChangeEvent, useState } from "react";

export async function addPortofolio(
  title: string | undefined,
  content: string | undefined,
  img: any | undefined,
  href: string | undefined
) {
  fetch(`${apiURI}/portfolios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        title: title,
        content: content,
        img: img,
        href: href,
      },
    }),
  }).then((response) => {
    if (response.ok) {
      window.location.reload();
    }
  });
}

export function PortfolioAdd() {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [content, setContent] = useState<string | undefined>(undefined);
  const [href, setHref] = useState<string | undefined>(undefined);
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
        <Button variant="default">Add Portfolio</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Portofolio</DialogTitle>
          <DialogDescription>
            Add your portofolio here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
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
              await addPortofolio(title, content, tempImg, href);
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
