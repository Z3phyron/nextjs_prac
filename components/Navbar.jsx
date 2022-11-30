import { useState } from "react";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import { HiOutlineBars2 } from "react-icons/hi2";
import Link from "next/link";



const NavbarEl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 5%;
`;
const LogoEl = styled.div`
  font-size: 20px;
  font-weight: 200;
`;
const ToggleEl = styled.div`
  display: none;
  font-size: 30px;

  @media screen and (max-width: 860px) {
    display: block;
  }
`;
const MenuEl = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 860px) {
    position: absolute;
    top: 10vh;
    right: 0;
    flex-direction: column;
    width: 60%;
    height: 100%;
    display: ${p => p.toggle ? "flex" : "none"};
    background: #fff;
    text-align: center;
    /* justify-content: center; */
    padding: 5%;
  }
`;

const LinkEl = styled(Link)`
  display: flex;
  gap: 20px;
  text-decoration: none;
  color: black;
`;

const links = [
  { name: "Write", path: "/write" },
  { name: "Todo", path: "/" },
  { name: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <NavbarEl>
      <LogoEl>To_do</LogoEl>

      <ToggleEl onClick={() => setToggle(!toggle)}>
        {toggle ? <IoIosClose /> : <HiOutlineBars2 />}
      </ToggleEl>

      <MenuEl toggle={toggle} >
        {links.map((link) => (
          <LinkEl key={link.name} href={link.path} className="route">
            {link.name}
          </LinkEl>
        ))}
      </MenuEl>
    </NavbarEl>
  );
};

export default Navbar;
