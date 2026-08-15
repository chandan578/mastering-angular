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

**Angular 22** is the latest version of a modern, TypeScript-based framework for building dynamic web applications. It provides a complete solution for building scalable, maintainable, and efficient applications with powerful built-in features including standalone components, signals for reactive state, dependency injection, routing, forms handling, and reactive programming with RxJS.

### What's New in Angular 22?
- 🎯 **Standalone Components**: Default for new projects (no NgModules required)
- ⚡ **Signals**: Modern reactive state management with automatic optimization
- 🎨 **Control Flow Syntax**: New @if, @for, @switch, @defer syntax
- 🔧 **Functional APIs**: Guards, interceptors, and dependency injection without classes
- 📦 **Esbuild**: Faster builds and dev server
- 🔍 **Better DevTools**: Enhanced Angular DevTools experience
- 🚀 **Performance**: Improved change detection and bundling

### Why Angular 22?
- ✅ Full-featured, opinionated framework
- ✅ Strong typing with TypeScript
- ✅ Excellent tooling and CLI
- ✅ Built-in testing support
- ✅ Powerful dependency injection
- ✅ Reactive programming with Signals and RxJS
- ✅ Large ecosystem and community support
- ✅ Enterprise-grade features

---

## 📋 Prerequisites

Before starting with Angular 22, ensure you have:

1. **Node.js & npm** (v20 or higher required for Angular 22)
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

### Prerequisites Validation

Before starting with Angular 22:

1. **Node.js Version Check:**
   ```bash
   node --version  # Should be v20 or higher
   npm --version   # Should be v10 or higher
   ```

2. **Install Angular CLI:**
   ```bash
   npm install -g @angular/cli@latest
   ```

3. **Verify Installation:**
   ```bash
   ng version  # Should show Angular 22+
   ```

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
│   │   ├── components/        # Standalone components
│   │   ├── pages/             # Standalone page/route components
│   │   ├── services/          # Business logic services
│   │   ├── models/            # TypeScript interfaces/classes
│   │   ├── guards/            # Route guards (functional)
│   │   ├── interceptors/      # HTTP interceptors (functional)
│   │   ├── pipes/             # Standalone pipes
│   │   ├── directives/        # Standalone directives
│   │   ├── app.component.ts   # Root standalone component
│   │   ├── app.routes.ts      # Route definitions
│   │   └── app.config.ts      # Application configuration
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

### 1. Components (Standalone)

**Standalone Components** are the modern way in Angular 22. They eliminate the need for NgModules.

#### Creating a Standalone Component:

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule], // Import dependencies directly
  template: `<h1>Hello {{ name }}!</h1>`,
  styles: [`h1 { color: blue; }`]
})
export class HelloComponent {
  name = 'Angular 22';
}
```

#### Using Signals (Angular 16+):

Signals provide a powerful way to manage reactive state:

```typescript
import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Count: {{ count() }}</p>
    <p>Doubled: {{ doubledCount() }}</p>
    <button (click)="increment()">Increment</button>
  `
})
export class CounterComponent {
  count = signal(0);
  doubledCount = computed(() => this.count() * 2);

  increment() {
    this.count.update(val => val + 1);
  }
}
```

#### Component Lifecycle Hooks:

```typescript
import { Component, OnInit, OnDestroy, effect } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  template: ``
})
export class ExampleComponent implements OnInit, OnDestroy {
  ngOnInit() {
    // Called after component initialized
  }

  ngOnDestroy() {
    // Clean up resources
  }
}

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

### 3. Control Flow Syntax (New in Angular 17+)

Angular 22 introduces new built-in control flow with `@` syntax:

```html
<!-- New @if syntax -->
@if (condition) {
  <p>This shows if condition is true</p>
} @else if (otherCondition) {
  <p>Other condition is true</p>
} @else {
  <p>None of the conditions are true</p>
}

<!-- New @for syntax with better performance -->
@for (item of items; track item.id) {
  <li>{{ item.name }}</li>
} @empty {
  <p>No items available</p>
}

<!-- New @switch syntax -->
@switch (value) {
  @case ('A') { <p>Case A</p> }
  @case ('B') { <p>Case B</p> }
  @default { <p>Default case</p> }
}

<!-- Deferred loading with @defer -->
@defer (on interaction) {
  <app-heavy-component />
} @placeholder {
  <p>Click to load component</p>
}
```

#### Traditional Directives (Still Supported):

```html
<!-- NgIf - old syntax still works -->
<p *ngIf="condition">This shows if condition is true</p>

<!-- NgFor - old syntax still works -->
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>

<!-- NgClass -->
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">Classes</div>

<!-- NgStyle -->
<div [ngStyle]="{'color': textColor, 'fontSize': fontSize}">Styled Text</div>
```

### 4. Services and Dependency Injection

Services use the `providedIn: 'root'` pattern for tree-shakeable singleton services:

```typescript
import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Available throughout the app
})
export class UserService {
  private users = signal(['User 1', 'User 2', 'User 3']);
  
  getUsers() {
    return this.users.asReadonly();
  }
  
  addUser(name: string) {
    this.users.update(users => [...users, name]);
  }
}
```

Using a service in a standalone component:

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    @for (user of users(); track user) {
      <p>{{ user }}</p>
    }
  `
})
export class UserListComponent implements OnInit {
  private userService = inject(UserService);
  users = signal<string[]>([]);

  ngOnInit() {
    this.users.set(this.userService.getUsers());
  }
}
```

**Key Improvements:**
- Use `inject()` function instead of constructor injection (still supports both)
- Services with signals for reactive state
- No need for NgModule declarations

### 5. Standalone Applications

In Angular 22, you can bootstrap your app directly without NgModules:

```typescript
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
```

```typescript
// app.config.ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    // Add your services and providers here
  ]
};
```

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`
})
export class AppComponent {}
```

#### NgModules (Still Supported for Legacy Projects)

Modules organize related components, directives, and services:

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

### 1. Routing (Modern Approach with Standalone)

Navigation between pages using Angular Router with standalone components:

```typescript
// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: UserDetailComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard]
  },
  // Lazy loading with standalone components
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard]
  },
  { path: '**', component: NotFoundComponent }
];
```

#### Functional Route Guard (Angular 15+):

```typescript
// guards/auth.guard.ts
import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
```

Using routing in templates:

```html
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
  <a [routerLink]="['/user', userId]">User Detail</a>
</nav>

<router-outlet />
```

Accessing route parameters:

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { signal } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  template: `<p>User ID: {{ userId() }}</p>`
})
export class UserDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  userId = signal<string | null>(null);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId.set(params.get('id'));
    });
  }
}
```

### 2. Forms (Modern Standalone Approach)

#### Reactive Forms (Recommended for Angular 22):

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <input formControlName="email" placeholder="Email" />
      @if (loginForm.get('email')?.hasError('required')) {
        <span>Email is required</span>
      }

      <input formControlName="password" type="password" placeholder="Password" />
      
      <button [disabled]="loginForm.invalid">Login</button>
    </form>
  `
})
export class LoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  loginForm!: FormGroup;

  ngOnInit() {
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

#### Using Signals with Forms (Modern Approach):

```typescript
import { Component, signal, effect, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-signals',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: ``
})
export class FormSignalsComponent {
  private fb = inject(FormBuilder);
  formData = signal<any>(null);

  form = this.fb.group({
    name: [''],
    email: ['']
  });

  constructor() {
    // Watch form value changes
    effect(() => {
      this.formData.set(this.form.value);
    });
  }
}
```

#### Template-Driven Forms (Simpler but Less Powerful):

```html
<form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
  <input name="email" ngModel required email />
  <input name="password" ngModel type="password" required />
  <button [disabled]="loginForm.invalid">Login</button>
</form>
```

### 3. HTTP Communication (With Functional Interceptors)

Making API calls with HttpClient in standalone components:

```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = '/api';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }
}
```

Using in component with signals:

```typescript
import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, User } from '../services/api.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (loading()) {
      <p>Loading...</p>
    } @else if (error()) {
      <p>{{ error() }}</p>
    } @else {
      @for (user of users(); track user.id) {
        <div>{{ user.name }} - {{ user.email }}</div>
      }
    }
  `
})
export class UserListComponent implements OnInit {
  private apiService = inject(ApiService);

  users = signal<User[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit() {
    this.apiService.getUsers().subscribe({
      next: (data) => {
        this.users.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load users');
        this.loading.set(false);
      }
    });
  }
}
```

#### Functional HTTP Interceptors (Angular 15+):

```typescript
// interceptors/auth.interceptor.ts
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Add auth token
  const token = authService.getToken();
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        authService.logout();
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};

// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]
};
```

### 4. Input and Output Properties (With Signals)

Parent-child communication using inputs and outputs:

Parent component:
```typescript
import { Component, signal } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  template: `
    <h2>Message: {{ message() }}</h2>
    <app-child 
      [message]="message()"
      (sendMessage)="handleChildEvent($event)">
    </app-child>
  `
})
export class ParentComponent {
  message = signal('Hello from parent!');
  
  handleChildEvent(data: string) {
    console.log('Child said:', data);
    this.message.set(data);
  }
}
```

Child component:
```typescript
import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>{{ message() }}</p>
    <button (click)="sendToParent()">Send to Parent</button>
  `
})
export class ChildComponent {
  // Using new input() and output() functions (Angular 17+)
  message = input<string>('');
  sendMessage = output<string>();

  sendToParent() {
    this.sendMessage.emit('Hello from child!');
  }
}
```

**Traditional @Input/@Output (Still Supported):**

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-traditional-child',
  standalone: true,
  template: ``
})
export class TraditionalChildComponent {
  @Input() message: string = '';
  @Output() sendMessage = new EventEmitter<string>();

  sendToParent() {
    this.sendMessage.emit('Hello!');
  }
}
```

---

## ⚡ Advanced Concepts

### 1. Signals and Reactive State Management

Signals provide a modern reactive primitive for Angular 22:

```typescript
import { Component, signal, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Counter: {{ count() }}</h3>
    <h3>Doubled: {{ doubledCount() }}</h3>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  `
})
export class SignalsDemoComponent {
  // Create a writable signal
  count = signal(0);

  // Create a computed signal (read-only derived value)
  doubledCount = computed(() => this.count() * 2);

  constructor() {
    // Watch signal changes with effect
    effect(() => {
      console.log('Count changed to:', this.count());
    });
  }

  increment() {
    this.count.update(val => val + 1);
  }

  decrement() {
    this.count.set(this.count() - 1);
  }
}
```

**Key Benefits of Signals:**
- Automatic change detection optimization
- Fine-grained reactivity
- Eliminates subscription boilerplate
- Better performance than RxJS for UI state

### 2. RxJS and Observables

While signals are preferred for UI state, RxJS is still essential for async operations:

```typescript
import { Component, OnInit, signal, inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, filter, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rxjs-demo',
  standalone: true,
  imports: [CommonModule],
  template: ``
})
export class RxJsDemoComponent implements OnInit {
  private http = inject(HttpClient);
  private destroy$ = new Subject<void>();

  ngOnInit() {
    // Use RxJS for HTTP requests
    this.http.get<any[]>('/api/data')
      .pipe(
        map(items => items.filter(item => item.active)),
        takeUntil(this.destroy$)
      )
      .subscribe(filtered => console.log(filtered));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

**When to Use RxJS:**
- HTTP requests and async operations
- Complex async workflows
- Real-time data streams
- WebSocket communication

### 3. State Management (NgRx Example)

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

### 4. Route Guards (Functional Approach)

Protect routes with authentication/authorization:

```typescript
import { inject } from '@angular/core';
import { Router, CanActivateFn, RedirectCommand } from '@angular/router';
import { AuthService } from '../services/auth.service';

// Functional guard (Modern Angular 15+)
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }
  // Automatically redirect to login
  return new RedirectCommand(router.parseUrl('/login'));
};

// Role-based guard
export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  return authService.hasRole('admin');
};

// Usage in routes
export const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [adminGuard]
  },
  {
    path: 'user-profile',
    component: ProfileComponent,
    canActivate: [authGuard]
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

### 5. Custom Directives (Standalone)

Create reusable directive logic:

```typescript
import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  highlightColor = input<string>('yellow');

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }
}

// Usage in standalone component
@Component({
  selector: 'app-highlight-demo',
  standalone: true,
  imports: [HighlightDirective],
  template: `<p appHighlight [appHighlight]="'blue'">Hover me!</p>`
})
export class HighlightDemoComponent {}
```

### 6. Custom Pipes (Standalone)

Transform data in templates:

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber',
  standalone: true
})
export class PhoneNumberPipe implements PipeTransform {
  transform(value: string): string {
    if (!value || value.length < 10) return value;
    return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
  }
}

// Usage in standalone component
@Component({
  selector: 'app-phone-demo',
  standalone: true,
  imports: [PhoneNumberPipe],
  template: `<p>{{ '1234567890' | phoneNumber }}</p>`
})
export class PhoneDemoComponent {}
// Output: (123) 456-7890
```

### 7. Testing (Modern Approach)

#### Unit Testing with Jasmine (Standalone Components):

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    // Use standalone component directly
    await TestBed.configureTestingModule({
      imports: [MyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title with signals', () => {
    component.title.set('Test Title');
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Test Title');
  });

  it('should handle signal updates', () => {
    const count = component.count;
    count.update(val => val + 1);
    expect(count()).toBe(1);
  });
});
```

---

## ✅ Best Practices for Angular 22

1. **Use Standalone Components**
   - Default to standalone components
   - No NgModules unless required for legacy code
   - Simplifies code and reduces boilerplate
   
2. **Leverage Signals for State**
   - Use signals for UI state management
   - Use computed() for derived values
   - Use effect() for side effects
   - Better performance than observables for UI state

3. **Use Functional APIs**
   - Functional route guards instead of class-based
   - Functional HTTP interceptors
   - inject() instead of constructor injection
   - New control flow syntax (@if, @for, @switch)

4. **Component Design**
   - Keep components small and focused
   - Use input() and output() functions for props
   - Prefer composition over inheritance
   - Implement OnPush change detection

5. **Naming Conventions**
   - Components: `PascalCase` + `.component.ts`
   - Services: `PascalCase` + `.service.ts`
   - Files: kebab-case (e.g., `user-profile.component.ts`)

6. **Dependency Injection**
   - Use `providedIn: 'root'` for singleton services
   - Use inject() function for cleaner code
   - Provide services at appropriate level

7. **Reactive Forms**
   - Prefer reactive forms over template-driven
   - Use FormBuilder for cleaner syntax
   - Combine with signals for better state management

8. **Performance Optimization**
   - Use OnPush change detection strategy
   - Implement lazy loading with loadComponent
   - Use @defer for deferred loading
   - Use trackBy in @for loops
   - Implement proper unsubscribe patterns

9. **Security**
   - Always validate user inputs
   - Use Angular's built-in sanitization
   - Implement proper authentication/authorization
   - Use functional interceptors for token management

10. **Code Organization**
    - Group related components in feature folders
    - Separate concerns (components, services, models)
    - Use barrel exports (`index.ts`) for cleaner imports
    - Follow Angular style guide

11. **Error Handling**
    - Use error handlers in HTTP interceptors
    - Provide user-friendly error messages
    - Log errors properly for debugging

12. **Documentation**
    - Document complex logic with comments
    - Keep README updated
    - Add JSDoc comments to public methods

---

## 📖 Resources

### Official Documentation
- [Angular 22 Docs](https://angular.io/docs)
- [Angular CLI](https://angular.io/cli)
- [Angular Material](https://material.angular.io)
- [Standalone Components Guide](https://angular.io/guide/standalone-components)
- [Signals Overview](https://angular.io/guide/signals)
- [Control Flow Syntax](https://angular.io/guide/control-flow)

### Learning Resources
- [Angular Official Tutorial](https://angular.io/tutorial)
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
- [Storybook (Component Development)](https://storybook.js.org)

### Developer Tools
- [Angular DevTools Chrome Extension](https://angular.io/guide/devtools)
- [Redux DevTools for NgRx](https://github.com/ngrx/store-devtools)
- [VS Code Extensions](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)

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
ng new app-name                          # Create new app (standalone by default)
ng serve                                 # Start dev server
ng generate component comp-name          # Create component (standalone by default)
ng generate service service-name         # Create service
ng generate guard guards/auth-guard      # Create functional guard
ng generate pipe pipes/my-pipe           # Create pipe
ng generate directive directives/my-dir  # Create directive
ng build                                 # Production build
ng build --configuration production      # Build for production
ng test                                  # Run tests
ng lint                                  # Lint code
ng e2e                                   # End-to-end tests
```

### Key Angular 22 Features
- **Standalone Components**: Default component type
- **Signals**: Reactive state management
- **Control Flow Syntax**: @if, @for, @switch, @defer
- **Functional Interceptors**: Cleaner HTTP interceptors
- **Functional Guards**: Simpler route protection
- **input() & output()**: Modern prop definition
- **inject()**: Cleaner dependency injection
- **Esbuild**: Faster build and dev server

### Angular Versions
- Angular 22 (Latest)
- Angular 21
- Angular 20
- Angular 19
- Angular 18

---

## 🔄 Upgrading to Angular 22

### From Angular 17/18/19/20/21:

1. **Update Angular CLI:**
   ```bash
   npm install -g @angular/cli@latest
   ```

2. **Update your project:**
   ```bash
   ng update @angular/cli @angular/core
   ```

3. **Migrate to Standalone Components:**
   ```bash
   ng generate @angular/cdk:standalone
   ```

4. **Migrate to Signals (Optional but Recommended):**
   - Gradually convert component state to signals
   - Use computed() for derived values
   - Replace ngOnInit with constructor initialization

### Breaking Changes to Be Aware Of:
- Node.js 20+ is required
- NgModules are deprecated (but still supported)
- Some RxJS patterns may need updates
- Zone.js configuration changes

### New Features in Angular 22:
- ✨ Enhanced Signal APIs
- ✨ Improved standalone component support
- ✨ Better performance optimizations
- ✨ Enhanced developer tooling
- ✨ Improved testing utilities

---

Angular 22 represents the modern evolution of the Angular framework with standalone components, signals, and functional APIs becoming the standard. The framework has become more streamlined, performant, and developer-friendly.

### Learning Path for Angular 22:
1. **Start with Basics**: Components, templates, data binding
2. **Master Signals**: State management with signals
3. **Learn Routing**: Standalone routing with functional guards
4. **Explore Forms**: Reactive forms with signals
5. **Advanced Patterns**: RxJS, performance optimization, testing
6. **Build Projects**: The best way to solidify your knowledge

### Key Takeaways:
- ✅ Use standalone components by default
- ✅ Leverage signals for UI state
- ✅ Use functional APIs (guards, interceptors, inject)
- ✅ Implement OnPush change detection
- ✅ Follow Angular style guide and best practices
- ✅ Build real projects to master the concepts

Angular 22 is a powerful, modern framework that rewards developers who invest time in learning its concepts deeply. Start with the basics, practice with small projects, gradually move to intermediate topics, and finally master advanced patterns. Remember that **the best way to learn is by building projects**!

Happy coding! 🚀

