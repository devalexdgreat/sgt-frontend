import { FaInstagram, FaRegUser, FaTiktok } from "react-icons/fa6";
import { MdOutlineMail, MdOutlinePhoneEnabled } from "react-icons/md";

export default function SignupForm() {
    return (
        <div className="w-full bg-white text-black rounded-md">
            <form>
                <div className="w-full text-center py-5">
                    <h1 className="font-bold">Sign-up</h1>
                </div>
                <div className="w-11/12 md:w-7/12 mx-auto flex flex-col gap-3 text-sm">
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Name</label>
                        <div className="border border-black flex justify-between items-center px-1">
                            <input type="text" placeholder="input name" className="py-2 md:py-0.5 w-11/12 outline-none ps-1" />
                            <FaRegUser />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Phone Number</label>
                        <div className="border border-black flex justify-between items-center px-1">
                            <input type="number" placeholder="input phone number" className="py-2 md:py-0.5 w-11/12 outline-none ps-1" />
                            <MdOutlinePhoneEnabled />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Instagram</label>
                        <div className="border border-black flex justify-between items-center px-1">
                            <input type="text" placeholder="input instagram username" className="py-2 md:py-0.5 w-11/12 outline-none ps-1" />
                            <FaInstagram />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Tiktok</label>
                        <div className="border border-black flex justify-between items-center px-1">
                            <input type="text" placeholder="input titok username" className="py-2 md:py-0.5 w-11/12 outline-none ps-1" />
                            <FaTiktok />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Email Address</label>
                        <div className="border border-black flex justify-between items-center px-1">
                            <input type="text" placeholder="input email address" className="py-2 md:py-0.5 w-11/12 outline-none ps-1" />
                            <MdOutlineMail />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Performance Type</label>
                        <div className="border border-black flex justify-between items-center px-1">
                            <input type="text" placeholder="e.g dance, sing..." className="py-2 md:py-0.5 w-full outline-none ps-1" />
                        </div>
                    </div>
                    <div className="mb-5 mt-3">
                        <button type="submit" className="bg-[#52CF50] text-white w-full py-2 px-6 rounded-md">Continue</button>
                    </div>
                </div>
            </form>
        </div>
    );
}