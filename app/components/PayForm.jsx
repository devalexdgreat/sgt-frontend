import PaymentForm from "./PaymentForm";
import { GoArrowLeft } from "react-icons/go";

export default function PayForm({ handlePrev, session, userData }) {
    return (
        <div className="absolute top-10 md:hidden w-full bg-transparent flex flex-col">
            <div className="pb-4 pt-2">
                <button onClick={handlePrev}><GoArrowLeft className="h-6 w-6" /></button>
            </div>
            <PaymentForm session={session} userData={userData} />
        </div>
    );
}