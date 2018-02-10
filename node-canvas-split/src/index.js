
import Canvas from 'canvas';

/**
 * @returns {Canvas}
 */
export async function rect(){
  const cv = new Canvas(200, 200);
  const ctx = cv.getContext('2d');

  ctx.font = '30px Helvetica Neue';
  ctx.rotate(0.1);
  ctx.fillText("Awesome!", 50, 100);
  
  return cv;
}