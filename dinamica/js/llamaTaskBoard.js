angular.module('taskBoard', [

  ]).controller('taskBoardCtrl', function ($scope) {

      $scope.assuntos = []

      function adicionarAssunto(novoAssunto) {
        if (isJaAdicionado(novoAssunto))
          return;

        novoAssunto.status = 'aprender';
        $scope.assuntos.push(novoAssunto);

        resetForm();
      }

      function removerAssunto(assunto) {
        $scope.assuntos.splice($scope.assuntos.indexOf(assunto), 1);
      }

      function resetForm() {
        $scope.novoAssunto = {
          nome: '',
          status: 'aprender'
        }
      }

      function isJaAdicionado(assunto) {
        for (i = 0; i < $scope.assuntos.length; i++) {
          if ($scope.assuntos[i].nome === assunto.nome)
            return true;
        }
        return false;
      }

      function setConcluido(assunto) {
        assunto.status = 'concluido';
      }

      function unsetConcluido(assunto) {
        assunto.status = 'aprender';
      }

      $scope.adicionarAssunto = adicionarAssunto;
      $scope.removerAssunto = removerAssunto;
      $scope.setConcluido = setConcluido;
      $scope.unsetConcluido = unsetConcluido;

    });