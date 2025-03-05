export interface DemoRequest {
    name: string;
    email: string;
}

export interface DemoResponse {
    uuid: string;
    name: string;
    email: string;
    message: string;
}

export interface DemosResponse {
    demos: DemoResponse[];
}

export interface GRPCClientCallback {
    (err: any, response: any): void;
}

export interface GRPCClient {
    GetDemos(request: {}, callback: GRPCClientCallback): void;

    CreateDemo(request: {}, callback: GRPCClientCallback): void;
}