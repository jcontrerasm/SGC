
app.controller('registroController' , function($scope){

    /* ============== Validando campos vacios ============== */
    
    $(function() {

        $("#txt_nombre").focus(function(event) {
            $scope.estado_nombre = true;
        });

        $("#txt_apepat").focus(function(event) {
            $scope.estado_apepat = true;
        });

        $("#txt_apemat").focus(function(event) {
            $scope.estado_apemat = true;
        });

        $("#fecha_nacimiento").blur(function(event) {

            $scope.fecha_nacimiento = $("#fecha_nacimiento").val();

            var fecha_actual = new Date();
            var anio_actual = parseInt(fecha_actual.getFullYear());

            var anio = ($("#fecha_nacimiento").val()).substr(0,4);

            var edad_actual = anio_actual - parseInt(anio);

            if(edad_actual < 18){
                alert("Usted es menor de edad.");
                $("#fecha_nacimiento").val("");
                $scope.fecha_nacimiento = $("#fecha_nacimiento").val();
            }

            $('#txt_edad').val(edad_actual);

        });

        $("#select_genero").focus(function(event) {
            $scope.estado_select_genero = true;
        });

        $("#select_tipo_documento").focus(function(event) {
            $scope.estado_select_tipo_documento = true;
        });

        $("#txt_numero_dni").focus(function(event) {
            $scope.estado_txt_numero_dni = true;
        });

        $("#txt_telefono").focus(function(event) {
            $scope.estado_txt_telefono = true;
        });

        $("#txt_celular").focus(function(event) {
            $scope.estado_txt_celular = true;
        });

        $("#select_estado_civil").focus(function(event) {
            $scope.estado_select_estado_civil = true;
        });

        $("#txt_email").focus(function(event) {
            $scope.estado_txt_email = true;
        });

        $("#txt_dir").focus(function(event) {
            $scope.estado_txt_dir = true;
        });

    });

});