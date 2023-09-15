import { getServerSession } from "next-auth";
import HomePage from "./home/page";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return <HomePage />;
}
