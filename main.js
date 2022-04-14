//ingresar activad y pushearlas a un array
//ordenar por tipo entrenamiento t-inferior, t-superior, core (por boton)
//ordenar por volumen de entrenamiento(por boton)
//ordenar por carga total(por boton)

function init(){
    let registros_core= [];

    menu_principal();


    
    //declaraciones

    function menu_principal(){

        //botones de entrenamiento
        let boton_ingreso_tsup =document.createElement("button");
        boton_ingreso_tsup.innerHTML =`<h3>Tren superior</h3>`;

        let boton_ingreso_tinf =document.createElement("button");
        boton_ingreso_tinf.innerHTML =`<h3>Tren inferior</h3>`;

        let boton_ingreso_core =document.createElement("button");
        boton_ingreso_core.innerHTML =`<h3>Core</h3>`;

        //botones de accion, y orden
        let boton_vista_entrenamiento = document.createElement("button");
        boton_vista_entrenamiento.innerHTML=`<h3>Mostrar entrenamientos</h3>`;

        let boton_borrar_ultima_actividad = document.createElement("button");
        boton_borrar_ultima_actividad.innerHTML=`<h3>Borrar ultimo Entrenamiento</h3>`;

        document.body.append(boton_ingreso_tsup,boton_ingreso_tinf,boton_ingreso_core, boton_vista_entrenamiento);

        //eventos botones
        boton_ingreso_core.addEventListener("click",formulariocore);
        boton_vista_entrenamiento.addEventListener("click",mostrar_entrenamiento);
        boton_borrar_ultima_actividad.addEventListener("click",bo)
        
    }



    function formulariocore()
    {
        let contenedor_formulario = document.createElement("div");
        contenedor_formulario.setAttribute("class","formulario_entrada_core")
        document.body.append(contenedor_formulario);
        contenedor_formulario.setAttribute("class","contenedor_core");


        let formulario = document.createElement("form");
        formulario.innerHTML =`
        <h2>Detalle su entrenamiento de core</h2>
        <label for="dia">Día de la semana: <input type="text" id="dia"></input></label>
        <label for="volumen">Volumen del entrenamiento (en hs):<input id="volumen" type="number"></input></label>
        <label for="carga">Carga neta del entrenamiento: <input id="carga" type="number"></input></label>
        <button type="submit" id="submit">Enviar</button>`;
        contenedor_formulario.append(formulario);
        
        //envio
        formulario.addEventListener("submit",envio);

        function envio(e){
            e.preventDefault();
            let valor_dia = document.getElementById("dia").value;
            let valor_vol = document.getElementById("volumen").value;
            let valor_carga = document.getElementById("carga").value;
            console.log(valor_vol,valor_carga);   

            registros_core.push({dia:valor_dia, volumen: valor_vol, carga: valor_carga})
            console.log(registros_core);

            formulario.innerHTML="";
        }
    }

    function mostrar_entrenamiento(){

        let contenedor_entrenamientos = document.createElement("div");
        document.body.append(contenedor_entrenamientos);

        for(registro of registros_core){
            //registros impresos
            let dia = document.createElement("h4");
            dia.innerHTML = `Día de entrenamiento: ${registro.dia}`;
            let volumen = document.createElement("h4");
            volumen.innerHTML = `Volumen de su entrenamiento: ${registro.volumen}hs`;
            let carga = document.createElement("h4");
            carga.innerHTML = `Carga en kg de su entrenamiento:  ${registro.carga}`;

            //borrar actividad
            let borrar = document.createElement("button");
            borrar.innerText=`Borrar esta actividad`;
            borrar.addEventListener("click",borrar_actividad);


            //append
            contenedor_entrenamientos.append(dia,volumen,carga);    
            contenedor_entrenamientos.append(borrar);


            //funcion 

            function borrar_actividad(){
                registros_core.splice(registros_core.indexOf(registro));
                console.log(registros_core);
                contenedor_entrenamientos.innerHTML="";


            }
        }


    }
}
        
















