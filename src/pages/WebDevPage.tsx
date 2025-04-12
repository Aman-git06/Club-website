import React from 'react';

const WebDevPage = () => {
  return (
    <div className="px-4 md:px-8 py-10 flex justify-center">
      <div className="border border-black p-6 md:p-10 max-w-3xl w-full text-zinc-800">
        <h1 className="text-3xl md:text-4xl font-extrabold decoration-black-700 mb-8 leading-snug max-w-xl">
          "So You’re Trying to Make Web Development Work? Here’s Where You Start".
        </h1>

        <p className="mb-4">
          There is an immense amount of noise regarding web development courses. Anyone throwing terms at you —
          “full-stack,” “React,” “back-end,” “Next.js,” “APIs,” and on and on. Either way, you’re guaranteed to feel
          overwhelmed if you’re someone who is more of a newbie. Been there.
        </p>

        <p className="mb-4">
          This blog is not for people looking to master everything within 30 days; it is for beginners — especially
          students — willing to learn the basics properly for at least a month or two more.
        </p>

        <p className="mb-6">
          Here is what worked for me. Do with it what you will. But don’t sit around “researching roadmaps” forever.
        </p>

        <h2 className="text-xl font-bold mb-2">Step 1: Learn HTML, CSS, and JavaScript (The Core)</h2>
        <p className="mb-4">
          Before you leap excitedly into React, MERN, backend, or any newly-anointed shiny thing, you must first have a
          proper grounding in the fundamentals.
        </p>

        <h3 className="font-semibold mb-2">Core Technology Stack That Comes First</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>HTML</strong> — The structure. The skeleton.</li>
          <li><strong>CSS</strong> — The style. The look-and-feel.</li>
          <li><strong>JavaScript</strong> — The behavior. The interactivity.</li>
        </ul>

        <p className="mb-4">
          And once you go advanced you realize that this is not really that true... but eh, close enough.
        </p>

        <p className="mb-4">
          Those three are your building blocks. And, no, they are not any “too basic” to matter. You should not even
          think about frameworks if you can’t build a static homepage with confidence using these three.
        </p>

        <p className="mb-4">
          I gave myself a period of about 1.5 months to cover the basics. More than feasible, even with college and
          classes, if you just actually sit down and code.
        </p>

        <p className="mb-4 font-medium italic">
          My target was simple: “Can I build a basic visual clone of Amazon’s homepage using plain HTML, CSS, and a bit
          of JS?”
        </p>

        <p className="mb-4">
          If yes, proceed. If no, keep building small projects and keep practicing. This is your signal of real
          progress, not finishing an intense 10-hour YouTube tutorial.
        </p>

        <h2 className="text-xl font-bold mb-2">Step 2: Use AI Intelligently (Not Like a Newbie)</h2>
        <p className="mb-4">
          This is one of my secret weapons: ChatGPT, Claude, or Gemini.
          <br />
          But wait, not for coding.
        </p>
        <p className="mb-4">
          I tossed in things to these AIs to explain to me in the simplest of terms — like:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li>“Explain Flexbox to me like I’m a ten-year-old.”</li>
          <li>“Break down JavaScript functions for a total novice.”</li>
        </ul>

        <p className="mb-4">
          It changed everything. Imagine having a private tutor anytime you needed one, practically.
        </p>

        <p className="mb-4">
          But for coding, do not do this. If you copy-paste code from ChatGPT, you destroy your own learning. You will
          never get to know why it works; and that is far more important than getting some output on a screen.
        </p>

        <p className="mb-4">
          So ask questions. Understand what you just read. Then write the code by yourself.
        </p>

        <h2 className="text-xl font-bold mb-2">Step 3: Be Warned of Tutorial Hell</h2>
        <p className="mb-4">
          This trap, too, sees many people succumb. You watch 50 tutorials; you feel smart. But when it’s time to sit
          down and actually code something on your own, it suddenly goes blank.
        </p>

        <p className="mb-4 font-bold italic">Welcome to tutorial hell.</p>

        <h3 className="font-semibold mb-2">Solution:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Watch just enough to understand the concept.</li>
          <li>Then build something. Anything.</li>
          <li>Break. Fix. Repeat.</li>
        </ul>

        <p className="mb-4">
          The moment you shut the screen and start building in your own right is the moment that real learning starts.
        </p>

        <h2 className="text-xl font-bold mb-2">Step 4: Begin with MERN or Whatever Stack That Just Feels Right</h2>

        <p className="mb-4 font-medium">MERN stack usually does wonders:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>MongoDB</strong> (database)</li>
          <li><strong>Express.js</strong> (server framework)</li>
          <li><strong>React</strong> (frontend)</li>
          <li><strong>Node.js</strong> (runtime)</li>
        </ul>

        <p className="mb-4">
          It is suitable for beginners, extremely trendy, and will give you a good bit of information on how full-stack
          applications function.
        </p>

        <p className="mb-4">If you’re not cool with MERN, here are some valid alternatives:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Next.js — React-based but more modern. Recommended.</li>
          <li>Spring Boot — Great if you’re into Java.</li>
          <li>Golang — Faster performance.</li>
          <li>Ruby or PHP — Old-school but simple and still relevant.</li>
          <li>Python — Multipurpose language.</li>
        </ul>

        <p className="mb-4 font-semibold">Pick the one that fits your vibe — but the golden rule? Build while learning.</p>

        <h2 className="text-xl font-bold mb-2">Step 5: Follow These Three Creators Blindly (I Did)</h2>

        <p className="mb-2">
          Not all tutorials are made equal. Some just make you feel like you’ve learned something. These creators?
          They actually teach you to think like a developer:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li><strong>Harkirat Singh</strong> — Assignments that push you to build. No spoon-feeding. Just work.</li>
          <li><strong>Hitesh Choudhary</strong> — Breaks complex stuff into the simplest explanations.</li>
          <li><strong>Shreyians Coding School</strong> — Solid beginner-level content.</li>
        </ul>

        <p className="mb-4 italic">Follow them. Do their playlists. Trust the process. Even if it feels hard or confusing — keep going.</p>

        <h2 className="text-xl font-bold mb-2">TL;DR (But Don’t Be Lazy — Read the Whole Thing)</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Start with HTML, CSS, JS — nothing more.</li>
          <li>Give yourself 1.5 months (yes, even with college).</li>
          <li>Goal: Build a basic clone yourself, no tutorials.</li>
          <li>Use ChatGPT or Gemini for explanations, not for code.</li>
          <li>Less tutorials, more building.</li>
          <li>Once you’re ready: MERN, Next.js, or whatever stack fits you.</li>
          <li>Follow Harkirat, Hitesh, Shreyians — total goldmine of content.</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">Lastly</h2>
        <p className="mb-4">
          You don’t need a perfect roadmap. What you do need is momentum. The more you build, the faster everything
          starts making sense. The first few weeks? Pure pain. That’s normal.
        </p>

        <p className="mb-4 italic">
          But stay consistent, and one day you’ll think: “Are... I can actually build this stuff, and explain it sbko.”
        </p>

        <p className="font-bold mb-4">Build. Break. Learn. Repeat.</p>

        <p className="mb-4">
          …and yeah. For any interest or just to have a conversation about Web3, Solidity, Ethereum, app dev, or smart
          contracts — get in touch with me. <br />
          Otherwise, of course, don’t.
        </p>

        <p className="text-sm text-zinc-600">— Abhinav Patra</p>
        <a
          href="https://github.com/abhinavpatra"
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/abhinavpatra
        </a>
      </div>
    </div>
  );
};

export default WebDevPage;
