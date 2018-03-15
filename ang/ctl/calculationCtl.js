app.controller("CalculationCtl", function($scope, CalculationService) {

    $scope.success = true;
    $scope.form = { "paramOne": "", "paramTwo": "" };
    $scope.msg = "";
    $scope.multiply = 0;

    CalculationService.getData().then(function(response) {
        var data = response.data;
        if (data != "" && data.length > 0) {
            $scope.form.paramOne = data[0].PARAM_ONE;
            $scope.form.paramTwo = data[0].PARAM_TWO;
            $scope.multiply = $scope.form.paramOne * $scope.form.paramTwo;

        }
    }, function(error) {
        console.log(error);
    });

    $scope.changeValue = function(value) {
        $scope.multiply = 0;
        if (!isNaN(value) && angular.isNumber(+value) && value != undefined) {
            if (value < 0) {
                $scope.success = false;
                $scope.msg = "value => 0 should be considered a valid input";
            } else {
                $scope.success = true;
                $scope.msg = ""
            }
        } else {
            if (value != undefined) {
                $scope.success = false;
                $scope.msg = "Value must be digit.";
            }
        }
    };

    $scope.calculate = function() {
        $scope.multiply = $scope.form.paramOne * $scope.form.paramTwo;
        CalculationService.saveData($scope.form).then(function(response) {
            $scope.success = response.success;
            $scope.msg = response.msg;
        }, function(error) {
            console.log(error);
        });
    };

});