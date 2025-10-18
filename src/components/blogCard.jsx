export default function BlogCard() {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md mb-6 font-family items-stretch">
      <img src={image} alt={title} className="rounded-lg object-cover" />

      <div>
        <h2 className="text-2xl mb-3">{title}</h2>
        <p className="text-lg">{description}</p>
        <span className="text-md text-gray-700 font-semibold">
          {category} . {date}
        </span>
        <a href="#">Read More</a>
      </div>
    </div>
  );
}
