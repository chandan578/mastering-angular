# Basic Concepts in Angular

# 1. Data Binding (Standalone Components)
### Interpolation:
    Interpolation allows you to display dynamic data in your templates using double curly braces `{{ }}`.

### A. Property Binding:
    Property binding allows you to bind the value of a property in your component to an HTML element's property using square brackets `[ ]`.

### B. Event Binding:
    Event binding allows you to listen for events (like clicks) and call methods in your component using parentheses `( )`.

## Note: 
    Interpolation and property binding are one-way data binding Typescript to HTML, while event binding is one-way data binding HTML to Typescript.

## Two-way Data Binding:
    Two-way data binding allows you to bind a property in your component to an HTML element and listen for changes in both directions using the `[(ngModel)]` syntax.

# 2. Routing (Standalone Components)
    Routing allows you to navigate between different views or components in your Angular application. You can define routes in your `app.routes.ts` file and use the `<router-outlet>` directive in your templates to display the routed components.

### Types of Routes:
    - **Default Route**: The route that is loaded when the application starts.
    - **Parameterized Route**: A route that accepts parameters, allowing you to pass data to the routed component.
    -**Wildcard Route**: A route that matches any URL that doesn't match any of the defined routes, often used for displaying a "Page Not Found" component.

