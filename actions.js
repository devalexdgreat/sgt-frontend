'use server'
import { cookies } from 'next/headers'

export async function setCookies(data) {
    const currentDate = new Date();

    // Calculate the date for tomorrow
    const tomorrow = new Date(currentDate);
    cookies().set('userData', data, { maxAge: tomorrow.toUTCString() });
}

export async function delCookies() {
    cookies().delete('userData');
}

export async function getCookies() {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('userData')
    return accessToken;
}