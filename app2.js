

var gith = require('gith').create( 9001 );

gith({
  repo: 'loudwinston/scripted-test-deploy'
}).on( 'all', function( payload ) {
  console.log( 'Post-receive happened for repository url ' + payload.urls.repo + ".git" );
});