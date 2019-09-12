import React, { Component } from "react"

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
                <a href="/">Careers</a>
              </li>
              <li className="pb-2">
                <a href="/">Blog</a>
              </li>
              <li className="pb-2">
                <a href="/">About Nowvac</a>
              </li>
              <li className="pb-2">
                <a href="/">Investor relations</a>
              </li>
              <li className="pb-2">
                <a href="/">Our vendors</a>
              </li>
              <li className="pb-2">
                <a href="/">FAQ</a>
              </li>
              <li className="pb-2">
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="uppercase tracking-wider pb-6 text-xs text-gray-600">
              Making money with us
            </h3>
            <ul>
              <li className="pb-2">
                <a href="/">Sell on Nowvac</a>
              </li>
              <li className="pb-2">
                <a href="/">Sell your services on nowvac</a>
              </li>
            </ul>
          </section>
          <section>
            <h3 className="uppercase tracking-wider pb-6 text-xs text-gray-600">
              Let us help you
            </h3>
            <ul>
              <li className="pb-2">
                <a href="/">Your Account</a>
              </li>
              <li className="pb-2">
                <a href="/">Your Orders</a>
              </li>
              <li className="pb-2">
                <a href="/">Shipping Rates and Policies</a>
              </li>
              <li className="pb-2">
                <a href="/">Returns and Replacements</a>
              </li>
              <li className="pb-2">
                <a href="/">Your Seller Account</a>
              </li>
              <li className="pb-2">
                <a href="/">Help</a>
              </li>
              <li className="pb-2">
                <a href="/">Contact Us</a>
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
