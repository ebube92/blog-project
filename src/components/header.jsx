export default function Header() {
  return (
    <div>
      <header className="bg-gray-900 py-4 px-8 flex items-center justify-between">
        <h1 className="font-logo text-2xl font-semibold text-white">
          [Ebube Writes]
        </h1>
        <nav className="text-white mt-2 font-family">
          <ul className="flex space-x-4">
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>Categories</li>
            </a>
            <a href="">
              <li>About</li>
            </a>
            <a href="">
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </header>
      <div className="h-2 bg-yellow-400"></div>
      <p className="font-family bg-gray-50 p-4 text-center text-xl border-b border-gray-400">Thoughts on code, design and growth.</p>
    </div>
  );
}
