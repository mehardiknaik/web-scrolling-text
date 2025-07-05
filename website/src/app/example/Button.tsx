import React from "react";
import ScrollingText from "web-scrolling-text/react";
import { RiMastercardFill, RiPaypalFill } from "react-icons/ri";
import { FaCcApplePay, FaCcVisa, FaMobileRetro } from "react-icons/fa6";
import { FaQrcode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useConfig } from "./Context";

const Button = () => {
  const {options} = useConfig();
  return (
    <div>
      <h1>Example 2 (Button)</h1>
      <button className="cursor-pointer mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex gap-1.5">
        Pay With
        <ScrollingText options={options}>
          <div className="flex gap-1 items-center">
            <FaCcVisa />
            Visa
          </div>
          <div className="flex gap-1 items-center">
            <RiMastercardFill />
            Master Card
          </div>
          <div className="flex gap-1 items-center">
            <RiPaypalFill />
            PayPal
          </div>
          <div className="flex gap-1 items-center">
            <FaCcApplePay />
            Apple Pay
          </div>
        </ScrollingText>
      </button>
      <button className="mt-4 cursor-pointer px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full">
        <ScrollingText options={options}>
          <div className="flex gap-1 items-center">
            Login With
            <FaQrcode />
            Qr Code
          </div>
          <div className="flex gap-1 items-center">
            Login With
            <FaMobileRetro />
            Mobile Number
          </div>
          <div className="flex gap-1 items-center">
            Login With
            <MdEmail />
            Email
          </div>
        </ScrollingText>
      </button>
    </div>
  );
};

export default Button;
