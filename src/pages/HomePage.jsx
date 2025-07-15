import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../lib/api";
import {
  HomeCard,
  LoadingComponent,
  ErrorComponent,
  Popup,
} from "../components/index";

const HomePage = ({ handleDelete, handleAddPost }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["getData"],
    queryFn: async () => {
      return await fetchPosts();
    },
    retry: false,
  });

  const onAddPost = () => {
    handleAddPost();
    setShowPopup(true);
    setPopupMessage("🎉 Kudos! Post added successfully.");
  };

  if (isLoading) return <LoadingComponent />;
  if (error) return <ErrorComponent error={error} />;

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <div className="sticky top-0 bg-white z-10 py-4 border-b flex justify-between items-center px-3.5 mb-3.5">
        <h1 className="text-3xl font-bold text-center pb-2">Posts</h1>

        <button
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={onAddPost}
        >
          + Add Post
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {data.map(({ id, title, body }) => (
          <HomeCard
            key={id}
            id={id}
            title={title}
            body={body}
            handleDelete={handleDelete}
            setShowPopup={setShowPopup}
            setPopupMessage={setPopupMessage}
          />
        ))}
      </div>

      <Popup
        message={popupMessage}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </section>
  );
};

export default HomePage;
