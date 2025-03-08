import SideNav from "../ui/SideNav";
import { Toaster } from "@/components/ui/sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden min-h-screen ">
      <div className="w-full md:w-64 flex-shrink-0">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto ">
        <div className="max-w-7xl mx-auto">{children}</div>
        <Toaster />
      </div>
    </div>
  );
}
