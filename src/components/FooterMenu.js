import React, { Component } from "react"
import { Link } from "gatsby"

export default class FooterMenu extends Component {
  render() {
    return (
      <footer className="bg-gray-800 text-gray-500 text-sm py-12">
        <div className="w-10/12 mx-auto flex justify-between">
          <section>
            <img
              className="w-32"
              src="http://nowvac.ljft.de/assets/img/logo.png"
              alt=""
            />
          </section>
          <section>
            <h3 className="uppercase tracking-wider pb-6 text-xs text-gray-600">
              Get to know us
            </h3>
            <ul>
              <li className="pb-2">
                <Link to="/Careers" className=" hover:text-gray-300">
                  Careers
                </Link>
              </li>
              <li className="pb-2">
                <Link to="/Blog" className=" hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li className="pb-2">
                <Link to="/about-nowvac" className=" hover:text-gray-300">
                  About Nowvac
                </Link>
              </li>
              <li className="pb-2">
                <Link to="/investor-relations" className=" hover:text-gray-300">
                  Investor Relations
                </Link>
              </li>
              <li className="pb-2">
                <Link to="/our-vendors" className=" hover:text-gray-300">
                  Our vendors
                </Link>
              </li>
              <li className="pb-2">
                <Link to="/faq" className=" hover:text-gray-300">
                  FAQ
                </Link>
              </li>
              <li className="pb-2">
                <Link to="/contact" className=" hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="uppercase tracking-wider pb-6 text-xs text-gray-600">
              Making money with us
            </h3>
            <ul>
              <li className="pb-2">
                <Link to="/sell" className=" hover:text-gray-300">
                  Sell On Nowvac
                </Link>
              </li>
              <li className="pb-2">
                <Link to="/service-sell" className=" hover:text-gray-300">
                  Sell your services on Nowvac
                </Link>
              </li>
            </ul>
          </section>
          <section>
            <h3 className="uppercase tracking-wider pb-6 text-xs text-gray-600">
              Let us help you
            </h3>
            <ul>
              <li className="pb-2">
                <Link to="/your-account" className=" hover:text-gray-300">
                  Your account
                </Link>
              </li>
              <li className="pb-2">
                <Link to="/your-orders" className=" hover:text-gray-300">
                  Your Orders
                </Link>
              </li>
              <li className="pb-2">
                <Link to="/rates-policies" className=" hover:text-gray-300">
                  Shipping rates and policies
                </Link>
              </li>
              <li className="pb-2">
                <Link to="/returns" className=" hover:text-gray-300">
                  Returns and replacements
                </Link>
              </li>
              <li className="pb-2">
                <Link to="/seller-account" className=" hover:text-gray-300">
                  Your seller account
                </Link>
              </li>
              <li className="pb-2">
                <Link to="/help" className=" hover:text-gray-300">
                  Help
                </Link>
              </li>
              <li className="pb-2">
                <Link to="/contact" className=" hover:text-gray-300">
                  Contact us
                </Link>
              </li>
            </ul>
          </section>
          <section>
            <h3 className="uppercase tracking-wider pb-6 text-xs text-gray-600">
              Newsletter
            </h3>
            <p className="pb-4">
              Subscribe to our newsletter! Do not miss out on our offers and
              news.
            </p>
            <form action="">
              <input
                className="bg-transparent focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                type="email"
                placeholder="jane@example.com"
              />
            </form>
          </section>
        </div>
      </footer>
    )
  }
}
