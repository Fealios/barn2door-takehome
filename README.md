# Barn2door

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Starting
After downloading this project, run npm install at the root directory to retrieve all the Node Packages

## Development server
From the root directory run ng serve, then access a browser and navigate to localhost:4200

## Work Rundown
### Total Development Time: 6 hours
I consume the data supplied to me by dumping it into a typescript file, grabbing said data in an InMemoryDataService, which mimics a receiving data from a RESTful environment.  I call on said fake environment with my data.service from the main component, subscribe to it and flatten out the data into an object, then add said object onto the original data so as to not harm the integrity of said data.  I then query said data with an n2 complexity query method, which spits out the results with a pretty zoom animation onto the screen.  I utilize Sass, and a simple float to display the data in neat little cards with a small hover effect for user clarity.  NOTE: The radishes image is broken, I'm not sure if that was a known issue but I treated it as a fluke, instead of using a placeholder image.  

