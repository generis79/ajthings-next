import React from 'react'
import Link from 'next/link'

const nav = () => {
  return (
    <nav className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-white
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  ">

  <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6 bg-gray-100 ">
  <button className="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
    className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor"
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
    </path>
  </svg>
  </button>
  <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
    <Link className="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      " href="#">
    <img src="/img/logo32.svg" style={{height: "32px"}} alt=""
      loading="lazy" />
  </Link> 

  <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto ">
    <li className="nav-item p-2">
       <Link className="nav-link text-sky-700 hover:text-sky-800 focus:text-gray-700 p-0" href="/">AJ Things</Link> 
    </li>

    <li className="nav-item dropdown static">
          <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX" data-bs-toggle="dropdown"
          aria-expanded="false">Collections
            <svg  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
            </svg>
          </a>
          <div className="dropdown-menu w-full mt-0 hidden shadow-lg bg-white absolute left-0 top-full" aria-labelledby="dropdownMenuButtonX">
            <div className="px-6 lg:px-8 py-5">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white text-gray-600">
                  <Link href="/collections/acrylic_key_chains"> 
                    <a aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Acrylic key chains</a>
                  </Link>
                  <Link href="/collections/clay_beads_bracelets"> 
                    <a aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Clay beads bracelets</a>
                  </Link>
                  <Link href="/collections/leather_key_chains"> 
                    <a aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Leather key chains</a>
                  </Link>
                </div>
                <div className="bg-white text-gray-600">
                  <Link href="/collections/scrunchies"> 
                    <a aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Scrunchies</a>
                  </Link>
                  <Link href="/collections/stickers"> 
                    <a aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Stickers</a>
                  </Link>
                  <Link href="/collections/wristles"> 
                    <a aria-current="true" className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Wristles</a>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </li>

    <li className="nav-item p-2">
       <Link className="nav-link text-sky-700 hover:text-sky-700 focus:text-gray-700 p-0" href="/blog">Blog</Link> 
    </li>
    <li className="nav-item p-2">
       <Link className="nav-link text-sky-700 hover:text-sky-700 focus:text-gray-700 p-0" href="/about">About</Link> 
    </li>
    <li className="nav-item p-2">
       <Link className="nav-link text-sky-700 hover:text-sky-700 focus:text-gray-700 p-0" href="/contacts">Contacts</Link> 
    </li>
  </ul>

  </div>


  <div className="flex items-center relative">


  <div className="dropdown relative">

    <ul className="
      dropdown-menu
      min-w-max
      absolute
      bg-sky-50
      text-base
      z-50
      float-left
      py-2
      list-none
      text-left
      rounded-lg
      shadow-lg
      mt-1
      hidden
      m-0
      bg-clip-padding
      border-none
      left-auto
      right-0
    " aria-labelledby="dropdownMenuButton1">
      <li>
         <Link className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="#">Account</Link> 
      </li>
      <li>
         <Link className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="#">Orders History</Link> 
      </li>
      <li>
         <Link className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="#">Logout</Link> 
      </li>
    </ul>
  </div>
  <div className="dropdown relative">
    <Link className="dropdown-toggle flex items-center hidden-arrow" href="#" id="dropdownMenuButton2" role="button"
      data-bs-toggle="dropdown" aria-expanded="false"> 
     
      <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-full"
        style={{height: "25px", width: "25px"}} alt="" loading="lazy" />
    </Link>
    <ul className="
    dropdown-menu
    min-w-max
    absolute
    bg-sky-50
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    hidden
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-0
  " aria-labelledby="dropdownMenuButton2">
      <li>
         <Link className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      " href="#">Account</Link> 
      </li>
      <li>
         <Link className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      " href="#">Orders history</Link> 
      </li>
      <li>
         <Link className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      " href="#">Logout</Link> 
      </li>
    </ul>
  </div>
  </div>

  </div>
</nav>
  )
}

export default nav