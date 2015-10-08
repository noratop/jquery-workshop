var ann = $("div.announcement");
// alert("cc");
ann.each(function(){
    var closeButton = $("<button>X</button>");
    $(this).append(closeButton);
});