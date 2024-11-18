import PrivateHeader from "@/components/private-header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-gray-50">
      <div className="p-5 border-b bg-white">
        <div className="max-w-5xl mx-auto">
          <PrivateHeader />
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4">
        <div className="py-5 lg:py-10">{children}</div>
      </div>
    </div>
  );
}
