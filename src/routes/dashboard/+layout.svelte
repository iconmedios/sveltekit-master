
<main class="active">
    <aside>
        <div>
            <p>Lateral</p>
        </div>   
    </aside>
    <header><h1>Dasboard Layout</h1></header>
    <section>
        <slot />
    </section>
    
</main>


<style>
    main{
        
        display: grid;
        gap:2px;
        grid-template-areas: 
        "aside header header"
        "aside section section"
        "aside footer footer" 
        ;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr auto ;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        
        
    }
    /* main.active {
        grid-template-columns: 90px 1fr;

    } */

    header{
        grid-area: header;
        background: var(--md-ref-palette-neutral-variant90) ;
        height: 60px;
    }
    aside{
        width: 90px;
        grid-area: aside;
        background: var(--md-ref-palette-primary30);
        color: #eee;
        transition: all ease-out .5s;
       
    }
    aside:hover{
        width: 280px;
    }
    section{
        grid-area: section;
        background: var(--md-ref-palette-neutral-variant80) ;
        overflow-y: scroll;
    }
    footer{
        grid-area: footer;
        background: var(--md-ref-palette-neutral-variant80) ;
        height: 40px;
        display: flex;
        align-items: center;
	    
   
    }

    /* @media (max-width: 1024px) {
        aside{
            position: absolute;
            left: -250px;
            height: 100vh;
        }
        } */
    
</style>