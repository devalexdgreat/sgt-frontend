'use server'
import { cookies } from 'next/headers'

export async function setCookies(data) {
    cookies().set('userData', data);
}

export async function delCookies() {
    cookies().delete('userData');
}

export async function getCookies() {
    const cookieStore = cookies()
    const userData = cookieStore.get('userData')
    return userData;
}

// For Token
export async function setToken(data) {
    // Calculate the time for 24 hours (in seconds)
    const maxAge = 24 * 60 * 60; // 24 hours
    cookies().set('accessToken', data, { maxAge: maxAge });
}

export async function delToken() {
    cookies().delete('accessToken');
}

export async function getToken() {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken').value;
    return accessToken;
}
 
export async function superFetch(arg) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/${arg}`, {
            signal: AbortSignal.timeout(10000),
            cache: "no-store",
        });
        
        if (!response.ok) {
            throw new Error("Failed to fetch");
        }
    
        const data = await response.json();
    
        // Check if the data is valid
        if (!data || typeof data !== 'object') {
            throw new Error('Invalid data received');
        }
    
        return data;
    
    } catch (error) {
        console.error('Fetch error:', error.message);
        return null;
    }
}

export async function superAuthFetch(arg, token) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/${arg}`, {
            method: 'GET',
            signal: AbortSignal.timeout(10000),
            headers: {
                'Authorization': `Bearer ${token}`
            },
            cache: "no-store"
        });
        
        if (!response.ok) {
            throw new Error("Failed to fetch");
        }
  
        const data = await response.json();
    
        // Check if the data is valid
        if (!data || typeof data !== 'object') {
          throw new Error('Invalid data received');
        }
    
        return data.seasons;
  
    } catch (error) {
        console.error('Fetch error:', error.message);
        // Return a fallback value or handle the error as necessary
        return null; // or { error: error.message } or a default data object
    }
};