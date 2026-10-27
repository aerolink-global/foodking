// "use client";
// import Cta from "@/components/Cta";
// import PageBanner from "@/components/PageBanner";
// import ProductTopBar from "@/components/ProductTopBar";
// import { useCart } from "@/contexts/CartContext";
// import FoodKingLayout from "@/layouts/FoodKingLayout";
// import Link from "next/link";

// const page = () => {
//   const { addToCart } = useCart();

//   const products = [
    // {
    //   id: 1,
    //   name: "ruti with beef slice",
    //   price: "$15.99",
    //   image: "assets/img/food/beef-ruti.png",
    // },
    // {
    //   id: 2,
    //   name: "Whopper Burger King",
    //   price: "$9.99",
    //   image: "assets/img/food/burger-2.png",
    // },
    // {
    //   id: 3,
    //   name: "Chiness pasta",
    //   price: "$12.49",
    //   image: "assets/img/food/pasta-2.png",
    // },
    // {
    //   id: 4,
    //   name: "delicious burger",
    //   price: "$8.99",
    //   image: "assets/img/food/pizza-3.png",
    // },
    // {
    //   id: 5,
    //   name: "fast food combo",
    //   price: "$19.99",
    //   image: "assets/img/food/main-food-2.png",
    // },
    // {
    //   id: 6,
    //   name: "ruti with chiken",
    //   price: "$14.49",
    //   image: "assets/img/food/ruti.png",
    // },
    // {
    //   id: 7,
    //   name: "grilled chiken",
    //   price: "$11.79",
    //   image: "assets/img/food/grilled-2.png",
    // },
    // {
    //   id: 8,
    //   name: "delicious burger",
    //   price: "$10.99",
    //   image: "assets/img/food/delicious-burger.png",
    // },
    // {
    //   id: 9,
    //   name: "ruti with beef slice",
    //   price: "$13.29",
    //   image: "assets/img/food/pasta-3.png",
    // },
    // {
    //   id: 10,
    //   name: "Whopper Burger King",
    //   price: "$11.59",
    //   image: "assets/img/food/french-fry-3.png",
    // },
    // {
    //   id: 11,
    //   name: "Chiness pasta",
    //   price: "$16.99",
    //   image: "assets/img/food/fried-chicken-2.png",
    // },
//   ];

//   return (
//     <FoodKingLayout>
//       <PageBanner pageName={"Shop Page"} />
//       <section className="food-category-section fix section-padding">
//         <div className="container">
//           <ProductTopBar />
//           <div className="row">
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
//               >
//                 <div className="catagory-product-card-2 shadow-style text-center">
//                   <div className="icon">
//                     <Link href="/shop-cart">
//                       <i className="far fa-heart" />
//                     </Link>
//                   </div>
//                   <div className="catagory-product-image">
//                     <img src={product.image} alt="product-img" />
//                   </div>
//                   {/* ... product card content */}
//                   <div className="catagory-button">
//                     <Link
//                       href="/shop-cart"
//                       className="theme-btn-2"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         addToCart(product);
//                       }}
//                     >
//                       <i className="far fa-shopping-basket" />
//                       Add To Cart
//                     </Link>
//                   </div>
//                   {/* ... rest of product card */}
//                   <div className="info-price d-flex align-items-center justify-content-center">
//                     <p>-5%</p>
//                     <h6>$30.52</h6>
//                     <span>$28.52</span>
//                   </div>
//                   <h4>
//                     <Link href="/shop-single">ruti with beef slice</Link>
//                   </h4>
//                   <div className="star">
//                     <span className="fas fa-star" />
//                     <span className="fas fa-star" />
//                     <span className="fas fa-star" />
//                     <span className="fas fa-star" />
//                     <span className="fas fa-star text-white" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div
//             className="page-nav-wrap mt-5 text-center wow fadeInUp"
//             data-wow-delay=".4s"
//           >
//             <ul>
//               <li>
//                 <Link className="page-numbers" href="#">
//                   <i className="fal fa-long-arrow-left" />
//                 </Link>
//               </li>
//               <li>
//                 <Link className="page-numbers" href="#">
//                   1
//                 </Link>
//               </li>
//               <li>
//                 <Link className="page-numbers" href="#">
//                   2
//                 </Link>
//               </li>
//               <li>
//                 <Link className="page-numbers" href="#">
//                   3
//                 </Link>
//               </li>
//               <li>
//                 <Link className="page-numbers" href="#">
//                   4
//                 </Link>
//               </li>
//               <li>
//                 <Link className="page-numbers" href="#">
//                   <i className="fal fa-long-arrow-right" />
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>
//       <Cta />
//     </FoodKingLayout>
//   );
// };
// export default page;

"use client";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import ProductTopBar from "@/components/ProductTopBar";
import { useCart } from "@/contexts/CartContext";
import FoodKingLayout from "@/layouts/FoodKingLayout";

const page = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "ruti with beef slice",
      price: 15.99,
      image: "assets/img/food/beef-ruti.png",
      originalPrice: 17.99, // Assuming an original price for each item
    },
    {
      id: 2,
      name: "Whopper Burger King",
      price: 9.99,
      image: "assets/img/food/burger-2.png",
      originalPrice: 11.99,
    },
    {
      id: 3,
      name: "Chiness pasta",
      price: 12.49,
      image: "assets/img/food/pasta-2.png",
      originalPrice: 14.49,
    },
    {
      id: 4,
      name: "delicious burger",
      price: 8.99,
      image: "assets/img/food/pizza-3.png",
      originalPrice: 10.99,
    },
    {
      id: 5,
      name: "fast food combo",
      price: 19.99,
      image: "assets/img/food/main-food-2.png",
      originalPrice: 21.99,
    },
    {
      id: 6,
      name: "ruti with chiken",
      price: 14.49,
      image: "assets/img/food/ruti.png",
      originalPrice: 16.49,
    },
    {
      id: 7,
      name: "grilled chiken",
      price: 11.79,
      image: "assets/img/food/grilled-2.png",
      originalPrice: 13.79,
    },
    {
      id: 8,
      name: "delicious burger",
      price: 10.99,
      image: "assets/img/food/delicious-burger.png",
      originalPrice: 12.99,
    },
    {
      id: 9,
      name: "ruti with beef slice",
      price: 13.29,
      image: "assets/img/food/pasta-3.png",
      originalPrice: 15.29,
    },
    {
      id: 10,
      name: "Whopper Burger King",
      price: 11.59,
      image: "assets/img/food/french-fry-3.png",
      originalPrice: 13.59,
    },
    {
      id: 11,
      name: "Chiness pasta",
      price: 16.99,
      image: "assets/img/food/fried-chicken-2.png",
      originalPrice: 18.99,
    }
  ];
  
  return (
    <FoodKingLayout>
      <PageBanner pageName={"Shop Page"} />
      <section className="food-category-section fix section-padding">
        <div className="container">
          <ProductTopBar />
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
                <div className="catagory-product-card-2 shadow-style text-center">
                  <div className="catagory-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="catagory-button">
                    <button
                      className="theme-btn-2"
                      onClick={() => addToCart(product)}
                    >
                      <i className="far fa-shopping-basket" />
                      Add To Cart
                    </button>
                  </div>
                  <div className="info-price d-flex align-items-center justify-content-center">
                    <p>-5%</p>
                    <h6>${product.originalPrice.toFixed(2)}</h6>
                    <span>${product.price.toFixed(2)}</span>
                  </div>
                  <h4>{product.name}</h4>
                  <div className="star">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="fas fa-star" />
                    ))}
                    <span className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};

export default page;