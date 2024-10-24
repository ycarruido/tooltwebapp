"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Brand from '../Brand/Brand';

const Navbar = () => {
    const [state, setState] = useState(false);
    const [showServicesMenu, setShowServicesMenu] = useState(false);
    const [showCompanyMenu, setShowCompanyMenu] = useState(false);
    const pathname = usePathname(); // Usamos usePathname para observar cambios de ruta
    const navigation = [
        { title: "Servicios", path: "#services900" },
        { title: "Empresa", path: "#about901" },
        { title: "Blog", path: "/portfolio" },
        { title: "FAQ", path: "/preguntas" }
    ];

    const smoothScroll = (e, path) => {
        e.preventDefault();
        if (path.startsWith('#')) {
            if (pathname === '/') {
                const element = document.querySelector(path);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.warn(`No se encontró el elemento con el selector: ${path}`);
                }
            } else {
                window.location.href = `/${path}`;
            }
        } else {
            window.location.href = path;
        }
    };

    useEffect(() => {
        const handleState = () => {
            document.body.classList.remove("overflow-hidden");
            setState(false);
        };
        handleState();
        return () => {
            handleState();
        };
    }, [pathname]);

    const handleNavMenu = () => {
        setState(!state);
        document.body.classList.toggle("overflow-hidden");
    };

    return (
        <header>
            <nav className={`bg-white border-b border-sky-300 w-full fixed top-0 left-0 z-10 md:text-sm shadow-md`}>
                <div className="custom-screen items-center mx-auto md:flex">
                    <div className="flex items-center justify-between py-2">
                        <Brand />
                        <div className="md:hidden">
                            <button role="button" aria-label="Open the menu" className="text-gray-900 hover:text-gray-700"
                                onClick={handleNavMenu}
                            >
                                {state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block ${state ? "" : "hidden"}`}>
                        <ul className="menu text-gray-900 text-lg justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:text-gray-900">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx} className="relative duration-150 hover:text-gray-500"
                                        onMouseEnter={() => {
                                            if (item.title === "Servicios") setShowServicesMenu(true);
                                            if (item.title === "Empresa") setShowCompanyMenu(true);
                                        }}
                                        onMouseLeave={() => {
                                            if (item.title === "Servicios") setShowServicesMenu(false);
                                            if (item.title === "Empresa") setShowCompanyMenu(false);
                                        }}
                                    >
                                        <Link
                                            href={item.path}
                                            className="block"
                                            scroll={false}
                                            onClick={(e) => smoothScroll(e, item.path)}
                                        >
                                            {item.title}
                                        </Link>
                                        {/* Submenú para Servicios */}
                                        {item.title === "Servicios" && showServicesMenu && (
                                            <div className="absolute left-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg z-10 transition-opacity duration-300 ease-in-out opacity-100 w-80"
                                                onMouseEnter={() => setShowServicesMenu(true)} // Mantener el submenú visible
                                                onMouseLeave={() => setShowServicesMenu(false)} // Ocultar el submenú al salir
                                            >
                                                <ul className="text-sky-600 p-2 font-light">
                                                    <li><Link href="/servicio1" className="block px-4 py-2 hover:bg-gray-100">Trabajo Final de Máster</Link></li>
                                                    <li><Link href="/servicio2" className="block px-4 py-2 hover:bg-gray-100">Trabajo Final de Grado</Link></li>
                                                    <li><Link href="/servicio3" className="block px-4 py-2 hover:bg-gray-100">Asesorías </Link></li>
                                                    <li><Link href="/servicio3" className="block px-4 py-2 hover:bg-gray-100">Guión de estudio </Link></li>
                                                    <li><Link href="/servicio3" className="block px-4 py-2 hover:bg-gray-100">Presentaciones </Link></li>
                                                    <li><Link href="/servicio3" className="block px-4 py-2 hover:bg-gray-100">Artículos Científicos </Link></li>
                                                    <li><Link href="/servicio3" className="block px-4 py-2 hover:bg-gray-100">CopyWriting </Link></li>
                                                    <li><Link href="/servicio3" className="block px-4 py-2 hover:bg-gray-100">Matemáticas </Link></li>
                                                </ul>
                                            </div>
                                        )}
                                        {/* Submenú para Empresa */}
                                        {item.title === "Empresa" && showCompanyMenu && (
                                            <div className="absolute left-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg z-10 transition-opacity duration-300 ease-in-out opacity-100 w-80"
                                                onMouseEnter={() => setShowCompanyMenu(true)} // Mantener el submenú visible
                                                onMouseLeave={() => setShowCompanyMenu(false)} // Ocultar el submenú al salir
                                            >
                                                <ul className="text-sky-600 p-2 font-light">
                                                    <li><Link href="/empresa1" className="block px-4 py-2 hover:bg-gray-100">Empresa 1</Link></li>
                                                    <li><Link href="/empresa2" className="block px-4 py-2 hover:bg-gray-100">Empresa 2</Link></li>
                                                    <li><Link href="/empresa3" className="block px-4 py-2 hover:bg-gray-100">Empresa 3</Link></li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ))
                            }
                            <Link
                                href="/contact"
                                className="menu block font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 md:inline-block px-4 py-2 rounded-lg text-center"
                            >
                                Contacto
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;