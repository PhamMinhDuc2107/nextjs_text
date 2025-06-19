"use client"
// app/dashboard/layout.tsx

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("token")
    if(!token) {
      router.push("/login");
    }
  },[])
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
