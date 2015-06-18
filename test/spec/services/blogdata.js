'use strict';

describe('Service: blogdata', function () {

  // load the service's module
  beforeEach(module('myblogApp'));

  // instantiate service
  var blogdata;
  beforeEach(inject(function (_blogdata_) {
    blogdata = _blogdata_;
  }));

  it('should do something', function () {
    expect(!!blogdata).toBe(true);
  });

});
