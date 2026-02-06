type Props = {
  departments: string[];
  selectedDept: string;
  setSelectedDept: (value: string) => void;
};

export default function DepartmentFilter({
  departments,
  selectedDept,
  setSelectedDept,
}: Props) {
  return (
    <div className="flex items-center gap-3 mb-4 flex-wrap text-gray-800">
      <span className="text-sm text-gray-600">Department:</span>

      <select
        value={selectedDept}
        onChange={(e) => setSelectedDept(e.target.value)}
        className="border px-3 py-1.5 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {departments.map((dept) => (
          <option key={dept}>{dept}</option>
        ))}
      </select>
    </div>
  );
}
