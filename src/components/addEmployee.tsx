"use client";

import { useState } from "react";
import { gqlClient } from "@/services/gqlclient";
import { ADD_EMPLOYEE } from "@/app/api/graphql/queries";

export default function AddEmployee({
  onClose,
  onAddSuccess,
}: {
  onClose: () => void;
  onAddSuccess: (employee: any) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    position: "",
    department: "",
    salary: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.position || !form.department || !form.salary) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await gqlClient.request(ADD_EMPLOYEE, {
        name: form.name,
        position: form.position,
        department: form.department,
        salary: Number(form.salary),
      });

      // 👇 NEW: push into UI immediately
      onAddSuccess(res.addEmployee);

      onClose();
    } catch (err) {
      alert("Failed to add employee");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg p-5 space-y-4 text-gray-800">
        <h2 className="text-lg font-semibold">Add New Employee</h2>

        {["name", "position", "department", "salary"].map((field) => (
          <input
            key={field}
            type={field === "salary" ? "number" : "text"}
            placeholder={field}
            value={(form as any)[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className="w-full border px-3 py-2 rounded-md text-sm"
          />
        ))}

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md"
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
