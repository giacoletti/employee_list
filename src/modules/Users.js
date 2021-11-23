import axios from "axios";

const Users = {
  endpointUrl: "https://reqres.in/api/users",

  async index(options) {
    // make the call to the API using axios
    const response = await axios.get(`${this.endpointUrl}`, {
      params: options
    });
    // debugger
    // return the response
    return response.data.data;
  },

  async show(id) {
    // make a call to the API passing in a unique identifier
    const response = await axios.get(`${this.endpointUrl}/${id}`);
    // return the response
    return response.data.data;
  },

  // async update(id, params) {
  //   const response = await axios.put('url', 'params');
  //   return response;
  // },

  // async destroy(id) {
  //   const response = await axios.delete(id);
  //   return response;
  // },

  // async create(params) {
  //   const response = await axios.post(params);
  //   return response;
  // }
};

export default Users;
