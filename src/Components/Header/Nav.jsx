import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div className="lg:flex justify-between items-center p-5 px-5 shadow-lg">
            <div>
                <h1 className="text-4xl font-serif text-center">PhoneClub</h1>
            </div>

            <nav>
                <ul className="flex gap-5 font-bold justify-center my-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "underline"
                            }
                        >
                           Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favorites"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "underline"
                            }
                        >
                           Favorites
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "underline"
                            }
                        >
                          Login
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Nav;