import classnames from "classname";

export default function SkillCard({ name, level, image, imageClassName }) {
  const addImageClasName = imageClassName ? `${imageClassName}` : "";
  return (
    <div className="bg-white shadow-skill rounded-lg p-6 flex items-center">
      <img src={image} className={classnames("mr-6", imageClassName)}></img>
      <div>
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm text-gray-600 font-semibold">{level}</p>
      </div>
    </div>
  );
}
