import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' }
    ];



    return (
        <nav className="text-black bg-yellow-200 m-4 p-8">
            <div className="text-5xl md:hidden"  onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu ></AiOutlineMenu>
                }
                
            </div>
            <ul className={`md:flex md:static duration-1000 absolute 
            ${open? 'top-20' : '-top-72'} px-12 text-black`}>
                {
                    routes.map(route =>
                        <Link key={route.id} route={route}></Link>
                        // <link key={route.id} route={route}></link>
                    )
                }
            </ul>
        </nav>
    );
};

export default NavBar;