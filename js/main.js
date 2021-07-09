
// slide-in//
$( .gomenu ).ready( function() {
    $( .gomenu ).open( function() {
      $( .gomenu ).animate( {
        width: '100%'
        .slide-in-top{animation:slide-in-top .5s cubic-bezier(.25,.46,.45,.94) both}

        @keyframes slide-in-top{0%{transform:translateY(-1000px);opacity:0}100%{transform:translateY(0);opacity:1}}
        } );
    } );
} );