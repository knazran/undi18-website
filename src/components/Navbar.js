import React from "react";
import { Link } from "gatsby";
import logo from "../img/undi18-logo.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "hidden lg:block"
    };
    
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        console.log(this.state.active)
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: "hidden lg:block"
            });
      }
    );
  };

  render() {
    return (
      <header className="top-0 bg-white shadow">
        <div className="container flex flex-wrap justify-between items-center mx-auto py-1 lg:px-16">
          <div className="flex w-full justify-between lg:w-auto items-center text-2xl">
            <div className="w-32 ml-3 lg:ml-0 lg:w-40 lg:mr-3">
              <Link to="/">
                <img src={logo} alt="Undi18" />
              </Link>
            </div>
            <div className="block lg:hidden">
            <button
              onClick={() => this.toggleHamburger()}
              className="flex items-center mr-2 px-3 py-2 border rounded text-gray-500 border-gray-600"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          </div>
          
          <div className={`flex flex-col text-center sm:flex-row w-full lg:w-auto lg:text-left justify-center px-4  ${this.state.navBarActiveClass}`}>
            <Link className="px-0 lg:px-4 text-red-800 hover:text-red-900" to="/about/">
              About Us
            </Link>
            <Link
              className="px-0 lg:px-4 text-red-800 hover:text-red-900"
              to="/about/"
            >
              Programmes
            </Link>
            <Link
              className="px-0 lg:px-4 text-red-800 hover:text-red-900"
              to="/about/"
            >
              Campaigns
            </Link>
            <Link
              className="px-0 lg:px-4 text-red-800 hover:text-red-900"
              to="/about/"
            >
              Events
            </Link>
            <Link
              className="px-0 lg:px-4 text-red-800 hover:text-red-900"
              to="/about/"
            >
              Media & Partners
            </Link>
          </div>
        </div>
      </header>
    );
  }
};

export default Navbar;
