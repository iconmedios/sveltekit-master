<script>
    /** @type {any[]} */
    export let items;
  </script>
  
  <ul>
    {#each items as link}
      <li>{link.name}</li>
      {#if link.hasSubmenu}
        <svelte:self items={link.subMenuItems} />
      {/if}
    {/each}
  </ul>
