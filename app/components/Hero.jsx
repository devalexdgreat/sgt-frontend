import Image from 'next/image';
import Link from 'next/link';
import SignupForm from './SignupForm';

export default function Hero() {
    return (
        <div className="w-full bg-black text-white h-screen flex justify-center items-center pt-16">
            <div className="w-11/12 mx-auto bg-black flex md:justify-between h-5/6 justify-center items-center">
                <div className='flex flex-col items-center text-center md:text-left md:items-start'>
                    <Image src='/heroimg.png' className='w-full' alt='' height={100} width={100} />
                    <p className='py-8 text-md'>Show case your talent and stand a chance to win big.
                    <br className='hidden md:block'/> Will you be the next street champion?</p>
                    <div>
                        <Link href={'/register'} className='py-2 px-6 border border-[#52CF50]'>Register Now</Link>
                    </div>
                </div>
                <div className='hidden md:block w-6/12'>
                    <SignupForm />
                </div>
            </div>
        </div>
    );
}