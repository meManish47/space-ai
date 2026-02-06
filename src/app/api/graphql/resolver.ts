import { connectDB } from "@/app/dbconnect/dbconnect";
import { get } from "http";
import {
  addEmployee,
  getAllEmployees,
  getEmployeeDetails,
} from "./resolvers/employee";

export const resolvers = {
  Query: {
    getAllEmployees,
    getEmployeeDetails,
  },
  Mutation: {
    addEmployee,
  },
};
