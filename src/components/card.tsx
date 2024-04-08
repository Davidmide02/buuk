"use client";
import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
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
  // console.log(book)

  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={`${book.volumeInfo.imageLinks}`}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Book title"
      description={`${book.volumeInfo.subtitle}`}
    />
  </Card>
);

export default CardDisplay;
