import Pricing from "@/components/pricing";

export default function BillingPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-primary text-center">Billing</h1>
      <div className="my-2 p-5  rounded-md">
        <Pricing />
      </div>
    </>
  );
}
