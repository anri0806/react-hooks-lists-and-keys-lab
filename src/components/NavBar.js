import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linklist = links.map(link => {
    return (
    <a key={link} href={"#" + link}>{link}</a>
    )
  })

  return <nav>{linklist}</nav>;
}

export default NavBar;
