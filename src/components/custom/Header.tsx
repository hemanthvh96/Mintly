import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useAuth } from "@/contexts/AuthContext";

type HeaderProps = {
  openDialog: () => void;
};

const Header: React.FC<HeaderProps> = ({ openDialog }) => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <header className="bg-primary-800 py-4 px-6">
      {isAuthenticated && (
        <div className="container mx-auto text-white flex justify-between items-center">
          <div className="company-logo">
            <a className="text-2xl font-bold">MintlyGo</a>
          </div>
          <div className="hidden md:flex items-center gap-20">
            <nav>
              <ul className="flex gap-8 text-sm lg:text-base">
                <Link to="/pay">Prices</Link>
                <Link to="/">Card Services</Link>
                <Link to="/">Resources</Link>
              </ul>
            </nav>
            <div className="CTA flex gap-6">
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="px-4 py-2 text-sm lg:text-base rounded-2xl bg-primary-600 hover:bg-primary-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {!isAuthenticated && (
        <>
          <div className="container mx-auto text-white flex justify-between items-center">
            <div className="company-logo">
              <a className="text-2xl font-bold">MintlyGo</a>
            </div>
            <div className="hidden md:flex items-center gap-20">
              <nav>
                <ul className="flex gap-8 text-sm lg:text-base">
                  <a href="#">Prices</a>
                  <a href="#">Credit Card</a>
                  <a href="#">Resources</a>
                </ul>
              </nav>
              <div className="CTA flex gap-6">
                <button
                  onClick={() => {
                    openDialog();
                  }}
                  className="text-sm lg:text-base"
                >
                  Sign in
                </button>
                <button className="px-4 py-2 text-sm lg:text-base rounded-2xl bg-primary-600 hover:bg-primary-700">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
