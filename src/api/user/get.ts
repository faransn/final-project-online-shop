import fetchData from "../fetchData";

export const getSingleUser = () => {
  return fetchData("https://fakestoreapi.com/users/1");
};
