// app/service/page.js
import { Suspense } from "react";
import ServicePageContent from "./ServicePageContent";

export default function ServicePage() {
  return (
    <Suspense fallback={<div className="text-center p-6 text-white">กำลังโหลด...</div>}>
      <ServicePageContent />
    </Suspense>
  );
}
