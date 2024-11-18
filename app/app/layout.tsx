import PrivateHeader from "@/components/private-header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="pt-5">
        <PrivateHeader />
      </div>
      <div className="py-5 lg:py-10">{children}</div>
    </div>
  );
}
