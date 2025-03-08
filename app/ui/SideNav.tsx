import { ModeToggle } from "@/components/theme-toggle";

export default function SideNav() {
  return (
    <div className="flex flex-col h-full px-2 py-4 md:border-l md:border-border">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-1 justify-center items-center ">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
        <div className="">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
