import React, { useState } from "react"
import { Link } from "gatsby"

const FooterMenu = () => {
  const [openFooter1, setOpenFooter1] = useState(false)
  const [openFooter2, setOpenFooter2] = useState(false)
  const [openFooter3, setOpenFooter3] = useState(false)
  const [openFooter4, setOpenFooter4] = useState(false)

  return (
    <footer className="bg-gray-800 text-gray-500 text-sm py-4 xl:py-12">
      <div className="xl:w-10/12 xl:mx-auto flex flex-col xl:flex-row xl:justify-between">
        <section className="hidden xl:block">
          <img
            className="w-32"
            src="https://nowvac.ljft.de/assets/img/logo.png"
            alt=""
          />
        </section>
        <section>
          <h3
            className="uppercase tracking-wider pb-3 mb-3 px-2 xl:px-0 text-xs text-gray-600 border-b xl:border-0"
            onClick={() => setOpenFooter1(!openFooter1)}
            role="presentation"
          >
            Get to know us
          </h3>
          <ul
            className={
              "border-b xl:border-0 pb-3 mb-3 px-2 xl:px-0 " +
              (openFooter1
                ? "transition-linear block"
                : "transition-linear hidden xl:block")
            }
          >
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
          <h3
            className="uppercase tracking-wider pb-3 mb-3 px-2 xl:px-0 text-xs text-gray-600 border-b xl:border-0"
            onClick={() => setOpenFooter2(!openFooter2)}
            role="presentation"
          >
            Making money with us
          </h3>
          <ul
            className={
              "border-b xl:border-0 pb-3 mb-3 px-2 xl:px-0 " +
              (openFooter2
                ? "transition-linear block"
                : "transition-linear hidden xl:block")
            }
          >
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
          <h3
            className="uppercase tracking-wider pb-3 mb-3 px-2 xl:px-0 text-xs text-gray-600 border-b xl:border-0"
            onClick={() => setOpenFooter3(!openFooter3)}
            role="presentation"
          >
            Let us help you
          </h3>
          <ul
            className={
              "border-b xl:border-0 pb-3 mb-3 px-2 xl:px-0 " +
              (openFooter3
                ? "transition-linear block"
                : "transition-linear hidden xl:block")
            }
          >
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
          <h3
            className="uppercase tracking-wider pb-3 mb-3 px-2 xl:px-0 text-xs text-gray-600 border-b xl:border-0"
            onClick={() => setOpenFooter4(!openFooter4)}
            role="presentation"
          >
            Newsletter
          </h3>
          <div
            className={
              "border-b xl:border-0 pb-3 mb-3 px-2 xl:px-0 " +
              (openFooter4
                ? "transition-linear block"
                : "transition-linear hidden xl:block")
            }
          >
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
          </div>
        </section>
      </div>
    </footer>
  )
}

export default FooterMenu
