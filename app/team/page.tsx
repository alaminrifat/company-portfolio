import React from "react";
import Image from "next/image";
import PersonImage from "@/app/assets/person.jpg";
const teamMembers = [
  {
    name: "Al Amin Rifat",
    position: "Frontend Developer",
    image: "https://i.ibb.co.com/p6c9KLvT/1728664445826.jpg",
  },
  {
    name: "Munim Mubashshir",
    position: "Frontend Developer",
    image:
      "https://i.ibb.co.com/LzkZBPPT/465887222-1981294758961357-8390052828290416883-n.jpg",
  },
  {
    name: "GM Zulkar Nine",
    position: "AI & ML Engineer",
    image:
      "https://i.ibb.co.com/LXsDNSmY/473274976-9162272850536328-509630957885189318-n.jpg",
  },
  {
    name: "Symon Barua",
    position: "Backend Developer",
    image:
      "https://i.ibb.co.com/tTJ46DyM/474481848-2017021255442964-3007755236761217751-n.jpg",
  },
  {
    name: "Nahid Hasan",
    position: "Backend Developer",
    image: "https://i.ibb.co.com/kgmrrMsX/Placeholder-Person.jpg",
  },
  {
    name: "Kazi Towhid",
    position: "Front End Developer",
    image: "https://i.ibb.co.com/kgmrrMsX/Placeholder-Person.jpg",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-32">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Meet Our Team
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          A talented group of individuals working together to build innovative
          solutions.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
          >
            <Image
              src={member.image ?? PersonImage}
              alt={member.name}
              width={400}
              height={300}
              className="w-full h-56 object-contain"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {member.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
