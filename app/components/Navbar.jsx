"use client";

import { useAuth } from "@/context/AuthContext";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment} from "react";

const Navbar = () => {
  const { logOut, currentUser } = useAuth();
  return (
    <nav className="main-nav flex-center ">
      <Link href="/">
        <img src="/images/logo.png" className="h-4 lg:h-7" alt="Logo" />
      </Link>
      <Menu as="div" className="relative">
        <Menu.Button className="btn-profile">
          <Image
            className="rounded-full"
            width={32}
            height={32}
            src={currentUser?.photoURL || "/images/default-slate.png"}
            alt="user"
          />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
      
          <Menu.Items className="main-nav-menu">
          {!currentUser && (
            <>
                <Menu.Item>
                  {({ active }) => (
                    <Link href='/login' className={`${active && "bg-gray-100"} main-nav-link`}>
                      Login
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href='/register' className={`${active && "bg-gray-100"} main-nav-link`}>
                      Register
                    </Link>
                  )}
                </Menu.Item>
         
            </>
          )}

            {currentUser && (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/profile"
                      className={`${active && "bg-gray-100"} main-nav-link`}
                    >
                      Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <span
                      className={`${
                        active && "bg-gray-100"
                      } main-nav-link cursor-pointer `}
                      onClick={() => logOut()}
                    >
                      Log out
                    </span>
                  )}
                </Menu.Item>
              </>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
};

export default Navbar;
