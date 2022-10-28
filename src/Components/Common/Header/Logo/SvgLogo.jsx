import * as React from "react";
const SvgLogo = (props) => (
  <svg
    viewBox={'0 0 354 79'}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
      <defs>
          <clipPath id="logo_svg__a">
              <path d="M1920 0v1454H0V0h1920Z" />
          </clipPath>
          <clipPath id="logo_svg__b">
              <path d="M40.463 79H20.232V58.768H0V38.537l19.75-.001V19.75H0V0h79v79H59.25V59.25H40.463V79ZM20.231 39.5v19.268H39.5V39.5H20.231Z" />
          </clipPath>
          <clipPath id="logo_svg__c">
              <path d="M10.523 0c1.88 0 3.556.347 5.027 1.042 1.47.695 2.613 1.675 3.427 2.942.813 1.266 1.22 2.705 1.22 4.315h-5.424c0-1.23-.38-2.185-1.14-2.868-.759-.682-1.826-1.023-3.2-1.023-1.326 0-2.357.286-3.092.857-.735.572-1.103 1.325-1.103 2.26 0 .873.431 1.604 1.293 2.194.862.59 2.13 1.144 3.806 1.66 3.086.947 5.334 2.121 6.744 3.523 1.41 1.401 2.116 3.147 2.116 5.237 0 2.324-.862 4.147-2.586 5.469-1.723 1.321-4.044 1.982-6.961 1.982-2.025 0-3.87-.378-5.533-1.134-1.663-.756-2.932-1.792-3.806-3.108C.437 22.033 0 20.508 0 18.775h5.443c0 2.963 1.735 4.444 5.207 4.444 1.29 0 2.296-.267 3.02-.802.723-.535 1.084-1.282 1.084-2.24 0-1.046-.361-1.848-1.084-2.408-.724-.559-2.026-1.15-3.906-1.77-1.88-.62-3.37-1.233-4.466-1.835C2.308 12.516.814 10.297.814 7.506c0-1.45.4-2.745 1.202-3.882C2.818 2.487 3.97 1.598 5.47.959 6.97.319 8.655 0 10.523 0Z" />
          </clipPath>
          <clipPath id="logo_svg__d">
              <path d="M8.082 0v4.906h3.345v3.91H8.082v9.959c0 .737.139 1.266.416 1.586.278.32.808.48 1.591.48.58 0 1.091-.044 1.537-.13v4.039c-1.024.32-2.079.48-3.164.48-3.664 0-5.533-1.888-5.605-5.662V8.816H0v-3.91h2.857V0h5.225Z" />
          </clipPath>
          <clipPath id="logo_svg__e">
              <path d="M8.751 0c2.411 0 4.325.618 5.741 1.853 1.417 1.236 2.125 2.973 2.125 5.21v8.65c.012 1.894.271 3.326.777 4.297v.314h-5.28c-.24-.48-.415-1.076-.524-1.79-1.265 1.44-2.91 2.159-4.936 2.159-1.917 0-3.505-.566-4.764-1.697C.63 17.865 0 16.439 0 14.717c0-2.115.768-3.737 2.305-4.869 1.537-1.13 3.758-1.703 6.663-1.715h2.405V6.99c0-.922-.232-1.66-.696-2.213-.464-.554-1.196-.83-2.197-.83-.88 0-1.57.215-2.07.645-.5.43-.75 1.02-.75 1.77H.434c0-1.155.35-2.225 1.049-3.208C2.182 2.17 3.17 1.399 4.448.839 5.726.28 7.16 0 8.751 0Zm2.622 11.25H9.42c-2.615 0-4.008.922-4.176 2.766l-.018.314c0 .664.229 1.211.687 1.641.458.43 1.085.646 1.88.646a4.43 4.43 0 0 0 2.134-.526c.65-.35 1.133-.82 1.446-1.41V11.25Z" />
          </clipPath>
          <clipPath id="logo_svg__f">
              <path d="M9.439 0c.578 0 1.12.08 1.627.24l-.072 5.127a13.924 13.924 0 0 0-1.88-.148c-1.978 0-3.274.683-3.888 2.047v13.058H0V.369h4.936l.145 2.379C6.13.916 7.582 0 9.439 0Z" />
          </clipPath>
          <clipPath id="logo_svg__g">
              <path d="M8.082 0v4.906h3.345v3.91H8.082v9.959c0 .737.139 1.266.416 1.586.278.32.808.48 1.591.48.58 0 1.091-.044 1.537-.13v4.039c-1.024.32-2.079.48-3.164.48-3.664 0-5.533-1.888-5.605-5.662V8.816H0v-3.91h2.857V0h5.225Z" />
          </clipPath>
          <clipPath id="logo_svg__h">
              <path d="M5.226 0v12.891c0 2.078.928 3.117 2.784 3.117 1.772 0 2.99-.627 3.653-1.881V0h5.243v19.955h-4.918l-.145-2.029c-1.29 1.599-3.073 2.398-5.352 2.398-2.097 0-3.697-.615-4.8-1.844C.588 17.25.024 15.449 0 13.076V0h5.226Z" />
          </clipPath>
          <clipPath id="logo_svg__i">
              <path d="M9.981 0c2.41 0 4.285.91 5.623 2.73 1.338 1.82 2.007 4.327 2.007 7.524v.277c0 3.074-.684 5.536-2.052 7.386-1.368 1.85-3.215 2.776-5.542 2.776-1.977 0-3.574-.701-4.791-2.103v9.406H0V.369h4.846l.18 1.955C6.293.774 7.945 0 9.982 0ZM8.607 4.334c-1.64 0-2.767.64-3.381 1.918v8.17c.638 1.316 1.778 1.973 3.417 1.973 2.495 0 3.743-2.084 3.743-6.252 0-1.856-.323-3.288-.968-4.297-.644-1.008-1.582-1.512-2.811-1.512Z" />
          </clipPath>
          <clipPath id="logo_svg__j">
              <path d="m7.088 0 6.762 19.475L20.577 0H27.7v26.852h-5.443v-7.34l.543-12.67-7.106 20.01H11.97L4.882 6.861l.542 12.651v7.34H0V0h7.088Z" />
          </clipPath>
          <clipPath id="logo_svg__k">
              <path d="M8.751 0c2.411 0 4.325.618 5.741 1.853 1.417 1.236 2.125 2.973 2.125 5.21v8.65c.012 1.894.271 3.326.777 4.297v.314h-5.28c-.24-.48-.415-1.076-.524-1.79-1.265 1.44-2.91 2.159-4.936 2.159-1.917 0-3.505-.566-4.764-1.697C.63 17.865 0 16.439 0 14.717c0-2.115.768-3.737 2.305-4.869 1.537-1.13 3.758-1.703 6.663-1.715h2.405V6.99c0-.922-.232-1.66-.696-2.213-.464-.554-1.196-.83-2.197-.83-.88 0-1.57.215-2.07.645-.5.43-.75 1.02-.75 1.77H.434c0-1.155.35-2.225 1.049-3.208C2.182 2.17 3.17 1.399 4.448.839 5.726.28 7.16 0 8.751 0Zm2.622 11.25H9.42c-2.615 0-4.008.922-4.176 2.766l-.018.314c0 .664.229 1.211.687 1.641.458.43 1.085.646 1.88.646a4.43 4.43 0 0 0 2.134-.526c.65-.35 1.133-.82 1.446-1.41V11.25Z" />
          </clipPath>
          <clipPath id="logo_svg__l">
              <path d="M9.439 0c.578 0 1.12.08 1.627.24l-.072 5.127a13.924 13.924 0 0 0-1.88-.148c-1.978 0-3.274.683-3.888 2.047v13.058H0V.369h4.936l.145 2.379C6.13.916 7.582 0 9.439 0Z" />
          </clipPath>
          <clipPath id="logo_svg__m">
              <path d="M5.226 0v15.695l1.012-1.328 5.009-5.994h6.274l-7.07 8.318 7.685 11.637h-6.003l-5.027-8.004-1.88 1.918v6.086H0V0h5.226Z" />
          </clipPath>
          <clipPath id="logo_svg__n">
              <path d="M9.131 0c2.676 0 4.783.86 6.32 2.582 1.537 1.721 2.305 4.162 2.305 7.322v2.176H5.298c.169 1.303.678 2.348 1.528 3.135.85.787 1.925 1.18 3.227 1.18 2.013 0 3.586-.743 4.72-2.231l2.567 2.932c-.783 1.131-1.844 2.014-3.182 2.647-1.338.633-2.82.95-4.448.95-2.87 0-5.205-.898-7.007-2.693C.901 16.205 0 13.814 0 10.826v-.517c0-2.004.38-3.796 1.14-5.376.759-1.58 1.834-2.797 3.227-3.651C5.759.427 7.347 0 9.13 0Zm-.018 4.316c-1.037 0-1.877.356-2.522 1.07-.645.712-1.058 1.733-1.239 3.06h7.269v-.423c-.024-1.18-.338-2.094-.94-2.74-.603-.645-1.459-.967-2.568-.967Z" />
          </clipPath>
          <clipPath id="logo_svg__o">
              <path d="M8.082 0v4.906h3.345v3.91H8.082v9.959c0 .737.139 1.266.416 1.586.278.32.808.48 1.591.48.58 0 1.091-.044 1.537-.13v4.039c-1.024.32-2.079.48-3.164.48-3.664 0-5.533-1.888-5.605-5.662V8.816H0v-3.91h2.857V0h5.225Z" />
          </clipPath>
      </defs>
      <g clipPath="url(#logo_svg__a)" transform="translate(-783 -51)">
          <g clipPath="url(#logo_svg__b)" transform="translate(783 51)">
              <path fill="#1D96DC" d="M0 0h79v79H0V0z" />
          </g>
          <g clipPath="url(#logo_svg__c)" transform="translate(888 74.107)">
              <path fill="#1D96DC" d="M0 0h20.197v27.59H0V0z" />
          </g>
          <g clipPath="url(#logo_svg__d)" transform="translate(909.698 76.467)">
              <path fill="#1D96DC" d="M0 0h11.626v25.23H0V0z" />
          </g>
          <g clipPath="url(#logo_svg__e)" transform="translate(923.259 81.004)">
              <path fill="#1D96DC" d="M0 0h17.394v20.693H0V0z" />
          </g>
          <g clipPath="url(#logo_svg__f)" transform="translate(943.89 81.004)">
              <path fill="#1D96DC" d="M0 0h11.066v20.324H0V0z" />
          </g>
          <g clipPath="url(#logo_svg__g)" transform="translate(956.475 76.467)">
              <path fill="#1D96DC" d="M0 0h11.626v25.23H0V0z" />
          </g>
          <g clipPath="url(#logo_svg__h)" transform="translate(970.687 81.373)">
              <path fill="#1D96DC" d="M0 0h16.906v20.324H0V0z" />
          </g>
          <g clipPath="url(#logo_svg__i)" transform="translate(991.535 81.004)">
              <path fill="#1D96DC" d="M0 0h17.611v27.996H0V0z" />
          </g>
          <g clipPath="url(#logo_svg__j)" transform="translate(1021.948 74.475)">
              <path fill="#1D96DC" d="M0 0h27.7v26.852H0V0z" />
          </g>
          <g clipPath="url(#logo_svg__k)" transform="translate(1053.265 81.004)">
              <path fill="#1D96DC" d="M0 0h17.394v20.693H0V0z" />
          </g>
          <g clipPath="url(#logo_svg__l)" transform="translate(1073.896 81.004)">
              <path fill="#1D96DC" d="M0 0h11.066v20.324H0V0z" />
          </g>
          <g clipPath="url(#logo_svg__m)" transform="translate(1087.403 73)">
              <path fill="#1D96DC" d="M0 0h18.136v28.328H0V0z" />
          </g>
          <g clipPath="url(#logo_svg__n)" transform="translate(1106.478 81.004)">
              <path fill="#1D96DC" d="M0 0h17.756v20.693H0V0z" />
          </g>
          <g clipPath="url(#logo_svg__o)" transform="translate(1125.374 76.467)">
              <path fill="#1D96DC" d="M0 0h11.626v25.23H0V0z" />
          </g>
      </g>
  </svg>
);
export default SvgLogo;
