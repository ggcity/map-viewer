import { renderTransparent as ol, apply as al, getLayer as Lr } from "ol-mapbox-style";
import { load as ll } from "js-yaml";
import Or from "mapbox-gl";
var ji;
function hl(s, t) {
  t === void 0 && (t = !1);
  var e = s.CSS, i = ji;
  if (typeof ji == "boolean" && !t)
    return ji;
  var n = e && typeof e.supports == "function";
  if (!n)
    return !1;
  var r = e.supports("--css-vars", "yes"), o = e.supports("(--css-vars: yes)") && e.supports("color", "#00000000");
  return i = r || o, t || (ji = i), i;
}
function cl(s, t, e) {
  if (!s)
    return { x: 0, y: 0 };
  var i = t.x, n = t.y, r = i + e.left, o = n + e.top, a, l;
  if (s.type === "touchstart") {
    var c = s;
    a = c.changedTouches[0].pageX - r, l = c.changedTouches[0].pageY - o;
  } else {
    var h = s;
    a = h.pageX - r, l = h.pageY - o;
  }
  return { x: a, y: l };
}
var os = function(s, t) {
  return os = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, i) {
    e.__proto__ = i;
  } || function(e, i) {
    for (var n in i)
      Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
  }, os(s, t);
};
function Dt(s, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  os(s, t);
  function e() {
    this.constructor = s;
  }
  s.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var xt = function() {
  return xt = Object.assign || function(t) {
    for (var e, i = 1, n = arguments.length; i < n; i++) {
      e = arguments[i];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }
    return t;
  }, xt.apply(this, arguments);
};
function gi(s) {
  var t = typeof Symbol == "function" && Symbol.iterator, e = t && s[t], i = 0;
  if (e)
    return e.call(s);
  if (s && typeof s.length == "number")
    return {
      next: function() {
        return s && i >= s.length && (s = void 0), { value: s && s[i++], done: !s };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function as(s, t) {
  var e = typeof Symbol == "function" && s[Symbol.iterator];
  if (!e)
    return s;
  var i = e.call(s), n, r = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(n = i.next()).done; )
      r.push(n.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      n && !n.done && (e = i.return) && e.call(i);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return r;
}
function Do(s, t, e) {
  if (e || arguments.length === 2)
    for (var i = 0, n = t.length, r; i < n; i++)
      (r || !(i in t)) && (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
  return s.concat(r || Array.prototype.slice.call(t));
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Je = function() {
  function s(t) {
    t === void 0 && (t = {}), this.adapter = t;
  }
  return Object.defineProperty(s, "cssClasses", {
    get: function() {
      return {};
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(s, "strings", {
    get: function() {
      return {};
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(s, "numbers", {
    get: function() {
      return {};
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(s, "defaultAdapter", {
    get: function() {
      return {};
    },
    enumerable: !1,
    configurable: !0
  }), s.prototype.init = function() {
  }, s.prototype.destroy = function() {
  }, s;
}();
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Fi = function() {
  function s(t, e) {
    for (var i = [], n = 2; n < arguments.length; n++)
      i[n - 2] = arguments[n];
    this.root = t, this.initialize.apply(this, Do([], as(i))), this.foundation = e === void 0 ? this.getDefaultFoundation() : e, this.foundation.init(), this.initialSyncWithDOM();
  }
  return s.attachTo = function(t) {
    return new s(t, new Je({}));
  }, s.prototype.initialize = function() {
  }, s.prototype.getDefaultFoundation = function() {
    throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class");
  }, s.prototype.initialSyncWithDOM = function() {
  }, s.prototype.destroy = function() {
    this.foundation.destroy();
  }, s.prototype.listen = function(t, e, i) {
    this.root.addEventListener(t, e, i);
  }, s.prototype.unlisten = function(t, e, i) {
    this.root.removeEventListener(t, e, i);
  }, s.prototype.emit = function(t, e, i) {
    i === void 0 && (i = !1);
    var n;
    typeof CustomEvent == "function" ? n = new CustomEvent(t, {
      bubbles: i,
      detail: e
    }) : (n = document.createEvent("CustomEvent"), n.initCustomEvent(t, i, !1, e)), this.root.dispatchEvent(n);
  }, s;
}();
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function qi(s) {
  return s === void 0 && (s = window), ul(s) ? { passive: !0 } : !1;
}
function ul(s) {
  s === void 0 && (s = window);
  var t = !1;
  try {
    var e = {
      get passive() {
        return t = !0, !1;
      }
    }, i = function() {
    };
    s.document.addEventListener("test", i, e), s.document.removeEventListener("test", i, e);
  } catch {
    t = !1;
  }
  return t;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function ls(s, t) {
  if (s.closest)
    return s.closest(t);
  for (var e = s; e; ) {
    if (ve(e, t))
      return e;
    e = e.parentElement;
  }
  return null;
}
function ve(s, t) {
  var e = s.matches || s.webkitMatchesSelector || s.msMatchesSelector;
  return e.call(s, t);
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var dl = {
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, fl = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Mr = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Dr = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Fr = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], $i = [], gl = function(s) {
  Dt(t, s);
  function t(e) {
    var i = s.call(this, xt(xt({}, t.defaultAdapter), e)) || this;
    return i.activationAnimationHasEnded = !1, i.activationTimer = 0, i.fgDeactivationRemovalTimer = 0, i.fgScale = "0", i.frame = { width: 0, height: 0 }, i.initialSize = 0, i.layoutFrame = 0, i.maxRadius = 0, i.unboundedCoords = { left: 0, top: 0 }, i.activationState = i.defaultActivationState(), i.activationTimerCallback = function() {
      i.activationAnimationHasEnded = !0, i.runDeactivationUXLogicIfReady();
    }, i.activateHandler = function(n) {
      i.activateImpl(n);
    }, i.deactivateHandler = function() {
      i.deactivateImpl();
    }, i.focusHandler = function() {
      i.handleFocus();
    }, i.blurHandler = function() {
      i.handleBlur();
    }, i.resizeHandler = function() {
      i.layout();
    }, i;
  }
  return Object.defineProperty(t, "cssClasses", {
    get: function() {
      return dl;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "strings", {
    get: function() {
      return fl;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "numbers", {
    get: function() {
      return Mr;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
        },
        browserSupportsCssVars: function() {
          return !0;
        },
        computeBoundingRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        containsEventTarget: function() {
          return !0;
        },
        deregisterDocumentInteractionHandler: function() {
        },
        deregisterInteractionHandler: function() {
        },
        deregisterResizeHandler: function() {
        },
        getWindowPageOffset: function() {
          return { x: 0, y: 0 };
        },
        isSurfaceActive: function() {
          return !0;
        },
        isSurfaceDisabled: function() {
          return !0;
        },
        isUnbounded: function() {
          return !0;
        },
        registerDocumentInteractionHandler: function() {
        },
        registerInteractionHandler: function() {
        },
        registerResizeHandler: function() {
        },
        removeClass: function() {
        },
        updateCssVariable: function() {
        }
      };
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.init = function() {
    var e = this, i = this.supportsPressRipple();
    if (this.registerRootHandlers(i), i) {
      var n = t.cssClasses, r = n.ROOT, o = n.UNBOUNDED;
      requestAnimationFrame(function() {
        e.adapter.addClass(r), e.adapter.isUnbounded() && (e.adapter.addClass(o), e.layoutInternal());
      });
    }
  }, t.prototype.destroy = function() {
    var e = this;
    if (this.supportsPressRipple()) {
      this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));
      var i = t.cssClasses, n = i.ROOT, r = i.UNBOUNDED;
      requestAnimationFrame(function() {
        e.adapter.removeClass(n), e.adapter.removeClass(r), e.removeCssVars();
      });
    }
    this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
  }, t.prototype.activate = function(e) {
    this.activateImpl(e);
  }, t.prototype.deactivate = function() {
    this.deactivateImpl();
  }, t.prototype.layout = function() {
    var e = this;
    this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
      e.layoutInternal(), e.layoutFrame = 0;
    });
  }, t.prototype.setUnbounded = function(e) {
    var i = t.cssClasses.UNBOUNDED;
    e ? this.adapter.addClass(i) : this.adapter.removeClass(i);
  }, t.prototype.handleFocus = function() {
    var e = this;
    requestAnimationFrame(function() {
      return e.adapter.addClass(t.cssClasses.BG_FOCUSED);
    });
  }, t.prototype.handleBlur = function() {
    var e = this;
    requestAnimationFrame(function() {
      return e.adapter.removeClass(t.cssClasses.BG_FOCUSED);
    });
  }, t.prototype.supportsPressRipple = function() {
    return this.adapter.browserSupportsCssVars();
  }, t.prototype.defaultActivationState = function() {
    return {
      activationEvent: void 0,
      hasDeactivationUXRun: !1,
      isActivated: !1,
      isProgrammatic: !1,
      wasActivatedByPointer: !1,
      wasElementMadeActive: !1
    };
  }, t.prototype.registerRootHandlers = function(e) {
    var i, n;
    if (e) {
      try {
        for (var r = gi(Dr), o = r.next(); !o.done; o = r.next()) {
          var a = o.value;
          this.adapter.registerInteractionHandler(a, this.activateHandler);
        }
      } catch (l) {
        i = { error: l };
      } finally {
        try {
          o && !o.done && (n = r.return) && n.call(r);
        } finally {
          if (i)
            throw i.error;
        }
      }
      this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
    }
    this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
  }, t.prototype.registerDeactivationHandlers = function(e) {
    var i, n;
    if (e.type === "keydown")
      this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
    else
      try {
        for (var r = gi(Fr), o = r.next(); !o.done; o = r.next()) {
          var a = o.value;
          this.adapter.registerDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (l) {
        i = { error: l };
      } finally {
        try {
          o && !o.done && (n = r.return) && n.call(r);
        } finally {
          if (i)
            throw i.error;
        }
      }
  }, t.prototype.deregisterRootHandlers = function() {
    var e, i;
    try {
      for (var n = gi(Dr), r = n.next(); !r.done; r = n.next()) {
        var o = r.value;
        this.adapter.deregisterInteractionHandler(o, this.activateHandler);
      }
    } catch (a) {
      e = { error: a };
    } finally {
      try {
        r && !r.done && (i = n.return) && i.call(n);
      } finally {
        if (e)
          throw e.error;
      }
    }
    this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
  }, t.prototype.deregisterDeactivationHandlers = function() {
    var e, i;
    this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
    try {
      for (var n = gi(Fr), r = n.next(); !r.done; r = n.next()) {
        var o = r.value;
        this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
      }
    } catch (a) {
      e = { error: a };
    } finally {
      try {
        r && !r.done && (i = n.return) && i.call(n);
      } finally {
        if (e)
          throw e.error;
      }
    }
  }, t.prototype.removeCssVars = function() {
    var e = this, i = t.strings, n = Object.keys(i);
    n.forEach(function(r) {
      r.indexOf("VAR_") === 0 && e.adapter.updateCssVariable(i[r], null);
    });
  }, t.prototype.activateImpl = function(e) {
    var i = this;
    if (!this.adapter.isSurfaceDisabled()) {
      var n = this.activationState;
      if (!n.isActivated) {
        var r = this.previousActivationEvent, o = r && e !== void 0 && r.type !== e.type;
        if (!o) {
          n.isActivated = !0, n.isProgrammatic = e === void 0, n.activationEvent = e, n.wasActivatedByPointer = n.isProgrammatic ? !1 : e !== void 0 && (e.type === "mousedown" || e.type === "touchstart" || e.type === "pointerdown");
          var a = e !== void 0 && $i.length > 0 && $i.some(function(l) {
            return i.adapter.containsEventTarget(l);
          });
          if (a) {
            this.resetActivationState();
            return;
          }
          e !== void 0 && ($i.push(e.target), this.registerDeactivationHandlers(e)), n.wasElementMadeActive = this.checkElementMadeActive(e), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
            $i = [], !n.wasElementMadeActive && e !== void 0 && (e.key === " " || e.keyCode === 32) && (n.wasElementMadeActive = i.checkElementMadeActive(e), n.wasElementMadeActive && i.animateActivation()), n.wasElementMadeActive || (i.activationState = i.defaultActivationState());
          });
        }
      }
    }
  }, t.prototype.checkElementMadeActive = function(e) {
    return e !== void 0 && e.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
  }, t.prototype.animateActivation = function() {
    var e = this, i = t.strings, n = i.VAR_FG_TRANSLATE_START, r = i.VAR_FG_TRANSLATE_END, o = t.cssClasses, a = o.FG_DEACTIVATION, l = o.FG_ACTIVATION, c = t.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal();
    var h = "", u = "";
    if (!this.adapter.isUnbounded()) {
      var d = this.getFgTranslationCoordinates(), f = d.startPoint, g = d.endPoint;
      h = f.x + "px, " + f.y + "px", u = g.x + "px, " + g.y + "px";
    }
    this.adapter.updateCssVariable(n, h), this.adapter.updateCssVariable(r, u), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
      e.activationTimerCallback();
    }, c);
  }, t.prototype.getFgTranslationCoordinates = function() {
    var e = this.activationState, i = e.activationEvent, n = e.wasActivatedByPointer, r;
    n ? r = cl(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : r = {
      x: this.frame.width / 2,
      y: this.frame.height / 2
    }, r = {
      x: r.x - this.initialSize / 2,
      y: r.y - this.initialSize / 2
    };
    var o = {
      x: this.frame.width / 2 - this.initialSize / 2,
      y: this.frame.height / 2 - this.initialSize / 2
    };
    return { startPoint: r, endPoint: o };
  }, t.prototype.runDeactivationUXLogicIfReady = function() {
    var e = this, i = t.cssClasses.FG_DEACTIVATION, n = this.activationState, r = n.hasDeactivationUXRun, o = n.isActivated, a = r || !o;
    a && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
      e.adapter.removeClass(i);
    }, Mr.FG_DEACTIVATION_MS));
  }, t.prototype.rmBoundedActivationClasses = function() {
    var e = t.cssClasses.FG_ACTIVATION;
    this.adapter.removeClass(e), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
  }, t.prototype.resetActivationState = function() {
    var e = this;
    this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
      return e.previousActivationEvent = void 0;
    }, t.numbers.TAP_DELAY_MS);
  }, t.prototype.deactivateImpl = function() {
    var e = this, i = this.activationState;
    if (!!i.isActivated) {
      var n = xt({}, i);
      i.isProgrammatic ? (requestAnimationFrame(function() {
        e.animateDeactivation(n);
      }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
        e.activationState.hasDeactivationUXRun = !0, e.animateDeactivation(n), e.resetActivationState();
      }));
    }
  }, t.prototype.animateDeactivation = function(e) {
    var i = e.wasActivatedByPointer, n = e.wasElementMadeActive;
    (i || n) && this.runDeactivationUXLogicIfReady();
  }, t.prototype.layoutInternal = function() {
    var e = this;
    this.frame = this.adapter.computeBoundingRect();
    var i = Math.max(this.frame.height, this.frame.width), n = function() {
      var o = Math.sqrt(Math.pow(e.frame.width, 2) + Math.pow(e.frame.height, 2));
      return o + t.numbers.PADDING;
    };
    this.maxRadius = this.adapter.isUnbounded() ? i : n();
    var r = Math.floor(i * t.numbers.INITIAL_ORIGIN_SCALE);
    this.adapter.isUnbounded() && r % 2 !== 0 ? this.initialSize = r - 1 : this.initialSize = r, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
  }, t.prototype.updateLayoutCssVars = function() {
    var e = t.strings, i = e.VAR_FG_SIZE, n = e.VAR_LEFT, r = e.VAR_TOP, o = e.VAR_FG_SCALE;
    this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
      left: Math.round(this.frame.width / 2 - this.initialSize / 2),
      top: Math.round(this.frame.height / 2 - this.initialSize / 2)
    }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(r, this.unboundedCoords.top + "px"));
  }, t;
}(Je);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Vn = function(s) {
  Dt(t, s);
  function t() {
    var e = s !== null && s.apply(this, arguments) || this;
    return e.disabled = !1, e;
  }
  return t.attachTo = function(e, i) {
    i === void 0 && (i = {
      isUnbounded: void 0
    });
    var n = new t(e);
    return i.isUnbounded !== void 0 && (n.unbounded = i.isUnbounded), n;
  }, t.createAdapter = function(e) {
    return {
      addClass: function(i) {
        return e.root.classList.add(i);
      },
      browserSupportsCssVars: function() {
        return hl(window);
      },
      computeBoundingRect: function() {
        return e.root.getBoundingClientRect();
      },
      containsEventTarget: function(i) {
        return e.root.contains(i);
      },
      deregisterDocumentInteractionHandler: function(i, n) {
        return document.documentElement.removeEventListener(i, n, qi());
      },
      deregisterInteractionHandler: function(i, n) {
        return e.root.removeEventListener(i, n, qi());
      },
      deregisterResizeHandler: function(i) {
        return window.removeEventListener("resize", i);
      },
      getWindowPageOffset: function() {
        return { x: window.pageXOffset, y: window.pageYOffset };
      },
      isSurfaceActive: function() {
        return ve(e.root, ":active");
      },
      isSurfaceDisabled: function() {
        return Boolean(e.disabled);
      },
      isUnbounded: function() {
        return Boolean(e.unbounded);
      },
      registerDocumentInteractionHandler: function(i, n) {
        return document.documentElement.addEventListener(i, n, qi());
      },
      registerInteractionHandler: function(i, n) {
        return e.root.addEventListener(i, n, qi());
      },
      registerResizeHandler: function(i) {
        return window.addEventListener("resize", i);
      },
      removeClass: function(i) {
        return e.root.classList.remove(i);
      },
      updateCssVariable: function(i, n) {
        return e.root.style.setProperty(i, n);
      }
    };
  }, Object.defineProperty(t.prototype, "unbounded", {
    get: function() {
      return Boolean(this.isUnbounded);
    },
    set: function(e) {
      this.isUnbounded = Boolean(e), this.setUnbounded();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.activate = function() {
    this.foundation.activate();
  }, t.prototype.deactivate = function() {
    this.foundation.deactivate();
  }, t.prototype.layout = function() {
    this.foundation.layout();
  }, t.prototype.getDefaultFoundation = function() {
    return new gl(t.createAdapter(this));
  }, t.prototype.initialSyncWithDOM = function() {
    var e = this.root;
    this.isUnbounded = "mdcRippleIsUnbounded" in e.dataset;
  }, t.prototype.setUnbounded = function() {
    this.foundation.setUnbounded(Boolean(this.isUnbounded));
  }, t;
}(Fi);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function ml(s, t) {
  return t(s, {
    skipInitialFocus: !0
  });
}
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Yn = "mdc-dom-focus-sentinel", Fo = function() {
  function s(t, e) {
    e === void 0 && (e = {}), this.root = t, this.options = e, this.elFocusedBeforeTrapFocus = null;
  }
  return s.prototype.trapFocus = function() {
    var t = this.getFocusableElements(this.root);
    if (t.length === 0)
      throw new Error("FocusTrap: Element must have at least one focusable child.");
    this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root), this.options.skipInitialFocus || this.focusInitialElement(t, this.options.initialFocusEl);
  }, s.prototype.releaseFocus = function() {
    [].slice.call(this.root.querySelectorAll("." + Yn)).forEach(function(t) {
      t.parentElement.removeChild(t);
    }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
  }, s.prototype.wrapTabFocus = function(t) {
    var e = this, i = this.createSentinel(), n = this.createSentinel();
    i.addEventListener("focus", function() {
      var r = e.getFocusableElements(t);
      r.length > 0 && r[r.length - 1].focus();
    }), n.addEventListener("focus", function() {
      var r = e.getFocusableElements(t);
      r.length > 0 && r[0].focus();
    }), t.insertBefore(i, t.children[0]), t.appendChild(n);
  }, s.prototype.focusInitialElement = function(t, e) {
    var i = 0;
    e && (i = Math.max(t.indexOf(e), 0)), t[i].focus();
  }, s.prototype.getFocusableElements = function(t) {
    var e = [].slice.call(t.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
    return e.filter(function(i) {
      var n = i.getAttribute("aria-disabled") === "true" || i.getAttribute("disabled") != null || i.getAttribute("hidden") != null || i.getAttribute("aria-hidden") === "true", r = i.tabIndex >= 0 && i.getBoundingClientRect().width > 0 && !i.classList.contains(Yn) && !n, o = !1;
      if (r) {
        var a = getComputedStyle(i);
        o = a.display === "none" || a.visibility === "hidden";
      }
      return r && !o;
    });
  }, s.prototype.createSentinel = function() {
    var t = document.createElement("div");
    return t.setAttribute("tabindex", "0"), t.setAttribute("aria-hidden", "true"), t.classList.add(Yn), t;
  }, s;
}();
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var $t, Ut, T = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
}, pl = ($t = {}, $t["" + T.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", $t["" + T.LIST_ITEM_CLASS] = "mdc-list-item", $t["" + T.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", $t["" + T.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", $t["" + T.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", $t["" + T.ROOT] = "mdc-list", $t), Ee = (Ut = {}, Ut["" + T.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Ut["" + T.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Ut["" + T.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Ut["" + T.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Ut["" + T.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Ut["" + T.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Ut["" + T.ROOT] = "mdc-deprecated-list", Ut), V = {
  ACTION_EVENT: "MDCList:action",
  SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `
    .` + T.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + T.LIST_ITEM_CLASS + ` a,
    .` + Ee[T.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ee[T.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + T.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + T.LIST_ITEM_CLASS + ` a,
    .` + T.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + T.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ee[T.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ee[T.LIST_ITEM_CLASS] + ` a,
    .` + Ee[T.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ee[T.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, j = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
}, _l = "evolution";
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var F = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
}, ht = /* @__PURE__ */ new Set();
ht.add(F.BACKSPACE);
ht.add(F.ENTER);
ht.add(F.SPACEBAR);
ht.add(F.PAGE_UP);
ht.add(F.PAGE_DOWN);
ht.add(F.END);
ht.add(F.HOME);
ht.add(F.ARROW_LEFT);
ht.add(F.ARROW_UP);
ht.add(F.ARROW_RIGHT);
ht.add(F.ARROW_DOWN);
ht.add(F.DELETE);
ht.add(F.ESCAPE);
ht.add(F.TAB);
var pt = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
}, ct = /* @__PURE__ */ new Map();
ct.set(pt.BACKSPACE, F.BACKSPACE);
ct.set(pt.ENTER, F.ENTER);
ct.set(pt.SPACEBAR, F.SPACEBAR);
ct.set(pt.PAGE_UP, F.PAGE_UP);
ct.set(pt.PAGE_DOWN, F.PAGE_DOWN);
ct.set(pt.END, F.END);
ct.set(pt.HOME, F.HOME);
ct.set(pt.ARROW_LEFT, F.ARROW_LEFT);
ct.set(pt.ARROW_UP, F.ARROW_UP);
ct.set(pt.ARROW_RIGHT, F.ARROW_RIGHT);
ct.set(pt.ARROW_DOWN, F.ARROW_DOWN);
ct.set(pt.DELETE, F.DELETE);
ct.set(pt.ESCAPE, F.ESCAPE);
ct.set(pt.TAB, F.TAB);
var fe = /* @__PURE__ */ new Set();
fe.add(F.PAGE_UP);
fe.add(F.PAGE_DOWN);
fe.add(F.END);
fe.add(F.HOME);
fe.add(F.ARROW_LEFT);
fe.add(F.ARROW_UP);
fe.add(F.ARROW_RIGHT);
fe.add(F.ARROW_DOWN);
function ot(s) {
  var t = s.key;
  if (ht.has(t))
    return t;
  var e = ct.get(s.keyCode);
  return e || F.UNKNOWN;
}
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var yl = ["input", "button", "textarea", "select"], Rt = function(s) {
  var t = s.target;
  if (!!t) {
    var e = ("" + t.tagName).toLowerCase();
    yl.indexOf(e) === -1 && s.preventDefault();
  }
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function El() {
  var s = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return s;
}
function Cl(s, t) {
  for (var e = /* @__PURE__ */ new Map(), i = 0; i < s; i++) {
    var n = t(i).trim();
    if (!!n) {
      var r = n[0].toLowerCase();
      e.has(r) || e.set(r, []), e.get(r).push({ text: n.toLowerCase(), index: i });
    }
  }
  return e.forEach(function(o) {
    o.sort(function(a, l) {
      return a.index - l.index;
    });
  }), e;
}
function hs(s, t) {
  var e = s.nextChar, i = s.focusItemAtIndex, n = s.sortedIndexByFirstChar, r = s.focusedItemIndex, o = s.skipFocus, a = s.isItemAtIndexDisabled;
  clearTimeout(t.bufferClearTimeout), t.bufferClearTimeout = setTimeout(function() {
    No(t);
  }, j.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), t.typeaheadBuffer = t.typeaheadBuffer + e;
  var l;
  return t.typeaheadBuffer.length === 1 ? l = vl(n, r, a, t) : l = xl(n, a, t), l !== -1 && !o && i(l), l;
}
function vl(s, t, e, i) {
  var n = i.typeaheadBuffer[0], r = s.get(n);
  if (!r)
    return -1;
  if (n === i.currentFirstChar && r[i.sortedIndexCursor].index === t) {
    i.sortedIndexCursor = (i.sortedIndexCursor + 1) % r.length;
    var o = r[i.sortedIndexCursor].index;
    if (!e(o))
      return o;
  }
  i.currentFirstChar = n;
  var a = -1, l;
  for (l = 0; l < r.length; l++)
    if (!e(r[l].index)) {
      a = l;
      break;
    }
  for (; l < r.length; l++)
    if (r[l].index > t && !e(r[l].index)) {
      a = l;
      break;
    }
  return a !== -1 ? (i.sortedIndexCursor = a, r[i.sortedIndexCursor].index) : -1;
}
function xl(s, t, e) {
  var i = e.typeaheadBuffer[0], n = s.get(i);
  if (!n)
    return -1;
  var r = n[e.sortedIndexCursor];
  if (r.text.lastIndexOf(e.typeaheadBuffer, 0) === 0 && !t(r.index))
    return r.index;
  for (var o = (e.sortedIndexCursor + 1) % n.length, a = -1; o !== e.sortedIndexCursor; ) {
    var l = n[o], c = l.text.lastIndexOf(e.typeaheadBuffer, 0) === 0, h = !t(l.index);
    if (c && h) {
      a = o;
      break;
    }
    o = (o + 1) % n.length;
  }
  return a !== -1 ? (e.sortedIndexCursor = a, n[e.sortedIndexCursor].index) : -1;
}
function Po(s) {
  return s.typeaheadBuffer.length > 0;
}
function No(s) {
  s.typeaheadBuffer = "";
}
function Pr(s, t) {
  var e = s.event, i = s.isTargetListItem, n = s.focusedItemIndex, r = s.focusItemAtIndex, o = s.sortedIndexByFirstChar, a = s.isItemAtIndexDisabled, l = ot(e) === "ArrowLeft", c = ot(e) === "ArrowUp", h = ot(e) === "ArrowRight", u = ot(e) === "ArrowDown", d = ot(e) === "Home", f = ot(e) === "End", g = ot(e) === "Enter", m = ot(e) === "Spacebar";
  if (e.altKey || e.ctrlKey || e.metaKey || l || c || h || u || d || f || g)
    return -1;
  var p = !m && e.key.length === 1;
  if (p) {
    Rt(e);
    var _ = {
      focusItemAtIndex: r,
      focusedItemIndex: n,
      nextChar: e.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: a
    };
    return hs(_, t);
  }
  if (!m)
    return -1;
  i && Rt(e);
  var y = i && Po(t);
  if (y) {
    var _ = {
      focusItemAtIndex: r,
      focusedItemIndex: n,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: a
    };
    return hs(_, t);
  }
  return -1;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Il(s) {
  return s instanceof Array;
}
var Sl = ["Alt", "Control", "Meta", "Shift"];
function Nr(s) {
  var t = new Set(s ? Sl.filter(function(e) {
    return s.getModifierState(e);
  }) : []);
  return function(e) {
    return e.every(function(i) {
      return t.has(i);
    }) && e.length === t.size;
  };
}
var Rl = function(s) {
  Dt(t, s);
  function t(e) {
    var i = s.call(this, xt(xt({}, t.defaultAdapter), e)) || this;
    return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = j.UNSET_INDEX, i.focusedItemIndex = j.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = El(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
  }
  return Object.defineProperty(t, "strings", {
    get: function() {
      return V;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "cssClasses", {
    get: function() {
      return T;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "numbers", {
    get: function() {
      return j;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "defaultAdapter", {
    get: function() {
      return {
        addClassForElementIndex: function() {
        },
        focusItemAtIndex: function() {
        },
        getAttributeForElementIndex: function() {
          return null;
        },
        getFocusedElementIndex: function() {
          return 0;
        },
        getListItemCount: function() {
          return 0;
        },
        hasCheckboxAtIndex: function() {
          return !1;
        },
        hasRadioAtIndex: function() {
          return !1;
        },
        isCheckboxCheckedAtIndex: function() {
          return !1;
        },
        isFocusInsideList: function() {
          return !1;
        },
        isRootFocused: function() {
          return !1;
        },
        listItemAtIndexHasClass: function() {
          return !1;
        },
        notifyAction: function() {
        },
        notifySelectionChange: function() {
        },
        removeClassForElementIndex: function() {
        },
        setAttributeForElementIndex: function() {
        },
        setCheckedCheckboxOrRadioAtIndex: function() {
        },
        setTabIndexForListItemChildren: function() {
        },
        getPrimaryTextAtIndex: function() {
          return "";
        }
      };
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.layout = function() {
    this.adapter.getListItemCount() !== 0 && (this.adapter.hasCheckboxAtIndex(0) ? this.isCheckboxList = !0 : this.adapter.hasRadioAtIndex(0) ? this.isRadioList = !0 : this.maybeInitializeSingleSelection(), this.hasTypeahead && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex()));
  }, t.prototype.getFocusedItemIndex = function() {
    return this.focusedItemIndex;
  }, t.prototype.setWrapFocus = function(e) {
    this.wrapFocus = e;
  }, t.prototype.setVerticalOrientation = function(e) {
    this.isVertical = e;
  }, t.prototype.setSingleSelection = function(e) {
    this.isSingleSelectionList = e, e && (this.maybeInitializeSingleSelection(), this.selectedIndex = this.getSelectedIndexFromDOM());
  }, t.prototype.setDisabledItemsFocusable = function(e) {
    this.areDisabledItemsFocusable = e;
  }, t.prototype.maybeInitializeSingleSelection = function() {
    var e = this.getSelectedIndexFromDOM();
    if (e !== j.UNSET_INDEX) {
      var i = this.adapter.listItemAtIndexHasClass(e, T.LIST_ITEM_ACTIVATED_CLASS);
      i && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = e;
    }
  }, t.prototype.getSelectedIndexFromDOM = function() {
    for (var e = j.UNSET_INDEX, i = this.adapter.getListItemCount(), n = 0; n < i; n++) {
      var r = this.adapter.listItemAtIndexHasClass(n, T.LIST_ITEM_SELECTED_CLASS), o = this.adapter.listItemAtIndexHasClass(n, T.LIST_ITEM_ACTIVATED_CLASS);
      if (!!(r || o)) {
        e = n;
        break;
      }
    }
    return e;
  }, t.prototype.setHasTypeahead = function(e) {
    this.hasTypeahead = e, e && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
  }, t.prototype.isTypeaheadInProgress = function() {
    return this.hasTypeahead && Po(this.typeaheadState);
  }, t.prototype.setUseActivatedClass = function(e) {
    this.useActivatedClass = e;
  }, t.prototype.setUseSelectedAttribute = function(e) {
    this.useSelectedAttr = e;
  }, t.prototype.getSelectedIndex = function() {
    return this.selectedIndex;
  }, t.prototype.setSelectedIndex = function(e, i) {
    i === void 0 && (i = {}), this.isIndexValid(e) && (this.isCheckboxList ? this.setCheckboxAtIndex(e, i) : this.isRadioList ? this.setRadioAtIndex(e, i) : this.setSingleSelectionAtIndex(e, i));
  }, t.prototype.handleFocusIn = function(e) {
    e >= 0 && (this.focusedItemIndex = e, this.adapter.setAttributeForElementIndex(e, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(e, "0"));
  }, t.prototype.handleFocusOut = function(e) {
    var i = this;
    e >= 0 && (this.adapter.setAttributeForElementIndex(e, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(e, "-1")), setTimeout(function() {
      i.adapter.isFocusInsideList() || i.setTabindexToFirstSelectedOrFocusedItem();
    }, 0);
  }, t.prototype.isIndexDisabled = function(e) {
    return this.adapter.listItemAtIndexHasClass(e, T.LIST_ITEM_DISABLED_CLASS);
  }, t.prototype.handleKeydown = function(e, i, n) {
    var r = this, o, a = ot(e) === "ArrowLeft", l = ot(e) === "ArrowUp", c = ot(e) === "ArrowRight", h = ot(e) === "ArrowDown", u = ot(e) === "Home", d = ot(e) === "End", f = ot(e) === "Enter", g = ot(e) === "Spacebar", m = this.isVertical && h || !this.isVertical && c, p = this.isVertical && l || !this.isVertical && a, _ = e.key === "A" || e.key === "a", y = Nr(e);
    if (this.adapter.isRootFocused()) {
      if ((p || d) && y([]))
        e.preventDefault(), this.focusLastElement();
      else if ((m || u) && y([]))
        e.preventDefault(), this.focusFirstElement();
      else if (p && y(["Shift"]) && this.isCheckboxList) {
        e.preventDefault();
        var C = this.focusLastElement();
        C !== -1 && this.setSelectedIndexOnAction(C, !1);
      } else if (m && y(["Shift"]) && this.isCheckboxList) {
        e.preventDefault();
        var C = this.focusFirstElement();
        C !== -1 && this.setSelectedIndexOnAction(C, !1);
      }
      if (this.hasTypeahead) {
        var v = {
          event: e,
          focusItemAtIndex: function(A) {
            r.focusItemAtIndex(A);
          },
          focusedItemIndex: -1,
          isTargetListItem: i,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: function(A) {
            return r.isIndexDisabled(A);
          }
        };
        Pr(v, this.typeaheadState);
      }
      return;
    }
    var E = this.adapter.getFocusedElementIndex();
    if (!(E === -1 && (E = n, E < 0))) {
      if (m && y([]))
        Rt(e), this.focusNextElement(E);
      else if (p && y([]))
        Rt(e), this.focusPrevElement(E);
      else if (m && y(["Shift"]) && this.isCheckboxList) {
        Rt(e);
        var C = this.focusNextElement(E);
        C !== -1 && this.setSelectedIndexOnAction(C, !1);
      } else if (p && y(["Shift"]) && this.isCheckboxList) {
        Rt(e);
        var C = this.focusPrevElement(E);
        C !== -1 && this.setSelectedIndexOnAction(C, !1);
      } else if (u && y([]))
        Rt(e), this.focusFirstElement();
      else if (d && y([]))
        Rt(e), this.focusLastElement();
      else if (u && y(["Control", "Shift"]) && this.isCheckboxList) {
        if (Rt(e), this.isIndexDisabled(E))
          return;
        this.focusFirstElement(), this.toggleCheckboxRange(0, E, E);
      } else if (d && y(["Control", "Shift"]) && this.isCheckboxList) {
        if (Rt(e), this.isIndexDisabled(E))
          return;
        this.focusLastElement(), this.toggleCheckboxRange(E, this.adapter.getListItemCount() - 1, E);
      } else if (_ && y(["Control"]) && this.isCheckboxList)
        e.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === j.UNSET_INDEX ? [] : this.selectedIndex, !0);
      else if ((f || g) && y([])) {
        if (i) {
          var I = e.target;
          if (I && I.tagName === "A" && f || (Rt(e), this.isIndexDisabled(E)))
            return;
          this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(E, !1), this.adapter.notifyAction(E));
        }
      } else if ((f || g) && y(["Shift"]) && this.isCheckboxList) {
        var I = e.target;
        if (I && I.tagName === "A" && f || (Rt(e), this.isIndexDisabled(E)))
          return;
        this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : E, E, E), this.adapter.notifyAction(E));
      }
      if (this.hasTypeahead) {
        var v = {
          event: e,
          focusItemAtIndex: function(R) {
            r.focusItemAtIndex(R);
          },
          focusedItemIndex: this.focusedItemIndex,
          isTargetListItem: i,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: function(R) {
            return r.isIndexDisabled(R);
          }
        };
        Pr(v, this.typeaheadState);
      }
    }
  }, t.prototype.handleClick = function(e, i, n) {
    var r, o = Nr(n);
    e !== j.UNSET_INDEX && (this.isIndexDisabled(e) || (o([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(e, i), this.adapter.notifyAction(e)) : this.isCheckboxList && o(["Shift"]) && (this.toggleCheckboxRange((r = this.lastSelectedIndex) !== null && r !== void 0 ? r : e, e, e), this.adapter.notifyAction(e))));
  }, t.prototype.focusNextElement = function(e) {
    var i = this.adapter.getListItemCount(), n = e, r = null;
    do {
      if (n++, n >= i)
        if (this.wrapFocus)
          n = 0;
        else
          return e;
      if (n === r)
        return -1;
      r = r != null ? r : n;
    } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(n));
    return this.focusItemAtIndex(n), n;
  }, t.prototype.focusPrevElement = function(e) {
    var i = this.adapter.getListItemCount(), n = e, r = null;
    do {
      if (n--, n < 0)
        if (this.wrapFocus)
          n = i - 1;
        else
          return e;
      if (n === r)
        return -1;
      r = r != null ? r : n;
    } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(n));
    return this.focusItemAtIndex(n), n;
  }, t.prototype.focusFirstElement = function() {
    return this.focusNextElement(-1);
  }, t.prototype.focusLastElement = function() {
    return this.focusPrevElement(this.adapter.getListItemCount());
  }, t.prototype.focusInitialElement = function() {
    var e = this.getFirstSelectedOrFocusedItemIndex();
    return this.focusItemAtIndex(e), e;
  }, t.prototype.setEnabled = function(e, i) {
    !this.isIndexValid(e, !1) || (i ? (this.adapter.removeClassForElementIndex(e, T.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(e, V.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(e, T.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(e, V.ARIA_DISABLED, "true")));
  }, t.prototype.setSingleSelectionAtIndex = function(e, i) {
    if (i === void 0 && (i = {}), !(this.selectedIndex === e && !i.forceUpdate)) {
      var n = T.LIST_ITEM_SELECTED_CLASS;
      this.useActivatedClass && (n = T.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== j.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, n), this.setAriaForSingleSelectionAtIndex(e), this.setTabindexAtIndex(e), e !== j.UNSET_INDEX && this.adapter.addClassForElementIndex(e, n), this.selectedIndex = e, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([e]);
    }
  }, t.prototype.setAriaForSingleSelectionAtIndex = function(e) {
    this.selectedIndex === j.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(e, V.ARIA_CURRENT));
    var i = this.ariaCurrentAttrValue !== null, n = i ? V.ARIA_CURRENT : V.ARIA_SELECTED;
    if (this.selectedIndex !== j.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, n, "false"), e !== j.UNSET_INDEX) {
      var r = i ? this.ariaCurrentAttrValue : "true";
      this.adapter.setAttributeForElementIndex(e, n, r);
    }
  }, t.prototype.getSelectionAttribute = function() {
    return this.useSelectedAttr ? V.ARIA_SELECTED : V.ARIA_CHECKED;
  }, t.prototype.setRadioAtIndex = function(e, i) {
    i === void 0 && (i = {});
    var n = this.getSelectionAttribute();
    this.adapter.setCheckedCheckboxOrRadioAtIndex(e, !0), !(this.selectedIndex === e && !i.forceUpdate) && (this.selectedIndex !== j.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, n, "false"), this.adapter.setAttributeForElementIndex(e, n, "true"), this.selectedIndex = e, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([e]));
  }, t.prototype.setCheckboxAtIndex = function(e, i) {
    i === void 0 && (i = {});
    for (var n = this.selectedIndex, r = i.isUserInteraction ? new Set(n === j.UNSET_INDEX ? [] : n) : null, o = this.getSelectionAttribute(), a = [], l = 0; l < this.adapter.getListItemCount(); l++) {
      var c = r == null ? void 0 : r.has(l), h = e.indexOf(l) >= 0;
      h !== c && a.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, h), this.adapter.setAttributeForElementIndex(l, o, h ? "true" : "false");
    }
    this.selectedIndex = e, i.isUserInteraction && a.length && this.adapter.notifySelectionChange(a);
  }, t.prototype.toggleCheckboxRange = function(e, i, n) {
    this.lastSelectedIndex = n;
    for (var r = new Set(this.selectedIndex === j.UNSET_INDEX ? [] : this.selectedIndex), o = !(r != null && r.has(n)), a = as([e, i].sort(), 2), l = a[0], c = a[1], h = this.getSelectionAttribute(), u = [], d = l; d <= c; d++)
      if (!this.isIndexDisabled(d)) {
        var f = r.has(d);
        o !== f && (u.push(d), this.adapter.setCheckedCheckboxOrRadioAtIndex(d, o), this.adapter.setAttributeForElementIndex(d, h, "" + o), o ? r.add(d) : r.delete(d));
      }
    u.length && (this.selectedIndex = Do([], as(r)), this.adapter.notifySelectionChange(u));
  }, t.prototype.setTabindexAtIndex = function(e) {
    this.focusedItemIndex === j.UNSET_INDEX && e !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== e && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== e && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), e !== j.UNSET_INDEX && this.adapter.setAttributeForElementIndex(e, "tabindex", "0");
  }, t.prototype.isSelectableList = function() {
    return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
  }, t.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
    var e = this.getFirstSelectedOrFocusedItemIndex();
    this.setTabindexAtIndex(e);
  }, t.prototype.getFirstSelectedOrFocusedItemIndex = function() {
    return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== j.UNSET_INDEX ? this.selectedIndex : Il(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(e, i) {
      return Math.min(e, i);
    }) : 0 : Math.max(this.focusedItemIndex, 0);
  }, t.prototype.isIndexValid = function(e, i) {
    var n = this;
    if (i === void 0 && (i = !0), e instanceof Array) {
      if (!this.isCheckboxList && i)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      return e.length === 0 ? !0 : e.some(function(r) {
        return n.isIndexInRange(r);
      });
    } else if (typeof e == "number") {
      if (this.isCheckboxList && i)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
      return this.isIndexInRange(e) || this.isSingleSelectionList && e === j.UNSET_INDEX;
    } else
      return !1;
  }, t.prototype.isIndexInRange = function(e) {
    var i = this.adapter.getListItemCount();
    return e >= 0 && e < i;
  }, t.prototype.setSelectedIndexOnAction = function(e, i) {
    this.lastSelectedIndex = e, this.isCheckboxList ? (this.toggleCheckboxAtIndex(e, i), this.adapter.notifySelectionChange([e])) : this.setSelectedIndex(e, { isUserInteraction: !0 });
  }, t.prototype.toggleCheckboxAtIndex = function(e, i) {
    var n = this.getSelectionAttribute(), r = this.adapter.isCheckboxCheckedAtIndex(e), o;
    i ? o = r : (o = !r, this.adapter.setCheckedCheckboxOrRadioAtIndex(e, o)), this.adapter.setAttributeForElementIndex(e, n, o ? "true" : "false");
    var a = this.selectedIndex === j.UNSET_INDEX ? [] : this.selectedIndex.slice();
    o ? a.push(e) : a = a.filter(function(l) {
      return l !== e;
    }), this.selectedIndex = a;
  }, t.prototype.focusItemAtIndex = function(e) {
    this.adapter.focusItemAtIndex(e), this.focusedItemIndex = e;
  }, t.prototype.checkboxListToggleAll = function(e, i) {
    var n = this.adapter.getListItemCount();
    if (e.length === n)
      this.setCheckboxAtIndex([], { isUserInteraction: i });
    else {
      for (var r = [], o = 0; o < n; o++)
        (!this.isIndexDisabled(o) || e.indexOf(o) > -1) && r.push(o);
      this.setCheckboxAtIndex(r, { isUserInteraction: i });
    }
  }, t.prototype.typeaheadMatchItem = function(e, i, n) {
    var r = this;
    n === void 0 && (n = !1);
    var o = {
      focusItemAtIndex: function(a) {
        r.focusItemAtIndex(a);
      },
      focusedItemIndex: i || this.focusedItemIndex,
      nextChar: e,
      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
      skipFocus: n,
      isItemAtIndexDisabled: function(a) {
        return r.isIndexDisabled(a);
      }
    };
    return hs(o, this.typeaheadState);
  }, t.prototype.typeaheadInitSortedIndex = function() {
    return Cl(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
  }, t.prototype.clearTypeaheadBuffer = function() {
    No(this.typeaheadState);
  }, t;
}(Je);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Al = function(s) {
  Dt(t, s);
  function t() {
    return s !== null && s.apply(this, arguments) || this;
  }
  return Object.defineProperty(t.prototype, "vertical", {
    set: function(e) {
      this.foundation.setVerticalOrientation(e);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "listElements", {
    get: function() {
      return Array.from(this.root.querySelectorAll("." + this.classNameMap[T.LIST_ITEM_CLASS]));
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "wrapFocus", {
    set: function(e) {
      this.foundation.setWrapFocus(e);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "typeaheadInProgress", {
    get: function() {
      return this.foundation.isTypeaheadInProgress();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "hasTypeahead", {
    set: function(e) {
      this.foundation.setHasTypeahead(e);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "singleSelection", {
    set: function(e) {
      this.foundation.setSingleSelection(e);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "disabledItemsFocusable", {
    set: function(e) {
      this.foundation.setDisabledItemsFocusable(e);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "selectedIndex", {
    get: function() {
      return this.foundation.getSelectedIndex();
    },
    set: function(e) {
      this.foundation.setSelectedIndex(e);
    },
    enumerable: !1,
    configurable: !0
  }), t.attachTo = function(e) {
    return new t(e);
  }, t.prototype.initialSyncWithDOM = function() {
    this.isEvolutionEnabled = _l in this.root.dataset, this.isEvolutionEnabled ? this.classNameMap = pl : ve(this.root, V.DEPRECATED_SELECTOR) ? this.classNameMap = Ee : this.classNameMap = Object.values(T).reduce(function(e, i) {
      return e[i] = i, e;
    }, {}), this.handleClick = this.handleClickEvent.bind(this), this.handleKeydown = this.handleKeydownEvent.bind(this), this.focusInEventListener = this.handleFocusInEvent.bind(this), this.focusOutEventListener = this.handleFocusOutEvent.bind(this), this.listen("keydown", this.handleKeydown), this.listen("click", this.handleClick), this.listen("focusin", this.focusInEventListener), this.listen("focusout", this.focusOutEventListener), this.layout(), this.initializeListType(), this.ensureFocusable();
  }, t.prototype.destroy = function() {
    this.unlisten("keydown", this.handleKeydown), this.unlisten("click", this.handleClick), this.unlisten("focusin", this.focusInEventListener), this.unlisten("focusout", this.focusOutEventListener);
  }, t.prototype.layout = function() {
    var e = this.root.getAttribute(V.ARIA_ORIENTATION);
    this.vertical = e !== V.ARIA_ORIENTATION_HORIZONTAL;
    var i = "." + this.classNameMap[T.LIST_ITEM_CLASS] + ":not([tabindex])", n = V.FOCUSABLE_CHILD_ELEMENTS, r = this.root.querySelectorAll(i);
    r.length && Array.prototype.forEach.call(r, function(a) {
      a.setAttribute("tabindex", "-1");
    });
    var o = this.root.querySelectorAll(n);
    o.length && Array.prototype.forEach.call(o, function(a) {
      a.setAttribute("tabindex", "-1");
    }), this.isEvolutionEnabled && this.foundation.setUseSelectedAttribute(!0), this.foundation.layout();
  }, t.prototype.getPrimaryText = function(e) {
    var i, n = e.querySelector("." + this.classNameMap[T.LIST_ITEM_PRIMARY_TEXT_CLASS]);
    if (this.isEvolutionEnabled || n)
      return (i = n == null ? void 0 : n.textContent) !== null && i !== void 0 ? i : "";
    var r = e.querySelector("." + this.classNameMap[T.LIST_ITEM_TEXT_CLASS]);
    return r && r.textContent || "";
  }, t.prototype.initializeListType = function() {
    var e = this;
    if (this.isInteractive = ve(this.root, V.ARIA_INTERACTIVE_ROLES_SELECTOR), this.isEvolutionEnabled && this.isInteractive) {
      var i = Array.from(this.root.querySelectorAll(V.SELECTED_ITEM_SELECTOR), function(a) {
        return e.listElements.indexOf(a);
      });
      ve(this.root, V.ARIA_MULTI_SELECTABLE_SELECTOR) ? this.selectedIndex = i : i.length > 0 && (this.selectedIndex = i[0]);
      return;
    }
    var n = this.root.querySelectorAll(V.ARIA_ROLE_CHECKBOX_SELECTOR), r = this.root.querySelector(V.ARIA_CHECKED_RADIO_SELECTOR);
    if (n.length) {
      var o = this.root.querySelectorAll(V.ARIA_CHECKED_CHECKBOX_SELECTOR);
      this.selectedIndex = Array.from(o, function(a) {
        return e.listElements.indexOf(a);
      });
    } else
      r && (this.selectedIndex = this.listElements.indexOf(r));
  }, t.prototype.setEnabled = function(e, i) {
    this.foundation.setEnabled(e, i);
  }, t.prototype.typeaheadMatchItem = function(e, i) {
    return this.foundation.typeaheadMatchItem(e, i, !0);
  }, t.prototype.getDefaultFoundation = function() {
    var e = this, i = {
      addClassForElementIndex: function(n, r) {
        var o = e.listElements[n];
        o && o.classList.add(e.classNameMap[r]);
      },
      focusItemAtIndex: function(n) {
        var r = e.listElements[n];
        r && r.focus();
      },
      getAttributeForElementIndex: function(n, r) {
        return e.listElements[n].getAttribute(r);
      },
      getFocusedElementIndex: function() {
        return e.listElements.indexOf(document.activeElement);
      },
      getListItemCount: function() {
        return e.listElements.length;
      },
      getPrimaryTextAtIndex: function(n) {
        return e.getPrimaryText(e.listElements[n]);
      },
      hasCheckboxAtIndex: function(n) {
        var r = e.listElements[n];
        return !!r.querySelector(V.CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: function(n) {
        var r = e.listElements[n];
        return !!r.querySelector(V.RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: function(n) {
        var r = e.listElements[n], o = r.querySelector(V.CHECKBOX_SELECTOR);
        return o.checked;
      },
      isFocusInsideList: function() {
        return e.root !== document.activeElement && e.root.contains(document.activeElement);
      },
      isRootFocused: function() {
        return document.activeElement === e.root;
      },
      listItemAtIndexHasClass: function(n, r) {
        return e.listElements[n].classList.contains(e.classNameMap[r]);
      },
      notifyAction: function(n) {
        e.emit(V.ACTION_EVENT, { index: n }, !0);
      },
      notifySelectionChange: function(n) {
        e.emit(V.SELECTION_CHANGE_EVENT, { changedIndices: n }, !0);
      },
      removeClassForElementIndex: function(n, r) {
        var o = e.listElements[n];
        o && o.classList.remove(e.classNameMap[r]);
      },
      setAttributeForElementIndex: function(n, r, o) {
        var a = e.listElements[n];
        a && a.setAttribute(r, o);
      },
      setCheckedCheckboxOrRadioAtIndex: function(n, r) {
        var o = e.listElements[n], a = o.querySelector(V.CHECKBOX_RADIO_SELECTOR);
        a.checked = r;
        var l = document.createEvent("Event");
        l.initEvent("change", !0, !0), a.dispatchEvent(l);
      },
      setTabIndexForListItemChildren: function(n, r) {
        var o = e.listElements[n], a = V.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;
        Array.prototype.forEach.call(o.querySelectorAll(a), function(l) {
          l.setAttribute("tabindex", r);
        });
      }
    };
    return new Rl(i);
  }, t.prototype.ensureFocusable = function() {
    if (this.isEvolutionEnabled && this.isInteractive && !this.root.querySelector("." + this.classNameMap[T.LIST_ITEM_CLASS] + '[tabindex="0"]')) {
      var e = this.initialFocusIndex();
      e !== -1 && (this.listElements[e].tabIndex = 0);
    }
  }, t.prototype.initialFocusIndex = function() {
    if (this.selectedIndex instanceof Array && this.selectedIndex.length > 0)
      return this.selectedIndex[0];
    if (typeof this.selectedIndex == "number" && this.selectedIndex !== j.UNSET_INDEX)
      return this.selectedIndex;
    var e = this.root.querySelector("." + this.classNameMap[T.LIST_ITEM_CLASS] + ":not(." + this.classNameMap[T.LIST_ITEM_DISABLED_CLASS] + ")");
    return e === null ? -1 : this.getListItemIndex(e);
  }, t.prototype.getListItemIndex = function(e) {
    var i = ls(e, "." + this.classNameMap[T.LIST_ITEM_CLASS] + ", ." + this.classNameMap[T.ROOT]);
    return i && ve(i, "." + this.classNameMap[T.LIST_ITEM_CLASS]) ? this.listElements.indexOf(i) : -1;
  }, t.prototype.handleFocusInEvent = function(e) {
    var i = this.getListItemIndex(e.target);
    this.foundation.handleFocusIn(i);
  }, t.prototype.handleFocusOutEvent = function(e) {
    var i = this.getListItemIndex(e.target);
    this.foundation.handleFocusOut(i);
  }, t.prototype.handleKeydownEvent = function(e) {
    var i = this.getListItemIndex(e.target), n = e.target;
    this.foundation.handleKeydown(e, n.classList.contains(this.classNameMap[T.LIST_ITEM_CLASS]), i);
  }, t.prototype.handleClickEvent = function(e) {
    var i = this.getListItemIndex(e.target), n = e.target, r = !ve(n, V.CHECKBOX_RADIO_SELECTOR);
    this.foundation.handleClick(i, r, e);
  }, t;
}(Fi);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var dt = {
  ANIMATE: "mdc-drawer--animate",
  CLOSING: "mdc-drawer--closing",
  DISMISSIBLE: "mdc-drawer--dismissible",
  MODAL: "mdc-drawer--modal",
  OPEN: "mdc-drawer--open",
  OPENING: "mdc-drawer--opening",
  ROOT: "mdc-drawer"
}, bl = {
  APP_CONTENT_SELECTOR: ".mdc-drawer-app-content",
  CLOSE_EVENT: "MDCDrawer:closed",
  OPEN_EVENT: "MDCDrawer:opened",
  SCRIM_SELECTOR: ".mdc-drawer-scrim",
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  LIST_ITEM_ACTIVATED_SELECTOR: ".mdc-list-item--activated,.mdc-deprecated-list-item--activated"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var An = function(s) {
  Dt(t, s);
  function t(e) {
    var i = s.call(this, xt(xt({}, t.defaultAdapter), e)) || this;
    return i.animationFrame = 0, i.animationTimer = 0, i;
  }
  return Object.defineProperty(t, "strings", {
    get: function() {
      return bl;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "cssClasses", {
    get: function() {
      return dt;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
        },
        removeClass: function() {
        },
        hasClass: function() {
          return !1;
        },
        elementHasClass: function() {
          return !1;
        },
        notifyClose: function() {
        },
        notifyOpen: function() {
        },
        saveFocus: function() {
        },
        restoreFocus: function() {
        },
        focusActiveNavigationItem: function() {
        },
        trapFocus: function() {
        },
        releaseFocus: function() {
        }
      };
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.destroy = function() {
    this.animationFrame && cancelAnimationFrame(this.animationFrame), this.animationTimer && clearTimeout(this.animationTimer);
  }, t.prototype.open = function() {
    var e = this;
    this.isOpen() || this.isOpening() || this.isClosing() || (this.adapter.addClass(dt.OPEN), this.adapter.addClass(dt.ANIMATE), this.runNextAnimationFrame(function() {
      e.adapter.addClass(dt.OPENING);
    }), this.adapter.saveFocus());
  }, t.prototype.close = function() {
    !this.isOpen() || this.isOpening() || this.isClosing() || this.adapter.addClass(dt.CLOSING);
  }, t.prototype.isOpen = function() {
    return this.adapter.hasClass(dt.OPEN);
  }, t.prototype.isOpening = function() {
    return this.adapter.hasClass(dt.OPENING) || this.adapter.hasClass(dt.ANIMATE);
  }, t.prototype.isClosing = function() {
    return this.adapter.hasClass(dt.CLOSING);
  }, t.prototype.handleKeydown = function(e) {
    var i = e.keyCode, n = e.key, r = n === "Escape" || i === 27;
    r && this.close();
  }, t.prototype.handleTransitionEnd = function(e) {
    var i = dt.OPENING, n = dt.CLOSING, r = dt.OPEN, o = dt.ANIMATE, a = dt.ROOT, l = this.isElement(e.target) && this.adapter.elementHasClass(e.target, a);
    !l || (this.isClosing() ? (this.adapter.removeClass(r), this.closed(), this.adapter.restoreFocus(), this.adapter.notifyClose()) : (this.adapter.focusActiveNavigationItem(), this.opened(), this.adapter.notifyOpen()), this.adapter.removeClass(o), this.adapter.removeClass(i), this.adapter.removeClass(n));
  }, t.prototype.opened = function() {
  }, t.prototype.closed = function() {
  }, t.prototype.runNextAnimationFrame = function(e) {
    var i = this;
    cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
      i.animationFrame = 0, clearTimeout(i.animationTimer), i.animationTimer = setTimeout(e, 0);
    });
  }, t.prototype.isElement = function(e) {
    return Boolean(e.classList);
  }, t;
}(Je);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Tl = function(s) {
  Dt(t, s);
  function t() {
    return s !== null && s.apply(this, arguments) || this;
  }
  return t.prototype.handleScrimClick = function() {
    this.close();
  }, t.prototype.opened = function() {
    this.adapter.trapFocus();
  }, t.prototype.closed = function() {
    this.adapter.releaseFocus();
  }, t;
}(An);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ji = An.cssClasses, ai = An.strings, wl = function(s) {
  Dt(t, s);
  function t() {
    return s !== null && s.apply(this, arguments) || this;
  }
  return t.attachTo = function(e) {
    return new t(e);
  }, Object.defineProperty(t.prototype, "open", {
    get: function() {
      return this.foundation.isOpen();
    },
    set: function(e) {
      e ? this.foundation.open() : this.foundation.close();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "list", {
    get: function() {
      return this.innerList;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.initialize = function(e, i) {
    e === void 0 && (e = function(r) {
      return new Fo(r);
    }), i === void 0 && (i = function(r) {
      return new Al(r);
    });
    var n = this.root.querySelector(ai.LIST_SELECTOR);
    n && (this.innerList = i(n), this.innerList.wrapFocus = !0), this.focusTrapFactory = e;
  }, t.prototype.initialSyncWithDOM = function() {
    var e = this, i = Ji.MODAL, n = ai.SCRIM_SELECTOR;
    this.scrim = this.root.parentNode.querySelector(n), this.scrim && this.root.classList.contains(i) && (this.handleScrimClick = function() {
      return e.foundation.handleScrimClick();
    }, this.scrim.addEventListener("click", this.handleScrimClick), this.focusTrap = ml(this.root, this.focusTrapFactory)), this.handleKeydown = function(r) {
      e.foundation.handleKeydown(r);
    }, this.handleTransitionEnd = function(r) {
      e.foundation.handleTransitionEnd(r);
    }, this.listen("keydown", this.handleKeydown), this.listen("transitionend", this.handleTransitionEnd);
  }, t.prototype.destroy = function() {
    this.unlisten("keydown", this.handleKeydown), this.unlisten("transitionend", this.handleTransitionEnd), this.innerList && this.innerList.destroy();
    var e = Ji.MODAL;
    this.scrim && this.handleScrimClick && this.root.classList.contains(e) && (this.scrim.removeEventListener("click", this.handleScrimClick), this.open = !1);
  }, t.prototype.getDefaultFoundation = function() {
    var e = this, i = {
      addClass: function(o) {
        e.root.classList.add(o);
      },
      removeClass: function(o) {
        e.root.classList.remove(o);
      },
      hasClass: function(o) {
        return e.root.classList.contains(o);
      },
      elementHasClass: function(o, a) {
        return o.classList.contains(a);
      },
      saveFocus: function() {
        e.previousFocus = document.activeElement;
      },
      restoreFocus: function() {
        var o = e.previousFocus;
        o && o.focus && e.root.contains(document.activeElement) && o.focus();
      },
      focusActiveNavigationItem: function() {
        var o = e.root.querySelector(ai.LIST_ITEM_ACTIVATED_SELECTOR);
        o && o.focus();
      },
      notifyClose: function() {
        e.emit(ai.CLOSE_EVENT, {}, !0);
      },
      notifyOpen: function() {
        e.emit(ai.OPEN_EVENT, {}, !0);
      },
      trapFocus: function() {
        e.focusTrap.trapFocus();
      },
      releaseFocus: function() {
        e.focusTrap.releaseFocus();
      }
    }, n = Ji.DISMISSIBLE, r = Ji.MODAL;
    if (this.root.classList.contains(n))
      return new An(i);
    if (this.root.classList.contains(r))
      return new Tl(i);
    throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are " + n + " and " + r + ".");
  }, t;
}(Fi);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ts = {
  CLOSING: "mdc-banner--closing",
  OPEN: "mdc-banner--open",
  OPENING: "mdc-banner--opening"
}, kr = {
  BANNER_ANIMATION_CLOSE_TIME_MS: 250,
  BANNER_ANIMATION_OPEN_TIME_MS: 300
}, li = {
  CLOSED: "MDCBanner:closed",
  CLOSING: "MDCBanner:closing",
  OPENED: "MDCBanner:opened",
  OPENING: "MDCBanner:opening",
  ACTION_CLICKED: "MDCBanner:actionClicked"
}, De = {
  CONTENT: ".mdc-banner__content",
  PRIMARY_ACTION: ".mdc-banner__primary-action",
  SECONDARY_ACTION: ".mdc-banner__secondary-action",
  TEXT: ".mdc-banner__text"
}, ln;
(function(s) {
  s[s.PRIMARY = 0] = "PRIMARY", s[s.SECONDARY = 1] = "SECONDARY", s[s.UNSPECIFIED = 2] = "UNSPECIFIED";
})(ln || (ln = {}));
var Br;
(function(s) {
  s[s.PRIMARY = 0] = "PRIMARY", s[s.SECONDARY = 1] = "SECONDARY", s[s.UNKNOWN = 2] = "UNKNOWN";
})(Br || (Br = {}));
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Kn = Ts.OPENING, Gr = Ts.OPEN, Zn = Ts.CLOSING, Ll = function(s) {
  Dt(t, s);
  function t(e) {
    var i = s.call(this, xt(xt({}, t.defaultAdapter), e)) || this;
    return i.isOpened = !1, i.animationFrame = 0, i.animationTimer = 0, i;
  }
  return Object.defineProperty(t, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
        },
        getContentHeight: function() {
          return 0;
        },
        notifyClosed: function() {
        },
        notifyClosing: function() {
        },
        notifyOpened: function() {
        },
        notifyOpening: function() {
        },
        notifyActionClicked: function() {
        },
        releaseFocus: function() {
        },
        removeClass: function() {
        },
        setStyleProperty: function() {
        },
        trapFocus: function() {
        }
      };
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.destroy = function() {
    cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = 0;
  }, t.prototype.open = function() {
    var e = this;
    this.isOpened = !0, this.adapter.notifyOpening(), this.adapter.removeClass(Zn), this.adapter.addClass(Kn);
    var i = this.adapter.getContentHeight();
    this.animationFrame = requestAnimationFrame(function() {
      e.adapter.addClass(Gr), e.adapter.setStyleProperty("height", i + "px"), e.animationTimer = setTimeout(function() {
        e.handleAnimationTimerEnd(), e.adapter.trapFocus(), e.adapter.notifyOpened();
      }, kr.BANNER_ANIMATION_OPEN_TIME_MS);
    });
  }, t.prototype.close = function(e) {
    var i = this;
    !this.isOpened || (cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, this.isOpened = !1, this.adapter.notifyClosing(e), this.adapter.addClass(Zn), this.adapter.setStyleProperty("height", "0"), this.adapter.removeClass(Gr), this.adapter.removeClass(Kn), clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
      i.adapter.releaseFocus(), i.handleAnimationTimerEnd(), i.adapter.notifyClosed(e);
    }, kr.BANNER_ANIMATION_CLOSE_TIME_MS));
  }, t.prototype.isOpen = function() {
    return this.isOpened;
  }, t.prototype.handlePrimaryActionClick = function(e) {
    e === void 0 && (e = !1), e ? this.adapter.notifyActionClicked(0) : this.close(ln.PRIMARY);
  }, t.prototype.handleSecondaryActionClick = function(e) {
    e === void 0 && (e = !1), e ? this.adapter.notifyActionClicked(1) : this.close(ln.SECONDARY);
  }, t.prototype.layout = function() {
    var e = this.adapter.getContentHeight();
    this.adapter.setStyleProperty("height", e + "px");
  }, t.prototype.handleAnimationTimerEnd = function() {
    this.animationTimer = 0, this.adapter.removeClass(Kn), this.adapter.removeClass(Zn);
  }, t;
}(Je);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ol = function(s) {
  Dt(t, s);
  function t() {
    return s !== null && s.apply(this, arguments) || this;
  }
  return t.attachTo = function(e) {
    return new t(e);
  }, t.prototype.initialize = function(e) {
    var i = this;
    e === void 0 && (e = function(n, r) {
      return new Fo(n, r);
    }), this.contentEl = this.root.querySelector(De.CONTENT), this.textEl = this.root.querySelector(De.TEXT), this.primaryActionEl = this.root.querySelector(De.PRIMARY_ACTION), this.secondaryActionEl = this.root.querySelector(De.SECONDARY_ACTION), this.focusTrapFactory = e, this.handleContentClick = function(n) {
      var r = n.target;
      ls(r, De.PRIMARY_ACTION) ? i.foundation.handlePrimaryActionClick() : ls(r, De.SECONDARY_ACTION) && i.foundation.handleSecondaryActionClick();
    };
  }, t.prototype.initialSyncWithDOM = function() {
    this.registerContentClickHandler(this.handleContentClick), this.focusTrap = this.focusTrapFactory(this.root, { initialFocusEl: this.primaryActionEl });
  }, t.prototype.destroy = function() {
    s.prototype.destroy.call(this), this.deregisterContentClickHandler(this.handleContentClick);
  }, t.prototype.layout = function() {
    this.foundation.layout();
  }, t.prototype.open = function() {
    this.foundation.open();
  }, t.prototype.close = function(e) {
    this.foundation.close(e);
  }, t.prototype.getDefaultFoundation = function() {
    var e = this, i = {
      addClass: function(n) {
        e.root.classList.add(n);
      },
      getContentHeight: function() {
        return e.contentEl.offsetHeight;
      },
      notifyClosed: function(n) {
        e.emit(li.CLOSED, { reason: n });
      },
      notifyClosing: function(n) {
        e.emit(li.CLOSING, { reason: n });
      },
      notifyOpened: function() {
        e.emit(li.OPENED, {});
      },
      notifyOpening: function() {
        e.emit(li.OPENING, {});
      },
      notifyActionClicked: function(n) {
        e.emit(li.ACTION_CLICKED, { action: n });
      },
      releaseFocus: function() {
        e.focusTrap.releaseFocus();
      },
      removeClass: function(n) {
        e.root.classList.remove(n);
      },
      setStyleProperty: function(n, r) {
        e.root.style.setProperty(n, r);
      },
      trapFocus: function() {
        e.focusTrap.trapFocus();
      }
    };
    return new Ll(i);
  }, Object.defineProperty(t.prototype, "isOpen", {
    get: function() {
      return this.foundation.isOpen();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.getText = function() {
    return this.textEl.textContent || "";
  }, t.prototype.setText = function(e) {
    this.textEl.textContent = e;
  }, t.prototype.getPrimaryActionText = function() {
    return this.primaryActionEl.textContent || "";
  }, t.prototype.setPrimaryActionText = function(e) {
    this.primaryActionEl.textContent = e;
  }, t.prototype.getSecondaryActionText = function() {
    return this.secondaryActionEl ? this.secondaryActionEl.textContent || "" : null;
  }, t.prototype.setSecondaryActionText = function(e) {
    this.secondaryActionEl && (this.secondaryActionEl.textContent = e);
  }, t.prototype.registerContentClickHandler = function(e) {
    this.contentEl.addEventListener("click", e);
  }, t.prototype.deregisterContentClickHandler = function(e) {
    this.contentEl.removeEventListener("click", e);
  }, t;
}(Fi);
class Ml {
  constructor(t) {
    this.propagationStopped, this.defaultPrevented, this.type = t, this.target = null;
  }
  preventDefault() {
    this.defaultPrevented = !0;
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
const ge = Ml, Ve = {
  PROPERTYCHANGE: "propertychange"
};
class Dl {
  constructor() {
    this.disposed = !1;
  }
  dispose() {
    this.disposed || (this.disposed = !0, this.disposeInternal());
  }
  disposeInternal() {
  }
}
const ws = Dl;
function Fl(s, t, e) {
  let i, n;
  e = e || Ye;
  let r = 0, o = s.length, a = !1;
  for (; r < o; )
    i = r + (o - r >> 1), n = +e(s[i], t), n < 0 ? r = i + 1 : (o = i, a = !n);
  return a ? r : ~r;
}
function Ye(s, t) {
  return s > t ? 1 : s < t ? -1 : 0;
}
function ko(s, t, e) {
  if (s[0] <= t)
    return 0;
  const i = s.length;
  if (t <= s[i - 1])
    return i - 1;
  if (typeof e == "function") {
    for (let n = 1; n < i; ++n) {
      const r = s[n];
      if (r === t)
        return n;
      if (r < t)
        return e(t, s[n - 1], r) > 0 ? n - 1 : n;
    }
    return i - 1;
  }
  if (e > 0) {
    for (let n = 1; n < i; ++n)
      if (s[n] < t)
        return n - 1;
    return i - 1;
  }
  if (e < 0) {
    for (let n = 1; n < i; ++n)
      if (s[n] <= t)
        return n;
    return i - 1;
  }
  for (let n = 1; n < i; ++n) {
    if (s[n] == t)
      return n;
    if (s[n] < t)
      return s[n - 1] - t < t - s[n] ? n - 1 : n;
  }
  return i - 1;
}
function Pl(s, t, e) {
  for (; t < e; ) {
    const i = s[t];
    s[t] = s[e], s[e] = i, ++t, --e;
  }
}
function Gt(s, t) {
  const e = Array.isArray(t) ? t : [t], i = e.length;
  for (let n = 0; n < i; n++)
    s[s.length] = e[n];
}
function me(s, t) {
  const e = s.length;
  if (e !== t.length)
    return !1;
  for (let i = 0; i < e; i++)
    if (s[i] !== t[i])
      return !1;
  return !0;
}
function xi() {
  return !0;
}
function bn() {
  return !1;
}
function Ke() {
}
function Nl(s) {
  let t = !1, e, i, n;
  return function() {
    const r = Array.prototype.slice.call(arguments);
    return (!t || this !== n || !me(r, i)) && (t = !0, n = this, i = r, e = s.apply(this, arguments)), e;
  };
}
function Pi(s) {
  for (const t in s)
    delete s[t];
}
function Ii(s) {
  let t;
  for (t in s)
    return !1;
  return !t;
}
class kl extends ws {
  constructor(t) {
    super(), this.eventTarget_ = t, this.pendingRemovals_ = null, this.dispatching_ = null, this.listeners_ = null;
  }
  addEventListener(t, e) {
    if (!t || !e)
      return;
    const i = this.listeners_ || (this.listeners_ = {}), n = i[t] || (i[t] = []);
    n.includes(e) || n.push(e);
  }
  dispatchEvent(t) {
    const e = typeof t == "string", i = e ? t : t.type, n = this.listeners_ && this.listeners_[i];
    if (!n)
      return;
    const r = e ? new ge(t) : t;
    r.target || (r.target = this.eventTarget_ || this);
    const o = this.dispatching_ || (this.dispatching_ = {}), a = this.pendingRemovals_ || (this.pendingRemovals_ = {});
    i in o || (o[i] = 0, a[i] = 0), ++o[i];
    let l;
    for (let c = 0, h = n.length; c < h; ++c)
      if ("handleEvent" in n[c] ? l = n[c].handleEvent(r) : l = n[c].call(this, r), l === !1 || r.propagationStopped) {
        l = !1;
        break;
      }
    if (--o[i] === 0) {
      let c = a[i];
      for (delete a[i]; c--; )
        this.removeEventListener(i, Ke);
      delete o[i];
    }
    return l;
  }
  disposeInternal() {
    this.listeners_ && Pi(this.listeners_);
  }
  getListeners(t) {
    return this.listeners_ && this.listeners_[t] || void 0;
  }
  hasListener(t) {
    return this.listeners_ ? t ? t in this.listeners_ : Object.keys(this.listeners_).length > 0 : !1;
  }
  removeEventListener(t, e) {
    const i = this.listeners_ && this.listeners_[t];
    if (i) {
      const n = i.indexOf(e);
      n !== -1 && (this.pendingRemovals_ && t in this.pendingRemovals_ ? (i[n] = Ke, ++this.pendingRemovals_[t]) : (i.splice(n, 1), i.length === 0 && delete this.listeners_[t]));
    }
  }
}
const Ls = kl, P = {
  CHANGE: "change",
  ERROR: "error",
  BLUR: "blur",
  CLEAR: "clear",
  CONTEXTMENU: "contextmenu",
  CLICK: "click",
  DBLCLICK: "dblclick",
  DRAGENTER: "dragenter",
  DRAGOVER: "dragover",
  DROP: "drop",
  FOCUS: "focus",
  KEYDOWN: "keydown",
  KEYPRESS: "keypress",
  LOAD: "load",
  RESIZE: "resize",
  TOUCHMOVE: "touchmove",
  WHEEL: "wheel"
};
function k(s, t, e, i, n) {
  if (i && i !== s && (e = e.bind(i)), n) {
    const o = e;
    e = function() {
      s.removeEventListener(t, e), o.apply(this, arguments);
    };
  }
  const r = {
    target: s,
    type: t,
    listener: e
  };
  return s.addEventListener(t, e), r;
}
function Wr(s, t, e, i) {
  return k(s, t, e, i, !0);
}
function Q(s) {
  s && s.target && (s.target.removeEventListener(s.type, s.listener), Pi(s));
}
class Tn extends Ls {
  constructor() {
    super(), this.on = this.onInternal, this.once = this.onceInternal, this.un = this.unInternal, this.revision_ = 0;
  }
  changed() {
    ++this.revision_, this.dispatchEvent(P.CHANGE);
  }
  getRevision() {
    return this.revision_;
  }
  onInternal(t, e) {
    if (Array.isArray(t)) {
      const i = t.length, n = new Array(i);
      for (let r = 0; r < i; ++r)
        n[r] = k(this, t[r], e);
      return n;
    }
    return k(this, t, e);
  }
  onceInternal(t, e) {
    let i;
    if (Array.isArray(t)) {
      const n = t.length;
      i = new Array(n);
      for (let r = 0; r < n; ++r)
        i[r] = Wr(this, t[r], e);
    } else
      i = Wr(this, t, e);
    return e.ol_key = i, i;
  }
  unInternal(t, e) {
    const i = e.ol_key;
    if (i)
      Bl(i);
    else if (Array.isArray(t))
      for (let n = 0, r = t.length; n < r; ++n)
        this.removeEventListener(t[n], e);
    else
      this.removeEventListener(t, e);
  }
}
Tn.prototype.on;
Tn.prototype.once;
Tn.prototype.un;
function Bl(s) {
  if (Array.isArray(s))
    for (let t = 0, e = s.length; t < e; ++t)
      Q(s[t]);
  else
    Q(s);
}
const Bo = Tn;
function G() {
  throw new Error("Unimplemented abstract method.");
}
let Gl = 0;
function J(s) {
  return s.ol_uid || (s.ol_uid = String(++Gl));
}
class zr extends ge {
  constructor(t, e, i) {
    super(t), this.key = e, this.oldValue = i;
  }
}
class Wl extends Bo {
  constructor(t) {
    super(), this.on, this.once, this.un, J(this), this.values_ = null, t !== void 0 && this.setProperties(t);
  }
  get(t) {
    let e;
    return this.values_ && this.values_.hasOwnProperty(t) && (e = this.values_[t]), e;
  }
  getKeys() {
    return this.values_ && Object.keys(this.values_) || [];
  }
  getProperties() {
    return this.values_ && Object.assign({}, this.values_) || {};
  }
  getPropertiesInternal() {
    return this.values_;
  }
  hasProperties() {
    return !!this.values_;
  }
  notify(t, e) {
    let i;
    i = `change:${t}`, this.hasListener(i) && this.dispatchEvent(new zr(i, t, e)), i = Ve.PROPERTYCHANGE, this.hasListener(i) && this.dispatchEvent(new zr(i, t, e));
  }
  addChangeListener(t, e) {
    this.addEventListener(`change:${t}`, e);
  }
  removeChangeListener(t, e) {
    this.removeEventListener(`change:${t}`, e);
  }
  set(t, e, i) {
    const n = this.values_ || (this.values_ = {});
    if (i)
      n[t] = e;
    else {
      const r = n[t];
      n[t] = e, r !== e && this.notify(t, r);
    }
  }
  setProperties(t, e) {
    for (const i in t)
      this.set(i, t[i], e);
  }
  applyProperties(t) {
    !t.values_ || Object.assign(this.values_ || (this.values_ = {}), t.values_);
  }
  unset(t, e) {
    if (this.values_ && t in this.values_) {
      const i = this.values_[t];
      delete this.values_[t], Ii(this.values_) && (this.values_ = null), e || this.notify(t, i);
    }
  }
}
const zt = Wl, ft = {
  ADD: "add",
  REMOVE: "remove"
}, Hr = {
  LENGTH: "length"
};
class Qi extends ge {
  constructor(t, e, i) {
    super(t), this.element = e, this.index = i;
  }
}
class zl extends zt {
  constructor(t, e) {
    if (super(), this.on, this.once, this.un, e = e || {}, this.unique_ = !!e.unique, this.array_ = t || [], this.unique_)
      for (let i = 0, n = this.array_.length; i < n; ++i)
        this.assertUnique_(this.array_[i], i);
    this.updateLength_();
  }
  clear() {
    for (; this.getLength() > 0; )
      this.pop();
  }
  extend(t) {
    for (let e = 0, i = t.length; e < i; ++e)
      this.push(t[e]);
    return this;
  }
  forEach(t) {
    const e = this.array_;
    for (let i = 0, n = e.length; i < n; ++i)
      t(e[i], i, e);
  }
  getArray() {
    return this.array_;
  }
  item(t) {
    return this.array_[t];
  }
  getLength() {
    return this.get(Hr.LENGTH);
  }
  insertAt(t, e) {
    if (t < 0 || t > this.getLength())
      throw new Error("Index out of bounds: " + t);
    this.unique_ && this.assertUnique_(e), this.array_.splice(t, 0, e), this.updateLength_(), this.dispatchEvent(
      new Qi(ft.ADD, e, t)
    );
  }
  pop() {
    return this.removeAt(this.getLength() - 1);
  }
  push(t) {
    this.unique_ && this.assertUnique_(t);
    const e = this.getLength();
    return this.insertAt(e, t), this.getLength();
  }
  remove(t) {
    const e = this.array_;
    for (let i = 0, n = e.length; i < n; ++i)
      if (e[i] === t)
        return this.removeAt(i);
  }
  removeAt(t) {
    if (t < 0 || t >= this.getLength())
      return;
    const e = this.array_[t];
    return this.array_.splice(t, 1), this.updateLength_(), this.dispatchEvent(
      new Qi(ft.REMOVE, e, t)
    ), e;
  }
  setAt(t, e) {
    const i = this.getLength();
    if (t >= i) {
      this.insertAt(t, e);
      return;
    }
    if (t < 0)
      throw new Error("Index out of bounds: " + t);
    this.unique_ && this.assertUnique_(e, t);
    const n = this.array_[t];
    this.array_[t] = e, this.dispatchEvent(
      new Qi(ft.REMOVE, n, t)
    ), this.dispatchEvent(
      new Qi(ft.ADD, e, t)
    );
  }
  updateLength_() {
    this.set(Hr.LENGTH, this.array_.length);
  }
  assertUnique_(t, e) {
    for (let i = 0, n = this.array_.length; i < n; ++i)
      if (this.array_[i] === t && i !== e)
        throw new Error("Duplicate item added to a unique collection");
  }
}
const Lt = zl, he = typeof navigator < "u" && typeof navigator.userAgent < "u" ? navigator.userAgent.toLowerCase() : "", Hl = he.includes("firefox"), Xl = he.includes("safari") && !he.includes("chrom");
Xl && (he.includes("version/15.4") || /cpu (os|iphone os) 15_4 like mac os x/.test(he));
const Ul = he.includes("webkit") && !he.includes("edge"), Go = he.includes("macintosh"), Wo = typeof devicePixelRatio < "u" ? devicePixelRatio : 1, Os = typeof WorkerGlobalScope < "u" && typeof OffscreenCanvas < "u" && self instanceof WorkerGlobalScope, Vl = typeof Image < "u" && Image.prototype.decode, zo = function() {
  let s = !1;
  try {
    const t = Object.defineProperty({}, "passive", {
      get: function() {
        s = !0;
      }
    });
    window.addEventListener("_", null, t), window.removeEventListener("_", null, t);
  } catch {
  }
  return s;
}();
function K(s, t) {
  if (!s)
    throw new Error(t);
}
new Array(6);
function Ot() {
  return [1, 0, 0, 1, 0, 0];
}
function Yl(s, t, e, i, n, r, o) {
  return s[0] = t, s[1] = e, s[2] = i, s[3] = n, s[4] = r, s[5] = o, s;
}
function Kl(s, t) {
  return s[0] = t[0], s[1] = t[1], s[2] = t[2], s[3] = t[3], s[4] = t[4], s[5] = t[5], s;
}
function at(s, t) {
  const e = t[0], i = t[1];
  return t[0] = s[0] * e + s[2] * i + s[4], t[1] = s[1] * e + s[3] * i + s[5], t;
}
function Zl(s, t, e) {
  return Yl(s, t, 0, 0, e, 0, 0);
}
function we(s, t, e, i, n, r, o, a) {
  const l = Math.sin(r), c = Math.cos(r);
  return s[0] = i * c, s[1] = n * l, s[2] = -i * l, s[3] = n * c, s[4] = o * i * c - a * i * l + t, s[5] = o * n * l + a * n * c + e, s;
}
function Ho(s, t) {
  const e = jl(t);
  K(e !== 0, "Transformation matrix cannot be inverted");
  const i = t[0], n = t[1], r = t[2], o = t[3], a = t[4], l = t[5];
  return s[0] = o / e, s[1] = -n / e, s[2] = -r / e, s[3] = i / e, s[4] = (r * l - o * a) / e, s[5] = -(i * l - n * a) / e, s;
}
function jl(s) {
  return s[0] * s[3] - s[1] * s[2];
}
let Xr;
function ql(s) {
  const t = "matrix(" + s.join(", ") + ")";
  if (Os)
    return t;
  const e = Xr || (Xr = document.createElement("div"));
  return e.style.transform = t, e.style.transform;
}
const it = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16
};
function Ms(s, t, e) {
  return e ? (e[0] = s[0] - t, e[1] = s[1] - t, e[2] = s[2] + t, e[3] = s[3] + t, e) : [
    s[0] - t,
    s[1] - t,
    s[2] + t,
    s[3] + t
  ];
}
function Xo(s, t) {
  return t ? (t[0] = s[0], t[1] = s[1], t[2] = s[2], t[3] = s[3], t) : s.slice();
}
function Qe(s, t, e) {
  let i, n;
  return t < s[0] ? i = s[0] - t : s[2] < t ? i = t - s[2] : i = 0, e < s[1] ? n = s[1] - e : s[3] < e ? n = e - s[3] : n = 0, i * i + n * n;
}
function $l(s, t) {
  return Ds(s, t[0], t[1]);
}
function ze(s, t) {
  return s[0] <= t[0] && t[2] <= s[2] && s[1] <= t[1] && t[3] <= s[3];
}
function Ds(s, t, e) {
  return s[0] <= t && t <= s[2] && s[1] <= e && e <= s[3];
}
function cs(s, t) {
  const e = s[0], i = s[1], n = s[2], r = s[3], o = t[0], a = t[1];
  let l = it.UNKNOWN;
  return o < e ? l = l | it.LEFT : o > n && (l = l | it.RIGHT), a < i ? l = l | it.BELOW : a > r && (l = l | it.ABOVE), l === it.UNKNOWN && (l = it.INTERSECTING), l;
}
function ce() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
}
function Ze(s, t, e, i, n) {
  return n ? (n[0] = s, n[1] = t, n[2] = e, n[3] = i, n) : [s, t, e, i];
}
function wn(s) {
  return Ze(1 / 0, 1 / 0, -1 / 0, -1 / 0, s);
}
function Uo(s, t) {
  const e = s[0], i = s[1];
  return Ze(e, i, e, i, t);
}
function Fs(s, t, e, i, n) {
  const r = wn(n);
  return Vo(r, s, t, e, i);
}
function hn(s, t) {
  return s[0] == t[0] && s[2] == t[2] && s[1] == t[1] && s[3] == t[3];
}
function Jl(s, t) {
  t[0] < s[0] && (s[0] = t[0]), t[0] > s[2] && (s[2] = t[0]), t[1] < s[1] && (s[1] = t[1]), t[1] > s[3] && (s[3] = t[1]);
}
function Vo(s, t, e, i, n) {
  for (; e < i; e += n)
    Ql(s, t[e], t[e + 1]);
  return s;
}
function Ql(s, t, e) {
  s[0] = Math.min(s[0], t), s[1] = Math.min(s[1], e), s[2] = Math.max(s[2], t), s[3] = Math.max(s[3], e);
}
function th(s, t) {
  let e;
  return e = t(Yo(s)), e || (e = t(Ko(s)), e) || (e = t(jo(s)), e) || (e = t(Zo(s)), e) ? e : !1;
}
function Yo(s) {
  return [s[0], s[1]];
}
function Ko(s) {
  return [s[2], s[1]];
}
function ue(s) {
  return [(s[0] + s[2]) / 2, (s[1] + s[3]) / 2];
}
function us(s, t, e, i, n) {
  const [r, o, a, l, c, h, u, d] = eh(
    s,
    t,
    e,
    i
  );
  return Ze(
    Math.min(r, a, c, u),
    Math.min(o, l, h, d),
    Math.max(r, a, c, u),
    Math.max(o, l, h, d),
    n
  );
}
function eh(s, t, e, i) {
  const n = t * i[0] / 2, r = t * i[1] / 2, o = Math.cos(e), a = Math.sin(e), l = n * o, c = n * a, h = r * o, u = r * a, d = s[0], f = s[1];
  return [
    d - l + u,
    f - c - h,
    d - l - u,
    f - c + h,
    d + l - u,
    f + c + h,
    d + l + u,
    f + c - h,
    d - l + u,
    f - c - h
  ];
}
function Ae(s) {
  return s[3] - s[1];
}
function ih(s, t, e) {
  const i = e || ce();
  return At(s, t) ? (s[0] > t[0] ? i[0] = s[0] : i[0] = t[0], s[1] > t[1] ? i[1] = s[1] : i[1] = t[1], s[2] < t[2] ? i[2] = s[2] : i[2] = t[2], s[3] < t[3] ? i[3] = s[3] : i[3] = t[3]) : wn(i), i;
}
function Zo(s) {
  return [s[0], s[3]];
}
function jo(s) {
  return [s[2], s[3]];
}
function vt(s) {
  return s[2] - s[0];
}
function At(s, t) {
  return s[0] <= t[2] && s[2] >= t[0] && s[1] <= t[3] && s[3] >= t[1];
}
function Ps(s) {
  return s[2] < s[0] || s[3] < s[1];
}
function nh(s, t) {
  return t ? (t[0] = s[0], t[1] = s[1], t[2] = s[2], t[3] = s[3], t) : s;
}
function sh(s, t, e) {
  let i = !1;
  const n = cs(s, t), r = cs(s, e);
  if (n === it.INTERSECTING || r === it.INTERSECTING)
    i = !0;
  else {
    const o = s[0], a = s[1], l = s[2], c = s[3], h = t[0], u = t[1], d = e[0], f = e[1], g = (f - u) / (d - h);
    let m, p;
    !!(r & it.ABOVE) && !(n & it.ABOVE) && (m = d - (f - c) / g, i = m >= o && m <= l), !i && !!(r & it.RIGHT) && !(n & it.RIGHT) && (p = f - (d - l) * g, i = p >= a && p <= c), !i && !!(r & it.BELOW) && !(n & it.BELOW) && (m = d - (f - a) / g, i = m >= o && m <= l), !i && !!(r & it.LEFT) && !(n & it.LEFT) && (p = f - (d - o) * g, i = p >= a && p <= c);
  }
  return i;
}
function qo(s, t) {
  const e = t.getExtent(), i = ue(s);
  if (t.canWrapX() && (i[0] < e[0] || i[0] >= e[2])) {
    const n = vt(e), o = Math.floor(
      (i[0] - e[0]) / n
    ) * n;
    s[0] -= o, s[2] -= o;
  }
  return s;
}
function rh(s, t) {
  if (t.canWrapX()) {
    const e = t.getExtent();
    if (!isFinite(s[0]) || !isFinite(s[2]))
      return [[e[0], s[1], e[2], s[3]]];
    qo(s, t);
    const i = vt(e);
    if (vt(s) > i)
      return [[e[0], s[1], e[2], s[3]]];
    if (s[0] < e[0])
      return [
        [s[0] + i, s[1], e[2], s[3]],
        [e[0], s[1], s[2], s[3]]
      ];
    if (s[2] > e[2])
      return [
        [s[0], s[1], e[2], s[3]],
        [e[0], s[1], s[2] - i, s[3]]
      ];
  }
  return [s];
}
function nt(s, t, e) {
  return Math.min(Math.max(s, t), e);
}
function oh(s, t, e, i, n, r) {
  const o = n - e, a = r - i;
  if (o !== 0 || a !== 0) {
    const l = ((s - e) * o + (t - i) * a) / (o * o + a * a);
    l > 1 ? (e = n, i = r) : l > 0 && (e += o * l, i += a * l);
  }
  return Re(s, t, e, i);
}
function Re(s, t, e, i) {
  const n = e - s, r = i - t;
  return n * n + r * r;
}
function ah(s) {
  return s * Math.PI / 180;
}
function ds(s, t) {
  const e = s % t;
  return e * t < 0 ? e + t : e;
}
function Ct(s, t, e) {
  return s + e * (t - s);
}
function lh(s, t) {
  const e = Math.pow(10, t);
  return Math.round(s * e) / e;
}
const hh = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i, ch = /^([a-z]*)$|^hsla?\(.*\)$/i;
function $o(s) {
  return typeof s == "string" ? s : Jo(s);
}
function uh(s) {
  const t = document.createElement("div");
  if (t.style.color = s, t.style.color !== "") {
    document.body.appendChild(t);
    const e = getComputedStyle(t).color;
    return document.body.removeChild(t), e;
  }
  return "";
}
const dh = function() {
  const t = {};
  let e = 0;
  return function(i) {
    let n;
    if (t.hasOwnProperty(i))
      n = t[i];
    else {
      if (e >= 1024) {
        let r = 0;
        for (const o in t)
          (r++ & 3) === 0 && (delete t[o], --e);
      }
      n = fh(i), t[i] = n, ++e;
    }
    return n;
  };
}();
function cn(s) {
  return Array.isArray(s) ? s : dh(s);
}
function fh(s) {
  let t, e, i, n, r;
  if (ch.exec(s) && (s = uh(s)), hh.exec(s)) {
    const o = s.length - 1;
    let a;
    o <= 4 ? a = 1 : a = 2;
    const l = o === 4 || o === 8;
    t = parseInt(s.substr(1 + 0 * a, a), 16), e = parseInt(s.substr(1 + 1 * a, a), 16), i = parseInt(s.substr(1 + 2 * a, a), 16), l ? n = parseInt(s.substr(1 + 3 * a, a), 16) : n = 255, a == 1 && (t = (t << 4) + t, e = (e << 4) + e, i = (i << 4) + i, l && (n = (n << 4) + n)), r = [t, e, i, n / 255];
  } else if (s.startsWith("rgba("))
    r = s.slice(5, -1).split(",").map(Number), Ur(r);
  else if (s.startsWith("rgb("))
    r = s.slice(4, -1).split(",").map(Number), r.push(1), Ur(r);
  else
    throw new Error("Invalid color");
  return r;
}
function Ur(s) {
  return s[0] = nt(s[0] + 0.5 | 0, 0, 255), s[1] = nt(s[1] + 0.5 | 0, 0, 255), s[2] = nt(s[2] + 0.5 | 0, 0, 255), s[3] = nt(s[3], 0, 1), s;
}
function Jo(s) {
  let t = s[0];
  t != (t | 0) && (t = t + 0.5 | 0);
  let e = s[1];
  e != (e | 0) && (e = e + 0.5 | 0);
  let i = s[2];
  i != (i | 0) && (i = i + 0.5 | 0);
  const n = s[3] === void 0 ? 1 : Math.round(s[3] * 100) / 100;
  return "rgba(" + t + "," + e + "," + i + "," + n + ")";
}
class gh {
  constructor() {
    this.cache_ = {}, this.cacheSize_ = 0, this.maxCacheSize_ = 32;
  }
  clear() {
    this.cache_ = {}, this.cacheSize_ = 0;
  }
  canExpireCache() {
    return this.cacheSize_ > this.maxCacheSize_;
  }
  expire() {
    if (this.canExpireCache()) {
      let t = 0;
      for (const e in this.cache_) {
        const i = this.cache_[e];
        (t++ & 3) === 0 && !i.hasListener() && (delete this.cache_[e], --this.cacheSize_);
      }
    }
  }
  get(t, e, i) {
    const n = Vr(t, e, i);
    return n in this.cache_ ? this.cache_[n] : null;
  }
  set(t, e, i, n) {
    const r = Vr(t, e, i);
    this.cache_[r] = n, ++this.cacheSize_;
  }
  setSize(t) {
    this.maxCacheSize_ = t, this.expire();
  }
}
function Vr(s, t, e) {
  const i = e ? $o(e) : "null";
  return t + ":" + s + ":" + i;
}
const un = new gh(), z = {
  OPACITY: "opacity",
  VISIBLE: "visible",
  EXTENT: "extent",
  Z_INDEX: "zIndex",
  MAX_RESOLUTION: "maxResolution",
  MIN_RESOLUTION: "minResolution",
  MAX_ZOOM: "maxZoom",
  MIN_ZOOM: "minZoom",
  SOURCE: "source",
  MAP: "map"
};
class mh extends zt {
  constructor(t) {
    super(), this.on, this.once, this.un, this.background_ = t.background;
    const e = Object.assign({}, t);
    typeof t.properties == "object" && (delete e.properties, Object.assign(e, t.properties)), e[z.OPACITY] = t.opacity !== void 0 ? t.opacity : 1, K(
      typeof e[z.OPACITY] == "number",
      "Layer opacity must be a number"
    ), e[z.VISIBLE] = t.visible !== void 0 ? t.visible : !0, e[z.Z_INDEX] = t.zIndex, e[z.MAX_RESOLUTION] = t.maxResolution !== void 0 ? t.maxResolution : 1 / 0, e[z.MIN_RESOLUTION] = t.minResolution !== void 0 ? t.minResolution : 0, e[z.MIN_ZOOM] = t.minZoom !== void 0 ? t.minZoom : -1 / 0, e[z.MAX_ZOOM] = t.maxZoom !== void 0 ? t.maxZoom : 1 / 0, this.className_ = e.className !== void 0 ? e.className : "ol-layer", delete e.className, this.setProperties(e), this.state_ = null;
  }
  getBackground() {
    return this.background_;
  }
  getClassName() {
    return this.className_;
  }
  getLayerState(t) {
    const e = this.state_ || {
      layer: this,
      managed: t === void 0 ? !0 : t
    }, i = this.getZIndex();
    return e.opacity = nt(Math.round(this.getOpacity() * 100) / 100, 0, 1), e.visible = this.getVisible(), e.extent = this.getExtent(), e.zIndex = i === void 0 && !e.managed ? 1 / 0 : i, e.maxResolution = this.getMaxResolution(), e.minResolution = Math.max(this.getMinResolution(), 0), e.minZoom = this.getMinZoom(), e.maxZoom = this.getMaxZoom(), this.state_ = e, e;
  }
  getLayersArray(t) {
    return G();
  }
  getLayerStatesArray(t) {
    return G();
  }
  getExtent() {
    return this.get(z.EXTENT);
  }
  getMaxResolution() {
    return this.get(z.MAX_RESOLUTION);
  }
  getMinResolution() {
    return this.get(z.MIN_RESOLUTION);
  }
  getMinZoom() {
    return this.get(z.MIN_ZOOM);
  }
  getMaxZoom() {
    return this.get(z.MAX_ZOOM);
  }
  getOpacity() {
    return this.get(z.OPACITY);
  }
  getSourceState() {
    return G();
  }
  getVisible() {
    return this.get(z.VISIBLE);
  }
  getZIndex() {
    return this.get(z.Z_INDEX);
  }
  setBackground(t) {
    this.background_ = t, this.changed();
  }
  setExtent(t) {
    this.set(z.EXTENT, t);
  }
  setMaxResolution(t) {
    this.set(z.MAX_RESOLUTION, t);
  }
  setMinResolution(t) {
    this.set(z.MIN_RESOLUTION, t);
  }
  setMaxZoom(t) {
    this.set(z.MAX_ZOOM, t);
  }
  setMinZoom(t) {
    this.set(z.MIN_ZOOM, t);
  }
  setOpacity(t) {
    K(typeof t == "number", "Layer opacity must be a number"), this.set(z.OPACITY, t);
  }
  setVisible(t) {
    this.set(z.VISIBLE, t);
  }
  setZIndex(t) {
    this.set(z.Z_INDEX, t);
  }
  disposeInternal() {
    this.state_ && (this.state_.layer = null, this.state_ = null), super.disposeInternal();
  }
}
const Qo = mh, Wt = {
  PRERENDER: "prerender",
  POSTRENDER: "postrender",
  PRECOMPOSE: "precompose",
  POSTCOMPOSE: "postcompose",
  RENDERCOMPLETE: "rendercomplete"
}, lt = {
  ANIMATING: 0,
  INTERACTING: 1
}, bt = {
  CENTER: "center",
  RESOLUTION: "resolution",
  ROTATION: "rotation"
}, ph = 256, ta = {
  radians: 6370997 / (2 * Math.PI),
  degrees: 2 * Math.PI * 6370997 / 360,
  ft: 0.3048,
  m: 1,
  "us-ft": 1200 / 3937
};
class _h {
  constructor(t) {
    this.code_ = t.code, this.units_ = t.units, this.extent_ = t.extent !== void 0 ? t.extent : null, this.worldExtent_ = t.worldExtent !== void 0 ? t.worldExtent : null, this.axisOrientation_ = t.axisOrientation !== void 0 ? t.axisOrientation : "enu", this.global_ = t.global !== void 0 ? t.global : !1, this.canWrapX_ = !!(this.global_ && this.extent_), this.getPointResolutionFunc_ = t.getPointResolution, this.defaultTileGrid_ = null, this.metersPerUnit_ = t.metersPerUnit;
  }
  canWrapX() {
    return this.canWrapX_;
  }
  getCode() {
    return this.code_;
  }
  getExtent() {
    return this.extent_;
  }
  getUnits() {
    return this.units_;
  }
  getMetersPerUnit() {
    return this.metersPerUnit_ || ta[this.units_];
  }
  getWorldExtent() {
    return this.worldExtent_;
  }
  getAxisOrientation() {
    return this.axisOrientation_;
  }
  isGlobal() {
    return this.global_;
  }
  setGlobal(t) {
    this.global_ = t, this.canWrapX_ = !!(t && this.extent_);
  }
  getDefaultTileGrid() {
    return this.defaultTileGrid_;
  }
  setDefaultTileGrid(t) {
    this.defaultTileGrid_ = t;
  }
  setExtent(t) {
    this.extent_ = t, this.canWrapX_ = !!(this.global_ && t);
  }
  setWorldExtent(t) {
    this.worldExtent_ = t;
  }
  setGetPointResolution(t) {
    this.getPointResolutionFunc_ = t;
  }
  getPointResolutionFunc() {
    return this.getPointResolutionFunc_;
  }
}
const ea = _h, Ni = 6378137, He = Math.PI * Ni, yh = [-He, -He, He, He], Eh = [-180, -85, 180, 85], tn = Ni * Math.log(Math.tan(Math.PI / 2));
class Fe extends ea {
  constructor(t) {
    super({
      code: t,
      units: "m",
      extent: yh,
      global: !0,
      worldExtent: Eh,
      getPointResolution: function(e, i) {
        return e / Math.cosh(i[1] / Ni);
      }
    });
  }
}
const Yr = [
  new Fe("EPSG:3857"),
  new Fe("EPSG:102100"),
  new Fe("EPSG:102113"),
  new Fe("EPSG:900913"),
  new Fe("http://www.opengis.net/def/crs/EPSG/0/3857"),
  new Fe("http://www.opengis.net/gml/srs/epsg.xml#3857")
];
function Ch(s, t, e) {
  const i = s.length;
  e = e > 1 ? e : 2, t === void 0 && (e > 2 ? t = s.slice() : t = new Array(i));
  for (let n = 0; n < i; n += e) {
    t[n] = He * s[n] / 180;
    let r = Ni * Math.log(Math.tan(Math.PI * (+s[n + 1] + 90) / 360));
    r > tn ? r = tn : r < -tn && (r = -tn), t[n + 1] = r;
  }
  return t;
}
function vh(s, t, e) {
  const i = s.length;
  e = e > 1 ? e : 2, t === void 0 && (e > 2 ? t = s.slice() : t = new Array(i));
  for (let n = 0; n < i; n += e)
    t[n] = 180 * s[n] / He, t[n + 1] = 360 * Math.atan(Math.exp(s[n + 1] / Ni)) / Math.PI - 90;
  return t;
}
const xh = 6378137, Kr = [-180, -90, 180, 90], Ih = Math.PI * xh / 180;
class _e extends ea {
  constructor(t, e) {
    super({
      code: t,
      units: "degrees",
      extent: Kr,
      axisOrientation: e,
      global: !0,
      metersPerUnit: Ih,
      worldExtent: Kr
    });
  }
}
const Zr = [
  new _e("CRS:84"),
  new _e("EPSG:4326", "neu"),
  new _e("urn:ogc:def:crs:OGC:1.3:CRS84"),
  new _e("urn:ogc:def:crs:OGC:2:84"),
  new _e("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
  new _e("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
  new _e("http://www.opengis.net/def/crs/EPSG/0/4326", "neu")
];
let fs = {};
function Sh(s) {
  return fs[s] || fs[s.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] || null;
}
function Rh(s, t) {
  fs[s] = t;
}
let Ue = {};
function dn(s, t, e) {
  const i = s.getCode(), n = t.getCode();
  i in Ue || (Ue[i] = {}), Ue[i][n] = e;
}
function Ah(s, t) {
  let e;
  return s in Ue && t in Ue[s] && (e = Ue[s][t]), e;
}
function bh(s, t) {
  return s[0] += +t[0], s[1] += +t[1], s;
}
function fn(s, t) {
  let e = !0;
  for (let i = s.length - 1; i >= 0; --i)
    if (s[i] != t[i]) {
      e = !1;
      break;
    }
  return e;
}
function Ns(s, t) {
  const e = Math.cos(t), i = Math.sin(t), n = s[0] * e - s[1] * i, r = s[1] * e + s[0] * i;
  return s[0] = n, s[1] = r, s;
}
function Th(s, t) {
  return s[0] *= t, s[1] *= t, s;
}
function ia(s, t) {
  if (t.canWrapX()) {
    const e = vt(t.getExtent()), i = wh(s, t, e);
    i && (s[0] -= i * e);
  }
  return s;
}
function wh(s, t, e) {
  const i = t.getExtent();
  let n = 0;
  return t.canWrapX() && (s[0] < i[0] || s[0] > i[2]) && (e = e || vt(i), n = Math.floor(
    (s[0] - i[0]) / e
  )), n;
}
const na = {
  info: 1,
  warn: 2,
  error: 3,
  none: 4
};
let Lh = na.info;
function sa(...s) {
  Lh > na.warn || console.warn(...s);
}
let gs = !0;
function ra(s) {
  gs = !(s === void 0 ? !0 : s);
}
function oa(s, t) {
  if (t !== void 0) {
    for (let e = 0, i = s.length; e < i; ++e)
      t[e] = s[e];
    t = t;
  } else
    t = s.slice();
  return t;
}
function Oh(s, t) {
  if (t !== void 0 && s !== t) {
    for (let e = 0, i = s.length; e < i; ++e)
      t[e] = s[e];
    s = t;
  }
  return s;
}
function Mh(s) {
  Rh(s.getCode(), s), dn(s, s, oa);
}
function Dh(s) {
  s.forEach(Mh);
}
function be(s) {
  return typeof s == "string" ? Sh(s) : s || null;
}
function jr(s) {
  Dh(s), s.forEach(function(t) {
    s.forEach(function(e) {
      t !== e && dn(t, e, oa);
    });
  });
}
function Fh(s, t, e, i) {
  s.forEach(function(n) {
    t.forEach(function(r) {
      dn(n, r, e), dn(r, n, i);
    });
  });
}
function ks(s, t) {
  return s ? typeof s == "string" ? be(s) : s : be(t);
}
function Ph(s, t) {
  return ra(), aa(
    s,
    "EPSG:4326",
    t !== void 0 ? t : "EPSG:3857"
  );
}
function Nh(s, t) {
  const e = aa(
    s,
    t !== void 0 ? t : "EPSG:3857",
    "EPSG:4326"
  ), i = e[0];
  return (i < -180 || i > 180) && (e[0] = ds(i + 180, 360) - 180), e;
}
function kh(s, t) {
  const e = s.getCode(), i = t.getCode();
  let n = Ah(e, i);
  return n || (n = Oh), n;
}
function ms(s, t) {
  const e = be(s), i = be(t);
  return kh(e, i);
}
function aa(s, t, e) {
  return ms(t, e)(s, void 0, s.length);
}
function ps(s, t) {
  return s;
}
function Kt(s, t) {
  return gs && !fn(s, [0, 0]) && s[0] >= -180 && s[0] <= 180 && s[1] >= -90 && s[1] <= 90 && (gs = !1, sa(
    "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates."
  )), s;
}
function la(s, t) {
  return s;
}
function mi(s, t) {
  return s;
}
function Bh() {
  jr(Yr), jr(Zr), Fh(
    Zr,
    Yr,
    Ch,
    vh
  );
}
Bh();
function qr(s, t, e) {
  return function(i, n, r, o, a) {
    if (!i)
      return;
    if (!n && !t)
      return i;
    const l = t ? 0 : r[0] * n, c = t ? 0 : r[1] * n, h = a ? a[0] : 0, u = a ? a[1] : 0;
    let d = s[0] + l / 2 + h, f = s[2] - l / 2 + h, g = s[1] + c / 2 + u, m = s[3] - c / 2 + u;
    d > f && (d = (f + d) / 2, f = d), g > m && (g = (m + g) / 2, m = g);
    let p = nt(i[0], d, f), _ = nt(i[1], g, m);
    if (o && e && n) {
      const y = 30 * n;
      p += -y * Math.log(1 + Math.max(0, d - i[0]) / y) + y * Math.log(1 + Math.max(0, i[0] - f) / y), _ += -y * Math.log(1 + Math.max(0, g - i[1]) / y) + y * Math.log(1 + Math.max(0, i[1] - m) / y);
    }
    return [p, _];
  };
}
function Gh(s) {
  return s;
}
function Bs(s, t, e, i) {
  const n = vt(t) / e[0], r = Ae(t) / e[1];
  return i ? Math.min(s, Math.max(n, r)) : Math.min(s, Math.min(n, r));
}
function Gs(s, t, e) {
  let i = Math.min(s, t);
  const n = 50;
  return i *= Math.log(1 + n * Math.max(0, s / t - 1)) / n + 1, e && (i = Math.max(i, e), i /= Math.log(1 + n * Math.max(0, e / s - 1)) / n + 1), nt(i, e / 2, t * 2);
}
function Wh(s, t, e, i) {
  return t = t !== void 0 ? t : !0, function(n, r, o, a) {
    if (n !== void 0) {
      const l = s[0], c = s[s.length - 1], h = e ? Bs(
        l,
        e,
        o,
        i
      ) : l;
      if (a)
        return t ? Gs(
          n,
          h,
          c
        ) : nt(n, c, h);
      const u = Math.min(h, n), d = Math.floor(ko(s, u, r));
      return s[d] > h && d < s.length - 1 ? s[d + 1] : s[d];
    }
  };
}
function zh(s, t, e, i, n, r) {
  return i = i !== void 0 ? i : !0, e = e !== void 0 ? e : 0, function(o, a, l, c) {
    if (o !== void 0) {
      const h = n ? Bs(
        t,
        n,
        l,
        r
      ) : t;
      if (c)
        return i ? Gs(
          o,
          h,
          e
        ) : nt(o, e, h);
      const u = 1e-9, d = Math.ceil(
        Math.log(t / h) / Math.log(s) - u
      ), f = -a * (0.5 - u) + 0.5, g = Math.min(h, o), m = Math.floor(
        Math.log(t / g) / Math.log(s) + f
      ), p = Math.max(d, m), _ = t / Math.pow(s, p);
      return nt(_, e, h);
    }
  };
}
function $r(s, t, e, i, n) {
  return e = e !== void 0 ? e : !0, function(r, o, a, l) {
    if (r !== void 0) {
      const c = i ? Bs(
        s,
        i,
        a,
        n
      ) : s;
      return !e || !l ? nt(r, t, c) : Gs(
        r,
        c,
        t
      );
    }
  };
}
function Ws(s) {
  if (s !== void 0)
    return 0;
}
function Jr(s) {
  if (s !== void 0)
    return s;
}
function Hh(s) {
  const t = 2 * Math.PI / s;
  return function(e, i) {
    if (i)
      return e;
    if (e !== void 0)
      return e = Math.floor(e / t + 0.5) * t, e;
  };
}
function Xh(s) {
  return s = s || ah(5), function(t, e) {
    if (e)
      return t;
    if (t !== void 0)
      return Math.abs(t) <= s ? 0 : t;
  };
}
function Uh(s) {
  return Math.pow(s, 3);
}
function ti(s) {
  return 1 - Uh(1 - s);
}
function Vh(s) {
  return 3 * s * s - 2 * s * s * s;
}
function Yh(s) {
  return s;
}
function le(s, t, e, i, n, r) {
  r = r || [];
  let o = 0;
  for (let a = t; a < e; a += i) {
    const l = s[a], c = s[a + 1];
    r[o++] = n[0] * l + n[2] * c + n[4], r[o++] = n[1] * l + n[3] * c + n[5];
  }
  return r && r.length != o && (r.length = o), r;
}
function ha(s, t, e, i, n, r, o) {
  o = o || [];
  const a = Math.cos(n), l = Math.sin(n), c = r[0], h = r[1];
  let u = 0;
  for (let d = t; d < e; d += i) {
    const f = s[d] - c, g = s[d + 1] - h;
    o[u++] = c + f * a - g * l, o[u++] = h + f * l + g * a;
    for (let m = d + 2; m < d + i; ++m)
      o[u++] = s[m];
  }
  return o && o.length != u && (o.length = u), o;
}
function Kh(s, t, e, i, n, r, o, a) {
  a = a || [];
  const l = o[0], c = o[1];
  let h = 0;
  for (let u = t; u < e; u += i) {
    const d = s[u] - l, f = s[u + 1] - c;
    a[h++] = l + n * d, a[h++] = c + r * f;
    for (let g = u + 2; g < u + i; ++g)
      a[h++] = s[g];
  }
  return a && a.length != h && (a.length = h), a;
}
function Zh(s, t, e, i, n, r, o) {
  o = o || [];
  let a = 0;
  for (let l = t; l < e; l += i) {
    o[a++] = s[l] + n, o[a++] = s[l + 1] + r;
    for (let c = l + 2; c < l + i; ++c)
      o[a++] = s[c];
  }
  return o && o.length != a && (o.length = a), o;
}
const Qr = Ot();
class jh extends zt {
  constructor() {
    super(), this.extent_ = ce(), this.extentRevision_ = -1, this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = 0, this.simplifyTransformedInternal = Nl(function(t, e, i) {
      if (!i)
        return this.getSimplifiedGeometry(e);
      const n = this.clone();
      return n.applyTransform(i), n.getSimplifiedGeometry(e);
    });
  }
  simplifyTransformed(t, e) {
    return this.simplifyTransformedInternal(
      this.getRevision(),
      t,
      e
    );
  }
  clone() {
    return G();
  }
  closestPointXY(t, e, i, n) {
    return G();
  }
  containsXY(t, e) {
    const i = this.getClosestPoint([t, e]);
    return i[0] === t && i[1] === e;
  }
  getClosestPoint(t, e) {
    return e = e || [NaN, NaN], this.closestPointXY(t[0], t[1], e, 1 / 0), e;
  }
  intersectsCoordinate(t) {
    return this.containsXY(t[0], t[1]);
  }
  computeExtent(t) {
    return G();
  }
  getExtent(t) {
    if (this.extentRevision_ != this.getRevision()) {
      const e = this.computeExtent(this.extent_);
      (isNaN(e[0]) || isNaN(e[1])) && wn(e), this.extentRevision_ = this.getRevision();
    }
    return nh(this.extent_, t);
  }
  rotate(t, e) {
    G();
  }
  scale(t, e, i) {
    G();
  }
  simplify(t) {
    return this.getSimplifiedGeometry(t * t);
  }
  getSimplifiedGeometry(t) {
    return G();
  }
  getType() {
    return G();
  }
  applyTransform(t) {
    G();
  }
  intersectsExtent(t) {
    return G();
  }
  translate(t, e) {
    G();
  }
  transform(t, e) {
    const i = be(t), n = i.getUnits() == "tile-pixels" ? function(r, o, a) {
      const l = i.getExtent(), c = i.getWorldExtent(), h = Ae(c) / Ae(l);
      return we(
        Qr,
        c[0],
        c[3],
        h,
        -h,
        0,
        0,
        0
      ), le(
        r,
        0,
        r.length,
        a,
        Qr,
        o
      ), ms(i, e)(
        r,
        o,
        a
      );
    } : ms(i, e);
    return this.applyTransform(n), this;
  }
}
const qh = jh;
class $h extends qh {
  constructor() {
    super(), this.layout = "XY", this.stride = 2, this.flatCoordinates = null;
  }
  computeExtent(t) {
    return Fs(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t
    );
  }
  getCoordinates() {
    return G();
  }
  getFirstCoordinate() {
    return this.flatCoordinates.slice(0, this.stride);
  }
  getFlatCoordinates() {
    return this.flatCoordinates;
  }
  getLastCoordinate() {
    return this.flatCoordinates.slice(
      this.flatCoordinates.length - this.stride
    );
  }
  getLayout() {
    return this.layout;
  }
  getSimplifiedGeometry(t) {
    if (this.simplifiedGeometryRevision !== this.getRevision() && (this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), t < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && t <= this.simplifiedGeometryMaxMinSquaredTolerance)
      return this;
    const e = this.getSimplifiedGeometryInternal(t);
    return e.getFlatCoordinates().length < this.flatCoordinates.length ? e : (this.simplifiedGeometryMaxMinSquaredTolerance = t, this);
  }
  getSimplifiedGeometryInternal(t) {
    return this;
  }
  getStride() {
    return this.stride;
  }
  setFlatCoordinates(t, e) {
    this.stride = to(t), this.layout = t, this.flatCoordinates = e;
  }
  setCoordinates(t, e) {
    G();
  }
  setLayout(t, e, i) {
    let n;
    if (t)
      n = to(t);
    else {
      for (let r = 0; r < i; ++r) {
        if (e.length === 0) {
          this.layout = "XY", this.stride = 2;
          return;
        }
        e = e[0];
      }
      n = e.length, t = Jh(n);
    }
    this.layout = t, this.stride = n;
  }
  applyTransform(t) {
    this.flatCoordinates && (t(this.flatCoordinates, this.flatCoordinates, this.stride), this.changed());
  }
  rotate(t, e) {
    const i = this.getFlatCoordinates();
    if (i) {
      const n = this.getStride();
      ha(
        i,
        0,
        i.length,
        n,
        t,
        e,
        i
      ), this.changed();
    }
  }
  scale(t, e, i) {
    e === void 0 && (e = t), i || (i = ue(this.getExtent()));
    const n = this.getFlatCoordinates();
    if (n) {
      const r = this.getStride();
      Kh(
        n,
        0,
        n.length,
        r,
        t,
        e,
        i,
        n
      ), this.changed();
    }
  }
  translate(t, e) {
    const i = this.getFlatCoordinates();
    if (i) {
      const n = this.getStride();
      Zh(
        i,
        0,
        i.length,
        n,
        t,
        e,
        i
      ), this.changed();
    }
  }
}
function Jh(s) {
  let t;
  return s == 2 ? t = "XY" : s == 3 ? t = "XYZ" : s == 4 && (t = "XYZM"), t;
}
function to(s) {
  let t;
  return s == "XY" ? t = 2 : s == "XYZ" || s == "XYM" ? t = 3 : s == "XYZM" && (t = 4), t;
}
function Qh(s, t, e) {
  const i = s.getFlatCoordinates();
  if (!i)
    return null;
  const n = s.getStride();
  return le(
    i,
    0,
    i.length,
    n,
    t,
    e
  );
}
const Le = $h;
function eo(s, t, e, i, n, r, o) {
  const a = s[t], l = s[t + 1], c = s[e] - a, h = s[e + 1] - l;
  let u;
  if (c === 0 && h === 0)
    u = t;
  else {
    const d = ((n - a) * c + (r - l) * h) / (c * c + h * h);
    if (d > 1)
      u = e;
    else if (d > 0) {
      for (let f = 0; f < i; ++f)
        o[f] = Ct(
          s[t + f],
          s[e + f],
          d
        );
      o.length = i;
      return;
    } else
      u = t;
  }
  for (let d = 0; d < i; ++d)
    o[d] = s[u + d];
  o.length = i;
}
function zs(s, t, e, i, n) {
  let r = s[t], o = s[t + 1];
  for (t += i; t < e; t += i) {
    const a = s[t], l = s[t + 1], c = Re(r, o, a, l);
    c > n && (n = c), r = a, o = l;
  }
  return n;
}
function Hs(s, t, e, i, n) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r];
    n = zs(s, t, a, i, n), t = a;
  }
  return n;
}
function tc(s, t, e, i, n) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r];
    n = Hs(s, t, a, i, n), t = a[a.length - 1];
  }
  return n;
}
function Xs(s, t, e, i, n, r, o, a, l, c, h) {
  if (t == e)
    return c;
  let u, d;
  if (n === 0) {
    if (d = Re(
      o,
      a,
      s[t],
      s[t + 1]
    ), d < c) {
      for (u = 0; u < i; ++u)
        l[u] = s[t + u];
      return l.length = i, d;
    }
    return c;
  }
  h = h || [NaN, NaN];
  let f = t + i;
  for (; f < e; )
    if (eo(
      s,
      f - i,
      f,
      i,
      o,
      a,
      h
    ), d = Re(o, a, h[0], h[1]), d < c) {
      for (c = d, u = 0; u < i; ++u)
        l[u] = h[u];
      l.length = i, f += i;
    } else
      f += i * Math.max(
        (Math.sqrt(d) - Math.sqrt(c)) / n | 0,
        1
      );
  if (r && (eo(
    s,
    e - i,
    t,
    i,
    o,
    a,
    h
  ), d = Re(o, a, h[0], h[1]), d < c)) {
    for (c = d, u = 0; u < i; ++u)
      l[u] = h[u];
    l.length = i;
  }
  return c;
}
function Us(s, t, e, i, n, r, o, a, l, c, h) {
  h = h || [NaN, NaN];
  for (let u = 0, d = e.length; u < d; ++u) {
    const f = e[u];
    c = Xs(
      s,
      t,
      f,
      i,
      n,
      r,
      o,
      a,
      l,
      c,
      h
    ), t = f;
  }
  return c;
}
function ec(s, t, e, i, n, r, o, a, l, c, h) {
  h = h || [NaN, NaN];
  for (let u = 0, d = e.length; u < d; ++u) {
    const f = e[u];
    c = Us(
      s,
      t,
      f,
      i,
      n,
      r,
      o,
      a,
      l,
      c,
      h
    ), t = f[f.length - 1];
  }
  return c;
}
function ic(s, t, e, i) {
  for (let n = 0, r = e.length; n < r; ++n)
    s[t++] = e[n];
  return t;
}
function Ln(s, t, e, i) {
  for (let n = 0, r = e.length; n < r; ++n) {
    const o = e[n];
    for (let a = 0; a < i; ++a)
      s[t++] = o[a];
  }
  return t;
}
function Vs(s, t, e, i, n) {
  n = n || [];
  let r = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = Ln(
      s,
      t,
      e[o],
      i
    );
    n[r++] = l, t = l;
  }
  return n.length = r, n;
}
function nc(s, t, e, i, n) {
  n = n || [];
  let r = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = Vs(
      s,
      t,
      e[o],
      i,
      n[r]
    );
    l.length === 0 && (l[0] = t), n[r++] = l, t = l[l.length - 1];
  }
  return n.length = r, n;
}
function Ys(s, t, e, i, n, r, o) {
  const a = (e - t) / i;
  if (a < 3) {
    for (; t < e; t += i)
      r[o++] = s[t], r[o++] = s[t + 1];
    return o;
  }
  const l = new Array(a);
  l[0] = 1, l[a - 1] = 1;
  const c = [t, e - i];
  let h = 0;
  for (; c.length > 0; ) {
    const u = c.pop(), d = c.pop();
    let f = 0;
    const g = s[d], m = s[d + 1], p = s[u], _ = s[u + 1];
    for (let y = d + i; y < u; y += i) {
      const C = s[y], v = s[y + 1], E = oh(C, v, g, m, p, _);
      E > f && (h = y, f = E);
    }
    f > n && (l[(h - t) / i] = 1, d + i < h && c.push(d, h), h + i < u && c.push(h, u));
  }
  for (let u = 0; u < a; ++u)
    l[u] && (r[o++] = s[t + u * i], r[o++] = s[t + u * i + 1]);
  return o;
}
function sc(s, t, e, i, n, r, o, a) {
  for (let l = 0, c = e.length; l < c; ++l) {
    const h = e[l];
    o = Ys(
      s,
      t,
      h,
      i,
      n,
      r,
      o
    ), a.push(o), t = h;
  }
  return o;
}
function Ce(s, t) {
  return t * Math.round(s / t);
}
function rc(s, t, e, i, n, r, o) {
  if (t == e)
    return o;
  let a = Ce(s[t], n), l = Ce(s[t + 1], n);
  t += i, r[o++] = a, r[o++] = l;
  let c, h;
  do
    if (c = Ce(s[t], n), h = Ce(s[t + 1], n), t += i, t == e)
      return r[o++] = c, r[o++] = h, o;
  while (c == a && h == l);
  for (; t < e; ) {
    const u = Ce(s[t], n), d = Ce(s[t + 1], n);
    if (t += i, u == c && d == h)
      continue;
    const f = c - a, g = h - l, m = u - a, p = d - l;
    if (f * p == g * m && (f < 0 && m < f || f == m || f > 0 && m > f) && (g < 0 && p < g || g == p || g > 0 && p > g)) {
      c = u, h = d;
      continue;
    }
    r[o++] = c, r[o++] = h, a = c, l = h, c = u, h = d;
  }
  return r[o++] = c, r[o++] = h, o;
}
function ca(s, t, e, i, n, r, o, a) {
  for (let l = 0, c = e.length; l < c; ++l) {
    const h = e[l];
    o = rc(
      s,
      t,
      h,
      i,
      n,
      r,
      o
    ), a.push(o), t = h;
  }
  return o;
}
function oc(s, t, e, i, n, r, o, a) {
  for (let l = 0, c = e.length; l < c; ++l) {
    const h = e[l], u = [];
    o = ca(
      s,
      t,
      h,
      i,
      n,
      r,
      o,
      u
    ), a.push(u), t = h[h.length - 1];
  }
  return o;
}
function re(s, t, e, i, n) {
  n = n !== void 0 ? n : [];
  let r = 0;
  for (let o = t; o < e; o += i)
    n[r++] = s.slice(o, o + i);
  return n.length = r, n;
}
function Si(s, t, e, i, n) {
  n = n !== void 0 ? n : [];
  let r = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o];
    n[r++] = re(
      s,
      t,
      l,
      i,
      n[r]
    ), t = l;
  }
  return n.length = r, n;
}
function _s(s, t, e, i, n) {
  n = n !== void 0 ? n : [];
  let r = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o];
    n[r++] = l.length === 1 && l[0] === t ? [] : Si(
      s,
      t,
      l,
      i,
      n[r]
    ), t = l[l.length - 1];
  }
  return n.length = r, n;
}
function ua(s, t, e, i) {
  let n = 0, r = s[e - i], o = s[e - i + 1];
  for (; t < e; t += i) {
    const a = s[t], l = s[t + 1];
    n += o * a - r * l, r = a, o = l;
  }
  return n / 2;
}
function da(s, t, e, i) {
  let n = 0;
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r];
    n += ua(s, t, a, i), t = a;
  }
  return n;
}
function ac(s, t, e, i) {
  let n = 0;
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r];
    n += da(s, t, a, i), t = a[a.length - 1];
  }
  return n;
}
class gn extends Le {
  constructor(t, e) {
    super(), this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(
      e,
      t
    ) : this.setCoordinates(
      t,
      e
    );
  }
  clone() {
    return new gn(this.flatCoordinates.slice(), this.layout);
  }
  closestPointXY(t, e, i, n) {
    return n < Qe(this.getExtent(), t, e) ? n : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      zs(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Xs(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      this.maxDelta_,
      !0,
      t,
      e,
      i,
      n
    ));
  }
  getArea() {
    return ua(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  getCoordinates() {
    return re(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  getSimplifiedGeometryInternal(t) {
    const e = [];
    return e.length = Ys(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      e,
      0
    ), new gn(e, "XY");
  }
  getType() {
    return "LinearRing";
  }
  intersectsExtent(t) {
    return !1;
  }
  setCoordinates(t, e) {
    this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Ln(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
}
const io = gn;
class Ks extends Le {
  constructor(t, e) {
    super(), this.setCoordinates(t, e);
  }
  clone() {
    const t = new Ks(this.flatCoordinates.slice(), this.layout);
    return t.applyProperties(this), t;
  }
  closestPointXY(t, e, i, n) {
    const r = this.flatCoordinates, o = Re(
      t,
      e,
      r[0],
      r[1]
    );
    if (o < n) {
      const a = this.stride;
      for (let l = 0; l < a; ++l)
        i[l] = r[l];
      return i.length = a, o;
    }
    return n;
  }
  getCoordinates() {
    return this.flatCoordinates ? this.flatCoordinates.slice() : [];
  }
  computeExtent(t) {
    return Uo(this.flatCoordinates, t);
  }
  getType() {
    return "Point";
  }
  intersectsExtent(t) {
    return Ds(t, this.flatCoordinates[0], this.flatCoordinates[1]);
  }
  setCoordinates(t, e) {
    this.setLayout(e, t, 0), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = ic(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
}
const mn = Ks;
function lc(s, t, e, i, n) {
  return !th(
    n,
    function(o) {
      return !xe(
        s,
        t,
        e,
        i,
        o[0],
        o[1]
      );
    }
  );
}
function xe(s, t, e, i, n, r) {
  let o = 0, a = s[e - i], l = s[e - i + 1];
  for (; t < e; t += i) {
    const c = s[t], h = s[t + 1];
    l <= r ? h > r && (c - a) * (r - l) - (n - a) * (h - l) > 0 && o++ : h <= r && (c - a) * (r - l) - (n - a) * (h - l) < 0 && o--, a = c, l = h;
  }
  return o !== 0;
}
function Zs(s, t, e, i, n, r) {
  if (e.length === 0 || !xe(s, t, e[0], i, n, r))
    return !1;
  for (let o = 1, a = e.length; o < a; ++o)
    if (xe(s, e[o - 1], e[o], i, n, r))
      return !1;
  return !0;
}
function hc(s, t, e, i, n, r) {
  if (e.length === 0)
    return !1;
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o];
    if (Zs(s, t, l, i, n, r))
      return !0;
    t = l[l.length - 1];
  }
  return !1;
}
function js(s, t, e, i, n, r, o) {
  let a, l, c, h, u, d, f;
  const g = n[r + 1], m = [];
  for (let y = 0, C = e.length; y < C; ++y) {
    const v = e[y];
    for (h = s[v - i], d = s[v - i + 1], a = t; a < v; a += i)
      u = s[a], f = s[a + 1], (g <= d && f <= g || d <= g && g <= f) && (c = (g - d) / (f - d) * (u - h) + h, m.push(c)), h = u, d = f;
  }
  let p = NaN, _ = -1 / 0;
  for (m.sort(Ye), h = m[0], a = 1, l = m.length; a < l; ++a) {
    u = m[a];
    const y = Math.abs(u - h);
    y > _ && (c = (h + u) / 2, Zs(s, t, e, i, c, g) && (p = c, _ = y)), h = u;
  }
  return isNaN(p) && (p = n[r]), o ? (o.push(p, g, _), o) : [p, g, _];
}
function fa(s, t, e, i, n) {
  let r = [];
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o];
    r = js(
      s,
      t,
      l,
      i,
      n,
      2 * o,
      r
    ), t = l[l.length - 1];
  }
  return r;
}
function ga(s, t, e, i, n) {
  let r;
  for (t += i; t < e; t += i)
    if (r = n(
      s.slice(t - i, t),
      s.slice(t, t + i)
    ), r)
      return r;
  return !1;
}
function On(s, t, e, i, n) {
  const r = Vo(
    ce(),
    s,
    t,
    e,
    i
  );
  return At(n, r) ? ze(n, r) || r[0] >= n[0] && r[2] <= n[2] || r[1] >= n[1] && r[3] <= n[3] ? !0 : ga(
    s,
    t,
    e,
    i,
    function(o, a) {
      return sh(n, o, a);
    }
  ) : !1;
}
function cc(s, t, e, i, n) {
  for (let r = 0, o = e.length; r < o; ++r) {
    if (On(s, t, e[r], i, n))
      return !0;
    t = e[r];
  }
  return !1;
}
function uc(s, t, e, i, n) {
  return !!(On(s, t, e, i, n) || xe(
    s,
    t,
    e,
    i,
    n[0],
    n[1]
  ) || xe(
    s,
    t,
    e,
    i,
    n[0],
    n[3]
  ) || xe(
    s,
    t,
    e,
    i,
    n[2],
    n[1]
  ) || xe(
    s,
    t,
    e,
    i,
    n[2],
    n[3]
  ));
}
function ma(s, t, e, i, n) {
  if (!uc(s, t, e[0], i, n))
    return !1;
  if (e.length === 1)
    return !0;
  for (let r = 1, o = e.length; r < o; ++r)
    if (lc(
      s,
      e[r - 1],
      e[r],
      i,
      n
    ) && !On(
      s,
      e[r - 1],
      e[r],
      i,
      n
    ))
      return !1;
  return !0;
}
function dc(s, t, e, i, n) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r];
    if (ma(s, t, a, i, n))
      return !0;
    t = a[a.length - 1];
  }
  return !1;
}
function fc(s, t, e, i) {
  for (; t < e - i; ) {
    for (let n = 0; n < i; ++n) {
      const r = s[t + n];
      s[t + n] = s[e - i + n], s[e - i + n] = r;
    }
    t += i, e -= i;
  }
}
function qs(s, t, e, i) {
  let n = 0, r = s[e - i], o = s[e - i + 1];
  for (; t < e; t += i) {
    const a = s[t], l = s[t + 1];
    n += (a - r) * (l + o), r = a, o = l;
  }
  return n === 0 ? void 0 : n > 0;
}
function pa(s, t, e, i, n) {
  n = n !== void 0 ? n : !1;
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r], l = qs(
      s,
      t,
      a,
      i
    );
    if (r === 0) {
      if (n && l || !n && !l)
        return !1;
    } else if (n && !l || !n && l)
      return !1;
    t = a;
  }
  return !0;
}
function gc(s, t, e, i, n) {
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r];
    if (!pa(s, t, a, i, n))
      return !1;
    a.length && (t = a[a.length - 1]);
  }
  return !0;
}
function ys(s, t, e, i, n) {
  n = n !== void 0 ? n : !1;
  for (let r = 0, o = e.length; r < o; ++r) {
    const a = e[r], l = qs(
      s,
      t,
      a,
      i
    );
    (r === 0 ? n && l || !n && !l : n && !l || !n && l) && fc(s, t, a, i), t = a;
  }
  return t;
}
function no(s, t, e, i, n) {
  for (let r = 0, o = e.length; r < o; ++r)
    t = ys(
      s,
      t,
      e[r],
      i,
      n
    );
  return t;
}
function mc(s, t) {
  const e = [];
  let i = 0, n = 0;
  for (let r = 0, o = t.length; r < o; ++r) {
    const a = t[r];
    if (!qs(s, i, a, 2))
      e.push(t.slice(n, r + 1));
    else {
      if (e.length === 0)
        continue;
      e[e.length - 1].push(t[n]);
    }
    n = r + 1, i = a;
  }
  return e;
}
class de extends Le {
  constructor(t, e, i) {
    super(), this.ends_ = [], this.flatInteriorPointRevision_ = -1, this.flatInteriorPoint_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, e !== void 0 && i ? (this.setFlatCoordinates(
      e,
      t
    ), this.ends_ = i) : this.setCoordinates(
      t,
      e
    );
  }
  appendLinearRing(t) {
    this.flatCoordinates ? Gt(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
  }
  clone() {
    const t = new de(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice()
    );
    return t.applyProperties(this), t;
  }
  closestPointXY(t, e, i, n) {
    return n < Qe(this.getExtent(), t, e) ? n : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Hs(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Us(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      this.maxDelta_,
      !0,
      t,
      e,
      i,
      n
    ));
  }
  containsXY(t, e) {
    return Zs(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      t,
      e
    );
  }
  getArea() {
    return da(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride
    );
  }
  getCoordinates(t) {
    let e;
    return t !== void 0 ? (e = this.getOrientedFlatCoordinates().slice(), ys(e, 0, this.ends_, this.stride, t)) : e = this.flatCoordinates, Si(e, 0, this.ends_, this.stride);
  }
  getEnds() {
    return this.ends_;
  }
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const t = ue(this.getExtent());
      this.flatInteriorPoint_ = js(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        t,
        0
      ), this.flatInteriorPointRevision_ = this.getRevision();
    }
    return this.flatInteriorPoint_;
  }
  getInteriorPoint() {
    return new mn(this.getFlatInteriorPoint(), "XYM");
  }
  getLinearRingCount() {
    return this.ends_.length;
  }
  getLinearRing(t) {
    return t < 0 || this.ends_.length <= t ? null : new io(
      this.flatCoordinates.slice(
        t === 0 ? 0 : this.ends_[t - 1],
        this.ends_[t]
      ),
      this.layout
    );
  }
  getLinearRings() {
    const t = this.layout, e = this.flatCoordinates, i = this.ends_, n = [];
    let r = 0;
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o], c = new io(
        e.slice(r, l),
        t
      );
      n.push(c), r = l;
    }
    return n;
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates;
      pa(t, 0, this.ends_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = ys(
        this.orientedFlatCoordinates_,
        0,
        this.ends_,
        this.stride
      )), this.orientedRevision_ = this.getRevision();
    }
    return this.orientedFlatCoordinates_;
  }
  getSimplifiedGeometryInternal(t) {
    const e = [], i = [];
    return e.length = ca(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      Math.sqrt(t),
      e,
      0,
      i
    ), new de(e, "XY", i);
  }
  getType() {
    return "Polygon";
  }
  intersectsExtent(t) {
    return ma(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      t
    );
  }
  setCoordinates(t, e) {
    this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []);
    const i = Vs(
      this.flatCoordinates,
      0,
      t,
      this.stride,
      this.ends_
    );
    this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1], this.changed();
  }
}
function so(s) {
  if (Ps(s))
    throw new Error("Cannot create polygon from empty extent");
  const t = s[0], e = s[1], i = s[2], n = s[3], r = [
    t,
    e,
    t,
    n,
    i,
    n,
    i,
    e,
    t,
    e
  ];
  return new de(r, "XY", [r.length]);
}
const jn = 0;
class pc extends zt {
  constructor(t) {
    super(), this.on, this.once, this.un, t = Object.assign({}, t), this.hints_ = [0, 0], this.animations_ = [], this.updateAnimationKey_, this.projection_ = ks(t.projection, "EPSG:3857"), this.viewportSize_ = [100, 100], this.targetCenter_ = null, this.targetResolution_, this.targetRotation_, this.nextCenter_ = null, this.nextResolution_, this.nextRotation_, this.cancelAnchor_ = void 0, t.projection && ra(), t.center && (t.center = Kt(t.center, this.projection_)), t.extent && (t.extent = mi(t.extent, this.projection_)), this.applyOptions_(t);
  }
  applyOptions_(t) {
    const e = Object.assign({}, t);
    for (const a in bt)
      delete e[a];
    this.setProperties(e, !0);
    const i = yc(t);
    this.maxResolution_ = i.maxResolution, this.minResolution_ = i.minResolution, this.zoomFactor_ = i.zoomFactor, this.resolutions_ = t.resolutions, this.padding_ = t.padding, this.minZoom_ = i.minZoom;
    const n = _c(t), r = i.constraint, o = Ec(t);
    this.constraints_ = {
      center: n,
      resolution: r,
      rotation: o
    }, this.setRotation(t.rotation !== void 0 ? t.rotation : 0), this.setCenterInternal(
      t.center !== void 0 ? t.center : null
    ), t.resolution !== void 0 ? this.setResolution(t.resolution) : t.zoom !== void 0 && this.setZoom(t.zoom);
  }
  get padding() {
    return this.padding_;
  }
  set padding(t) {
    let e = this.padding_;
    this.padding_ = t;
    const i = this.getCenterInternal();
    if (i) {
      const n = t || [0, 0, 0, 0];
      e = e || [0, 0, 0, 0];
      const r = this.getResolution(), o = r / 2 * (n[3] - e[3] + e[1] - n[1]), a = r / 2 * (n[0] - e[0] + e[2] - n[2]);
      this.setCenterInternal([i[0] + o, i[1] - a]);
    }
  }
  getUpdatedOptions_(t) {
    const e = this.getProperties();
    return e.resolution !== void 0 ? e.resolution = this.getResolution() : e.zoom = this.getZoom(), e.center = this.getCenterInternal(), e.rotation = this.getRotation(), Object.assign({}, e, t);
  }
  animate(t) {
    this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
    const e = new Array(arguments.length);
    for (let i = 0; i < e.length; ++i) {
      let n = arguments[i];
      n.center && (n = Object.assign({}, n), n.center = Kt(
        n.center,
        this.getProjection()
      )), n.anchor && (n = Object.assign({}, n), n.anchor = Kt(
        n.anchor,
        this.getProjection()
      )), e[i] = n;
    }
    this.animateInternal.apply(this, e);
  }
  animateInternal(t) {
    let e = arguments.length, i;
    e > 1 && typeof arguments[e - 1] == "function" && (i = arguments[e - 1], --e);
    let n = 0;
    for (; n < e && !this.isDef(); ++n) {
      const h = arguments[n];
      h.center && this.setCenterInternal(h.center), h.zoom !== void 0 ? this.setZoom(h.zoom) : h.resolution && this.setResolution(h.resolution), h.rotation !== void 0 && this.setRotation(h.rotation);
    }
    if (n === e) {
      i && en(i, !0);
      return;
    }
    let r = Date.now(), o = this.targetCenter_.slice(), a = this.targetResolution_, l = this.targetRotation_;
    const c = [];
    for (; n < e; ++n) {
      const h = arguments[n], u = {
        start: r,
        complete: !1,
        anchor: h.anchor,
        duration: h.duration !== void 0 ? h.duration : 1e3,
        easing: h.easing || Vh,
        callback: i
      };
      if (h.center && (u.sourceCenter = o, u.targetCenter = h.center.slice(), o = u.targetCenter), h.zoom !== void 0 ? (u.sourceResolution = a, u.targetResolution = this.getResolutionForZoom(h.zoom), a = u.targetResolution) : h.resolution && (u.sourceResolution = a, u.targetResolution = h.resolution, a = u.targetResolution), h.rotation !== void 0) {
        u.sourceRotation = l;
        const d = ds(h.rotation - l + Math.PI, 2 * Math.PI) - Math.PI;
        u.targetRotation = l + d, l = u.targetRotation;
      }
      Cc(u) ? u.complete = !0 : r += u.duration, c.push(u);
    }
    this.animations_.push(c), this.setHint(lt.ANIMATING, 1), this.updateAnimations_();
  }
  getAnimating() {
    return this.hints_[lt.ANIMATING] > 0;
  }
  getInteracting() {
    return this.hints_[lt.INTERACTING] > 0;
  }
  cancelAnimations() {
    this.setHint(lt.ANIMATING, -this.hints_[lt.ANIMATING]);
    let t;
    for (let e = 0, i = this.animations_.length; e < i; ++e) {
      const n = this.animations_[e];
      if (n[0].callback && en(n[0].callback, !1), !t)
        for (let r = 0, o = n.length; r < o; ++r) {
          const a = n[r];
          if (!a.complete) {
            t = a.anchor;
            break;
          }
        }
    }
    this.animations_.length = 0, this.cancelAnchor_ = t, this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
  }
  updateAnimations_() {
    if (this.updateAnimationKey_ !== void 0 && (cancelAnimationFrame(this.updateAnimationKey_), this.updateAnimationKey_ = void 0), !this.getAnimating())
      return;
    const t = Date.now();
    let e = !1;
    for (let i = this.animations_.length - 1; i >= 0; --i) {
      const n = this.animations_[i];
      let r = !0;
      for (let o = 0, a = n.length; o < a; ++o) {
        const l = n[o];
        if (l.complete)
          continue;
        const c = t - l.start;
        let h = l.duration > 0 ? c / l.duration : 1;
        h >= 1 ? (l.complete = !0, h = 1) : r = !1;
        const u = l.easing(h);
        if (l.sourceCenter) {
          const d = l.sourceCenter[0], f = l.sourceCenter[1], g = l.targetCenter[0], m = l.targetCenter[1];
          this.nextCenter_ = l.targetCenter;
          const p = d + u * (g - d), _ = f + u * (m - f);
          this.targetCenter_ = [p, _];
        }
        if (l.sourceResolution && l.targetResolution) {
          const d = u === 1 ? l.targetResolution : l.sourceResolution + u * (l.targetResolution - l.sourceResolution);
          if (l.anchor) {
            const f = this.getViewportSize_(this.getRotation()), g = this.constraints_.resolution(
              d,
              0,
              f,
              !0
            );
            this.targetCenter_ = this.calculateCenterZoom(
              g,
              l.anchor
            );
          }
          this.nextResolution_ = l.targetResolution, this.targetResolution_ = d, this.applyTargetState_(!0);
        }
        if (l.sourceRotation !== void 0 && l.targetRotation !== void 0) {
          const d = u === 1 ? ds(l.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : l.sourceRotation + u * (l.targetRotation - l.sourceRotation);
          if (l.anchor) {
            const f = this.constraints_.rotation(
              d,
              !0
            );
            this.targetCenter_ = this.calculateCenterRotate(
              f,
              l.anchor
            );
          }
          this.nextRotation_ = l.targetRotation, this.targetRotation_ = d;
        }
        if (this.applyTargetState_(!0), e = !0, !l.complete)
          break;
      }
      if (r) {
        this.animations_[i] = null, this.setHint(lt.ANIMATING, -1), this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
        const o = n[0].callback;
        o && en(o, !0);
      }
    }
    this.animations_ = this.animations_.filter(Boolean), e && this.updateAnimationKey_ === void 0 && (this.updateAnimationKey_ = requestAnimationFrame(
      this.updateAnimations_.bind(this)
    ));
  }
  calculateCenterRotate(t, e) {
    let i;
    const n = this.getCenterInternal();
    return n !== void 0 && (i = [n[0] - e[0], n[1] - e[1]], Ns(i, t - this.getRotation()), bh(i, e)), i;
  }
  calculateCenterZoom(t, e) {
    let i;
    const n = this.getCenterInternal(), r = this.getResolution();
    if (n !== void 0 && r !== void 0) {
      const o = e[0] - t * (e[0] - n[0]) / r, a = e[1] - t * (e[1] - n[1]) / r;
      i = [o, a];
    }
    return i;
  }
  getViewportSize_(t) {
    const e = this.viewportSize_;
    if (t) {
      const i = e[0], n = e[1];
      return [
        Math.abs(i * Math.cos(t)) + Math.abs(n * Math.sin(t)),
        Math.abs(i * Math.sin(t)) + Math.abs(n * Math.cos(t))
      ];
    }
    return e;
  }
  setViewportSize(t) {
    this.viewportSize_ = Array.isArray(t) ? t.slice() : [100, 100], this.getAnimating() || this.resolveConstraints(0);
  }
  getCenter() {
    const t = this.getCenterInternal();
    return t && ps(t, this.getProjection());
  }
  getCenterInternal() {
    return this.get(bt.CENTER);
  }
  getConstraints() {
    return this.constraints_;
  }
  getConstrainResolution() {
    return this.get("constrainResolution");
  }
  getHints(t) {
    return t !== void 0 ? (t[0] = this.hints_[0], t[1] = this.hints_[1], t) : this.hints_.slice();
  }
  calculateExtent(t) {
    const e = this.calculateExtentInternal(t);
    return la(e, this.getProjection());
  }
  calculateExtentInternal(t) {
    t = t || this.getViewportSizeMinusPadding_();
    const e = this.getCenterInternal();
    K(e, "The view center is not defined");
    const i = this.getResolution();
    K(i !== void 0, "The view resolution is not defined");
    const n = this.getRotation();
    return K(n !== void 0, "The view rotation is not defined"), us(e, i, n, t);
  }
  getMaxResolution() {
    return this.maxResolution_;
  }
  getMinResolution() {
    return this.minResolution_;
  }
  getMaxZoom() {
    return this.getZoomForResolution(this.minResolution_);
  }
  setMaxZoom(t) {
    this.applyOptions_(this.getUpdatedOptions_({ maxZoom: t }));
  }
  getMinZoom() {
    return this.getZoomForResolution(this.maxResolution_);
  }
  setMinZoom(t) {
    this.applyOptions_(this.getUpdatedOptions_({ minZoom: t }));
  }
  setConstrainResolution(t) {
    this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: t }));
  }
  getProjection() {
    return this.projection_;
  }
  getResolution() {
    return this.get(bt.RESOLUTION);
  }
  getResolutions() {
    return this.resolutions_;
  }
  getResolutionForExtent(t, e) {
    return this.getResolutionForExtentInternal(
      mi(t, this.getProjection()),
      e
    );
  }
  getResolutionForExtentInternal(t, e) {
    e = e || this.getViewportSizeMinusPadding_();
    const i = vt(t) / e[0], n = Ae(t) / e[1];
    return Math.max(i, n);
  }
  getResolutionForValueFunction(t) {
    t = t || 2;
    const e = this.getConstrainedResolution(this.maxResolution_), i = this.minResolution_, n = Math.log(e / i) / Math.log(t);
    return function(r) {
      return e / Math.pow(t, r * n);
    };
  }
  getRotation() {
    return this.get(bt.ROTATION);
  }
  getValueForResolutionFunction(t) {
    const e = Math.log(t || 2), i = this.getConstrainedResolution(this.maxResolution_), n = this.minResolution_, r = Math.log(i / n) / e;
    return function(o) {
      return Math.log(i / o) / e / r;
    };
  }
  getViewportSizeMinusPadding_(t) {
    let e = this.getViewportSize_(t);
    const i = this.padding_;
    return i && (e = [
      e[0] - i[1] - i[3],
      e[1] - i[0] - i[2]
    ]), e;
  }
  getState() {
    const t = this.getProjection(), e = this.getResolution(), i = this.getRotation();
    let n = this.getCenterInternal();
    const r = this.padding_;
    if (r) {
      const o = this.getViewportSizeMinusPadding_();
      n = qn(
        n,
        this.getViewportSize_(),
        [o[0] / 2 + r[3], o[1] / 2 + r[0]],
        e,
        i
      );
    }
    return {
      center: n.slice(0),
      projection: t !== void 0 ? t : null,
      resolution: e,
      nextCenter: this.nextCenter_,
      nextResolution: this.nextResolution_,
      nextRotation: this.nextRotation_,
      rotation: i,
      zoom: this.getZoom()
    };
  }
  getViewStateAndExtent() {
    return {
      viewState: this.getState(),
      extent: this.calculateExtent()
    };
  }
  getZoom() {
    let t;
    const e = this.getResolution();
    return e !== void 0 && (t = this.getZoomForResolution(e)), t;
  }
  getZoomForResolution(t) {
    let e = this.minZoom_ || 0, i, n;
    if (this.resolutions_) {
      const r = ko(this.resolutions_, t, 1);
      e = r, i = this.resolutions_[r], r == this.resolutions_.length - 1 ? n = 2 : n = i / this.resolutions_[r + 1];
    } else
      i = this.maxResolution_, n = this.zoomFactor_;
    return e + Math.log(i / t) / Math.log(n);
  }
  getResolutionForZoom(t) {
    if (this.resolutions_) {
      if (this.resolutions_.length <= 1)
        return 0;
      const e = nt(
        Math.floor(t),
        0,
        this.resolutions_.length - 2
      ), i = this.resolutions_[e] / this.resolutions_[e + 1];
      return this.resolutions_[e] / Math.pow(i, nt(t - e, 0, 1));
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_);
  }
  fit(t, e) {
    let i;
    if (K(
      Array.isArray(t) || typeof t.getSimplifiedGeometry == "function",
      "Invalid extent or geometry provided as `geometry`"
    ), Array.isArray(t)) {
      K(
        !Ps(t),
        "Cannot fit empty extent provided as `geometry`"
      );
      const n = mi(t, this.getProjection());
      i = so(n);
    } else if (t.getType() === "Circle") {
      const n = mi(
        t.getExtent(),
        this.getProjection()
      );
      i = so(n), i.rotate(this.getRotation(), ue(n));
    } else
      i = t;
    this.fitInternal(i, e);
  }
  rotatedExtentForGeometry(t) {
    const e = this.getRotation(), i = Math.cos(e), n = Math.sin(-e), r = t.getFlatCoordinates(), o = t.getStride();
    let a = 1 / 0, l = 1 / 0, c = -1 / 0, h = -1 / 0;
    for (let u = 0, d = r.length; u < d; u += o) {
      const f = r[u] * i - r[u + 1] * n, g = r[u] * n + r[u + 1] * i;
      a = Math.min(a, f), l = Math.min(l, g), c = Math.max(c, f), h = Math.max(h, g);
    }
    return [a, l, c, h];
  }
  fitInternal(t, e) {
    e = e || {};
    let i = e.size;
    i || (i = this.getViewportSizeMinusPadding_());
    const n = e.padding !== void 0 ? e.padding : [0, 0, 0, 0], r = e.nearest !== void 0 ? e.nearest : !1;
    let o;
    e.minResolution !== void 0 ? o = e.minResolution : e.maxZoom !== void 0 ? o = this.getResolutionForZoom(e.maxZoom) : o = 0;
    const a = this.rotatedExtentForGeometry(t);
    let l = this.getResolutionForExtentInternal(a, [
      i[0] - n[1] - n[3],
      i[1] - n[0] - n[2]
    ]);
    l = isNaN(l) ? o : Math.max(l, o), l = this.getConstrainedResolution(l, r ? 0 : 1);
    const c = this.getRotation(), h = Math.sin(c), u = Math.cos(c), d = ue(a);
    d[0] += (n[1] - n[3]) / 2 * l, d[1] += (n[0] - n[2]) / 2 * l;
    const f = d[0] * u - d[1] * h, g = d[1] * u + d[0] * h, m = this.getConstrainedCenter([f, g], l), p = e.callback ? e.callback : Ke;
    e.duration !== void 0 ? this.animateInternal(
      {
        resolution: l,
        center: m,
        duration: e.duration,
        easing: e.easing
      },
      p
    ) : (this.targetResolution_ = l, this.targetCenter_ = m, this.applyTargetState_(!1, !0), en(p, !0));
  }
  centerOn(t, e, i) {
    this.centerOnInternal(
      Kt(t, this.getProjection()),
      e,
      i
    );
  }
  centerOnInternal(t, e, i) {
    this.setCenterInternal(
      qn(
        t,
        e,
        i,
        this.getResolution(),
        this.getRotation()
      )
    );
  }
  calculateCenterShift(t, e, i, n) {
    let r;
    const o = this.padding_;
    if (o && t) {
      const a = this.getViewportSizeMinusPadding_(-i), l = qn(
        t,
        n,
        [a[0] / 2 + o[3], a[1] / 2 + o[0]],
        e,
        i
      );
      r = [
        t[0] - l[0],
        t[1] - l[1]
      ];
    }
    return r;
  }
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0;
  }
  adjustCenter(t) {
    const e = ps(this.targetCenter_, this.getProjection());
    this.setCenter([
      e[0] + t[0],
      e[1] + t[1]
    ]);
  }
  adjustCenterInternal(t) {
    const e = this.targetCenter_;
    this.setCenterInternal([
      e[0] + t[0],
      e[1] + t[1]
    ]);
  }
  adjustResolution(t, e) {
    e = e && Kt(e, this.getProjection()), this.adjustResolutionInternal(t, e);
  }
  adjustResolutionInternal(t, e) {
    const i = this.getAnimating() || this.getInteracting(), n = this.getViewportSize_(this.getRotation()), r = this.constraints_.resolution(
      this.targetResolution_ * t,
      0,
      n,
      i
    );
    e && (this.targetCenter_ = this.calculateCenterZoom(r, e)), this.targetResolution_ *= t, this.applyTargetState_();
  }
  adjustZoom(t, e) {
    this.adjustResolution(Math.pow(this.zoomFactor_, -t), e);
  }
  adjustRotation(t, e) {
    e && (e = Kt(e, this.getProjection())), this.adjustRotationInternal(t, e);
  }
  adjustRotationInternal(t, e) {
    const i = this.getAnimating() || this.getInteracting(), n = this.constraints_.rotation(
      this.targetRotation_ + t,
      i
    );
    e && (this.targetCenter_ = this.calculateCenterRotate(n, e)), this.targetRotation_ += t, this.applyTargetState_();
  }
  setCenter(t) {
    this.setCenterInternal(
      t && Kt(t, this.getProjection())
    );
  }
  setCenterInternal(t) {
    this.targetCenter_ = t, this.applyTargetState_();
  }
  setHint(t, e) {
    return this.hints_[t] += e, this.changed(), this.hints_[t];
  }
  setResolution(t) {
    this.targetResolution_ = t, this.applyTargetState_();
  }
  setRotation(t) {
    this.targetRotation_ = t, this.applyTargetState_();
  }
  setZoom(t) {
    this.setResolution(this.getResolutionForZoom(t));
  }
  applyTargetState_(t, e) {
    const i = this.getAnimating() || this.getInteracting() || e, n = this.constraints_.rotation(
      this.targetRotation_,
      i
    ), r = this.getViewportSize_(n), o = this.constraints_.resolution(
      this.targetResolution_,
      0,
      r,
      i
    ), a = this.constraints_.center(
      this.targetCenter_,
      o,
      r,
      i,
      this.calculateCenterShift(
        this.targetCenter_,
        o,
        n,
        r
      )
    );
    this.get(bt.ROTATION) !== n && this.set(bt.ROTATION, n), this.get(bt.RESOLUTION) !== o && (this.set(bt.RESOLUTION, o), this.set("zoom", this.getZoom(), !0)), (!a || !this.get(bt.CENTER) || !fn(this.get(bt.CENTER), a)) && this.set(bt.CENTER, a), this.getAnimating() && !t && this.cancelAnimations(), this.cancelAnchor_ = void 0;
  }
  resolveConstraints(t, e, i) {
    t = t !== void 0 ? t : 200;
    const n = e || 0, r = this.constraints_.rotation(this.targetRotation_), o = this.getViewportSize_(r), a = this.constraints_.resolution(
      this.targetResolution_,
      n,
      o
    ), l = this.constraints_.center(
      this.targetCenter_,
      a,
      o,
      !1,
      this.calculateCenterShift(
        this.targetCenter_,
        a,
        r,
        o
      )
    );
    if (t === 0 && !this.cancelAnchor_) {
      this.targetResolution_ = a, this.targetRotation_ = r, this.targetCenter_ = l, this.applyTargetState_();
      return;
    }
    i = i || (t === 0 ? this.cancelAnchor_ : void 0), this.cancelAnchor_ = void 0, (this.getResolution() !== a || this.getRotation() !== r || !this.getCenterInternal() || !fn(this.getCenterInternal(), l)) && (this.getAnimating() && this.cancelAnimations(), this.animateInternal({
      rotation: r,
      center: l,
      resolution: a,
      duration: t,
      easing: ti,
      anchor: i
    }));
  }
  beginInteraction() {
    this.resolveConstraints(0), this.setHint(lt.INTERACTING, 1);
  }
  endInteraction(t, e, i) {
    i = i && Kt(i, this.getProjection()), this.endInteractionInternal(t, e, i);
  }
  endInteractionInternal(t, e, i) {
    !this.getInteracting() || (this.setHint(lt.INTERACTING, -1), this.resolveConstraints(t, e, i));
  }
  getConstrainedCenter(t, e) {
    const i = this.getViewportSize_(this.getRotation());
    return this.constraints_.center(
      t,
      e || this.getResolution(),
      i
    );
  }
  getConstrainedZoom(t, e) {
    const i = this.getResolutionForZoom(t);
    return this.getZoomForResolution(
      this.getConstrainedResolution(i, e)
    );
  }
  getConstrainedResolution(t, e) {
    e = e || 0;
    const i = this.getViewportSize_(this.getRotation());
    return this.constraints_.resolution(t, e, i);
  }
}
function en(s, t) {
  setTimeout(function() {
    s(t);
  }, 0);
}
function _c(s) {
  if (s.extent !== void 0) {
    const e = s.smoothExtentConstraint !== void 0 ? s.smoothExtentConstraint : !0;
    return qr(s.extent, s.constrainOnlyCenter, e);
  }
  const t = ks(s.projection, "EPSG:3857");
  if (s.multiWorld !== !0 && t.isGlobal()) {
    const e = t.getExtent().slice();
    return e[0] = -1 / 0, e[2] = 1 / 0, qr(e, !1, !1);
  }
  return Gh;
}
function yc(s) {
  let t, e, i, o = s.minZoom !== void 0 ? s.minZoom : jn, a = s.maxZoom !== void 0 ? s.maxZoom : 28;
  const l = s.zoomFactor !== void 0 ? s.zoomFactor : 2, c = s.multiWorld !== void 0 ? s.multiWorld : !1, h = s.smoothResolutionConstraint !== void 0 ? s.smoothResolutionConstraint : !0, u = s.showFullExtent !== void 0 ? s.showFullExtent : !1, d = ks(s.projection, "EPSG:3857"), f = d.getExtent();
  let g = s.constrainOnlyCenter, m = s.extent;
  if (!c && !m && d.isGlobal() && (g = !1, m = f), s.resolutions !== void 0) {
    const p = s.resolutions;
    e = p[o], i = p[a] !== void 0 ? p[a] : p[p.length - 1], s.constrainResolution ? t = Wh(
      p,
      h,
      !g && m,
      u
    ) : t = $r(
      e,
      i,
      h,
      !g && m,
      u
    );
  } else {
    const _ = (f ? Math.max(vt(f), Ae(f)) : 360 * ta.degrees / d.getMetersPerUnit()) / ph / Math.pow(2, jn), y = _ / Math.pow(2, 28 - jn);
    e = s.maxResolution, e !== void 0 ? o = 0 : e = _ / Math.pow(l, o), i = s.minResolution, i === void 0 && (s.maxZoom !== void 0 ? s.maxResolution !== void 0 ? i = e / Math.pow(l, a) : i = _ / Math.pow(l, a) : i = y), a = o + Math.floor(
      Math.log(e / i) / Math.log(l)
    ), i = e / Math.pow(l, a - o), s.constrainResolution ? t = zh(
      l,
      e,
      i,
      h,
      !g && m,
      u
    ) : t = $r(
      e,
      i,
      h,
      !g && m,
      u
    );
  }
  return {
    constraint: t,
    maxResolution: e,
    minResolution: i,
    minZoom: o,
    zoomFactor: l
  };
}
function Ec(s) {
  if (s.enableRotation !== void 0 ? s.enableRotation : !0) {
    const e = s.constrainRotation;
    return e === void 0 || e === !0 ? Xh() : e === !1 ? Jr : typeof e == "number" ? Hh(e) : Jr;
  }
  return Ws;
}
function Cc(s) {
  return !(s.sourceCenter && s.targetCenter && !fn(s.sourceCenter, s.targetCenter) || s.sourceResolution !== s.targetResolution || s.sourceRotation !== s.targetRotation);
}
function qn(s, t, e, i, n) {
  const r = Math.cos(-n);
  let o = Math.sin(-n), a = s[0] * r - s[1] * o, l = s[1] * r + s[0] * o;
  a += (t[0] / 2 - e[0]) * i, l += (e[1] - t[1] / 2) * i, o = -o;
  const c = a * r - l * o, h = l * r + a * o;
  return [c, h];
}
const Nt = pc;
class vc extends Qo {
  constructor(t) {
    const e = Object.assign({}, t);
    delete e.source, super(e), this.on, this.once, this.un, this.mapPrecomposeKey_ = null, this.mapRenderKey_ = null, this.sourceChangeKey_ = null, this.renderer_ = null, this.sourceReady_ = !1, this.rendered = !1, t.render && (this.render = t.render), t.map && this.setMap(t.map), this.addChangeListener(
      z.SOURCE,
      this.handleSourcePropertyChange_
    );
    const i = t.source ? t.source : null;
    this.setSource(i);
  }
  getLayersArray(t) {
    return t = t || [], t.push(this), t;
  }
  getLayerStatesArray(t) {
    return t = t || [], t.push(this.getLayerState()), t;
  }
  getSource() {
    return this.get(z.SOURCE) || null;
  }
  getRenderSource() {
    return this.getSource();
  }
  getSourceState() {
    const t = this.getSource();
    return t ? t.getState() : "undefined";
  }
  handleSourceChange_() {
    this.changed(), !(this.sourceReady_ || this.getSource().getState() !== "ready") && (this.sourceReady_ = !0, this.dispatchEvent("sourceready"));
  }
  handleSourcePropertyChange_() {
    this.sourceChangeKey_ && (Q(this.sourceChangeKey_), this.sourceChangeKey_ = null), this.sourceReady_ = !1;
    const t = this.getSource();
    t && (this.sourceChangeKey_ = k(
      t,
      P.CHANGE,
      this.handleSourceChange_,
      this
    ), t.getState() === "ready" && (this.sourceReady_ = !0, setTimeout(() => {
      this.dispatchEvent("sourceready");
    }, 0))), this.changed();
  }
  getFeatures(t) {
    return this.renderer_ ? this.renderer_.getFeatures(t) : Promise.resolve([]);
  }
  getData(t) {
    return !this.renderer_ || !this.rendered ? null : this.renderer_.getData(t);
  }
  isVisible(t) {
    let e;
    const i = this.getMapInternal();
    !t && i && (t = i.getView()), t instanceof Nt ? e = {
      viewState: t.getState(),
      extent: t.calculateExtent()
    } : e = t, !e.layerStatesArray && i && (e.layerStatesArray = i.getLayerGroup().getLayerStatesArray());
    let n;
    e.layerStatesArray ? n = e.layerStatesArray.find(
      (o) => o.layer === this
    ) : n = this.getLayerState();
    const r = this.getExtent();
    return $s(n, e.viewState) && (!r || At(r, e.extent));
  }
  getAttributions(t) {
    if (!this.isVisible(t))
      return [];
    let e;
    const i = this.getSource();
    if (i && (e = i.getAttributions()), !e)
      return [];
    const n = t instanceof Nt ? t.getViewStateAndExtent() : t;
    let r = e(n);
    return Array.isArray(r) || (r = [r]), r;
  }
  render(t, e) {
    const i = this.getRenderer();
    return i.prepareFrame(t) ? (this.rendered = !0, i.renderFrame(t, e)) : null;
  }
  unrender() {
    this.rendered = !1;
  }
  setMapInternal(t) {
    t || this.unrender(), this.set(z.MAP, t);
  }
  getMapInternal() {
    return this.get(z.MAP);
  }
  setMap(t) {
    this.mapPrecomposeKey_ && (Q(this.mapPrecomposeKey_), this.mapPrecomposeKey_ = null), t || this.changed(), this.mapRenderKey_ && (Q(this.mapRenderKey_), this.mapRenderKey_ = null), t && (this.mapPrecomposeKey_ = k(
      t,
      Wt.PRECOMPOSE,
      function(e) {
        const n = e.frameState.layerStatesArray, r = this.getLayerState(!1);
        K(
          !n.some(function(o) {
            return o.layer === r.layer;
          }),
          "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."
        ), n.push(r);
      },
      this
    ), this.mapRenderKey_ = k(this, P.CHANGE, t.render, t), this.changed());
  }
  setSource(t) {
    this.set(z.SOURCE, t);
  }
  getRenderer() {
    return this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_;
  }
  hasRenderer() {
    return !!this.renderer_;
  }
  createRenderer() {
    return null;
  }
  disposeInternal() {
    this.renderer_ && (this.renderer_.dispose(), delete this.renderer_), this.setSource(null), super.disposeInternal();
  }
}
function $s(s, t) {
  if (!s.visible)
    return !1;
  const e = t.resolution;
  if (e < s.minResolution || e >= s.maxResolution)
    return !1;
  const i = t.zoom;
  return i > s.minZoom && i <= s.maxZoom;
}
const Mn = vc;
class xc extends ws {
  constructor(t) {
    super(), this.map_ = t;
  }
  dispatchRenderEvent(t, e) {
    G();
  }
  calculateMatrices2D(t) {
    const e = t.viewState, i = t.coordinateToPixelTransform, n = t.pixelToCoordinateTransform;
    we(
      i,
      t.size[0] / 2,
      t.size[1] / 2,
      1 / e.resolution,
      -1 / e.resolution,
      -e.rotation,
      -e.center[0],
      -e.center[1]
    ), Ho(n, i);
  }
  forEachFeatureAtCoordinate(t, e, i, n, r, o, a, l) {
    let c;
    const h = e.viewState;
    function u(v, E, I, A) {
      return r.call(o, E, v ? I : null, A);
    }
    const d = h.projection, f = ia(t.slice(), d), g = [[0, 0]];
    if (d.canWrapX() && n) {
      const v = d.getExtent(), E = vt(v);
      g.push([-E, 0], [E, 0]);
    }
    const m = e.layerStatesArray, p = m.length, _ = [], y = [];
    for (let v = 0; v < g.length; v++)
      for (let E = p - 1; E >= 0; --E) {
        const I = m[E], A = I.layer;
        if (A.hasRenderer() && $s(I, h) && a.call(l, A)) {
          const R = A.getRenderer(), M = A.getSource();
          if (R && M) {
            const N = M.getWrapX() ? f : t, Z = u.bind(
              null,
              I.managed
            );
            y[0] = N[0] + g[v][0], y[1] = N[1] + g[v][1], c = R.forEachFeatureAtCoordinate(
              y,
              e,
              i,
              Z,
              _
            );
          }
          if (c)
            return c;
        }
      }
    if (_.length === 0)
      return;
    const C = 1 / _.length;
    return _.forEach((v, E) => v.distanceSq += E * C), _.sort((v, E) => v.distanceSq - E.distanceSq), _.some((v) => c = v.callback(v.feature, v.layer, v.geometry)), c;
  }
  hasFeatureAtCoordinate(t, e, i, n, r, o) {
    return this.forEachFeatureAtCoordinate(
      t,
      e,
      i,
      n,
      xi,
      this,
      r,
      o
    ) !== void 0;
  }
  getMap() {
    return this.map_;
  }
  renderFrame(t) {
    G();
  }
  flushDeclutterItems(t) {
  }
  scheduleExpireIconCache(t) {
    un.canExpireCache() && t.postRenderFunctions.push(Ic);
  }
}
function Ic(s, t) {
  un.expire();
}
const Sc = xc;
class Rc extends ge {
  constructor(t, e, i, n) {
    super(t), this.inversePixelTransform = e, this.frameState = i, this.context = n;
  }
}
const _a = Rc, nn = "ol-hidden", Dn = "ol-unselectable", Js = "ol-control", ro = "ol-collapsed", Ac = new RegExp(
  [
    "^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)",
    "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)",
    "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)",
    "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?",
    "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))",
    "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",
    `?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`
  ].join(""),
  "i"
), oo = [
  "style",
  "variant",
  "weight",
  "size",
  "lineHeight",
  "family"
], ya = function(s) {
  const t = s.match(Ac);
  if (!t)
    return null;
  const e = {
    lineHeight: "normal",
    size: "1.2em",
    style: "normal",
    weight: "normal",
    variant: "normal"
  };
  for (let i = 0, n = oo.length; i < n; ++i) {
    const r = t[i + 1];
    r !== void 0 && (e[oo[i]] = r);
  }
  return e.families = e.family.split(/,\s?/), e;
};
function Mt(s, t, e, i) {
  let n;
  return e && e.length ? n = e.shift() : Os ? n = new OffscreenCanvas(s || 300, t || 300) : n = document.createElement("canvas"), s && (n.width = s), t && (n.height = t), n.getContext("2d", i);
}
function bc(s) {
  const t = s.canvas;
  t.width = 1, t.height = 1, s.clearRect(0, 0, 1, 1);
}
function ao(s, t) {
  const e = t.parentNode;
  e && e.replaceChild(s, t);
}
function Es(s) {
  return s && s.parentNode ? s.parentNode.removeChild(s) : null;
}
function Tc(s) {
  for (; s.lastChild; )
    s.removeChild(s.lastChild);
}
function wc(s, t) {
  const e = s.childNodes;
  for (let i = 0; ; ++i) {
    const n = e[i], r = t[i];
    if (!n && !r)
      break;
    if (n !== r) {
      if (!n) {
        s.appendChild(r);
        continue;
      }
      if (!r) {
        s.removeChild(n), --i;
        continue;
      }
      s.insertBefore(r, n);
    }
  }
}
const Ea = "10px sans-serif", gt = "#000", je = "round", jt = [], qt = 0, qe = "round", Ri = 10, Ai = "#000", bi = "center", pn = "middle", Ie = [0, 0, 0, 0], Ti = 1, Zt = new zt();
let ke = null, Cs;
const vs = {}, Lc = function() {
  const t = "32px ", e = ["monospace", "serif"], i = e.length, n = "wmytzilWMYTZIL@#/&?$%10\uF013";
  let r, o;
  function a(c, h, u) {
    let d = !0;
    for (let f = 0; f < i; ++f) {
      const g = e[f];
      if (o = _n(
        c + " " + h + " " + t + g,
        n
      ), u != g) {
        const m = _n(
          c + " " + h + " " + t + u + "," + g,
          n
        );
        d = d && m != o;
      }
    }
    return !!d;
  }
  function l() {
    let c = !0;
    const h = Zt.getKeys();
    for (let u = 0, d = h.length; u < d; ++u) {
      const f = h[u];
      Zt.get(f) < 100 && (a.apply(this, f.split(`
`)) ? (Pi(vs), ke = null, Cs = void 0, Zt.set(f, 100)) : (Zt.set(f, Zt.get(f) + 1, !0), c = !1));
    }
    c && (clearInterval(r), r = void 0);
  }
  return function(c) {
    const h = ya(c);
    if (!h)
      return;
    const u = h.families;
    for (let d = 0, f = u.length; d < f; ++d) {
      const g = u[d], m = h.style + `
` + h.weight + `
` + g;
      Zt.get(m) === void 0 && (Zt.set(m, 100, !0), a(h.style, h.weight, g) || (Zt.set(m, 0, !0), r === void 0 && (r = setInterval(l, 32))));
    }
  };
}(), Oc = function() {
  let s;
  return function(t) {
    let e = vs[t];
    if (e == null) {
      if (Os) {
        const i = ya(t), n = Ca(t, "\u017Dg");
        e = (isNaN(Number(i.lineHeight)) ? 1.2 : Number(i.lineHeight)) * (n.actualBoundingBoxAscent + n.actualBoundingBoxDescent);
      } else
        s || (s = document.createElement("div"), s.innerHTML = "M", s.style.minHeight = "0", s.style.maxHeight = "none", s.style.height = "auto", s.style.padding = "0", s.style.border = "none", s.style.position = "absolute", s.style.display = "block", s.style.left = "-99999px"), s.style.font = t, document.body.appendChild(s), e = s.offsetHeight, document.body.removeChild(s);
      vs[t] = e;
    }
    return e;
  };
}();
function Ca(s, t) {
  return ke || (ke = Mt(1, 1)), s != Cs && (ke.font = s, Cs = ke.font), ke.measureText(t);
}
function _n(s, t) {
  return Ca(s, t).width;
}
function lo(s, t, e) {
  if (t in e)
    return e[t];
  const i = t.split(`
`).reduce((n, r) => Math.max(n, _n(s, r)), 0);
  return e[t] = i, i;
}
function Mc(s, t) {
  const e = [], i = [], n = [];
  let r = 0, o = 0, a = 0, l = 0;
  for (let c = 0, h = t.length; c <= h; c += 2) {
    const u = t[c];
    if (u === `
` || c === h) {
      r = Math.max(r, o), n.push(o), o = 0, a += l;
      continue;
    }
    const d = t[c + 1] || s.font, f = _n(d, u);
    e.push(f), o += f;
    const g = Oc(d);
    i.push(g), l = Math.max(l, g);
  }
  return { width: r, height: a, widths: e, heights: i, lineWidths: n };
}
function Dc(s, t, e, i, n, r, o, a, l, c, h) {
  s.save(), e !== 1 && (s.globalAlpha *= e), t && s.transform.apply(s, t), i.contextInstructions ? (s.translate(l, c), s.scale(h[0], h[1]), Fc(i, s)) : h[0] < 0 || h[1] < 0 ? (s.translate(l, c), s.scale(h[0], h[1]), s.drawImage(
    i,
    n,
    r,
    o,
    a,
    0,
    0,
    o,
    a
  )) : s.drawImage(
    i,
    n,
    r,
    o,
    a,
    l,
    c,
    o * h[0],
    a * h[1]
  ), s.restore();
}
function Fc(s, t) {
  const e = s.contextInstructions;
  for (let i = 0, n = e.length; i < n; i += 2)
    Array.isArray(e[i + 1]) ? t[e[i]].apply(
      t,
      e[i + 1]
    ) : t[e[i]] = e[i + 1];
}
class Pc extends Sc {
  constructor(t) {
    super(t), this.fontChangeListenerKey_ = k(
      Zt,
      Ve.PROPERTYCHANGE,
      t.redrawText.bind(t)
    ), this.element_ = document.createElement("div");
    const e = this.element_.style;
    e.position = "absolute", e.width = "100%", e.height = "100%", e.zIndex = "0", this.element_.className = Dn + " ol-layers";
    const i = t.getViewport();
    i.insertBefore(this.element_, i.firstChild || null), this.children_ = [], this.renderedVisible_ = !0, this.declutterLayers_ = [];
  }
  dispatchRenderEvent(t, e) {
    const i = this.getMap();
    if (i.hasListener(t)) {
      const n = new _a(t, void 0, e);
      i.dispatchEvent(n);
    }
  }
  disposeInternal() {
    Q(this.fontChangeListenerKey_), this.element_.parentNode.removeChild(this.element_), super.disposeInternal();
  }
  renderFrame(t) {
    if (!t) {
      this.renderedVisible_ && (this.element_.style.display = "none", this.renderedVisible_ = !1);
      return;
    }
    this.calculateMatrices2D(t), this.dispatchRenderEvent(Wt.PRECOMPOSE, t);
    const e = t.layerStatesArray.sort(function(o, a) {
      return o.zIndex - a.zIndex;
    }), i = t.viewState;
    this.children_.length = 0;
    const n = this.declutterLayers_;
    n.length = 0;
    let r = null;
    for (let o = 0, a = e.length; o < a; ++o) {
      const l = e[o];
      t.layerIndex = o;
      const c = l.layer, h = c.getSourceState();
      if (!$s(l, i) || h != "ready" && h != "undefined") {
        c.unrender();
        continue;
      }
      const u = c.render(t, r);
      !u || (u !== r && (this.children_.push(u), r = u), "getDeclutter" in c && n.push(
        c
      ));
    }
    this.flushDeclutterItems(t), wc(this.element_, this.children_), this.dispatchRenderEvent(Wt.POSTCOMPOSE, t), this.renderedVisible_ || (this.element_.style.display = "", this.renderedVisible_ = !0), this.scheduleExpireIconCache(t);
  }
  flushDeclutterItems(t) {
    const e = this.declutterLayers_;
    for (let i = e.length - 1; i >= 0; --i)
      e[i].renderDeclutter(t);
    e.length = 0;
  }
}
const Nc = Pc;
class ne extends ge {
  constructor(t, e) {
    super(t), this.layer = e;
  }
}
const $n = {
  LAYERS: "layers"
};
class Qs extends Qo {
  constructor(t) {
    t = t || {};
    const e = Object.assign({}, t);
    delete e.layers;
    let i = t.layers;
    super(e), this.on, this.once, this.un, this.layersListenerKeys_ = [], this.listenerKeys_ = {}, this.addChangeListener($n.LAYERS, this.handleLayersChanged_), i ? Array.isArray(i) ? i = new Lt(i.slice(), { unique: !0 }) : K(
      typeof i.getArray == "function",
      "Expected `layers` to be an array or a `Collection`"
    ) : i = new Lt(void 0, { unique: !0 }), this.setLayers(i);
  }
  handleLayerChange_() {
    this.changed();
  }
  handleLayersChanged_() {
    this.layersListenerKeys_.forEach(Q), this.layersListenerKeys_.length = 0;
    const t = this.getLayers();
    this.layersListenerKeys_.push(
      k(t, ft.ADD, this.handleLayersAdd_, this),
      k(t, ft.REMOVE, this.handleLayersRemove_, this)
    );
    for (const i in this.listenerKeys_)
      this.listenerKeys_[i].forEach(Q);
    Pi(this.listenerKeys_);
    const e = t.getArray();
    for (let i = 0, n = e.length; i < n; i++) {
      const r = e[i];
      this.registerLayerListeners_(r), this.dispatchEvent(new ne("addlayer", r));
    }
    this.changed();
  }
  registerLayerListeners_(t) {
    const e = [
      k(
        t,
        Ve.PROPERTYCHANGE,
        this.handleLayerChange_,
        this
      ),
      k(t, P.CHANGE, this.handleLayerChange_, this)
    ];
    t instanceof Qs && e.push(
      k(t, "addlayer", this.handleLayerGroupAdd_, this),
      k(t, "removelayer", this.handleLayerGroupRemove_, this)
    ), this.listenerKeys_[J(t)] = e;
  }
  handleLayerGroupAdd_(t) {
    this.dispatchEvent(new ne("addlayer", t.layer));
  }
  handleLayerGroupRemove_(t) {
    this.dispatchEvent(new ne("removelayer", t.layer));
  }
  handleLayersAdd_(t) {
    const e = t.element;
    this.registerLayerListeners_(e), this.dispatchEvent(new ne("addlayer", e)), this.changed();
  }
  handleLayersRemove_(t) {
    const e = t.element, i = J(e);
    this.listenerKeys_[i].forEach(Q), delete this.listenerKeys_[i], this.dispatchEvent(new ne("removelayer", e)), this.changed();
  }
  getLayers() {
    return this.get($n.LAYERS);
  }
  setLayers(t) {
    const e = this.getLayers();
    if (e) {
      const i = e.getArray();
      for (let n = 0, r = i.length; n < r; ++n)
        this.dispatchEvent(new ne("removelayer", i[n]));
    }
    this.set($n.LAYERS, t);
  }
  getLayersArray(t) {
    return t = t !== void 0 ? t : [], this.getLayers().forEach(function(e) {
      e.getLayersArray(t);
    }), t;
  }
  getLayerStatesArray(t) {
    const e = t !== void 0 ? t : [], i = e.length;
    this.getLayers().forEach(function(o) {
      o.getLayerStatesArray(e);
    });
    const n = this.getLayerState();
    let r = n.zIndex;
    !t && n.zIndex === void 0 && (r = 0);
    for (let o = i, a = e.length; o < a; o++) {
      const l = e[o];
      l.opacity *= n.opacity, l.visible = l.visible && n.visible, l.maxResolution = Math.min(
        l.maxResolution,
        n.maxResolution
      ), l.minResolution = Math.max(
        l.minResolution,
        n.minResolution
      ), l.minZoom = Math.max(l.minZoom, n.minZoom), l.maxZoom = Math.min(l.maxZoom, n.maxZoom), n.extent !== void 0 && (l.extent !== void 0 ? l.extent = ih(
        l.extent,
        n.extent
      ) : l.extent = n.extent), l.zIndex === void 0 && (l.zIndex = r);
    }
    return e;
  }
  getSourceState() {
    return "ready";
  }
}
const ki = Qs;
class kc extends ge {
  constructor(t, e, i) {
    super(t), this.map = e, this.frameState = i !== void 0 ? i : null;
  }
}
const Be = kc;
class Bc extends Be {
  constructor(t, e, i, n, r, o) {
    super(t, e, r), this.originalEvent = i, this.pixel_ = null, this.coordinate_ = null, this.dragging = n !== void 0 ? n : !1, this.activePointers = o;
  }
  get pixel() {
    return this.pixel_ || (this.pixel_ = this.map.getEventPixel(this.originalEvent)), this.pixel_;
  }
  set pixel(t) {
    this.pixel_ = t;
  }
  get coordinate() {
    return this.coordinate_ || (this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel)), this.coordinate_;
  }
  set coordinate(t) {
    this.coordinate_ = t;
  }
  preventDefault() {
    super.preventDefault(), "preventDefault" in this.originalEvent && this.originalEvent.preventDefault();
  }
  stopPropagation() {
    super.stopPropagation(), "stopPropagation" in this.originalEvent && this.originalEvent.stopPropagation();
  }
}
const ee = Bc, q = {
  SINGLECLICK: "singleclick",
  CLICK: P.CLICK,
  DBLCLICK: P.DBLCLICK,
  POINTERDRAG: "pointerdrag",
  POINTERMOVE: "pointermove",
  POINTERDOWN: "pointerdown",
  POINTERUP: "pointerup",
  POINTEROVER: "pointerover",
  POINTEROUT: "pointerout",
  POINTERENTER: "pointerenter",
  POINTERLEAVE: "pointerleave",
  POINTERCANCEL: "pointercancel"
}, xs = {
  POINTERMOVE: "pointermove",
  POINTERDOWN: "pointerdown",
  POINTERUP: "pointerup",
  POINTEROVER: "pointerover",
  POINTEROUT: "pointerout",
  POINTERENTER: "pointerenter",
  POINTERLEAVE: "pointerleave",
  POINTERCANCEL: "pointercancel"
};
class Gc extends Ls {
  constructor(t, e) {
    super(t), this.map_ = t, this.clickTimeoutId_, this.emulateClicks_ = !1, this.dragging_ = !1, this.dragListenerKeys_ = [], this.moveTolerance_ = e === void 0 ? 1 : e, this.down_ = null;
    const i = this.map_.getViewport();
    this.activePointers_ = [], this.trackedTouches_ = {}, this.element_ = i, this.pointerdownListenerKey_ = k(
      i,
      xs.POINTERDOWN,
      this.handlePointerDown_,
      this
    ), this.originalPointerMoveEvent_, this.relayedListenerKey_ = k(
      i,
      xs.POINTERMOVE,
      this.relayMoveEvent_,
      this
    ), this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this), this.element_.addEventListener(
      P.TOUCHMOVE,
      this.boundHandleTouchMove_,
      zo ? { passive: !1 } : !1
    );
  }
  emulateClick_(t) {
    let e = new ee(
      q.CLICK,
      this.map_,
      t
    );
    this.dispatchEvent(e), this.clickTimeoutId_ !== void 0 ? (clearTimeout(this.clickTimeoutId_), this.clickTimeoutId_ = void 0, e = new ee(
      q.DBLCLICK,
      this.map_,
      t
    ), this.dispatchEvent(e)) : this.clickTimeoutId_ = setTimeout(() => {
      this.clickTimeoutId_ = void 0;
      const i = new ee(
        q.SINGLECLICK,
        this.map_,
        t
      );
      this.dispatchEvent(i);
    }, 250);
  }
  updateActivePointers_(t) {
    const e = t, i = e.pointerId;
    if (e.type == q.POINTERUP || e.type == q.POINTERCANCEL) {
      delete this.trackedTouches_[i];
      for (const n in this.trackedTouches_)
        if (this.trackedTouches_[n].target !== e.target) {
          delete this.trackedTouches_[n];
          break;
        }
    } else
      (e.type == q.POINTERDOWN || e.type == q.POINTERMOVE) && (this.trackedTouches_[i] = e);
    this.activePointers_ = Object.values(this.trackedTouches_);
  }
  handlePointerUp_(t) {
    this.updateActivePointers_(t);
    const e = new ee(
      q.POINTERUP,
      this.map_,
      t,
      void 0,
      void 0,
      this.activePointers_
    );
    this.dispatchEvent(e), this.emulateClicks_ && !e.defaultPrevented && !this.dragging_ && this.isMouseActionButton_(t) && this.emulateClick_(this.down_), this.activePointers_.length === 0 && (this.dragListenerKeys_.forEach(Q), this.dragListenerKeys_.length = 0, this.dragging_ = !1, this.down_ = null);
  }
  isMouseActionButton_(t) {
    return t.button === 0;
  }
  handlePointerDown_(t) {
    this.emulateClicks_ = this.activePointers_.length === 0, this.updateActivePointers_(t);
    const e = new ee(
      q.POINTERDOWN,
      this.map_,
      t,
      void 0,
      void 0,
      this.activePointers_
    );
    if (this.dispatchEvent(e), this.down_ = new PointerEvent(t.type, t), Object.defineProperty(this.down_, "target", {
      writable: !1,
      value: t.target
    }), this.dragListenerKeys_.length === 0) {
      const i = this.map_.getOwnerDocument();
      this.dragListenerKeys_.push(
        k(
          i,
          q.POINTERMOVE,
          this.handlePointerMove_,
          this
        ),
        k(i, q.POINTERUP, this.handlePointerUp_, this),
        k(
          this.element_,
          q.POINTERCANCEL,
          this.handlePointerUp_,
          this
        )
      ), this.element_.getRootNode && this.element_.getRootNode() !== i && this.dragListenerKeys_.push(
        k(
          this.element_.getRootNode(),
          q.POINTERUP,
          this.handlePointerUp_,
          this
        )
      );
    }
  }
  handlePointerMove_(t) {
    if (this.isMoving_(t)) {
      this.updateActivePointers_(t), this.dragging_ = !0;
      const e = new ee(
        q.POINTERDRAG,
        this.map_,
        t,
        this.dragging_,
        void 0,
        this.activePointers_
      );
      this.dispatchEvent(e);
    }
  }
  relayMoveEvent_(t) {
    this.originalPointerMoveEvent_ = t;
    const e = !!(this.down_ && this.isMoving_(t));
    this.dispatchEvent(
      new ee(
        q.POINTERMOVE,
        this.map_,
        t,
        e
      )
    );
  }
  handleTouchMove_(t) {
    const e = this.originalPointerMoveEvent_;
    (!e || e.defaultPrevented) && (typeof t.cancelable != "boolean" || t.cancelable === !0) && t.preventDefault();
  }
  isMoving_(t) {
    return this.dragging_ || Math.abs(t.clientX - this.down_.clientX) > this.moveTolerance_ || Math.abs(t.clientY - this.down_.clientY) > this.moveTolerance_;
  }
  disposeInternal() {
    this.relayedListenerKey_ && (Q(this.relayedListenerKey_), this.relayedListenerKey_ = null), this.element_.removeEventListener(
      P.TOUCHMOVE,
      this.boundHandleTouchMove_
    ), this.pointerdownListenerKey_ && (Q(this.pointerdownListenerKey_), this.pointerdownListenerKey_ = null), this.dragListenerKeys_.forEach(Q), this.dragListenerKeys_.length = 0, this.element_ = null, super.disposeInternal();
  }
}
const Wc = Gc, ie = {
  POSTRENDER: "postrender",
  MOVESTART: "movestart",
  MOVEEND: "moveend",
  LOADSTART: "loadstart",
  LOADEND: "loadend"
}, st = {
  LAYERGROUP: "layergroup",
  SIZE: "size",
  TARGET: "target",
  VIEW: "view"
}, yn = 1 / 0;
class zc {
  constructor(t, e) {
    this.priorityFunction_ = t, this.keyFunction_ = e, this.elements_ = [], this.priorities_ = [], this.queuedElements_ = {};
  }
  clear() {
    this.elements_.length = 0, this.priorities_.length = 0, Pi(this.queuedElements_);
  }
  dequeue() {
    const t = this.elements_, e = this.priorities_, i = t[0];
    t.length == 1 ? (t.length = 0, e.length = 0) : (t[0] = t.pop(), e[0] = e.pop(), this.siftUp_(0));
    const n = this.keyFunction_(i);
    return delete this.queuedElements_[n], i;
  }
  enqueue(t) {
    K(
      !(this.keyFunction_(t) in this.queuedElements_),
      "Tried to enqueue an `element` that was already added to the queue"
    );
    const e = this.priorityFunction_(t);
    return e != yn ? (this.elements_.push(t), this.priorities_.push(e), this.queuedElements_[this.keyFunction_(t)] = !0, this.siftDown_(0, this.elements_.length - 1), !0) : !1;
  }
  getCount() {
    return this.elements_.length;
  }
  getLeftChildIndex_(t) {
    return t * 2 + 1;
  }
  getRightChildIndex_(t) {
    return t * 2 + 2;
  }
  getParentIndex_(t) {
    return t - 1 >> 1;
  }
  heapify_() {
    let t;
    for (t = (this.elements_.length >> 1) - 1; t >= 0; t--)
      this.siftUp_(t);
  }
  isEmpty() {
    return this.elements_.length === 0;
  }
  isKeyQueued(t) {
    return t in this.queuedElements_;
  }
  isQueued(t) {
    return this.isKeyQueued(this.keyFunction_(t));
  }
  siftUp_(t) {
    const e = this.elements_, i = this.priorities_, n = e.length, r = e[t], o = i[t], a = t;
    for (; t < n >> 1; ) {
      const l = this.getLeftChildIndex_(t), c = this.getRightChildIndex_(t), h = c < n && i[c] < i[l] ? c : l;
      e[t] = e[h], i[t] = i[h], t = h;
    }
    e[t] = r, i[t] = o, this.siftDown_(a, t);
  }
  siftDown_(t, e) {
    const i = this.elements_, n = this.priorities_, r = i[e], o = n[e];
    for (; e > t; ) {
      const a = this.getParentIndex_(e);
      if (n[a] > o)
        i[e] = i[a], n[e] = n[a], e = a;
      else
        break;
    }
    i[e] = r, n[e] = o;
  }
  reprioritize() {
    const t = this.priorityFunction_, e = this.elements_, i = this.priorities_;
    let n = 0;
    const r = e.length;
    let o, a, l;
    for (a = 0; a < r; ++a)
      o = e[a], l = t(o), l == yn ? delete this.queuedElements_[this.keyFunction_(o)] : (i[n] = l, e[n++] = o);
    e.length = n, i.length = n, this.heapify_();
  }
}
const Hc = zc, hi = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3,
  EMPTY: 4
};
class Xc extends Hc {
  constructor(t, e) {
    super(
      function(i) {
        return t.apply(null, i);
      },
      function(i) {
        return i[0].getKey();
      }
    ), this.boundHandleTileChange_ = this.handleTileChange.bind(this), this.tileChangeCallback_ = e, this.tilesLoading_ = 0, this.tilesLoadingKeys_ = {};
  }
  enqueue(t) {
    const e = super.enqueue(t);
    return e && t[0].addEventListener(P.CHANGE, this.boundHandleTileChange_), e;
  }
  getTilesLoading() {
    return this.tilesLoading_;
  }
  handleTileChange(t) {
    const e = t.target, i = e.getState();
    if (i === hi.LOADED || i === hi.ERROR || i === hi.EMPTY) {
      i !== hi.ERROR && e.removeEventListener(P.CHANGE, this.boundHandleTileChange_);
      const n = e.getKey();
      n in this.tilesLoadingKeys_ && (delete this.tilesLoadingKeys_[n], --this.tilesLoading_), this.tileChangeCallback_();
    }
  }
  loadMoreTiles(t, e) {
    let i = 0, n, r, o;
    for (; this.tilesLoading_ < t && i < e && this.getCount() > 0; )
      r = this.dequeue()[0], o = r.getKey(), n = r.getState(), n === hi.IDLE && !(o in this.tilesLoadingKeys_) && (this.tilesLoadingKeys_[o] = !0, ++this.tilesLoading_, ++i, r.load());
  }
}
const Uc = Xc;
function Vc(s, t, e, i, n) {
  if (!s || !(e in s.wantedTiles) || !s.wantedTiles[e][t.getKey()])
    return yn;
  const r = s.viewState.center, o = i[0] - r[0], a = i[1] - r[1];
  return 65536 * Math.log(n) + Math.sqrt(o * o + a * a) / n;
}
class Yc extends zt {
  constructor(t) {
    super();
    const e = t.element;
    e && !t.target && !e.style.pointerEvents && (e.style.pointerEvents = "auto"), this.element = e || null, this.target_ = null, this.map_ = null, this.listenerKeys = [], t.render && (this.render = t.render), t.target && this.setTarget(t.target);
  }
  disposeInternal() {
    Es(this.element), super.disposeInternal();
  }
  getMap() {
    return this.map_;
  }
  setMap(t) {
    this.map_ && Es(this.element);
    for (let e = 0, i = this.listenerKeys.length; e < i; ++e)
      Q(this.listenerKeys[e]);
    this.listenerKeys.length = 0, this.map_ = t, t && ((this.target_ ? this.target_ : t.getOverlayContainerStopEvent()).appendChild(this.element), this.render !== Ke && this.listenerKeys.push(
      k(t, ie.POSTRENDER, this.render, this)
    ), t.render());
  }
  render(t) {
  }
  setTarget(t) {
    this.target_ = typeof t == "string" ? document.getElementById(t) : t;
  }
}
const tr = Yc;
class Kc extends tr {
  constructor(t) {
    t = t || {}, super({
      element: document.createElement("div"),
      render: t.render,
      target: t.target
    }), this.ulElement_ = document.createElement("ul"), this.collapsed_ = t.collapsed !== void 0 ? t.collapsed : !0, this.userCollapsed_ = this.collapsed_, this.overrideCollapsible_ = t.collapsible !== void 0, this.collapsible_ = t.collapsible !== void 0 ? t.collapsible : !0, this.collapsible_ || (this.collapsed_ = !1);
    const e = t.className !== void 0 ? t.className : "ol-attribution", i = t.tipLabel !== void 0 ? t.tipLabel : "Attributions", n = t.expandClassName !== void 0 ? t.expandClassName : e + "-expand", r = t.collapseLabel !== void 0 ? t.collapseLabel : "\u203A", o = t.collapseClassName !== void 0 ? t.collapseClassName : e + "-collapse";
    typeof r == "string" ? (this.collapseLabel_ = document.createElement("span"), this.collapseLabel_.textContent = r, this.collapseLabel_.className = o) : this.collapseLabel_ = r;
    const a = t.label !== void 0 ? t.label : "i";
    typeof a == "string" ? (this.label_ = document.createElement("span"), this.label_.textContent = a, this.label_.className = n) : this.label_ = a;
    const l = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
    this.toggleButton_ = document.createElement("button"), this.toggleButton_.setAttribute("type", "button"), this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_)), this.toggleButton_.title = i, this.toggleButton_.appendChild(l), this.toggleButton_.addEventListener(
      P.CLICK,
      this.handleClick_.bind(this),
      !1
    );
    const c = e + " " + Dn + " " + Js + (this.collapsed_ && this.collapsible_ ? " " + ro : "") + (this.collapsible_ ? "" : " ol-uncollapsible"), h = this.element;
    h.className = c, h.appendChild(this.toggleButton_), h.appendChild(this.ulElement_), this.renderedAttributions_ = [], this.renderedVisible_ = !0;
  }
  collectSourceAttributions_(t) {
    const e = Array.from(
      new Set(
        this.getMap().getAllLayers().flatMap((n) => n.getAttributions(t))
      )
    ), i = !this.getMap().getAllLayers().some(
      (n) => n.getSource() && n.getSource().getAttributionsCollapsible() === !1
    );
    return this.overrideCollapsible_ || this.setCollapsible(i), e;
  }
  updateElement_(t) {
    if (!t) {
      this.renderedVisible_ && (this.element.style.display = "none", this.renderedVisible_ = !1);
      return;
    }
    const e = this.collectSourceAttributions_(t), i = e.length > 0;
    if (this.renderedVisible_ != i && (this.element.style.display = i ? "" : "none", this.renderedVisible_ = i), !me(e, this.renderedAttributions_)) {
      Tc(this.ulElement_);
      for (let n = 0, r = e.length; n < r; ++n) {
        const o = document.createElement("li");
        o.innerHTML = e[n], this.ulElement_.appendChild(o);
      }
      this.renderedAttributions_ = e;
    }
  }
  handleClick_(t) {
    t.preventDefault(), this.handleToggle_(), this.userCollapsed_ = this.collapsed_;
  }
  handleToggle_() {
    this.element.classList.toggle(ro), this.collapsed_ ? ao(this.collapseLabel_, this.label_) : ao(this.label_, this.collapseLabel_), this.collapsed_ = !this.collapsed_, this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_));
  }
  getCollapsible() {
    return this.collapsible_;
  }
  setCollapsible(t) {
    this.collapsible_ !== t && (this.collapsible_ = t, this.element.classList.toggle("ol-uncollapsible"), this.userCollapsed_ && this.handleToggle_());
  }
  setCollapsed(t) {
    this.userCollapsed_ = t, !(!this.collapsible_ || this.collapsed_ === t) && this.handleToggle_();
  }
  getCollapsed() {
    return this.collapsed_;
  }
  render(t) {
    this.updateElement_(t.frameState);
  }
}
const Zc = Kc;
class jc extends tr {
  constructor(t) {
    t = t || {}, super({
      element: document.createElement("div"),
      render: t.render,
      target: t.target
    });
    const e = t.className !== void 0 ? t.className : "ol-rotate", i = t.label !== void 0 ? t.label : "\u21E7", n = t.compassClassName !== void 0 ? t.compassClassName : "ol-compass";
    this.label_ = null, typeof i == "string" ? (this.label_ = document.createElement("span"), this.label_.className = n, this.label_.textContent = i) : (this.label_ = i, this.label_.classList.add(n));
    const r = t.tipLabel ? t.tipLabel : "Reset rotation", o = document.createElement("button");
    o.className = e + "-reset", o.setAttribute("type", "button"), o.title = r, o.appendChild(this.label_), o.addEventListener(
      P.CLICK,
      this.handleClick_.bind(this),
      !1
    );
    const a = e + " " + Dn + " " + Js, l = this.element;
    l.className = a, l.appendChild(o), this.callResetNorth_ = t.resetNorth ? t.resetNorth : void 0, this.duration_ = t.duration !== void 0 ? t.duration : 250, this.autoHide_ = t.autoHide !== void 0 ? t.autoHide : !0, this.rotation_ = void 0, this.autoHide_ && this.element.classList.add(nn);
  }
  handleClick_(t) {
    t.preventDefault(), this.callResetNorth_ !== void 0 ? this.callResetNorth_() : this.resetNorth_();
  }
  resetNorth_() {
    const e = this.getMap().getView();
    if (!e)
      return;
    const i = e.getRotation();
    i !== void 0 && (this.duration_ > 0 && i % (2 * Math.PI) !== 0 ? e.animate({
      rotation: 0,
      duration: this.duration_,
      easing: ti
    }) : e.setRotation(0));
  }
  render(t) {
    const e = t.frameState;
    if (!e)
      return;
    const i = e.viewState.rotation;
    if (i != this.rotation_) {
      const n = "rotate(" + i + "rad)";
      if (this.autoHide_) {
        const r = this.element.classList.contains(nn);
        !r && i === 0 ? this.element.classList.add(nn) : r && i !== 0 && this.element.classList.remove(nn);
      }
      this.label_.style.transform = n;
    }
    this.rotation_ = i;
  }
}
const qc = jc;
class $c extends tr {
  constructor(t) {
    t = t || {}, super({
      element: document.createElement("div"),
      target: t.target
    });
    const e = t.className !== void 0 ? t.className : "ol-zoom", i = t.delta !== void 0 ? t.delta : 1, n = t.zoomInClassName !== void 0 ? t.zoomInClassName : e + "-in", r = t.zoomOutClassName !== void 0 ? t.zoomOutClassName : e + "-out", o = t.zoomInLabel !== void 0 ? t.zoomInLabel : "+", a = t.zoomOutLabel !== void 0 ? t.zoomOutLabel : "\u2013", l = t.zoomInTipLabel !== void 0 ? t.zoomInTipLabel : "Zoom in", c = t.zoomOutTipLabel !== void 0 ? t.zoomOutTipLabel : "Zoom out", h = document.createElement("button");
    h.className = n, h.setAttribute("type", "button"), h.title = l, h.appendChild(
      typeof o == "string" ? document.createTextNode(o) : o
    ), h.addEventListener(
      P.CLICK,
      this.handleClick_.bind(this, i),
      !1
    );
    const u = document.createElement("button");
    u.className = r, u.setAttribute("type", "button"), u.title = c, u.appendChild(
      typeof a == "string" ? document.createTextNode(a) : a
    ), u.addEventListener(
      P.CLICK,
      this.handleClick_.bind(this, -i),
      !1
    );
    const d = e + " " + Dn + " " + Js, f = this.element;
    f.className = d, f.appendChild(h), f.appendChild(u), this.duration_ = t.duration !== void 0 ? t.duration : 250;
  }
  handleClick_(t, e) {
    e.preventDefault(), this.zoomByDelta_(t);
  }
  zoomByDelta_(t) {
    const i = this.getMap().getView();
    if (!i)
      return;
    const n = i.getZoom();
    if (n !== void 0) {
      const r = i.getConstrainedZoom(n + t);
      this.duration_ > 0 ? (i.getAnimating() && i.cancelAnimations(), i.animate({
        zoom: r,
        duration: this.duration_,
        easing: ti
      })) : i.setZoom(r);
    }
  }
}
const Jc = $c;
function Qc(s) {
  s = s || {};
  const t = new Lt();
  return (s.zoom !== void 0 ? s.zoom : !0) && t.push(new Jc(s.zoomOptions)), (s.rotate !== void 0 ? s.rotate : !0) && t.push(new qc(s.rotateOptions)), (s.attribution !== void 0 ? s.attribution : !0) && t.push(new Zc(s.attributionOptions)), t;
}
const ho = {
  ACTIVE: "active"
};
class tu extends zt {
  constructor(t) {
    super(), this.on, this.once, this.un, t && t.handleEvent && (this.handleEvent = t.handleEvent), this.map_ = null, this.setActive(!0);
  }
  getActive() {
    return this.get(ho.ACTIVE);
  }
  getMap() {
    return this.map_;
  }
  handleEvent(t) {
    return !0;
  }
  setActive(t) {
    this.set(ho.ACTIVE, t);
  }
  setMap(t) {
    this.map_ = t;
  }
}
function eu(s, t, e) {
  const i = s.getCenterInternal();
  if (i) {
    const n = [i[0] + t[0], i[1] + t[1]];
    s.animateInternal({
      duration: e !== void 0 ? e : 250,
      easing: Yh,
      center: s.getConstrainedCenter(n)
    });
  }
}
function er(s, t, e, i) {
  const n = s.getZoom();
  if (n === void 0)
    return;
  const r = s.getConstrainedZoom(n + t), o = s.getResolutionForZoom(r);
  s.getAnimating() && s.cancelAnimations(), s.animate({
    resolution: o,
    anchor: e,
    duration: i !== void 0 ? i : 250,
    easing: ti
  });
}
const Bi = tu;
class iu extends Bi {
  constructor(t) {
    super(), t = t || {}, this.delta_ = t.delta ? t.delta : 1, this.duration_ = t.duration !== void 0 ? t.duration : 250;
  }
  handleEvent(t) {
    let e = !1;
    if (t.type == q.DBLCLICK) {
      const i = t.originalEvent, n = t.map, r = t.coordinate, o = i.shiftKey ? -this.delta_ : this.delta_, a = n.getView();
      er(a, o, r, this.duration_), i.preventDefault(), e = !0;
    }
    return !e;
  }
}
const nu = iu;
class su extends Bi {
  constructor(t) {
    t = t || {}, super(
      t
    ), t.handleDownEvent && (this.handleDownEvent = t.handleDownEvent), t.handleDragEvent && (this.handleDragEvent = t.handleDragEvent), t.handleMoveEvent && (this.handleMoveEvent = t.handleMoveEvent), t.handleUpEvent && (this.handleUpEvent = t.handleUpEvent), t.stopDown && (this.stopDown = t.stopDown), this.handlingDownUpSequence = !1, this.targetPointers = [];
  }
  getPointerCount() {
    return this.targetPointers.length;
  }
  handleDownEvent(t) {
    return !1;
  }
  handleDragEvent(t) {
  }
  handleEvent(t) {
    if (!t.originalEvent)
      return !0;
    let e = !1;
    if (this.updateTrackedPointers_(t), this.handlingDownUpSequence) {
      if (t.type == q.POINTERDRAG)
        this.handleDragEvent(t), t.originalEvent.preventDefault();
      else if (t.type == q.POINTERUP) {
        const i = this.handleUpEvent(t);
        this.handlingDownUpSequence = i && this.targetPointers.length > 0;
      }
    } else if (t.type == q.POINTERDOWN) {
      const i = this.handleDownEvent(t);
      this.handlingDownUpSequence = i, e = this.stopDown(i);
    } else
      t.type == q.POINTERMOVE && this.handleMoveEvent(t);
    return !e;
  }
  handleMoveEvent(t) {
  }
  handleUpEvent(t) {
    return !1;
  }
  stopDown(t) {
    return t;
  }
  updateTrackedPointers_(t) {
    t.activePointers && (this.targetPointers = t.activePointers);
  }
}
function ir(s) {
  const t = s.length;
  let e = 0, i = 0;
  for (let n = 0; n < t; n++)
    e += s[n].clientX, i += s[n].clientY;
  return { clientX: e / t, clientY: i / t };
}
const Gi = su;
function Is(s) {
  const t = arguments;
  return function(e) {
    let i = !0;
    for (let n = 0, r = t.length; n < r && (i = i && t[n](e), !!i); ++n)
      ;
    return i;
  };
}
const ru = function(s) {
  const t = s.originalEvent;
  return t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey;
}, ou = function(s) {
  const t = s.map.getTargetElement(), e = s.map.getOwnerDocument().activeElement;
  return t.contains(e);
}, va = function(s) {
  return s.map.getTargetElement().hasAttribute("tabindex") ? ou(s) : !0;
}, au = xi, xa = function(s) {
  const t = s.originalEvent;
  return t.button == 0 && !(Ul && Go && t.ctrlKey);
}, Ia = function(s) {
  const t = s.originalEvent;
  return !t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey;
}, lu = function(s) {
  const t = s.originalEvent;
  return Go ? t.metaKey : t.ctrlKey;
}, hu = function(s) {
  const t = s.originalEvent;
  return !t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey;
}, Sa = function(s) {
  const t = s.originalEvent, e = t.target.tagName;
  return e !== "INPUT" && e !== "SELECT" && e !== "TEXTAREA" && !t.target.isContentEditable;
}, Jn = function(s) {
  const t = s.originalEvent;
  return K(
    t !== void 0,
    "mapBrowserEvent must originate from a pointer event"
  ), t.pointerType == "mouse";
}, cu = function(s) {
  const t = s.originalEvent;
  return K(
    t !== void 0,
    "mapBrowserEvent must originate from a pointer event"
  ), t.isPrimary && t.button === 0;
};
class uu extends Gi {
  constructor(t) {
    super({
      stopDown: bn
    }), t = t || {}, this.kinetic_ = t.kinetic, this.lastCentroid = null, this.lastPointersCount_, this.panning_ = !1;
    const e = t.condition ? t.condition : Is(Ia, cu);
    this.condition_ = t.onFocusOnly ? Is(va, e) : e, this.noKinetic_ = !1;
  }
  handleDragEvent(t) {
    const e = t.map;
    this.panning_ || (this.panning_ = !0, e.getView().beginInteraction());
    const i = this.targetPointers, n = e.getEventPixel(ir(i));
    if (i.length == this.lastPointersCount_) {
      if (this.kinetic_ && this.kinetic_.update(n[0], n[1]), this.lastCentroid) {
        const r = [
          this.lastCentroid[0] - n[0],
          n[1] - this.lastCentroid[1]
        ], a = t.map.getView();
        Th(r, a.getResolution()), Ns(r, a.getRotation()), a.adjustCenterInternal(r);
      }
    } else
      this.kinetic_ && this.kinetic_.begin();
    this.lastCentroid = n, this.lastPointersCount_ = i.length, t.originalEvent.preventDefault();
  }
  handleUpEvent(t) {
    const e = t.map, i = e.getView();
    if (this.targetPointers.length === 0) {
      if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
        const n = this.kinetic_.getDistance(), r = this.kinetic_.getAngle(), o = i.getCenterInternal(), a = e.getPixelFromCoordinateInternal(o), l = e.getCoordinateFromPixelInternal([
          a[0] - n * Math.cos(r),
          a[1] - n * Math.sin(r)
        ]);
        i.animateInternal({
          center: i.getConstrainedCenter(l),
          duration: 500,
          easing: ti
        });
      }
      return this.panning_ && (this.panning_ = !1, i.endInteraction()), !1;
    }
    return this.kinetic_ && this.kinetic_.begin(), this.lastCentroid = null, !0;
  }
  handleDownEvent(t) {
    if (this.targetPointers.length > 0 && this.condition_(t)) {
      const i = t.map.getView();
      return this.lastCentroid = null, i.getAnimating() && i.cancelAnimations(), this.kinetic_ && this.kinetic_.begin(), this.noKinetic_ = this.targetPointers.length > 1, !0;
    }
    return !1;
  }
}
const du = uu;
class fu extends Gi {
  constructor(t) {
    t = t || {}, super({
      stopDown: bn
    }), this.condition_ = t.condition ? t.condition : ru, this.lastAngle_ = void 0, this.duration_ = t.duration !== void 0 ? t.duration : 250;
  }
  handleDragEvent(t) {
    if (!Jn(t))
      return;
    const e = t.map, i = e.getView();
    if (i.getConstraints().rotation === Ws)
      return;
    const n = e.getSize(), r = t.pixel, o = Math.atan2(n[1] / 2 - r[1], r[0] - n[0] / 2);
    if (this.lastAngle_ !== void 0) {
      const a = o - this.lastAngle_;
      i.adjustRotationInternal(-a);
    }
    this.lastAngle_ = o;
  }
  handleUpEvent(t) {
    return Jn(t) ? (t.map.getView().endInteraction(this.duration_), !1) : !0;
  }
  handleDownEvent(t) {
    return Jn(t) && xa(t) && this.condition_(t) ? (t.map.getView().beginInteraction(), this.lastAngle_ = void 0, !0) : !1;
  }
}
const gu = fu;
class mu extends ws {
  constructor(t) {
    super(), this.geometry_ = null, this.element_ = document.createElement("div"), this.element_.style.position = "absolute", this.element_.style.pointerEvents = "auto", this.element_.className = "ol-box " + t, this.map_ = null, this.startPixel_ = null, this.endPixel_ = null;
  }
  disposeInternal() {
    this.setMap(null);
  }
  render_() {
    const t = this.startPixel_, e = this.endPixel_, i = "px", n = this.element_.style;
    n.left = Math.min(t[0], e[0]) + i, n.top = Math.min(t[1], e[1]) + i, n.width = Math.abs(e[0] - t[0]) + i, n.height = Math.abs(e[1] - t[1]) + i;
  }
  setMap(t) {
    if (this.map_) {
      this.map_.getOverlayContainer().removeChild(this.element_);
      const e = this.element_.style;
      e.left = "inherit", e.top = "inherit", e.width = "inherit", e.height = "inherit";
    }
    this.map_ = t, this.map_ && this.map_.getOverlayContainer().appendChild(this.element_);
  }
  setPixels(t, e) {
    this.startPixel_ = t, this.endPixel_ = e, this.createOrUpdateGeometry(), this.render_();
  }
  createOrUpdateGeometry() {
    const t = this.startPixel_, e = this.endPixel_, n = [
      t,
      [t[0], e[1]],
      e,
      [e[0], t[1]]
    ].map(
      this.map_.getCoordinateFromPixelInternal,
      this.map_
    );
    n[4] = n[0].slice(), this.geometry_ ? this.geometry_.setCoordinates([n]) : this.geometry_ = new de([n]);
  }
  getGeometry() {
    return this.geometry_;
  }
}
const pu = mu, sn = {
  BOXSTART: "boxstart",
  BOXDRAG: "boxdrag",
  BOXEND: "boxend",
  BOXCANCEL: "boxcancel"
};
class Qn extends ge {
  constructor(t, e, i) {
    super(t), this.coordinate = e, this.mapBrowserEvent = i;
  }
}
class _u extends Gi {
  constructor(t) {
    super(), this.on, this.once, this.un, t = t || {}, this.box_ = new pu(t.className || "ol-dragbox"), this.minArea_ = t.minArea !== void 0 ? t.minArea : 64, t.onBoxEnd && (this.onBoxEnd = t.onBoxEnd), this.startPixel_ = null, this.condition_ = t.condition ? t.condition : xa, this.boxEndCondition_ = t.boxEndCondition ? t.boxEndCondition : this.defaultBoxEndCondition;
  }
  defaultBoxEndCondition(t, e, i) {
    const n = i[0] - e[0], r = i[1] - e[1];
    return n * n + r * r >= this.minArea_;
  }
  getGeometry() {
    return this.box_.getGeometry();
  }
  handleDragEvent(t) {
    this.box_.setPixels(this.startPixel_, t.pixel), this.dispatchEvent(
      new Qn(
        sn.BOXDRAG,
        t.coordinate,
        t
      )
    );
  }
  handleUpEvent(t) {
    this.box_.setMap(null);
    const e = this.boxEndCondition_(
      t,
      this.startPixel_,
      t.pixel
    );
    return e && this.onBoxEnd(t), this.dispatchEvent(
      new Qn(
        e ? sn.BOXEND : sn.BOXCANCEL,
        t.coordinate,
        t
      )
    ), !1;
  }
  handleDownEvent(t) {
    return this.condition_(t) ? (this.startPixel_ = t.pixel, this.box_.setMap(t.map), this.box_.setPixels(this.startPixel_, this.startPixel_), this.dispatchEvent(
      new Qn(
        sn.BOXSTART,
        t.coordinate,
        t
      )
    ), !0) : !1;
  }
  onBoxEnd(t) {
  }
}
const yu = _u;
class Eu extends yu {
  constructor(t) {
    t = t || {};
    const e = t.condition ? t.condition : hu;
    super({
      condition: e,
      className: t.className || "ol-dragzoom",
      minArea: t.minArea
    }), this.duration_ = t.duration !== void 0 ? t.duration : 200, this.out_ = t.out !== void 0 ? t.out : !1;
  }
  onBoxEnd(t) {
    const i = this.getMap().getView();
    let n = this.getGeometry();
    if (this.out_) {
      const r = i.rotatedExtentForGeometry(n), o = i.getResolutionForExtentInternal(r), a = i.getResolution() / o;
      n = n.clone(), n.scale(a * a);
    }
    i.fitInternal(n, {
      duration: this.duration_,
      easing: ti
    });
  }
}
const Cu = Eu, ye = {
  LEFT: "ArrowLeft",
  UP: "ArrowUp",
  RIGHT: "ArrowRight",
  DOWN: "ArrowDown"
};
class vu extends Bi {
  constructor(t) {
    super(), t = t || {}, this.defaultCondition_ = function(e) {
      return Ia(e) && Sa(e);
    }, this.condition_ = t.condition !== void 0 ? t.condition : this.defaultCondition_, this.duration_ = t.duration !== void 0 ? t.duration : 100, this.pixelDelta_ = t.pixelDelta !== void 0 ? t.pixelDelta : 128;
  }
  handleEvent(t) {
    let e = !1;
    if (t.type == P.KEYDOWN) {
      const i = t.originalEvent, n = i.key;
      if (this.condition_(t) && (n == ye.DOWN || n == ye.LEFT || n == ye.RIGHT || n == ye.UP)) {
        const o = t.map.getView(), a = o.getResolution() * this.pixelDelta_;
        let l = 0, c = 0;
        n == ye.DOWN ? c = -a : n == ye.LEFT ? l = -a : n == ye.RIGHT ? l = a : c = a;
        const h = [l, c];
        Ns(h, o.getRotation()), eu(o, h, this.duration_), i.preventDefault(), e = !0;
      }
    }
    return !e;
  }
}
const xu = vu;
class Iu extends Bi {
  constructor(t) {
    super(), t = t || {}, this.condition_ = t.condition ? t.condition : function(e) {
      return !lu(e) && Sa(e);
    }, this.delta_ = t.delta ? t.delta : 1, this.duration_ = t.duration !== void 0 ? t.duration : 100;
  }
  handleEvent(t) {
    let e = !1;
    if (t.type == P.KEYDOWN || t.type == P.KEYPRESS) {
      const i = t.originalEvent, n = i.key;
      if (this.condition_(t) && (n === "+" || n === "-")) {
        const r = t.map, o = n === "+" ? this.delta_ : -this.delta_, a = r.getView();
        er(a, o, void 0, this.duration_), i.preventDefault(), e = !0;
      }
    }
    return !e;
  }
}
const Su = Iu;
class Ru {
  constructor(t, e, i) {
    this.decay_ = t, this.minVelocity_ = e, this.delay_ = i, this.points_ = [], this.angle_ = 0, this.initialVelocity_ = 0;
  }
  begin() {
    this.points_.length = 0, this.angle_ = 0, this.initialVelocity_ = 0;
  }
  update(t, e) {
    this.points_.push(t, e, Date.now());
  }
  end() {
    if (this.points_.length < 6)
      return !1;
    const t = Date.now() - this.delay_, e = this.points_.length - 3;
    if (this.points_[e + 2] < t)
      return !1;
    let i = e - 3;
    for (; i > 0 && this.points_[i + 2] > t; )
      i -= 3;
    const n = this.points_[e + 2] - this.points_[i + 2];
    if (n < 1e3 / 60)
      return !1;
    const r = this.points_[e] - this.points_[i], o = this.points_[e + 1] - this.points_[i + 1];
    return this.angle_ = Math.atan2(o, r), this.initialVelocity_ = Math.sqrt(r * r + o * o) / n, this.initialVelocity_ > this.minVelocity_;
  }
  getDistance() {
    return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
  }
  getAngle() {
    return this.angle_;
  }
}
const Au = Ru;
class bu extends Bi {
  constructor(t) {
    t = t || {}, super(
      t
    ), this.totalDelta_ = 0, this.lastDelta_ = 0, this.maxDelta_ = t.maxDelta !== void 0 ? t.maxDelta : 1, this.duration_ = t.duration !== void 0 ? t.duration : 250, this.timeout_ = t.timeout !== void 0 ? t.timeout : 80, this.useAnchor_ = t.useAnchor !== void 0 ? t.useAnchor : !0, this.constrainResolution_ = t.constrainResolution !== void 0 ? t.constrainResolution : !1;
    const e = t.condition ? t.condition : au;
    this.condition_ = t.onFocusOnly ? Is(va, e) : e, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_, this.mode_ = void 0, this.trackpadEventGap_ = 400, this.trackpadTimeoutId_, this.deltaPerZoom_ = 300;
  }
  endInteraction_() {
    this.trackpadTimeoutId_ = void 0;
    const t = this.getMap();
    if (!t)
      return;
    t.getView().endInteraction(
      void 0,
      this.lastDelta_ ? this.lastDelta_ > 0 ? 1 : -1 : 0,
      this.lastAnchor_
    );
  }
  handleEvent(t) {
    if (!this.condition_(t) || t.type !== P.WHEEL)
      return !0;
    const i = t.map, n = t.originalEvent;
    n.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = t.coordinate);
    let r;
    if (t.type == P.WHEEL && (r = n.deltaY, Hl && n.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (r /= Wo), n.deltaMode === WheelEvent.DOM_DELTA_LINE && (r *= 40)), r === 0)
      return !1;
    this.lastDelta_ = r;
    const o = Date.now();
    this.startTime_ === void 0 && (this.startTime_ = o), (!this.mode_ || o - this.startTime_ > this.trackpadEventGap_) && (this.mode_ = Math.abs(r) < 4 ? "trackpad" : "wheel");
    const a = i.getView();
    if (this.mode_ === "trackpad" && !(a.getConstrainResolution() || this.constrainResolution_))
      return this.trackpadTimeoutId_ ? clearTimeout(this.trackpadTimeoutId_) : (a.getAnimating() && a.cancelAnimations(), a.beginInteraction()), this.trackpadTimeoutId_ = setTimeout(
        this.endInteraction_.bind(this),
        this.timeout_
      ), a.adjustZoom(-r / this.deltaPerZoom_, this.lastAnchor_), this.startTime_ = o, !1;
    this.totalDelta_ += r;
    const l = Math.max(this.timeout_ - (o - this.startTime_), 0);
    return clearTimeout(this.timeoutId_), this.timeoutId_ = setTimeout(
      this.handleWheelZoom_.bind(this, i),
      l
    ), !1;
  }
  handleWheelZoom_(t) {
    const e = t.getView();
    e.getAnimating() && e.cancelAnimations();
    let i = -nt(
      this.totalDelta_,
      -this.maxDelta_ * this.deltaPerZoom_,
      this.maxDelta_ * this.deltaPerZoom_
    ) / this.deltaPerZoom_;
    (e.getConstrainResolution() || this.constrainResolution_) && (i = i ? i > 0 ? 1 : -1 : 0), er(e, i, this.lastAnchor_, this.duration_), this.mode_ = void 0, this.totalDelta_ = 0, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_ = void 0;
  }
  setMouseAnchor(t) {
    this.useAnchor_ = t, t || (this.lastAnchor_ = null);
  }
}
const Tu = bu;
class wu extends Gi {
  constructor(t) {
    t = t || {};
    const e = t;
    e.stopDown || (e.stopDown = bn), super(e), this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = !1, this.rotationDelta_ = 0, this.threshold_ = t.threshold !== void 0 ? t.threshold : 0.3, this.duration_ = t.duration !== void 0 ? t.duration : 250;
  }
  handleDragEvent(t) {
    let e = 0;
    const i = this.targetPointers[0], n = this.targetPointers[1], r = Math.atan2(
      n.clientY - i.clientY,
      n.clientX - i.clientX
    );
    if (this.lastAngle_ !== void 0) {
      const l = r - this.lastAngle_;
      this.rotationDelta_ += l, !this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_ && (this.rotating_ = !0), e = l;
    }
    this.lastAngle_ = r;
    const o = t.map, a = o.getView();
    a.getConstraints().rotation !== Ws && (this.anchor_ = o.getCoordinateFromPixelInternal(
      o.getEventPixel(ir(this.targetPointers))
    ), this.rotating_ && (o.render(), a.adjustRotationInternal(e, this.anchor_)));
  }
  handleUpEvent(t) {
    return this.targetPointers.length < 2 ? (t.map.getView().endInteraction(this.duration_), !1) : !0;
  }
  handleDownEvent(t) {
    if (this.targetPointers.length >= 2) {
      const e = t.map;
      return this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = !1, this.rotationDelta_ = 0, this.handlingDownUpSequence || e.getView().beginInteraction(), !0;
    }
    return !1;
  }
}
const Lu = wu;
class Ou extends Gi {
  constructor(t) {
    t = t || {};
    const e = t;
    e.stopDown || (e.stopDown = bn), super(e), this.anchor_ = null, this.duration_ = t.duration !== void 0 ? t.duration : 400, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1;
  }
  handleDragEvent(t) {
    let e = 1;
    const i = this.targetPointers[0], n = this.targetPointers[1], r = i.clientX - n.clientX, o = i.clientY - n.clientY, a = Math.sqrt(r * r + o * o);
    this.lastDistance_ !== void 0 && (e = this.lastDistance_ / a), this.lastDistance_ = a;
    const l = t.map, c = l.getView();
    e != 1 && (this.lastScaleDelta_ = e), this.anchor_ = l.getCoordinateFromPixelInternal(
      l.getEventPixel(ir(this.targetPointers))
    ), l.render(), c.adjustResolutionInternal(e, this.anchor_);
  }
  handleUpEvent(t) {
    if (this.targetPointers.length < 2) {
      const i = t.map.getView(), n = this.lastScaleDelta_ > 1 ? 1 : -1;
      return i.endInteraction(this.duration_, n), !1;
    }
    return !0;
  }
  handleDownEvent(t) {
    if (this.targetPointers.length >= 2) {
      const e = t.map;
      return this.anchor_ = null, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1, this.handlingDownUpSequence || e.getView().beginInteraction(), !0;
    }
    return !1;
  }
}
const Mu = Ou;
function Du(s) {
  s = s || {};
  const t = new Lt(), e = new Au(-5e-3, 0.05, 100);
  return (s.altShiftDragRotate !== void 0 ? s.altShiftDragRotate : !0) && t.push(new gu()), (s.doubleClickZoom !== void 0 ? s.doubleClickZoom : !0) && t.push(
    new nu({
      delta: s.zoomDelta,
      duration: s.zoomDuration
    })
  ), (s.dragPan !== void 0 ? s.dragPan : !0) && t.push(
    new du({
      onFocusOnly: s.onFocusOnly,
      kinetic: e
    })
  ), (s.pinchRotate !== void 0 ? s.pinchRotate : !0) && t.push(new Lu()), (s.pinchZoom !== void 0 ? s.pinchZoom : !0) && t.push(
    new Mu({
      duration: s.zoomDuration
    })
  ), (s.keyboard !== void 0 ? s.keyboard : !0) && (t.push(new xu()), t.push(
    new Su({
      delta: s.zoomDelta,
      duration: s.zoomDuration
    })
  )), (s.mouseWheelZoom !== void 0 ? s.mouseWheelZoom : !0) && t.push(
    new Tu({
      onFocusOnly: s.onFocusOnly,
      duration: s.zoomDuration
    })
  ), (s.shiftDragZoom !== void 0 ? s.shiftDragZoom : !0) && t.push(
    new Cu({
      duration: s.zoomDuration
    })
  ), t;
}
function co(s) {
  return s[0] > 0 && s[1] > 0;
}
function wi(s, t) {
  return Array.isArray(s) ? s : (t === void 0 ? t = [s, s] : (t[0] = s, t[1] = s), t);
}
function Ra(s) {
  if (s instanceof Mn) {
    s.setMapInternal(null);
    return;
  }
  s instanceof ki && s.getLayers().forEach(Ra);
}
function Aa(s, t) {
  if (s instanceof Mn) {
    s.setMapInternal(t);
    return;
  }
  if (s instanceof ki) {
    const e = s.getLayers().getArray();
    for (let i = 0, n = e.length; i < n; ++i)
      Aa(e[i], t);
  }
}
class Fu extends zt {
  constructor(t) {
    super(), t = t || {}, this.on, this.once, this.un;
    const e = Pu(t);
    this.renderComplete_, this.loaded_ = !0, this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this), this.maxTilesLoading_ = t.maxTilesLoading !== void 0 ? t.maxTilesLoading : 16, this.pixelRatio_ = t.pixelRatio !== void 0 ? t.pixelRatio : Wo, this.postRenderTimeoutHandle_, this.animationDelayKey_, this.animationDelay_ = this.animationDelay_.bind(this), this.coordinateToPixelTransform_ = Ot(), this.pixelToCoordinateTransform_ = Ot(), this.frameIndex_ = 0, this.frameState_ = null, this.previousExtent_ = null, this.viewPropertyListenerKey_ = null, this.viewChangeListenerKey_ = null, this.layerGroupPropertyListenerKeys_ = null, this.viewport_ = document.createElement("div"), this.viewport_.className = "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : ""), this.viewport_.style.position = "relative", this.viewport_.style.overflow = "hidden", this.viewport_.style.width = "100%", this.viewport_.style.height = "100%", this.overlayContainer_ = document.createElement("div"), this.overlayContainer_.style.position = "absolute", this.overlayContainer_.style.zIndex = "0", this.overlayContainer_.style.width = "100%", this.overlayContainer_.style.height = "100%", this.overlayContainer_.style.pointerEvents = "none", this.overlayContainer_.className = "ol-overlaycontainer", this.viewport_.appendChild(this.overlayContainer_), this.overlayContainerStopEvent_ = document.createElement("div"), this.overlayContainerStopEvent_.style.position = "absolute", this.overlayContainerStopEvent_.style.zIndex = "0", this.overlayContainerStopEvent_.style.width = "100%", this.overlayContainerStopEvent_.style.height = "100%", this.overlayContainerStopEvent_.style.pointerEvents = "none", this.overlayContainerStopEvent_.className = "ol-overlaycontainer-stopevent", this.viewport_.appendChild(this.overlayContainerStopEvent_), this.mapBrowserEventHandler_ = null, this.moveTolerance_ = t.moveTolerance, this.keyboardEventTarget_ = e.keyboardEventTarget, this.targetChangeHandlerKeys_ = null, this.targetElement_ = null, this.resizeObserver_ = new ResizeObserver(() => this.updateSize()), this.controls = e.controls || Qc(), this.interactions = e.interactions || Du({
      onFocusOnly: !0
    }), this.overlays_ = e.overlays, this.overlayIdIndex_ = {}, this.renderer_ = null, this.postRenderFunctions_ = [], this.tileQueue_ = new Uc(
      this.getTilePriority.bind(this),
      this.handleTileChange_.bind(this)
    ), this.addChangeListener(
      st.LAYERGROUP,
      this.handleLayerGroupChanged_
    ), this.addChangeListener(st.VIEW, this.handleViewChanged_), this.addChangeListener(st.SIZE, this.handleSizeChanged_), this.addChangeListener(st.TARGET, this.handleTargetChanged_), this.setProperties(e.values);
    const i = this;
    t.view && !(t.view instanceof Nt) && t.view.then(function(n) {
      i.setView(new Nt(n));
    }), this.controls.addEventListener(
      ft.ADD,
      (n) => {
        n.element.setMap(this);
      }
    ), this.controls.addEventListener(
      ft.REMOVE,
      (n) => {
        n.element.setMap(null);
      }
    ), this.interactions.addEventListener(
      ft.ADD,
      (n) => {
        n.element.setMap(this);
      }
    ), this.interactions.addEventListener(
      ft.REMOVE,
      (n) => {
        n.element.setMap(null);
      }
    ), this.overlays_.addEventListener(
      ft.ADD,
      (n) => {
        this.addOverlayInternal_(n.element);
      }
    ), this.overlays_.addEventListener(
      ft.REMOVE,
      (n) => {
        const r = n.element.getId();
        r !== void 0 && delete this.overlayIdIndex_[r.toString()], n.element.setMap(null);
      }
    ), this.controls.forEach(
      (n) => {
        n.setMap(this);
      }
    ), this.interactions.forEach(
      (n) => {
        n.setMap(this);
      }
    ), this.overlays_.forEach(this.addOverlayInternal_.bind(this));
  }
  addControl(t) {
    this.getControls().push(t);
  }
  addInteraction(t) {
    this.getInteractions().push(t);
  }
  addLayer(t) {
    this.getLayerGroup().getLayers().push(t);
  }
  handleLayerAdd_(t) {
    Aa(t.layer, this);
  }
  addOverlay(t) {
    this.getOverlays().push(t);
  }
  addOverlayInternal_(t) {
    const e = t.getId();
    e !== void 0 && (this.overlayIdIndex_[e.toString()] = t), t.setMap(this);
  }
  disposeInternal() {
    this.controls.clear(), this.interactions.clear(), this.overlays_.clear(), this.resizeObserver_.disconnect(), this.setTarget(null), super.disposeInternal();
  }
  forEachFeatureAtPixel(t, e, i) {
    if (!this.frameState_ || !this.renderer_)
      return;
    const n = this.getCoordinateFromPixelInternal(t);
    i = i !== void 0 ? i : {};
    const r = i.hitTolerance !== void 0 ? i.hitTolerance : 0, o = i.layerFilter !== void 0 ? i.layerFilter : xi, a = i.checkWrapped !== !1;
    return this.renderer_.forEachFeatureAtCoordinate(
      n,
      this.frameState_,
      r,
      a,
      e,
      null,
      o,
      null
    );
  }
  getFeaturesAtPixel(t, e) {
    const i = [];
    return this.forEachFeatureAtPixel(
      t,
      function(n) {
        i.push(n);
      },
      e
    ), i;
  }
  getAllLayers() {
    const t = [];
    function e(i) {
      i.forEach(function(n) {
        n instanceof ki ? e(n.getLayers()) : t.push(n);
      });
    }
    return e(this.getLayers()), t;
  }
  hasFeatureAtPixel(t, e) {
    if (!this.frameState_ || !this.renderer_)
      return !1;
    const i = this.getCoordinateFromPixelInternal(t);
    e = e !== void 0 ? e : {};
    const n = e.layerFilter !== void 0 ? e.layerFilter : xi, r = e.hitTolerance !== void 0 ? e.hitTolerance : 0, o = e.checkWrapped !== !1;
    return this.renderer_.hasFeatureAtCoordinate(
      i,
      this.frameState_,
      r,
      o,
      n,
      null
    );
  }
  getEventCoordinate(t) {
    return this.getCoordinateFromPixel(this.getEventPixel(t));
  }
  getEventCoordinateInternal(t) {
    return this.getCoordinateFromPixelInternal(this.getEventPixel(t));
  }
  getEventPixel(t) {
    const i = this.viewport_.getBoundingClientRect(), n = this.getSize(), r = i.width / n[0], o = i.height / n[1], a = "changedTouches" in t ? t.changedTouches[0] : t;
    return [
      (a.clientX - i.left) / r,
      (a.clientY - i.top) / o
    ];
  }
  getTarget() {
    return this.get(st.TARGET);
  }
  getTargetElement() {
    return this.targetElement_;
  }
  getCoordinateFromPixel(t) {
    return ps(
      this.getCoordinateFromPixelInternal(t),
      this.getView().getProjection()
    );
  }
  getCoordinateFromPixelInternal(t) {
    const e = this.frameState_;
    return e ? at(e.pixelToCoordinateTransform, t.slice()) : null;
  }
  getControls() {
    return this.controls;
  }
  getOverlays() {
    return this.overlays_;
  }
  getOverlayById(t) {
    const e = this.overlayIdIndex_[t.toString()];
    return e !== void 0 ? e : null;
  }
  getInteractions() {
    return this.interactions;
  }
  getLayerGroup() {
    return this.get(st.LAYERGROUP);
  }
  setLayers(t) {
    const e = this.getLayerGroup();
    if (t instanceof Lt) {
      e.setLayers(t);
      return;
    }
    const i = e.getLayers();
    i.clear(), i.extend(t);
  }
  getLayers() {
    return this.getLayerGroup().getLayers();
  }
  getLoadingOrNotReady() {
    const t = this.getLayerGroup().getLayerStatesArray();
    for (let e = 0, i = t.length; e < i; ++e) {
      const n = t[e];
      if (!n.visible)
        continue;
      const r = n.layer.getRenderer();
      if (r && !r.ready)
        return !0;
      const o = n.layer.getSource();
      if (o && o.loading)
        return !0;
    }
    return !1;
  }
  getPixelFromCoordinate(t) {
    const e = Kt(
      t,
      this.getView().getProjection()
    );
    return this.getPixelFromCoordinateInternal(e);
  }
  getPixelFromCoordinateInternal(t) {
    const e = this.frameState_;
    return e ? at(
      e.coordinateToPixelTransform,
      t.slice(0, 2)
    ) : null;
  }
  getRenderer() {
    return this.renderer_;
  }
  getSize() {
    return this.get(st.SIZE);
  }
  getView() {
    return this.get(st.VIEW);
  }
  getViewport() {
    return this.viewport_;
  }
  getOverlayContainer() {
    return this.overlayContainer_;
  }
  getOverlayContainerStopEvent() {
    return this.overlayContainerStopEvent_;
  }
  getOwnerDocument() {
    const t = this.getTargetElement();
    return t ? t.ownerDocument : document;
  }
  getTilePriority(t, e, i, n) {
    return Vc(
      this.frameState_,
      t,
      e,
      i,
      n
    );
  }
  handleBrowserEvent(t, e) {
    e = e || t.type;
    const i = new ee(e, this, t);
    this.handleMapBrowserEvent(i);
  }
  handleMapBrowserEvent(t) {
    if (!this.frameState_)
      return;
    const e = t.originalEvent, i = e.type;
    if (i === xs.POINTERDOWN || i === P.WHEEL || i === P.KEYDOWN) {
      const n = this.getOwnerDocument(), r = this.viewport_.getRootNode ? this.viewport_.getRootNode() : n, o = e.target;
      if (this.overlayContainerStopEvent_.contains(o) || !(r === n ? n.documentElement : r).contains(o))
        return;
    }
    if (t.frameState = this.frameState_, this.dispatchEvent(t) !== !1) {
      const n = this.getInteractions().getArray().slice();
      for (let r = n.length - 1; r >= 0; r--) {
        const o = n[r];
        if (o.getMap() !== this || !o.getActive() || !this.getTargetElement())
          continue;
        if (!o.handleEvent(t) || t.propagationStopped)
          break;
      }
    }
  }
  handlePostRender() {
    const t = this.frameState_, e = this.tileQueue_;
    if (!e.isEmpty()) {
      let n = this.maxTilesLoading_, r = n;
      if (t) {
        const o = t.viewHints;
        if (o[lt.ANIMATING] || o[lt.INTERACTING]) {
          const a = Date.now() - t.time > 8;
          n = a ? 0 : 8, r = a ? 0 : 2;
        }
      }
      e.getTilesLoading() < n && (e.reprioritize(), e.loadMoreTiles(n, r));
    }
    t && this.renderer_ && !t.animate && (this.renderComplete_ === !0 ? (this.hasListener(Wt.RENDERCOMPLETE) && this.renderer_.dispatchRenderEvent(
      Wt.RENDERCOMPLETE,
      t
    ), this.loaded_ === !1 && (this.loaded_ = !0, this.dispatchEvent(
      new Be(ie.LOADEND, this, t)
    ))) : this.loaded_ === !0 && (this.loaded_ = !1, this.dispatchEvent(
      new Be(ie.LOADSTART, this, t)
    )));
    const i = this.postRenderFunctions_;
    for (let n = 0, r = i.length; n < r; ++n)
      i[n](this, t);
    i.length = 0;
  }
  handleSizeChanged_() {
    this.getView() && !this.getView().getAnimating() && this.getView().resolveConstraints(0), this.render();
  }
  handleTargetChanged_() {
    if (this.mapBrowserEventHandler_) {
      for (let i = 0, n = this.targetChangeHandlerKeys_.length; i < n; ++i)
        Q(this.targetChangeHandlerKeys_[i]);
      this.targetChangeHandlerKeys_ = null, this.viewport_.removeEventListener(
        P.CONTEXTMENU,
        this.boundHandleBrowserEvent_
      ), this.viewport_.removeEventListener(
        P.WHEEL,
        this.boundHandleBrowserEvent_
      ), this.mapBrowserEventHandler_.dispose(), this.mapBrowserEventHandler_ = null, Es(this.viewport_);
    }
    if (this.targetElement_) {
      this.resizeObserver_.unobserve(this.targetElement_);
      const i = this.targetElement_.getRootNode();
      i instanceof ShadowRoot && this.resizeObserver_.unobserve(i.host), this.setSize(void 0);
    }
    const t = this.getTarget(), e = typeof t == "string" ? document.getElementById(t) : t;
    if (this.targetElement_ = e, !e)
      this.renderer_ && (clearTimeout(this.postRenderTimeoutHandle_), this.postRenderTimeoutHandle_ = void 0, this.postRenderFunctions_.length = 0, this.renderer_.dispose(), this.renderer_ = null), this.animationDelayKey_ && (cancelAnimationFrame(this.animationDelayKey_), this.animationDelayKey_ = void 0);
    else {
      e.appendChild(this.viewport_), this.renderer_ || (this.renderer_ = new Nc(this)), this.mapBrowserEventHandler_ = new Wc(
        this,
        this.moveTolerance_
      );
      for (const r in q)
        this.mapBrowserEventHandler_.addEventListener(
          q[r],
          this.handleMapBrowserEvent.bind(this)
        );
      this.viewport_.addEventListener(
        P.CONTEXTMENU,
        this.boundHandleBrowserEvent_,
        !1
      ), this.viewport_.addEventListener(
        P.WHEEL,
        this.boundHandleBrowserEvent_,
        zo ? { passive: !1 } : !1
      );
      const i = this.keyboardEventTarget_ ? this.keyboardEventTarget_ : e;
      this.targetChangeHandlerKeys_ = [
        k(
          i,
          P.KEYDOWN,
          this.handleBrowserEvent,
          this
        ),
        k(
          i,
          P.KEYPRESS,
          this.handleBrowserEvent,
          this
        )
      ];
      const n = e.getRootNode();
      n instanceof ShadowRoot && this.resizeObserver_.observe(n.host), this.resizeObserver_.observe(e);
    }
    this.updateSize();
  }
  handleTileChange_() {
    this.render();
  }
  handleViewPropertyChanged_() {
    this.render();
  }
  handleViewChanged_() {
    this.viewPropertyListenerKey_ && (Q(this.viewPropertyListenerKey_), this.viewPropertyListenerKey_ = null), this.viewChangeListenerKey_ && (Q(this.viewChangeListenerKey_), this.viewChangeListenerKey_ = null);
    const t = this.getView();
    t && (this.updateViewportSize_(), this.viewPropertyListenerKey_ = k(
      t,
      Ve.PROPERTYCHANGE,
      this.handleViewPropertyChanged_,
      this
    ), this.viewChangeListenerKey_ = k(
      t,
      P.CHANGE,
      this.handleViewPropertyChanged_,
      this
    ), t.resolveConstraints(0)), this.render();
  }
  handleLayerGroupChanged_() {
    this.layerGroupPropertyListenerKeys_ && (this.layerGroupPropertyListenerKeys_.forEach(Q), this.layerGroupPropertyListenerKeys_ = null);
    const t = this.getLayerGroup();
    t && (this.handleLayerAdd_(new ne("addlayer", t)), this.layerGroupPropertyListenerKeys_ = [
      k(t, Ve.PROPERTYCHANGE, this.render, this),
      k(t, P.CHANGE, this.render, this),
      k(t, "addlayer", this.handleLayerAdd_, this),
      k(t, "removelayer", this.handleLayerRemove_, this)
    ]), this.render();
  }
  isRendered() {
    return !!this.frameState_;
  }
  animationDelay_() {
    this.animationDelayKey_ = void 0, this.renderFrame_(Date.now());
  }
  renderSync() {
    this.animationDelayKey_ && cancelAnimationFrame(this.animationDelayKey_), this.animationDelay_();
  }
  redrawText() {
    const t = this.getLayerGroup().getLayerStatesArray();
    for (let e = 0, i = t.length; e < i; ++e) {
      const n = t[e].layer;
      n.hasRenderer() && n.getRenderer().handleFontsChanged();
    }
  }
  render() {
    this.renderer_ && this.animationDelayKey_ === void 0 && (this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_));
  }
  flushDeclutterItems() {
    const t = this.frameState_;
    !t || this.renderer_.flushDeclutterItems(t);
  }
  removeControl(t) {
    return this.getControls().remove(t);
  }
  removeInteraction(t) {
    return this.getInteractions().remove(t);
  }
  removeLayer(t) {
    return this.getLayerGroup().getLayers().remove(t);
  }
  handleLayerRemove_(t) {
    Ra(t.layer);
  }
  removeOverlay(t) {
    return this.getOverlays().remove(t);
  }
  renderFrame_(t) {
    const e = this.getSize(), i = this.getView(), n = this.frameState_;
    let r = null;
    if (e !== void 0 && co(e) && i && i.isDef()) {
      const o = i.getHints(
        this.frameState_ ? this.frameState_.viewHints : void 0
      ), a = i.getState();
      if (r = {
        animate: !1,
        coordinateToPixelTransform: this.coordinateToPixelTransform_,
        declutterTree: null,
        extent: us(
          a.center,
          a.resolution,
          a.rotation,
          e
        ),
        index: this.frameIndex_++,
        layerIndex: 0,
        layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
        pixelRatio: this.pixelRatio_,
        pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
        postRenderFunctions: [],
        size: e,
        tileQueue: this.tileQueue_,
        time: t,
        usedTiles: {},
        viewState: a,
        viewHints: o,
        wantedTiles: {},
        mapId: J(this),
        renderTargets: {}
      }, a.nextCenter && a.nextResolution) {
        const l = isNaN(a.nextRotation) ? a.rotation : a.nextRotation;
        r.nextExtent = us(
          a.nextCenter,
          a.nextResolution,
          l,
          e
        );
      }
    }
    this.frameState_ = r, this.renderer_.renderFrame(r), r && (r.animate && this.render(), Array.prototype.push.apply(
      this.postRenderFunctions_,
      r.postRenderFunctions
    ), n && (!this.previousExtent_ || !Ps(this.previousExtent_) && !hn(r.extent, this.previousExtent_)) && (this.dispatchEvent(
      new Be(ie.MOVESTART, this, n)
    ), this.previousExtent_ = wn(this.previousExtent_)), this.previousExtent_ && !r.viewHints[lt.ANIMATING] && !r.viewHints[lt.INTERACTING] && !hn(r.extent, this.previousExtent_) && (this.dispatchEvent(
      new Be(ie.MOVEEND, this, r)
    ), Xo(r.extent, this.previousExtent_))), this.dispatchEvent(new Be(ie.POSTRENDER, this, r)), this.renderComplete_ = this.hasListener(ie.LOADSTART) || this.hasListener(ie.LOADEND) || this.hasListener(Wt.RENDERCOMPLETE) ? !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady() : void 0, this.postRenderTimeoutHandle_ || (this.postRenderTimeoutHandle_ = setTimeout(() => {
      this.postRenderTimeoutHandle_ = void 0, this.handlePostRender();
    }, 0));
  }
  setLayerGroup(t) {
    const e = this.getLayerGroup();
    e && this.handleLayerRemove_(new ne("removelayer", e)), this.set(st.LAYERGROUP, t);
  }
  setSize(t) {
    this.set(st.SIZE, t);
  }
  setTarget(t) {
    this.set(st.TARGET, t);
  }
  setView(t) {
    if (!t || t instanceof Nt) {
      this.set(st.VIEW, t);
      return;
    }
    this.set(st.VIEW, new Nt());
    const e = this;
    t.then(function(i) {
      e.setView(new Nt(i));
    });
  }
  updateSize() {
    const t = this.getTargetElement();
    let e;
    if (t) {
      const n = getComputedStyle(t), r = t.offsetWidth - parseFloat(n.borderLeftWidth) - parseFloat(n.paddingLeft) - parseFloat(n.paddingRight) - parseFloat(n.borderRightWidth), o = t.offsetHeight - parseFloat(n.borderTopWidth) - parseFloat(n.paddingTop) - parseFloat(n.paddingBottom) - parseFloat(n.borderBottomWidth);
      !isNaN(r) && !isNaN(o) && (e = [r, o], !co(e) && !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length) && sa(
        "No map visible because the map container's width or height are 0."
      ));
    }
    const i = this.getSize();
    e && (!i || !me(e, i)) && (this.setSize(e), this.updateViewportSize_());
  }
  updateViewportSize_() {
    const t = this.getView();
    if (t) {
      let e;
      const i = getComputedStyle(this.viewport_);
      i.width && i.height && (e = [
        parseInt(i.width, 10),
        parseInt(i.height, 10)
      ]), t.setViewportSize(e);
    }
  }
}
function Pu(s) {
  let t = null;
  s.keyboardEventTarget !== void 0 && (t = typeof s.keyboardEventTarget == "string" ? document.getElementById(s.keyboardEventTarget) : s.keyboardEventTarget);
  const e = {}, i = s.layers && typeof s.layers.getLayers == "function" ? s.layers : new ki({
    layers: s.layers
  });
  e[st.LAYERGROUP] = i, e[st.TARGET] = s.target, e[st.VIEW] = s.view instanceof Nt ? s.view : new Nt();
  let n;
  s.controls !== void 0 && (Array.isArray(s.controls) ? n = new Lt(s.controls.slice()) : (K(
    typeof s.controls.getArray == "function",
    "Expected `controls` to be an array or an `ol/Collection.js`"
  ), n = s.controls));
  let r;
  s.interactions !== void 0 && (Array.isArray(s.interactions) ? r = new Lt(s.interactions.slice()) : (K(
    typeof s.interactions.getArray == "function",
    "Expected `interactions` to be an array or an `ol/Collection.js`"
  ), r = s.interactions));
  let o;
  return s.overlays !== void 0 ? Array.isArray(s.overlays) ? o = new Lt(s.overlays.slice()) : (K(
    typeof s.overlays.getArray == "function",
    "Expected `overlays` to be an array or an `ol/Collection.js`"
  ), o = s.overlays) : o = new Lt(), {
    controls: n,
    interactions: r,
    keyboardEventTarget: t,
    overlays: o,
    values: e
  };
}
const Nu = Fu;
function ku(s) {
  return typeof s == "string" ? Bu(s) : typeof s == "object" ? Promise.resolve(s) : Promise.reject(new Error("Invalid config format"));
}
async function Bu(s) {
  try {
    const t = await fetch(s);
    if (!t.ok)
      throw new Error(`Failed to fetch config from ${s}`);
    const e = t.headers.get("content-type");
    if (e.includes("json"))
      return t.json();
    if (e.includes("yaml")) {
      const i = await t.text();
      return ll(i);
    } else
      throw new Error(`Unsupported content type: ${e}`);
  } catch (t) {
    throw new Error(`Error fetching or parsing remote config: ${t.message}`);
  }
}
class Gu extends zt {
  constructor(t) {
    super(), this.projection = be(t.projection), this.attributions_ = uo(t.attributions), this.attributionsCollapsible_ = t.attributionsCollapsible !== void 0 ? t.attributionsCollapsible : !0, this.loading = !1, this.state_ = t.state !== void 0 ? t.state : "ready", this.wrapX_ = t.wrapX !== void 0 ? t.wrapX : !1, this.interpolate_ = !!t.interpolate, this.viewResolver = null, this.viewRejector = null;
    const e = this;
    this.viewPromise_ = new Promise(function(i, n) {
      e.viewResolver = i, e.viewRejector = n;
    });
  }
  getAttributions() {
    return this.attributions_;
  }
  getAttributionsCollapsible() {
    return this.attributionsCollapsible_;
  }
  getProjection() {
    return this.projection;
  }
  getResolutions(t) {
    return null;
  }
  getView() {
    return this.viewPromise_;
  }
  getState() {
    return this.state_;
  }
  getWrapX() {
    return this.wrapX_;
  }
  getInterpolate() {
    return this.interpolate_;
  }
  refresh() {
    this.changed();
  }
  setAttributions(t) {
    this.attributions_ = uo(t), this.changed();
  }
  setState(t) {
    this.state_ = t, this.changed();
  }
}
function uo(s) {
  return s ? Array.isArray(s) ? function(t) {
    return s;
  } : typeof s == "function" ? s : function(t) {
    return [s];
  } : null;
}
const ba = Gu;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var pi = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, _i = {
  CLOSED_EVENT: "MDCMenuSurface:closed",
  CLOSING_EVENT: "MDCMenuSurface:closing",
  OPENED_EVENT: "MDCMenuSurface:opened",
  OPENING_EVENT: "MDCMenuSurface:opening",
  FOCUSABLE_ELEMENTS: [
    "button:not(:disabled)",
    '[href]:not([aria-disabled="true"])',
    "input:not(:disabled)",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  ].join(", ")
}, ci = {
  TRANSITION_OPEN_DURATION: 120,
  TRANSITION_CLOSE_DURATION: 75,
  MARGIN_TO_EDGE: 32,
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
  TOUCH_EVENT_WAIT_MS: 30
}, $;
(function(s) {
  s[s.BOTTOM = 1] = "BOTTOM", s[s.CENTER = 2] = "CENTER", s[s.RIGHT = 4] = "RIGHT", s[s.FLIP_RTL = 8] = "FLIP_RTL";
})($ || ($ = {}));
var Ci;
(function(s) {
  s[s.TOP_LEFT = 0] = "TOP_LEFT", s[s.TOP_RIGHT = 4] = "TOP_RIGHT", s[s.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", s[s.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", s[s.TOP_START = 8] = "TOP_START", s[s.TOP_END = 12] = "TOP_END", s[s.BOTTOM_START = 9] = "BOTTOM_START", s[s.BOTTOM_END = 13] = "BOTTOM_END";
})(Ci || (Ci = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ui = function(s) {
  Dt(t, s);
  function t(e) {
    var i = s.call(this, xt(xt({}, t.defaultAdapter), e)) || this;
    return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openBottomBias = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = Ci.TOP_START, i.originCorner = Ci.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
  }
  return Object.defineProperty(t, "cssClasses", {
    get: function() {
      return pi;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "strings", {
    get: function() {
      return _i;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "numbers", {
    get: function() {
      return ci;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "Corner", {
    get: function() {
      return Ci;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
        },
        removeClass: function() {
        },
        hasClass: function() {
          return !1;
        },
        hasAnchor: function() {
          return !1;
        },
        isElementInContainer: function() {
          return !1;
        },
        isFocused: function() {
          return !1;
        },
        isRtl: function() {
          return !1;
        },
        getInnerDimensions: function() {
          return { height: 0, width: 0 };
        },
        getAnchorDimensions: function() {
          return null;
        },
        getWindowDimensions: function() {
          return { height: 0, width: 0 };
        },
        getBodyDimensions: function() {
          return { height: 0, width: 0 };
        },
        getWindowScroll: function() {
          return { x: 0, y: 0 };
        },
        setPosition: function() {
        },
        setMaxHeight: function() {
        },
        setTransformOrigin: function() {
        },
        saveFocus: function() {
        },
        restoreFocus: function() {
        },
        notifyClose: function() {
        },
        notifyClosing: function() {
        },
        notifyOpen: function() {
        },
        notifyOpening: function() {
        }
      };
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.init = function() {
    var e = t.cssClasses, i = e.ROOT, n = e.OPEN;
    if (!this.adapter.hasClass(i))
      throw new Error(i + " class required in root element.");
    this.adapter.hasClass(n) && (this.isSurfaceOpen = !0);
  }, t.prototype.destroy = function() {
    clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
  }, t.prototype.setAnchorCorner = function(e) {
    this.anchorCorner = e;
  }, t.prototype.flipCornerHorizontally = function() {
    this.originCorner = this.originCorner ^ $.RIGHT;
  }, t.prototype.setAnchorMargin = function(e) {
    this.anchorMargin.top = e.top || 0, this.anchorMargin.right = e.right || 0, this.anchorMargin.bottom = e.bottom || 0, this.anchorMargin.left = e.left || 0;
  }, t.prototype.setIsHoisted = function(e) {
    this.isHoistedElement = e;
  }, t.prototype.setFixedPosition = function(e) {
    this.isFixedPosition = e;
  }, t.prototype.isFixed = function() {
    return this.isFixedPosition;
  }, t.prototype.setAbsolutePosition = function(e, i) {
    this.position.x = this.isFinite(e) ? e : 0, this.position.y = this.isFinite(i) ? i : 0;
  }, t.prototype.setIsHorizontallyCenteredOnViewport = function(e) {
    this.isHorizontallyCenteredOnViewport = e;
  }, t.prototype.setQuickOpen = function(e) {
    this.isQuickOpen = e;
  }, t.prototype.setMaxHeight = function(e) {
    this.maxHeight = e;
  }, t.prototype.setOpenBottomBias = function(e) {
    this.openBottomBias = e;
  }, t.prototype.isOpen = function() {
    return this.isSurfaceOpen;
  }, t.prototype.open = function() {
    var e = this;
    this.isSurfaceOpen || (this.adapter.notifyOpening(), this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(t.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(t.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(function() {
      e.dimensions = e.adapter.getInnerDimensions(), e.autoposition(), e.adapter.addClass(t.cssClasses.OPEN), e.openAnimationEndTimerId = setTimeout(function() {
        e.openAnimationEndTimerId = 0, e.adapter.removeClass(t.cssClasses.ANIMATING_OPEN), e.adapter.notifyOpen();
      }, ci.TRANSITION_OPEN_DURATION);
    }), this.isSurfaceOpen = !0));
  }, t.prototype.close = function(e) {
    var i = this;
    if (e === void 0 && (e = !1), !!this.isSurfaceOpen) {
      if (this.adapter.notifyClosing(), this.isQuickOpen) {
        this.isSurfaceOpen = !1, e || this.maybeRestoreFocus(), this.adapter.removeClass(t.cssClasses.OPEN), this.adapter.removeClass(t.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
        return;
      }
      this.adapter.addClass(t.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
        i.adapter.removeClass(t.cssClasses.OPEN), i.adapter.removeClass(t.cssClasses.IS_OPEN_BELOW), i.closeAnimationEndTimerId = setTimeout(function() {
          i.closeAnimationEndTimerId = 0, i.adapter.removeClass(t.cssClasses.ANIMATING_CLOSED), i.adapter.notifyClose();
        }, ci.TRANSITION_CLOSE_DURATION);
      }), this.isSurfaceOpen = !1, e || this.maybeRestoreFocus();
    }
  }, t.prototype.handleBodyClick = function(e) {
    var i = e.target;
    this.adapter.isElementInContainer(i) || this.close();
  }, t.prototype.handleKeydown = function(e) {
    var i = e.keyCode, n = e.key, r = n === "Escape" || i === 27;
    r && this.close();
  }, t.prototype.autoposition = function() {
    var e;
    this.measurements = this.getAutoLayoutmeasurements();
    var i = this.getoriginCorner(), n = this.getMenuSurfaceMaxHeight(i), r = this.hasBit(i, $.BOTTOM) ? "bottom" : "top", o = this.hasBit(i, $.RIGHT) ? "right" : "left", a = this.getHorizontalOriginOffset(i), l = this.getVerticalOriginOffset(i), c = this.measurements, h = c.anchorSize, u = c.surfaceSize, d = (e = {}, e[o] = a, e[r] = l, e);
    h.width / u.width > ci.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(d), this.adapter.setTransformOrigin(o + " " + r), this.adapter.setPosition(d), this.adapter.setMaxHeight(n ? n + "px" : ""), this.hasBit(i, $.BOTTOM) || this.adapter.addClass(t.cssClasses.IS_OPEN_BELOW);
  }, t.prototype.getAutoLayoutmeasurements = function() {
    var e = this.adapter.getAnchorDimensions(), i = this.adapter.getBodyDimensions(), n = this.adapter.getWindowDimensions(), r = this.adapter.getWindowScroll();
    return e || (e = {
      top: this.position.y,
      right: this.position.x,
      bottom: this.position.y,
      left: this.position.x,
      width: 0,
      height: 0
    }), {
      anchorSize: e,
      bodySize: i,
      surfaceSize: this.dimensions,
      viewportDistance: {
        top: e.top,
        right: n.width - e.right,
        bottom: n.height - e.bottom,
        left: e.left
      },
      viewportSize: n,
      windowScroll: r
    };
  }, t.prototype.getoriginCorner = function() {
    var e = this.originCorner, i = this.measurements, n = i.viewportDistance, r = i.anchorSize, o = i.surfaceSize, a = t.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, $.BOTTOM), c, h;
    l ? (c = n.top - a + this.anchorMargin.bottom, h = n.bottom - a - this.anchorMargin.bottom) : (c = n.top - a + this.anchorMargin.top, h = n.bottom - a + r.height - this.anchorMargin.top);
    var u = h - o.height > 0;
    !u && c > h + this.openBottomBias && (e = this.setBit(e, $.BOTTOM));
    var d = this.adapter.isRtl(), f = this.hasBit(this.anchorCorner, $.FLIP_RTL), g = this.hasBit(this.anchorCorner, $.RIGHT) || this.hasBit(e, $.RIGHT), m = !1;
    d && f ? m = !g : m = g;
    var p, _;
    m ? (p = n.left + r.width + this.anchorMargin.right, _ = n.right - this.anchorMargin.right) : (p = n.left + this.anchorMargin.left, _ = n.right + r.width - this.anchorMargin.left);
    var y = p - o.width > 0, C = _ - o.width > 0, v = this.hasBit(e, $.FLIP_RTL) && this.hasBit(e, $.RIGHT);
    return C && v && d || !y && v ? e = this.unsetBit(e, $.RIGHT) : (y && m && d || y && !m && g || !C && p >= _) && (e = this.setBit(e, $.RIGHT)), e;
  }, t.prototype.getMenuSurfaceMaxHeight = function(e) {
    if (this.maxHeight > 0)
      return this.maxHeight;
    var i = this.measurements.viewportDistance, n = 0, r = this.hasBit(e, $.BOTTOM), o = this.hasBit(this.anchorCorner, $.BOTTOM), a = t.numbers.MARGIN_TO_EDGE;
    return r ? (n = i.top + this.anchorMargin.top - a, o || (n += this.measurements.anchorSize.height)) : (n = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - a, o && (n -= this.measurements.anchorSize.height)), n;
  }, t.prototype.getHorizontalOriginOffset = function(e) {
    var i = this.measurements.anchorSize, n = this.hasBit(e, $.RIGHT), r = this.hasBit(this.anchorCorner, $.RIGHT);
    if (n) {
      var o = r ? i.width - this.anchorMargin.left : this.anchorMargin.right;
      return this.isHoistedElement || this.isFixedPosition ? o - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : o;
    }
    return r ? i.width - this.anchorMargin.right : this.anchorMargin.left;
  }, t.prototype.getVerticalOriginOffset = function(e) {
    var i = this.measurements.anchorSize, n = this.hasBit(e, $.BOTTOM), r = this.hasBit(this.anchorCorner, $.BOTTOM), o = 0;
    return n ? o = r ? i.height - this.anchorMargin.top : -this.anchorMargin.bottom : o = r ? i.height + this.anchorMargin.bottom : this.anchorMargin.top, o;
  }, t.prototype.adjustPositionForHoistedElement = function(e) {
    var i, n, r = this.measurements, o = r.windowScroll, a = r.viewportDistance, l = r.surfaceSize, c = r.viewportSize, h = Object.keys(e);
    try {
      for (var u = gi(h), d = u.next(); !d.done; d = u.next()) {
        var f = d.value, g = e[f] || 0;
        if (this.isHorizontallyCenteredOnViewport && (f === "left" || f === "right")) {
          e[f] = (c.width - l.width) / 2;
          continue;
        }
        g += a[f], this.isFixedPosition || (f === "top" ? g += o.y : f === "bottom" ? g -= o.y : f === "left" ? g += o.x : g -= o.x), e[f] = g;
      }
    } catch (m) {
      i = { error: m };
    } finally {
      try {
        d && !d.done && (n = u.return) && n.call(u);
      } finally {
        if (i)
          throw i.error;
      }
    }
  }, t.prototype.maybeRestoreFocus = function() {
    var e = this, i = this.adapter.isFocused(), n = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, r = n.activeElement && this.adapter.isElementInContainer(n.activeElement);
    (i || r) && setTimeout(function() {
      e.adapter.restoreFocus();
    }, ci.TOUCH_EVENT_WAIT_MS);
  }, t.prototype.hasBit = function(e, i) {
    return Boolean(e & i);
  }, t.prototype.setBit = function(e, i) {
    return e | i;
  }, t.prototype.unsetBit = function(e, i) {
    return e ^ i;
  }, t.prototype.isFinite = function(e) {
    return typeof e == "number" && isFinite(e);
  }, t;
}(Je);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var fo = {
  animation: {
    prefixed: "-webkit-animation",
    standard: "animation"
  },
  transform: {
    prefixed: "-webkit-transform",
    standard: "transform"
  },
  transition: {
    prefixed: "-webkit-transition",
    standard: "transition"
  }
};
function Wu(s) {
  return Boolean(s.document) && typeof s.document.createElement == "function";
}
function zu(s, t) {
  if (Wu(s) && t in fo) {
    var e = s.document.createElement("div"), i = fo[t], n = i.standard, r = i.prefixed, o = n in e.style;
    return o ? n : r;
  }
  return t;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Hu = function(s) {
  Dt(t, s);
  function t() {
    return s !== null && s.apply(this, arguments) || this;
  }
  return t.attachTo = function(e) {
    return new t(e);
  }, t.prototype.initialSyncWithDOM = function() {
    var e = this, i = this.root.parentElement;
    this.anchorElement = i && i.classList.contains(pi.ANCHOR) ? i : null, this.root.classList.contains(pi.FIXED) && this.setFixedPosition(!0), this.handleKeydown = function(n) {
      e.foundation.handleKeydown(n);
    }, this.handleBodyClick = function(n) {
      e.foundation.handleBodyClick(n);
    }, this.registerBodyClickListener = function() {
      document.body.addEventListener("click", e.handleBodyClick, { capture: !0 });
    }, this.deregisterBodyClickListener = function() {
      document.body.removeEventListener("click", e.handleBodyClick, { capture: !0 });
    }, this.listen("keydown", this.handleKeydown), this.listen(_i.OPENED_EVENT, this.registerBodyClickListener), this.listen(_i.CLOSED_EVENT, this.deregisterBodyClickListener);
  }, t.prototype.destroy = function() {
    this.unlisten("keydown", this.handleKeydown), this.unlisten(_i.OPENED_EVENT, this.registerBodyClickListener), this.unlisten(_i.CLOSED_EVENT, this.deregisterBodyClickListener), s.prototype.destroy.call(this);
  }, t.prototype.isOpen = function() {
    return this.foundation.isOpen();
  }, t.prototype.open = function() {
    this.foundation.open();
  }, t.prototype.close = function(e) {
    e === void 0 && (e = !1), this.foundation.close(e);
  }, Object.defineProperty(t.prototype, "quickOpen", {
    set: function(e) {
      this.foundation.setQuickOpen(e);
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.setIsHoisted = function(e) {
    this.foundation.setIsHoisted(e);
  }, t.prototype.setMenuSurfaceAnchorElement = function(e) {
    this.anchorElement = e;
  }, t.prototype.setFixedPosition = function(e) {
    e ? this.root.classList.add(pi.FIXED) : this.root.classList.remove(pi.FIXED), this.foundation.setFixedPosition(e);
  }, t.prototype.setAbsolutePosition = function(e, i) {
    this.foundation.setAbsolutePosition(e, i), this.setIsHoisted(!0);
  }, t.prototype.setAnchorCorner = function(e) {
    this.foundation.setAnchorCorner(e);
  }, t.prototype.setAnchorMargin = function(e) {
    this.foundation.setAnchorMargin(e);
  }, t.prototype.getDefaultFoundation = function() {
    var e = this, i = {
      addClass: function(n) {
        return e.root.classList.add(n);
      },
      removeClass: function(n) {
        return e.root.classList.remove(n);
      },
      hasClass: function(n) {
        return e.root.classList.contains(n);
      },
      hasAnchor: function() {
        return !!e.anchorElement;
      },
      notifyClose: function() {
        return e.emit(ui.strings.CLOSED_EVENT, {});
      },
      notifyClosing: function() {
        e.emit(ui.strings.CLOSING_EVENT, {});
      },
      notifyOpen: function() {
        return e.emit(ui.strings.OPENED_EVENT, {});
      },
      notifyOpening: function() {
        return e.emit(ui.strings.OPENING_EVENT, {});
      },
      isElementInContainer: function(n) {
        return e.root.contains(n);
      },
      isRtl: function() {
        return getComputedStyle(e.root).getPropertyValue("direction") === "rtl";
      },
      setTransformOrigin: function(n) {
        var r = zu(window, "transform") + "-origin";
        e.root.style.setProperty(r, n);
      },
      isFocused: function() {
        return document.activeElement === e.root;
      },
      saveFocus: function() {
        e.previousFocus = document.activeElement;
      },
      restoreFocus: function() {
        e.root.contains(document.activeElement) && e.previousFocus && e.previousFocus.focus && e.previousFocus.focus();
      },
      getInnerDimensions: function() {
        return {
          width: e.root.offsetWidth,
          height: e.root.offsetHeight
        };
      },
      getAnchorDimensions: function() {
        return e.anchorElement ? e.anchorElement.getBoundingClientRect() : null;
      },
      getWindowDimensions: function() {
        return { width: window.innerWidth, height: window.innerHeight };
      },
      getBodyDimensions: function() {
        return { width: document.body.clientWidth, height: document.body.clientHeight };
      },
      getWindowScroll: function() {
        return { x: window.pageXOffset, y: window.pageYOffset };
      },
      setPosition: function(n) {
        var r = e.root;
        r.style.left = "left" in n ? n.left + "px" : "", r.style.right = "right" in n ? n.right + "px" : "", r.style.top = "top" in n ? n.top + "px" : "", r.style.bottom = "bottom" in n ? n.bottom + "px" : "";
      },
      setMaxHeight: function(n) {
        e.root.style.maxHeight = n;
      }
    };
    return new ui(i);
  }, t;
}(Fi);
class Xu {
  constructor(t) {
    if (Or.accessToken = t.config.mapboxAccessToken, this.viewer = t, this.basemaps = t.config.basemaps, !this.basemaps || this.basemaps.length == 0) {
      t.promptError({ error: new Error("Warning: No basemaps defined.") });
      return;
    }
    this.addLayerToMap(this.basemaps[0]);
  }
  addLayerToMap(t) {
    this.initialExtents = this.viewer.config.mapOptions.bounds, this.mbMap = new Or.Map({
      style: t.style,
      attributionControl: !1,
      boxZoom: !1,
      center: ue(this.initialExtents),
      container: this.viewer.mapContainer,
      doubleClickZoom: !1,
      dragPan: !1,
      dragRotate: !1,
      interactive: !1,
      keyboard: !1,
      pitchWithRotate: !1,
      scrollZoom: !1,
      touchZoomRotate: !1
    }), this.mbMap.on("load", (e) => e.target.resize()), this.mbLayer = new Mn({
      render: (e) => {
        const i = this.mbMap.getCanvas(), n = e.viewState, r = this.mbLayer.getVisible();
        i.style.display = r ? "block" : "none", i.style.position = "absolute";
        const o = this.mbLayer.getOpacity();
        i.style.opacity = o;
        const a = n.rotation;
        return this.mbMap.jumpTo({
          center: Nh(n.center),
          zoom: n.zoom - 1,
          bearing: -a * 180 / Math.PI,
          animate: !1
        }), this.mbMap._frame && (this.mbMap._frame.cancel(), this.mbMap._frame = null), this.mbMap._render(), i;
      },
      source: new ba({
        attributions: [
          t.attributions
        ]
      })
    }), this.viewer.map.getLayers().insertAt(0, this.mbLayer);
  }
  destroy() {
    this.viewer.map.removeLayer(this.mbLayer), this.mbMap.remove();
  }
  get widgetButton() {
    return this._widgetButton ? this._widgetButton : (this._widgetButton = document.createElement("button"), this._widgetButton.setAttribute("aria-label", "Basemaps"), this._widgetButton.textContent = "layers", this._widgetButton.addEventListener("click", (t) => {
      this.menu.open();
    }), this._widgetButton);
  }
  get mapSpaceUI() {
    if (this._mapSpaceUI)
      return this._mapSpaceUI;
    const t = document.createElement("div");
    return t.classList.add("basemaps-ui", "mdc-menu", "mdc-menu-surface"), this.menu = new Hu(t), this.basemaps.forEach((e) => {
      const i = document.createElement("div");
      i.classList.add("mdc-card"), i.innerHTML = `
        <div class="mdc-card__primary-action">
          <div class="mdc-card__media mdc-card__media--square" style="background-image: url(${e.imagePreview})">
            <div class="mdc-card__media-content">${e.name}</div>
          </div>
          <div class="mdc-card__ripple"></div>
        </div>
      `, i.addEventListener("click", () => {
        this.destroy(), this.addLayerToMap(e);
      }), t.appendChild(i);
    }), this._mapSpaceUI = t, this._mapSpaceUI;
  }
}
const Y = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3,
  EMPTY: 4
};
class nr {
  constructor(t) {
    this.opacity_ = t.opacity, this.rotateWithView_ = t.rotateWithView, this.rotation_ = t.rotation, this.scale_ = t.scale, this.scaleArray_ = wi(t.scale), this.displacement_ = t.displacement, this.declutterMode_ = t.declutterMode;
  }
  clone() {
    const t = this.getScale();
    return new nr({
      opacity: this.getOpacity(),
      scale: Array.isArray(t) ? t.slice() : t,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
  }
  getOpacity() {
    return this.opacity_;
  }
  getRotateWithView() {
    return this.rotateWithView_;
  }
  getRotation() {
    return this.rotation_;
  }
  getScale() {
    return this.scale_;
  }
  getScaleArray() {
    return this.scaleArray_;
  }
  getDisplacement() {
    return this.displacement_;
  }
  getDeclutterMode() {
    return this.declutterMode_;
  }
  getAnchor() {
    return G();
  }
  getImage(t) {
    return G();
  }
  getHitDetectionImage() {
    return G();
  }
  getPixelRatio(t) {
    return 1;
  }
  getImageState() {
    return G();
  }
  getImageSize() {
    return G();
  }
  getOrigin() {
    return G();
  }
  getSize() {
    return G();
  }
  setDisplacement(t) {
    this.displacement_ = t;
  }
  setOpacity(t) {
    this.opacity_ = t;
  }
  setRotateWithView(t) {
    this.rotateWithView_ = t;
  }
  setRotation(t) {
    this.rotation_ = t;
  }
  setScale(t) {
    this.scale_ = t, this.scaleArray_ = wi(t);
  }
  listenImageChange(t) {
    G();
  }
  load() {
    G();
  }
  unlistenImageChange(t) {
    G();
  }
}
const Ta = nr;
function Bt(s) {
  return Array.isArray(s) ? Jo(s) : s;
}
class sr extends Ta {
  constructor(t) {
    const e = t.rotateWithView !== void 0 ? t.rotateWithView : !1;
    super({
      opacity: 1,
      rotateWithView: e,
      rotation: t.rotation !== void 0 ? t.rotation : 0,
      scale: t.scale !== void 0 ? t.scale : 1,
      displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
      declutterMode: t.declutterMode
    }), this.canvas_ = void 0, this.hitDetectionCanvas_ = null, this.fill_ = t.fill !== void 0 ? t.fill : null, this.origin_ = [0, 0], this.points_ = t.points, this.radius_ = t.radius !== void 0 ? t.radius : t.radius1, this.radius2_ = t.radius2, this.angle_ = t.angle !== void 0 ? t.angle : 0, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.size_ = null, this.renderOptions_ = null, this.render();
  }
  clone() {
    const t = this.getScale(), e = new sr({
      fill: this.getFill() ? this.getFill().clone() : void 0,
      points: this.getPoints(),
      radius: this.getRadius(),
      radius2: this.getRadius2(),
      angle: this.getAngle(),
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(t) ? t.slice() : t,
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
    return e.setOpacity(this.getOpacity()), e;
  }
  getAnchor() {
    const t = this.size_;
    if (!t)
      return null;
    const e = this.getDisplacement(), i = this.getScaleArray();
    return [
      t[0] / 2 - e[0] / i[0],
      t[1] / 2 + e[1] / i[1]
    ];
  }
  getAngle() {
    return this.angle_;
  }
  getFill() {
    return this.fill_;
  }
  setFill(t) {
    this.fill_ = t, this.render();
  }
  getHitDetectionImage() {
    return this.hitDetectionCanvas_ || this.createHitDetectionCanvas_(this.renderOptions_), this.hitDetectionCanvas_;
  }
  getImage(t) {
    let e = this.canvas_[t];
    if (!e) {
      const i = this.renderOptions_, n = Mt(
        i.size * t,
        i.size * t
      );
      this.draw_(i, n, t), e = n.canvas, this.canvas_[t] = e;
    }
    return e;
  }
  getPixelRatio(t) {
    return t;
  }
  getImageSize() {
    return this.size_;
  }
  getImageState() {
    return Y.LOADED;
  }
  getOrigin() {
    return this.origin_;
  }
  getPoints() {
    return this.points_;
  }
  getRadius() {
    return this.radius_;
  }
  getRadius2() {
    return this.radius2_;
  }
  getSize() {
    return this.size_;
  }
  getStroke() {
    return this.stroke_;
  }
  setStroke(t) {
    this.stroke_ = t, this.render();
  }
  listenImageChange(t) {
  }
  load() {
  }
  unlistenImageChange(t) {
  }
  calculateLineJoinSize_(t, e, i) {
    if (e === 0 || this.points_ === 1 / 0 || t !== "bevel" && t !== "miter")
      return e;
    let n = this.radius_, r = this.radius2_ === void 0 ? n : this.radius2_;
    if (n < r) {
      const I = n;
      n = r, r = I;
    }
    const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2, a = 2 * Math.PI / o, l = r * Math.sin(a), c = Math.sqrt(r * r - l * l), h = n - c, u = Math.sqrt(l * l + h * h), d = u / l;
    if (t === "miter" && d <= i)
      return d * e;
    const f = e / 2 / d, g = e / 2 * (h / u), p = Math.sqrt((n + f) * (n + f) + g * g) - n;
    if (this.radius2_ === void 0 || t === "bevel")
      return p * 2;
    const _ = n * Math.sin(a), y = Math.sqrt(n * n - _ * _), C = r - y, E = Math.sqrt(_ * _ + C * C) / _;
    if (E <= i) {
      const I = E * e / 2 - r - n;
      return 2 * Math.max(p, I);
    }
    return p * 2;
  }
  createRenderOptions() {
    let t = je, e = qe, i = 0, n = null, r = 0, o, a = 0;
    this.stroke_ && (o = this.stroke_.getColor(), o === null && (o = Ai), o = Bt(o), a = this.stroke_.getWidth(), a === void 0 && (a = Ti), n = this.stroke_.getLineDash(), r = this.stroke_.getLineDashOffset(), e = this.stroke_.getLineJoin(), e === void 0 && (e = qe), t = this.stroke_.getLineCap(), t === void 0 && (t = je), i = this.stroke_.getMiterLimit(), i === void 0 && (i = Ri));
    const l = this.calculateLineJoinSize_(e, a, i), c = Math.max(this.radius_, this.radius2_ || 0), h = Math.ceil(2 * c + l);
    return {
      strokeStyle: o,
      strokeWidth: a,
      size: h,
      lineCap: t,
      lineDash: n,
      lineDashOffset: r,
      lineJoin: e,
      miterLimit: i
    };
  }
  render() {
    this.renderOptions_ = this.createRenderOptions();
    const t = this.renderOptions_.size;
    this.canvas_ = {}, this.size_ = [t, t];
  }
  draw_(t, e, i) {
    if (e.scale(i, i), e.translate(t.size / 2, t.size / 2), this.createPath_(e), this.fill_) {
      let n = this.fill_.getColor();
      n === null && (n = gt), e.fillStyle = Bt(n), e.fill();
    }
    this.stroke_ && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineCap = t.lineCap, e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit, e.stroke());
  }
  createHitDetectionCanvas_(t) {
    if (this.fill_) {
      let e = this.fill_.getColor(), i = 0;
      if (typeof e == "string" && (e = cn(e)), e === null ? i = 1 : Array.isArray(e) && (i = e.length === 4 ? e[3] : 1), i === 0) {
        const n = Mt(
          t.size,
          t.size
        );
        this.hitDetectionCanvas_ = n.canvas, this.drawHitDetectionCanvas_(t, n);
      }
    }
    this.hitDetectionCanvas_ || (this.hitDetectionCanvas_ = this.getImage(1));
  }
  createPath_(t) {
    let e = this.points_;
    const i = this.radius_;
    if (e === 1 / 0)
      t.arc(0, 0, i, 0, 2 * Math.PI);
    else {
      const n = this.radius2_ === void 0 ? i : this.radius2_;
      this.radius2_ !== void 0 && (e *= 2);
      const r = this.angle_ - Math.PI / 2, o = 2 * Math.PI / e;
      for (let a = 0; a < e; a++) {
        const l = r + a * o, c = a % 2 === 0 ? i : n;
        t.lineTo(c * Math.cos(l), c * Math.sin(l));
      }
      t.closePath();
    }
  }
  drawHitDetectionCanvas_(t, e) {
    e.translate(t.size / 2, t.size / 2), this.createPath_(e), e.fillStyle = gt, e.fill(), this.stroke_ && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit, e.stroke());
  }
}
const rr = sr;
class or extends rr {
  constructor(t) {
    t = t || { radius: 5 }, super({
      points: 1 / 0,
      fill: t.fill,
      radius: t.radius,
      stroke: t.stroke,
      scale: t.scale !== void 0 ? t.scale : 1,
      rotation: t.rotation !== void 0 ? t.rotation : 0,
      rotateWithView: t.rotateWithView !== void 0 ? t.rotateWithView : !1,
      displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
      declutterMode: t.declutterMode
    });
  }
  clone() {
    const t = this.getScale(), e = new or({
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      radius: this.getRadius(),
      scale: Array.isArray(t) ? t.slice() : t,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
    return e.setOpacity(this.getOpacity()), e;
  }
  setRadius(t) {
    this.radius_ = t, this.render();
  }
}
const wa = or;
class ar {
  constructor(t) {
    t = t || {}, this.color_ = t.color !== void 0 ? t.color : null;
  }
  clone() {
    const t = this.getColor();
    return new ar({
      color: Array.isArray(t) ? t.slice() : t || void 0
    });
  }
  getColor() {
    return this.color_;
  }
  setColor(t) {
    this.color_ = t;
  }
}
const Fn = ar;
function Uu(s, t) {
  return new Promise((e, i) => {
    function n() {
      o(), e(s);
    }
    function r() {
      o(), i(new Error("Image load error"));
    }
    function o() {
      s.removeEventListener("load", n), s.removeEventListener("error", r);
    }
    s.addEventListener("load", n), s.addEventListener("error", r), t && (s.src = t);
  });
}
function Vu(s, t) {
  return t && (s.src = t), Vl ? new Promise(
    (e, i) => s.decode().then(() => e(s), i)
  ) : Uu(s);
}
let di = null;
class Yu extends Ls {
  constructor(t, e, i, n, r) {
    super(), this.hitDetectionImage_ = null, this.image_ = t, this.crossOrigin_ = i, this.canvas_ = {}, this.color_ = r, this.imageState_ = n === void 0 ? Y.IDLE : n, this.size_ = t && t.width && t.height ? [t.width, t.height] : null, this.src_ = e, this.tainted_;
  }
  initializeImage_() {
    this.image_ = new Image(), this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_);
  }
  isTainted_() {
    if (this.tainted_ === void 0 && this.imageState_ === Y.LOADED) {
      di || (di = Mt(1, 1, void 0, {
        willReadFrequently: !0
      })), di.drawImage(this.image_, 0, 0);
      try {
        di.getImageData(0, 0, 1, 1), this.tainted_ = !1;
      } catch {
        di = null, this.tainted_ = !0;
      }
    }
    return this.tainted_ === !0;
  }
  dispatchChangeEvent_() {
    this.dispatchEvent(P.CHANGE);
  }
  handleImageError_() {
    this.imageState_ = Y.ERROR, this.dispatchChangeEvent_();
  }
  handleImageLoad_() {
    this.imageState_ = Y.LOADED, this.size_ = [this.image_.width, this.image_.height], this.dispatchChangeEvent_();
  }
  getImage(t) {
    return this.image_ || this.initializeImage_(), this.replaceColor_(t), this.canvas_[t] ? this.canvas_[t] : this.image_;
  }
  getPixelRatio(t) {
    return this.replaceColor_(t), this.canvas_[t] ? t : 1;
  }
  getImageState() {
    return this.imageState_;
  }
  getHitDetectionImage() {
    if (this.image_ || this.initializeImage_(), !this.hitDetectionImage_)
      if (this.isTainted_()) {
        const t = this.size_[0], e = this.size_[1], i = Mt(t, e);
        i.fillRect(0, 0, t, e), this.hitDetectionImage_ = i.canvas;
      } else
        this.hitDetectionImage_ = this.image_;
    return this.hitDetectionImage_;
  }
  getSize() {
    return this.size_;
  }
  getSrc() {
    return this.src_;
  }
  load() {
    if (this.imageState_ === Y.IDLE) {
      this.image_ || this.initializeImage_(), this.imageState_ = Y.LOADING;
      try {
        this.src_ !== void 0 && (this.image_.src = this.src_);
      } catch {
        this.handleImageError_();
      }
      this.image_ instanceof HTMLImageElement && Vu(this.image_, this.src_).then((t) => {
        this.image_ = t, this.handleImageLoad_();
      }).catch(this.handleImageError_.bind(this));
    }
  }
  replaceColor_(t) {
    if (!this.color_ || this.canvas_[t] || this.imageState_ !== Y.LOADED)
      return;
    const e = this.image_, i = document.createElement("canvas");
    i.width = Math.ceil(e.width * t), i.height = Math.ceil(e.height * t);
    const n = i.getContext("2d");
    n.scale(t, t), n.drawImage(e, 0, 0), n.globalCompositeOperation = "multiply", n.fillStyle = $o(this.color_), n.fillRect(0, 0, i.width / t, i.height / t), n.globalCompositeOperation = "destination-in", n.drawImage(e, 0, 0), this.canvas_[t] = i;
  }
}
function Ku(s, t, e, i, n) {
  let r = t === void 0 ? void 0 : un.get(t, e, n);
  return r || (r = new Yu(
    s,
    s instanceof HTMLImageElement ? s.src || void 0 : t,
    e,
    i,
    n
  ), un.set(t, e, n, r)), r;
}
function go(s, t, e, i) {
  return e !== void 0 && i !== void 0 ? [e / s, i / t] : e !== void 0 ? e / s : i !== void 0 ? i / t : 1;
}
class lr extends Ta {
  constructor(t) {
    t = t || {};
    const e = t.opacity !== void 0 ? t.opacity : 1, i = t.rotation !== void 0 ? t.rotation : 0, n = t.scale !== void 0 ? t.scale : 1, r = t.rotateWithView !== void 0 ? t.rotateWithView : !1;
    super({
      opacity: e,
      rotation: i,
      scale: n,
      displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
      rotateWithView: r,
      declutterMode: t.declutterMode
    }), this.anchor_ = t.anchor !== void 0 ? t.anchor : [0.5, 0.5], this.normalizedAnchor_ = null, this.anchorOrigin_ = t.anchorOrigin !== void 0 ? t.anchorOrigin : "top-left", this.anchorXUnits_ = t.anchorXUnits !== void 0 ? t.anchorXUnits : "fraction", this.anchorYUnits_ = t.anchorYUnits !== void 0 ? t.anchorYUnits : "fraction", this.crossOrigin_ = t.crossOrigin !== void 0 ? t.crossOrigin : null;
    const o = t.img !== void 0 ? t.img : null;
    let a = t.src;
    K(
      !(a !== void 0 && o),
      "`image` and `src` cannot be provided at the same time"
    ), (a === void 0 || a.length === 0) && o && (a = o.src || J(o)), K(
      a !== void 0 && a.length > 0,
      "A defined and non-empty `src` or `image` must be provided"
    ), K(
      !((t.width !== void 0 || t.height !== void 0) && t.scale !== void 0),
      "`width` or `height` cannot be provided together with `scale`"
    );
    let l;
    if (t.src !== void 0 ? l = Y.IDLE : o !== void 0 && (o instanceof HTMLImageElement ? o.complete ? l = o.src ? Y.LOADED : Y.IDLE : l = Y.LOADING : l = Y.LOADED), this.color_ = t.color !== void 0 ? cn(t.color) : null, this.iconImage_ = Ku(
      o,
      a,
      this.crossOrigin_,
      l,
      this.color_
    ), this.offset_ = t.offset !== void 0 ? t.offset : [0, 0], this.offsetOrigin_ = t.offsetOrigin !== void 0 ? t.offsetOrigin : "top-left", this.origin_ = null, this.size_ = t.size !== void 0 ? t.size : null, t.width !== void 0 || t.height !== void 0) {
      let c, h;
      if (t.size)
        [c, h] = t.size;
      else {
        const u = this.getImage(1);
        if (u.width && u.height)
          c = u.width, h = u.height;
        else if (u instanceof HTMLImageElement) {
          this.initialOptions_ = t;
          const d = () => {
            if (this.unlistenImageChange(d), !this.initialOptions_)
              return;
            const f = this.iconImage_.getSize();
            this.setScale(
              go(
                f[0],
                f[1],
                t.width,
                t.height
              )
            );
          };
          this.listenImageChange(d);
          return;
        }
      }
      c !== void 0 && this.setScale(
        go(c, h, t.width, t.height)
      );
    }
  }
  clone() {
    let t, e, i;
    return this.initialOptions_ ? (e = this.initialOptions_.width, i = this.initialOptions_.height) : (t = this.getScale(), t = Array.isArray(t) ? t.slice() : t), new lr({
      anchor: this.anchor_.slice(),
      anchorOrigin: this.anchorOrigin_,
      anchorXUnits: this.anchorXUnits_,
      anchorYUnits: this.anchorYUnits_,
      color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || void 0,
      crossOrigin: this.crossOrigin_,
      offset: this.offset_.slice(),
      offsetOrigin: this.offsetOrigin_,
      opacity: this.getOpacity(),
      rotateWithView: this.getRotateWithView(),
      rotation: this.getRotation(),
      scale: t,
      width: e,
      height: i,
      size: this.size_ !== null ? this.size_.slice() : void 0,
      src: this.getSrc(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
  }
  getAnchor() {
    let t = this.normalizedAnchor_;
    if (!t) {
      t = this.anchor_;
      const n = this.getSize();
      if (this.anchorXUnits_ == "fraction" || this.anchorYUnits_ == "fraction") {
        if (!n)
          return null;
        t = this.anchor_.slice(), this.anchorXUnits_ == "fraction" && (t[0] *= n[0]), this.anchorYUnits_ == "fraction" && (t[1] *= n[1]);
      }
      if (this.anchorOrigin_ != "top-left") {
        if (!n)
          return null;
        t === this.anchor_ && (t = this.anchor_.slice()), (this.anchorOrigin_ == "top-right" || this.anchorOrigin_ == "bottom-right") && (t[0] = -t[0] + n[0]), (this.anchorOrigin_ == "bottom-left" || this.anchorOrigin_ == "bottom-right") && (t[1] = -t[1] + n[1]);
      }
      this.normalizedAnchor_ = t;
    }
    const e = this.getDisplacement(), i = this.getScaleArray();
    return [
      t[0] - e[0] / i[0],
      t[1] + e[1] / i[1]
    ];
  }
  setAnchor(t) {
    this.anchor_ = t, this.normalizedAnchor_ = null;
  }
  getColor() {
    return this.color_;
  }
  getImage(t) {
    return this.iconImage_.getImage(t);
  }
  getPixelRatio(t) {
    return this.iconImage_.getPixelRatio(t);
  }
  getImageSize() {
    return this.iconImage_.getSize();
  }
  getImageState() {
    return this.iconImage_.getImageState();
  }
  getHitDetectionImage() {
    return this.iconImage_.getHitDetectionImage();
  }
  getOrigin() {
    if (this.origin_)
      return this.origin_;
    let t = this.offset_;
    if (this.offsetOrigin_ != "top-left") {
      const e = this.getSize(), i = this.iconImage_.getSize();
      if (!e || !i)
        return null;
      t = t.slice(), (this.offsetOrigin_ == "top-right" || this.offsetOrigin_ == "bottom-right") && (t[0] = i[0] - e[0] - t[0]), (this.offsetOrigin_ == "bottom-left" || this.offsetOrigin_ == "bottom-right") && (t[1] = i[1] - e[1] - t[1]);
    }
    return this.origin_ = t, this.origin_;
  }
  getSrc() {
    return this.iconImage_.getSrc();
  }
  getSize() {
    return this.size_ ? this.size_ : this.iconImage_.getSize();
  }
  getWidth() {
    const t = this.getScaleArray();
    if (this.size_)
      return this.size_[0] * t[0];
    if (this.iconImage_.getImageState() == Y.LOADED)
      return this.iconImage_.getSize()[0] * t[0];
  }
  getHeight() {
    const t = this.getScaleArray();
    if (this.size_)
      return this.size_[1] * t[1];
    if (this.iconImage_.getImageState() == Y.LOADED)
      return this.iconImage_.getSize()[1] * t[1];
  }
  setScale(t) {
    delete this.initialOptions_, super.setScale(t);
  }
  listenImageChange(t) {
    this.iconImage_.addEventListener(P.CHANGE, t);
  }
  load() {
    this.iconImage_.load();
  }
  unlistenImageChange(t) {
    this.iconImage_.removeEventListener(P.CHANGE, t);
  }
}
const La = lr;
class hr {
  constructor(t) {
    t = t || {}, this.color_ = t.color !== void 0 ? t.color : null, this.lineCap_ = t.lineCap, this.lineDash_ = t.lineDash !== void 0 ? t.lineDash : null, this.lineDashOffset_ = t.lineDashOffset, this.lineJoin_ = t.lineJoin, this.miterLimit_ = t.miterLimit, this.width_ = t.width;
  }
  clone() {
    const t = this.getColor();
    return new hr({
      color: Array.isArray(t) ? t.slice() : t || void 0,
      lineCap: this.getLineCap(),
      lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
      lineDashOffset: this.getLineDashOffset(),
      lineJoin: this.getLineJoin(),
      miterLimit: this.getMiterLimit(),
      width: this.getWidth()
    });
  }
  getColor() {
    return this.color_;
  }
  getLineCap() {
    return this.lineCap_;
  }
  getLineDash() {
    return this.lineDash_;
  }
  getLineDashOffset() {
    return this.lineDashOffset_;
  }
  getLineJoin() {
    return this.lineJoin_;
  }
  getMiterLimit() {
    return this.miterLimit_;
  }
  getWidth() {
    return this.width_;
  }
  setColor(t) {
    this.color_ = t;
  }
  setLineCap(t) {
    this.lineCap_ = t;
  }
  setLineDash(t) {
    this.lineDash_ = t;
  }
  setLineDashOffset(t) {
    this.lineDashOffset_ = t;
  }
  setLineJoin(t) {
    this.lineJoin_ = t;
  }
  setMiterLimit(t) {
    this.miterLimit_ = t;
  }
  setWidth(t) {
    this.width_ = t;
  }
}
const cr = hr;
class Pn {
  constructor(t) {
    t = t || {}, this.geometry_ = null, this.geometryFunction_ = mo, t.geometry !== void 0 && this.setGeometry(t.geometry), this.fill_ = t.fill !== void 0 ? t.fill : null, this.image_ = t.image !== void 0 ? t.image : null, this.renderer_ = t.renderer !== void 0 ? t.renderer : null, this.hitDetectionRenderer_ = t.hitDetectionRenderer !== void 0 ? t.hitDetectionRenderer : null, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.text_ = t.text !== void 0 ? t.text : null, this.zIndex_ = t.zIndex;
  }
  clone() {
    let t = this.getGeometry();
    return t && typeof t == "object" && (t = t.clone()), new Pn({
      geometry: t,
      fill: this.getFill() ? this.getFill().clone() : void 0,
      image: this.getImage() ? this.getImage().clone() : void 0,
      renderer: this.getRenderer(),
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      text: this.getText() ? this.getText().clone() : void 0,
      zIndex: this.getZIndex()
    });
  }
  getRenderer() {
    return this.renderer_;
  }
  setRenderer(t) {
    this.renderer_ = t;
  }
  setHitDetectionRenderer(t) {
    this.hitDetectionRenderer_ = t;
  }
  getHitDetectionRenderer() {
    return this.hitDetectionRenderer_;
  }
  getGeometry() {
    return this.geometry_;
  }
  getGeometryFunction() {
    return this.geometryFunction_;
  }
  getFill() {
    return this.fill_;
  }
  setFill(t) {
    this.fill_ = t;
  }
  getImage() {
    return this.image_;
  }
  setImage(t) {
    this.image_ = t;
  }
  getStroke() {
    return this.stroke_;
  }
  setStroke(t) {
    this.stroke_ = t;
  }
  getText() {
    return this.text_;
  }
  setText(t) {
    this.text_ = t;
  }
  getZIndex() {
    return this.zIndex_;
  }
  setGeometry(t) {
    typeof t == "function" ? this.geometryFunction_ = t : typeof t == "string" ? this.geometryFunction_ = function(e) {
      return e.get(t);
    } : t ? t !== void 0 && (this.geometryFunction_ = function() {
      return t;
    }) : this.geometryFunction_ = mo, this.geometry_ = t;
  }
  setZIndex(t) {
    this.zIndex_ = t;
  }
}
function Zu(s) {
  let t;
  if (typeof s == "function")
    t = s;
  else {
    let e;
    Array.isArray(s) ? e = s : (K(
      typeof s.getZIndex == "function",
      "Expected an `Style` or an array of `Style`"
    ), e = [s]), t = function() {
      return e;
    };
  }
  return t;
}
let ts = null;
function ju(s, t) {
  if (!ts) {
    const e = new Fn({
      color: "rgba(255,255,255,0.4)"
    }), i = new cr({
      color: "#3399CC",
      width: 1.25
    });
    ts = [
      new Pn({
        image: new wa({
          fill: e,
          stroke: i,
          radius: 5
        }),
        fill: e,
        stroke: i
      })
    ];
  }
  return ts;
}
function mo(s) {
  return s.getGeometry();
}
const vi = Pn, qu = "#333";
class ur {
  constructor(t) {
    t = t || {}, this.font_ = t.font, this.rotation_ = t.rotation, this.rotateWithView_ = t.rotateWithView, this.scale_ = t.scale, this.scaleArray_ = wi(t.scale !== void 0 ? t.scale : 1), this.text_ = t.text, this.textAlign_ = t.textAlign, this.justify_ = t.justify, this.repeat_ = t.repeat, this.textBaseline_ = t.textBaseline, this.fill_ = t.fill !== void 0 ? t.fill : new Fn({ color: qu }), this.maxAngle_ = t.maxAngle !== void 0 ? t.maxAngle : Math.PI / 4, this.placement_ = t.placement !== void 0 ? t.placement : "point", this.overflow_ = !!t.overflow, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.offsetX_ = t.offsetX !== void 0 ? t.offsetX : 0, this.offsetY_ = t.offsetY !== void 0 ? t.offsetY : 0, this.backgroundFill_ = t.backgroundFill ? t.backgroundFill : null, this.backgroundStroke_ = t.backgroundStroke ? t.backgroundStroke : null, this.padding_ = t.padding === void 0 ? null : t.padding;
  }
  clone() {
    const t = this.getScale();
    return new ur({
      font: this.getFont(),
      placement: this.getPlacement(),
      repeat: this.getRepeat(),
      maxAngle: this.getMaxAngle(),
      overflow: this.getOverflow(),
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(t) ? t.slice() : t,
      text: this.getText(),
      textAlign: this.getTextAlign(),
      justify: this.getJustify(),
      textBaseline: this.getTextBaseline(),
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      offsetX: this.getOffsetX(),
      offsetY: this.getOffsetY(),
      backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : void 0,
      backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : void 0,
      padding: this.getPadding() || void 0
    });
  }
  getOverflow() {
    return this.overflow_;
  }
  getFont() {
    return this.font_;
  }
  getMaxAngle() {
    return this.maxAngle_;
  }
  getPlacement() {
    return this.placement_;
  }
  getRepeat() {
    return this.repeat_;
  }
  getOffsetX() {
    return this.offsetX_;
  }
  getOffsetY() {
    return this.offsetY_;
  }
  getFill() {
    return this.fill_;
  }
  getRotateWithView() {
    return this.rotateWithView_;
  }
  getRotation() {
    return this.rotation_;
  }
  getScale() {
    return this.scale_;
  }
  getScaleArray() {
    return this.scaleArray_;
  }
  getStroke() {
    return this.stroke_;
  }
  getText() {
    return this.text_;
  }
  getTextAlign() {
    return this.textAlign_;
  }
  getJustify() {
    return this.justify_;
  }
  getTextBaseline() {
    return this.textBaseline_;
  }
  getBackgroundFill() {
    return this.backgroundFill_;
  }
  getBackgroundStroke() {
    return this.backgroundStroke_;
  }
  getPadding() {
    return this.padding_;
  }
  setOverflow(t) {
    this.overflow_ = t;
  }
  setFont(t) {
    this.font_ = t;
  }
  setMaxAngle(t) {
    this.maxAngle_ = t;
  }
  setOffsetX(t) {
    this.offsetX_ = t;
  }
  setOffsetY(t) {
    this.offsetY_ = t;
  }
  setPlacement(t) {
    this.placement_ = t;
  }
  setRepeat(t) {
    this.repeat_ = t;
  }
  setRotateWithView(t) {
    this.rotateWithView_ = t;
  }
  setFill(t) {
    this.fill_ = t;
  }
  setRotation(t) {
    this.rotation_ = t;
  }
  setScale(t) {
    this.scale_ = t, this.scaleArray_ = wi(t !== void 0 ? t : 1);
  }
  setStroke(t) {
    this.stroke_ = t;
  }
  setText(t) {
    this.text_ = t;
  }
  setTextAlign(t) {
    this.textAlign_ = t;
  }
  setJustify(t) {
    this.justify_ = t;
  }
  setTextBaseline(t) {
    this.textBaseline_ = t;
  }
  setBackgroundFill(t) {
    this.backgroundFill_ = t;
  }
  setBackgroundStroke(t) {
    this.backgroundStroke_ = t;
  }
  setPadding(t) {
    this.padding_ = t;
  }
}
const $u = ur;
function Ju(s, t, e, i, n) {
  Oa(s, t, e || 0, i || s.length - 1, n || Qu);
}
function Oa(s, t, e, i, n) {
  for (; i > e; ) {
    if (i - e > 600) {
      var r = i - e + 1, o = t - e + 1, a = Math.log(r), l = 0.5 * Math.exp(2 * a / 3), c = 0.5 * Math.sqrt(a * l * (r - l) / r) * (o - r / 2 < 0 ? -1 : 1), h = Math.max(e, Math.floor(t - o * l / r + c)), u = Math.min(i, Math.floor(t + (r - o) * l / r + c));
      Oa(s, t, h, u, n);
    }
    var d = s[t], f = e, g = i;
    for (fi(s, e, t), n(s[i], d) > 0 && fi(s, e, i); f < g; ) {
      for (fi(s, f, g), f++, g--; n(s[f], d) < 0; )
        f++;
      for (; n(s[g], d) > 0; )
        g--;
    }
    n(s[e], d) === 0 ? fi(s, e, g) : (g++, fi(s, g, i)), g <= t && (e = g + 1), t <= g && (i = g - 1);
  }
}
function fi(s, t, e) {
  var i = s[t];
  s[t] = s[e], s[e] = i;
}
function Qu(s, t) {
  return s < t ? -1 : s > t ? 1 : 0;
}
class Ma {
  constructor(t = 9) {
    this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let e = this.data;
    const i = [];
    if (!on(t, e))
      return i;
    const n = this.toBBox, r = [];
    for (; e; ) {
      for (let o = 0; o < e.children.length; o++) {
        const a = e.children[o], l = e.leaf ? n(a) : a;
        on(t, l) && (e.leaf ? i.push(a) : is(t, l) ? this._all(a, i) : r.push(a));
      }
      e = r.pop();
    }
    return i;
  }
  collides(t) {
    let e = this.data;
    if (!on(t, e))
      return !1;
    const i = [];
    for (; e; ) {
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n], o = e.leaf ? this.toBBox(r) : r;
        if (on(t, o)) {
          if (e.leaf || is(t, o))
            return !0;
          i.push(r);
        }
      }
      e = i.pop();
    }
    return !1;
  }
  load(t) {
    if (!(t && t.length))
      return this;
    if (t.length < this._minEntries) {
      for (let i = 0; i < t.length; i++)
        this.insert(t[i]);
      return this;
    }
    let e = this._build(t.slice(), 0, t.length - 1, 0);
    if (!this.data.children.length)
      this.data = e;
    else if (this.data.height === e.height)
      this._splitRoot(this.data, e);
    else {
      if (this.data.height < e.height) {
        const i = this.data;
        this.data = e, e = i;
      }
      this._insert(e, this.data.height - e.height - 1, !0);
    }
    return this;
  }
  insert(t) {
    return t && this._insert(t, this.data.height - 1), this;
  }
  clear() {
    return this.data = Ge([]), this;
  }
  remove(t, e) {
    if (!t)
      return this;
    let i = this.data;
    const n = this.toBBox(t), r = [], o = [];
    let a, l, c;
    for (; i || r.length; ) {
      if (i || (i = r.pop(), l = r[r.length - 1], a = o.pop(), c = !0), i.leaf) {
        const h = td(t, i.children, e);
        if (h !== -1)
          return i.children.splice(h, 1), r.push(i), this._condense(r), this;
      }
      !c && !i.leaf && is(i, n) ? (r.push(i), o.push(a), a = 0, l = i, i = i.children[0]) : l ? (a++, i = l.children[a], c = !1) : i = null;
    }
    return this;
  }
  toBBox(t) {
    return t;
  }
  compareMinX(t, e) {
    return t.minX - e.minX;
  }
  compareMinY(t, e) {
    return t.minY - e.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(t) {
    return this.data = t, this;
  }
  _all(t, e) {
    const i = [];
    for (; t; )
      t.leaf ? e.push(...t.children) : i.push(...t.children), t = i.pop();
    return e;
  }
  _build(t, e, i, n) {
    const r = i - e + 1;
    let o = this._maxEntries, a;
    if (r <= o)
      return a = Ge(t.slice(e, i + 1)), Pe(a, this.toBBox), a;
    n || (n = Math.ceil(Math.log(r) / Math.log(o)), o = Math.ceil(r / Math.pow(o, n - 1))), a = Ge([]), a.leaf = !1, a.height = n;
    const l = Math.ceil(r / o), c = l * Math.ceil(Math.sqrt(o));
    po(t, e, i, c, this.compareMinX);
    for (let h = e; h <= i; h += c) {
      const u = Math.min(h + c - 1, i);
      po(t, h, u, l, this.compareMinY);
      for (let d = h; d <= u; d += l) {
        const f = Math.min(d + l - 1, u);
        a.children.push(this._build(t, d, f, n - 1));
      }
    }
    return Pe(a, this.toBBox), a;
  }
  _chooseSubtree(t, e, i, n) {
    for (; n.push(e), !(e.leaf || n.length - 1 === i); ) {
      let r = 1 / 0, o = 1 / 0, a;
      for (let l = 0; l < e.children.length; l++) {
        const c = e.children[l], h = es(c), u = nd(t, c) - h;
        u < o ? (o = u, r = h < r ? h : r, a = c) : u === o && h < r && (r = h, a = c);
      }
      e = a || e.children[0];
    }
    return e;
  }
  _insert(t, e, i) {
    const n = i ? t : this.toBBox(t), r = [], o = this._chooseSubtree(n, this.data, e, r);
    for (o.children.push(t), Ei(o, n); e >= 0 && r[e].children.length > this._maxEntries; )
      this._split(r, e), e--;
    this._adjustParentBBoxes(n, r, e);
  }
  _split(t, e) {
    const i = t[e], n = i.children.length, r = this._minEntries;
    this._chooseSplitAxis(i, r, n);
    const o = this._chooseSplitIndex(i, r, n), a = Ge(i.children.splice(o, i.children.length - o));
    a.height = i.height, a.leaf = i.leaf, Pe(i, this.toBBox), Pe(a, this.toBBox), e ? t[e - 1].children.push(a) : this._splitRoot(i, a);
  }
  _splitRoot(t, e) {
    this.data = Ge([t, e]), this.data.height = t.height + 1, this.data.leaf = !1, Pe(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, e, i) {
    let n, r = 1 / 0, o = 1 / 0;
    for (let a = e; a <= i - e; a++) {
      const l = yi(t, 0, a, this.toBBox), c = yi(t, a, i, this.toBBox), h = sd(l, c), u = es(l) + es(c);
      h < r ? (r = h, n = a, o = u < o ? u : o) : h === r && u < o && (o = u, n = a);
    }
    return n || i - e;
  }
  _chooseSplitAxis(t, e, i) {
    const n = t.leaf ? this.compareMinX : ed, r = t.leaf ? this.compareMinY : id, o = this._allDistMargin(t, e, i, n), a = this._allDistMargin(t, e, i, r);
    o < a && t.children.sort(n);
  }
  _allDistMargin(t, e, i, n) {
    t.children.sort(n);
    const r = this.toBBox, o = yi(t, 0, e, r), a = yi(t, i - e, i, r);
    let l = rn(o) + rn(a);
    for (let c = e; c < i - e; c++) {
      const h = t.children[c];
      Ei(o, t.leaf ? r(h) : h), l += rn(o);
    }
    for (let c = i - e - 1; c >= e; c--) {
      const h = t.children[c];
      Ei(a, t.leaf ? r(h) : h), l += rn(a);
    }
    return l;
  }
  _adjustParentBBoxes(t, e, i) {
    for (let n = i; n >= 0; n--)
      Ei(e[n], t);
  }
  _condense(t) {
    for (let e = t.length - 1, i; e >= 0; e--)
      t[e].children.length === 0 ? e > 0 ? (i = t[e - 1].children, i.splice(i.indexOf(t[e]), 1)) : this.clear() : Pe(t[e], this.toBBox);
  }
}
function td(s, t, e) {
  if (!e)
    return t.indexOf(s);
  for (let i = 0; i < t.length; i++)
    if (e(s, t[i]))
      return i;
  return -1;
}
function Pe(s, t) {
  yi(s, 0, s.children.length, t, s);
}
function yi(s, t, e, i, n) {
  n || (n = Ge(null)), n.minX = 1 / 0, n.minY = 1 / 0, n.maxX = -1 / 0, n.maxY = -1 / 0;
  for (let r = t; r < e; r++) {
    const o = s.children[r];
    Ei(n, s.leaf ? i(o) : o);
  }
  return n;
}
function Ei(s, t) {
  return s.minX = Math.min(s.minX, t.minX), s.minY = Math.min(s.minY, t.minY), s.maxX = Math.max(s.maxX, t.maxX), s.maxY = Math.max(s.maxY, t.maxY), s;
}
function ed(s, t) {
  return s.minX - t.minX;
}
function id(s, t) {
  return s.minY - t.minY;
}
function es(s) {
  return (s.maxX - s.minX) * (s.maxY - s.minY);
}
function rn(s) {
  return s.maxX - s.minX + (s.maxY - s.minY);
}
function nd(s, t) {
  return (Math.max(t.maxX, s.maxX) - Math.min(t.minX, s.minX)) * (Math.max(t.maxY, s.maxY) - Math.min(t.minY, s.minY));
}
function sd(s, t) {
  const e = Math.max(s.minX, t.minX), i = Math.max(s.minY, t.minY), n = Math.min(s.maxX, t.maxX), r = Math.min(s.maxY, t.maxY);
  return Math.max(0, n - e) * Math.max(0, r - i);
}
function is(s, t) {
  return s.minX <= t.minX && s.minY <= t.minY && t.maxX <= s.maxX && t.maxY <= s.maxY;
}
function on(s, t) {
  return t.minX <= s.maxX && t.minY <= s.maxY && t.maxX >= s.minX && t.maxY >= s.minY;
}
function Ge(s) {
  return {
    children: s,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0
  };
}
function po(s, t, e, i, n) {
  const r = [t, e];
  for (; r.length; ) {
    if (e = r.pop(), t = r.pop(), e - t <= i)
      continue;
    const o = t + Math.ceil((e - t) / i / 2) * i;
    Ju(s, o, t, e, n), r.push(t, o, o, e);
  }
}
class rd {
  constructor(t) {
    this.rbush_ = new Ma(t), this.items_ = {};
  }
  insert(t, e) {
    const i = {
      minX: t[0],
      minY: t[1],
      maxX: t[2],
      maxY: t[3],
      value: e
    };
    this.rbush_.insert(i), this.items_[J(e)] = i;
  }
  load(t, e) {
    const i = new Array(e.length);
    for (let n = 0, r = e.length; n < r; n++) {
      const o = t[n], a = e[n], l = {
        minX: o[0],
        minY: o[1],
        maxX: o[2],
        maxY: o[3],
        value: a
      };
      i[n] = l, this.items_[J(a)] = l;
    }
    this.rbush_.load(i);
  }
  remove(t) {
    const e = J(t), i = this.items_[e];
    return delete this.items_[e], this.rbush_.remove(i) !== null;
  }
  update(t, e) {
    const i = this.items_[J(e)], n = [i.minX, i.minY, i.maxX, i.maxY];
    hn(n, t) || (this.remove(e), this.insert(t, e));
  }
  getAll() {
    return this.rbush_.all().map(function(e) {
      return e.value;
    });
  }
  getInExtent(t) {
    const e = {
      minX: t[0],
      minY: t[1],
      maxX: t[2],
      maxY: t[3]
    };
    return this.rbush_.search(e).map(function(n) {
      return n.value;
    });
  }
  forEach(t) {
    return this.forEach_(this.getAll(), t);
  }
  forEachInExtent(t, e) {
    return this.forEach_(this.getInExtent(t), e);
  }
  forEach_(t, e) {
    let i;
    for (let n = 0, r = t.length; n < r; n++)
      if (i = e(t[n]), i)
        return i;
    return i;
  }
  isEmpty() {
    return Ii(this.items_);
  }
  clear() {
    this.rbush_.clear(), this.items_ = {};
  }
  getExtent(t) {
    const e = this.rbush_.toJSON();
    return Ze(e.minX, e.minY, e.maxX, e.maxY, t);
  }
  concat(t) {
    this.rbush_.load(t.rbush_.all());
    for (const e in t.items_)
      this.items_[e] = t.items_[e];
  }
}
const _o = rd, Tt = {
  ADDFEATURE: "addfeature",
  CHANGEFEATURE: "changefeature",
  CLEAR: "clear",
  REMOVEFEATURE: "removefeature",
  FEATURESLOADSTART: "featuresloadstart",
  FEATURESLOADEND: "featuresloadend",
  FEATURESLOADERROR: "featuresloaderror"
};
function od(s, t) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
}
let ad = !1;
function ld(s, t, e, i, n, r, o) {
  const a = new XMLHttpRequest();
  a.open(
    "GET",
    typeof s == "function" ? s(e, i, n) : s,
    !0
  ), t.getType() == "arraybuffer" && (a.responseType = "arraybuffer"), a.withCredentials = ad, a.onload = function(l) {
    if (!a.status || a.status >= 200 && a.status < 300) {
      const c = t.getType();
      let h;
      c == "json" || c == "text" ? h = a.responseText : c == "xml" ? (h = a.responseXML, h || (h = new DOMParser().parseFromString(
        a.responseText,
        "application/xml"
      ))) : c == "arraybuffer" && (h = a.response), h ? r(
        t.readFeatures(h, {
          extent: e,
          featureProjection: n
        }),
        t.readProjection(h)
      ) : o();
    } else
      o();
  }, a.onerror = o, a.send();
}
function yo(s, t) {
  return function(e, i, n, r, o) {
    const a = this;
    ld(
      s,
      t,
      e,
      i,
      n,
      function(l, c) {
        a.addFeatures(l), r !== void 0 && r(l);
      },
      o || Ke
    );
  };
}
class Jt extends ge {
  constructor(t, e, i) {
    super(t), this.feature = e, this.features = i;
  }
}
class hd extends ba {
  constructor(t) {
    t = t || {}, super({
      attributions: t.attributions,
      interpolate: !0,
      projection: void 0,
      state: "ready",
      wrapX: t.wrapX !== void 0 ? t.wrapX : !0
    }), this.on, this.once, this.un, this.loader_ = Ke, this.format_ = t.format, this.overlaps_ = t.overlaps === void 0 ? !0 : t.overlaps, this.url_ = t.url, t.loader !== void 0 ? this.loader_ = t.loader : this.url_ !== void 0 && (K(this.format_, "`format` must be set when `url` is set"), this.loader_ = yo(
      this.url_,
      this.format_
    )), this.strategy_ = t.strategy !== void 0 ? t.strategy : od;
    const e = t.useSpatialIndex !== void 0 ? t.useSpatialIndex : !0;
    this.featuresRtree_ = e ? new _o() : null, this.loadedExtentsRtree_ = new _o(), this.loadingExtentsCount_ = 0, this.nullGeometryFeatures_ = {}, this.idIndex_ = {}, this.uidIndex_ = {}, this.featureChangeKeys_ = {}, this.featuresCollection_ = null;
    let i, n;
    Array.isArray(t.features) ? n = t.features : t.features && (i = t.features, n = i.getArray()), !e && i === void 0 && (i = new Lt(n)), n !== void 0 && this.addFeaturesInternal(n), i !== void 0 && this.bindFeaturesCollection_(i);
  }
  addFeature(t) {
    this.addFeatureInternal(t), this.changed();
  }
  addFeatureInternal(t) {
    const e = J(t);
    if (!this.addToIndex_(e, t)) {
      this.featuresCollection_ && this.featuresCollection_.remove(t);
      return;
    }
    this.setupChangeEvents_(e, t);
    const i = t.getGeometry();
    if (i) {
      const n = i.getExtent();
      this.featuresRtree_ && this.featuresRtree_.insert(n, t);
    } else
      this.nullGeometryFeatures_[e] = t;
    this.dispatchEvent(
      new Jt(Tt.ADDFEATURE, t)
    );
  }
  setupChangeEvents_(t, e) {
    this.featureChangeKeys_[t] = [
      k(e, P.CHANGE, this.handleFeatureChange_, this),
      k(
        e,
        Ve.PROPERTYCHANGE,
        this.handleFeatureChange_,
        this
      )
    ];
  }
  addToIndex_(t, e) {
    let i = !0;
    const n = e.getId();
    return n !== void 0 && (n.toString() in this.idIndex_ ? i = !1 : this.idIndex_[n.toString()] = e), i && (K(
      !(t in this.uidIndex_),
      "The passed `feature` was already added to the source"
    ), this.uidIndex_[t] = e), i;
  }
  addFeatures(t) {
    this.addFeaturesInternal(t), this.changed();
  }
  addFeaturesInternal(t) {
    const e = [], i = [], n = [];
    for (let r = 0, o = t.length; r < o; r++) {
      const a = t[r], l = J(a);
      this.addToIndex_(l, a) && i.push(a);
    }
    for (let r = 0, o = i.length; r < o; r++) {
      const a = i[r], l = J(a);
      this.setupChangeEvents_(l, a);
      const c = a.getGeometry();
      if (c) {
        const h = c.getExtent();
        e.push(h), n.push(a);
      } else
        this.nullGeometryFeatures_[l] = a;
    }
    if (this.featuresRtree_ && this.featuresRtree_.load(e, n), this.hasListener(Tt.ADDFEATURE))
      for (let r = 0, o = i.length; r < o; r++)
        this.dispatchEvent(
          new Jt(Tt.ADDFEATURE, i[r])
        );
  }
  bindFeaturesCollection_(t) {
    let e = !1;
    this.addEventListener(
      Tt.ADDFEATURE,
      function(i) {
        e || (e = !0, t.push(i.feature), e = !1);
      }
    ), this.addEventListener(
      Tt.REMOVEFEATURE,
      function(i) {
        e || (e = !0, t.remove(i.feature), e = !1);
      }
    ), t.addEventListener(
      ft.ADD,
      (i) => {
        e || (e = !0, this.addFeature(i.element), e = !1);
      }
    ), t.addEventListener(
      ft.REMOVE,
      (i) => {
        e || (e = !0, this.removeFeature(i.element), e = !1);
      }
    ), this.featuresCollection_ = t;
  }
  clear(t) {
    if (t) {
      for (const i in this.featureChangeKeys_)
        this.featureChangeKeys_[i].forEach(Q);
      this.featuresCollection_ || (this.featureChangeKeys_ = {}, this.idIndex_ = {}, this.uidIndex_ = {});
    } else if (this.featuresRtree_) {
      const i = (n) => {
        this.removeFeatureInternal(n);
      };
      this.featuresRtree_.forEach(i);
      for (const n in this.nullGeometryFeatures_)
        this.removeFeatureInternal(this.nullGeometryFeatures_[n]);
    }
    this.featuresCollection_ && this.featuresCollection_.clear(), this.featuresRtree_ && this.featuresRtree_.clear(), this.nullGeometryFeatures_ = {};
    const e = new Jt(Tt.CLEAR);
    this.dispatchEvent(e), this.changed();
  }
  forEachFeature(t) {
    if (this.featuresRtree_)
      return this.featuresRtree_.forEach(t);
    this.featuresCollection_ && this.featuresCollection_.forEach(t);
  }
  forEachFeatureAtCoordinateDirect(t, e) {
    const i = [t[0], t[1], t[0], t[1]];
    return this.forEachFeatureInExtent(i, function(n) {
      if (n.getGeometry().intersectsCoordinate(t))
        return e(n);
    });
  }
  forEachFeatureInExtent(t, e) {
    if (this.featuresRtree_)
      return this.featuresRtree_.forEachInExtent(t, e);
    this.featuresCollection_ && this.featuresCollection_.forEach(e);
  }
  forEachFeatureIntersectingExtent(t, e) {
    return this.forEachFeatureInExtent(
      t,
      function(i) {
        if (i.getGeometry().intersectsExtent(t)) {
          const r = e(i);
          if (r)
            return r;
        }
      }
    );
  }
  getFeaturesCollection() {
    return this.featuresCollection_;
  }
  getFeatures() {
    let t;
    return this.featuresCollection_ ? t = this.featuresCollection_.getArray().slice(0) : this.featuresRtree_ && (t = this.featuresRtree_.getAll(), Ii(this.nullGeometryFeatures_) || Gt(t, Object.values(this.nullGeometryFeatures_))), t;
  }
  getFeaturesAtCoordinate(t) {
    const e = [];
    return this.forEachFeatureAtCoordinateDirect(t, function(i) {
      e.push(i);
    }), e;
  }
  getFeaturesInExtent(t, e) {
    if (this.featuresRtree_) {
      if (!(e && e.canWrapX() && this.getWrapX()))
        return this.featuresRtree_.getInExtent(t);
      const n = rh(t, e);
      return [].concat(
        ...n.map((r) => this.featuresRtree_.getInExtent(r))
      );
    }
    return this.featuresCollection_ ? this.featuresCollection_.getArray().slice(0) : [];
  }
  getClosestFeatureToCoordinate(t, e) {
    const i = t[0], n = t[1];
    let r = null;
    const o = [NaN, NaN];
    let a = 1 / 0;
    const l = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
    return e = e || xi, this.featuresRtree_.forEachInExtent(
      l,
      function(c) {
        if (e(c)) {
          const h = c.getGeometry(), u = a;
          if (a = h.closestPointXY(
            i,
            n,
            o,
            a
          ), a < u) {
            r = c;
            const d = Math.sqrt(a);
            l[0] = i - d, l[1] = n - d, l[2] = i + d, l[3] = n + d;
          }
        }
      }
    ), r;
  }
  getExtent(t) {
    return this.featuresRtree_.getExtent(t);
  }
  getFeatureById(t) {
    const e = this.idIndex_[t.toString()];
    return e !== void 0 ? e : null;
  }
  getFeatureByUid(t) {
    const e = this.uidIndex_[t];
    return e !== void 0 ? e : null;
  }
  getFormat() {
    return this.format_;
  }
  getOverlaps() {
    return this.overlaps_;
  }
  getUrl() {
    return this.url_;
  }
  handleFeatureChange_(t) {
    const e = t.target, i = J(e), n = e.getGeometry();
    if (!n)
      i in this.nullGeometryFeatures_ || (this.featuresRtree_ && this.featuresRtree_.remove(e), this.nullGeometryFeatures_[i] = e);
    else {
      const o = n.getExtent();
      i in this.nullGeometryFeatures_ ? (delete this.nullGeometryFeatures_[i], this.featuresRtree_ && this.featuresRtree_.insert(o, e)) : this.featuresRtree_ && this.featuresRtree_.update(o, e);
    }
    const r = e.getId();
    if (r !== void 0) {
      const o = r.toString();
      this.idIndex_[o] !== e && (this.removeFromIdIndex_(e), this.idIndex_[o] = e);
    } else
      this.removeFromIdIndex_(e), this.uidIndex_[i] = e;
    this.changed(), this.dispatchEvent(
      new Jt(Tt.CHANGEFEATURE, e)
    );
  }
  hasFeature(t) {
    const e = t.getId();
    return e !== void 0 ? e in this.idIndex_ : J(t) in this.uidIndex_;
  }
  isEmpty() {
    return this.featuresRtree_ ? this.featuresRtree_.isEmpty() && Ii(this.nullGeometryFeatures_) : this.featuresCollection_ ? this.featuresCollection_.getLength() === 0 : !0;
  }
  loadFeatures(t, e, i) {
    const n = this.loadedExtentsRtree_, r = this.strategy_(t, e, i);
    for (let o = 0, a = r.length; o < a; ++o) {
      const l = r[o];
      n.forEachInExtent(
        l,
        function(h) {
          return ze(h.extent, l);
        }
      ) || (++this.loadingExtentsCount_, this.dispatchEvent(
        new Jt(Tt.FEATURESLOADSTART)
      ), this.loader_.call(
        this,
        l,
        e,
        i,
        (h) => {
          --this.loadingExtentsCount_, this.dispatchEvent(
            new Jt(
              Tt.FEATURESLOADEND,
              void 0,
              h
            )
          );
        },
        () => {
          --this.loadingExtentsCount_, this.dispatchEvent(
            new Jt(Tt.FEATURESLOADERROR)
          );
        }
      ), n.insert(l, { extent: l.slice() }));
    }
    this.loading = this.loader_.length < 4 ? !1 : this.loadingExtentsCount_ > 0;
  }
  refresh() {
    this.clear(!0), this.loadedExtentsRtree_.clear(), super.refresh();
  }
  removeLoadedExtent(t) {
    const e = this.loadedExtentsRtree_;
    let i;
    e.forEachInExtent(t, function(n) {
      if (hn(n.extent, t))
        return i = n, !0;
    }), i && e.remove(i);
  }
  removeFeature(t) {
    if (!t)
      return;
    const e = J(t);
    e in this.nullGeometryFeatures_ ? delete this.nullGeometryFeatures_[e] : this.featuresRtree_ && this.featuresRtree_.remove(t), this.removeFeatureInternal(t) && this.changed();
  }
  removeFeatureInternal(t) {
    const e = J(t), i = this.featureChangeKeys_[e];
    if (!i)
      return;
    i.forEach(Q), delete this.featureChangeKeys_[e];
    const n = t.getId();
    return n !== void 0 && delete this.idIndex_[n.toString()], delete this.uidIndex_[e], this.dispatchEvent(
      new Jt(Tt.REMOVEFEATURE, t)
    ), t;
  }
  removeFromIdIndex_(t) {
    let e = !1;
    for (const i in this.idIndex_)
      if (this.idIndex_[i] === t) {
        delete this.idIndex_[i], e = !0;
        break;
      }
    return e;
  }
  setLoader(t) {
    this.loader_ = t;
  }
  setUrl(t) {
    K(this.format_, "`format` must be set when `url` is set"), this.url_ = t, this.setLoader(yo(t, this.format_));
  }
}
const cd = hd;
let ei = 0;
const rt = 1 << ei++, D = 1 << ei++, $e = 1 << ei++, dr = 1 << ei++, Wi = 1 << ei++, wt = Math.pow(2, ei) - 1, Da = {
  [rt]: "boolean",
  [D]: "number",
  [$e]: "string",
  [dr]: "color",
  [Wi]: "number[]"
}, ud = Object.keys(Da).map(Number).sort(Ye);
function En(s) {
  const t = [];
  for (const e of ud)
    dd(s, e) && t.push(Da[e]);
  return t.length === 0 ? "untyped" : t.length < 3 ? t.join(" or ") : t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
}
function dd(s, t) {
  return (s & t) === t;
}
function Fa(s, t) {
  return !!(s & t);
}
class oe {
  constructor(t, e) {
    this.type = t, this.value = e;
  }
}
class fd {
  constructor(t, e, ...i) {
    this.type = t, this.operator = e, this.args = i;
  }
}
function Pa() {
  return {
    variables: /* @__PURE__ */ new Set(),
    properties: /* @__PURE__ */ new Set()
  };
}
function Nn(s, t) {
  switch (typeof s) {
    case "boolean":
      return new oe(rt, s);
    case "number":
      return new oe(D, s);
    case "string":
      return new oe($e, s);
  }
  if (!Array.isArray(s))
    throw new Error("Expression must be an array or a primitive value");
  if (s.length === 0)
    throw new Error("Empty expression");
  if (typeof s[0] == "string")
    return yd(s, t);
  for (const i of s)
    if (typeof i != "number")
      throw new Error("Expected an array of numbers");
  let e = Wi;
  return (s.length === 3 || s.length === 4) && (e |= dr), new oe(e, s);
}
const x = {
  Number: "number",
  String: "string",
  Get: "get",
  Var: "var",
  Any: "any",
  All: "all",
  Not: "!",
  Resolution: "resolution",
  Equal: "==",
  NotEqual: "!=",
  GreaterThan: ">",
  GreaterThanOrEqualTo: ">=",
  LessThan: "<",
  LessThanOrEqualTo: "<=",
  Multiply: "*",
  Divide: "/",
  Add: "+",
  Subtract: "-",
  Clamp: "clamp",
  Mod: "%",
  Pow: "^",
  Abs: "abs",
  Floor: "floor",
  Ceil: "ceil",
  Round: "round",
  Sin: "sin",
  Cos: "cos",
  Atan: "atan",
  Sqrt: "sqrt",
  Match: "match"
}, gd = {
  [x.Number]: B(U(1, 1 / 0, wt), D),
  [x.String]: B(U(1, 1 / 0, wt), $e),
  [x.Get]: B(md, wt),
  [x.Var]: B(pd, wt),
  [x.Resolution]: B(_d, D),
  [x.Any]: B(U(2, 1 / 0, rt), rt),
  [x.All]: B(U(2, 1 / 0, rt), rt),
  [x.Not]: B(U(1, 1, rt), rt),
  [x.Equal]: B(U(2, 2, wt), rt),
  [x.NotEqual]: B(U(2, 2, wt), rt),
  [x.GreaterThan]: B(U(2, 2, wt), rt),
  [x.GreaterThanOrEqualTo]: B(
    U(2, 2, wt),
    rt
  ),
  [x.LessThan]: B(U(2, 2, wt), rt),
  [x.LessThanOrEqualTo]: B(U(2, 2, wt), rt),
  [x.Multiply]: B(U(2, 1 / 0, D), D),
  [x.Divide]: B(U(2, 2, D), D),
  [x.Add]: B(U(2, 1 / 0, D), D),
  [x.Subtract]: B(U(2, 2, D), D),
  [x.Clamp]: B(U(3, 3, D), D),
  [x.Mod]: B(U(2, 2, D), D),
  [x.Pow]: B(U(2, 2, D), D),
  [x.Abs]: B(U(1, 1, D), D),
  [x.Floor]: B(U(1, 1, D), D),
  [x.Ceil]: B(U(1, 1, D), D),
  [x.Round]: B(U(1, 1, D), D),
  [x.Sin]: B(U(1, 1, D), D),
  [x.Cos]: B(U(1, 1, D), D),
  [x.Atan]: B(U(1, 2, D), D),
  [x.Sqrt]: B(U(1, 1, D), D),
  [x.Match]: B(
    U(4, 1 / 0, $e | D),
    wt
  )
};
function md(s, t) {
  if (s.length !== 2)
    throw new Error("Expected 1 argument for get operation");
  const e = Nn(s[1], t);
  if (!(e instanceof oe))
    throw new Error("Expected a literal argument for get operation");
  if (typeof e.value != "string")
    throw new Error("Expected a string argument for get operation");
  return t.properties.add(e.value), [e];
}
function pd(s, t) {
  if (s.length !== 2)
    throw new Error("Expected 1 argument for var operation");
  const e = Nn(s[1], t);
  if (!(e instanceof oe))
    throw new Error("Expected a literal argument for var operation");
  if (typeof e.value != "string")
    throw new Error("Expected a string argument for get operation");
  return t.variables.add(e.value), [e];
}
function _d(s, t) {
  const e = s[0];
  if (s.length !== 1)
    throw new Error(`Expected no arguments for ${e} operation`);
  return [];
}
function U(s, t, e) {
  return function(i, n) {
    const r = i[0], o = i.length - 1;
    if (s === t) {
      if (o !== s) {
        const l = s === 1 ? "" : "s";
        throw new Error(
          `Expected ${s} argument${l} for operation ${r}, got ${o}`
        );
      }
    } else if (o < s || o > t)
      throw new Error(
        `Expected ${s} to ${t} arguments for operation ${r}, got ${o}`
      );
    const a = new Array(o);
    for (let l = 0; l < o; ++l) {
      const c = Nn(i[l + 1], n);
      if (!Fa(e, c.type)) {
        const h = En(e), u = En(c.type);
        throw new Error(
          `Unexpected type for argument ${l} of ${r} operation : got ${h} but expected ${u}`
        );
      }
      a[l] = c;
    }
    return a;
  };
}
function B(s, t) {
  return function(e, i) {
    const n = e[0], r = s(e, i);
    return new fd(t, n, ...r);
  };
}
function yd(s, t) {
  const e = s[0], i = gd[e];
  if (!i)
    throw new Error(`Unknown operator: ${e}`);
  return i(s, t);
}
function Na() {
  return {
    variables: {},
    properties: {},
    resolution: NaN
  };
}
function pe(s, t, e) {
  const i = Nn(s, e);
  if (!Fa(t, i.type)) {
    const n = En(t), r = En(i.type);
    throw new Error(
      `Expected expression to be of type ${n}, got ${r}`
    );
  }
  return Te(i);
}
function Te(s, t) {
  if (s instanceof oe)
    return function() {
      return s.value;
    };
  const e = s.operator;
  switch (e) {
    case x.Number:
    case x.String:
      return Ed(s);
    case x.Get:
    case x.Var:
      return Cd(s);
    case x.Resolution:
      return (i) => i.resolution;
    case x.Any:
    case x.All:
    case x.Not:
      return xd(s);
    case x.Equal:
    case x.NotEqual:
    case x.LessThan:
    case x.LessThanOrEqualTo:
    case x.GreaterThan:
    case x.GreaterThanOrEqualTo:
      return vd(s);
    case x.Multiply:
    case x.Divide:
    case x.Add:
    case x.Subtract:
    case x.Clamp:
    case x.Mod:
    case x.Pow:
    case x.Abs:
    case x.Floor:
    case x.Ceil:
    case x.Round:
    case x.Sin:
    case x.Cos:
    case x.Atan:
    case x.Sqrt:
      return Id(s);
    case x.Match:
      return Sd(s);
    default:
      throw new Error(`Unsupported operator ${e}`);
  }
}
function Ed(s, t) {
  const e = s.operator, i = s.args.length, n = new Array(i);
  for (let r = 0; r < i; ++r)
    n[r] = Te(s.args[r]);
  switch (e) {
    case x.Number:
    case x.String:
      return (r) => {
        for (let o = 0; o < i; ++o) {
          const a = n[o](r);
          if (typeof a === e)
            return a;
        }
        throw new Error(`Expected one of the values to be a ${e}`);
      };
    default:
      throw new Error(`Unsupported assertion operator ${e}`);
  }
}
function Cd(s, t) {
  const e = s.args[0];
  if (!(e instanceof oe))
    throw new Error("Expected literal name");
  const i = e.value;
  if (typeof i != "string")
    throw new Error("Expected string name");
  switch (s.operator) {
    case x.Get:
      return (n) => n.properties[i];
    case x.Var:
      return (n) => n.variables[i];
    default:
      throw new Error(`Unsupported accessor operator ${s.operator}`);
  }
}
function vd(s, t) {
  const e = s.operator, i = Te(s.args[0]), n = Te(s.args[1]);
  switch (e) {
    case x.Equal:
      return (r) => i(r) === n(r);
    case x.NotEqual:
      return (r) => i(r) !== n(r);
    case x.LessThan:
      return (r) => i(r) < n(r);
    case x.LessThanOrEqualTo:
      return (r) => i(r) <= n(r);
    case x.GreaterThan:
      return (r) => i(r) > n(r);
    case x.GreaterThanOrEqualTo:
      return (r) => i(r) >= n(r);
    default:
      throw new Error(`Unsupported comparison operator ${e}`);
  }
}
function xd(s, t) {
  const e = s.operator, i = s.args.length, n = new Array(i);
  for (let r = 0; r < i; ++r)
    n[r] = Te(s.args[r]);
  switch (e) {
    case x.Any:
      return (r) => {
        for (let o = 0; o < i; ++o)
          if (n[o](r))
            return !0;
        return !1;
      };
    case x.All:
      return (r) => {
        for (let o = 0; o < i; ++o)
          if (!n[o](r))
            return !1;
        return !0;
      };
    case x.Not:
      return (r) => !n[0](r);
    default:
      throw new Error(`Unsupported logical operator ${e}`);
  }
}
function Id(s, t) {
  const e = s.operator, i = s.args.length, n = new Array(i);
  for (let r = 0; r < i; ++r)
    n[r] = Te(s.args[r]);
  switch (e) {
    case x.Multiply:
      return (r) => {
        let o = 1;
        for (let a = 0; a < i; ++a)
          o *= n[a](r);
        return o;
      };
    case x.Divide:
      return (r) => n[0](r) / n[1](r);
    case x.Add:
      return (r) => {
        let o = 0;
        for (let a = 0; a < i; ++a)
          o += n[a](r);
        return o;
      };
    case x.Subtract:
      return (r) => n[0](r) - n[1](r);
    case x.Clamp:
      return (r) => {
        const o = n[0](r), a = n[1](r);
        if (o < a)
          return a;
        const l = n[2](r);
        return o > l ? l : o;
      };
    case x.Mod:
      return (r) => n[0](r) % n[1](r);
    case x.Pow:
      return (r) => Math.pow(n[0](r), n[1](r));
    case x.Abs:
      return (r) => Math.abs(n[0](r));
    case x.Floor:
      return (r) => Math.floor(n[0](r));
    case x.Ceil:
      return (r) => Math.ceil(n[0](r));
    case x.Round:
      return (r) => Math.round(n[0](r));
    case x.Sin:
      return (r) => Math.sin(n[0](r));
    case x.Cos:
      return (r) => Math.cos(n[0](r));
    case x.Atan:
      return i === 2 ? (r) => Math.atan2(n[0](r), n[1](r)) : (r) => Math.atan(n[0](r));
    case x.Sqrt:
      return (r) => Math.sqrt(n[0](r));
    default:
      throw new Error(`Unsupported numeric operator ${e}`);
  }
}
function Sd(s, t) {
  const e = s.args.length, i = new Array(e);
  for (let n = 0; n < e; ++n)
    i[n] = Te(s.args[n]);
  return (n) => {
    const r = i[0](n);
    for (let o = 1; o < e; o += 2)
      if (r === i[o](n))
        return i[o + 1](n);
    return i[e - 1](n);
  };
}
function Rd(s) {
  return !0;
}
function Ad(s) {
  const t = Pa(), e = bd(s, t), i = Na();
  return function(n, r) {
    return i.properties = n.getPropertiesInternal(), i.resolution = r, e(i);
  };
}
function Eo(s) {
  const t = Pa(), e = s.length, i = new Array(e);
  for (let o = 0; o < e; ++o)
    i[o] = Ss(s[o], t);
  const n = Na(), r = new Array(e);
  return function(o, a) {
    n.properties = o.getPropertiesInternal(), n.resolution = a;
    for (let l = 0; l < e; ++l)
      r[l] = i[l](n);
    return r;
  };
}
function bd(s, t) {
  const e = s.length, i = new Array(e);
  for (let n = 0; n < e; ++n) {
    const r = s[n], o = "filter" in r ? pe(r.filter, rt, t) : Rd;
    let a;
    if (Array.isArray(r.style)) {
      const l = r.style.length;
      a = new Array(l);
      for (let c = 0; c < l; ++c)
        a[c] = Ss(r.style[c], t);
    } else
      a = [Ss(r.style, t)];
    i[n] = { filter: o, styles: a };
  }
  return function(n) {
    const r = [];
    let o = !1;
    for (let a = 0; a < e; ++a) {
      const l = i[a].filter;
      if (!!l(n) && !(s[a].else && o)) {
        o = !0;
        for (const c of i[a].styles) {
          const h = c(n);
          !h || r.push(h);
        }
      }
    }
    return r;
  };
}
function Ss(s, t) {
  const e = Li(s, "", t), i = Oi(s, "", t), n = Td(s, t), r = wd(s, t), o = mt(s, "z-index", t), a = new vi();
  return function(l) {
    let c = !0;
    if (e) {
      const h = e(l);
      h && (c = !1), a.setFill(h);
    }
    if (i) {
      const h = i(l);
      h && (c = !1), a.setStroke(h);
    }
    if (n) {
      const h = n(l);
      h && (c = !1), a.setText(h);
    }
    if (r) {
      const h = r(l);
      h && (c = !1), a.setImage(h);
    }
    return o && a.setZIndex(o(l)), c ? null : a;
  };
}
function Li(s, t, e) {
  const i = ka(
    s,
    t + "fill-color",
    e
  );
  if (!i)
    return null;
  const n = new Fn();
  return function(r) {
    const o = i(r);
    return o === "none" ? null : (n.setColor(o), n);
  };
}
function Oi(s, t, e) {
  const i = mt(
    s,
    t + "stroke-width",
    e
  ), n = ka(
    s,
    t + "stroke-color",
    e
  );
  if (!i && !n)
    return null;
  const r = se(
    s,
    t + "stroke-line-cap",
    e
  ), o = se(
    s,
    t + "stroke-line-join",
    e
  ), a = Ba(
    s,
    t + "stroke-line-dash",
    e
  ), l = mt(
    s,
    t + "stroke-line-dash-offset",
    e
  ), c = mt(
    s,
    t + "stroke-miter-limit",
    e
  ), h = new cr();
  return function(u) {
    if (n) {
      const d = n(u);
      if (d === "none")
        return null;
      h.setColor(d);
    }
    if (i && h.setWidth(i(u)), r) {
      const d = r(u);
      if (d !== "butt" && d !== "round" && d !== "square")
        throw new Error("Expected butt, round, or square line cap");
      h.setLineCap(d);
    }
    if (o) {
      const d = o(u);
      if (d !== "bevel" && d !== "round" && d !== "miter")
        throw new Error("Expected bevel, round, or miter line join");
      h.setLineJoin(d);
    }
    return a && h.setLineDash(a(u)), l && h.setLineDashOffset(l(u)), c && h.setMiterLimit(c(u)), h;
  };
}
function Td(s, t) {
  const e = "text-", i = se(s, e + "value", t);
  if (!i)
    return null;
  const n = Li(s, e, t), r = Li(
    s,
    e + "background-",
    t
  ), o = Oi(s, e, t), a = Oi(
    s,
    e + "background-",
    t
  ), l = se(s, e + "font", t), c = mt(
    s,
    e + "max-angle",
    t
  ), h = mt(
    s,
    e + "offset-x",
    t
  ), u = mt(
    s,
    e + "offset-y",
    t
  ), d = Mi(
    s,
    e + "overflow",
    t
  ), f = se(
    s,
    e + "placement",
    t
  ), g = mt(s, e + "repeat", t), m = kn(s, e + "scale", t), p = Mi(
    s,
    e + "rotate-with-view",
    t
  ), _ = mt(
    s,
    e + "rotation",
    t
  ), y = se(s, e + "align", t), C = se(
    s,
    e + "justify",
    t
  ), v = se(
    s,
    e + "baseline",
    t
  ), E = Ba(
    s,
    e + "padding",
    t
  ), I = new $u({});
  return function(A) {
    if (I.setText(i(A)), n && I.setFill(n(A)), r && I.setBackgroundFill(r(A)), o && I.setStroke(o(A)), a && I.setBackgroundStroke(a(A)), l && I.setFont(l(A)), c && I.setMaxAngle(c(A)), h && I.setOffsetX(h(A)), u && I.setOffsetY(u(A)), d && I.setOverflow(d(A)), f) {
      const R = f(A);
      if (R !== "point" && R !== "line")
        throw new Error("Expected point or line for text-placement");
      I.setPlacement(R);
    }
    if (g && I.setRepeat(g(A)), m && I.setScale(m(A)), p && I.setRotateWithView(p(A)), _ && I.setRotation(_(A)), y) {
      const R = y(A);
      if (R !== "left" && R !== "center" && R !== "right" && R !== "end" && R !== "start")
        throw new Error(
          "Expected left, right, center, start, or end for text-align"
        );
      I.setTextAlign(R);
    }
    if (C) {
      const R = C(A);
      if (R !== "left" && R !== "right" && R !== "center")
        throw new Error("Expected left, right, or center for text-justify");
      I.setJustify(R);
    }
    if (v) {
      const R = v(A);
      if (R !== "bottom" && R !== "top" && R !== "middle" && R !== "alphabetic" && R !== "hanging")
        throw new Error(
          "Expected bottom, top, middle, alphabetic, or hanging for text-baseline"
        );
      I.setTextBaseline(R);
    }
    return E && I.setPadding(E(A)), I;
  };
}
function wd(s, t) {
  return "icon-src" in s ? Ld(s, t) : "shape-points" in s ? Od(s, t) : "circle-radius" in s ? Md(s, t) : null;
}
function Ld(s, t) {
  const e = "icon-", i = e + "src", n = Ga(s[i], i), r = Cn(
    s,
    e + "anchor",
    t
  ), o = kn(s, e + "scale", t), a = mt(
    s,
    e + "opacity",
    t
  ), l = Cn(
    s,
    e + "displacement",
    t
  ), c = mt(
    s,
    e + "rotation",
    t
  ), h = Mi(
    s,
    e + "rotate-with-view",
    t
  ), u = Co(s, e + "anchor-origin"), d = vo(
    s,
    e + "anchor-x-units"
  ), f = vo(
    s,
    e + "anchor-y-units"
  ), g = Nd(s, e + "color"), m = Fd(s, e + "cross-origin"), p = Pd(s, e + "offset"), _ = Co(s, e + "offset-origin"), y = Xe(s, e + "width"), C = Xe(s, e + "height"), v = Dd(s, e + "size"), E = fr(s, e + "declutter"), I = new La({
    src: n,
    anchorOrigin: u,
    anchorXUnits: d,
    anchorYUnits: f,
    color: g,
    crossOrigin: m,
    offset: p,
    offsetOrigin: _,
    height: C,
    width: y,
    size: v,
    declutterMode: E
  });
  return function(A) {
    return a && I.setOpacity(a(A)), l && I.setDisplacement(l(A)), c && I.setRotation(c(A)), h && I.setRotateWithView(h(A)), o && I.setScale(o(A)), r && I.setAnchor(r(A)), I;
  };
}
function Od(s, t) {
  const e = "shape-", i = e + "points", n = Wa(s[i], i), r = Li(s, e, t), o = Oi(s, e, t), a = kn(s, e + "scale", t), l = Cn(
    s,
    e + "displacement",
    t
  ), c = mt(
    s,
    e + "rotation",
    t
  ), h = Mi(
    s,
    e + "rotate-with-view",
    t
  ), u = Xe(s, e + "radius"), d = Xe(s, e + "radius1"), f = Xe(s, e + "radius2"), g = Xe(s, e + "angle"), m = fr(
    s,
    e + "declutter-mode"
  ), p = new rr({
    points: n,
    radius: u,
    radius1: d,
    radius2: f,
    angle: g,
    declutterMode: m
  });
  return function(_) {
    return r && p.setFill(r(_)), o && p.setStroke(o(_)), l && p.setDisplacement(l(_)), c && p.setRotation(c(_)), h && p.setRotateWithView(h(_)), a && p.setScale(a(_)), p;
  };
}
function Md(s, t) {
  const e = "circle-", i = Li(s, e, t), n = Oi(s, e, t), r = mt(s, e + "radius", t), o = kn(s, e + "scale", t), a = Cn(
    s,
    e + "displacement",
    t
  ), l = mt(
    s,
    e + "rotation",
    t
  ), c = Mi(
    s,
    e + "rotate-with-view",
    t
  ), h = fr(
    s,
    e + "declutter-mode"
  ), u = new wa({
    radius: 5,
    declutterMode: h
  });
  return function(d) {
    return r && u.setRadius(r(d)), i && u.setFill(i(d)), n && u.setStroke(n(d)), a && u.setDisplacement(a(d)), l && u.setRotation(l(d)), c && u.setRotateWithView(c(d)), o && u.setScale(o(d)), u;
  };
}
function mt(s, t, e) {
  if (!(t in s))
    return;
  const i = pe(s[t], D, e);
  return function(n) {
    return Wa(i(n), t);
  };
}
function se(s, t, e) {
  if (!(t in s))
    return null;
  const i = pe(s[t], $e, e);
  return function(n) {
    return Ga(i(n), t);
  };
}
function Mi(s, t, e) {
  if (!(t in s))
    return null;
  const i = pe(s[t], rt, e);
  return function(n) {
    const r = i(n);
    if (typeof r != "boolean")
      throw new Error(`Expected a boolean for ${t}`);
    return r;
  };
}
function ka(s, t, e) {
  if (!(t in s))
    return null;
  const i = pe(
    s[t],
    dr | $e,
    e
  );
  return function(n) {
    return za(i(n), t);
  };
}
function Ba(s, t, e) {
  if (!(t in s))
    return null;
  const i = pe(s[t], Wi, e);
  return function(n) {
    return zi(i(n), t);
  };
}
function Cn(s, t, e) {
  if (!(t in s))
    return null;
  const i = pe(s[t], Wi, e);
  return function(n) {
    const r = zi(i(n), t);
    if (r.length !== 2)
      throw new Error(`Expected two numbers for ${t}`);
    return r;
  };
}
function kn(s, t, e) {
  if (!(t in s))
    return null;
  const i = pe(
    s[t],
    Wi | D,
    e
  );
  return function(n) {
    return kd(i(n), t);
  };
}
function Xe(s, t) {
  const e = s[t];
  if (e !== void 0) {
    if (typeof e != "number")
      throw new Error(`Expected a number for ${t}`);
    return e;
  }
}
function Dd(s, t) {
  const e = s[t];
  if (e !== void 0) {
    if (typeof e == "number")
      return wi(e);
    if (!Array.isArray(e))
      throw new Error(`Expected a number or size array for ${t}`);
    if (e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number")
      throw new Error(`Expected a number or size array for ${t}`);
    return e;
  }
}
function Fd(s, t) {
  const e = s[t];
  if (e !== void 0) {
    if (typeof e != "string")
      throw new Error(`Expected a string for ${t}`);
    return e;
  }
}
function Co(s, t) {
  const e = s[t];
  if (e !== void 0) {
    if (e !== "bottom-left" && e !== "bottom-right" && e !== "top-left" && e !== "top-right")
      throw new Error(
        `Expected bottom-left, bottom-right, top-left, or top-right for ${t}`
      );
    return e;
  }
}
function vo(s, t) {
  const e = s[t];
  if (e !== void 0) {
    if (e !== "pixels" && e !== "fraction")
      throw new Error(`Expected pixels or fraction for ${t}`);
    return e;
  }
}
function Pd(s, t) {
  const e = s[t];
  if (e !== void 0)
    return zi(e, t);
}
function fr(s, t) {
  const e = s[t];
  if (e !== void 0) {
    if (typeof e != "string")
      throw new Error(`Expected a string for ${t}`);
    if (e !== "declutter" && e !== "obstacle" && e !== "none")
      throw new Error(`Expected declutter, obstacle, or none for ${t}`);
    return e;
  }
}
function Nd(s, t) {
  const e = s[t];
  if (e !== void 0)
    return za(e, t);
}
function zi(s, t) {
  if (!Array.isArray(s))
    throw new Error(`Expected an array for ${t}`);
  const e = s.length;
  for (let i = 0; i < e; ++i)
    if (typeof s[i] != "number")
      throw new Error(`Expected an array of numbers for ${t}`);
  return s;
}
function Ga(s, t) {
  if (typeof s != "string")
    throw new Error(`Expected a string for ${t}`);
  return s;
}
function Wa(s, t) {
  if (typeof s != "number")
    throw new Error(`Expected a number for ${t}`);
  return s;
}
function za(s, t) {
  if (typeof s == "string")
    return s;
  const e = zi(s, t), i = e.length;
  if (i < 3 || i > 4)
    throw new Error(`Expected a color with 3 or 4 values for ${t}`);
  return e;
}
function kd(s, t) {
  if (typeof s == "number")
    return s;
  const e = zi(s, t);
  if (e.length !== 2)
    throw new Error(`Expected an array of two numbers for ${t}`);
  return e;
}
const xo = {
  RENDER_ORDER: "renderOrder"
};
class Bd extends Mn {
  constructor(t) {
    t = t || {};
    const e = Object.assign({}, t);
    delete e.style, delete e.renderBuffer, delete e.updateWhileAnimating, delete e.updateWhileInteracting, super(e), this.declutter_ = t.declutter !== void 0 ? t.declutter : !1, this.renderBuffer_ = t.renderBuffer !== void 0 ? t.renderBuffer : 100, this.style_ = null, this.styleFunction_ = void 0, this.setStyle(t.style), this.updateWhileAnimating_ = t.updateWhileAnimating !== void 0 ? t.updateWhileAnimating : !1, this.updateWhileInteracting_ = t.updateWhileInteracting !== void 0 ? t.updateWhileInteracting : !1;
  }
  getDeclutter() {
    return this.declutter_;
  }
  getFeatures(t) {
    return super.getFeatures(t);
  }
  getRenderBuffer() {
    return this.renderBuffer_;
  }
  getRenderOrder() {
    return this.get(xo.RENDER_ORDER);
  }
  getStyle() {
    return this.style_;
  }
  getStyleFunction() {
    return this.styleFunction_;
  }
  getUpdateWhileAnimating() {
    return this.updateWhileAnimating_;
  }
  getUpdateWhileInteracting() {
    return this.updateWhileInteracting_;
  }
  renderDeclutter(t) {
    t.declutterTree || (t.declutterTree = new Ma(9)), this.getRenderer().renderDeclutter(t);
  }
  setRenderOrder(t) {
    this.set(xo.RENDER_ORDER, t);
  }
  setStyle(t) {
    this.style_ = Gd(t), this.styleFunction_ = t === null ? void 0 : Zu(this.style_), this.changed();
  }
}
function Gd(s) {
  if (s === void 0)
    return ju;
  if (!s)
    return null;
  if (typeof s == "function" || s instanceof vi)
    return s;
  if (!Array.isArray(s))
    return Eo([s]);
  if (s.length === 0)
    return [];
  const t = s.length, e = s[0];
  if (e instanceof vi) {
    const n = new Array(t);
    for (let r = 0; r < t; ++r) {
      const o = s[r];
      if (!(o instanceof vi))
        throw new Error("Expected a list of style instances");
      n[r] = o;
    }
    return n;
  }
  if ("style" in e) {
    const n = new Array(t);
    for (let r = 0; r < t; ++r) {
      const o = s[r];
      if (!("style" in o))
        throw new Error("Expected a list of rules with a style property");
      n[r] = o;
    }
    return Ad(n);
  }
  return Eo(s);
}
const Wd = Bd, Hi = {
  BEGIN_GEOMETRY: 0,
  BEGIN_PATH: 1,
  CIRCLE: 2,
  CLOSE_PATH: 3,
  CUSTOM: 4,
  DRAW_CHARS: 5,
  DRAW_IMAGE: 6,
  END_GEOMETRY: 7,
  FILL: 8,
  MOVE_TO_LINE_TO: 9,
  SET_FILL_STYLE: 10,
  SET_STROKE_STYLE: 11,
  STROKE: 12
}, an = [Hi.FILL], ae = [Hi.STROKE], Se = [Hi.BEGIN_PATH], Io = [Hi.CLOSE_PATH], b = Hi;
class zd {
  drawCustom(t, e, i, n) {
  }
  drawGeometry(t) {
  }
  setStyle(t) {
  }
  drawCircle(t, e) {
  }
  drawFeature(t, e) {
  }
  drawGeometryCollection(t, e) {
  }
  drawLineString(t, e) {
  }
  drawMultiLineString(t, e) {
  }
  drawMultiPoint(t, e) {
  }
  drawMultiPolygon(t, e) {
  }
  drawPoint(t, e) {
  }
  drawPolygon(t, e) {
  }
  drawText(t, e) {
  }
  setFillStrokeStyle(t, e) {
  }
  setImageStyle(t, e) {
  }
  setTextStyle(t, e) {
  }
}
const Ha = zd;
class Hd extends Ha {
  constructor(t, e, i, n) {
    super(), this.tolerance = t, this.maxExtent = e, this.pixelRatio = n, this.maxLineWidth = 0, this.resolution = i, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_ = null, this.bufferedMaxExtent_ = null, this.instructions = [], this.coordinates = [], this.tmpCoordinate_ = [], this.hitDetectionInstructions = [], this.state = {};
  }
  applyPixelRatio(t) {
    const e = this.pixelRatio;
    return e == 1 ? t : t.map(function(i) {
      return i * e;
    });
  }
  appendFlatPointCoordinates(t, e) {
    const i = this.getBufferedMaxExtent(), n = this.tmpCoordinate_, r = this.coordinates;
    let o = r.length;
    for (let a = 0, l = t.length; a < l; a += e)
      n[0] = t[a], n[1] = t[a + 1], $l(i, n) && (r[o++] = n[0], r[o++] = n[1]);
    return o;
  }
  appendFlatLineCoordinates(t, e, i, n, r, o) {
    const a = this.coordinates;
    let l = a.length;
    const c = this.getBufferedMaxExtent();
    o && (e += n);
    let h = t[e], u = t[e + 1];
    const d = this.tmpCoordinate_;
    let f = !0, g, m, p;
    for (g = e + n; g < i; g += n)
      d[0] = t[g], d[1] = t[g + 1], p = cs(c, d), p !== m ? (f && (a[l++] = h, a[l++] = u, f = !1), a[l++] = d[0], a[l++] = d[1]) : p === it.INTERSECTING ? (a[l++] = d[0], a[l++] = d[1], f = !1) : f = !0, h = d[0], u = d[1], m = p;
    return (r && f || g === e + n) && (a[l++] = h, a[l++] = u), l;
  }
  drawCustomCoordinates_(t, e, i, n, r) {
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o], c = this.appendFlatLineCoordinates(
        t,
        e,
        l,
        n,
        !1,
        !1
      );
      r.push(c), e = l;
    }
    return e;
  }
  drawCustom(t, e, i, n) {
    this.beginGeometry(t, e);
    const r = t.getType(), o = t.getStride(), a = this.coordinates.length;
    let l, c, h, u, d;
    switch (r) {
      case "MultiPolygon":
        l = t.getOrientedFlatCoordinates(), u = [];
        const f = t.getEndss();
        d = 0;
        for (let g = 0, m = f.length; g < m; ++g) {
          const p = [];
          d = this.drawCustomCoordinates_(
            l,
            d,
            f[g],
            o,
            p
          ), u.push(p);
        }
        this.instructions.push([
          b.CUSTOM,
          a,
          u,
          t,
          i,
          _s
        ]), this.hitDetectionInstructions.push([
          b.CUSTOM,
          a,
          u,
          t,
          n || i,
          _s
        ]);
        break;
      case "Polygon":
      case "MultiLineString":
        h = [], l = r == "Polygon" ? t.getOrientedFlatCoordinates() : t.getFlatCoordinates(), d = this.drawCustomCoordinates_(
          l,
          0,
          t.getEnds(),
          o,
          h
        ), this.instructions.push([
          b.CUSTOM,
          a,
          h,
          t,
          i,
          Si
        ]), this.hitDetectionInstructions.push([
          b.CUSTOM,
          a,
          h,
          t,
          n || i,
          Si
        ]);
        break;
      case "LineString":
      case "Circle":
        l = t.getFlatCoordinates(), c = this.appendFlatLineCoordinates(
          l,
          0,
          l.length,
          o,
          !1,
          !1
        ), this.instructions.push([
          b.CUSTOM,
          a,
          c,
          t,
          i,
          re
        ]), this.hitDetectionInstructions.push([
          b.CUSTOM,
          a,
          c,
          t,
          n || i,
          re
        ]);
        break;
      case "MultiPoint":
        l = t.getFlatCoordinates(), c = this.appendFlatPointCoordinates(l, o), c > a && (this.instructions.push([
          b.CUSTOM,
          a,
          c,
          t,
          i,
          re
        ]), this.hitDetectionInstructions.push([
          b.CUSTOM,
          a,
          c,
          t,
          n || i,
          re
        ]));
        break;
      case "Point":
        l = t.getFlatCoordinates(), this.coordinates.push(l[0], l[1]), c = this.coordinates.length, this.instructions.push([
          b.CUSTOM,
          a,
          c,
          t,
          i
        ]), this.hitDetectionInstructions.push([
          b.CUSTOM,
          a,
          c,
          t,
          n || i
        ]);
        break;
    }
    this.endGeometry(e);
  }
  beginGeometry(t, e) {
    this.beginGeometryInstruction1_ = [
      b.BEGIN_GEOMETRY,
      e,
      0,
      t
    ], this.instructions.push(this.beginGeometryInstruction1_), this.beginGeometryInstruction2_ = [
      b.BEGIN_GEOMETRY,
      e,
      0,
      t
    ], this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
  }
  finish() {
    return {
      instructions: this.instructions,
      hitDetectionInstructions: this.hitDetectionInstructions,
      coordinates: this.coordinates
    };
  }
  reverseHitDetectionInstructions() {
    const t = this.hitDetectionInstructions;
    t.reverse();
    let e;
    const i = t.length;
    let n, r, o = -1;
    for (e = 0; e < i; ++e)
      n = t[e], r = n[0], r == b.END_GEOMETRY ? o = e : r == b.BEGIN_GEOMETRY && (n[2] = e, Pl(this.hitDetectionInstructions, o, e), o = -1);
  }
  setFillStrokeStyle(t, e) {
    const i = this.state;
    if (t) {
      const n = t.getColor();
      i.fillStyle = Bt(
        n || gt
      );
    } else
      i.fillStyle = void 0;
    if (e) {
      const n = e.getColor();
      i.strokeStyle = Bt(
        n || Ai
      );
      const r = e.getLineCap();
      i.lineCap = r !== void 0 ? r : je;
      const o = e.getLineDash();
      i.lineDash = o ? o.slice() : jt;
      const a = e.getLineDashOffset();
      i.lineDashOffset = a || qt;
      const l = e.getLineJoin();
      i.lineJoin = l !== void 0 ? l : qe;
      const c = e.getWidth();
      i.lineWidth = c !== void 0 ? c : Ti;
      const h = e.getMiterLimit();
      i.miterLimit = h !== void 0 ? h : Ri, i.lineWidth > this.maxLineWidth && (this.maxLineWidth = i.lineWidth, this.bufferedMaxExtent_ = null);
    } else
      i.strokeStyle = void 0, i.lineCap = void 0, i.lineDash = null, i.lineDashOffset = void 0, i.lineJoin = void 0, i.lineWidth = void 0, i.miterLimit = void 0;
  }
  createFill(t) {
    const e = t.fillStyle, i = [b.SET_FILL_STYLE, e];
    return typeof e != "string" && i.push(!0), i;
  }
  applyStroke(t) {
    this.instructions.push(this.createStroke(t));
  }
  createStroke(t) {
    return [
      b.SET_STROKE_STYLE,
      t.strokeStyle,
      t.lineWidth * this.pixelRatio,
      t.lineCap,
      t.lineJoin,
      t.miterLimit,
      this.applyPixelRatio(t.lineDash),
      t.lineDashOffset * this.pixelRatio
    ];
  }
  updateFillStyle(t, e) {
    const i = t.fillStyle;
    (typeof i != "string" || t.currentFillStyle != i) && (i !== void 0 && this.instructions.push(e.call(this, t)), t.currentFillStyle = i);
  }
  updateStrokeStyle(t, e) {
    const i = t.strokeStyle, n = t.lineCap, r = t.lineDash, o = t.lineDashOffset, a = t.lineJoin, l = t.lineWidth, c = t.miterLimit;
    (t.currentStrokeStyle != i || t.currentLineCap != n || r != t.currentLineDash && !me(t.currentLineDash, r) || t.currentLineDashOffset != o || t.currentLineJoin != a || t.currentLineWidth != l || t.currentMiterLimit != c) && (i !== void 0 && e.call(this, t), t.currentStrokeStyle = i, t.currentLineCap = n, t.currentLineDash = r, t.currentLineDashOffset = o, t.currentLineJoin = a, t.currentLineWidth = l, t.currentMiterLimit = c);
  }
  endGeometry(t) {
    this.beginGeometryInstruction1_[2] = this.instructions.length, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length, this.beginGeometryInstruction2_ = null;
    const e = [b.END_GEOMETRY, t];
    this.instructions.push(e), this.hitDetectionInstructions.push(e);
  }
  getBufferedMaxExtent() {
    if (!this.bufferedMaxExtent_ && (this.bufferedMaxExtent_ = Xo(this.maxExtent), this.maxLineWidth > 0)) {
      const t = this.resolution * (this.maxLineWidth + 1) / 2;
      Ms(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_);
    }
    return this.bufferedMaxExtent_;
  }
}
const Xi = Hd;
class Xd extends Xi {
  constructor(t, e, i, n) {
    super(t, e, i, n), this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.anchorX_ = void 0, this.anchorY_ = void 0, this.height_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.scale_ = void 0, this.width_ = void 0, this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0;
  }
  drawPoint(t, e) {
    if (!this.image_)
      return;
    this.beginGeometry(t, e);
    const i = t.getFlatCoordinates(), n = t.getStride(), r = this.coordinates.length, o = this.appendFlatPointCoordinates(i, n);
    this.instructions.push([
      b.DRAW_IMAGE,
      r,
      o,
      this.image_,
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        this.scale_[0] * this.pixelRatio / this.imagePixelRatio_,
        this.scale_[1] * this.pixelRatio / this.imagePixelRatio_
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_
    ]), this.hitDetectionInstructions.push([
      b.DRAW_IMAGE,
      r,
      o,
      this.hitDetectionImage_,
      this.anchorX_,
      this.anchorY_,
      this.height_,
      1,
      this.originX_,
      this.originY_,
      this.rotateWithView_,
      this.rotation_,
      this.scale_,
      this.width_,
      this.declutterMode_,
      this.declutterImageWithText_
    ]), this.endGeometry(e);
  }
  drawMultiPoint(t, e) {
    if (!this.image_)
      return;
    this.beginGeometry(t, e);
    const i = t.getFlatCoordinates(), n = t.getStride(), r = this.coordinates.length, o = this.appendFlatPointCoordinates(i, n);
    this.instructions.push([
      b.DRAW_IMAGE,
      r,
      o,
      this.image_,
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        this.scale_[0] * this.pixelRatio / this.imagePixelRatio_,
        this.scale_[1] * this.pixelRatio / this.imagePixelRatio_
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_
    ]), this.hitDetectionInstructions.push([
      b.DRAW_IMAGE,
      r,
      o,
      this.hitDetectionImage_,
      this.anchorX_,
      this.anchorY_,
      this.height_,
      1,
      this.originX_,
      this.originY_,
      this.rotateWithView_,
      this.rotation_,
      this.scale_,
      this.width_,
      this.declutterMode_,
      this.declutterImageWithText_
    ]), this.endGeometry(e);
  }
  finish() {
    return this.reverseHitDetectionInstructions(), this.anchorX_ = void 0, this.anchorY_ = void 0, this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.height_ = void 0, this.scale_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.width_ = void 0, super.finish();
  }
  setImageStyle(t, e) {
    const i = t.getAnchor(), n = t.getSize(), r = t.getOrigin();
    this.imagePixelRatio_ = t.getPixelRatio(this.pixelRatio), this.anchorX_ = i[0], this.anchorY_ = i[1], this.hitDetectionImage_ = t.getHitDetectionImage(), this.image_ = t.getImage(this.pixelRatio), this.height_ = n[1], this.opacity_ = t.getOpacity(), this.originX_ = r[0], this.originY_ = r[1], this.rotateWithView_ = t.getRotateWithView(), this.rotation_ = t.getRotation(), this.scale_ = t.getScaleArray(), this.width_ = n[0], this.declutterMode_ = t.getDeclutterMode(), this.declutterImageWithText_ = e;
  }
}
const Ud = Xd;
class Vd extends Xi {
  constructor(t, e, i, n) {
    super(t, e, i, n);
  }
  drawFlatCoordinates_(t, e, i, n) {
    const r = this.coordinates.length, o = this.appendFlatLineCoordinates(
      t,
      e,
      i,
      n,
      !1,
      !1
    ), a = [
      b.MOVE_TO_LINE_TO,
      r,
      o
    ];
    return this.instructions.push(a), this.hitDetectionInstructions.push(a), i;
  }
  drawLineString(t, e) {
    const i = this.state, n = i.strokeStyle, r = i.lineWidth;
    if (n === void 0 || r === void 0)
      return;
    this.updateStrokeStyle(i, this.applyStroke), this.beginGeometry(t, e), this.hitDetectionInstructions.push(
      [
        b.SET_STROKE_STYLE,
        i.strokeStyle,
        i.lineWidth,
        i.lineCap,
        i.lineJoin,
        i.miterLimit,
        jt,
        qt
      ],
      Se
    );
    const o = t.getFlatCoordinates(), a = t.getStride();
    this.drawFlatCoordinates_(
      o,
      0,
      o.length,
      a
    ), this.hitDetectionInstructions.push(ae), this.endGeometry(e);
  }
  drawMultiLineString(t, e) {
    const i = this.state, n = i.strokeStyle, r = i.lineWidth;
    if (n === void 0 || r === void 0)
      return;
    this.updateStrokeStyle(i, this.applyStroke), this.beginGeometry(t, e), this.hitDetectionInstructions.push(
      [
        b.SET_STROKE_STYLE,
        i.strokeStyle,
        i.lineWidth,
        i.lineCap,
        i.lineJoin,
        i.miterLimit,
        jt,
        qt
      ],
      Se
    );
    const o = t.getEnds(), a = t.getFlatCoordinates(), l = t.getStride();
    let c = 0;
    for (let h = 0, u = o.length; h < u; ++h)
      c = this.drawFlatCoordinates_(
        a,
        c,
        o[h],
        l
      );
    this.hitDetectionInstructions.push(ae), this.endGeometry(e);
  }
  finish() {
    const t = this.state;
    return t.lastStroke != null && t.lastStroke != this.coordinates.length && this.instructions.push(ae), this.reverseHitDetectionInstructions(), this.state = null, super.finish();
  }
  applyStroke(t) {
    t.lastStroke != null && t.lastStroke != this.coordinates.length && (this.instructions.push(ae), t.lastStroke = this.coordinates.length), t.lastStroke = 0, super.applyStroke(t), this.instructions.push(Se);
  }
}
const Yd = Vd;
class Kd extends Xi {
  constructor(t, e, i, n) {
    super(t, e, i, n);
  }
  drawFlatCoordinatess_(t, e, i, n) {
    const r = this.state, o = r.fillStyle !== void 0, a = r.strokeStyle !== void 0, l = i.length;
    this.instructions.push(Se), this.hitDetectionInstructions.push(Se);
    for (let c = 0; c < l; ++c) {
      const h = i[c], u = this.coordinates.length, d = this.appendFlatLineCoordinates(
        t,
        e,
        h,
        n,
        !0,
        !a
      ), f = [
        b.MOVE_TO_LINE_TO,
        u,
        d
      ];
      this.instructions.push(f), this.hitDetectionInstructions.push(f), a && (this.instructions.push(Io), this.hitDetectionInstructions.push(Io)), e = h;
    }
    return o && (this.instructions.push(an), this.hitDetectionInstructions.push(an)), a && (this.instructions.push(ae), this.hitDetectionInstructions.push(ae)), e;
  }
  drawCircle(t, e) {
    const i = this.state, n = i.fillStyle, r = i.strokeStyle;
    if (n === void 0 && r === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(t, e), i.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      b.SET_FILL_STYLE,
      gt
    ]), i.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      b.SET_STROKE_STYLE,
      i.strokeStyle,
      i.lineWidth,
      i.lineCap,
      i.lineJoin,
      i.miterLimit,
      jt,
      qt
    ]);
    const o = t.getFlatCoordinates(), a = t.getStride(), l = this.coordinates.length;
    this.appendFlatLineCoordinates(
      o,
      0,
      o.length,
      a,
      !1,
      !1
    );
    const c = [b.CIRCLE, l];
    this.instructions.push(Se, c), this.hitDetectionInstructions.push(Se, c), i.fillStyle !== void 0 && (this.instructions.push(an), this.hitDetectionInstructions.push(an)), i.strokeStyle !== void 0 && (this.instructions.push(ae), this.hitDetectionInstructions.push(ae)), this.endGeometry(e);
  }
  drawPolygon(t, e) {
    const i = this.state, n = i.fillStyle, r = i.strokeStyle;
    if (n === void 0 && r === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(t, e), i.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      b.SET_FILL_STYLE,
      gt
    ]), i.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      b.SET_STROKE_STYLE,
      i.strokeStyle,
      i.lineWidth,
      i.lineCap,
      i.lineJoin,
      i.miterLimit,
      jt,
      qt
    ]);
    const o = t.getEnds(), a = t.getOrientedFlatCoordinates(), l = t.getStride();
    this.drawFlatCoordinatess_(
      a,
      0,
      o,
      l
    ), this.endGeometry(e);
  }
  drawMultiPolygon(t, e) {
    const i = this.state, n = i.fillStyle, r = i.strokeStyle;
    if (n === void 0 && r === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(t, e), i.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      b.SET_FILL_STYLE,
      gt
    ]), i.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      b.SET_STROKE_STYLE,
      i.strokeStyle,
      i.lineWidth,
      i.lineCap,
      i.lineJoin,
      i.miterLimit,
      jt,
      qt
    ]);
    const o = t.getEndss(), a = t.getOrientedFlatCoordinates(), l = t.getStride();
    let c = 0;
    for (let h = 0, u = o.length; h < u; ++h)
      c = this.drawFlatCoordinatess_(
        a,
        c,
        o[h],
        l
      );
    this.endGeometry(e);
  }
  finish() {
    this.reverseHitDetectionInstructions(), this.state = null;
    const t = this.tolerance;
    if (t !== 0) {
      const e = this.coordinates;
      for (let i = 0, n = e.length; i < n; ++i)
        e[i] = Ce(e[i], t);
    }
    return super.finish();
  }
  setFillStrokeStyles_() {
    const t = this.state;
    t.fillStyle !== void 0 && this.updateFillStyle(t, this.createFill), t.strokeStyle !== void 0 && this.updateStrokeStyle(t, this.applyStroke);
  }
}
const So = Kd;
function Zd(s, t, e, i, n) {
  const r = [];
  let o = e, a = 0, l = t.slice(e, 2);
  for (; a < s && o + n < i; ) {
    const [c, h] = l.slice(-2), u = t[o + n], d = t[o + n + 1], f = Math.sqrt(
      (u - c) * (u - c) + (d - h) * (d - h)
    );
    if (a += f, a >= s) {
      const g = (s - a + f) / f, m = Ct(c, u, g), p = Ct(h, d, g);
      l.push(m, p), r.push(l), l = [m, p], a == s && (o += n), a = 0;
    } else if (a < s)
      l.push(
        t[o + n],
        t[o + n + 1]
      ), o += n;
    else {
      const g = f - a, m = Ct(c, u, g / f), p = Ct(h, d, g / f);
      l.push(m, p), r.push(l), l = [m, p], a = 0, o += n;
    }
  }
  return a > 0 && r.push(l), r;
}
function jd(s, t, e, i, n) {
  let r = e, o = e, a = 0, l = 0, c = e, h, u, d, f, g, m, p, _, y, C;
  for (u = e; u < i; u += n) {
    const v = t[u], E = t[u + 1];
    g !== void 0 && (y = v - g, C = E - m, f = Math.sqrt(y * y + C * C), p !== void 0 && (l += d, h = Math.acos((p * y + _ * C) / (d * f)), h > s && (l > a && (a = l, r = c, o = u), l = 0, c = u - n)), d = f, p = y, _ = C), g = v, m = E;
  }
  return l += f, l > a ? [c, u] : [r, o];
}
const vn = {
  left: 0,
  center: 0.5,
  right: 1,
  top: 0,
  middle: 0.5,
  hanging: 0.2,
  alphabetic: 0.8,
  ideographic: 0.8,
  bottom: 1
};
class qd extends Xi {
  constructor(t, e, i, n) {
    super(t, e, i, n), this.labels_ = null, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = void 0, this.textRotation_ = 0, this.textFillState_ = null, this.fillStates = {}, this.fillStates[gt] = { fillStyle: gt }, this.textStrokeState_ = null, this.strokeStates = {}, this.textState_ = {}, this.textStates = {}, this.textKey_ = "", this.fillKey_ = "", this.strokeKey_ = "", this.declutterImageWithText_ = void 0;
  }
  finish() {
    const t = super.finish();
    return t.textStates = this.textStates, t.fillStates = this.fillStates, t.strokeStates = this.strokeStates, t;
  }
  drawText(t, e) {
    const i = this.textFillState_, n = this.textStrokeState_, r = this.textState_;
    if (this.text_ === "" || !r || !i && !n)
      return;
    const o = this.coordinates;
    let a = o.length;
    const l = t.getType();
    let c = null, h = t.getStride();
    if (r.placement === "line" && (l == "LineString" || l == "MultiLineString" || l == "Polygon" || l == "MultiPolygon")) {
      if (!At(this.getBufferedMaxExtent(), t.getExtent()))
        return;
      let u;
      if (c = t.getFlatCoordinates(), l == "LineString")
        u = [c.length];
      else if (l == "MultiLineString")
        u = t.getEnds();
      else if (l == "Polygon")
        u = t.getEnds().slice(0, 1);
      else if (l == "MultiPolygon") {
        const m = t.getEndss();
        u = [];
        for (let p = 0, _ = m.length; p < _; ++p)
          u.push(m[p][0]);
      }
      this.beginGeometry(t, e);
      const d = r.repeat, f = d ? void 0 : r.textAlign;
      let g = 0;
      for (let m = 0, p = u.length; m < p; ++m) {
        let _;
        d ? _ = Zd(
          d * this.resolution,
          c,
          g,
          u[m],
          h
        ) : _ = [c.slice(g, u[m])];
        for (let y = 0, C = _.length; y < C; ++y) {
          const v = _[y];
          let E = 0, I = v.length;
          if (f == null) {
            const R = jd(
              r.maxAngle,
              v,
              0,
              v.length,
              2
            );
            E = R[0], I = R[1];
          }
          for (let R = E; R < I; R += h)
            o.push(v[R], v[R + 1]);
          const A = o.length;
          g = u[m], this.drawChars_(a, A), a = A;
        }
      }
      this.endGeometry(e);
    } else {
      let u = r.overflow ? null : [];
      switch (l) {
        case "Point":
        case "MultiPoint":
          c = t.getFlatCoordinates();
          break;
        case "LineString":
          c = t.getFlatMidpoint();
          break;
        case "Circle":
          c = t.getCenter();
          break;
        case "MultiLineString":
          c = t.getFlatMidpoints(), h = 2;
          break;
        case "Polygon":
          c = t.getFlatInteriorPoint(), r.overflow || u.push(c[2] / this.resolution), h = 3;
          break;
        case "MultiPolygon":
          const _ = t.getFlatInteriorPoints();
          c = [];
          for (let y = 0, C = _.length; y < C; y += 3)
            r.overflow || u.push(_[y + 2] / this.resolution), c.push(_[y], _[y + 1]);
          if (c.length === 0)
            return;
          h = 2;
          break;
      }
      const d = this.appendFlatPointCoordinates(c, h);
      if (d === a)
        return;
      if (u && (d - a) / 2 !== c.length / h) {
        let _ = a / 2;
        u = u.filter((y, C) => {
          const v = o[(_ + C) * 2] === c[C * h] && o[(_ + C) * 2 + 1] === c[C * h + 1];
          return v || --_, v;
        });
      }
      this.saveTextStates_(), (r.backgroundFill || r.backgroundStroke) && (this.setFillStrokeStyle(
        r.backgroundFill,
        r.backgroundStroke
      ), r.backgroundFill && this.updateFillStyle(this.state, this.createFill), r.backgroundStroke && (this.updateStrokeStyle(this.state, this.applyStroke), this.hitDetectionInstructions.push(this.createStroke(this.state)))), this.beginGeometry(t, e);
      let f = r.padding;
      if (f != Ie && (r.scale[0] < 0 || r.scale[1] < 0)) {
        let _ = r.padding[0], y = r.padding[1], C = r.padding[2], v = r.padding[3];
        r.scale[0] < 0 && (y = -y, v = -v), r.scale[1] < 0 && (_ = -_, C = -C), f = [_, y, C, v];
      }
      const g = this.pixelRatio;
      this.instructions.push([
        b.DRAW_IMAGE,
        a,
        d,
        null,
        NaN,
        NaN,
        NaN,
        1,
        0,
        0,
        this.textRotateWithView_,
        this.textRotation_,
        [1, 1],
        NaN,
        void 0,
        this.declutterImageWithText_,
        f == Ie ? Ie : f.map(function(_) {
          return _ * g;
        }),
        !!r.backgroundFill,
        !!r.backgroundStroke,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        u
      ]);
      const m = 1 / g, p = this.state.fillStyle;
      r.backgroundFill && (this.state.fillStyle = gt, this.hitDetectionInstructions.push(this.createFill(this.state))), this.hitDetectionInstructions.push([
        b.DRAW_IMAGE,
        a,
        d,
        null,
        NaN,
        NaN,
        NaN,
        1,
        0,
        0,
        this.textRotateWithView_,
        this.textRotation_,
        [m, m],
        NaN,
        void 0,
        this.declutterImageWithText_,
        f,
        !!r.backgroundFill,
        !!r.backgroundStroke,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_ ? gt : this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        u
      ]), r.backgroundFill && (this.state.fillStyle = p, this.hitDetectionInstructions.push(this.createFill(this.state))), this.endGeometry(e);
    }
  }
  saveTextStates_() {
    const t = this.textStrokeState_, e = this.textState_, i = this.textFillState_, n = this.strokeKey_;
    t && (n in this.strokeStates || (this.strokeStates[n] = {
      strokeStyle: t.strokeStyle,
      lineCap: t.lineCap,
      lineDashOffset: t.lineDashOffset,
      lineWidth: t.lineWidth,
      lineJoin: t.lineJoin,
      miterLimit: t.miterLimit,
      lineDash: t.lineDash
    }));
    const r = this.textKey_;
    r in this.textStates || (this.textStates[r] = {
      font: e.font,
      textAlign: e.textAlign || bi,
      justify: e.justify,
      textBaseline: e.textBaseline || pn,
      scale: e.scale
    });
    const o = this.fillKey_;
    i && (o in this.fillStates || (this.fillStates[o] = {
      fillStyle: i.fillStyle
    }));
  }
  drawChars_(t, e) {
    const i = this.textStrokeState_, n = this.textState_, r = this.strokeKey_, o = this.textKey_, a = this.fillKey_;
    this.saveTextStates_();
    const l = this.pixelRatio, c = vn[n.textBaseline], h = this.textOffsetY_ * l, u = this.text_, d = i ? i.lineWidth * Math.abs(n.scale[0]) / 2 : 0;
    this.instructions.push([
      b.DRAW_CHARS,
      t,
      e,
      c,
      n.overflow,
      a,
      n.maxAngle,
      l,
      h,
      r,
      d * l,
      u,
      o,
      1
    ]), this.hitDetectionInstructions.push([
      b.DRAW_CHARS,
      t,
      e,
      c,
      n.overflow,
      a && gt,
      n.maxAngle,
      l,
      h,
      r,
      d * l,
      u,
      o,
      1 / l
    ]);
  }
  setTextStyle(t, e) {
    let i, n, r;
    if (!t)
      this.text_ = "";
    else {
      const o = t.getFill();
      o ? (n = this.textFillState_, n || (n = {}, this.textFillState_ = n), n.fillStyle = Bt(
        o.getColor() || gt
      )) : (n = null, this.textFillState_ = n);
      const a = t.getStroke();
      if (!a)
        r = null, this.textStrokeState_ = r;
      else {
        r = this.textStrokeState_, r || (r = {}, this.textStrokeState_ = r);
        const g = a.getLineDash(), m = a.getLineDashOffset(), p = a.getWidth(), _ = a.getMiterLimit();
        r.lineCap = a.getLineCap() || je, r.lineDash = g ? g.slice() : jt, r.lineDashOffset = m === void 0 ? qt : m, r.lineJoin = a.getLineJoin() || qe, r.lineWidth = p === void 0 ? Ti : p, r.miterLimit = _ === void 0 ? Ri : _, r.strokeStyle = Bt(
          a.getColor() || Ai
        );
      }
      i = this.textState_;
      const l = t.getFont() || Ea;
      Lc(l);
      const c = t.getScaleArray();
      i.overflow = t.getOverflow(), i.font = l, i.maxAngle = t.getMaxAngle(), i.placement = t.getPlacement(), i.textAlign = t.getTextAlign(), i.repeat = t.getRepeat(), i.justify = t.getJustify(), i.textBaseline = t.getTextBaseline() || pn, i.backgroundFill = t.getBackgroundFill(), i.backgroundStroke = t.getBackgroundStroke(), i.padding = t.getPadding() || Ie, i.scale = c === void 0 ? [1, 1] : c;
      const h = t.getOffsetX(), u = t.getOffsetY(), d = t.getRotateWithView(), f = t.getRotation();
      this.text_ = t.getText() || "", this.textOffsetX_ = h === void 0 ? 0 : h, this.textOffsetY_ = u === void 0 ? 0 : u, this.textRotateWithView_ = d === void 0 ? !1 : d, this.textRotation_ = f === void 0 ? 0 : f, this.strokeKey_ = r ? (typeof r.strokeStyle == "string" ? r.strokeStyle : J(r.strokeStyle)) + r.lineCap + r.lineDashOffset + "|" + r.lineWidth + r.lineJoin + r.miterLimit + "[" + r.lineDash.join() + "]" : "", this.textKey_ = i.font + i.scale + (i.textAlign || "?") + (i.repeat || "?") + (i.justify || "?") + (i.textBaseline || "?"), this.fillKey_ = n ? typeof n.fillStyle == "string" ? n.fillStyle : "|" + J(n.fillStyle) : "";
    }
    this.declutterImageWithText_ = e;
  }
}
const $d = {
  Circle: So,
  Default: Xi,
  Image: Ud,
  LineString: Yd,
  Polygon: So,
  Text: qd
};
class Jd {
  constructor(t, e, i, n) {
    this.tolerance_ = t, this.maxExtent_ = e, this.pixelRatio_ = n, this.resolution_ = i, this.buildersByZIndex_ = {};
  }
  finish() {
    const t = {};
    for (const e in this.buildersByZIndex_) {
      t[e] = t[e] || {};
      const i = this.buildersByZIndex_[e];
      for (const n in i) {
        const r = i[n].finish();
        t[e][n] = r;
      }
    }
    return t;
  }
  getBuilder(t, e) {
    const i = t !== void 0 ? t.toString() : "0";
    let n = this.buildersByZIndex_[i];
    n === void 0 && (n = {}, this.buildersByZIndex_[i] = n);
    let r = n[e];
    if (r === void 0) {
      const o = $d[e];
      r = new o(
        this.tolerance_,
        this.maxExtent_,
        this.resolution_,
        this.pixelRatio_
      ), n[e] = r;
    }
    return r;
  }
}
const Ro = Jd;
class Qd extends Bo {
  constructor(t) {
    super(), this.ready = !0, this.boundHandleImageChange_ = this.handleImageChange_.bind(this), this.layer_ = t, this.declutterExecutorGroup = null;
  }
  getFeatures(t) {
    return G();
  }
  getData(t) {
    return null;
  }
  prepareFrame(t) {
    return G();
  }
  renderFrame(t, e) {
    return G();
  }
  loadedTileCallback(t, e, i) {
    t[e] || (t[e] = {}), t[e][i.tileCoord.toString()] = i;
  }
  createLoadedTileFinder(t, e, i) {
    return (n, r) => {
      const o = this.loadedTileCallback.bind(this, i, n);
      return t.forEachLoadedTile(e, n, r, o);
    };
  }
  forEachFeatureAtCoordinate(t, e, i, n, r) {
  }
  getLayer() {
    return this.layer_;
  }
  handleFontsChanged() {
  }
  handleImageChange_(t) {
    const e = t.target;
    (e.getState() === Y.LOADED || e.getState() === Y.ERROR) && this.renderIfReadyAndVisible();
  }
  loadImage(t) {
    let e = t.getState();
    return e != Y.LOADED && e != Y.ERROR && t.addEventListener(P.CHANGE, this.boundHandleImageChange_), e == Y.IDLE && (t.load(), e = t.getState()), e == Y.LOADED;
  }
  renderIfReadyAndVisible() {
    const t = this.getLayer();
    t && t.getVisible() && t.getSourceState() === "ready" && t.changed();
  }
  disposeInternal() {
    delete this.layer_, super.disposeInternal();
  }
}
const tf = Qd, Ao = [];
let We = null;
function ef() {
  We = Mt(1, 1, void 0, {
    willReadFrequently: !0
  });
}
class nf extends tf {
  constructor(t) {
    super(t), this.container = null, this.renderedResolution, this.tempTransform = Ot(), this.pixelTransform = Ot(), this.inversePixelTransform = Ot(), this.context = null, this.containerReused = !1, this.pixelContext_ = null, this.frameState = null;
  }
  getImageData(t, e, i) {
    We || ef(), We.clearRect(0, 0, 1, 1);
    let n;
    try {
      We.drawImage(t, e, i, 1, 1, 0, 0, 1, 1), n = We.getImageData(0, 0, 1, 1).data;
    } catch {
      return We = null, null;
    }
    return n;
  }
  getBackground(t) {
    let i = this.getLayer().getBackground();
    return typeof i == "function" && (i = i(t.viewState.resolution)), i || void 0;
  }
  useContainer(t, e, i) {
    const n = this.getLayer().getClassName();
    let r, o;
    if (t && t.className === n && (!i || t && t.style.backgroundColor && me(
      cn(t.style.backgroundColor),
      cn(i)
    ))) {
      const a = t.firstElementChild;
      a instanceof HTMLCanvasElement && (o = a.getContext("2d"));
    }
    if (o && o.canvas.style.transform === e ? (this.container = t, this.context = o, this.containerReused = !0) : this.containerReused ? (this.container = null, this.context = null, this.containerReused = !1) : this.container && (this.container.style.backgroundColor = null), !this.container) {
      r = document.createElement("div"), r.className = n;
      let a = r.style;
      a.position = "absolute", a.width = "100%", a.height = "100%", o = Mt();
      const l = o.canvas;
      r.appendChild(l), a = l.style, a.position = "absolute", a.left = "0", a.transformOrigin = "top left", this.container = r, this.context = o;
    }
    !this.containerReused && i && !this.container.style.backgroundColor && (this.container.style.backgroundColor = i);
  }
  clipUnrotated(t, e, i) {
    const n = Zo(i), r = jo(i), o = Ko(i), a = Yo(i);
    at(e.coordinateToPixelTransform, n), at(e.coordinateToPixelTransform, r), at(e.coordinateToPixelTransform, o), at(e.coordinateToPixelTransform, a);
    const l = this.inversePixelTransform;
    at(l, n), at(l, r), at(l, o), at(l, a), t.save(), t.beginPath(), t.moveTo(Math.round(n[0]), Math.round(n[1])), t.lineTo(Math.round(r[0]), Math.round(r[1])), t.lineTo(Math.round(o[0]), Math.round(o[1])), t.lineTo(Math.round(a[0]), Math.round(a[1])), t.clip();
  }
  dispatchRenderEvent_(t, e, i) {
    const n = this.getLayer();
    if (n.hasListener(t)) {
      const r = new _a(
        t,
        this.inversePixelTransform,
        i,
        e
      );
      n.dispatchEvent(r);
    }
  }
  preRender(t, e) {
    this.frameState = e, this.dispatchRenderEvent_(Wt.PRERENDER, t, e);
  }
  postRender(t, e) {
    this.dispatchRenderEvent_(Wt.POSTRENDER, t, e);
  }
  getRenderTransform(t, e, i, n, r, o, a) {
    const l = r / 2, c = o / 2, h = n / e, u = -h, d = -t[0] + a, f = -t[1];
    return we(
      this.tempTransform,
      l,
      c,
      h,
      u,
      -i,
      d,
      f
    );
  }
  disposeInternal() {
    delete this.frameState, super.disposeInternal();
  }
}
const sf = nf;
function rf(s, t, e, i, n, r, o, a, l, c, h, u) {
  let d = s[t], f = s[t + 1], g = 0, m = 0, p = 0, _ = 0;
  function y() {
    g = d, m = f, t += i, d = s[t], f = s[t + 1], _ += p, p = Math.sqrt((d - g) * (d - g) + (f - m) * (f - m));
  }
  do
    y();
  while (t < e - i && _ + p < r);
  let C = p === 0 ? 0 : (r - _) / p;
  const v = Ct(g, d, C), E = Ct(m, f, C), I = t - i, A = _, R = r + a * l(c, n, h);
  for (; t < e - i && _ + p < R; )
    y();
  C = p === 0 ? 0 : (R - _) / p;
  const M = Ct(g, d, C), N = Ct(m, f, C);
  let Z;
  if (u) {
    const L = [v, E, M, N];
    ha(L, 0, 4, 2, u, L, L), Z = L[0] > L[2];
  } else
    Z = v > M;
  const X = Math.PI, H = [], _t = I + i === t;
  t = I, p = 0, _ = A, d = s[t], f = s[t + 1];
  let w;
  if (_t) {
    y(), w = Math.atan2(f - m, d - g), Z && (w += w > 0 ? -X : X);
    const L = (M + v) / 2, O = (N + E) / 2;
    return H[0] = [L, O, (R - r) / 2, w, n], H;
  }
  n = n.replace(/\n/g, " ");
  for (let L = 0, O = n.length; L < O; ) {
    y();
    let W = Math.atan2(f - m, d - g);
    if (Z && (W += W > 0 ? -X : X), w !== void 0) {
      let Pt = W - w;
      if (Pt += Pt > X ? -2 * X : Pt < -X ? 2 * X : 0, Math.abs(Pt) > o)
        return null;
    }
    w = W;
    const tt = L;
    let et = 0;
    for (; L < O; ++L) {
      const Pt = Z ? O - L - 1 : L, Oe = a * l(c, n[Pt], h);
      if (t + i < e && _ + p < r + et + Oe / 2)
        break;
      et += Oe;
    }
    if (L === tt)
      continue;
    const Ft = Z ? n.substring(O - tt, O - L) : n.substring(tt, L);
    C = p === 0 ? 0 : (r + et / 2 - _) / p;
    const S = Ct(g, d, C), pr = Ct(m, f, C);
    H.push([S, pr, et / 2, W, Ft]), r += et;
  }
  return H;
}
function Xa(s, t, e, i) {
  let n = s[t], r = s[t + 1], o = 0;
  for (let a = t + i; a < e; a += i) {
    const l = s[a], c = s[a + 1];
    o += Math.sqrt((l - n) * (l - n) + (c - r) * (c - r)), n = l, r = c;
  }
  return o;
}
const Ne = ce(), Qt = [], Vt = [], Yt = [], te = [];
function bo(s) {
  return s[3].declutterBox;
}
const To = new RegExp(
  "[" + String.fromCharCode(1425) + "-" + String.fromCharCode(2303) + String.fromCharCode(64285) + "-" + String.fromCharCode(65023) + String.fromCharCode(65136) + "-" + String.fromCharCode(65276) + String.fromCharCode(67584) + "-" + String.fromCharCode(69631) + String.fromCharCode(124928) + "-" + String.fromCharCode(126975) + "]"
);
function ns(s, t) {
  return t === "start" ? t = To.test(s) ? "right" : "left" : t === "end" && (t = To.test(s) ? "left" : "right"), vn[t];
}
function of(s, t, e) {
  return e > 0 && s.push(`
`, ""), s.push(t, ""), s;
}
class af {
  constructor(t, e, i, n) {
    this.overlaps = i, this.pixelRatio = e, this.resolution = t, this.alignFill_, this.instructions = n.instructions, this.coordinates = n.coordinates, this.coordinateCache_ = {}, this.renderedTransform_ = Ot(), this.hitDetectionInstructions = n.hitDetectionInstructions, this.pixelCoordinates_ = null, this.viewRotation_ = 0, this.fillStates = n.fillStates || {}, this.strokeStates = n.strokeStates || {}, this.textStates = n.textStates || {}, this.widths_ = {}, this.labels_ = {};
  }
  createLabel(t, e, i, n) {
    const r = t + e + i + n;
    if (this.labels_[r])
      return this.labels_[r];
    const o = n ? this.strokeStates[n] : null, a = i ? this.fillStates[i] : null, l = this.textStates[e], c = this.pixelRatio, h = [
      l.scale[0] * c,
      l.scale[1] * c
    ], u = Array.isArray(t), d = l.justify ? vn[l.justify] : ns(
      Array.isArray(t) ? t[0] : t,
      l.textAlign || bi
    ), f = n && o.lineWidth ? o.lineWidth : 0, g = u ? t : t.split(`
`).reduce(of, []), { width: m, height: p, widths: _, heights: y, lineWidths: C } = Mc(
      l,
      g
    ), v = m + f, E = [], I = (v + 2) * h[0], A = (p + f) * h[1], R = {
      width: I < 0 ? Math.floor(I) : Math.ceil(I),
      height: A < 0 ? Math.floor(A) : Math.ceil(A),
      contextInstructions: E
    };
    (h[0] != 1 || h[1] != 1) && E.push("scale", h), n && (E.push("strokeStyle", o.strokeStyle), E.push("lineWidth", f), E.push("lineCap", o.lineCap), E.push("lineJoin", o.lineJoin), E.push("miterLimit", o.miterLimit), E.push("setLineDash", [o.lineDash]), E.push("lineDashOffset", o.lineDashOffset)), i && E.push("fillStyle", a.fillStyle), E.push("textBaseline", "middle"), E.push("textAlign", "center");
    const M = 0.5 - d;
    let N = d * v + M * f;
    const Z = [], X = [];
    let H = 0, _t = 0, w = 0, L = 0, O;
    for (let W = 0, tt = g.length; W < tt; W += 2) {
      const et = g[W];
      if (et === `
`) {
        _t += H, H = 0, N = d * v + M * f, ++L;
        continue;
      }
      const Ft = g[W + 1] || l.font;
      Ft !== O && (n && Z.push("font", Ft), i && X.push("font", Ft), O = Ft), H = Math.max(H, y[w]);
      const S = [
        et,
        N + M * _[w] + d * (_[w] - C[L]),
        0.5 * (f + H) + _t
      ];
      N += _[w], n && Z.push("strokeText", S), i && X.push("fillText", S), ++w;
    }
    return Array.prototype.push.apply(E, Z), Array.prototype.push.apply(E, X), this.labels_[r] = R, R;
  }
  replayTextBackground_(t, e, i, n, r, o, a) {
    t.beginPath(), t.moveTo.apply(t, e), t.lineTo.apply(t, i), t.lineTo.apply(t, n), t.lineTo.apply(t, r), t.lineTo.apply(t, e), o && (this.alignFill_ = o[2], this.fill_(t)), a && (this.setStrokeStyle_(
      t,
      a
    ), t.stroke());
  }
  calculateImageOrLabelDimensions_(t, e, i, n, r, o, a, l, c, h, u, d, f, g, m, p) {
    a *= d[0], l *= d[1];
    let _ = i - a, y = n - l;
    const C = r + c > t ? t - c : r, v = o + h > e ? e - h : o, E = g[3] + C * d[0] + g[1], I = g[0] + v * d[1] + g[2], A = _ - g[3], R = y - g[0];
    (m || u !== 0) && (Qt[0] = A, te[0] = A, Qt[1] = R, Vt[1] = R, Vt[0] = A + E, Yt[0] = Vt[0], Yt[1] = R + I, te[1] = Yt[1]);
    let M;
    return u !== 0 ? (M = we(
      Ot(),
      i,
      n,
      1,
      1,
      u,
      -i,
      -n
    ), at(M, Qt), at(M, Vt), at(M, Yt), at(M, te), Ze(
      Math.min(Qt[0], Vt[0], Yt[0], te[0]),
      Math.min(Qt[1], Vt[1], Yt[1], te[1]),
      Math.max(Qt[0], Vt[0], Yt[0], te[0]),
      Math.max(Qt[1], Vt[1], Yt[1], te[1]),
      Ne
    )) : Ze(
      Math.min(A, A + E),
      Math.min(R, R + I),
      Math.max(A, A + E),
      Math.max(R, R + I),
      Ne
    ), f && (_ = Math.round(_), y = Math.round(y)), {
      drawImageX: _,
      drawImageY: y,
      drawImageW: C,
      drawImageH: v,
      originX: c,
      originY: h,
      declutterBox: {
        minX: Ne[0],
        minY: Ne[1],
        maxX: Ne[2],
        maxY: Ne[3],
        value: p
      },
      canvasTransform: M,
      scale: d
    };
  }
  replayImageOrLabel_(t, e, i, n, r, o, a) {
    const l = !!(o || a), c = n.declutterBox, h = t.canvas, u = a ? a[2] * n.scale[0] / 2 : 0;
    return c.minX - u <= h.width / e && c.maxX + u >= 0 && c.minY - u <= h.height / e && c.maxY + u >= 0 && (l && this.replayTextBackground_(
      t,
      Qt,
      Vt,
      Yt,
      te,
      o,
      a
    ), Dc(
      t,
      n.canvasTransform,
      r,
      i,
      n.originX,
      n.originY,
      n.drawImageW,
      n.drawImageH,
      n.drawImageX,
      n.drawImageY,
      n.scale
    )), !0;
  }
  fill_(t) {
    if (this.alignFill_) {
      const e = at(this.renderedTransform_, [0, 0]), i = 512 * this.pixelRatio;
      t.save(), t.translate(e[0] % i, e[1] % i), t.rotate(this.viewRotation_);
    }
    t.fill(), this.alignFill_ && t.restore();
  }
  setStrokeStyle_(t, e) {
    t.strokeStyle = e[1], t.lineWidth = e[2], t.lineCap = e[3], t.lineJoin = e[4], t.miterLimit = e[5], t.lineDashOffset = e[7], t.setLineDash(e[6]);
  }
  drawLabelWithPointPlacement_(t, e, i, n) {
    const r = this.textStates[e], o = this.createLabel(t, e, n, i), a = this.strokeStates[i], l = this.pixelRatio, c = ns(
      Array.isArray(t) ? t[0] : t,
      r.textAlign || bi
    ), h = vn[r.textBaseline || pn], u = a && a.lineWidth ? a.lineWidth : 0, d = o.width / l - 2 * r.scale[0], f = c * d + 2 * (0.5 - c) * u, g = h * o.height / l + 2 * (0.5 - h) * u;
    return {
      label: o,
      anchorX: f,
      anchorY: g
    };
  }
  execute_(t, e, i, n, r, o, a, l) {
    let c;
    this.pixelCoordinates_ && me(i, this.renderedTransform_) ? c = this.pixelCoordinates_ : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []), c = le(
      this.coordinates,
      0,
      this.coordinates.length,
      2,
      i,
      this.pixelCoordinates_
    ), Kl(this.renderedTransform_, i));
    let h = 0;
    const u = n.length;
    let d = 0, f, g, m, p, _, y, C, v, E, I, A, R, M = 0, N = 0, Z = null, X = null;
    const H = this.coordinateCache_, _t = this.viewRotation_, w = Math.round(Math.atan2(-i[1], i[0]) * 1e12) / 1e12, L = {
      context: t,
      pixelRatio: this.pixelRatio,
      resolution: this.resolution,
      rotation: _t
    }, O = this.instructions != n || this.overlaps ? 0 : 200;
    let W, tt, et, Ft;
    for (; h < u; ) {
      const S = n[h];
      switch (S[0]) {
        case b.BEGIN_GEOMETRY:
          W = S[1], Ft = S[3], W.getGeometry() ? a !== void 0 && !At(a, Ft.getExtent()) ? h = S[2] + 1 : ++h : h = S[2];
          break;
        case b.BEGIN_PATH:
          M > O && (this.fill_(t), M = 0), N > O && (t.stroke(), N = 0), !M && !N && (t.beginPath(), p = NaN, _ = NaN), ++h;
          break;
        case b.CIRCLE:
          d = S[1];
          const Pt = c[d], Oe = c[d + 1], Za = c[d + 2], ja = c[d + 3], _r = Za - Pt, yr = ja - Oe, Er = Math.sqrt(_r * _r + yr * yr);
          t.moveTo(Pt + Er, Oe), t.arc(Pt, Oe, Er, 0, 2 * Math.PI, !0), ++h;
          break;
        case b.CLOSE_PATH:
          t.closePath(), ++h;
          break;
        case b.CUSTOM:
          d = S[1], f = S[2];
          const qa = S[3], $a = S[4], Cr = S.length == 6 ? S[5] : void 0;
          L.geometry = qa, L.feature = W, h in H || (H[h] = []);
          const ii = H[h];
          Cr ? Cr(c, d, f, 2, ii) : (ii[0] = c[d], ii[1] = c[d + 1], ii.length = 2), $a(ii, L), ++h;
          break;
        case b.DRAW_IMAGE:
          d = S[1], f = S[2], v = S[3], g = S[4], m = S[5];
          let Bn = S[6];
          const Ja = S[7], Qa = S[8], tl = S[9], vr = S[10];
          let Gn = S[11];
          const el = S[12];
          let Ui = S[13];
          const xr = S[14], ni = S[15];
          if (!v && S.length >= 20) {
            E = S[19], I = S[20], A = S[21], R = S[22];
            const yt = this.drawLabelWithPointPlacement_(
              E,
              I,
              A,
              R
            );
            v = yt.label, S[3] = v;
            const Me = S[23];
            g = (yt.anchorX - Me) * this.pixelRatio, S[4] = g;
            const It = S[24];
            m = (yt.anchorY - It) * this.pixelRatio, S[5] = m, Bn = v.height, S[6] = Bn, Ui = v.width, S[13] = Ui;
          }
          let Wn;
          S.length > 25 && (Wn = S[25]);
          let zn, Vi, Yi;
          S.length > 17 ? (zn = S[16], Vi = S[17], Yi = S[18]) : (zn = Ie, Vi = !1, Yi = !1), vr && w ? Gn += _t : !vr && !w && (Gn -= _t);
          let il = 0;
          for (; d < f; d += 2) {
            if (Wn && Wn[il++] < Ui / this.pixelRatio)
              continue;
            const yt = this.calculateImageOrLabelDimensions_(
              v.width,
              v.height,
              c[d],
              c[d + 1],
              Ui,
              Bn,
              g,
              m,
              Qa,
              tl,
              Gn,
              el,
              r,
              zn,
              Vi || Yi,
              W
            ), Me = [
              t,
              e,
              v,
              yt,
              Ja,
              Vi ? Z : null,
              Yi ? X : null
            ];
            if (l) {
              if (xr === "none")
                continue;
              if (xr === "obstacle") {
                l.insert(yt.declutterBox);
                continue;
              } else {
                let It, Ht;
                if (ni) {
                  const Et = f - d;
                  if (!ni[Et]) {
                    ni[Et] = Me;
                    continue;
                  }
                  if (It = ni[Et], delete ni[Et], Ht = bo(It), l.collides(Ht))
                    continue;
                }
                if (l.collides(yt.declutterBox))
                  continue;
                It && (l.insert(Ht), this.replayImageOrLabel_.apply(this, It)), l.insert(yt.declutterBox);
              }
            }
            this.replayImageOrLabel_.apply(this, Me);
          }
          ++h;
          break;
        case b.DRAW_CHARS:
          const Ir = S[1], Sr = S[2], Hn = S[3], nl = S[4];
          R = S[5];
          const sl = S[6], Rr = S[7], Ar = S[8];
          A = S[9];
          const Xn = S[10];
          E = S[11], I = S[12];
          const br = [
            S[13],
            S[13]
          ], Un = this.textStates[I], si = Un.font, ri = [
            Un.scale[0] * Rr,
            Un.scale[1] * Rr
          ];
          let oi;
          si in this.widths_ ? oi = this.widths_[si] : (oi = {}, this.widths_[si] = oi);
          const Tr = Xa(c, Ir, Sr, 2), wr = Math.abs(ri[0]) * lo(si, E, oi);
          if (nl || wr <= Tr) {
            const yt = this.textStates[I].textAlign, Me = (Tr - wr) * ns(E, yt), It = rf(
              c,
              Ir,
              Sr,
              2,
              E,
              Me,
              sl,
              Math.abs(ri[0]),
              lo,
              si,
              oi,
              w ? 0 : this.viewRotation_
            );
            t:
              if (It) {
                const Ht = [];
                let Et, Ki, Zi, ut, St;
                if (A)
                  for (Et = 0, Ki = It.length; Et < Ki; ++Et) {
                    St = It[Et], Zi = St[4], ut = this.createLabel(Zi, I, "", A), g = St[2] + (ri[0] < 0 ? -Xn : Xn), m = Hn * ut.height + (0.5 - Hn) * 2 * Xn * ri[1] / ri[0] - Ar;
                    const Xt = this.calculateImageOrLabelDimensions_(
                      ut.width,
                      ut.height,
                      St[0],
                      St[1],
                      ut.width,
                      ut.height,
                      g,
                      m,
                      0,
                      0,
                      St[3],
                      br,
                      !1,
                      Ie,
                      !1,
                      W
                    );
                    if (l && l.collides(Xt.declutterBox))
                      break t;
                    Ht.push([
                      t,
                      e,
                      ut,
                      Xt,
                      1,
                      null,
                      null
                    ]);
                  }
                if (R)
                  for (Et = 0, Ki = It.length; Et < Ki; ++Et) {
                    St = It[Et], Zi = St[4], ut = this.createLabel(Zi, I, R, ""), g = St[2], m = Hn * ut.height - Ar;
                    const Xt = this.calculateImageOrLabelDimensions_(
                      ut.width,
                      ut.height,
                      St[0],
                      St[1],
                      ut.width,
                      ut.height,
                      g,
                      m,
                      0,
                      0,
                      St[3],
                      br,
                      !1,
                      Ie,
                      !1,
                      W
                    );
                    if (l && l.collides(Xt.declutterBox))
                      break t;
                    Ht.push([
                      t,
                      e,
                      ut,
                      Xt,
                      1,
                      null,
                      null
                    ]);
                  }
                l && l.load(Ht.map(bo));
                for (let Xt = 0, rl = Ht.length; Xt < rl; ++Xt)
                  this.replayImageOrLabel_.apply(this, Ht[Xt]);
              }
          }
          ++h;
          break;
        case b.END_GEOMETRY:
          if (o !== void 0) {
            W = S[1];
            const yt = o(W, Ft);
            if (yt)
              return yt;
          }
          ++h;
          break;
        case b.FILL:
          O ? M++ : this.fill_(t), ++h;
          break;
        case b.MOVE_TO_LINE_TO:
          for (d = S[1], f = S[2], tt = c[d], et = c[d + 1], y = tt + 0.5 | 0, C = et + 0.5 | 0, (y !== p || C !== _) && (t.moveTo(tt, et), p = y, _ = C), d += 2; d < f; d += 2)
            tt = c[d], et = c[d + 1], y = tt + 0.5 | 0, C = et + 0.5 | 0, (d == f - 2 || y !== p || C !== _) && (t.lineTo(tt, et), p = y, _ = C);
          ++h;
          break;
        case b.SET_FILL_STYLE:
          Z = S, this.alignFill_ = S[2], M && (this.fill_(t), M = 0, N && (t.stroke(), N = 0)), t.fillStyle = S[1], ++h;
          break;
        case b.SET_STROKE_STYLE:
          X = S, N && (t.stroke(), N = 0), this.setStrokeStyle_(t, S), ++h;
          break;
        case b.STROKE:
          O ? N++ : t.stroke(), ++h;
          break;
        default:
          ++h;
          break;
      }
    }
    M && this.fill_(t), N && t.stroke();
  }
  execute(t, e, i, n, r, o) {
    this.viewRotation_ = n, this.execute_(
      t,
      e,
      i,
      this.instructions,
      r,
      void 0,
      void 0,
      o
    );
  }
  executeHitDetection(t, e, i, n, r) {
    return this.viewRotation_ = i, this.execute_(
      t,
      1,
      e,
      this.hitDetectionInstructions,
      !0,
      n,
      r
    );
  }
}
const lf = af, ss = ["Polygon", "Circle", "LineString", "Image", "Text", "Default"];
class hf {
  constructor(t, e, i, n, r, o) {
    this.maxExtent_ = t, this.overlaps_ = n, this.pixelRatio_ = i, this.resolution_ = e, this.renderBuffer_ = o, this.executorsByZIndex_ = {}, this.hitDetectionContext_ = null, this.hitDetectionTransform_ = Ot(), this.createExecutors_(r);
  }
  clip(t, e) {
    const i = this.getClipCoords(e);
    t.beginPath(), t.moveTo(i[0], i[1]), t.lineTo(i[2], i[3]), t.lineTo(i[4], i[5]), t.lineTo(i[6], i[7]), t.clip();
  }
  createExecutors_(t) {
    for (const e in t) {
      let i = this.executorsByZIndex_[e];
      i === void 0 && (i = {}, this.executorsByZIndex_[e] = i);
      const n = t[e];
      for (const r in n) {
        const o = n[r];
        i[r] = new lf(
          this.resolution_,
          this.pixelRatio_,
          this.overlaps_,
          o
        );
      }
    }
  }
  hasExecutors(t) {
    for (const e in this.executorsByZIndex_) {
      const i = this.executorsByZIndex_[e];
      for (let n = 0, r = t.length; n < r; ++n)
        if (t[n] in i)
          return !0;
    }
    return !1;
  }
  forEachFeatureAtCoordinate(t, e, i, n, r, o) {
    n = Math.round(n);
    const a = n * 2 + 1, l = we(
      this.hitDetectionTransform_,
      n + 0.5,
      n + 0.5,
      1 / e,
      -1 / e,
      -i,
      -t[0],
      -t[1]
    ), c = !this.hitDetectionContext_;
    c && (this.hitDetectionContext_ = Mt(
      a,
      a,
      void 0,
      { willReadFrequently: !0 }
    ));
    const h = this.hitDetectionContext_;
    h.canvas.width !== a || h.canvas.height !== a ? (h.canvas.width = a, h.canvas.height = a) : c || h.clearRect(0, 0, a, a);
    let u;
    this.renderBuffer_ !== void 0 && (u = ce(), Jl(u, t), Ms(
      u,
      e * (this.renderBuffer_ + n),
      u
    ));
    const d = cf(n);
    let f;
    function g(E, I) {
      const A = h.getImageData(
        0,
        0,
        a,
        a
      ).data;
      for (let R = 0, M = d.length; R < M; R++)
        if (A[d[R]] > 0) {
          if (!o || f !== "Image" && f !== "Text" || o.includes(E)) {
            const N = (d[R] - 3) / 4, Z = n - N % a, X = n - (N / a | 0), H = r(E, I, Z * Z + X * X);
            if (H)
              return H;
          }
          h.clearRect(0, 0, a, a);
          break;
        }
    }
    const m = Object.keys(this.executorsByZIndex_).map(Number);
    m.sort(Ye);
    let p, _, y, C, v;
    for (p = m.length - 1; p >= 0; --p) {
      const E = m[p].toString();
      for (y = this.executorsByZIndex_[E], _ = ss.length - 1; _ >= 0; --_)
        if (f = ss[_], C = y[f], C !== void 0 && (v = C.executeHitDetection(
          h,
          l,
          i,
          g,
          u
        ), v))
          return v;
    }
  }
  getClipCoords(t) {
    const e = this.maxExtent_;
    if (!e)
      return null;
    const i = e[0], n = e[1], r = e[2], o = e[3], a = [i, n, i, o, r, o, r, n];
    return le(a, 0, 8, 2, t, a), a;
  }
  isEmpty() {
    return Ii(this.executorsByZIndex_);
  }
  execute(t, e, i, n, r, o, a) {
    const l = Object.keys(this.executorsByZIndex_).map(Number);
    l.sort(Ye), this.maxExtent_ && (t.save(), this.clip(t, i)), o = o || ss;
    let c, h, u, d, f, g;
    for (a && l.reverse(), c = 0, h = l.length; c < h; ++c) {
      const m = l[c].toString();
      for (f = this.executorsByZIndex_[m], u = 0, d = o.length; u < d; ++u) {
        const p = o[u];
        g = f[p], g !== void 0 && g.execute(
          t,
          e,
          i,
          n,
          r,
          a
        );
      }
    }
    this.maxExtent_ && t.restore();
  }
}
const rs = {};
function cf(s) {
  if (rs[s] !== void 0)
    return rs[s];
  const t = s * 2 + 1, e = s * s, i = new Array(e + 1);
  for (let r = 0; r <= s; ++r)
    for (let o = 0; o <= s; ++o) {
      const a = r * r + o * o;
      if (a > e)
        break;
      let l = i[a];
      l || (l = [], i[a] = l), l.push(((s + r) * t + (s + o)) * 4 + 3), r > 0 && l.push(((s - r) * t + (s + o)) * 4 + 3), o > 0 && (l.push(((s + r) * t + (s - o)) * 4 + 3), r > 0 && l.push(((s - r) * t + (s - o)) * 4 + 3));
    }
  const n = [];
  for (let r = 0, o = i.length; r < o; ++r)
    i[r] && n.push(...i[r]);
  return rs[s] = n, n;
}
const wo = hf;
class uf extends Ha {
  constructor(t, e, i, n, r, o, a) {
    super(), this.context_ = t, this.pixelRatio_ = e, this.extent_ = i, this.transform_ = n, this.transformRotation_ = n ? lh(Math.atan2(n[1], n[0]), 10) : 0, this.viewRotation_ = r, this.squaredTolerance_ = o, this.userTransform_ = a, this.contextFillState_ = null, this.contextStrokeState_ = null, this.contextTextState_ = null, this.fillState_ = null, this.strokeState_ = null, this.image_ = null, this.imageAnchorX_ = 0, this.imageAnchorY_ = 0, this.imageHeight_ = 0, this.imageOpacity_ = 0, this.imageOriginX_ = 0, this.imageOriginY_ = 0, this.imageRotateWithView_ = !1, this.imageRotation_ = 0, this.imageScale_ = [0, 0], this.imageWidth_ = 0, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = !1, this.textRotation_ = 0, this.textScale_ = [0, 0], this.textFillState_ = null, this.textStrokeState_ = null, this.textState_ = null, this.pixelCoordinates_ = [], this.tmpLocalTransform_ = Ot();
  }
  drawImages_(t, e, i, n) {
    if (!this.image_)
      return;
    const r = le(
      t,
      e,
      i,
      n,
      this.transform_,
      this.pixelCoordinates_
    ), o = this.context_, a = this.tmpLocalTransform_, l = o.globalAlpha;
    this.imageOpacity_ != 1 && (o.globalAlpha = l * this.imageOpacity_);
    let c = this.imageRotation_;
    this.transformRotation_ === 0 && (c -= this.viewRotation_), this.imageRotateWithView_ && (c += this.viewRotation_);
    for (let h = 0, u = r.length; h < u; h += 2) {
      const d = r[h] - this.imageAnchorX_, f = r[h + 1] - this.imageAnchorY_;
      if (c !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        const g = d + this.imageAnchorX_, m = f + this.imageAnchorY_;
        we(
          a,
          g,
          m,
          1,
          1,
          c,
          -g,
          -m
        ), o.save(), o.transform.apply(o, a), o.translate(g, m), o.scale(this.imageScale_[0], this.imageScale_[1]), o.drawImage(
          this.image_,
          this.imageOriginX_,
          this.imageOriginY_,
          this.imageWidth_,
          this.imageHeight_,
          -this.imageAnchorX_,
          -this.imageAnchorY_,
          this.imageWidth_,
          this.imageHeight_
        ), o.restore();
      } else
        o.drawImage(
          this.image_,
          this.imageOriginX_,
          this.imageOriginY_,
          this.imageWidth_,
          this.imageHeight_,
          d,
          f,
          this.imageWidth_,
          this.imageHeight_
        );
    }
    this.imageOpacity_ != 1 && (o.globalAlpha = l);
  }
  drawText_(t, e, i, n) {
    if (!this.textState_ || this.text_ === "")
      return;
    this.textFillState_ && this.setContextFillState_(this.textFillState_), this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_), this.setContextTextState_(this.textState_);
    const r = le(
      t,
      e,
      i,
      n,
      this.transform_,
      this.pixelCoordinates_
    ), o = this.context_;
    let a = this.textRotation_;
    for (this.transformRotation_ === 0 && (a -= this.viewRotation_), this.textRotateWithView_ && (a += this.viewRotation_); e < i; e += n) {
      const l = r[e] + this.textOffsetX_, c = r[e + 1] + this.textOffsetY_;
      a !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1 ? (o.save(), o.translate(l - this.textOffsetX_, c - this.textOffsetY_), o.rotate(a), o.translate(this.textOffsetX_, this.textOffsetY_), o.scale(this.textScale_[0], this.textScale_[1]), this.textStrokeState_ && o.strokeText(this.text_, 0, 0), this.textFillState_ && o.fillText(this.text_, 0, 0), o.restore()) : (this.textStrokeState_ && o.strokeText(this.text_, l, c), this.textFillState_ && o.fillText(this.text_, l, c));
    }
  }
  moveToLineTo_(t, e, i, n, r) {
    const o = this.context_, a = le(
      t,
      e,
      i,
      n,
      this.transform_,
      this.pixelCoordinates_
    );
    o.moveTo(a[0], a[1]);
    let l = a.length;
    r && (l -= 2);
    for (let c = 2; c < l; c += 2)
      o.lineTo(a[c], a[c + 1]);
    return r && o.closePath(), i;
  }
  drawRings_(t, e, i, n) {
    for (let r = 0, o = i.length; r < o; ++r)
      e = this.moveToLineTo_(
        t,
        e,
        i[r],
        n,
        !0
      );
    return e;
  }
  drawCircle(t) {
    if (this.squaredTolerance_ && (t = t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!At(this.extent_, t.getExtent())) {
      if (this.fillState_ || this.strokeState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const e = Qh(
          t,
          this.transform_,
          this.pixelCoordinates_
        ), i = e[2] - e[0], n = e[3] - e[1], r = Math.sqrt(i * i + n * n), o = this.context_;
        o.beginPath(), o.arc(
          e[0],
          e[1],
          r,
          0,
          2 * Math.PI
        ), this.fillState_ && o.fill(), this.strokeState_ && o.stroke();
      }
      this.text_ !== "" && this.drawText_(t.getCenter(), 0, 2, 2);
    }
  }
  setStyle(t) {
    this.setFillStrokeStyle(t.getFill(), t.getStroke()), this.setImageStyle(t.getImage()), this.setTextStyle(t.getText());
  }
  setTransform(t) {
    this.transform_ = t;
  }
  drawGeometry(t) {
    switch (t.getType()) {
      case "Point":
        this.drawPoint(
          t
        );
        break;
      case "LineString":
        this.drawLineString(
          t
        );
        break;
      case "Polygon":
        this.drawPolygon(
          t
        );
        break;
      case "MultiPoint":
        this.drawMultiPoint(
          t
        );
        break;
      case "MultiLineString":
        this.drawMultiLineString(
          t
        );
        break;
      case "MultiPolygon":
        this.drawMultiPolygon(
          t
        );
        break;
      case "GeometryCollection":
        this.drawGeometryCollection(
          t
        );
        break;
      case "Circle":
        this.drawCircle(
          t
        );
        break;
    }
  }
  drawFeature(t, e) {
    const i = e.getGeometryFunction()(t);
    !i || (this.setStyle(e), this.drawGeometry(i));
  }
  drawGeometryCollection(t) {
    const e = t.getGeometriesArray();
    for (let i = 0, n = e.length; i < n; ++i)
      this.drawGeometry(e[i]);
  }
  drawPoint(t) {
    this.squaredTolerance_ && (t = t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    ));
    const e = t.getFlatCoordinates(), i = t.getStride();
    this.image_ && this.drawImages_(e, 0, e.length, i), this.text_ !== "" && this.drawText_(e, 0, e.length, i);
  }
  drawMultiPoint(t) {
    this.squaredTolerance_ && (t = t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    ));
    const e = t.getFlatCoordinates(), i = t.getStride();
    this.image_ && this.drawImages_(e, 0, e.length, i), this.text_ !== "" && this.drawText_(e, 0, e.length, i);
  }
  drawLineString(t) {
    if (this.squaredTolerance_ && (t = t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!At(this.extent_, t.getExtent())) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const e = this.context_, i = t.getFlatCoordinates();
        e.beginPath(), this.moveToLineTo_(
          i,
          0,
          i.length,
          t.getStride(),
          !1
        ), e.stroke();
      }
      if (this.text_ !== "") {
        const e = t.getFlatMidpoint();
        this.drawText_(e, 0, 2, 2);
      }
    }
  }
  drawMultiLineString(t) {
    this.squaredTolerance_ && (t = t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    ));
    const e = t.getExtent();
    if (!!At(this.extent_, e)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const i = this.context_, n = t.getFlatCoordinates();
        let r = 0;
        const o = t.getEnds(), a = t.getStride();
        i.beginPath();
        for (let l = 0, c = o.length; l < c; ++l)
          r = this.moveToLineTo_(
            n,
            r,
            o[l],
            a,
            !1
          );
        i.stroke();
      }
      if (this.text_ !== "") {
        const i = t.getFlatMidpoints();
        this.drawText_(i, 0, i.length, 2);
      }
    }
  }
  drawPolygon(t) {
    if (this.squaredTolerance_ && (t = t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!At(this.extent_, t.getExtent())) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const e = this.context_;
        e.beginPath(), this.drawRings_(
          t.getOrientedFlatCoordinates(),
          0,
          t.getEnds(),
          t.getStride()
        ), this.fillState_ && e.fill(), this.strokeState_ && e.stroke();
      }
      if (this.text_ !== "") {
        const e = t.getFlatInteriorPoint();
        this.drawText_(e, 0, 2, 2);
      }
    }
  }
  drawMultiPolygon(t) {
    if (this.squaredTolerance_ && (t = t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!At(this.extent_, t.getExtent())) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const e = this.context_, i = t.getOrientedFlatCoordinates();
        let n = 0;
        const r = t.getEndss(), o = t.getStride();
        e.beginPath();
        for (let a = 0, l = r.length; a < l; ++a) {
          const c = r[a];
          n = this.drawRings_(i, n, c, o);
        }
        this.fillState_ && e.fill(), this.strokeState_ && e.stroke();
      }
      if (this.text_ !== "") {
        const e = t.getFlatInteriorPoints();
        this.drawText_(e, 0, e.length, 2);
      }
    }
  }
  setContextFillState_(t) {
    const e = this.context_, i = this.contextFillState_;
    i ? i.fillStyle != t.fillStyle && (i.fillStyle = t.fillStyle, e.fillStyle = t.fillStyle) : (e.fillStyle = t.fillStyle, this.contextFillState_ = {
      fillStyle: t.fillStyle
    });
  }
  setContextStrokeState_(t) {
    const e = this.context_, i = this.contextStrokeState_;
    i ? (i.lineCap != t.lineCap && (i.lineCap = t.lineCap, e.lineCap = t.lineCap), me(i.lineDash, t.lineDash) || e.setLineDash(
      i.lineDash = t.lineDash
    ), i.lineDashOffset != t.lineDashOffset && (i.lineDashOffset = t.lineDashOffset, e.lineDashOffset = t.lineDashOffset), i.lineJoin != t.lineJoin && (i.lineJoin = t.lineJoin, e.lineJoin = t.lineJoin), i.lineWidth != t.lineWidth && (i.lineWidth = t.lineWidth, e.lineWidth = t.lineWidth), i.miterLimit != t.miterLimit && (i.miterLimit = t.miterLimit, e.miterLimit = t.miterLimit), i.strokeStyle != t.strokeStyle && (i.strokeStyle = t.strokeStyle, e.strokeStyle = t.strokeStyle)) : (e.lineCap = t.lineCap, e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset, e.lineJoin = t.lineJoin, e.lineWidth = t.lineWidth, e.miterLimit = t.miterLimit, e.strokeStyle = t.strokeStyle, this.contextStrokeState_ = {
      lineCap: t.lineCap,
      lineDash: t.lineDash,
      lineDashOffset: t.lineDashOffset,
      lineJoin: t.lineJoin,
      lineWidth: t.lineWidth,
      miterLimit: t.miterLimit,
      strokeStyle: t.strokeStyle
    });
  }
  setContextTextState_(t) {
    const e = this.context_, i = this.contextTextState_, n = t.textAlign ? t.textAlign : bi;
    i ? (i.font != t.font && (i.font = t.font, e.font = t.font), i.textAlign != n && (i.textAlign = n, e.textAlign = n), i.textBaseline != t.textBaseline && (i.textBaseline = t.textBaseline, e.textBaseline = t.textBaseline)) : (e.font = t.font, e.textAlign = n, e.textBaseline = t.textBaseline, this.contextTextState_ = {
      font: t.font,
      textAlign: n,
      textBaseline: t.textBaseline
    });
  }
  setFillStrokeStyle(t, e) {
    if (!t)
      this.fillState_ = null;
    else {
      const i = t.getColor();
      this.fillState_ = {
        fillStyle: Bt(
          i || gt
        )
      };
    }
    if (!e)
      this.strokeState_ = null;
    else {
      const i = e.getColor(), n = e.getLineCap(), r = e.getLineDash(), o = e.getLineDashOffset(), a = e.getLineJoin(), l = e.getWidth(), c = e.getMiterLimit(), h = r || jt;
      this.strokeState_ = {
        lineCap: n !== void 0 ? n : je,
        lineDash: this.pixelRatio_ === 1 ? h : h.map((u) => u * this.pixelRatio_),
        lineDashOffset: (o || qt) * this.pixelRatio_,
        lineJoin: a !== void 0 ? a : qe,
        lineWidth: (l !== void 0 ? l : Ti) * this.pixelRatio_,
        miterLimit: c !== void 0 ? c : Ri,
        strokeStyle: Bt(
          i || Ai
        )
      };
    }
  }
  setImageStyle(t) {
    let e;
    if (!t || !(e = t.getSize())) {
      this.image_ = null;
      return;
    }
    const i = t.getPixelRatio(this.pixelRatio_), n = t.getAnchor(), r = t.getOrigin();
    this.image_ = t.getImage(this.pixelRatio_), this.imageAnchorX_ = n[0] * i, this.imageAnchorY_ = n[1] * i, this.imageHeight_ = e[1] * i, this.imageOpacity_ = t.getOpacity(), this.imageOriginX_ = r[0], this.imageOriginY_ = r[1], this.imageRotateWithView_ = t.getRotateWithView(), this.imageRotation_ = t.getRotation();
    const o = t.getScaleArray();
    this.imageScale_ = [
      o[0] * this.pixelRatio_ / i,
      o[1] * this.pixelRatio_ / i
    ], this.imageWidth_ = e[0] * i;
  }
  setTextStyle(t) {
    if (!t)
      this.text_ = "";
    else {
      const e = t.getFill();
      if (!e)
        this.textFillState_ = null;
      else {
        const f = e.getColor();
        this.textFillState_ = {
          fillStyle: Bt(
            f || gt
          )
        };
      }
      const i = t.getStroke();
      if (!i)
        this.textStrokeState_ = null;
      else {
        const f = i.getColor(), g = i.getLineCap(), m = i.getLineDash(), p = i.getLineDashOffset(), _ = i.getLineJoin(), y = i.getWidth(), C = i.getMiterLimit();
        this.textStrokeState_ = {
          lineCap: g !== void 0 ? g : je,
          lineDash: m || jt,
          lineDashOffset: p || qt,
          lineJoin: _ !== void 0 ? _ : qe,
          lineWidth: y !== void 0 ? y : Ti,
          miterLimit: C !== void 0 ? C : Ri,
          strokeStyle: Bt(
            f || Ai
          )
        };
      }
      const n = t.getFont(), r = t.getOffsetX(), o = t.getOffsetY(), a = t.getRotateWithView(), l = t.getRotation(), c = t.getScaleArray(), h = t.getText(), u = t.getTextAlign(), d = t.getTextBaseline();
      this.textState_ = {
        font: n !== void 0 ? n : Ea,
        textAlign: u !== void 0 ? u : bi,
        textBaseline: d !== void 0 ? d : pn
      }, this.text_ = h !== void 0 ? Array.isArray(h) ? h.reduce((f, g, m) => f += m % 2 ? " " : g, "") : h : "", this.textOffsetX_ = r !== void 0 ? this.pixelRatio_ * r : 0, this.textOffsetY_ = o !== void 0 ? this.pixelRatio_ * o : 0, this.textRotateWithView_ = a !== void 0 ? a : !1, this.textRotation_ = l !== void 0 ? l : 0, this.textScale_ = [
        this.pixelRatio_ * c[0],
        this.pixelRatio_ * c[1]
      ];
    }
  }
}
const df = uf, kt = 0.5;
function ff(s, t, e, i, n, r, o) {
  const a = s[0] * kt, l = s[1] * kt, c = Mt(a, l);
  c.imageSmoothingEnabled = !1;
  const h = c.canvas, u = new df(
    c,
    kt,
    n,
    null,
    o
  ), d = e.length, f = Math.floor((256 * 256 * 256 - 1) / d), g = {};
  for (let p = 1; p <= d; ++p) {
    const _ = e[p - 1], y = _.getStyleFunction() || i;
    if (!y)
      continue;
    let C = y(_, r);
    if (!C)
      continue;
    Array.isArray(C) || (C = [C]);
    const E = (p * f).toString(16).padStart(7, "#00000");
    for (let I = 0, A = C.length; I < A; ++I) {
      const R = C[I], M = R.getGeometryFunction()(_);
      if (!M || !At(n, M.getExtent()))
        continue;
      const N = R.clone(), Z = N.getFill();
      Z && Z.setColor(E);
      const X = N.getStroke();
      X && (X.setColor(E), X.setLineDash(null)), N.setText(void 0);
      const H = R.getImage();
      if (H) {
        const O = H.getImageSize();
        if (!O)
          continue;
        const W = Mt(
          O[0],
          O[1],
          void 0,
          { alpha: !1 }
        ), tt = W.canvas;
        W.fillStyle = E, W.fillRect(0, 0, tt.width, tt.height), N.setImage(
          new La({
            img: tt,
            anchor: H.getAnchor(),
            anchorXUnits: "pixels",
            anchorYUnits: "pixels",
            offset: H.getOrigin(),
            opacity: 1,
            size: H.getSize(),
            scale: H.getScale(),
            rotation: H.getRotation(),
            rotateWithView: H.getRotateWithView()
          })
        );
      }
      const _t = N.getZIndex() || 0;
      let w = g[_t];
      w || (w = {}, g[_t] = w, w.Polygon = [], w.Circle = [], w.LineString = [], w.Point = []);
      const L = M.getType();
      if (L === "GeometryCollection") {
        const O = M.getGeometriesArrayRecursive();
        for (let W = 0, tt = O.length; W < tt; ++W) {
          const et = O[W];
          w[et.getType().replace("Multi", "")].push(
            et,
            N
          );
        }
      } else
        w[L.replace("Multi", "")].push(M, N);
    }
  }
  const m = Object.keys(g).map(Number).sort(Ye);
  for (let p = 0, _ = m.length; p < _; ++p) {
    const y = g[m[p]];
    for (const C in y) {
      const v = y[C];
      for (let E = 0, I = v.length; E < I; E += 2) {
        u.setStyle(v[E + 1]);
        for (let A = 0, R = t.length; A < R; ++A)
          u.setTransform(t[A]), u.drawGeometry(v[E]);
      }
    }
  }
  return c.getImageData(0, 0, h.width, h.height);
}
function gf(s, t, e) {
  const i = [];
  if (e) {
    const n = Math.floor(Math.round(s[0]) * kt), r = Math.floor(Math.round(s[1]) * kt), o = (nt(n, 0, e.width - 1) + nt(r, 0, e.height - 1) * e.width) * 4, a = e.data[o], l = e.data[o + 1], h = e.data[o + 2] + 256 * (l + 256 * a), u = Math.floor((256 * 256 * 256 - 1) / t.length);
    h && h % u === 0 && i.push(t[h / u - 1]);
  }
  return i;
}
const mf = 0.5, Ua = {
  Point: Sf,
  LineString: vf,
  Polygon: Af,
  MultiPoint: Rf,
  MultiLineString: xf,
  MultiPolygon: If,
  GeometryCollection: Cf,
  Circle: yf
};
function pf(s, t) {
  return parseInt(J(s), 10) - parseInt(J(t), 10);
}
function _f(s, t) {
  const e = Rs(s, t);
  return e * e;
}
function Rs(s, t) {
  return mf * s / t;
}
function yf(s, t, e, i, n) {
  const r = e.getFill(), o = e.getStroke();
  if (r || o) {
    const l = s.getBuilder(e.getZIndex(), "Circle");
    l.setFillStrokeStyle(r, o), l.drawCircle(t, i);
  }
  const a = e.getText();
  if (a && a.getText()) {
    const l = (n || s).getBuilder(
      e.getZIndex(),
      "Text"
    );
    l.setTextStyle(a), l.drawText(t, i);
  }
}
function Lo(s, t, e, i, n, r, o) {
  let a = !1;
  const l = e.getImage();
  if (l) {
    const c = l.getImageState();
    c == Y.LOADED || c == Y.ERROR ? l.unlistenImageChange(n) : (c == Y.IDLE && l.load(), l.listenImageChange(n), a = !0);
  }
  return Ef(
    s,
    t,
    e,
    i,
    r,
    o
  ), a;
}
function Ef(s, t, e, i, n, r) {
  const o = e.getGeometryFunction()(t);
  if (!o)
    return;
  const a = o.simplifyTransformed(
    i,
    n
  );
  if (e.getRenderer())
    Va(s, a, e, t);
  else {
    const c = Ua[a.getType()];
    c(
      s,
      a,
      e,
      t,
      r
    );
  }
}
function Va(s, t, e, i) {
  if (t.getType() == "GeometryCollection") {
    const r = t.getGeometries();
    for (let o = 0, a = r.length; o < a; ++o)
      Va(s, r[o], e, i);
    return;
  }
  s.getBuilder(e.getZIndex(), "Default").drawCustom(
    t,
    i,
    e.getRenderer(),
    e.getHitDetectionRenderer()
  );
}
function Cf(s, t, e, i, n) {
  const r = t.getGeometriesArray();
  let o, a;
  for (o = 0, a = r.length; o < a; ++o) {
    const l = Ua[r[o].getType()];
    l(
      s,
      r[o],
      e,
      i,
      n
    );
  }
}
function vf(s, t, e, i, n) {
  const r = e.getStroke();
  if (r) {
    const a = s.getBuilder(
      e.getZIndex(),
      "LineString"
    );
    a.setFillStrokeStyle(null, r), a.drawLineString(t, i);
  }
  const o = e.getText();
  if (o && o.getText()) {
    const a = (n || s).getBuilder(
      e.getZIndex(),
      "Text"
    );
    a.setTextStyle(o), a.drawText(t, i);
  }
}
function xf(s, t, e, i, n) {
  const r = e.getStroke();
  if (r) {
    const a = s.getBuilder(
      e.getZIndex(),
      "LineString"
    );
    a.setFillStrokeStyle(null, r), a.drawMultiLineString(t, i);
  }
  const o = e.getText();
  if (o && o.getText()) {
    const a = (n || s).getBuilder(
      e.getZIndex(),
      "Text"
    );
    a.setTextStyle(o), a.drawText(t, i);
  }
}
function If(s, t, e, i, n) {
  const r = e.getFill(), o = e.getStroke();
  if (o || r) {
    const l = s.getBuilder(e.getZIndex(), "Polygon");
    l.setFillStrokeStyle(r, o), l.drawMultiPolygon(t, i);
  }
  const a = e.getText();
  if (a && a.getText()) {
    const l = (n || s).getBuilder(
      e.getZIndex(),
      "Text"
    );
    l.setTextStyle(a), l.drawText(t, i);
  }
}
function Sf(s, t, e, i, n) {
  const r = e.getImage(), o = e.getText();
  let a;
  if (r) {
    if (r.getImageState() != Y.LOADED)
      return;
    let l = s;
    if (n) {
      const h = r.getDeclutterMode();
      if (h !== "none")
        if (l = n, h === "obstacle") {
          const u = s.getBuilder(
            e.getZIndex(),
            "Image"
          );
          u.setImageStyle(r, a), u.drawPoint(t, i);
        } else
          o && o.getText() && (a = {});
    }
    const c = l.getBuilder(
      e.getZIndex(),
      "Image"
    );
    c.setImageStyle(r, a), c.drawPoint(t, i);
  }
  if (o && o.getText()) {
    let l = s;
    n && (l = n);
    const c = l.getBuilder(e.getZIndex(), "Text");
    c.setTextStyle(o, a), c.drawText(t, i);
  }
}
function Rf(s, t, e, i, n) {
  const r = e.getImage(), o = e.getText();
  let a;
  if (r) {
    if (r.getImageState() != Y.LOADED)
      return;
    let l = s;
    if (n) {
      const h = r.getDeclutterMode();
      if (h !== "none")
        if (l = n, h === "obstacle") {
          const u = s.getBuilder(
            e.getZIndex(),
            "Image"
          );
          u.setImageStyle(r, a), u.drawMultiPoint(t, i);
        } else
          o && o.getText() && (a = {});
    }
    const c = l.getBuilder(
      e.getZIndex(),
      "Image"
    );
    c.setImageStyle(r, a), c.drawMultiPoint(t, i);
  }
  if (o && o.getText()) {
    let l = s;
    n && (l = n);
    const c = l.getBuilder(e.getZIndex(), "Text");
    c.setTextStyle(o, a), c.drawText(t, i);
  }
}
function Af(s, t, e, i, n) {
  const r = e.getFill(), o = e.getStroke();
  if (r || o) {
    const l = s.getBuilder(e.getZIndex(), "Polygon");
    l.setFillStrokeStyle(r, o), l.drawPolygon(t, i);
  }
  const a = e.getText();
  if (a && a.getText()) {
    const l = (n || s).getBuilder(
      e.getZIndex(),
      "Text"
    );
    l.setTextStyle(a), l.drawText(t, i);
  }
}
class bf extends sf {
  constructor(t) {
    super(t), this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this), this.animatingOrInteracting_, this.hitDetectionImageData_ = null, this.renderedFeatures_ = null, this.renderedRevision_ = -1, this.renderedResolution_ = NaN, this.renderedExtent_ = ce(), this.wrappedRenderedExtent_ = ce(), this.renderedRotation_, this.renderedCenter_ = null, this.renderedProjection_ = null, this.renderedRenderOrder_ = null, this.replayGroup_ = null, this.replayGroupChanged = !0, this.declutterExecutorGroup = null, this.clipping = !0, this.compositionContext_ = null, this.opacity_ = 1;
  }
  renderWorlds(t, e, i) {
    const n = e.extent, r = e.viewState, o = r.center, a = r.resolution, l = r.projection, c = r.rotation, h = l.getExtent(), u = this.getLayer().getSource(), d = e.pixelRatio, f = e.viewHints, g = !(f[lt.ANIMATING] || f[lt.INTERACTING]), m = this.compositionContext_, p = Math.round(e.size[0] * d), _ = Math.round(e.size[1] * d), y = u.getWrapX() && l.canWrapX(), C = y ? vt(h) : null, v = y ? Math.ceil((n[2] - h[2]) / C) + 1 : 1;
    let E = y ? Math.floor((n[0] - h[0]) / C) : 0;
    do {
      const I = this.getRenderTransform(
        o,
        a,
        c,
        d,
        p,
        _,
        E * C
      );
      t.execute(
        m,
        1,
        I,
        c,
        g,
        void 0,
        i
      );
    } while (++E < v);
  }
  setupCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = Mt(
        this.context.canvas.width,
        this.context.canvas.height,
        Ao
      );
      this.compositionContext_ = t;
    } else
      this.compositionContext_ = this.context;
  }
  releaseCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = this.context.globalAlpha;
      this.context.globalAlpha = this.opacity_, this.context.drawImage(this.compositionContext_.canvas, 0, 0), this.context.globalAlpha = t, bc(this.compositionContext_), Ao.push(this.compositionContext_.canvas), this.compositionContext_ = null;
    }
  }
  renderDeclutter(t) {
    this.declutterExecutorGroup && (this.setupCompositionContext_(), this.renderWorlds(
      this.declutterExecutorGroup,
      t,
      t.declutterTree
    ), this.releaseCompositionContext_());
  }
  renderFrame(t, e) {
    const i = t.pixelRatio, n = t.layerStatesArray[t.layerIndex];
    Zl(this.pixelTransform, 1 / i, 1 / i), Ho(this.inversePixelTransform, this.pixelTransform);
    const r = ql(this.pixelTransform);
    this.useContainer(e, r, this.getBackground(t));
    const o = this.context, a = o.canvas, l = this.replayGroup_, c = this.declutterExecutorGroup;
    let h = l && !l.isEmpty() || c && !c.isEmpty();
    if (!h && !(this.getLayer().hasListener(Wt.PRERENDER) || this.getLayer().hasListener(Wt.POSTRENDER)))
      return null;
    const u = Math.round(t.size[0] * i), d = Math.round(t.size[1] * i);
    a.width != u || a.height != d ? (a.width = u, a.height = d, a.style.transform !== r && (a.style.transform = r)) : this.containerReused || o.clearRect(0, 0, u, d), this.preRender(o, t);
    const f = t.viewState;
    f.projection, this.opacity_ = n.opacity, this.setupCompositionContext_();
    let g = !1;
    if (h && n.extent && this.clipping) {
      const m = mi(n.extent);
      h = At(m, t.extent), g = h && !ze(m, t.extent), g && this.clipUnrotated(this.compositionContext_, t, m);
    }
    return h && this.renderWorlds(l, t), g && this.compositionContext_.restore(), this.releaseCompositionContext_(), this.postRender(o, t), this.renderedRotation_ !== f.rotation && (this.renderedRotation_ = f.rotation, this.hitDetectionImageData_ = null), this.container;
  }
  getFeatures(t) {
    return new Promise((e) => {
      if (!this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
        const i = [this.context.canvas.width, this.context.canvas.height];
        at(this.pixelTransform, i);
        const n = this.renderedCenter_, r = this.renderedResolution_, o = this.renderedRotation_, a = this.renderedProjection_, l = this.wrappedRenderedExtent_, c = this.getLayer(), h = [], u = i[0] * kt, d = i[1] * kt;
        h.push(
          this.getRenderTransform(
            n,
            r,
            o,
            kt,
            u,
            d,
            0
          ).slice()
        );
        const f = c.getSource(), g = a.getExtent();
        if (f.getWrapX() && a.canWrapX() && !ze(g, l)) {
          let m = l[0];
          const p = vt(g);
          let _ = 0, y;
          for (; m < g[0]; )
            --_, y = p * _, h.push(
              this.getRenderTransform(
                n,
                r,
                o,
                kt,
                u,
                d,
                y
              ).slice()
            ), m += p;
          for (_ = 0, m = l[2]; m > g[2]; )
            ++_, y = p * _, h.push(
              this.getRenderTransform(
                n,
                r,
                o,
                kt,
                u,
                d,
                y
              ).slice()
            ), m -= p;
        }
        this.hitDetectionImageData_ = ff(
          i,
          h,
          this.renderedFeatures_,
          c.getStyleFunction(),
          l,
          r,
          o
        );
      }
      e(
        gf(t, this.renderedFeatures_, this.hitDetectionImageData_)
      );
    });
  }
  forEachFeatureAtCoordinate(t, e, i, n, r) {
    if (!this.replayGroup_)
      return;
    const o = e.viewState.resolution, a = e.viewState.rotation, l = this.getLayer(), c = {}, h = function(f, g, m) {
      const p = J(f), _ = c[p];
      if (_) {
        if (_ !== !0 && m < _.distanceSq) {
          if (m === 0)
            return c[p] = !0, r.splice(r.lastIndexOf(_), 1), n(f, l, g);
          _.geometry = g, _.distanceSq = m;
        }
      } else {
        if (m === 0)
          return c[p] = !0, n(f, l, g);
        r.push(
          c[p] = {
            feature: f,
            layer: l,
            geometry: g,
            distanceSq: m,
            callback: n
          }
        );
      }
    };
    let u;
    const d = [this.replayGroup_];
    return this.declutterExecutorGroup && d.push(this.declutterExecutorGroup), d.some((f) => u = f.forEachFeatureAtCoordinate(
      t,
      o,
      a,
      i,
      h,
      f === this.declutterExecutorGroup && e.declutterTree ? e.declutterTree.all().map((g) => g.value) : null
    )), u;
  }
  handleFontsChanged() {
    const t = this.getLayer();
    t.getVisible() && this.replayGroup_ && t.changed();
  }
  handleStyleImageChange_(t) {
    this.renderIfReadyAndVisible();
  }
  prepareFrame(t) {
    const e = this.getLayer(), i = e.getSource();
    if (!i)
      return !1;
    const n = t.viewHints[lt.ANIMATING], r = t.viewHints[lt.INTERACTING], o = e.getUpdateWhileAnimating(), a = e.getUpdateWhileInteracting();
    if (this.ready && !o && n || !a && r)
      return this.animatingOrInteracting_ = !0, !0;
    this.animatingOrInteracting_ = !1;
    const l = t.extent, c = t.viewState, h = c.projection, u = c.resolution, d = t.pixelRatio, f = e.getRevision(), g = e.getRenderBuffer();
    let m = e.getRenderOrder();
    m === void 0 && (m = pf);
    const p = c.center.slice(), _ = Ms(
      l,
      g * u
    ), y = _.slice(), C = [_.slice()], v = h.getExtent();
    if (i.getWrapX() && h.canWrapX() && !ze(v, t.extent)) {
      const w = vt(v), L = Math.max(vt(_) / 2, w);
      _[0] = v[0] - L, _[2] = v[2] + L, ia(p, h);
      const O = qo(C[0], h);
      O[0] < v[0] && O[2] < v[2] ? C.push([
        O[0] + w,
        O[1],
        O[2] + w,
        O[3]
      ]) : O[0] > v[0] && O[2] > v[2] && C.push([
        O[0] - w,
        O[1],
        O[2] - w,
        O[3]
      ]);
    }
    if (this.ready && this.renderedResolution_ == u && this.renderedRevision_ == f && this.renderedRenderOrder_ == m && ze(this.wrappedRenderedExtent_, _))
      return me(this.renderedExtent_, y) || (this.hitDetectionImageData_ = null, this.renderedExtent_ = y), this.renderedCenter_ = p, this.replayGroupChanged = !1, !0;
    this.replayGroup_ = null;
    const E = new Ro(
      Rs(u, d),
      _,
      u,
      d
    );
    let I;
    this.getLayer().getDeclutter() && (I = new Ro(
      Rs(u, d),
      _,
      u,
      d
    ));
    let A;
    for (let w = 0, L = C.length; w < L; ++w)
      i.loadFeatures(C[w], u, h);
    const R = _f(u, d);
    let M = !0;
    const N = (w) => {
      let L;
      const O = w.getStyleFunction() || e.getStyleFunction();
      if (O && (L = O(w, u)), L) {
        const W = this.renderFeature(
          w,
          R,
          L,
          E,
          A,
          I
        );
        M = M && !W;
      }
    }, Z = la(_), X = i.getFeaturesInExtent(Z);
    m && X.sort(m);
    for (let w = 0, L = X.length; w < L; ++w)
      N(X[w]);
    this.renderedFeatures_ = X, this.ready = M;
    const H = E.finish(), _t = new wo(
      _,
      u,
      d,
      i.getOverlaps(),
      H,
      e.getRenderBuffer()
    );
    return I && (this.declutterExecutorGroup = new wo(
      _,
      u,
      d,
      i.getOverlaps(),
      I.finish(),
      e.getRenderBuffer()
    )), this.renderedResolution_ = u, this.renderedRevision_ = f, this.renderedRenderOrder_ = m, this.renderedExtent_ = y, this.wrappedRenderedExtent_ = _, this.renderedCenter_ = p, this.renderedProjection_ = h, this.replayGroup_ = _t, this.hitDetectionImageData_ = null, this.replayGroupChanged = !0, !0;
  }
  renderFeature(t, e, i, n, r, o) {
    if (!i)
      return !1;
    let a = !1;
    if (Array.isArray(i))
      for (let l = 0, c = i.length; l < c; ++l)
        a = Lo(
          n,
          t,
          i[l],
          e,
          this.boundHandleStyleImageChange_,
          r,
          o
        ) || a;
    else
      a = Lo(
        n,
        t,
        i,
        e,
        this.boundHandleStyleImageChange_,
        r,
        o
      );
    return a;
  }
}
const Tf = bf;
class wf extends Wd {
  constructor(t) {
    super(t);
  }
  createRenderer() {
    return new Tf(this);
  }
}
const Lf = wf;
class gr extends zt {
  constructor(t) {
    if (super(), this.on, this.once, this.un, this.id_ = void 0, this.geometryName_ = "geometry", this.style_ = null, this.styleFunction_ = void 0, this.geometryChangeKey_ = null, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), t)
      if (typeof t.getSimplifiedGeometry == "function") {
        const e = t;
        this.setGeometry(e);
      } else {
        const e = t;
        this.setProperties(e);
      }
  }
  clone() {
    const t = new gr(this.hasProperties() ? this.getProperties() : null);
    t.setGeometryName(this.getGeometryName());
    const e = this.getGeometry();
    e && t.setGeometry(e.clone());
    const i = this.getStyle();
    return i && t.setStyle(i), t;
  }
  getGeometry() {
    return this.get(this.geometryName_);
  }
  getId() {
    return this.id_;
  }
  getGeometryName() {
    return this.geometryName_;
  }
  getStyle() {
    return this.style_;
  }
  getStyleFunction() {
    return this.styleFunction_;
  }
  handleGeometryChange_() {
    this.changed();
  }
  handleGeometryChanged_() {
    this.geometryChangeKey_ && (Q(this.geometryChangeKey_), this.geometryChangeKey_ = null);
    const t = this.getGeometry();
    t && (this.geometryChangeKey_ = k(
      t,
      P.CHANGE,
      this.handleGeometryChange_,
      this
    )), this.changed();
  }
  setGeometry(t) {
    this.set(this.geometryName_, t);
  }
  setStyle(t) {
    this.style_ = t, this.styleFunction_ = t ? Of(t) : void 0, this.changed();
  }
  setId(t) {
    this.id_ = t, this.changed();
  }
  setGeometryName(t) {
    this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_), this.geometryName_ = t, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), this.handleGeometryChanged_();
  }
}
function Of(s) {
  if (typeof s == "function")
    return s;
  let t;
  return Array.isArray(s) ? t = s : (K(
    typeof s.getZIndex == "function",
    "Expected an `ol/style/Style` or an array of `ol/style/Style.js`"
  ), t = [s]), function() {
    return t;
  };
}
const Mf = gr;
function xn(s, t, e, i, n, r, o) {
  let a, l;
  const c = (e - t) / i;
  if (c === 1)
    a = t;
  else if (c === 2)
    a = t, l = n;
  else if (c !== 0) {
    let h = s[t], u = s[t + 1], d = 0;
    const f = [0];
    for (let p = t + i; p < e; p += i) {
      const _ = s[p], y = s[p + 1];
      d += Math.sqrt((_ - h) * (_ - h) + (y - u) * (y - u)), f.push(d), h = _, u = y;
    }
    const g = n * d, m = Fl(f, g);
    m < 0 ? (l = (g - f[-m - 2]) / (f[-m - 1] - f[-m - 2]), a = t + (-m - 2) * i) : a = t + m * i;
  }
  o = o > 1 ? o : 2, r = r || new Array(o);
  for (let h = 0; h < o; ++h)
    r[h] = a === void 0 ? NaN : l === void 0 ? s[a + h] : Ct(s[a + h], s[a + i + h], l);
  return r;
}
function As(s, t, e, i, n, r) {
  if (e == t)
    return null;
  let o;
  if (n < s[t + i - 1])
    return r ? (o = s.slice(t, t + i), o[i - 1] = n, o) : null;
  if (s[e - 1] < n)
    return r ? (o = s.slice(e - i, e), o[i - 1] = n, o) : null;
  if (n == s[t + i - 1])
    return s.slice(t, t + i);
  let a = t / i, l = e / i;
  for (; a < l; ) {
    const d = a + l >> 1;
    n < s[(d + 1) * i - 1] ? l = d : a = d + 1;
  }
  const c = s[a * i - 1];
  if (n == c)
    return s.slice((a - 1) * i, (a - 1) * i + i);
  const h = s[(a + 1) * i - 1], u = (n - c) / (h - c);
  o = [];
  for (let d = 0; d < i - 1; ++d)
    o.push(
      Ct(
        s[(a - 1) * i + d],
        s[a * i + d],
        u
      )
    );
  return o.push(n), o;
}
function Df(s, t, e, i, n, r, o) {
  if (o)
    return As(
      s,
      t,
      e[e.length - 1],
      i,
      n,
      r
    );
  let a;
  if (n < s[i - 1])
    return r ? (a = s.slice(0, i), a[i - 1] = n, a) : null;
  if (s[s.length - 1] < n)
    return r ? (a = s.slice(s.length - i), a[i - 1] = n, a) : null;
  for (let l = 0, c = e.length; l < c; ++l) {
    const h = e[l];
    if (t != h) {
      if (n < s[t + i - 1])
        return null;
      if (n <= s[h - 1])
        return As(
          s,
          t,
          h,
          i,
          n,
          !1
        );
      t = h;
    }
  }
  return null;
}
class In extends Le {
  constructor(t, e) {
    super(), this.flatMidpoint_ = null, this.flatMidpointRevision_ = -1, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(
      e,
      t
    ) : this.setCoordinates(
      t,
      e
    );
  }
  appendCoordinate(t) {
    this.flatCoordinates ? Gt(this.flatCoordinates, t) : this.flatCoordinates = t.slice(), this.changed();
  }
  clone() {
    const t = new In(
      this.flatCoordinates.slice(),
      this.layout
    );
    return t.applyProperties(this), t;
  }
  closestPointXY(t, e, i, n) {
    return n < Qe(this.getExtent(), t, e) ? n : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      zs(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Xs(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      this.maxDelta_,
      !1,
      t,
      e,
      i,
      n
    ));
  }
  forEachSegment(t) {
    return ga(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t
    );
  }
  getCoordinateAtM(t, e) {
    return this.layout != "XYM" && this.layout != "XYZM" ? null : (e = e !== void 0 ? e : !1, As(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      e
    ));
  }
  getCoordinates() {
    return re(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  getCoordinateAt(t, e) {
    return xn(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      e,
      this.stride
    );
  }
  getLength() {
    return Xa(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  getFlatMidpoint() {
    return this.flatMidpointRevision_ != this.getRevision() && (this.flatMidpoint_ = this.getCoordinateAt(0.5, this.flatMidpoint_), this.flatMidpointRevision_ = this.getRevision()), this.flatMidpoint_;
  }
  getSimplifiedGeometryInternal(t) {
    const e = [];
    return e.length = Ys(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      e,
      0
    ), new In(e, "XY");
  }
  getType() {
    return "LineString";
  }
  intersectsExtent(t) {
    return On(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t
    );
  }
  setCoordinates(t, e) {
    this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Ln(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
}
const bs = In;
class Sn extends Le {
  constructor(t, e, i) {
    if (super(), this.ends_ = [], this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, Array.isArray(t[0]))
      this.setCoordinates(
        t,
        e
      );
    else if (e !== void 0 && i)
      this.setFlatCoordinates(
        e,
        t
      ), this.ends_ = i;
    else {
      let n = this.getLayout();
      const r = t, o = [], a = [];
      for (let l = 0, c = r.length; l < c; ++l) {
        const h = r[l];
        l === 0 && (n = h.getLayout()), Gt(o, h.getFlatCoordinates()), a.push(o.length);
      }
      this.setFlatCoordinates(n, o), this.ends_ = a;
    }
  }
  appendLineString(t) {
    this.flatCoordinates ? Gt(this.flatCoordinates, t.getFlatCoordinates().slice()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
  }
  clone() {
    const t = new Sn(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice()
    );
    return t.applyProperties(this), t;
  }
  closestPointXY(t, e, i, n) {
    return n < Qe(this.getExtent(), t, e) ? n : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Hs(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Us(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      this.maxDelta_,
      !1,
      t,
      e,
      i,
      n
    ));
  }
  getCoordinateAtM(t, e, i) {
    return this.layout != "XYM" && this.layout != "XYZM" || this.flatCoordinates.length === 0 ? null : (e = e !== void 0 ? e : !1, i = i !== void 0 ? i : !1, Df(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      t,
      e,
      i
    ));
  }
  getCoordinates() {
    return Si(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride
    );
  }
  getEnds() {
    return this.ends_;
  }
  getLineString(t) {
    return t < 0 || this.ends_.length <= t ? null : new bs(
      this.flatCoordinates.slice(
        t === 0 ? 0 : this.ends_[t - 1],
        this.ends_[t]
      ),
      this.layout
    );
  }
  getLineStrings() {
    const t = this.flatCoordinates, e = this.ends_, i = this.layout, n = [];
    let r = 0;
    for (let o = 0, a = e.length; o < a; ++o) {
      const l = e[o], c = new bs(
        t.slice(r, l),
        i
      );
      n.push(c), r = l;
    }
    return n;
  }
  getFlatMidpoints() {
    const t = [], e = this.flatCoordinates;
    let i = 0;
    const n = this.ends_, r = this.stride;
    for (let o = 0, a = n.length; o < a; ++o) {
      const l = n[o], c = xn(
        e,
        i,
        l,
        r,
        0.5
      );
      Gt(t, c), i = l;
    }
    return t;
  }
  getSimplifiedGeometryInternal(t) {
    const e = [], i = [];
    return e.length = sc(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      t,
      e,
      0,
      i
    ), new Sn(e, "XY", i);
  }
  getType() {
    return "MultiLineString";
  }
  intersectsExtent(t) {
    return cc(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      t
    );
  }
  setCoordinates(t, e) {
    this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []);
    const i = Vs(
      this.flatCoordinates,
      0,
      t,
      this.stride,
      this.ends_
    );
    this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1], this.changed();
  }
}
const Ff = Sn;
class mr extends Le {
  constructor(t, e) {
    super(), e && !Array.isArray(t[0]) ? this.setFlatCoordinates(
      e,
      t
    ) : this.setCoordinates(
      t,
      e
    );
  }
  appendPoint(t) {
    this.flatCoordinates ? Gt(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.changed();
  }
  clone() {
    const t = new mr(
      this.flatCoordinates.slice(),
      this.layout
    );
    return t.applyProperties(this), t;
  }
  closestPointXY(t, e, i, n) {
    if (n < Qe(this.getExtent(), t, e))
      return n;
    const r = this.flatCoordinates, o = this.stride;
    for (let a = 0, l = r.length; a < l; a += o) {
      const c = Re(
        t,
        e,
        r[a],
        r[a + 1]
      );
      if (c < n) {
        n = c;
        for (let h = 0; h < o; ++h)
          i[h] = r[a + h];
        i.length = o;
      }
    }
    return n;
  }
  getCoordinates() {
    return re(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  getPoint(t) {
    const e = this.flatCoordinates ? this.flatCoordinates.length / this.stride : 0;
    return t < 0 || e <= t ? null : new mn(
      this.flatCoordinates.slice(
        t * this.stride,
        (t + 1) * this.stride
      ),
      this.layout
    );
  }
  getPoints() {
    const t = this.flatCoordinates, e = this.layout, i = this.stride, n = [];
    for (let r = 0, o = t.length; r < o; r += i) {
      const a = new mn(t.slice(r, r + i), e);
      n.push(a);
    }
    return n;
  }
  getType() {
    return "MultiPoint";
  }
  intersectsExtent(t) {
    const e = this.flatCoordinates, i = this.stride;
    for (let n = 0, r = e.length; n < r; n += i) {
      const o = e[n], a = e[n + 1];
      if (Ds(t, o, a))
        return !0;
    }
    return !1;
  }
  setCoordinates(t, e) {
    this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Ln(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
}
const Ya = mr;
function Ka(s, t, e, i) {
  const n = [];
  let r = ce();
  for (let o = 0, a = e.length; o < a; ++o) {
    const l = e[o];
    r = Fs(
      s,
      t,
      l[0],
      i
    ), n.push((r[0] + r[2]) / 2, (r[1] + r[3]) / 2), t = l[l.length - 1];
  }
  return n;
}
class Rn extends Le {
  constructor(t, e, i) {
    if (super(), this.endss_ = [], this.flatInteriorPointsRevision_ = -1, this.flatInteriorPoints_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, !i && !Array.isArray(t[0])) {
      let n = this.getLayout();
      const r = t, o = [], a = [];
      for (let l = 0, c = r.length; l < c; ++l) {
        const h = r[l];
        l === 0 && (n = h.getLayout());
        const u = o.length, d = h.getEnds();
        for (let f = 0, g = d.length; f < g; ++f)
          d[f] += u;
        Gt(o, h.getFlatCoordinates()), a.push(d);
      }
      e = n, t = o, i = a;
    }
    e !== void 0 && i ? (this.setFlatCoordinates(
      e,
      t
    ), this.endss_ = i) : this.setCoordinates(
      t,
      e
    );
  }
  appendPolygon(t) {
    let e;
    if (!this.flatCoordinates)
      this.flatCoordinates = t.getFlatCoordinates().slice(), e = t.getEnds().slice(), this.endss_.push();
    else {
      const i = this.flatCoordinates.length;
      Gt(this.flatCoordinates, t.getFlatCoordinates()), e = t.getEnds().slice();
      for (let n = 0, r = e.length; n < r; ++n)
        e[n] += i;
    }
    this.endss_.push(e), this.changed();
  }
  clone() {
    const t = this.endss_.length, e = new Array(t);
    for (let n = 0; n < t; ++n)
      e[n] = this.endss_[n].slice();
    const i = new Rn(
      this.flatCoordinates.slice(),
      this.layout,
      e
    );
    return i.applyProperties(this), i;
  }
  closestPointXY(t, e, i, n) {
    return n < Qe(this.getExtent(), t, e) ? n : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      tc(
        this.flatCoordinates,
        0,
        this.endss_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), ec(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      this.maxDelta_,
      !0,
      t,
      e,
      i,
      n
    ));
  }
  containsXY(t, e) {
    return hc(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      t,
      e
    );
  }
  getArea() {
    return ac(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride
    );
  }
  getCoordinates(t) {
    let e;
    return t !== void 0 ? (e = this.getOrientedFlatCoordinates().slice(), no(
      e,
      0,
      this.endss_,
      this.stride,
      t
    )) : e = this.flatCoordinates, _s(
      e,
      0,
      this.endss_,
      this.stride
    );
  }
  getEndss() {
    return this.endss_;
  }
  getFlatInteriorPoints() {
    if (this.flatInteriorPointsRevision_ != this.getRevision()) {
      const t = Ka(
        this.flatCoordinates,
        0,
        this.endss_,
        this.stride
      );
      this.flatInteriorPoints_ = fa(
        this.getOrientedFlatCoordinates(),
        0,
        this.endss_,
        this.stride,
        t
      ), this.flatInteriorPointsRevision_ = this.getRevision();
    }
    return this.flatInteriorPoints_;
  }
  getInteriorPoints() {
    return new Ya(this.getFlatInteriorPoints().slice(), "XYM");
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates;
      gc(t, 0, this.endss_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = no(
        this.orientedFlatCoordinates_,
        0,
        this.endss_,
        this.stride
      )), this.orientedRevision_ = this.getRevision();
    }
    return this.orientedFlatCoordinates_;
  }
  getSimplifiedGeometryInternal(t) {
    const e = [], i = [];
    return e.length = oc(
      this.flatCoordinates,
      0,
      this.endss_,
      this.stride,
      Math.sqrt(t),
      e,
      0,
      i
    ), new Rn(e, "XY", i);
  }
  getPolygon(t) {
    if (t < 0 || this.endss_.length <= t)
      return null;
    let e;
    if (t === 0)
      e = 0;
    else {
      const r = this.endss_[t - 1];
      e = r[r.length - 1];
    }
    const i = this.endss_[t].slice(), n = i[i.length - 1];
    if (e !== 0)
      for (let r = 0, o = i.length; r < o; ++r)
        i[r] -= e;
    return new de(
      this.flatCoordinates.slice(e, n),
      this.layout,
      i
    );
  }
  getPolygons() {
    const t = this.layout, e = this.flatCoordinates, i = this.endss_, n = [];
    let r = 0;
    for (let o = 0, a = i.length; o < a; ++o) {
      const l = i[o].slice(), c = l[l.length - 1];
      if (r !== 0)
        for (let u = 0, d = l.length; u < d; ++u)
          l[u] -= r;
      const h = new de(
        e.slice(r, c),
        t,
        l
      );
      n.push(h), r = c;
    }
    return n;
  }
  getType() {
    return "MultiPolygon";
  }
  intersectsExtent(t) {
    return dc(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      t
    );
  }
  setCoordinates(t, e) {
    this.setLayout(e, t, 3), this.flatCoordinates || (this.flatCoordinates = []);
    const i = nc(
      this.flatCoordinates,
      0,
      t,
      this.stride,
      this.endss_
    );
    if (i.length === 0)
      this.flatCoordinates.length = 0;
    else {
      const n = i[i.length - 1];
      this.flatCoordinates.length = n.length === 0 ? 0 : n[n.length - 1];
    }
    this.changed();
  }
}
const Pf = Rn, Oo = Ot();
class Di {
  constructor(t, e, i, n, r) {
    this.styleFunction, this.extent_, this.id_ = r, this.type_ = t, this.flatCoordinates_ = e, this.flatInteriorPoints_ = null, this.flatMidpoints_ = null, this.ends_ = i, this.properties_ = n;
  }
  get(t) {
    return this.properties_[t];
  }
  getExtent() {
    return this.extent_ || (this.extent_ = this.type_ === "Point" ? Uo(this.flatCoordinates_) : Fs(
      this.flatCoordinates_,
      0,
      this.flatCoordinates_.length,
      2
    )), this.extent_;
  }
  getFlatInteriorPoint() {
    if (!this.flatInteriorPoints_) {
      const t = ue(this.getExtent());
      this.flatInteriorPoints_ = js(
        this.flatCoordinates_,
        0,
        this.ends_,
        2,
        t,
        0
      );
    }
    return this.flatInteriorPoints_;
  }
  getFlatInteriorPoints() {
    if (!this.flatInteriorPoints_) {
      const t = Ka(
        this.flatCoordinates_,
        0,
        this.ends_,
        2
      );
      this.flatInteriorPoints_ = fa(
        this.flatCoordinates_,
        0,
        this.ends_,
        2,
        t
      );
    }
    return this.flatInteriorPoints_;
  }
  getFlatMidpoint() {
    return this.flatMidpoints_ || (this.flatMidpoints_ = xn(
      this.flatCoordinates_,
      0,
      this.flatCoordinates_.length,
      2,
      0.5
    )), this.flatMidpoints_;
  }
  getFlatMidpoints() {
    if (!this.flatMidpoints_) {
      this.flatMidpoints_ = [];
      const t = this.flatCoordinates_;
      let e = 0;
      const i = this.ends_;
      for (let n = 0, r = i.length; n < r; ++n) {
        const o = i[n], a = xn(t, e, o, 2, 0.5);
        Gt(this.flatMidpoints_, a), e = o;
      }
    }
    return this.flatMidpoints_;
  }
  getId() {
    return this.id_;
  }
  getOrientedFlatCoordinates() {
    return this.flatCoordinates_;
  }
  getGeometry() {
    return this;
  }
  getSimplifiedGeometry(t) {
    return this;
  }
  simplifyTransformed(t, e) {
    return this;
  }
  getProperties() {
    return this.properties_;
  }
  getPropertiesInternal() {
    return this.properties_;
  }
  getStride() {
    return 2;
  }
  getStyleFunction() {
    return this.styleFunction;
  }
  getType() {
    return this.type_;
  }
  transform(t) {
    t = be(t);
    const e = t.getExtent(), i = t.getWorldExtent();
    if (e && i) {
      const n = Ae(i) / Ae(e);
      we(
        Oo,
        i[0],
        i[3],
        n,
        -n,
        0,
        0,
        0
      ), le(
        this.flatCoordinates_,
        0,
        this.flatCoordinates_.length,
        2,
        Oo,
        this.flatCoordinates_
      );
    }
  }
  getEnds() {
    return this.ends_;
  }
}
Di.prototype.getEndss = Di.prototype.getEnds;
Di.prototype.getFlatCoordinates = Di.prototype.getOrientedFlatCoordinates;
function Nf(s) {
  const t = s.getType();
  switch (t) {
    case "Point":
      return new mn(s.getFlatCoordinates());
    case "MultiPoint":
      return new Ya(s.getFlatCoordinates(), "XY");
    case "LineString":
      return new bs(s.getFlatCoordinates(), "XY");
    case "MultiLineString":
      return new Ff(
        s.getFlatCoordinates(),
        "XY",
        s.getEnds()
      );
    case "Polygon":
      const e = s.getFlatCoordinates(), i = s.getEnds(), n = mc(e, i);
      return n.length > 1 ? new Pf(e, "XY", n) : new de(e, "XY", i);
    default:
      throw new Error("Invalid geometry type:" + t);
  }
}
function kf(s, t) {
  const e = s.getId(), i = Nf(s), n = s.getProperties(), r = new Mf();
  return t !== void 0 && r.setGeometryName(t), r.setGeometry(i), e !== void 0 && r.setId(e), r.setProperties(n, !0), r;
}
const Bf = Di;
class Gf {
  constructor(t) {
    t.addContextMenu(this.contextMenu);
    const e = new cr({ color: "red", width: 3 }), i = new Fn({ color: "rgba(255,0,0,0.2)" });
    let n = new vi({
      image: new rr({
        fill: i,
        stroke: e,
        points: 4,
        radius: 10,
        angle: Math.PI / 4
      })
    });
    this._selectOverlay = new Lf({
      source: new cd(),
      style: n
    }), t.map.once("postrender", (r) => r.target.addLayer(this._selectOverlay)), this._selectedFeatures = new Lt(), this._selectedFeatures.on(["add", "remove"], (r) => {
      const o = r.element;
      r.type === "add" ? this._selectOverlay.getSource().addFeature(o instanceof Bf ? kf(o) : o) : r.type, this._selectedFeatures.getLength() > 0 ? this.contextMenu.classList.remove("d-none") : (this._selectOverlay.getSource().clear(), this.contextMenu.classList.add("d-none"));
    }), t.map.on("click", (r) => {
      const o = r.target.getFeaturesAtPixel(r.pixel);
      o.length == 0 && this._selectedFeatures.clear(), o.forEach((a) => this._selectedFeatures.push(a)), console.log(this._selectedFeatures.getArray());
    });
  }
  clearSelections() {
    this._selectedFeatures.clear();
  }
  get contextMenu() {
    return this._contextMenu ? this._contextMenu : (this._contextMenu = document.createElement("header"), this._contextMenu.classList.add("context-menu", "mdc-top-app-bar", "d-none"), this._contextMenu.innerHTML = `
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <button id="close-select-context" class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button mdc-ripple-surface" aria-label="Close">close</button>
          <span class="mdc-top-app-bar__title">Contextual title</span>
        </section>
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Share">share</button>
          <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Delete">delete</button>
          <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Open menu">more_vert</button>
        </section>
     </div>
    `, this._contextMenu.querySelector("#close-select-context").addEventListener("click", () => {
      this.clearSelections();
    }), this._contextMenu);
  }
}
const Wf = `@import"https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css";@import"https://fonts.googleapis.com/icon?family=Material+Icons";@import"https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css";@import"https://cdnjs.cloudflare.com/ajax/libs/mapbox-gl/1.13.0/mapbox-gl.css";:root,:host{--ol-background-color: white;--ol-accent-background-color: #F5F5F5;--ol-subtle-background-color: rgba(128, 128, 128, .25);--ol-partial-background-color: rgba(255, 255, 255, .75);--ol-foreground-color: #333333;--ol-subtle-foreground-color: #666666;--ol-brand-color: #00AAFF}.ol-box{box-sizing:border-box;border-radius:2px;border:1.5px solid var(--ol-background-color);background-color:var(--ol-partial-background-color)}.ol-mouse-position{top:8px;right:8px;position:absolute}.ol-scale-line{background:var(--ol-partial-background-color);border-radius:4px;bottom:8px;left:8px;padding:2px;position:absolute}.ol-scale-line-inner{border:1px solid var(--ol-subtle-foreground-color);border-top:none;color:var(--ol-foreground-color);font-size:10px;text-align:center;margin:1px;will-change:contents,width;transition:all .25s}.ol-scale-bar{position:absolute;bottom:8px;left:8px}.ol-scale-bar-inner{display:flex}.ol-scale-step-marker{width:1px;height:15px;background-color:var(--ol-foreground-color);float:right;z-index:10}.ol-scale-step-text{position:absolute;bottom:-5px;font-size:10px;z-index:11;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-text{position:absolute;font-size:12px;text-align:center;bottom:25px;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-singlebar{position:relative;height:10px;z-index:9;box-sizing:border-box;border:1px solid var(--ol-foreground-color)}.ol-scale-singlebar-even{background-color:var(--ol-subtle-foreground-color)}.ol-scale-singlebar-odd{background-color:var(--ol-background-color)}.ol-unsupported{display:none}.ol-viewport,.ol-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ol-viewport canvas{all:unset;overflow:hidden}.ol-viewport{touch-action:none}.ol-selectable{-webkit-touch-callout:default;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ol-grabbing{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.ol-grab{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.ol-control{position:absolute;background-color:var(--ol-subtle-background-color);border-radius:4px}.ol-zoom{top:.5em;left:.5em}.ol-rotate{top:.5em;right:.5em;transition:opacity .25s linear,visibility 0s linear}.ol-rotate.ol-hidden{opacity:0;visibility:hidden;transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{top:4.643em;left:.5em}.ol-full-screen{right:.5em;top:.5em}.ol-control button{display:block;margin:1px;padding:0;color:var(--ol-subtle-foreground-color);font-weight:700;text-decoration:none;font-size:inherit;text-align:center;height:1.375em;width:1.375em;line-height:.4em;background-color:var(--ol-background-color);border:none;border-radius:2px}.ol-control button::-moz-focus-inner{border:none;padding:0}.ol-zoom-extent button{line-height:1.4em}.ol-compass{display:block;font-weight:400;will-change:transform}.ol-touch .ol-control button{font-size:1.5em}.ol-touch .ol-zoom-extent{top:5.5em}.ol-control button:hover,.ol-control button:focus{text-decoration:none;outline:1px solid var(--ol-subtle-foreground-color);color:var(--ol-foreground-color)}.ol-zoom .ol-zoom-in{border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{border-radius:0 0 2px 2px}.ol-attribution{text-align:right;bottom:.5em;right:.5em;max-width:calc(100% - 1.3em);display:flex;flex-flow:row-reverse;align-items:center}.ol-attribution a{color:var(--ol-subtle-foreground-color);text-decoration:none}.ol-attribution ul{margin:0;padding:1px .5em;color:var(--ol-foreground-color);text-shadow:0 0 2px var(--ol-background-color);font-size:12px}.ol-attribution li{display:inline;list-style:none}.ol-attribution li:not(:last-child):after{content:" "}.ol-attribution img{max-height:2em;max-width:inherit;vertical-align:middle}.ol-attribution button{flex-shrink:0}.ol-attribution.ol-collapsed ul{display:none}.ol-attribution:not(.ol-collapsed){background:var(--ol-partial-background-color)}.ol-attribution.ol-uncollapsible{bottom:0;right:0;border-radius:4px 0 0}.ol-attribution.ol-uncollapsible img{margin-top:-.2em;max-height:1.6em}.ol-attribution.ol-uncollapsible button{display:none}.ol-zoomslider{top:4.5em;left:.5em;height:200px}.ol-zoomslider button{position:relative;height:10px}.ol-touch .ol-zoomslider{top:5.5em}.ol-overviewmap{left:.5em;bottom:.5em}.ol-overviewmap.ol-uncollapsible{bottom:0;left:0;border-radius:0 4px 0 0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{display:block}.ol-overviewmap .ol-overviewmap-map{border:1px solid var(--ol-subtle-foreground-color);height:150px;width:150px}.ol-overviewmap:not(.ol-collapsed) button{bottom:0;left:0;position:absolute}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{display:none}.ol-overviewmap:not(.ol-collapsed){background:var(--ol-subtle-background-color)}.ol-overviewmap-box{border:1.5px dotted var(--ol-subtle-foreground-color)}.ol-overviewmap .ol-overviewmap-box:hover{cursor:move}:root,:host{--mdc-theme-primary: #0c4a71;--mdc-theme-on-primary: #ffffff;--mdc-theme-secondary: #FEEAE6;--mdc-theme-on-secondary: #442C2E;--mdc-theme-surface: #FFFBFA;--mdc-theme-on-surface: #442C2E;--mdc-theme-background: #FFFFFF;--mdc-theme-on-background: #442C2E}.ui-show{opacity:1!important;z-index:24!important}.context-menu{background-color:#000}.d-none{display:none}.basemaps-ui{right:10px!important;top:74px!important;left:auto!important;padding:10px;display:flex;gap:10px}.basemaps-ui .mdc-card{width:100px}.basemaps-ui .mdc-card__media-content{font-family:sans-serif;font-weight:700;padding:5px;background-color:#fff3}:host,main,div#map{display:flex;width:100%}div#map{width:100%}
`, Mo = {
  Basemaps: Xu,
  Select: Gf
};
class Uf extends HTMLElement {
  constructor() {
    super();
    const t = document.createElement("template");
    t.innerHTML = `
      <style>${Wf}</style>
      
      <aside class="mdc-drawer mdc-drawer--modal">
        <div class="mdc-drawer__content">
          <nav class="mdc-list">
            <a class="mdc-list-item mdc-list-item--activated" href="#" aria-current="page" tabindex="0">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
              <span class="mdc-list-item__text">Inbox</span>
            </a>
            <a class="mdc-list-item" href="#">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
              <span class="mdc-list-item__text">Outgoing</span>
            </a>
            <a class="mdc-list-item" href="#">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
              <span class="mdc-list-item__text">Drafts</span>
            </a>
          </nav>
        </div>
      </aside>
      <div class="mdc-drawer-scrim"></div>

      <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button id="menu" class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button mdc-ripple-surface" aria-label="Open navigation menu">menu</button>
            <span class="mdc-top-app-bar__title">Garden Grove</span>
          </section>
          <section id="main-app-bar" class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar"></section>
        </div>
      </header>

      <span id="context-menus"></span>

      <main class="mdc-top-app-bar--fixed-adjust">
        <div id="error-banner" class="mdc-banner mdc-banner--centered" role="banner">
        <div class="mdc-banner__content"
            role="alertdialog"
            aria-live="assertive">
          <div class="mdc-banner__graphic-text-wrapper">
            <div id="error-banner-text" class="mdc-banner__text"></div>
          </div>
          <div class="mdc-banner__actions">
            <button type="button" class="mdc-button mdc-banner__primary-action">
              <div class="mdc-button__ripple"></div>
              <div class="mdc-button__label">Dismiss</div>
            </button>
          </div>
        </div>
      </div>

      <section id="ui-space"></section>

      <div id="map"></div>
      </main>
    `, this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(t.content.cloneNode(!0));
  }
  connectedCallback() {
    ku(this.getAttribute("config") || this.getQueryParam("config")).then(this._initialize.bind(this)).catch((t) => {
      this.promptError({ error: t, throwError: !0 });
    });
  }
  promptError({ error: t, actions: e, throwError: i }) {
    if (this.errorBanner || (this.errorBanner = new Ol(this.shadowRoot.querySelector("#error-banner"))), this.shadowRoot.getElementById("error-banner"), this.errorBanner.setText(t.message), this.errorBanner.open(), i)
      throw t;
  }
  addButtonToMainBar(t) {
    t.classList.add(
      "material-icons",
      "mdc-top-app-bar__action-item",
      "mdc-icon-button",
      "mdc-ripple-surface"
    ), new Vn(t).unbounded = !0, this.shadowRoot.getElementById("main-app-bar").appendChild(t);
  }
  addContextMenu(t) {
    t.querySelectorAll(".mdc-icon-button").forEach((e) => new Vn(e).unbounded = !0), this.shadowRoot.getElementById("context-menus").after(t);
  }
  addUIToMapSpace(t) {
    this.shadowRoot.getElementById("ui-space").appendChild(t);
  }
  addToDrawer() {
  }
  addToDataSpace() {
  }
  showDataSpace() {
  }
  get map() {
    return this._map;
  }
  get mapContainer() {
    return this._mapContainer || (this._mapContainer = this.shadowRoot.getElementById("map"));
  }
  get config() {
    return this._viewerConfig;
  }
  _initialize(t) {
    this._viewerConfig = t, this.shadowRoot.querySelectorAll(".mdc-icon-button").forEach((e) => new Vn(e).unbounded = !0), this.drawer = wl.attachTo(this.shadowRoot.querySelector(".mdc-drawer")), this.shadowRoot.getElementById("menu").addEventListener("click", () => this.drawer.open = !0), this._setupMap(), this._setupWidgets(), this._setupVectorOverlay();
  }
  _setupMap() {
    const t = this.config.mapOptions.bounds;
    this._map = new Nu({
      target: this.mapContainer,
      view: new Nt({
        center: Ph(ue(t)),
        zoom: 13,
        constrainResolution: !0
      })
    });
  }
  _setupWidgets() {
    this.config.widgets.forEach((t) => {
      const e = typeof t == "object" ? Object.keys(t)[0] : t;
      if (Mo[e]) {
        const i = new Mo[e](this);
        i.widgetButton && this.addButtonToMainBar(i.widgetButton), i.mapSpaceUI && this.addUIToMapSpace(i.mapSpaceUI);
      } else
        console.error(`${e} widget does not exist.`);
    });
  }
  _setupVectorOverlay() {
    ol(!0), this.vectorOverlay = new ki(), this.map.addLayer(this.vectorOverlay), al(this.vectorOverlay, this.config.vectorOverlay).then((t) => {
      Lr(this.vectorOverlay, "addresses").updateWhileInteracting_ = !0, Lr(this.vectorOverlay, "addresses").updateWhileAnimating_ = !0;
    });
  }
}
export {
  Uf as default
};
