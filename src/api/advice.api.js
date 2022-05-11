import axios from "axios";

export const getRandomAdvice = async () => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getAdviceById = async (id) => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/${id}`);
        return data;
    } catch (error) {
        return error.message;
    }
}
