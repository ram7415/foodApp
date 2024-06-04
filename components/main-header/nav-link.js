"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "@/components/main-header/main-header.module.css";
import { Children } from "react";
const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <>
      <Link
        href={href}
        className={
          path.startsWith(href)
            ? `${classes.active} ${classes.link}`
            : classes.link
        }
      >
        {children}
      </Link>
    </>
  );
};
export default NavLink;
