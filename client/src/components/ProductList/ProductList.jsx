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
import { useEffect, useState, useContext } from "react";
import ProductDetails from "../../pages/ProductDetails";
import ThemeContext from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/spinner";

export default function ProductList() {
  const { theme } = useContext(ThemeContext);
  const [allProducts, setAllProducts] = useState([]);
  const [fetching, setFetching] = useState(true);
  const url = import.meta.env.VITE_API_URL;
  useEffect(() => {
    setFetching(true);
    const newProducts = async () => {
      const res = await axios.get(`${url}/product/`);
      setAllProducts(res.data);
    };
    newProducts();
    window.scrollTo(0, 0);
    setTimeout(() => {
      console.log("nothing ...");
    }, 1000);
    setFetching(false);
  }, []);
  if (fetching) {
    return <Spinner />;
  }
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
              className="group relative "
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
                <div>
                  <p className="text-lg mb-3 font-medium text-gray-900">
                    {product.price}$
                  </p>
                  <Link
                    to="/payment"
                    className={`bg-${theme}-primary px-1 text-xs rounded-md py-1 duration-200`}
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
