import { useState } from "react";
import { firestore } from "@/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    author: "",
    content: "",
    image: "", // optional: for image URL
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(firestore, "blogs"), {
        ...blog,
        createdAt: Timestamp.now(),
        date: new Date().toLocaleDateString(),
      });
      toast.success("Blog posted!");
      setBlog({ title: "", author: "", content: "", image: "" });
      navigate("/blog");
    } catch (err) {
      toast.error("Failed to add blog.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-yellow-700 mb-4">Add New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          value={blog.title}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="author"
          placeholder="Author"
          value={blog.author}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="image"
          placeholder="Image URL (optional)"
          value={blog.image}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="content"
          placeholder="Content"
          value={blog.content}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded min-h-[150px]"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 text-white rounded ${
            loading ? "bg-yellow-400" : "bg-yellow-600 hover:bg-yellow-700"
          }`}
        >
          {loading ? "Posting..." : "Post Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
