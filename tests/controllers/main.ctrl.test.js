describe('MainCtrl', function() {
    var ctrl;

    beforeEach(function() {
        module('starter');

        inject(function($controller) {
            ctrl = $controller('MainCtrl');
        });
    });

    it('should create controller', function() {
        expect(ctrl).not.toBeUndefined();
    });
});
