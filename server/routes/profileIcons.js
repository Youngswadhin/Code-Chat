const express = require("express");
const router = express.Router();

// Profile Icons Object
const ProfileIcons = {
  batgirl: "/images/profile/batgirl.png",
  batman: "/images/profile/batman.png",
  captain: "/images/profile/captain.png",
  captainmarvel: "/images/profile/captainmarvel.png",
  daredevil: "/images/profile/daredevil.png",
  deadpool: "/images/profile/deadpool.png",
  greenlantern: "/images/profile/greenlantern.png",
  groot: "/images/profile/groot.png",
  hulk: "/images/profile/hulk.png",
  ironman: "/images/profile/ironman.png",
  jocker: "/images/profile/jocker.png",
  nickfury: "/images/profile/nickfury.png",
  spidy: "/images/profile/spidy.png",
  thor: "/images/profile/thor.png",
  wolverine: "/images/profile/wolverine.png",
};

// Endpoint to fetch all profile icons
router.get("/", (req, res) => {
  res.json(ProfileIcons);
});

// Endpoint to fetch a specific profile icon by name
router.get("/:name", (req, res) => {
  const { name } = req.params;
  const icon = ProfileIcons[name.toLowerCase()];

  if (icon) {
    res.json({ name, icon });
  } else {
    res.status(404).json({ message: "Icon not found" });
  }
});

module.exports = router;
