import React from 'react'

function PaymentSummaryProduct() {
  return (
    <div className='flex items-center justify-between h-20 px-4 bg-gray-100 rounded-md'>
        {/*img and desc*/}
        <div className='flex items-center'>
            <div className='mr-2'>
            <img src='/assets/image/Product Image.svg' width={35} height={35}></img>
            </div>
            <div>
                <span className='font-sm'>Apple iphone 14 Pro Max 128GB</span>
            </div>    
        </div>
        {/*price*/}
        <div>
            <span className='font-semibold'>$1399</span>
        </div>



    </div>
  )
}

export default PaymentSummaryProduct