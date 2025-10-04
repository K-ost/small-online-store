import type { JSX } from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/Layout";
import { API_URL } from "../constants";
import useGetData from "../hooks/useGetData";
import type { Product } from "../types";
import AlertError from "../ui/AlertError";
import Title from "../ui/Title";

function ProductPage(): JSX.Element {
  const { id } = useParams();

  const { data, isSuccess, isLoading, isError } = useGetData<Product>({
    keys: ["details"],
    url: API_URL + "/" + id,
  });

  return (
    <Layout>
      {isLoading && <div>Loading...</div>}

      {isSuccess && (
        <>
          <Title aria-label="Product title">{data.title}</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="rounded-md border border-gray-300 p-6 flex items-center justify-center">
              <img src={data.image} alt="" className="max-w-[200px]" />
            </div>
            <div>
              <div className="text-gray-600 text-lg mb-4">Category: {data.category}</div>
              <div className="text-2xl text-blue-700 mb-6 font-semibold">
                ${data.price}
              </div>
              <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
            </div>
          </div>
        </>
      )}

      {isError && <AlertError title="Server error" />}
    </Layout>
  );
}

export default ProductPage;
