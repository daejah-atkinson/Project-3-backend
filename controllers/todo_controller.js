const express = require("express");
const router = express.Router();
const db = require("../models");
const mongoose = require("mongoose");
const { ToDo } = require("../models");


router.get("/", async (req, res) => {
    try {
      // get all people
        res.json(await db.ToDo.find({}));
    } catch (error) {
      //send error
        res.status(400).json(error);
    }
});


router.get("/:id", async (req, res) => {
    try {
      // get all people
        res.json(await db.ToDo.findById(req.params.id));
    } catch (error) {
      //send error
        res.status(400).json(error);
    }
});

router.post("/", async (req, res) => {
    try {
      // send all people
        res.json(await db.ToDo.create(req.body));
    } catch (error) {
      //send error
        res.status(400).json(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
      res.json(await db.ToDo.findByIdAndRemove(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
  });




module.exports = router; 