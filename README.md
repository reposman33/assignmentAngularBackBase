# AssignmentAngularBackbase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## About the BackBase assignment

Created in `Angular 6.1` and `Twitter Bootstrap 4`. Data from Open Weather Map is retrieved using the `Angular HTTPClient`. A search for city icons on the web yielded the current icons, hence the choice for east-European and cold scandinavian cities :). I opted for a non-sleek interface using big, in-your-face visuals. The working should be obvious to the user, without resorting to textual explanations.

A few points regarding the `architecture`: I used 2 components, a parent component (`app.component`) and a child component (`city.component`). The child component contains the cityicon and the behaviour for retrieving data from the OWM data endpoints. Since the child retrieves the data and the response must be displayed in the parent's template, the data had somehow to be 'transfered' to the parent component. This inter-component communication is done using the `Subject` class of the `Angular rxjs` library. This Subject is implemented in a service (`communicator.service`) that handles the broadcasting of data via the Subject's next() method and offers a means to receive data via the Observables subscribe() method. The child component ('city.component') broadcasts the http response by implicitly calling next() on the service. The parent component (app.component) receives the data by subscribing to the observable exposed by the service. Http requests and related logic is encapsulated in a service (`weatherApi`). The parent template contains a little conditional logic to show / hide text depending on the user's behaviour: hovering over a city icon and thus initialising a variable with the name of the city.

&copy; 2018 Marc Bakker