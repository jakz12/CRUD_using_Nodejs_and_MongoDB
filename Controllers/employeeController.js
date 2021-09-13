const Employee = require("../Models/employeeModel");

const index = (req, res) => {
    const id = req.params.employeeId;
    var qry = id == undefined ? {}:{ _id: id };
  Employee.find(qry)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const add = (req, res) => {
  const name = req.body.name;
  const designation = req.body.designation;
  const email = req.body.email;
  const phone = req.body.phone;
  const age = req.body.age;

  const newEmployee = Employee({ name, designation, email, phone, age });

  newEmployee
    .save()
    .then((response) => {
      res.json({ message: "Employee Added" });
    })
    .catch((error) => {
      res.json({ message: "An error Occured" });
    });
};

const update = (req, res) => {
  let employeeId = req.body.employeeId;
  const name = req.body.name;
  const designation = req.body.designation;
  const email = req.body.email;
  const phone = req.body.phone;
  const age = req.body.age;
  const updateEmployee = { name, designation, email, phone, age };

  Employee.findByIdAndUpdate(employeeId, { $set: updateEmployee })
    .then(() => {
      res.json({
        message: "Employee Updated Successfully",
      });
    })
    .catch(() => {
      res.json({ message: "An error occured" });
    });
};

const destroy = (req, res) => {
  let employeeId = req.body.employeeId;
  Employee.findOneAndDelete(employeeId)
    .then((response) => {
      res.json({
        message: "Employee Deleted Successfully",
      });
    })
    .catch((error) => {
      res.json({ message: "An error Occured" });
    });
};

module.exports = { index, add, destroy, update };
