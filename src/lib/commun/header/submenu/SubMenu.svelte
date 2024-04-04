<script>
    import LinkList from './LinkList.svelte'
    import { page }from "$app/stores"
    import { HomeIcon, SearchIcon, AtSignIcon, PackageIcon, BookmarkIcon} from 'svelte-feather-icons'
    /** @type {string} */ 
    export let route
  
    /** @type {any[]} */
    
    const megaMenuLink = [
        {
        name: "Search",
        component: SearchIcon,
        route: "/dashboard/search",
        hasSubmenu: false,
      },
      {
        name: "Inicio",
        component: HomeIcon,
        route: "/dashboard/search",
        hasSubmenu: false,
      },
      {
        name: 'Torneos',
        route: '/dashboard/torneos',
        component: BookmarkIcon,
        hasSubmenu: true,
        subMenuItems: [
          {
            name: "Access E-services",
            route: "/access",
          },
          {
            name: "Register",
            route: "/register"
          }
        ]
      },
      {
        name: "FMT",
        component: BookmarkIcon,
        route: "/dashboard/catalogos",
        hasSubmenu: false,
      }
    ];
     
    console.log(route);
// FALLA EL HOVER  ////////////////////////////////////////////////////////////////
  </script>
  
  <ul>
    {#each megaMenuLink as link}
      <li>
        <a href={link.route} class:active={$page.url.pathname == link} class="nav-link" aria-current="page" >
            <svelte:component this={link.component} size="28" />
            <span>{link.name}</span> 
        </a>
        {#if link.hasSubmenu} 
        <ul >
          {#each link.subMenuItems as subLink}
            <li> <a href={subLink.route}>{subLink.name}</a> </li>
          {/each}
        </ul>
      {/if}
    </li>
     
    {/each}
  </ul>

  <!-- <LinkList items={megaMenuLink} /> -->

