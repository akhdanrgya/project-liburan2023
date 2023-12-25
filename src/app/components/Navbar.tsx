"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar2 = () => {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <div className={header ? "fixed w-[100%] bg-[white] text-[black]" : "bg-[transparent]"}>
      <div className="header flex w-[80%] justify-between m-auto py-[15px]">
        <div className="logo">
          <h2>Gokilkacau</h2>
        </div>

        <div className="menu">
          <nav>
            <ul className="flex gap-[20px]">
              <li>
                <Link href="">About</Link>
              </li>
              <li>
                <Link href="">Dashboard</Link>
              </li>
              <li>
                <Link href="">Services</Link>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
