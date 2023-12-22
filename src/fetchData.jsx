import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  headers: {
    "X-RapidAPI-Key": "1eb654f631msh01ede6b2fecbbcbp10840bjsn7ed4cca815bb",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
