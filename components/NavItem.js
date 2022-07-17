import classnames from "classname";

export default function NavItem({ scheme, href, children }) {
  const schemes = {
    light: "text-white text-opacity-60 hover:text-opacity-100",
    dark: "text-black",
  };

  const pickedScheme = schemes[scheme];

  return (
    <li>
      <a
        href={href}
        className={classnames("text-lg font-semibold ", pickedScheme)}
      >
        {children}
      </a>
    </li>
  );
}
