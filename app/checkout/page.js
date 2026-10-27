// import Cta from "@/components/Cta";
// import NiceSelect from "@/components/NiceSelect";
// import PageBanner from "@/components/PageBanner";
// import FoodKingLayout from "@/layouts/FoodKingLayout";
// import Link from "next/link";

// const page = () => {
//   return (
//     <FoodKingLayout>
//       <PageBanner pageName={"CHECKOUT"} />
//       <section className="checkout-section fix section-padding border-bottom">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <form action="#" method="post">
//                 <div className="row g-4">
//                   <div className="col-md-5 col-lg-4 col-xl-3">
//                     <div className="checkout-radio">
//                       <p className="primary-text">Select any one</p>
//                       <div className="checkout-radio-wrapper">
//                         <div className="checkout-radio-single">
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             id="cCard"
//                             name="pay-method"
//                             defaultValue="Credit/Debit Cards"
//                           />
//                           <label htmlFor="cCard">Credit/Debit Cards</label>
//                         </div>
//                         <div className="checkout-radio-single">
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             id="paypal"
//                             name="pay-method"
//                             defaultValue="PayPal"
//                           />
//                           <label htmlFor="paypal">PayPal</label>
//                         </div>
//                         <div className="checkout-radio-single">
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             id="payoneer"
//                             name="pay-method"
//                             defaultValue="Payoneer"
//                           />
//                           <label htmlFor="payoneer">Payoneer</label>
//                         </div>
//                         <div className="checkout-radio-single">
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             id="visa"
//                             name="pay-method"
//                             defaultValue="Visa"
//                           />
//                           <label htmlFor="visa">Visa</label>
//                         </div>
//                         <div className="checkout-radio-single">
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             id="mastercard"
//                             name="pay-method"
//                             defaultValue="Mastercard"
//                           />
//                           <label htmlFor="mastercard">Mastercard</label>
//                         </div>
//                         <div className="checkout-radio-single">
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             id="fastPay"
//                             name="pay-method"
//                             defaultValue="Fastpay"
//                           />
//                           <label htmlFor="fastPay">Fastpay</label>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-7 col-lg-8 col-xl-9">
//                     <div className="checkout-single-wrapper">
//                       <div className="checkout-single boxshado-single">
//                         <h4>Billing address</h4>
//                         <div className="checkout-single-form">
//                           <div className="row g-4">
//                             <div className="col-lg-6">
//                               <div className="input-single">
//                                 <input
//                                   type="text"
//                                   name="user-first-name"
//                                   id="userFirstName"
//                                   required
//                                   placeholder="First Name"
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="input-single">
//                                 <input
//                                   type="text"
//                                   name="user-last-name"
//                                   id="userLastName"
//                                   required
//                                   placeholder="Last Name"
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="input-single">
//                                 <input
//                                   type="email"
//                                   name="user-check-email"
//                                   id="userCheckEmail"
//                                   required
//                                   placeholder="Your Email"
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="input-single">
//                                 <NiceSelect
//                                   option={[
//                                     { id: 1, name: "USA", value: "usa" },
//                                     { id: 2, name: "AUS", value: "aus" },
//                                     { id: 3, name: "UK", value: "uk" },
//                                     { id: 4, name: "NED", value: "ned" },
//                                   ]}
//                                   className="country-select"
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-12">
//                               <div className="input-single">
//                                 <textarea
//                                   name="user-address"
//                                   id="userAddress"
//                                   placeholder="Address"
//                                   defaultValue={""}
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="checkout-single checkout-single-bg">
//                         <h4>Payment Methods</h4>
//                         <div className="checkout-single-form">
//                           <p className="payment" />
//                           <div className="row g-3">
//                             <div className="col-lg-12">
//                               <div className="input-single">
//                                 <label htmlFor="userCardNumber">
//                                   Card number
//                                 </label>
//                                 <input
//                                   type="number"
//                                   name="user-card-number"
//                                   id="userCardNumber"
//                                   placeholder="0000 0000 0000 0000"
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="input-single">
//                                 <label htmlFor="userCardDate">
//                                   Expiry date
//                                 </label>
//                                 <input
//                                   type="text"
//                                   id="userCardDate"
//                                   placeholder="DD/MM/YY"
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="input-single">
//                                 <label htmlFor="userCvc">Cvc / Cvv</label>
//                                 <input
//                                   type="text"
//                                   maxLength={3}
//                                   name="user-card-cvc"
//                                   id="userCvc"
//                                   required
//                                   placeholder="3 Digits"
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-12">
//                               <div className="input-single">
//                                 <label htmlFor="userCardName">
//                                   Name on card
//                                 </label>
//                                 <input
//                                   type="text"
//                                   name="user-card-name"
//                                   id="userCardName"
//                                   placeholder="Name"
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="input-single input-check payment-save">
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             name="save-for-next"
//                             id="saveForNext"
//                           />
//                           <label htmlFor="saveForNext">
//                             Save for my next payment
//                           </label>
//                         </div>
//                         <div className="mt-4">
//                           <Link
//                             href="/checkout"
//                             className="theme-btn border-radius-none"
//                           >
//                             Payment Now
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Cta />
//     </FoodKingLayout>
//   );
// };
// export default page;



// "use client";
// import Cta from "@/components/Cta";
// import NiceSelect from "@/components/NiceSelect";
// import PageBanner from "@/components/PageBanner";
// import FoodKingLayout from "@/layouts/FoodKingLayout";
// import Link from "next/link";
// import { useState } from "react";

// const page = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your payment processing logic here
    
//     // Show success modal
//     setShowModal(true);
    
//     // Hide modal after 3 seconds
//     setTimeout(() => {
//       setShowModal(false);
//     }, 3000);
//   };

//   return (
//     <FoodKingLayout>
//       <PageBanner pageName={"CHECKOUT"} />
//       <section className="checkout-section fix section-padding border-bottom">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <form onSubmit={handleSubmit} method="POST">
//                 <div className="row g-4">
//                   {/* ... rest of the form elements remain unchanged ... */}
//                   <div className="col-md-5 col-lg-4 col-xl-3">
//                     <div className="checkout-radio">
//                       <p className="primary-text">Select any one</p>
//                       <div className="checkout-radio-wrapper">
//                         <div className="checkout-radio-single">
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             id="cCard"
//                             name="pay-method"
//                             defaultValue="Credit/Debit Cards"
//                           />
//                           <label htmlFor="cCard">Credit/Debit Cards</label>
//                         </div>
//                         <div className="checkout-radio-single">
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             id="paypal"
//                             name="pay-method"
//                             defaultValue="PayPal"
//                           />
//                           <label htmlFor="paypal">PayPal</label>
//                         </div>
//                         <div className="checkout-radio-single">
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             id="payoneer"
//                             name="pay-method"
//                             defaultValue="Payoneer"
//                           />
//                           <label htmlFor="payoneer">Payoneer</label>
//                         </div>
//                         <div className="checkout-radio-single">
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             id="visa"
//                             name="pay-method"
//                             defaultValue="Visa"
//                           />
//                           <label htmlFor="visa">Visa</label>
//                         </div>
//                         <div className="checkout-radio-single">
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             id="mastercard"
//                             name="pay-method"
//                             defaultValue="Mastercard"
//                           />
//                           <label htmlFor="mastercard">Mastercard</label>
//                         </div>
//                         <div className="checkout-radio-single">
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             id="fastPay"
//                             name="pay-method"
//                             defaultValue="Fastpay"
//                           />
//                           <label htmlFor="fastPay">Fastpay</label>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-7 col-lg-8 col-xl-9">
//                     <div className="checkout-single-wrapper">
//                       <div className="checkout-single boxshado-single">
//                         <h4>Billing address</h4>
//                         <div className="checkout-single-form">
//                           <div className="row g-4">
//                             <div className="col-lg-6">
//                               <div className="input-single">
//                                 <input
//                                   type="text"
//                                   name="user-first-name"
//                                   id="userFirstName"
//                                   required
//                                   placeholder="First Name"
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="input-single">
//                                 <input
//                                   type="text"
//                                   name="user-last-name"
//                                   id="userLastName"
//                                   required
//                                   placeholder="Last Name"
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="input-single">
//                                 <input
//                                   type="email"
//                                   name="user-check-email"
//                                   id="userCheckEmail"
//                                   required
//                                   placeholder="Your Email"
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="input-single">
//                                 <NiceSelect
//                                   option={[
//                                     { id: 1, name: "USA", value: "usa" },
//                                     { id: 2, name: "AUS", value: "aus" },
//                                     { id: 3, name: "UK", value: "uk" },
//                                     { id: 4, name: "NED", value: "ned" },
//                                   ]}
//                                   className="country-select"
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-12">
//                               <div className="input-single">
//                                 <textarea
//                                   name="user-address"
//                                   id="userAddress"
//                                   placeholder="Address"
//                                   defaultValue={""}
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="checkout-single checkout-single-bg">
//                         <h4>Payment Methods</h4>
//                         <div className="checkout-single-form">
//                           <p className="payment" />
//                           <div className="row g-3">
//                             <div className="col-lg-12">
//                               <div className="input-single">
//                                 <label htmlFor="userCardNumber">
//                                   Card number
//                                 </label>
//                                 <input
//                                   type="number"
//                                   name="user-card-number"
//                                   id="userCardNumber"
//                                   placeholder="0000 0000 0000 0000"
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="input-single">
//                                 <label htmlFor="userCardDate">
//                                   Expiry date
//                                 </label>
//                                 <input
//                                   type="text"
//                                   id="userCardDate"
//                                   placeholder="DD/MM/YY"
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-6">
//                               <div className="input-single">
//                                 <label htmlFor="userCvc">Cvc / Cvv</label>
//                                 <input
//                                   type="text"
//                                   maxLength={3}
//                                   name="user-card-cvc"
//                                   id="userCvc"
//                                   required
//                                   placeholder="3 Digits"
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-lg-12">
//                               <div className="input-single">
//                                 <label htmlFor="userCardName">
//                                   Name on card
//                                 </label>
//                                 <input
//                                   type="text"
//                                   name="user-card-name"
//                                   id="userCardName"
//                                   placeholder="Name"
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="input-single input-check payment-save">
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             name="save-for-next"
//                             id="saveForNext"
//                           />
//                           <label htmlFor="saveForNext">
//                             Save for my next payment
//                           </label>
//                         </div>
//                         <div className="mt-4">
//                           <button type="submit" className="theme-btn border-radius-none">
//                             <span className="button-content-wrapper d-flex align-items-center">
//                               <span className="button-text">Payment Now</span>
//                             </span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

      // {showModal && (
      //   <div
      //     id="successModal"
      //     style={{
      //       display: 'flex',
      //       position: 'fixed',
      //       top: 0,
      //       left: 0,
      //       width: '100%',
      //       height: '100%',
      //       background: 'rgba(0, 0, 0, 0.5)',
      //       zIndex: 1000,
      //       justifyContent: 'center',
      //       alignItems: 'center',
      //     }}
      //   >
      //     <div
      //       style={{
      //         background: 'white',
      //         padding: '30px',
      //         borderRadius: '10px',
      //         textAlign: 'center',
      //         maxWidth: '400px',
      //         width: '90%',
      //       }}
      //     >
      //       <svg
      //         fill="none"
      //         stroke="green"
      //         viewBox="0 0 24 24"
      //         style={{
      //           width: '80px',
      //           height: '80px',
      //           margin: '0 auto 20px',
      //         }}
      //       >
      //         <path
      //           strokeLinecap="round"
      //           strokeLinejoin="round"
      //           strokeWidth="2"
      //           d="M5 13l4 4L19 7"
      //         />
      //       </svg>
      //       <h3>Payment Successful!</h3>
      //       <p>Your payment has been processed successfully.</p>
      //     </div>
      //   </div>
      // )}

//       <Cta />
//     </FoodKingLayout>
//   );
// };
// export default page;


"use client";
import Cta from "@/components/Cta";
import NiceSelect from "@/components/NiceSelect";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    cardName: '',
    saveForNext: false,
    paymentMethod: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      country: '',
      cardNumber: '',
      expiryDate: '',
      cvc: '',
      cardName: '',
      saveForNext: false,
      paymentMethod: ''
    });

    // Show success modal
    setShowModal(true);
    
    // Hide modal after 3 seconds
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePaymentMethodChange = (method) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: method
    }));
  };

  return (
    <FoodKingLayout>
      <PageBanner pageName={"CHECKOUT"} />
      <section className="checkout-section fix section-padding border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form onSubmit={handleSubmit} method="POST">
                <div className="row g-4">
                  <div className="col-md-5 col-lg-4 col-xl-3">
                    <div className="checkout-radio">
                      <p className="primary-text">Select any one</p>
                      <div className="checkout-radio-wrapper">
                        {['Credit/Debit Cards', 'PayPal', 'Payoneer', 'Visa', 'Mastercard', 'Fastpay'].map((method) => (
                          <div className="checkout-radio-single" key={method}>
                            <input
                              type="radio"
                              className="form-check-input"
                              id={method.toLowerCase().replace(/ /g, '-')}
                              name="paymentMethod"
                              value={method}
                              checked={formData.paymentMethod === method}
                              onChange={() => handlePaymentMethodChange(method)}
                              required
                            />
                            <label htmlFor={method.toLowerCase().replace(/ /g, '-')}>{method}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-7 col-lg-8 col-xl-9">
                    <div className="checkout-single-wrapper">
                      <div className="checkout-single boxshado-single">
                        <h4>Billing address</h4>
                        <div className="checkout-single-form">
                          <div className="row g-4">
                            <div className="col-lg-6">
                              <div className="input-single">
                                <input
                                  type="text"
                                  name="firstName"
                                  value={formData.firstName}
                                  onChange={handleInputChange}
                                  required
                                  placeholder="First Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <input
                                  type="text"
                                  name="lastName"
                                  value={formData.lastName}
                                  onChange={handleInputChange}
                                  required
                                  placeholder="Last Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  required
                                  placeholder="Your Email"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <NiceSelect
                                  option={[
                                    { id: 1, name: "USA", value: "usa" },
                                    { id: 2, name: "AUS", value: "aus" },
                                    { id: 3, name: "UK", value: "uk" },
                                    { id: 4, name: "NED", value: "ned" },
                                  ]}
                                  className="country-select"
                                  value={formData.country}
                                  onChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="input-single">
                                <textarea
                                  name="address"
                                  value={formData.address}
                                  onChange={handleInputChange}
                                  placeholder="Address"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="checkout-single checkout-single-bg">
                        <h4>Payment Methods</h4>
                        <div className="checkout-single-form">
                          <div className="row g-3">
                            <div className="col-lg-12">
                              <div className="input-single">
                                <label htmlFor="userCardNumber">Card number</label>
                                <input
                                  type="number"
                                  name="cardNumber"
                                  value={formData.cardNumber}
                                  onChange={handleInputChange}
                                  placeholder="0000 0000 0000 0000"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <label htmlFor="userCardDate">Expiry date</label>
                                <input
                                  type="text"
                                  name="expiryDate"
                                  value={formData.expiryDate}
                                  onChange={handleInputChange}
                                  placeholder="DD/MM/YY"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-single">
                                <label htmlFor="userCvc">Cvc / Cvv</label>
                                <input
                                  type="text"
                                  name="cvc"
                                  value={formData.cvc}
                                  onChange={handleInputChange}
                                  maxLength={3}
                                  placeholder="3 Digits"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="input-single">
                                <label htmlFor="userCardName">Name on card</label>
                                <input
                                  type="text"
                                  name="cardName"
                                  value={formData.cardName}
                                  onChange={handleInputChange}
                                  placeholder="Name"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="input-single input-check payment-save">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="saveForNext"
                            checked={formData.saveForNext}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="saveForNext">
                            Save for my next payment
                          </label>
                        </div>
                        <div className="mt-4">
                          <button type="submit" className="theme-btn border-radius-none">
                            <span className="button-content-wrapper d-flex align-items-center">
                              <span className="button-text">Payment Now</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal remains the same */}
      {showModal && (
        <div
          id="successModal"
          style={{
            display: 'flex',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '10px',
              textAlign: 'center',
              maxWidth: '400px',
              width: '90%',
            }}
          >
            <svg
              fill="none"
              stroke="green"
              viewBox="0 0 24 24"
              style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 20px',
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h3>Payment Successful!</h3>
            <p>Your payment has been processed successfully.</p>
          </div>
        </div>
      )}
      <Cta />
    </FoodKingLayout>
  );
};
export default page;