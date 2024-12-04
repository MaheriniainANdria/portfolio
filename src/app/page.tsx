'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-gray-800 text-white py-4">
        <div className="max-w-6xl mx-auto flex justify-center space-x-6">
          <Link href="/about" className="hover:text-blue-400">About Me</Link>
          <Link href="/skills" className="hover:text-blue-400">Skills</Link>
          <Link href="/projects" className="hover:text-blue-400">Projects</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact Me</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20">
        <h1 className="text-5xl font-bold text-gray-800">Hi, I'm Maheriniaina Andriaharisoa</h1>
        <p className="mt-6 text-lg text-gray-600 max-w-md">
          Je suis étudiant en informatique depuis 2021. Passionné par les technologies modernes, 
          j'aime développer des projets qui résolvent des problèmes réels.
        </p>
        <Link href="/about">
          <button className="mt-10 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
            About Me
          </button>
        </Link>
      </section>
    </main>
  );
}
