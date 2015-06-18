
Simple Text:

AngularJS is a Single Page Application (or SPA) development framework and enables 
developers to rapidly develop complex and large applications with ease. 

AngularJS is built on the following philosophies-

1.  Data Driven Apps
2.  Declarative and Extensible
3.  Separation of Concerns
4.  Dependency Injection
5.  Test, Test and Test

Link:
http://google.com

Blockquotes:
> BlockQuotes


![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"



Code
  
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

```
function test() {
  console.log("notice the blank line before this function?");
}
```

    
    

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


Tables:

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


The advantages of this approach-
- its declarative, just looking at the code we can see its trying to create tabs with a date picker in it
- entire tabs functionality is encapsulated and contained in one place. Now you don't need to find and replace every time this tab's behaviour changes
- *directives* are also a way to extend the HTMLs capabilities with your own functional tags 


YouTube Video:

<a href="https://www.youtube.com/watch?v=Pc_KjZ-qTbQ" target="_blank">
<img src="http://img.youtube.com/vi/Pc_KjZ-qTbQ/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>



[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/Pc_KjZ-qTbQ/0.jpg)](http://www.youtube.com/watch?v=Pc_KjZ-qTbQ)


 
### Separation of Concerns
AngularJS adopts MVC pattern. The actual data (model), the user interface (view) and the business-logic to fetch data, validate data, store data(controller) are the building blocks of your application.
Clear separation of concerns allows a developer to intuitively know what needs to be changed without affecting the other parts. This allows for easy extensibility and maintenance of the application.

And to add to this, since we have individual M, V and Cs we can test them individually as a unit.

### Dependency Injection
AngularJS comes with a full-fledged Dependency Injection engine. Dependency Injection in AngularJS is used across all of its parts, from controllers and services to modules and tests. It allows you to easily write modular, reusable code so that you can use it cleanly and simply as needed.

### Test, Test and Test
AngularJS takes care of testability of each component. We can use Karma and Protractor to perform unit tests and end-to-end testing. So developers have no excuse for not writing tests for any of the components.


