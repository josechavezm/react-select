import '@babel/runtime/helpers/esm/objectWithoutProperties';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/toConsumableArray';
import '@babel/runtime/helpers/esm/objectSpread';
import '@babel/runtime/helpers/esm/classCallCheck';
import '@babel/runtime/helpers/esm/createClass';
import '@babel/runtime/helpers/esm/possibleConstructorReturn';
import '@babel/runtime/helpers/esm/getPrototypeOf';
import '@babel/runtime/helpers/esm/assertThisInitialized';
import '@babel/runtime/helpers/esm/inherits';
import '@babel/runtime/helpers/esm/defineProperty';
import 'react';
import 'memoize-one';
import '@emotion/core';
import 'react-dom';
import 'prop-types';
import '@babel/runtime/helpers/esm/typeof';
import 'raf';
import '../../dist/chunk-e8ae4b0f.esm.js';
import '../../dist/chunk-f0851c13.esm.js';
import { S as Select } from '../../dist/base/dist/react-select-ebb7b056.esm.js';
import '@emotion/css';
import '@babel/runtime/helpers/esm/taggedTemplateLiteral';
import 'react-input-autosize';
import { m as manageState } from '../../dist/chunk-79921ff3.esm.js';
import { makeAsyncSelect } from '../../async/dist/react-select.esm.js';
import { makeCreatableSelect } from '../../creatable/dist/react-select.esm.js';

var SelectCreatable = makeCreatableSelect(Select);
var SelectCreatableState = manageState(SelectCreatable);
var AsyncCreatable = makeAsyncSelect(SelectCreatableState);

export default AsyncCreatable;
