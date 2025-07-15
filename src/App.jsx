import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomePage, NotFound } from "./pages/index";
import { getPost } from "./lib/api";

const queryClient = new QueryClient();

const App = () => {
  const handleDelete = (id) => {
    queryClient.setQueryData(["getData"], (oldData) =>
      oldData?.filter((post) => post.id !== id)
    );
  };

  const handleAddPost = async () => {
    const newPost = await getPost();

    queryClient.setQueryData(["getData"], (oldPosts = []) => [
      { ...newPost, id: Date.now() },
      ...oldPosts,
    ]);
  };

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                handleDelete={handleDelete}
                handleAddPost={handleAddPost}
              />
            }
          />

          {/* <Route path="/add" element={<>Add Post</>} />
          <Route path="/delete/:id" element={<>Delete Post</>} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
