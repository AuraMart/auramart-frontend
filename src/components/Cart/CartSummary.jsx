const CartSummary = ({ subtotal, shippingTotal, total }) => {
    return (
      <div className="w-72">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Sub Total</span>
            <span>Rs {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Rs {shippingTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-medium pt-2 border-t">
            <span>Grand Total</span>
            <span>Rs {total.toFixed(2)}</span>
          </div>
        </div>
        <button className="w-full bg-purple-600 text-white rounded py-2 mt-4">
          Proceed To Checkout
        </button>
        <button className="w-full border border-gray-300 rounded py-2 mt-2">
          Continue Shopping
        </button>
      </div>
    );
  };

  export default CartSummary;