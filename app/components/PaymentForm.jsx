'use client';

import { setCookies } from "@/actions";
import { useRouter } from "next/navigation";

export default function PaymentForm({ session, userData }) {
    const router = useRouter();
    console.log(userData);
    const handlePayment = async (callback_url) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/payments/generate_link
`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: userData.email, amount: session.currentSeason.registrationFee, name: userData.name, callback_url, payment_for: 'registration' }),
            });

            if(response.ok) {
                await setCookies(userData);
                const data = await response.json();
                const authUrl = data.authorization_url;
                // const successMsg = data.message;
                router.push(authUrl);
            }

        } catch (error) {
            
        }
    }

    return (
        <div className="w-full bg-white text-black rounded-md flex text-center">
            <div className="w-11/12 md:w-7/12 mx-auto flex flex-col gap-3 text-sm py-6">
                {session !== null && (
                    <h1 className="font-normal text-xl mb-4">Registration Fee: <span className="font-bold">{session.currentSeason.registrationFee} NGN</span></h1>
                )}
                
                <button onClick={(e) => handlePayment(`${process.env.NEXT_PUBLIC_REDIR_URL}`)} className="w-full bg-green-500 py-2 px-4 text-white rounded-md">Pay {session.currentSeason.registrationFee} NGN</button>
            </div>
        </div>
    );
}