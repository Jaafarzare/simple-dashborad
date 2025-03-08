import SideNav from "../ui/SideNav";
import { metadata } from "./metadata";
import { Toaster } from "@/components/ui/sonner";
export { metadata };

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" py-4 px-4 min-h-screen flex flex-col md:flex-row">
      <div className="w-64 flex-shrink-0">
        <SideNav />
      </div>

      <div className="flex-1 ">{children}</div>
      <Toaster />
    </div>
  );
}
