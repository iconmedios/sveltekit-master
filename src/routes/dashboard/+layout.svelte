<script>
// @ts-nocheck
    import { onMount } from 'svelte'
    import { goto } from '$app/navigation';
    import { theme } from '$lib/stores'
    import SideBarElements from "$lib/commun/sidebar/SideBarElements.svelte";
    import ThemeSwitch from "$lib/commun/ThemeSwitch.svelte";
    import { isLoggedIn, user } from '$lib/stores.js' 
      //console.log(JSON.stringify($user) );
    import {signOut, onAuthStateChanged} from 'firebase/auth'
    import {auth} from '$lib/data/firebasefz'

    onMount(() => {
		if (!$isLoggedIn) {
            goto("/auth/login")
        }
	});
 

    const logOut = async()=>{
      

        try {
        signOut(auth)
        $isLoggedIn = false
        $user = {}
            
        } catch (error) {
            console.error(error);
        }
        
    }

    onAuthStateChanged(auth, authUser => {
        //console.log(authUser);
        // @ts-ignore
        $user = authUser// default null
        $isLoggedIn = !!authUser
            
    })
</script>


<svelte:head>
  <meta name="color-scheme" content={$theme == 'system' ? 'light dark' :
  $theme}/> <link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>


<main class="active">
    <aside>
       <SideBarElements />
    </aside>
    <header class="ic">
        <div>
           
            {#if $isLoggedIn}
            <h1>Dasboard Layout</h1>
            <a href="/" on:click={logOut} >Salir</a>
           
            <a href="/dashboard/profile"><img src={ $user.photoURL }  alt="{ $user.displayName }"></a>
            
            {/if} 
        </div>
    </header>
    <section class="content">
        
        {#if $isLoggedIn}
            <h3>Bienvenido! { $user.displayName } </h3> 
            <slot />
        {/if} 
        
    </section>
    <footer>
        <ThemeSwitch />
    </footer>
</main>


<style>
    main{
        
        display: grid;
    
        grid-template-areas: 
        "aside header header"
        "aside section section"
        "aside footer footer" 
        ;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr auto ;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
      
        
        
    }
    /* main.active {
        grid-template-columns: 90px 1fr;

    } */

    header{
        grid-area: header;
        background: var(--br-70) ;
        height: 65px;
       
    }
    header div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    aside{
        width: 88px;
        grid-area: aside;
        background: var(--se);
        color: var(--br-10);
        transition: all ease-out .5s;
       
    }
    /* aside.active{
        width: 280px;
    } */
    section{
        grid-area: section;
        background: var(--br-05)  ;
        overflow-y: scroll;
    }
    footer{
        grid-area: footer;
        background: var(--br-40) ;
        height: 40px;
        display: flex;
        
	    
   
    }

    /* @media (max-width: 1024px) {
        aside{
            position: absolute;
            left: -250px;
            height: 100vh;
        }
        } */
    
</style>