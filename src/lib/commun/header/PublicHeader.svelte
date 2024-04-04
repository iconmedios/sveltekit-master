<script>
    import {signOut, onAuthStateChanged} from 'firebase/auth'
    import Link from "$lib/commun/header/Link.svelte"
    import { isLoggedIn, user } from '$lib/stores.js' 
    import {auth} from '$lib/data/firebasefz'
    import { goto } from '$app/navigation';

    const logOut = ()=>{
        try {
        signOut(auth)
        $isLoggedIn = false
        $user = {}
        goto("/auth/login")    
        } catch (error) {
            console.error(error);
        }
    }
    onAuthStateChanged(auth, authUser => {
        //console.log(authUser);
        $user = {}
        $isLoggedIn = !!authUser       
    })
</script>

<header>
    <div class="container">
        <a href="/">LOGO1</a>
        <nav>
            <Link route="/">Inicio</Link>
            {#if $isLoggedIn}    
                <Link route="/tareas">Tareas</Link>
                <Link route="/dashboard">Dashboard</Link>
                <a href={'#'} on:click={logOut}>Salir</a>
                {:else}
                <Link route="/auth/login">Login</Link>
                <Link route="/auth/register">Register</Link> 
            {/if}    
        </nav>
    </div>
</header>

<style>
    header{
        /*position: fixed;
        top: 0;
        left: 0;*/
        width: 100vw;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 0;
    }
</style>