import { connectDB } from "@/app/dbconnect/dbconnect";
import { ObjectId } from "mongodb";
export async function addEmployee(
  _: unknown,
  {
    name,
    position,
    department,
    salary,
  }: { name: string; position: string; department: string; salary: number },
) {
  const db = await connectDB();

  const result = await db.collection("employees").insertOne({
    name,
    position,
    department,
    salary,
  });

  return {
    id: result.insertedId.toString(),
    name,
    position,
    department,
    salary,
  };
}

export async function getAllEmployees() {
  const db = await connectDB();
  const employees = await db.collection("employees").find().toArray();  
  return employees.map((emp) => ({
    id: emp._id.toString(),
    name: emp.name,
    position: emp.position,
    department: emp.department,
    salary: emp.salary,
  }));
}
export async function getEmployeeDetails(
  _: unknown,
  { id }: { id: string },
) {
  const db = await connectDB();
  const emp = await db.collection("employees").findOne({ _id: new ObjectId(id) });
  if (!emp) return null;

  return {
    id: emp._id.toString(),
    name: emp.name,
    position: emp.position,
    department: emp.department,
    salary: emp.salary,
  };
}