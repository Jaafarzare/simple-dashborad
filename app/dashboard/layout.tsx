import { metadata } from "./metadata";

export { metadata };

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto py-4 px-4 min-h-screen">{children}</div>
  );
}
