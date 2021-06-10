import { Layout, Header, Button, Section } from '../src';
import { PropsWithChildren } from "react";
import { headerMenu } from "../const";
import { NextSidebar } from "./next-sidebar";

export const NextLayout = ({ children }: PropsWithChildren<any>) => {
  return (
      <div className="min-h-screen bg-gray-100">
          <Header mainNavigation={headerMenu}>
              <Button title="Sign In" className="bg-transparent text-primary-800" />
              <Button
                  title="Sign Up"
                  type="primary"
                  className="bg-primary-800 text-white border-none rounded-none"
              />
          </Header>
          <Section narrow className="w-full h-full flex">
              <NextSidebar />
              <div className="relative flex-1">
                  <div className="flex-1 h-full overflow-auto">{children}</div>
              </div>
      </Section>
    </div>
  );
};
