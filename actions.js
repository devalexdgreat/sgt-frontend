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
// token
export async function setToken(data) {
    const currentDate = new Date();

    // Calculate the date for tomorrow
    const tomorrow = new Date(currentDate);
    cookies().set('accessToken', data, { maxAge: tomorrow.toUTCString() });
}

export async function delToken() {
    cookies().delete('accessToken');
}

export async function getToken() {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken').value;
    return accessToken;
}