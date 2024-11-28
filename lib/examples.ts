export type Example = {
  slug: string;
  name: string;
  image: string;
  examples: {
    text: string;
    voiceFile: string;
  }[];
};

export const examples: Example[] = [
  {
    slug: "donald-trump",
    name: "Donald Trump",
    image: "/examples/trump.png",
    examples: [
      {
        text: "Hi there! This is a sample voice created using AnyVoice",
        voiceFile: "/examples/trump.wav",
      },
      {
        text: "The quick brown fox jumps over the lazy dog",
        voiceFile: "/examples/trump-2.wav",
      },
    ],
  },
  {
    slug: "elon-musk",
    name: "Elon Musk",
    image: "/examples/elon.png",
    examples: [
      {
        text: "Hi there! This is a sample voice created using AnyVoice",
        voiceFile: "/examples/elon.wav",
      },
      {
        text: "The quick brown fox jumps over the lazy dog",
        voiceFile: "/examples/elon-2.wav",
      },
    ],
  },
  {
    slug: "taylor-swift",
    name: "Taylor Swift",
    image: "/examples/taylor.png",
    examples: [
      {
        text: "Hi there! This is a sample voice created using AnyVoice",
        voiceFile: "/examples/taylor.wav",
      },
    ],
  },
  {
    slug: "mr-beast",
    name: "MrBeast",
    image: "/examples/mrbeast.png",
    examples: [
      {
        text: "Hi there! This is a sample voice created using AnyVoice",
        voiceFile: "/examples/mrbeast.wav",
      },
    ],
  },
];
