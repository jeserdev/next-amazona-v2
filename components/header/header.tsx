import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between dark:bg-slate-800">
          <Link href="/" className="btn btn-ghost text-lg"> 
            | Mambo App
          </Link>
          <ul>
            <li>
              <Link href="/cart" className="btn btn-ghost rounded-btn">
                Cart
              </Link>
            </li>

            <li>
              <Link href="/signin" className="btn btn-ghost rounded-btn">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
