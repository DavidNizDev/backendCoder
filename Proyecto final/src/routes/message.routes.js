import { Router } from "express";
import MessageController from "../controllers/message.controller.js";

const messageRouter = Router();

messageRouter.get("/", MessageController.getAllMessages);

messageRouter.get("/user/:id", MessageController.getMessagesByUserId);

messageRouter.post("/", MessageController.createMessage);

messageRouter.post("/:id/reply", MessageController.addReplyToMessageById);

// [POST] 🌐/consultas/:id/delete
/* messageRouter.post(
  "/user/:user_id/consulta/:message_id/delete",
  MessageController.deleteMessageById
); */

export default messageRouter;
