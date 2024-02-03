import { useLoaderData } from "react-router-dom";
import ViewScreen from "../../components/view-screen/view-screen";
import { CardProductProps } from "./card-product";
import ListProduct from "./list-product";
import { BreadCrumbsModel } from "../../models/bread-crumbs-model";

interface ProductPageProps {
  title?: string;
  listBreadcrumb?: BreadCrumbsModel[];
  listData?: CardProductProps[];
}

const ProductPage = () => {
  const { title, listBreadcrumb, listData } =
    useLoaderData() as ProductPageProps;

  if (!listData) {
    return <></>;
  }
  return (
    <ViewScreen title={title} listBreadcrumb={listBreadcrumb}>
      <ListProduct listData={listData} />
    </ViewScreen>
  );
};

export default ProductPage;
