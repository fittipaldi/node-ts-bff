import {DemoRequest, DemoResponse, DemosResponse} from "../interfaces/demo";
import {gRPCClient} from "../../client/grpc";

export const createDemo = (data: DemoRequest): Promise<DemoResponse> => {
    return new Promise((resolve, reject) => {
        gRPCClient().CreateDemo(data, (err: any, response: DemoResponse) => {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
};

export const getDemos = (): Promise<DemosResponse> => {
    return new Promise((resolve, reject) => {
        gRPCClient().GetDemos({}, (err: any, response: DemosResponse) => {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
};