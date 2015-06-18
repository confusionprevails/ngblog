'use strict';

/**
 * @ngdoc service
 * @name myblogApp.blogdata
 * @description
 * # blogdata
 * Service in the myblogApp.
 */
angular.module('myblogApp')
  .service('blogdata', function ($http, $window, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
        var allPostsMetadata=null;
        var allCategories=[];
        var allCategoriesWithCount=[];

        var dataLoaded = false;

        var _ = $window._;

        readMetadata();

        function readMetadata(){
            if($window.metadata){
                // we have metadata
                var metadata = $window.metadata;
                for(var category in metadata){
                    if(metadata.hasOwnProperty(category)){
                        allCategories.push(category);
                        allCategoriesWithCount.push({category:category, count:metadata[category].length})
                    }
                }
                dataLoaded=true;
                allPostsMetadata=metadata;
                console.log(allPostsMetadata);
                //defer.resolve(true);

            }else{
                //rerun this function
                setTimeout(readMetadata(defer), 1000);
            }
        }

        /*this.isDoneReading = function(){
            var defer = $q.defer();
            readMetadata(defer);
            return defer.promise();

        };*/

        this.getAllPostsMetadata = function(){
            return allPostsMetadata;
        };

        this.getAllCategories = function(){
            return allCategories;
        };

        this.getAllCategoriesWithCount = function(){
            return allCategoriesWithCount;
        }





  });
