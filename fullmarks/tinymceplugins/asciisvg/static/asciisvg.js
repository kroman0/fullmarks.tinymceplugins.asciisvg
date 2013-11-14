showcoordinates = false;

jQuery(function($) {
    $('span.ASCIISvgScript').each(function(index, element) {
        drawgraph(element);
    });
    $("span[data-asciisvg]").each(function(){
        $(this).replaceWith(decodeURI($(this).data('asciisvg')));
    });
});
