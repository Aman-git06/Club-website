import React from 'react';

export function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 border-2 border-black inline-block px-8 py-2">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                 alt="Electronics Projects" 
                 className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            
          <p className="text-lg leading-relaxed border border-black rounded-lg p-6">
  Welcome to Cygnus, a community of dreamers, tinkerers, coders, builders, and change makers.<br /><br />
  Cygnus Club is the innovation and tech hub of NIT Manipur, created to nurture curiosity, foster creativity, and empower students to explore beyond the boundaries of textbooks. From electronics and embedded systems to AI/ML, robotics, IoT, and web development — Cygnus is where ideas are born and built.<br /><br />
  We believe that learning is best when it’s hands on. That’s why we bring together passionate minds to collaborate on real-world projects, participate in competitions, and build solutions that matter. Whether you're a beginner or a seasoned developer, Cygnus is your launchpad to experiment, fail fast, learn faster, and grow.<br /><br />
  Join us at Cygnus — where passion meets purpose, and technology meets imagination.
</p>


            
          </div>
        </div>
      </div>
    </section>
  );
}