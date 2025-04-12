import React from 'react';

export function Projects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 border-2 border-black inline-block px-8 py-2">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                 alt="Project 1" 
                 className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Robotic Arm</h3>
              <p>A 6-DOF robotic arm with precise control.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                 alt="Project 2" 
                 className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Smart Home</h3>
              <p>IoT-based home automation system.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                 alt="Project 3" 
                 className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Vision System</h3>
              <p>Computer vision for object detection.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}