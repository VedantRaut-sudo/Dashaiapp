"use client";
import React, { useEffect, useState } from "react";
import { client } from "../lib/sanity";

const Post = () => {
  const [content, setContent] = useState([]);

  const query = '*[_type=="tools"]';
  useEffect(() => {
    const collectingData = async () => {
      const data = await client.fetch(query);
      console.log("data", JSON.stringify(data));
      setContent(data);
    };
    collectingData();
  }, []);
  return (
    <div>
      {content.map((item, index) => (
        <div key={index}>
          <h1>{item.tool}</h1>
          <p>{item.description}</p>

          <p>{item.context}</p>
          {/* <p>{item.img}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Post;
