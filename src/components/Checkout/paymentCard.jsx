import React from 'react'
import PaymentSummaryProduct from './PaymentSummaryProduct';
import {Button} from '../ui/button';
import { useEffect } from 'react';
import md5 from "md5";





const PaymentCard = ({ activeComponent, setActiveComponent,onOpenChange }) => {

//   const orderId = "123456";
//   const name = "Iphone16";
//   const amount = 2000;
//   const merchantId = "1228659";
//   const merchantSecret = "MjY0OTk5MTk1MjI3MzM3MDY5NDIyODQ5ODU0NDM5MjAwOTMxMzEwNg==";

//   const amountFormatted = parseFloat(amount.toString())
//    .toLocaleString("en-us", { minimumFractionDigits: 2 })
//    .replaceAll(",", ""); // Formatted string without commas

//   const hashedSecret = md5(merchantSecret).toString().toUpperCase();
//   const amountFormated = parseFloat(amountFormatted)
//      .toLocaleString("en-us", { minimumFractionDigits: 2 })
//      .replaceAll(",", "");
//   const currency = "LKR";

//   const hash = md5(
//     merchantId + orderId + amountFormated + currency + hashedSecret
//   )
//     .toString()
//     .toUpperCase();

   


//   const paymentData = {
//     sandbox: true,
//     merchant_id: "1228659",
//     return_url: "http://localhost:3000/bookings",
//     cancel_url: "http://sample.com/cancel",
//     notify_url: "http://sample.com/notify",
//     order_id: orderId,
//     items: name,
//     amount: amount,
//     currency: currency,
//     first_name: "kanishka",
//     last_name: "udayanga",
//     email: "mskanihskaudayang@gmail.com",
//     phone: "0784657729",
//     address: "kurunda",
//     city: "city",
//     country: "Lanka",
//     hash: hash,
//   };

// useEffect(() => {
//    window.payhere.onCompleted = function onCompleted(paymentId) {
//     console.log("Payment completed. Payment Id:" + paymentId);
    
//   };


//   window.payhere.onDismissed = function onDismissed() {
//     console.log("Payment dismissed");
//   };

//   window.payhere.onError = function onError(error) {
//     console.log("Error:" + error);
//   };

// }, []);


 

//  const paymentDone = () => {
//   console.log("paymentDone");
//     window.payhere.startPayment(paymentData);
//   };
  
//   const payment = async () => {
//     console.log("payment");
//     paymentDone();
//   }
const orderId = "123456";
  const name = "Iphone16";
  const amount = 1000;
  const merchantId = "1228662";
  const merchantSecret = "NTAzMjg2MjQyMjg1NjI5NjI1NTI5MTM0MTQwNzI0MTY5Mzg5Mzg=";

  const hashedSecret = md5(merchantSecret).toString().toUpperCase();
  const amountFormated = parseFloat(amount)
    .toLocaleString("en-us", { minimumFractionDigits: 2 })
    .replaceAll(",", "");
  const currency = "LKR";

  const hash = md5(
    merchantId + orderId + amountFormated + currency + hashedSecret
  )
    .toString()
    .toUpperCase();

  const paymentData = {
    sandbox: true,
    merchant_id: "1228662",
    return_url: "http://localhost:3000",
    cancel_url: "http://sample.com/cancel",
    notify_url: "http://sample.com/notify",
    order_id: orderId,
    items: name,
    amount: amount,
    currency: currency,
    first_name: "kanishka",
    last_name: "udayanga",
    email: "2001kavidusandeepa@gmail.com",
    phone: "0784657729",
    address: "kurunda",
    city: "city",
    country: "Lanka",
    hash: hash,
  };

  useEffect(() => {
    window.payhere.onCompleted = function onCompleted(paymentId) {
      console.log("Payment completed. Payment Id:" + paymentId);
    };

    window.payhere.onDismissed = function onDismissed() {
      console.log("Payment dismissed");
    };

    window.payhere.onError = function onError(error) {
      console.log("Error:" + error);
    };
  }, []);

  const paymentDone = () => {
    console.log("paymentDone");
    window.payhere.startPayment(paymentData);
  };

  const payment = async () => {
    console.log("payment");
    paymentDone();
  };

  return (
    <>
   
     <div  className="flex max-w-[900px] items-center justify-center w-full sm:w-[1200px] mx-auto mt-10 space-x-4 ">
      {/*two divs rowwise*/}
     <div className='h-[430px] w-full flex sm:flex-row flex-col gap-3 justify-between'>
      {/*summary*/}
      <div className='w-full rounded-md shadow-md sm:w-1/2'>
      {/*summary*/}
      <div >
        <h3 className='p-4 font-semibold'>Summary</h3>
       
      </div>
      {/*product list*/}
      <div className='p-4 h-[300px] overflow-y-auto hide-scrollbar'>
      <PaymentSummaryProduct></PaymentSummaryProduct>
      <PaymentSummaryProduct></PaymentSummaryProduct>
      <PaymentSummaryProduct></PaymentSummaryProduct>
     
      </div>
     
      </div>
      {/*carddetails*/}
      <div className='w-full rounded-md shadow-md sm:w-1/2'>
      {/*payment details*/}
      <div >
        <h3 className='p-4 font-semibold'>Payment Details</h3>
       
      </div>
      {/*product list*/}
      <div className='p-4 '>
        <div className='p-4 bg-gray-200 rounded-md'>
        <span className='text-gray-400'>Address</span><br></br>
        <span className='text-sm '>187/1 Galle Road,Katubedda</span><br></br>
        <div className='mt-2'>
        <span className='text-gray-400'>Shipment method</span><br></br>
        <span className='text-'>Free</span>
        </div>
        {/*total*/}
        <div className='mt-4'>
          {/*subtotal*/}
          <div className='flex justify-between'>
            <div>
              <span className='text-sm'>SubTotal</span>
            </div>
            <div>
              <span className='text-sm'>$2347</span>
            </div>
          </div>
           {/*tax*/}
           <div className='flex justify-between mt-2'>
            <div>
              <span className='text-sm text-gray-400'>Estimated tax</span>
            </div>
            <div>
              <span className='text-sm text-gray-400'>$50</span>
            </div>
          </div>
           {/*final totall*/}
           <div className='flex justify-between mt-8'>
            <div>
              <span className='text-sm'>Total</span>
            </div>
            <div>
              <span className='text-sm'>$2397</span>
            </div>
          </div>
        </div>
          
        </div>
        {/*back and paynow buttons*/}
        <div>
        <div className='flex justify-end gap-6 mt-4'>
        <Button className='px-10 py-6 text-lg text-black bg-white border border-black hover:bg-white hover:text-black' onClick={()=>{setActiveComponent(activeComponent-1)}}>Back</Button>
        <Button className='px-10 py-6 text-lg text-white bg-green-500 border-b-2 hover:bg-green-500 hover:text-white' onClick={()=>{onOpenChange(false);payment()}}>PayNow</Button>

      </div>
        </div>
       
     
      </div>
      
      </div>
     </div>
     
    </div></>
   
  )
}

export default PaymentCard;