function validarForm(){
    
    var txtNombre = document.getElementById('nombre').value;
    var txtTelefono = document.getElementById('telefono').value;
    var txtCorreo = document.getElementById('correo').value;
    var txtAsunto = document.getElementById('asunto').value;
    var txtMensaje = document.getElementById('mensaje').value;

        if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
            alert('Debe ingresar su nombre completo');
            document.datos.nombre.focus();
            return false;
        }
        if(txtNombre.length>50){
            alert('No debe exceder a 50 caracteres');
            document.datos.nombre.focus();
            return false;
        }
        if(txtCorreo == null || txtCorreo.length == 0 ){
            alert('Debe ingresar un correo válido');
            document.datos.correo.focus();
            return false;
        }
   
        if(txtCorreo.length>100){
            alert('No debe exceder a 100 caracteres');
            document.datos.correo.focus();
            return false;
        }

        if(txtAsunto == null|| txtAsunto.length == 0 || /^\s+$/.test(txtAsunto)){
            alert('Debe indicar un asunto al mensaje');
            document.datos.asunto.focus();
            return false;
        }
        if(txtAsunto.length>100){
            alert('No debe exceder a 100 caracteres');
            document.datos.asunto.focus();
            return false;
        }
        if(txtMensaje == null || txtMensaje.length == 0){
            alert('Por favor, ingrese su mensaje');
            document.datos.mensaje.focus();
            return false;
        }
        if(txtMensaje.length>500){
            alert('No debe exceder a 500 caracteres');
            document.datos.mensaje.focus();
            return false;
        }
        if(txtTelefono == null || txtTelefono.length == 0){
            alert('Debe ingresar un teléfono');
            document.datos.telefono.focus();
            return false;
        }
        if(txtTelefono.length>10){
            alert('No debe exceder a 10 números');
            document.datos.telefono.focus();
            return false;
        }
        if(isNaN(txtTelefono)){
            alert('Debe colocar sólo números en el Teléfono');
            document.datos.telefono.focus();
            return false;
        }
}