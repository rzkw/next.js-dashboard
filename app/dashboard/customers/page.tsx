import { Metadata } from "next";
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
    title: 'Customers',
  };


export default async function Page() {
    const customers = await fetchFilteredCustomers('');

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Customers</h1>
      </div>
      {/* In the tutorial, this page is left as an exercise */}
      <p className="mt-4 text-gray-500">
        This page is a placeholder. The tutorial focuses on the invoices functionality.
      </p>
    </div>
  );
}

