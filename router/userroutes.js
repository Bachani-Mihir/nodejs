const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.post("/",controller.createuser);
router.get("/",controller.getuser);
router.get("/:name",controller.getuserbyid);
router.put("/:name",controller.updateuser);
router.delete("/:name",controller.deleteuser);

module.exports=router;