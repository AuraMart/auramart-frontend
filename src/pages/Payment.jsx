import React from "react";
import CheckoutForm from "../components/Payment/CheckoutForm";
import OrderSummary from "../components/Payment/OrderSummary";

function Payment() {
  return (
    <div>
      <div className="flex flex-row m-12">
        {/* Main Content */}
        <div className="flex-1">
          <CheckoutForm/>
        </div> 

        {/* Fixed Order Summary */}
        <div className="w-1/2 ml-6">
          <div className="sticky top-12">
            <OrderSummary/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
