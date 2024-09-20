'use client' // Error boundaries must be Client Components
 
export default function GlobalError({ error, reset }) {
  return (
    // global-error must include html and body tags
    <html>
      <body className="bg-black text-white flex justify-center items-center text-center">
        <h2 className="text-lg font-medium">Something went wrong!</h2>
        <button onClick={() => reset()} className="bg-green-500 text-white rounded-md py-2 px-4 text-sm">Refresh</button>
      </body>
    </html>
  )
}