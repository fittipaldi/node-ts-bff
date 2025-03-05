import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import {GRPCClient} from "../domain/interfaces/demo";

// Load the .proto file
const PROTO_PATH = path.join(__dirname, "../../proto/demo.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

// Load the gRPC package
const grpcObject = grpc.loadPackageDefinition(packageDefinition) as any;
const DemoService = grpcObject.demo.DemoService;
const grpcServerURL = process.env.GRPC_SERVER_URL || "localhost:50051";

// Create the client instance
export function gRPCClient(): GRPCClient {
    // Options for the client with retry and reconnection logic
    const clientOptions: grpc.ClientOptions = {
        'grpc.keepalive_time_ms': 10000, // How often to send keep-alive pings
        'grpc.keepalive_timeout_ms': 5000, // Timeout for keep-alive pings
        'grpc.keepalive_permit_without_calls': 1, // Allow keep-alive pings even if there are no active calls
        'grpc.max_reconnect_backoff_ms': 60000, // Max time before the client retries connecting
        'grpc.initial_reconnect_backoff_ms': 1000, // Initial retry time
    };

    const client = new DemoService(grpcServerURL, grpc.credentials.createInsecure(), clientOptions);

    // Handle connection events to ensure reconnection
    client.waitForReady(5000, () => {
        console.log("Connected to gRPC server!");
    });

    // Return the client instance
    return client;
}