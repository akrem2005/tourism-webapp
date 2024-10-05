import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll event listener to change background color
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 sm:p-4 transition-colors duration-300 ${
        scrollY > 50 ? "bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="text-white text-xl font-bold">EXPLORE</div>
      {/* Desktop Menu */}
      <div className="space-x-6 hidden sm:block">
        <a href="#" className="text-white">
          Home
        </a>
        <a href="/about" className="text-white">
          About us
        </a>
        <a href="#packages" className="text-white">
          Packages
        </a>
        <button className="bg-gray-700 text-white px-4 py-2 rounded">
          Contact us
        </button>
      </div>
      {/* Mobile Menu Button */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-gray-800 text-white sm:hidden flex flex-col items-center space-y-4 py-6">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="/about" className="text-white">
            About us
          </a>
          <a href="#packages" className="text-white">
            Packages
          </a>
          <button className="bg-gray-700 text-white px-4 py-2 rounded">
            Contact us
          </button>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white text-center p-4">
      <h1 className="text-[60px] font-comfortaa font-bold">Explore Ethiopia</h1>
      <Link to="/about">
        <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded">
          Learn More
        </button>
      </Link>
    </div>
  );
};

const MainSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-8 space-y-8 md:space-y-0 p-4">
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4">
          Your Gateway to Unforgettable Adventures
        </h2>
        <p className="mb-4">
          Welcome to the Ethiopia Tourism App, where your journey begins! Our
          user-friendly platform provides you with all the tools you need to
          plan, book, and enjoy your travels across this stunning country.
        </p>
        <button className="border border-black px-4 py-2 rounded">
          Start now
        </button>
      </div>
      <img
        src="/sideimage.jpg"
        alt="View from an airplane window showing a beautiful landscape"
        className="w-[300px] h-[400px] object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

const PackagesSection = () => {
  const packages = [
    {
      title: "Historical Tour",
      description:
        "Discover the ancient history of Ethiopia through our guided historical tours to Lalibela, Axum, and Gondar.",
      image:
        "https://www.blackpast.org/wp-content/uploads/prodimages/files/blackpast_images/Obelisk_Asum_Ethiopia_1936.jpg",
    },
    {
      title: "Wildlife Safari",
      description:
        "Explore the rich wildlife of Ethiopia with our exclusive safari packages to Bale Mountains and Omo Valley.",
      image:
        "https://www.wildlifeworldwide.com/images/discover/africa_ethiopia_ethiopian_wolf_simien_mountains_thumbnail.jpg",
    },
    {
      title: "Cultural Experience",
      description:
        "Immerse yourself in Ethiopia’s vibrant culture by visiting traditional tribes, festivals, and markets.",
      image:
        "https://www.passionethiopiatours.com/images/culture/P1050166-01.jpeg",
    },
  ];

  return (
    <div id="packages" className="py-16 bg-gray-50 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Travel Packages</h2>
      <div className="container px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
              <p className="mb-4">{pkg.description}</p>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#F3E6DE] py-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg">Ethio Tour App</h3>
            <p className="text-sm mt-2">
              Cultural heritage, stunning landscapes, and diverse wildlife of
              Ethiopia: a country that blends history, natural beauty, and
              vibrant traditions.
            </p>
          </div>
          <div className="flex space-x-8">
            <div>
              <h4 className="font-bold">Home</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Legal</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-sm">
                    Discover
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Special Deals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Community Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="flex space-x-4 mt-2"></div>
          </div>
          <div>
            <h4 className="font-bold">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-600">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-600">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <br></br>
        <div className="text-center mt-8 text-sm text-gray-600">
          Ethio Tour App © all right reserved 2024
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div>
      <header
        className="bg-cover bg-center h-96"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      >
        <Navigation />
        <HeroSection />
      </header>
      <main className="py-16 px-8">
        <MainSection />
        <PackagesSection />
      </main>
      <footer className="bg-[#F3E6DE] py-8">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
