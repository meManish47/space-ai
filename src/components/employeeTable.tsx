import { useRouter } from "next/navigation";

export default function EmployeeTable({ employees }: { employees: any[] }) {
  const router = useRouter();

  return (
    <div>
      <div className="flex bg-gray-200 px-3 py-2 rounded-md text-sm font-medium text-gray-700">
        <div className="flex-1">Name</div>
        <div className="flex-1">Position</div>
        <div className="flex-1">Department</div>
      </div>

      {employees.map((emp) => (
        <div
          key={emp.id}
          onClick={() => router.push(`/employee/${emp.id}`)}
          className="flex px-3 py-3 border-b hover:bg-gray-50 cursor-pointer transition text-gray-600"
        >
          <div className="flex-1 font-medium">{emp.name}</div>
          <div className="flex-1">{emp.position}</div>
          <div className="flex-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded w-fit">
            {emp.department}
          </div>
        </div>
      ))}
    </div>
  );
}
