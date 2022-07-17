import { useState } from "react";

import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Button from "../components/Button";
import classnames from "classname";

export default function NavBar() {
  const [offcanvas, setOffCanvas] = useState(false);
  return (
    <>
      <div className="flex items-center py-10">
        <Logo />
        <div className="w-6/12 hidden md:block">
          <Nav scheme="light" dir="horizontal" />
        </div>
        <div className="w-3/12 text-right hidden md:block">
          <Button href="#contact" variant="outline-yellow" pill>
            Kontak
          </Button>
        </div>
        <div className="w-9/12 md:hidden text-right">
          <img
            src="/menu.svg"
            className="inline-block"
            onClick={() => setOffCanvas(true)}
          />
        </div>
      </div>
      <div
        className={classnames(
          "fixed bg-white z-10 right-0 top-0 h-full w-full p-10 md:hidden transition-all",
          offcanvas ? "right-0" : "-right-full "
        )}
      >
        <img
          src="/x.svg"
          className="absolute top-8  right-8 w-8"
          onClick={() => setOffCanvas(false)}
        />
        <Nav scheme="dark" dir="vertical" />
      </div>
    </>
  );
}
