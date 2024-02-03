import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import courseLoader from "./actions/loaders/course-loaders";
import productLoader, {
  loaderAll as productLoaderAll,
} from "./actions/loaders/product-loaders";
import ContactPage from "./pages/contact-page/contact-page";
import CourseDetailPage from "./pages/course-detail-page/course-detail-page";
import CoursePage from "./pages/course-page/course-page";
import NotFoundPage from "./pages/errors/not-found-page";
import HomePage from "./pages/home-page/home-page";
import IntroducePage from "./pages/introduce-page/Introduce-page";
import NewsPage from "./pages/new-page/news-page";
import PageWebsite from "./pages/page-website";
import PictureStudentPage from "./pages/picture-student-page/picture-student-page";
import ProductPage from "./pages/product-page/product-page";
import ProductDetailPage from "./pages/product-detail-page/product-detail-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWebsite />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "gioi-thieu", element: <IntroducePage /> },
      { path: "cac-khoa-hoc", element: <CoursePage /> },
      {
        path: "noi-mua-nhac-cu",
        element: <ProductPage />,
        loader: productLoaderAll,
      },
      { path: "hinh-anh-hoc-vien", element: <PictureStudentPage /> },
      { path: "tin-tuc", element: <NewsPage /> },
      { path: "lien-he", element: <ContactPage /> },
      {
        path: "cac-khoa-hoc/:courseId",
        element: <CourseDetailPage />,
        loader: courseLoader,
      },
      {
        path: "noi-mua-nhac-cu/:productTypeId",
        element: <ProductPage />,
        loader: productLoader,
      },
      {
        path: "noi-mua-nhac-cu/:productTypeId/:productId",
        element: <ProductDetailPage />,
        loader: productLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
