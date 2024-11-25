import clsx from "clsx";

export default function SupportedLanguages({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "py-2 mx-auto md:mx-0 text-center md:text-left",
        className
      )}
    >
      <h3>Supported Languages</h3>
      <div className="flex justify-center md:justify-start gap-1">
        <span className="text-xl">🇺🇸</span>
        <span className="text-xl">🇫🇷</span>
        <span className="text-xl">🇩🇪</span>
        <span className="text-xl">🇪🇸</span>
        <span className="text-xl">🇮🇹</span>
        <span className="text-xl">🇵🇹</span>
        <span className="text-xl">🇨🇿</span>
        <span className="text-xl">🇵🇱</span>
        <span className="text-xl">🇷🇺</span>
        <span className="text-xl">🇳🇱</span>
        <span className="text-xl">🇹🇷</span>
        <span className="text-xl">🇦🇪</span>
        <span className="text-xl">🇨🇳</span>
      </div>
    </div>
  );
}
