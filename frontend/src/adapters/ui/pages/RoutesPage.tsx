import { useEffect, useState } from "react";
import { RoutesAPI } from "../../infrastructure/api/RoutesAPI";
import Table from "../components/Table";

export default function RoutesPage() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    RoutesAPI.getAll().then((res) => setRoutes(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-xl mb-4 font-bold">Routes</h2>

      <Table
        cols={[
          "routeId",
          "vesselType",
          "fuelType",
          "year",
          "ghgIntensity",
          "fuelConsumption",
          "distance",
          "totalEmissions",
        ]}
        rows={routes}
      />
    </div>
  );
}
