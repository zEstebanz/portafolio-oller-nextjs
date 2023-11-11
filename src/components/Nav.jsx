import Link from "next/link";
import React from 'react';
import { IoPersonOutline, IoHomeOutline, IoMailOutline, IoHammerOutline, IoAtCircleOutline } from 'react-icons/io5';

const Nav = () => {

    return (
        <aside className="buttonCustom h-full w-16 flex flex-col items-center justify-center fixed right-0 text-white">
            {/* Iconos en el panel derecho */}
            <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white">
                <Link href={'/'}>
                    <IoHomeOutline size={24} />
                </Link>
            </div>

            <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white">
                <Link href="/about">
                    <IoPersonOutline size={24} />
                </Link>
            </div>

            <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white">
                <Link href={'/contact'}>
                    <IoMailOutline size={24} />
                </Link>
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white">
                <Link href={'/projects'}>
                    <IoHammerOutline size={24} />
                </Link>
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white">
                <Link href={'/articles'}>
                    <IoAtCircleOutline size={24} />
                </Link>
            </div>
        </aside>

    );

}

export default Nav;
