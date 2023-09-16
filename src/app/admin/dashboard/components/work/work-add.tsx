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

export async function addWork(
  logo: string | undefined,
  jobTitle: string | undefined,
  instance: any | undefined,
  instanceLink: string | undefined,
  address: string | undefined,
  date: string | undefined
) {
  fetch(`${apiURI}/works`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        logo: logo,
        jobTitle: jobTitle,
        instance: instance,
        instanceLink: instanceLink,
        address: address,
        date: date,
      },
    }),
  }).then((response) => {
    if (response.ok) {
      window.location.reload();
    }
  });
}

export function WorkAdd() {
  const [jobTitle, setJobTitle] = useState<string | undefined>(undefined);
  const [instance, setInstance] = useState<string | undefined>(undefined);
  const [instanceLink, setInstanceLink] = useState<string | undefined>(
    undefined
  );
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<string | undefined>(undefined);
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
        <Button variant="default">Add Work</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Work</DialogTitle>
          <DialogDescription>
            Add your work here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="instance" className="text-right">
              Instance
            </Label>
            <Input
              id="instance"
              onChange={(e) => setInstance(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Job Title
            </Label>
            <Input
              id="title"
              onChange={(e) => setJobTitle(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="site" className="text-right">
              Instance Site
            </Label>
            <Input
              id="site"
              onChange={(e) => setInstanceLink(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              Address
            </Label>
            <Input
              id="address"
              onChange={(e) => setAddress(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <Input
              id="date"
              onChange={(e) => setDate(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="picture" className="text-right">
              Logo
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
              await addWork(
                tempImg,
                jobTitle,
                instance,
                instanceLink,
                address,
                date
              );
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
