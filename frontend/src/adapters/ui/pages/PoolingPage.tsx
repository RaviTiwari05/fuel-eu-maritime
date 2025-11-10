import { useState } from "react";
import { PoolingAPI } from "../../infrastructure/api/PoolingAPI";

export default function PoolingPage() {
  const [result, setResult] = useState(null);

  const createPool = () => {
    const data = {
      year: 2024,
      members: [
        { shipId: "S001", cbBefore: 200, cbAfter: 200 },
        { shipId: "S002", cbBefore: -100, cbAfter: 0 },
      ],
    };

    PoolingAPI.createPool(data).then((res) => setResult(res.data));
  };

  return (
    <div>
      <h2 className="text-xl mb-4 font-bold">Pooling</h2>

      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={createPool}>
        Create Pool
      </button>

      {result && (
        <pre className="mt-4 bg-gray-100 p-4">{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}
