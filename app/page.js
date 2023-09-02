"use client"
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React from "react";

const page = () => {

  const { currentUser}= useAuth()

  return (
    <main className="bg-cover-image">
      <div className="overlay text-white flex flex-col justify-center items-center gap-3 text-center">
        <h1 className="text-5xl font-extrabold">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-2xl font-normal">Watch anywhere. Cancel anytime.</p>

        <Link href={currentUser? '/profile':'/register'} className="btn-danger max-w-[250px] text-center">
          Get Started
        </Link>
      </div>
    </main>
  );
};

export default page;
