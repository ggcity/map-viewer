var J = function(a, i) {
  return J = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
    e.__proto__ = t;
  } || function(e, t) {
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  }, J(a, i);
};
function k(a, i) {
  if (typeof i != "function" && i !== null)
    throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
  J(a, i);
  function e() {
    this.constructor = a;
  }
  a.prototype = i === null ? Object.create(i) : (e.prototype = i.prototype, new e());
}
var T = function() {
  return T = Object.assign || function(i) {
    for (var e, t = 1, n = arguments.length; t < n; t++) {
      e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (i[r] = e[r]);
    }
    return i;
  }, T.apply(this, arguments);
};
function P(a) {
  var i = typeof Symbol == "function" && Symbol.iterator, e = i && a[i], t = 0;
  if (e)
    return e.call(a);
  if (a && typeof a.length == "number")
    return {
      next: function() {
        return a && t >= a.length && (a = void 0), { value: a && a[t++], done: !a };
      }
    };
  throw new TypeError(i ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Q(a, i) {
  var e = typeof Symbol == "function" && a[Symbol.iterator];
  if (!e)
    return a;
  var t = e.call(a), n, r = [], o;
  try {
    for (; (i === void 0 || i-- > 0) && !(n = t.next()).done; )
      r.push(n.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      n && !n.done && (e = t.return) && e.call(t);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return r;
}
function oe(a, i, e) {
  if (e || arguments.length === 2)
    for (var t = 0, n = i.length, r; t < n; t++)
      (r || !(t in i)) && (r || (r = Array.prototype.slice.call(i, 0, t)), r[t] = i[t]);
  return a.concat(r || Array.prototype.slice.call(i));
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
var W = function() {
  function a(i) {
    i === void 0 && (i = {}), this.adapter = i;
  }
  return Object.defineProperty(a, "cssClasses", {
    get: function() {
      return {};
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(a, "strings", {
    get: function() {
      return {};
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(a, "numbers", {
    get: function() {
      return {};
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(a, "defaultAdapter", {
    get: function() {
      return {};
    },
    enumerable: !1,
    configurable: !0
  }), a.prototype.init = function() {
  }, a.prototype.destroy = function() {
  }, a;
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
var ee = function() {
  function a(i, e) {
    for (var t = [], n = 2; n < arguments.length; n++)
      t[n - 2] = arguments[n];
    this.root = i, this.initialize.apply(this, oe([], Q(t))), this.foundation = e === void 0 ? this.getDefaultFoundation() : e, this.foundation.init(), this.initialSyncWithDOM();
  }
  return a.attachTo = function(i) {
    return new a(i, new W({}));
  }, a.prototype.initialize = function() {
  }, a.prototype.getDefaultFoundation = function() {
    throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class");
  }, a.prototype.initialSyncWithDOM = function() {
  }, a.prototype.destroy = function() {
    this.foundation.destroy();
  }, a.prototype.listen = function(i, e, t) {
    this.root.addEventListener(i, e, t);
  }, a.prototype.unlisten = function(i, e, t) {
    this.root.removeEventListener(i, e, t);
  }, a.prototype.emit = function(i, e, t) {
    t === void 0 && (t = !1);
    var n;
    typeof CustomEvent == "function" ? n = new CustomEvent(i, {
      bubbles: t,
      detail: e
    }) : (n = document.createEvent("CustomEvent"), n.initCustomEvent(i, t, !1, e)), this.root.dispatchEvent(n);
  }, a;
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
function z(a) {
  return a === void 0 && (a = window), ce(a) ? { passive: !0 } : !1;
}
function ce(a) {
  a === void 0 && (a = window);
  var i = !1;
  try {
    var e = {
      get passive() {
        return i = !0, !1;
      }
    }, t = function() {
    };
    a.document.addEventListener("test", t, e), a.document.removeEventListener("test", t, e);
  } catch {
    i = !1;
  }
  return i;
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
function le(a, i) {
  if (a.closest)
    return a.closest(i);
  for (var e = a; e; ) {
    if (M(e, i))
      return e;
    e = e.parentElement;
  }
  return null;
}
function M(a, i) {
  var e = a.matches || a.webkitMatchesSelector || a.msMatchesSelector;
  return e.call(a, i);
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
var ue = {
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, fe = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, te = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
}, G;
function he(a, i) {
  i === void 0 && (i = !1);
  var e = a.CSS, t = G;
  if (typeof G == "boolean" && !i)
    return G;
  var n = e && typeof e.supports == "function";
  if (!n)
    return !1;
  var r = e.supports("--css-vars", "yes"), o = e.supports("(--css-vars: yes)") && e.supports("color", "#00000000");
  return t = r || o, i || (G = t), t;
}
function pe(a, i, e) {
  if (!a)
    return { x: 0, y: 0 };
  var t = i.x, n = i.y, r = t + e.left, o = n + e.top, s, d;
  if (a.type === "touchstart") {
    var A = a;
    s = A.changedTouches[0].pageX - r, d = A.changedTouches[0].pageY - o;
  } else {
    var m = a;
    s = m.pageX - r, d = m.pageY - o;
  }
  return { x: s, y: d };
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
var ie = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], ne = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], X = [], me = function(a) {
  k(i, a);
  function i(e) {
    var t = a.call(this, T(T({}, i.defaultAdapter), e)) || this;
    return t.activationAnimationHasEnded = !1, t.activationTimer = 0, t.fgDeactivationRemovalTimer = 0, t.fgScale = "0", t.frame = { width: 0, height: 0 }, t.initialSize = 0, t.layoutFrame = 0, t.maxRadius = 0, t.unboundedCoords = { left: 0, top: 0 }, t.activationState = t.defaultActivationState(), t.activationTimerCallback = function() {
      t.activationAnimationHasEnded = !0, t.runDeactivationUXLogicIfReady();
    }, t.activateHandler = function(n) {
      t.activateImpl(n);
    }, t.deactivateHandler = function() {
      t.deactivateImpl();
    }, t.focusHandler = function() {
      t.handleFocus();
    }, t.blurHandler = function() {
      t.handleBlur();
    }, t.resizeHandler = function() {
      t.layout();
    }, t;
  }
  return Object.defineProperty(i, "cssClasses", {
    get: function() {
      return ue;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(i, "strings", {
    get: function() {
      return fe;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(i, "numbers", {
    get: function() {
      return te;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(i, "defaultAdapter", {
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
  }), i.prototype.init = function() {
    var e = this, t = this.supportsPressRipple();
    if (this.registerRootHandlers(t), t) {
      var n = i.cssClasses, r = n.ROOT, o = n.UNBOUNDED;
      requestAnimationFrame(function() {
        e.adapter.addClass(r), e.adapter.isUnbounded() && (e.adapter.addClass(o), e.layoutInternal());
      });
    }
  }, i.prototype.destroy = function() {
    var e = this;
    if (this.supportsPressRipple()) {
      this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(i.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(i.cssClasses.FG_DEACTIVATION));
      var t = i.cssClasses, n = t.ROOT, r = t.UNBOUNDED;
      requestAnimationFrame(function() {
        e.adapter.removeClass(n), e.adapter.removeClass(r), e.removeCssVars();
      });
    }
    this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
  }, i.prototype.activate = function(e) {
    this.activateImpl(e);
  }, i.prototype.deactivate = function() {
    this.deactivateImpl();
  }, i.prototype.layout = function() {
    var e = this;
    this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
      e.layoutInternal(), e.layoutFrame = 0;
    });
  }, i.prototype.setUnbounded = function(e) {
    var t = i.cssClasses.UNBOUNDED;
    e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
  }, i.prototype.handleFocus = function() {
    var e = this;
    requestAnimationFrame(function() {
      return e.adapter.addClass(i.cssClasses.BG_FOCUSED);
    });
  }, i.prototype.handleBlur = function() {
    var e = this;
    requestAnimationFrame(function() {
      return e.adapter.removeClass(i.cssClasses.BG_FOCUSED);
    });
  }, i.prototype.supportsPressRipple = function() {
    return this.adapter.browserSupportsCssVars();
  }, i.prototype.defaultActivationState = function() {
    return {
      activationEvent: void 0,
      hasDeactivationUXRun: !1,
      isActivated: !1,
      isProgrammatic: !1,
      wasActivatedByPointer: !1,
      wasElementMadeActive: !1
    };
  }, i.prototype.registerRootHandlers = function(e) {
    var t, n;
    if (e) {
      try {
        for (var r = P(ie), o = r.next(); !o.done; o = r.next()) {
          var s = o.value;
          this.adapter.registerInteractionHandler(s, this.activateHandler);
        }
      } catch (d) {
        t = { error: d };
      } finally {
        try {
          o && !o.done && (n = r.return) && n.call(r);
        } finally {
          if (t)
            throw t.error;
        }
      }
      this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
    }
    this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
  }, i.prototype.registerDeactivationHandlers = function(e) {
    var t, n;
    if (e.type === "keydown")
      this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
    else
      try {
        for (var r = P(ne), o = r.next(); !o.done; o = r.next()) {
          var s = o.value;
          this.adapter.registerDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (d) {
        t = { error: d };
      } finally {
        try {
          o && !o.done && (n = r.return) && n.call(r);
        } finally {
          if (t)
            throw t.error;
        }
      }
  }, i.prototype.deregisterRootHandlers = function() {
    var e, t;
    try {
      for (var n = P(ie), r = n.next(); !r.done; r = n.next()) {
        var o = r.value;
        this.adapter.deregisterInteractionHandler(o, this.activateHandler);
      }
    } catch (s) {
      e = { error: s };
    } finally {
      try {
        r && !r.done && (t = n.return) && t.call(n);
      } finally {
        if (e)
          throw e.error;
      }
    }
    this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
  }, i.prototype.deregisterDeactivationHandlers = function() {
    var e, t;
    this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
    try {
      for (var n = P(ne), r = n.next(); !r.done; r = n.next()) {
        var o = r.value;
        this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
      }
    } catch (s) {
      e = { error: s };
    } finally {
      try {
        r && !r.done && (t = n.return) && t.call(n);
      } finally {
        if (e)
          throw e.error;
      }
    }
  }, i.prototype.removeCssVars = function() {
    var e = this, t = i.strings, n = Object.keys(t);
    n.forEach(function(r) {
      r.indexOf("VAR_") === 0 && e.adapter.updateCssVariable(t[r], null);
    });
  }, i.prototype.activateImpl = function(e) {
    var t = this;
    if (!this.adapter.isSurfaceDisabled()) {
      var n = this.activationState;
      if (!n.isActivated) {
        var r = this.previousActivationEvent, o = r && e !== void 0 && r.type !== e.type;
        if (!o) {
          n.isActivated = !0, n.isProgrammatic = e === void 0, n.activationEvent = e, n.wasActivatedByPointer = n.isProgrammatic ? !1 : e !== void 0 && (e.type === "mousedown" || e.type === "touchstart" || e.type === "pointerdown");
          var s = e !== void 0 && X.length > 0 && X.some(function(d) {
            return t.adapter.containsEventTarget(d);
          });
          if (s) {
            this.resetActivationState();
            return;
          }
          e !== void 0 && (X.push(e.target), this.registerDeactivationHandlers(e)), n.wasElementMadeActive = this.checkElementMadeActive(e), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
            X = [], !n.wasElementMadeActive && e !== void 0 && (e.key === " " || e.keyCode === 32) && (n.wasElementMadeActive = t.checkElementMadeActive(e), n.wasElementMadeActive && t.animateActivation()), n.wasElementMadeActive || (t.activationState = t.defaultActivationState());
          });
        }
      }
    }
  }, i.prototype.checkElementMadeActive = function(e) {
    return e !== void 0 && e.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
  }, i.prototype.animateActivation = function() {
    var e = this, t = i.strings, n = t.VAR_FG_TRANSLATE_START, r = t.VAR_FG_TRANSLATE_END, o = i.cssClasses, s = o.FG_DEACTIVATION, d = o.FG_ACTIVATION, A = i.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal();
    var m = "", y = "";
    if (!this.adapter.isUnbounded()) {
      var p = this.getFgTranslationCoordinates(), x = p.startPoint, R = p.endPoint;
      m = x.x + "px, " + x.y + "px", y = R.x + "px, " + R.y + "px";
    }
    this.adapter.updateCssVariable(n, m), this.adapter.updateCssVariable(r, y), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(d), this.activationTimer = setTimeout(function() {
      e.activationTimerCallback();
    }, A);
  }, i.prototype.getFgTranslationCoordinates = function() {
    var e = this.activationState, t = e.activationEvent, n = e.wasActivatedByPointer, r;
    n ? r = pe(t, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : r = {
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
  }, i.prototype.runDeactivationUXLogicIfReady = function() {
    var e = this, t = i.cssClasses.FG_DEACTIVATION, n = this.activationState, r = n.hasDeactivationUXRun, o = n.isActivated, s = r || !o;
    s && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(t), this.fgDeactivationRemovalTimer = setTimeout(function() {
      e.adapter.removeClass(t);
    }, te.FG_DEACTIVATION_MS));
  }, i.prototype.rmBoundedActivationClasses = function() {
    var e = i.cssClasses.FG_ACTIVATION;
    this.adapter.removeClass(e), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
  }, i.prototype.resetActivationState = function() {
    var e = this;
    this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
      return e.previousActivationEvent = void 0;
    }, i.numbers.TAP_DELAY_MS);
  }, i.prototype.deactivateImpl = function() {
    var e = this, t = this.activationState;
    if (!!t.isActivated) {
      var n = T({}, t);
      t.isProgrammatic ? (requestAnimationFrame(function() {
        e.animateDeactivation(n);
      }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
        e.activationState.hasDeactivationUXRun = !0, e.animateDeactivation(n), e.resetActivationState();
      }));
    }
  }, i.prototype.animateDeactivation = function(e) {
    var t = e.wasActivatedByPointer, n = e.wasElementMadeActive;
    (t || n) && this.runDeactivationUXLogicIfReady();
  }, i.prototype.layoutInternal = function() {
    var e = this;
    this.frame = this.adapter.computeBoundingRect();
    var t = Math.max(this.frame.height, this.frame.width), n = function() {
      var o = Math.sqrt(Math.pow(e.frame.width, 2) + Math.pow(e.frame.height, 2));
      return o + i.numbers.PADDING;
    };
    this.maxRadius = this.adapter.isUnbounded() ? t : n();
    var r = Math.floor(t * i.numbers.INITIAL_ORIGIN_SCALE);
    this.adapter.isUnbounded() && r % 2 !== 0 ? this.initialSize = r - 1 : this.initialSize = r, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
  }, i.prototype.updateLayoutCssVars = function() {
    var e = i.strings, t = e.VAR_FG_SIZE, n = e.VAR_LEFT, r = e.VAR_TOP, o = e.VAR_FG_SCALE;
    this.adapter.updateCssVariable(t, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
      left: Math.round(this.frame.width / 2 - this.initialSize / 2),
      top: Math.round(this.frame.height / 2 - this.initialSize / 2)
    }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(r, this.unboundedCoords.top + "px"));
  }, i;
}(W);
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
var ve = function(a) {
  k(i, a);
  function i() {
    var e = a !== null && a.apply(this, arguments) || this;
    return e.disabled = !1, e;
  }
  return i.attachTo = function(e, t) {
    t === void 0 && (t = {
      isUnbounded: void 0
    });
    var n = new i(e);
    return t.isUnbounded !== void 0 && (n.unbounded = t.isUnbounded), n;
  }, i.createAdapter = function(e) {
    return {
      addClass: function(t) {
        return e.root.classList.add(t);
      },
      browserSupportsCssVars: function() {
        return he(window);
      },
      computeBoundingRect: function() {
        return e.root.getBoundingClientRect();
      },
      containsEventTarget: function(t) {
        return e.root.contains(t);
      },
      deregisterDocumentInteractionHandler: function(t, n) {
        return document.documentElement.removeEventListener(t, n, z());
      },
      deregisterInteractionHandler: function(t, n) {
        return e.root.removeEventListener(t, n, z());
      },
      deregisterResizeHandler: function(t) {
        return window.removeEventListener("resize", t);
      },
      getWindowPageOffset: function() {
        return { x: window.pageXOffset, y: window.pageYOffset };
      },
      isSurfaceActive: function() {
        return M(e.root, ":active");
      },
      isSurfaceDisabled: function() {
        return Boolean(e.disabled);
      },
      isUnbounded: function() {
        return Boolean(e.unbounded);
      },
      registerDocumentInteractionHandler: function(t, n) {
        return document.documentElement.addEventListener(t, n, z());
      },
      registerInteractionHandler: function(t, n) {
        return e.root.addEventListener(t, n, z());
      },
      registerResizeHandler: function(t) {
        return window.addEventListener("resize", t);
      },
      removeClass: function(t) {
        return e.root.classList.remove(t);
      },
      updateCssVariable: function(t, n) {
        return e.root.style.setProperty(t, n);
      }
    };
  }, Object.defineProperty(i.prototype, "unbounded", {
    get: function() {
      return Boolean(this.isUnbounded);
    },
    set: function(e) {
      this.isUnbounded = Boolean(e), this.setUnbounded();
    },
    enumerable: !1,
    configurable: !0
  }), i.prototype.activate = function() {
    this.foundation.activate();
  }, i.prototype.deactivate = function() {
    this.foundation.deactivate();
  }, i.prototype.layout = function() {
    this.foundation.layout();
  }, i.prototype.getDefaultFoundation = function() {
    return new me(i.createAdapter(this));
  }, i.prototype.initialSyncWithDOM = function() {
    var e = this.root;
    this.isUnbounded = "mdcRippleIsUnbounded" in e.dataset;
  }, i.prototype.setUnbounded = function() {
    this.foundation.setUnbounded(Boolean(this.isUnbounded));
  }, i;
}(ee);
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
var F, L, c = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
}, Ie = (F = {}, F["" + c.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", F["" + c.LIST_ITEM_CLASS] = "mdc-list-item", F["" + c.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", F["" + c.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", F["" + c.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", F["" + c.ROOT] = "mdc-list", F), w = (L = {}, L["" + c.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", L["" + c.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", L["" + c.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", L["" + c.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", L["" + c.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", L["" + c.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", L["" + c.ROOT] = "mdc-deprecated-list", L), u = {
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
    .` + c.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + c.LIST_ITEM_CLASS + ` a,
    .` + w[c.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + w[c.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + c.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + c.LIST_ITEM_CLASS + ` a,
    .` + c.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + c.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + w[c.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + w[c.LIST_ITEM_CLASS] + ` a,
    .` + w[c.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + w[c.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, f = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
}, be = "evolution";
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
var l = {
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
}, b = /* @__PURE__ */ new Set();
b.add(l.BACKSPACE);
b.add(l.ENTER);
b.add(l.SPACEBAR);
b.add(l.PAGE_UP);
b.add(l.PAGE_DOWN);
b.add(l.END);
b.add(l.HOME);
b.add(l.ARROW_LEFT);
b.add(l.ARROW_UP);
b.add(l.ARROW_RIGHT);
b.add(l.ARROW_DOWN);
b.add(l.DELETE);
b.add(l.ESCAPE);
b.add(l.TAB);
var C = {
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
}, E = /* @__PURE__ */ new Map();
E.set(C.BACKSPACE, l.BACKSPACE);
E.set(C.ENTER, l.ENTER);
E.set(C.SPACEBAR, l.SPACEBAR);
E.set(C.PAGE_UP, l.PAGE_UP);
E.set(C.PAGE_DOWN, l.PAGE_DOWN);
E.set(C.END, l.END);
E.set(C.HOME, l.HOME);
E.set(C.ARROW_LEFT, l.ARROW_LEFT);
E.set(C.ARROW_UP, l.ARROW_UP);
E.set(C.ARROW_RIGHT, l.ARROW_RIGHT);
E.set(C.ARROW_DOWN, l.ARROW_DOWN);
E.set(C.DELETE, l.DELETE);
E.set(C.ESCAPE, l.ESCAPE);
E.set(C.TAB, l.TAB);
var O = /* @__PURE__ */ new Set();
O.add(l.PAGE_UP);
O.add(l.PAGE_DOWN);
O.add(l.END);
O.add(l.HOME);
O.add(l.ARROW_LEFT);
O.add(l.ARROW_UP);
O.add(l.ARROW_RIGHT);
O.add(l.ARROW_DOWN);
function I(a) {
  var i = a.key;
  if (b.has(i))
    return i;
  var e = E.get(a.keyCode);
  return e || l.UNKNOWN;
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
var Ee = ["input", "button", "textarea", "select"], S = function(a) {
  var i = a.target;
  if (!!i) {
    var e = ("" + i.tagName).toLowerCase();
    Ee.indexOf(e) === -1 && a.preventDefault();
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
function Ae() {
  var a = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return a;
}
function ge(a, i) {
  for (var e = /* @__PURE__ */ new Map(), t = 0; t < a; t++) {
    var n = i(t).trim();
    if (!!n) {
      var r = n[0].toLowerCase();
      e.has(r) || e.set(r, []), e.get(r).push({ text: n.toLowerCase(), index: t });
    }
  }
  return e.forEach(function(o) {
    o.sort(function(s, d) {
      return s.index - d.index;
    });
  }), e;
}
function Y(a, i) {
  var e = a.nextChar, t = a.focusItemAtIndex, n = a.sortedIndexByFirstChar, r = a.focusedItemIndex, o = a.skipFocus, s = a.isItemAtIndexDisabled;
  clearTimeout(i.bufferClearTimeout), i.bufferClearTimeout = setTimeout(function() {
    de(i);
  }, f.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), i.typeaheadBuffer = i.typeaheadBuffer + e;
  var d;
  return i.typeaheadBuffer.length === 1 ? d = Ce(n, r, s, i) : d = ye(n, s, i), d !== -1 && !o && t(d), d;
}
function Ce(a, i, e, t) {
  var n = t.typeaheadBuffer[0], r = a.get(n);
  if (!r)
    return -1;
  if (n === t.currentFirstChar && r[t.sortedIndexCursor].index === i) {
    t.sortedIndexCursor = (t.sortedIndexCursor + 1) % r.length;
    var o = r[t.sortedIndexCursor].index;
    if (!e(o))
      return o;
  }
  t.currentFirstChar = n;
  var s = -1, d;
  for (d = 0; d < r.length; d++)
    if (!e(r[d].index)) {
      s = d;
      break;
    }
  for (; d < r.length; d++)
    if (r[d].index > i && !e(r[d].index)) {
      s = d;
      break;
    }
  return s !== -1 ? (t.sortedIndexCursor = s, r[t.sortedIndexCursor].index) : -1;
}
function ye(a, i, e) {
  var t = e.typeaheadBuffer[0], n = a.get(t);
  if (!n)
    return -1;
  var r = n[e.sortedIndexCursor];
  if (r.text.lastIndexOf(e.typeaheadBuffer, 0) === 0 && !i(r.index))
    return r.index;
  for (var o = (e.sortedIndexCursor + 1) % n.length, s = -1; o !== e.sortedIndexCursor; ) {
    var d = n[o], A = d.text.lastIndexOf(e.typeaheadBuffer, 0) === 0, m = !i(d.index);
    if (A && m) {
      s = o;
      break;
    }
    o = (o + 1) % n.length;
  }
  return s !== -1 ? (e.sortedIndexCursor = s, n[e.sortedIndexCursor].index) : -1;
}
function se(a) {
  return a.typeaheadBuffer.length > 0;
}
function de(a) {
  a.typeaheadBuffer = "";
}
function re(a, i) {
  var e = a.event, t = a.isTargetListItem, n = a.focusedItemIndex, r = a.focusItemAtIndex, o = a.sortedIndexByFirstChar, s = a.isItemAtIndexDisabled, d = I(e) === "ArrowLeft", A = I(e) === "ArrowUp", m = I(e) === "ArrowRight", y = I(e) === "ArrowDown", p = I(e) === "Home", x = I(e) === "End", R = I(e) === "Enter", D = I(e) === "Spacebar";
  if (e.altKey || e.ctrlKey || e.metaKey || d || A || m || y || p || x || R)
    return -1;
  var N = !D && e.key.length === 1;
  if (N) {
    S(e);
    var H = {
      focusItemAtIndex: r,
      focusedItemIndex: n,
      nextChar: e.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: s
    };
    return Y(H, i);
  }
  if (!D)
    return -1;
  t && S(e);
  var v = t && se(i);
  if (v) {
    var H = {
      focusItemAtIndex: r,
      focusedItemIndex: n,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: s
    };
    return Y(H, i);
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
function Se(a) {
  return a instanceof Array;
}
var xe = ["Alt", "Control", "Meta", "Shift"];
function ae(a) {
  var i = new Set(a ? xe.filter(function(e) {
    return a.getModifierState(e);
  }) : []);
  return function(e) {
    return e.every(function(t) {
      return i.has(t);
    }) && e.length === i.size;
  };
}
var _e = function(a) {
  k(i, a);
  function i(e) {
    var t = a.call(this, T(T({}, i.defaultAdapter), e)) || this;
    return t.wrapFocus = !1, t.isVertical = !0, t.isSingleSelectionList = !1, t.areDisabledItemsFocusable = !0, t.selectedIndex = f.UNSET_INDEX, t.focusedItemIndex = f.UNSET_INDEX, t.useActivatedClass = !1, t.useSelectedAttr = !1, t.ariaCurrentAttrValue = null, t.isCheckboxList = !1, t.isRadioList = !1, t.lastSelectedIndex = null, t.hasTypeahead = !1, t.typeaheadState = Ae(), t.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), t;
  }
  return Object.defineProperty(i, "strings", {
    get: function() {
      return u;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(i, "cssClasses", {
    get: function() {
      return c;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(i, "numbers", {
    get: function() {
      return f;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(i, "defaultAdapter", {
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
  }), i.prototype.layout = function() {
    this.adapter.getListItemCount() !== 0 && (this.adapter.hasCheckboxAtIndex(0) ? this.isCheckboxList = !0 : this.adapter.hasRadioAtIndex(0) ? this.isRadioList = !0 : this.maybeInitializeSingleSelection(), this.hasTypeahead && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex()));
  }, i.prototype.getFocusedItemIndex = function() {
    return this.focusedItemIndex;
  }, i.prototype.setWrapFocus = function(e) {
    this.wrapFocus = e;
  }, i.prototype.setVerticalOrientation = function(e) {
    this.isVertical = e;
  }, i.prototype.setSingleSelection = function(e) {
    this.isSingleSelectionList = e, e && (this.maybeInitializeSingleSelection(), this.selectedIndex = this.getSelectedIndexFromDOM());
  }, i.prototype.setDisabledItemsFocusable = function(e) {
    this.areDisabledItemsFocusable = e;
  }, i.prototype.maybeInitializeSingleSelection = function() {
    var e = this.getSelectedIndexFromDOM();
    if (e !== f.UNSET_INDEX) {
      var t = this.adapter.listItemAtIndexHasClass(e, c.LIST_ITEM_ACTIVATED_CLASS);
      t && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = e;
    }
  }, i.prototype.getSelectedIndexFromDOM = function() {
    for (var e = f.UNSET_INDEX, t = this.adapter.getListItemCount(), n = 0; n < t; n++) {
      var r = this.adapter.listItemAtIndexHasClass(n, c.LIST_ITEM_SELECTED_CLASS), o = this.adapter.listItemAtIndexHasClass(n, c.LIST_ITEM_ACTIVATED_CLASS);
      if (!!(r || o)) {
        e = n;
        break;
      }
    }
    return e;
  }, i.prototype.setHasTypeahead = function(e) {
    this.hasTypeahead = e, e && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
  }, i.prototype.isTypeaheadInProgress = function() {
    return this.hasTypeahead && se(this.typeaheadState);
  }, i.prototype.setUseActivatedClass = function(e) {
    this.useActivatedClass = e;
  }, i.prototype.setUseSelectedAttribute = function(e) {
    this.useSelectedAttr = e;
  }, i.prototype.getSelectedIndex = function() {
    return this.selectedIndex;
  }, i.prototype.setSelectedIndex = function(e, t) {
    t === void 0 && (t = {}), this.isIndexValid(e) && (this.isCheckboxList ? this.setCheckboxAtIndex(e, t) : this.isRadioList ? this.setRadioAtIndex(e, t) : this.setSingleSelectionAtIndex(e, t));
  }, i.prototype.handleFocusIn = function(e) {
    e >= 0 && (this.focusedItemIndex = e, this.adapter.setAttributeForElementIndex(e, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(e, "0"));
  }, i.prototype.handleFocusOut = function(e) {
    var t = this;
    e >= 0 && (this.adapter.setAttributeForElementIndex(e, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(e, "-1")), setTimeout(function() {
      t.adapter.isFocusInsideList() || t.setTabindexToFirstSelectedOrFocusedItem();
    }, 0);
  }, i.prototype.isIndexDisabled = function(e) {
    return this.adapter.listItemAtIndexHasClass(e, c.LIST_ITEM_DISABLED_CLASS);
  }, i.prototype.handleKeydown = function(e, t, n) {
    var r = this, o, s = I(e) === "ArrowLeft", d = I(e) === "ArrowUp", A = I(e) === "ArrowRight", m = I(e) === "ArrowDown", y = I(e) === "Home", p = I(e) === "End", x = I(e) === "Enter", R = I(e) === "Spacebar", D = this.isVertical && m || !this.isVertical && A, N = this.isVertical && d || !this.isVertical && s, H = e.key === "A" || e.key === "a", v = ae(e);
    if (this.adapter.isRootFocused()) {
      if ((N || p) && v([]))
        e.preventDefault(), this.focusLastElement();
      else if ((D || y) && v([]))
        e.preventDefault(), this.focusFirstElement();
      else if (N && v(["Shift"]) && this.isCheckboxList) {
        e.preventDefault();
        var _ = this.focusLastElement();
        _ !== -1 && this.setSelectedIndexOnAction(_, !1);
      } else if (D && v(["Shift"]) && this.isCheckboxList) {
        e.preventDefault();
        var _ = this.focusFirstElement();
        _ !== -1 && this.setSelectedIndexOnAction(_, !1);
      }
      if (this.hasTypeahead) {
        var j = {
          event: e,
          focusItemAtIndex: function(q) {
            r.focusItemAtIndex(q);
          },
          focusedItemIndex: -1,
          isTargetListItem: t,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: function(q) {
            return r.isIndexDisabled(q);
          }
        };
        re(j, this.typeaheadState);
      }
      return;
    }
    var h = this.adapter.getFocusedElementIndex();
    if (!(h === -1 && (h = n, h < 0))) {
      if (D && v([]))
        S(e), this.focusNextElement(h);
      else if (N && v([]))
        S(e), this.focusPrevElement(h);
      else if (D && v(["Shift"]) && this.isCheckboxList) {
        S(e);
        var _ = this.focusNextElement(h);
        _ !== -1 && this.setSelectedIndexOnAction(_, !1);
      } else if (N && v(["Shift"]) && this.isCheckboxList) {
        S(e);
        var _ = this.focusPrevElement(h);
        _ !== -1 && this.setSelectedIndexOnAction(_, !1);
      } else if (y && v([]))
        S(e), this.focusFirstElement();
      else if (p && v([]))
        S(e), this.focusLastElement();
      else if (y && v(["Control", "Shift"]) && this.isCheckboxList) {
        if (S(e), this.isIndexDisabled(h))
          return;
        this.focusFirstElement(), this.toggleCheckboxRange(0, h, h);
      } else if (p && v(["Control", "Shift"]) && this.isCheckboxList) {
        if (S(e), this.isIndexDisabled(h))
          return;
        this.focusLastElement(), this.toggleCheckboxRange(h, this.adapter.getListItemCount() - 1, h);
      } else if (H && v(["Control"]) && this.isCheckboxList)
        e.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === f.UNSET_INDEX ? [] : this.selectedIndex, !0);
      else if ((x || R) && v([])) {
        if (t) {
          var B = e.target;
          if (B && B.tagName === "A" && x || (S(e), this.isIndexDisabled(h)))
            return;
          this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(h, !1), this.adapter.notifyAction(h));
        }
      } else if ((x || R) && v(["Shift"]) && this.isCheckboxList) {
        var B = e.target;
        if (B && B.tagName === "A" && x || (S(e), this.isIndexDisabled(h)))
          return;
        this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : h, h, h), this.adapter.notifyAction(h));
      }
      if (this.hasTypeahead) {
        var j = {
          event: e,
          focusItemAtIndex: function($) {
            r.focusItemAtIndex($);
          },
          focusedItemIndex: this.focusedItemIndex,
          isTargetListItem: t,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: function($) {
            return r.isIndexDisabled($);
          }
        };
        re(j, this.typeaheadState);
      }
    }
  }, i.prototype.handleClick = function(e, t, n) {
    var r, o = ae(n);
    e !== f.UNSET_INDEX && (this.isIndexDisabled(e) || (o([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(e, t), this.adapter.notifyAction(e)) : this.isCheckboxList && o(["Shift"]) && (this.toggleCheckboxRange((r = this.lastSelectedIndex) !== null && r !== void 0 ? r : e, e, e), this.adapter.notifyAction(e))));
  }, i.prototype.focusNextElement = function(e) {
    var t = this.adapter.getListItemCount(), n = e, r = null;
    do {
      if (n++, n >= t)
        if (this.wrapFocus)
          n = 0;
        else
          return e;
      if (n === r)
        return -1;
      r = r != null ? r : n;
    } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(n));
    return this.focusItemAtIndex(n), n;
  }, i.prototype.focusPrevElement = function(e) {
    var t = this.adapter.getListItemCount(), n = e, r = null;
    do {
      if (n--, n < 0)
        if (this.wrapFocus)
          n = t - 1;
        else
          return e;
      if (n === r)
        return -1;
      r = r != null ? r : n;
    } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(n));
    return this.focusItemAtIndex(n), n;
  }, i.prototype.focusFirstElement = function() {
    return this.focusNextElement(-1);
  }, i.prototype.focusLastElement = function() {
    return this.focusPrevElement(this.adapter.getListItemCount());
  }, i.prototype.focusInitialElement = function() {
    var e = this.getFirstSelectedOrFocusedItemIndex();
    return this.focusItemAtIndex(e), e;
  }, i.prototype.setEnabled = function(e, t) {
    !this.isIndexValid(e, !1) || (t ? (this.adapter.removeClassForElementIndex(e, c.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(e, u.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(e, c.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(e, u.ARIA_DISABLED, "true")));
  }, i.prototype.setSingleSelectionAtIndex = function(e, t) {
    if (t === void 0 && (t = {}), !(this.selectedIndex === e && !t.forceUpdate)) {
      var n = c.LIST_ITEM_SELECTED_CLASS;
      this.useActivatedClass && (n = c.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== f.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, n), this.setAriaForSingleSelectionAtIndex(e), this.setTabindexAtIndex(e), e !== f.UNSET_INDEX && this.adapter.addClassForElementIndex(e, n), this.selectedIndex = e, t.isUserInteraction && !t.forceUpdate && this.adapter.notifySelectionChange([e]);
    }
  }, i.prototype.setAriaForSingleSelectionAtIndex = function(e) {
    this.selectedIndex === f.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(e, u.ARIA_CURRENT));
    var t = this.ariaCurrentAttrValue !== null, n = t ? u.ARIA_CURRENT : u.ARIA_SELECTED;
    if (this.selectedIndex !== f.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, n, "false"), e !== f.UNSET_INDEX) {
      var r = t ? this.ariaCurrentAttrValue : "true";
      this.adapter.setAttributeForElementIndex(e, n, r);
    }
  }, i.prototype.getSelectionAttribute = function() {
    return this.useSelectedAttr ? u.ARIA_SELECTED : u.ARIA_CHECKED;
  }, i.prototype.setRadioAtIndex = function(e, t) {
    t === void 0 && (t = {});
    var n = this.getSelectionAttribute();
    this.adapter.setCheckedCheckboxOrRadioAtIndex(e, !0), !(this.selectedIndex === e && !t.forceUpdate) && (this.selectedIndex !== f.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, n, "false"), this.adapter.setAttributeForElementIndex(e, n, "true"), this.selectedIndex = e, t.isUserInteraction && !t.forceUpdate && this.adapter.notifySelectionChange([e]));
  }, i.prototype.setCheckboxAtIndex = function(e, t) {
    t === void 0 && (t = {});
    for (var n = this.selectedIndex, r = t.isUserInteraction ? new Set(n === f.UNSET_INDEX ? [] : n) : null, o = this.getSelectionAttribute(), s = [], d = 0; d < this.adapter.getListItemCount(); d++) {
      var A = r == null ? void 0 : r.has(d), m = e.indexOf(d) >= 0;
      m !== A && s.push(d), this.adapter.setCheckedCheckboxOrRadioAtIndex(d, m), this.adapter.setAttributeForElementIndex(d, o, m ? "true" : "false");
    }
    this.selectedIndex = e, t.isUserInteraction && s.length && this.adapter.notifySelectionChange(s);
  }, i.prototype.toggleCheckboxRange = function(e, t, n) {
    this.lastSelectedIndex = n;
    for (var r = new Set(this.selectedIndex === f.UNSET_INDEX ? [] : this.selectedIndex), o = !(r != null && r.has(n)), s = Q([e, t].sort(), 2), d = s[0], A = s[1], m = this.getSelectionAttribute(), y = [], p = d; p <= A; p++)
      if (!this.isIndexDisabled(p)) {
        var x = r.has(p);
        o !== x && (y.push(p), this.adapter.setCheckedCheckboxOrRadioAtIndex(p, o), this.adapter.setAttributeForElementIndex(p, m, "" + o), o ? r.add(p) : r.delete(p));
      }
    y.length && (this.selectedIndex = oe([], Q(r)), this.adapter.notifySelectionChange(y));
  }, i.prototype.setTabindexAtIndex = function(e) {
    this.focusedItemIndex === f.UNSET_INDEX && e !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== e && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== e && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), e !== f.UNSET_INDEX && this.adapter.setAttributeForElementIndex(e, "tabindex", "0");
  }, i.prototype.isSelectableList = function() {
    return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
  }, i.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
    var e = this.getFirstSelectedOrFocusedItemIndex();
    this.setTabindexAtIndex(e);
  }, i.prototype.getFirstSelectedOrFocusedItemIndex = function() {
    return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== f.UNSET_INDEX ? this.selectedIndex : Se(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(e, t) {
      return Math.min(e, t);
    }) : 0 : Math.max(this.focusedItemIndex, 0);
  }, i.prototype.isIndexValid = function(e, t) {
    var n = this;
    if (t === void 0 && (t = !0), e instanceof Array) {
      if (!this.isCheckboxList && t)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      return e.length === 0 ? !0 : e.some(function(r) {
        return n.isIndexInRange(r);
      });
    } else if (typeof e == "number") {
      if (this.isCheckboxList && t)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
      return this.isIndexInRange(e) || this.isSingleSelectionList && e === f.UNSET_INDEX;
    } else
      return !1;
  }, i.prototype.isIndexInRange = function(e) {
    var t = this.adapter.getListItemCount();
    return e >= 0 && e < t;
  }, i.prototype.setSelectedIndexOnAction = function(e, t) {
    this.lastSelectedIndex = e, this.isCheckboxList ? (this.toggleCheckboxAtIndex(e, t), this.adapter.notifySelectionChange([e])) : this.setSelectedIndex(e, { isUserInteraction: !0 });
  }, i.prototype.toggleCheckboxAtIndex = function(e, t) {
    var n = this.getSelectionAttribute(), r = this.adapter.isCheckboxCheckedAtIndex(e), o;
    t ? o = r : (o = !r, this.adapter.setCheckedCheckboxOrRadioAtIndex(e, o)), this.adapter.setAttributeForElementIndex(e, n, o ? "true" : "false");
    var s = this.selectedIndex === f.UNSET_INDEX ? [] : this.selectedIndex.slice();
    o ? s.push(e) : s = s.filter(function(d) {
      return d !== e;
    }), this.selectedIndex = s;
  }, i.prototype.focusItemAtIndex = function(e) {
    this.adapter.focusItemAtIndex(e), this.focusedItemIndex = e;
  }, i.prototype.checkboxListToggleAll = function(e, t) {
    var n = this.adapter.getListItemCount();
    if (e.length === n)
      this.setCheckboxAtIndex([], { isUserInteraction: t });
    else {
      for (var r = [], o = 0; o < n; o++)
        (!this.isIndexDisabled(o) || e.indexOf(o) > -1) && r.push(o);
      this.setCheckboxAtIndex(r, { isUserInteraction: t });
    }
  }, i.prototype.typeaheadMatchItem = function(e, t, n) {
    var r = this;
    n === void 0 && (n = !1);
    var o = {
      focusItemAtIndex: function(s) {
        r.focusItemAtIndex(s);
      },
      focusedItemIndex: t || this.focusedItemIndex,
      nextChar: e,
      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
      skipFocus: n,
      isItemAtIndexDisabled: function(s) {
        return r.isIndexDisabled(s);
      }
    };
    return Y(o, this.typeaheadState);
  }, i.prototype.typeaheadInitSortedIndex = function() {
    return ge(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
  }, i.prototype.clearTypeaheadBuffer = function() {
    de(this.typeaheadState);
  }, i;
}(W);
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
var Le = function(a) {
  k(i, a);
  function i() {
    return a !== null && a.apply(this, arguments) || this;
  }
  return Object.defineProperty(i.prototype, "vertical", {
    set: function(e) {
      this.foundation.setVerticalOrientation(e);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(i.prototype, "listElements", {
    get: function() {
      return Array.from(this.root.querySelectorAll("." + this.classNameMap[c.LIST_ITEM_CLASS]));
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(i.prototype, "wrapFocus", {
    set: function(e) {
      this.foundation.setWrapFocus(e);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(i.prototype, "typeaheadInProgress", {
    get: function() {
      return this.foundation.isTypeaheadInProgress();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(i.prototype, "hasTypeahead", {
    set: function(e) {
      this.foundation.setHasTypeahead(e);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(i.prototype, "singleSelection", {
    set: function(e) {
      this.foundation.setSingleSelection(e);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(i.prototype, "disabledItemsFocusable", {
    set: function(e) {
      this.foundation.setDisabledItemsFocusable(e);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(i.prototype, "selectedIndex", {
    get: function() {
      return this.foundation.getSelectedIndex();
    },
    set: function(e) {
      this.foundation.setSelectedIndex(e);
    },
    enumerable: !1,
    configurable: !0
  }), i.attachTo = function(e) {
    return new i(e);
  }, i.prototype.initialSyncWithDOM = function() {
    this.isEvolutionEnabled = be in this.root.dataset, this.isEvolutionEnabled ? this.classNameMap = Ie : M(this.root, u.DEPRECATED_SELECTOR) ? this.classNameMap = w : this.classNameMap = Object.values(c).reduce(function(e, t) {
      return e[t] = t, e;
    }, {}), this.handleClick = this.handleClickEvent.bind(this), this.handleKeydown = this.handleKeydownEvent.bind(this), this.focusInEventListener = this.handleFocusInEvent.bind(this), this.focusOutEventListener = this.handleFocusOutEvent.bind(this), this.listen("keydown", this.handleKeydown), this.listen("click", this.handleClick), this.listen("focusin", this.focusInEventListener), this.listen("focusout", this.focusOutEventListener), this.layout(), this.initializeListType(), this.ensureFocusable();
  }, i.prototype.destroy = function() {
    this.unlisten("keydown", this.handleKeydown), this.unlisten("click", this.handleClick), this.unlisten("focusin", this.focusInEventListener), this.unlisten("focusout", this.focusOutEventListener);
  }, i.prototype.layout = function() {
    var e = this.root.getAttribute(u.ARIA_ORIENTATION);
    this.vertical = e !== u.ARIA_ORIENTATION_HORIZONTAL;
    var t = "." + this.classNameMap[c.LIST_ITEM_CLASS] + ":not([tabindex])", n = u.FOCUSABLE_CHILD_ELEMENTS, r = this.root.querySelectorAll(t);
    r.length && Array.prototype.forEach.call(r, function(s) {
      s.setAttribute("tabindex", "-1");
    });
    var o = this.root.querySelectorAll(n);
    o.length && Array.prototype.forEach.call(o, function(s) {
      s.setAttribute("tabindex", "-1");
    }), this.isEvolutionEnabled && this.foundation.setUseSelectedAttribute(!0), this.foundation.layout();
  }, i.prototype.getPrimaryText = function(e) {
    var t, n = e.querySelector("." + this.classNameMap[c.LIST_ITEM_PRIMARY_TEXT_CLASS]);
    if (this.isEvolutionEnabled || n)
      return (t = n == null ? void 0 : n.textContent) !== null && t !== void 0 ? t : "";
    var r = e.querySelector("." + this.classNameMap[c.LIST_ITEM_TEXT_CLASS]);
    return r && r.textContent || "";
  }, i.prototype.initializeListType = function() {
    var e = this;
    if (this.isInteractive = M(this.root, u.ARIA_INTERACTIVE_ROLES_SELECTOR), this.isEvolutionEnabled && this.isInteractive) {
      var t = Array.from(this.root.querySelectorAll(u.SELECTED_ITEM_SELECTOR), function(s) {
        return e.listElements.indexOf(s);
      });
      M(this.root, u.ARIA_MULTI_SELECTABLE_SELECTOR) ? this.selectedIndex = t : t.length > 0 && (this.selectedIndex = t[0]);
      return;
    }
    var n = this.root.querySelectorAll(u.ARIA_ROLE_CHECKBOX_SELECTOR), r = this.root.querySelector(u.ARIA_CHECKED_RADIO_SELECTOR);
    if (n.length) {
      var o = this.root.querySelectorAll(u.ARIA_CHECKED_CHECKBOX_SELECTOR);
      this.selectedIndex = Array.from(o, function(s) {
        return e.listElements.indexOf(s);
      });
    } else
      r && (this.selectedIndex = this.listElements.indexOf(r));
  }, i.prototype.setEnabled = function(e, t) {
    this.foundation.setEnabled(e, t);
  }, i.prototype.typeaheadMatchItem = function(e, t) {
    return this.foundation.typeaheadMatchItem(e, t, !0);
  }, i.prototype.getDefaultFoundation = function() {
    var e = this, t = {
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
        return !!r.querySelector(u.CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: function(n) {
        var r = e.listElements[n];
        return !!r.querySelector(u.RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: function(n) {
        var r = e.listElements[n], o = r.querySelector(u.CHECKBOX_SELECTOR);
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
        e.emit(u.ACTION_EVENT, { index: n }, !0);
      },
      notifySelectionChange: function(n) {
        e.emit(u.SELECTION_CHANGE_EVENT, { changedIndices: n }, !0);
      },
      removeClassForElementIndex: function(n, r) {
        var o = e.listElements[n];
        o && o.classList.remove(e.classNameMap[r]);
      },
      setAttributeForElementIndex: function(n, r, o) {
        var s = e.listElements[n];
        s && s.setAttribute(r, o);
      },
      setCheckedCheckboxOrRadioAtIndex: function(n, r) {
        var o = e.listElements[n], s = o.querySelector(u.CHECKBOX_RADIO_SELECTOR);
        s.checked = r;
        var d = document.createEvent("Event");
        d.initEvent("change", !0, !0), s.dispatchEvent(d);
      },
      setTabIndexForListItemChildren: function(n, r) {
        var o = e.listElements[n], s = u.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;
        Array.prototype.forEach.call(o.querySelectorAll(s), function(d) {
          d.setAttribute("tabindex", r);
        });
      }
    };
    return new _e(t);
  }, i.prototype.ensureFocusable = function() {
    if (this.isEvolutionEnabled && this.isInteractive && !this.root.querySelector("." + this.classNameMap[c.LIST_ITEM_CLASS] + '[tabindex="0"]')) {
      var e = this.initialFocusIndex();
      e !== -1 && (this.listElements[e].tabIndex = 0);
    }
  }, i.prototype.initialFocusIndex = function() {
    if (this.selectedIndex instanceof Array && this.selectedIndex.length > 0)
      return this.selectedIndex[0];
    if (typeof this.selectedIndex == "number" && this.selectedIndex !== f.UNSET_INDEX)
      return this.selectedIndex;
    var e = this.root.querySelector("." + this.classNameMap[c.LIST_ITEM_CLASS] + ":not(." + this.classNameMap[c.LIST_ITEM_DISABLED_CLASS] + ")");
    return e === null ? -1 : this.getListItemIndex(e);
  }, i.prototype.getListItemIndex = function(e) {
    var t = le(e, "." + this.classNameMap[c.LIST_ITEM_CLASS] + ", ." + this.classNameMap[c.ROOT]);
    return t && M(t, "." + this.classNameMap[c.LIST_ITEM_CLASS]) ? this.listElements.indexOf(t) : -1;
  }, i.prototype.handleFocusInEvent = function(e) {
    var t = this.getListItemIndex(e.target);
    this.foundation.handleFocusIn(t);
  }, i.prototype.handleFocusOutEvent = function(e) {
    var t = this.getListItemIndex(e.target);
    this.foundation.handleFocusOut(t);
  }, i.prototype.handleKeydownEvent = function(e) {
    var t = this.getListItemIndex(e.target), n = e.target;
    this.foundation.handleKeydown(e, n.classList.contains(this.classNameMap[c.LIST_ITEM_CLASS]), t);
  }, i.prototype.handleClickEvent = function(e) {
    var t = this.getListItemIndex(e.target), n = e.target, r = !M(n, u.CHECKBOX_RADIO_SELECTOR);
    this.foundation.handleClick(t, r, e);
  }, i;
}(ee);
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
function Te(a, i) {
  return i(a, {
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
var Z = "mdc-dom-focus-sentinel", Fe = function() {
  function a(i, e) {
    e === void 0 && (e = {}), this.root = i, this.options = e, this.elFocusedBeforeTrapFocus = null;
  }
  return a.prototype.trapFocus = function() {
    var i = this.getFocusableElements(this.root);
    if (i.length === 0)
      throw new Error("FocusTrap: Element must have at least one focusable child.");
    this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root), this.options.skipInitialFocus || this.focusInitialElement(i, this.options.initialFocusEl);
  }, a.prototype.releaseFocus = function() {
    [].slice.call(this.root.querySelectorAll("." + Z)).forEach(function(i) {
      i.parentElement.removeChild(i);
    }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
  }, a.prototype.wrapTabFocus = function(i) {
    var e = this, t = this.createSentinel(), n = this.createSentinel();
    t.addEventListener("focus", function() {
      var r = e.getFocusableElements(i);
      r.length > 0 && r[r.length - 1].focus();
    }), n.addEventListener("focus", function() {
      var r = e.getFocusableElements(i);
      r.length > 0 && r[0].focus();
    }), i.insertBefore(t, i.children[0]), i.appendChild(n);
  }, a.prototype.focusInitialElement = function(i, e) {
    var t = 0;
    e && (t = Math.max(i.indexOf(e), 0)), i[t].focus();
  }, a.prototype.getFocusableElements = function(i) {
    var e = [].slice.call(i.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
    return e.filter(function(t) {
      var n = t.getAttribute("aria-disabled") === "true" || t.getAttribute("disabled") != null || t.getAttribute("hidden") != null || t.getAttribute("aria-hidden") === "true", r = t.tabIndex >= 0 && t.getBoundingClientRect().width > 0 && !t.classList.contains(Z) && !n, o = !1;
      if (r) {
        var s = getComputedStyle(t);
        o = s.display === "none" || s.visibility === "hidden";
      }
      return r && !o;
    });
  }, a.prototype.createSentinel = function() {
    var i = document.createElement("div");
    return i.setAttribute("tabindex", "0"), i.setAttribute("aria-hidden", "true"), i.classList.add(Z), i;
  }, a;
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
var g = {
  ANIMATE: "mdc-drawer--animate",
  CLOSING: "mdc-drawer--closing",
  DISMISSIBLE: "mdc-drawer--dismissible",
  MODAL: "mdc-drawer--modal",
  OPEN: "mdc-drawer--open",
  OPENING: "mdc-drawer--opening",
  ROOT: "mdc-drawer"
}, Oe = {
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
var V = function(a) {
  k(i, a);
  function i(e) {
    var t = a.call(this, T(T({}, i.defaultAdapter), e)) || this;
    return t.animationFrame = 0, t.animationTimer = 0, t;
  }
  return Object.defineProperty(i, "strings", {
    get: function() {
      return Oe;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(i, "cssClasses", {
    get: function() {
      return g;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(i, "defaultAdapter", {
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
  }), i.prototype.destroy = function() {
    this.animationFrame && cancelAnimationFrame(this.animationFrame), this.animationTimer && clearTimeout(this.animationTimer);
  }, i.prototype.open = function() {
    var e = this;
    this.isOpen() || this.isOpening() || this.isClosing() || (this.adapter.addClass(g.OPEN), this.adapter.addClass(g.ANIMATE), this.runNextAnimationFrame(function() {
      e.adapter.addClass(g.OPENING);
    }), this.adapter.saveFocus());
  }, i.prototype.close = function() {
    !this.isOpen() || this.isOpening() || this.isClosing() || this.adapter.addClass(g.CLOSING);
  }, i.prototype.isOpen = function() {
    return this.adapter.hasClass(g.OPEN);
  }, i.prototype.isOpening = function() {
    return this.adapter.hasClass(g.OPENING) || this.adapter.hasClass(g.ANIMATE);
  }, i.prototype.isClosing = function() {
    return this.adapter.hasClass(g.CLOSING);
  }, i.prototype.handleKeydown = function(e) {
    var t = e.keyCode, n = e.key, r = n === "Escape" || t === 27;
    r && this.close();
  }, i.prototype.handleTransitionEnd = function(e) {
    var t = g.OPENING, n = g.CLOSING, r = g.OPEN, o = g.ANIMATE, s = g.ROOT, d = this.isElement(e.target) && this.adapter.elementHasClass(e.target, s);
    !d || (this.isClosing() ? (this.adapter.removeClass(r), this.closed(), this.adapter.restoreFocus(), this.adapter.notifyClose()) : (this.adapter.focusActiveNavigationItem(), this.opened(), this.adapter.notifyOpen()), this.adapter.removeClass(o), this.adapter.removeClass(t), this.adapter.removeClass(n));
  }, i.prototype.opened = function() {
  }, i.prototype.closed = function() {
  }, i.prototype.runNextAnimationFrame = function(e) {
    var t = this;
    cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
      t.animationFrame = 0, clearTimeout(t.animationTimer), t.animationTimer = setTimeout(e, 0);
    });
  }, i.prototype.isElement = function(e) {
    return Boolean(e.classList);
  }, i;
}(W);
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
var Re = function(a) {
  k(i, a);
  function i() {
    return a !== null && a.apply(this, arguments) || this;
  }
  return i.prototype.handleScrimClick = function() {
    this.close();
  }, i.prototype.opened = function() {
    this.adapter.trapFocus();
  }, i.prototype.closed = function() {
    this.adapter.releaseFocus();
  }, i;
}(V);
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
var K = V.cssClasses, U = V.strings, De = function(a) {
  k(i, a);
  function i() {
    return a !== null && a.apply(this, arguments) || this;
  }
  return i.attachTo = function(e) {
    return new i(e);
  }, Object.defineProperty(i.prototype, "open", {
    get: function() {
      return this.foundation.isOpen();
    },
    set: function(e) {
      e ? this.foundation.open() : this.foundation.close();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(i.prototype, "list", {
    get: function() {
      return this.innerList;
    },
    enumerable: !1,
    configurable: !0
  }), i.prototype.initialize = function(e, t) {
    e === void 0 && (e = function(r) {
      return new Fe(r);
    }), t === void 0 && (t = function(r) {
      return new Le(r);
    });
    var n = this.root.querySelector(U.LIST_SELECTOR);
    n && (this.innerList = t(n), this.innerList.wrapFocus = !0), this.focusTrapFactory = e;
  }, i.prototype.initialSyncWithDOM = function() {
    var e = this, t = K.MODAL, n = U.SCRIM_SELECTOR;
    this.scrim = this.root.parentNode.querySelector(n), this.scrim && this.root.classList.contains(t) && (this.handleScrimClick = function() {
      return e.foundation.handleScrimClick();
    }, this.scrim.addEventListener("click", this.handleScrimClick), this.focusTrap = Te(this.root, this.focusTrapFactory)), this.handleKeydown = function(r) {
      e.foundation.handleKeydown(r);
    }, this.handleTransitionEnd = function(r) {
      e.foundation.handleTransitionEnd(r);
    }, this.listen("keydown", this.handleKeydown), this.listen("transitionend", this.handleTransitionEnd);
  }, i.prototype.destroy = function() {
    this.unlisten("keydown", this.handleKeydown), this.unlisten("transitionend", this.handleTransitionEnd), this.innerList && this.innerList.destroy();
    var e = K.MODAL;
    this.scrim && this.handleScrimClick && this.root.classList.contains(e) && (this.scrim.removeEventListener("click", this.handleScrimClick), this.open = !1);
  }, i.prototype.getDefaultFoundation = function() {
    var e = this, t = {
      addClass: function(o) {
        e.root.classList.add(o);
      },
      removeClass: function(o) {
        e.root.classList.remove(o);
      },
      hasClass: function(o) {
        return e.root.classList.contains(o);
      },
      elementHasClass: function(o, s) {
        return o.classList.contains(s);
      },
      saveFocus: function() {
        e.previousFocus = document.activeElement;
      },
      restoreFocus: function() {
        var o = e.previousFocus;
        o && o.focus && e.root.contains(document.activeElement) && o.focus();
      },
      focusActiveNavigationItem: function() {
        var o = e.root.querySelector(U.LIST_ITEM_ACTIVATED_SELECTOR);
        o && o.focus();
      },
      notifyClose: function() {
        e.emit(U.CLOSE_EVENT, {}, !0);
      },
      notifyOpen: function() {
        e.emit(U.OPEN_EVENT, {}, !0);
      },
      trapFocus: function() {
        e.focusTrap.trapFocus();
      },
      releaseFocus: function() {
        e.focusTrap.releaseFocus();
      }
    }, n = K.DISMISSIBLE, r = K.MODAL;
    if (this.root.classList.contains(n))
      return new V(t);
    if (this.root.classList.contains(r))
      return new Re(t);
    throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are " + n + " and " + r + ".");
  }, i;
}(ee);
const we = `@import"https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css";@import"https://fonts.googleapis.com/icon?family=Material+Icons";@import"https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css";@import"https://cdnjs.cloudflare.com/ajax/libs/mapbox-gl/1.13.0/mapbox-gl.css";:root,:host{--ol-background-color: white;--ol-accent-background-color: #F5F5F5;--ol-subtle-background-color: rgba(128, 128, 128, .25);--ol-partial-background-color: rgba(255, 255, 255, .75);--ol-foreground-color: #333333;--ol-subtle-foreground-color: #666666;--ol-brand-color: #00AAFF}.ol-box{box-sizing:border-box;border-radius:2px;border:1.5px solid var(--ol-background-color);background-color:var(--ol-partial-background-color)}.ol-mouse-position{top:8px;right:8px;position:absolute}.ol-scale-line{background:var(--ol-partial-background-color);border-radius:4px;bottom:8px;left:8px;padding:2px;position:absolute}.ol-scale-line-inner{border:1px solid var(--ol-subtle-foreground-color);border-top:none;color:var(--ol-foreground-color);font-size:10px;text-align:center;margin:1px;will-change:contents,width;transition:all .25s}.ol-scale-bar{position:absolute;bottom:8px;left:8px}.ol-scale-bar-inner{display:flex}.ol-scale-step-marker{width:1px;height:15px;background-color:var(--ol-foreground-color);float:right;z-index:10}.ol-scale-step-text{position:absolute;bottom:-5px;font-size:10px;z-index:11;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-text{position:absolute;font-size:12px;text-align:center;bottom:25px;color:var(--ol-foreground-color);text-shadow:-1.5px 0 var(--ol-partial-background-color),0 1.5px var(--ol-partial-background-color),1.5px 0 var(--ol-partial-background-color),0 -1.5px var(--ol-partial-background-color)}.ol-scale-singlebar{position:relative;height:10px;z-index:9;box-sizing:border-box;border:1px solid var(--ol-foreground-color)}.ol-scale-singlebar-even{background-color:var(--ol-subtle-foreground-color)}.ol-scale-singlebar-odd{background-color:var(--ol-background-color)}.ol-unsupported{display:none}.ol-viewport,.ol-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ol-viewport canvas{all:unset;overflow:hidden}.ol-viewport{touch-action:none}.ol-selectable{-webkit-touch-callout:default;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ol-grabbing{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.ol-grab{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.ol-control{position:absolute;background-color:var(--ol-subtle-background-color);border-radius:4px}.ol-zoom{top:.5em;left:.5em}.ol-rotate{top:.5em;right:.5em;transition:opacity .25s linear,visibility 0s linear}.ol-rotate.ol-hidden{opacity:0;visibility:hidden;transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{top:4.643em;left:.5em}.ol-full-screen{right:.5em;top:.5em}.ol-control button{display:block;margin:1px;padding:0;color:var(--ol-subtle-foreground-color);font-weight:700;text-decoration:none;font-size:inherit;text-align:center;height:1.375em;width:1.375em;line-height:.4em;background-color:var(--ol-background-color);border:none;border-radius:2px}.ol-control button::-moz-focus-inner{border:none;padding:0}.ol-zoom-extent button{line-height:1.4em}.ol-compass{display:block;font-weight:400;will-change:transform}.ol-touch .ol-control button{font-size:1.5em}.ol-touch .ol-zoom-extent{top:5.5em}.ol-control button:hover,.ol-control button:focus{text-decoration:none;outline:1px solid var(--ol-subtle-foreground-color);color:var(--ol-foreground-color)}.ol-zoom .ol-zoom-in{border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{border-radius:0 0 2px 2px}.ol-attribution{text-align:right;bottom:.5em;right:.5em;max-width:calc(100% - 1.3em);display:flex;flex-flow:row-reverse;align-items:center}.ol-attribution a{color:var(--ol-subtle-foreground-color);text-decoration:none}.ol-attribution ul{margin:0;padding:1px .5em;color:var(--ol-foreground-color);text-shadow:0 0 2px var(--ol-background-color);font-size:12px}.ol-attribution li{display:inline;list-style:none}.ol-attribution li:not(:last-child):after{content:" "}.ol-attribution img{max-height:2em;max-width:inherit;vertical-align:middle}.ol-attribution button{flex-shrink:0}.ol-attribution.ol-collapsed ul{display:none}.ol-attribution:not(.ol-collapsed){background:var(--ol-partial-background-color)}.ol-attribution.ol-uncollapsible{bottom:0;right:0;border-radius:4px 0 0}.ol-attribution.ol-uncollapsible img{margin-top:-.2em;max-height:1.6em}.ol-attribution.ol-uncollapsible button{display:none}.ol-zoomslider{top:4.5em;left:.5em;height:200px}.ol-zoomslider button{position:relative;height:10px}.ol-touch .ol-zoomslider{top:5.5em}.ol-overviewmap{left:.5em;bottom:.5em}.ol-overviewmap.ol-uncollapsible{bottom:0;left:0;border-radius:0 4px 0 0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{display:block}.ol-overviewmap .ol-overviewmap-map{border:1px solid var(--ol-subtle-foreground-color);height:150px;width:150px}.ol-overviewmap:not(.ol-collapsed) button{bottom:0;left:0;position:absolute}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{display:none}.ol-overviewmap:not(.ol-collapsed){background:var(--ol-subtle-background-color)}.ol-overviewmap-box{border:1.5px dotted var(--ol-subtle-foreground-color)}.ol-overviewmap .ol-overviewmap-box:hover{cursor:move}:root,:host{--mdc-theme-primary: #0c4a71;--mdc-theme-on-primary: #ffffff;--mdc-theme-secondary: #FEEAE6;--mdc-theme-on-secondary: #442C2E;--mdc-theme-surface: #FFFBFA;--mdc-theme-on-surface: #442C2E;--mdc-theme-background: #FFFFFF;--mdc-theme-on-background: #442C2E}
`;
class Me extends HTMLElement {
  constructor() {
    super();
    const i = document.createElement("template");
    i.innerHTML = `
      <style>
        ${we}

        :host, main, div#map {
          display: flex;
          width: 100%
        }

        div#map {
          width:100%;
        }

        #search-context {
          display: none;
          background-color: black;
        }
      </style>
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
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Favorite">favorite</button>
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Search" id="search-btn">search</button>
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Options">more_vert</button>
          </section>
        </div>
      </header>

      <header id="search-context" class="mdc-top-app-bar">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button mdc-ripple-surface" aria-label="Close">close</button>
            <span class="mdc-top-app-bar__title">Contextual title</span>
          </section>
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Share">share</button>
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Delete">delete</button>
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button mdc-ripple-surface" aria-label="Open menu">more_vert</button>
          </section>
        </div>
      </header>
      
      <main class="mdc-top-app-bar--fixed-adjust">
        <div id="map"></div>
      </main>
    `, this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(i.content.cloneNode(!0));
  }
  connectedCallback() {
    this.shadowRoot.querySelectorAll(".mdc-icon-button").forEach((e) => new ve(e).unbounded = !0);
    const i = De.attachTo(this.shadowRoot.querySelector(".mdc-drawer"));
    this.shadowRoot.getElementById("menu").addEventListener("click", () => i.open = !0);
  }
}
export {
  Me as default
};
