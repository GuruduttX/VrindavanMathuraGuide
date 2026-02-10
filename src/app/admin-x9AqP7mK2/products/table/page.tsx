"use client";

import { supabase } from "@/lib/supabase/SupabaseConfig";
import { useEffect, useState } from "react";
import Link from "next/link";
import DeleteConfirmModal from "@/utils/Admin/DeleteConfirmModal";
import toast from "react-hot-toast";

type BlogType = {
  id: string;
  title: string;
  category: string;
  price : string
};

export default function BlogTable() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [open , setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const getBlogs = async () => {
      const { data, error } = await supabase
        .from("Package")
        .select("id, title, category, price");

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      setBlogs(data ?? []);
      setLoading(false);
    };

    getBlogs();
  }, []);

  if (loading) {
    return <p className="text-white">Loading blogs...</p>;
  }

  if (blogs.length === 0) {
    return <p className="text-white">No blogs found.</p>;
  }

  const handleDelete = async () => {
    if(!selectedId){
      return;
    }
    const { error } = await supabase
      .from("Package")
      .delete()
      .eq("id", selectedId);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Blog Deleted Successfully");

    setBlogs((prev) => prev.filter((b) => b.id !== selectedId));
    setSelectedId("");
    setOpen(false);
  };


  return (
    <>
    <DeleteConfirmModal open={open} onConfirm={handleDelete} onCancel={()=>setOpen(false)}/>
    <div className="w-full overflow-x-auto rounded-2xl 
      bg-gradient-to-br from-[#050b1f] via-[#071233] to-[#040817]
      border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)]">

      <table className="w-full text-left text-sm text-gray-300">
        <thead className="border-b border-white/10">
          <tr className="text-gray-400 uppercase text-xs tracking-wider">
            <th className="px-6 py-4">Title</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">Price</th>
            <th className="px-6 py-4 text-center">Edit</th>
            <th className="px-6 py-4 text-center">Delete</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog) => (
            <tr
              key={blog.id}
              className="border-b border-white/5 hover:bg-white/5 transition"
            >
              <td className="px-6 py-4 font-medium text-white">
                {blog.title}
              </td>

              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-xs
                  bg-blue-500/10 text-blue-400 border border-blue-400/20">
                  {blog.category}
                </span>
              </td>

              <td className="px-6 py-4 text-gray-300">
                {blog.price}
              </td>

              <td className="px-6 py-4 text-center">
                <Link href={`/admin-x9AqP7mK2/products/edit/${blog.id}`}  className="px-4 py-1.5 text-sm bg-blue-600/20 text-blue-400
                  border border-blue-500/30 hover:bg-blue-600/30 transition rounded-2xl flex justify-center">
                  Edit
                </Link>
              </td>

              <td className="px-6 py-4 text-center">
                <button
                  disabled={open}
                  onClick={() => {
                    setSelectedId(blog.id);
                    setOpen(true);
                  }}
                  className="px-4 py-1.5 rounded-2xl text-sm
                  bg-red-600/20 text-red-400 border border-red-500/30
                  hover:bg-red-600/30 transition disabled:opacity-50"
                >
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
