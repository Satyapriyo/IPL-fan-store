import axios from "axios";
// const products = [
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 2,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 3,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 4,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 5,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
// ];
import { useEffect, useState } from "react";
import ProductDetails from "../../pages/ProductDetails";
import { Link } from "react-router-dom";
export default function ProductList() {
  const [allProducts, setAllProducts] = useState([]);
  const url = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const newProducts = async () => {
      const res = await axios.get(`${url}/product/`);
      setAllProducts(res.data);
    };
    newProducts();
    window.scrollTo(0, 0);
  }, []);
  console.log(allProducts);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Top Selling Products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {allProducts.map((product) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className="group relative"
            >
              <img
                alt="product image"
                src={product.imgUrl[0]}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-900 font-bold">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product?.name?.split("-").slice(0, 1).join(" ")}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.reviews} reviews
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}$
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
