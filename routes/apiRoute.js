const express = require("express");
const app = express();
const router = express.Router();

const authentication = require("./../middlewares/authentication")


//Load Routes

const reviewRoute = require("./reviewRoute");
const roomRoute = require("./../components/rooms/room.route");
const featuresRouter = require("./../components/features/features.route");
const categoryRoute = require("./../components/category/category.route");
const bookingRoute = require("./../components/booking/booking.route");

router.use("/auth", require("./../components/auth/authRoute"));
router.use("/user", authentication, require("./../components/user/userRoute"));
router.use("/review", reviewRoute);
router.use("/room", roomRoute);
router.use("/features", featuresRouter);
router.use("/category", categoryRoute);
router.use("/booking", bookingRoute)


module.exports = router;