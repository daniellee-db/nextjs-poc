module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7BUa");


/***/ }),

/***/ "7BUa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Careers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const SpaceAroundContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  justify-content: space-around;
`;
const DropdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
const Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  cursor: pointer;
  position: absolute;
  margin-top: 37px;
  background: white;
  width: 299px;
  border-radius: 4px;
  ${({
  active
}) => active && `
    border: solid 1px;  
  `}
`;
const Selected = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  border: solid 1px;
  border-radius: 4px;
  height: 25px;
  padding: 5px;
`;
async function getStaticProps() {
  return {
    props: {
      departments: await retrieveDepartments(),
      offices: await retrieveOffices(),
      jobs: await retrieveJobs()
    }
  };
}
class Careers extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "handleClickOutside", () => {
      this.setState({
        departmentListOpen: false
      });
    });

    _defineProperty(this, "toggleDepartmentList", () => {
      this.setState({
        departmentListOpen: !this.state.departmentListOpen
      });
    });

    _defineProperty(this, "toggleOfficeList", () => {
      this.setState({
        officeListOpen: !this.state.officeListOpen
      });
    });

    _defineProperty(this, "handleSelectedDepartment", selected => {
      this.setState({
        selectedDepartment: selected
      });
    });

    _defineProperty(this, "handleSelectedOffice", selected => {
      this.setState({
        selectedOffice: selected
      });
    });

    this.state = {
      departmentListOpen: false,
      officeListOpen: false,
      selectedDepartment: 'Select Department',
      selectedOffice: 'Select Office'
    };
  }

  render() {
    const parentJobs = this.props.jobs[0];
    const childJobs = this.props.jobs[1];
    const {
      departments,
      offices
    } = this.props;
    return __jsx("div", null, console.log(offices), __jsx(SpaceAroundContainer, null, __jsx(DropdownContainer, {
      onClick: () => this.toggleDepartmentList()
    }, __jsx(Selected, null, this.state.selectedDepartment), __jsx(Dropdown, {
      active: this.state.departmentListOpen
    }, this.state.departmentListOpen && __jsx("ul", {
      style: {
        listStyle: 'none'
      }
    }, __jsx("li", {
      key: "all",
      onClick: () => this.handleSelectedDepartment('All Departments')
    }, "All Departments"), Object.entries(departments).map((parent, index) => {
      return __jsx("div", null, __jsx("li", {
        key: index,
        onClick: () => this.handleSelectedDepartment(parent[0])
      }, parent[0]), parent[1].map((child, index) => {
        return __jsx("li", {
          style: {
            paddingLeft: '20px'
          },
          key: index,
          onClick: () => this.handleSelectedDepartment(child)
        }, child);
      }));
    })))), __jsx(DropdownContainer, {
      onClick: () => this.toggleOfficeList()
    }, __jsx(Selected, null, this.state.selectedOffice), __jsx(Dropdown, {
      active: this.state.officeListOpen
    }, this.state.officeListOpen && __jsx("ul", {
      style: {
        listStyle: 'none'
      }
    }, __jsx("li", {
      key: "all",
      onClick: () => this.handleSelectedOffice('All Offices')
    }, "All Offices"), Object.entries(offices).map((parent, index) => {
      return __jsx("div", null, __jsx("li", {
        key: index,
        onClick: () => this.handleSelectedOffice(parent[0])
      }, parent[0]), parent[1].map((child, index) => {
        return __jsx("li", {
          style: {
            paddingLeft: '20px'
          },
          key: index,
          onClick: () => this.handleSelectedOffice(child)
        }, child);
      }));
    }))))), __jsx("div", null, Object.entries(departments).map((parent, index) => {
      return __jsx("div", {
        className: "jobListContainer"
      }, __jsx("h3", null, parent[0]), parentJobs[parent[0]] ? parentJobs[parent[0]].map(job => {
        return __jsx("div", {
          className: "jobRow"
        }, job[0], " | ", job[1], " | ", job[2]);
      }) : null, parent[1].map(childName => {
        return __jsx("div", {
          className: "jobListContainer"
        }, __jsx("h3", null, childName), childJobs[childName] ? childJobs[childName].map(job => {
          return __jsx("div", {
            className: "jobRow"
          }, job[0], " | ", job[1], " | ", job[2]);
        }) : null);
      }));
    })));
  }

}

const retrieveJobs = async () => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('https://boards-api.greenhouse.io/v1/boards/databricks/departments');
  const data = await res.json();
  const parentJobsObject = {};
  const childJobsObject = {};
  data.departments.forEach(department => {
    if (department.id !== 0 && department.parent_id === null) {
      const jobs = [];
      department.jobs.forEach(job => {
        jobs.push([job.title, job.location.name, job.id]);
        parentJobsObject[department.name] = jobs;
      });
    } else {
      const jobs = [];
      department.jobs.forEach(job => {
        jobs.push([job.title, job.location.name, job.id]);
        childJobsObject[department.name] = jobs;
      });
    }
  });
  return [parentJobsObject, childJobsObject];
};

const retrieveDepartments = async () => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('https://boards-api.greenhouse.io/v1/boards/databricks/departments');
  const data = await res.json();
  const departmentIdPairs = {};
  data.departments.forEach(department => {
    departmentIdPairs[department.id] = department.name;
  });
  const parentDepartments = {};
  data.departments.forEach(department => {
    const subDepartments = [];

    if (department.id !== 0 && department.parent_id === null && department.jobs.length > 0) {
      if (department.child_ids.length > 0) {
        department.child_ids.forEach(subDept => {
          if (departmentIdPairs[subDept]) {
            subDepartments.push(departmentIdPairs[subDept]);
          }
        });
      }

      parentDepartments[department.name] = subDepartments;
    }
  });
  return parentDepartments;
};

const retrieveOffices = async () => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('https://boards-api.greenhouse.io/v1/boards/databricks/offices');
  const data = await res.json();
  const officeIdPairs = {};
  data.offices.forEach(office => {
    officeIdPairs[office.id] = office.name;
  });
  const officeJobsObject = {};
  data.offices.forEach(office => {
    const jobs = [];
    office.departments.forEach(department => {
      department.jobs.forEach(job => {
        jobs.push(job);
        officeJobsObject[office.name] = jobs;
      });
    });
  });
  const regions = {};
  data.offices.forEach(office => {
    const cities = [];

    if (office.id !== 0 && office.parent_id === null && office.child_ids.length > 0) {
      office.child_ids.forEach(subOffice => {
        if (officeIdPairs[subOffice] && officeJobsObject[officeIdPairs[subOffice]]) {
          cities.push(officeIdPairs[subOffice]);
        }
      });
      regions[office.name] = cities;
    }
  });
  return regions;
};

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });