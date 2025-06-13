'use client';

import React, { useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "Admin Dashboard | Propel2Excel",
  description: "Mock dashboard for managing programs, events, and applications at Propel2Excel.",
  openGraph: {
    title: "Admin Dashboard | Propel2Excel",
    description: "Interactive and responsive admin dashboard for nonprofit program management.",
    url: "https://my-portfolio-h3rg.vercel.app/dashboard",
    siteName: "Propel2Excel Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [applications, setApplications] = useState([
    { name: "Ava Johnson", program: "Tech Mentorship", status: "Pending" },
    { name: "Liam Patel", program: "Finance Fast-Track", status: "Accepted" },
    { name: "Sara Lee", program: "Tech Mentorship", status: "Rejected" },
  ]);

  const filteredApplications = applications.filter((app) =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const updateStatus = (index: number, newStatus: string) => {
    const updated = [...applications];
    updated[index].status = newStatus;
    setApplications(updated);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow px-6 py-4 mb-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Propel2Excel Admin</h1>
        <div className="space-x-4">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        </div>
      </nav>

      <div className="px-6">
        <h2 className="text-2xl font-semibold mb-4">Mentorship Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-bold">Tech Mentorship</h3>
            <p>Focus: Web Dev, AI | 120 mentees</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-bold">Finance Fast-Track</h3>
            <p>Focus: Investment Banking | 80 mentees</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <ul className="list-disc list-inside mb-8">
          <li>Career Accelerator Workshop – June 20</li>
          <li>Alumni Panel on Equity in Tech – June 27</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Student Applications</h2>
        <input
          type="text"
          placeholder="Search student..."
          className="mb-4 p-2 w-full max-w-sm border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Program</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((app, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{app.name}</td>
                <td className="p-2">{app.program}</td>
                <td className="p-2">{app.status}</td>
                <td className="p-2 space-x-2">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded"
                    onClick={() => updateStatus(index, "Accepted")}
                  >
                    Accept
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => updateStatus(index, "Rejected")}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
