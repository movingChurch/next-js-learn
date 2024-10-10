"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "(current)" : ""}
        </li>
        <li>
          <Link href="/go-home">Go Home</Link> {path === "/go-home" ? "(current)" : ""}
        </li>
      </ul>
    </nav>
  );
}
