
/**
 *ROUTE CONFIGURATIONS
 */

'use strict';

angular.module("SKPBQ")
.config(['$routeProvider', '$locationProvider', 'ngMetaProvider', function($routeProvider, $locationProvider, ngMetaProvider) {

  //Set defaults for arbitrary tags
  ngMetaProvider.setDefaultTag('title', 'Angular Rocks');
  ngMetaProvider.setDefaultTag('description', 'Esto es la descripción por defecto');
  ngMetaProvider.setDefaultTag('keywords', 'angular rocks default');

  $routeProvider.
  when('/', {
    controller: 'mainController',
    templateUrl: 'app/templates/home.html'
  }).
  when('/foo', {
    templateUrl: 'app/templates/partials/default.html'
  }).
  when('/bar', {
    templateUrl: 'app/templates/partials/default.html'
  }).
  when('/the-rolling-stones', {
    templateUrl: 'app/templates/partials/band.html',
    controller: 'bandController',
    data: {
      meta: {
        'title': 'The Rolling Stones',
        'description': "The Rolling Stones are an English rock band formed in London in 1962. The original line-up consisted of Brian Jones (rhythm guitar, harmonica), Mick Jagger (lead vocals), Keith Richards (lead guitar, backing vocals), Bill Wyman (bass), Charlie Watts (drums), and Ian Stewart (piano). Stewart was removed from the official line-up in 1963 but continued as a touring member until his death in 1985. Jones left the band less than a month prior to his death in 1969, having already been replaced by Mick Taylor, who remained until 1974. After Taylor left the band, Ronnie Wood took his place in 1975 and has been on guitar in tandem with Richards ever since. Following Wyman's departure in 1993, Darryl Jones joined as their touring bassist. Other touring keyboardists for the band have been Nicky Hopkins (1967–82), Billy Preston (through the mid-1970s) and Chuck Leavell (1982-present). The band was first led by Jones, but after teaming as the band's songwriters, Jagger and Richards assumed leadership while Jones dealt with legal and personal troubles.",
        'keywords': 'Rolling Stones rock Jones Jagger Wyman Watts songwriters guitar'
      }
    }
  }).
  when('/the-beatles', {
    templateUrl: 'app/templates/partials/band.html',
    controller: 'bandController',
    data: {
      meta: {
        'title': 'The Beatles',
        'description': "The Beatles were an English rock band formed in Liverpool in 1960. With members John Lennon, Paul McCartney, George Harrison and Ringo Starr, they became widely regarded as the foremost and most influential act of the rock era.[1] Rooted in skiffle, beat and 1950s rock and roll, the Beatles later experimented with several musical styles, ranging from pop ballads and Indian music to psychedelia and hard rock, often incorporating classical elements and unconventional recording techniques in innovative ways. In 1963 their enormous popularity first emerged as 'Beatlemania', and as the group's music grew in sophistication in subsequent years, led by primary songwriters Lennon and McCartney, they came to be perceived as an embodiment of the ideals shared by the counterculture of the 1960s.",
        'keywords': 'Beatles Lennon McCartney Harrison Liverpool rock pop'
      }
    }
  }).
  when('/queen', {
    templateUrl: 'app/templates/partials/band.html',
    controller: 'bandController',
    data: {
      meta: {
        'title': 'Queen',
        'description': "Queen are a British rock band that formed in London in 1970. Their classic line-up was Freddie Mercury (lead vocals, piano), Brian May (lead guitar, vocals), Roger Taylor (drums, vocals), and John Deacon (bass guitar). Queen's earliest works were influenced by progressive rock, hard rock and heavy metal, but the band gradually ventured into more conventional and radio-friendly works by incorporating further styles, such as arena rock and pop rock, into their music.",
        'keywords': 'Queen British Mercury rock music'
      }
    }
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}])
.run(['ngMeta', function(ngMeta) {
  ngMeta.init();
}]);
