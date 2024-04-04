import { writable } from "svelte/store";

export const user = writable({})
export const isLoggedIn = writable(false)

const theme = writable('system')
export { theme }