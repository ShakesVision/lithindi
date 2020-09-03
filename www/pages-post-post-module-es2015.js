(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-post-post-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/post/post.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/post/post.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"interstitial()\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"changeFontSize(1)\" slot=\"end\">\n        <ion-icon slot=\"icon-only\" name=\"add-circle\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"changeFontSize(-1)\" slot=\"end\">\n        <ion-icon slot=\"icon-only\" name=\"remove-circle\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"changeFontSize(1)\" slot=\"end\">\n        <ion-icon slot=\"icon-only\" name=\"contrast\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"changeFontSize(1)\" slot=\"end\">\n        <ion-icon slot=\"icon-only\" name=\"information-circle\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"center\">\n    <span *ngFor=\"let label of post.labels\"> {{label}} </span>\n    <h1> {{post.title}} </h1>\n    <div id=\"timeRequired\"> 6 minutes read </div>\n  </div>\n  <div id=\"post-content\" [innerHTML]=\"post.content\"></div>\n  <div class=\"end-mark center\"></div>\n  <div>    \n    <ng-container *ngIf=\"comments.length == 0\">कोई टिप्पणी नहीं:</ng-container>    \n    <ng-container *ngIf=\"comments.length == 1\"> 1 टिप्पणी:</ng-container>\n    <ng-container *ngIf=\"comments.length > 1\"> {{comments.length}}     टिप्‍पणियां:</ng-container>        \n\n    <ng-container *ngIf=\"comments.length > 0\">\n      <ion-item *ngFor=\"let comment of comments\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"comment.author.image.url\" alt=\"\">\n        </ion-avatar>\n        <ion-label class=\"ion-text-wrap\">\n          <h3><a [href]=\"comment.author.url\"\n            rel=\"nofollow\">{{comment.author.displayName}}</a></h3>\n            <p class=\"comment-content\"> {{comment.content}} </p>          \n            <!-- <span class=\"datetime secondary-text\"> {{comment.published}} </span> -->\n        </ion-label>\n      </ion-item>    \n    </ng-container>    \n  </div>\n\n  <ion-button (click)=\"openUrl()\">\n    <ion-icon slot=\"end\" name=\"edit\"></ion-icon>  \n     <ion-label>अपनी टिप्पणी लिखें... </ion-label>\n    </ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/post/post-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/post/post-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageRoutingModule", function() { return PostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post.page */ "./src/app/pages/post/post.page.ts");




const routes = [
    {
        path: '',
        component: _post_page__WEBPACK_IMPORTED_MODULE_3__["PostPage"]
    }
];
let PostPageRoutingModule = class PostPageRoutingModule {
};
PostPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/post/post.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/post/post.module.ts ***!
  \*******************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _post_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-routing.module */ "./src/app/pages/post/post-routing.module.ts");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.page */ "./src/app/pages/post/post.page.ts");







let PostPageModule = class PostPageModule {
};
PostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _post_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostPageRoutingModule"]
        ],
        declarations: [_post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]]
    })
], PostPageModule);



/***/ }),

/***/ "./src/app/pages/post/post.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/post/post.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n#post-content {\n  font-family: \"Laila\";\n  line-height: 1.5em;\n  text-align: justify;\n  font-size: 18px;\n}\n.end-mark:after {\n  content: \"❦❦❦\";\n  /* Here comes the ivy leaf */\n  font-size: 150%;\n  /* Makes the leaf larger than the normal text */\n  position: relative;\n  /* This is just an homage to Albert Einstein */\n  top: 15px;\n}\nh1 {\n  font-size: 30px;\n  color: var(--ion-color-primary);\n}\n.center {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.center span {\n  color: grey;\n}\n#timeRequired {\n  color: var(--ion-color-secondary);\n  font-size: small;\n}\nhr {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdC9wb3N0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcG9zdC9EOlxcRGV2ZWxvcG1lbnRcXEFuZHJvaWRQcm9qZWN0c1xcSU9OSUMgUHJvamVjdHNcXGxpdGhpbmRpL3NyY1xcYXBwXFxwYWdlc1xccG9zdFxccG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBREVKO0FDQUE7RUFDSSxjQUFBO0VBQTRCLDRCQUFBO0VBQzVCLGVBQUE7RUFBaUIsK0NBQUE7RUFDakIsa0JBQUE7RUFBb0IsOENBQUE7RUFDcEIsU0FBQTtBRE1KO0FDSkE7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7QURPSjtBQ0xBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBRFFKO0FDTkE7RUFBZSxXQUFBO0FEVWY7QUNUQTtFQUFnQixpQ0FBQTtFQUFtQyxnQkFBQTtBRGNuRDtBQ1pBO0VBQUksWUFBQTtBRGdCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3QvcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4jcG9zdC1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiTGFpbGFcIjtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5lbmQtbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4p2m4p2m4p2mXCI7XG4gIC8qIEhlcmUgY29tZXMgdGhlIGl2eSBsZWFmICovXG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgLyogTWFrZXMgdGhlIGxlYWYgbGFyZ2VyIHRoYW4gdGhlIG5vcm1hbCB0ZXh0ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogVGhpcyBpcyBqdXN0IGFuIGhvbWFnZSB0byBBbGJlcnQgRWluc3RlaW4gKi9cbiAgdG9wOiAxNXB4O1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmNlbnRlciBzcGFuIHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbiN0aW1lUmVxdWlyZWQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbmhyIHtcbiAgY29sb3I6IGJsYWNrO1xufSIsIiNwb3N0LWNvbnRlbnQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYWlsYSc7XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC1zaXplOiAxOHB4OyAgICBcclxufVxyXG4uZW5kLW1hcms6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcXDI3NjZcXDI3NjZcXDI3NjZcIjsgLyogSGVyZSBjb21lcyB0aGUgaXZ5IGxlYWYgKi9cclxuICAgIGZvbnQtc2l6ZTogMTUwJTsgLyogTWFrZXMgdGhlIGxlYWYgbGFyZ2VyIHRoYW4gdGhlIG5vcm1hbCB0ZXh0ICovICAgICAgICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogVGhpcyBpcyBqdXN0IGFuIGhvbWFnZSB0byBBbGJlcnQgRWluc3RlaW4gKi9cclxuICAgIHRvcDogMTVweCAvKlZlcnRpY2FsIGRpc3RhbmNlIGZyb20gdGhlIGxhc3QgbGluZSBvZiB0ZXh0ICovXHJcbn1cclxuaDEgeyBcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7ICAgIFxyXG59XHJcbi5jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmNlbnRlciBzcGFuIHsgY29sb3I6IGdyZXk7IH1cclxuI3RpbWVSZXF1aXJlZCB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTsgZm9udC1zaXplOiBzbWFsbDsgfVxyXG5cclxuaHIge2NvbG9yOiBibGFjazt9Il19 */");

/***/ }),

/***/ "./src/app/pages/post/post.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/post/post.page.ts ***!
  \*****************************************/
/*! exports provided: PostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPage", function() { return PostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_blogger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/blogger.service */ "./src/app/services/blogger.service.ts");
/* harmony import */ var _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/browser-tab/ngx */ "./node_modules/@ionic-native/browser-tab/__ivy_ngcc__/ngx/index.js");





let PostPage = class PostPage {
    constructor(bloggerService, route, router, browserTab) {
        this.bloggerService = bloggerService;
        this.route = route;
        this.router = router;
        this.browserTab = browserTab;
        this.comments = [];
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.post = this.router.getCurrentNavigation().extras.state.post;
        });
        console.log(this.post);
        this.bloggerService.getComments(this.post.replies.selfLink).subscribe((data) => {
            this.comments = data.items;
            console.log(this.comments);
        });
    }
    changeFontSize(val) {
        var txt = document.getElementById("post-content");
        var style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
        var currentSize = parseFloat(style);
        txt.style.fontSize = (currentSize + val) + 'px';
    }
    interstitial() {
        /* var randomnumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        if (randomnumber == 2) {
          this.admob.interstitial.config({
            isTesting: false,
            id: 'ca-app-pub-9293070686220717/7452632736'
          })
          this.admob.interstitial.prepare()
          this.admob.interstitial.show() */
    }
    loadComments(url) {
        this.bloggerService.getComments(url).subscribe((data) => {
            this.comments = data.items;
            console.log(this.comments);
        });
    }
    openUrl() {
        let url = `${this.post.url}#comments`;
        this.browserTab.isAvailable()
            .then(isAvailable => {
            if (isAvailable) {
                this.browserTab.openUrl(url);
            }
            else {
                // open URL with InAppBrowser instead or SafariViewController
            }
        });
    }
};
PostPage.ctorParameters = () => [
    { type: _services_blogger_service__WEBPACK_IMPORTED_MODULE_3__["BloggerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_4__["BrowserTab"] }
];
PostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/post/post.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./post.page.scss */ "./src/app/pages/post/post.page.scss")).default]
    })
], PostPage);



/***/ })

}]);
//# sourceMappingURL=pages-post-post-module-es2015.js.map