import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionTittle from "../../Shared/SectionTittle";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    let { paymentId } = useParams();
    const [currentClass, setClass] = useState({});
    useEffect(() => {
        fetch(`https://fighting-spirit-server.vercel.app/singleSelectedClass/${paymentId}`)
        .then(res=>res.json())
        .then(data=>setClass(data))
    }, [])
    // const total = cart.reduce((sum, item) => sum + item.price, 0);
    // const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTittle subHeading="please process" heading="Payment"></SectionTittle>
            {/* <h2 className="text-3xl"></h2> */}
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={currentClass} price={currentClass.price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;