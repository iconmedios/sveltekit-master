<script>
    import Link from "$lib/commun/header/Link.svelte"
</script>
<header>
    <div class="container">
        <a href="/">LOGO</a>
        <nav>
            <Link route="/">Inicio</Link>
            <Link route="/tareas">Tareas</Link>
            <Link route="/dashboard">Dashboard</Link>
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