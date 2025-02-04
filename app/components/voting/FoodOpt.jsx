'use client'
import { useState } from "react";
import Image from "next/image";
import PayQueryForm from "./PayQueryForm";
import VotePay from "./VotePay";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function FoodOpt({ id, streetFoods }) {
    const [isModal, setIsModal] = useState(false);
    const [isBuy, setIsBuy] = useState(null);
    const [increments, setIncrements] = useState({});
    const [page, setPage] = useState(0);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        voteEl: null,
        votedId: id,
        qty: '',
    });

    const incre = (foodId) => {
        setIncrements((prevIncrements) => ({
            ...prevIncrements,
            [foodId]: (prevIncrements[foodId] || 1) + 1,
        }));
        
    };

    const decre = (foodId) => {
        setIncrements((prevIncrements) => ({
            ...prevIncrements,
            [foodId]: prevIncrements[foodId] > 1 ? prevIncrements[foodId] - 1 : 1,
        }));
    };

    const toggleModal = (id) => {
        const selectedFood = streetFoods.find((food) => food._id === id);
        const qty = increments[id] || 1;
        setUserData({ ...userData, voteEl: selectedFood, qty: qty });
        setIsModal((prevModal) => !prevModal);
    };

    const closeModal = () => {
        setIsModal((prevModal) => !prevModal);
    };

    const PageDisplay = () => {
        if (page === 0) {
            return (
                <PayQueryForm
                    setUserData={setUserData}
                    userData={userData}
                    handleNext={handleNext}
                    handlePrev={closeModal}
                />
            );
        } else if (page === 1) {
            return <VotePay handlePrev={handlePrev} userData={userData} />;
        }
    };

    const handleNext = () => {
        if (!userData.name) {
            userData.name = 'nil';
        }

        // Email validation regex pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!userData.name || !userData.email) {
            alert('All fields are necessary!');
            return;
        }

        if (!emailRegex.test(userData.email)) {
            alert('Please enter a valid email address!');
            return;
        }

        setPage((currPage) => currPage + 1);
    };

    const handlePrev = () => {
        setPage((currPage) => currPage - 1);
    };

    const toggleBuy = (foodId) => {
        setIsBuy((prevBuy) => (prevBuy === foodId ? null : foodId));
    };

    return (
        <div className="flex flex-col gap-2 mt-6 h-[430px] md:h-[520px] lg:h-[350px] overflow-y-scroll pb-16 mb-12 scrollbar-hide">
            {streetFoods.map((food) => (
                <div
                    key={food._id}
                    className="flex justify-between items-center rounded-md bg-white/5 ps-2 pe-3 py-2"
                    id={food._id}
                >
                    <div className="flex items-center gap-3">
                        <div className="w-16 h-12 md:w-24 md:h-16 rounded-md">
                            <Image
                                src={food.imageUrl}
                                alt=""
                                height={1000}
                                width={1000}
                                className="h-full w-full object-cover rounded-sm"
                            />
                        </div>
                        <span>{capitalizeFirstLetter(food.name)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-green-500 font-bold text-sm flex flex-col items-center">
                            <span>
                                ₦{(food.price) * (increments[food._id] || 1)}
                            </span>
                            <span className="text-gray-100 font-medium text-sm">
                                +{(food.votePower) * (increments[food._id] || 1)} Votes
                            </span>
                        </span>
                        <div className="flex items-center">
                            {isBuy === food._id ? (
                                <div className="flex items-center gap-2">
                                    <div className="font-bold flex items-center gap-1">
                                        <div className='flex flex-col-reverse md:flex-row gap-1'>
                                            <button
                                                onClick={() => decre(food._id)}
                                                className="bg-green-500 text-white py-1 px-3 rounded-md"
                                            >
                                                -
                                            </button>
                                            <span className="px-2 hidden md:flex items-center justify-center text-center">
                                                <span>{increments[food._id] || 1}</span>
                                            </span>
                                            <button
                                                onClick={() => incre(food._id)}
                                                className="bg-green-500 text-white py-1 px-3 rounded-md"
                                            >
                                                +
                                            </button>   
                                        </div>
                                        <span className="px-2 md:hidden">
                                            {increments[food._id] || 1}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => toggleModal(food._id)}
                                        className="bg-green-500 text-white py-1 px-2 rounded-md"
                                    >
                                        Ok
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => toggleBuy(food._id)}
                                    className="bg-green-500 text-white rounded-md px-4 py-1"
                                >
                                    Buy
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            {isModal && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black/10 backdrop-blur-sm flex justify-center items-center">
                    {PageDisplay()}
                </div>
            )}
        </div>
    );
}
