const express = require("express");
const { notices: ctrl } = require("../../controllers");
const { ctrlWrapper, auth, validation, upload } = require("../../middlewares");
const { newNoticeSchema } = require("../../schemas/");

const router = express.Router();

router.get("/get/:category", auth, ctrlWrapper(ctrl.getAll));
router.get("/get/:noticeId", auth, ctrlWrapper(ctrl.getbyId));
router.put("/favorite/add/:noticeId", auth, ctrlWrapper(ctrl.addFavorite));
router.get("/favorite/get", auth, ctrlWrapper(ctrl.getFavorites));
router.delete("/favorite/remove/:noticeId", auth, ctrlWrapper(ctrl.removeFavorite));
router.post("/current/add", auth, upload.single("photo"), validation(newNoticeSchema), ctrlWrapper(ctrl.addNotice));
router.get("/current/get", auth, ctrlWrapper(ctrl.getUserNotices));
router.delete("/current/delete/:noticeId", auth, ctrlWrapper(ctrl.removeNotice));

module.exports = router;
