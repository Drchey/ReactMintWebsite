import { useState } from 'react'
import { navLinks } from '../constants'
import { close, down_arrow, logo, menu, up_arrow } from '../assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [showNav, setshowNav] = useState(false)
  const [showServices, setshowServices] = useState(false)
  const [showValues, setshowValues] = useState(false)

  const handleHistoryClick = () => {
    setshowNav(!showNav)
  }

  const handleServiceClick = () => {
    setshowServices(!showServices)
  }

  const handleValuesClick = () => {
    setshowValues(!showValues)
  }
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="/">
        <img
          src={logo}
          alt="logo"
          className="w-[124px] h-[42px] object-contain"
        />
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal  cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-forest font-semibold mr-10`}
          >
            {nav.dropdown ? (
              <div>
                <div className="flex flex-row items-center justify-between">
                  <div> {nav.title} </div>
                  {nav.title === 'History' && nav.dropdown ? (
                    <img
                      src={showNav ? up_arrow : down_arrow}
                      onMouseEnter={
                        nav.title === 'History' ? handleHistoryClick : null
                      }
                      className="width-[12px]"
                      alt="dropdown"
                    />
                  ) : null}

                  {nav.dropdown && nav.title === 'Our Services' ? (
                    <img
                      src={showServices ? up_arrow : down_arrow}
                      onMouseEnter={
                        nav.title === 'Our Services' ? handleServiceClick : null
                      }
                      // onMouseLeave={
                      //   nav.title === 'Our Services' ? handleServiceClick : null
                      // }
                      className="width-[12px]"
                      alt="dropdown"
                    />
                  ) : null}

                  {nav.dropdown && nav.title === 'Our Values' ? (
                    <img
                      src={showValues ? up_arrow : down_arrow}
                      onMouseEnter={
                        nav.title === 'Our Values' ? handleValuesClick : null
                      }
                      // onMouseLeave={
                      //   nav.title === 'Our Services' ? handleServiceClick : null
                      // }
                      className="width-[12px]"
                      alt="dropdown"
                    />
                  ) : null}
                </div>

                {showServices && nav.title === 'Our Services' ? (
                  <div
                    onMouseLeave={handleServiceClick}
                    className={`p-6 bg-forest-gradient z-10 absolute rounded ease-in-out ${
                      showNav ? 'animate_dropdown' : ''
                    }`}
                  >
                    <ul className="list-none flex flex-col items-left flex-1">
                      {nav.historyLinks.map((nav, index) => (
                        <li
                          key={nav.id}
                          className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[17px] ${
                            index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                          } text-forest hover:text-dimWhite mr-1`}
                        >
                          <Link to={`/${nav.link}`}>{nav.title}</Link>{' '}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {showNav && nav.title === 'History' ? (
                  <div
                    onMouseLeave={handleHistoryClick}
                    className={`p-6 bg-forest-gradient z-10 absolute rounded ease-in-out ${
                      showNav ? 'animate_dropdown' : ''
                    }`}
                  >
                    <ul className="list-none flex flex-col items-left flex-1">
                      {nav.historyLinks.map((nav, index) => (
                        <li
                          key={nav.id}
                          className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[17px] ${
                            index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                          } text-forest hover:text-dimWhite mr-1`}
                        >
                          <Link to={`/${nav.link}`}>{nav.title}</Link>{' '}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {showValues && nav.title === 'Our Values' ? (
                  <div
                    onMouseLeave={handleValuesClick}
                    className={`p-6 bg-forest-gradient z-10 absolute rounded ease-in-out ${
                      showNav ? 'animate_dropdown' : ''
                    }`}
                  >
                    <ul className="list-none flex flex-col items-left flex-1">
                      {nav.historyLinks.map((nav, index) => (
                        <li
                          key={nav.id}
                          className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[17px] ${
                            index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                          } text-forest hover:text-dimWhite mr-1`}
                        >
                          <Link to={`/${nav.link}`}>{nav.title}</Link>{' '}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link to={`/${nav.link}`}>{nav.title} </Link>
            )}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[20px] h-[20px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-forest-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl z-20`}
        >
          {/* Try Here */}

          <ul className="list-none flex flex-col justify-end items-right flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-forest mr-10`}
              >
                {nav.dropdown ? (
                  <div>
                    <div className="flex flex-row items-center justify-between">
                      <div> {nav.title} </div>
                      {/* History */}
                      {nav.title === 'History' && nav.dropdown ? (
                        <img
                          src={showNav ? up_arrow : down_arrow}
                          onClick={
                            nav.title === 'History' ? handleHistoryClick : null
                          }
                          className="width-[12px]"
                          alt="dropdown"
                        />
                      ) : null}

                      {/* Services */}
                      {nav.title === 'Our Services' && nav.dropdown ? (
                        <img
                          src={showServices ? up_arrow : down_arrow}
                          onClick={
                            nav.title === 'Our Services'
                              ? handleServiceClick
                              : null
                          }
                          className="width-[12px]"
                          alt="dropdown"
                        />
                      ) : null}

                      {/* Values */}
                      {nav.title === 'Our Values' && nav.dropdown ? (
                        <img
                          src={showValues ? up_arrow : down_arrow}
                          onClick={
                            nav.title === 'Our Values'
                              ? handleValuesClick
                              : null
                          }
                          className="width-[12px]"
                          alt="dropdown"
                        />
                      ) : null}
                    </div>

                    {showServices && nav.title === 'Our Services' ? (
                      <div
                        onMouseLeave={handleServiceClick}
                        className={`p-6 bg-forest-gradient z-10 absolute rounded ease-in-out ${
                          showNav ? 'animate_dropdown' : ''
                        }`}
                      >
                        <ul className="list-none flex flex-col items-left flex-1">
                          {nav.historyLinks.map((nav, index) => (
                            <li
                              key={nav.id}
                              className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[17px] ${
                                index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                              } text-forest hover:text-dimWhite mr-1`}
                            >
                              <Link to={`/${nav.link}`}>{nav.title}</Link>{' '}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {showValues && nav.title === 'Our Values' ? (
                      <div
                        onMouseLeave={handleValuesClick}
                        className={`p-6 bg-forest-gradient z-10 absolute rounded ease-in-out ${
                          showValues ? 'animate_dropdown' : ''
                        }`}
                      >
                        <ul className="list-none flex flex-col items-left flex-1">
                          {nav.historyLinks.map((nav, index) => (
                            <li
                              key={nav.id}
                              className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[17px] ${
                                index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                              } text-forest hover:text-dimWhite mr-1`}
                            >
                              <Link to={`/${nav.link}`}>{nav.title}</Link>{' '}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {showNav && nav.title === 'History' ? (
                      <div
                        onMouseLeave={handleHistoryClick}
                        className={`p-6 bg-forest-gradient z-10 absolute rounded ease-in-out ${
                          showNav ? 'animate_dropdown' : ''
                        }`}
                      >
                        <ul className="list-none flex flex-col items-left flex-1">
                          {nav.historyLinks.map((nav, index) => (
                            <li
                              key={nav.id}
                              className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[17px] ${
                                index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                              } text-forest hover:text-dimWhite mr-1`}
                            >
                              <Link to={`/${nav.link}`}>{nav.title}</Link>{' '}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link to={`/${nav.link}`}>{nav.title} </Link>
                )}
              </li>
            ))}
          </ul>
          {/* <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-forest mr-10`}
              >
                <Link to={`/${nav.link}`}>
                  {nav.title} {nav.dropdown ? '=' : null}
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
