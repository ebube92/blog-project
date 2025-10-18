import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16 font-family px-5">
      <div className="max-w-6xl mx-auto px-5 grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-logo font-semibold mb-3 text-white">
            Ebube Writes
          </h2>
          <p className="text-sm leading-relaxed">
            Thoughts, stories, and insights from around the world. Stay curious,
            stay inspired.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-400">
              <img src={instagram} alt="instagram" className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <img src={twitter} alt="twitter" className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <img src={linkedin} alt="linkedin" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        © {new Date().getFullYear()} Ebube Writes. All rights reserved.
      </div>
    </footer>
  );
}
