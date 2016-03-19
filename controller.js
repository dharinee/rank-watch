angular.module('app', ['ui.bootstrap']);

angular.module('app').controller("MainController", function($scope,$http, $uibModal, dataFactory){

    $http.get("data.json").then(function (response) {
        $scope.items = response.data;
        dataFactory.items = $scope.items;
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
var ModalInstanceCtrl = function ($scope, $uibModalInstance, $http,item, dataFactory) {

    $scope.addNewItem = function() {
        
        $scope.items =  dataFactory.items;
        $scope.writeData=function() {
            $http.post("writeData.php", $scope.items
            )
            .success(function(data, status) {
           
			//console.log($scope.items);
            
            })
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