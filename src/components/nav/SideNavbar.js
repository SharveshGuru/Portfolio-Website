/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: '#', offsetTop: 0 },
        ...Array.from(document.querySelectorAll('section')).map((section) => ({
          id: `#${section.id}`,
          offsetTop: section.offsetTop,
        }))
      ];
  
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
  
      // If scrolled to bottom, activate last section
      if (Math.abs(scrollPosition - pageHeight) < 5) {
        setActiveNav(sections[sections.length - 1].id);
        return;
      }
  
      // Otherwise, check scroll position normally
      for (let i = sections.length - 1; i >= 0; i--) {
        if (window.scrollY + 200 >= sections[i].offsetTop) {
          setActiveNav(sections[i].id);
          break;
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <nav>
      <a href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <Typography style={{ fontFamily: "NovaSquare-Regular" }}>
          Home
        </Typography>
      </a>
      <a href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <Typography style={{ fontFamily: "NovaSquare-Regular" }}>
          About
        </Typography>
      </a>
      <a href="#works"
        onClick={() => setActiveNav('#works')}
        className={activeNav === '#works' ? 'active' : ''}
      >
        <Typography style={{ fontFamily: "NovaSquare-Regular" }}>
          Projects
        </Typography>
      </a>
      <a href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <Typography style={{ fontFamily: "NovaSquare-Regular" }}>
          Contact
        </Typography>
      </a>
    </nav>
  );
};


// /* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable react-hooks/rules-of-hooks */
// import React from "react";
// import { Typography } from "@material-ui/core";
// import { useState } from "react";

// import "./SideNavbar.css";

// export const SideNavbar = () => {
//   const [activeNav, setActiveNav] = useState('#');

//   return (
//     <nav>
//       <a href="#" 
//         onClick={() => setActiveNav('#')}
//         className={activeNav === '#' ? 'active' : ''}
//       >
//         <Typography style={{  fontFamily: "NovaSquare-Regular"}}>
//           Home
//         </Typography>
//       </a>
//       <a href="#about" 
//         onClick={() => setActiveNav('#about')}
//         className={activeNav === '#about' ? 'active' : ''}
//       >
//         <Typography style={{  fontFamily: "NovaSquare-Regular"}}>
//           About
//         </Typography>
//       </a>
//       <a href="#works"
//         onClick={() => setActiveNav('#works')}
//         className={activeNav === '#works' ? 'active' : ''}
//       >
//         <Typography style={{  fontFamily: "NovaSquare-Regular"}}>
//           Projects
//         </Typography>
//       </a>
      
//       <a href="#contact"
//         onClick={() => setActiveNav('#contact')}
//         className={activeNav === '#contact' ? 'active' : ''}
//       >
//         <Typography style={{  fontFamily: "NovaSquare-Regular"}}>
//           Contact
//         </Typography>
//       </a>
//     </nav>
//   );
// };