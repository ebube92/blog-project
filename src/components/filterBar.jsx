
export default function FilterBar() {

  return (
    <div className="flex items-center justify-center gap-3 p-4 bg-gray-50 font-family">
      <button className="filter-button">All</button>
      <button className="filter-button">Tech</button>
      <button className="filter-button">Travel</button>
      <button className="filter-button">Food</button>
    </div>
  );
}
