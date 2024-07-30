import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { deleteBlog, getBlogs } from "../utils";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storageBlogs = getBlogs();
    setBlogs(storageBlogs);
  }, []);
  const handleDelete = (id) => {
    deleteBlog(id);
    const storageBlogs = getBlogs();
    setBlogs(storageBlogs);
    };
    if(blogs.length <1) return <EmptyState message='No Bookmarks Available' address={'/blogs'}/>
  return (
    <div className="grid px-4 sm:px-8 lg:px-12 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          handleDelete={handleDelete}
          deletable={true}
          blog={blog}
          key={blog.id}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;
