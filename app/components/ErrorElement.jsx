'use client'
export default function ErrorElement() {
    return (
        <div className='bg-black text-white h-screen w-full fixed top-0 left-0 flex justify-center items-center flex-col gap-2'>
            <h1>An Error Occured!</h1>
            <button onClick={() => {window.location.reload()}} className='bg-green-500 text-white rounded-md px-6 py-2'>Refresh</button>
        </div>
    );
}