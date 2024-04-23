import { useState } from "react";
import Logo from "../Landing Page Assets/Logo.svg"
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      href: "home-section" 
    },
    {
      text: "About",
      icon: <InfoIcon />,
      href: "about-section"
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      href: "testimonials-section" 
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      href: "contact-section" 
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <ScrollLink
            key={item.text}
            activeClass="active"
            to={item.href}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-link"
          >
            {item.text}
          </ScrollLink>
        ))}
        <button className="primary-button">Register</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => {
                  setOpenMenu(false);
                  scroll.scrollTo(item.href, {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                  });
                }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;