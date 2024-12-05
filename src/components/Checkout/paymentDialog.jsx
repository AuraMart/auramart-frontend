"use client";
import React, { useState } from 'react';
import StepIndicator from './StepIndicator';
import PaymentAddress from './paymentAddress';
import PaymentShipping from './paymentShipping';
import PaymentCard from './paymentCard';
import { Button } from '@shadcn/ui';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"




export function PaymentDialog({ isOpen, onOpenChange }) {
    
    const [activeComponent, setActiveComponent] = useState(1);
  return (
    <Dialog open={isOpen}  onOpenChange={onOpenChange}>
        
      {/* <DialogTrigger asChild>
      <button className="bg-black text-white rounded-md py-2 w-full mt-4 lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] font-bold">
              Check Out
            </button>
      </DialogTrigger> */}
      <DialogContent className="max-w-[1200px] ">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div>
      {/* Step Indicator */}
      <StepIndicator activeStep={activeComponent} />
      {/*conditaional rendering*/}
      {/* Conditional Rendering of Components */}
      {activeComponent === 1 && <PaymentAddress activeComponent={activeComponent} setActiveComponent={setActiveComponent}/>}
      {activeComponent === 2 && <PaymentShipping activeComponent={activeComponent} setActiveComponent={setActiveComponent}/>}
      {activeComponent === 3 && <PaymentCard  onOpenChange={onOpenChange}  activeComponent={activeComponent} setActiveComponent={setActiveComponent}/>}

    </div>
        <DialogFooter>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

