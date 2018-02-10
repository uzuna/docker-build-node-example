
import * as Canvas from '../src/';

import assert from 'power-assert'

describe('Canvas', () => {
  it('test')
  it('load', async function(){
    const cv = await Canvas.rect();
    const str = cv.toDataURL();
    assert(typeof str === 'string')
    // console.log(cv.toDataURL());
    const buf = cv.toBuffer();
    assert(Buffer.isBuffer(buf))
  });
});