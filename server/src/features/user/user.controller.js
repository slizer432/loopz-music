import User from "./user.model.js";

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      id: user._id,
      name: user.name,
      username: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLoggedInUser = async (req, res) => {
  res.status(200).json(req.user);
};

// export const updateUser = async (req, res) => {
//   try {
//     const {username, email} = req.body;
//     const user = await user.findByIdAndUpdate(req.params.id, {username, email}, {new:});
//     if (!user) {
//       return res.status(404).json({ error: "User not found"});
//     } else {

//     }
//   }
// }
