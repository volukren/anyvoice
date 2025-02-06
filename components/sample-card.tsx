"use client";
import Link from "next/link";
import clsx from "clsx";
import dayjs from "dayjs";
import DeleteSampleButton from "./delete-sample-button";

type SampleCardProps = {
  id: number;
  name: string;
  createdAt: Date;
  public: boolean;
};

export default function SampleCard({ sample }: { sample: SampleCardProps }) {
  return (
    <Link
      href={`/app/sample/${sample.id}`}
      key={sample.id}
      className={clsx(
        "flex flex-col gap-4 bg-base-100 border rounded-md text-center p-3 relative"
      )}
    >
      {!sample.public &&  <DeleteSampleButton id={sample.id} />}
      <span className="font-bold text-lg">{sample.name}</span>
      <span>{dayjs(sample.createdAt).format("MMM D, YYYY")}</span>
    </Link>
  );
}
