import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import courseLoader from "./actions/loaders/course-loaders";
import productLoader, {
  loaderAll as productLoaderAll,
} from "./actions/loaders/product-loaders";
import { Suspense, lazy } from "react";
import { LinearProgress } from "@mui/material";
const ContactPage = lazy(() => import("./app/contact-page/contact-page"));
const CourseDetailPage = lazy(
  () => import("./app/course-detail-page/course-detail-page")
);
const CoursePage = lazy(() => import("./app/course-page/course-page"));
const NotFoundPage = lazy(() => import("./app/home-page/home-page"));
const HomePage = lazy(() => import("./app/home-page/home-page"));
const IntroducePage = lazy(() => import("./app/introduce-page/Introduce-page"));
const NewsPage = lazy(() => import("./app/new-page/news-page"));
const PictureStudentPage = lazy(
  () => import("./app/picture-student-page/picture-student-page")
);
const PageWebsite = lazy(() => import("./app/page-website"));
const ProductPage = lazy(() => import("./app/product-page/product-page"));
const ProductDetailPage = lazy(
  () => import("./app/product-detail-page/product-detail-page")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWebsite />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "gioi-thieu",
        element: (
          <Suspense fallback={<LinearProgress />}>
            <IntroducePage />
          </Suspense>
        ),
      },
      {
        path: "cac-khoa-hoc",
        element: (
          <Suspense fallback={<LinearProgress />}>
            <CoursePage />
          </Suspense>
        ),
      },
      {
        path: "noi-mua-nhac-cu",
        element: (
          <Suspense fallback={<LinearProgress />}>
            <ProductPage />
          </Suspense>
        ),
        loader: productLoaderAll,
      },
      {
        path: "hinh-anh",
        element: (
          <Suspense fallback={<LinearProgress />}>
            <PictureStudentPage />
          </Suspense>
        ),
      },
      {
        path: "thue-ca-si-ban-nhac",
        element: (
          <Suspense fallback={<LinearProgress />}>
            <NewsPage />
          </Suspense>
        ),
      },
      {
        path: "lien-he",
        element: (
          <Suspense fallback={<LinearProgress />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "cac-khoa-hoc/:courseId",
        element: (
          <Suspense fallback={<LinearProgress />}>
            <CourseDetailPage />
          </Suspense>
        ),
        loader: courseLoader,
      },
      {
        path: "noi-mua-nhac-cu/:productTypeId",
        element: (
          <Suspense fallback={<LinearProgress />}>
            <ProductPage />
          </Suspense>
        ),
        loader: productLoader,
      },
      {
        path: "noi-mua-nhac-cu/:productTypeId/:productId",
        element: (
          <Suspense fallback={<LinearProgress />}>
            <ProductDetailPage />
          </Suspense>
        ),
        loader: productLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
