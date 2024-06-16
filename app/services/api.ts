const CODEFORCES = "https://codeforces.com/api/";
const CODECHEF = "https://codechef.com/users/";

export const cfEndpoints = {
    GET_INFO: CODEFORCES + "user.info?handles=",
    GET_RATING: CODEFORCES + "user.rating?handle=",
    GET_STATUS: CODEFORCES + "user.status?handle=",
};

export const ccEndpoints = {
    GET_INFO: CODECHEF + "user.info?handles=",
    GET_RATING: CODECHEF + "user.rating?handle=",
    GET_STATUS: CODECHEF + "user.status?handle=",
};