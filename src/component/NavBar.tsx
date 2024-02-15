// NavBar.jsx
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-gray-800 p-4">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white hover:text-gray-400 hover:underline">Home</Link>
        <Link to="/about" className="text-white hover:text-gray-400 hover:underline">About Us</Link>
        <Link to="/contact" className="text-white hover:text-gray-400 hover:underline">Contact Us</Link>
      </div>
      {/* You can add more elements here, such as a logo or additional links */}
    </div>
  );
};

export default NavBar;