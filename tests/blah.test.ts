import { expect } from 'chai';
import 'mocha';

import { seven } from "../src/module/settings"

describe('calculate', function() {
  it('add', function() {
    expect(seven).equal(7);
  }); 
});

