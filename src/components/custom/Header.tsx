import { Button } from "@/components/ui/button";
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
    <header className="text-gray-600 body-font border-b bg-secondary">
      {isAuthenticated && (
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-3xl">SaMe</span>
          </a>
          <nav className="md:ml-auto font-medium flex flex-wrap items-center text-base justify-center">
            <Link
              to="/pay"
              className="mr-8 hover:text-primary animated-underline"
            >
              Payments
            </Link>
            <a className="mr-8 hover:text-primary animated-underline">
              Rewards
            </a>
            <a className="mr-8 hover:text-primary animated-underline">
              Card Services
            </a>
            <a className="mr-8 hover:text-primary animated-underline">
              Profile
            </a>
          </nav>
          <Button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
          >
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Button>
        </div>
      )}

      {!isAuthenticated && (
        <>
          <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="text-3xl">SaMe</span>
            </a>
            <nav className="md:ml-auto font-medium flex flex-wrap items-center text-base justify-center">
              <a className="mr-8 hover:text-primary animated-underline">
                Features
              </a>
              <a className="mr-8 hover:text-primary animated-underline">
                How it Works
              </a>
              <a className="mr-8 hover:text-primary animated-underline">
                Security
              </a>
              <a className="mr-8 hover:text-primary animated-underline">
                Support
              </a>
            </nav>
            <Button
              onClick={() => {
                openDialog();
              }}
              className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
            >
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Button>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
