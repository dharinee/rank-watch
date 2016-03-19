angular.module('app', ['ui.bootstrap']);

angular.module('app').controller("MainController", function($scope,$http, $uibModal, dataFactory){
    //$scope.$watch(function(scope) { return scope.items },
    //    function(newValue, oldValue) {
    //
    //    }
    //);


    $http.get("data.json").then(function (response) {
        $scope.items = response.data;
        dataFactory.items = $scope.items;
        //$scope.itemsWrite = response.data;
    });


    $scope.items =  dataFactory.items;

    $scope.toggle = function(item) {
        item.showSubItem = ! item.showSubItem;
    };
    $scope.open = function (item) {

        var modalInstance = $uibModal.open({
            templateUrl: 'myModalContent.html',
            controller: ModalInstanceCtrl,
            resolve: {
                item: function () {
                    return item;
                }
            }
        });
    }
});
var ModalInstanceCtrl = function ($scope, $uibModalInstance, item, dataFactory) {

    $scope.addNewItem = function() {
        //if(item.children == undefined){
        //    item.children = [];
        //}
        $scope.items =  dataFactory.items;
        $scope.writeData=function() {
            $http.post("writeData.php", {"i": $scope.items
            })
            //.success(function(data, status) {
            //
            //    $scope.status = status;
            //    $scope.names = data;
            //
            //})
        }
        item.children.push({text : $scope.newItem,
                            children : []});
        $uibModalInstance.dismiss('cancel');
        $scope.writeData()
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
};