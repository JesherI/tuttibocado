'use client';

import { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#024959]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-3">
                        <Image
                            src="/logo.jpeg"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <h1 className="text-white text-xl font-bold">Tutti Bocado</h1>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                href="/"
                                className="text-white hover:bg-[#03677a] px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                href="/menu"
                                className="text-white hover:bg-[#03677a] px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Menu
                            </Link>
                            <Link
                                href="/promos"
                                className="text-white hover:bg-[#03677a] px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Promos
                            </Link>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-[#03677a] inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#024959] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#024959] focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="text-white hover:bg-[#03677a] block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/menu"
                            className="text-white hover:bg-[#03677a] block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Menu
                        </Link>
                        <Link
                            href="/promos"
                            className="text-white hover:bg-[#03677a] block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Promos
                        </Link>
                    </div>
                </div>
            </Transition>
        </nav>
    );
};

export default Navbar;
