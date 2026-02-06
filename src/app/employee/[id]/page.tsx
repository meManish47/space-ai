export const dynamic = "force-dynamic";

import Link from "next/link";
import { gqlClient } from "@/services/gqlclient";
import { GET_EMPLOYEE_DETAILS } from "@/app/api/graphql/queries";

export default async function EmployeeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  let employee;
  const { id } = await params;
  try {
    const data = await gqlClient.request(GET_EMPLOYEE_DETAILS, {
      id: id,
    });
    employee = data.getEmployeeDetails;
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Invalid employee ID
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Employee not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-6">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 space-y-4 text-gray-800">
        <h1 className="text-xl font-semibold">Employee Details</h1>

        <div className="space-y-2 text-sm">
          <p>
            <b>Name:</b> {employee.name}
          </p>
          <p>
            <b>Position:</b> {employee.position}
          </p>
          <p>
            <b>Department:</b> {employee.department}
          </p>
          <p>
            <b>Salary:</b> ₹{employee.salary}
          </p>
        </div>

        <Link
          href="/"
          className="inline-block mt-4 text-blue-600 hover:underline text-sm"
        >
          ← Back to Employee Directory
        </Link>
      </div>
    </div>
  );
}
