import Link from "next/link";
import React from 'react';
import { IoPersonOutline, IoHomeOutline, IoMailOutline, IoHammerOutline, IoLibraryOutline } from 'react-icons/io5';

const Nav = () => {
    const NavLink = ({ href, children }) => (
        <Link href={href} passHref>
            {React.cloneElement(children, {})}
        </Link>
    );

    return (
        <aside className="h-full w-16 flex flex-col items-center justify-center fixed right-0 text-white">
            {/* Iconos en el panel derecho */}
            <NavLink href="/">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white">
                    <IoHomeOutline size={24} />
                </div>
            </NavLink>

            <NavLink href="/about">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white">
                    <IoPersonOutline size={24} />
                </div>
            </NavLink>

            <NavLink href="/contact">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white">
                    <IoMailOutline size={24} />
                </div>
            </NavLink>

            <NavLink href="/projects">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white">
                    <IoHammerOutline size={24} />
                </div>
            </NavLink>

            <NavLink href="/articles">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white">
                    <IoLibraryOutline size={24} />
                </div>
            </NavLink>
        </aside>
    );
}

export default Nav;
