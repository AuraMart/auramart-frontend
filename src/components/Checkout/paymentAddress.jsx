import React, { useState } from 'react';
import AddressBox from './AddressBox';
import NewAddressDialog from './NewAddressDialog';
import { Button } from '../ui/button';



const PaymentAddress = ({ activeComponent, setActiveComponent }) => {
  // State to handle showing the NewAddressDialog
  const [showNewAddressDialog, setShowNewAddressDialog] = useState(false);

  // Function to handle showing the NewAddressDialog
  function handleNewAddress() {
    setShowNewAddressDialog(true);
  };

  return (
    <div className="flex items-center justify-center w-[300px] md:w-[1200px] mx-auto mt-10 space-x-4">
      <div className="px-10">
        <h2 className="pb-4 font-bold">Select Address</h2>
        
        {/* Mapping addresses */}
        <div className="flex flex-col gap-3">
          <AddressBox />
          <AddressBox />
        </div>
        
        {/* Add new address */}
        <div className="flex flex-col items-center justify-center mt-4">
          {/* Button to trigger New Address Dialog */}
          <Button 
            className="px-10 py-6 text-lg text-black bg-white border border-black hover:bg-white hover:text-black"
            onClick={handleNewAddress}
          >
            Add new Address
          </Button>
          
          {/* Conditional rendering of the NewAddressDialog */}
          {showNewAddressDialog && <NewAddressDialog />}
        </div>
        
        {/* Back/Next buttons */}
        <div className="flex justify-end gap-6 mt-3 sm:mt-0">
          <Button className="px-10 py-6 text-lg text-black bg-white border border-black hover:bg-white hover:text-black">
            Back
          </Button>
          <Button
            className="px-10 py-6 text-lg text-white bg-black border-b-2 hover:bg-black hover:text-white"
            onClick={() => setActiveComponent(activeComponent + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentAddress;
