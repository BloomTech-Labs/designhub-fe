import React from 'react';
const UploadCloud = ({ color }) => {
  return (
    <svg
      // width="48"
      // height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 32L24 24L16 32"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
      <path
        d="M24 24V42"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
      <path
        d="M40.7809 36.78C42.7316 35.7165 44.2726 34.0337 45.1606 31.9972C46.0487 29.9607 46.2333 27.6864 45.6853 25.5334C45.1373 23.3803 43.8879 21.471 42.1342 20.1069C40.3806 18.7427 38.2226 18.0014 36.0009 18H33.4809C32.8755 15.6585 31.7472 13.4846 30.1808 11.642C28.6144 9.79927 26.6506 8.33567 24.4371 7.36118C22.2236 6.3867 19.818 5.92669 17.4011 6.01573C14.9843 6.10478 12.619 6.74057 10.4833 7.8753C8.34747 9.01003 6.49672 10.6142 5.07014 12.5671C3.64356 14.5201 2.67828 16.771 2.24686 19.1508C1.81544 21.5305 1.92911 23.977 2.57932 26.3065C3.22954 28.636 4.39938 30.7877 6.0009 32.6"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
      <path
        d="M32 32L24 24L16 32"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
    </svg>
  );
};

export default UploadCloud;
