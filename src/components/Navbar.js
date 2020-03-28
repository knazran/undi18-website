import React from "react";
import { Link } from "gatsby";
import logo from "../img/undi18-logo.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
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
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <header className="top-0 bg-white shadow">
        <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 lg:px-16">
          <div className="flex items-center text-2xl">
            <div className="w-40 mr-3">
              <Link to="/">
                <img src={logo} alt="Undi18" />
              </Link>
            </div>
          </div>
          <div className="flex mt-4 sm:mt-0 sm:px-4 ">
            <Link className="px-4 text-red-800 hover:text-red-900" to="/about/">
              About Us
            </Link>
            <Link className="px-4 text-red-800 hover:text-red-900" href="#services">
              Programmes
            </Link>
            <Link className="px-4 text-red-800 hover:text-red-900" href="#services">
              Campaigns
            </Link>
            <Link className="px-4 text-red-800 hover:text-red-900" href="#stats">
              Events
            </Link>
            <Link className="px-4 text-red-800 hover:text-red-900" href="#testimonials">
              Media & Partners
            </Link>
          </div>
          {/* <div className="hidden md:block">
        <Button className="text-sm">Start Free Trial</Button>
      </div> */}
        </div>
      </header>
    );
  }
};

export default Navbar;
