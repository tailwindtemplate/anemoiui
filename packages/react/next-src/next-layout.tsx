import { Layout, Header, Button } from "../src";
import React, { PropsWithChildren } from "react";
import { headerMenu } from "../const";
import { NextSidebar } from "./next-sidebar";

export const NextLayout = ({ children }: PropsWithChildren<any>) => {
  return (
    <Layout className="h-screen bg-gray-100 flex flex-col overflow-hidden">
      <Header mainNavigation={headerMenu}>
        <Button title="Sign In" className="bg-transparent text-primary-800" />
        <Button
          title="Sign Up"
          type="primary"
          className="ml-2 bg-primary-800 text-white border-none !rounded-none"
        />
      </Header>
      <div className="flex h-full px-40">
        <NextSidebar />
        <div className="relative flex-1">
          <div className="flex-1 h-full overflow-auto">{children}</div>
        </div>
      </div>
    </Layout>
  );
};
