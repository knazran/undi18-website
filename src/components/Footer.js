import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="w-full py-12 px-4 md:px-4 lg:px-24 text-gray-800" style={{background: "linear-gradient(90deg, #660000 0% ,#b30000 100%)"}}>
      <div className="flex -mx-3">
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold text-white">Contact Us</h2>
          <p className="mt-5 text-white">Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.</p>
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold text-white">Social Media</h2>
          <ul className="mt-4 leading-loose">
            <li>
              <a href="https://dev.to/changoman" className="text-gray-400">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/HuntaroSan" className="text-gray-400">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/codebushi/gatsby-starter-lander" className="text-gray-400">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    )
  }
}

export default Footer
