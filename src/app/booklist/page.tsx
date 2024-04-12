"use client";
import CardDisplay from "@/components/card";
import query from "@/utensil/useFetch";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Spin, message, notification } from "antd";
import axios from "axios";
// import { log } from "console";
import React, { useState } from "react";

type Book = {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;

    authors: [];
    description: string;
    imageLinks: {
      smallThumbnail: string;
    };
    pageCount: number;
    pusblishedDate: string;
    publisher: string;
  };
};
const Booklists = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=react&key=${apiKey}`
      );

      return response.data;
    } catch (error) {
      console.error("fetching failed", error);
      if (error instanceof Error) {
        console.error("Error fetching data:", error.message);
        return error.message;
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  };

  const {
    data: books,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
  });

  console.log(books);
  // console.log(books.items);
  // console.log(books.items[0].volumeInfo.description);

  // const authors= volumeInfo.authors
  // array
  // const category= volumeInfo.category
  // const descr= volumeInfo.description
  // const image= volumeInfo.imageLinks.smallThumbnail
  // const pageCount= volumeInfo.pageCount
  // const pageCount= volumeInfo.pageCount
  // const title= volumeInfo.title
  // const publish date= volumeInfo.publishedDate
  // const pageCount= volumeInfo.publisher

  // without items
  // const result number= totalItems

  if (isLoading) {
    return ( 
    <Spin
      spinning
      className="w-full h-[70vh] bg-white flex justify-center items-center rounded-xl shadow-xl text-primary"
      size="large"
    />)
  
  }

  if (isError) {
    notification.error({ message: "Network error" });
    // notification.success({ message: res.message });
  }

  return (
    <div className="">
      <div className="con p-8">
        <div className="title text-center text-2xl font-bold p-2">
        <h1>Booklists</h1>
        </div>
        <div className="search">
          search book here
        </div>
        <div className="card-con flex flex-wrap md:grid md:grid-cols-4 md:gap-2 justify-between items-center">
          {books && books.items
            ? books.items.map((book: Book) => (
                <CardDisplay key={book.id} book={book} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Booklists;
