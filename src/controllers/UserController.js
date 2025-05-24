import User from "../models/User.js";

class UserController {
  static createUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (name === "" || email === "" || password === "") {
        console.error("Name, email and password fields cannot be empty.");
        res
          .status(400)
          .json({ error: "Name, email and password fields cannot be empty." });
        return;
      }

      if (name.length < 2) {
        console.error("Name must be at least 2 characters long.");
        res
          .status(400)
          .json({ error: "Name field must be at least 2 characters long" });
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        console.error("Invalid email format.");
        res.status(400).json({ error: "Invalid email format." });
        return;
      }

      if (password.length < 8) {
        console.error("Password must be at least 8 characters long.");
        res
          .status(400)
          .json({ error: "Password must be at least 8 characters long." });
        return;
      } else if (password.length > 30) {
        console.error(
          "Password length limit exceeded, it must be less or equal 30 characters long."
        );
        res.status(400).json({
          error:
            "Password length limit exceeded, it must be less or equal 30 characters long.",
        });
        return;
      }

      const newUser = await User.create({
        name,
        email,
        password,
      });
      console.log(`User "${name}" has been created!`);
      res
        .status(201)
        .json({ message: "User has been created!", user: newUser });
    } catch (error) {
      console.error(`Cannot create user, ${error.message}`);
      res.status(400).json({
        message: "Cannot create user...",
        error: error.message,
      });
    }
  };
}

export default UserController;
