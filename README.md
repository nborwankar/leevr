# What is Leevr

Leevr is an Archimidean Lever to overturn the Internet.  Or more precisely to help revert the structure of Internet interactions so that the individual user has more power, again.  This has been lost IMHO with all the privacy viloating use of the Internet.  Engineers and hackers created the Internet but the HTTP protocol has been polluted by highly intrusive use of cookies and other client side user tracking technologies, and HTMl has also been polluted by use of tracking pixels and similar technologies.  Individuals feel powerless sometimes to know what is being tracked about them and how?
The first step is to track the trackers, just shine some sunlight on this "dark side of the Internet" just so we all can see what is going on on our own private property, our computing devices.

Sounds awesome but how are you going to do that, you ask? Simple. Client side HTTP-proxying (via node.js in this case but you can use what you want) 

## What? How?  

      Browser <----> Client-side HTTP Proxy running on desktop/laptop <----> /\/ <----> WWW.SOMEWEBSITE.COM

## How to use

### Run Leevr on your desktop/laptop (say on port 5000) - watch the console you run it from 
### Set your browser's proxy setting to localhost:5000 or 127.0.0.1:5000 (note on MacOSX you can do this for the whole machine not just one browser, all with one setting in Networks)
### Browse as usual and watch all the traffic fly by in the console.
### Especially interesting watching the browser make periodic requests and send stuff when you are not even at the keyboard.
### Right now Leevr is useful to node hackers and fairly technical folks, this is not a consumer product.

## Why do we need this?

I want to see what is being tracked about me and my machine and browsing patterns.  I need it.  If you do please use it extend it do whatever you want with it. If you don't want to see or know what's being tracked about you probably don't know it.

## What next?

   # save the browsing history in a database and run some reports on it - see which sites are doing what
   # get some mobile hackers to do similar things on the phone via Leevr on a wi-fi network
   # ditto but getting this to work on wireless browsing  (doesn't have to be node.js but does have to be an http+some other protocol proxy) this last step is way beyond my capabilities but I'm sure some one will pick this up and run with it.

## How do I participate?

   # Run Leevr and start overturning the Internet
   # Join the Leevr list http://groups.google.com/leevr
   # Fork leevr on github - send me pull requests or not either is fine - run with it
   # Work for increasing individual privacy protections on the Internet
   # Don't make the situation worse by creating software that tracks people without their knowledge 
   # Have fun.  Leevr is meant to be a fun joyfully freeing and exhilarating experience.