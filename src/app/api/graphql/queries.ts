import gql from "graphql-tag";

export const GET_ALL_EMPLOYEES = gql`
  query GetAllEmployees {
    getAllEmployees {
      id
      name
      position
      department
      salary
    }
  }
`;

export const ADD_EMPLOYEE = gql`
  mutation AddEmployee(
    $name: String!
    $position: String!
    $department: String!
    $salary: Int!
  ) {
    addEmployee(
      name: $name
      position: $position
      department: $department
      salary: $salary
    ) {
      id
      name
      position
      department
      salary
    }
  }
`;

export const GET_EMPLOYEE_DETAILS = gql`
  query GetEmployeeDetails($id: ID!) {
    getEmployeeDetails(id: $id) {
      id
      name
      position
      department
      salary
    }
  }
`;
