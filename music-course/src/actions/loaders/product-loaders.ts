import { LoaderFunctionArgs } from "react-router-dom";

const fetchData = async (productTypeId?: string) => {
  try {
    const url = "/jsons/products/product-" + (productTypeId || "all") + ".json";
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return [];
  }
};

export function getProduct(productTypeId?: string) {
  return fetchData(productTypeId);
}

interface ProductLoaderParam {
  productTypeId: string;
}

export default async function loader({
  params,
}: LoaderFunctionArgs<ProductLoaderParam>) {
  const data = await getProduct(params.productTypeId);
  return {
    ...data,
    listBreadcrumb: [{ name: "Nơi mua nhạc cụ", url: "/noi-mua-nhac-cu" }],
  };
}

export async function loaderAll() {
  return getProduct();
}
