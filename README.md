Welcome!

this is a quickly hacked together CLI application to grab a bunch of fulfillment Id's from an array of order Id's

usage:

have node installed
plug your array into the index.js where indicated
plug your storename, api key and password into the fetch call

from command line: node index.js

now wait,   this is built to work around the 2 per second limit imposed by shopify,  so you'll see your console crawl through your array and log all the pairs

array[0] will be your order ID
array[1] will be your fulfillment id

any errors will be logged directly.

once you have your results,  cut and paste from your console to wherever you need your data.