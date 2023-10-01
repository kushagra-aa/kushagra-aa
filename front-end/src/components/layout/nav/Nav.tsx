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
  link: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Home",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Portfolio",
    link: "/portfolio",
    icon: <FolderOpenIcon />,
  },
  {
    title: "Work Info",
    link: "/work",
    icon: <CodeIcon />,
  },
  {
    title: "Biography",
    link: "/biography",
    icon: <UserIcon />,
  },
  {
    title: "Contact Me",
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
              <Link href={item.link}>
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
