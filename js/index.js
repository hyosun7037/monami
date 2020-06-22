$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

 $(document).ready(function(){
   $(".drop").mouseover(function(){
     $(".dropmenu").slideDown("slow");
   });
 });

 $(document).ready(function(){
   $(".drop").mouseleave(function(){
     $(".dropmenu").slideUp("slow");
   });
 });
 