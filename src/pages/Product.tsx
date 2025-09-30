import type { JSX } from "react";
import { useParams } from "react-router-dom";
import Title from "../ui/Title";
import useGetData from "../hooks/useGetData";
import type { Product } from "../types";
import { API_URL } from "../constants";
import AlertError from "../ui/AlertError";

function Product(): JSX.Element {
  const { id } = useParams();

  const { data, isSuccess, isLoading, isError } = useGetData<Product>({
    keys: ["details"],
    url: API_URL + "/" + id,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <AlertError title="Server error" />;

  if (!isSuccess) return <></>;

  return (
    <div>
      <Title>{data.title}</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div className="rounded-md border border-gray-300 p-6 flex items-center justify-center">
          <img src={data.image} alt="" className="max-w-[200px]" />
        </div>
        <div>
          <div className="text-gray-600 text-lg mb-4">Category: {data.category}</div>
          <div className="mb-6">Rating: {data.rating.rate}</div>
          <div className="text-2xl text-blue-700 mb-6 font-semibold">${data.price}</div>
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>
      </div>
    </div>
  );
}

export default Product;
