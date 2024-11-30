const CartDiscount = () => {
    return (
      <div className="w-72">
        <h3 className="font-medium mb-2">Discount Codes</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter your coupon code if you have one"
            className="flex-1 border rounded px-3 py-2 text-sm"
          />
          <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm">
            Apply Coupon
          </button>
        </div>
      </div>
    );
  };

  export default CartDiscount;