# Angular: Complete Guide from Basic to Advanced

## 📚 Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Basic Concepts](#basic-concepts)
- [Intermediate Concepts](#intermediate-concepts)
- [Advanced Concepts](#advanced-concepts)
- [Best Practices](#best-practices)
- [Resources](#resources)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Introduction

**Angular** is a modern, TypeScript-based framework for building dynamic web applications. It provides a complete solution for building scalable, maintainable, and efficient applications with powerful built-in features like dependency injection, routing, forms handling, and reactive programming.

### Why Angular?
- ✅ Full-featured framework
- ✅ Strong typing with TypeScript
- ✅ Excellent tooling and CLI
- ✅ Built-in testing support
- ✅ Powerful dependency injection
- ✅ Reactive programming with RxJS
- ✅ Large ecosystem and community support

---

## 📋 Prerequisites

Before starting with Angular, ensure you have:

1. **Node.js & npm** (v18 or higher recommended)
   - Download from [nodejs.org](https://nodejs.org)
   - Verify installation: `node --version` and `npm --version`

2. **TypeScript Knowledge**
   - Basic understanding of TypeScript syntax
   - Familiarity with classes, interfaces, and decorators

3. **HTML & CSS**
   - Solid understanding of HTML structure
   - CSS fundamentals and layouts

4. **JavaScript ES6+**
   - Arrow functions, let/const, destructuring
   - Promises and async/await
   - Spread operator and template literals

5. **Text Editor**
   - Visual Studio Code (recommended)
   - Install Angular Language Service extension

---

## 🚀 Getting Started

### Installation

1. **Install Angular CLI globally:**
   ```bash
   npm install -g @angular/cli
   ```

2. **Create a new Angular project:**
   ```bash
   ng new my-angular-app
   cd my-angular-app
   ```

3. **Serve the application:**
   ```bash
   ng serve
   # or
   ng serve --open  # Opens in default browser
   ```

4. **Access the application:**
   - Navigate to `http://localhost:4200`

### Project Generation Commands

```bash
# Create new component
ng generate component components/my-component

# Create new service
ng generate service services/my-service

# Create new module
ng generate module modules/my-module

# Create new directive
ng generate directive directives/my-directive

# Create new pipe
ng generate pipe pipes/my-pipe

# Create new guard
ng generate guard guards/auth-guard

# Create new interceptor
ng generate interceptor interceptors/http-interceptor
```

---

## 📁 Project Structure

```
my-angular-app/
├── src/
│   ├── app/
│   │   ├── components/        # Reusable components
│   │   ├── pages/             # Page/route components
│   │   ├── services/          # Business logic services
│   │   ├── models/            # TypeScript interfaces/classes
│   │   ├── guards/            # Route guards
│   │   ├── interceptors/      # HTTP interceptors
│   │   ├── pipes/             # Custom pipes
│   │   ├── directives/        # Custom directives
│   │   ├── app.component.*    # Root component
│   │   └── app.module.ts      # Root module
│   ├── assets/                # Static files
│   ├── styles/                # Global styles
│   ├── index.html             # Main HTML file
│   ├── main.ts                # Application entry point
│   └── styles.css             # Global styles
├── angular.json               # Angular configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies
└── README.md                  # Documentation
```

---

## 🔷 Basic Concepts

### 1. Components

Components are the building blocks of Angular applications. Each component consists of:
- **Template** (HTML)
- **Class** (TypeScript logic)
- **Styles** (CSS)
- **Metadata** (Decorators)

#### Creating a Component:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Hello {{ name }}!</h1>`,
  styles: [`h1 { color: blue; }`]
})
export class HelloComponent {
  name = 'Angular';
}
```

#### Component Lifecycle Hooks:

```typescript
export class MyComponent implements OnInit, OnDestroy {
  ngOnInit() {
    // Called after component initialized
    // Perfect for loading data
  }

  ngOnDestroy() {
    // Called before component destroyed
    // Clean up subscriptions and resources
  }

  ngAfterViewInit() {
    // Called after view initialized
  }

  ngOnChanges(changes: SimpleChanges) {
    // Called when input properties change
  }
}
```

### 2. Templates and Data Binding

#### Interpolation:
```html
<p>{{ message }}</p>
<p>{{ 2 + 2 }}</p>
```

#### Property Binding:
```html
<img [src]="imageUrl" />
<button [disabled]="isDisabled">Click me</button>
```

#### Event Binding:
```html
<button (click)="handleClick()">Click</button>
<input (keyup)="handleKeyup($event)" />
```

#### Two-Way Binding:
```html
<input [(ngModel)]="username" />
<p>Username: {{ username }}</p>
```

#### Class and Style Binding:
```html
<div [class.active]="isActive">Active</div>
<div [style.color]="textColor">Colored Text</div>
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">Classes</div>
```

### 3. Directives

#### Structural Directives:
```html
<!-- NgIf -->
<p *ngIf="condition">This shows if condition is true</p>

<!-- NgFor -->
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>

<!-- NgSwitch -->
<div [ngSwitch]="value">
  <p *ngSwitchCase="'A'">Case A</p>
  <p *ngSwitchCase="'B'">Case B</p>
  <p *ngSwitchDefault>Default</p>
</div>
```

#### Attribute Directives:
```html
<!-- NgClass -->
<div [ngClass]="classesObject">Dynamic Classes</div>

<!-- NgStyle -->
<div [ngStyle]="stylesObject">Dynamic Styles</div>

<!-- NgModel -->
<input [(ngModel)]="name" />
```

### 4. Services and Dependency Injection

Services are used for sharing data and logic across components.

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Available throughout the app
})
export class UserService {
  getUsers() {
    return ['User 1', 'User 2', 'User 3'];
  }
}
```

Using a service:
```typescript
export class UserListComponent implements OnInit {
  users: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
```

### 5. Modules

Modules organize related components, directives, and services.

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from './my.component';

@NgModule({
  declarations: [MyComponent],
  imports: [CommonModule],
  exports: [MyComponent]
})
export class MyModule {}
```

---

## 🎓 Intermediate Concepts

### 1. Routing

Navigation between pages using Angular Router.

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: '**', component: NotFoundComponent } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

Using routing in templates:
```html
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
  <a [routerLink]="['/user', userId]">User Detail</a>
</nav>

<router-outlet></router-outlet>
```

Accessing route parameters:
```typescript
export class UserDetailComponent implements OnInit {
  userId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
```

### 2. Forms

#### Reactive Forms (Recommended):

```typescript
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
```

Template:
```html
<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
  <input formControlName="email" />
  <span *ngIf="loginForm.get('email')?.hasError('required')">
    Email is required
  </span>

  <input formControlName="password" type="password" />
  
  <button [disabled]="loginForm.invalid">Login</button>
</form>
```

#### Template-Driven Forms:

```html
<form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
  <input name="email" ngModel required />
  <input name="password" ngModel type="password" required />
  <button>Login</button>
</form>
```

### 3. HTTP Communication

Making API calls with HttpClient:

```typescript
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`/api/users/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('/api/users', user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`/api/users/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`/api/users/${id}`);
  }
}
```

Using in component:
```typescript
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading = true;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load users';
        this.loading = false;
      }
    });
  }
}
```

### 4. Input and Output Properties

Parent-child communication:

Parent component:
```typescript
export class ParentComponent {
  message = 'Hello from parent!';
  
  handleChildEvent(data: string) {
    console.log('Child said:', data);
  }
}
```

Parent template:
```html
<app-child 
  [message]="message"
  (sendMessage)="handleChildEvent($event)">
</app-child>
```

Child component:
```typescript
export class ChildComponent {
  @Input() message: string = '';
  @Output() sendMessage = new EventEmitter<string>();

  sendToParent() {
    this.sendMessage.emit('Hello from child!');
  }
}
```

---

## ⚡ Advanced Concepts

### 1. RxJS and Reactive Programming

Observable creation and operators:

```typescript
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map, filter, switchMap, takeUntil } from 'rxjs/operators';

// Create observable
const numbers$ = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.complete();
});

// Using operators
numbers$.pipe(
  map(num => num * 2),
  filter(num => num > 2)
).subscribe(value => console.log(value));

// Subject - multicast observable
const subject = new Subject<string>();
subject.subscribe(val => console.log('Observer 1:', val));
subject.subscribe(val => console.log('Observer 2:', val));
subject.next('Hello');

// BehaviorSubject - remembers last value
const state$ = new BehaviorSubject<string>('initial');
state$.next('updated');
state$.subscribe(val => console.log(val)); // Logs 'updated'
```

### 2. State Management (NgRx Example)

Using NgRx for centralized state management:

```typescript
// actions.ts
import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);
export const loadUsersError = createAction(
  '[User] Load Users Error',
  props<{ error: string }>()
);

// reducer.ts
import { createReducer, on } from '@ngrx/store';

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, state => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false
  })),
  on(loadUsersError, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);

// effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.apiService.getUsers().pipe(
          map(users => loadUsersSuccess({ users })),
          catchError(error => [loadUsersError({ error })])
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}

// selector.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectUserState = createFeatureSelector<UserState>('user');
export const selectUsers = createSelector(
  selectUserState,
  state => state.users
);
```

### 3. HTTP Interceptors

Add headers and handle errors globally:

```typescript
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Add auth token to headers
    const token = this.authService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.authService.logout();
        }
        return throwError(() => error);
      })
    );
  }
}

// Register in app.module.ts
@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
```

### 4. Route Guards

Protect routes with authentication/authorization:

```typescript
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

// app-routing.module.ts
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  }
];
```

### 5. Performance Optimization

#### OnPush Change Detection:
```typescript
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-efficient',
  template: `<div>{{ data }}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EfficientComponent {
  @Input() data: string = '';
}
```

#### Lazy Loading:
```typescript
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];
```

#### Unsubscribe Pattern:
```typescript
export class Component implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(private service: Service) {}

  ngOnInit() {
    this.service.data$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => console.log(data));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

### 6. Custom Directives

Create reusable directive logic:

```typescript
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highlightColor = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }
}

// Usage
<p appHighlight [highlightColor]="'blue'">Hover me!</p>
```

### 7. Custom Pipes

Transform data in templates:

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
  }
}

// Usage
{{ '1234567890' | phoneNumber }} <!-- (123) 456-7890 -->
```

### 8. Testing

#### Unit Testing with Jasmine:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Test Title');
  });
});
```

---

## ✅ Best Practices

1. **Component Design**
   - Keep components small and focused
   - Use smart (container) and dumb (presentational) components
   - Prefer composition over inheritance

2. **Naming Conventions**
   - Components: `PascalCase` + `.component.ts`
   - Services: `PascalCase` + `.service.ts`
   - Modules: `PascalCase` + `.module.ts`
   - Files: kebab-case (e.g., `user-profile.component.ts`)

3. **Dependency Injection**
   - Use constructor injection
   - Always provide services at the appropriate level
   - Use `providedIn: 'root'` for singleton services

4. **RxJS Best Practices**
   - Always unsubscribe or use `takeUntil`
   - Use async pipe in templates when possible
   - Prefer `switchMap` over nested subscriptions

5. **Change Detection**
   - Use `OnPush` strategy when possible
   - Avoid heavy computations in templates
   - Use `trackBy` in `*ngFor` loops

6. **Security**
   - Always validate user inputs
   - Use Angular's built-in sanitization
   - Implement proper authentication/authorization
   - Protect sensitive data (use interceptors for tokens)

7. **Code Organization**
   - Group related components in feature modules
   - Separate concerns (components, services, models)
   - Use barrel exports (`index.ts`) for cleaner imports

8. **Performance**
   - Implement lazy loading for routes
   - Use `async` pipe instead of manual subscriptions
   - Optimize change detection strategy
   - Tree-shake unused code

9. **Error Handling**
   - Use error handlers in HTTP interceptors
   - Provide user-friendly error messages
   - Log errors for debugging

10. **Documentation**
    - Document complex logic
    - Add JSDoc comments to public methods
    - Keep README updated

---

## 📖 Resources

### Official Documentation
- [Angular Docs](https://angular.io/docs)
- [Angular CLI](https://angular.io/cli)
- [Angular Material](https://material.angular.io)

### Learning Resources
- [Angular University](https://angular-university.io)
- [Udemy Angular Course](https://www.udemy.com/course/the-complete-guide-to-angular-2/)
- [YouTube Angular Tutorials](https://www.youtube.com/results?search_query=angular+tutorial)

### Libraries & Tools
- [RxJS](https://rxjs.dev)
- [NgRx](https://ngrx.io)
- [Angular Material](https://material.angular.io)
- [Bootstrap for Angular](https://ng-bootstrap.github.io)
- [Tailwind CSS](https://tailwindcss.com)
- [Ionic (Mobile Apps)](https://ionicframework.com)

### Developer Tools
- [Angular DevTools Chrome Extension](https://angular.io/guide/devtools)
- [Redux DevTools for NgRx](https://github.com/ngrx/store-devtools)

---

## 🔧 Troubleshooting

### Common Issues and Solutions

**Issue: Module not found error**
```bash
# Solution: Install dependencies
npm install
```

**Issue: Port 4200 already in use**
```bash
# Solution: Use different port
ng serve --port 4300
```

**Issue: Changes not reflected**
```bash
# Solution: Stop and restart the server
# Kill the process and run ng serve again
```

**Issue: Build size too large**
```bash
# Solution: Check bundle size
ng build --stats-json
npx webpack-bundle-analyzer dist/*/stats.json
```

**Issue: Circular dependency error**
```
Solution: Reorganize module structure
- Move shared logic to a dedicated module
- Use barrel exports correctly
- Check for circular imports
```

**Issue: Change detection not working**
```
Solution:
- Check if ngOnInit is implemented
- Verify @Input/@Output decorators
- Review change detection strategy
- Use async pipe in templates
```

**Issue: Memory leak with subscriptions**
```typescript
// Solution: Always unsubscribe
private destroy$ = new Subject<void>();

ngOnInit() {
  this.service.data$
    .pipe(takeUntil(this.destroy$))
    .subscribe(...);
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
```

---

## 📝 Quick Reference

### Common Commands
```bash
ng new app-name                    # Create new app
ng serve                           # Start dev server
ng generate component comp-name    # Create component
ng generate service service-name   # Create service
ng build                           # Production build
ng test                            # Run tests
ng lint                            # Lint code
ng e2e                             # End-to-end tests
```

### Angular Versions
- Angular 17+ (Latest)
- Angular 16
- Angular 15
- Angular 14
- Angular 13

---

## 🎉 Conclusion

Angular is a powerful framework that rewards developers who invest time in learning its concepts deeply. Start with the basics, practice with small projects, gradually move to intermediate topics, and finally master advanced patterns. Remember that the best way to learn is by **building projects**!

Happy coding! 🚀

