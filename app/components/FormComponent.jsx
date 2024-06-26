'use client'
import SignupForm from "./SignupForm";

export default function FormComponent() {

    const [openModal, setOpenmodal] = usestate(false);

    const toggleModal = () => {
        setOpenmodal(prevOpenModal => !prevOpenModal);
    };

    return (
        <div className="w-full bg-transparent flex justify-center items-center h-screen">
            <SignupForm />
        </div>
    );
}