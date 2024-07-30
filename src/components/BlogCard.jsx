import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({ blog, deletable,handleDelete }) => {
  const { cover_image, published_at, title, description, id } = blog;

  return (
    <div className="flex relative py-10">
      <Link
        to={`/blog/${id}`}
        className=" mx-auto group transition border-2 hover:scale-105 hover:no-underline focus:no-underline dark:bg-gray-50 border-primary hover:border-secondary hover-opacity-30"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || placeHolderImage}
          alt={title}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div
          onClick={() => handleDelete(id)}
          className="absolute bg-primary p-3  rounded-full hover:scale-105 hover:bg-secondary overflow-hidden -right-5 group top-5 cursor-pointer"
        >
          <MdDeleteForever
            size={20}
            className="text-secondary group-hover:text-primary"
          />
        </div>
      )}
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    cover_image: PropTypes.string,
    published_at: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  deletable: PropTypes.bool,
};

BlogCard.defaultProps = {
  deletable: false,
  handleDelete: false,
};

export default BlogCard;
