import { NavLink } from "react-router-dom";

export function Header() {
    const ROUTEList = [
        { path: "/", label: "Home" },
        { path: "/movie", label: "Movie" },
    ];
    return (
        <header className="flex items-center justify-center py-10 text-white gap-x-5">
            {ROUTEList.map((route) => (
                <NavLink
                    key={route.path}
                    className={({ isActive }) =>
                        isActive ? "text-primary" : ""
                    }
                    to={route.path}
                    end
                >
                    {route.label}
                </NavLink>
            ))}
        </header>
    );
}
