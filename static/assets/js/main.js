// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: "1",

      macros: [{ function: "__e" }, { function: "__cid" }],
      tags: [
        {
          function: "__rep",
          once_per_event: true,
          vtp_containerId: ["macro", 1],
          tag_id: 1,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
      ],
    },
    runtime: [],
  };

  /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ea;
  if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
  else {
    var ha;
    a: {
      var ia = { a: !0 },
        ja = {};
      try {
        ja.__proto__ = ia;
        ha = ja.a;
        break a;
      } catch (a) {}
      ha = !1;
    }
    ea = ha
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ka = ea,
    la = function (a, b) {
      a.prototype = ca(b.prototype);
      a.prototype.constructor = a;
      if (ka) ka(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Yk = b.prototype;
    },
    ma = this || self,
    na = function (a) {
      return a;
    };
  var oa = function () {},
    pa = function (a) {
      return "function" === typeof a;
    },
    h = function (a) {
      return "string" === typeof a;
    },
    qa = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    ra = Array.isArray,
    sa = function (a, b) {
      if (a && ra(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    ta = function (a, b) {
      if (!qa(a) || !qa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    va = function (a, b) {
      for (var c = new ua(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    l = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    ya = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Aa = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Ba = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Ca = function (a) {
      var b = [];
      if (ra(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Da = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ea = function () {
      return new Date(Date.now());
    },
    Fa = function () {
      return Ea().getTime();
    },
    ua = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  ua.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  ua.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ga = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ha = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ia = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ja = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Ka = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    La = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Ma = /^\w{1,9}$/,
    Oa = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      l(a, function (d, e) {
        Ma.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Qa = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  function Ra() {
    for (var a = Sa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Ta() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Sa, Ua;
  function Va(a) {
    Sa = Sa || Ta();
    Ua = Ua || Ra();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (k >> 6),
        q = k & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Sa[m], Sa[n], Sa[p], Sa[q]);
    }
    return b.join("");
  }
  function Wa(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Ua[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Sa = Sa || Ta();
    Ua = Ua || Ra();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (64 === k && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != k && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var Xa = {},
    Ya = function (a, b) {
      Xa[a] = Xa[a] || [];
      Xa[a][b] = !0;
    },
    Za = function () {
      delete Xa.GA4_EVENT;
    },
    $a = function (a) {
      var b = Xa[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return Va(c.join("")).replace(/\.+$/, "");
    };
  var ab = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var bb,
    cb = function () {
      if (void 0 === bb) {
        var a = null,
          b = ma.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: na,
              createScript: na,
              createScriptURL: na,
            });
          } catch (c) {
            ma.console && ma.console.error(c.message);
          }
          bb = a;
        } else bb = a;
      }
      return bb;
    };
  var eb = function (a, b) {
    this.h = b === db ? a : "";
  };
  eb.prototype.toString = function () {
    return this.h + "";
  };
  var db = {};
  var fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var gb, hb;
  a: {
    for (var ib = ["CLOSURE_FLAGS"], jb = ma, kb = 0; kb < ib.length; kb++)
      if (((jb = jb[ib[kb]]), null == jb)) {
        hb = null;
        break a;
      }
    hb = jb;
  }
  var lb = hb && hb[610401301];
  gb = null != lb ? lb : !1;
  function mb() {
    var a = ma.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var nb,
    ob = ma.navigator;
  nb = ob ? ob.userAgentData || null : null;
  function pb(a) {
    return gb
      ? nb
        ? nb.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function qb(a) {
    return -1 != mb().indexOf(a);
  }
  function rb() {
    return gb ? !!nb && 0 < nb.brands.length : !1;
  }
  function sb() {
    return rb() ? !1 : qb("Opera");
  }
  function tb() {
    return qb("Firefox") || qb("FxiOS");
  }
  function ub() {
    return rb()
      ? pb("Chromium")
      : ((qb("Chrome") || qb("CriOS")) && !(rb() ? 0 : qb("Edge"))) ||
          qb("Silk");
  }
  var vb = {},
    wb = function (a, b) {
      this.h = b === vb ? a : "";
    };
  wb.prototype.toString = function () {
    return this.h.toString();
  }; /*
    
     SPDX-License-Identifier: Apache-2.0
    */
  function xb(a, b) {
    if (void 0 !== a.tagName) {
      if ("script" === a.tagName.toLowerCase()) throw Error("");
      if ("style" === a.tagName.toLowerCase()) throw Error("");
    }
    a.innerHTML =
      b instanceof wb && b.constructor === wb ? b.h : "type_error:SafeHtml";
  }
  function yb(a) {
    var b = (a = zb(a)),
      c = cb(),
      d = c ? c.createHTML(b) : b;
    return new wb(d, vb);
  }
  function zb(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var Ab = {},
    z = window,
    D = document,
    Bb = navigator,
    Cb = D.currentScript && D.currentScript.src,
    Db = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Eb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Fb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Gb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Hb(a, b, c) {
    b &&
      l(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Ib = function (a, b, c, d, e) {
      var f = D.createElement("script");
      Hb(f, d, Fb);
      f.type = "text/javascript";
      f.async = !0;
      var g,
        k = zb(a),
        m = cb(),
        n = m ? m.createScriptURL(k) : k;
      g = new eb(n, db);
      f.src =
        g instanceof eb && g.constructor === eb
          ? g.h
          : "type_error:TrustedResourceUrl";
      var p,
        q,
        u,
        t =
          null ==
          (u = (q = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : u.call(q, "script[nonce]");
      (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", p);
      Eb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var r = D.getElementsByTagName("script")[0] || D.body || D.head;
        r.parentNode.insertBefore(f, r);
      }
      return f;
    },
    Jb = function () {
      if (Cb) {
        var a = Cb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Kb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        k = !1;
      g || ((g = D.createElement("iframe")), (k = !0));
      Hb(g, c, Gb);
      d &&
        l(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (k) {
        var m = (D.body && D.body.lastChild) || D.body || D.head;
        m.parentNode.insertBefore(g, m);
      }
      Eb(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    Lb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
    },
    Mb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Nb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    F = function (a) {
      z.setTimeout(a, 0);
    },
    Ob = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Pb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Qb = function (a) {
      var b = D.createElement("div");
      xb(b, yb("A<div>" + a + "</div>"));
      b = b.lastChild;
      for (var c = []; b.firstChild; ) c.push(b.removeChild(b.firstChild));
      return c;
    },
    Rb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Sb = function (a) {
      var b;
      try {
        b = Bb.sendBeacon && Bb.sendBeacon(a);
      } catch (c) {
        Ya("TAGGING", 15);
      }
      b || Lb(a);
    },
    Tb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Ub = function () {
      var a = z.performance;
      if (a && pa(a.now)) return a.now();
    },
    Vb = function () {
      return z.performance || void 0;
    }; /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Wb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Xb = function (a) {
      if (null == a) return String(a);
      var b = Wb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Yb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Zb = function (a) {
      if (!a || "object" != Xb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Yb(a, "constructor") &&
          !Yb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Yb(a, b);
    },
    G = function (a, b) {
      var c = b || ("array" == Xb(a) ? [] : {}),
        d;
      for (d in a)
        if (Yb(a, d)) {
          var e = a[d];
          "array" == Xb(e)
            ? ("array" != Xb(c[d]) && (c[d] = []), (c[d] = G(e, c[d])))
            : Zb(e)
            ? (Zb(c[d]) || (c[d] = {}), (c[d] = G(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var ac = function (a) {
    if (void 0 === a || ra(a) || Zb(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  var bc = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Yh: a("consent"),
      Sf: a("convert_case_to"),
      Tf: a("convert_false_to"),
      Uf: a("convert_null_to"),
      Vf: a("convert_true_to"),
      Wf: a("convert_undefined_to"),
      Jk: a("debug_mode_metadata"),
      Na: a("function"),
      Ye: a("instance_name"),
      Pi: a("live_only"),
      Qi: a("malware_disabled"),
      Ri: a("metadata"),
      Ui: a("original_activity_id"),
      Nk: a("original_vendor_template_id"),
      Mk: a("once_on_load"),
      Ti: a("once_per_event"),
      Yg: a("once_per_load"),
      Pk: a("priority_override"),
      Qk: a("respected_consent_types"),
      dh: a("setup_tags"),
      ob: a("tag_id"),
      ih: a("teardown_tags"),
    };
  })();
  var xc;
  var yc = [],
    zc = [],
    Ac = [],
    Bc = [],
    Cc = [],
    Dc = {},
    Ec,
    Fc,
    Hc = function () {
      var a = Gc;
      Fc = Fc || a;
    },
    Ic,
    Jc = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = Dc[c],
        f = {},
        g;
      for (g in a)
        a.hasOwnProperty(g) &&
          0 === g.indexOf("vtp_") &&
          (e && d && d.nh && d.nh(a[g]),
          (f[void 0 !== e ? g : g.substr(4)] = a[g]));
      e && d && d.mh && (f.vtp_gtmCachedValues = d.mh);
      if (b) {
        if (null == b.name) {
          var k;
          a: {
            var m = b.index;
            if (null == m) k = "";
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = yc[m];
                  break;
                case 1:
                  n = Bc[m];
                  break;
                default:
                  k = "";
                  break a;
              }
              var p = n && n[bc.Ye];
              k = p ? String(p) : "";
            }
          }
          b.name = k;
        }
        e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
      }
      return void 0 !== e ? e(f) : xc(c, f, b);
    },
    Lc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Kc(a[e], b, c));
      return d;
    },
    Kc = function (a, b, c) {
      if (ra(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Kc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = yc[f];
            if (!g || b.tf(g)) return;
            c[f] = !0;
            var k = String(g[bc.Ye]);
            try {
              var m = Lc(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Jc(m, { event: b, index: f, type: 2, name: k });
              Ic && (d = Ic.kj(d, m));
            } catch (x) {
              b.zh && b.zh(x, Number(f), k), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[Kc(a[n], b, c)] = Kc(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var u = Kc(a[q], b, c);
              Fc && (p = p || u === Fc.Rd);
              d.push(u);
            }
            return Fc && p ? Fc.nj(d) : d.join("");
          case "escape":
            d = Kc(a[1], b, c);
            if (Fc && ra(a[1]) && "macro" === a[1][0] && Fc.Nj(a))
              return Fc.hk(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) cc[a[t]] && (d = cc[a[t]](d));
            return d;
          case "tag":
            var r = a[1];
            if (!Bc[r])
              throw Error("Unable to resolve tag reference " + r + ".");
            return (d = { sh: a[2], index: r });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v["function"] = a[1];
            var w = Mc(v, b, c),
              y = !!a[4];
            return y || 2 !== w ? y !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Mc = function (a, b, c) {
      try {
        return Ec(Lc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var Pc = function (a) {
      function b(u) {
        for (var t = 0; t < u.length; t++) d[u[t]] = !0;
      }
      for (var c = [], d = [], e = Nc(a), f = 0; f < zc.length; f++) {
        var g = zc[f],
          k = Oc(g, e);
        if (k) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === k && b(g.block || []);
      }
      for (var p = [], q = 0; q < Bc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Oc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var k = b(f[g]);
        if (2 === k) return null;
        if (1 === k) return !1;
      }
      return !0;
    },
    Nc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Mc(Ac[c], a));
        return b[c];
      };
    };
  var Qc = {
    kj: function (a, b) {
      b[bc.Sf] &&
        "string" === typeof a &&
        (a = 1 == b[bc.Sf] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(bc.Uf) && null === a && (a = b[bc.Uf]);
      b.hasOwnProperty(bc.Wf) && void 0 === a && (a = b[bc.Wf]);
      b.hasOwnProperty(bc.Vf) && !0 === a && (a = b[bc.Vf]);
      b.hasOwnProperty(bc.Tf) && !1 === a && (a = b[bc.Tf]);
      return a;
    },
  };
  var gd = /:[0-9]+$/,
    hd = /^\d+\.fls\.doubleclick\.net$/,
    id = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var g = f.slice(1).join("=");
          return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
        }
      }
    },
    od = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = md(a.protocol) || md(z.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : z.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || z.location.hostname)
            .replace(gd, "")
            .toLowerCase());
      return nd(a, b, c, d, e);
    },
    nd = function (a, b, c, d, e) {
      var f,
        g = md(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = pd(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(gd, "").toLowerCase();
          if (c) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substr(k[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || Ya("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = id(f, e));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    md = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    pd = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    qd = function (a) {
      var b = D.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || Ya("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(gd, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    rd = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = qd(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        k = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === k[0] && (k = k.substring(1));
      g = c(g);
      k = c(k);
      "" !== g && (g = "?" + g);
      "" !== k && (k = "#" + k);
      var m = "" + f + g + k;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    sd = function (a) {
      var b = qd(z.location.href),
        c = od(b, "host", !1);
      if (c && c.match(hd)) {
        var d = od(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  var td = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function ud(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var vd = new ua();
  function wd(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = vd.get(e);
      f || ((f = new RegExp(b, d)), vd.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function xd(a, b) {
    function c(g) {
      var k = qd(g),
        m = od(k, "protocol"),
        n = od(k, "host", !0),
        p = od(k, "port"),
        q = od(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  var Ed = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Fd(a, b) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      (a << 2) | b
    ];
  }
  var Hd = function (a) {
      return Gd ? D.querySelectorAll(a) : null;
    },
    Id = function (a, b) {
      if (!Gd) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!D.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Jd = !1;
  if (D.querySelectorAll)
    try {
      var Kd = D.querySelectorAll(":root");
      Kd && 1 == Kd.length && Kd[0] == D.documentElement && (Jd = !0);
    } catch (a) {}
  var Gd = Jd;
  var J = function (a) {
    Ya("GTM", a);
  };
  var N = {
      g: {
        H: "ad_storage",
        O: "analytics_storage",
        Mf: "region",
        Nf: "consent_updated",
        Of: "wait_for_update",
        ci: "app_remove",
        di: "app_store_refund",
        ei: "app_store_subscription_cancel",
        fi: "app_store_subscription_convert",
        gi: "app_store_subscription_renew",
        Xf: "add_payment_info",
        Yf: "add_shipping_info",
        kc: "add_to_cart",
        mc: "remove_from_cart",
        Zf: "view_cart",
        Kb: "begin_checkout",
        nc: "select_item",
        tb: "view_item_list",
        Lb: "select_promotion",
        ub: "view_promotion",
        Aa: "purchase",
        oc: "refund",
        Ba: "view_item",
        ag: "add_to_wishlist",
        hi: "first_open",
        ii: "first_visit",
        xa: "gtag.config",
        Ca: "gtag.get",
        ji: "in_app_purchase",
        qc: "page_view",
        ki: "session_start",
        xe: "user_engagement",
        Mb: "gclid",
        ia: "ads_data_redaction",
        X: "allow_ad_personalization_signals",
        ye: "allow_custom_scripts",
        li: "allow_display_features",
        nd: "allow_enhanced_conversions",
        vb: "allow_google_signals",
        ya: "allow_interest_groups",
        od: "auid",
        mi: "auto_detection_enabled",
        wb: "aw_remarketing",
        ze: "aw_remarketing_only",
        pd: "discount",
        qd: "aw_feed_country",
        rd: "aw_feed_language",
        ba: "items",
        sd: "aw_merchant_id",
        cg: "aw_basket_type",
        ud: "campaign_content",
        vd: "campaign_id",
        wd: "campaign_medium",
        xd: "campaign_name",
        sc: "campaign",
        yd: "campaign_source",
        zd: "campaign_term",
        fb: "client_id",
        ni: "content_group",
        oi: "content_type",
        Da: "conversion_cookie_prefix",
        uc: "conversion_id",
        oa: "conversion_linker",
        vc: "conversion_api",
        hb: "cookie_domain",
        Ja: "cookie_expires",
        ib: "cookie_flags",
        wc: "cookie_name",
        Ae: "cookie_path",
        Ta: "cookie_prefix",
        Nb: "cookie_update",
        xc: "country",
        la: "currency",
        Ad: "customer_lifetime_value",
        yc: "custom_map",
        ri: "debug_mode",
        Z: "developer_id",
        si: "disable_merchant_reported_purchases",
        ui: "dc_custom_params",
        vi: "dc_natural_search",
        Be: "dynamic_event_settings",
        wi: "affiliation",
        dg: "checkout_option",
        eg: "checkout_step",
        xi: "coupon",
        Ce: "item_list_name",
        De: "list_name",
        yi: "promotions",
        Bd: "shipping",
        fg: "tax",
        Cd: "engagement_time_msec",
        zc: "enhanced_client_id",
        Ac: "enhanced_conversions",
        gg: "enhanced_conversions_automatic_settings",
        Dd: "estimated_delivery_date",
        Ee: "euid_logged_in_state",
        Ob: "event_callback",
        Pb: "event_developer_id_string",
        hg: "event",
        Ed: "event_settings",
        Fd: "event_timeout",
        zi: "experiments",
        Fe: "firebase_id",
        Gd: "first_party_collection",
        Hd: "_x_20",
        xb: "_x_19",
        ig: "fledge",
        jg: "flight_error_code",
        kg: "flight_error_message",
        lg: "gac_gclid",
        Id: "gac_wbraid",
        mg: "gac_wbraid_multiple_conversions",
        Ge: "ga_restrict_domain",
        He: "ga_temp_client_id",
        ng: "gdpr_applies",
        og: "geo_granularity",
        jb: "value_callback",
        Ua: "value_key",
        Kk: "google_ono",
        Va: "google_signals",
        Jd: "google_tld",
        Kd: "groups",
        pg: "gsa_experiment_id",
        qg: "iframe_state",
        Ld: "ignore_referrer",
        Ie: "internal_traffic_results",
        Md: "is_legacy_loaded",
        rg: "is_passthrough",
        Ka: "language",
        Je: "legacy_developer_id_string",
        qa: "linker",
        Rb: "accept_incoming",
        yb: "decorate_forms",
        N: "domains",
        Sb: "url_position",
        sg: "method",
        Bc: "new_customer",
        ug: "non_interaction",
        Ai: "optimize_id",
        vg: "page_hostname",
        Cc: "page_path",
        La: "page_referrer",
        Tb: "page_title",
        wg: "passengers",
        xg: "phone_conversion_callback",
        Bi: "phone_conversion_country_code",
        yg: "phone_conversion_css_class",
        Ci: "phone_conversion_ids",
        zg: "phone_conversion_number",
        Ag: "phone_conversion_options",
        Bg: "quantity",
        Dc: "redact_device_info",
        Ke: "redact_enhanced_user_id",
        Di: "redact_ga_client_id",
        Ei: "redact_user_id",
        Nd: "referral_exclusion_definition",
        zb: "restricted_data_processing",
        Fi: "retoken",
        Cg: "screen_name",
        Ab: "screen_resolution",
        Gi: "search_term",
        Fa: "send_page_view",
        Bb: "send_to",
        Ec: "session_duration",
        Od: "session_engaged",
        Le: "session_engaged_time",
        kb: "session_id",
        Pd: "session_number",
        Fc: "delivery_postal_code",
        Eg: "temporary_client_id",
        Fg: "topmost_url",
        Hi: "tracking_id",
        Me: "traffic_type",
        Ma: "transaction_id",
        ma: "transport_url",
        Gg: "trip_type",
        Gc: "update",
        lb: "url_passthrough",
        Ne: "_user_agent_architecture",
        Oe: "_user_agent_bitness",
        Pe: "_user_agent_full_version_list",
        Qe: "_user_agent_mobile",
        Re: "_user_agent_model",
        Se: "_user_agent_platform",
        Te: "_user_agent_platform_version",
        Ue: "_user_agent_wow64",
        na: "user_data",
        Hg: "user_data_auto_latency",
        Ig: "user_data_auto_meta",
        Jg: "user_data_auto_multi",
        Kg: "user_data_auto_selectors",
        Lg: "user_data_auto_status",
        Mg: "user_data_mode",
        Ve: "user_data_settings",
        ra: "user_id",
        Ga: "user_properties",
        Ng: "us_privacy_string",
        ja: "value",
        Qd: "wbraid",
        Og: "wbraid_multiple_conversions",
        Ug: "_host_name",
        Vg: "_in_page_command",
        Wg: "_is_passthrough_cid",
        Xg: "non_personalized_ads",
        Mc: "_sst_parameters",
        Sa: "conversion_label",
        Ea: "page_location",
        Qb: "global_developer_id_string",
        Dg: "tc_privacy_string",
      },
    },
    ie = {},
    je = Object.freeze(
      ((ie[N.g.X] = 1),
      (ie[N.g.nd] = 1),
      (ie[N.g.vb] = 1),
      (ie[N.g.ba] = 1),
      (ie[N.g.hb] = 1),
      (ie[N.g.Ja] = 1),
      (ie[N.g.ib] = 1),
      (ie[N.g.wc] = 1),
      (ie[N.g.Ae] = 1),
      (ie[N.g.Ta] = 1),
      (ie[N.g.Nb] = 1),
      (ie[N.g.yc] = 1),
      (ie[N.g.Z] = 1),
      (ie[N.g.Be] = 1),
      (ie[N.g.Ob] = 1),
      (ie[N.g.Ed] = 1),
      (ie[N.g.Fd] = 1),
      (ie[N.g.Gd] = 1),
      (ie[N.g.Ge] = 1),
      (ie[N.g.Va] = 1),
      (ie[N.g.Jd] = 1),
      (ie[N.g.Kd] = 1),
      (ie[N.g.Ie] = 1),
      (ie[N.g.Md] = 1),
      (ie[N.g.qa] = 1),
      (ie[N.g.Ke] = 1),
      (ie[N.g.Nd] = 1),
      (ie[N.g.zb] = 1),
      (ie[N.g.Fa] = 1),
      (ie[N.g.Bb] = 1),
      (ie[N.g.Ec] = 1),
      (ie[N.g.Le] = 1),
      (ie[N.g.Fc] = 1),
      (ie[N.g.ma] = 1),
      (ie[N.g.Gc] = 1),
      (ie[N.g.Ve] = 1),
      (ie[N.g.Ga] = 1),
      (ie[N.g.Mc] = 1),
      ie)
    );
  Object.freeze([
    N.g.Ea,
    N.g.La,
    N.g.Tb,
    N.g.Ka,
    N.g.Cg,
    N.g.ra,
    N.g.Fe,
    N.g.ni,
  ]);
  var ke = {},
    le = Object.freeze(
      ((ke[N.g.ci] = 1),
      (ke[N.g.di] = 1),
      (ke[N.g.ei] = 1),
      (ke[N.g.fi] = 1),
      (ke[N.g.gi] = 1),
      (ke[N.g.hi] = 1),
      (ke[N.g.ii] = 1),
      (ke[N.g.ji] = 1),
      (ke[N.g.ki] = 1),
      (ke[N.g.xe] = 1),
      ke)
    ),
    me = {},
    ne = Object.freeze(
      ((me[N.g.Xf] = 1),
      (me[N.g.Yf] = 1),
      (me[N.g.kc] = 1),
      (me[N.g.mc] = 1),
      (me[N.g.Zf] = 1),
      (me[N.g.Kb] = 1),
      (me[N.g.nc] = 1),
      (me[N.g.tb] = 1),
      (me[N.g.Lb] = 1),
      (me[N.g.ub] = 1),
      (me[N.g.Aa] = 1),
      (me[N.g.oc] = 1),
      (me[N.g.Ba] = 1),
      (me[N.g.ag] = 1),
      me)
    ),
    oe = Object.freeze([N.g.X, N.g.vb, N.g.Nb]),
    pe = Object.freeze([].concat(oe)),
    qe = Object.freeze([N.g.Ja, N.g.Fd, N.g.Ec, N.g.Le, N.g.Cd]),
    re = Object.freeze([].concat(qe)),
    se = {},
    te = ((se[N.g.H] = "1"), (se[N.g.O] = "2"), se),
    ue = {},
    ve = Object.freeze(
      ((ue[N.g.X] = 1),
      (ue[N.g.nd] = 1),
      (ue[N.g.ya] = 1),
      (ue[N.g.wb] = 1),
      (ue[N.g.ze] = 1),
      (ue[N.g.pd] = 1),
      (ue[N.g.qd] = 1),
      (ue[N.g.rd] = 1),
      (ue[N.g.ba] = 1),
      (ue[N.g.sd] = 1),
      (ue[N.g.Da] = 1),
      (ue[N.g.oa] = 1),
      (ue[N.g.hb] = 1),
      (ue[N.g.Ja] = 1),
      (ue[N.g.ib] = 1),
      (ue[N.g.Ta] = 1),
      (ue[N.g.la] = 1),
      (ue[N.g.Ad] = 1),
      (ue[N.g.Z] = 1),
      (ue[N.g.si] = 1),
      (ue[N.g.Ac] = 1),
      (ue[N.g.Dd] = 1),
      (ue[N.g.Fe] = 1),
      (ue[N.g.Gd] = 1),
      (ue[N.g.Md] = 1),
      (ue[N.g.Ka] = 1),
      (ue[N.g.Bc] = 1),
      (ue[N.g.Ea] = 1),
      (ue[N.g.La] = 1),
      (ue[N.g.xg] = 1),
      (ue[N.g.yg] = 1),
      (ue[N.g.zg] = 1),
      (ue[N.g.Ag] = 1),
      (ue[N.g.zb] = 1),
      (ue[N.g.Fa] = 1),
      (ue[N.g.Bb] = 1),
      (ue[N.g.Fc] = 1),
      (ue[N.g.Ma] = 1),
      (ue[N.g.ma] = 1),
      (ue[N.g.Gc] = 1),
      (ue[N.g.lb] = 1),
      (ue[N.g.na] = 1),
      (ue[N.g.ra] = 1),
      (ue[N.g.ja] = 1),
      ue)
    );
  Object.freeze(N.g);
  var we = {},
    xe = (z.google_tag_manager = z.google_tag_manager || {}),
    ye = Math.random();
  we.Vb = "32m0";
  we.Lc = Number("0") || 0;
  we.ca = "dataLayer";
  we.ai =
    "ChEIgOn2nwYQueGPtuGu2rHSARInAKAspuiDBQUVA48dhhZeMWDokjz3pjQy4H4BbDy+Of5ODVteVhyDGgJz/g\x3d\x3d";
  var ze = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    Ae = { __paused: !0, __tg: !0 },
    Be;
  for (Be in ze) ze.hasOwnProperty(Be) && (Ae[Be] = !0);
  var Ce = Ba(""),
    De,
    Ee = !1;
  Ee = !0;
  De = Ee;
  var Fe,
    Ge = !1;
  Fe = Ge;
  var He,
    Ie = !1;
  He = Ie;
  var Je,
    Ke = !1;
  Je = Ke;
  we.md = "www.googletagmanager.com";
  var Le = "" + we.md + (De ? "/gtag/js" : "/gtm.js"),
    Me = null,
    Ne = null,
    Oe = {},
    Pe = {},
    Qe = {},
    Re = function () {
      var a = xe.sequence || 1;
      xe.sequence = a + 1;
      return a;
    };
  we.Zh = "";
  var Se = "";
  we.Vd = Se;
  var Te = new ua(),
    Ue = {},
    Xe = {},
    $e = {
      name: we.ca,
      set: function (a, b) {
        G(La(a, b), Ue);
        Ye();
      },
      get: function (a) {
        return Ze(a, 2);
      },
      reset: function () {
        Te = new ua();
        Ue = {};
        Ye();
      },
    },
    Ze = function (a, b) {
      return 2 != b ? Te.get(a) : af(a);
    },
    af = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Ue, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    bf = function (a, b) {
      Xe.hasOwnProperty(a) || (Te.set(a, b), G(La(a, b), Ue), Ye());
    },
    Ye = function (a) {
      l(Xe, function (b, c) {
        Te.set(b, c);
        G(La(b), Ue);
        G(La(b, c), Ue);
        a && delete Xe[b];
      });
    },
    cf = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? af(a) : Te.get(a);
      "array" === Xb(d) || "object" === Xb(d) ? (c = G(d)) : (c = d);
      return c;
    };
  var df = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var ef = function (a) {
    ef[" "](a);
    return a;
  };
  ef[" "] = function () {};
  var gf = function () {
    var a = ff,
      b = "rf";
    if (a.rf && a.hasOwnProperty(b)) return a.rf;
    var c = new a();
    return (a.rf = c);
  };
  var ff = function () {
    var a = {};
    this.h = function () {
      var b = df.h,
        c = df.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.m = function () {
      a[df.h] = !0;
    };
  };
  var hf = [];
  function jf() {
    var a = Db("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: kf,
        update: lf,
        addListener: mf,
        notifyListeners: nf,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function kf(a, b, c, d, e, f) {
    var g = jf();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var k = g.entries,
        m = k[a] || {},
        n = m.region,
        p = c && h(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === m.update),
          u = {
            region: p,
            initial: "granted" === b,
            update: m.update,
            quiet: q,
          };
        if ("" !== d || !1 !== m.initial) k[a] = u;
        q &&
          z.setTimeout(function () {
            k[a] === u &&
              u.quiet &&
              ((u.quiet = !1), of(a), nf(), Ya("TAGGING", 2));
          }, f);
      }
    }
  }
  function lf(a, b) {
    var c = jf();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = pf(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = pf(c, a);
      f.quiet ? ((f.quiet = !1), of(a)) : g !== d && of(a);
    }
  }
  function mf(a, b) {
    hf.push({ ff: a, vj: b });
  }
  function of(a) {
    for (var b = 0; b < hf.length; ++b) {
      var c = hf[b];
      ra(c.ff) && -1 !== c.ff.indexOf(a) && (c.Eh = !0);
    }
  }
  function nf(a, b) {
    for (var c = 0; c < hf.length; ++c) {
      var d = hf[c];
      if (d.Eh) {
        d.Eh = !1;
        try {
          d.vj({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function pf(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }
  var qf = function (a) {
      var b = jf();
      b.accessedAny = !0;
      return pf(b, a);
    },
    rf = function (a) {
      var b = jf();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    sf = function (a) {
      var b = jf();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    tf = function () {
      if (!gf().h()) return !1;
      var a = jf();
      a.accessedAny = !0;
      return a.active;
    },
    uf = function () {
      var a = jf();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    vf = function (a, b) {
      jf().addListener(a, b);
    },
    wf = function (a, b) {
      jf().notifyListeners(a, b);
    },
    xf = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!sf(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        vf(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    yf = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var k = d[g];
          !1 === qf(k) || e[k] || (f.push(k), (e[k] = !0));
        }
        return f;
      }
      var d = h(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        vf(d, function (f) {
          var g = c();
          0 < g.length && ((f.ff = g), a(f));
        });
    };
  var zf = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var Af = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        k = g[0].replace(/^\s*|\s*$/g, "");
      if (k && k == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var Bf = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Cf = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function Df(a) {
    return "null" !== a.origin;
  }
  var Gf = function (a, b, c, d) {
      return Ef(d) ? Af(a, String(b || Ff()), c) : [];
    },
    Jf = function (a, b, c, d, e) {
      if (Ef(e)) {
        var f = Hf(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = If(
            f,
            function (g) {
              return g.ae;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = If(
            f,
            function (g) {
              return g.Zc;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Kf(a, b, c, d) {
    var e = Ff(),
      f = window;
    Df(f) && (f.document.cookie = a);
    var g = Ff();
    return e != g || (void 0 != c && 0 <= Gf(b, g, !1, d).indexOf(c));
  }
  var Of = function (a, b, c) {
      function d(t, r, v) {
        if (null == v) return delete g[r], t;
        g[r] = v;
        return t + "; " + r + "=" + v;
      }
      function e(t, r) {
        if (null == r) return delete g[r], t;
        g[r] = !0;
        return t + "; " + r;
      }
      if (!Ef(c.Ya)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Lf(b)),
          (f = a + "=" + b));
      var g = {};
      f = d(f, "path", c.path);
      var k;
      c.expires instanceof Date
        ? (k = c.expires.toUTCString())
        : null != c.expires && (k = "" + c.expires);
      f = d(f, "expires", k);
      f = d(f, "max-age", c.Vk);
      f = d(f, "samesite", c.Wk);
      c.Xk && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = Mf(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            u = d(f, "domain", q);
          u = e(u, c.flags);
          if (!Nf(q, c.path) && Kf(u, a, b, c.Ya)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return Nf(m, c.path) ? 1 : Kf(f, a, b, c.Ya) ? 0 : 1;
    },
    Pf = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Of(a, b, c);
    };
  function If(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c
        ? d.push(k)
        : void 0 === f || m < f
        ? ((e = [k]), (f = m))
        : m === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }
  function Hf(a, b, c) {
    for (var d = [], e = Gf(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || -1 !== b.indexOf(k)) {
        var m = g.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: g.join("."), ae: 1 * m[0] || 1, Zc: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var Lf = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Qf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Rf = /(^|\.)doubleclick\.net$/i,
    Nf = function (a, b) {
      return (
        Rf.test(window.document.location.hostname) || ("/" === b && Qf.test(a))
      );
    },
    Ff = function () {
      return Df(window) ? window.document.cookie : "";
    },
    Mf = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Rf.test(e) || Qf.test(e) || a.push("none");
      return a;
    },
    Ef = function (a) {
      if (!gf().h() || !a || !tf()) return !0;
      if (!sf(a)) return !1;
      var b = qf(a);
      return null == b ? !0 : !!b;
    };
  var Sf = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (zf(a) & 2147483647)) : String(b);
    },
    Tf = function (a) {
      return [Sf(a), Math.round(Fa() / 1e3)].join(".");
    },
    Wf = function (a, b, c, d, e) {
      var f = Uf(b);
      return Jf(a, f, Vf(c), d, e);
    },
    Xf = function (a, b, c, d) {
      var e = "" + Uf(c),
        f = Vf(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Uf = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Vf = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  function Yf(a, b, c, d) {
    var e,
      f = Number(null != a.qb ? a.qb : void 0);
    0 !== f && (e = new Date((b || Fa()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Ya: d,
    };
  }
  var Zf;
  var cg = function () {
      var a = $f,
        b = ag,
        c = bg(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Mb(D, "mousedown", d);
        Mb(D, "keyup", d);
        Mb(D, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    dg = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      bg().decorators.push(f);
    },
    eg = function (a, b, c) {
      for (var d = bg().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          k;
        if ((k = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== D.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    k = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  k = !0;
                  break a;
                }
            k = !1;
          }
        if (k) {
          var u = g.placement;
          void 0 == u && (u = g.fragment ? 2 : 1);
          u === b && Ia(e, g.callback());
        }
      }
      return e;
    };
  function bg() {
    var a = Db("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var fg = /(.*?)\*(.*?)\*(.*)/,
    gg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    hg = /^(?:www\.|m\.|amp\.)+/,
    ig = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function jg(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var lg = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString() &&
          (b.push(c), b.push(Va(String(d))));
      }
    var e = b.join("*");
    return ["1", kg(e), e].join("*");
  };
  function kg(a, b) {
    var c = [
        Bb.userAgent,
        new Date().getTimezoneOffset(),
        Bb.userLanguage || Bb.language,
        Math.floor(Fa() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = Zf)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, k = 0; 8 > k; k++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Zf = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ Zf[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function mg() {
    return function (a) {
      var b = qd(z.location.href),
        c = b.search.replace("?", ""),
        d = id(c, "_gl", !0) || "";
      a.query = ng(d) || {};
      var e = od(b, "fragment").match(jg("_gl"));
      a.fragment = ng((e && e[3]) || "") || {};
    };
  }
  function og(a, b) {
    var c = jg(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var pg = function (a, b) {
      b || (b = "_gl");
      var c = ig.exec(a);
      if (!c) return "";
      var d = c[1],
        e = og(b, (c[2] || "").slice(1)),
        f = og(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    qg = function (a) {
      var b = mg(),
        c = bg();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ia(d, e.query), a && Ia(d, e.fragment));
      return d;
    },
    ng = function (a) {
      try {
        var b = rg(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = Wa(d[e + 1]);
            c[f] = g;
          }
          Ya("TAGGING", 6);
          return c;
        }
      } catch (k) {
        Ya("TAGGING", 8);
      }
    };
  function rg(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = fg.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var k = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === kg(k, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return k;
        Ya("TAGGING", 7);
      }
    }
  }
  function sg(a, b, c, d) {
    function e(p) {
      p = og(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = ig.exec(c);
    if (!f) return "";
    var g = f[1],
      k = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? (m = "#" + e(m.substring(1))) : (k = "?" + e(k.substring(1)));
    return "" + g + k + m;
  }
  function tg(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = eg(b, 1, c),
      e = eg(b, 2, c),
      f = eg(b, 3, c);
    if (Ja(d)) {
      var g = lg(d);
      c ? ug("_gl", g, a) : vg("_gl", g, a, !1);
    }
    if (!c && Ja(e)) {
      var k = lg(e);
      vg("_gl", k, a, !0);
    }
    for (var m in f)
      if (f.hasOwnProperty(m))
        a: {
          var n = m,
            p = f[m],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              vg(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              ug(n, p, q);
              break a;
            }
          }
          "string" == typeof q && sg(n, p, q);
        }
  }
  function vg(a, b, c, d) {
    if (c.href) {
      var e = sg(a, b, c.href, void 0 === d ? !1 : d);
      fb.test(e) && (c.href = e);
    }
  }
  function ug(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var k = e[g];
          if (k.name === a) {
            k.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = D.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = sg(a, b, c.action);
        fb.test(n) && (c.action = n);
      }
    }
  }
  function $f(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || tg(e, e.hostname);
      }
    } catch (g) {}
  }
  function ag(a) {
    try {
      if (a.action) {
        var b = od(qd(a.action), "host");
        tg(a, b);
      }
    } catch (c) {}
  }
  var wg = function (a, b, c, d) {
      cg();
      dg(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    xg = function (a, b) {
      cg();
      dg(a, [nd(z.location, "host", !0)], b, !0, !0);
    },
    yg = function () {
      var a = D.location.hostname,
        b = gg.exec(D.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var k = a.replace(hg, ""),
        m = e.replace(hg, ""),
        n;
      if (!(n = k === m)) {
        var p = "." + m;
        n = k.substring(k.length - p.length, k.length) === p;
      }
      return n;
    },
    zg = function (a, b) {
      return !1 === a ? !1 : a || b || yg();
    };
  var Ag = {},
    Bg = function (a) {
      return void 0 == Ag[a] ? !1 : Ag[a];
    };
  var Cg = ["1"],
    Dg = {},
    Eg = {},
    Qg = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Fg(a.prefix);
      if (!Dg[c])
        if (Ng(c, a.path, a.domain)) {
          if (Bg("enable_auid_cross_domain")) {
            var d = Eg[Fg(a.prefix)];
            Og(a, d ? d.id : void 0, d ? d.wf : void 0);
          }
        } else {
          if (Bg("enable_auid_fl_iframe")) {
            var e = sd("auiddc");
            if (e) {
              Ya("TAGGING", 17);
              Dg[c] = e;
              return;
            }
          }
          if (b) {
            var f = Fg(a.prefix),
              g = Tf();
            if (0 === Pg(f, g, a)) {
              var k = Db("google_tag_data", {});
              k._gcl_au || (k._gcl_au = g);
            }
            Ng(c, a.path, a.domain);
          }
        }
    };
  function Og(a, b, c) {
    var d = Fg(a.prefix),
      e = Dg[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(Fa() / 1e3)));
          Pg(d, k, a, 1e3 * g);
        }
      }
    }
  }
  function Pg(a, b, c, d) {
    var e = Xf(b, "1", c.domain, c.path),
      f = Yf(c, d);
    f.Ya = "ad_storage";
    return Pf(a, e, f);
  }
  function Ng(a, b, c) {
    var d = Wf(a, b, c, Cg, "ad_storage");
    if (!d) return !1;
    Rg(a, d);
    return !0;
  }
  function Rg(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((Dg[a] = c.slice(0, 2).join(".")),
        (Eg[a] = { id: c.slice(2, 4).join("."), wf: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (Eg[a] = { id: c.slice(0, 2).join("."), wf: Number(c[2]) || 0 })
      : (Dg[a] = b);
  }
  function Fg(a) {
    return (a || "_gcl") + "_au";
  }
  function Sg(a) {
    tf() || a();
    xf(
      function () {
        qf("ad_storage") && a();
        yf(a, "ad_storage");
      },
      ["ad_storage"]
    );
  }
  function Tg(a) {
    var b = qg(!0),
      c = Fg(a.prefix);
    Sg(function () {
      var d = b[c];
      if (d) {
        Rg(c, d);
        var e = 1e3 * Number(Dg[c].split(".")[1]);
        if (e) {
          Ya("TAGGING", 16);
          var f = Yf(a, e);
          f.Ya = "ad_storage";
          var g = Xf(d, "1", a.domain, a.path);
          Pf(c, g, f);
        }
      }
    });
  }
  function Ug(a, b, c, d) {
    d = d || {};
    var e = function () {
      var f = Fg(d.prefix),
        g = {},
        k = Wf(f, d.path, d.domain, Cg, "ad_storage");
      if (!k) return g;
      g[f] = k;
      return g;
    };
    Sg(function () {
      wg(e, a, b, c);
    });
  }
  var P = [];
  P[7] = !0;
  P[9] = !0;
  P[27] = !0;
  P[11] = !0;
  P[13] = !0;
  P[15] = !0;
  P[16] = !0;
  P[25] = !0;
  P[36] = !0;
  P[38] = !0;
  P[40] = !0;
  P[43] = !0;
  P[45] = !0;
  P[52] = !0;
  P[57] = !0;
  P[58] = !0;
  P[60] = !0;
  P[61] = !0;
  P[68] = !0;
  P[69] = !0;
  P[72] = !0;
  P[76] = !0;
  P[77] = !0;
  P[83] = !0;
  P[84] = !0;
  var Q = function (a) {
    return !!P[a];
  };
  var Wg = Vg();
  function Vg() {
    if (!Q(87)) return {};
    try {
      return JSON.parse(
        atob(
          "eyIwIjoiSU4iLCIxIjoiSU4tUEIiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlfQ"
        )
      );
    } catch (a) {
      return J(123), {};
    }
  }
  var Xg = { mj: "IN", nk: "IN-PB", Jj: "true", wj: "" },
    Yg = function () {
      var a;
      return Q(87) ? (null != (a = Wg["0"]) ? a : "") : Xg.mj;
    },
    Zg = function () {
      var a = "";
      return a;
    },
    $g = function () {
      var a = !1;
      return a;
    };
  var ah,
    bh = !1,
    ch = function (a) {
      if (!bh) {
        bh = !0;
        ah = ah || {};
      }
      return ah[a];
    };
  var dh = function () {
      var a = z.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    eh = function (a) {
      if (D.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
        return !0;
      var c = z.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var k = g.indexOf("opacity(");
          0 <= k &&
            ((g = g.substring(k + 8, g.indexOf(")", k))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = z.getComputedStyle(d, null));
      }
      return !1;
    };
  function Kh() {}
  function Lh() {}
  function Mh(a) {
    for (var b = [], c = 0; c < Nh.length; c++) {
      var d = a(Nh[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var Nh = [N.g.H, N.g.O],
    Oh = function (a) {
      var b = a[N.g.Mf];
      b && J(40);
      var c = a[N.g.Of];
      c && J(41);
      for (
        var d = ra(b) ? b : [b], e = { hc: 0 };
        e.hc < d.length;
        e = { hc: e.hc }, ++e.hc
      )
        l(
          a,
          (function (f) {
            return function (g, k) {
              if (g !== N.g.Mf && g !== N.g.Of) {
                var m = d[f.hc],
                  n = Yg(),
                  p,
                  q;
                p = Q(87) ? (null != (q = Wg["1"]) ? q : "") : Xg.nk;
                jf().set(g, k, m, n, p, c);
              }
            };
          })(e)
        );
    },
    Ph = function (a, b) {
      l(a, function (c, d) {
        jf().update(c, d);
      });
      wf(b.eventId, b.priorityId);
    },
    Qh = function (a) {
      var b = qf(a);
      return void 0 != b ? b : !0;
    },
    Rh = function () {
      return "G1" + Mh(qf);
    },
    Sh = function (a, b) {
      yf(a, b);
    },
    Th = function (a, b) {
      xf(a, b);
    };
  var Uh = function () {
    xe.dedupe_gclid || (xe.dedupe_gclid = "" + Tf());
    return xe.dedupe_gclid;
  };
  var Vh = function () {
    var a = !1;
    return a;
  };
  var S = { C: "UA-165746097-1", Ra: "" },
    Wh = { Ch: "UA-165746097-1", Dh: "UA-165746097-1" };
  S.Ze = Ba("");
  var Xh = function () {
      return Wh.Ch ? Wh.Ch.split("|") : [S.C];
    },
    Yh = function () {
      return Wh.Dh ? Wh.Dh.split("|") : [];
    },
    Zh = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    ai = function () {
      for (var a = $h(), b = Xh(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        !d || qa(d) ? (a.container[b[c]] = { state: 2 }) : (d.state = 2);
      }
      for (var e = Yh(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && J(93);
        g ? (g.state = 2) : (a.destination[e[f]] = { state: 2 });
      }
      a.canonical[S.Ra] = 2;
    },
    bi = function (a) {
      return !!$h().container[a];
    },
    ci = function () {
      var a = $h().container,
        b;
      for (b in a)
        if (a.hasOwnProperty(b)) {
          var c = a[b];
          if (qa(c)) {
            if (1 === c) return !0;
          } else if (1 === c.state) return !0;
        }
      return !1;
    },
    di = function () {
      var a = {};
      l($h().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    };
  function $h() {
    var a = xe.tidr;
    a || ((a = new Zh()), (xe.tidr = a));
    return a;
  }
  var ei = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      GT: "t",
      HA: "h",
      MC: "m",
      GTM: "g",
      OPT: "o",
    },
    fi = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    gi = function (a) {
      var b = S.C.split("-"),
        c = b[0].toUpperCase();
      if (Q(45)) {
        var d = {};
        d.oj = S.C;
        d.sk = we.Lc;
        d.vk = we.Vb;
        d.Xj = S.Ze ? 2 : 1;
        De ? ((d.me = fi[c]), d.me || (d.me = 0)) : (d.me = Je ? 13 : 10);
        He ? (d.yf = 1) : Vh() ? (d.yf = 2) : (d.yf = 3);
        var e;
        var f = d.me,
          g = d.yf;
        void 0 === f
          ? (e = "")
          : (g || (g = 0),
            (e =
              "" +
              Fd(1, 1) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                (f << 2) | g
              ]));
        var k = d.Rk,
          m =
            4 +
            e +
            (k
              ? "" +
                Fd(2, 1) +
                "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                  k
                ]
              : ""),
          n,
          p = d.vk;
        n = p && Ed.test(p) ? "" + Fd(3, 2) + p : "";
        var q,
          u = d.sk;
        q = u
          ? "" +
            Fd(4, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              u
            ]
          : "";
        var t;
        var r = d.oj;
        if (r && a) {
          var v = r.split("-"),
            w = v[0].toUpperCase();
          if ("GTM" !== w && "OPT" !== w) t = "";
          else {
            var y = v[1];
            t =
              "" +
              Fd(5, 3) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                1 + y.length
              ] +
              (d.Xj || 0) +
              y;
          }
        } else t = "";
        return m + n + q + t;
      }
      var x = ei[c] || "i",
        B = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        A = "w";
      De && (A = Vh() ? "s" : "o");
      Fe
        ? ("w" === A && (A = "x"), "o" === A && (A = "q"))
        : He
        ? ("w" === A && (A = "y"), "o" === A && (A = "r"))
        : Je && (A = "z");
      return "2" + A + x + (4 === we.Vb.length ? we.Vb.slice(1) : we.Vb) + B;
    };
  function hi(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var ii = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function ji() {
    return gb ? !!nb && !!nb.platform : !1;
  }
  function ki() {
    return qb("iPhone") && !qb("iPod") && !qb("iPad");
  }
  function li() {
    ki() || qb("iPad") || qb("iPod");
  }
  sb();
  rb() || qb("Trident") || qb("MSIE");
  qb("Edge");
  !qb("Gecko") ||
    (-1 != mb().toLowerCase().indexOf("webkit") && !qb("Edge")) ||
    qb("Trident") ||
    qb("MSIE") ||
    qb("Edge");
  -1 != mb().toLowerCase().indexOf("webkit") && !qb("Edge") && qb("Mobile");
  ji() || qb("Macintosh");
  ji() || qb("Windows");
  (ji() ? "Linux" === nb.platform : qb("Linux")) || ji() || qb("CrOS");
  var mi = ma.navigator || null;
  mi && (mi.appVersion || "").indexOf("X11");
  ji() || qb("Android");
  ki();
  qb("iPad");
  qb("iPod");
  li();
  mb().toLowerCase().indexOf("kaios");
  var ni = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var k = a.charCodeAt(e + f);
          if (!k || 61 == k || 38 == k || 35 == k) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    oi = /#|$/,
    pi = function (a, b) {
      var c = a.search(oi),
        d = ni(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    qi = /[?&]($|#)/,
    ri = function (a, b, c) {
      for (
        var d, e = a.search(oi), f = 0, g, k = [];
        0 <= (g = ni(a, f, b, e));

      )
        k.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      k.push(a.slice(f));
      d = k.join("").replace(qi, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          u = d.indexOf("#");
        0 > u && (u = d.length);
        var t = d.indexOf("?"),
          r;
        0 > t || t > u ? ((t = u), (r = "")) : (r = d.substring(t + 1, u));
        q = [d.slice(0, t), r, d.slice(u)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var si = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              ef(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    ti = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function ui(a) {
    if (!a || !D.head) return null;
    var b = vi("META");
    D.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var wi = function () {
      if (z.top == z) return 0;
      var a = z.location.ancestorOrigins;
      return a
        ? a[a.length - 1] == z.location.origin
          ? 1
          : 2
        : si(z.top)
        ? 1
        : 2;
    },
    vi = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function xi(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = vi("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = ab(g, e);
          0 <= k && Array.prototype.splice.call(g, k, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      ii(e, "load", f);
      ii(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var zi = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      ti(a, function (d, e) {
        d && (c += "&" + e + "=" + encodeURIComponent(d));
      });
      yi(c, b);
    },
    yi = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          (e.headers = { "Attribution-Reporting-Eligible": "event-source" }));
        c.fetch(a, e);
      } else xi(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Ai = function () {};
  var Bi = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Ci = function (a, b) {
      b = void 0 === b ? {} : b;
      this.m = a;
      this.h = null;
      this.M = {};
      this.sb = 0;
      var c;
      this.V = null != (c = b.Ek) ? c : 500;
      var d;
      this.I = null != (d = b.Sk) ? d : !1;
      this.B = null;
    };
  la(Ci, Ai);
  Ci.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.I },
      d = Cf(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.V &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.V));
    var f = function (g, k) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Bi(c)),
          (c.internalBlockOnErrors = b.I),
          (k && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Di(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Ci.prototype.removeEventListener = function (a) {
    a && a.listenerId && Di(this, "removeEventListener", null, a.listenerId);
  };
  var Fi = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var k = c;
      2 === c
        ? ((k = 0), 2 === g && (k = 1))
        : 3 === c && ((k = 1), 1 === g && (k = 0));
      var m;
      if (0 === k)
        if (a.purpose && a.vendor) {
          var n = Ei(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Ei(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === k
            ? a.purpose && a.vendor
              ? Ei(a.purpose.legitimateInterests, b) &&
                Ei(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Ei = function (a, b) {
      return !(!a || !a[b]);
    },
    Di = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.m.__tcfapi) {
        var e = a.m.__tcfapi;
        e(b, 2, c, d);
      } else if (Gi(a)) {
        Hi(a);
        var f = ++a.sb;
        a.M[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Gi = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.m, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Hi = function (a) {
      a.B ||
        ((a.B = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.M[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        ii(a.m, "message", a.B));
    },
    Ii = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Bi(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (zi({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var Ji = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Ki = hi("", 500);
  function Li() {
    var a = xe.tcf || {};
    return (xe.tcf = a);
  }
  var Pi = function () {
    var a = Li(),
      b = new Ci(z, { Ek: -1 });
    if (
      !0 === z.gtag_enable_tcf_support &&
      !a.active &&
      ("function" === typeof z.__tcfapi ||
        "function" === typeof b.m.__tcfapi ||
        null != Gi(b))
    ) {
      a.active = !0;
      a.he = {};
      Mi();
      a.tcString = "tcunavailable";
      try {
        b.addEventListener(function (c) {
          if (0 !== c.internalErrorState) Ni(a), Oi(a);
          else {
            var d;
            a.gdprApplies = c.gdprApplies;
            if (!1 === c.gdprApplies) {
              var e = {},
                f;
              for (f in Ji) Ji.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (
              "tcloaded" === c.eventStatus ||
              "useractioncomplete" === c.eventStatus ||
              "cmpuishown" === c.eventStatus
            ) {
              var g = {},
                k;
              for (k in Ji)
                if (Ji.hasOwnProperty(k))
                  if ("1" === k) {
                    var m,
                      n = c,
                      p = !0;
                    p = void 0 === p ? !1 : p;
                    m = Ii(n)
                      ? !1 === n.gdprApplies ||
                        "tcunavailable" === n.tcString ||
                        (void 0 === n.gdprApplies && !p) ||
                        "string" !== typeof n.tcString ||
                        !n.tcString.length
                        ? !0
                        : Fi(n, "1", 0)
                      : !1;
                    g["1"] = m;
                  } else g[k] = Fi(c, k, Ji[k]);
              d = g;
            }
            d && ((a.tcString = c.tcString || "tcempty"), (a.he = d), Oi(a));
          }
        });
      } catch (c) {
        Ni(a), Oi(a);
      }
    }
  };
  function Ni(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function Mi() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = Ki), a);
    Oh(b);
  }
  function Oi(a) {
    var b = {},
      c = ((b.ad_storage = a.he["1"] ? "granted" : "denied"), b);
    Ph(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: Qi() }
    );
  }
  var Qi = function () {
      var a = Li();
      return a.active ? a.tcString || "" : "";
    },
    Ri = function () {
      var a = Li();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    Si = function (a) {
      if (!Ji.hasOwnProperty(String(a))) return !0;
      var b = Li();
      return b.active && b.he ? !!b.he[String(a)] : !0;
    };
  var Ti = function (a) {
      var b = String(a[bc.Na] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    Ui =
      0 <= z.location.search.indexOf("?gtm_latency=") ||
      0 <= z.location.search.indexOf("&gtm_latency=");
  var Vi = ["L", "S", "Y"],
    Wi = ["S", "E"],
    Xi = { sampleRate: "0.005000", Vh: "", Uh: Number("5"), Th: Number("") },
    Yi;
  if (!(Yi = Ui)) {
    var Zi = Math.random(),
      $i = Xi.sampleRate;
    Yi = Zi < $i;
  }
  var aj = Yi,
    bj = "https://www.googletagmanager.com/a?id=" + S.C + "&cv=1",
    cj = {
      label: S.C + " Container",
      children: [{ label: "Initialization", children: [] }],
    };
  function dj() {
    return [bj, "&v=3&t=t", "&pid=" + ta(), "&rv=" + we.Vb].join("");
  }
  var ej = dj();
  function fj() {
    ej = dj();
  }
  var gj = {},
    hj = "",
    ij = "",
    jj = "",
    kj = "",
    lj = [],
    mj = "",
    nj = {},
    oj = !1,
    pj = {},
    qj = {},
    rj = {},
    sj = "",
    tj = void 0,
    uj = {},
    vj = {},
    wj = void 0,
    Oj = 5;
  0 < Xi.Uh && (Oj = Xi.Uh);
  var Pj = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        Oj: function () {
          return c < a ? !1 : Fa() - d[c % a] < b;
        },
        pk: function () {
          var f = c++ % a;
          d[f] = Fa();
        },
      };
    })(Oj, 1e3),
    Qj = 1e3,
    Rj = "";
  function Sj(a) {
    var b = tj;
    if (void 0 === b) return "";
    var c = $a("GTM"),
      d = $a("TAGGING"),
      e = $a("HEALTH"),
      f = ej,
      g = gj[b] ? "" : "&es=1",
      k = uj[b],
      m = Tj(b),
      n = Uj(),
      p = hj,
      q = ij,
      u = sj,
      t = Vj(a),
      r = jj,
      v = kj,
      w;
    return [
      f,
      g,
      k,
      m,
      c ? "&u=" + c : "",
      d ? "&ut=" + d : "",
      e ? "&h=" + e : "",
      n,
      p,
      q,
      u,
      t,
      r,
      v,
      w,
      mj ? "&dl=" + encodeURIComponent(mj) : "",
      0 < lj.length ? "&tdp=" + lj.join(".") : "",
      we.Lc ? "&x=" + we.Lc : "",
      "&z=0",
    ].join("");
  }
  function Xj() {
    wj && (z.clearTimeout(wj), (wj = void 0));
    if (void 0 !== tj && (!gj[tj] || hj || ij))
      if (vj[tj] || Pj.Oj() || 0 >= Qj--) J(1), (vj[tj] = !0);
      else {
        Pj.pk();
        var a = Sj(!0);
        Lb(a);
        if (kj || (mj && 0 < lj.length)) {
          var b = a.replace("/a?", "/td?");
          Lb(b);
        }
        gj[tj] = !0;
        mj = kj = jj = sj = ij = hj = "";
        lj = [];
      }
  }
  function Yj() {
    wj || (wj = z.setTimeout(Xj, 500));
  }
  function Zj(a) {
    return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*";
  }
  function ak() {
    2022 <= Sj().length && Xj();
  }
  function Uj() {
    return (
      "&tc=" +
      Bc.filter(function (a) {
        return a;
      }).length
    );
  }
  var ck = function (a, b) {
      if (aj && !vj[a] && tj !== a) {
        Xj();
        tj = a;
        jj = hj = "";
        uj[a] = "&e=" + Zj(b) + "&eid=" + a;
        Yj();
      }
    },
    dk = function (a, b, c, d) {
      if (aj && b) {
        var e = Ti(b),
          f = c + e;
        if (!vj[a]) {
          a !== tj && (Xj(), (tj = a));
          hj = hj ? hj + "." + f : "&tr=" + f;
          var g = b["function"];
          if (!g)
            throw Error("Error: No function name given for function call.");
          var k = (Dc[g] ? "1" : "2") + e;
          jj = jj ? jj + "." + k : "&ti=" + k;
          Yj();
          ak();
        }
      }
    },
    ek = function (a, b, c) {
      if (aj && a && a[bc.ob]) {
        var d = b + "." + a[bc.ob];
        rj[d] = c;
        "html" == Ti(a) && Rj == d && (hj += ":" + Math.floor(c));
      }
    };
  function Vj(a) {}
  function Tj(a) {}
  var lk = function (a, b, c) {
      if (aj && void 0 !== a && !vj[a]) {
        a !== tj && (Xj(), (tj = a));
        var d = c + b;
        ij = ij ? ij + "." + d : "&epr=" + d;
        Yj();
        ak();
      }
    },
    mk = function (a, b, c) {},
    Wj = void 0;
  tb();
  ki() || qb("iPod");
  qb("iPad");
  !qb("Android") || ub() || tb() || sb() || qb("Silk");
  ub();
  !qb("Safari") ||
    ub() ||
    (rb() ? 0 : qb("Coast")) ||
    sb() ||
    (rb() ? 0 : qb("Edge")) ||
    (rb() ? pb("Microsoft Edge") : qb("Edg/")) ||
    (rb() ? pb("Opera") : qb("OPR")) ||
    tb() ||
    qb("Silk") ||
    qb("Android") ||
    li();
  var nk = {},
    ok = null,
    pk = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!ok) {
        ok = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            k = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(k[m].split(""));
          nk[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === ok[q] && (ok[q] = p);
          }
        }
      }
      for (
        var u = nk[f],
          t = Array(Math.floor(b.length / 3)),
          r = u[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var y = b[v],
          x = b[v + 1],
          B = b[v + 2],
          A = u[y >> 2],
          C = u[((y & 3) << 4) | (x >> 4)],
          H = u[((x & 15) << 2) | (B >> 6)],
          I = u[B & 63];
        t[w++] = "" + A + C + H + I;
      }
      var E = 0,
        K = r;
      switch (b.length - v) {
        case 2:
          (E = b[v + 1]), (K = u[(E & 15) << 2] || r);
        case 1:
          var M = b[v];
          t[w] = "" + u[M >> 2] + u[((M & 3) << 4) | (E >> 4)] + K + r;
      }
      return t.join("");
    };
  var qk =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function rk() {
    var a;
    return null != (a = z.google_tag_data) ? a : (z.google_tag_data = {});
  }
  function sk() {
    var a = z.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function tk() {
    var a, b;
    return null !=
      (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function uk() {
    var a, b;
    return (
      "function" ===
      typeof (null == (a = z.navigator)
        ? void 0
        : null == (b = a.userAgentData)
        ? void 0
        : b.getHighEntropyValues)
    );
  }
  function vk() {
    if (!uk()) return null;
    var a = rk();
    if (a.uach_promise) return a.uach_promise;
    var b = z.navigator.userAgentData
      .getHighEntropyValues(qk)
      .then(function (c) {
        null != a.uach || (a.uach = c);
        return c;
      });
    return (a.uach_promise = b);
  }
  var Bk = function (a) {
    for (
      var b = [],
        c = D.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Jf: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  };
  function Ck(a, b) {
    var c = Bk(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Jf] || (d[c[e].Jf] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), aa: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Jf].push(g);
      }
    }
    return d;
  }
  var Dk = /^\w+$/,
    Ek = /^[\w-]+$/,
    Fk = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    Gk = function () {
      if (!gf().h() || !tf()) return !0;
      var a = qf("ad_storage");
      return null == a ? !0 : !!a;
    },
    Hk = function (a, b) {
      sf("ad_storage")
        ? Gk()
          ? a()
          : yf(a, "ad_storage")
        : b
        ? Ya("TAGGING", 3)
        : xf(
            function () {
              Hk(a, !0);
            },
            ["ad_storage"]
          );
    },
    Jk = function (a) {
      return Ik(a).map(function (b) {
        return b.aa;
      });
    },
    Ik = function (a) {
      var b = [];
      if (!Df(z) || !D.cookie) return b;
      var c = Gf(a, D.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { gd: d.gd }, e++) {
        var f = Kk(c[e]);
        if (null != f) {
          var g = f,
            k = g.version;
          d.gd = g.aa;
          var m = g.timestamp,
            n = g.labels,
            p = sa(
              b,
              (function (q) {
                return function (u) {
                  return u.aa === q.gd;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, m)),
              (p.labels = Lk(p.labels, n || [])))
            : b.push({ version: k, aa: d.gd, timestamp: m, labels: n });
        }
      }
      b.sort(function (q, u) {
        return u.timestamp - q.timestamp;
      });
      return Mk(b);
    };
  function Lk(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Nk(a) {
    return a && "string" == typeof a && a.match(Dk) ? a : "_gcl";
  }
  var Pk = function () {
      var a = qd(z.location.href),
        b = od(a, "query", !1, void 0, "gclid"),
        c = od(a, "query", !1, void 0, "gclsrc"),
        d = od(a, "query", !1, void 0, "wbraid"),
        e = od(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || id(f, "gclid");
        c = c || id(f, "gclsrc");
        d = d || id(f, "wbraid");
      }
      return Ok(b, c, e, d);
    },
    Ok = function (a, b, c, d) {
      var e = {},
        f = function (g, k) {
          e[k] || (e[k] = []);
          e[k].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Ek.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(Ek))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    Rk = function (a) {
      var b = Pk();
      Hk(function () {
        Qk(b, !1, a);
      });
    };
  function Qk(a, b, c, d, e) {
    function f(w, y) {
      var x = Sk(w, g);
      x && (Pf(x, y, k), (m = !0));
    }
    c = c || {};
    e = e || [];
    var g = Nk(c.prefix);
    d = d || Fa();
    var k = Yf(c, d, !0);
    k.Ya = "ad_storage";
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var y = ["GCL", n, w];
        0 < e.length && y.push(e.join("."));
        return y.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (!m && a.gb) {
      var q = a.gb[0],
        u = Sk("gb", g),
        t = !1;
      if (!b)
        for (var r = Ik(u), v = 0; v < r.length; v++)
          r[v].aa === q && r[v].labels && 0 < r[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var Uk = function (a, b) {
      var c = qg(!0);
      Hk(function () {
        for (var d = Nk(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Fk[f]) {
            var g = Sk(f, d),
              k = c[g];
            if (k) {
              var m = Math.min(Tk(k), Fa()),
                n;
              b: {
                var p = m;
                if (Df(z))
                  for (
                    var q = Gf(g, D.cookie, void 0, "ad_storage"), u = 0;
                    u < q.length;
                    ++u
                  )
                    if (Tk(q[u]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var t = Yf(b, m, !0);
                t.Ya = "ad_storage";
                Pf(g, k, t);
              }
            }
          }
        }
        Qk(Ok(c.gclid, c.gclsrc), !1, b);
      });
    },
    Sk = function (a, b) {
      var c = Fk[a];
      if (void 0 !== c) return b + c;
    },
    Tk = function (a) {
      return 0 !== Vk(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Kk(a) {
    var b = Vk(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          aa: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Vk(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !Ek.test(a[2])
      ? []
      : a;
  }
  var Wk = function (a, b, c, d, e) {
      if (ra(b) && Df(z)) {
        var f = Nk(e),
          g = function () {
            for (var k = {}, m = 0; m < a.length; ++m) {
              var n = Sk(a[m], f);
              if (n) {
                var p = Gf(n, D.cookie, void 0, "ad_storage");
                p.length && (k[n] = p.sort()[p.length - 1]);
              }
            }
            return k;
          };
        Hk(function () {
          wg(g, b, c, d);
        });
      }
    },
    Mk = function (a) {
      return a.filter(function (b) {
        return Ek.test(b.aa);
      });
    },
    Xk = function (a, b) {
      if (Df(z)) {
        for (var c = Nk(b.prefix), d = {}, e = 0; e < a.length; e++)
          Fk[a[e]] && (d[a[e]] = Fk[a[e]]);
        Hk(function () {
          l(d, function (f, g) {
            var k = Gf(c + g, D.cookie, void 0, "ad_storage");
            k.sort(function (t, r) {
              return Tk(r) - Tk(t);
            });
            if (k.length) {
              var m = k[0],
                n = Tk(m),
                p = 0 !== Vk(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                u;
              u = 0 !== Vk(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [u];
              Qk(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Yk(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Zk = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (tf()) {
        var c = Pk();
        if (Yk(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          xg(function () {
            return d;
          }, 3);
          xg(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    $k = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!Gk()) return e;
      var f = Ik(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var k = f[0],
          m = f[0].timestamp,
          n = [k.version, Math.round(m / 1e3), k.aa]
            .concat(k.labels || [], [b])
            .join("."),
          p = Yf(c, m, !0);
        p.Ya = "ad_storage";
        Pf(a, n, p);
      }
      return e;
    };
  function al(a, b) {
    var c = Nk(b),
      d = Sk(a, c);
    if (!d) return 0;
    for (var e = Ik(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function bl(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var cl = function (a) {
    var b = Math.max(al("aw", a), bl(Gk() ? Ck() : {}));
    return Math.max(al("gb", a), bl(Gk() ? Ck("_gac_gb", !0) : {})) > b;
  };
  var hl = /[A-Z]+/,
    il = /\s/,
    jl = function (a) {
      if (h(a)) {
        a = Da(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (hl.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || (il.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, T: c + "-" + d[0], K: d };
          }
        }
      }
    },
    ll = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = jl(a[c]);
        d && (b[d.id] = d);
      }
      kl(b);
      var e = [];
      l(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function kl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.K[1] && b.push(d.T);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var ml = function (a, b, c, d) {
    var e = Jb(),
      f;
    if (1 === e)
      a: {
        var g = Le;
        g = g.toLowerCase();
        for (
          var k = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = D.getElementsByTagName("script"),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var u = p[q].src;
          if (u) {
            u = u.toLowerCase();
            if (0 === u.indexOf(m)) {
              f = 3;
              break a;
            }
            1 === n && 0 === u.indexOf(k) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || "http:" != z.location.protocol ? a : b) + c;
  };
  var ol = function (a, b, c) {
      if (z[a.functionName]) return b.Af && F(b.Af), z[a.functionName];
      var d = nl();
      z[a.functionName] = d;
      if (a.Xd)
        for (var e = 0; e < a.Xd.length; e++) z[a.Xd[e]] = z[a.Xd[e]] || nl();
      a.ee && void 0 === z[a.ee] && (z[a.ee] = c);
      Ib(ml("https://", "http://", a.If), b.Af, b.ck);
      return d;
    },
    nl = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    pl = {
      functionName: "_googWcmImpl",
      ee: "_googWcmAk",
      If: "www.gstatic.com/wcm/loader.js",
    },
    ql = {
      functionName: "_gaPhoneImpl",
      ee: "ga_wpid",
      If: "www.gstatic.com/gaphone/loader.js",
    },
    rl = { Xh: "", Wi: "5" },
    sl = {
      functionName: "_googCallTrackingImpl",
      Xd: [ql.functionName, pl.functionName],
      If:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (rl.Xh || rl.Wi) +
        ".js",
    },
    tl = {},
    ul = function (a, b, c, d) {
      J(22);
      if (c) {
        d = d || {};
        var e = ol(pl, d, a),
          f = { ak: a, cl: b };
        void 0 === d.Xa && (f.autoreplace = c);
        e(2, d.Xa, f, c, 0, Ea(), d.options);
      }
    },
    vl = function (a, b, c, d) {
      J(21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Ea(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var g = a[f];
          tl[g.id] ||
            (g && "AW" === g.prefix && !e.adData && 2 <= g.K.length
              ? ((e.adData = { ak: g.K[0], cl: g.K[1] }), (tl[g.id] = !0))
              : g &&
                "UA" === g.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: g.T }), (tl[g.id] = !0)));
        }
        (e.gaData || e.adData) && ol(sl, d)(d.Xa, e, d.options);
      }
    },
    wl = function () {
      var a = !1;
      return a;
    },
    xl = function (a, b) {
      if (a)
        if (Vh()) {
        } else {
          if (h(a)) {
            var c = jl(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = R(b, N.g.Ci);
          if (f && ra(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var k = jl(f[g]);
              k &&
                (d.push(k),
                (a.id === k.id || (a.id === a.T && a.T === k.T)) && (e = !0));
            }
          }
          if (!d || e) {
            var m = R(b, N.g.zg),
              n;
            if (m) {
              ra(m) ? (n = m) : (n = [m]);
              var p = R(b, N.g.xg),
                q = R(b, N.g.yg),
                u = R(b, N.g.Ag),
                t = R(b, N.g.Bi),
                r = p || q,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var w = 0; w < n.length; w++)
                if (w < v)
                  if (d) vl(d, n[w], t, { Xa: r, options: u });
                  else if ("AW" === a.prefix && a.K[1])
                    wl()
                      ? vl([a], n[w], t || "US", { Xa: r, options: u })
                      : ul(a.K[0], a.K[1], n[w], { Xa: r, options: u });
                  else if ("UA" === a.prefix)
                    if (wl()) vl([a], n[w], t || "US", { Xa: r });
                    else {
                      var y = a.T,
                        x = n[w],
                        B = { Xa: r };
                      J(23);
                      if (x) {
                        B = B || {};
                        var A = ol(ql, B, y),
                          C = {};
                        void 0 !== B.Xa ? (C.receiver = B.Xa) : (C.replace = x);
                        C.ga_wpid = y;
                        C.destination = x;
                        A(2, Ea(), C);
                      }
                    }
            }
          }
        }
    };
  var yl = function (a, b, c) {
      this.target = a;
      this.eventName = b;
      this.h = c;
      this.m = {};
      this.metadata = G(c.eventMetadata || {});
      this.J = !1;
    },
    zl = function (a, b, c) {
      var d = R(a.h, b);
      void 0 !== d ? (a.m[b] = d) : void 0 !== c && (a.m[b] = c);
    },
    Al = function (a, b, c) {
      var d = ch(a.target.T);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Bl(a) {
    return {
      getDestinationId: function () {
        return a.target.T;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        return void (a.eventName = b);
      },
      getHitData: function (b) {
        return a.m[b];
      },
      setHitData: function (b, c) {
        return void (a.m[b] = c);
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.m[b] && (a.m[b] = c);
      },
      copyToHitData: function (b, c) {
        zl(a, b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        return void (a.metadata[b] = c);
      },
      abort: function () {
        return void (a.J = !0);
      },
      getProcessedEvent: function () {
        return a;
      },
      getFromEventContext: function (b) {
        return R(a.h, b);
      },
    };
  }
  var Sl = function (a, b, c, d, e, f, g, k, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.M = d;
      this.m = e;
      this.I = f;
      this.V = g;
      this.B = k;
      this.eventMetadata = m;
      this.R = n;
      this.P = p;
      this.F = q;
    },
    R = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.M[b]) return a.M[b];
      if (void 0 !== a.m[b]) return a.m[b];
      aj && Tl(a, a.I[b], a.V[b]) && (J(71), J(79));
      return void 0 !== a.I[b] ? a.I[b] : void 0 !== a.B[b] ? a.B[b] : c;
    },
    Ul = function (a) {
      function b(g) {
        for (var k = Object.keys(g), m = 0; m < k.length; ++m) c[k[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.M);
      b(a.m);
      b(a.I);
      if (aj)
        for (var d = Object.keys(a.V), e = 0; e < d.length; e++) {
          var f = d[e];
          if (
            "event" !== f &&
            "gtm" !== f &&
            "tagTypeBlacklist" !== f &&
            !c.hasOwnProperty(f)
          ) {
            J(71);
            J(80);
            break;
          }
        }
      return Object.keys(c);
    },
    Vl = function (a, b, c) {
      function d(m) {
        Zb(m) &&
          l(m, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.B[b]), d(a.I[b]), d(a.m[b]), d(a.M[b]));
      (c && 2 !== c) || d(a.h[b]);
      if (aj) {
        var g = f,
          k = e;
        e = {};
        f = !1;
        (c && 1 !== c) || (d(a.B[b]), d(a.V[b]), d(a.m[b]), d(a.M[b]));
        (c && 2 !== c) || d(a.h[b]);
        if (f !== g || Tl(a, e, k)) J(71), J(81);
        f = g;
        e = k;
      }
      return f ? e : void 0;
    },
    Wl = function (a) {
      var b = [N.g.sc, N.g.ud, N.g.vd, N.g.wd, N.g.xd, N.g.yd, N.g.zd],
        c = {},
        d = !1,
        e = function (k) {
          for (var m = 0; m < b.length; m++)
            void 0 !== k[b[m]] && ((c[b[m]] = k[b[m]]), (d = !0));
          return d;
        };
      if (e(a.h) || e(a.M) || e(a.m)) return c;
      e(a.I);
      if (aj) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.V);
        Tl(a, c, f) && (J(71), J(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.B);
      return c;
    },
    Tl = function (a, b, c) {
      if (!aj) return !1;
      try {
        if (b === c) return !1;
        var d = Xb(b);
        if (d !== Xb(c) || !((Zb(b) && Zb(c)) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (Tl(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b)
            if (!c.hasOwnProperty(g) || Tl(a, b[g], c[g])) return !0;
        }
      } catch (k) {
        J(72);
      }
      return !1;
    },
    Xl = function (a, b) {
      this.Ki = a;
      this.Li = b;
      this.I = {};
      this.Sg = {};
      this.h = {};
      this.M = {};
      this.m = {};
      this.Ic = {};
      this.B = {};
      this.jc = function () {};
      this.sb = function () {};
      this.V = !1;
    },
    Yl = function (a, b) {
      a.I = b;
      return a;
    },
    Zl = function (a, b) {
      a.Sg = b;
      return a;
    },
    $l = function (a, b) {
      a.h = b;
      return a;
    },
    am = function (a, b) {
      a.M = b;
      return a;
    },
    bm = function (a, b) {
      a.m = b;
      return a;
    },
    cm = function (a, b) {
      a.Ic = b;
      return a;
    },
    dm = function (a, b) {
      a.B = b || {};
      return a;
    },
    em = function (a, b) {
      a.jc = b;
      return a;
    },
    fm = function (a, b) {
      a.sb = b;
      return a;
    },
    gm = function (a) {
      a.V = !0;
      return a;
    },
    hm = function (a) {
      return new Sl(
        a.Ki,
        a.Li,
        a.I,
        a.Sg,
        a.h,
        a.M,
        a.m,
        a.Ic,
        a.B,
        a.jc,
        a.sb,
        a.V
      );
    };
  function mm() {
    return "attribution-reporting";
  }
  function nm(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var om = !1;
  function pm() {
    if (nm("join-ad-interest-group") && pa(Bb.joinAdInterestGroup)) return !0;
    om ||
      (ui(
        "A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (om = !0));
    return nm("join-ad-interest-group") && pa(Bb.joinAdInterestGroup);
  }
  function qm(a, b) {
    var c = void 0;
    try {
      c = D.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Fa() - d) {
        Ya("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          D.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          Ya("TAGGING", 10);
          return;
        }
      } catch (e) {}
    Kb(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Fa() },
      c
    );
  }
  function rm() {
    return Q(60)
      ? "https://td.doubleclick.net"
      : "https://googleads.g.doubleclick.net";
  }
  var sm = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    tm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    um = /^\d+\.fls\.doubleclick\.net$/,
    vm = /;gac=([^;?]+)/,
    wm = /;gacgb=([^;?]+)/,
    xm = /;gclaw=([^;?]+)/,
    ym = /;gclgb=([^;?]+)/;
  function zm(a, b) {
    if (um.test(D.location.host)) {
      var c = D.location.href.match(b);
      return c && 2 == c.length && c[1].match(sm)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], k = 0; k < g.length; k++) f.push(g[k].aa);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var Am = function (a, b, c) {
    var d = Gk() ? Ck("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var k = $k("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== k.length &&
          k.some(function (m) {
            return 1 === m;
          }));
      e.push(g + ":" + k.join(","));
    }
    return { zj: f ? e.join(";") : "", yj: zm(d, wm) };
  };
  function Bm(a, b, c) {
    if (um.test(D.location.host)) {
      var d = D.location.href.match(c);
      if (d && 2 == d.length && d[1].match(tm)) return [{ aa: d[1] }];
    } else return Ik((a || "_gcl") + b);
    return [];
  }
  var Cm = function (a) {
      return Bm(a, "_aw", xm)
        .map(function (b) {
          return b.aa;
        })
        .join(".");
    },
    Dm = function (a) {
      return Bm(a, "_gb", ym)
        .map(function (b) {
          return b.aa;
        })
        .join(".");
    },
    Em = function (a, b) {
      var c = $k(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var Fm = function () {
    if (pa(z.__uspapi)) {
      var a = "";
      try {
        z.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var rn = {
    D: {
      Lf: "ads_conversion_hit",
      te: "container_execute_start",
      Qf: "container_setup_end",
      ue: "container_setup_start",
      Pf: "container_execute_end",
      Rf: "container_yield_end",
      ve: "container_yield_start",
      Pg: "event_execute_end",
      Qg: "event_setup_end",
      Hc: "event_setup_start",
      Rg: "ga4_conversion_hit",
      Jc: "page_load",
      Ok: "pageview",
      nb: "snippet_load",
      eh: "tag_callback_error",
      fh: "tag_callback_failure",
      gh: "tag_callback_success",
      hh: "tag_execute_end",
      Wb: "tag_execute_start",
    },
  };
  var sn = !1,
    tn,
    un = "L S Y E TC HTC".split(" "),
    vn = ["S", "E"],
    wn = ["TS", "TE"];
  var Tn = function (a, b, c, d, e, f) {
      var g;
      g = void 0 === g ? !1 : g;
      var k = {};
      return k;
    },
    Un = function (a) {
      var b = !1;
      return b;
    },
    Vn = function (a, b) {},
    Wn = function () {
      var a = {};
      return a;
    },
    Mn = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    Xn = function () {},
    Yn = function (a, b, c) {},
    Zn = function (a) {
      Vb() && Vb().mark(S.C + "_" + a + "_start");
    },
    $n = function (a) {
      if (Vb()) {
        var b = Vb(),
          c = S.C + "_" + a + "_start",
          d = S.C + "_" + a + "_duration";
        b.measure(d, c);
        var e = Vb().getEntriesByName(d)[0];
        b.clearMarks(c);
        b.clearMeasures(d);
        var f = xe._p || {};
        void 0 === f[a] && ((f[a] = e.duration), (xe._p = f));
        return e.duration;
      }
    },
    ao = function () {
      var a = Tn("PAGEVIEW", S.C);
      if (En(a.Pa, "mark")[0]) {
        var b = Vb();
        b.clearMarks(a.Pa);
        b.clearMeasures("GTM-" + S.C + ":" + rn.D.Jc + ":to:PAGEVIEW");
      }
      var c = Tn(rn.D.Jc, S.C);
      Un(a) && Vn(a, c);
    };
  var bo = function (a, b) {
    var c,
      d = z.GooglebQhCsO;
    d || ((d = {}), (z.GooglebQhCsO = d));
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0;
  };
  var co = function (a, b) {
    var c = pi(a, "fmt");
    if (b) {
      var d = pi(a, "random"),
        e = pi(a, "label") || "";
      if (!d) return !1;
      var f = pk(
        decodeURIComponent(e.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(d.replace(/\+/g, " "))
      );
      if (!bo(f, b)) return !1;
    }
    c && 4 != c && (a = ri(a, "rfmt", c));
    var g = ri(a, "fmt", 4);
    Ib(
      g,
      function () {
        z.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((z.google_noFurtherRedirects = null), b());
      },
      void 0,
      void 0,
      D.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var to = function () {
      this.h = {};
    },
    uo = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    vo = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    xo = function (a, b, c, d) {};
  function zo(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return qd("" + c + b).href;
    }
  }
  function Ao() {
    return !!we.Vd && "SGTM_TOKEN" !== we.Vd.split("@@").join("");
  }
  var Co = function (a, b, c, d) {
      if (!Bo() && !bi(a)) {
        var e = c ? "/gtag/js" : "/gtm.js",
          f = "?id=" + encodeURIComponent(a) + "&l=" + we.ca,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        var k = Ao();
        k && (f += "&sign=" + we.Vd);
        var m = Fe || He ? zo(b, e + f) : void 0;
        if (!m) {
          var n = we.md + e;
          k &&
            Cb &&
            g &&
            (n = Cb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          m = ml("https://", "http://", n + f);
        }
        $h().container[a] = { state: 1, context: d };
        Ib(m);
      }
    },
    Do = function (a, b, c) {
      var d;
      if ((d = !Bo())) {
        var e = $h().destination[a];
        d = !(e && e.state);
      }
      if (d)
        if (ci())
          ($h().destination[a] = { state: 0, transportUrl: b, context: c }),
            J(91);
        else {
          var f =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            we.ca +
            "&cx=c";
          Ao() && (f += "&sign=" + we.Vd);
          var g = Fe || He ? zo(b, f) : void 0;
          g || (g = ml("https://", "http://", we.md + f));
          $h().destination[a] = { state: 1, context: c };
          Ib(g);
        }
    };
  function Bo() {
    if (Vh()) {
      return !0;
    }
    return !1;
  }
  var Eo = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Fo = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Go = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Ho =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    Ko = function (a) {
      var b = Ze("gtm.allowlist") || Ze("gtm.whitelist");
      b && J(9);
      De && (b = ["google", "gtagfl", "lcl", "zone"]);
      Io() &&
        (De ? J(116) : J(117),
        Jo &&
          ((b = []),
          window.console &&
            window.console.log &&
            window.console.log("GTM blocked. See go/13687728.")));
      var c = b && Ka(Ca(b), Fo),
        d = Ze("gtm.blocklist") || Ze("gtm.blacklist");
      d || ((d = Ze("tagTypeBlacklist")) && J(3));
      d ? J(8) : (d = []);
      Io() &&
        ((d = Ca(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ca(d).indexOf("google") && J(2);
      var e = d && Ka(Ca(d), Go),
        f = {};
      return function (g) {
        var k = g && g[bc.Na];
        if (!k || "string" != typeof k) return !0;
        k = k.replace(/^_*/, "");
        if (void 0 !== f[k]) return f[k];
        var m = Pe[k] || [],
          n = a(k, m);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(k))
                if (m && 0 < m.length)
                  for (var q = 0; q < m.length; q++) {
                    if (0 > c.indexOf(m[q])) {
                      J(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var u = !1;
        if (d) {
          var t = 0 <= e.indexOf(k);
          if (t) u = t;
          else {
            var r = va(e, m || []);
            r && J(10);
            u = r;
          }
        }
        var v = !n || u;
        v ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = va(e, Ho));
        return (f[k] = v);
      };
    },
    Jo = !1;
  var Io = function () {
    return Eo.test(z.location && z.location.hostname);
  };
  var Lo = { initialized: 11, complete: 12, interactive: 13 },
    Mo = {},
    No = Object.freeze(((Mo[N.g.Fa] = !0), Mo)),
    Oo =
      0 <= D.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= D.location.search.indexOf("&gtm_diagnostics="),
    Qo = function (a, b, c) {
      if (aj && "config" === a && !(1 < jl(b).K.length)) {
        var d,
          e = Db("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = G(c.I);
        G(c.h, f);
        var g = [],
          k;
        for (k in d) {
          var m = Po(d[k], f);
          m.length && (Oo && console.log(m), g.push(k));
        }
        if (g.length) {
          if (g.length) {
            var n = b + "*" + g.join(".");
            kj = kj ? kj + "!" + n : "&tdc=" + n;
          }
          Ya("TAGGING", Lo[D.readyState] || 14);
        }
        d[b] = f;
      }
    };
  function Ro(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Po(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, u) {
        var t = u[q];
        return void 0 === t ? No[q] : t;
      },
      f;
    for (f in Ro(a, b)) {
      var g = (d ? d + "." : "") + f,
        k = e(f, a),
        m = e(f, b),
        n = "object" === Xb(k) || "array" === Xb(k),
        p = "object" === Xb(m) || "array" === Xb(m);
      if (n && p) Po(k, m, c, g);
      else if (n || p || k !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  var So = !1,
    To = 0,
    Uo = [];
  function Vo(a) {
    if (!So) {
      var b = D.createEventObject,
        c = "complete" == D.readyState,
        d = "interactive" == D.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        So = !0;
        for (var e = 0; e < Uo.length; e++) F(Uo[e]);
      }
      Uo.push = function () {
        for (var f = 0; f < arguments.length; f++) F(arguments[f]);
        return 0;
      };
    }
  }
  function Wo() {
    if (!So && 140 > To) {
      To++;
      try {
        D.documentElement.doScroll("left"), Vo();
      } catch (a) {
        z.setTimeout(Wo, 50);
      }
    }
  }
  var Xo = function (a) {
    So ? a() : Uo.push(a);
  };
  var Yo = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: S.C,
    };
  };
  var $o = function (a, b) {
      this.h = !1;
      this.I = [];
      this.M = { tags: [] };
      this.V = !1;
      this.m = this.B = 0;
      Zo(this, a, b);
    },
    ap = function (a, b, c, d) {
      if (Ae.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Zb(d) && (e = G(d, e));
      e.id = c;
      e.status = "timeout";
      return a.M.tags.push(e) - 1;
    },
    bp = function (a, b, c, d) {
      var e = a.M.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    cp = function (a) {
      if (!a.h) {
        for (var b = a.I, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.I.length = 0;
      }
    },
    Zo = function (a, b, c) {
      void 0 !== b && dp(a, b);
      c &&
        z.setTimeout(function () {
          return cp(a);
        }, Number(c));
    },
    dp = function (a, b) {
      var c = Ha(function () {
        return F(function () {
          b(S.C, a.M);
        });
      });
      a.h ? c() : a.I.push(c);
    },
    ep = function (a) {
      a.B++;
      return Ha(function () {
        a.m++;
        a.V && a.m >= a.B && cp(a);
      });
    },
    fp = function (a) {
      a.V = !0;
      a.m >= a.B && cp(a);
    };
  var gp = {},
    hp = function () {
      return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject];
    },
    ip = !1;
  var jp = function (a) {
      z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
      var b = z.GoogleAnalyticsObject;
      if (z[b]) z.hasOwnProperty(b);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Ea());
        z[b] = c;
      }
      return z[b];
    },
    kp = function (a) {
      if (tf()) {
        var b = hp();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function lp() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var mp = function (a) {},
    np = function (a, b) {
      return function () {
        var c = hp(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              k = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", k, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  function Vp(a, b, c, d) {
    var e = Bc[a],
      f = Wp(a, b, c, d);
    if (!f) return null;
    var g = Kc(e[bc.dh], c, []);
    if (g && g.length) {
      var k = g[0];
      f = Vp(
        k.index,
        { R: f, P: 1 === k.sh ? b.terminate : f, terminate: b.terminate },
        c,
        d
      );
    }
    return f;
  }
  function Wp(a, b, c, d) {
    function e() {
      if (f[bc.Qi]) k();
      else {
        var w = Lc(f, c, []),
          y = w[bc.Yh];
        if (null != y)
          for (var x = 0; x < y.length; x++)
            if (!Qh(y[x])) {
              k();
              return;
            }
        var B = ap(c.Cb, String(f[bc.Na]), Number(f[bc.ob]), w[bc.Ri]),
          A = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!A) {
            A = !0;
            var E = Fa() - I;
            dk(c.id, Bc[a], "5", E);
            bp(c.Cb, B, "success", E);
            Q(70) && Yn(c, f, rn.D.gh);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!A) {
            A = !0;
            var E = Fa() - I;
            dk(c.id, Bc[a], "6", E);
            bp(c.Cb, B, "failure", E);
            Q(70) && Yn(c, f, rn.D.fh);
            k();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        dk(c.id, f, "1");
        var C = function () {
          var E = Fa() - I;
          dk(c.id, f, "7", E);
          bp(c.Cb, B, "exception", E);
          Q(70) && Yn(c, f, rn.D.eh);
          A || ((A = !0), k());
        };
        if (Q(70)) {
          var H = Tn(rn.D.Wb, S.C, c.id, Number(f[bc.ob]), c.name, Ti(f));
          Un(H);
        }
        var I = Fa();
        try {
          Jc(w, { event: c, index: a, type: 1 });
        } catch (E) {
          C(E);
        }
        Q(70) && Yn(c, f, rn.D.hh);
      }
    }
    var f = Bc[a],
      g = b.R,
      k = b.P,
      m = b.terminate;
    if (c.tf(f)) return null;
    var n = Kc(f[bc.ih], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Vp(p.index, { R: g, P: k, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      k = 2 === p.sh ? m : q;
    }
    if (f[bc.Yg] || f[bc.Ti]) {
      var u = f[bc.Yg] ? Cc : c.Ck,
        t = g,
        r = k;
      if (!u[a]) {
        e = Ha(e);
        var v = Xp(a, u, e);
        g = v.R;
        k = v.P;
      }
      return function () {
        u[a](t, r);
      };
    }
    return e;
  }
  function Xp(a, b, c) {
    var d = [],
      e = [];
    b[a] = Yp(d, e, c);
    return {
      R: function () {
        b[a] = Zp;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      P: function () {
        b[a] = $p;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Yp(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Zp(a) {
    a();
  }
  function $p(a, b) {
    b();
  }
  var bq = function (a, b) {
      return 1 === arguments.length ? aq("config", a) : aq("config", a, b);
    },
    cq = function (a, b, c) {
      c = c || {};
      c[N.g.Bb] = a;
      return aq("event", b, c);
    };
  function aq(a) {
    return arguments;
  }
  var dq = function () {
    this.h = [];
    this.m = [];
  };
  dq.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.m.length; f++)
      try {
        this.m[f](e);
      } catch (g) {}
  };
  dq.prototype.listen = function (a) {
    this.m.push(a);
  };
  dq.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  dq.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var fq = function (a, b, c) {
      eq().enqueue(a, b, c);
    },
    hq = function () {
      var a = gq;
      eq().listen(a);
    };
  function eq() {
    var a = xe.mb;
    a || ((a = new dq()), (xe.mb = a));
    return a;
  }
  var pq = function (a) {
      var b = xe.zones;
      return b
        ? b.getIsAllowedFn(Xh(), a)
        : function () {
            return !0;
          };
    },
    qq = function (a) {
      var b = xe.zones;
      return b ? b.isActive(Xh(), a) : !0;
    };
  var tq = function (a, b) {
    for (var c = [], d = 0; d < Bc.length; d++)
      if (a[d]) {
        var e = Bc[d];
        var f = ep(b.Cb);
        try {
          var g = Vp(d, { R: f, P: f, terminate: f }, b, d);
          if (g) {
            var k = c,
              m = k.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = Dc[p];
            m.call(k, {
              Nh: n,
              Fh: q ? q.priorityOverride || 0 : 0,
              execute: g,
            });
          } else rq(d, b), f();
        } catch (t) {
          f();
        }
      }
    c.sort(sq);
    for (var u = 0; u < c.length; u++) c[u].execute();
    return 0 < c.length;
  };
  function sq(a, b) {
    var c,
      d = b.Fh,
      e = a.Fh;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Nh,
        k = b.Nh;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function rq(a, b) {
    if (aj) {
      var c = function (d) {
        var e = b.tf(Bc[d]) ? "3" : "4",
          f = Kc(Bc[d][bc.dh], b, []);
        f && f.length && c(f[0].index);
        dk(b.id, Bc[d], e);
        var g = Kc(Bc[d][bc.ih], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var wq = !1,
    uq;
  var Bq = function (a) {
    var b = Fa(),
      c = a["gtm.uniqueEventId"],
      d = a["gtm.priorityId"],
      e = a.event;
    if (Q(70)) {
      var f = Tn(rn.D.Hc, S.C, c, void 0, e);
      Un(f);
    }
    if ("gtm.js" === e) {
      if (wq) return !1;
      wq = !0;
    }
    var m,
      n = !1;
    if (qq(c)) m = pq(c);
    else {
      if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
        return !1;
      n = !0;
      m = pq(Number.MAX_SAFE_INTEGER);
    }
    ck(c, e);
    var p = a.eventCallback,
      q = a.eventTimeout,
      u = {
        id: c,
        priorityId: d,
        name: e,
        tf: Ko(m),
        Ck: [],
        zh: function () {
          J(6);
          Ya("HEALTH", 0);
        },
        mh: xq(),
        nh: yq(c),
        Cb: new $o(function () {
          if (Q(70)) {
            var x = Tn(rn.D.Pg, S.C, c, void 0, e);
            if (Un(x)) {
              var B = Tn(rn.D.Hc, S.C, c, void 0, e);
              Vn(x, B);
            }
            if ("gtm.load" === e) {
              var A = Tn(rn.D.Pf, S.C);
              if (Un(A)) {
                var C = Tn(rn.D.te, S.C);
                Vn(A, C);
              }
              Xn();
            }
          }
          p && p.apply(p, [].slice.call(arguments, 0));
        }, q),
      },
      t = Pc(u);
    n && (t = zq(t));
    if (Q(70)) {
      var r = Tn(rn.D.Qg, S.C, c, void 0, e);
      if (Un(r)) {
        var v = Tn(rn.D.Hc, S.C, c, void 0, e);
        Vn(r, v);
      }
    }
    var w = tq(t, u),
      y = !1;
    fp(u.Cb);
    ("gtm.js" !== e && "gtm.sync" !== e) || mp(S.C);
    return Aq(t, w) || y;
  };
  function yq(a) {
    return function (b) {
      aj && (ac(b) || mk(a, "input", b));
    };
  }
  function xq() {
    var a = {};
    a.event = cf("event", 1);
    a.ecommerce = cf("ecommerce", 1);
    a.gtm = cf("gtm");
    a.eventModel = cf("eventModel");
    return a;
  }
  function zq(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(Bc[c][bc.Na]);
        if (ze[d] || void 0 !== Bc[c][bc.Ui] || Qe[d]) b[c] = !0;
        Q(58) ||
          (0 !== Bc[c][bc.Na].indexOf("__ccd") &&
            0 !== Bc[c][bc.Na].indexOf("__ogt") &&
            "__set_product_settings" !== Bc[c][bc.Na]) ||
          (b[c] = !0);
      }
    return b;
  }
  function Aq(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Bc[c] && !Ae[String(Bc[c][bc.Na])]) return !0;
    return !1;
  }
  var Dq = function (a, b, c, d) {
      Cq.push("event", [b, a], c, d);
    },
    Eq = function (a, b, c, d) {
      Cq.push("get", [a, b], c, d);
    },
    Fq = function () {
      this.status = 1;
      this.I = {};
      this.h = {};
      this.M = {};
      this.V = null;
      this.B = {};
      this.m = !1;
    },
    Gq = function (a, b, c, d) {
      var e = Fa();
      this.type = a;
      this.m = e;
      this.W = b || "";
      this.h = c;
      this.messageContext = d;
    },
    Hq = function () {
      this.m = {};
      this.B = {};
      this.h = [];
    },
    Iq = function (a, b) {
      var c = jl(b);
      return (a.m[c.T] = a.m[c.T] || new Fq());
    },
    Jq = function (a, b, c, d) {
      if (d.W) {
        var e = Iq(a, d.W),
          f = e.V;
        if (f) {
          var g = G(c),
            k = G(e.I[d.W]),
            m = G(e.B),
            n = G(e.h),
            p = G(a.B),
            q = {};
          if (aj)
            try {
              q = G(Ue);
            } catch (v) {
              J(72);
            }
          var u = jl(d.W).prefix,
            t = function (v) {
              lk(d.messageContext.eventId, u, v);
              var w = g[N.g.Ob];
              w && F(w);
            },
            r = hm(
              fm(
                em(
                  dm(
                    bm(
                      am(
                        cm(
                          $l(
                            Zl(
                              Yl(
                                new Xl(
                                  d.messageContext.eventId,
                                  d.messageContext.priorityId
                                ),
                                g
                              ),
                              k
                            ),
                            m
                          ),
                          n
                        ),
                        p
                      ),
                      q
                    ),
                    d.messageContext.eventMetadata
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("2");
                    }
                  }
                ),
                function () {
                  if (t) {
                    var v = t;
                    t = void 0;
                    v("3");
                  }
                }
              )
            );
          try {
            lk(d.messageContext.eventId, u, "1"),
              Qo(d.type, d.W, r),
              f(d.W, b, d.m, r);
          } catch (v) {
            lk(d.messageContext.eventId, u, "4");
          }
        }
      }
    };
  Hq.prototype.register = function (a, b, c) {
    var d = Iq(this, a);
    3 !== d.status &&
      ((d.V = b), (d.status = 3), c && (G(d.h, c), (d.h = c)), this.flush());
  };
  Hq.prototype.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!jl(c)) return;
      if (c) {
        var e = jl(c);
        e &&
          1 === Iq(this, c).status &&
          ((Iq(this, c).status = 2), this.push("require", [{}], e.T, {}));
      }
      Iq(this, c).m && (d.deferrable = !1);
    }
    this.h.push(new Gq(a, c, b, d));
    d.deferrable || this.flush();
  };
  Hq.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      var f = this.h[0];
      if (f.messageContext.deferrable)
        !f.W || Iq(this, f.W).m
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = Iq(this, f.W);
            if (3 !== g.status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            l(f.h[0], function (u, t) {
              G(La(u, t), b.B);
            });
            break;
          case "config":
            g = Iq(this, f.W);
            e.ab = {};
            l(
              f.h[0],
              (function (u) {
                return function (t, r) {
                  G(La(t, r), u.ab);
                };
              })(e)
            );
            var k = !!e.ab[N.g.Gc];
            delete e.ab[N.g.Gc];
            var m = jl(f.W),
              n = m.T === m.id;
            k || (n ? (g.B = {}) : (g.I[f.W] = {}));
            (g.m && k) || Jq(this, N.g.xa, e.ab, f);
            g.m = !0;
            n ? G(e.ab, g.B) : (G(e.ab, g.I[f.W]), J(70));
            d = !0;
            break;
          case "event":
            g = Iq(this, f.W);
            e.fd = {};
            l(
              f.h[0],
              (function (u) {
                return function (t, r) {
                  G(La(t, r), u.fd);
                };
              })(e)
            );
            Jq(this, f.h[1], e.fd, f);
            break;
          case "get":
            g = Iq(this, f.W);
            var p = {},
              q = ((p[N.g.Ua] = f.h[0]), (p[N.g.jb] = f.h[1]), p);
            Jq(this, N.g.Ca, q, f);
        }
        this.h.shift();
        Kq(this, f);
      }
      e = { ab: e.ab, fd: e.fd };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var Kq = function (a, b) {
      if ("require" !== b.type)
        if (b.W)
          for (var c = Iq(a, b.W).M[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.m)
            if (a.m.hasOwnProperty(e)) {
              var f = a.m[e];
              if (f && f.M)
                for (var g = f.M[b.type] || [], k = 0; k < g.length; k++)
                  g[k]();
            }
    },
    Lq = function (a, b) {
      var c = Cq,
        d = G(b);
      G(Iq(c, a).h, d);
      Iq(c, a).h = d;
    },
    Cq = new Hq();
  var Mq = {},
    Nq = {},
    Oq = function (a) {
      for (
        var b = [], c = [], d = {}, e = 0;
        e < a.length;
        d = { ld: d.ld, hd: d.hd }, e++
      ) {
        var f = a[e];
        if (0 <= f.indexOf("-"))
          (d.ld = jl(f)),
            d.ld &&
              (sa(
                Yh(),
                (function (p) {
                  return function (q) {
                    return p.ld.T === q;
                  };
                })(d)
              )
                ? b.push(f)
                : c.push(f));
        else {
          var g = Mq[f] || [];
          d.hd = {};
          g.forEach(
            (function (p) {
              return function (q) {
                return (p.hd[q] = !0);
              };
            })(d)
          );
          for (var k = Xh(), m = 0; m < k.length; m++)
            if (d.hd[k[m]]) {
              b = b.concat(Yh());
              break;
            }
          var n = Nq[f] || [];
          n.length && (b = b.concat(n));
        }
      }
      return { Yj: b, bk: c };
    },
    Pq = function (a) {
      l(Mq, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Qq = function (a) {
      l(Nq, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Rq = "HA GF G UA AW DC MC".split(" "),
    Sq = !1,
    Tq = !1;
  function Uq(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Re() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var Vq = {
      config: function (a, b) {
        var c = Uq(a, b);
        if (!(2 > a.length) && h(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !Zb(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = jl(a[1]);
          if (e) {
            ck(c.eventId, "gtag.config");
            var f = e.T,
              g = e.id !== f;
            if (g ? -1 === Yh().indexOf(f) : -1 === Xh().indexOf(f)) {
              if (!Q(61) || !d[N.g.Md]) {
                var k = d[N.g.ma] || Cq.B[N.g.ma];
                g
                  ? Do(f, k, {
                      source: 2,
                      fromContainerExecution: b.fromContainerExecution,
                    })
                  : Co(f, k, !0, {
                      source: 2,
                      fromContainerExecution: b.fromContainerExecution,
                    });
              }
            } else {
              if (Ce && !g && !d[N.g.Gc]) {
                var m = Tq;
                Tq = !0;
                if (m) return;
              }
              Sq || J(43);
              if (!b.noTargetGroup)
                if (g) {
                  Qq(e.id);
                  var n = e.id,
                    p = d[N.g.Kd] || "default";
                  p = String(p).split(",");
                  for (var q = 0; q < p.length; q++) {
                    var u = Nq[p[q]] || [];
                    Nq[p[q]] = u;
                    0 > u.indexOf(n) && u.push(n);
                  }
                } else {
                  Pq(e.id);
                  var t = e.id,
                    r = d[N.g.Kd] || "default";
                  r = r.toString().split(",");
                  for (var v = 0; v < r.length; v++) {
                    var w = Mq[r[v]] || [];
                    Mq[r[v]] = w;
                    0 > w.indexOf(t) && w.push(t);
                  }
                }
              delete d[N.g.Kd];
              var y = b.eventMetadata || {};
              y.hasOwnProperty("is_external_event") ||
                (y.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = y;
              delete d[N.g.Ob];
              for (var x = g ? [e.id] : Yh(), B = 0; B < x.length; B++) {
                var A = G(b);
                Cq.push("config", [d], x[B], A);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          J(39);
          var c = Uq(a, b),
            d = a[1];
          "default" === d ? Oh(a[2]) : "update" === d && Ph(a[2], c);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && h(c)) {
          var d;
          if (2 < a.length) {
            if ((!Zb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = G(e)),
            e[N.g.Ob] && (g.eventCallback = e[N.g.Ob]),
            e[N.g.Fd] && (g.eventTimeout = e[N.g.Fd]));
          var k = Uq(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            u = q && q[N.g.Bb];
          void 0 === u &&
            ((u = Ze(N.g.Bb, 2)), void 0 === u && (u = "default"));
          if (h(u) || ra(u)) {
            var t = u.toString().replace(/\s+/g, "").split(","),
              r = Oq(t),
              v = r.Yj,
              w = r.bk;
            if (w.length)
              for (
                var y = (q && q[N.g.ma]) || Cq.B[N.g.ma], x = 0;
                x < w.length;
                x++
              ) {
                var B = jl(w[x]);
                B &&
                  Do(B.T, y, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = ll(v);
          } else p = void 0;
          var A = p;
          if (A) {
            ck(m, c);
            for (var C = [], H = 0; H < A.length; H++) {
              var I = A[H],
                E = G(b);
              if (-1 !== Rq.indexOf(I.prefix)) {
                var K = G(d),
                  M = E.eventMetadata || {};
                M.hasOwnProperty("is_external_event") ||
                  (M.is_external_event = !E.fromContainerExecution);
                E.eventMetadata = M;
                delete K[N.g.Ob];
                Dq(c, K, I.id, E);
              }
              C.push(I.id);
            }
            g.eventModel = g.eventModel || {};
            0 < A.length
              ? (g.eventModel[N.g.Bb] = C.join())
              : delete g.eventModel[N.g.Bb];
            Sq || J(43);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        J(53);
        if (4 === a.length && h(a[1]) && h(a[2]) && pa(a[3])) {
          var c = jl(a[1]),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Sq || J(43);
            var f = Cq.B[N.g.ma];
            if (
              !sa(Yh(), function (k) {
                return c.T === k;
              })
            )
              Do(c.T, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== Rq.indexOf(c.prefix)) {
              Uq(a, b);
              var g = {};
              Kh(G(((g[N.g.Ua] = d), (g[N.g.jb] = e), g)));
              Eq(
                d,
                function (k) {
                  F(function () {
                    return e(k);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Sq = !0;
          var c = Uq(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && Zb(a[1])
          ? (c = G(a[1]))
          : 3 == a.length &&
            h(a[1]) &&
            ((c = {}),
            Zb(a[2]) || ra(a[2]) ? (c[a[1]] = G(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = Uq(a, b),
            e = d.eventId,
            f = d.priorityId;
          G(c);
          var g = G(c);
          Cq.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          Q(30) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    Wq = { policy: !0 };
  var Xq = function (a) {
      var b = z[we.ca].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    Yq = function (a) {
      var b = z[we.ca],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Zq = !1,
    $q = [];
  function ar() {
    if (!Zq) {
      Zq = !0;
      for (var a = 0; a < $q.length; a++) F($q[a]);
    }
  }
  var br = function (a) {
    Zq ? F(a) : $q.push(a);
  };
  var sr = function (a) {
    if (rr(a)) return a;
    this.h = a;
  };
  sr.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var rr = function (a) {
    return !a || "object" !== Xb(a) || Zb(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  sr.prototype.getUntrustedMessageValue = sr.prototype.getUntrustedMessageValue;
  var tr = 0,
    ur = {},
    vr = [],
    wr = [],
    xr = !1,
    yr = !1;
  function zr(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Ar = function (a) {
      return z[we.ca].push(a);
    },
    Br = function (a, b) {
      var c = xe[we.ca],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = z.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (z.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function Cr(a, b) {
    var c = a._clear || b.overwriteModelFields;
    l(a, function (e, f) {
      "_clear" !== e && (c && bf(e), bf(e, f));
    });
    Me || (Me = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = Re()), (a["gtm.uniqueEventId"] = d), bf("gtm.uniqueEventId", d));
    return Bq(a);
  }
  function Dr(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (ya(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function Er() {
    var a;
    if (wr.length) a = wr.shift();
    else if (vr.length) a = vr.shift();
    else return;
    var b;
    var c = a;
    if (xr || !Dr(c.message)) b = c;
    else {
      xr = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Re());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        k = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      vr.unshift(k, c);
      if (aj && S.C) {
        var m;
        if (S.Ze) {
          var n = S.C,
            p = $h().destination[n];
          m = p && p.context;
        } else {
          var q = S.C,
            u = $h().container[q];
          m = u && u.context;
        }
        var t = m,
          r,
          v = qd(z.location.href);
        r = v.hostname + v.pathname;
        var w = t && t.fromContainerExecution,
          y = t && t.source,
          x = S.C,
          B = S.Ra,
          A = S.Ze;
        mj || (mj = r);
        lj.push(
          x + ";" + B + ";" + (w ? 1 : 0) + ";" + (y || 0) + ";" + (A ? 1 : 0)
        );
      }
      b = f;
    }
    return b;
  }
  function Fr() {
    for (var a = !1, b; !yr && (b = Er()); ) {
      yr = !0;
      delete Ue.eventModel;
      Ye();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) yr = !1;
      else {
        if (e.fromContainerExecution)
          for (
            var f = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              g = 0;
            g < f.length;
            g++
          ) {
            var k = f[g],
              m = Ze(k, 1);
            if (ra(m) || Zb(m)) m = G(m);
            Xe[k] = m;
          }
        try {
          if (pa(d))
            try {
              d.call($e);
            } catch (C) {}
          else if (ra(d)) {
            var n = d;
            if (h(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                u = n.slice(1),
                t = Ze(p.join("."), 2);
              if (null != t)
                try {
                  t[q].apply(t, u);
                } catch (C) {}
            }
          } else {
            var r = void 0,
              v = !1;
            if (ya(d)) {
              a: {
                if (d.length && h(d[0])) {
                  var w = Vq[d[0]];
                  if (w && (!e.fromContainerExecution || !Wq[d[0]])) {
                    r = w(d, e);
                    break a;
                  }
                }
                r = void 0;
              }
              (v = r && "set" === d[0] && !!r.event) && J(101);
            } else r = d;
            if (r) {
              var y = Cr(r, e);
              a = y || a;
              v && y && J(113);
            }
          }
        } finally {
          e.fromContainerExecution && Ye(!0);
          var x = d["gtm.uniqueEventId"];
          if ("number" === typeof x) {
            for (var B = ur[String(x)] || [], A = 0; A < B.length; A++)
              wr.push(Gr(B[A]));
            B.length && wr.sort(zr);
            delete ur[String(x)];
            x > tr && (tr = x);
          }
          yr = !1;
        }
      }
    }
    return !a;
  }
  function Hr() {
    if (Q(70)) {
      var b = Tn(rn.D.te, S.C);
      Un(b);
      if (Ir()) {
        var c = Tn(rn.D.Rf, S.C);
        if (Un(c)) {
          var d = Tn(rn.D.ve, S.C);
          Vn(c, d);
        }
      }
    }
    var e = Fr();
    try {
      Xq(S.C);
    } catch (f) {}
    return e;
  }
  function gq(a) {
    if (tr < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      ur[b] = ur[b] || [];
      ur[b].push(a);
    } else
      wr.push(Gr(a)),
        wr.sort(zr),
        F(function () {
          yr || Fr();
        });
  }
  function Gr(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Jr = function () {
      function a(g) {
        var k = {};
        if (rr(g)) {
          var m = g;
          g = rr(m) ? m.getUntrustedMessageValue() : void 0;
          k.fromContainerExecution = !0;
        }
        return { message: g, messageContext: k };
      }
      var b = Db(we.ca, []),
        c = (xe[we.ca] = xe[we.ca] || {});
      !0 === c.pruned && J(83);
      ur = eq().get();
      hq();
      Xo(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var g = {};
          b.push(((g.event = "gtm.dom"), g));
        }
      });
      br(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var g = {};
          b.push(((g.event = "gtm.load"), g));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var g;
        if (0 < xe.SANDBOXED_JS_SEMAPHORE) {
          g = [];
          for (var k = 0; k < arguments.length; k++)
            g[k] = new sr(arguments[k]);
        } else g = [].slice.call(arguments, 0);
        var m = g.map(function (u) {
          return a(u);
        });
        vr.push.apply(vr, m);
        var n = d.apply(b, g),
          p = Math.max(100, Number("1000") || 300);
        if (this.length > p)
          for (J(4), c.pruned = !0; this.length > p; ) this.shift();
        var q = "boolean" !== typeof n || n;
        return Fr() && q;
      };
      var e = b.slice(0).map(function (g) {
        return a(g);
      });
      vr.push.apply(vr, e);
      if (Ir()) {
        if (Q(70)) {
          var f = Tn(rn.D.ve, S.C);
          Un(f);
        }
        F(Hr);
      }
    },
    Ir = function () {
      var a = !0;
      return a;
    };
  function Kr(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Fa();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Lr(a) {
    return a && 0 === a.indexOf("pending:") ? Kr(a.substr(8)) : !1;
  }
  var Gc = {};
  Gc.Rd = new String("undefined");
  var ls = z.clearTimeout,
    ms = z.setTimeout,
    T = function (a, b, c, d) {
      if (Vh()) {
        b && F(b);
      } else return Ib(a, b, c, d);
    },
    ns = function () {
      return new Date();
    },
    os = function () {
      return z.location.href;
    },
    ps = function (a) {
      return od(qd(a), "fragment");
    },
    qs = function (a) {
      return pd(qd(a));
    },
    rs = function (a, b) {
      return Ze(a, b || 2);
    },
    ss = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Ar(a)))
        : (d = Ar(a));
      return d;
    },
    ts = function (a, b) {
      z[a] = b;
    },
    W = function (a, b, c) {
      b && (void 0 === z[a] || (c && !z[a])) && (z[a] = b);
      return z[a];
    },
    us = function (a, b, c) {
      return Gf(a, b, void 0 === c ? !0 : !!c);
    },
    vs = function (a, b, c) {
      return 0 === Pf(a, b, c);
    },
    ws = function (a, b) {
      if (Vh()) {
        b && F(b);
      } else Kb(a, b);
    },
    xs = function (a) {
      return !!Sr(a, "init", !1);
    },
    ys = function (a) {
      Qr(a, "init", !0);
    },
    zs = function (a, b, c) {
      aj && (ac(a) || mk(c, b, a));
    };
  function Xs(a) {
    return Ys(a) ? 1 : 0;
  }
  function Ys(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = G(a, {});
        G({ arg1: c[d], any_of: void 0 }, e);
        if (Xs(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < td.length; g++) {
                var k = td[g];
                if (b[k]) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return ud(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return wd(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return xd(b, c);
    }
    return !1;
  }
  $g();
  Object.freeze({ dl: 1, id: 1 });
  Object.freeze(["config", "event", "get", "set"]);
  function vt() {
    return (z.gaGlobal = z.gaGlobal || {});
  }
  var wt = function () {
      var a = vt();
      a.hid = a.hid || ta();
      return a.hid;
    },
    xt = function (a, b) {
      var c = vt();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var Tt = function () {
      var a = !0;
      (Si(7) && Si(9) && Si(10)) || (a = !1);
      return a;
    },
    Ut = function () {
      var a = !0;
      (Si(3) && Si(4)) || (a = !1);
      return a;
    };
  var uu = window,
    vu = document,
    wu = function (a) {
      var b = uu._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === uu["ga-disable-" + a]))
        return !0;
      try {
        var c = uu.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Af("AMP_TOKEN", String(vu.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return vu.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function Eu(a) {
    l(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[N.g.Ga] || {};
    l(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var Ou = function (a, b) {};
  function Nu(a, b) {
    var c = function () {};
    return c;
  }
  function Pu(a, b, c) {}
  var xv = function (a, b) {
      if (!b.F) {
        var c = R(b, N.g.Ua),
          d = R(b, N.g.jb),
          e = R(b, c);
        if (void 0 === e) {
          var f = void 0;
          uv.hasOwnProperty(c)
            ? (f = uv[c])
            : vv.hasOwnProperty(c) && (f = vv[c]);
          1 === f && (f = wv(c));
          h(f)
            ? hp()(function () {
                var g = hp().getByName(a).get(f);
                d(g);
              })
            : d(void 0);
        } else d(e);
      }
    },
    yv = function (a, b) {
      var c = a[N.g.Sb],
        d = b + ".",
        e = a[N.g.N] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        g = !!a[N.g.yb];
      e = String(e).replace(/\s+/g, "").split(",");
      var k = hp();
      k(d + "require", "linker");
      k(d + "linker:autoLink", e, f, g);
    },
    Cv = function (a, b, c) {
      if (tf() && (!c.F || !zv[a])) {
        var d = !Qh(N.g.O),
          e = function (f) {
            var g,
              k,
              m = hp(),
              n = Av(b, "", c),
              p,
              q = n.createOnlyFields._useUp;
            if (c.F || Bv(b, n.createOnlyFields)) {
              c.F &&
                ((g = "gtm" + Re()),
                (k = n.createOnlyFields),
                n.gtmTrackerName && (k.name = g));
              m(function () {
                var t = m.getByName(b);
                t && (p = t.get("clientId"));
                c.F || m.remove(b);
              });
              m("create", a, c.F ? k : n.createOnlyFields);
              d &&
                Qh(N.g.O) &&
                ((d = !1),
                m(function () {
                  var t = hp().getByName(c.F ? g : b);
                  !t ||
                    (t.get("clientId") == p && q) ||
                    (c.F
                      ? ((n.fieldsToSet["&gcu"] = "1"),
                        (n.fieldsToSet["&gcut"] = te[f]))
                      : ((n.fieldsToSend["&gcu"] = "1"),
                        (n.fieldsToSend["&gcut"] = te[f])),
                    t.set(n.fieldsToSet),
                    c.F
                      ? t.send("pageview")
                      : t.send("pageview", n.fieldsToSend));
                }));
              c.F &&
                m(function () {
                  m.remove(g);
                });
            }
          };
        Sh(function () {
          return e(N.g.O);
        }, N.g.O);
        Sh(function () {
          return e(N.g.H);
        }, N.g.H);
        c.F && (zv[a] = !0);
      }
    },
    Dv = function (a, b) {
      Ao() && b && (a[N.g.xb] = b);
    },
    Mv = function (a, b, c) {
      function d() {
        var E = R(c, N.g.yc);
        k(function () {
          if (!c.F && Zb(E)) {
            var K = r.fieldsToSend,
              M = m().getByName(n),
              U;
            for (U in E)
              if (
                E.hasOwnProperty(U) &&
                /^(dimension|metric)\d+$/.test(U) &&
                void 0 != E[U]
              ) {
                var fa = M.get(wv(E[U]));
                Ev(K, U, fa);
              }
          }
        });
      }
      function e() {
        if (r.displayfeatures) {
          var E = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, { cookieName: E });
        }
      }
      var f = a,
        g = "https://www.google-analytics.com/analytics.js",
        k = c.F ? jp(R(c, "gaFunctionName")) : jp();
      if (pa(k)) {
        var m = hp,
          n;
        c.F
          ? (n = R(c, "name") || R(c, "gtmTrackerName"))
          : (n = "gtag_" + f.split("-").join("_"));
        var p = function (E) {
            var K = [].slice.call(arguments, 0);
            K[0] = n ? n + "." + K[0] : "" + K[0];
            k.apply(window, K);
          },
          q = function (E) {
            var K = function (da, Y) {
                for (var V = 0; Y && V < Y.length; V++) p(da, Y[V]);
              },
              M = c.F,
              U = M ? Fv(r) : Gv(b, c);
            if (U) {
              var fa = {};
              Dv(fa, E);
              p("require", "ec", "ec.js", fa);
              M && U.hf && p("set", "&cu", U.hf);
              var L = U.action;
              if (M || "impressions" === L)
                if ((K("ec:addImpression", U.xh), !M)) return;
              if ("promo_click" === L || "promo_view" === L || (M && U.ad)) {
                var O = U.ad;
                K("ec:addPromo", O);
                if (O && 0 < O.length && "promo_click" === L) {
                  M ? p("ec:setAction", L, U.Oa) : p("ec:setAction", L);
                  return;
                }
                if (!M) return;
              }
              "promo_view" !== L &&
                "impressions" !== L &&
                (K("ec:addProduct", U.Eb), p("ec:setAction", L, U.Oa));
            }
          },
          u = function (E) {
            if (E) {
              var K = {};
              if (Zb(E))
                for (var M in Hv) Hv.hasOwnProperty(M) && Iv(Hv[M], M, E[M], K);
              Dv(K, y);
              p("require", "linkid", K);
            }
          },
          t = function () {
            if (Vh()) {
            } else {
              var E = R(c, N.g.Ai);
              E &&
                (p("require", E, { dataLayer: we.ca }), p("require", "render"));
            }
          },
          r = Av(n, b, c),
          v = function (E, K, M) {
            M && (K = "" + K);
            r.fieldsToSend[E] = K;
          };
        !c.F &&
          Bv(n, r.createOnlyFields) &&
          (k(function () {
            m() && m().remove(n);
          }),
          (Jv[n] = !1));
        k("create", f, r.createOnlyFields);
        if (r.createOnlyFields[N.g.xb] && !c.F) {
          var w =
            Fe || He ? zo(r.createOnlyFields[N.g.xb], "/analytics.js") : void 0;
          w && (g = w);
        }
        var y = c.F ? r.fieldsToSet[N.g.xb] : r.createOnlyFields[N.g.xb];
        if (y) {
          var x = c.F ? r.fieldsToSet[N.g.Hd] : r.createOnlyFields[N.g.Hd];
          x && !Jv[n] && ((Jv[n] = !0), k(np(n, x)));
        }
        c.F
          ? r.enableRecaptcha && p("require", "recaptcha", "recaptcha.js")
          : (d(), u(r.linkAttribution));
        var B = r[N.g.qa];
        B && B[N.g.N] && yv(B, n);
        p("set", r.fieldsToSet);
        if (c.F) {
          if (r.enableLinkId) {
            var A = {};
            Dv(A, y);
            p("require", "linkid", "linkid.js", A);
          }
          tf() && Cv(f, n, c);
        }
        if (b === N.g.qc)
          if (c.F) {
            e();
            if (r.remarketingLists) {
              var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", { cookieName: C });
            }
            q(y);
            p("send", "pageview");
            r.createOnlyFields._useUp && kp(n + ".");
          } else t(), p("send", "pageview", r.fieldsToSend);
        else
          b === N.g.xa
            ? (t(),
              xl(f, c),
              R(c, N.g.lb) && (Zk(["aw", "dc"]), kp(n + ".")),
              0 != r.sendPageView && p("send", "pageview", r.fieldsToSend),
              Cv(f, n, c))
            : b === N.g.Ca
            ? xv(n, c)
            : "screen_view" === b
            ? p("send", "screenview", r.fieldsToSend)
            : "timing_complete" === b
            ? ((r.fieldsToSend.hitType = "timing"),
              v("timingCategory", r.eventCategory, !0),
              c.F
                ? v("timingVar", r.timingVar, !0)
                : v("timingVar", r.name, !0),
              v("timingValue", Aa(r.value)),
              void 0 !== r.eventLabel && v("timingLabel", r.eventLabel, !0),
              p("send", r.fieldsToSend))
            : "exception" === b
            ? p("send", "exception", r.fieldsToSend)
            : ("" === b && c.F) ||
              ("track_social" === b && c.F
                ? ((r.fieldsToSend.hitType = "social"),
                  v("socialNetwork", r.socialNetwork, !0),
                  v("socialAction", r.socialAction, !0),
                  v("socialTarget", r.socialTarget, !0))
                : ((c.F || Kv[b]) && q(y),
                  c.F && e(),
                  (r.fieldsToSend.hitType = "event"),
                  v("eventCategory", r.eventCategory, !0),
                  v("eventAction", r.eventAction || b, !0),
                  void 0 !== r.eventLabel && v("eventLabel", r.eventLabel, !0),
                  void 0 !== r.value && v("eventValue", Aa(r.value))),
              p("send", r.fieldsToSend));
        if (!Lv && !c.F) {
          Lv = !0;
          var H = function () {
              c.P();
            },
            I = function () {
              m().loaded || H();
            };
          Vh() ? F(I) : Ib(g, I, H);
        }
      } else F(c.P);
    },
    Nv = function (a, b, c, d) {
      Th(
        function () {
          Mv(a, b, d);
        },
        [N.g.O, N.g.H]
      );
    },
    Pv = function (a) {
      function b(e) {
        function f(k, m) {
          for (var n = 0; n < m.length; n++) {
            var p = m[n];
            if (e[p]) {
              g[k] = e[p];
              break;
            }
          }
        }
        var g = G(e);
        f("id", ["id", "item_id", "promotion_id"]);
        f("name", ["name", "item_name", "promotion_name"]);
        f("brand", ["brand", "item_brand"]);
        f("variant", ["variant", "item_variant"]);
        f("list", ["list_name", "item_list_name"]);
        f("position", ["list_position", "creative_slot", "index"]);
        (function () {
          if (e.category) g.category = e.category;
          else {
            for (var k = "", m = 0; m < Ov.length; m++)
              void 0 !== e[Ov[m]] && (k && (k += "/"), (k += e[Ov[m]]));
            k && (g.category = k);
          }
        })();
        f("listPosition", ["list_position"]);
        f("creative", ["creative_name"]);
        f("list", ["list_name"]);
        f("position", ["list_position", "creative_slot"]);
        return g;
      }
      for (var c = [], d = 0; a && d < a.length; d++)
        a[d] && Zb(a[d]) && c.push(b(a[d]));
      return c.length ? c : void 0;
    },
    Qv = function (a) {
      return Qh(a);
    },
    Rv = !1;
  var Lv,
    Jv = {},
    zv = {},
    Sv = {},
    uv = Object.freeze(
      ((Sv.client_storage = "storage"),
      (Sv.sample_rate = 1),
      (Sv.site_speed_sample_rate = 1),
      (Sv.store_gac = 1),
      (Sv.use_amp_client_id = 1),
      (Sv[N.g.fb] = 1),
      (Sv[N.g.oa] = "storeGac"),
      (Sv[N.g.hb] = 1),
      (Sv[N.g.Ja] = 1),
      (Sv[N.g.ib] = 1),
      (Sv[N.g.wc] = 1),
      (Sv[N.g.Ae] = 1),
      (Sv[N.g.Nb] = 1),
      Sv)
    ),
    Tv = {},
    Uv = Object.freeze(
      ((Tv._cs = 1),
      (Tv._useUp = 1),
      (Tv.allowAnchor = 1),
      (Tv.allowLinker = 1),
      (Tv.alwaysSendReferrer = 1),
      (Tv.clientId = 1),
      (Tv.cookieDomain = 1),
      (Tv.cookieExpires = 1),
      (Tv.cookieFlags = 1),
      (Tv.cookieName = 1),
      (Tv.cookiePath = 1),
      (Tv.cookieUpdate = 1),
      (Tv.legacyCookieDomain = 1),
      (Tv.legacyHistoryImport = 1),
      (Tv.name = 1),
      (Tv.sampleRate = 1),
      (Tv.siteSpeedSampleRate = 1),
      (Tv.storage = 1),
      (Tv.storeGac = 1),
      (Tv.useAmpClientId = 1),
      (Tv._cd2l = 1),
      Tv)
    ),
    Vv = Object.freeze({ anonymize_ip: 1 }),
    Wv = {},
    vv = Object.freeze(
      ((Wv.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword",
      }),
      (Wv.app_id = 1),
      (Wv.app_installer_id = 1),
      (Wv.app_name = 1),
      (Wv.app_version = 1),
      (Wv.description = "exDescription"),
      (Wv.fatal = "exFatal"),
      (Wv.language = 1),
      (Wv.page_hostname = "hostname"),
      (Wv.transport_type = "transport"),
      (Wv[N.g.la] = "currencyCode"),
      (Wv[N.g.ug] = 1),
      (Wv[N.g.Ea] = "location"),
      (Wv[N.g.Cc] = "page"),
      (Wv[N.g.La] = "referrer"),
      (Wv[N.g.Tb] = "title"),
      (Wv[N.g.Cg] = 1),
      (Wv[N.g.ra] = 1),
      Wv)
    ),
    Xv = {},
    Yv = Object.freeze(
      ((Xv.content_id = 1),
      (Xv.event_action = 1),
      (Xv.event_category = 1),
      (Xv.event_label = 1),
      (Xv.link_attribution = 1),
      (Xv.name = 1),
      (Xv[N.g.qa] = 1),
      (Xv[N.g.sg] = 1),
      (Xv[N.g.Fa] = 1),
      (Xv[N.g.ja] = 1),
      Xv)
    ),
    Zv = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }),
    Ov = Object.freeze([
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ]),
    $v = {},
    Hv = Object.freeze(
      (($v.levels = 1), ($v[N.g.Ja] = "duration"), ($v[N.g.wc] = 1), $v)
    ),
    aw = {},
    bw = Object.freeze(
      ((aw.anonymize_ip = 1),
      (aw.fatal = 1),
      (aw.send_page_view = 1),
      (aw.store_gac = 1),
      (aw.use_amp_client_id = 1),
      (aw[N.g.oa] = 1),
      (aw[N.g.ug] = 1),
      aw)
    ),
    Iv = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (bw[b] && (c = Ba(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[wv(b)] = c;
        else if (h(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    wv = function (a) {
      return a && h(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    cw = {},
    Kv = Object.freeze(
      ((cw.checkout_progress = 1),
      (cw.select_content = 1),
      (cw.set_checkout_option = 1),
      (cw[N.g.kc] = 1),
      (cw[N.g.mc] = 1),
      (cw[N.g.Kb] = 1),
      (cw[N.g.nc] = 1),
      (cw[N.g.tb] = 1),
      (cw[N.g.Lb] = 1),
      (cw[N.g.ub] = 1),
      (cw[N.g.Aa] = 1),
      (cw[N.g.oc] = 1),
      (cw[N.g.Ba] = 1),
      cw)
    ),
    dw = {},
    ew = Object.freeze(
      ((dw.checkout_progress = 1),
      (dw.set_checkout_option = 1),
      (dw[N.g.Xf] = 1),
      (dw[N.g.Yf] = 1),
      (dw[N.g.kc] = 1),
      (dw[N.g.mc] = 1),
      (dw[N.g.Zf] = 1),
      (dw[N.g.Kb] = 1),
      (dw[N.g.Aa] = 1),
      (dw[N.g.oc] = 1),
      (dw[N.g.ag] = 1),
      dw)
    ),
    fw = {},
    gw = Object.freeze(
      ((fw.generate_lead = 1),
      (fw.login = 1),
      (fw.search = 1),
      (fw.select_content = 1),
      (fw.share = 1),
      (fw.sign_up = 1),
      (fw.view_search_results = 1),
      (fw[N.g.nc] = 1),
      (fw[N.g.tb] = 1),
      (fw[N.g.Lb] = 1),
      (fw[N.g.ub] = 1),
      (fw[N.g.Ba] = 1),
      fw)
    ),
    hw = function (a) {
      var b = "general";
      ew[a]
        ? (b = "ecommerce")
        : gw[a]
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    iw = {},
    jw = Object.freeze(
      ((iw.view_search_results = 1),
      (iw[N.g.tb] = 1),
      (iw[N.g.ub] = 1),
      (iw[N.g.Ba] = 1),
      iw)
    ),
    Ev = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    kw = function (a) {
      if (ra(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    Av = function (a, b, c) {
      var d = function (K) {
          return R(c, K);
        },
        e = {},
        f = {},
        g = {},
        k = {},
        m = kw(d(N.g.zi));
      !c.F && m && Ev(f, "exp", m);
      g["&gtm"] = gi(!0);
      Q(69) && !c.F && (g._no_slc = !0);
      tf() && (k._cs = Qv);
      var n = d(N.g.yc);
      if (!c.F && Zb(n))
        for (var p in n)
          if (
            n.hasOwnProperty(p) &&
            /^(dimension|metric)\d+$/.test(p) &&
            void 0 != n[p]
          ) {
            var q = d(String(n[p]));
            void 0 !== q && Ev(f, p, q);
          }
      for (var u = Ul(c), t = 0; t < u.length; ++t) {
        var r = u[t];
        if (c.F) {
          var v = d(r);
          Zv.hasOwnProperty(r)
            ? (e[r] = v)
            : Uv.hasOwnProperty(r)
            ? (k[r] = v)
            : (g[r] = v);
        } else {
          var w = void 0;
          w = r !== N.g.Z ? d(r) : Vl(c, r);
          if (Yv.hasOwnProperty(r)) Iv(Yv[r], r, w, e);
          else if (Vv.hasOwnProperty(r)) Iv(Vv[r], r, w, g);
          else if (vv.hasOwnProperty(r)) Iv(vv[r], r, w, f);
          else if (uv.hasOwnProperty(r)) Iv(uv[r], r, w, k);
          else if (/^(dimension|metric|content_group)\d+$/.test(r))
            Iv(1, r, w, f);
          else if (r === N.g.Z) {
            if (!Rv) {
              var y = Oa(w);
              y && (f["&did"] = y);
            }
            var x = void 0,
              B = void 0;
            b === N.g.xa
              ? (x = Oa(Vl(c, r), "."))
              : ((x = Oa(Vl(c, r, 1), ".")), (B = Oa(Vl(c, r, 2), ".")));
            x && (f["&gdid"] = x);
            B && (f["&edid"] = B);
          } else
            r === N.g.Ta && 0 > u.indexOf(N.g.wc) && (k.cookieName = w + "_ga");
        }
      }
      (!1 !== d(N.g.li) && !1 !== d(N.g.vb) && Tt()) ||
        (g.allowAdFeatures = !1);
      (!1 !== d(N.g.X) && Ut()) || (g.allowAdPersonalizationSignals = !1);
      !c.F && d(N.g.lb) && (k._useUp = !0);
      if (c.F) {
        k.name = k.name || e.gtmTrackerName;
        var A = g.hitCallback;
        g.hitCallback = function () {
          pa(A) && A();
          c.R();
        };
      } else {
        Ev(k, "cookieDomain", "auto");
        Ev(g, "forceSSL", !0);
        Ev(e, "eventCategory", hw(b));
        jw[b] && Ev(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b
          ? Ev(e, "eventLabel", d(N.g.sg))
          : "search" === b || "view_search_results" === b
          ? Ev(e, "eventLabel", d(N.g.Gi))
          : "select_content" === b && Ev(e, "eventLabel", d(N.g.oi));
        var C = e[N.g.qa] || {},
          H = C[N.g.Rb];
        H || (0 != H && C[N.g.N])
          ? (k.allowLinker = !0)
          : !1 === H && Ev(k, "useAmpClientId", !1);
        f.hitCallback = c.R;
        k.name = a;
      }
      tf() &&
        ((g["&gcs"] = Rh()),
        Qh(N.g.O) || (k.storage = "none"),
        Qh(N.g.H) || ((g.allowAdFeatures = !1), (k.storeGac = !1)));
      var I = d(N.g.ma) || d(N.g.xb),
        E = d(N.g.Hd);
      I && (c.F || (k[N.g.xb] = I), (k._cd2l = !0));
      E && !c.F && (k[N.g.Hd] = E);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = k;
      return e;
    },
    Fv = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.hf = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.xh = "impressions" === b.translateIfKeyEquals ? Pv(d) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.ad = "promoView" === b.translateIfKeyEquals ? Pv(e) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.ad = "promoClick" === b.translateIfKeyEquals ? Pv(f) : f;
        c.Oa = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (
          b.hasOwnProperty(g) &&
          "translateIfKeyEquals" !== g &&
          "impressions" !== g &&
          "promoView" !== g &&
          "promoClick" !== g &&
          "currencyCode" !== g
        ) {
          c.action = g;
          var k = b[g].products;
          c.Eb = "products" === b.translateIfKeyEquals ? Pv(k) : k;
          c.Oa = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    Gv = function (a, b) {
      function c(r) {
        return {
          id: d(N.g.Ma),
          affiliation: d(N.g.wi),
          revenue: d(N.g.ja),
          tax: d(N.g.fg),
          shipping: d(N.g.Bd),
          coupon: d(N.g.xi),
          list: d(N.g.De) || d(N.g.Ce) || r,
        };
      }
      for (
        var d = function (r) {
            return R(b, r);
          },
          e = d(N.g.ba),
          f,
          g = 0;
        e && g < e.length && !(f = e[g][N.g.De] || e[g][N.g.Ce]);
        g++
      );
      var k = d(N.g.yc);
      if (Zb(k))
        for (var m = 0; e && m < e.length; ++m) {
          var n = e[m],
            p;
          for (p in k)
            k.hasOwnProperty(p) &&
              /^(dimension|metric)\d+$/.test(p) &&
              void 0 != k[p] &&
              Ev(n, p, n[k[p]]);
        }
      var q = null,
        u = d(N.g.yi);
      if (a === N.g.Aa || a === N.g.oc) q = { action: a, Oa: c(), Eb: Pv(e) };
      else if (a === N.g.kc) q = { action: "add", Oa: c(), Eb: Pv(e) };
      else if (a === N.g.mc) q = { action: "remove", Oa: c(), Eb: Pv(e) };
      else if (a === N.g.Ba) q = { action: "detail", Oa: c(f), Eb: Pv(e) };
      else if (a === N.g.tb) q = { action: "impressions", xh: Pv(e) };
      else if (a === N.g.ub) q = { action: "promo_view", ad: Pv(u) || Pv(e) };
      else if (("select_content" === a && u && 0 < u.length) || a === N.g.Lb)
        q = { action: "promo_click", ad: Pv(u) || Pv(e) };
      else if ("select_content" === a || a === N.g.nc)
        q = {
          action: "click",
          Oa: { list: d(N.g.De) || d(N.g.Ce) || f },
          Eb: Pv(e),
        };
      else if (a === N.g.Kb || "checkout_progress" === a) {
        var t = { step: a === N.g.Kb ? 1 : d(N.g.eg), option: d(N.g.dg) };
        q = { action: "checkout", Eb: Pv(e), Oa: G(c(), t) };
      } else
        "set_checkout_option" === a &&
          (q = {
            action: "checkout_option",
            Oa: { step: d(N.g.eg), option: d(N.g.dg) },
          });
      q && (q.hf = d(N.g.la));
      return q;
    },
    lw = {},
    Bv = function (a, b) {
      var c = lw[a];
      lw[a] = G(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  var mw = Nu;
  var ow = encodeURI,
    X = encodeURIComponent,
    pw = function (a, b, c) {
      Lb(a, b, c);
    },
    qw = function (a, b) {
      if (!a) return !1;
      var c = od(qd(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    rw = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Z = { o: {} };
  (Z.o.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.s = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
        Z.__e.isInfrastructure = !1;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Z.o.v = ["google"]),
    (function () {
      (function (a) {
        Z.__v = a;
        Z.__v.s = "v";
        Z.__v.isVendorTemplate = !0;
        Z.__v.priorityOverride = 0;
        Z.__v.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = rs(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        zs(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();

  (Z.o.rep = ["google"]),
    (function () {
      (function (a) {
        Z.__rep = a;
        Z.__rep.s = "rep";
        Z.__rep.isVendorTemplate = !0;
        Z.__rep.priorityOverride = 0;
        Z.__rep.isInfrastructure = !1;
      })(function (a) {
        var b = jl(a.vtp_containerId),
          c;
        switch (b.prefix) {
          case "AW":
            c = Tu;
            break;
          case "DC":
            c = fv;
            break;
          case "GF":
            c = lv;
            break;
          case "HA":
            c = qv;
            break;
          case "UA":
            c = Nv;
            break;
          case "MC":
            c = mw(b, a.vtp_gtmEventId);
            break;
          default:
            F(a.vtp_gtmOnFailure);
            return;
        }
        c
          ? (F(a.vtp_gtmOnSuccess),
            Cq.register(a.vtp_containerId, c),
            a.vtp_remoteConfig &&
              Lq(a.vtp_containerId, a.vtp_remoteConfig || {}))
          : F(a.vtp_gtmOnFailure);
      });
    })();
  (Z.o.cid = ["google"]),
    (function () {
      (function (a) {
        Z.__cid = a;
        Z.__cid.s = "cid";
        Z.__cid.isVendorTemplate = !0;
        Z.__cid.priorityOverride = 0;
        Z.__cid.isInfrastructure = !1;
      })(function () {
        return S.C;
      });
    })();

  (Z.o.get = ["google"]),
    (function () {
      (function (a) {
        Z.__get = a;
        Z.__get.s = "get";
        Z.__get.isVendorTemplate = !0;
        Z.__get.priorityOverride = 0;
        Z.__get.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_settings,
          c = b.eventParameters || {},
          d = String(a.vtp_eventName),
          e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        a.vtp_deferrable && (e.deferrable = !0);
        var f = cq(String(b.streamId), d, c);
        fq(f, e.eventId, e);
        a.vtp_gtmOnSuccess();
      });
    })();

  var Jx = {};
  Jx.dataLayer = $e;
  Jx.callback = function (a) {
    Oe.hasOwnProperty(a) && pa(Oe[a]) && Oe[a]();
    delete Oe[a];
  };
  Jx.bootstrap = 0;
  Jx._spx = !1;
  function Kx() {
    xe[S.C] = xe[S.C] || Jx;
    S.Ra && (xe["ctid_" + S.Ra] = Jx);
    ai();
    ci() ||
      l(di(), function (a, b) {
        Do(a, b.transportUrl, b.context);
        J(92);
      });
    Ia(Pe, Z.o);
    Ic = Qc;
  }
  (function (a) {
    function b() {
      m = D.documentElement.getAttribute("data-tag-assistant-present");
      Kr(m) && (k = g.Ii);
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (D.referrer) {
        var d = qd(D.referrer);
        c = "cct.google" === nd(d, "host");
      }
      if (!c) {
        var e = Gf("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((z["__TAGGY_INSTALLED"] = !0),
        Ib("https://cct.google/taggy/agent.js"));
    }
    if (Je) a();
    else {
      var f = function (r) {
          var v = "GTM",
            w = "GTM";
          De ? ((v = "OGT"), (w = "GTAG")) : Je && (w = v = "OPT");
          var y = z["google.tagmanager.debugui2.queue"];
          y ||
            ((y = []),
            (z["google.tagmanager.debugui2.queue"] = y),
            Ib(
              "https://" +
                we.md +
                "/debug/bootstrap?id=" +
                S.C +
                "&src=" +
                w +
                "&cond=" +
                r +
                "&gtm=" +
                gi()
            ));
          var x = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Cb,
              containerProduct: v,
              debug: !1,
              id: S.C,
              isGte: Ce,
            },
          };
          x.data.resume = function () {
            a();
          };
          we.Zh && (x.data.initialPublish = !0);
          y.push(x);
        },
        g = { Lk: 1, Ji: 2, Vi: 3, bi: 4, Ii: 5 },
        k = void 0,
        m = void 0,
        n = od(z.location, "query", !1, void 0, "gtm_debug");
      Kr(n) && (k = g.Ji);
      if (!k && D.referrer) {
        var p = qd(D.referrer);
        "tagassistant.google.com" === nd(p, "host") && (k = g.Vi);
      }
      if (!k) {
        var q = Gf("__TAG_ASSISTANT");
        q.length && q[0].length && (k = g.bi);
      }
      k || b();
      if (!k && Lr(m)) {
        var u = function () {
            if (t) return !0;
            t = !0;
            b();
            k && Cb ? f(k) : a();
          },
          t = !1;
        Mb(
          D,
          "TADebugSignal",
          function () {
            u();
          },
          !1
        );
        z.setTimeout(function () {
          u();
        }, 200);
      } else k && Cb ? f(k) : a();
    }
  })(function () {
    var a = !1;
    a && Zn("INIT");
    if (Q(70)) {
      var b = Tn(rn.D.ue, S.C);
      Un(b);
    }
    gf().m();
    Pi();
    if (S.Ra ? xe["ctid_" + S.Ra] : xe[S.C]) {
      var c = xe.zones;
      c && c.unregisterChild(Xh());
    } else {
      for (
        var d = data.resource || {}, e = d.macros || [], f = 0;
        f < e.length;
        f++
      )
        yc.push(e[f]);
      for (var g = d.tags || [], k = 0; k < g.length; k++) Bc.push(g[k]);
      for (var m = d.predicates || [], n = 0; n < m.length; n++) Ac.push(m[n]);
      for (var p = d.rules || [], q = 0; q < p.length; q++) {
        for (var u = p[q], t = {}, r = 0; r < u.length; r++)
          t[u[r][0]] = Array.prototype.slice.call(u[r], 1);
        zc.push(t);
      }
      Dc = Z;
      Ec = Xs;
      Kx();
      Jr();
      So = !1;
      To = 0;
      if (
        ("interactive" == D.readyState && !D.createEventObject) ||
        "complete" == D.readyState
      )
        Vo();
      else {
        Mb(D, "DOMContentLoaded", Vo);
        Mb(D, "readystatechange", Vo);
        if (D.createEventObject && D.documentElement.doScroll) {
          var v = !0;
          try {
            v = !z.frameElement;
          } catch (H) {}
          v && Wo();
        }
        Mb(z, "load", Vo);
      }
      Zq = !1;
      "complete" === D.readyState ? ar() : Mb(z, "load", ar);
      aj && z.setInterval(fj, 864e5);
      Ya("HEALTH", 1);
      Ne = Fa();
      Jx.bootstrap = Ne;
      if (a) {
        var B = $n("INIT");
      }
      if (Q(70)) {
        var A = Tn(rn.D.Qf, S.C);
        if (Un(A)) {
          var C = Tn(rn.D.ue, S.C);
          Vn(A, C);
        }
      }
    }
  });
})();
