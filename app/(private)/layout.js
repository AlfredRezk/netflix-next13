"use client"
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PrivateLayout = ({children}) => {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) {
      router.push("/login");
    }
  }, [currentUser]);
  return <section>{children}</section>;
};

export default PrivateLayout;
