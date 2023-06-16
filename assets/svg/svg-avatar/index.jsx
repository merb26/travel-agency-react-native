import { SvgXml } from "react-native-svg";

const SvgAvatar = (props) => {
  const svgMarkup = `
  <svg version="1.1" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(-266.43 -401.65)">
   <g transform="matrix(.68333 0 0 .68333 581.94 550.77)" fill="#95bbdf">
    <rect x="-461.73" y="-218.23" width="365.85" height="365.85" rx="0" ry="0" color="#000000" fill="#95bbdf"/>
   </g>
   <g transform="matrix(.3492 0 0 .3492 284.57 419.79)" fill="#FFF">
    <g fill="#FFF">
     <path d="m306 325.99c90.56-0.01 123.15-90.68 131.68-165.17 10.51-91.76-32.88-160.82-131.68-160.82-98.78 0-142.19 69.055-131.68 160.82 8.54 74.484 41.114 165.18 131.68 165.17z"/>
     <path d="m550.98 541.91c-0.99-28.904-4.377-57.939-9.421-86.393-6.111-34.469-13.889-85.002-43.983-107.46-17.404-12.988-39.941-17.249-59.865-25.081-9.697-3.81-18.384-7.594-26.537-11.901-27.518 30.176-63.4 45.962-105.19 45.964-41.774 0-77.652-15.786-105.17-45.964-8.153 4.308-16.84 8.093-26.537 11.901-19.924 7.832-42.461 12.092-59.863 25.081-30.096 22.463-37.873 72.996-43.983 107.46-5.045 28.454-8.433 57.489-9.422 86.393-0.766 22.387 10.288 25.525 29.017 32.284 23.453 8.458 47.666 14.737 72.041 19.884 47.077 9.941 95.603 17.582 143.92 17.924 48.318-0.343 96.844-7.983 143.92-17.924 24.375-5.145 48.59-11.424 72.041-19.884 18.736-6.757 29.789-9.895 29.023-32.284z"/>
    </g>
   </g>
  </g>
 </svg>
  `;

  return <SvgXml xml={svgMarkup} width={100} height={100}/>;
};

export default SvgAvatar;
