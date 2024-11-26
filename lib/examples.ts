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
];
