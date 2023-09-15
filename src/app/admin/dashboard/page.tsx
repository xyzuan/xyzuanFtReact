"use client";

import { MainNav } from "./components/main-nav";
import { UserNav } from "./components/user-nav";
import { Search } from "./components/search";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signIn, useSession } from "next-auth/react";
import { useMemo, useState } from "react";
import { PortfolioItem } from "@/types/Portofolio";
import { PortfolioCard } from "./components/portfolio-card";
import { apiURI } from "@/constant/api";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useMemo(() => {
    fetch(`${apiURI}/portfolios`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const extractedPortfolios = data.portfolios;
        setPortfolio(extractedPortfolios);
      });
  }, []);

  if (status === "authenticated") {
    return (
      <>
        <div className="flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <MainNav className="mx-6" />
              <div className="ml-auto flex items-center space-x-4">
                <Search />
                <UserNav
                  name={session?.user?.name}
                  email={session?.user?.email}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>
            <Tabs defaultValue="portfolios" className="space-y-4">
              <TabsList>
                <TabsTrigger value="portfolios">Portofolios</TabsTrigger>
                <TabsTrigger value="works">Works</TabsTrigger>
              </TabsList>
              <TabsContent value="portfolios" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {portfolio.map((item) => (
                    <PortfolioCard key={item.id} item={item} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </>
    );
  }
}
