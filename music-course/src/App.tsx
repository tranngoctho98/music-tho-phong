import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import courseLoader from "./actions/loaders/course-loaders";
import productLoader, {
  loaderAll as productLoaderAll,
} from "./actions/loaders/product-loaders";
import { Suspense, lazy } from "react";
import { LinearProgress } from "@mui/material";
const ContactPage = lazy(() => import("./pages/contact-page/contact-page"));
const CourseDetailPage = lazy(
  () => import("./pages/course-detail-page/course-detail-page")
);
const CoursePage = lazy(() => import("./pages/course-page/course-page"));
const NotFoundPage = lazy(() => import("./pages/home-page/home-page"));
const HomePage = lazy(() => import("./pages/home-page/home-page"));
const IntroducePage = lazy(
  () => import("./pages/introduce-page/Introduce-page")
);
const NewsPage = lazy(() => import("./pages/new-page/news-page"));
const PictureStudentPage = lazy(
  () => import("./pages/picture-student-page/picture-student-page")
);
const PageWebsite = lazy(() => import("./pages/page-website"));
const ProductPage = lazy(() => import("./pages/product-page/product-page"));
const ProductDetailPage = lazy(
  () => import("./pages/product-detail-page/product-detail-page")
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
