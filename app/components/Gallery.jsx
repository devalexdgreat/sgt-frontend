import Image from "next/image";
import imageOne from '@/public/f53.png';
import imageTwo from '@/public/f54.png';
import imageThr from '@/public/f55.png';
import imageFor from '@/public/f56.png';
import imageFiv from '@/public/f57.png';
import imageSix from '@/public/f58.png';
import imageSev from '@/public/f59.png';
import imageEig from '@/public/f60.png';
import imageNin from '@/public/f62.png';
import imageTen from '@/public/f63.png';
import imageEle from '@/public/f64.png';

export default function Gallery() {
    return (
        <div className="w-full">
            <div className="w-11/12 mx-auto">
                <div className="text-center md:text-left">
                    <h1 className="font-bold text-xl">Our Gallery</h1>
                </div>
                <div className="columns-1 md:columns-4 gap-2 [&>div:not(:first-child)]:mt-2 mt-4 mb-12">
                    <div className=''>
                        <Image src={imageOne} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                        <Image src={imageTwo} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                        <Image src={imageThr} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                        <Image src={imageFor} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                        <Image src={imageFiv} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                        <Image src={imageSix} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                        <Image src={imageSev} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                        <Image src={imageEig} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                        <Image src={imageNin} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                        <Image src={imageTen} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                        <Image src={imageEle} alt='' className='w-full h-full' />
                    </div>
                </div>
            </div>
        </div>
    );
}