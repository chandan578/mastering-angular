# Basic Concepts in Angular

# 1. Data Binding (Standalone Components)
### Interpolation:
    Interpolation allows you to display dynamic data in your templates using double curly braces `{{ }}`.

### 2. Property Binding:
    Property binding allows you to bind the value of a property in your component to an HTML element's property using square brackets `[ ]`.

### 3. Event Binding:
    Event binding allows you to listen for events (like clicks) and call methods in your component using parentheses `( )`.

## Note: 
    Interpolation and property binding are one-way data binding Typescript to HTML, while event binding is one-way data binding HTML to Typescript.

## Two-way Data Binding:
    Two-way data binding allows you to bind a property in your component to an HTML element and listen for changes in both directions using the `[(ngModel)]` syntax.