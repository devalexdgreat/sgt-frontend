import Image from "next/image";
import imageOne from '@/public/img1.jpg';
import imageTwo from '@/public/img2.jpg';
import imageThr from '@/public/img3.jpg';
import imageFor from '@/public/img4.jpg';
import imageFiv from '@/public/img5.jpg';
import imageSix from '@/public/img6.jpg';
import imageSev from '@/public/img7.jpg';
import imageEig from '@/public/img8.jpg';
import imageNin from '@/public/img9.jpg';
import imageTen from '@/public/img10.jpg';
import imageEle from '@/public/img11.jpg';
import imageTwe from '@/public/img12.jpg';
import imageThir from '@/public/img13.jpg';
import imageFort from '@/public/img14.jpg';
import imageFift from '@/public/img15.jpg';
import imageSixt from '@/public/img16.jpg';

export default function Gallery() {
    return (
        <div className="w-full" id="gallery">
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
                    <div className=''>
                        <Image src={imageTwe} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                        <Image src={imageThir} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                        <Image src={imageFort} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                        <Image src={imageFift} alt='' className='w-full h-full' />
                    </div>
                    <div className=''>
                        <Image src={imageSixt} alt='' className='w-full h-full' />
                    </div>
                </div>
            </div>
        </div>
    );
}