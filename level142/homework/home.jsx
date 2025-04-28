import React from "react";

const Home = () => {
  return (
    <div className="p-8 bg-blue-100 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h1 className="text-4xl font-bold text-blue-700">Welcome to Home Page</h1>
      <p className="mt-4 text-lg text-gray-700">This is the homepage of our website!</p>
    </div>
  );
};

// export default Home;


2
import React from "react";

const About = () => {
  return (
    <div className="p-8 bg-green-100 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h1 className="text-4xl font-bold text-green-700">About Us</h1>
      <p className="mt-4 text-lg text-gray-700">Learn more about our mission and vision.</p>
    </div>
  );
};

// export default About;




3
import React from "react";

const Contact = () => {
  return (
    <div className="p-8 bg-yellow-100 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h1 className="text-4xl font-bold text-yellow-700">Contact Us</h1>
      <p className="mt-4 text-lg text-gray-700">Get in touch with us for more information!</p>
    </div>
  );
};

// export default Contact;


4
import React from "react";

const Login = () => {
  return (
    <div className="p-8 bg-purple-100 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h1 className="text-4xl font-bold text-purple-700">Login Page</h1>
      <form className="mt-4">
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        />
        <button className="p-2 bg-purple-600 text-white rounded w-full hover:bg-purple-700 transition-all duration-300">
          Login
        </button>
      </form>
    </div>
  );
};

// export default Login;


5
import React from "react";

const Signup = () => {
  return (
    <div className="p-8 bg-pink-100 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h1 className="text-4xl font-bold text-pink-700">Signup Page</h1>
      <form className="mt-4">
        <input
          type="text"
          placeholder="Name"
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        />
        <button className="p-2 bg-pink-600 text-white rounded w-full hover:bg-pink-700 transition-all duration-300">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
