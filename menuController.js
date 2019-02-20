app.controller('menuController', [
    '$scope',
    function($scope){
        $scope.model = {title: 'Our Menu',
                        mainDish: '',
                        specialInstructions: ''
    };
    
    $scope.$watch('model.mainDish',function(newValue, oldValue){
        if(newValue==='BBQ Chicken Pizza'){
            alert('You\'ve selected BBQ Chicken Pizza!');
        }
    });
    
    $scope.changeMainDish = function(item){
        $scope.model.mainDish = item;
    };
    }
]);