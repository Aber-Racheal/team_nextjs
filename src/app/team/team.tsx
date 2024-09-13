"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  quote: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, quote, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-48 h-48 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={`/Images/${image}`} // Ensure the path is correct
        alt={name}
        width={200} // Adjust width according to your design
        height={200} // Adjust height according to your design
        className="w-full h-full object-cover"
      />
      {isHovered && (
        <div className="absolute inset-0 bg-custom-orange bg-opacity-100 flex flex-col items-center justify-center p-2 text-center">
          <p className="font-bold mb-1 text-white text-custom-30">{name}</p>
          <p className="text-white text-custom-20">{quote}</p>
        </div>
      )}
    </div>
  );
};

const teamMembers = [
  { name: 'Racheal Aber', quote: "I don't always test my code, but when I do, I do it in production.", image: 'racheal-aber.jpg' },
  { name: 'Mary Vivian. M', quote: "Why do programmers prefer dark mode? Because light attracts bugs!", image: 'mary-vivian.jpg' },
  { name: 'Maureen Njeri', quote: "I'm not antisocial, I just enjoy my personal space. I mean my code editor.", image: 'maureen-njeri.jpg' },
  { name: 'Faith Wachira', quote: "Keep calm and git commit", image: 'faith-wachira.jpg' },
  { name: 'Yvonne Martin', quote: "I am a Software Engineer, the only dates I get are updates", image: 'yvonne-martin.jpg' },
];


const TeamSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start sm:justify-center px-4 py-8 overflow-y-auto sm:overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-teal-500 text-custom-50 text-custom-teal">
        Expertise Behind the Insight:
        <span className="block text-xl sm:text-2xl text-teal-500 font-light">Meet the Minds Shaping LANDVISTA</span>
      </h2>
      <div className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-8 w-full max-w-5xl">
        <div className="sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 flex justify-center">
          <TeamMember {...teamMembers[0]} />
        </div>
        <div className="sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2 flex justify-center">
          <TeamMember {...teamMembers[1]} />
        </div>
        <div className="sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 flex justify-center">
          <TeamMember {...teamMembers[2]} />
        </div>
        <div className="sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4 flex justify-center">
          <TeamMember {...teamMembers[3]} />
        </div>
        <div className="sm:col-start-3 sm:col-end-4 sm:row-start-3 sm:row-end-4 flex justify-center">
          <TeamMember {...teamMembers[4]} />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
