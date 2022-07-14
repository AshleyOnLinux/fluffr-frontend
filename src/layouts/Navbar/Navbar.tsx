import { Link } from "react-router-dom";

const Navbar = () => {
    interface navItemData {
        name: string;
        link: string;
    }
    const navItems: navItemData[] = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
    ];

    return (
        <nav className="h-16 fixed bg-white w-full flex flex-row items-center justify-center md:justify-start px-5">
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 text-2xl"
                    to={item.link}
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    )
}

export default Navbar;