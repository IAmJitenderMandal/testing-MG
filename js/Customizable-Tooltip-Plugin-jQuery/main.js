$(function()
{
  //Default Style
  $('h1').tooltip({
    speed:'fast',
    animation:'transX'
  });

  $('h2').tooltip({
    animation:'transX',
    speed:'slow',
    background:'linear-gradient(#772300,orange)',
    borderBottom:'2px solid black',
    borderRight:'2px solid black',
    boxShadow:'2px 2px 7px #555'
  });

  $('h3').tooltip({
    backgroundColor:'#78a',
    padding:'15px',
    transition:'all 0.1s ease',
  });

  $('h4').tooltip({
    backgroundColor:'pink'
  });
});
