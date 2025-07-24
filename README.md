<!-- # assignment-todo

A simple, clean React + Vite app that demonstrates CRD-like functionality using a mock API. Built for assignment purposes with production-level code structure, styling, and logic.

---

## 🚀 Features

- Fetch posts using **React Query**
- Add a random post from JSONPlaceholder API
- Delete a post with optimistic UI update (application-level only – see note below)
- Custom toast-like popup messages
- Styled with **Tailwind CSS**
- Error handling and loading states
- 404 Page Not Found routing

---

## 🛠️ Tech Stack

- ⚛️ React (with hooks)
- ⚡ Vite (for fast dev & build)
- 🎨 Tailwind CSS
- 📦 Axios
- 🔄 @tanstack/react-query
- 🌐 JSONPlaceholder API
- 🔧 React Router DOM

--- -->



## 📦 Installation and Run

```bash
git clone https://github.com/Dibyaranjan450/assignment-todo.git
cd assignment-todo
npm install
npm run dev
```

<!-- > ⚠️ **Note on Delete Functionality**
>
> When a post is deleted in the app, it is removed only from the UI (application state). This is because the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) is a mock service and does **not persist DELETE requests**. The post will reappear on page reload or full data refetch. -->
