import Pricing from "@/components/pricing";

export default function BillingPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-primary">Billing</h1>
      <div className="my-2 p-5 bg-white rounded-md">
        <Pricing />
      </div>
    </>
  );
}
