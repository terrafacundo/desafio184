//ingresar activad y pushearlas a un array
//ordenar por tipo entrenamiento t-inferior, t-superior, core (por boton)
//ordenar por volumen de entrenamiento(por boton)
//ordenar por carga total(por boton)
let container_toma_datos = document.getElementById("container_toma_datos");
function init(){
    let registros_core= [];

    menu_principal();


    
    //declaraciones

    function menu_principal(){

        //botones de entrenamiento

        let boton_ingreso_core =document.createElement("button");
        boton_ingreso_core.innerHTML =`<h3>Nuevo Entrenamiento</h3>`;
        boton_ingreso_core.setAttribute("class","boton");

        //botones de accion, y orden
        let boton_vista_entrenamiento = document.createElement("button");
        boton_vista_entrenamiento.innerHTML=`<h3>Mostrar entrenamientos en cola</h3>`;
        boton_vista_entrenamiento.setAttribute("class","boton");

        let boton_subir_actividad = document.createElement("button");
        boton_subir_actividad.innerHTML=`<h3>Guardar entrenamientos en la nube</h3>`;
        boton_subir_actividad.setAttribute("class","boton");

        let boton_estadisticas = document.createElement("button");
        boton_estadisticas.innerHTML = `<h3>Estadísticas</h3>`
        boton_estadisticas.setAttribute("class","boton");

        container_toma_datos.append(boton_ingreso_core, boton_vista_entrenamiento,boton_subir_actividad, boton_estadisticas);

        //eventos botones
        boton_ingreso_core.addEventListener("click",formulariocore);
        boton_vista_entrenamiento.addEventListener("click",mostrar_entrenamiento);
        boton_subir_actividad.addEventListener("click",subir_actividad);
        boton_estadisticas.addEventListener("click",resumen_del_usuario);
    }



    function formulariocore()
    {
        let contenedor_formulario = document.createElement("div");
        contenedor_formulario.setAttribute("class","formulario_entrada_core")
        container_toma_datos.append(contenedor_formulario);
        contenedor_formulario.setAttribute("class","contenedor_core");


        let formulario = document.createElement("form");
        formulario.innerHTML =`
        <h2>Detalle su entrenamiento de core</h2>
        <label for="identificacion">Nombre del entrenamiento: <input id="identificacion" type="text"></input></label>
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
            let valor_vol = Number(document.getElementById("volumen").value);
            let valor_carga = Number(document.getElementById("carga").value);
            let identificacion = document.getElementById("identificacion").value;  

            registros_core.push({id:identificacion, dia:valor_dia, volumen: valor_vol, carga: valor_carga, })
            console.log(registros_core);

            formulario.innerHTML="";
        }
    }

    function mostrar_entrenamiento(){

        let contenedor_entrenamientos = document.createElement("div");
        container_toma_datos.append(contenedor_entrenamientos);


        //mostrar actividades
        for(registro of registros_core){
            //registros impresos
            let caja_contenedora_datos = document.createElement("div");
            contenedor_entrenamientos.append(caja_contenedora_datos);
            let id = document.createElement("h4");
            id.innerHTML = `Id del entrenamiento: ${registro.id}`;
            let dia = document.createElement("h4");
            dia.innerHTML = `Día de entrenamiento: ${registro.dia}`;
            let volumen = document.createElement("h4");
            volumen.innerHTML = `Volumen de su entrenamiento: ${registro.volumen}hs`;
            let carga = document.createElement("h4");
            carga.innerHTML = `Carga en kg de su entrenamiento:  ${registro.carga}`;

            //borrar actividad
            let borrar = document.createElement("button");
            borrar.setAttribute("id", registros_core.indexOf(registro));
            borrar.innerText=`Borrar esta actividad`;
            borrar.addEventListener("click",borrar_actividad);


            //append
            caja_contenedora_datos.append(id,dia,volumen,carga);    
            caja_contenedora_datos.append(borrar);


            //funcion 

            function borrar_actividad(e){
                let objetivo = e.target.id;
                registros_core.splice(objetivo,1);
                caja_contenedora_datos.innerHTML="";
                contenedor_entrenamientos.innerHTML="";
                boton_limpiar.remove();
            }

        }
        let contenedor_boton_limpiar=document.createElement("div");
            let boton_limpiar = document.createElement("button");
            contenedor_boton_limpiar.append(boton_limpiar);
            boton_limpiar.innerHTML =`<h3>Limpiar ventana</h3>`;
            container_toma_datos.append(boton_limpiar);
            boton_limpiar.addEventListener("click",limpiar);

            function limpiar(){
                console.log("hola");
                contenedor_entrenamientos.innerHTML="";
                boton_limpiar.remove();
            }
    }

    function subir_actividad(){
        let ventana_subida = document.createElement("div");
        container_toma_datos.append(ventana_subida); 
        ventana_subida.innerHTML=`<h4>¡Has subido correctamente tus entrenamientos!</h4>`;
        let string_registros = JSON.stringify(registros_core);
        localStorage.setItem("entrenamientos",string_registros);
    }
}
        
















