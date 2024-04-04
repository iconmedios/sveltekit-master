<script lang="ts">
    //https://youtu.be/Npc_MOXZKjM?si=sTF4IbrQUhZipEcQ TERMINADO 

    import { initializeApp, getApps, getApp } from "firebase/app";
    import { collection,  onSnapshot, getFirestore, QuerySnapshot, doc , updateDoc, deleteDoc , addDoc} from "firebase/firestore";
    import { firebaseConfig } from "$lib/data/firebase";

    const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

    const db = getFirestore();
    // console.log(firebaseApp, db);
    const clientesDB = collection(db, "clientes");
   
    //console.log(clientesDB);

    let clientesDBlist: any[] = []; 

   onSnapshot(clientesDB, (QuerySnapshot) => {
        let firebaseClientes: any[] = [];
        QuerySnapshot.forEach((doc) => {
            let cliente = { ...doc.data(), id: doc.id };
            firebaseClientes.push(cliente); // Utiliza push para agregar la cliente al array
        });

       clientesDBlist = firebaseClientes;
        
    });

    let clientesData = {
        name:"",
        dominio:"",
        accion :"",
        descripcion :""
    }
    let error = "";

    const agregarCliente = async () => {
        
        if (clientesData.accion !== "") {
           await addDoc(collection(db, "clientes"),{
                ...clientesData,
                realizada: false,
                creada: new Date(),
            })
          error = ""
        } else {
            error = "El campo nombre no debe estar vacio";
        }
        clientesData = {
        name:"",
        dominio:"",
        accion :"",
        descripcion :""
        }
        
    };

    const marcarClienteActivo = async (cliente:any) => {
        await updateDoc(doc(db, "clientes", cliente.id),{
            activo:!cliente.activo,
        })

    };

    const eliminarCliente = async (cliente:any) => {
        await deleteDoc(doc(db, "clientes", cliente))
        
    };
    const teclaPresionada = (e: KeyboardEvent) => {
        // console.log(e);
        if (e.key === "Enter") {
            agregarCliente();
        }
    };

    


   
</script>





<div>
    <h1>CLIENTES </h1>
</div>
<section class="clientes">

    <div class="row">

        <div class="col">
            <div>
                <form class="tareas-form" on:submit|preventDefault={agregarCliente}>
                    <input type="text" placeholder="Nombre cliente" bind:value={clientesData.accion} />
                    <textarea placeholder="Agregar descripción" bind:value={clientesData.descripcion}></textarea>
                    <div> <button>Agregar</button> </div>
                </form>
                <p class="error">{error}</p>
            </div>
        </div>

        <div class="col">
            <ul class="lista">
                {#each clientesDBlist as cliente}
                    <li class:terminada={cliente.realizada}>
                        <span> {cliente.accion} </span>
                        <span>  {cliente.descripcion}</span>
                        <span>
                            <button on:click={() => marcarClienteActivo(cliente)}>
                                Activar
                            </button>
                            <button on:click={() => eliminarCliente(cliente.id)}>
                                Eliminar
                            </button>
                        </span>
                       
                    </li>
                {:else}
                    No existen Clientes
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
        grid-template-columns: 1fr 3fr;
        gap: 1.4rem;
    
    }
    form.tareas-form{
        display: grid;
        padding: 1rem;
        background: #ccc;
        gap: 1em;
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
    .lista li{
        display: grid;
        grid-template-columns: 2fr 2fr 1fr ;
        gap: 1.4rem;

    }
    input, textarea{
        padding: .4rem;
    }
</style>
