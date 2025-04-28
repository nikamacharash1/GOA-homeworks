import React from "react";

const Home = () => {
  const handleClick = () => {
    console.log("Home");
  };

  return (
    <div className="p-8 bg-blue-200 rounded shadow-lg hover:bg-blue-300">
      {/* Heading with Tailwind CSS styles */}
      <h1 className="text-3xl font-bold text-blue-700 hover:text-blue-900">Welcome to the Home Page</h1>
      
      {/* Button styled with Tailwind CSS */}
      <button
        onClick={handleClick}
        className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Click me
      </button>
    </div>
  );
};

// export default Home;


2
import React from "react";

const About = () => {
  const handleClick = () => {
    console.log("About");
  };

  return (
    <div className="p-8 bg-green-200 rounded shadow-lg hover:bg-green-300">
      {/* Heading with Tailwind CSS styles */}
      <h1 className="text-3xl font-bold text-green-700 hover:text-green-900">Welcome to the About Page</h1>
      
      {/* Button styled with Tailwind CSS */}
      <button
        onClick={handleClick}
        className="mt-4 py-2 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Click me
      </button>
    </div>
  );
};

// export default About;

3
import React from "react";

const Contact = () => {
  const handleClick = () => {
    console.log("Contact");
  };

  return (
    <div className="p-8 bg-yellow-200 rounded shadow-lg hover:bg-yellow-300">
      {/* Heading with Tailwind CSS styles */}
      <h1 className="text-3xl font-bold text-yellow-700 hover:text-yellow-900">Welcome to the Contact Page</h1>
      
      {/* Button styled with Tailwind CSS */}
      <button
        onClick={handleClick}
        className="mt-4 py-2 px-6 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
      >
        Click me
      </button>
    </div>
  );
};

// export default Contact;
