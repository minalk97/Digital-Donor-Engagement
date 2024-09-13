const { User } = require("../config/db.connect");
const jwt = require("jsonwebtoken");
const refreshTokens = require("../tokenStore");

// Create a new User.
exports.create = async (req, res) => {
  const { id } = req.body;
  try {
    const user = {
      id,
      points_remaining: 500,
    };

    const newUser = await User.create(user);

    /*Reference: ksangtiani13, 2024. Jwt authentication with refresh tokens. 
https://www.geeksforgeeks.org/jwt-authentication-with-refresh-tokens/.*/
    const accessToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: "30m",
    });
    const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_KEY, {
      expiresIn: "7d",
    });

    refreshTokens.set(refreshToken, user.id);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 30 * 60 * 1000,
    });

    return res.status(201).json({ userInfo: newUser });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Some error occurred while creating the User.",
    });
  }
};

// Retrieve all Users from the database.
exports.findAll = (req, res, next) => {
  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

// Find a single User using id
exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).send({
        message: `Cannot find User with id=${id}.`,
      });
    }

    const userInfo = {
      id: user.id,
      points_remaining: user.points_remaining,
    };
    res.send(userInfo);
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving User with id=" + id,
    });
  }
};

// Update a User by the id
exports.update = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).send({
        message: `Cannot find User with id=${id}.`,
      });
    }

    const updatedUser = await User.update(req.body, {
      where: { id },
    });

    const userInfo = await User.findOne({ where: { id } });

    res.json({ userInfo });
  } catch (err) {
    res.status(500).send({
      message: "Error updating User with id=" + id,
    });
  }
};
