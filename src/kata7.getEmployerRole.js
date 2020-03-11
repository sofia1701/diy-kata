const getEmployerRole = (employeeName, employees) => {
  const obj = employees.find(data => data.name === employeeName);
  const result = obj.role;
  return result;
};

module.exports = getEmployerRole;
