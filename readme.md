### Vending machine app.

This is a simple vending machine application built with react on the front end, and a minimal .net 6 webAPI for the backend. 
React is not something I've used for the front end in the past, this is actually my first react app. There is very little on the way of styling for this application.
The webAPI is ver simple.  It exposes two methods one to get the products, and one to decrement the count of available products.  The products are maintained by an in memory repository.


To start the web api open a command window from the route folder and run the following two commands.
``` cmd
 cd vm.api
 dotnet run
```

To start the front end open a command window from the route folder and run the following two commands.
``` cmd
 cd vm.web
 npm start
```