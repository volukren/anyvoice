"use client";

import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "My voices",
    href: "/app",
  },
  {
    label: "History",
    href: "/app/history",
  },
  {
    label: "Billing",
    href: "/app/billing",
  },
  {
    label: "Settings",
    href: "/app/settings",
  },
];

export default function PrivateHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="flex justify-between items-center relative">
      <Link href="/app" className="font-bold text-xl lg:text-2xl">
        AnyVoice
      </Link>
      <div className="md:flex md:gap-4 md:items-center hidden">
        <div className="hidden md:flex md:items-center md:gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-bold py-2 px-3 rounded-md hover:bg-primary/5 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              if (confirm("Are you sure you want to sign out?")) {
                signOut();
              }
            }}
            className="font-bold py-2 px-3 rounded-md hover:bg-primary/5 hover:text-primary"
          >
            Sign out
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-[110%] left-0 w-full bg-gray-50 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-bold py-2 px-3 rounded-md hover:bg-primary/5 hover:text-primary border-b border-gray-100"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex justify-start">
              <button
                onClick={() => {
                  if (confirm("Are you sure you want to sign out?")) {
                    signOut();
                  }
                }}
                className="font-bold py-2 px-3 block w-full text-left rounded-md hover:bg-primary/5 hover:text-primary"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
