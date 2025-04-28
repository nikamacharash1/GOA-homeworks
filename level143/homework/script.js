import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); 
  };

  const reset = () => {
    setCount(0); 
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-3xl font-bold">Counter: {count}</h2>
      <button
        onClick={increment}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        Increment
      </button>
      <button
        onClick={reset}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
      >
        Reset
      </button>
    </div>
  );
};

// export default Counter;



2
import React, { useState } from "react";
import Counter from "./Counter";

const Home = () => {
  const [lessonText, setLessonText] = useState("");

  const addLesson = () => {
    const newLesson = prompt("Enter lesson details:");
    setLessonText(newLesson);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      <h1 className="text-4xl font-bold">My Portfolio</h1>

      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl">Today's Lesson:</h2>
        <p className="text-lg text-gray-700">{lessonText || "No lesson added"}</p>
        <button
          onClick={addLesson}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
        >
          Add Lesson
        </button>
      </div>

      <div className="w-full mt-8">
        <Counter /> {/* Add the Counter component */}
      </div>
    </div>
  );
};

// export default Home;


3
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"; 
import Contact from "./components/Contact"; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <nav className="bg-blue-600 p-4 text-white">
          <ul className="flex justify-center space-x-8">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        
        <div className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// export default App;



4

import React from "react";

const About = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="mt-4">This is a page about me. Here I can write more information about my background and goals.</p>
    </div>
  );
};

// export default About;

import React from "react";

const Contact = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-4">You can contact me at example@example.com.</p>
    </div>
  );
};

export default Contact;