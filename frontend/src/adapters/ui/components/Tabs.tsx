type Props = {
  tab: string;
  setTab: (t: string) => void;
};

export default function Tabs({ tab, setTab }: Props) {
  const items = [
    { id: "routes", label: "Routes" },
    { id: "compare", label: "Compare" },
    { id: "banking", label: "Banking" },
    { id: "pooling", label: "Pooling" },
  ];

  return (
    <div className="flex gap-4 mb-6">
      {items.map((i) => (
        <button
          key={i.id}
          onClick={() => setTab(i.id)}
          className={`px-4 py-2 rounded ${
            tab === i.id ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {i.label}
        </button>
      ))}
    </div>
  );
}
