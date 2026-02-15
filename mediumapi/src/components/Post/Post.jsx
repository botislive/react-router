import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState(null);
  const { postid } = useParams();
  const decodedTitle = decodeURIComponent(postid);

  useEffect(() => {
    async function fetchPostData() {
      const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tushardtar704"
      );
      const data = await response.json();

      const foundPost = data.items.find(
        item => item.guid === decodedTitle
      );

      setPost(foundPost);
    }

    fetchPostData();
  }, [decodedTitle]);

  if (!post) return <div>Loading...</div>;

  return (
    <div id="post-title" className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

      <div
        id="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default Post;
