'use client';
import Image from "next/image";
import paymentIcon from '@/public/process.png'
import successIcon from '@/public/verified.png'
import { useEffect, useState } from "react";

export default function ConfirmPayment({ params }) {
    const [userData, setUserData] = useState(null);
    const [isDone, setIsDone] = useState(false);
    const [msg, setMsg] = useState('');
    const { id } = params;

    const url = window.location.href;
    const reference = url.split('&transaction_id=')[1];

    useEffect(() => {
        const fetchData = async () => {
            const userDataString = localStorage.getItem('userData');
            if (userDataString) {
                try {
                    const data = JSON.parse(userDataString);
                    setUserData(data);
                } catch (error) {
                    console.error('Error parsing user data:', error);
                }
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const verifyPayment = async () => {
            if (!userData || !reference) return; // Exit if userData or reference is not available
            localStorage.removeItem('userData');
            // Convert Base64 string back to a Blob
            const byteString = atob(userData.img.split(',')[1]);
            const mimeString = userData.img.split(',')[0].split(':')[1].split(';')[0];

            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            const blob = new Blob([ab], { type: mimeString });
            const url = URL.createObjectURL(blob);

            const formData = new FormData();
            formData.append('name', userData.name);
            formData.append('phone', userData.phoneNo);
            formData.append('instagram', userData.instagram);
            formData.append('tiktok', userData.tiktok);
            formData.append('email', userData.email);
            formData.append('performance_type', userData.perf);
            formData.append('profile', blob);

            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/payments/verify`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ reference }),
                });

                if (response.ok) {
                    const data = await response.json();
                    const paymentFor = data.payment.paymentFor;
                    if (paymentFor === 'registration') {
                        try {
                            const registerResponse = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/contestants/register`, {
                                method: 'POST',
                                body: formData,
                            });
                            if (registerResponse.ok) {
                                const registerData = await registerResponse.json();
                                const successMsg = registerData.message;
                                setIsDone(true);
                                setMsg(successMsg);
                            }
                        } catch (error) {
                            console.error('Error during registration:', error);
                        }
                    }
                }
            } catch (error) {
                console.log('Error during verification', error);
            }
        };

        verifyPayment();
    }, [userData, reference]);

    return (
        <div className="w-full overflow-hidden hero-bg h-screen flex justify-center items-center">
            {isDone ? (
                <div className="bg-white/60 backdrop-blur-sm rounded-md h-3/6 w-11/12 md:w-6/12 flex justify-center items-center flex-col">
                    <h1 className="mb-2 text-black font-bold text-xl">Payment Successful</h1>
                    <Image src={successIcon} className="w-44" height={100} width={100} alt="Payment Icon" />
                    <p className="text-sm">{msg}</p>
                </div>
            ):(
                <div className="bg-white/60 backdrop-blur-sm rounded-md h-3/6 w-11/12 md:w-6/12 flex justify-center items-center flex-col">
                    <div className="rounded-md absolute">
                        <div className="spinner">
                            {[...Array(10)].map((_, index) => (
                                <div key={index}></div>
                            ))}
                        </div>
                    </div>
                    <h1 className="mb-2 text-black font-bold text-xl">Processing Payment...</h1>
                    <Image src={paymentIcon} className="w-44" height={100} width={100} alt="Payment Icon" />
                    <p>Please wait while we are processing payment.</p>
                </div>
            )}
        </div>
    );
}