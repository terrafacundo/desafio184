
//seria una funcion asignada a un boton en el header

function resumen_del_usuario(){
    let dias_de_entreno_vuelta = JSON.parse(localStorage.getItem("entrenamientos"));


    let container_analisis_datos =document.getElementById("container_analisis_datos");
    console.log(container_analisis_datos); 

    //numero de entrenamientos
    container_analisis_datos.innerHTML=`<h1>Este ha sido su performance de hasta el momento<h1>`;
    let resumen_dias_entrenamiento = document.createElement("div");
    resumen_dias_entrenamiento.innerHTML=`<h2>El número de entrenamientos ha sido de ${dias_de_entreno_vuelta.length}</h2>`;

    //cargas
    let resumen_cargas= document.createElement("div");
    let carga_neta = dias_de_entreno_vuelta.reduce((acc, el)=>acc+el.carga,0);
    resumen_cargas.innerHTML=`<h2>El total de cargas en kg de tus entrenamientos ha sido de ${carga_neta}</h2>`;

    //volumen de entrenamiento
    let resumen_volumen = document.createElement("div");
    let volumen_neto= dias_de_entreno_vuelta.reduce((acc,el)=>acc+el.volumen,0);
    resumen_volumen.innerHTML=`<h2>El total de volumen en hs de tus entrenamientos ha sido de ${volumen_neto}</h2>`;

    //entrenamiento segun carga


    ////apends
    container_analisis_datos.append(resumen_dias_entrenamiento,resumen_cargas,resumen_volumen);


    //estadisticas
    let estadisticas_titulo = document.createElement("h2");
    estadisticas_titulo.innerHTML =`Tus entrenamientos ordenados en mayor rendimiento por cargas`
    container_analisis_datos.append(estadisticas_titulo);

    let resumen_orden_por_carga = document.createElement("div");
    let ordenxcarga = dias_de_entreno_vuelta.sort((a,b)=>b.carga-a.carga -1);
    console.log(dias_de_entreno_vuelta);
    for (x of dias_de_entreno_vuelta){
        let entrenamiento = document.createElement("div");
        entrenamiento.innerHTML=`Entrenamiento: ${x.id}, del ${x.dia}, con una duración de ${x.volumen}hs, y levantando ${x.carga} kgs`;

        container_analisis_datos.append(entrenamiento);
    }

    let boton_vuelta = document.createElement("button");
    boton_vuelta.innerHTML="Regresar";
    container_analisis_datos.append(boton_vuelta);
    boton_vuelta.addEventListener("click", retorno_menu);

    function retorno_menu(){
        container_analisis_datos.innerHTML="";
    }
}