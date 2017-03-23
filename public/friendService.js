angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      app.post('/api/login' , user )
      /* FIX ME */
    };

    this.getFriends = function() {
      app.get('/api/profiles', proCont.getFriendsProfiles )
      /* FIX ME */
    };

});
