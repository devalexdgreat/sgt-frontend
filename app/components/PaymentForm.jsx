export default function PaymentForm() {
    return (
        <div className="w-full bg-white text-black rounded-md">
            <div className="w-11/12 md:w-7/12 mx-auto flex flex-col gap-3 text-sm py-4">
                <h1 className="font-normal text-xl mb-4">Registration Fee: <span className="font-bold">25,000 NGN</span></h1>
                <button className="w-full bg-green-500 py-2 px-4 text-white rounded-md">Pay 25,000 NGN</button>
            </div>
        </div>
    );
}