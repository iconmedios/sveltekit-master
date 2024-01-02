<script>
    import { AirplayIcon, AtSignIcon} from 'svelte-feather-icons'
    import Header from "$lib/commun/header/PublicHeader.svelte"
    import Tareas from "$lib/components/tareas/c03_TareasFirebase.svelte"
</script>
<Header />


<div class="h-full-cc">
    <span class="iconcolor"><AirplayIcon size="38"/></span>
    <h1>Creando Tareas</h1>
    
    
    <Tareas />
</div>


<style>
    div{
        width: 800px; 
        margin: 0 auto;
    }
    h1{
        
        gap: 20px;
        color:green;
    }
    span{
        display: inline-block;
        color:green;
   
     
        border-radius: 100%;
    }
</style>    