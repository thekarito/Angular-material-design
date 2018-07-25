//Validación valores numericos
app.directive('numberDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {

            function myValidation(value) {
                if (!/^([0-9])*$/.test(value)) {
                    mCtrl.$setValidity('charE', false);
                    mCtrl.$setViewValue(value.replace(/[^0-9]/g, ''));
                    mCtrl.$render();
                } else {
                    mCtrl.$setValidity('charE', true);
                }
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});
//fin




//Validación cadena de texto
app.directive('stringDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {

            function myValidation(value) {
                if (value.search(/[^\sa-zA-Z]/i) < 0) {
                    mCtrl.$setValidity('charE', true);
                } else {
                    mCtrl.$setValidity('charE', false);
                    mCtrl.$setViewValue(value.replace(/[^\sa-zA-Z]/g, ''));
                    mCtrl.$render();
                }
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});
//fin