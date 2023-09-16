"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/admin/dashboard");
  }
}

export default page;
