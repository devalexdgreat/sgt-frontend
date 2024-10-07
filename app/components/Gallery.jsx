import Image from "next/image";
import imageSevt from '@/public/img17.jpg';

export default function Gallery() {
    return (
        <div className="w-full" id="gallery">
            <div className="w-11/12 mx-auto">
                <div className="text-center md:text-left">
                    <h1 className="font-bold text-xl">Our Gallery</h1>
                </div>
                <div className="columns-1 md:columns-4 lg:columns-4 gap-2 [&>div:not(:first-child)]:mt-2 mt-4 mb-12">
                    <div className=''>
                        <Image src={imageSevt} alt='' className='w-full h-full' />
                    </div>
                </div>
            </div>
        </div>
    );
}