import { Trash2 } from "lucide-react";
import { deletePost } from "../lib/api";

const HomeCard = ({
  id,
  title,
  body,
  handleDelete,
  setShowPopup,
  setPopupMessage,
}) => {
  const onDeleteClick = async () => {
    handleDelete(id);
    await deletePost(id);
    setShowPopup(true);
    setPopupMessage("🎉 Kudos! Post deleted successfully.");
  };

  return (
    <div className="relative bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow group cursor-default">
      <button
        onClick={onDeleteClick}
        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
        aria-label="Delete post"
      >
        <Trash2 size={20} />
      </button>

      <h3 className="w-10/12 text-xl font-semibold mb-2 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};

export default HomeCard;
