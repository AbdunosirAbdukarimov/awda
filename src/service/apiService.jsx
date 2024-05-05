import axios from "./api";

export const ApiService = {
    getProduct: async(Product) => {
        const {data} = await axios.get(Product)
        return data
    }
}

export default ApiService;  