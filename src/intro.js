/*!
 * Handsontable @@version
 * Handsontable is a JavaScript library for editable tables with basic copy-paste compatibility with Excel and Google Docs
 *
 * This is a fork of handsontable by Grow - (grow.com). It provides a few extra features, such as:
 * 1) When you click on a row or column header, the callback also tells you that a row or column header was click (fullRange, internally)
 * 2) Sorting of any kind of formatted numbers (currecy included) with the help of the numeral.js library.
 * 3) The ability to inspect/modify the data that will be applied after a dragging+copying gesture
 * 4) Changes to the ManualColumnResize plugin to better position the handle.
 *
 * The above features are critical for the requirements of our organization.
 *
 * Copyright (c) 2012-2014 Marcin Warpechowski
 * Copyright @@year Handsoncode sp. z o.o. <hello@handsontable.com>
 * Licensed under the MIT license.
 * http://handsontable.com/
 *
 * Date: @@timestamp
 */
/*jslint white: true, browser: true, plusplus: true, indent: 4, maxerr: 50 */

window.Handsontable = {
  version: '@@version',
  buildDate: '@@timestamp',
};
