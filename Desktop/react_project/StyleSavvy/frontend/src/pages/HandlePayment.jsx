 
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../api/apiservices";
import Header from "../component/Header"
// Load Stripe with your publishable key
const stripePromise = loadStripe("pk_test_51QtUH7ITbzACmJQ84vwNDHBKGRz2zaL9QEZ18Cb05jBm6ImOJkLEaFC9qs3IwKP5BT6XkxH6ePCAbfgFiFFI3wF7000tQqF2dx");

function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [amount, setAmount] = useState(0);
    const [userId, setUserId] = useState("");

    useEffect(() => {
        // Fetch user ID from localStorage
        const storedUser = localStorage.getItem("userId");
        if (storedUser) setUserId(storedUser);

        // Fetch amount from cart context
        const storedAmount = localStorage.getItem("totalPrice");
        if (storedAmount) setAmount(parseFloat(storedAmount));
    }, []);

    const handlePayment = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (error) {
            console.error(error);
            
        } else {
            console.log("Payment Success:", paymentMethod);

            try {
                // Send Payment Data to Backend using Axios
                const { data } = await api.post("/pay", {
                    userId,
                    amount,
                    paymentMethodId: paymentMethod.id,
                });

                if (data.success) {
                    
                    navigate("/ordersuccessfully");  
                } else {
                     console.log(error)
                }
            } catch (err) {
                console.error("Error processing payment:", err);
                
            }
        }
    };

    return (
        <>
        <Header/>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-4">
            <form onSubmit={handlePayment} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">Enter Card Details</h2>
                <div className="border p-4 rounded-md mb-6 bg-gray-50 shadow-sm">
                    <CardElement className="p-3 border rounded-md" />
                </div>
                <p className="text-lg font-semibold text-center mb-4">Total Amount: ₹{amount}</p>
                <button 
                    type="submit" 
                    disabled={!stripe} 
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300 disabled:bg-gray-400">
                    Pay Now
                </button>
            </form>
        </div>
        </>
    );
}

export default function HandlePayment() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}
