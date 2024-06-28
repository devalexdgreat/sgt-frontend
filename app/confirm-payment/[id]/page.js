import Image from "next/image";
import paymentIcon from '@/public/process.png'
import { getCookies } from "@/actions";

const getReferenceFromUrl = (url) => {
    const params = new URLSearchParams(url.split('?')[1]);
    return params.get('reference');
};

export default async function ConfirmPayment({ params }) {
    const { id } = params;
    const userData = await getCookies();

    const formData = new FormData();
        formData.append('name',userData.name)
        formData.append('phone',userData.phoneNo)
        formData.append('instagram',userData.instagram)
        formData.append('tiktok',userData.tiktok)
        formData.append('email',userData.email)
        formData.append('perfomance_type',userData.perf)
        formData.append('profile', userData.img);

    console.log(userData);
    const reference = getReferenceFromUrl(id);
    console.log('I am the reference',id);

    if(reference) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/payments/verify
            `, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({reference: reference }),
                });
            if(response.ok) {
                const data = await response.json();
                const paymentFor = data.paymentFor;
                if(paymentFor === 'registration') {
                    try {
                        const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/payments/verify
                        `, {
                                method: 'POST',
                                body: formData,
                            });
                        if(response.ok) {
                            const data = await res.json();
                            const successMsg = data.message;
                            console.log(successMsg);
                            console.log(data);
                        }
                    } catch (error) {
                        console.error('Error during registration:', error);
                    }
                }
            }
        } catch (error) {
            console.log('error during Verification', error);
        }
    }

    return (
        <div className="w-full overflow-hidden hero-bg h-screen flex justify-center items-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-md h-3/6 w-11/12 md:w-6/12 flex justify-center items-center flex-col">
                <div className="bg-green rounded-md absolute">
                    <div className="spinner">
                        <div></div>   
                        <div></div>    
                        <div></div>    
                        <div></div>    
                        <div></div>    
                        <div></div>    
                        <div></div>    
                        <div></div>    
                        <div></div>    
                        <div></div>    
                    </div>
                </div>
                <h1 className="mb-2 text-black font-bold text-xl">Processing Payment...</h1>
                <Image src={paymentIcon} className="w-44" height={100} width={100} alt="" />
                <p>Please wait while we are processing payment.</p>
            </div>
        </div>
    );
}