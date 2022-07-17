export default function ProjectItem({ name, desctiption, image }) {
  return (
    <article className="text-center">
      <img src={image} className="w-full rounded-lg" />
      <h3 className="text-xl font-semibold mt-4 mb-1">{name}</h3>
      <p className="text-lg text-gray-400">{desctiption}</p>
    </article>
  );
}
