// export default async function useFetch(arg) {
//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/${arg}`, {
//             cache: "no-store",
//         });
        
//         if (!response.ok) {
//             throw new Error("Failed to fetch");
//         }
  
//         const data = await response.json();
    
//         // Check if the data is valid
//         if (!data || typeof data !== 'object') {
//           throw new Error('Invalid data received');
//         }
    
//         return data;
  
//     } catch (error) {
//         console.error('Fetch error:', error.message);
//         // Return a fallback value or handle the error as necessary
//         return null; // or { error: error.message } or a default data object
//     }
// };

export default async function useFetch(arg) {
    const timeout = 5000; // 5 seconds timeout for the fetch request

    const fetchWithTimeout = new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error('Request timed out'));
        }, timeout);

        fetch(`${process.env.NEXT_PUBLIC_BASEURL}/${arg}`, {
            cache: "no-store",
        })
        .then((response) => {
            clearTimeout(timer);
            if (!response.ok) {
                reject(new Error("Failed to fetch"));
            }
            return response.json();
        })
        .then((data) => {
            if (!data || typeof data !== 'object') {
                reject(new Error('Invalid data received'));
            }
            resolve(data);
        })
        .catch((error) => {
            clearTimeout(timer);
            reject(error);
        });
    });

    try {
        return await fetchWithTimeout;
    } catch (error) {
        console.error('Fetch error:', error.message);
        // Return a fallback value or handle the error as necessary
        return null; // or { error: error.message } or a default data object
    }
}