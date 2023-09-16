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
import { apiURI } from "@/constant/api";

export async function deleteWork(id: number) {
  fetch(`${apiURI}/works`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  }).then((response) => {
    if (response.ok) {
      window.location.reload();
    }
  });
}

export function WorkDelete({ item }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          style={{
            marginRight: "8px",
          }}
        >
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Work</DialogTitle>
          <DialogDescription>
            Are you sure to delete {item.instance} data from server? Click
            confirm when yes.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="submit"
            onClick={async () => {
              await deleteWork(item.id);
            }}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
