import React from 'react';
import { NavLink } from 'react-router-dom';
import './SASS/Navbar.scss';

const Navbar = props => {
  return (
    <nav>
      {/* user profile */}
      <NavLink to="/profile">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.2926 17.7751V16.1084C17.2926 15.2244 16.9414 14.3765 16.3162 13.7514C15.6911 13.1263 14.8433 12.7751 13.9592 12.7751H7.29256C6.40851 12.7751 5.56066 13.1263 4.93554 13.7514C4.31042 14.3765 3.95923 15.2244 3.95923 16.1084V17.7751"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6261 9.44178C12.467 9.44178 13.9594 7.9494 13.9594 6.10845C13.9594 4.2675 12.467 2.77512 10.6261 2.77512C8.78511 2.77512 7.29272 4.2675 7.29272 6.10845C7.29272 7.9494 8.78511 9.44178 10.6261 9.44178Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </NavLink>

      {/* create new project */}
      <NavLink to="">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4593 2.58347H4.79264C3.87217 2.58347 3.12598 3.32966 3.12598 4.25013V15.9168C3.12598 16.8373 3.87217 17.5835 4.79264 17.5835H16.4593C17.3798 17.5835 18.126 16.8373 18.126 15.9168V4.25013C18.126 3.32966 17.3798 2.58347 16.4593 2.58347Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.626 6.75013V13.4168"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.29272 10.0835H13.9594"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </NavLink>

      {/* my projects */}
      <NavLink to="">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.2927 6.72515H3.95939C3.03892 6.72515 2.29272 7.47134 2.29272 8.39182V16.7251C2.29272 17.6456 3.03892 18.3918 3.95939 18.3918H17.2927C18.2132 18.3918 18.9594 17.6456 18.9594 16.7251V8.39182C18.9594 7.47134 18.2132 6.72515 17.2927 6.72515Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.9594 18.3918V5.05848C13.9594 4.61645 13.7838 4.19253 13.4712 3.87997C13.1587 3.56741 12.7348 3.39182 12.2927 3.39182H8.95939C8.51736 3.39182 8.09344 3.56741 7.78088 3.87997C7.46832 4.19253 7.29272 4.61645 7.29272 5.05848V18.3918"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </NavLink>

      {/* notifications */}
      <NavLink to="">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3334 10.7001H13.3334L11.6667 13.2001H8.33342L6.66675 10.7001H1.66675"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.54175 4.95848L1.66675 10.7001V15.7001C1.66675 16.1422 1.84234 16.5661 2.1549 16.8787C2.46746 17.1912 2.89139 17.3668 3.33341 17.3668H16.6667C17.1088 17.3668 17.5327 17.1912 17.8453 16.8787C18.1578 16.5661 18.3334 16.1422 18.3334 15.7001V10.7001L15.4584 4.95848C15.3204 4.6808 15.1077 4.44712 14.8442 4.28371C14.5807 4.12031 14.2768 4.03365 13.9667 4.03348H6.03341C5.72334 4.03365 5.41947 4.12031 5.15595 4.28371C4.89244 4.44712 4.67973 4.6808 4.54175 4.95848V4.95848Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </NavLink>

      {/* settings */}
      <NavLink to="">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M3.93604 18.0085V12.1752"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.93604 8.84185V3.00851"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6028 18.0085V10.5085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6028 7.17518V3.00851"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.2695 18.0085V13.8418"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.2695 10.5085V3.00851"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.43604 12.1752H6.43603"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.10278 7.17519H13.1028"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.7695 13.8418H19.7695"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="20"
                height="20"
                transform="translate(0.602783 0.508514)"
              />
            </clipPath>
          </defs>
        </svg>
      </NavLink>
    </nav>
  );
};

export default Navbar;
