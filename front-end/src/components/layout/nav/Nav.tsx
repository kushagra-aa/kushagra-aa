"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LogoFull } from "@/components/Logo";
import {
  CodeIcon,
  CommentIcon,
  FolderOpenIcon,
  HomeIcon,
  UserIcon,
} from "@/components/Icons";
import "./nav.css";

const NavItems: {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Home",
    description: "Home Page",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Portfolio",
    description: "Projects listing page",
    link: "/portfolio",
    icon: <FolderOpenIcon />,
  },
  {
    title: "Work Info",
    description: "Work related info, Skills-Experience",
    link: "/work",
    icon: <CodeIcon />,
  },
  {
    title: "Biography",
    description: "Personal information, More about me",
    link: "/biography",
    icon: <UserIcon />,
  },
  {
    title: "Contact Me",
    description: "Contact Form, social links",
    link: "/contact",
    icon: <CommentIcon />,
  },
];

function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="logo">
        <LogoFull />
      </div>
      <ul className="nav-items">
        {NavItems.map((item) => {
          const isActive =
            pathname === item.link ||
            (item.link !== "/" && pathname.startsWith(item.link));
          return (
            <li className={`nav-item ${isActive && "active"}`} key={item.title}>
              <Link title={item.description} href={item.link}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
