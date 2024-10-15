'use server'
import { cookies } from 'next/headers'
import axios from 'axios';

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
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/${arg}`, {
            timeout: 8000,
            header: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            } // 10 seconds timeout for the request
        });
        
        const data = response.data;

        // Check if the data is valid
        if (!data || typeof data !== 'object') {
            throw new Error('Invalid data received');
        }

        return data;

    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            console.error('Fetch error: Request timed out');
        } else {
            console.error('Fetch error:', error.message);
        }
        return null;
    }
}

export async function superAuthFetch(arg, token) {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/${arg}`, {
            timeout: 8000, // 10 seconds timeout for the request
            headers: {
                'Authorization': `Bearer ${token}`,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            },
        });

        const data = response.data;

        // Check if the data is valid
        if (!data || typeof data !== 'object') {
            throw new Error('Invalid data received');
        }

        return data.seasons;

    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            console.error('Fetch error: Request timed out');
        } else {
            console.error('Fetch error:', error.message);
        }
        return null; // or handle the error in a different way, such as returning a default data object
    }
}