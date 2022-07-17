import classnames from "classname";

export default function ContactItem({ label, value, icon, className }) {
  const addClassName = className ? `${className}` : "";

  return (
    <div className={classnames("flex item-start", addClassName)}>
      <img src={icon} className="w-8" />
      <div className="ml-4">
        <div className="text-sm font-semibold mb-2">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  );
}
