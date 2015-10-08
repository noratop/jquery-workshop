var image = $("img");


image.each(function(){
    
    var imgHTMLelt = '<img src="'+$(this).attr("src")+'" alt="'+$(this).attr("alt")+'">';
    var altHTMLelt = '<p>'+$(this).attr("alt")+'</p>';
    
    
    $(this).on("click",function(){
        var popup = $('<div class = "overlay">'+imgHTMLelt+altHTMLelt+'</div>');
        $("body").append(popup);
        
        $("div.overlay").on("click",function(){
            //alert("fds");
            $(this).remove();
        });
    });
});

