var Age = require('./../js/age.js').ageModule;

describe('Age', function() {
  it('should test whether age has created new age object', function(){
    var userAge = new Age(25);
    expect(userAge.age).toEqual(25);
  });
});
