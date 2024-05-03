const user = require("../Models/user.js");



module.exports = {
    getall: async (req, res) => {
      try {
        let data = await user.getUsers();
        res.json(data);
      } catch {
        (err) => {
          console.log(err);
        };
      }
    },
  
    getoneseekerss: async (req, res) => {
      try {
        let id = req.params.id;
        const data = await user.getoneseeker(id);
        res.json(data);
      } catch {
        (err) => {
          console.log(err);
        };
      }
    },
    delete: async (req, res) => {
      try {
        let seekerid = req.params.id;
        await user.deleteUser(seekerid);
        res.send("seeker deleted");
      } catch {
        (err) => {
          console.log(err);
        };
      }
    },
    update: async (req, res) => {
      try {
        let seekrid = req.params.id;
        let {
          fullname,
          email_address,
          password,
          image,
          background,
          bio,
          phone,
          age,
          gender,
        } = req.body;
  
        let body = {
          fullname,
          email_address,
          password,
          image,
          background,
          bio,
          phone,
          age,
          gender,
        };
  
        user.updateUser(seekrid, body);
        res.send("seeker updated");
      } catch {
        (err) => {
          console.log(err);
        };
      }
    },
    create: async (req, res) => {
      try {
        let {
          id,
          fullname,
          email_address,
          password,
          image,
          background,
          bio,
          phone,
          age,
          gender,
        } = req.body;
        let body = {
          id,
          fullname,
          email_address,
          password,
          image,
          background,
          bio,
          phone,
          age,
          gender,
        };
        const userr = await user.createUser(body);
        console.log(user.dataValues);
        res.send(user);
      } catch {
        (err) => {
          console.log(err);
        };
      }
    },
  };
  