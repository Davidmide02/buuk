import { Span } from "next/dist/trace";
import Image from "next/image";
import React from "react";

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

const Modal = ({ book }: { book: Book }) => {
  return (
    <div className="modal p-4 top-0 left-0 bg-slate-300 fixed w-full h-screen flex justify-center items-center">
      <div className="con m-auto w-full h-[70%]">
        <div className="img-txt flex justify-around items-center">
          <div className="img">
            <Image
              src={`${book.volumeInfo.imageLinks.smallThumbnail}`}
              alt="cover"
              width={220}
              height={100}
            />
          </div>
          <div className="info text-black">
            <div className="author">
              <span className="font-semibold"> Authors:</span>
              {book.volumeInfo.authors.map((author) => (
                <p key={author}>{author}</p>
              ))}
            </div>
            <p className="font-semibold">
              Page count: {`${book.volumeInfo.pageCount}`}
            </p>
            <p className="font-semibold">Publisher: {`${book.volumeInfo.publisher}`}</p>
            <p className="font-semibold"> Published date: {`${book.volumeInfo.pusblishedDate}`}</p>
            {/* <p> Category {`${book}`}</p> */}
          </div>
        </div>
        <div className="note p-2 mt-2">{book.volumeInfo.description}</div>
      </div>
    </div>
  );
};

export default Modal;

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
