const express = require("express");
const router = express.Router();
const db = require("../models");
const mongoose = require("mongoose");
const { Toiletries } = require("../models");


router.get("/", async (req, res) => {
    try {
      // get all people
        res.json(await db.Toiletries.find({}));
    } catch (error) {
      //send error
        res.status(400).json(error);
    }
});
router.get("/:id", async (req, res) => {
    try {
      // get all people
        res.json(await db.Toiletries.findById(req.params.id));
    } catch (error) {
      //send error
        res.status(400).json(error);
    }
});

router.post("/", async (req, res) => {
    try {
      // send all people
        res.json(await db.Toiletries.create(req.body));
    } catch (error) {
      //send error
        res.status(400).json(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
      // delete people by ID
      res.json(await db.Toiletries.findByIdAndRemove(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });




module.exports = router; 