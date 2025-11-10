import { useEffect, useState } from "react";
import { CompareAPI } from "../../infrastructure/api/CompareAPI";
import Chart from "../components/Chart";

export default function ComparePage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    CompareAPI.getComparison().then((res) => setData(res.data));
  }, []);

  if (data.length === 0) return <p>Loading...</p>;

  const baseline = data[0].route.ghgIntensity;

  return (
    <div>
      <h2 className="text-xl mb-4 font-bold">Comparison</h2>

      {data.map((item) => (
        <div key={item.route.id} className="p-4 border mb-4 rounded bg-white">
          <p>Route: {item.route.routeId}</p>
          <p>Difference: {item.diff.toFixed(2)}%</p>

          <Chart
            baseline={baseline}
            comparison={item.route.ghgIntensity}
          />
        </div>
      ))}
    </div>
  );
}
