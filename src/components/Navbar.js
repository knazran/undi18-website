import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import Button from './Button';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <header className="top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 lg:px-8">
      <div className="flex items-center text-2xl">
        {/* <div className="w-12 mr-3">
          <LogoIcon />
        </div> */}
        Lander
      </div>
      <div className="flex mt-4 sm:mt-0 sm:px-4">
        <Link className="px-4" href="#features">
          Features
        </Link>
        <Link className="px-4" href="#services">
          Services
        </Link>
        <Link className="px-4" href="#stats">
          Stats
        </Link>
        <Link className="px-4" href="#testimonials">
          Testimonials
        </Link>
      </div>
      {/* <div className="hidden md:block">
        <Button className="text-sm">Start Free Trial</Button>
      </div> */}
    </div>
  </header>
    )
  }
}

export default Navbar
