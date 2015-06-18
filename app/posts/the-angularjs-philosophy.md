

AngularJS is a Single Page Application (or SPA) development framework and enables 
developers to rapidly develop complex and large applications with ease. 

AngularJS is built on the following philosophies-

1.  Data Driven Apps
2.  Declarative and Extensible
3.  Separation of Concerns
4.  Dependency Injection
5.  Test, Test and Test


### Data Driven Apps
In traditional Web Apps, we need to send/receive data through AJAX calls, identify the UI elements, update the UI elements. 
There is a lot of boilerplate code we need to write.

AngularJS's core feature - data-binding can save several lines of code. Data-Binding allows us to bind data to HTML and it automatically takes
 care of updating the UI whenever the data changes.
  
eg.

    Hello <span>{{ name }}</span>
    

The above HTML snippet ensures that anytime the `name` value changes, the UI reflects the change.

With such data-binding features, developers can focus more on writing the core business logic instead of writing boilerplate code to funnel data
between UI and model. 

*Change the model and let Angular update the UI.*


### Declarative and Extensible
AngularJS promotes *declarative paradigm*. This essentially means AngularJS expects you to extend HTMLs tag and attributes based vocabulary
in a more meaningful and encapsulated way. You achieve this declarative paradigm using Angular **directives**

In terms of code - 

    <ul class="nav nav-tabs">
      <li>Home</li>
      <li class="selected">Profile</li>
    </ul>
    
    <div class="tab1">
        Some content here
    </div>
    <div class="tab2">
        <input id="startDate" type="text"/>
    </div>
    
    

The above code snippet (which represents navigational tabs) can be converted into :


    <tabs>
      <tab title="Home">Some content here</tab>
      <tab title="Profile">
        <input type="text"
               datepicker
               ng-model="startDate"/>
      </tab>
    </tabs>



`<tabs>` and `datepicker` being the new directive that a developer can build out.

The advantages of this approach-
- its declarative, just looking at the code we can see its trying to create tabs with a date picker in it
- entire tabs functionality is encapsulated and contained in one place. Now you don't need to find and replace every time this tab's behaviour changes
- *directives* are also a way to extend the HTMLs capabilities with your own functional tags 
 
### Separation of Concerns
AngularJS adopts MVC pattern. The actual data (model), the user interface (view) and the business-logic to fetch data, validate data, store data(controller) are the building blocks of your application.
Clear separation of concerns allows a developer to intuitively know what needs to be changed without affecting the other parts. This allows for easy extensibility and maintenance of the application.

And to add to this, since we have individual M, V and Cs we can test them individually as a unit.

### Dependency Injection
AngularJS comes with a full-fledged Dependency Injection engine. Dependency Injection in AngularJS is used across all of its parts, from controllers and services to modules and tests. It allows you to easily write modular, reusable code so that you can use it cleanly and simply as needed.

### Test, Test and Test
AngularJS takes care of testability of each component. We can use Karma and Protractor to perform unit tests and end-to-end testing. So developers have no excuse for not writing tests for any of the components.


