import Profile from "../features/profile/profile.model.js";

export const getUserData = async (userId) => {
  const profile = await Profile.findOne({ user: userId }).populate("user", [
    "-password",
    "-createdAt",
    "-updatedAt",
    "-__v",
    "-_id",
  ]);

  if (!profile) {
    return null;
  }

  const userData = {
    ...profile.toObject(),
    ...profile.user.toObject(),
  };

  delete userData.user;

  return userData;
};
