"use client";
import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { todo } from "node:test";
// import { log } from "console";

const { Meta } = Card;

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

const CardDisplay = ({ book }: { book: Book }) => (
  <div className="card hover:scale-110 transition duration-300 ease-in-out hover:cursor-pointer m-1 text-center flex flex-col justify-center items-center">
    <Card
      style={{
        width: 250,
        height: 560,
        boxShadow: "shadow-md",
        marginBottom: 10,
      }}
      cover={
        <img
          alt="bookCover"
          src={`${book.volumeInfo.imageLinks.smallThumbnail}`}
        />
      }
      // actions={[<EllipsisOutlined key="ellipsis" />]}
    >
      <Meta
        // avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
        title={`${book.volumeInfo.title}`}
        description={`${book.volumeInfo.subtitle}`}
      />
    </Card>
  </div>
);

export default CardDisplay;

// todo
// auth
// search 
// more details about book 
// home page animation 
