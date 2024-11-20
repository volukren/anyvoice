import { getRequests } from "@/actions/get-requests";
import dayjs from "dayjs";
import Link from "next/link";
export default async function HistoryPage() {
  const requests = await getRequests();

  return (
    <>
      <h1 className="text-2xl font-bold text-primary">History</h1>
      <div className="my-2 p-5 bg-white rounded-md">
        <table className="w-full border">
          <thead className="text-left text-lg bg-gray-50 border-b">
            <tr>
              <th className="p-2 border-r">Date</th>
              <th className="p-2 border-r">Sample Audio</th>
              <th className="p-2">Characters Used</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id} className="border-b text-lg border-gray-100">
                <td className="p-2 border-r">
                  {dayjs(request.createdAt).format("MMM D, YYYY HH:mm:ss")}
                </td>
                <td className="p-2 border-r">
                  <Link
                    href={`/app/sample/${request.sampleAudioId}`}
                    className="text-blue-600 hover:underline"
                  >
                    {request.sampleAudio.name}
                  </Link>
                </td>
                <td className="p-2">{request.characterCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
