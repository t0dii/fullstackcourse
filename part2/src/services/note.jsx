import axios from "axios";
const baseurl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseurl);
};

const create = (newPerson) => {
  return axios.post(baseurl, newPerson);
};

const update = (id, newPerson) => {
  return axios.put(`${baseurl}/${id}`, newPerson);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
};
