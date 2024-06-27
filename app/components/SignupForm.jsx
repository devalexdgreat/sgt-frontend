'use client';
import { useRef, useState } from "react";
import { FaInstagram, FaRegUser, FaTiktok } from "react-icons/fa6";
import { MdOutlineMail, MdOutlinePhoneEnabled } from "react-icons/md";

export default function SignupForm({ handleNext }) {

    const hiddenFileInput = useRef(null);
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState(null);

    const handleClick = (e) => {
        e.preventDefault();
        hiddenFileInput.current?.click();
    };
    
    const handleChange = (e) => {
        const fileUploaded = e.target.files?.[0];
        if (fileUploaded) {
            const img = URL.createObjectURL(fileUploaded);
            setImage(fileUploaded);
            const fileName = fileUploaded.name;
            setFileName(fileName);
        }
    };

    return (
        <div className="w-full bg-white text-black rounded-md">
            <form>
                <div className="w-full text-center py-5">
                    <h1 className="font-bold">Sign-up</h1>
                </div>
                <div className="w-11/12 md:w-11/12 mx-auto flex flex-col gap-3 text-sm">
                    <div className="flex flex-col md:flex-row gap-5 w-full">
                        <div className="flex flex-col gap-2 w-full md:w-6/12">
                            <label className="font-semibold">Name</label>
                            <div className="border border-black flex justify-between items-center px-1">
                                <input type="text" placeholder="input name" className="py-2 md:py-0.5 w-full outline-none ps-1" />
                                <FaRegUser />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-6/12">
                            <label className="font-semibold">Phone Number</label>
                            <div className="border border-black flex justify-between items-center px-1">
                                <input type="number" placeholder="input phone number" className="py-2 md:py-0.5 w-full outline-none ps-1" />
                                <MdOutlinePhoneEnabled />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 w-full">
                        <div className="flex flex-col gap-2 w-full md:w-6/12">
                            <label className="font-semibold">Instagram</label>
                            <div className="border border-black flex justify-between items-center px-1">
                                <input type="text" placeholder="input name" className="py-2 md:py-0.5 w-full outline-none ps-1" />
                                <FaInstagram />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-6/12">
                            <label className="font-semibold">Tiktok</label>
                            <div className="border border-black flex justify-between items-center px-1">
                                <input type="number" placeholder="input phone number" className="py-2 md:py-0.5 w-full outline-none ps-1" />
                                <FaTiktok />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 w-full">
                        <div className="flex flex-col gap-2 w-full md:w-6/12">
                            <label className="font-semibold">Email Address</label>
                            <div className="border border-black flex justify-between items-center px-1">
                                <input type="email" placeholder="input name" className="py-2 md:py-0.5 w-full outline-none ps-1" />
                                <MdOutlineMail />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-6/12">
                            <label className="font-semibold">Performance Type</label>
                            <div className="border border-black flex justify-between items-center px-1">
                                <input type="text" placeholder="e.g dance, sing..." className="py-2 md:py-0.5 w-full outline-none ps-1" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <input ref={hiddenFileInput} type="file" name="file" onChange={handleChange} className="hidden py-2 md:py-0.5 w-full outline-none ps-1" />
                        <button
                            onClick={handleClick}
                            className="border border-black px-1 py-1 mt-1"
                        >
                            {image ? (
                                <span>{fileName}</span>
                            ) : (
                                <span>Upload Image</span>
                            )}
                        </button>
                    </div>
                    <div className="mb-5 mt-3">
                        <button onClick={handleNext} className="bg-[#52CF50] text-white w-full py-2 px-6 rounded-md">Continue</button>
                    </div>
                </div>
            </form>
        </div>
    );
}