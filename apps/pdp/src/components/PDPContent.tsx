import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { currency, getProductById, Product } from "../products";

const PDPContent = () => {
  const params = useParams<{ id: string }>();
  const productId = params.id;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (productId) {
      getProductById(productId).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [productId]);

  if (!product) return null;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <div className="font-bold text-3xl flex-grow">{product.name}</div>
          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
};

export default PDPContent;
