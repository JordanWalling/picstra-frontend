# WALKTHROUGH

---

## Remove Unwanted Files

## Import React Router and Create initial Route set up

---

```
    import "./App.css";
    import { BrowserRouter, Routes, Route } from "react-router-dom";

    function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
        </Routes>
        </BrowserRouter>
    );
    }

    export default App;

```

## Test out the Home Page

---

```
    npm run start
```

## Create components and pages folder

## Create Navbar.js

---

```
    import "../navbar/Navbar.scss";
    import { Link } from "react-router-dom";
    import { RxHamburgerMenu } from "react-icons/rx";

    function Navbar() {
    return (
        <div className="navbar">
        <div className="logo">
            <h1>Picstra</h1>
        </div>
        <div className="links">
            <Link to="/create-post">Create Post</Link>
        </div>
        <div className="hamburger">
            <RxHamburgerMenu />
        </div>
        </div>
    );
    }
    export default Navbar;

```

## Create Navbar.scss with initial styles

---

```
    .navbar {
    background-color: #333;
    color: #fff;
    height: 70px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    .logo {
        grid-column: 1 / span 2;
        display: flex;
        align-items: center;
        padding-left: 20px;
    }
    .links {
        grid-column: 11 / span 2;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 20px;
    }

    .links a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        }
    }

@media screen and (max-width: 320px) {
  .navbar {
    .links {
      display: none;
    }
    .hamburger {
      grid-column: 11 / span 2;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 20px;
      font-size: 26px;
    }
  }
}
```

## Create MainLayout.js

---

```
    import Navbar from "../navbar/Navbar";
    import { Outlet } from "react-router-dom";

    function MainLayout() {
    return (
        <div className="main-layout">
        <Navbar />
        <Outlet />
        </div>
    );
    }
    export default MainLayout;

```

## Update App.js

---

```
    import "./App.css";
    import MainLayout from "./components/MainLayout/MainLayout";

    import { BrowserRouter, Routes, Route } from "react-router-dom";

    function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />}>
            <Route index element={<h1>Home</h1>} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
    }

    export default App;
```

## In pages folder, create index page for all pages

---

```

    export { default as CreatePostPage } from "./CreatePost/CreatePostPage";
```

## in pages folder, create `CreatePostPage.js`

```
    function CreatePostPage() {
    return <div>CreatePostPage</div>;
    }
    export default CreatePostPage;
```

## Import pages into App.js

```
    import "./App.css";
    import MainLayout from "./components/MainLayout/MainLayout";
    import { CreatePostPage } from "./pages";
    import { BrowserRouter, Routes, Route } from "react-router-dom";

    function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />}>
            <Route index element={<h1>Home</h1>} />
            <Route path="create-post" element={<CreatePostPage />} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
    }

    export default App;
```

## Test out Create Post route

---

```
    http://localhost:3000/create-post
```
