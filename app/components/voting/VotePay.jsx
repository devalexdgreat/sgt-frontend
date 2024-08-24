'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const addCommasToNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function VotePay({ userData, handlePrev }) {

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    
    const handlePayment = async (callback_url) => {
        const userDataString = JSON.stringify(userData);
        localStorage.setItem('userData', userDataString);
        setIsLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/payments/generate_link
`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: userData.email, amount: userData.voteEl.price, name: userData.name, callback_url, payment_for: 'voting' }),
            });

            if(response.ok) {
                setIsLoading(false);
                const data = await response.json();
                const authUrl = data.authorization_url;
                // const successMsg = data.message;
                router.push(authUrl);
            }

        } catch (error) {
            console.log('error during payment', error);
        }
    }

    return (
        <div className="w-11/12 md:w-3/12 bg-white text-black rounded-md flex text-center mb-12 relative">
            <button onClick={handlePrev} className="absolute top-2 right-2 rounded-sm bg-red-500 text-white"><IoClose /></button>
            <div className="w-11/12 mx-auto flex flex-col gap-3 text-sm py-12">
                {userData !== null && (
                    <h1 className="font-normal text-xl mb-4">Registration Fee: <span className="font-bold">{addCommasToNumber(userData.voteEl.price)} NGN</span></h1>
                )}
                
                <button onClick={(e) => handlePayment(`${process.env.NEXT_PUBLIC_VREDIR_URL}`)} className="w-full bg-green-500 py-3 px-4 text-white rounded-md">
                    {isLoading ? (
                        <span>Processing...</span>
                    ):(
                        <span>Pay {addCommasToNumber(userData.voteEl.price)} NGN</span>
                    )}
                </button>
            </div>
        </div>
    );
}