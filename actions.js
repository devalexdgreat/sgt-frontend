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