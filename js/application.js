/*
* Protobone Framework | v1.0.0 | MIT | July 4th, 2017
* Copyright 2017, Selwyn Orren @ Linuxweb
* Adapted from Skeleton Grid by Dave Gamache
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 04/07/2017
*/

$(document).ready(function() {

/*jQuery function to remove all size attributed from images*/
jQuery(document).ready(function($){
    $('img').each(function(){
        $(this).removeAttr('width')
        $(this).removeAttr('height');
    });
});

}); // End document Ready Function
