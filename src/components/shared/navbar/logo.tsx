"use client";

import myLogoLight from "@/assets/mylogo-light.png";
import myLogoDark from "@/assets/mylogo-dark.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import React from "react";

export default function Logo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <Image
        src={theme === "dark" ? myLogoDark : myLogoLight}
        alt="mylogo"
        height={100}
        width={100}
      />
    </>
  );
}
