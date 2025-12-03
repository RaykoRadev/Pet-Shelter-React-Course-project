# 🐾 Pet Shelter App

🌐 **Live Demo:**  
https://pet-shelter-react-course-project.vercel.app/

> 💡 _Note: The backend runs on a free tier server. It may take up to **50 seconds** to wake up on the first request and stays active for **15 minutes** after the last activity._

---

## 🚀 Features

### 🧑 Guest Users Can:

-   Browse all posts
-   View post details
-   Use pagination and sorting
-   Visit the "About Us" page
-   Login / Register

### 🔐 Authenticated Users Can:

You may use these test accounts:

Email: petkan@abv.bg
Password: asdasd

Email: alex@abv.bg
Password: asdasd

-   Create new posts
-   Like / Unlike posts
-   Edit or delete **their own** posts
-   Logout

---

## 🧪 Project Requirements (Covered)

### Public Part

-   ✅ Home Page (`/`)
-   ✅ Login / Register (`/users/login`, `/users/register`)
-   ✅ Browse posts without authentication
-   ✅ View post details

### Private Part

-   ✅ My Profile (`/users/profile`)
-   ✅ Create, edit and delete posts
-   ✅ Like / Dislike posts

### General Requirements

-   ✅ At least 3 dynamic pages:
    -   Catalog
    -   Profile
    -   Details
-   ✅ Specific views:
    -   All posts list
    -   Individual post details
-   ✅ Full CRUD for pets
-   ✅ ReactJS (frontend) + Express + MongoDB (backend)
-   ✅ RESTful communication
-   ✅ Authentication & session handling
-   ✅ Client-side routing:
    -   `/users/login`
    -   `/users/register`
    -   `/users/profile`
    -   `/pets/catalog`
    -   `/pets/create`
    -   `/pets/details/:id`
    -   `/pets/edit/:id`

### 🧱 Code & Architecture

-   ✅ Clean Git commit history
-   ✅ Component-based structure
-   ✅ Well-organized folder structure
-   ✅ Use of React-specific concepts:
    -   React Hooks
    -   Context API
    -   Stateless & stateful components
    -   Uncontrolled forms (login/register)
    -   Combined form (create/edit)
    -   Synthetic events
    -   Route guards

### 🧪 Form Handling & Validation

-   ✅ Toast-based error notifications
-   ✅ Field validations (frontend & backend)
-   ✅ Server error handling

### 💅 UI / UX & Design

-   ✅ Custom UI with TailwindCSS
-   ✅ Loading spinners
-   ✅ Clean user experience flow

---

## 🌍 Bonus Features

-   🌐 Geolocation on "About Us" page
-   🖼 ImgBB for image storage
-   🚀 Deployed on Vercel
-   📄 Pagination in catalog
-   📦 Zustand state management

---

## 🛠 Development Setup

### Backend

Repository:  
https://github.com/RaykoRadev/back-end-server---nodeJS-express

```bash
npm install
npm run dev
```

### Frontend (React + Vite)

```bash
npm install
npm run dev
```

Backend runs at: `http://localhost:3000/`

Frontend runs at: `http://localhost:5173/`

Feel free to fork, contribute, or open issues! 😊
