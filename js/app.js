var ann = $("div.announcement");
// alert("cc");
ann.each(function() {
    var current = $(this);
    var closeButton = $("<button>X</button>");
    var showButton = $("<button>Show announcement</button>");
    
    current.append(closeButton);
    current.append(showButton);
    showButton.hide();
    
    closeButton.on("click", function close(){
        
        current.find("p").hide();
        closeButton.hide();
        showButton.show();
    })
    
    showButton.on("click", function show(){
        
        current.find("p").show('slow');
        showButton.hide();
        closeButton.show();
    })    
});