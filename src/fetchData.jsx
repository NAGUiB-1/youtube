import axios from "axios";
/*
let BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
    //order: 'date'
  },
  headers: {
    "X-RapidAPI-Key":'8b24513a95msh2b17cf471b9989dp1efe0ejsnf43fb098dc8a' ,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
}
*/

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
