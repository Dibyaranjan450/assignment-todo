import Axios from "./Axios";

export const fetchPosts = async () => {
  const response = await Axios.get("/posts?_limit=10");
  return response.data;
};

export const deletePost = async (id) => {
  const response = await Axios.delete(`/posts/${id}`);
  return response.data;
};

export const getPost = async () => {
  const randomId = Math.floor(Math.random() * 100) + 1;
  const res = await Axios.get(
    `https://jsonplaceholder.typicode.com/posts/${randomId}`
  );

  if (!res.ok) {
    // throw new Error("Failed to fetch post");
    console.log("Failed to fetch post");
  }

  console.log(res.data);
  return res.data;
};
