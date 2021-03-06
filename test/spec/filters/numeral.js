/*

    Copyright (C) 2012-2013 by Clearcode <http://clearcode.cc>
    and associates (see AUTHORS).

    This file is part of cc-numeral-filter.

    cc-numeral-filter is free software: you can redistribute it and/or modify
    it under the terms of the Lesser GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    cc-numeral-filter is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with cc-numeral-filter.  If not, see <http://www.gnu.org/licenses/>.

*/
'use strict';

describe('Filter: numeral', function () {

  // load the filter's module
  beforeEach(module('cc.numeral.filter'));

  // initialize a new instance of the filter before each test
  var numeralFilter;
  beforeEach(inject(function ($filter) {
    numeralFilter = $filter('numeral');
  }));

  it('should return the input float as percentage', function () {
    var num = 0.15,
      format = '0%';
    expect(numeralFilter(num, format)).toBe(Math.round(num * 100)+'%');
  });

});
