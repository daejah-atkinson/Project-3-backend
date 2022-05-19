const express = require("express");
const router = express.Router();
const db = require("../models");
const mongoose = require("mongoose");
const { Misc } = require("../models");


router.get("/", async (req, res) => {
    try {
      // get all people
        res.json(await db.Misc.find({}));
    } catch (error) {
      //send error
        res.status(400).json(error);
    }
});

router.post("/", async (req, res) => {
    try {
      // send all people
        res.json(await db.Misc.create(req.body));
    } catch (error) {
      //send error
        res.status(400).json(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
      // get all people
        res.json(await db.Misc.findById(req.params.id));
    } catch (error) {
      //send error
        res.status(400).json(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
      // delete people by ID
      res.json(await db.Misc.findByIdAndRemove(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });



module.exports = router; 