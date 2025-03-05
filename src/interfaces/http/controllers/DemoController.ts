import {Request, Response} from "express";
import {getDemos, createDemo} from "../../../domain/service/demo";
import {validateAddDemo} from "../../../domain/validator/demo";

export class DemoController {

    public addDemo(req: Request, res: Response): void {
        try {
            const data = validateAddDemo(req);
            createDemo(data).then((resp) => {
                console.log(resp);
                if (resp) {
                    res.send(resp);
                } else {
                    res.status(400).json({"message": "no response"});
                }
            }).catch((err) => {
                console.log(err);
                res.status(500).json({"message": err.details});
            })
        } catch (err) {
            console.log(err);
            if (err instanceof Error) {
                res.status(400).json({"message": err.message});
            } else {
                res.status(500).json({"message": err});
            }
        }
    }

    public getDemos(req: Request, res: Response): void {
        getDemos().then((resp) => {
            console.log(resp);
            if (resp) {
                res.send(resp);
            } else {
                res.status(400).json({"message": "no response"});
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json({"message": err.details});
        })

    }

}
