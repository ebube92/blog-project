export default function FilterBar({ selectedCategory, setSelectedCategory }) {
  const categories = ["All", "Tech", "Travel", "Food"];

  return (
    <div className="flex items-center justify-center gap-3 p-4 bg-gray-50 font-family">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-button ${
            selectedCategory === category ? "bg-gray-900 text-white" : ""
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
