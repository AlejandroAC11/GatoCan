import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../index";

export class Auth {

    public jwtVerify(req: Request, res: Response, next) {

        const token = req.body.token || req.query.token || req.headers["x-access-token"];
        if (token) {
            verify(token, JWT_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(403).json();
                } else {
                    next();
                }
            });
        } else {

            return res.status(403).json();
        }
    }

}
