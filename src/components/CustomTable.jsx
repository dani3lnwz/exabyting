/* eslint-disable react/prop-types */
const CustomTable = ({ columns, data }) => {
  return (
    <div className="relative overflow-x-auto max-w-7xl mx-auto">
      <table className="w-full text-sm text-left text-black">
        <thead className="text-xs uppercase bg-gray-200">
          <tr>
            {columns.map((column, i) => (
              <th key={column.value + i} scope="col" className="px-6 py-3">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="border-b border-gray-200">
              {columns.map((column) => (
                <td
                  key={i + column.value}
                  className={`px-6 py-4 ${
                    column.value === "Date" ||
                    column.value === "Users" ||
                    item[column.value] === null
                      ? "bg-[#E3E3E3]"
                      : "bg-[#B4ECD2]"
                  }  ${column.value === "ROAS" ? "font-bold" : ""}`}
                  style={{
                    backgroundColor:
                      column.value === "ROAS" && item[column.value] === 1.5
                        ? "#F6D45B"
                        : column.value === "ROAS" && item[column.value] === 3
                        ? "#64B992"
                        : "",
                  }}
                >
                  {column.content ? column.content(item) : item[column.value]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
