"use client";
import Image from "next/image";

const examples = [
  {
    name: "Elon Musk",
    image: "/examples/elon.webp",
    audio: "/examples/elon.wav",
  },
  {
    name: "Taylor Swift",
    image: "/examples/taylor.png",
    audio: "/examples/taylor.wav",
  },
  {
    name: "Donald Trump",
    image: "/examples/trump.webp",
    audio: "/examples/trump.wav",
  },
];

export default function Examples() {
  return (
    <div className="border px-5 py-8 rounded-md">
      <h2 className="text-2xl md:text-3xl text-primary font-bold text-center">
        Cloned Voice Examples
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 py-5 md:py-10">
        {examples.map((example, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 items-center p-3 rounded-md"
          >
            <h3 className="font-bold text-lg text-center">{example.name}</h3>
            <div className="w-12 h-12 overflow-hidden rounded-full">
              <Image
                src={example.image}
                alt={example.name}
                width={48}
                height={48}
              />
            </div>
            <audio src={example.audio} controls className="w-full h-10" />
          </div>
        ))}
      </div>
    </div>
  );
}
