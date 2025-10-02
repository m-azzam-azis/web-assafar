import NonMainPageNavbar from "@/components/layout/NonMainPageNavbar";
import React from "react";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col ">
      <NonMainPageNavbar />
      <main className="flex-grow pt-20">{children}</main>
    </div>
  );
};

export default BlogLayout;
