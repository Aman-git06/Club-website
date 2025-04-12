import React from 'react';
import { CircuitBoard, Wifi, Plug, Eye, Bot, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Domains() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 border-2 border-black inline-block px-8 py-2">
          Domains
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          <Link to="/web-development">
            <div className="bg-gray-900 p-6 rounded-lg text-white text-center cursor-pointer hover:bg-gray-800 transition duration-200">
              <CircuitBoard className="w-12 h-12 mx-auto mb-4" />
              <div>Web Development</div>
            </div>
          </Link>

          <a
  href="https://docs.google.com/document/d/1_ZhuqcW527UBPetXXz6VtjeVkmY3tttM8WBhiQp-iGQ/edit?tab=t.jwvnm759302y#heading=h.y71f4cl88h1"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="bg-gray-900 p-6 rounded-lg text-white text-center hover:bg-gray-800 transition duration-200">
    <Plug className="w-12 h-12 mx-auto mb-4" />
    <div>Electronics</div>
  </div>
</a>


          <div className="bg-gray-900 p-6 rounded-lg text-white text-center  hover:bg-gray-800 transition duration-200">
            <Bot className="w-12 h-12 mx-auto mb-4" />
            <div>Robotics</div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg text-white text-center  hover:bg-gray-800 transition duration-200">
            <Wifi className="w-12 h-12 mx-auto mb-4" />
            <div>Internet of Things</div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg text-white text-center  hover:bg-gray-800 transition duration-200">
            <Eye className="w-12 h-12 mx-auto mb-4" />
            <div>Computer Vision</div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg text-white text-center  hover:bg-gray-800 transition duration-200">
            <Code className="w-12 h-12 mx-auto mb-4" />
            <div>AI/ML</div>
          </div>

        </div>
      </div>
    </section>
  );
}
