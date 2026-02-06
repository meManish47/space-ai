import EmployeeDirectory from "@/components/employeDirectory";
import { gqlClient } from "@/services/gqlclient";
import { GET_ALL_EMPLOYEES } from "./api/graphql/queries";

export default async function HomePage() {
  const data = await gqlClient.request(GET_ALL_EMPLOYEES);

  const employees = data?.getAllEmployees || [];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-5">Ō
        <EmployeeDirectory employees={employees} />
      </div>
    </div>
  );
}
