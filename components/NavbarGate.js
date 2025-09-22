"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

// Any path that should HIDE the navbar.
// Supports exact paths and whole subtrees via RegExp.
const HIDE_NAVBAR = [
    /^\/articles\/.+$/, // hide on everything under articles but not articles
    // add more patterns here if needed
];

export default function NavbarGate() {
    const pathname = usePathname();
    const shouldHide = HIDE_NAVBAR.some((rx) => rx.test(pathname));
    if (shouldHide) return null;
    return <Navbar />;
}




{/*

To hide only a single page (not its children), drop the (?:\/.*)?:

/^\/about$/            // hides ONLY on /about

*/}