import toast from "react-hot-toast";

export const getBlogs = () => {
  let blogs = [];
  const storeBlogs = localStorage.getItem("blogs");
  if (storeBlogs) {
    blogs = JSON.parse(storeBlogs);
  }
  return blogs;
};

// save blog
export const saveBlogs = (blog) => {
  let blogs = getBlogs();
  const isExists = blogs.find((b) => b.id === blog.id);
  if (isExists) {
    return toast.error("Already Bookmarked");
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("Blog Bookmarked Successfully");
};
//delete blog
export const deleteBlog = (id) => {
  let blogs = getBlogs();
  const remaining = blogs.filter((b) => b.id !== id);
  localStorage.setItem("blogs", JSON.stringify(remaining));
  toast.success("Blog Unmarked Successfully");
};
