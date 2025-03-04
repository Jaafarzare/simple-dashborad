import BarChart from "../ui/chart/BarChart";
import LineChart from "../ui/chart/LineChart";
import PieChart from "../ui/chart/PieChart";

export default function page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">داشبورد فروش</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <LineChart />
        <BarChart />
        <PieChart />
      </div>
    </div>
  );
}
