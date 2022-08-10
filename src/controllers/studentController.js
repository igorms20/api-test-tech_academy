const StudentService = require("../services/studentService");

  
async function get(req, res, next) {
  const payload = await new StudentService().getAllStudents();
  res.status(200).send(payload);
}
  
module.exports = {get};

// exports.get = async (req, res, next) => {
//   const payload = await new StudentService().getAllStudents();
//   res.status(200).send(payload);
// };
