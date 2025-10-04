import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer className="text-center text-foreground text-sm py-2">
        © 2025 MAC . All rights reserved.
      </footer>
    </div>
  );
};

export default CommonLayout;
