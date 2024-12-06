const CartHeader = () => {
    return (
      <div className="mb-6">
        <h1 className="text-lg">Add To Cart</h1>
        <p className="text-sm text-gray-600">
          Please fill in the fields below and click place order to complete your purchase!
        </p>
        <p className="text-sm">
          Already registered? 
          <span className="text-purple-600 ml-1 cursor-pointer">
            Please login here
          </span>
        </p>
      </div>
    );
  };

  
  export default CartHeader;