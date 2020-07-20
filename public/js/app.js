// for the hidden form in index.ejs 

$('.form').hide();
$('.show').on('click',function(){

$(this).siblings().toggle(); // form and button is in the same div , so they are siblings to each other , so this line means that it will toggle just the sibling for thissss button which is the form for just this elementttt

})
//////////////////////
// for the hidden form in result page 
//////////

$('.formmm').hide();
$('.showww').on('click',function(){

$(this).siblings().toggle();
})
//////////////////////
// for hidden form in details page 
////////////////////
$('.formdetail').hide();
$('.showdetail').on('click',function(){

$(this).siblings().toggle();
})