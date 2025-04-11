import { SNAP_USER_INFO } from '@/common/env'

export const getUserLocalStorage = () => {
    return localStorage.getItem(SNAP_USER_INFO)
        ? JSON.parse(localStorage.getItem(SNAP_USER_INFO))
        : null
}

export const setUserLocalStorage = (userId) => {
    localStorage.setItem(SNAP_USER_INFO, JSON.stringify(userId))
}

export const removeUserLocalStorage = () => {
    localStorage.removeItem(SNAP_USER_INFO)
}
