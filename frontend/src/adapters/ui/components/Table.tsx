export default function Table({ cols, rows }: any) {
  return (
    <table className="min-w-full bg-white border">
      <thead className="bg-gray-200">
        <tr>
          {cols.map((c: string) => (
            <th className="px-4 py-2 border" key={c}>
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r: any, idx: number) => (
          <tr key={idx}>
            {cols.map((c: string) => (
              <td className="px-4 py-2 border" key={c}>
                {r[c]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
