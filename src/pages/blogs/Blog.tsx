import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { firestore } from "@/firebase";
import { Button } from "@/components/ui/button";

type Blog = {
  id: string;
  title: string;
  image: string;
  author: string;
  content: string;
  date: string;
};

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    const snapshot = await getDocs(collection(firestore, "blogs"));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Blog[];
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-yellow-700 mb-6 text-center">
        Blog Posts
      </h2>
      <Link
        to="/add-blog"
        className="text-lg mx-auto text-yellow-700 hover:underline"
      >
        <Button variant={"destructive"} size={"lg"}>
          +Add Blog
        </Button>
      </Link>

      <div className="grid gap-6 md:grid-cols-2">
        {blogs.map((blog) => (
          <Link
            to={`/blog/${blog.id}`}
            key={blog.id}
            className="border p-4 rounded-lg bg-white hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-yellow-700">
              {blog.title}
            </h3>
            <p className="text-gray-500 text-sm mb-2">By {blog.author}</p>
            <p className="text-gray-700 line-clamp-3">{blog.content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
