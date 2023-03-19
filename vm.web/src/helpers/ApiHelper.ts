import config from "../config";

const  fetchProductsViaAPI = async () => {
    const response = await fetch(`${config.baseApiUrl}/GetProducts`);
    const products = await response.json();
    return products;
}

const dispenseProductsViaAPI = async (id: number) => {
    await fetch(`${config.baseApiUrl}/DispenseProduct?productId=${id}`, {method: "post"});
    return true;
}


export default {fetchProductsViaAPI, dispenseProductsViaAPI};