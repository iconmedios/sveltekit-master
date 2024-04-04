<script lang="ts">
    //https://youtu.be/Npc_MOXZKjM?si=sTF4IbrQUhZipEcQ TERMINADO 

    import { initializeApp, getApps, getApp } from "firebase/app";
    import { collection,  onSnapshot, getFirestore, QuerySnapshot, doc , updateDoc, deleteDoc , addDoc} from "firebase/firestore";
    import { firebaseConfig } from "$lib/data/firebase";

    const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

    const db = getFirestore();
    const TareasDB = collection(db, "tareas");
   
    //console.log(TareasDB);

    // Leer y obtener los datos en tiempo real 
    let tareas: any[] = []; 
    onSnapshot(TareasDB, (QuerySnapshot) => {
        let firebaseTareas: any[] = [];
        QuerySnapshot.forEach((doc) => {
            let tarea = { ...doc.data(), id: doc.id };
            firebaseTareas.push(tarea); 
        });

        tareas = firebaseTareas;
        
    });

    let tareasData = {
        accion :"",
        descripcion :""
    }
    let error = "";

    const agregarTarea = async () => {
        
        if (tareasData.accion !== "") {
           await addDoc(collection(db, "tareas"),{
                ...tareasData,
                realizada: false,
                creada: new Date(),
            })
          error = ""
        } else {
            error = "El campo esta vacio";
        }
        tareasData = {
        accion :"",
        descripcion :""
        }
    };

    const marcarTareaComoCompletada = async (tarea:any) => {
        await updateDoc(doc(db, "tareas", tarea.id),{
            realizada:!tarea.realizada,
        })

    };

    const eliminarTarea = async (tarea:any) => {
        await deleteDoc(doc(db, "tareas", tarea))
        
    };
    const teclaPresionada = (e: KeyboardEvent) => {
        // console.log(e);
        if (e.key === "Enter") {
            agregarTarea();
        }
    };

    


   
</script>





<section>
    <h1>TAREAS </h1>
</section>
<section class="tareas">

    <div class="row">

        <div class="col">
            <div>
                <form class="tareas-form" on:submit|preventDefault={agregarTarea}>
                    <input type="text" placeholder="Agregar Tarea" bind:value={tareasData.accion} />
                    <textarea placeholder="Agregar descripción" bind:value={tareasData.descripcion}></textarea>
                    <div> <button>Agregar</button> </div>
                </form>
                <p class="error">{error}</p>
            </div>
        </div>

        <div class="col">
            <ul class="lista">
                {#each tareas as tarea}
                    <li class:terminada={tarea.realizada}>
                        <span> {tarea.accion} {tarea.descripcion}</span>
                        <span>
                            <button on:click={() => marcarTareaComoCompletada(tarea)}>
                                Finalizar
                            </button></span
                        >
                        <span>
                            <button on:click={() => eliminarTarea(tarea.id)}>
                                Eliminar
                            </button>
                            </span>
                    </li>
                {:else}
                    No hay tareas
                {/each}
               
            </ul>
        </div>
    </div>

</section>

<svelte:window on:keydown={teclaPresionada} />


<style>
    section{
        padding: 90px 0;
    }
    section .row{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.4rem;
    
    }
    form.tareas-form{
        display: grid;
        padding: 1rem;
        background: #ccc;
    }
    form.tareas-form{
        border: 1px solid #ddd;
    }
    form.tareas-form button{
        padding: .5rem;
    }
 
    .terminada {
        text-decoration: line-through;
    }
    .error {
        color: red;
    }
</style>
