require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { sequelize, User } = require("./config/db.connect");
const userController = require("./controller/UserController");
const fundraisingPageController = require("./controller/FPageController");
const donationController = require("./controller/DonationController");
const commentController = require("./controller/CommentController");
const refreshTokens = require("./tokenStore");

const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;

// Used CORS middleware
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true,
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions)); // preflight options

app.use(cookieParser());

/* Reference: Mendes, F., 2021. Using cookies with jwt in node.js.
 https://dev.to/franciscomendes10866/using-cookies-with-jwt-in-node-js-8fn. */
const authenticateJWT = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

app.use(express.json());

app.use("/api", router);

router.get("/protected", authenticateJWT, (req, res) => {
  return res.json({
    user: {
      id: req.user.id,
      points_remaining: req.user.points_remaining,
    },
  });
});

// Generate new access token using refresh token
/*Reference: ksangtiani13, 2024. Jwt authentication with refresh tokens. 
https://www.geeksforgeeks.org/jwt-authentication-with-refresh-tokens/.*/
router.post("/token", (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(401).json({ message: "No token" });
  if (!refreshTokens.has(refreshToken)) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: "30m",
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 30 * 60 * 1000,
    });
    return res.sendStatus(200).json({ message: "token generated" });
  });
});

router.post("/logout", (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  const accessToken = req.cookies.accessToken;
  if (refreshToken) {
    refreshTokens.delete(refreshToken);
    res.clearCookie("refreshToken");
  }
  if (accessToken) {
    res.clearCookie("accessToken");
  }
  res.sendStatus(204);
});

router.get("/users", authenticateJWT, userController.findAll);
router.get("/users/:id", authenticateJWT, userController.findOne);
router.put("/users/:id", authenticateJWT, userController.update);

router.post("/register", userController.create);

router.get(
  "/fundraising-pages",
  authenticateJWT,
  fundraisingPageController.getAllPages
);
router.get(
  "/fundraising-pages/:id",
  authenticateJWT,
  fundraisingPageController.getPageById
);

router.get("/donations", authenticateJWT, donationController.getAllDonations);
router.get(
  "/donations/:id",
  authenticateJWT,
  donationController.getDonationById
);
router.post("/new-donation", authenticateJWT, donationController.create);

router.get("/comments", authenticateJWT, commentController.getAllComments);
router.get(
  "/comments/:pageId",
  authenticateJWT,
  commentController.getCommentsByPageId
);
router.post("/new-comment", authenticateJWT, commentController.create);

// Serve static files (images) from the 'uploads' directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Test Route
app.get("/", (req, res) => res.send("Hello World!"));

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    return sequelize.sync();
  })
  .then(() => {
    app.listen(port, () => console.log(`App listening on port ${port}`));
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
