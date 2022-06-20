// import React from 'react'
// import {NavLink} from 'react-router-dom';

// const links = [
//     {url: '/search', text: 'All' },
//     {url: '/news', text: 'News' },
//     {url: '/image', text: 'Images' },
//     {url: '/video', text: 'Videos' }
// ];

// export const Links = () => {
//   return (
    
//     <div className="flex sm:justify-around justify-between margin-top-4 items-center">
//         <p>one</p>
//         <p>war</p>
//         <p>ewha</p>
//         <p>two</p>


//         {/* <NavLink to={links[0].url} activeClassName="text-blue-700 border-b-2 darK:text-blue-300 border-blue-700 pb-2"> 
//             {links[0].text}
//         </NavLink>

//         <NavLink to={links[1].url} activeClassName="text-blue-700 border-b-2 darK:text-blue-300 border-blue-700 pb-2"> 
//             {links[1].text}
//         </NavLink>

//         <NavLink to={links[2].url} activeClassName="text-blue-700 border-b-2 darK:text-blue-300 border-blue-700 pb-2"> 
//             {links[2].text}
//         </NavLink>

//         <NavLink to={links[3].url} activeClassName="text-blue-700 border-b-2 darK:text-blue-300 border-blue-700 pb-2"> 
//             {links[3].text}
//         </NavLink> */}
//     </div>
//   )
// }


import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '  📰 News' },
  { url: '/image', text: '  📸 Images' },
  { url: '/video', text: '  📺 Videos' },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    {links.map(({ url, text }) => (
      <NavLink to={url}  activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 " className="hover:text-fuchsia">{text}</NavLink>
    ))}
  </div>
);