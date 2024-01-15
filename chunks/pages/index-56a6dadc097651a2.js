(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    5557: function(e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return t(2178)
        }
        ])
    },
    1466: function(e) {
        e.exports = {
            container: "Container_container__jY5v0"
        }
    },
    6450: function(e) {
        e.exports = {
            layoutContainer: "Layout_layoutContainer__5pQvD"
        }
    },
    7241: function() {},
    9862: function(e) {
        e.exports = {
            section: "Section_section___TusU"
        }
    },
    5089: function(e) {
        e.exports = {
            center: "__404_center__jADTU"
        }
    },
    531: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return a
            }
        });
        var r = t(1844)
          , i = t(6070)
          , s = t(1466)
          , c = t.n(s);
        let o = e=>{
            let {children: n, className: t} = e
              , s = new i.Z(c().container);
            return s.addIf(t, t),
            (0,
            r.jsx)("div", {
                className: s.toString(),
                children: n
            })
        }
        ;
        var a = o
    },
    6313: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return p
            }
        });
        var r = t(1844)
          , i = t(1163)
          , s = t(4593)
          , c = t(6450)
          , o = t.n(c)
          , a = t(5298)
          , u = t(5788)
          , l = t(7241)
          , f = t.n(l);
        let d = e=>{
            let {children: n} = e;
            return (0,
            r.jsx)("main", {
                className: f().main,
                children: n
            })
        }
        ;
        var h = t(4155);
        let _ = e=>{
            let {children: n} = e
              , t = (0,
            i.useRouter)()
              , {asPath: c} = t
              , {homepage: l, metadata: f={}} = (0,
            a.ZP)();
            f.og || (f.og = {}),
            f.og.url = "".concat(l).concat(c);
            let _ = {
                defaultTitle: f.title,
                titleTemplate: !0 === h.env.WORDPRESS_PLUGIN_SEO ? "%s" : "%s - ".concat(f.title),
                ...(0,
                u.iB)(f, {
                    setTitle: !1,
                    link: [{
                        rel: "alternate",
                        type: "application/rss+xml",
                        href: "/feed.xml"
                    }, {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/apple-touch-icon.png"
                    }, {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon-16x16.png"
                    }, {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon-32x32.png"
                    }, {
                        rel: "manifest",
                        href: "/site.webmanifest"
                    }]
                })
            };
            return (0,
            r.jsxs)("div", {
                className: o().layoutContainer,
                children: [(0,
                r.jsx)(s.q, {
                    ..._
                }), (0,
                r.jsx)(d, {
                    children: n
                })]
            })
        }
        ;
        var p = _
    },
    7860: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return a
            }
        });
        var r = t(1844)
          , i = t(6070)
          , s = t(9862)
          , c = t.n(s);
        let o = e=>{
            let {children: n, className: t, ...s} = e
              , o = new i.Z(c().section);
            return o.addIf(t, t),
            (0,
            r.jsx)("section", {
                className: o.toString(),
                ...s,
                children: n
            })
        }
        ;
        var a = o
    },
    6070: function(e, n) {
        "use strict";
        n.Z = class {
            add(e) {
                return Array.isArray(e) || (e = [e]),
                this.base = [...this.base, ...e],
                this
            }
            addIf(e, n) {
                return n && this.add(e),
                this
            }
            toString() {
                return this.base.join(" ")
            }
            constructor(e) {
                this.base = e,
                Array.isArray(e) || (this.base = [this.base])
            }
        }
    },
    2178: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            __N_SSG: function() {
                return l
            },
            default: function() {
                return f
            }
        });
        var r = t(1844)
          , i = t(4593)
          , s = t(6313)
          , c = t(7860)
          , o = t(531)
          , a = t(5089)
          , u = t.n(a)
          , l = !0;
        function f() {
            return (0,
            r.jsxs)(s.Z, {
                children: [(0,
                r.jsxs)(i.q, {
                    children: [(0,
                    r.jsx)("title", {
                        children: "Create Next App"
                    }), (0,
                    r.jsx)("meta", {
                        name: "robots",
                        content: "noindex, nofollow"
                    })]
                }), (0,
                r.jsx)(c.Z, {
                    children: (0,
                    r.jsx)(o.Z, {
                        className: u().center,
                        children: (0,
                        r.jsx)("h1", {
                            children: "Welcome to my website"
                        })
                    })
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [593, 888, 179], function() {
        return e(e.s = 5557)
    }),
    _N_E = e.O()
}
]);
