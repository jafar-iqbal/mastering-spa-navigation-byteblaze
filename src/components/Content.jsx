import { useLoaderData } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const { cover_image,  title, tags, body_html, url } =
    blog;
  return (
    <div className="mx-auto group transition border-2 p-2 dark:bg-gray-50 bordar-primary hover-opacity-30">
      <img
        className="object-cover w-full rounded"
        src={cover_image || placeHolderImage}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t">
        {tags.map((tag) => (
          <a
            key={tag}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
          >
            # {tag}
          </a>
        ))}
      </div>
      <div className="space-y-2">
        <a href={url}
          target="_blank"
          className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </a>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
