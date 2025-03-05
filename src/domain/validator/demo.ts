import {DemoRequest} from "../interfaces/demo";
import {Request} from "express";

export function validateAddDemo(req: Request): DemoRequest {
    const {name, email} = req.body;
    if (!name || !email) {
        throw new Error("Missing required field: name and email");
    }
    const res: DemoRequest = {name, email};
    return res;
}