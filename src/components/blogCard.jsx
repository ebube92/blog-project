export default function BlogCard({
  title,
  description,
  image,
  category,
  date,
}) {
  return (
    <div className="flex flex-col gap-5 bg-white p-5 rounded-lg shadow-md mb-6 font-family items-stretch">
      <img src={image} alt={title} className="rounded-lg object-cover" />

      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-2xl mb-3 font-semibold">{title}</h2>
        <p className="text-lg">{description}</p>
        <span className="text-md text-gray-700 font-semibold mb-2">
          {category} • {date}
        </span>
        <a
          href="#"
          className="text-gray-900 px-3 py-2 border-2 border-yellow-400 w-max rounded-lg text-sm hover:bg-yellow-400 hover:text-white transition duration-300 mt-auto"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
