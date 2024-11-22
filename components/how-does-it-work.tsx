export default function HowDoesItWork({ className }: { className: string }) {
  return (
    <div className={className}>
      <h2 className="text-2xl md:text-3xl text-primary font-bold text-center">
        How it Works
      </h2>
      <div className="grid gap-5 py-5 max-w-md mx-auto">
        <div className="flex gap-2 items-center">
          <span className="bg-gray-100 border border-gray-300 block rounded-full px-5 py-3 font-bold">
            1
          </span>
          <div className="border rounded-md p-2 flex-1 text-lg">
            Upload sample audio
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span className="bg-gray-100 border border-gray-300 block rounded-full px-5 py-3 font-bold">
            2
          </span>
          <div className="border rounded-md p-2 flex-1 text-lg">
            Generate new audio from your text using the trained model
          </div>
        </div>
        <div className="text-center text-lg">
          ~ 30 sec to clone and TTS any text
        </div>
      </div>
    </div>
  );
}
