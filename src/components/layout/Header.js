import React from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const history = useHistory()

    const handleLogo = () => {
        return history.push("/")
    }
    return (
        <div className=" mt-2 navbar mb-2 shadow-lg bg-green-400 text-neutral-content rounded">
            <div className="px-2 mx-2 navbar-start">
                <button onClick={handleLogo} className="text-lg font-bold">
                    PRO LEARNER
                </button>
            </div>
            <div className="hidden px-2 mx-2 navbar-center lg:flex">
                <div className="flex items-stretch">
                    <NavLink to='/home' className="btn btn-ghost btn-sm rounded-btn" activeClassName="btn-active">
                        Home
                    </NavLink>
                    <NavLink to='/services' className="btn btn-ghost btn-sm rounded-btn" activeClassName="btn-active">
                        Services
                    </NavLink>
                    <NavLink to='/about' className="btn btn-ghost btn-sm rounded-btn" activeClassName="btn-active">
                        About
                    </NavLink>
                    <NavLink to='/contact' className="btn btn-ghost btn-sm rounded-btn" activeClassName="btn-active">
                        Contact
                    </NavLink>
                </div>
            </div>
            <div className="navbar-end">
                <button className="btn btn-square btn-ghost">
                    <span className="material-icons">
                        shopping_cart
                    </span>
                </button>
                <button className="btn btn-square btn-ghost">
                    <span className="material-icons">
                        search
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Header;