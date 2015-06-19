'use strict';

/**
 * @ngdoc function
 * @name myblogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myblogApp
 */
angular.module('myblogApp')
  .controller('MainCtrl', function ($scope, $stateParams, $state, blogdata, $location) {
        /*Data Elements*/
        $scope.metaData = blogdata.getAllPostsMetadata();
        //Menu 1
        $scope.allCategoriesWithCount = blogdata.getAllCategoriesWithCount();

        var qCat = $stateParams.category;
        var qSlug = $stateParams.slug;

        if(qCat){
            qCat=qCat.toLowerCase();
            if($scope.metaData[qCat]){
                console.log('valid Cat');
                selectCategory(qCat,false);
                if(qSlug){
                    qSlug=qSlug.toLowerCase();
                    selectPost(qSlug);
                }
                else{
                    selectPost();
                }
            }
            else{
                console.log('Invalid URL');
            }
        }
        else{
            /*Default Data and Selection */


            $scope.selectedCategory=$scope.allCategoriesWithCount[0].category;

            //Menu 2
            $scope.categoryList = $scope.metaData[$scope.selectedCategory];

            $scope.selectedItem = $scope.categoryList[0].slug;
            $scope.selectedPostMetadata = $scope.categoryList[0];
        }



        function selectCategory(category, runPost){
            if(category){
                $scope.selectedCategory=category;

            }
            else
                $scope.selectedCategory=$scope.allCategoriesWithCount[0].category;

            $scope.categoryList = $scope.metaData[$scope.selectedCategory];

            if(runPost){
                selectPost($scope.categoryList[0].slug);
            }


        }

        function selectPost(slug){
            if(slug){
                var found=false;
                $scope.selectedItem = slug;
                var postItems = $scope.categoryList;
                console.log(postItems);
                for(var i=0;i<postItems.length;i++){
                    if(postItems[i].slug===slug){
                        $scope.selectedPostMetadata = postItems[i];
                        console.log($scope.selectedPostMetadata);
                        found=true;
                        break;
                    }
                }
                if(!found){
                    console.log('Invalid Slug- Defaulting');
                    $scope.selectedItem = $scope.categoryList[0].slug;
                    $scope.selectedPostMetadata = $scope.categoryList[0];
                }
            }
            else{
                $scope.selectedItem = $scope.categoryList[0].slug;
                $scope.selectedPostMetadata = $scope.categoryList[0];
            }
        }



        $scope.getSelectedItem=function(){
            return "posts/"+$scope.selectedItem+".md";
        }

        $scope.menuClick = function(category){

            //selectCategory(category,true);
            $state.go('q',{category:category});


        };

        $scope.listClick = function(slug){
            console.log(slug);
            //selectPost(slug);
            $state.go('q2',{category:$scope.selectedCategory, slug:slug});
        }

        $scope.currentPage = $location.absUrl();
  });
