<script>
      import { isLoggedIn, user } from '$lib/stores.js' 
</script>

<h1>Profile</h1>

{#if $isLoggedIn}
    <img src={$user.photoURL}  alt="{$user.displayName}">
    <h1>{$user.displayName}</h1>
    <span>EMAIL: </span> <span>{$user.email} </span>
{/if} 

