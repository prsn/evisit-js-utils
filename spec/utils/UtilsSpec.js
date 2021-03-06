describe('prop', function() {
	var utils = require('../../lib/utils'),
			obj;

	beforeEach(function() {
    obj = {
    	hello: 'World',
    	deep: {
    		list: [
    			'first',
    			'second',
    			{
    				more: 'yes, more'
    			}
    		],
    		parent: 'deep'
    	},
    	bool: true,
    	number: 5
    };
  });

	it('should be able to get a property', function() {
    expect(utils.get(obj, 'hello')).toBe('World');
    expect(utils.get(obj, 'bool')).toBe(true);
    expect(utils.get(obj, 'number')).toBe(5);
    expect(utils.get(obj, 'deep.parent')).toBe('deep');
    expect(utils.get(obj, 'deep.list')).toEqual(jasmine.any(Array));
    expect(utils.get(obj, 'deep.list[0]')).toBe('first');
    expect(utils.get(obj, 'deep.list[1]')).toBe('second');
    expect(utils.get(obj, 'deep.list[2].more')).toBe('yes, more');
  });

  it('should be able to set a property', function() {
  	utils.set(obj, 'hello', 'Other World');
  	utils.set(obj, 'bool', false);
  	utils.set(obj, 'number', 12);
  	utils.set(obj, 'deep.parent', 'not deep');
		utils.set(obj, 'deep.list[0]', 'FIRST');
		utils.set(obj, 'deep.list[1]', 'SECOND');
		utils.set(obj, 'deep.list[2].more', 'HOLY MOLY!');

    expect(utils.get(obj, 'hello')).toBe('Other World');
    expect(utils.get(obj, 'bool')).toBe(false);
    expect(utils.get(obj, 'number')).toBe(12);
    expect(utils.get(obj, 'deep.parent')).toBe('not deep');
    expect(utils.get(obj, 'deep.list')).toEqual(jasmine.any(Array));
    expect(utils.get(obj, 'deep.list[0]')).toBe('FIRST');
    expect(utils.get(obj, 'deep.list[1]')).toBe('SECOND');
    expect(utils.get(obj, 'deep.list[2].more')).toBe('HOLY MOLY!');
  });
});