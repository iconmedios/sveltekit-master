<script>
  import IconLink from "../header/IconLink.svelte";
  import { HomeIcon, SearchIcon, AtSignIcon, PackageIcon, BookmarkIcon} from 'svelte-feather-icons'


  const subTorneos = [
    {subName:"Crear Torneo", sublink:"#1" },
    {subName:"Ver torneos", sublink:"#1" },
    {subName:"Torneos activos", sublink:"#1" },

  ]
  const subInfo = [
    {subName:"Asociaciones", sublink:"#1" },
    {subName:"Clubes", sublink:"#1" },
    {subName:"Usuarios", sublink:"#1" },
    
  ]


  const options = [
		{ name: 'Buscar', url:"/", component: SearchIcon},
		{ name: 'Home', url:"/", component: HomeIcon },
		{ name: 'Torneos', url:"/", component: BookmarkIcon, submenus:subTorneos },
		{ name: 'FMT', url:"/", component: PackageIcon, submenus:subInfo  },

	];

</script>
  <div class="icc">
    <span>TENIS</span>
  </div>

    <ul class="nav-side-bar">    
      {#each options as {name, url, component, submenus} }
          <li>
            <IconLink route={url} >
              <svelte:component this={component} />  {name}              
            </IconLink>
            
            <ul>
              <li>
               {submenus}
              </li>
            </ul>
           
          </li>
      {/each}
    </ul>

      
 

<!-- Estilos en Global Css -->
<style>
  div{
    height: 60px;
    display: flex;
    text-align: center;
  }


</style>