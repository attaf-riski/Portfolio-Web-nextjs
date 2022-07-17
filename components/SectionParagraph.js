import classnames from "classname";

export default function SectionParagraph({ left, children }) {
  return (
    <p
      className={classnames(
        "text-lg mt-2 text-gray-600",
        !left && "text-center"
      )}
    >
      {children}
    </p>
  );
}
