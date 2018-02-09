var Age = require('./../js/age.js').ageModule;

describe('Age', function() {
  it('should test whether age has created new age object', function(){
    var userAge = new Age(3,6,1992);
    expect(userAge).toEqual();
  });
  it('should test whether age is convert into seconds', function(){
    var userAge = new Age(25);
    expect(userAge.ageInSeconds()).toEqual()
  });

});
