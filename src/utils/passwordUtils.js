import bcrypt from "bcrypt";

const hashPassword = async function (plainPassword) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error(`Failed to hash given password, ${error}`);
    throw error;
  }
};

export default hashPassword;
