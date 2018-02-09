var Age = require('./../js/age.js')ageModule;

describe('Age', function(){
  var reusableAge;

  beforeEach(function(){
    reusableAge = new Age(25);
  });

  it('should show how beforeEach() works', function(){
    console.log(reusableAge);
  });
});
