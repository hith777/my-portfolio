'use client';

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Hithesh Kumar Duttuluri</h1>
        <p className="text-lg">Web Developer | Full-Stack Engineer | Mission-Driven Technologist</p>
        <div className="mt-4 space-x-4">
          <a href="https://github.com/hith777" target="_blank" className="underline">GitHub</a>
          <a href="https://linkedin.com/in/hitheshd" target="_blank" className="underline">LinkedIn</a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Agent Driven Knowledge Analyst</h3>
            <p className="my-2">Built a multi-agent system using planning, semantic reranking, and tool calling. Integrated FAISS and Neo4j to enhance context reasoning. Fine-tuned LLMs using LoRA for domain-specific Q&A.</p>
            <a href="https://github.com/hith777" target="_blank" className="underline">View on GitHub</a>
          </div>

          <div className="border p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">AI Literature Guide</h3>
            <p className="my-2">Developed an AI assistant that parses, summarizes, and semantically searches academic PDFs using OpenAI's Agent SDK. Implemented fault-aware chunking and resilient search.</p>
            <a href="https://github.com/hith777" target="_blank" className="underline">View on GitHub</a>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Languages: JavaScript, TypeScript, Python, Java, SQL</li>
          <li>Frameworks: React, Next.js, Spring Boot</li>
          <li>Databases: MySQL, PostgreSQL, MongoDB</li>
          <li>Tools: Docker, AWS, Git, CI/CD</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: <a href="mailto:hitheshduttuluri@gmail.com" className="underline">hitheshduttuluri@gmail.com</a></p>
      </section>
    </main>
  );
}
