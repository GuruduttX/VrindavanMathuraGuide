// app/filter/page.tsx
import FilteredPackagesClient from "@/components/Filtered/FilteredPackagesClient";
import { Suspense } from "react";


export default function FilterPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading packages...</div>}>
      <FilteredPackagesClient />
    </Suspense>
  );
}
