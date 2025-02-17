const express = require("express");
const fetchUser = require("../middleware/Fetchuser");
const Product = require("../model/Product");
const { body, validationResult } = require("express-validator");
const router = express.Router();

router.get("/getallproduct", fetchUser, async (req, res) => {
  try {
    const product = await Product.find({ user: req.user.id });
    res.json(product);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

router.post(
  "/addproduct",
  fetchUser,
  body("title").isLength({ min: 3 }),
  body("description").isLength({ min: 5 }),
  async (req, res) => {
    try {
      const { title, description, price, instock } = req.body;
      console.log("this is req.body", req.body);

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
      }

      const product = new Product({
        title,
        description,
        price,
        instock,
        user: req.user.id,
      });
      const saveProduct = await product.save();
      res.json(saveProduct);
    } catch (error) {
      res.status(500).send("internal server error");
    }
  }
);

module.exports = router;
