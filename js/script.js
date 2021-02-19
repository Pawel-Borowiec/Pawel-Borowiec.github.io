jQuery(function($){
    $.scrollTo(0);
    $('#link1').click(function(){ $.scrollTo($('#about'), 500); });
}
);

jQuery(function($){
    $.scrollTo(0);
    $('#link2').click(function(){ $.scrollTo($('#education'), 500); });
}
);

jQuery(function($){
    $.scrollTo(0);
    $('#link3').click(function(){ $.scrollTo($('#skill'), 500); });
}
);

jQuery(function($){
    $.scrollTo(0);
    $('#link4').click(function(){ $.scrollTo($('#github'), 500); });
}
);

jQuery(function($){
    $.scrollTo(0);
    $('#link-up').click(function(){ $.scrollTo($('#navigation'), 500); });
}
);

//pojawienie sie upa
$(window).scroll(function()
{
if($(this).scrollTop()>300) $(' .up-div').fadeIn();
else $(' .up-div').fadeOut();
}
);