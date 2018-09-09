const algoliasearch = require('algoliasearch');
const instantsearch = require('instantsearch.js')
const client = algoliasearch('AZK0SCC3JD', '3a172d1a1d1731445c44a943fbb4a8b2');
const requestIndex = client.initIndex('requests');
// requestIndex
//   .addObject({
//     firstname: 'Doug',
//     lastname: 'Dimmadome',
//     location: 'School of Arts & Design',
//     course: 'Corporate Finance I',
//     message: 'Owner of the Dimmsdale Dimmadome!',
//     school: 'UPenn',
//   })
//   .then(content => console.log(content))
//   .catch(err => console.error(err));

// var requestsJSON = require('./requests.json');

// requestIndex.addObjects(requestsJSON, function(err, content) {
// if (err) {
//   console.error(err);
// }
// });

requestIndex.setSettings({
  'searchableAttributes': [
    'buildingRoom',
    'school',
    'subjectCourse',
    'purpose'
  ]
}, function(err, content) {
  console.log(content);
});

var search = instantsearch({
// Replace with your own values
appId: 'AZK0SCC3JD',
apiKey: '3a172d1a1d1731445c44a943fbb4a8b2', // search only API key, no ADMIN key
indexName: 'requestIndex',
routing: true,
searchParameters: {
  hitsPerPage: 10
}
});

// search.addWidget(
//   instantsearch.widgets.searchBox({
//     container: '#search'
//   })
// );

// search.addWidget(
//   instantsearch.widgets.hits({
//     container: '#hits',
//     templates: {
//       item: document.getElementById('hit-template').innerHTML,
//       empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
//     }
//   })
// );

search.start();
