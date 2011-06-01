# What is Leevr

Leevr is an [Archimedean Lever](http://www.goodreads.com/quotes/show/16830 "Give me a place to stand, and a lever long enough, and I will move the world")  to overturn the Internet.  

![Image of Archimedes and Lever](http://4.bp.blogspot.com/_3vg_LrxE41Q/TUKhjCk7P3I/AAAAAAAAAeA/ezxufpmOCNA/s1600/Archimedes+lever.jpg)

Or more precisely to help revert the structure of Internet interactions so that the individual user has more power, again.  This has been lost IMHO with all the privacy violating use of the Internet. The HTTP protocol has been polluted by highly intrusive use of cookies and other client side user tracking technologies, and HTML has also been polluted by use of tracking pixels and similar technologies.  Individuals feel powerless to know what is being tracked about them and how.

Engineers and hackers created the Internet - engineers and hackers can claim it back.
The first step is to track the trackers, to shine some sunlight on this "dark side of the Internet" just so we can all see what is going on on our own private property, our computing devices.

"Sounds awesome but how are you going to do that", you ask? 

Simple. Client side HTTP-proxying (via node.js in this case but you can use what you want) 

## What? What?? What??? How?  

      Browser <----> Client-side HTTP Proxy running on desktop/laptop <----> /\/ Internets /\/ <----> WWW.SOMEWEBSITE.COM

## How to use

* Run Leevr on your desktop/laptop (say on port 5000) - watch the console from which you run it. 
* Set your browser's proxy setting to localhost:5000 or 127.0.0.1:5000 (note on most OS's you can do this for the whole machine not just one browser, all with one setting in your system network config.)
* Browse as usual and watch all the traffic fly by in the console.
* It's especially interesting to watch the browser make periodic requests and send stuff when you are not even at the keyboard.
* Save console output after processing, to CouchDB, Redis, Mongo or even MySQL
* Right now Leevr is useful to node hackers and fairly technical folks, this is not a consumer product.

## Why do we need this?

I want to see what is being tracked about me and my machine and browsing patterns.  I need it.  If you do please use it extend it do whatever you want with it. If you don't want to see or know what's being tracked about you, then you probably don't need it.
Right now Leevr is useful to node hackers and fairly technical folks, this is not a consumer product.  So even if you need it, it may not be immediately usable if you don't fit the description.  I expect/hope this will change fairly rapidly as the idea spreads.

## How do I participate?

* Run Leevr and start overturning the Internet.
* Join the Leevr list http://groups.google.com/leevr .
* Fork leevr on github - send me pull requests or not either is fine - run with it.  This is not my day job or even my second job, so I may be tardy in responding to pull requests. Proactive apologies.
* Work for increasing individual privacy protections on the Internet.
* Don't make the situation worse by creating software that tracks people without their knowledge. 
* Have fun.  Leevr is meant to be a fun, joyfully freeing and exhilarating experience.

## What next?

* I want to write code to save the browsing history in a database and run some reports on it - see which sites are doing what
* I'd like to invite some mobile hackers to do similar things on the phone via Leevr on a wi-fi network
* Ditto but getting this to work during wireless browsing i.e HTTP over cell phone protocols not wi-fi. Doesn't have to be node.js but does have to be an http + some other protocol proxy. This last step is way beyond my capabilities but I'm hoping some one will pick this up and run with it.

#### Credits

Leevr is almost entirely based on code from nodejs-proxy by Peteris Krumins (peter@catonmat.net)  http://www.catonmat.net  
I fixed a couple of bugs and stripped out a whole bunch of stuff based on white list and black lists, which may need to be put back in later in database formats.
I had been looking for something like this for a long, long time. Nodejs-proxy and node.js made the Leevr project possible. 
So a huge thanks to Peteris and also to the awesome Ryan Dahl.

