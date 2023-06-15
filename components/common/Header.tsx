import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface HeaderProps {
  defaultHeader: boolean;
  color: string;
  position: string;
}

interface MenuItem {
  name: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { name: "Artworks", link: "/artworks" },
  { name: "Exhibitions", link: "/exhibitions" },
  { name: "About Us", link: "/#about" },
  { name: "Contact Us", link: "/contact" },
];

export default function Header({
  defaultHeader,
  color,
  position,
}: HeaderProps) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [currentPath, setCurrentPath] = useState("");

   useEffect(() => {
     setCurrentPath(router.asPath);
   }, [router.asPath]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("menu-open");
  };

  const headerClass = defaultHeader ? "top-0 bg-black" : "top-5";
  const menuColorClass = defaultHeader ? "text-white/60" : "text-white/80";
  const customTextColor = color === "dark" ? "text-black" : menuColorClass;
  const activeColor = color === "dark" ? "text-black underline" : "text-white underline";

  return (
    <>
      <header
        className={headerClass + " " + position + " top-0 left-0 z-20 w-full"}
      >
        <div className="max-w-6xl 2xl:max-w-[1400px] px-5 mx-auto w-full flex justify-between h-[48px] items-center">
          <div className="w-[140px] pt-2 lg:pt-0">
            <Link href="/">
              <Image
                src={
                  color === "dark"
                    ? "/logo-espacio-manila-dark.svg"
                    : "/logo-espacio-manila.svg"
                }
                alt="espacio manila"
                height="34"
                width="170"
              />
            </Link>
          </div>
          <Icon
            icon="clarity:menu-line"
            className={customTextColor + " w-7 h-7 lg:hidden"}
            onClick={toggleMenu}
          />
          <nav className={customTextColor + " hidden lg:inline-block"}>
            <ul className="gap-2 text-base lg:flex">
              {menuItems.map((menu) => (
                <li
                  key={menu.name}
                  className={`${currentPath === menu.link ? activeColor : ""} underline-offset-8	decoration-2`}
                >
                  <Link
                    href={menu.link}
                    className="px-3 py-2 duration-300 rounded hover:underline "
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 z-30 w-full h-full bg-white lg:hidden">
          <div className="flex justify-end p-4">
            <Icon
              icon="iconamoon:close-light"
              className="w-8 h-8"
              onClick={toggleMenu}
            />
          </div>
          <nav className="flex flex-col text-base">
            <ul>
              <li onClick={toggleMenu}>
                <Link
                  href="/"
                  className={`${
                    router.pathname === "/"
                      ? "underline text-black"
                      : "text-grayText font-normal"
                  } text-3xl p-5 border-y  border-[#f3f3f3] block`}
                >
                  Home
                </Link>
              </li>
              {menuItems.map((menu) => (
                <li key={menu.name} onClick={toggleMenu}>
                  <Link
                    href={menu.link}
                    className={`${
                      router.pathname === menu.link
                        ? "underline text-black"
                        : "text-grayText font-normal"
                    } text-3xl p-5 border-y  border-[#f3f3f3] block`}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
