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
    - **Wildcard Route**: A route that matches any URL that doesn't match any of the defined routes, often used for displaying a "Page Not Found" component.

# 3. Control Flow Statements
    Control flow statements in Angular templates allow you to conditionally render elements or iterate over collections using directives. 

    - **@if**: Used to conditionally render elements based on a boolean expression.
    - **@for**: Used to iterate over a collection and render elements for each item

# 4. Directives (Standalone Components)
    Directives are classes that add behavior to elements in your Angular templates. There are three types of directives:

    - **Component Directives**: These are the most common type of directive, which define a component with its own template and behavior.
    - **Structural Directives**: These directives change the structure of the DOM by adding or removing elements. Examples include `*ngIf` and `*ngFor`. It is removed in new versions of Angular and replaced with `@if` and `@for` control flow statements.
    - **Attribute Directives**: These directives change the appearance or behavior of an element. Examples include `ngClass` and `ngStyle`.

# 5. Template Forms 
    Template-driven forms are a way to create forms in Angular using directives in the template. They are suitable for simple forms and rely on two-way data binding.

    - **Form Controls**: These are the individual input elements in a form, such as text inputs, checkboxes, and radio buttons.
    - **Form Groups**: These are collections of form controls that can be managed together.
    - **Validation**: Angular provides built-in validators for common validation tasks, such as required fields and email format.

# 6. Reactive Forms
    Reactive forms are a more powerful and flexible way to create forms in Angular using the `FormBuilder` service and reactive programming techniques. They are suitable for complex forms and provide more control over form validation and state management.

    - **Form Controls**: Similar to template-driven forms, these are the individual input elements in a form.
    - **Form Groups**: Collections of form controls that can be managed together, allowing for nested structures.
    - **Form Arrays**: Collections of form controls or form groups that can be dynamically added or removed.
    - **Validation**: Reactive forms allow for custom validators and asynchronous validation, providing more flexibility in handling complex validation scenarios.

## Note: Difference between Template-driven and Reactive Forms
    - Template-driven forms are simpler to set up and use, making them suitable for basic forms. They rely on directives in the template and two-way data binding.
    - Reactive forms provide more control and flexibility, making them suitable for complex forms. They use the `FormBuilder` service and reactive programming techniques, allowing for custom validation and dynamic form structures.

# 7. Signal
    What is Signal?
    