
app.controller('loginController' , function($scope){

	/* ============== Validando el login ============== */

	$scope.titulo_modal = "Inicio de Sesión";

	$(function() {

		$("#usuario").focus(function(event) {
            $scope.estado_usuario = true;
        });

        $("#clave").focus(function(event) {
            $scope.estado_clave = true;
        });

        $("#idmsj").focus(function(event) {
            $scope.estado_recuperacion_email = true;
        });

	});

	/*
	$scope.validar_login = function(){

		if($scope.formulario_login.$valid){
			if($scope.usuario == "admin" && $scope.clave == "admin"){
				$scope.valido = true;
				//var action = document.getElementById('formulario_login');
				//action.getAttribute("action","<%=request.getContextPath()%>/UsuarioLogin");

				
				//$('#formulario_login').attr('action' , " {{ action }}");

				$scope.action_login = '<%=request.getContextPath()%>/UsuarioLogin';
				$('#formulario_login').attr('action' , $scope.action_login);

			}else {
				$scope.invalido = true;
				//$('#formulario_login').removeAttr('action');
				//$('#formulario_login').attr('action' , " {{ action }}");
			}
		}
	};
	*/

	$scope.recuperar_password = function() {
		$scope.ocultar_login = true;
		$scope.titulo_modal = "Recuperar Contraseña";
	};

	$scope.email_enviado = function() {
		if($scope.formulario_recuperar_password.$valid){

			$scope.enviado = true;
			$scope.titulo_modal = "Envio Exitoso !";

		}
	}

	$scope.reset_login = function() {
		$scope.ocultar_login = false;
		$scope.usuario = "";
		$scope.clave = "";
		$scope.clave = "";
		$scope.recuperacion_email = "";
		$scope.invalido = false;
		$scope.enviado = false;
	};

});