
#About
**jQuery Bloomberg Carousel** is a plug-in to display information like the Bloomberg channel does. [Twitter's homepage](http://twitter.com) have something similar to display trending topics.

##Notes

This is a very simple plug-in with few options. I created it for a [specific job](http://imdepa.com.br/) so feel free to improve it ;)

##Behavior

The carousel animation never ends and always move on the same direction.

Take a look on [this example](http://demos.nicolasi.com.br/jquery.bloomberg_carousel/demo_bloomberg.html)

##Usage

    <div id="bloomberg_carousel">
      <ul>
        <li>Google <span>530.33 <span class="low">&darr;</span></span></li>
        <li>Dell Inc. <span>13.41 <span class="rising">&uarr;</span></span></li>
        <li>Intel <span>20.56 <span class="low">&darr;</span></span></li>
        <li>Microsoft <span>28.40 <span class="low">&darr;</span></span></li>
        <li>Eastman Kodak <span>5.79 <span class="rising">&uarr;</span></span></li>
      </ul>
    </div>

    $("bloomberg_carousel").bloombergCarousel({ margin: 75, max_width: 400 });

##Settings (parameters)

There is only two parameters to pass to the plug-in by now:

    $("bloomberg_carousel").bloombergCarousel({ 
      margin:75, // Margin (in px) between each item of the carousel
      max_width:400 // Carousel could not be wider (in px) than that value
    });
