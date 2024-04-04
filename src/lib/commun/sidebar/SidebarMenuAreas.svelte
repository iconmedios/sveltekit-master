<script>
    import IconLink from "./IconLink.svelte";
    import { HomeIcon, SearchIcon, AtSignIcon, PackageIcon, BookmarkIcon} from 'svelte-feather-icons'
    const subTorneos = [
        {subName:"Crear Torneo", sublink:"#/" },
        {subName:"Ver torneos", sublink:"#/" },
        {subName:"Torneos activos", sublink:"#/" },
    ]
    const subInfo = [
        {subName:"Asociaciones", sublink:"#/" },
        {subName:"Clubes", sublink:"#/" },
        {subName:"Usuarios", sublink:"#/" },
    
    ]
    const enlaces = [
		{ name: 'Buscar', url:"/dashboard/search", component: SearchIcon, hasSubmenu:false,  subMenus:[]},
		{ name: 'Home', url:"/dashboard", component: HomeIcon, hasSubmenu:false, subMenus:[] },
		{ name: 'Tareas', url:"/dashboard/tareas", component: HomeIcon, hasSubmenu:false, subMenus:[] },
		{ name: 'Clientes', url:"/dashboard/clientes", component: BookmarkIcon, hasSubmenu:true,  subMenus:subTorneos  },
		{ name: 'FMT', url:"/dashboard/catalogos", component: PackageIcon, hasSubmenu:true, submenus:subInfo   },
	];
</script>

<ul class="nav-side-bar">    
    {#each enlaces as { name, url, component, hasSubmenu, subMenus }}
        <li>
            <IconLink route={url} >
                <svelte:component this={component} /> <span>{name}</span>     
            </IconLink>
        </li>
    {/each}
</ul>

