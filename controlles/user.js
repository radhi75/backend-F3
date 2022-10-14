const user = require("../modals/user");

exports.Adduser = async (req, res) => {
  try {
    const users = new user(req.body);
    await users.save();
    res.status(200).send({ msg: "user added", users });
  } catch (error) {
    res.status(500).send("couldn't add user");
  }
};

exports.Getuser = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).send({ msg: "list of users", users });
  } catch (error) {
    res.status(500).send("couldn't get users ");
  }
};

exports.Deleteuser = async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "user deleted" });
  } catch (error) {
    res.status(500).send("user was not deleted");
  }
};

exports.Edituser = async (req, res) => {
  try {
    const users = await user.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    res.status(200).send({ msg: "user updated", users });
  } catch (error) {
    res.status(500).send("user couldn't be updated");
  }
};

exports.Getoneuser = async (req, res) => {
  try {
    const users = await user.findById(req.params.id);
    res.status(200).send({ msg: "user that you are looking for", users });
  } catch (error) {
    res.status(500).send("user not found");
  }
};
