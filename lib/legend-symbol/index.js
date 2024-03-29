/*
* Adapted from https://github.com/watergis/legend-symbol
*/

import Circle from "./Circle";
import Fill from "./Fill";
import Line from "./Line";
import Symbol from "./Symbol";
import {exprHandler} from './util';


function extractPartOfImage (img, {x, y, width, height}) {
  const dpi = 2;
  const el = document.createElement('canvas');
  el.width = width*dpi;
  el.height = height*dpi;
  const ctx = el.getContext('2d');
  ctx.drawImage(img,
    x*dpi, y*dpi, width*dpi, height*dpi,
    0, 0, width*dpi, height*dpi
  );
  return el.toDataURL();
}

export default function ({sprite, zoom, layer}) {
  const TYPE_MAP = {
    "circle": Circle,
    "symbol": Symbol,
    "line": Line,
    "fill": Fill,
  };

  const handler = TYPE_MAP[layer.type];
  const expr = exprHandler({zoom});
  const image = (imgKey) => {
    if (sprite && sprite.json) {
      const dimensions = sprite.json[imgKey];
      if (dimensions) {
        return extractPartOfImage(sprite.image, dimensions);
      }
    }
    return null;
  };

  if (handler) {
    return handler({layer, expr, image});
  }
  else {
    return null;
  }
}
