import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

import { firestore } from "@/firebase";

type BlogProp = {
  title: string;
  image: string;
  author: string;
  content: string;
  date: string;
};

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogProp | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const docRef = doc(firestore, "blogs", id as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBlog(docSnap.data() as BlogProp);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}
      <h1 className="text-3xl font-bold text-yellow-700 mb-2">{blog.title}</h1>
      <div className="text-sm text-gray-500 mb-6">
        By <span className="font-medium">{blog.author}</span> • {blog.date}
      </div>
      <div className="text-gray-800 whitespace-pre-line leading-relaxed">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogPost;
