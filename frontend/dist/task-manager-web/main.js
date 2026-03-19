"use strict";
(self["webpackChunktask_manager_web"] = self["webpackChunktask_manager_web"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 205);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/register/register.component */ 3997);
/* harmony import */ var _components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/task-list/task-list.component */ 8109);
/* harmony import */ var _components_task_create_task_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/task-create/task-create.component */ 5041);
/* harmony import */ var _components_task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/task-edit/task-edit.component */ 6861);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);
/* harmony import */ var _guards_no_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/no-auth.guard */ 1934);
/* harmony import */ var _guards_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/unsaved-changes.guard */ 100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);











const routes = [{
  path: 'auth',
  canActivate: [_guards_no_auth_guard__WEBPACK_IMPORTED_MODULE_6__.NoAuthGuard],
  children: [{
    path: 'login',
    component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
  }, {
    path: 'signup',
    component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
  }, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }]
}, {
  path: 'tasks',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
  children: [{
    path: '',
    component: _components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_2__.TaskListComponent
  }, {
    path: 'create',
    component: _components_task_create_task_create_component__WEBPACK_IMPORTED_MODULE_3__.TaskCreateComponent,
    canDeactivate: [_guards_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_7__.UnsavedChangesGuard]
  }, {
    path: ':id/edit',
    component: _components_task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_4__.TaskEditComponent,
    canDeactivate: [_guards_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_7__.UnsavedChangesGuard]
  }]
}, {
  path: '',
  redirectTo: 'tasks',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'tasks'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class AppComponent {
  constructor() {
    this.title = 'task-manager-web';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUFBO0FBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcCBDb21wb25lbnQgU3R5bGVzICovXG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 205);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ 3997);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ 9339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);










class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
        useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__.JwtInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule]
  });
})();

/***/ }),

/***/ 205:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);






function LoginComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function LoginComponent_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username must be at least 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_Conditional_13_Conditional_1_Template, 2, 0, "span")(2, LoginComponent_Conditional_13_Conditional_2_Template, 2, 0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ctx_r0.f["username"].errors["required"] ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, ctx_r0.f["username"].errors["minlength"] ? 2 : -1);
  }
}
function LoginComponent_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_Conditional_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must be at least 8 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_Conditional_21_Conditional_1_Template, 2, 0, "span")(2, LoginComponent_Conditional_21_Conditional_2_Template, 2, 0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ctx_r0.f["password"].errors["required"] ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, ctx_r0.f["password"].errors["minlength"] ? 2 : -1);
  }
}
function LoginComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Signing in... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class LoginComponent {
  constructor() {
    this.loading = false;
    this.submitted = false;
    this.error = null;
    this.showPassword = false;
    this.formBuilder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
  }
  ngOnInit() {
    // Redirect to dashboard if already logged in
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/tasks']);
    }
    this.initializeForm();
  }
  initializeForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3)]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(8)]]
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.error = null;
    // Stop if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    const authRequest = {
      username: this.f['username'].value,
      password: this.f['password'].value
    };
    this.authService.login(authRequest).subscribe({
      next: response => {
        console.log('Login successful:', response);
        this.loading = false;
        this.router.navigate(['/tasks']);
      },
      error: error => {
        console.error('Login failed:', error);
        this.error = error.message || 'Login failed. Please check your credentials.';
        this.loading = false;
      }
    });
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  goToSignup() {
    this.router.navigate(['/auth/signup']);
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 30,
      vars: 15,
      consts: [[1, "login-container"], [1, "login-card"], [1, "login-header"], [1, "login-form", 3, "ngSubmit", "formGroup"], [1, "alert", "alert-error"], [1, "form-group"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "formControlName", "username", "placeholder", "Enter your username", 1, "form-control", 3, "disabled"], [1, "field-error"], ["for", "password", 1, "form-label"], [1, "password-input-group"], ["id", "password", "formControlName", "password", "placeholder", "Enter your password", 1, "form-control", 3, "type", "disabled"], ["type", "button", 1, "password-toggle", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "login-footer"], ["href", "javascript:void(0)", 1, "link", 3, "click"], [1, "alert-icon"], [1, "spinner"], [1, "spinner-dot"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Task Manager");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sign in to your account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LoginComponent_Conditional_8_Template, 5, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginComponent_Conditional_13_Template, 3, 2, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5)(15, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_19_listener() {
            return ctx.togglePasswordVisibility();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LoginComponent_Conditional_21_Template, 3, 2, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LoginComponent_Conditional_23_Template, 2, 0, "span")(24, LoginComponent_Conditional_24_Template, 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14)(26, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Don't have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_28_listener() {
            return ctx.goToSignup();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Sign up here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](8, ctx.error ? 8 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["username"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](13, ctx.submitted && ctx.f["username"].errors ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["password"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password")("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.showPassword ? "\uD83D\uDE48" : "\uD83D\uDC41\uFE0F", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](21, ctx.submitted && ctx.f["password"].errors ? 21 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading || ctx.loginForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](23, !ctx.loading ? 23 : 24);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: [".login-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  padding: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  padding: 40px;\n  width: 100%;\n  max-width: 420px;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.login-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #333;\n  margin: 0 0 8px 0;\n}\n.login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n}\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  transition: all 0.3s ease;\n}\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  cursor: not-allowed;\n}\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #f44336;\n  background-color: #ffebee;\n}\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #f44336;\n  display: flex;\n  gap: 4px;\n}\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.password-input-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.password-input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 44px;\n}\n.password-input-group[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n  opacity: 0.6;\n  transition: opacity 0.2s ease;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.password-input-group[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 1;\n}\n.password-input-group[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n.btn-block[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-block[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .spinner-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: currentColor;\n  animation: _ngcontent-%COMP%_pulse 1.4s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}\n\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-radius: 8px;\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n  font-size: 14px;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n  border: 1px solid #f44336;\n}\n.alert.alert-error[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n\n.login-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #e0e0e0;\n}\n.login-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n}\n.login-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.2s ease;\n}\n.login-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: #764ba2;\n  text-decoration: underline;\n}\n\n@media (max-width: 480px) {\n  .login-card[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n  }\n  .login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2REFBQTtFQUNBLGFBQUE7RUFDQSw0REFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFGRjtBQUlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQUZKO0FBSUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRk47QUFLSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBSE47QUFLTTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhDQUFBO0FBSFI7QUFNTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQU9NO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQUxSO0FBU0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0FBUE47QUFTTTtFQUNFLGNBQUE7QUFQUjs7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBVkY7QUFZRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQVZKO0FBYUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVhKO0FBYUk7RUFDRSxVQUFBO0FBWE47QUFjSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQVpOOztBQWlCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQWRGO0FBZ0JFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFkSjtBQWdCSTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7QUFkTjtBQWtCRTtFQUNFO0lBQ0UsVUFBQTtFQWhCSjtFQWtCRTtJQUNFLFlBQUE7RUFoQko7QUFDRjs7QUFvQkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFqQkY7QUFtQkU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQWpCSjtBQW1CSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWpCTjs7QUFzQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQW5CRjtBQXFCRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQW5CSjtBQXFCSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFuQk47QUFxQk07RUFDRSxjQUFBO0VBQ0EsMEJBQUE7QUFuQlI7O0FBMEJBO0VBQ0U7SUFDRSxrQkFBQTtFQXZCRjtFQTJCRTtJQUNFLGVBQUE7RUF6Qko7RUE0QkU7SUFDRSxlQUFBO0VBMUJKO0VBOEJBO0lBQ0UsZUFBQTtFQTVCRjtFQStCQTtJQUNFLGVBQUE7RUE3QkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuLmxvZ2luLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuM3MgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVVcCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4ubG9naW4taGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLmxvZ2luLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG5cbiAgLmZvcm0tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcblxuICAgIC5mb3JtLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICB9XG5cbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIHBhZGRpbmc6IDEycHggMTRweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItY29sb3I6ICM2NjdlZWE7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSk7XG4gICAgICB9XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuXG4gICAgICAmLmlzLWludmFsaWQge1xuICAgICAgICBib3JkZXItY29sb3I6ICNmNDQzMzY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmViZWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZpZWxkLWVycm9yIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjZjQ0MzM2O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogNHB4O1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5wYXNzd29yZC1pbnB1dC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NHB4O1xuICB9XG5cbiAgLnBhc3N3b3JkLXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG4gIH1cbn1cblxuLmJ0bi1ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLnNwaW5uZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAuc3Bpbm5lci1kb3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDZweDtcbiAgICAgIGhlaWdodDogNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgICAgYW5pbWF0aW9uOiBwdWxzZSAxLjRzIGluZmluaXRlO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgIDAlLCAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAwLjM7XG4gICAgfVxuICB9XG59XG5cbi5hbGVydCB7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmb250LXNpemU6IDE0cHg7XG5cbiAgJi5hbGVydC1lcnJvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcbiAgICBjb2xvcjogI2M2MjgyODtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjQ0MzM2O1xuXG4gICAgLmFsZXJ0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgfVxuICB9XG59XG5cbi5sb2dpbi1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcblxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgLmxpbmsge1xuICAgICAgY29sb3I6ICM2NjdlZWE7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM3NjRiYTI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIERlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5sb2dpbi1jYXJkIHtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIH1cblxuICAubG9naW4taGVhZGVyIHtcbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICB9XG5cbiAgLmxvZ2luLWZvcm0gLmZvcm0tZ3JvdXAgLmZvcm0tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5sb2dpbi1mb3JtIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICAgIGZvbnQtc2l6ZTogMTZweDsgLy8gUHJldmVudCBpT1Mgem9vbVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3997:
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);







function RegisterComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.success);
  }
}
function RegisterComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function RegisterComponent_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username must be at least 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username can't exceed 50 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_Conditional_14_Conditional_1_Template, 2, 0, "span")(2, RegisterComponent_Conditional_14_Conditional_2_Template, 2, 0, "span")(3, RegisterComponent_Conditional_14_Conditional_3_Template, 2, 0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ctx_r0.f["username"].errors["required"] ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, ctx_r0.f["username"].errors["minlength"] ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](3, ctx_r0.f["username"].errors["maxlength"] ? 3 : -1);
  }
}
function RegisterComponent_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_Conditional_19_Conditional_1_Template, 2, 0, "span")(2, RegisterComponent_Conditional_19_Conditional_2_Template, 2, 0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ctx_r0.f["email"].errors["required"] ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, ctx_r0.f["email"].errors["email"] ? 2 : -1);
  }
}
function RegisterComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r0.passwordStrength / 5 * 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "strength-" + ctx_r0.getPasswordStrengthClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "strength-" + ctx_r0.getPasswordStrengthClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getPasswordStrengthText(), " ");
  }
}
function RegisterComponent_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_Conditional_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password must be at least 8 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_Conditional_28_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password can't exceed 128 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_Conditional_28_Conditional_1_Template, 2, 0, "span")(2, RegisterComponent_Conditional_28_Conditional_2_Template, 2, 0, "span")(3, RegisterComponent_Conditional_28_Conditional_3_Template, 2, 0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ctx_r0.f["password"].errors["required"] ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, ctx_r0.f["password"].errors["minlength"] ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](3, ctx_r0.f["password"].errors["maxlength"] ? 3 : -1);
  }
}
function RegisterComponent_Conditional_38_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Confirm password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_Conditional_38_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_Conditional_38_Conditional_1_Template, 2, 0, "span")(2, RegisterComponent_Conditional_38_Conditional_2_Template, 2, 0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, (ctx_r0.f["confirmPassword"].errors == null ? null : ctx_r0.f["confirmPassword"].errors["required"]) ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, (ctx_r0.registerForm.errors == null ? null : ctx_r0.registerForm.errors["passwordMismatch"]) ? 2 : -1);
  }
}
function RegisterComponent_Conditional_49_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "You must agree to the terms and conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_Conditional_49_Conditional_1_Template, 2, 0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ctx_r0.f["agreeTerms"].errors["required"] ? 1 : -1);
  }
}
function RegisterComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Creating account... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class RegisterComponent {
  constructor() {
    this.loading = false;
    this.submitted = false;
    this.error = null;
    this.success = null;
    this.showPassword = false;
    this.showConfirmPassword = false;
    this.passwordStrength = 0;
    this.formBuilder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
  }
  ngOnInit() {
    // Redirect to dashboard if already logged in
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/tasks']);
    }
    this.initializeForm();
  }
  initializeForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(50)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(128)]],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      agreeTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.requiredTrue]
    }, {
      validators: this.passwordMatchValidator()
    });
    // Monitor password field for strength calculation
    this.registerForm.get('password')?.valueChanges.subscribe(() => {
      this.calculatePasswordStrength();
    });
  }
  passwordMatchValidator() {
    return formGroup => {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      if (password && confirmPassword && password !== confirmPassword) {
        formGroup.get('confirmPassword')?.setErrors({
          passwordMismatch: true
        });
        return {
          passwordMismatch: true
        };
      } else if (password && confirmPassword && password === confirmPassword) {
        formGroup.get('confirmPassword')?.setErrors(null);
      }
      return null;
    };
  }
  get f() {
    return this.registerForm.controls;
  }
  calculatePasswordStrength() {
    const password = this.f['password'].value;
    if (!password) {
      this.passwordStrength = 0;
      return;
    }
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[\W_]/.test(password)) strength += 1;
    this.passwordStrength = Math.min(strength, 5);
  }
  getPasswordStrengthText() {
    switch (this.passwordStrength) {
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      case 5:
        return 'Very Strong';
      default:
        return '';
    }
  }
  getPasswordStrengthClass() {
    switch (this.passwordStrength) {
      case 1:
        return 'weak';
      case 2:
        return 'fair';
      case 3:
        return 'good';
      case 4:
        return 'strong';
      case 5:
        return 'very-strong';
      default:
        return '';
    }
  }
  onSubmit() {
    this.submitted = true;
    this.error = null;
    this.success = null;
    // Stop if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    const signupRequest = {
      username: this.f['username'].value,
      email: this.f['email'].value,
      password: this.f['password'].value,
      confirmPassword: this.f['confirmPassword'].value
    };
    this.authService.signup(signupRequest).subscribe({
      next: response => {
        console.log('Signup successful:', response);
        this.loading = false;
        this.success = 'Account created successfully! Redirecting...';
        setTimeout(() => {
          this.router.navigate(['/tasks']);
        }, 1500);
      },
      error: error => {
        console.error('Signup failed:', error);
        this.error = error.message || 'Signup failed. Please try again.';
        this.loading = false;
      }
    });
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 58,
      vars: 30,
      consts: [[1, "register-container"], [1, "register-card"], [1, "register-header"], [1, "register-form", 3, "ngSubmit", "formGroup"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "form-group"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "formControlName", "username", "placeholder", "Choose a username", 1, "form-control", 3, "disabled"], [1, "field-error"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter your email", 1, "form-control", 3, "disabled"], ["for", "password", 1, "form-label"], [1, "password-input-group"], ["id", "password", "formControlName", "password", "placeholder", "Create a strong password", 1, "form-control", 3, "input", "type", "disabled"], ["type", "button", 1, "password-toggle", 3, "click", "disabled"], [1, "password-strength"], [1, "password-hint"], ["for", "confirmPassword", 1, "form-label"], ["id", "confirmPassword", "formControlName", "confirmPassword", "placeholder", "Confirm your password", 1, "form-control", 3, "type", "disabled"], [1, "form-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "agreeTerms", 1, "checkbox-input", 3, "disabled"], [1, "checkbox-text"], ["href", "javascript:void(0)", 1, "link"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "register-footer"], ["href", "javascript:void(0)", 1, "link", 3, "click"], [1, "alert-icon"], [1, "strength-bar-container"], [1, "strength-bar", 3, "ngClass"], [1, "strength-text", 3, "ngClass"], [1, "spinner"], [1, "spinner-dot"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Create Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Join Task Manager and start managing your tasks");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RegisterComponent_Conditional_8_Template, 5, 1, "div", 4)(9, RegisterComponent_Conditional_9_Template, 5, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RegisterComponent_Conditional_14_Template, 4, 3, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6)(16, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegisterComponent_Conditional_19_Template, 3, 2, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6)(21, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13)(24, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_24_listener() {
            return ctx.calculatePasswordStrength();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_25_listener() {
            return ctx.togglePasswordVisibility();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RegisterComponent_Conditional_27_Template, 5, 5, "div", 16)(28, RegisterComponent_Conditional_28_Template, 4, 3, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Use a mix of uppercase, lowercase, numbers, and special characters");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 6)(32, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Confirm Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_36_listener() {
            return ctx.toggleConfirmPasswordVisibility();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, RegisterComponent_Conditional_38_Template, 3, 2, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 20)(40, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " I agree to the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Terms and Conditions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " and ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Privacy Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, RegisterComponent_Conditional_49_Template, 2, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, RegisterComponent_Conditional_51_Template, 2, 0, "span")(52, RegisterComponent_Conditional_52_Template, 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 26)(54, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Already have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_56_listener() {
            return ctx.goToLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Sign in here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](8, ctx.success ? 8 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](9, ctx.error ? 9 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["username"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](14, ctx.submitted && ctx.f["username"].errors ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["email"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](19, ctx.submitted && ctx.f["email"].errors ? 19 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["password"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password")("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.showPassword ? "\uD83D\uDE48" : "\uD83D\uDC41\uFE0F", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](27, ctx.f["password"].value ? 27 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](28, ctx.submitted && ctx.f["password"].errors ? 28 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.submitted && (ctx.f["confirmPassword"].errors || (ctx.registerForm.errors == null ? null : ctx.registerForm.errors["passwordMismatch"])));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showConfirmPassword ? "text" : "password")("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.showConfirmPassword ? "\uD83D\uDE48" : "\uD83D\uDC41\uFE0F", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](38, ctx.submitted && (ctx.f["confirmPassword"].errors || (ctx.registerForm.errors == null ? null : ctx.registerForm.errors["passwordMismatch"])) ? 38 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](49, ctx.submitted && ctx.f["agreeTerms"].errors ? 49 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading || ctx.registerForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](51, !ctx.loading ? 51 : 52);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: [".register-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  padding: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.register-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  padding: 40px;\n  width: 100%;\n  max-width: 480px;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.register-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.register-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #333;\n  margin: 0 0 8px 0;\n}\n.register-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n}\n\n.register-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.register-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.register-form[_ngcontent-%COMP%]   .form-group.checkbox-group[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.register-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n}\n.register-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  transition: all 0.3s ease;\n}\n.register-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.register-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  cursor: not-allowed;\n}\n.register-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #f44336;\n  background-color: #ffebee;\n}\n.register-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #f44336;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.register-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.password-input-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.password-input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 44px;\n}\n.password-input-group[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n  opacity: 0.6;\n  transition: opacity 0.2s ease;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.password-input-group[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 1;\n}\n.password-input-group[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.password-strength[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.password-strength[_ngcontent-%COMP%]   .strength-bar-container[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background-color: #e0e0e0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.password-strength[_ngcontent-%COMP%]   .strength-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  transition: all 0.3s ease;\n}\n.password-strength[_ngcontent-%COMP%]   .strength-bar.strength-weak[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.password-strength[_ngcontent-%COMP%]   .strength-bar.strength-fair[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n}\n.password-strength[_ngcontent-%COMP%]   .strength-bar.strength-good[_ngcontent-%COMP%] {\n  background-color: #ffc107;\n}\n.password-strength[_ngcontent-%COMP%]   .strength-bar.strength-strong[_ngcontent-%COMP%] {\n  background-color: #8bc34a;\n}\n.password-strength[_ngcontent-%COMP%]   .strength-bar.strength-very-strong[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n}\n.password-strength[_ngcontent-%COMP%]   .strength-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  min-width: 70px;\n}\n.password-strength[_ngcontent-%COMP%]   .strength-text.strength-weak[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.password-strength[_ngcontent-%COMP%]   .strength-text.strength-fair[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.password-strength[_ngcontent-%COMP%]   .strength-text.strength-good[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n.password-strength[_ngcontent-%COMP%]   .strength-text.strength-strong[_ngcontent-%COMP%] {\n  color: #8bc34a;\n}\n.password-strength[_ngcontent-%COMP%]   .strength-text.strength-very-strong[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n\n.password-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999;\n  margin: 4px 0 0 0;\n  font-style: italic;\n}\n\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-top: 2px;\n  cursor: pointer;\n  accent-color: #667eea;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n  line-height: 1.4;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-text[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n.checkbox-label[_ngcontent-%COMP%]   .checkbox-text[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: #764ba2;\n  text-decoration: underline;\n}\n\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-radius: 8px;\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n  font-size: 14px;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n.alert[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n  border: 1px solid #f44336;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n  border: 1px solid #4caf50;\n}\n\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n.btn-block[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-block[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .spinner-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: currentColor;\n  animation: _ngcontent-%COMP%_pulse 1.4s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}\n\n.register-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #e0e0e0;\n}\n.register-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n}\n.register-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.2s ease;\n}\n.register-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: #764ba2;\n  text-decoration: underline;\n}\n\n@media (max-width: 480px) {\n  .register-card[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n  }\n  .register-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .register-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .register-form[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .register-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .register-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2REFBQTtFQUNBLGFBQUE7RUFDQSw0REFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFGRjtBQUlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQUZKO0FBSUk7RUFDRSxlQUFBO0FBRk47QUFLSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFITjtBQU1JO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUFKTjtBQU1NO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOENBQUE7QUFKUjtBQU9NO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQUxSO0FBUU07RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FBTlI7QUFVSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQVJOO0FBVU07RUFDRSxjQUFBO0FBUlI7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVhGO0FBYUU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFYSjtBQWNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFaSjtBQWNJO0VBQ0UsVUFBQTtBQVpOO0FBZUk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFiTjs7QUFrQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBZkY7QUFpQkU7RUFDRSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWZKO0FBa0JFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFoQko7QUFrQkk7RUFDRSx5QkFBQTtBQWhCTjtBQW1CSTtFQUNFLHlCQUFBO0FBakJOO0FBb0JJO0VBQ0UseUJBQUE7QUFsQk47QUFxQkk7RUFDRSx5QkFBQTtBQW5CTjtBQXNCSTtFQUNFLHlCQUFBO0FBcEJOO0FBd0JFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXRCSjtBQXdCSTtFQUNFLGNBQUE7QUF0Qk47QUF5Qkk7RUFDRSxjQUFBO0FBdkJOO0FBMEJJO0VBQ0UsY0FBQTtBQXhCTjtBQTJCSTtFQUNFLGNBQUE7QUF6Qk47QUE0Qkk7RUFDRSxjQUFBO0FBMUJOOztBQStCQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTVCRjs7QUErQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUE1QkY7QUE4QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUE1Qko7QUE4Qkk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUE1Qk47QUFnQ0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBOUJKO0FBZ0NJO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQTlCTjtBQWdDTTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQTlCUjs7QUFvQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtBQWpDRjtBQW1DRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWpDSjtBQW9DRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBbENKO0FBcUNFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFuQ0o7O0FBdUNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUFwQ0Y7RUFzQ0E7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFwQ0Y7QUFDRjtBQXVDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQXJDRjtBQXVDRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBckNKO0FBdUNJO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQXJDTjtBQXlDRTtFQUNFO0lBQ0UsVUFBQTtFQXZDSjtFQXlDRTtJQUNFLFlBQUE7RUF2Q0o7QUFDRjs7QUEyQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQXhDRjtBQTBDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQXhDSjtBQTBDSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUF4Q047QUEwQ007RUFDRSxjQUFBO0VBQ0EsMEJBQUE7QUF4Q1I7O0FBK0NBO0VBQ0U7SUFDRSxrQkFBQTtFQTVDRjtFQWdERTtJQUNFLGVBQUE7RUE5Q0o7RUFpREU7SUFDRSxlQUFBO0VBL0NKO0VBbURBO0lBQ0UsU0FBQTtFQWpERjtFQW1ERTtJQUNFLGVBQUE7RUFqREo7RUFvREU7SUFDRSxlQUFBO0VBbERKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbi5yZWdpc3Rlci1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIGFuaW1hdGlvbjogc2xpZGVVcCAwLjNzIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLnJlZ2lzdGVyLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5yZWdpc3Rlci1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuXG4gIC5mb3JtLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAmLmNoZWNrYm94LWdyb3VwIHtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG5cbiAgICAuZm9ybS1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuXG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xuICAgICAgfVxuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cblxuICAgICAgJi5pcy1pbnZhbGlkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5maWVsZC1lcnJvciB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA0cHg7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnBhc3N3b3JkLWlucHV0LWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDQ0cHg7XG4gIH1cblxuICAucGFzc3dvcmQtdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEycHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbiAgfVxufVxuXG4ucGFzc3dvcmQtc3RyZW5ndGgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG5cbiAgLnN0cmVuZ3RoLWJhci1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5zdHJlbmd0aC1iYXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICYuc3RyZW5ndGgtd2VhayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICAgIH1cblxuICAgICYuc3RyZW5ndGgtZmFpciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwO1xuICAgIH1cblxuICAgICYuc3RyZW5ndGgtZ29vZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xuICAgIH1cblxuICAgICYuc3RyZW5ndGgtc3Ryb25nIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4YmMzNGE7XG4gICAgfVxuXG4gICAgJi5zdHJlbmd0aC12ZXJ5LXN0cm9uZyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICAgIH1cbiAgfVxuXG4gIC5zdHJlbmd0aC10ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtaW4td2lkdGg6IDcwcHg7XG5cbiAgICAmLnN0cmVuZ3RoLXdlYWsge1xuICAgICAgY29sb3I6ICNmNDQzMzY7XG4gICAgfVxuXG4gICAgJi5zdHJlbmd0aC1mYWlyIHtcbiAgICAgIGNvbG9yOiAjZmY5ODAwO1xuICAgIH1cblxuICAgICYuc3RyZW5ndGgtZ29vZCB7XG4gICAgICBjb2xvcjogI2ZmYzEwNztcbiAgICB9XG5cbiAgICAmLnN0cmVuZ3RoLXN0cm9uZyB7XG4gICAgICBjb2xvcjogIzhiYzM0YTtcbiAgICB9XG5cbiAgICAmLnN0cmVuZ3RoLXZlcnktc3Ryb25nIHtcbiAgICAgIGNvbG9yOiAjNGNhZjUwO1xuICAgIH1cbiAgfVxufVxuXG4ucGFzc3dvcmQtaGludCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM5OTk7XG4gIG1hcmdpbjogNHB4IDAgMCAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5jaGVja2JveC1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgLmNoZWNrYm94LWlucHV0IHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBhY2NlbnQtY29sb3I6ICM2NjdlZWE7XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgfVxuICB9XG5cbiAgLmNoZWNrYm94LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuXG4gICAgLmxpbmsge1xuICAgICAgY29sb3I6ICM2NjdlZWE7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM3NjRiYTI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYWxlcnQge1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBhbmltYXRpb246IHNsaWRlRG93biAwLjNzIGVhc2Utb3V0O1xuXG4gIC5hbGVydC1pY29uIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG5cbiAgJi5hbGVydC1lcnJvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcbiAgICBjb2xvcjogI2M2MjgyODtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjQ0MzM2O1xuICB9XG5cbiAgJi5hbGVydC1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmNWU5O1xuICAgIGNvbG9yOiAjMmU3ZDMyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0Y2FmNTA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi5idG4tYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5zcGlubmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuXG4gICAgLnNwaW5uZXItZG90IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiA2cHg7XG4gICAgICBoZWlnaHQ6IDZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMS40cyBpbmZpbml0ZTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHB1bHNlIHtcbiAgICAwJSwgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMC4zO1xuICAgIH1cbiAgfVxufVxuXG4ucmVnaXN0ZXItZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIG1hcmdpbjogMDtcblxuICAgIC5saW5rIHtcbiAgICAgIGNvbG9yOiAjNjY3ZWVhO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjNzY0YmEyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucmVnaXN0ZXItY2FyZCB7XG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xuICB9XG5cbiAgLnJlZ2lzdGVyLWhlYWRlciB7XG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgfVxuXG4gIC5yZWdpc3Rlci1mb3JtIHtcbiAgICBnYXA6IDE2cHg7XG5cbiAgICAuZm9ybS1ncm91cCAuZm9ybS1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuXG4gICAgLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7IC8vIFByZXZlbnQgaU9TIHpvb21cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5041:
/*!*****************************************************************!*\
  !*** ./src/app/components/task-create/task-create.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskCreateComponent: () => (/* binding */ TaskCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/task.service */ 2611);
/* harmony import */ var _models_task_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/task.model */ 1043);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3900);










function TaskCreateComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Task created successfully! Redirecting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function TaskCreateComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function TaskCreateComponent_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskCreateComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Title must be at least 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskCreateComponent_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Title cannot exceed 200 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskCreateComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TaskCreateComponent_Conditional_13_Conditional_1_Template, 2, 0, "span")(2, TaskCreateComponent_Conditional_13_Conditional_2_Template, 2, 0, "span")(3, TaskCreateComponent_Conditional_13_Conditional_3_Template, 2, 0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, ctx_r0.f["title"].errors["required"] ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](2, ctx_r0.f["title"].errors["minlength"] ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](3, ctx_r0.f["title"].errors["maxlength"] ? 3 : -1);
  }
}
function TaskCreateComponent_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskCreateComponent_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description must be at least 10 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskCreateComponent_Conditional_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description cannot exceed 2000 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskCreateComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TaskCreateComponent_Conditional_20_Conditional_1_Template, 2, 0, "span")(2, TaskCreateComponent_Conditional_20_Conditional_2_Template, 2, 0, "span")(3, TaskCreateComponent_Conditional_20_Conditional_3_Template, 2, 0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, ctx_r0.f["description"].errors["required"] ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](2, ctx_r0.f["description"].errors["minlength"] ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](3, ctx_r0.f["description"].errors["maxlength"] ? 3 : -1);
  }
}
function TaskCreateComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const priority_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", priority_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](priority_r2);
  }
}
function TaskCreateComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", status_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](status_r3);
  }
}
function TaskCreateComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Create Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskCreateComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Creating... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class TaskCreateComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder);
    this.taskService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.submitted = false;
    this.loading = false;
    this.error = '';
    this.success = false;
    // Enums for dropdowns
    this.TaskPriority = _models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskPriority;
    this.TaskStatus = _models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskStatus;
    this.priorityOptions = Object.values(_models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskPriority);
    this.statusOptions = Object.values(_models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskStatus);
  }
  ngOnInit() {
    this.initializeForm();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initializeForm() {
    this.taskForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(200)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(2000)]],
      priority: [_models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskPriority.MEDIUM, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      status: [_models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskStatus.PENDING, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      dueDate: [''],
      category: [''],
      tags: [''],
      starred: [false]
    });
  }
  get f() {
    return this.taskForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.error = '';
    if (this.taskForm.invalid) {
      return;
    }
    this.loading = true;
    const formValue = this.taskForm.value;
    const taskData = {
      title: formValue.title,
      description: formValue.description,
      priority: formValue.priority,
      status: formValue.status,
      dueDate: formValue.dueDate ? new Date(formValue.dueDate).toISOString() : undefined,
      category: formValue.category || undefined,
      tags: formValue.tags ? formValue.tags.split(',').map(t => t.trim()).filter(t => t) : [],
      starred: formValue.starred || false
    };
    this.taskService.createTask(taskData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.success = true;
        this.loading = false;
        setTimeout(() => {
          this.router.navigate(['/tasks']);
        }, 1500);
      },
      error: error => {
        this.error = error.message || 'Failed to create task';
        this.loading = false;
      }
    });
  }
  cancel() {
    this.router.navigate(['/tasks']);
  }
  /**
   * Guard method to prevent navigation with unsaved changes
   */
  canDeactivate() {
    // If form has no changes and not loading, allow navigation
    if (!this.taskForm.dirty && !this.loading) {
      return true;
    }
    // If form has been submitted successfully, allow navigation
    if (this.success) {
      return true;
    }
    // If form is loading, prevent navigation
    if (this.loading) {
      return false;
    }
    // Form has unsaved changes, ask for confirmation
    if (this.taskForm.dirty) {
      return confirm('You have unsaved changes. Do you want to leave without saving?');
    }
    return true;
  }
  static {
    this.ɵfac = function TaskCreateComponent_Factory(t) {
      return new (t || TaskCreateComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TaskCreateComponent,
      selectors: [["app-task-create"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 63,
      vars: 20,
      consts: [[1, "task-form-container"], [1, "form-header"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "task-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "title", 1, "form-label"], [1, "required"], ["type", "text", "id", "title", "formControlName", "title", "placeholder", "Enter task title", 1, "form-control", 3, "disabled"], [1, "field-error"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", "placeholder", "Enter task description", "rows", "5", 1, "form-control", "textarea", 3, "disabled"], [1, "form-row"], ["for", "priority", 1, "form-label"], ["id", "priority", "formControlName", "priority", 1, "form-control", 3, "disabled"], [3, "value"], ["for", "status", 1, "form-label"], ["id", "status", "formControlName", "status", 1, "form-control", 3, "disabled"], ["for", "dueDate", 1, "form-label"], ["type", "date", "id", "dueDate", "formControlName", "dueDate", 1, "form-control", 3, "disabled"], ["for", "category", 1, "form-label"], ["type", "text", "id", "category", "formControlName", "category", "placeholder", "e.g., Work, Personal, Shopping", 1, "form-control", 3, "disabled"], ["for", "tags", 1, "form-label"], [1, "hint"], ["type", "text", "id", "tags", "formControlName", "tags", "placeholder", "e.g., urgent, important, follow-up", 1, "form-control", 3, "disabled"], [1, "form-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "starred", 1, "checkbox-input", 3, "disabled"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "alert-icon"], [1, "spinner"], [1, "spinner-dot"]],
      template: function TaskCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Create New Task");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TaskCreateComponent_Conditional_4_Template, 5, 0, "div", 2)(5, TaskCreateComponent_Conditional_5_Template, 5, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function TaskCreateComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Task Title ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TaskCreateComponent_Conditional_13_Template, 4, 3, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Description ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "textarea", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, TaskCreateComponent_Conditional_20_Template, 4, 3, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12)(22, "div", 5)(23, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Priority ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "select", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](28, TaskCreateComponent_For_29_Template, 2, 2, "option", 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 5)(31, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Status ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "select", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](36, TaskCreateComponent_For_37_Template, 2, 2, "option", 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 5)(39, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Due Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 5)(43, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 5)(47, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Tags ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "(comma-separated)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 25)(53, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Star this task (add to favorites)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 28)(58, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, TaskCreateComponent_Conditional_59_Template, 2, 0, "span")(60, TaskCreateComponent_Conditional_60_Template, 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskCreateComponent_Template_button_click_61_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](4, ctx.success ? 4 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](5, ctx.error ? 5 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.taskForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["title"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](13, ctx.submitted && ctx.f["title"].errors ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["description"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](20, ctx.submitted && ctx.f["description"].errors ? 20 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.priorityOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.statusOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](59, !ctx.loading ? 59 : 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      styles: [".task-form-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 700px;\n  margin: 0 auto;\n}\n\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.form-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: #333;\n  margin: 0;\n}\n\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 0.5rem;\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.alert.alert-success[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.alert.alert-error[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.task-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 0.95rem;\n}\n.form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #999;\n  font-weight: 400;\n  margin-left: 0.5rem;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #ddd;\n  border-radius: 0.5rem;\n  font-size: 0.95rem;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #f8f9fa;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  background-color: #fff5f5;\n}\n.form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);\n  border-color: #dc3545;\n}\n.form-group[_ngcontent-%COMP%]   .form-control.textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n}\n.form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 0.85rem;\n  margin-top: 0.25rem;\n}\n.form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.25rem;\n}\n.form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.form-group.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  font-weight: 400;\n  color: #666;\n}\n.form-group.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: #007bff;\n}\n.form-group.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n.form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .spinner-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: white;\n  animation: _ngcontent-%COMP%_pulse 1s ease-in-out infinite;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #5a6268;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@media (max-width: 768px) {\n  .task-form-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90YXNrLWNyZWF0ZS90YXNrLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUFKO0FBRUk7RUFDRSxpQkFBQTtBQUFOO0FBSUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUZKO0FBSUk7RUFDRSxpQkFBQTtBQUZOOztBQU9BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUpGO0FBTUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUpKO0FBTUk7RUFDRSxjQUFBO0FBSk47QUFPSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFMTjtBQVNFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBUEo7QUFTSTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO0FBUE47QUFVSTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBUk47QUFXSTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUFUTjtBQVdNO0VBQ0UsNENBQUE7RUFDQSxxQkFBQTtBQVRSO0FBYUk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBWE47QUFlRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBYko7QUFlSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQWJOO0FBZU07RUFDRSxhQUFBO0FBYlI7QUFtQkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQWpCTjtBQW1CTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBakJSO0FBbUJRO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBakJWOztBQXdCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFyQkY7QUF1QkU7RUFDRSxXQUFBO0FBckJKOztBQXlCQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUF0QkY7QUF3QkU7RUFDRSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBdEJKO0FBd0JJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBdEJOO0FBeUJJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBdkJOO0FBeUJNO0VBQ0UseUJBQUE7QUF2QlI7QUEwQk07RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQXhCUjtBQTBCUTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7QUF4QlY7QUE2Qkk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUEzQk47QUE2Qk07RUFDRSx5QkFBQTtBQTNCUjs7QUFpQ0E7RUFDRTtJQUNFLFVBQUE7RUE5QkY7RUFnQ0E7SUFDRSxZQUFBO0VBOUJGO0FBQ0Y7QUFrQ0E7RUFDRTtJQUNFLGFBQUE7RUFoQ0Y7RUFtQ0E7SUFDRSwwQkFBQTtJQUNBLFdBQUE7RUFqQ0Y7RUFvQ0E7SUFDRSxzQkFBQTtFQWxDRjtFQW9DRTtJQUNFLFdBQUE7RUFsQ0o7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrLWZvcm0tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mb3JtLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4uYWxlcnQge1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjc1cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICYuYWxlcnQtc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWRkYTtcbiAgICBjb2xvcjogIzE1NTcyNDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzNlNmNiO1xuXG4gICAgLmFsZXJ0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICB9XG5cbiAgJi5hbGVydC1lcnJvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgICBjb2xvcjogIzcyMWMyNDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjVjNmNiO1xuXG4gICAgLmFsZXJ0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICB9XG59XG5cbi50YXNrLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuNXJlbTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcblxuICAuZm9ybS1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG5cbiAgICAucmVxdWlyZWQge1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgfVxuXG4gICAgLmhpbnQge1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMSk7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICB9XG5cbiAgICAmLmlzLWludmFsaWQge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjVmNTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDIyMCwgNTMsIDY5LCAwLjEpO1xuICAgICAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi50ZXh0YXJlYSB7XG4gICAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgfVxuICB9XG5cbiAgLmZpZWxkLWVycm9yIHtcbiAgICBjb2xvcjogI2RjMzU0NTtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcblxuICAgIHNwYW4ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmNoZWNrYm94LWdyb3VwIHtcbiAgICAuY2hlY2tib3gtbGFiZWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDAuNzVyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgY29sb3I6ICM2NjY7XG5cbiAgICAgIC5jaGVja2JveC1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYWNjZW50LWNvbG9yOiAjMDA3YmZmO1xuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5mb3JtLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxLjVyZW07XG5cbiAgLmZvcm0tZ3JvdXAge1xuICAgIGdhcDogMC41cmVtO1xuICB9XG59XG5cbi5mb3JtLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG5cbiAgLmJ0biB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgfVxuXG4gICAgJi5idG4tcHJpbWFyeSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgICAgIH1cblxuICAgICAgLnNwaW5uZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAwLjVyZW07XG5cbiAgICAgICAgLnNwaW5uZXItZG90IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYuYnRuLXNlY29uZGFyeSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xuICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVhNjI2ODtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgZGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRhc2stZm9ybS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAuZm9ybS1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMS41cmVtO1xuICB9XG5cbiAgLmZvcm0tYWN0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6861:
/*!*************************************************************!*\
  !*** ./src/app/components/task-edit/task-edit.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskEditComponent: () => (/* binding */ TaskEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/task.service */ 2611);
/* harmony import */ var _models_task_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/task.model */ 1043);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3900);










function TaskEditComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading task...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function TaskEditComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Task updated successfully! Redirecting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function TaskEditComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function TaskEditComponent_Conditional_5_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskEditComponent_Conditional_5_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Title must be at least 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskEditComponent_Conditional_5_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Title cannot exceed 200 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskEditComponent_Conditional_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TaskEditComponent_Conditional_5_Conditional_9_Conditional_1_Template, 2, 0, "span")(2, TaskEditComponent_Conditional_5_Conditional_9_Conditional_2_Template, 2, 0, "span")(3, TaskEditComponent_Conditional_5_Conditional_9_Conditional_3_Template, 2, 0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, ctx_r1.f["title"].errors["required"] ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](2, ctx_r1.f["title"].errors["minlength"] ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](3, ctx_r1.f["title"].errors["maxlength"] ? 3 : -1);
  }
}
function TaskEditComponent_Conditional_5_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskEditComponent_Conditional_5_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description must be at least 10 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskEditComponent_Conditional_5_Conditional_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description cannot exceed 2000 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskEditComponent_Conditional_5_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TaskEditComponent_Conditional_5_Conditional_16_Conditional_1_Template, 2, 0, "span")(2, TaskEditComponent_Conditional_5_Conditional_16_Conditional_2_Template, 2, 0, "span")(3, TaskEditComponent_Conditional_5_Conditional_16_Conditional_3_Template, 2, 0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, ctx_r1.f["description"].errors["required"] ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](2, ctx_r1.f["description"].errors["minlength"] ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](3, ctx_r1.f["description"].errors["maxlength"] ? 3 : -1);
  }
}
function TaskEditComponent_Conditional_5_For_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const priority_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", priority_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](priority_r3);
  }
}
function TaskEditComponent_Conditional_5_For_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", status_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](status_r4);
  }
}
function TaskEditComponent_Conditional_5_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Update Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskEditComponent_Conditional_5_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Updating... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaskEditComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TaskEditComponent_Conditional_5_Conditional_0_Template, 5, 0, "div", 5)(1, TaskEditComponent_Conditional_5_Conditional_1_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function TaskEditComponent_Conditional_5_Template_form_ngSubmit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 8)(4, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Task Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TaskEditComponent_Conditional_5_Conditional_9_Template, 4, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TaskEditComponent_Conditional_5_Conditional_16_Template, 4, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 15)(18, "div", 8)(19, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Priority ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](24, TaskEditComponent_Conditional_5_For_25_Template, 2, 2, "option", 18, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 8)(27, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](32, TaskEditComponent_Conditional_5_For_33_Template, 2, 2, "option", 18, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 8)(35, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 8)(39, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 8)(43, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Tags ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "(comma-separated)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 28)(49, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Star this task (add to favorites)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 31)(54, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, TaskEditComponent_Conditional_5_Conditional_55_Template, 2, 0, "span")(56, TaskEditComponent_Conditional_5_Conditional_56_Template, 3, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskEditComponent_Conditional_5_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, ctx_r1.success ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, ctx_r1.error ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.taskForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx_r1.submitted && ctx_r1.f["title"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](9, ctx_r1.submitted && ctx_r1.f["title"].errors ? 9 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx_r1.submitted && ctx_r1.f["description"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](16, ctx_r1.submitted && ctx_r1.f["description"].errors ? 16 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r1.priorityOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r1.statusOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](55, !ctx_r1.loading ? 55 : 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.loading);
  }
}
class TaskEditComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder);
    this.taskService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute);
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.submitted = false;
    this.loading = false;
    this.initialLoading = true;
    this.error = '';
    this.success = false;
    this.taskId = '';
    // Enums for dropdowns
    this.TaskPriority = _models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskPriority;
    this.TaskStatus = _models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskStatus;
    this.priorityOptions = Object.values(_models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskPriority);
    this.statusOptions = Object.values(_models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskStatus);
  }
  ngOnInit() {
    this.initializeForm();
    this.loadTask();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initializeForm() {
    this.taskForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(200)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(2000)]],
      priority: [_models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskPriority.MEDIUM, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      status: [_models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskStatus.PENDING, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      dueDate: [''],
      category: [''],
      tags: [''],
      starred: [false]
    });
  }
  loadTask() {
    this.taskId = this.route.snapshot.paramMap.get('id') || '';
    if (!this.taskId) {
      this.error = 'Task ID not found';
      this.initialLoading = false;
      return;
    }
    this.taskService.getTaskById(this.taskId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
      next: task => {
        this.populateForm(task);
        this.initialLoading = false;
      },
      error: error => {
        this.error = error.message || 'Failed to load task';
        this.initialLoading = false;
      }
    });
  }
  populateForm(task) {
    const tagsString = task.tags ? task.tags.join(', ') : '';
    const dueDateValue = task.dueDate ? task.dueDate.split('T')[0] : '';
    this.taskForm.patchValue({
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: task.status,
      dueDate: dueDateValue,
      category: task.category || '',
      tags: tagsString,
      starred: task.starred || false
    });
  }
  get f() {
    return this.taskForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.error = '';
    if (this.taskForm.invalid) {
      return;
    }
    this.loading = true;
    const formValue = this.taskForm.value;
    const taskData = {
      title: formValue.title,
      description: formValue.description,
      priority: formValue.priority,
      status: formValue.status,
      dueDate: formValue.dueDate ? new Date(formValue.dueDate).toISOString() : undefined,
      category: formValue.category || undefined,
      tags: formValue.tags ? formValue.tags.split(',').map(t => t.trim()).filter(t => t) : [],
      starred: formValue.starred || false
    };
    this.taskService.updateTask(this.taskId, taskData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.success = true;
        this.loading = false;
        setTimeout(() => {
          this.router.navigate(['/tasks']);
        }, 1500);
      },
      error: error => {
        this.error = error.message || 'Failed to update task';
        this.loading = false;
      }
    });
  }
  cancel() {
    this.router.navigate(['/tasks']);
  }
  /**
   * Guard method to prevent navigation with unsaved changes
   */
  canDeactivate() {
    // If form has no changes and not loading, allow navigation
    if (!this.taskForm.dirty && !this.loading) {
      return true;
    }
    // If form has been submitted successfully, allow navigation
    if (this.success) {
      return true;
    }
    // If form is loading, prevent navigation
    if (this.loading) {
      return false;
    }
    // Form has unsaved changes, ask for confirmation
    if (this.taskForm.dirty) {
      return confirm('You have unsaved changes. Do you want to leave without saving?');
    }
    return true;
  }
  static {
    this.ɵfac = function TaskEditComponent_Factory(t) {
      return new (t || TaskEditComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TaskEditComponent,
      selectors: [["app-task-edit"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 2,
      consts: [[1, "task-form-container"], [1, "form-header"], [1, "loading-container"], [1, "task-form", 3, "formGroup"], [1, "spinner"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "task-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "title", 1, "form-label"], [1, "required"], ["type", "text", "id", "title", "formControlName", "title", "placeholder", "Enter task title", 1, "form-control", 3, "disabled"], [1, "field-error"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", "placeholder", "Enter task description", "rows", "5", 1, "form-control", "textarea", 3, "disabled"], [1, "form-row"], ["for", "priority", 1, "form-label"], ["id", "priority", "formControlName", "priority", 1, "form-control", 3, "disabled"], [3, "value"], ["for", "status", 1, "form-label"], ["id", "status", "formControlName", "status", 1, "form-control", 3, "disabled"], ["for", "dueDate", 1, "form-label"], ["type", "date", "id", "dueDate", "formControlName", "dueDate", 1, "form-control", 3, "disabled"], ["for", "category", 1, "form-label"], ["type", "text", "id", "category", "formControlName", "category", "placeholder", "e.g., Work, Personal, Shopping", 1, "form-control", 3, "disabled"], ["for", "tags", 1, "form-label"], [1, "hint"], ["type", "text", "id", "tags", "formControlName", "tags", "placeholder", "e.g., urgent, important, follow-up", 1, "form-control", 3, "disabled"], [1, "form-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "starred", 1, "checkbox-input", 3, "disabled"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "alert-icon"], [1, "spinner-dot"]],
      template: function TaskEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Edit Task");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TaskEditComponent_Conditional_4_Template, 4, 0, "div", 2)(5, TaskEditComponent_Conditional_5_Template, 59, 20, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](4, ctx.initialLoading ? 4 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](5, !ctx.initialLoading ? 5 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      styles: [".task-form-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 700px;\n  margin: 0 auto;\n}\n\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.form-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: #333;\n  margin: 0;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #007bff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1rem;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 0.5rem;\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.alert.alert-success[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.alert.alert-error[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.task-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 0.95rem;\n}\n.form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #999;\n  font-weight: 400;\n  margin-left: 0.5rem;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #ddd;\n  border-radius: 0.5rem;\n  font-size: 0.95rem;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #f8f9fa;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  background-color: #fff5f5;\n}\n.form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);\n  border-color: #dc3545;\n}\n.form-group[_ngcontent-%COMP%]   .form-control.textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n}\n.form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 0.85rem;\n  margin-top: 0.25rem;\n}\n.form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.25rem;\n}\n.form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.form-group.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  font-weight: 400;\n  color: #666;\n}\n.form-group.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: #007bff;\n}\n.form-group.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .checkbox-input[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n.form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .spinner-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: white;\n  animation: _ngcontent-%COMP%_pulse 1s ease-in-out infinite;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #5a6268;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@media (max-width: 768px) {\n  .task-form-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90YXNrLWVkaXQvdGFzay1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBQUY7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBREo7O0FBS0E7RUFDRTtJQUFLLHVCQUFBO0VBREw7RUFFQTtJQUFPLHlCQUFBO0VBQ1A7QUFDRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQ0o7QUFDSTtFQUNFLGlCQUFBO0FBQ047QUFHRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBREo7QUFHSTtFQUNFLGlCQUFBO0FBRE47O0FBTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBSEY7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSEo7QUFLSTtFQUNFLGNBQUE7QUFITjtBQU1JO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUpOO0FBUUU7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFOSjtBQVFJO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNENBQUE7QUFOTjtBQVNJO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFQTjtBQVVJO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQVJOO0FBVU07RUFDRSw0Q0FBQTtFQUNBLHFCQUFBO0FBUlI7QUFZSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFWTjtBQWNFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFaSjtBQWNJO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBWk47QUFjTTtFQUNFLGFBQUE7QUFaUjtBQWtCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBaEJOO0FBa0JNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFoQlI7QUFrQlE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFoQlY7O0FBdUJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQXBCRjtBQXNCRTtFQUNFLFdBQUE7QUFwQko7O0FBd0JBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQXJCRjtBQXVCRTtFQUNFLE9BQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFyQko7QUF1Qkk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFyQk47QUF3Qkk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUF0Qk47QUF3Qk07RUFDRSx5QkFBQTtBQXRCUjtBQXlCTTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBdkJSO0FBeUJRO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtBQXZCVjtBQTRCSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQTFCTjtBQTRCTTtFQUNFLHlCQUFBO0FBMUJSOztBQWdDQTtFQUNFO0lBQ0UsVUFBQTtFQTdCRjtFQStCQTtJQUNFLFlBQUE7RUE3QkY7QUFDRjtBQWlDQTtFQUNFO0lBQ0UsYUFBQTtFQS9CRjtFQWtDQTtJQUNFLDBCQUFBO0lBQ0EsV0FBQTtFQWhDRjtFQW1DQTtJQUNFLHNCQUFBO0VBakNGO0VBbUNFO0lBQ0UsV0FBQTtFQWpDSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2stZm9ybS1jb250YWluZXIge1xuICBwYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmZvcm0taGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogM3JlbTtcblxuICAuc3Bpbm5lciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMDA3YmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4uYWxlcnQge1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjc1cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICYuYWxlcnQtc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWRkYTtcbiAgICBjb2xvcjogIzE1NTcyNDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzNlNmNiO1xuXG4gICAgLmFsZXJ0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICB9XG5cbiAgJi5hbGVydC1lcnJvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgICBjb2xvcjogIzcyMWMyNDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjVjNmNiO1xuXG4gICAgLmFsZXJ0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICB9XG59XG5cbi50YXNrLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuNXJlbTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcblxuICAuZm9ybS1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG5cbiAgICAucmVxdWlyZWQge1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgfVxuXG4gICAgLmhpbnQge1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMSk7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICB9XG5cbiAgICAmLmlzLWludmFsaWQge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjVmNTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDIyMCwgNTMsIDY5LCAwLjEpO1xuICAgICAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi50ZXh0YXJlYSB7XG4gICAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgfVxuICB9XG5cbiAgLmZpZWxkLWVycm9yIHtcbiAgICBjb2xvcjogI2RjMzU0NTtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcblxuICAgIHNwYW4ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmNoZWNrYm94LWdyb3VwIHtcbiAgICAuY2hlY2tib3gtbGFiZWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDAuNzVyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgY29sb3I6ICM2NjY7XG5cbiAgICAgIC5jaGVja2JveC1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYWNjZW50LWNvbG9yOiAjMDA3YmZmO1xuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5mb3JtLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxLjVyZW07XG5cbiAgLmZvcm0tZ3JvdXAge1xuICAgIGdhcDogMC41cmVtO1xuICB9XG59XG5cbi5mb3JtLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG5cbiAgLmJ0biB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgfVxuXG4gICAgJi5idG4tcHJpbWFyeSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgICAgIH1cblxuICAgICAgLnNwaW5uZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAwLjVyZW07XG5cbiAgICAgICAgLnNwaW5uZXItZG90IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYuYnRuLXNlY29uZGFyeSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xuICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVhNjI2ODtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgZGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRhc2stZm9ybS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAuZm9ybS1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMS41cmVtO1xuICB9XG5cbiAgLmZvcm0tYWN0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8109:
/*!*************************************************************!*\
  !*** ./src/app/components/task-list/task-list.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskListComponent: () => (/* binding */ TaskListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/task.service */ 2611);
/* harmony import */ var _models_task_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/task.model */ 1043);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3900);











const _forTrack0 = ($index, $item) => $item.id;
function TaskListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function TaskListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading tasks...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function TaskListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDCCB No tasks found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Create a new task to get started");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function TaskListComponent_Conditional_25_For_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Due:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 1, task_r3.dueDate, "MMM d, yyyy"));
  }
}
function TaskListComponent_Conditional_25_For_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r3.category);
  }
}
function TaskListComponent_Conditional_25_For_2_Conditional_31_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tag_r4);
  }
}
function TaskListComponent_Conditional_25_For_2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, TaskListComponent_Conditional_25_For_2_Conditional_31_For_2_Template, 2, 1, "span", 37, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](task_r3.tags);
  }
}
function TaskListComponent_Conditional_25_For_2_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Are you sure you want to delete this task?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 38)(4, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskListComponent_Conditional_25_For_2_Conditional_32_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.deleteTask($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskListComponent_Conditional_25_For_2_Conditional_32_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.cancelDelete($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function TaskListComponent_Conditional_25_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TaskListComponent_Conditional_25_For_2_Template_select_change_3_listener($event) {
      const task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.handleStatusChange($event, task_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "In Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 26)(15, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskListComponent_Conditional_25_For_2_Template_button_click_15_listener($event) {
      const task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.toggleStarred($event, task_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskListComponent_Conditional_25_For_2_Template_button_click_17_listener() {
      const task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.editTask(task_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " \u270F\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskListComponent_Conditional_25_For_2_Template_button_click_19_listener($event) {
      const task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.confirmDelete($event, task_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " \uD83D\uDDD1\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 31)(24, "div", 32)(25, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Priority:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, TaskListComponent_Conditional_25_For_2_Conditional_29_Template, 6, 4, "div", 32)(30, TaskListComponent_Conditional_25_For_2_Conditional_30_Template, 5, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, TaskListComponent_Conditional_25_For_2_Conditional_31_Template, 3, 0, "div", 34)(32, TaskListComponent_Conditional_25_For_2_Conditional_32_Template, 8, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("completed", task_r3.status === ctx_r0.TaskStatus.COMPLETED);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r0.getStatusClass(task_r3.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", task_r3.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("starred", task_r3.starred);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", task_r3.starred ? "\u2B50" : "\u2606", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("priority " + ctx_r0.getPriorityClass(task_r3.priority));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", task_r3.priority, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](29, task_r3.dueDate ? 29 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](30, task_r3.category ? 30 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](31, task_r3.tags && task_r3.tags.length > 0 ? 31 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](32, ctx_r0.deleteConfirmId === task_r3.id ? 32 : -1);
  }
}
function TaskListComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, TaskListComponent_Conditional_25_For_2_Template, 33, 17, "div", 16, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r0.filteredTasks);
  }
}
class TaskListComponent {
  constructor() {
    this.taskService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.tasks = [];
    this.filteredTasks = [];
    this.loading = false;
    this.error = '';
    this.searchTerm = '';
    this.selectedFilter = 'all';
    this.deleteConfirmId = null;
    // Status and priority enums for template
    this.TaskStatus = _models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskStatus;
    this.TaskPriority = _models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskPriority;
  }
  ngOnInit() {
    this.loadTasks();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadTasks() {
    this.loading = true;
    this.error = '';
    this.taskService.getAllTasks().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: tasks => {
        this.tasks = tasks;
        this.applyFilters();
        this.loading = false;
      },
      error: error => {
        this.error = error.message || 'Failed to load tasks';
        this.loading = false;
      }
    });
  }
  applyFilters() {
    let filtered = this.tasks;
    // Apply filter
    switch (this.selectedFilter) {
      case 'pending':
        filtered = filtered.filter(t => t.status === _models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskStatus.PENDING);
        break;
      case 'inProgress':
        filtered = filtered.filter(t => t.status === _models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskStatus.IN_PROGRESS);
        break;
      case 'completed':
        filtered = filtered.filter(t => t.status === _models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskStatus.COMPLETED);
        break;
      case 'starred':
        filtered = filtered.filter(t => t.starred);
        break;
    }
    // Apply search
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(t => t.title.toLowerCase().includes(term) || t.description.toLowerCase().includes(term));
    }
    this.filteredTasks = filtered;
  }
  onFilterChange() {
    this.applyFilters();
  }
  onSearchChange() {
    this.applyFilters();
  }
  onStatusChange(task, newStatus) {
    this.taskService.updateTaskStatus(task.id, newStatus).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.applyFilters();
      },
      error: error => {
        this.error = error.message || 'Failed to update task status';
      }
    });
  }
  handleStatusChange(event, task) {
    const selectElement = event.target;
    this.onStatusChange(task, selectElement.value);
  }
  toggleStarred(event, task) {
    event.stopPropagation();
    this.taskService.toggleStarred(task.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.applyFilters();
      },
      error: error => {
        this.error = error.message || 'Failed to toggle starred';
      }
    });
  }
  editTask(task) {
    this.router.navigate(['/tasks', task.id, 'edit']);
  }
  confirmDelete(event, taskId) {
    event.stopPropagation();
    this.deleteConfirmId = taskId;
  }
  cancelDelete(event) {
    event.stopPropagation();
    this.deleteConfirmId = null;
  }
  deleteTask(event) {
    event.stopPropagation();
    if (!this.deleteConfirmId) return;
    this.taskService.deleteTask(this.deleteConfirmId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.deleteConfirmId = null;
        this.applyFilters();
      },
      error: error => {
        this.error = error.message || 'Failed to delete task';
        this.deleteConfirmId = null;
      }
    });
  }
  getPriorityClass(priority) {
    switch (priority) {
      case _models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskPriority.HIGH:
        return 'priority-high';
      case _models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskPriority.MEDIUM:
        return 'priority-medium';
      case _models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskPriority.LOW:
        return 'priority-low';
      default:
        return '';
    }
  }
  getStatusClass(status) {
    switch (status) {
      case _models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskStatus.PENDING:
        return 'status-pending';
      case _models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskStatus.IN_PROGRESS:
        return 'status-in-progress';
      case _models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskStatus.COMPLETED:
        return 'status-completed';
      case _models_task_model__WEBPACK_IMPORTED_MODULE_1__.TaskStatus.CANCELLED:
        return 'status-cancelled';
      default:
        return '';
    }
  }
  createNewTask() {
    this.router.navigate(['/tasks/create']);
  }
  static {
    this.ɵfac = function TaskListComponent_Factory(t) {
      return new (t || TaskListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TaskListComponent,
      selectors: [["app-task-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 26,
      vars: 15,
      consts: [[1, "task-list-container"], [1, "task-list-header"], [1, "btn", "btn-primary", 3, "click"], [1, "alert", "alert-error"], [1, "task-controls"], [1, "search-box"], ["type", "text", "placeholder", "Search tasks...", 1, "search-input", 3, "ngModelChange", "change", "ngModel"], [1, "search-icon"], [1, "filter-buttons"], [1, "filter-btn", 3, "click"], [1, "loading-container"], [1, "empty-state"], [1, "tasks-grid"], [1, "alert-icon"], [1, "spinner"], [1, "empty-state-hint"], [1, "task-card", 3, "completed"], [1, "task-card"], [1, "task-card-header"], [1, "task-title-section"], [1, "status-select", 3, "change", "value"], ["value", "PENDING"], ["value", "IN_PROGRESS"], ["value", "COMPLETED"], ["value", "CANCELLED"], [1, "task-title"], [1, "task-actions"], ["title", "Toggle starred", 1, "action-btn", "star-btn", 3, "click"], ["title", "Edit task", 1, "action-btn", "edit-btn", 3, "click"], ["title", "Delete task", 1, "action-btn", "delete-btn", 3, "click"], [1, "task-description"], [1, "task-meta"], [1, "meta-item"], [1, "meta-label"], [1, "task-tags"], [1, "delete-confirmation"], [1, "category-badge"], [1, "tag"], [1, "confirmation-buttons"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-secondary", 3, "click"]],
      template: function TaskListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "My Tasks");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_4_listener() {
            return ctx.createNewTask();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "+ Create Task");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TaskListComponent_Conditional_6_Template, 5, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function TaskListComponent_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TaskListComponent_Template_input_change_9_listener() {
            return ctx.onSearchChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\uD83D\uDD0D");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_13_listener() {
            ctx.selectedFilter = "all";
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " All ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_15_listener() {
            ctx.selectedFilter = "pending";
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Pending ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_17_listener() {
            ctx.selectedFilter = "inProgress";
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " In Progress ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_19_listener() {
            ctx.selectedFilter = "completed";
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Completed ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_21_listener() {
            ctx.selectedFilter = "starred";
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " \u2B50 Starred ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, TaskListComponent_Conditional_23_Template, 4, 0, "div", 10)(24, TaskListComponent_Conditional_24_Template, 5, 0, "div", 11)(25, TaskListComponent_Conditional_25_Template, 3, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](6, ctx.error ? 6 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedFilter === "all");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedFilter === "pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedFilter === "inProgress");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedFilter === "completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedFilter === "starred");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](23, ctx.loading ? 23 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](24, !ctx.loading && ctx.filteredTasks.length === 0 ? 24 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](25, !ctx.loading && ctx.filteredTasks.length > 0 ? 25 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel],
      styles: [".task-list-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.task-list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.task-list-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #333;\n  margin: 0;\n}\n\n.task-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.task-controls[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.task-controls[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid #ddd;\n  border-radius: 0.5rem;\n  font-size: 0.95rem;\n  transition: border-color 0.2s;\n}\n.task-controls[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.task-controls[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #999;\n}\n.task-controls[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.task-controls[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  padding: 0.6rem 1rem;\n  border: 1px solid #ddd;\n  background-color: #fff;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: all 0.2s;\n}\n.task-controls[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: #007bff;\n  color: #007bff;\n}\n.task-controls[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%]   .filter-btn.active[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n  border-color: #007bff;\n}\n\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 0.5rem;\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.alert.alert-error[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #007bff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1rem;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  background-color: #f9f9f9;\n  border-radius: 0.5rem;\n  border: 2px dashed #ddd;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  color: #666;\n  font-size: 1.1rem;\n}\n.empty-state[_ngcontent-%COMP%]   p.empty-state-hint[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 0.9rem;\n}\n\n.tasks-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n\n.task-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: all 0.2s;\n  position: relative;\n}\n.task-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n  border-color: #007bff;\n}\n.task-card.completed[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  opacity: 0.8;\n}\n.task-card.completed[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #999;\n}\n.task-card[_ngcontent-%COMP%]   .task-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.task-card[_ngcontent-%COMP%]   .task-card-header[_ngcontent-%COMP%]   .task-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n  flex: 1;\n}\n.task-card[_ngcontent-%COMP%]   .task-card-header[_ngcontent-%COMP%]   .task-title-section[_ngcontent-%COMP%]   .status-select[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.6rem;\n  border: 1px solid #ddd;\n  border-radius: 0.4rem;\n  font-size: 0.85rem;\n  cursor: pointer;\n  background-color: white;\n  min-width: 80px;\n}\n.task-card[_ngcontent-%COMP%]   .task-card-header[_ngcontent-%COMP%]   .task-title-section[_ngcontent-%COMP%]   .status-select.status-pending[_ngcontent-%COMP%] {\n  border-color: #ffc107;\n  color: #ff8c00;\n}\n.task-card[_ngcontent-%COMP%]   .task-card-header[_ngcontent-%COMP%]   .task-title-section[_ngcontent-%COMP%]   .status-select.status-in-progress[_ngcontent-%COMP%] {\n  border-color: #17a2b8;\n  color: #0066cc;\n}\n.task-card[_ngcontent-%COMP%]   .task-card-header[_ngcontent-%COMP%]   .task-title-section[_ngcontent-%COMP%]   .status-select.status-completed[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  color: #017f29;\n}\n.task-card[_ngcontent-%COMP%]   .task-card-header[_ngcontent-%COMP%]   .task-title-section[_ngcontent-%COMP%]   .status-select.status-cancelled[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  color: #721c24;\n}\n.task-card[_ngcontent-%COMP%]   .task-card-header[_ngcontent-%COMP%]   .task-title-section[_ngcontent-%COMP%]   .task-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: #333;\n  word-break: break-word;\n  flex: 1;\n}\n.task-card[_ngcontent-%COMP%]   .task-card-header[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.task-card[_ngcontent-%COMP%]   .task-card-header[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  padding: 0.25rem;\n  transition: transform 0.2s;\n}\n.task-card[_ngcontent-%COMP%]   .task-card-header[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n.task-card[_ngcontent-%COMP%]   .task-card-header[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   .action-btn.star-btn.starred[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 0 2px gold);\n}\n.task-card[_ngcontent-%COMP%]   .task-description[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.95rem;\n  margin: 0.75rem 0;\n  line-height: 1.4;\n}\n.task-card[_ngcontent-%COMP%]   .task-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin: 1rem 0;\n  font-size: 0.85rem;\n}\n.task-card[_ngcontent-%COMP%]   .task-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.task-card[_ngcontent-%COMP%]   .task-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .meta-label[_ngcontent-%COMP%] {\n  color: #999;\n  font-weight: 500;\n}\n.task-card[_ngcontent-%COMP%]   .task-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .priority[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 0.25rem;\n  font-weight: 500;\n  font-size: 0.8rem;\n}\n.task-card[_ngcontent-%COMP%]   .task-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .priority.priority-high[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n}\n.task-card[_ngcontent-%COMP%]   .task-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .priority.priority-medium[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  color: #e65100;\n}\n.task-card[_ngcontent-%COMP%]   .task-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .priority.priority-low[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.task-card[_ngcontent-%COMP%]   .task-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .category-badge[_ngcontent-%COMP%] {\n  background-color: #e0e7ff;\n  color: #3f51b5;\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n}\n.task-card[_ngcontent-%COMP%]   .task-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.task-card[_ngcontent-%COMP%]   .task-tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  color: #333;\n  padding: 0.3rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.8rem;\n  display: inline-block;\n}\n.task-card[_ngcontent-%COMP%]   .delete-confirmation[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.95);\n  border-radius: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  z-index: 10;\n}\n.task-card[_ngcontent-%COMP%]   .delete-confirmation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0;\n  text-align: center;\n  font-size: 1rem;\n}\n.task-card[_ngcontent-%COMP%]   .delete-confirmation[_ngcontent-%COMP%]   .confirmation-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.task-card[_ngcontent-%COMP%]   .delete-confirmation[_ngcontent-%COMP%]   .confirmation-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.5rem;\n  border: none;\n  border-radius: 0.4rem;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.task-card[_ngcontent-%COMP%]   .delete-confirmation[_ngcontent-%COMP%]   .confirmation-buttons[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n}\n.task-card[_ngcontent-%COMP%]   .delete-confirmation[_ngcontent-%COMP%]   .confirmation-buttons[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #c82333;\n}\n.task-card[_ngcontent-%COMP%]   .delete-confirmation[_ngcontent-%COMP%]   .confirmation-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.task-card[_ngcontent-%COMP%]   .delete-confirmation[_ngcontent-%COMP%]   .confirmation-buttons[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n}\n\n@media (max-width: 768px) {\n  .task-list-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .task-list-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: flex-start;\n  }\n  .task-list-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .task-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .task-controls[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .task-controls[_ngcontent-%COMP%]   .filter-buttons[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .tasks-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .task-card[_ngcontent-%COMP%]   .task-card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .task-card[_ngcontent-%COMP%]   .task-card-header[_ngcontent-%COMP%]   .task-title-section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .task-card[_ngcontent-%COMP%]   .task-card-header[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBRjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0UsV0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFBTjtBQUVNO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNENBQUE7QUFBUjtBQUlJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQUZOO0FBTUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFKSjtBQU1JO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUpOO0FBTU07RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFKUjtBQU9NO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFMUjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVJGO0FBVUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQVJKO0FBVUk7RUFDRSxpQkFBQTtBQVJOOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBVkY7QUFZRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FBVko7QUFhRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBWEo7O0FBZUE7RUFDRTtJQUFLLHVCQUFBO0VBWEw7RUFZQTtJQUFPLHlCQUFBO0VBVFA7QUFDRjtBQVdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBVEY7QUFXRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBVEo7QUFXSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQVROOztBQWNBO0VBQ0UsYUFBQTtFQUNBLDREQUFBO0VBQ0EsV0FBQTtBQVhGOztBQWNBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQVhGO0FBYUU7RUFDRSwwQ0FBQTtFQUNBLHFCQUFBO0FBWEo7QUFjRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQVpKO0FBY0k7RUFDRSw2QkFBQTtFQUNBLFdBQUE7QUFaTjtBQWdCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBZEo7QUFnQkk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsT0FBQTtBQWROO0FBZ0JNO0VBQ0Usc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBZFI7QUFnQlE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFkVjtBQWlCUTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQWZWO0FBa0JRO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBaEJWO0FBbUJRO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBakJWO0FBcUJNO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtBQW5CUjtBQXVCSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBckJOO0FBdUJNO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQXJCUjtBQXVCUTtFQUNFLHFCQUFBO0FBckJWO0FBeUJVO0VBQ0UsaUNBQUE7QUF2Qlo7QUE4QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBNUJKO0FBK0JFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBN0JKO0FBK0JJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQTdCTjtBQStCTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQTdCUjtBQWdDTTtFQUNFLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBOUJSO0FBZ0NRO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBOUJWO0FBaUNRO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBL0JWO0FBa0NRO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBaENWO0FBb0NNO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQWxDUjtBQXVDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBckNKO0FBdUNJO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFyQ047QUF5Q0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBdkNKO0FBeUNJO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUF2Q047QUEwQ0k7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQXhDTjtBQTBDTTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQXhDUjtBQTBDUTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQXhDVjtBQTBDVTtFQUNFLHlCQUFBO0FBeENaO0FBNENRO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBMUNWO0FBNENVO0VBQ0UseUJBQUE7QUExQ1o7O0FBbURBO0VBQ0U7SUFDRSxhQUFBO0VBaERGO0VBbURBO0lBQ0Usc0JBQUE7SUFDQSxTQUFBO0lBQ0EsdUJBQUE7RUFqREY7RUFtREU7SUFDRSxpQkFBQTtFQWpESjtFQXFEQTtJQUNFLHNCQUFBO0VBbkRGO0VBcURFO0lBQ0UsV0FBQTtFQW5ESjtFQXNERTtJQUNFLFdBQUE7SUFDQSx1QkFBQTtFQXBESjtFQXdEQTtJQUNFLDBCQUFBO0VBdERGO0VBMERFO0lBQ0Usc0JBQUE7RUF4REo7RUEwREk7SUFDRSxXQUFBO0VBeEROO0VBMkRJO0lBQ0UsV0FBQTtJQUNBLHlCQUFBO0VBekROO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay1saXN0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnRhc2stbGlzdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLnRhc2stY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIC5zZWFyY2gtYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuXG4gICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbSAwLjc1cmVtIDIuNXJlbTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNlYXJjaC1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDAuNzVyZW07XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIGNvbG9yOiAjOTk5O1xuICAgIH1cbiAgfVxuXG4gIC5maWx0ZXItYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAuZmlsdGVyLWJ0biB7XG4gICAgICBwYWRkaW5nOiAwLjZyZW0gMXJlbTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgICAgICAgY29sb3I6ICMwMDdiZmY7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5hbGVydCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNzVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJi5hbGVydC1lcnJvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgICBjb2xvcjogIzcyMWMyNDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjVjNmNiO1xuXG4gICAgLmFsZXJ0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICB9XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogM3JlbTtcblxuICAuc3Bpbm5lciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMDA3YmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4uZW1wdHktc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNkZGQ7XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcblxuICAgICYuZW1wdHktc3RhdGUtaGludCB7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cbiAgfVxufVxuXG4udGFza3MtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcbiAgZ2FwOiAxLjVyZW07XG59XG5cbi50YXNrLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICB9XG5cbiAgJi5jb21wbGV0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgb3BhY2l0eTogMC44O1xuXG4gICAgLnRhc2stdGl0bGUge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICB9XG4gIH1cblxuICAudGFzay1jYXJkLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICAudGFzay10aXRsZS1zZWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDAuNzVyZW07XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIGZsZXg6IDE7XG5cbiAgICAgIC5zdGF0dXMtc2VsZWN0IHtcbiAgICAgICAgcGFkZGluZzogMC40cmVtIDAuNnJlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIG1pbi13aWR0aDogODBweDtcblxuICAgICAgICAmLnN0YXR1cy1wZW5kaW5nIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmMxMDc7XG4gICAgICAgICAgY29sb3I6ICNmZjhjMDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLnN0YXR1cy1pbi1wcm9ncmVzcyB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTdhMmI4O1xuICAgICAgICAgIGNvbG9yOiAjMDA2NmNjO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zdGF0dXMtY29tcGxldGVkIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG4gICAgICAgICAgY29sb3I6ICMwMTdmMjk7XG4gICAgICAgIH1cblxuICAgICAgICAmLnN0YXR1cy1jYW5jZWxsZWQge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbiAgICAgICAgICBjb2xvcjogIzcyMWMyNDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudGFzay10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50YXNrLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMC41cmVtO1xuXG4gICAgICAuYWN0aW9uLWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zdGFyLWJ0biB7XG4gICAgICAgICAgJi5zdGFycmVkIHtcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDJweCBnb2xkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGFzay1kZXNjcmlwdGlvbiB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIG1hcmdpbjogMC43NXJlbSAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIH1cblxuICAudGFzay1tZXRhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDFyZW07XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuXG4gICAgLm1ldGEtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAwLjVyZW07XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAubWV0YS1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuXG4gICAgICAucHJpb3JpdHkge1xuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuXG4gICAgICAgICYucHJpb3JpdHktaGlnaCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcbiAgICAgICAgICBjb2xvcjogI2M2MjgyODtcbiAgICAgICAgfVxuXG4gICAgICAgICYucHJpb3JpdHktbWVkaXVtIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2UwO1xuICAgICAgICAgIGNvbG9yOiAjZTY1MTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5wcmlvcml0eS1sb3cge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGY1ZTk7XG4gICAgICAgICAgY29sb3I6ICMyZTdkMzI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNhdGVnb3J5LWJhZGdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTdmZjtcbiAgICAgICAgY29sb3I6ICMzZjUxYjU7XG4gICAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGFzay10YWdzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuXG4gICAgLnRhZyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBwYWRkaW5nOiAwLjNyZW0gMC43NXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gIH1cblxuICAuZGVsZXRlLWNvbmZpcm1hdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICAgIHotaW5kZXg6IDEwO1xuXG4gICAgcCB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgLmNvbmZpcm1hdGlvbi1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDFyZW07XG5cbiAgICAgIC5idG4ge1xuICAgICAgICBwYWRkaW5nOiAwLjZyZW0gMS41cmVtO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cbiAgICAgICAgJi5idG4tZGFuZ2VyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M4MjMzMztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1zZWNvbmRhcnkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2MjY4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50YXNrLWxpc3QtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgLnRhc2stbGlzdC1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuICB9XG5cbiAgLnRhc2stY29udHJvbHMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuc2VhcmNoLWJveCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuZmlsdGVyLWJ1dHRvbnMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAudGFza3MtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAudGFzay1jYXJkIHtcbiAgICAudGFzay1jYXJkLWhlYWRlciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAudGFzay10aXRsZS1zZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC50YXNrLWFjdGlvbnMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1620:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);





/**
 * Enhanced Auth Guard - Protects authenticated routes
 * Validates token and checks authentication status
 * Redirects unauthenticated users to login
 */
class AuthGuard {
  constructor() {
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  }
  canActivate(route, state) {
    // Check if user is authenticated
    if (this.authService.isAuthenticated()) {
      // Validate token with backend (optional but recommended)
      return this.authService.validateToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(isValid => {
        if (isValid) {
          return true;
        }
        // Token is invalid, redirect to login
        this.authService.logout();
        this.router.navigate(['/auth/login'], {
          queryParams: {
            returnUrl: state.url
          }
        });
        return false;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => {
        // Validation request failed, logout and redirect
        this.authService.logout();
        this.router.navigate(['/auth/login']);
        return [false];
      }));
    }
    // Not logged in, redirect to login page with return URL
    this.router.navigate(['/auth/login'], {
      queryParams: {
        returnUrl: state.url
      }
    });
    return false;
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1934:
/*!*****************************************!*\
  !*** ./src/app/guards/no-auth.guard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoAuthGuard: () => (/* binding */ NoAuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);




/**
 * No Auth Guard - Prevents authenticated users from accessing auth pages
 * Redirects authenticated users to dashboard/tasks
 * Allows unauthenticated users to access login and signup pages
 */
class NoAuthGuard {
  constructor() {
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  }
  canActivate() {
    // If already authenticated, redirect to tasks/dashboard
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/tasks']);
      return false;
    }
    // Allow unauthenticated users to access auth pages
    return true;
  }
  static {
    this.ɵfac = function NoAuthGuard_Factory(t) {
      return new (t || NoAuthGuard)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NoAuthGuard,
      factory: NoAuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 100:
/*!*************************************************!*\
  !*** ./src/app/guards/unsaved-changes.guard.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsavedChangesGuard: () => (/* binding */ UnsavedChangesGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

/**
 * Unsaved Changes Guard - Prevents accidental navigation away from forms
 * Shows confirmation dialog when user tries to navigate without saving changes
 */
class UnsavedChangesGuard {
  canDeactivate(component) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
  static {
    this.ɵfac = function UnsavedChangesGuard_Factory(t) {
      return new (t || UnsavedChangesGuard)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UnsavedChangesGuard,
      factory: UnsavedChangesGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9339:
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtInterceptor: () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);






class JwtInterceptor {
  constructor() {
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  }
  intercept(request, next) {
    // Get the auth token from the auth service
    const authToken = this.authService.getToken();
    // Clone the request and add JWT token to Authorization header
    if (authToken) {
      const clonedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
      return next.handle(clonedRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
        if (error.status === 401) {
          // Unauthorized - clear auth data and redirect to login
          this.authService.logout();
          this.router.navigate(['/auth/login']);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
      }));
    }
    // If no token, pass the original request
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      if (error.status === 401) {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
  static {
    this.ɵfac = function JwtInterceptor_Factory(t) {
      return new (t || JwtInterceptor)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: JwtInterceptor,
      factory: JwtInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 1043:
/*!**************************************!*\
  !*** ./src/app/models/task.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskPriority: () => (/* binding */ TaskPriority),
/* harmony export */   TaskStatus: () => (/* binding */ TaskStatus)
/* harmony export */ });
// Task status enum
var TaskStatus;
(function (TaskStatus) {
  TaskStatus["PENDING"] = "PENDING";
  TaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
  TaskStatus["COMPLETED"] = "COMPLETED";
  TaskStatus["CANCELLED"] = "CANCELLED";
})(TaskStatus || (TaskStatus = {}));
// Task priority enum
var TaskPriority;
(function (TaskPriority) {
  TaskPriority["LOW"] = "LOW";
  TaskPriority["MEDIUM"] = "MEDIUM";
  TaskPriority["HIGH"] = "HIGH";
})(TaskPriority || (TaskPriority = {}));

/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);






class AuthService {
  constructor() {
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth`;
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(this.getUserFromStorage());
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(this.getTokenFromStorage());
    this.token$ = this.tokenSubject.asObservable();
    this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(!!this.getTokenFromStorage());
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  }
  /**
   * Login with username and password
   */
  login(authRequest) {
    return this.http.post(`${this.apiUrl}/login`, authRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success && response.data) {
        this.setToken(response.data.token);
        this.setCurrentUser(response.data);
        return response.data;
      }
      throw new Error(response.error || 'Login failed');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Login error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(error.error?.error || 'Login failed'));
    }));
  }
  /**
   * Signup with new user credentials
   */
  signup(signupRequest) {
    return this.http.post(`${this.apiUrl}/signup`, signupRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success && response.data) {
        this.setToken(response.data.token);
        this.setCurrentUser(response.data);
        return response.data;
      }
      throw new Error(response.error || 'Signup failed');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Signup error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(error.error?.error || 'Signup failed'));
    }));
  }
  /**
   * Validate current token
   */
  validateToken() {
    const token = this.getTokenFromStorage();
    if (!token) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(observer => {
        observer.next(false);
        observer.complete();
      });
    }
    return this.http.post(`${this.apiUrl}/validate`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => response.success), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => {
      this.logout();
      return new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(observer => {
        observer.next(false);
        observer.complete();
      });
    }));
  }
  /**
   * Logout user
   */
  logout() {
    this.removeToken();
    this.removeCurrentUser();
    this.tokenSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
  }
  /**
   * Get current user profile
   */
  getCurrentUser() {
    return this.http.get(`${this.apiUrl}/profile`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success && response.data) {
        this.setCurrentUser(response.data);
        return response.data;
      }
      throw new Error('Failed to fetch profile');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Get profile error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error('Failed to fetch profile'));
    }));
  }
  /**
   * Get current token
   */
  getToken() {
    return this.tokenSubject.value;
  }
  /**
   * Check if user is authenticated
   */
  isAuthenticated() {
    return !!this.getToken();
  }
  /**
   * Get current user synchronously
   */
  getCurrentUserSync() {
    return this.currentUserSubject.value;
  }
  /**
   * Private helper methods
   */
  setToken(token) {
    localStorage.setItem('auth_token', token);
    this.tokenSubject.next(token);
    this.isAuthenticatedSubject.next(true);
  }
  getTokenFromStorage() {
    return localStorage.getItem('auth_token');
  }
  removeToken() {
    localStorage.removeItem('auth_token');
  }
  setCurrentUser(user) {
    const userId = 'userId' in user ? user.userId : 'id' in user ? user.id : '';
    const active = 'active' in user ? user.active : true;
    const emailVerified = 'emailVerified' in user ? user.emailVerified : false;
    const createdAt = 'createdAt' in user ? user.createdAt : new Date().toISOString();
    const updatedAt = 'updatedAt' in user ? user.updatedAt : new Date().toISOString();
    const firstName = 'firstName' in user ? user.firstName : undefined;
    const lastName = 'lastName' in user ? user.lastName : undefined;
    const phoneNumber = 'phoneNumber' in user ? user.phoneNumber : undefined;
    const lastLoginAt = 'lastLoginAt' in user ? user.lastLoginAt : undefined;
    const userProfile = {
      id: userId,
      username: user.username,
      email: user.email,
      active,
      emailVerified,
      createdAt,
      updatedAt,
      firstName,
      lastName,
      phoneNumber,
      lastLoginAt
    };
    localStorage.setItem('current_user', JSON.stringify(userProfile));
    this.currentUserSubject.next(userProfile);
  }
  getUserFromStorage() {
    const userJson = localStorage.getItem('current_user');
    if (userJson) {
      try {
        return JSON.parse(userJson);
      } catch {
        localStorage.removeItem('current_user');
        return null;
      }
    }
    return null;
  }
  removeCurrentUser() {
    localStorage.removeItem('current_user');
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2611:
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskService: () => (/* binding */ TaskService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);






class TaskService {
  constructor() {
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/tasks`;
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    // BehaviorSubjects for state management
    this.tasksSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.tasks$ = this.tasksSubject.asObservable();
    this.selectedTaskSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.selectedTask$ = this.selectedTaskSubject.asObservable();
    this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this.loading$ = this.loadingSubject.asObservable();
    this.statsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.stats$ = this.statsSubject.asObservable();
  }
  /**
   * Get all tasks for current user
   */
  getAllTasks() {
    this.loadingSubject.next(true);
    return this.http.get(this.apiUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success && response.data) {
        this.tasksSubject.next(response.data);
        return response.data;
      }
      throw new Error(response.error || 'Failed to fetch tasks');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Get tasks error:', error);
      this.loadingSubject.next(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(error.error?.error || 'Failed to fetch tasks'));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.loadingSubject.next(false)));
  }
  /**
   * Get single task by ID
   */
  getTaskById(taskId) {
    return this.http.get(`${this.apiUrl}/${taskId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success && response.data) {
        this.selectedTaskSubject.next(response.data);
        return response.data;
      }
      throw new Error(response.error || 'Failed to fetch task');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Get task error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(error.error?.error || 'Failed to fetch task'));
    }));
  }
  /**
   * Create new task
   */
  createTask(taskData) {
    this.loadingSubject.next(true);
    return this.http.post(this.apiUrl, taskData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success && response.data) {
        const currentTasks = this.tasksSubject.value;
        this.tasksSubject.next([...currentTasks, response.data]);
        return response.data;
      }
      throw new Error(response.error || 'Failed to create task');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Create task error:', error);
      this.loadingSubject.next(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(error.error?.error || 'Failed to create task'));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.loadingSubject.next(false)));
  }
  /**
   * Update existing task
   */
  updateTask(taskId, taskData) {
    this.loadingSubject.next(true);
    return this.http.put(`${this.apiUrl}/${taskId}`, taskData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success && response.data) {
        const updatedTasks = this.tasksSubject.value.map(t => t.id === taskId ? response.data : t).filter(t => !!t);
        this.tasksSubject.next(updatedTasks);
        this.selectedTaskSubject.next(response.data);
        return response.data;
      }
      throw new Error(response.error || 'Failed to update task');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Update task error:', error);
      this.loadingSubject.next(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(error.error?.error || 'Failed to update task'));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.loadingSubject.next(false)));
  }
  /**
   * Delete task
   */
  deleteTask(taskId) {
    this.loadingSubject.next(true);
    return this.http.delete(`${this.apiUrl}/${taskId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success) {
        const updatedTasks = this.tasksSubject.value.filter(t => t.id !== taskId);
        this.tasksSubject.next(updatedTasks);
        if (this.selectedTaskSubject.value?.id === taskId) {
          this.selectedTaskSubject.next(null);
        }
        return undefined;
      }
      throw new Error(response.error || 'Failed to delete task');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Delete task error:', error);
      this.loadingSubject.next(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(error.error?.error || 'Failed to delete task'));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.loadingSubject.next(false)));
  }
  /**
   * Get tasks by status
   */
  getTasksByStatus(status) {
    return this.http.get(`${this.apiUrl}/status/${status}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error(response.error || 'Failed to fetch tasks');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Get tasks by status error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(error.error?.error || 'Failed to fetch tasks'));
    }));
  }
  /**
   * Update task status
   */
  updateTaskStatus(taskId, status) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('status', status);
    return this.http.patch(`${this.apiUrl}/${taskId}/status`, {}, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success && response.data) {
        const updatedTasks = this.tasksSubject.value.map(t => t.id === taskId ? response.data : t).filter(t => !!t);
        this.tasksSubject.next(updatedTasks);
        this.selectedTaskSubject.next(response.data);
        return response.data;
      }
      throw new Error(response.error || 'Failed to update status');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Update status error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(error.error?.error || 'Failed to update status'));
    }));
  }
  /**
   * Mark task as completed
   */
  completeTask(taskId) {
    return this.http.post(`${this.apiUrl}/${taskId}/complete`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success && response.data) {
        const updatedTasks = this.tasksSubject.value.map(t => t.id === taskId ? response.data : t).filter(t => !!t);
        this.tasksSubject.next(updatedTasks);
        this.selectedTaskSubject.next(response.data);
        return response.data;
      }
      throw new Error(response.error || 'Failed to complete task');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Complete task error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(error.error?.error || 'Failed to complete task'));
    }));
  }
  /**
   * Mark task as in progress
   */
  markInProgress(taskId) {
    return this.http.post(`${this.apiUrl}/${taskId}/in-progress`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success && response.data) {
        const updatedTasks = this.tasksSubject.value.map(t => t.id === taskId ? response.data : t).filter(t => !!t);
        this.tasksSubject.next(updatedTasks);
        return response.data;
      }
      throw new Error(response.error || 'Failed to mark task');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Mark in progress error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(error.error?.error || 'Failed to mark task'));
    }));
  }
  /**
   * Toggle task starred status
   */
  toggleStarred(taskId) {
    return this.http.post(`${this.apiUrl}/${taskId}/toggle-starred`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success && response.data) {
        const updatedTasks = this.tasksSubject.value.map(t => t.id === taskId ? response.data : t).filter(t => !!t);
        this.tasksSubject.next(updatedTasks);
        return response.data;
      }
      throw new Error(response.error || 'Failed to toggle starred');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Toggle starred error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(error.error?.error || 'Failed to toggle starred'));
    }));
  }
  /**
   * Get task statistics
   */
  getStats() {
    return this.http.get(`${this.apiUrl}/stats/overview`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success && response.data) {
        this.statsSubject.next(response.data);
        return response.data;
      }
      throw new Error(response.error || 'Failed to fetch stats');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Get stats error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(error.error?.error || 'Failed to fetch stats'));
    }));
  }
  /**
   * Search tasks with search term
   */
  searchTasks(searchTerm) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('q', searchTerm);
    return this.http.get(`${this.apiUrl}/search`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error(response.error || 'Search failed');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Search error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(error.error?.error || 'Search failed'));
    }));
  }
  /**
   * Get completed tasks
   */
  getCompletedTasks() {
    return this.http.get(`${this.apiUrl}/completed`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error(response.error || 'Failed to fetch completed tasks');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Get completed tasks error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(error.error?.error || 'Failed to fetch tasks'));
    }));
  }
  /**
   * Get overdue tasks
   */
  getOverdueTasks() {
    return this.http.get(`${this.apiUrl}/overdue`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error(response.error || 'Failed to fetch overdue tasks');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Get overdue tasks error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(error.error?.error || 'Failed to fetch tasks'));
    }));
  }
  static {
    this.ɵfac = function TaskService_Factory(t) {
      return new (t || TaskService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TaskService,
      factory: TaskService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'http://localhost:8081/api'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map