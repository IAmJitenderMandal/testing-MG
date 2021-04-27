## jquery-tooltip-plugin

Basic jquery tooltip plugin.

# Installation
## Load the jQuery file, the plugin file, and the plugin stylesheet

```html
<head>
   <script src="https://code.jquery.com/jquery-3.2.1.js"></script>
   <script type="text/javascript" src="tooltip.js"></script>
   <link type="text/css" rel="stylesheet" href="tooltip.css"></link>
</head>
```


## Initialization and Usage
To use the plugin, simply add the title attribute in your HTML to the element you want to add the tooltip.
```html
<p class="paragraph" title="Tooltips Are Fun!">Hover Over Me!</p>
```
Then, initialize the tooltip in your javascript code.

```javascript
$(function()
{
  $('.paragraph').tooltip(options);
});

```

## Options
background
backgroundColor
border
borderRadius
color
fontFamily
font-size
padding
textTransform
transition
textAlign

## Option Example Uses
```javascript
$(function()
{
  //Default Style
  $('h1').tooltip();

  //Orange gradient background with black borders and a box shadow
  $('h2').tooltip({
    'background':'linear-gradient(#994500,orange)',
    'borderBottom':'2px solid black',
    'borderRight':'2px solid black',
    'boxShadow':'2px 2px 7px #555'
  });

  //Slow tooltip
  $('h3').tooltip({
    'backgroundColor':'blue',
    'padding':'15px',
    'transition':'all 0.1s ease',
  });

  $('h4').tooltip({
    'backgroundColor':'pink'
  });
});

```

Link to the demo - https://pkellz.github.io/pk/tooltip-demo/
