(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-module"],{

/***/ "./src/app/modules/dashboard/dashboard-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");





const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
    },
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_demo_service_productservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/productservice */ "./src/app/demo/service/productservice.ts");
/* harmony import */ var src_app_shared_config_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/config/app.breadcrumb.service */ "./src/app/shared/config/app.breadcrumb.service.ts");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-chart.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-menu.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressbar.js");
/* harmony import */ var primeng_knob__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/knob */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-knob.js");














function DashboardComponent_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Motorista ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-sortIcon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cliente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-sortIcon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Agregado Taxa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p-sortIcon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Agregado Margem ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p-sortIcon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Negociado Margem ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p-sortIcon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Motorista x ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Cliente Y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-progressBar", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p-progressBar", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p-knob", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_83_Template_p_knob_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const product_r6 = ctx.$implicit; return product_r6.price = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValue", false)("value", product_r6.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 7, product_r6.price, "BRL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", product_r6.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", 70)("readonly", true)("ngModel", product_r6.price);
} }
function DashboardComponent_ng_template_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Margem Frete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-sortIcon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-progressBar", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r9.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValue", false)("value", product_r9.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, product_r9.price, "BRL"), " ");
} }
const _c0 = function () { return { "min-width": "8rem" }; };
class DashboardComponent {
    constructor(productService, breadcrumbService) {
        this.productService = productService;
        this.breadcrumbService = breadcrumbService;
        this.value6 = 60;
        this.breadcrumbService.setItems([
            { label: 'Dashboard', routerLink: ['/'] }
        ]);
    }
    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);
        this.productService.getProducts().then(data => this.productsThisWeek = data);
        this.productService.getProductsMixed().then(data => this.productsLastWeek = data);
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.items = [{
                label: 'Shipments',
                items: [
                    { label: 'Tracker', icon: 'pi pi-compass' },
                    { label: 'Map', icon: 'pi pi-map-marker' },
                    { label: 'Manage', icon: 'pi pi-pencil' }
                ]
            }
        ];
        this.ordersChart = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                    label: 'New',
                    data: [2, 7, 20, 9, 16, 9, 5],
                    backgroundColor: [
                        'rgba(100, 181, 246, 0.2)',
                    ],
                    borderColor: [
                        '#64B5F6',
                    ],
                    borderWidth: 3,
                    fill: true
                }]
        };
        this.ordersChartOptions = {
            legend: {
                display: true,
            },
            responsive: true,
            hover: {
                mode: 'index'
            },
            scales: {
                yAxes: [{
                        ticks: {
                            min: 0,
                            max: 20
                        }
                    }]
            }
        };
        this.orderWeek = [
            { name: 'This Week', code: '0' },
            { name: 'Last Week', code: '1' }
        ];
        this.revenueChart = {
            labels: ['Média de Margem %', 'Média de Margem c/desc Agregado %', 'Média de Margem Terceiro %'],
            datasets: [{
                    data: [40, 35, 25],
                    backgroundColor: ['#64B5F6', '#7986CB', '#4DB6AC']
                }]
        };
    }
    changeDataset(event) {
        const dataSet = [
            [2, 7, 20, 9, 16, 9, 5],
            [2, 4, 9, 20, 16, 12, 20],
            [2, 17, 7, 15, 4, 20, 8],
            [2, 2, 20, 4, 17, 16, 20]
        ];
        this.ordersChart.datasets[0].data = dataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
        this.ordersChart.datasets[0].label = event.currentTarget.getAttribute('data-label');
        this.ordersChart.datasets[0].borderColor = event.currentTarget.getAttribute('data-stroke');
        this.ordersChart.datasets[0].backgroundColor = event.currentTarget.getAttribute('data-fill');
    }
    recentSales(event) {
        if (event.value.code === '0') {
            this.products = this.productsThisWeek;
        }
        else {
            this.products = this.productsLastWeek;
        }
    }
    shuffle() {
        for (let i = this.products.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.products[i], this.products[j]] = [this.products[j], this.products[i]];
        }
        return this.products;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_demo_service_productservice__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_config_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 134, vars: 19, consts: [[1, "layout-dashboard"], [1, "p-grid"], [1, "p-col-12", "p-md-6", "p-xl-3"], [1, "card", "no-gutter", "widget-overview-box", "widget-overview-box-2"], [1, "overview-icon"], [1, "pi", "pi-users"], [1, "overview-title"], [2, "font-size", "13px"], [1, "p-grid", "overview-detail"], [1, "p-col-6"], [1, "overview-number"], [1, "overview-subtext"], [1, "card", "no-gutter", "widget-overview-box", "widget-overview-box-1"], [1, "pi", "pi-tag"], [1, "card", "no-gutter", "widget-overview-box", "widget-overview-box-3"], [1, "pi", "pi-dollar"], [1, "card", "no-gutter", "widget-overview-box", "widget-overview-box-4"], [1, "pi", "pi-exclamation-triangle"], [1, "p-col-12", "p-xl-12"], [1, "card"], [1, "card-header"], ["optionLabel", "name", "styleClass", "dashbard-demo-dropdown", 3, "options", "ngModel", "ngStyle", "ngModelChange", "onChange"], [3, "value", "paginator", "rows"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "p-col-12", "p-xl-6"], [1, "p-col-12", "p-lg-6"], [1, "card", "revenue"], [1, "revenue-chart-container"], ["type", "pie", "id", "revenue-chart", 3, "data"], [1, "card", "no-gutter", "orders"], [3, "popup", "model"], ["menu", ""], ["pButton", "", "type", "button", "id", "orders-button", "icon", "pi pi-search", 1, "p-button-text", "p-button-secondary", 3, "click"], [1, "p-col-12"], ["id", "order-tabs-container", 1, "p-grid", "order-tabs"], ["data-label", "Novos servi\u00E7os", "data-index", "0", "data-stroke", "#BBDEFB", "data-fill", "rgba(100, 181, 246, 0.2)", 1, "order-tab", "order-tab-new", "p-col-6", "p-md-3", 3, "click"], [1, "pi", "pi-plus-circle"], [1, "order-label"], [1, "stat-detail-icon", "icon-arrow-right-circle"], ["src", "assets/demo/images/dashboard/graph-new.svg", "alt", "diamond-ng"], ["data-label", "Conclu\u00EDdos", "data-index", "1", "data-stroke", "#C5CAE9", "data-fill", "rgba(121, 134, 203, 0.2)", 1, "order-tab", "order-tab-completed", "p-col-6", "p-md-3", 3, "click"], [1, "pi", "pi-check-circle"], ["src", "assets/demo/images/dashboard/graph-completed.svg", "alt", "diamond-ng"], ["data-label", "Receita bruta", "data-index", "3", "data-stroke", "#B2EBF2", "data-fill", "rgba(224, 247, 250, 0.5)", 1, "order-tab", "order-tab-cancelled", "p-col-6", "p-md-3", 3, "click"], [1, "pi", "pi-times-circle"], ["src", "assets/demo/images/dashboard/graph-cancelled.svg", "alt", "diamond-ng"], [1, "overview-chart"], ["type", "line", "id", "order-chart", 3, "data", "options"], ["chart", ""], ["pSortableColumn", "id"], ["field", "id"], ["pSortableColumn", "category"], ["field", "category"], ["pSortableColumn", "price"], ["field", "price"], ["unit", "R$", 3, "showValue", "value"], [3, "value"], ["valueTemplate", "{value}%", 3, "size", "readonly", "ngModel", "ngModelChange"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Colaboradores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Agregados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Terceiro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Servi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "30A / 60T");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Em andamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "12A / 13T");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Concluidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Receita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "R$7.000,10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Despesas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "$16.000,640");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Renda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sinistros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Novos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Servi\u00E7os em andamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p-dropdown", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_p_dropdown_ngModelChange_78_listener($event) { return ctx.selectedOrderWeek = $event; })("onChange", function DashboardComponent_Template_p_dropdown_onChange_78_listener($event) { return ctx.recentSales($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Todos os servi\u00E7os com status em andamento.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p-table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, DashboardComponent_ng_template_82_Template, 17, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, DashboardComponent_ng_template_83_Template, 14, 10, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Margem Frete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p-dropdown", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_p_dropdown_ngModelChange_89_listener($event) { return ctx.selectedOrderWeek = $event; })("onChange", function DashboardComponent_Template_p_dropdown_onChange_89_listener($event) { return ctx.recentSales($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p-table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, DashboardComponent_ng_template_91_Template, 5, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, DashboardComponent_ng_template_92_Template, 8, 7, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "M\u00E9dia Margem - Frete Agregado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Compara\u00E7\u00E3o de suas fontes de receita.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "p-chart", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Servi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "p-menu", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_108_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](107); return _r4.toggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_112_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](133); ctx.changeDataset($event); return _r5.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Novos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_118_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](133); ctx.changeDataset($event); return _r5.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Conclu\u00EDdos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_124_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](133); ctx.changeDataset($event); return _r5.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Cancelados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "p-chart", 48, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.orderWeek)("ngModel", ctx.selectedOrderWeek)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.products)("paginator", true)("rows", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.orderWeek)("ngModel", ctx.selectedOrderWeek)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.products)("paginator", true)("rows", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.revenueChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popup", true)("model", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.ordersChart)("options", ctx.ordersChartOptions);
    } }, directives: [primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], primeng_chart__WEBPACK_IMPORTED_MODULE_8__["UIChart"], primeng_menu__WEBPACK_IMPORTED_MODULE_9__["Menu"], primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonDirective"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["SortIcon"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressBar"], primeng_knob__WEBPACK_IMPORTED_MODULE_12__["Knob"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".overview-number[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.widget-overview-box.widget-overview-box-4[_ngcontent-%COMP%]   .overview-icon[_ngcontent-%COMP%] {\n  background: #e14d4d;\n  color: #ffffff;\n}\n\n.widget-overview-box.widget-overview-box-4[_ngcontent-%COMP%]   .overview-title[_ngcontent-%COMP%] {\n  color: #e14d4d;\n}\n\n.widget-overview-box.widget-overview-box-4[_ngcontent-%COMP%] {\n  border-left-color: #e14d4d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJ2aWV3LW51bWJlcntcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ud2lkZ2V0LW92ZXJ2aWV3LWJveC53aWRnZXQtb3ZlcnZpZXctYm94LTQgLm92ZXJ2aWV3LWljb24ge1xuICBiYWNrZ3JvdW5kOiAjZTE0ZDRkO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLndpZGdldC1vdmVydmlldy1ib3gud2lkZ2V0LW92ZXJ2aWV3LWJveC00IC5vdmVydmlldy10aXRsZSB7XG4gIGNvbG9yOiAjZTE0ZDRkO1xufVxuXG4ud2lkZ2V0LW92ZXJ2aWV3LWJveC53aWRnZXQtb3ZlcnZpZXctYm94LTQge1xuICBib3JkZXItbGVmdC1jb2xvcjogI2UxNGQ0ZDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: src_app_demo_service_productservice__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: src_app_shared_config_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/modules/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-chart.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-menu.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_knob__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/knob */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-knob.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressbar.js");














class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__["DashboardRoutingModule"],
            primeng_chart__WEBPACK_IMPORTED_MODULE_4__["ChartModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"],
            primeng_menu__WEBPACK_IMPORTED_MODULE_5__["MenuModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
            primeng_knob__WEBPACK_IMPORTED_MODULE_11__["KnobModule"],
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__["ProgressBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__["DashboardRoutingModule"],
        primeng_chart__WEBPACK_IMPORTED_MODULE_4__["ChartModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"],
        primeng_menu__WEBPACK_IMPORTED_MODULE_5__["MenuModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
        primeng_knob__WEBPACK_IMPORTED_MODULE_11__["KnobModule"],
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__["ProgressBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__["DashboardRoutingModule"],
                    primeng_chart__WEBPACK_IMPORTED_MODULE_4__["ChartModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"],
                    primeng_menu__WEBPACK_IMPORTED_MODULE_5__["MenuModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
                    primeng_knob__WEBPACK_IMPORTED_MODULE_11__["KnobModule"],
                    primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__["ProgressBarModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-dashboard-dashboard-module.js.map