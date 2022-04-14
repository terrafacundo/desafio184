//ingresar activad y pushearlas a un array
//ordenar por tipo entrenamiento t-inferior, t-superior, core (por boton)
//ordenar por volumen de entrenamiento(por boton)
//ordenar por carga total(por boton)

function init(){

    seleccion_entrenamiento();



    //declaraciones

    function seleccion_entrenamiento(){
        let boton_ingreso_tsup =document.createElement("button");
        boton_ingreso_tsup.innerHTML =`<h3>Tren superior</h3>`;

        let boton_ingreso_tinf =document.createElement("button");
        boton_ingreso_tinf.innerHTML =`<h3>Tren inferior</h3>`;

        let boton_ingreso_core =document.createElement("button");
        boton_ingreso_core.innerHTML =`<h3>Core</h3>`;

        document.body.append(boton_ingreso_tsup,boton_ingreso_tinf,boton_ingreso_core);

        boton_ingreso_core.addEventListener("click",formulariocore)
    }



    function formulariocore()
    {
        let formulario = document.createElement("form");
        formulario.innerHTML =`
        <label for="volumen">Volumen del entrenamiento (en hs):<input id="volumen" type="number"></input></label>
        <label for="carga">Carga neta del entrenamiento: <input id="carga" type="number"></input></label>
        <input type="button" id="submit">Enviar</input>`;
        document.body.append(formulario);

        
        //envio
        formulario.addEventListener("submit",envio);

        
        function envio(e){
            e.preventDefault();
            valor_carga= document.getElementById("carga").value;
            valor_vol = document.getElementById("volumen").value;
            console.log("valor de la carga: ",valor_carga,"valor del volumen: ",valor_vol);
        }
        //asignacion valores

        
    }
}
        
















