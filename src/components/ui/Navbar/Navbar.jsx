"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Brand from '../Brand/Brand';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Navbar = () => {
    const [state, setState] = useState(false);
    const [showServicesMenu, setShowServicesMenu] = useState(false);
    const [showCompanyMenu, setShowCompanyMenu] = useState(false);
    const servicesRef = useRef(null);
    const companyRef = useRef(null);
    const pathname = usePathname();
    const navigation = [
        { title: "Servicios", path: "#services900" },
        { title: "Empresa", path: "/about" },
        { title: "Blog", path: "/" },
        { title: "FAQ", path: "/faq" },
        { title: "Mis proyectos", path: "https://toolstesis.web.app/login" },
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
            setShowServicesMenu(false); // Ocultar el submenú de servicios
            setShowCompanyMenu(false); // Ocultar el submenú de empresa
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
            <div className="bg-[#0080c8] text-right text-white text-xs font-semibold px-4 py-1 fixed top-0 left-0 w-full z-30">
                <p><WhatsAppIcon/> +56 9 6738 7656</p>
            </div>
            <nav className={`bg-white border-b border-sky-300 w-full fixed top-8 left-0 z-20 md:text-sm shadow-md`}>
                <div className="custom-screen items-center mx-auto md:flex z-30"
                
                
                onClick={() => {
                    setShowCompanyMenu(false);
                    setShowServicesMenu(false);
                }}

                onMouseEnter={() => {
                    setShowCompanyMenu(false);
                    setShowServicesMenu(false);
                }}
                
                
                >
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
                    <div className={`inline-flex pb-3 mt-8 md:pb-0 md:mt-0 ml-auto justify-end md:block ${state ? "" : "hidden"}`}
                    
                    
                    
                    
                    
                    >
                        <ul className="menu text-gray-900 text-lg justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:text-gray-900">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx} className="relative duration-150 hover:text-gray-500"
                                        onMouseEnter={() => {
                                            // Ocultar el submenú actual antes de mostrar uno nuevo
                                            if (item.title === "Servicios") {
                                                setShowCompanyMenu(false);
                                                setShowServicesMenu(true);
                                            }
                                            if (item.title === "Empresa") {
                                                setShowServicesMenu(false);
                                                setShowCompanyMenu(true);
                                            }
                                        }}

                                        // onMouseLeave={() => {
                                        //     // Ocultar el submenú al salir del elemento
                                        //     if (item.title === "Servicios") {
                                        //         setShowServicesMenu(false);
                                        //     }
                                        //     if (item.title === "Empresa") {
                                        //         setShowCompanyMenu(false);
                                        //     }
                                        // }}


                                    >
                                        {/* <Link
                                            href={item.path}
                                            className="block"
                                            scroll={false}
                                            onClick={(e) => smoothScroll(e, item.path)}
                                        >
                                            {item.title}
                                        </Link> */}

                                        <Link
    href={item.path}
    className="block"
    scroll={false}
    onClick={(e) => {
        item.title === "Mis proyectos"
            ? (window.open(item.path, '_blank'), e.preventDefault())
            : smoothScroll(e, item.path);
    }}
>
    {item.title}
</Link>
                                        {/* Submenú para Servicios */}
                                        {item.title === "Servicios" && showServicesMenu && (
                                            <div 
                                                ref={servicesRef} 
                                                className="absolute left-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg z-10 transition-opacity duration-300 ease-in-out opacity-100 w-80"
                                                onMouseEnter={() => setShowServicesMenu(true)} // Mantener el submenú visible
                                                onMouseLeave={() => setShowServicesMenu(false)} // Ocultar el submenú al salir
                                            >
                                                <ul className="text-gray-600 p-2 font-light">
                                                    <li><Link href="#services901" scroll={false} onClick={(e) => smoothScroll(e, item.path)} className="block px-4 py-2 hover:bg-gray-100">Trabajo Final de Grado</Link></li>
                                                    <li><Link href="#services902" scroll={false} onClick={(e) => smoothScroll(e, item.path)} className="block px-4 py-2 hover:bg-gray-100">Trabajo Final de Máster</Link></li>
                                                    <li><Link href="#services903" scroll={false} onClick={(e) => smoothScroll(e, item.path)} className="block px-4 py-2 hover:bg-gray-100">Tesis </Link></li>
                                                    <li><Link href="#services904" scroll={false} onClick={(e) => smoothScroll(e, item.path)} className="block px-4 py-2 hover:bg-gray-100">Asesorías </Link></li>
                                                    <li><Link href="#services905" scroll={false} onClick={(e) => smoothScroll(e, item.path)} className="block px-4 py-2 hover:bg-gray-100">Guión de estudio </Link></li>
                                                    <li><Link href="#services906" scroll={false} onClick={(e) => smoothScroll(e, item.path)} className="block px-4 py-2 hover:bg-gray-100">Presentaciones </Link></li>
                                                    <li><Link href="#services907" scroll={false} onClick={(e) => smoothScroll(e, item.path)} className="block px-4 py-2 hover:bg-gray-100">Artículos Científicos </Link></li>
                                                    <li><Link href="#services908" scroll={false} onClick={(e) => smoothScroll(e, item.path)} className="block px-4 py-2 hover:bg-gray-100">Ciencias Matemáticas </Link></li>
                                                </ul>
                                            </div>
                                        )}
                                        {/* Submenú para Empresa */}
                                        {item.title === "Empresa" && showCompanyMenu && (
                                            <div 
                                                ref={companyRef} 
                                                className="absolute left-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg z-10 transition-opacity duration-300 ease-in-out opacity-100 w-80"
                                                onMouseEnter={() => setShowCompanyMenu(true)} // Mantener el submenú visible
                                                onMouseLeave={() => setShowCompanyMenu(false)} // Ocultar el submenú al salir
                                            >
                                                <ul className="text-gray-600 p-2 font-light">
                                                    <li><Link href="/about" className="block px-4 py-2 hover:bg-gray-100"> Sobre ToolTesis</Link></li>
                                                    <li><Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">Trabaja con nosotros</Link></li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ))
                            }
                            <Link
                                href="/contact"
                                className="menu block font-medium text-sm text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700 md:inline-block px-4 py-2 text-center rounded-full"
                            >
                                Contacto
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
