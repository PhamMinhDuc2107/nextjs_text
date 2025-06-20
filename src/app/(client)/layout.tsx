"use client";
import "@/app/globals.css";
import Header from "@/components/Header/page";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [checkedAuth, setCheckedAuth] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/login");
    } else {
      setCheckedAuth(true);
    }
  }, []);

  return (
      <>
      {checkedAuth &&   (
        <>
          <Header></Header>
          {children}
        </>
      )}
      </>
  );
}
