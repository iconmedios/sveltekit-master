<script>
    import { AirplayIcon, AtSignIcon} from 'svelte-feather-icons'
    import Tareas from "$lib/tareas/c03_TareasFirebase.svelte"
</script>

<h1><span class="iconcolor"><AirplayIcon size="50"/></span>Creando Tareas</h1>


<Tareas />


<style>
    h1{
        display: flex;
        align-items: center;
        gap: 20px;
        color:green;
    }
    span{
        display: inline-block;
        color:green;
        border: 2px solid green;
        padding:16px;
        border-radius: 50%;
    }
</style>    