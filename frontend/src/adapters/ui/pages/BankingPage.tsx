import { useState } from "react";
import { BankingAPI } from "../../infrastructure/api/BankingAPI";

export default function BankingPage() {
  const [shipId, setShipId] = useState("S001");
  const [year, setYear] = useState(2024);
  const [records, setRecords] = useState([]);

  const loadRecords = () => {
    BankingAPI.getRecords(shipId, year).then((res) => setRecords(res.data));
  };

  return (
    <div>
      <h2 className="text-xl mb-4 font-bold">Banking</h2>

      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={loadRecords}>
        Load Records
      </button>

      <pre className="mt-4 bg-gray-100 p-4">{JSON.stringify(records, null, 2)}</pre>
    </div>
  );
}
