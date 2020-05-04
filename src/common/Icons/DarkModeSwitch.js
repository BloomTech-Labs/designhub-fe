import React from 'react';

const DarkModeSwitch = () => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="42" height="42" rx="10" fill="#15161A" />
      <path
        d="M30.25 21.7242C30.1058 23.2845 29.5202 24.7715 28.5618 26.0112C27.6033 27.2509 26.3116 28.192 24.8378 28.7243C23.364 29.2567 21.769 29.3583 20.2396 29.0173C18.7101 28.6762 17.3094 27.9067 16.2014 26.7986C15.0934 25.6906 14.3238 24.2899 13.9828 22.7605C13.6418 21.231 13.7434 19.6361 14.2757 18.1623C14.8081 16.6885 15.7491 15.3968 16.9888 14.4383C18.2285 13.4798 19.7155 12.8942 21.2759 12.75C20.3623 13.9859 19.9227 15.5087 20.037 17.0413C20.1513 18.5739 20.8119 20.0146 21.8986 21.1014C22.9854 22.1881 24.4261 22.8487 25.9587 22.963C27.4914 23.0773 29.0141 22.6377 30.25 21.7242Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="22.0175"
          y1="12.75"
          x2="22.0175"
          y2="29.215"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5557FE" />
          <stop offset="1" stopColor="#9555FE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DarkModeSwitch;
