"use client";

export default function Header({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5 gap-3">
      <div>
        <h1 className="text-xl font-semibold text-gray-800">
          Employee Directory
        </h1>
        <span className="text-gray-500 text-sm">Company staff overview</span>
      </div>

      <button
        onClick={onAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
      >
        Add Employee
      </button>
    </div>
  );
}
