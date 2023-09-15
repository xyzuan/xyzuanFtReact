"use client";

import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  if (status === "authenticated") {
    window.location.href = "/admin/dashboard";
  }
}

export default page;
