const CartTableHeader = () => {
    return (
      <div className="grid grid-cols-12 bg-gray-800 text-white p-4 text-sm">
        <div className="col-span-4">PRODUCT DETAILS</div>
        <div className="col-span-2 text-center">PRICE</div>
        <div className="col-span-2 text-center">QUANTITY</div>
        <div className="col-span-2 text-center">SHIPPING</div>
        <div className="col-span-1 text-center">SUBTOTAL</div>
        <div className="col-span-1 text-center">ACTION</div>
      </div>
    );
  };

  export default CartTableHeader;