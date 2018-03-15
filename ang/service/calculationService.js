app.factory("CalculationService", function($http, $q) {
    return {
        getData: function() {
            var def = $q.defer();
            $http({
                "url": "http://localhost:3000/getData",
                "method": "get"
            }).then(function(response) {
                def.resolve(response.data);
            }, function(error) {
                def.reject(error.data);
            });
            return def.promise;
        },

        saveData: function(form) {
            var def = $q.defer();
            $http({
                "url": "http://localhost:3000/saveData",
                "method": "post",
                "data": form
            }).then(function(response) {
                def.resolve(response.data);
            }, function(error) {
                def.reject(error.data);
            });
            return def.promise;
        }
    }
});