import {createDemo, getDemos} from "../../../src/domain/service/demo";
import {gRPCClient} from "../../../src/client/grpc";
import {DemoRequest, DemoResponse, DemosResponse, GRPCClient} from "../../../src/domain/interfaces/demo";

jest.mock("../../../src/client/grpc", () => ({
    gRPCClient: jest.fn()
}));

describe("gRPC Client Methods", () => {
    let mockClient: GRPCClient;

    beforeEach(() => {
        mockClient = {
            CreateDemo: jest.fn(),
            GetDemos: jest.fn()
        };
        (gRPCClient as jest.Mock).mockReturnValue(mockClient);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });


    test("createDemo should resolve with response on success", async () => {
        const mockRequest: DemoRequest = {
            name: "Joe Doe",
            email: "joe@example.com"
        };
        const mockResponse: DemoResponse = {
            uuid: "uuid",
            name: "Joe Doe",
            email: "joe@example.com",
            message: "Demo created successfully!"
        };

        (mockClient.CreateDemo as jest.Mock).mockImplementation((data, callback) => {
            callback(null, mockResponse);
        });

        await expect(createDemo(mockRequest)).resolves.toEqual(mockResponse);
        expect(mockClient.CreateDemo).toHaveBeenCalledWith(mockRequest, expect.any(Function));
    });

    test("createDemo should reject on error", async () => {
        const mockRequest: DemoRequest = {
            name: "",
            email: ""
        };
        const mockError = new Error("gRPC error");

        (mockClient.CreateDemo as jest.Mock).mockImplementation((data, callback) => {
            callback(mockError, null);
        });

        await expect(createDemo(mockRequest)).rejects.toThrow("gRPC error");
        expect(mockClient.CreateDemo).toHaveBeenCalledWith(mockRequest, expect.any(Function));
    });

    test("getDemos should resolve with response on success", async () => {
        const demoResponse: DemoResponse = {
            uuid: "uuid",
            name: "Joe Doe",
            email: "joe@example.com",
            message: "Demo created successfully!"
        };
        const mockResponse: DemosResponse = {demos: [demoResponse]};

        (mockClient.GetDemos as jest.Mock).mockImplementation((_, callback) => {
            callback(null, mockResponse);
        });

        await expect(getDemos()).resolves.toEqual(mockResponse);
        expect(mockClient.GetDemos).toHaveBeenCalledWith({}, expect.any(Function));
    });

    test("getDemos should reject on error", async () => {
        const mockError = new Error("gRPC error");

        (mockClient.GetDemos as jest.Mock).mockImplementation((_, callback) => {
            callback(mockError, null);
        });

        await expect(getDemos()).rejects.toThrow("gRPC error");
        expect(mockClient.GetDemos).toHaveBeenCalledWith({}, expect.any(Function));
    });

});
