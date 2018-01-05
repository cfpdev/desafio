function ViagensController($scope) {
    $scope.itens = [
        {origem: 'São Paulo', destino: 'Curitiba', data: '2018-01-03', hora: '14:00', transporte: 'Avião', passageiro: 'Raphael', comprado: false},
        {origem: 'São Paulo', destino: 'Curitiba', data: '2018-01-03', hora: '13:00', transporte: 'Avião', passageiro: 'Thaís', comprado: false}
    ];

    $scope.adicionaItem = function () {
        $scope.itens.push({origem: $scope.item.origem,
                          destino: $scope.item.destino,
                          data: $scope.item.data,
                          hora: $scope.item.hora,
                          transporte: $scope.item.transporte,
                          passageiro: $scope.item.passageiro,
                          passageiro: $scope.item.contato,
                          comprado: false});
        $scope.item.origem = '';
        $scope.item.destino = '';
        $scope.item.data = '';
        $scope.item.hora = '';
        $scope.item.transporte = '';
        $scope.item.passageiro = '';
        $scope.item.contato = '';
    };
}
