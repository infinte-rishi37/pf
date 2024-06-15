import { apiConnector } from "../apiConnector";
import { cfEndpoints } from "../api";

export const getRating = async (handle: string) => {
    const url = cfEndpoints.GET_RATING + handle;
    let result = null;
    try {
        const response = await apiConnector("GET", url, null, null, null);

        // console.log("API RESPONSE:", response);

        if (!response?.data?.result) {
            throw new Error(response.data.result.message);
        }

        result = response.data.result;
        // console.log("result", result);
    } catch (error) {
        console.log("API ERROR...", error);
        result = (error as any).response.data;
    }
    return result;
};

export const getInfo = async (handle: string) => {
    const url = cfEndpoints.GET_INFO + handle;
    let result = {};
    try {
        const response = await apiConnector("GET", url, null, null, null);

        // console.log("API RESPONSE...", response);

        if (!response?.data?.result[0]) {
            throw new Error(response.data.result[0].message);
        }

        result = response.data.result[0];
        // console.log("result", result);
    } catch (error) {
        console.log("API ERROR...", error);
        result = (error as any).response.data;
    }
    return result;
};

export const getStatus = async (handle: string) => {
    const url = cfEndpoints.GET_STATUS + handle;
    let result = {};
    try {
        const response = await apiConnector("GET", url, null, null, null);

        // console.log("API RESPONSE...", response);

        if (!response?.data?.result[0]) {
            throw new Error(response.data.result[0].message);
        }

        result = response.data.result[0];
        // console.log("result", result);
    } catch (error) {
        console.log("API ERROR...", error);
        result = (error as any).response.data;
    }
    return result;
};