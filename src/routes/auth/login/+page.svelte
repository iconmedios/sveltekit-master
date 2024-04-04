<script>
    import {auth} from '$lib/data/firebasefz'
    import {GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
    import { isLoggedIn, user } from '$lib/stores.js' 
    import { goto } from '$app/navigation';
    const login = async ()=>{
        // const provider = new GoogleAuthProvider()
        // await signInWithPopup (auth, provider)
        try {
            const provider = new GoogleAuthProvider()
            const res = await signInWithPopup (auth, provider)
            $user = res.user
            $isLoggedIn = true
            goto("/dashboard")
            } catch (error) {
               console.log(error); 
            }
        }
// https://www.youtube.com/watch?v=B6quDView8Y&t=714s
</script>


<h1>Login</h1>

<button on:click={login} >Login Google</button>


<a href="/">Inicio</a>

