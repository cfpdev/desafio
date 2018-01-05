describe('Cadastro de Viagem Unitário', function () {

    describe('ViagensController', function () {
        beforeEach(function () {
            this.$scope = {};
            this.controller = new ViagensController(this.$scope);
        });

        it('deve criar "itens" com 6 itens', function () {
            expect(this.$scope.itens.length).toBe(6);
        });

        describe('adicionaItem', function () {
            it('deve adicionar um novo item a lista com dados do escopo', function () {
                this.$scope.item = {};
                this.$scope.item.origem = 'São Paulo';
                this.$scope.item.destino = 'São Paulo';
                this.$scope.item.data = '2018-01-03';
                this.$scope.item.hora = '10:00';
                this.$scope.item.transporte = 'Carro';
                this.$scope.item.passageiro = 'Paulo';
                this.$scope.adicionaItem();
                expect(this.$scope.itens.length).toBe(7);
                expect(this.$scope.itens[6].origem).toBe('São Paulo');
                expect(this.$scope.itens[6].destino).toBe('São Paulo');
                expect(this.$scope.itens[6].data).toBe('2018-01-03');
                expect(this.$scope.itens[6].hora).toBe('10:00');
                expect(this.$scope.itens[6].transporte).toBe('Carro');
                expect(this.$scope.itens[6].passageiro).toBe('Paulo');
                expect(this.$scope.itens[6].comprado).toBeFalse;
            });
        });

    });

});
