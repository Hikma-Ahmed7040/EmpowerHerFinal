// import { useParams } from "react-router-dom";

const ProductDetails = () => {
  // const { id } = useParams();

  // Replace this with real data or API call
  const product = {
    title: "Traditional Dress",
    description: "Handmade Ethiopian dress with cultural patterns.",
    price: "$25",
    rating: 4.5,
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
      <p className="text-yellow-600">{product.price}</p>
      <p>⭐ {product.rating}</p>
    </div>
  );
};

export default ProductDetails;
