import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  return (
    <div>
      <p>Post: {params.id}</p>
      <p>Name: {params.name}</p>
      <p>age: {params.age}</p>
      <p>title: {params.title}</p>
    </div>
  );
};

export default Post;
