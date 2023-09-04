import axios, { AxiosHeaders } from "axios";

const ShopifyApiHeaders = new AxiosHeaders({
  "X-Shopify-Access-Token": process.env.SHOPIFY_TOKEN,
}); // https://github.com/axios/axios/issues/5034

const ShopifyApi = axios.create({
  baseURL: "https://1713fd.myshopify.com/admin/api/2023-07",
  timeout: 5000,
  headers: ShopifyApiHeaders,
});

ShopifyApi.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Here we can handle and log errors in the request phase
    console.log("Request failed with error: ", error);

    return Promise.reject(error);
  },
);

ShopifyApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Here we can handle and log errors in the ShopifyApi service
    console.log("Request resolved with error: ", error);

    return Promise.reject(error);
  },
);

export { ShopifyApi };
