const employee = {
    name: "Name",
    streetAddress: "123 Main St., Anytown, NJ 11223"
    };
   console.log(employee)
   function updateEmployeeWithKeyAndValue(_name, _streetAddress) {
return {
    ...employee,
    name: 'Sam',
    streetAddress: "11 Broadway"
}
   }
console.log(employee)
function destructivelyUpdateEmployeeWithKeyAndValue(_name, _streetAddress) {
        employee.name = "Sam"
        employee.streetAddress = "12 Broadway"
        return employee
    }
console.log(destructivelyUpdateEmployeeWithKeyAndValue)
function deleteFromEmployeeByKey(employee, key) {
const employeeCopy = {...employee}
    delete employeeCopy[key]
    return employeeCopy
}
console.log(deleteFromEmployeeByKey)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
console.log(destructivelyDeleteFromEmployeeByKey)