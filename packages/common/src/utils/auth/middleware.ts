import { verify } from "jsonwebtoken";
import { Request } from "express";
import { logger } from "../logger";

export const addUser = (_: any, req: Request, next: Function): any => {
  let token;
  const secret = process.env.JWT_SECRET as string;
  let userId: string | undefined;

  if (req.headers != undefined) {
    if (req.headers["x-token"]) {
      token = req.headers["x-token"];
    }
  }

  if (req.session) {
    if (req.session.userId != undefined) {
      userId = req.session.userId;
    }
  }

  if (userId) {
    next();
  }

  if (token != undefined) {
    try {
      const user = verify(token as string, secret);

      if (req.session) {
        req.session.decodedUser = user;
      }
    } catch (error) {
      logger.log({ level: "0", message: error });
    }
  }

  next();
};
