"use client";

import { useState } from "react";
import Header from "@/components/Header";
import DepartmentFilter from "@/components/DepartmentFilter";
import EmployeeTable from "@/components/employeeTable";
import AddEmployee from "./addEmployee";

export default function EmployeeDirectory({
  employees: initialEmployees,
}: {
  employees: any[];
}) {
  const [employees, setEmployees] = useState(initialEmployees);
  const [selectedDept, setSelectedDept] = useState("All");
  const [open, setOpen] = useState(false);

  const departments = [
    "All",
    ...new Set(employees.map((e) => e.department)),
  ];

  const filtered =
    selectedDept === "All"
      ? employees
      : employees.filter(
          (e) => e.department === selectedDept
        );

  return (
    <>
      <Header onAdd={() => setOpen(true)} />

      <DepartmentFilter
        departments={departments}
        selectedDept={selectedDept}
        setSelectedDept={setSelectedDept}
      />

      <EmployeeTable employees={filtered} />

      {open && (
        <AddEmployee
          onClose={() => setOpen(false)}
          onAddSuccess={(newEmployee) =>
            setEmployees((prev) => [...prev, newEmployee])
          }
        />
      )}
    </>
  );
}
