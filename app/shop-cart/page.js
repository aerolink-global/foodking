"use client";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

const page = () => {
  const { 
    cartItems, 
    incrementQuantity, 
    decrementQuantity, 
    removeItem, 
    calculateTotal 
  } = useCart()

  const shipping = cartItems.length > 0 ? 10 : 0
  const total = calculateTotal()

  return (
    <FoodKingLayout>
      <PageBanner pageName={"Shop Cart"} />
      <section className="cart-section section-padding fix">
        <div className="container">
          <div className="main-cart-wrapper">
            <div className="row">
              <div className="col-12">
                <div className="cart-wrapper">
                  <div className="cart-items-wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Subtotal</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={item.id}>
                            <td className="cart-item-info">
                              <img src={item.image} alt={item.name} />
                              <span>{item.name}</span>
                            </td>
                            <td className="cart-item-price">
                              $ {item.price.toFixed(2)}
                            </td>
                            <td>
                              <div className="cart-item-quantity">
                                <span className="cart-item-quantity-amount">
                                  {item.quantity}
                                </span>
                                <div className="cart-item-quantity-controller">
                                  <button
                                    onClick={() => incrementQuantity(item.id)}
                                  >
                                    <i className="far fa-caret-up" />
                                  </button>
                                  <button
                                    onClick={() => decrementQuantity(item.id)}
                                  >
                                    <i className="far fa-caret-down" />
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td className="cart-item-price">
                              $ {(item.price * item.quantity).toFixed(2)}
                            </td>
                            <td className="cart-item-remove">
                              <button onClick={() => removeItem(item.id)}>
                                <i className="fas fa-times" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="cart-wrapper-footer">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="text"
                        name="promo-code"
                        placeholder="Promo code"
                      />
                      <button className="theme-btn border-radius-none">
                        Apply Code
                      </button>
                    </form>
                    <Link href="/shop" className="theme-btn border-radius-none">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 offset-xl-6">
                <div className="cart-pragh-box">
                  <div className="cart-graph">
                    <h4>Cart Total</h4>
                    <ul>
                      <li>
                        <span>Subtotal</span>
                        <span>${total.toFixed(2)}</span>
                      </li>
                      <li>
                        <span>Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                      </li>
                      <li>
                        <span>Total</span>
                        <span>${(total + shipping).toFixed(2)}</span>
                      </li>
                    </ul>
                    <div className="chck">
                      <Link href="/checkout" className="theme-btn border-radius-none">
                        Proceed to Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};

export default page;