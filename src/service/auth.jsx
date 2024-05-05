import axios from "./api";

const AuthService = {
  userRegister: async (user) => {
    const response = await axios.post("/users/create_user", user);
    return response;
  },
  userLogin: async (user) => {
    const response = await axios.post("/token", user , {
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return response;
  },
  getUser: async () => {
    const response = await axios.get("/users/get_own");
    return response;
  },
  getSearchProduct: async (word) => {
    const response = await axios.get(`/main/get_all_source?word=${word}&page=1&limit=25`);
    return response;
  },
};

export default AuthService;
