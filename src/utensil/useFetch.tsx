import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const fetchData = async () => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=react&key=${apiKey}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to handle it outside this function if needed
  }
};

const query = useQuery({
  queryKey: ["data"],
  queryFn: fetchData,
});

export default query;
