import classnames from "classname";

export default function Button({ href, className, variant, children, pill }) {
  const variants = {
    "outline-yellow":
      "border border-yellow-500 text-yellow-500 hover:text-black hober:bg-yellow-500",
    "fill-yellow": `bg-yellow-500 text-black hover:bg-yellow-600`,
    black: "bg-black text-white hover:bg-opacity-90",
  };

  const pickedVariant = variants[variant];

  return (
    <a
      href={href}
      className={classnames(
        "transition py-3 px-10 text-lg font-semibold inline-block",
        pill && "rounded-full",
        pickedVariant,
        className
      )}
    >
      {children}
    </a>
  );
}
