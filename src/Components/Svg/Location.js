import * as React from "react";
const SvgLocation = (props) => (
  <svg
    width={12}
    height={16}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <defs>
      <clipPath id="map_svg__a">
        <path d="M1920 0v1333H0V0h1920Z" />
      </clipPath>
      <clipPath id="map_svg__b">
        <path d="M5.6 0a5.6 5.6 0 0 1 5.6 5.6c0 .495-.086 1.098-.24 1.761l-.06.252a18.817 18.817 0 0 1-.585 1.873l-.104.277a23.1 23.1 0 0 1-.108.278l-.113.278c-.076.186-.155.37-.236.555l-.124.275-.127.273-.13.27C8.233 14.024 6.765 16 5.6 16s-2.632-1.976-3.773-4.308l-.13-.27c-.043-.09-.085-.182-.127-.273l-.124-.275c-.08-.184-.16-.37-.236-.555l-.113-.278a23.1 23.1 0 0 1-.108-.278l-.104-.277a18.817 18.817 0 0 1-.584-1.873L.24 7.36C.086 6.698 0 6.095 0 5.6A5.6 5.6 0 0 1 5.6 0Zm0 1.333A4.267 4.267 0 0 0 1.333 5.6c0 .896.381 2.37.989 3.911l.106.265.055.132.113.266.057.132.12.265.122.264c.082.176.168.35.255.523.537 1.06 1.11 1.965 1.642 2.583.25.291.479.505.668.632.043.029.08.051.112.068l.028.013.028-.013.046-.026.025-.015.04-.027c.19-.127.42-.34.67-.632.53-.618 1.104-1.522 1.641-2.583.087-.173.173-.347.255-.523l.123-.264.119-.265.057-.132.113-.266.055-.132.106-.265c.608-1.54.989-3.015.989-3.911A4.267 4.267 0 0 0 5.6 1.333Z" />
      </clipPath>
      <clipPath id="map_svg__c">
        <path d="M1.867 0a1.867 1.867 0 1 1 0 3.733 1.867 1.867 0 0 1 0-3.733Zm0 1.333a.533.533 0 1 0 0 1.067.533.533 0 0 0 0-1.067Z" />
      </clipPath>
    </defs>
    <g clipPath="url(#map_svg__a)" transform="translate(-1294 -121)">
      <g clipPath="url(#map_svg__b)" transform="translate(1294.4 121)">
        <path d="M0 0h11.2v16H0V0z" />
      </g>
      <g clipPath="url(#map_svg__c)" transform="translate(1298.133 124.467)">
        <path d="M0 0h3.733v3.733H0V0z" />
      </g>
    </g>
  </svg>
);
export default SvgLocation;