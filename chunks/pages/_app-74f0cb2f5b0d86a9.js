(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    7283: function(e, t, r) {
        "use strict";
        let n, i;
        r.d(t, {
            Ps: function() {
                return q
            }
        });
        var o, a, s, u = r(655);
        let c = /\r\n|[\n\r]/g;
        function l(e, t) {
            let r = 0
              , n = 1;
            for (let i of e.body.matchAll(c)) {
                if ("number" == typeof i.index || function(e, t) {
                    let r = Boolean(e);
                    if (!r)
                        throw Error(null != t ? t : "Unexpected invariant triggered.")
                }(!1),
                i.index >= t)
                    break;
                r = i.index + i[0].length,
                n += 1
            }
            return {
                line: n,
                column: t + 1 - r
            }
        }
        function h(e, t) {
            let r = e.locationOffset.column - 1
              , n = "".padStart(r) + e.body
              , i = t.line - 1
              , o = e.locationOffset.line - 1
              , a = t.line + o
              , s = 1 === t.line ? r : 0
              , u = t.column + s
              , c = `${e.name}:${a}:${u}
`
              , l = n.split(/\r\n|[\n\r]/g)
              , h = l[i];
            if (h.length > 120) {
                let p = Math.floor(u / 80)
                  , d = [];
                for (let y = 0; y < h.length; y += 80)
                    d.push(h.slice(y, y + 80));
                return c + f([[`${a} |`, d[0]], ...d.slice(1, p + 1).map(e=>["|", e]), ["|", "^".padStart(u % 80)], ["|", d[p + 1]]])
            }
            return c + f([[`${a - 1} |`, l[i - 1]], [`${a} |`, h], ["|", "^".padStart(u)], [`${a + 1} |`, l[i + 1]]])
        }
        function f(e) {
            let t = e.filter(([e,t])=>void 0 !== t)
              , r = Math.max(...t.map(([e])=>e.length));
            return t.map(([e,t])=>e.padStart(r) + (t ? " " + t : "")).join("\n")
        }
        class p extends Error {
            constructor(e, ...t) {
                var r, n, i, o;
                let {nodes: a, source: s, positions: u, path: c, originalError: h, extensions: f} = function(e) {
                    let t = e[0];
                    return null == t || "kind"in t || "length"in t ? {
                        nodes: t,
                        source: e[1],
                        positions: e[2],
                        path: e[3],
                        originalError: e[4],
                        extensions: e[5]
                    } : t
                }(t);
                super(e),
                this.name = "GraphQLError",
                this.path = null != c ? c : void 0,
                this.originalError = null != h ? h : void 0,
                this.nodes = d(Array.isArray(a) ? a : a ? [a] : void 0);
                let y = d(null === (r = this.nodes) || void 0 === r ? void 0 : r.map(e=>e.loc).filter(e=>null != e));
                this.source = null != s ? s : null == y ? void 0 : null === (n = y[0]) || void 0 === n ? void 0 : n.source,
                this.positions = null != u ? u : null == y ? void 0 : y.map(e=>e.start),
                this.locations = u && s ? u.map(e=>l(s, e)) : null == y ? void 0 : y.map(e=>l(e.source, e.start));
                let v = "object" == typeof (o = null == h ? void 0 : h.extensions) && null !== o ? null == h ? void 0 : h.extensions : void 0;
                this.extensions = null !== (i = null != f ? f : v) && void 0 !== i ? i : Object.create(null),
                Object.defineProperties(this, {
                    message: {
                        writable: !0,
                        enumerable: !0
                    },
                    name: {
                        enumerable: !1
                    },
                    nodes: {
                        enumerable: !1
                    },
                    source: {
                        enumerable: !1
                    },
                    positions: {
                        enumerable: !1
                    },
                    originalError: {
                        enumerable: !1
                    }
                }),
                null != h && h.stack ? Object.defineProperty(this, "stack", {
                    value: h.stack,
                    writable: !0,
                    configurable: !0
                }) : Error.captureStackTrace ? Error.captureStackTrace(this, p) : Object.defineProperty(this, "stack", {
                    value: Error().stack,
                    writable: !0,
                    configurable: !0
                })
            }
            get[Symbol.toStringTag]() {
                return "GraphQLError"
            }
            toString() {
                let e = this.message;
                if (this.nodes) {
                    for (let t of this.nodes)
                        if (t.loc) {
                            var r;
                            e += "\n\n" + h((r = t.loc).source, l(r.source, r.start))
                        }
                } else if (this.source && this.locations)
                    for (let n of this.locations)
                        e += "\n\n" + h(this.source, n);
                return e
            }
            toJSON() {
                let e = {
                    message: this.message
                };
                return null != this.locations && (e.locations = this.locations),
                null != this.path && (e.path = this.path),
                null != this.extensions && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions),
                e
            }
        }
        function d(e) {
            return void 0 === e || 0 === e.length ? void 0 : e
        }
        function y(e, t, r) {
            return new p(`Syntax Error: ${r}`,{
                source: e,
                positions: [t]
            })
        }
        var v = r(2380);
        (o = n || (n = {})).QUERY = "QUERY",
        o.MUTATION = "MUTATION",
        o.SUBSCRIPTION = "SUBSCRIPTION",
        o.FIELD = "FIELD",
        o.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION",
        o.FRAGMENT_SPREAD = "FRAGMENT_SPREAD",
        o.INLINE_FRAGMENT = "INLINE_FRAGMENT",
        o.VARIABLE_DEFINITION = "VARIABLE_DEFINITION",
        o.SCHEMA = "SCHEMA",
        o.SCALAR = "SCALAR",
        o.OBJECT = "OBJECT",
        o.FIELD_DEFINITION = "FIELD_DEFINITION",
        o.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION",
        o.INTERFACE = "INTERFACE",
        o.UNION = "UNION",
        o.ENUM = "ENUM",
        o.ENUM_VALUE = "ENUM_VALUE",
        o.INPUT_OBJECT = "INPUT_OBJECT",
        o.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
        var m = r(7359)
          , g = r(7392)
          , b = r(8297);
        (a = i || (i = {})).SOF = "<SOF>",
        a.EOF = "<EOF>",
        a.BANG = "!",
        a.DOLLAR = "$",
        a.AMP = "&",
        a.PAREN_L = "(",
        a.PAREN_R = ")",
        a.SPREAD = "...",
        a.COLON = ":",
        a.EQUALS = "=",
        a.AT = "@",
        a.BRACKET_L = "[",
        a.BRACKET_R = "]",
        a.BRACE_L = "{",
        a.PIPE = "|",
        a.BRACE_R = "}",
        a.NAME = "Name",
        a.INT = "Int",
        a.FLOAT = "Float",
        a.STRING = "String",
        a.BLOCK_STRING = "BlockString",
        a.COMMENT = "Comment";
        class _ {
            constructor(e) {
                let t = new v.WU(i.SOF,0,0,0,0);
                this.source = e,
                this.lastToken = t,
                this.token = t,
                this.line = 1,
                this.lineStart = 0
            }
            get[Symbol.toStringTag]() {
                return "Lexer"
            }
            advance() {
                this.lastToken = this.token;
                let e = this.token = this.lookahead();
                return e
            }
            lookahead() {
                let e = this.token;
                if (e.kind !== i.EOF)
                    do
                        if (e.next)
                            e = e.next;
                        else {
                            let t = function(e, t) {
                                let r = e.source.body
                                  , n = r.length
                                  , o = t;
                                for (; o < n; ) {
                                    let a = r.charCodeAt(o);
                                    switch (a) {
                                    case 65279:
                                    case 9:
                                    case 32:
                                    case 44:
                                        ++o;
                                        continue;
                                    case 10:
                                        ++o,
                                        ++e.line,
                                        e.lineStart = o;
                                        continue;
                                    case 13:
                                        10 === r.charCodeAt(o + 1) ? o += 2 : ++o,
                                        ++e.line,
                                        e.lineStart = o;
                                        continue;
                                    case 35:
                                        return function(e, t) {
                                            let r = e.source.body
                                              , n = r.length
                                              , o = t + 1;
                                            for (; o < n; ) {
                                                let a = r.charCodeAt(o);
                                                if (10 === a || 13 === a)
                                                    break;
                                                if (E(a))
                                                    ++o;
                                                else if (w(r, o))
                                                    o += 2;
                                                else
                                                    break
                                            }
                                            return x(e, i.COMMENT, t, o, r.slice(t + 1, o))
                                        }(e, o);
                                    case 33:
                                        return x(e, i.BANG, o, o + 1);
                                    case 36:
                                        return x(e, i.DOLLAR, o, o + 1);
                                    case 38:
                                        return x(e, i.AMP, o, o + 1);
                                    case 40:
                                        return x(e, i.PAREN_L, o, o + 1);
                                    case 41:
                                        return x(e, i.PAREN_R, o, o + 1);
                                    case 46:
                                        if (46 === r.charCodeAt(o + 1) && 46 === r.charCodeAt(o + 2))
                                            return x(e, i.SPREAD, o, o + 3);
                                        break;
                                    case 58:
                                        return x(e, i.COLON, o, o + 1);
                                    case 61:
                                        return x(e, i.EQUALS, o, o + 1);
                                    case 64:
                                        return x(e, i.AT, o, o + 1);
                                    case 91:
                                        return x(e, i.BRACKET_L, o, o + 1);
                                    case 93:
                                        return x(e, i.BRACKET_R, o, o + 1);
                                    case 123:
                                        return x(e, i.BRACE_L, o, o + 1);
                                    case 124:
                                        return x(e, i.PIPE, o, o + 1);
                                    case 125:
                                        return x(e, i.BRACE_R, o, o + 1);
                                    case 34:
                                        if (34 === r.charCodeAt(o + 1) && 34 === r.charCodeAt(o + 2))
                                            return function(e, t) {
                                                let r = e.source.body
                                                  , n = r.length
                                                  , o = e.lineStart
                                                  , a = t + 3
                                                  , s = a
                                                  , u = ""
                                                  , c = [];
                                                for (; a < n; ) {
                                                    let l = r.charCodeAt(a);
                                                    if (34 === l && 34 === r.charCodeAt(a + 1) && 34 === r.charCodeAt(a + 2)) {
                                                        u += r.slice(s, a),
                                                        c.push(u);
                                                        let h = x(e, i.BLOCK_STRING, t, a + 3, (0,
                                                        g.wv)(c).join("\n"));
                                                        return e.line += c.length - 1,
                                                        e.lineStart = o,
                                                        h
                                                    }
                                                    if (92 === l && 34 === r.charCodeAt(a + 1) && 34 === r.charCodeAt(a + 2) && 34 === r.charCodeAt(a + 3)) {
                                                        u += r.slice(s, a),
                                                        s = a + 1,
                                                        a += 4;
                                                        continue
                                                    }
                                                    if (10 === l || 13 === l) {
                                                        u += r.slice(s, a),
                                                        c.push(u),
                                                        13 === l && 10 === r.charCodeAt(a + 1) ? a += 2 : ++a,
                                                        u = "",
                                                        s = a,
                                                        o = a;
                                                        continue
                                                    }
                                                    if (E(l))
                                                        ++a;
                                                    else if (w(r, a))
                                                        a += 2;
                                                    else
                                                        throw y(e.source, a, `Invalid character within String: ${T(e, a)}.`)
                                                }
                                                throw y(e.source, a, "Unterminated string.")
                                            }(e, o);
                                        return function(e, t) {
                                            let r = e.source.body
                                              , n = r.length
                                              , o = t + 1
                                              , a = o
                                              , s = "";
                                            for (; o < n; ) {
                                                let u = r.charCodeAt(o);
                                                if (34 === u)
                                                    return s += r.slice(a, o),
                                                    x(e, i.STRING, t, o + 1, s);
                                                if (92 === u) {
                                                    s += r.slice(a, o);
                                                    let c = 117 === r.charCodeAt(o + 1) ? 123 === r.charCodeAt(o + 2) ? function(e, t) {
                                                        let r = e.source.body
                                                          , n = 0
                                                          , i = 3;
                                                        for (; i < 12; ) {
                                                            let o = r.charCodeAt(t + i++);
                                                            if (125 === o) {
                                                                if (i < 5 || !E(n))
                                                                    break;
                                                                return {
                                                                    value: String.fromCodePoint(n),
                                                                    size: i
                                                                }
                                                            }
                                                            if ((n = n << 4 | D(o)) < 0)
                                                                break
                                                        }
                                                        throw y(e.source, t, `Invalid Unicode escape sequence: "${r.slice(t, t + i)}".`)
                                                    }(e, o) : function(e, t) {
                                                        let r = e.source.body
                                                          , n = I(r, t + 2);
                                                        if (E(n))
                                                            return {
                                                                value: String.fromCodePoint(n),
                                                                size: 6
                                                            };
                                                        if (O(n) && 92 === r.charCodeAt(t + 6) && 117 === r.charCodeAt(t + 7)) {
                                                            let i = I(r, t + 8);
                                                            if (k(i))
                                                                return {
                                                                    value: String.fromCodePoint(n, i),
                                                                    size: 12
                                                                }
                                                        }
                                                        throw y(e.source, t, `Invalid Unicode escape sequence: "${r.slice(t, t + 6)}".`)
                                                    }(e, o) : function(e, t) {
                                                        let r = e.source.body
                                                          , n = r.charCodeAt(t + 1);
                                                        switch (n) {
                                                        case 34:
                                                            return {
                                                                value: '"',
                                                                size: 2
                                                            };
                                                        case 92:
                                                            return {
                                                                value: "\\",
                                                                size: 2
                                                            };
                                                        case 47:
                                                            return {
                                                                value: "/",
                                                                size: 2
                                                            };
                                                        case 98:
                                                            return {
                                                                value: "\b",
                                                                size: 2
                                                            };
                                                        case 102:
                                                            return {
                                                                value: "\f",
                                                                size: 2
                                                            };
                                                        case 110:
                                                            return {
                                                                value: "\n",
                                                                size: 2
                                                            };
                                                        case 114:
                                                            return {
                                                                value: "\r",
                                                                size: 2
                                                            };
                                                        case 116:
                                                            return {
                                                                value: "	",
                                                                size: 2
                                                            }
                                                        }
                                                        throw y(e.source, t, `Invalid character escape sequence: "${r.slice(t, t + 2)}".`)
                                                    }(e, o);
                                                    s += c.value,
                                                    o += c.size,
                                                    a = o;
                                                    continue
                                                }
                                                if (10 === u || 13 === u)
                                                    break;
                                                if (E(u))
                                                    ++o;
                                                else if (w(r, o))
                                                    o += 2;
                                                else
                                                    throw y(e.source, o, `Invalid character within String: ${T(e, o)}.`)
                                            }
                                            throw y(e.source, o, "Unterminated string.")
                                        }(e, o)
                                    }
                                    if ((0,
                                    b.X1)(a) || 45 === a)
                                        return function(e, t, r) {
                                            let n = e.source.body
                                              , o = t
                                              , a = r
                                              , s = !1;
                                            if (45 === a && (a = n.charCodeAt(++o)),
                                            48 === a) {
                                                if (a = n.charCodeAt(++o),
                                                (0,
                                                b.X1)(a))
                                                    throw y(e.source, o, `Invalid number, unexpected digit after 0: ${T(e, o)}.`)
                                            } else
                                                o = S(e, o, a),
                                                a = n.charCodeAt(o);
                                            if (46 === a && (s = !0,
                                            a = n.charCodeAt(++o),
                                            o = S(e, o, a),
                                            a = n.charCodeAt(o)),
                                            (69 === a || 101 === a) && (s = !0,
                                            (43 === (a = n.charCodeAt(++o)) || 45 === a) && (a = n.charCodeAt(++o)),
                                            o = S(e, o, a),
                                            a = n.charCodeAt(o)),
                                            46 === a || (0,
                                            b.LQ)(a))
                                                throw y(e.source, o, `Invalid number, expected digit but got: ${T(e, o)}.`);
                                            return x(e, s ? i.FLOAT : i.INT, t, o, n.slice(t, o))
                                        }(e, o, a);
                                    if ((0,
                                    b.LQ)(a))
                                        return function(e, t) {
                                            let r = e.source.body
                                              , n = r.length
                                              , o = t + 1;
                                            for (; o < n; ) {
                                                let a = r.charCodeAt(o);
                                                if ((0,
                                                b.HQ)(a))
                                                    ++o;
                                                else
                                                    break
                                            }
                                            return x(e, i.NAME, t, o, r.slice(t, o))
                                        }(e, o);
                                    throw y(e.source, o, 39 === a ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : E(a) || w(r, o) ? `Unexpected character: ${T(e, o)}.` : `Invalid character: ${T(e, o)}.`)
                                }
                                return x(e, i.EOF, n, n)
                            }(this, e.end);
                            e.next = t,
                            t.prev = e,
                            e = t
                        }
                    while (e.kind === i.COMMENT);
                return e
            }
        }
        function E(e) {
            return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111
        }
        function w(e, t) {
            return O(e.charCodeAt(t)) && k(e.charCodeAt(t + 1))
        }
        function O(e) {
            return e >= 55296 && e <= 56319
        }
        function k(e) {
            return e >= 56320 && e <= 57343
        }
        function T(e, t) {
            let r = e.source.body.codePointAt(t);
            if (void 0 === r)
                return i.EOF;
            if (r >= 32 && r <= 126) {
                let n = String.fromCodePoint(r);
                return '"' === n ? "'\"'" : `"${n}"`
            }
            return "U+" + r.toString(16).toUpperCase().padStart(4, "0")
        }
        function x(e, t, r, n, i) {
            let o = e.line
              , a = 1 + r - e.lineStart;
            return new v.WU(t,r,n,o,a,i)
        }
        function S(e, t, r) {
            if (!(0,
            b.X1)(r))
                throw y(e.source, t, `Invalid number, expected digit but got: ${T(e, t)}.`);
            let n = e.source.body
              , i = t + 1;
            for (; (0,
            b.X1)(n.charCodeAt(i)); )
                ++i;
            return i
        }
        function I(e, t) {
            return D(e.charCodeAt(t)) << 12 | D(e.charCodeAt(t + 1)) << 8 | D(e.charCodeAt(t + 2)) << 4 | D(e.charCodeAt(t + 3))
        }
        function D(e) {
            return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
        }
        var N = r(1270);
        class A {
            constructor(e, t) {
                let r = (0,
                N.T)(e) ? e : new N.H(e);
                this._lexer = new _(r),
                this._options = t
            }
            parseName() {
                let e = this.expectToken(i.NAME);
                return this.node(e, {
                    kind: m.h.NAME,
                    value: e.value
                })
            }
            parseDocument() {
                return this.node(this._lexer.token, {
                    kind: m.h.DOCUMENT,
                    definitions: this.many(i.SOF, this.parseDefinition, i.EOF)
                })
            }
            parseDefinition() {
                if (this.peek(i.BRACE_L))
                    return this.parseOperationDefinition();
                let e = this.peekDescription()
                  , t = e ? this._lexer.lookahead() : this._lexer.token;
                if (t.kind === i.NAME) {
                    switch (t.value) {
                    case "schema":
                        return this.parseSchemaDefinition();
                    case "scalar":
                        return this.parseScalarTypeDefinition();
                    case "type":
                        return this.parseObjectTypeDefinition();
                    case "interface":
                        return this.parseInterfaceTypeDefinition();
                    case "union":
                        return this.parseUnionTypeDefinition();
                    case "enum":
                        return this.parseEnumTypeDefinition();
                    case "input":
                        return this.parseInputObjectTypeDefinition();
                    case "directive":
                        return this.parseDirectiveDefinition()
                    }
                    if (e)
                        throw y(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
                    switch (t.value) {
                    case "query":
                    case "mutation":
                    case "subscription":
                        return this.parseOperationDefinition();
                    case "fragment":
                        return this.parseFragmentDefinition();
                    case "extend":
                        return this.parseTypeSystemExtension()
                    }
                }
                throw this.unexpected(t)
            }
            parseOperationDefinition() {
                let e;
                let t = this._lexer.token;
                if (this.peek(i.BRACE_L))
                    return this.node(t, {
                        kind: m.h.OPERATION_DEFINITION,
                        operation: v.ku.QUERY,
                        name: void 0,
                        variableDefinitions: [],
                        directives: [],
                        selectionSet: this.parseSelectionSet()
                    });
                let r = this.parseOperationType();
                return this.peek(i.NAME) && (e = this.parseName()),
                this.node(t, {
                    kind: m.h.OPERATION_DEFINITION,
                    operation: r,
                    name: e,
                    variableDefinitions: this.parseVariableDefinitions(),
                    directives: this.parseDirectives(!1),
                    selectionSet: this.parseSelectionSet()
                })
            }
            parseOperationType() {
                let e = this.expectToken(i.NAME);
                switch (e.value) {
                case "query":
                    return v.ku.QUERY;
                case "mutation":
                    return v.ku.MUTATION;
                case "subscription":
                    return v.ku.SUBSCRIPTION
                }
                throw this.unexpected(e)
            }
            parseVariableDefinitions() {
                return this.optionalMany(i.PAREN_L, this.parseVariableDefinition, i.PAREN_R)
            }
            parseVariableDefinition() {
                return this.node(this._lexer.token, {
                    kind: m.h.VARIABLE_DEFINITION,
                    variable: this.parseVariable(),
                    type: (this.expectToken(i.COLON),
                    this.parseTypeReference()),
                    defaultValue: this.expectOptionalToken(i.EQUALS) ? this.parseConstValueLiteral() : void 0,
                    directives: this.parseConstDirectives()
                })
            }
            parseVariable() {
                let e = this._lexer.token;
                return this.expectToken(i.DOLLAR),
                this.node(e, {
                    kind: m.h.VARIABLE,
                    name: this.parseName()
                })
            }
            parseSelectionSet() {
                return this.node(this._lexer.token, {
                    kind: m.h.SELECTION_SET,
                    selections: this.many(i.BRACE_L, this.parseSelection, i.BRACE_R)
                })
            }
            parseSelection() {
                return this.peek(i.SPREAD) ? this.parseFragment() : this.parseField()
            }
            parseField() {
                let e, t;
                let r = this._lexer.token
                  , n = this.parseName();
                return this.expectOptionalToken(i.COLON) ? (e = n,
                t = this.parseName()) : t = n,
                this.node(r, {
                    kind: m.h.FIELD,
                    alias: e,
                    name: t,
                    arguments: this.parseArguments(!1),
                    directives: this.parseDirectives(!1),
                    selectionSet: this.peek(i.BRACE_L) ? this.parseSelectionSet() : void 0
                })
            }
            parseArguments(e) {
                let t = e ? this.parseConstArgument : this.parseArgument;
                return this.optionalMany(i.PAREN_L, t, i.PAREN_R)
            }
            parseArgument(e=!1) {
                let t = this._lexer.token
                  , r = this.parseName();
                return this.expectToken(i.COLON),
                this.node(t, {
                    kind: m.h.ARGUMENT,
                    name: r,
                    value: this.parseValueLiteral(e)
                })
            }
            parseConstArgument() {
                return this.parseArgument(!0)
            }
            parseFragment() {
                let e = this._lexer.token;
                this.expectToken(i.SPREAD);
                let t = this.expectOptionalKeyword("on");
                return !t && this.peek(i.NAME) ? this.node(e, {
                    kind: m.h.FRAGMENT_SPREAD,
                    name: this.parseFragmentName(),
                    directives: this.parseDirectives(!1)
                }) : this.node(e, {
                    kind: m.h.INLINE_FRAGMENT,
                    typeCondition: t ? this.parseNamedType() : void 0,
                    directives: this.parseDirectives(!1),
                    selectionSet: this.parseSelectionSet()
                })
            }
            parseFragmentDefinition() {
                var e;
                let t = this._lexer.token;
                return (this.expectKeyword("fragment"),
                (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacyFragmentVariables) === !0) ? this.node(t, {
                    kind: m.h.FRAGMENT_DEFINITION,
                    name: this.parseFragmentName(),
                    variableDefinitions: this.parseVariableDefinitions(),
                    typeCondition: (this.expectKeyword("on"),
                    this.parseNamedType()),
                    directives: this.parseDirectives(!1),
                    selectionSet: this.parseSelectionSet()
                }) : this.node(t, {
                    kind: m.h.FRAGMENT_DEFINITION,
                    name: this.parseFragmentName(),
                    typeCondition: (this.expectKeyword("on"),
                    this.parseNamedType()),
                    directives: this.parseDirectives(!1),
                    selectionSet: this.parseSelectionSet()
                })
            }
            parseFragmentName() {
                if ("on" === this._lexer.token.value)
                    throw this.unexpected();
                return this.parseName()
            }
            parseValueLiteral(e) {
                let t = this._lexer.token;
                switch (t.kind) {
                case i.BRACKET_L:
                    return this.parseList(e);
                case i.BRACE_L:
                    return this.parseObject(e);
                case i.INT:
                    return this._lexer.advance(),
                    this.node(t, {
                        kind: m.h.INT,
                        value: t.value
                    });
                case i.FLOAT:
                    return this._lexer.advance(),
                    this.node(t, {
                        kind: m.h.FLOAT,
                        value: t.value
                    });
                case i.STRING:
                case i.BLOCK_STRING:
                    return this.parseStringLiteral();
                case i.NAME:
                    switch (this._lexer.advance(),
                    t.value) {
                    case "true":
                        return this.node(t, {
                            kind: m.h.BOOLEAN,
                            value: !0
                        });
                    case "false":
                        return this.node(t, {
                            kind: m.h.BOOLEAN,
                            value: !1
                        });
                    case "null":
                        return this.node(t, {
                            kind: m.h.NULL
                        });
                    default:
                        return this.node(t, {
                            kind: m.h.ENUM,
                            value: t.value
                        })
                    }
                case i.DOLLAR:
                    if (e) {
                        if (this.expectToken(i.DOLLAR),
                        this._lexer.token.kind === i.NAME) {
                            let r = this._lexer.token.value;
                            throw y(this._lexer.source, t.start, `Unexpected variable "$${r}" in constant value.`)
                        }
                        throw this.unexpected(t)
                    }
                    return this.parseVariable();
                default:
                    throw this.unexpected()
                }
            }
            parseConstValueLiteral() {
                return this.parseValueLiteral(!0)
            }
            parseStringLiteral() {
                let e = this._lexer.token;
                return this._lexer.advance(),
                this.node(e, {
                    kind: m.h.STRING,
                    value: e.value,
                    block: e.kind === i.BLOCK_STRING
                })
            }
            parseList(e) {
                let t = ()=>this.parseValueLiteral(e);
                return this.node(this._lexer.token, {
                    kind: m.h.LIST,
                    values: this.any(i.BRACKET_L, t, i.BRACKET_R)
                })
            }
            parseObject(e) {
                let t = ()=>this.parseObjectField(e);
                return this.node(this._lexer.token, {
                    kind: m.h.OBJECT,
                    fields: this.any(i.BRACE_L, t, i.BRACE_R)
                })
            }
            parseObjectField(e) {
                let t = this._lexer.token
                  , r = this.parseName();
                return this.expectToken(i.COLON),
                this.node(t, {
                    kind: m.h.OBJECT_FIELD,
                    name: r,
                    value: this.parseValueLiteral(e)
                })
            }
            parseDirectives(e) {
                let t = [];
                for (; this.peek(i.AT); )
                    t.push(this.parseDirective(e));
                return t
            }
            parseConstDirectives() {
                return this.parseDirectives(!0)
            }
            parseDirective(e) {
                let t = this._lexer.token;
                return this.expectToken(i.AT),
                this.node(t, {
                    kind: m.h.DIRECTIVE,
                    name: this.parseName(),
                    arguments: this.parseArguments(e)
                })
            }
            parseTypeReference() {
                let e;
                let t = this._lexer.token;
                if (this.expectOptionalToken(i.BRACKET_L)) {
                    let r = this.parseTypeReference();
                    this.expectToken(i.BRACKET_R),
                    e = this.node(t, {
                        kind: m.h.LIST_TYPE,
                        type: r
                    })
                } else
                    e = this.parseNamedType();
                return this.expectOptionalToken(i.BANG) ? this.node(t, {
                    kind: m.h.NON_NULL_TYPE,
                    type: e
                }) : e
            }
            parseNamedType() {
                return this.node(this._lexer.token, {
                    kind: m.h.NAMED_TYPE,
                    name: this.parseName()
                })
            }
            peekDescription() {
                return this.peek(i.STRING) || this.peek(i.BLOCK_STRING)
            }
            parseDescription() {
                if (this.peekDescription())
                    return this.parseStringLiteral()
            }
            parseSchemaDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription();
                this.expectKeyword("schema");
                let r = this.parseConstDirectives()
                  , n = this.many(i.BRACE_L, this.parseOperationTypeDefinition, i.BRACE_R);
                return this.node(e, {
                    kind: m.h.SCHEMA_DEFINITION,
                    description: t,
                    directives: r,
                    operationTypes: n
                })
            }
            parseOperationTypeDefinition() {
                let e = this._lexer.token
                  , t = this.parseOperationType();
                this.expectToken(i.COLON);
                let r = this.parseNamedType();
                return this.node(e, {
                    kind: m.h.OPERATION_TYPE_DEFINITION,
                    operation: t,
                    type: r
                })
            }
            parseScalarTypeDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription();
                this.expectKeyword("scalar");
                let r = this.parseName()
                  , n = this.parseConstDirectives();
                return this.node(e, {
                    kind: m.h.SCALAR_TYPE_DEFINITION,
                    description: t,
                    name: r,
                    directives: n
                })
            }
            parseObjectTypeDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription();
                this.expectKeyword("type");
                let r = this.parseName()
                  , n = this.parseImplementsInterfaces()
                  , i = this.parseConstDirectives()
                  , o = this.parseFieldsDefinition();
                return this.node(e, {
                    kind: m.h.OBJECT_TYPE_DEFINITION,
                    description: t,
                    name: r,
                    interfaces: n,
                    directives: i,
                    fields: o
                })
            }
            parseImplementsInterfaces() {
                return this.expectOptionalKeyword("implements") ? this.delimitedMany(i.AMP, this.parseNamedType) : []
            }
            parseFieldsDefinition() {
                return this.optionalMany(i.BRACE_L, this.parseFieldDefinition, i.BRACE_R)
            }
            parseFieldDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription()
                  , r = this.parseName()
                  , n = this.parseArgumentDefs();
                this.expectToken(i.COLON);
                let o = this.parseTypeReference()
                  , a = this.parseConstDirectives();
                return this.node(e, {
                    kind: m.h.FIELD_DEFINITION,
                    description: t,
                    name: r,
                    arguments: n,
                    type: o,
                    directives: a
                })
            }
            parseArgumentDefs() {
                return this.optionalMany(i.PAREN_L, this.parseInputValueDef, i.PAREN_R)
            }
            parseInputValueDef() {
                let e;
                let t = this._lexer.token
                  , r = this.parseDescription()
                  , n = this.parseName();
                this.expectToken(i.COLON);
                let o = this.parseTypeReference();
                this.expectOptionalToken(i.EQUALS) && (e = this.parseConstValueLiteral());
                let a = this.parseConstDirectives();
                return this.node(t, {
                    kind: m.h.INPUT_VALUE_DEFINITION,
                    description: r,
                    name: n,
                    type: o,
                    defaultValue: e,
                    directives: a
                })
            }
            parseInterfaceTypeDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription();
                this.expectKeyword("interface");
                let r = this.parseName()
                  , n = this.parseImplementsInterfaces()
                  , i = this.parseConstDirectives()
                  , o = this.parseFieldsDefinition();
                return this.node(e, {
                    kind: m.h.INTERFACE_TYPE_DEFINITION,
                    description: t,
                    name: r,
                    interfaces: n,
                    directives: i,
                    fields: o
                })
            }
            parseUnionTypeDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription();
                this.expectKeyword("union");
                let r = this.parseName()
                  , n = this.parseConstDirectives()
                  , i = this.parseUnionMemberTypes();
                return this.node(e, {
                    kind: m.h.UNION_TYPE_DEFINITION,
                    description: t,
                    name: r,
                    directives: n,
                    types: i
                })
            }
            parseUnionMemberTypes() {
                return this.expectOptionalToken(i.EQUALS) ? this.delimitedMany(i.PIPE, this.parseNamedType) : []
            }
            parseEnumTypeDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription();
                this.expectKeyword("enum");
                let r = this.parseName()
                  , n = this.parseConstDirectives()
                  , i = this.parseEnumValuesDefinition();
                return this.node(e, {
                    kind: m.h.ENUM_TYPE_DEFINITION,
                    description: t,
                    name: r,
                    directives: n,
                    values: i
                })
            }
            parseEnumValuesDefinition() {
                return this.optionalMany(i.BRACE_L, this.parseEnumValueDefinition, i.BRACE_R)
            }
            parseEnumValueDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription()
                  , r = this.parseEnumValueName()
                  , n = this.parseConstDirectives();
                return this.node(e, {
                    kind: m.h.ENUM_VALUE_DEFINITION,
                    description: t,
                    name: r,
                    directives: n
                })
            }
            parseEnumValueName() {
                if ("true" === this._lexer.token.value || "false" === this._lexer.token.value || "null" === this._lexer.token.value)
                    throw y(this._lexer.source, this._lexer.token.start, `${R(this._lexer.token)} is reserved and cannot be used for an enum value.`);
                return this.parseName()
            }
            parseInputObjectTypeDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription();
                this.expectKeyword("input");
                let r = this.parseName()
                  , n = this.parseConstDirectives()
                  , i = this.parseInputFieldsDefinition();
                return this.node(e, {
                    kind: m.h.INPUT_OBJECT_TYPE_DEFINITION,
                    description: t,
                    name: r,
                    directives: n,
                    fields: i
                })
            }
            parseInputFieldsDefinition() {
                return this.optionalMany(i.BRACE_L, this.parseInputValueDef, i.BRACE_R)
            }
            parseTypeSystemExtension() {
                let e = this._lexer.lookahead();
                if (e.kind === i.NAME)
                    switch (e.value) {
                    case "schema":
                        return this.parseSchemaExtension();
                    case "scalar":
                        return this.parseScalarTypeExtension();
                    case "type":
                        return this.parseObjectTypeExtension();
                    case "interface":
                        return this.parseInterfaceTypeExtension();
                    case "union":
                        return this.parseUnionTypeExtension();
                    case "enum":
                        return this.parseEnumTypeExtension();
                    case "input":
                        return this.parseInputObjectTypeExtension()
                    }
                throw this.unexpected(e)
            }
            parseSchemaExtension() {
                let e = this._lexer.token;
                this.expectKeyword("extend"),
                this.expectKeyword("schema");
                let t = this.parseConstDirectives()
                  , r = this.optionalMany(i.BRACE_L, this.parseOperationTypeDefinition, i.BRACE_R);
                if (0 === t.length && 0 === r.length)
                    throw this.unexpected();
                return this.node(e, {
                    kind: m.h.SCHEMA_EXTENSION,
                    directives: t,
                    operationTypes: r
                })
            }
            parseScalarTypeExtension() {
                let e = this._lexer.token;
                this.expectKeyword("extend"),
                this.expectKeyword("scalar");
                let t = this.parseName()
                  , r = this.parseConstDirectives();
                if (0 === r.length)
                    throw this.unexpected();
                return this.node(e, {
                    kind: m.h.SCALAR_TYPE_EXTENSION,
                    name: t,
                    directives: r
                })
            }
            parseObjectTypeExtension() {
                let e = this._lexer.token;
                this.expectKeyword("extend"),
                this.expectKeyword("type");
                let t = this.parseName()
                  , r = this.parseImplementsInterfaces()
                  , n = this.parseConstDirectives()
                  , i = this.parseFieldsDefinition();
                if (0 === r.length && 0 === n.length && 0 === i.length)
                    throw this.unexpected();
                return this.node(e, {
                    kind: m.h.OBJECT_TYPE_EXTENSION,
                    name: t,
                    interfaces: r,
                    directives: n,
                    fields: i
                })
            }
            parseInterfaceTypeExtension() {
                let e = this._lexer.token;
                this.expectKeyword("extend"),
                this.expectKeyword("interface");
                let t = this.parseName()
                  , r = this.parseImplementsInterfaces()
                  , n = this.parseConstDirectives()
                  , i = this.parseFieldsDefinition();
                if (0 === r.length && 0 === n.length && 0 === i.length)
                    throw this.unexpected();
                return this.node(e, {
                    kind: m.h.INTERFACE_TYPE_EXTENSION,
                    name: t,
                    interfaces: r,
                    directives: n,
                    fields: i
                })
            }
            parseUnionTypeExtension() {
                let e = this._lexer.token;
                this.expectKeyword("extend"),
                this.expectKeyword("union");
                let t = this.parseName()
                  , r = this.parseConstDirectives()
                  , n = this.parseUnionMemberTypes();
                if (0 === r.length && 0 === n.length)
                    throw this.unexpected();
                return this.node(e, {
                    kind: m.h.UNION_TYPE_EXTENSION,
                    name: t,
                    directives: r,
                    types: n
                })
            }
            parseEnumTypeExtension() {
                let e = this._lexer.token;
                this.expectKeyword("extend"),
                this.expectKeyword("enum");
                let t = this.parseName()
                  , r = this.parseConstDirectives()
                  , n = this.parseEnumValuesDefinition();
                if (0 === r.length && 0 === n.length)
                    throw this.unexpected();
                return this.node(e, {
                    kind: m.h.ENUM_TYPE_EXTENSION,
                    name: t,
                    directives: r,
                    values: n
                })
            }
            parseInputObjectTypeExtension() {
                let e = this._lexer.token;
                this.expectKeyword("extend"),
                this.expectKeyword("input");
                let t = this.parseName()
                  , r = this.parseConstDirectives()
                  , n = this.parseInputFieldsDefinition();
                if (0 === r.length && 0 === n.length)
                    throw this.unexpected();
                return this.node(e, {
                    kind: m.h.INPUT_OBJECT_TYPE_EXTENSION,
                    name: t,
                    directives: r,
                    fields: n
                })
            }
            parseDirectiveDefinition() {
                let e = this._lexer.token
                  , t = this.parseDescription();
                this.expectKeyword("directive"),
                this.expectToken(i.AT);
                let r = this.parseName()
                  , n = this.parseArgumentDefs()
                  , o = this.expectOptionalKeyword("repeatable");
                this.expectKeyword("on");
                let a = this.parseDirectiveLocations();
                return this.node(e, {
                    kind: m.h.DIRECTIVE_DEFINITION,
                    description: t,
                    name: r,
                    arguments: n,
                    repeatable: o,
                    locations: a
                })
            }
            parseDirectiveLocations() {
                return this.delimitedMany(i.PIPE, this.parseDirectiveLocation)
            }
            parseDirectiveLocation() {
                let e = this._lexer.token
                  , t = this.parseName();
                if (Object.prototype.hasOwnProperty.call(n, t.value))
                    return t;
                throw this.unexpected(e)
            }
            node(e, t) {
                var r;
                return (null === (r = this._options) || void 0 === r ? void 0 : r.noLocation) !== !0 && (t.loc = new v.Ye(e,this._lexer.lastToken,this._lexer.source)),
                t
            }
            peek(e) {
                return this._lexer.token.kind === e
            }
            expectToken(e) {
                let t = this._lexer.token;
                if (t.kind === e)
                    return this._lexer.advance(),
                    t;
                throw y(this._lexer.source, t.start, `Expected ${C(e)}, found ${R(t)}.`)
            }
            expectOptionalToken(e) {
                let t = this._lexer.token;
                return t.kind === e && (this._lexer.advance(),
                !0)
            }
            expectKeyword(e) {
                let t = this._lexer.token;
                if (t.kind === i.NAME && t.value === e)
                    this._lexer.advance();
                else
                    throw y(this._lexer.source, t.start, `Expected "${e}", found ${R(t)}.`)
            }
            expectOptionalKeyword(e) {
                let t = this._lexer.token;
                return t.kind === i.NAME && t.value === e && (this._lexer.advance(),
                !0)
            }
            unexpected(e) {
                let t = null != e ? e : this._lexer.token;
                return y(this._lexer.source, t.start, `Unexpected ${R(t)}.`)
            }
            any(e, t, r) {
                this.expectToken(e);
                let n = [];
                for (; !this.expectOptionalToken(r); )
                    n.push(t.call(this));
                return n
            }
            optionalMany(e, t, r) {
                if (this.expectOptionalToken(e)) {
                    let n = [];
                    do
                        n.push(t.call(this));
                    while (!this.expectOptionalToken(r));
                    return n
                }
                return []
            }
            many(e, t, r) {
                this.expectToken(e);
                let n = [];
                do
                    n.push(t.call(this));
                while (!this.expectOptionalToken(r));
                return n
            }
            delimitedMany(e, t) {
                this.expectOptionalToken(e);
                let r = [];
                do
                    r.push(t.call(this));
                while (this.expectOptionalToken(e));
                return r
            }
        }
        function R(e) {
            let t = e.value;
            return C(e.kind) + (null != t ? ` "${t}"` : "")
        }
        function C(e) {
            return e === i.BANG || e === i.DOLLAR || e === i.AMP || e === i.PAREN_L || e === i.PAREN_R || e === i.SPREAD || e === i.COLON || e === i.EQUALS || e === i.AT || e === i.BRACKET_L || e === i.BRACKET_R || e === i.BRACE_L || e === i.PIPE || e === i.BRACE_R ? `"${e}"` : e
        }
        var F = new Map
          , P = new Map
          , M = !0
          , j = !1;
        function L(e) {
            return e.replace(/[\s,]+/g, " ").trim()
        }
        function q(e) {
            for (var t = [], r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
            "string" == typeof e && (e = [e]);
            var n = e[0];
            return t.forEach(function(t, r) {
                t && "Document" === t.kind ? n += t.loc.source.body : n += t,
                n += e[r + 1]
            }),
            function(e) {
                var t = L(e);
                if (!F.has(t)) {
                    var r, n, i, o, a, s = function(e, t) {
                        let r = new A(e,t);
                        return r.parseDocument()
                    }(e, {
                        experimentalFragmentVariables: j,
                        allowLegacyFragmentVariables: j
                    });
                    if (!s || "Document" !== s.kind)
                        throw Error("Not a valid GraphQL document.");
                    F.set(t, (r = new Set,
                    n = [],
                    s.definitions.forEach(function(e) {
                        if ("FragmentDefinition" === e.kind) {
                            var t, i = e.name.value, o = L((t = e.loc).source.body.substring(t.start, t.end)), a = P.get(i);
                            a && !a.has(o) ? M && console.warn("Warning: fragment with name " + i + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : a || P.set(i, a = new Set),
                            a.add(o),
                            r.has(o) || (r.add(o),
                            n.push(e))
                        } else
                            n.push(e)
                    }),
                    i = (0,
                    u.pi)((0,
                    u.pi)({}, s), {
                        definitions: n
                    }),
                    (o = new Set(i.definitions)).forEach(function(e) {
                        e.loc && delete e.loc,
                        Object.keys(e).forEach(function(t) {
                            var r = e[t];
                            r && "object" == typeof r && o.add(r)
                        })
                    }),
                    (a = i.loc) && (delete a.startToken,
                    delete a.endToken),
                    i))
                }
                return F.get(t)
            }(n)
        }
        var V = {
            gql: q,
            resetCaches: function() {
                F.clear(),
                P.clear()
            },
            disableFragmentWarnings: function() {
                M = !1
            },
            enableExperimentalFragmentVariables: function() {
                j = !0
            },
            disableExperimentalFragmentVariables: function() {
                j = !1
            }
        };
        (s = q || (q = {})).gql = V.gql,
        s.resetCaches = V.resetCaches,
        s.disableFragmentWarnings = V.disableFragmentWarnings,
        s.enableExperimentalFragmentVariables = V.enableExperimentalFragmentVariables,
        s.disableExperimentalFragmentVariables = V.disableExperimentalFragmentVariables,
        q.default = q
    },
    8845: function(e, t, r) {
        e.exports = r(6543)
    },
    1118: function(e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return r(2721)
        }
        ])
    },
    6937: function() {},
    8509: function(e) {
        e.exports = {
            progressbarColor: "#0070f3"
        }
    },
    3461: function(e, t, r) {
        "use strict";
        r.d(t, {
            X$: function() {
                return H
            },
            ZP: function() {
                return X
            }
        });
        var n = r(1844)
          , i = r(5784);
        function o(e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === f(e)
        }
        let a = 1 / 0;
        function s(e) {
            return "string" == typeof e
        }
        function u(e) {
            return "number" == typeof e
        }
        function c(e) {
            return "object" == typeof e
        }
        function l(e) {
            return null != e
        }
        function h(e) {
            return !e.trim().length
        }
        function f(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e)
        }
        let p = e=>`Invalid value for key ${e}`
          , d = e=>`Pattern length exceeds max of ${e}.`
          , y = e=>`Missing ${e} property in key`
          , v = e=>`Property 'weight' in key '${e}' must be a positive integer`
          , m = Object.prototype.hasOwnProperty;
        class g {
            constructor(e) {
                this._keys = [],
                this._keyMap = {};
                let t = 0;
                e.forEach(e=>{
                    let r = b(e);
                    t += r.weight,
                    this._keys.push(r),
                    this._keyMap[r.id] = r,
                    t += r.weight
                }
                ),
                this._keys.forEach(e=>{
                    e.weight /= t
                }
                )
            }
            get(e) {
                return this._keyMap[e]
            }
            keys() {
                return this._keys
            }
            toJSON() {
                return JSON.stringify(this._keys)
            }
        }
        function b(e) {
            let t = null
              , r = null
              , n = null
              , i = 1
              , a = null;
            if (s(e) || o(e))
                n = e,
                t = _(e),
                r = E(e);
            else {
                if (!m.call(e, "name"))
                    throw Error(y("name"));
                let u = e.name;
                if (n = u,
                m.call(e, "weight") && (i = e.weight) <= 0)
                    throw Error(v(u));
                t = _(u),
                r = E(u),
                a = e.getFn
            }
            return {
                path: t,
                id: r,
                weight: i,
                src: n,
                getFn: a
            }
        }
        function _(e) {
            return o(e) ? e : e.split(".")
        }
        function E(e) {
            return o(e) ? e.join(".") : e
        }
        var w = {
            isCaseSensitive: !1,
            includeScore: !1,
            keys: [],
            shouldSort: !0,
            sortFn: (e,t)=>e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1,
            includeMatches: !1,
            findAllMatches: !1,
            minMatchCharLength: 1,
            location: 0,
            threshold: .6,
            distance: 100,
            useExtendedSearch: !1,
            getFn: function(e, t) {
                let r = []
                  , n = !1
                  , i = (e,t,h)=>{
                    if (l(e)) {
                        if (t[h]) {
                            var p, d;
                            let y = t[h]
                              , v = e[y];
                            if (l(v)) {
                                if (h === t.length - 1 && (s(v) || u(v) || !0 === (p = v) || !1 === p || c(d = p) && null !== d && "[object Boolean]" == f(p)))
                                    r.push(null == v ? "" : function(e) {
                                        if ("string" == typeof e)
                                            return e;
                                        let t = e + "";
                                        return "0" == t && 1 / e == -a ? "-0" : t
                                    }(v));
                                else if (o(v)) {
                                    n = !0;
                                    for (let m = 0, g = v.length; m < g; m += 1)
                                        i(v[m], t, h + 1)
                                } else
                                    t.length && i(v, t, h + 1)
                            }
                        } else
                            r.push(e)
                    }
                }
                ;
                return i(e, s(t) ? t.split(".") : t, 0),
                n ? r : r[0]
            },
            ignoreLocation: !1,
            ignoreFieldNorm: !1,
            fieldNormWeight: 1
        };
        let O = /[^ ]+/g;
        class k {
            constructor({getFn: e=w.getFn, fieldNormWeight: t=w.fieldNormWeight}={}) {
                this.norm = function(e=1, t=3) {
                    let r = new Map
                      , n = Math.pow(10, t);
                    return {
                        get(t) {
                            let i = t.match(O).length;
                            if (r.has(i))
                                return r.get(i);
                            let o = parseFloat(Math.round(1 / Math.pow(i, .5 * e) * n) / n);
                            return r.set(i, o),
                            o
                        },
                        clear() {
                            r.clear()
                        }
                    }
                }(t, 3),
                this.getFn = e,
                this.isCreated = !1,
                this.setIndexRecords()
            }
            setSources(e=[]) {
                this.docs = e
            }
            setIndexRecords(e=[]) {
                this.records = e
            }
            setKeys(e=[]) {
                this.keys = e,
                this._keysMap = {},
                e.forEach((e,t)=>{
                    this._keysMap[e.id] = t
                }
                )
            }
            create() {
                !this.isCreated && this.docs.length && (this.isCreated = !0,
                s(this.docs[0]) ? this.docs.forEach((e,t)=>{
                    this._addString(e, t)
                }
                ) : this.docs.forEach((e,t)=>{
                    this._addObject(e, t)
                }
                ),
                this.norm.clear())
            }
            add(e) {
                let t = this.size();
                s(e) ? this._addString(e, t) : this._addObject(e, t)
            }
            removeAt(e) {
                this.records.splice(e, 1);
                for (let t = e, r = this.size(); t < r; t += 1)
                    this.records[t].i -= 1
            }
            getValueForItemAtKeyId(e, t) {
                return e[this._keysMap[t]]
            }
            size() {
                return this.records.length
            }
            _addString(e, t) {
                if (!l(e) || h(e))
                    return;
                let r = {
                    v: e,
                    i: t,
                    n: this.norm.get(e)
                };
                this.records.push(r)
            }
            _addObject(e, t) {
                let r = {
                    i: t,
                    $: {}
                };
                this.keys.forEach((t,n)=>{
                    let i = t.getFn ? t.getFn(e) : this.getFn(e, t.path);
                    if (l(i)) {
                        if (o(i)) {
                            let a = []
                              , u = [{
                                nestedArrIndex: -1,
                                value: i
                            }];
                            for (; u.length; ) {
                                let {nestedArrIndex: c, value: f} = u.pop();
                                if (l(f)) {
                                    if (s(f) && !h(f)) {
                                        let p = {
                                            v: f,
                                            i: c,
                                            n: this.norm.get(f)
                                        };
                                        a.push(p)
                                    } else
                                        o(f) && f.forEach((e,t)=>{
                                            u.push({
                                                nestedArrIndex: t,
                                                value: e
                                            })
                                        }
                                        )
                                }
                            }
                            r.$[n] = a
                        } else if (s(i) && !h(i)) {
                            let d = {
                                v: i,
                                n: this.norm.get(i)
                            };
                            r.$[n] = d
                        }
                    }
                }
                ),
                this.records.push(r)
            }
            toJSON() {
                return {
                    keys: this.keys,
                    records: this.records
                }
            }
        }
        function T(e, t, {getFn: r=w.getFn, fieldNormWeight: n=w.fieldNormWeight}={}) {
            let i = new k({
                getFn: r,
                fieldNormWeight: n
            });
            return i.setKeys(e.map(b)),
            i.setSources(t),
            i.create(),
            i
        }
        function x(e, {errors: t=0, currentLocation: r=0, expectedLocation: n=0, distance: i=w.distance, ignoreLocation: o=w.ignoreLocation}={}) {
            let a = t / e.length;
            if (o)
                return a;
            let s = Math.abs(n - r);
            return i ? a + s / i : s ? 1 : a
        }
        class S {
            constructor(e, {location: t=w.location, threshold: r=w.threshold, distance: n=w.distance, includeMatches: i=w.includeMatches, findAllMatches: o=w.findAllMatches, minMatchCharLength: a=w.minMatchCharLength, isCaseSensitive: s=w.isCaseSensitive, ignoreLocation: u=w.ignoreLocation}={}) {
                if (this.options = {
                    location: t,
                    threshold: r,
                    distance: n,
                    includeMatches: i,
                    findAllMatches: o,
                    minMatchCharLength: a,
                    isCaseSensitive: s,
                    ignoreLocation: u
                },
                this.pattern = s ? e : e.toLowerCase(),
                this.chunks = [],
                !this.pattern.length)
                    return;
                let c = (e,t)=>{
                    this.chunks.push({
                        pattern: e,
                        alphabet: function(e) {
                            let t = {};
                            for (let r = 0, n = e.length; r < n; r += 1) {
                                let i = e.charAt(r);
                                t[i] = (t[i] || 0) | 1 << n - r - 1
                            }
                            return t
                        }(e),
                        startIndex: t
                    })
                }
                  , l = this.pattern.length;
                if (l > 32) {
                    let h = 0
                      , f = l % 32
                      , p = l - f;
                    for (; h < p; )
                        c(this.pattern.substr(h, 32), h),
                        h += 32;
                    if (f) {
                        let d = l - 32;
                        c(this.pattern.substr(d), d)
                    }
                } else
                    c(this.pattern, 0)
            }
            searchIn(e) {
                let {isCaseSensitive: t, includeMatches: r} = this.options;
                if (t || (e = e.toLowerCase()),
                this.pattern === e) {
                    let n = {
                        isMatch: !0,
                        score: 0
                    };
                    return r && (n.indices = [[0, e.length - 1]]),
                    n
                }
                let {location: i, distance: o, threshold: a, findAllMatches: s, minMatchCharLength: u, ignoreLocation: c} = this.options
                  , l = []
                  , h = 0
                  , f = !1;
                this.chunks.forEach(({pattern: t, alphabet: n, startIndex: p})=>{
                    let {isMatch: y, score: v, indices: m} = function(e, t, r, {location: n=w.location, distance: i=w.distance, threshold: o=w.threshold, findAllMatches: a=w.findAllMatches, minMatchCharLength: s=w.minMatchCharLength, includeMatches: u=w.includeMatches, ignoreLocation: c=w.ignoreLocation}={}) {
                        let l;
                        if (t.length > 32)
                            throw Error(d(32));
                        let h = t.length
                          , f = e.length
                          , p = Math.max(0, Math.min(n, f))
                          , y = o
                          , v = p
                          , m = s > 1 || u
                          , g = m ? Array(f) : [];
                        for (; (l = e.indexOf(t, v)) > -1; )
                            if (y = Math.min(x(t, {
                                currentLocation: l,
                                expectedLocation: p,
                                distance: i,
                                ignoreLocation: c
                            }), y),
                            v = l + h,
                            m) {
                                let b = 0;
                                for (; b < h; )
                                    g[l + b] = 1,
                                    b += 1
                            }
                        v = -1;
                        let _ = []
                          , E = 1
                          , O = h + f
                          , k = 1 << h - 1;
                        for (let T = 0; T < h; T += 1) {
                            let S = 0
                              , I = O;
                            for (; S < I; ) {
                                let D = x(t, {
                                    errors: T,
                                    currentLocation: p + I,
                                    expectedLocation: p,
                                    distance: i,
                                    ignoreLocation: c
                                });
                                D <= y ? S = I : O = I,
                                I = Math.floor((O - S) / 2 + S)
                            }
                            O = I;
                            let N = Math.max(1, p - I + 1)
                              , A = a ? f : Math.min(p + I, f) + h
                              , R = Array(A + 2);
                            R[A + 1] = (1 << T) - 1;
                            for (let C = A; C >= N; C -= 1) {
                                let F = C - 1
                                  , P = r[e.charAt(F)];
                                if (m && (g[F] = +!!P),
                                R[C] = (R[C + 1] << 1 | 1) & P,
                                T && (R[C] |= (_[C + 1] | _[C]) << 1 | 1 | _[C + 1]),
                                R[C] & k && (E = x(t, {
                                    errors: T,
                                    currentLocation: F,
                                    expectedLocation: p,
                                    distance: i,
                                    ignoreLocation: c
                                })) <= y) {
                                    if (y = E,
                                    (v = F) <= p)
                                        break;
                                    N = Math.max(1, 2 * p - v)
                                }
                            }
                            let M = x(t, {
                                errors: T + 1,
                                currentLocation: p,
                                expectedLocation: p,
                                distance: i,
                                ignoreLocation: c
                            });
                            if (M > y)
                                break;
                            _ = R
                        }
                        let j = {
                            isMatch: v >= 0,
                            score: Math.max(.001, E)
                        };
                        if (m) {
                            let L = function(e=[], t=w.minMatchCharLength) {
                                let r = []
                                  , n = -1
                                  , i = -1
                                  , o = 0;
                                for (let a = e.length; o < a; o += 1) {
                                    let s = e[o];
                                    s && -1 === n ? n = o : s || -1 === n || ((i = o - 1) - n + 1 >= t && r.push([n, i]),
                                    n = -1)
                                }
                                return e[o - 1] && o - n >= t && r.push([n, o - 1]),
                                r
                            }(g, s);
                            L.length ? u && (j.indices = L) : j.isMatch = !1
                        }
                        return j
                    }(e, t, n, {
                        location: i + p,
                        distance: o,
                        threshold: a,
                        findAllMatches: s,
                        minMatchCharLength: u,
                        includeMatches: r,
                        ignoreLocation: c
                    });
                    y && (f = !0),
                    h += v,
                    y && m && (l = [...l, ...m])
                }
                );
                let p = {
                    isMatch: f,
                    score: f ? h / this.chunks.length : 1
                };
                return f && r && (p.indices = l),
                p
            }
        }
        class I {
            constructor(e) {
                this.pattern = e
            }
            static isMultiMatch(e) {
                return D(e, this.multiRegex)
            }
            static isSingleMatch(e) {
                return D(e, this.singleRegex)
            }
            search() {}
        }
        function D(e, t) {
            let r = e.match(t);
            return r ? r[1] : null
        }
        class N extends I {
            constructor(e, {location: t=w.location, threshold: r=w.threshold, distance: n=w.distance, includeMatches: i=w.includeMatches, findAllMatches: o=w.findAllMatches, minMatchCharLength: a=w.minMatchCharLength, isCaseSensitive: s=w.isCaseSensitive, ignoreLocation: u=w.ignoreLocation}={}) {
                super(e),
                this._bitapSearch = new S(e,{
                    location: t,
                    threshold: r,
                    distance: n,
                    includeMatches: i,
                    findAllMatches: o,
                    minMatchCharLength: a,
                    isCaseSensitive: s,
                    ignoreLocation: u
                })
            }
            static get type() {
                return "fuzzy"
            }
            static get multiRegex() {
                return /^"(.*)"$/
            }
            static get singleRegex() {
                return /^(.*)$/
            }
            search(e) {
                return this._bitapSearch.searchIn(e)
            }
        }
        class A extends I {
            constructor(e) {
                super(e)
            }
            static get type() {
                return "include"
            }
            static get multiRegex() {
                return /^'"(.*)"$/
            }
            static get singleRegex() {
                return /^'(.*)$/
            }
            search(e) {
                let t, r = 0, n = [], i = this.pattern.length;
                for (; (t = e.indexOf(this.pattern, r)) > -1; )
                    r = t + i,
                    n.push([t, r - 1]);
                let o = !!n.length;
                return {
                    isMatch: o,
                    score: o ? 0 : 1,
                    indices: n
                }
            }
        }
        let R = [class extends I {
            constructor(e) {
                super(e)
            }
            static get type() {
                return "exact"
            }
            static get multiRegex() {
                return /^="(.*)"$/
            }
            static get singleRegex() {
                return /^=(.*)$/
            }
            search(e) {
                let t = e === this.pattern;
                return {
                    isMatch: t,
                    score: t ? 0 : 1,
                    indices: [0, this.pattern.length - 1]
                }
            }
        }
        , A, class extends I {
            constructor(e) {
                super(e)
            }
            static get type() {
                return "prefix-exact"
            }
            static get multiRegex() {
                return /^\^"(.*)"$/
            }
            static get singleRegex() {
                return /^\^(.*)$/
            }
            search(e) {
                let t = e.startsWith(this.pattern);
                return {
                    isMatch: t,
                    score: t ? 0 : 1,
                    indices: [0, this.pattern.length - 1]
                }
            }
        }
        , class extends I {
            constructor(e) {
                super(e)
            }
            static get type() {
                return "inverse-prefix-exact"
            }
            static get multiRegex() {
                return /^!\^"(.*)"$/
            }
            static get singleRegex() {
                return /^!\^(.*)$/
            }
            search(e) {
                let t = !e.startsWith(this.pattern);
                return {
                    isMatch: t,
                    score: t ? 0 : 1,
                    indices: [0, e.length - 1]
                }
            }
        }
        , class extends I {
            constructor(e) {
                super(e)
            }
            static get type() {
                return "inverse-suffix-exact"
            }
            static get multiRegex() {
                return /^!"(.*)"\$$/
            }
            static get singleRegex() {
                return /^!(.*)\$$/
            }
            search(e) {
                let t = !e.endsWith(this.pattern);
                return {
                    isMatch: t,
                    score: t ? 0 : 1,
                    indices: [0, e.length - 1]
                }
            }
        }
        , class extends I {
            constructor(e) {
                super(e)
            }
            static get type() {
                return "suffix-exact"
            }
            static get multiRegex() {
                return /^"(.*)"\$$/
            }
            static get singleRegex() {
                return /^(.*)\$$/
            }
            search(e) {
                let t = e.endsWith(this.pattern);
                return {
                    isMatch: t,
                    score: t ? 0 : 1,
                    indices: [e.length - this.pattern.length, e.length - 1]
                }
            }
        }
        , class extends I {
            constructor(e) {
                super(e)
            }
            static get type() {
                return "inverse-exact"
            }
            static get multiRegex() {
                return /^!"(.*)"$/
            }
            static get singleRegex() {
                return /^!(.*)$/
            }
            search(e) {
                let t = e.indexOf(this.pattern)
                  , r = -1 === t;
                return {
                    isMatch: r,
                    score: r ? 0 : 1,
                    indices: [0, e.length - 1]
                }
            }
        }
        , N]
          , C = R.length
          , F = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/
          , P = new Set([N.type, A.type])
          , M = [];
        function j(e, t) {
            for (let r = 0, n = M.length; r < n; r += 1) {
                let i = M[r];
                if (i.condition(e, t))
                    return new i(e,t)
            }
            return new S(e,t)
        }
        let L = {
            AND: "$and",
            OR: "$or"
        }
          , q = {
            PATH: "$path",
            PATTERN: "$val"
        }
          , V = e=>!!(e[L.AND] || e[L.OR])
          , Q = e=>!!e[q.PATH]
          , U = e=>!o(e) && c(e) && !V(e)
          , B = e=>({
            [L.AND]: Object.keys(e).map(t=>({
                [t]: e[t]
            }))
        });
        function z(e, t, {auto: r=!0}={}) {
            let n = e=>{
                let i = Object.keys(e)
                  , a = Q(e);
                if (!a && i.length > 1 && !V(e))
                    return n(B(e));
                if (U(e)) {
                    let u = a ? e[q.PATH] : i[0]
                      , c = a ? e[q.PATTERN] : e[u];
                    if (!s(c))
                        throw Error(p(u));
                    let l = {
                        keyId: E(u),
                        pattern: c
                    };
                    return r && (l.searcher = j(c, t)),
                    l
                }
                let h = {
                    children: [],
                    operator: i[0]
                };
                return i.forEach(t=>{
                    let r = e[t];
                    o(r) && r.forEach(e=>{
                        h.children.push(n(e))
                    }
                    )
                }
                ),
                h
            }
            ;
            return V(e) || (e = B(e)),
            n(e)
        }
        function W(e, t) {
            let r = e.matches;
            t.matches = [],
            l(r) && r.forEach(e=>{
                if (!l(e.indices) || !e.indices.length)
                    return;
                let {indices: r, value: n} = e
                  , i = {
                    indices: r,
                    value: n
                };
                e.key && (i.key = e.key.src),
                e.idx > -1 && (i.refIndex = e.idx),
                t.matches.push(i)
            }
            )
        }
        function $(e, t) {
            t.score = e.score
        }
        class G {
            constructor(e, t={}, r) {
                this.options = {
                    ...w,
                    ...t
                },
                this.options.useExtendedSearch,
                this._keyStore = new g(this.options.keys),
                this.setCollection(e, r)
            }
            setCollection(e, t) {
                if (this._docs = e,
                t && !(t instanceof k))
                    throw Error("Incorrect 'index' type");
                this._myIndex = t || T(this.options.keys, this._docs, {
                    getFn: this.options.getFn,
                    fieldNormWeight: this.options.fieldNormWeight
                })
            }
            add(e) {
                l(e) && (this._docs.push(e),
                this._myIndex.add(e))
            }
            remove(e=()=>!1) {
                let t = [];
                for (let r = 0, n = this._docs.length; r < n; r += 1) {
                    let i = this._docs[r];
                    e(i, r) && (this.removeAt(r),
                    r -= 1,
                    n -= 1,
                    t.push(i))
                }
                return t
            }
            removeAt(e) {
                this._docs.splice(e, 1),
                this._myIndex.removeAt(e)
            }
            getIndex() {
                return this._myIndex
            }
            search(e, {limit: t=-1}={}) {
                let {includeMatches: r, includeScore: n, shouldSort: i, sortFn: o, ignoreFieldNorm: a} = this.options
                  , c = s(e) ? s(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
                return !function(e, {ignoreFieldNorm: t=w.ignoreFieldNorm}) {
                    e.forEach(e=>{
                        let r = 1;
                        e.matches.forEach(({key: e, norm: n, score: i})=>{
                            let o = e ? e.weight : null;
                            r *= Math.pow(0 === i && o ? Number.EPSILON : i, (o || 1) * (t ? 1 : n))
                        }
                        ),
                        e.score = r
                    }
                    )
                }(c, {
                    ignoreFieldNorm: a
                }),
                i && c.sort(o),
                u(t) && t > -1 && (c = c.slice(0, t)),
                function(e, t, {includeMatches: r=w.includeMatches, includeScore: n=w.includeScore}={}) {
                    let i = [];
                    return r && i.push(W),
                    n && i.push($),
                    e.map(e=>{
                        let {idx: r} = e
                          , n = {
                            item: t[r],
                            refIndex: r
                        };
                        return i.length && i.forEach(t=>{
                            t(e, n)
                        }
                        ),
                        n
                    }
                    )
                }(c, this._docs, {
                    includeMatches: r,
                    includeScore: n
                })
            }
            _searchStringList(e) {
                let t = j(e, this.options)
                  , {records: r} = this._myIndex
                  , n = [];
                return r.forEach(({v: e, i: r, n: i})=>{
                    if (!l(e))
                        return;
                    let {isMatch: o, score: a, indices: s} = t.searchIn(e);
                    o && n.push({
                        item: e,
                        idx: r,
                        matches: [{
                            score: a,
                            value: e,
                            norm: i,
                            indices: s
                        }]
                    })
                }
                ),
                n
            }
            _searchLogical(e) {
                let t = z(e, this.options)
                  , r = (e,t,n)=>{
                    if (!e.children) {
                        let {keyId: i, searcher: o} = e
                          , a = this._findMatches({
                            key: this._keyStore.get(i),
                            value: this._myIndex.getValueForItemAtKeyId(t, i),
                            searcher: o
                        });
                        return a && a.length ? [{
                            idx: n,
                            item: t,
                            matches: a
                        }] : []
                    }
                    let s = [];
                    for (let u = 0, c = e.children.length; u < c; u += 1) {
                        let l = e.children[u]
                          , h = r(l, t, n);
                        if (h.length)
                            s.push(...h);
                        else if (e.operator === L.AND)
                            return []
                    }
                    return s
                }
                  , n = this._myIndex.records
                  , i = {}
                  , o = [];
                return n.forEach(({$: e, i: n})=>{
                    if (l(e)) {
                        let a = r(t, e, n);
                        a.length && (i[n] || (i[n] = {
                            idx: n,
                            item: e,
                            matches: []
                        },
                        o.push(i[n])),
                        a.forEach(({matches: e})=>{
                            i[n].matches.push(...e)
                        }
                        ))
                    }
                }
                ),
                o
            }
            _searchObjectList(e) {
                let t = j(e, this.options)
                  , {keys: r, records: n} = this._myIndex
                  , i = [];
                return n.forEach(({$: e, i: n})=>{
                    if (!l(e))
                        return;
                    let o = [];
                    r.forEach((r,n)=>{
                        o.push(...this._findMatches({
                            key: r,
                            value: e[n],
                            searcher: t
                        }))
                    }
                    ),
                    o.length && i.push({
                        idx: n,
                        item: e,
                        matches: o
                    })
                }
                ),
                i
            }
            _findMatches({key: e, value: t, searcher: r}) {
                if (!l(t))
                    return [];
                let n = [];
                if (o(t))
                    t.forEach(({v: t, i: i, n: o})=>{
                        if (!l(t))
                            return;
                        let {isMatch: a, score: s, indices: u} = r.searchIn(t);
                        a && n.push({
                            score: s,
                            key: e,
                            value: t,
                            idx: i,
                            norm: o,
                            indices: u
                        })
                    }
                    );
                else {
                    let {v: i, n: a} = t
                      , {isMatch: s, score: u, indices: c} = r.searchIn(i);
                    s && n.push({
                        score: u,
                        key: e,
                        value: i,
                        norm: a,
                        indices: c
                    })
                }
                return n
            }
        }
        async function K() {
            let e = await fetch("/wp-search.json")
              , t = await e.json();
            return t
        }
        G.version = "6.6.2",
        G.createIndex = T,
        G.parseIndex = function(e, {getFn: t=w.getFn, fieldNormWeight: r=w.fieldNormWeight}={}) {
            let {keys: n, records: i} = e
              , o = new k({
                getFn: t,
                fieldNormWeight: r
            });
            return o.setKeys(n),
            o.setIndexRecords(i),
            o
        }
        ,
        G.config = w,
        G.parseQuery = z,
        function(...e) {
            M.push(...e)
        }(class {
            constructor(e, {isCaseSensitive: t=w.isCaseSensitive, includeMatches: r=w.includeMatches, minMatchCharLength: n=w.minMatchCharLength, ignoreLocation: i=w.ignoreLocation, findAllMatches: o=w.findAllMatches, location: a=w.location, threshold: s=w.threshold, distance: u=w.distance}={}) {
                this.query = null,
                this.options = {
                    isCaseSensitive: t,
                    includeMatches: r,
                    minMatchCharLength: n,
                    findAllMatches: o,
                    ignoreLocation: i,
                    location: a,
                    threshold: s,
                    distance: u
                },
                this.pattern = t ? e : e.toLowerCase(),
                this.query = function(e, t={}) {
                    return e.split("|").map(e=>{
                        let r = e.trim().split(F).filter(e=>e && !!e.trim())
                          , n = [];
                        for (let i = 0, o = r.length; i < o; i += 1) {
                            let a = r[i]
                              , s = !1
                              , u = -1;
                            for (; !s && ++u < C; ) {
                                let c = R[u]
                                  , l = c.isMultiMatch(a);
                                l && (n.push(new c(l,t)),
                                s = !0)
                            }
                            if (!s)
                                for (u = -1; ++u < C; ) {
                                    let h = R[u]
                                      , f = h.isSingleMatch(a);
                                    if (f) {
                                        n.push(new h(f,t));
                                        break
                                    }
                                }
                        }
                        return n
                    }
                    )
                }(this.pattern, this.options)
            }
            static condition(e, t) {
                return t.useExtendedSearch
            }
            searchIn(e) {
                let t = this.query;
                if (!t)
                    return {
                        isMatch: !1,
                        score: 1
                    };
                let {includeMatches: r, isCaseSensitive: n} = this.options;
                e = n ? e : e.toLowerCase();
                let i = 0
                  , o = []
                  , a = 0;
                for (let s = 0, u = t.length; s < u; s += 1) {
                    let c = t[s];
                    o.length = 0,
                    i = 0;
                    for (let l = 0, h = c.length; l < h; l += 1) {
                        let f = c[l]
                          , {isMatch: p, indices: d, score: y} = f.search(e);
                        if (p) {
                            if (i += 1,
                            a += y,
                            r) {
                                let v = f.constructor.type;
                                P.has(v) ? o = [...o, ...d] : o.push(d)
                            }
                        } else {
                            a = 0,
                            i = 0,
                            o.length = 0;
                            break
                        }
                    }
                    if (i) {
                        let m = {
                            isMatch: !0,
                            score: a / i
                        };
                        return r && (m.indices = o),
                        m
                    }
                }
                return {
                    isMatch: !1,
                    score: 1
                }
            }
        }
        );
        let J = ["slug", "title"]
          , Y = (0,
        i.createContext)()
          , H = e=>{
            let t = function() {
                let e;
                let[t,r] = (0,
                i.useState)("READY")
                  , [n,o] = (0,
                i.useState)(null);
                return n && (e = new G(n.posts,{
                    keys: J,
                    isCaseSensitive: !1
                })),
                (0,
                i.useEffect)(()=>{
                    !async function() {
                        let e;
                        r("LOADING");
                        try {
                            e = await K()
                        } catch (t) {
                            r("ERROR");
                            return
                        }
                        o(e),
                        r("LOADED")
                    }()
                }
                , []),
                {
                    state: t,
                    data: n,
                    client: e
                }
            }();
            return (0,
            n.jsx)(Y.Provider, {
                value: t,
                ...e
            })
        }
        ;
        function X() {
            let {defaultQuery: e=null, maxResults: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , r = (0,
            i.useContext)(Y)
              , {client: n} = r
              , [o,a] = (0,
            i.useState)(e)
              , s = [];
            return n && o && (s = n.search(o).map(e=>{
                let {item: t} = e;
                return t
            }
            )),
            t && s.length > t && (s = s.slice(0, t)),
            (0,
            i.useEffect)(()=>a(e), [e]),
            {
                ...r,
                query: o,
                results: s,
                search: function(e) {
                    let {query: t} = e;
                    a(t)
                },
                clearSearch: function() {
                    a(null)
                }
            }
        }
    },
    5298: function(e, t, r) {
        "use strict";
        r.d(t, {
            AA: function() {
                return s
            },
            DN: function() {
                return a
            },
            ZP: function() {
                return u
            }
        });
        var n = r(5784)
          , i = r(4147)
          , o = r(1779);
        let a = (0,
        n.createContext)();
        function s(e) {
            let {homepage: t=""} = i;
            return t = (0,
            o.bq)(t),
            {
                ...e,
                homepage: t
            }
        }
        function u() {
            let e = (0,
            n.useContext)(a);
            return e
        }
    },
    5509: function(e, t, r) {
        "use strict";
        let n;
        r.d(t, {
            W: function() {
                return nh
            }
        });
        var i, o, a, s, u, c, l, h, f = r(655), p = "Invariant Violation", d = Object.setPrototypeOf, y = void 0 === d ? function(e, t) {
            return e.__proto__ = t,
            e
        }
        : d, v = function(e) {
            function t(r) {
                void 0 === r && (r = p);
                var n = e.call(this, "number" == typeof r ? p + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
                return n.framesToPop = 1,
                n.name = p,
                y(n, t.prototype),
                n
            }
            return (0,
            f.ZT)(t, e),
            t
        }(Error);
        function m(e, t) {
            if (!e)
                throw new v(t)
        }
        var g = ["debug", "log", "warn", "error", "silent"]
          , b = g.indexOf("log");
        function _(e) {
            return function() {
                if (g.indexOf(e) >= b)
                    return (console[e] || console.log).apply(console, arguments)
            }
        }
        function E(e) {
            try {
                return e()
            } catch (t) {}
        }
        (i = m || (m = {})).debug = _("debug"),
        i.log = _("log"),
        i.warn = _("warn"),
        i.error = _("error");
        var w = E(function() {
            return globalThis
        }) || E(function() {
            return window
        }) || E(function() {
            return self
        }) || E(function() {
            return global
        }) || E(function() {
            return E.constructor("return this")()
        })
          , O = "__DEV__"
          , k = function() {
            try {
                return Boolean(__DEV__)
            } catch (e) {
                return Object.defineProperty(w, O, {
                    value: "production" !== E(function() {
                        return "production"
                    }),
                    enumerable: !1,
                    configurable: !0,
                    writable: !0
                }),
                w[O]
            }
        }()
          , T = r(4155);
        function x(e) {
            try {
                return e()
            } catch (t) {}
        }
        var S = x(function() {
            return globalThis
        }) || x(function() {
            return window
        }) || x(function() {
            return self
        }) || x(function() {
            return global
        }) || x(function() {
            return x.constructor("return this")()
        })
          , I = !1;
        function D(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function N(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function A(e, t, r) {
            return t && N(e.prototype, t),
            r && N(e, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        !S || x(function() {
            return "production"
        }) || x(function() {
            return T
        }) || (Object.defineProperty(S, "process", {
            value: {
                env: {
                    NODE_ENV: "production"
                }
            },
            configurable: !0,
            enumerable: !1,
            writable: !0
        }),
        I = !0),
        r(1270).H,
        I && (delete S.process,
        I = !1),
        __DEV__ ? m("boolean" == typeof k, k) : m("boolean" == typeof k, 36);
        var R = function() {
            return "function" == typeof Symbol
        }
          , C = function(e) {
            return R() && Boolean(Symbol[e])
        }
          , F = function(e) {
            return C(e) ? Symbol[e] : "@@" + e
        };
        R() && !C("observable") && (Symbol.observable = Symbol("observable"));
        var P = F("iterator")
          , M = F("observable")
          , j = F("species");
        function L(e, t) {
            var r = e[t];
            if (null != r) {
                if ("function" != typeof r)
                    throw TypeError(r + " is not a function");
                return r
            }
        }
        function q(e) {
            var t = e.constructor;
            return void 0 !== t && null === (t = t[j]) && (t = void 0),
            void 0 !== t ? t : K
        }
        function V(e) {
            V.log ? V.log(e) : setTimeout(function() {
                throw e
            })
        }
        function Q(e) {
            Promise.resolve().then(function() {
                try {
                    e()
                } catch (t) {
                    V(t)
                }
            })
        }
        function U(e) {
            var t = e._cleanup;
            if (void 0 !== t) {
                if (e._cleanup = void 0,
                !t)
                    return;
                try {
                    if ("function" == typeof t)
                        t();
                    else {
                        var r = L(t, "unsubscribe");
                        r && r.call(t)
                    }
                } catch (n) {
                    V(n)
                }
            }
        }
        function B(e) {
            e._observer = void 0,
            e._queue = void 0,
            e._state = "closed"
        }
        function z(e, t, r) {
            e._state = "running";
            var n = e._observer;
            try {
                var i = L(n, t);
                switch (t) {
                case "next":
                    i && i.call(n, r);
                    break;
                case "error":
                    if (B(e),
                    i)
                        i.call(n, r);
                    else
                        throw r;
                    break;
                case "complete":
                    B(e),
                    i && i.call(n)
                }
            } catch (o) {
                V(o)
            }
            "closed" === e._state ? U(e) : "running" === e._state && (e._state = "ready")
        }
        function W(e, t, r) {
            if ("closed" !== e._state) {
                if ("buffering" === e._state) {
                    e._queue.push({
                        type: t,
                        value: r
                    });
                    return
                }
                if ("ready" !== e._state) {
                    e._state = "buffering",
                    e._queue = [{
                        type: t,
                        value: r
                    }],
                    Q(function() {
                        return function(e) {
                            var t = e._queue;
                            if (t) {
                                e._queue = void 0,
                                e._state = "ready";
                                for (var r = 0; r < t.length && (z(e, t[r].type, t[r].value),
                                "closed" !== e._state); ++r)
                                    ;
                            }
                        }(e)
                    });
                    return
                }
                z(e, t, r)
            }
        }
        var $ = function() {
            function e(e, t) {
                this._cleanup = void 0,
                this._observer = e,
                this._queue = void 0,
                this._state = "initializing";
                var r = new G(this);
                try {
                    this._cleanup = t.call(void 0, r)
                } catch (n) {
                    r.error(n)
                }
                "initializing" === this._state && (this._state = "ready")
            }
            return e.prototype.unsubscribe = function() {
                "closed" !== this._state && (B(this),
                U(this))
            }
            ,
            A(e, [{
                key: "closed",
                get: function() {
                    return "closed" === this._state
                }
            }]),
            e
        }()
          , G = function() {
            function e(e) {
                this._subscription = e
            }
            var t = e.prototype;
            return t.next = function(e) {
                W(this._subscription, "next", e)
            }
            ,
            t.error = function(e) {
                W(this._subscription, "error", e)
            }
            ,
            t.complete = function() {
                W(this._subscription, "complete")
            }
            ,
            A(e, [{
                key: "closed",
                get: function() {
                    return "closed" === this._subscription._state
                }
            }]),
            e
        }()
          , K = function() {
            function e(t) {
                if (!(this instanceof e))
                    throw TypeError("Observable cannot be called as a function");
                if ("function" != typeof t)
                    throw TypeError("Observable initializer must be a function");
                this._subscriber = t
            }
            var t = e.prototype;
            return t.subscribe = function(e) {
                return ("object" != typeof e || null === e) && (e = {
                    next: e,
                    error: arguments[1],
                    complete: arguments[2]
                }),
                new $(e,this._subscriber)
            }
            ,
            t.forEach = function(e) {
                var t = this;
                return new Promise(function(r, n) {
                    if ("function" != typeof e) {
                        n(TypeError(e + " is not a function"));
                        return
                    }
                    function i() {
                        o.unsubscribe(),
                        r()
                    }
                    var o = t.subscribe({
                        next: function(t) {
                            try {
                                e(t, i)
                            } catch (r) {
                                n(r),
                                o.unsubscribe()
                            }
                        },
                        error: n,
                        complete: r
                    })
                }
                )
            }
            ,
            t.map = function(e) {
                var t = this;
                if ("function" != typeof e)
                    throw TypeError(e + " is not a function");
                return new (q(this))(function(r) {
                    return t.subscribe({
                        next: function(t) {
                            try {
                                t = e(t)
                            } catch (n) {
                                return r.error(n)
                            }
                            r.next(t)
                        },
                        error: function(e) {
                            r.error(e)
                        },
                        complete: function() {
                            r.complete()
                        }
                    })
                }
                )
            }
            ,
            t.filter = function(e) {
                var t = this;
                if ("function" != typeof e)
                    throw TypeError(e + " is not a function");
                return new (q(this))(function(r) {
                    return t.subscribe({
                        next: function(t) {
                            try {
                                if (!e(t))
                                    return
                            } catch (n) {
                                return r.error(n)
                            }
                            r.next(t)
                        },
                        error: function(e) {
                            r.error(e)
                        },
                        complete: function() {
                            r.complete()
                        }
                    })
                }
                )
            }
            ,
            t.reduce = function(e) {
                var t = this;
                if ("function" != typeof e)
                    throw TypeError(e + " is not a function");
                var r = q(this)
                  , n = arguments.length > 1
                  , i = !1
                  , o = arguments[1]
                  , a = o;
                return new r(function(r) {
                    return t.subscribe({
                        next: function(t) {
                            var o = !i;
                            if (i = !0,
                            !o || n)
                                try {
                                    a = e(a, t)
                                } catch (s) {
                                    return r.error(s)
                                }
                            else
                                a = t
                        },
                        error: function(e) {
                            r.error(e)
                        },
                        complete: function() {
                            if (!i && !n)
                                return r.error(TypeError("Cannot reduce an empty sequence"));
                            r.next(a),
                            r.complete()
                        }
                    })
                }
                )
            }
            ,
            t.concat = function() {
                for (var e = this, t = arguments.length, r = Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                var i = q(this);
                return new i(function(t) {
                    var n, o = 0;
                    return function e(a) {
                        n = a.subscribe({
                            next: function(e) {
                                t.next(e)
                            },
                            error: function(e) {
                                t.error(e)
                            },
                            complete: function() {
                                o === r.length ? (n = void 0,
                                t.complete()) : e(i.from(r[o++]))
                            }
                        })
                    }(e),
                    function() {
                        n && (n.unsubscribe(),
                        n = void 0)
                    }
                }
                )
            }
            ,
            t.flatMap = function(e) {
                var t = this;
                if ("function" != typeof e)
                    throw TypeError(e + " is not a function");
                var r = q(this);
                return new r(function(n) {
                    var i = []
                      , o = t.subscribe({
                        next: function(t) {
                            if (e)
                                try {
                                    t = e(t)
                                } catch (o) {
                                    return n.error(o)
                                }
                            var s = r.from(t).subscribe({
                                next: function(e) {
                                    n.next(e)
                                },
                                error: function(e) {
                                    n.error(e)
                                },
                                complete: function() {
                                    var e = i.indexOf(s);
                                    e >= 0 && i.splice(e, 1),
                                    a()
                                }
                            });
                            i.push(s)
                        },
                        error: function(e) {
                            n.error(e)
                        },
                        complete: function() {
                            a()
                        }
                    });
                    function a() {
                        o.closed && 0 === i.length && n.complete()
                    }
                    return function() {
                        i.forEach(function(e) {
                            return e.unsubscribe()
                        }),
                        o.unsubscribe()
                    }
                }
                )
            }
            ,
            t[M] = function() {
                return this
            }
            ,
            e.from = function(t) {
                var r = "function" == typeof this ? this : e;
                if (null == t)
                    throw TypeError(t + " is not an object");
                var n = L(t, M);
                if (n) {
                    var i = n.call(t);
                    if (Object(i) !== i)
                        throw TypeError(i + " is not an object");
                    return i instanceof K && i.constructor === r ? i : new r(function(e) {
                        return i.subscribe(e)
                    }
                    )
                }
                if (C("iterator") && (n = L(t, P)))
                    return new r(function(e) {
                        Q(function() {
                            if (!e.closed) {
                                for (var r, i = function(e, t) {
                                    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (r)
                                        return (r = r.call(e)).next.bind(r);
                                    if (Array.isArray(e) || (r = function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e)
                                                return D(e, t);
                                            var r = Object.prototype.toString.call(e).slice(8, -1);
                                            if ("Object" === r && e.constructor && (r = e.constructor.name),
                                            "Map" === r || "Set" === r)
                                                return Array.from(e);
                                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                                return D(e, t)
                                        }
                                    }(e))) {
                                        r && (e = r);
                                        var n = 0;
                                        return function() {
                                            return n >= e.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: e[n++]
                                            }
                                        }
                                    }
                                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }(n.call(t)); !(r = i()).done; ) {
                                    var o = r.value;
                                    if (e.next(o),
                                    e.closed)
                                        return
                                }
                                e.complete()
                            }
                        })
                    }
                    );
                if (Array.isArray(t))
                    return new r(function(e) {
                        Q(function() {
                            if (!e.closed) {
                                for (var r = 0; r < t.length; ++r)
                                    if (e.next(t[r]),
                                    e.closed)
                                        return;
                                e.complete()
                            }
                        })
                    }
                    );
                throw TypeError(t + " is not observable")
            }
            ,
            e.of = function() {
                for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return new ("function" == typeof this ? this : e)(function(e) {
                    Q(function() {
                        if (!e.closed) {
                            for (var t = 0; t < r.length; ++t)
                                if (e.next(r[t]),
                                e.closed)
                                    return;
                            e.complete()
                        }
                    })
                }
                )
            }
            ,
            A(e, null, [{
                key: j,
                get: function() {
                    return this
                }
            }]),
            e
        }();
        function J(e) {
            return null !== e && "object" == typeof e
        }
        function Y(e, t) {
            var r = t
              , n = [];
            return e.definitions.forEach(function(e) {
                if ("OperationDefinition" === e.kind)
                    throw __DEV__ ? new v("Found a ".concat(e.operation, " operation").concat(e.name ? " named '".concat(e.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new v(41);
                "FragmentDefinition" === e.kind && n.push(e)
            }),
            void 0 === r && (__DEV__ ? m(1 === n.length, "Found ".concat(n.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : m(1 === n.length, 42),
            r = n[0].name.value),
            (0,
            f.pi)((0,
            f.pi)({}, e), {
                definitions: (0,
                f.ev)([{
                    kind: "OperationDefinition",
                    operation: "query",
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "FragmentSpread",
                            name: {
                                kind: "Name",
                                value: r
                            }
                        }]
                    }
                }], e.definitions, !0)
            })
        }
        function H(e) {
            void 0 === e && (e = []);
            var t = {};
            return e.forEach(function(e) {
                t[e.name.value] = e
            }),
            t
        }
        function X(e, t) {
            switch (e.kind) {
            case "InlineFragment":
                return e;
            case "FragmentSpread":
                var r = t && t[e.name.value];
                return __DEV__ ? m(r, "No fragment named ".concat(e.name.value, ".")) : m(r, 43),
                r;
            default:
                return null
            }
        }
        function Z(e) {
            return {
                __ref: String(e)
            }
        }
        function ee(e) {
            return Boolean(e && "object" == typeof e && "string" == typeof e.__ref)
        }
        function et(e, t, r, n) {
            if ("IntValue" === r.kind || "FloatValue" === r.kind)
                e[t.value] = Number(r.value);
            else if ("BooleanValue" === r.kind || "StringValue" === r.kind)
                e[t.value] = r.value;
            else if ("ObjectValue" === r.kind) {
                var i = {};
                r.fields.map(function(e) {
                    return et(i, e.name, e.value, n)
                }),
                e[t.value] = i
            } else if ("Variable" === r.kind) {
                var o = (n || {})[r.name.value];
                e[t.value] = o
            } else if ("ListValue" === r.kind)
                e[t.value] = r.values.map(function(e) {
                    var r = {};
                    return et(r, t, e, n),
                    r[t.value]
                });
            else if ("EnumValue" === r.kind)
                e[t.value] = r.value;
            else if ("NullValue" === r.kind)
                e[t.value] = null;
            else
                throw __DEV__ ? new v('The inline argument "'.concat(t.value, '" of kind "').concat(r.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new v(52)
        }
        R() && Object.defineProperty(K, Symbol("extensions"), {
            value: {
                symbol: M,
                hostReportError: V
            },
            configurable: !0
        });
        var er = ["connection", "include", "skip", "client", "rest", "export"]
          , en = Object.assign(function(e, t, r) {
            if (t && r && r.connection && r.connection.key) {
                if (!r.connection.filter || !(r.connection.filter.length > 0))
                    return r.connection.key;
                var n = r.connection.filter ? r.connection.filter : [];
                n.sort();
                var i = {};
                return n.forEach(function(e) {
                    i[e] = t[e]
                }),
                "".concat(r.connection.key, "(").concat(ei(i), ")")
            }
            var o = e;
            if (t) {
                var a = ei(t);
                o += "(".concat(a, ")")
            }
            return r && Object.keys(r).forEach(function(e) {
                -1 === er.indexOf(e) && (r[e] && Object.keys(r[e]).length ? o += "@".concat(e, "(").concat(ei(r[e]), ")") : o += "@".concat(e))
            }),
            o
        }, {
            setStringify: function(e) {
                var t = ei;
                return ei = e,
                t
            }
        })
          , ei = function(e) {
            return JSON.stringify(e, eo)
        };
        function eo(e, t) {
            return J(t) && !Array.isArray(t) && (t = Object.keys(t).sort().reduce(function(e, r) {
                return e[r] = t[r],
                e
            }, {})),
            t
        }
        function ea(e, t) {
            if (e.arguments && e.arguments.length) {
                var r = {};
                return e.arguments.forEach(function(e) {
                    return et(r, e.name, e.value, t)
                }),
                r
            }
            return null
        }
        function es(e) {
            return e.alias ? e.alias.value : e.name.value
        }
        function eu(e, t, r) {
            if ("string" == typeof e.__typename)
                return e.__typename;
            for (var n = 0, i = t.selections; n < i.length; n++) {
                var o = i[n];
                if (ec(o)) {
                    if ("__typename" === o.name.value)
                        return e[es(o)]
                } else {
                    var a = eu(e, X(o, r).selectionSet, r);
                    if ("string" == typeof a)
                        return a
                }
            }
        }
        function ec(e) {
            return "Field" === e.kind
        }
        function el(e) {
            return "InlineFragment" === e.kind
        }
        function eh(e) {
            __DEV__ ? m(e && "Document" === e.kind, 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : m(e && "Document" === e.kind, 44);
            var t = e.definitions.filter(function(e) {
                return "FragmentDefinition" !== e.kind
            }).map(function(e) {
                if ("OperationDefinition" !== e.kind)
                    throw __DEV__ ? new v('Schema type definitions not allowed in queries. Found: "'.concat(e.kind, '"')) : new v(45);
                return e
            });
            return __DEV__ ? m(t.length <= 1, "Ambiguous GraphQL document: contains ".concat(t.length, " operations")) : m(t.length <= 1, 46),
            e
        }
        function ef(e) {
            return eh(e),
            e.definitions.filter(function(e) {
                return "OperationDefinition" === e.kind
            })[0]
        }
        function ep(e) {
            return e.definitions.filter(function(e) {
                return "OperationDefinition" === e.kind && e.name
            }).map(function(e) {
                return e.name.value
            })[0] || null
        }
        function ed(e) {
            return e.definitions.filter(function(e) {
                return "FragmentDefinition" === e.kind
            })
        }
        function ey(e) {
            var t = ef(e);
            return __DEV__ ? m(t && "query" === t.operation, "Must contain a query definition.") : m(t && "query" === t.operation, 47),
            t
        }
        function ev(e) {
            eh(e);
            for (var t, r = 0, n = e.definitions; r < n.length; r++) {
                var i = n[r];
                if ("OperationDefinition" === i.kind) {
                    var o = i.operation;
                    if ("query" === o || "mutation" === o || "subscription" === o)
                        return i
                }
                "FragmentDefinition" !== i.kind || t || (t = i)
            }
            if (t)
                return t;
            throw __DEV__ ? new v("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new v(51)
        }
        function em(e) {
            var t = Object.create(null)
              , r = e && e.variableDefinitions;
            return r && r.length && r.forEach(function(e) {
                e.defaultValue && et(t, e.variable.name, e.defaultValue)
            }),
            t
        }
        function eg(e, t) {
            return t ? t(e) : K.of()
        }
        function eb(e) {
            return "function" == typeof e ? new ew(e) : e
        }
        function e_(e) {
            return e.request.length <= 1
        }
        var eE = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.link = r,
                n
            }
            return (0,
            f.ZT)(t, e),
            t
        }(Error)
          , ew = function() {
            function e(e) {
                e && (this.request = e)
            }
            return e.empty = function() {
                return new e(function() {
                    return K.of()
                }
                )
            }
            ,
            e.from = function(t) {
                return 0 === t.length ? e.empty() : t.map(eb).reduce(function(e, t) {
                    return e.concat(t)
                })
            }
            ,
            e.split = function(t, r, n) {
                var i = eb(r)
                  , o = eb(n || new e(eg));
                return new e(e_(i) && e_(o) ? function(e) {
                    return t(e) ? i.request(e) || K.of() : o.request(e) || K.of()
                }
                : function(e, r) {
                    return t(e) ? i.request(e, r) || K.of() : o.request(e, r) || K.of()
                }
                )
            }
            ,
            e.execute = function(e, t) {
                var r, n, i, o;
                return e.request((i = t.context,
                (n = {
                    variables: (r = function(e) {
                        for (var t = ["query", "operationName", "variables", "extensions", "context"], r = 0, n = Object.keys(e); r < n.length; r++) {
                            var i = n[r];
                            if (0 > t.indexOf(i))
                                throw __DEV__ ? new v("illegal argument: ".concat(i)) : new v(24)
                        }
                        return e
                    }(t)).variables || {},
                    extensions: r.extensions || {},
                    operationName: r.operationName,
                    query: r.query
                }).operationName || (n.operationName = "string" != typeof n.query ? ep(n.query) || void 0 : ""),
                o = (0,
                f.pi)({}, i),
                Object.defineProperty(n, "setContext", {
                    enumerable: !1,
                    value: function(e) {
                        o = "function" == typeof e ? (0,
                        f.pi)((0,
                        f.pi)({}, o), e(o)) : (0,
                        f.pi)((0,
                        f.pi)({}, o), e)
                    }
                }),
                Object.defineProperty(n, "getContext", {
                    enumerable: !1,
                    value: function() {
                        return (0,
                        f.pi)({}, o)
                    }
                }),
                n)) || K.of()
            }
            ,
            e.concat = function(t, r) {
                var n = eb(t);
                if (e_(n))
                    return __DEV__ && m.warn(new eE("You are calling concat on a terminating link, which will have no effect",n)),
                    n;
                var i = eb(r);
                return new e(e_(i) ? function(e) {
                    return n.request(e, function(e) {
                        return i.request(e) || K.of()
                    }) || K.of()
                }
                : function(e, t) {
                    return n.request(e, function(e) {
                        return i.request(e, t) || K.of()
                    }) || K.of()
                }
                )
            }
            ,
            e.prototype.split = function(t, r, n) {
                return this.concat(e.split(t, r, n || new e(eg)))
            }
            ,
            e.prototype.concat = function(t) {
                return e.concat(this, t)
            }
            ,
            e.prototype.request = function(e, t) {
                throw __DEV__ ? new v("request is not implemented") : new v(19)
            }
            ,
            e.prototype.onError = function(e, t) {
                if (t && t.error)
                    return t.error(e),
                    !1;
                throw e
            }
            ,
            e.prototype.setOnError = function(e) {
                return this.onError = e,
                this
            }
            ,
            e
        }()
          , eO = ew.execute
          , ek = r(7826)
          , eT = r(5821)
          , ex = r(2380)
          , eS = r(7359);
        let eI = Object.freeze({});
        function eD(e, t, r=ex.h8) {
            let n, i, o;
            let a = new Map;
            for (let s of Object.values(eS.h))
                a.set(s, function(e, t) {
                    let r = e[t];
                    return "object" == typeof r ? r : "function" == typeof r ? {
                        enter: r,
                        leave: void 0
                    } : {
                        enter: e.enter,
                        leave: e.leave
                    }
                }(t, s));
            let u = Array.isArray(e)
              , c = [e]
              , l = -1
              , h = []
              , f = e
              , p = []
              , d = [];
            do {
                var y, v, m;
                let g;
                l++;
                let b = l === c.length
                  , _ = b && 0 !== h.length;
                if (b) {
                    if (i = 0 === d.length ? void 0 : p[p.length - 1],
                    f = o,
                    o = d.pop(),
                    _) {
                        if (u) {
                            f = f.slice();
                            let E = 0;
                            for (let[w,O] of h) {
                                let k = w - E;
                                null === O ? (f.splice(k, 1),
                                E++) : f[k] = O
                            }
                        } else
                            for (let[T,x] of (f = Object.defineProperties({}, Object.getOwnPropertyDescriptors(f)),
                            h))
                                f[T] = x
                    }
                    l = n.index,
                    c = n.keys,
                    h = n.edits,
                    u = n.inArray,
                    n = n.prev
                } else if (o) {
                    if (null == (f = o[i = u ? l : c[l]]))
                        continue;
                    p.push(i)
                }
                if (!Array.isArray(f)) {
                    (0,
                    ex.UG)(f) || (0,
                    ek.a)(!1, `Invalid AST Node: ${(0,
                    eT.X)(f)}.`);
                    let S = b ? null === (y = a.get(f.kind)) || void 0 === y ? void 0 : y.leave : null === (v = a.get(f.kind)) || void 0 === v ? void 0 : v.enter;
                    if ((g = null == S ? void 0 : S.call(t, f, i, o, p, d)) === eI)
                        break;
                    if (!1 === g) {
                        if (!b) {
                            p.pop();
                            continue
                        }
                    } else if (void 0 !== g && (h.push([i, g]),
                    !b)) {
                        if ((0,
                        ex.UG)(g))
                            f = g;
                        else {
                            p.pop();
                            continue
                        }
                    }
                }
                void 0 === g && _ && h.push([i, f]),
                b ? p.pop() : (n = {
                    inArray: u,
                    index: l,
                    keys: c,
                    edits: h,
                    prev: n
                },
                c = (u = Array.isArray(f)) ? f : null !== (m = r[f.kind]) && void 0 !== m ? m : [],
                l = -1,
                h = [],
                o && d.push(o),
                o = f)
            } while (void 0 !== n);
            return 0 !== h.length ? h[h.length - 1][1] : e
        }
        var eN = function(e, t) {
            var r;
            try {
                r = JSON.stringify(e)
            } catch (i) {
                var n = __DEV__ ? new v("Network request failed. ".concat(t, " is not serializable: ").concat(i.message)) : new v(21);
                throw n.parseError = i,
                n
            }
            return r
        }
          , eA = function(e, t, r) {
            var n = Error(r);
            throw n.name = "ServerError",
            n.response = e,
            n.statusCode = e.status,
            n.result = t,
            n
        }
          , eR = Object.prototype.hasOwnProperty
          , eC = function(e) {
            if (!e && "undefined" == typeof fetch)
                throw __DEV__ ? new v("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ") : new v(20)
        }
          , eF = r(7392);
        let eP = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
        function eM(e) {
            return ej[e.charCodeAt(0)]
        }
        let ej = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"];
        function eL(e) {
            return eD(e, eq)
        }
        let eq = {
            Name: {
                leave: e=>e.value
            },
            Variable: {
                leave: e=>"$" + e.name
            },
            Document: {
                leave: e=>eV(e.definitions, "\n\n")
            },
            OperationDefinition: {
                leave(e) {
                    let t = eU("(", eV(e.variableDefinitions, ", "), ")")
                      , r = eV([e.operation, eV([e.name, t]), eV(e.directives, " ")], " ");
                    return ("query" === r ? "" : r + " ") + e.selectionSet
                }
            },
            VariableDefinition: {
                leave: ({variable: e, type: t, defaultValue: r, directives: n})=>e + ": " + t + eU(" = ", r) + eU(" ", eV(n, " "))
            },
            SelectionSet: {
                leave: ({selections: e})=>eQ(e)
            },
            Field: {
                leave({alias: e, name: t, arguments: r, directives: n, selectionSet: i}) {
                    let o = eU("", e, ": ") + t
                      , a = o + eU("(", eV(r, ", "), ")");
                    return a.length > 80 && (a = o + eU("(\n", eB(eV(r, "\n")), "\n)")),
                    eV([a, eV(n, " "), i], " ")
                }
            },
            Argument: {
                leave: ({name: e, value: t})=>e + ": " + t
            },
            FragmentSpread: {
                leave: ({name: e, directives: t})=>"..." + e + eU(" ", eV(t, " "))
            },
            InlineFragment: {
                leave: ({typeCondition: e, directives: t, selectionSet: r})=>eV(["...", eU("on ", e), eV(t, " "), r], " ")
            },
            FragmentDefinition: {
                leave: ({name: e, typeCondition: t, variableDefinitions: r, directives: n, selectionSet: i})=>`fragment ${e}${eU("(", eV(r, ", "), ")")} on ${t} ${eU("", eV(n, " "), " ")}` + i
            },
            IntValue: {
                leave: ({value: e})=>e
            },
            FloatValue: {
                leave: ({value: e})=>e
            },
            StringValue: {
                leave: ({value: e, block: t})=>t ? (0,
                eF.LZ)(e) : `"${e.replace(eP, eM)}"`
            },
            BooleanValue: {
                leave: ({value: e})=>e ? "true" : "false"
            },
            NullValue: {
                leave: ()=>"null"
            },
            EnumValue: {
                leave: ({value: e})=>e
            },
            ListValue: {
                leave: ({values: e})=>"[" + eV(e, ", ") + "]"
            },
            ObjectValue: {
                leave: ({fields: e})=>"{" + eV(e, ", ") + "}"
            },
            ObjectField: {
                leave: ({name: e, value: t})=>e + ": " + t
            },
            Directive: {
                leave: ({name: e, arguments: t})=>"@" + e + eU("(", eV(t, ", "), ")")
            },
            NamedType: {
                leave: ({name: e})=>e
            },
            ListType: {
                leave: ({type: e})=>"[" + e + "]"
            },
            NonNullType: {
                leave: ({type: e})=>e + "!"
            },
            SchemaDefinition: {
                leave: ({description: e, directives: t, operationTypes: r})=>eU("", e, "\n") + eV(["schema", eV(t, " "), eQ(r)], " ")
            },
            OperationTypeDefinition: {
                leave: ({operation: e, type: t})=>e + ": " + t
            },
            ScalarTypeDefinition: {
                leave: ({description: e, name: t, directives: r})=>eU("", e, "\n") + eV(["scalar", t, eV(r, " ")], " ")
            },
            ObjectTypeDefinition: {
                leave: ({description: e, name: t, interfaces: r, directives: n, fields: i})=>eU("", e, "\n") + eV(["type", t, eU("implements ", eV(r, " & ")), eV(n, " "), eQ(i)], " ")
            },
            FieldDefinition: {
                leave: ({description: e, name: t, arguments: r, type: n, directives: i})=>eU("", e, "\n") + t + (ez(r) ? eU("(\n", eB(eV(r, "\n")), "\n)") : eU("(", eV(r, ", "), ")")) + ": " + n + eU(" ", eV(i, " "))
            },
            InputValueDefinition: {
                leave: ({description: e, name: t, type: r, defaultValue: n, directives: i})=>eU("", e, "\n") + eV([t + ": " + r, eU("= ", n), eV(i, " ")], " ")
            },
            InterfaceTypeDefinition: {
                leave: ({description: e, name: t, interfaces: r, directives: n, fields: i})=>eU("", e, "\n") + eV(["interface", t, eU("implements ", eV(r, " & ")), eV(n, " "), eQ(i)], " ")
            },
            UnionTypeDefinition: {
                leave: ({description: e, name: t, directives: r, types: n})=>eU("", e, "\n") + eV(["union", t, eV(r, " "), eU("= ", eV(n, " | "))], " ")
            },
            EnumTypeDefinition: {
                leave: ({description: e, name: t, directives: r, values: n})=>eU("", e, "\n") + eV(["enum", t, eV(r, " "), eQ(n)], " ")
            },
            EnumValueDefinition: {
                leave: ({description: e, name: t, directives: r})=>eU("", e, "\n") + eV([t, eV(r, " ")], " ")
            },
            InputObjectTypeDefinition: {
                leave: ({description: e, name: t, directives: r, fields: n})=>eU("", e, "\n") + eV(["input", t, eV(r, " "), eQ(n)], " ")
            },
            DirectiveDefinition: {
                leave: ({description: e, name: t, arguments: r, repeatable: n, locations: i})=>eU("", e, "\n") + "directive @" + t + (ez(r) ? eU("(\n", eB(eV(r, "\n")), "\n)") : eU("(", eV(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + eV(i, " | ")
            },
            SchemaExtension: {
                leave: ({directives: e, operationTypes: t})=>eV(["extend schema", eV(e, " "), eQ(t)], " ")
            },
            ScalarTypeExtension: {
                leave: ({name: e, directives: t})=>eV(["extend scalar", e, eV(t, " ")], " ")
            },
            ObjectTypeExtension: {
                leave: ({name: e, interfaces: t, directives: r, fields: n})=>eV(["extend type", e, eU("implements ", eV(t, " & ")), eV(r, " "), eQ(n)], " ")
            },
            InterfaceTypeExtension: {
                leave: ({name: e, interfaces: t, directives: r, fields: n})=>eV(["extend interface", e, eU("implements ", eV(t, " & ")), eV(r, " "), eQ(n)], " ")
            },
            UnionTypeExtension: {
                leave: ({name: e, directives: t, types: r})=>eV(["extend union", e, eV(t, " "), eU("= ", eV(r, " | "))], " ")
            },
            EnumTypeExtension: {
                leave: ({name: e, directives: t, values: r})=>eV(["extend enum", e, eV(t, " "), eQ(r)], " ")
            },
            InputObjectTypeExtension: {
                leave: ({name: e, directives: t, fields: r})=>eV(["extend input", e, eV(t, " "), eQ(r)], " ")
            }
        };
        function eV(e, t="") {
            var r;
            return null !== (r = null == e ? void 0 : e.filter(e=>e).join(t)) && void 0 !== r ? r : ""
        }
        function eQ(e) {
            return eU("{\n", eB(eV(e, "\n")), "\n}")
        }
        function eU(e, t, r="") {
            return null != t && "" !== t ? e + t + r : ""
        }
        function eB(e) {
            return eU("  ", e.replace(/\n/g, "\n  "))
        }
        function ez(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.some(e=>e.includes("\n"))) && void 0 !== t && t
        }
        var eW = {
            http: {
                includeQuery: !0,
                includeExtensions: !1
            },
            headers: {
                accept: "*/*",
                "content-type": "application/json"
            },
            options: {
                method: "POST"
            }
        }
          , e$ = function(e, t) {
            return t(e)
        }
          , eG = function() {
            if ("undefined" == typeof AbortController)
                return {
                    controller: !1,
                    signal: !1
                };
            var e = new AbortController
              , t = e.signal;
            return {
                controller: e,
                signal: t
            }
        };
        function eK(e) {
            return new K(function(t) {
                t.error(e)
            }
            )
        }
        var eJ = E(function() {
            return fetch
        })
          , eY = function(e) {
            void 0 === e && (e = {});
            var t = e.uri
              , r = void 0 === t ? "/graphql" : t
              , n = e.fetch
              , i = e.print
              , o = void 0 === i ? e$ : i
              , a = e.includeExtensions
              , s = e.useGETForQueries
              , u = e.includeUnusedVariables
              , c = void 0 !== u && u
              , l = (0,
            f._T)(e, ["uri", "fetch", "print", "includeExtensions", "useGETForQueries", "includeUnusedVariables"]);
            __DEV__ && eC(n || eJ);
            var h = {
                http: {
                    includeExtensions: a
                },
                options: l.fetchOptions,
                credentials: l.credentials,
                headers: l.headers
            };
            return new ew(function(e) {
                var t, i, a, u = (t = e,
                i = r,
                t.getContext().uri || ("function" == typeof i ? i(t) : i || "/graphql")), l = e.getContext(), p = {};
                if (l.clientAwareness) {
                    var d = l.clientAwareness
                      , y = d.name
                      , v = d.version;
                    y && (p["apollographql-client-name"] = y),
                    v && (p["apollographql-client-version"] = v)
                }
                var m = (0,
                f.pi)((0,
                f.pi)({}, p), l.headers)
                  , g = function(e, t) {
                    for (var r = [], n = 2; n < arguments.length; n++)
                        r[n - 2] = arguments[n];
                    var i = {}
                      , o = {};
                    r.forEach(function(e) {
                        i = (0,
                        f.pi)((0,
                        f.pi)((0,
                        f.pi)({}, i), e.options), {
                            headers: (0,
                            f.pi)((0,
                            f.pi)({}, i.headers), function(e) {
                                if (e) {
                                    var t = Object.create(null);
                                    return Object.keys(Object(e)).forEach(function(r) {
                                        t[r.toLowerCase()] = e[r]
                                    }),
                                    t
                                }
                                return e
                            }(e.headers))
                        }),
                        e.credentials && (i.credentials = e.credentials),
                        o = (0,
                        f.pi)((0,
                        f.pi)({}, o), e.http)
                    });
                    var a = e.operationName
                      , s = e.extensions
                      , u = e.variables
                      , c = e.query
                      , l = {
                        operationName: a,
                        variables: u
                    };
                    return o.includeExtensions && (l.extensions = s),
                    o.includeQuery && (l.query = t(c, eL)),
                    {
                        options: i,
                        body: l
                    }
                }(e, o, eW, h, {
                    http: l.http,
                    options: l.fetchOptions,
                    credentials: l.credentials,
                    headers: m
                })
                  , b = g.options
                  , _ = g.body;
                if (_.variables && !c) {
                    var w = new Set(Object.keys(_.variables));
                    eD(e.query, {
                        Variable: function(e, t, r) {
                            r && "VariableDefinition" !== r.kind && w.delete(e.name.value)
                        }
                    }),
                    w.size && (_.variables = (0,
                    f.pi)({}, _.variables),
                    w.forEach(function(e) {
                        delete _.variables[e]
                    }))
                }
                if (!b.signal) {
                    var O = eG()
                      , k = O.controller
                      , T = O.signal;
                    (a = k) && (b.signal = T)
                }
                if (s && !e.query.definitions.some(function(e) {
                    return "OperationDefinition" === e.kind && "mutation" === e.operation
                }) && (b.method = "GET"),
                "GET" === b.method) {
                    var x = function(e, t) {
                        var r = []
                          , n = function(e, t) {
                            r.push("".concat(e, "=").concat(encodeURIComponent(t)))
                        };
                        if ("query"in t && n("query", t.query),
                        t.operationName && n("operationName", t.operationName),
                        t.variables) {
                            var i = void 0;
                            try {
                                i = eN(t.variables, "Variables map")
                            } catch (o) {
                                return {
                                    parseError: o
                                }
                            }
                            n("variables", i)
                        }
                        if (t.extensions) {
                            var a = void 0;
                            try {
                                a = eN(t.extensions, "Extensions map")
                            } catch (s) {
                                return {
                                    parseError: s
                                }
                            }
                            n("extensions", a)
                        }
                        var u = ""
                          , c = e
                          , l = e.indexOf("#");
                        -1 !== l && (u = e.substr(l),
                        c = e.substr(0, l));
                        var h = -1 === c.indexOf("?") ? "?" : "&";
                        return {
                            newURI: c + h + r.join("&") + u
                        }
                    }(u, _)
                      , S = x.newURI
                      , I = x.parseError;
                    if (I)
                        return eK(I);
                    u = S
                } else
                    try {
                        b.body = eN(_, "Payload")
                    } catch (D) {
                        return eK(D)
                    }
                return new K(function(t) {
                    return (n || E(function() {
                        return fetch
                    }) || eJ)(u, b).then(function(t) {
                        return e.setContext({
                            response: t
                        }),
                        t
                    }).then(function(t) {
                        return t.text().then(function(e) {
                            try {
                                return JSON.parse(e)
                            } catch (n) {
                                var r = n;
                                throw r.name = "ServerParseError",
                                r.response = t,
                                r.statusCode = t.status,
                                r.bodyText = e,
                                r
                            }
                        }).then(function(r) {
                            return t.status >= 300 && eA(t, r, "Response not successful: Received status code ".concat(t.status)),
                            Array.isArray(r) || eR.call(r, "data") || eR.call(r, "errors") || eA(t, r, "Server response was missing for query '".concat(Array.isArray(e) ? e.map(function(e) {
                                return e.operationName
                            }) : e.operationName, "'.")),
                            r
                        })
                    }).then(function(e) {
                        return t.next(e),
                        t.complete(),
                        e
                    }).catch(function(e) {
                        "AbortError" !== e.name && (e.result && e.result.errors && e.result.data && t.next(e.result),
                        t.error(e))
                    }),
                    function() {
                        a && a.abort()
                    }
                }
                )
            }
            )
        }
          , eH = function(e) {
            function t(t) {
                void 0 === t && (t = {});
                var r = e.call(this, eY(t).request) || this;
                return r.options = t,
                r
            }
            return (0,
            f.ZT)(t, e),
            t
        }(ew)
          , eX = Object.prototype
          , eZ = eX.toString
          , e0 = eX.hasOwnProperty
          , e1 = Function.prototype.toString
          , e2 = new Map;
        function e3(e, t) {
            try {
                return function e(t, r) {
                    if (t === r)
                        return !0;
                    var n = eZ.call(t);
                    if (n !== eZ.call(r))
                        return !1;
                    switch (n) {
                    case "[object Array]":
                        if (t.length !== r.length)
                            break;
                    case "[object Object]":
                        if (e9(t, r))
                            return !0;
                        var i = e4(t)
                          , o = e4(r)
                          , a = i.length;
                        if (a !== o.length)
                            break;
                        for (var s = 0; s < a; ++s)
                            if (!e0.call(r, i[s]))
                                return !1;
                        for (var s = 0; s < a; ++s) {
                            var u = i[s];
                            if (!e(t[u], r[u]))
                                return !1
                        }
                        return !0;
                    case "[object Error]":
                        return t.name === r.name && t.message === r.message;
                    case "[object Number]":
                        if (t != t)
                            return r != r;
                    case "[object Boolean]":
                    case "[object Date]":
                        return +t == +r;
                    case "[object RegExp]":
                    case "[object String]":
                        return t == "" + r;
                    case "[object Map]":
                    case "[object Set]":
                        if (t.size !== r.size)
                            break;
                        if (e9(t, r))
                            return !0;
                        for (var c = t.entries(), l = "[object Map]" === n; ; ) {
                            var h = c.next();
                            if (h.done)
                                break;
                            var f = h.value
                              , p = f[0]
                              , d = f[1];
                            if (!r.has(p) || l && !e(d, r.get(p)))
                                return !1
                        }
                        return !0;
                    case "[object Uint16Array]":
                    case "[object Uint8Array]":
                    case "[object Uint32Array]":
                    case "[object Int32Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object ArrayBuffer]":
                        t = new Uint8Array(t),
                        r = new Uint8Array(r);
                    case "[object DataView]":
                        var y = t.byteLength;
                        if (y === r.byteLength)
                            for (; y-- && t[y] === r[y]; )
                                ;
                        return -1 === y;
                    case "[object AsyncFunction]":
                    case "[object GeneratorFunction]":
                    case "[object AsyncGeneratorFunction]":
                    case "[object Function]":
                        var v, m = e1.call(t);
                        if (m !== e1.call(r))
                            break;
                        return !((v = m.length - e8.length) >= 0) || m.indexOf(e8, v) !== v
                    }
                    return !1
                }(e, t)
            } finally {
                e2.clear()
            }
        }
        function e4(e) {
            return Object.keys(e).filter(e5, e)
        }
        function e5(e) {
            return void 0 !== this[e]
        }
        var e8 = "{ [native code] }";
        function e9(e, t) {
            var r = e2.get(e);
            if (r) {
                if (r.has(t))
                    return !0
            } else
                e2.set(e, r = new Set);
            return r.add(t),
            !1
        }
        var e7 = function() {
            return Object.create(null)
        }
          , e6 = Array.prototype
          , te = e6.forEach
          , tt = e6.slice
          , tr = function() {
            function e(e, t) {
                void 0 === e && (e = !0),
                void 0 === t && (t = e7),
                this.weakness = e,
                this.makeData = t
            }
            return e.prototype.lookup = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                return this.lookupArray(e)
            }
            ,
            e.prototype.lookupArray = function(e) {
                var t = this;
                return te.call(e, function(e) {
                    return t = t.getChildTrie(e)
                }),
                t.data || (t.data = this.makeData(tt.call(e)))
            }
            ,
            e.prototype.getChildTrie = function(t) {
                var r = this.weakness && function(e) {
                    switch (typeof e) {
                    case "object":
                        if (null === e)
                            break;
                    case "function":
                        return !0
                    }
                    return !1
                }(t) ? this.weak || (this.weak = new WeakMap) : this.strong || (this.strong = new Map)
                  , n = r.get(t);
                return n || r.set(t, n = new e(this.weakness,this.makeData)),
                n
            }
            ,
            e
        }()
          , tn = "function" == typeof WeakMap && "ReactNative" !== E(function() {
            return navigator.product
        })
          , ti = "function" == typeof WeakSet
          , to = "function" == typeof Symbol && "function" == typeof Symbol.for;
        function ta() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var r = Object.create(null);
            return e.forEach(function(e) {
                e && Object.keys(e).forEach(function(t) {
                    var n = e[t];
                    void 0 !== n && (r[t] = n)
                })
            }),
            r
        }
        function ts(e, t) {
            var r, n = e.directives;
            return !n || !n.length || (r = [],
            n && n.length && n.forEach(function(e) {
                var t;
                if (!("skip" !== (t = e.name.value) && "include" !== t)) {
                    var n = e.arguments
                      , i = e.name.value;
                    __DEV__ ? m(n && 1 === n.length, "Incorrect number of arguments for the @".concat(i, " directive.")) : m(n && 1 === n.length, 38);
                    var o = n[0];
                    __DEV__ ? m(o.name && "if" === o.name.value, "Invalid argument for the @".concat(i, " directive.")) : m(o.name && "if" === o.name.value, 39);
                    var a = o.value;
                    __DEV__ ? m(a && ("Variable" === a.kind || "BooleanValue" === a.kind), "Argument for the @".concat(i, " directive must be a variable or a boolean value.")) : m(a && ("Variable" === a.kind || "BooleanValue" === a.kind), 40),
                    r.push({
                        directive: e,
                        ifArgument: o
                    })
                }
            }),
            r).every(function(e) {
                var r = e.directive
                  , n = e.ifArgument
                  , i = !1;
                return "Variable" === n.value.kind ? (i = t && t[n.value.name.value],
                __DEV__ ? m(void 0 !== i, "Invalid variable referenced in @".concat(r.name.value, " directive.")) : m(void 0 !== i, 37)) : i = n.value.value,
                "skip" === r.name.value ? !i : i
            })
        }
        function tu(e, t) {
            var r;
            return (r = [],
            eD(t, {
                Directive: function(e) {
                    r.push(e.name.value)
                }
            }),
            r).some(function(t) {
                return e.indexOf(t) > -1
            })
        }
        E(function() {
            return window.document.createElement
        }),
        E(function() {
            return navigator.userAgent.indexOf("jsdom") >= 0
        });
        var tc = Object.prototype.hasOwnProperty;
        function tl() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return th(e)
        }
        function th(e) {
            var t = e[0] || {}
              , r = e.length;
            if (r > 1)
                for (var n = new tp, i = 1; i < r; ++i)
                    t = n.merge(t, e[i]);
            return t
        }
        var tf = function(e, t, r) {
            return this.merge(e[r], t[r])
        }
          , tp = function() {
            function e(e) {
                void 0 === e && (e = tf),
                this.reconciler = e,
                this.isObject = J,
                this.pastCopies = new Set
            }
            return e.prototype.merge = function(e, t) {
                for (var r = this, n = [], i = 2; i < arguments.length; i++)
                    n[i - 2] = arguments[i];
                return J(t) && J(e) ? (Object.keys(t).forEach(function(i) {
                    if (tc.call(e, i)) {
                        var o = e[i];
                        if (t[i] !== o) {
                            var a = r.reconciler.apply(r, (0,
                            f.ev)([e, t, i], n, !1));
                            a !== o && ((e = r.shallowCopyForMerge(e))[i] = a)
                        }
                    } else
                        (e = r.shallowCopyForMerge(e))[i] = t[i]
                }),
                e) : t
            }
            ,
            e.prototype.shallowCopyForMerge = function(e) {
                return J(e) && !this.pastCopies.has(e) && (e = Array.isArray(e) ? e.slice(0) : (0,
                f.pi)({
                    __proto__: Object.getPrototypeOf(e)
                }, e),
                this.pastCopies.add(e)),
                e
            }
            ,
            e
        }()
          , td = Object.prototype.hasOwnProperty;
        function ty(e, t) {
            var r = e.__typename
              , n = e.id
              , i = e._id;
            if ("string" == typeof r && (t && (t.keyObject = void 0 !== n ? {
                id: n
            } : void 0 !== i ? {
                _id: i
            } : void 0),
            void 0 === n && (n = i),
            void 0 !== n))
                return "".concat(r, ":").concat("number" == typeof n || "string" == typeof n ? n : JSON.stringify(n))
        }
        var tv = {
            dataIdFromObject: ty,
            addTypename: !0,
            resultCaching: !0,
            canonizeResults: !1
        };
        function tm(e) {
            var t = e.canonizeResults;
            return void 0 === t ? tv.canonizeResults : t
        }
        var tg = /^[_a-z][_0-9a-z]*/i;
        function tb(e) {
            var t = e.match(tg);
            return t ? t[0] : e
        }
        function t_(e) {
            return J(e) && !ee(e) && !tE(e)
        }
        var tE = function(e) {
            return Array.isArray(e)
        }
          , tw = function() {
            function e() {
                this.known = new (ti ? WeakSet : Set),
                this.pool = new tr(tn),
                this.passes = new WeakMap,
                this.keysByJSON = new Map,
                this.empty = this.admit({})
            }
            return e.prototype.isKnown = function(e) {
                return J(e) && this.known.has(e)
            }
            ,
            e.prototype.pass = function(e) {
                if (J(e)) {
                    var t = J(e) ? tE(e) ? e.slice(0) : (0,
                    f.pi)({
                        __proto__: Object.getPrototypeOf(e)
                    }, e) : e;
                    return this.passes.set(t, e),
                    t
                }
                return e
            }
            ,
            e.prototype.admit = function(e) {
                var t = this;
                if (J(e)) {
                    var r = this.passes.get(e);
                    if (r)
                        return r;
                    switch (Object.getPrototypeOf(e)) {
                    case Array.prototype:
                        if (this.known.has(e))
                            break;
                        var n = e.map(this.admit, this)
                          , i = this.pool.lookupArray(n);
                        return !i.array && (this.known.add(i.array = n),
                        __DEV__ && Object.freeze(n)),
                        i.array;
                    case null:
                    case Object.prototype:
                        if (this.known.has(e))
                            break;
                        var o = Object.getPrototypeOf(e)
                          , a = [o]
                          , s = this.sortedKeys(e);
                        a.push(s.json);
                        var u = a.length;
                        s.sorted.forEach(function(r) {
                            a.push(t.admit(e[r]))
                        });
                        var i = this.pool.lookupArray(a);
                        if (!i.object) {
                            var c = i.object = Object.create(o);
                            this.known.add(c),
                            s.sorted.forEach(function(e, t) {
                                c[e] = a[u + t]
                            }),
                            __DEV__ && Object.freeze(c)
                        }
                        return i.object
                    }
                }
                return e
            }
            ,
            e.prototype.sortedKeys = function(e) {
                var t = Object.keys(e)
                  , r = this.pool.lookupArray(t);
                if (!r.keys) {
                    t.sort();
                    var n = JSON.stringify(t);
                    (r.keys = this.keysByJSON.get(n)) || this.keysByJSON.set(n, r.keys = {
                        sorted: t,
                        json: n
                    })
                }
                return r.keys
            }
            ,
            e
        }()
          , tO = Object.assign(function(e) {
            if (J(e)) {
                void 0 === u && tk();
                var t = u.admit(e)
                  , r = c.get(t);
                return void 0 === r && c.set(t, r = JSON.stringify(t)),
                r
            }
            return JSON.stringify(e)
        }, {
            reset: tk
        });
        function tk() {
            u = new tw,
            c = new (tn ? WeakMap : Map)
        }
        function tT(e, t, r) {
            return new K(function(n) {
                var i = n.next
                  , o = n.error
                  , a = n.complete
                  , s = 0
                  , u = !1
                  , c = {
                    then: function(e) {
                        return new Promise(function(t) {
                            return t(e())
                        }
                        )
                    }
                };
                function l(e, t) {
                    return e ? function(t) {
                        ++s;
                        var r = function() {
                            return e(t)
                        };
                        c = c.then(r, r).then(function(e) {
                            --s,
                            i && i.call(n, e),
                            u && h.complete()
                        }, function(e) {
                            throw --s,
                            e
                        }).catch(function(e) {
                            o && o.call(n, e)
                        })
                    }
                    : function(e) {
                        return t && t.call(n, e)
                    }
                }
                var h = {
                    next: l(t, i),
                    error: l(r, o),
                    complete: function() {
                        u = !0,
                        !s && a && a.call(n)
                    }
                }
                  , f = e.subscribe(h);
                return function() {
                    return f.unsubscribe()
                }
            }
            )
        }
        function tx(e) {
            return e.errors && e.errors.length > 0 || !1
        }
        function tS(e, t, r) {
            var n = 0;
            return e.forEach(function(r, i) {
                t.call(this, r, i, e) && (e[n++] = r)
            }, r),
            e.length = n,
            e
        }
        var tI = {
            kind: "Field",
            name: {
                kind: "Name",
                value: "__typename"
            }
        };
        function tD(e) {
            var t;
            return !function e(t, r) {
                return t.selectionSet.selections.every(function(t) {
                    return "FragmentSpread" === t.kind && e(r[t.name.value], r)
                })
            }(ef(e) || (__DEV__ ? m("Document" === e.kind, 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : m("Document" === e.kind, 48),
            __DEV__ ? m(e.definitions.length <= 1, "Fragment must have exactly one definition.") : m(e.definitions.length <= 1, 49),
            t = e.definitions[0],
            __DEV__ ? m("FragmentDefinition" === t.kind, "Must be a fragment definition.") : m("FragmentDefinition" === t.kind, 50),
            t), H(ed(e))) ? e : null
        }
        function tN(e) {
            return function(t) {
                return e.some(function(e) {
                    return e.name && e.name === t.name.value || e.test && e.test(t)
                })
            }
        }
        function tA(e, t) {
            var r, n, i, o = Object.create(null), a = [], s = Object.create(null), u = [], c = tD(eD(t, {
                Variable: {
                    enter: function(e, t, r) {
                        "VariableDefinition" !== r.kind && (o[e.name.value] = !0)
                    }
                },
                Field: {
                    enter: function(t) {
                        if (e && t.directives && e.some(function(e) {
                            return e.remove
                        }) && t.directives && t.directives.some(tN(e)))
                            return t.arguments && t.arguments.forEach(function(e) {
                                "Variable" === e.value.kind && a.push({
                                    name: e.value.name.value
                                })
                            }),
                            t.selectionSet && (function e(t) {
                                var r = [];
                                return t.selections.forEach(function(t) {
                                    (ec(t) || el(t)) && t.selectionSet ? e(t.selectionSet).forEach(function(e) {
                                        return r.push(e)
                                    }) : "FragmentSpread" === t.kind && r.push(t)
                                }),
                                r
                            }
                            )(t.selectionSet).forEach(function(e) {
                                u.push({
                                    name: e.name.value
                                })
                            }),
                            null
                    }
                },
                FragmentSpread: {
                    enter: function(e) {
                        s[e.name.value] = !0
                    }
                },
                Directive: {
                    enter: function(t) {
                        if (tN(e)(t))
                            return null
                    }
                }
            }));
            return c && tS(a, function(e) {
                return !!e.name && !o[e.name]
            }).length && (r = a,
            n = c,
            i = function(e) {
                return r.some(function(t) {
                    return e.value && "Variable" === e.value.kind && e.value.name && (t.name === e.value.name.value || t.test && t.test(e))
                })
            }
            ,
            c = tD(eD(n, {
                OperationDefinition: {
                    enter: function(e) {
                        return (0,
                        f.pi)((0,
                        f.pi)({}, e), {
                            variableDefinitions: e.variableDefinitions ? e.variableDefinitions.filter(function(e) {
                                return !r.some(function(t) {
                                    return t.name === e.variable.name.value
                                })
                            }) : []
                        })
                    }
                },
                Field: {
                    enter: function(e) {
                        if (r.some(function(e) {
                            return e.remove
                        })) {
                            var t = 0;
                            if (e.arguments && e.arguments.forEach(function(e) {
                                i(e) && (t += 1)
                            }),
                            1 === t)
                                return null
                        }
                    }
                },
                Argument: {
                    enter: function(e) {
                        if (i(e))
                            return null
                    }
                }
            }))),
            c && tS(u, function(e) {
                return !!e.name && !s[e.name]
            }).length && (c = function(e, t) {
                function r(t) {
                    if (e.some(function(e) {
                        return e.name === t.name.value
                    }))
                        return null
                }
                return tD(eD(t, {
                    FragmentSpread: {
                        enter: r
                    },
                    FragmentDefinition: {
                        enter: r
                    }
                }))
            }(u, c)),
            c
        }
        var tR = Object.assign(function(e) {
            return eD(e, {
                SelectionSet: {
                    enter: function(e, t, r) {
                        if (!r || "OperationDefinition" !== r.kind) {
                            var n = e.selections;
                            if (!(!n || n.some(function(e) {
                                return ec(e) && ("__typename" === e.name.value || 0 === e.name.value.lastIndexOf("__", 0))
                            })) && !(ec(r) && r.directives && r.directives.some(function(e) {
                                return "export" === e.name.value
                            })))
                                return (0,
                                f.pi)((0,
                                f.pi)({}, e), {
                                    selections: (0,
                                    f.ev)((0,
                                    f.ev)([], n, !0), [tI], !1)
                                })
                        }
                    }
                }
            })
        }, {
            added: function(e) {
                return e === tI
            }
        })
          , tC = {
            test: function(e) {
                var t = "connection" === e.name.value;
                return t && (!e.arguments || !e.arguments.some(function(e) {
                    return "key" === e.name.value
                })) && __DEV__ && m.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key."),
                t
            }
        }
          , tF = new Map;
        function tP(e) {
            var t = tF.get(e) || 1;
            return tF.set(e, t + 1),
            "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2))
        }
        function tM(e, t, r) {
            var n = [];
            e.forEach(function(e) {
                return e[t] && n.push(e)
            }),
            n.forEach(function(e) {
                return e[t](r)
            })
        }
        function tj(e) {
            function t(t) {
                Object.defineProperty(e, t, {
                    value: K
                })
            }
            return to && Symbol.species && t(Symbol.species),
            t("@@species"),
            e
        }
        function tL(e) {
            return e && "function" == typeof e.then
        }
        var tq = function(e) {
            function t(t) {
                var r = e.call(this, function(e) {
                    return r.addObserver(e),
                    function() {
                        return r.removeObserver(e)
                    }
                }) || this;
                return r.observers = new Set,
                r.addCount = 0,
                r.promise = new Promise(function(e, t) {
                    r.resolve = e,
                    r.reject = t
                }
                ),
                r.handlers = {
                    next: function(e) {
                        null !== r.sub && (r.latest = ["next", e],
                        tM(r.observers, "next", e))
                    },
                    error: function(e) {
                        var t = r.sub;
                        null !== t && (t && setTimeout(function() {
                            return t.unsubscribe()
                        }),
                        r.sub = null,
                        r.latest = ["error", e],
                        r.reject(e),
                        tM(r.observers, "error", e))
                    },
                    complete: function() {
                        var e = r.sub;
                        if (null !== e) {
                            var t = r.sources.shift();
                            t ? tL(t) ? t.then(function(e) {
                                return r.sub = e.subscribe(r.handlers)
                            }) : r.sub = t.subscribe(r.handlers) : (e && setTimeout(function() {
                                return e.unsubscribe()
                            }),
                            r.sub = null,
                            r.latest && "next" === r.latest[0] ? r.resolve(r.latest[1]) : r.resolve(),
                            tM(r.observers, "complete"))
                        }
                    }
                },
                r.cancel = function(e) {
                    r.reject(e),
                    r.sources = [],
                    r.handlers.complete()
                }
                ,
                r.promise.catch(function(e) {}),
                "function" == typeof t && (t = [new K(t)]),
                tL(t) ? t.then(function(e) {
                    return r.start(e)
                }, r.handlers.error) : r.start(t),
                r
            }
            return (0,
            f.ZT)(t, e),
            t.prototype.start = function(e) {
                void 0 === this.sub && (this.sources = Array.from(e),
                this.handlers.complete())
            }
            ,
            t.prototype.deliverLastMessage = function(e) {
                if (this.latest) {
                    var t = this.latest[0]
                      , r = e[t];
                    r && r.call(e, this.latest[1]),
                    null === this.sub && "next" === t && e.complete && e.complete()
                }
            }
            ,
            t.prototype.addObserver = function(e) {
                !this.observers.has(e) && (this.deliverLastMessage(e),
                this.observers.add(e),
                ++this.addCount)
            }
            ,
            t.prototype.removeObserver = function(e, t) {
                this.observers.delete(e) && --this.addCount < 1 && !t && this.handlers.complete()
            }
            ,
            t.prototype.cleanup = function(e) {
                var t = this
                  , r = !1
                  , n = function() {
                    r || (r = !0,
                    t.observers.delete(i),
                    e())
                }
                  , i = {
                    next: n,
                    error: n,
                    complete: n
                }
                  , o = this.addCount;
                this.addObserver(i),
                this.addCount = o
            }
            ,
            t
        }(K);
        function tV(e) {
            return Array.isArray(e) && e.length > 0
        }
        tj(tq);
        var tQ = function(e) {
            var t = "";
            return (tV(e.graphQLErrors) || tV(e.clientErrors)) && (e.graphQLErrors || []).concat(e.clientErrors || []).forEach(function(e) {
                var r = e ? e.message : "Error message not found.";
                t += "".concat(r, "\n")
            }),
            e.networkError && (t += "".concat(e.networkError.message, "\n")),
            t = t.replace(/\n$/, "")
        }
          , tU = function(e) {
            function t(r) {
                var n = r.graphQLErrors
                  , i = r.clientErrors
                  , o = r.networkError
                  , a = r.errorMessage
                  , s = r.extraInfo
                  , u = e.call(this, a) || this;
                return u.graphQLErrors = n || [],
                u.clientErrors = i || [],
                u.networkError = o || null,
                u.message = a || tQ(u),
                u.extraInfo = s,
                u.__proto__ = t.prototype,
                u
            }
            return (0,
            f.ZT)(t, e),
            t
        }(Error);
        function tB(e) {
            return !!e && e < 7
        }
        (o = l || (l = {}))[o.loading = 1] = "loading",
        o[o.setVariables = 2] = "setVariables",
        o[o.fetchMore = 3] = "fetchMore",
        o[o.refetch = 4] = "refetch",
        o[o.poll = 6] = "poll",
        o[o.ready = 7] = "ready",
        o[o.error = 8] = "error";
        var tz = Object.prototype.toString;
        function tW(e, t) {
            switch (tz.call(e)) {
            case "[object Array]":
                if ((t = t || new Map).has(e))
                    return t.get(e);
                var r = e.slice(0);
                return t.set(e, r),
                r.forEach(function(e, n) {
                    r[n] = tW(e, t)
                }),
                r;
            case "[object Object]":
                if ((t = t || new Map).has(e))
                    return t.get(e);
                var n = Object.create(Object.getPrototypeOf(e));
                return t.set(e, n),
                Object.keys(e).forEach(function(r) {
                    n[r] = tW(e[r], t)
                }),
                n;
            default:
                return e
            }
        }
        var t$ = Object.assign
          , tG = Object.hasOwnProperty
          , tK = function(e) {
            function t(t) {
                var r = t.queryManager
                  , n = t.queryInfo
                  , i = t.options
                  , o = e.call(this, function(e) {
                    try {
                        var t = e._subscription._observer;
                        t && !t.error && (t.error = tY)
                    } catch (r) {}
                    var n = !o.observers.size;
                    o.observers.add(e);
                    var i = o.last;
                    return i && i.error ? e.error && e.error(i.error) : i && i.result && e.next && e.next(i.result),
                    n && o.reobserve().catch(function() {}),
                    function() {
                        o.observers.delete(e) && !o.observers.size && o.tearDownQuery()
                    }
                }) || this;
                o.observers = new Set,
                o.subscriptions = new Set,
                o.queryInfo = n,
                o.queryManager = r,
                o.isTornDown = !1;
                var a = r.defaultOptions.watchQuery
                  , s = (void 0 === a ? {} : a).fetchPolicy
                  , u = void 0 === s ? "cache-first" : s
                  , c = i.fetchPolicy
                  , l = void 0 === c ? u : c
                  , h = i.initialFetchPolicy;
                o.options = (0,
                f.pi)((0,
                f.pi)({}, i), {
                    initialFetchPolicy: void 0 === h ? "standby" === l ? u : l : h,
                    fetchPolicy: l
                }),
                o.queryId = n.queryId || r.generateQueryId();
                var p = ef(o.query);
                return o.queryName = p && p.name && p.name.value,
                o
            }
            return (0,
            f.ZT)(t, e),
            Object.defineProperty(t.prototype, "query", {
                get: function() {
                    return this.queryManager.transform(this.options.query).document
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "variables", {
                get: function() {
                    return this.options.variables
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.result = function() {
                var e = this;
                return new Promise(function(t, r) {
                    var n = {
                        next: function(r) {
                            t(r),
                            e.observers.delete(n),
                            e.observers.size || e.queryManager.removeQuery(e.queryId),
                            setTimeout(function() {
                                i.unsubscribe()
                            }, 0)
                        },
                        error: r
                    }
                      , i = e.subscribe(n)
                }
                )
            }
            ,
            t.prototype.getCurrentResult = function(e) {
                void 0 === e && (e = !0);
                var t = this.getLastResult(!0)
                  , r = this.queryInfo.networkStatus || t && t.networkStatus || l.ready
                  , n = (0,
                f.pi)((0,
                f.pi)({}, t), {
                    loading: tB(r),
                    networkStatus: r
                })
                  , i = this.options.fetchPolicy
                  , o = void 0 === i ? "cache-first" : i;
                if ("network-only" === o || "no-cache" === o || "standby" === o || this.queryManager.transform(this.options.query).hasForcedResolvers)
                    ;
                else {
                    var a = this.queryInfo.getDiff();
                    (a.complete || this.options.returnPartialData) && (n.data = a.result),
                    e3(n.data, {}) && (n.data = void 0),
                    a.complete ? (delete n.partial,
                    a.complete && n.networkStatus === l.loading && ("cache-first" === o || "cache-only" === o) && (n.networkStatus = l.ready,
                    n.loading = !1)) : n.partial = !0,
                    !__DEV__ || a.complete || this.options.partialRefetch || n.loading || n.data || n.error || tH(a.missing)
                }
                return e && this.updateLastResult(n),
                n
            }
            ,
            t.prototype.isDifferentFromLastResult = function(e) {
                return !this.last || !e3(this.last.result, e)
            }
            ,
            t.prototype.getLast = function(e, t) {
                var r = this.last;
                if (r && r[e] && (!t || e3(r.variables, this.variables)))
                    return r[e]
            }
            ,
            t.prototype.getLastResult = function(e) {
                return this.getLast("result", e)
            }
            ,
            t.prototype.getLastError = function(e) {
                return this.getLast("error", e)
            }
            ,
            t.prototype.resetLastResults = function() {
                delete this.last,
                this.isTornDown = !1
            }
            ,
            t.prototype.resetQueryStoreErrors = function() {
                this.queryManager.resetErrors(this.queryId)
            }
            ,
            t.prototype.refetch = function(e) {
                var t, r = {
                    pollInterval: 0
                }, n = this.options.fetchPolicy;
                if ("cache-and-network" === n ? r.fetchPolicy = n : "no-cache" === n ? r.fetchPolicy = "no-cache" : r.fetchPolicy = "network-only",
                __DEV__ && e && tG.call(e, "variables")) {
                    var i = ey(this.query)
                      , o = i.variableDefinitions;
                    (!o || !o.some(function(e) {
                        return "variables" === e.variable.name.value
                    })) && __DEV__ && m.warn("Called refetch(".concat(JSON.stringify(e), ") for query ").concat((null === (t = i.name) || void 0 === t ? void 0 : t.value) || JSON.stringify(i), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"))
                }
                return e && !e3(this.options.variables, e) && (r.variables = this.options.variables = (0,
                f.pi)((0,
                f.pi)({}, this.options.variables), e)),
                this.queryInfo.resetLastWrite(),
                this.reobserve(r, l.refetch)
            }
            ,
            t.prototype.fetchMore = function(e) {
                var t = this
                  , r = (0,
                f.pi)((0,
                f.pi)({}, e.query ? e : (0,
                f.pi)((0,
                f.pi)((0,
                f.pi)((0,
                f.pi)({}, this.options), {
                    query: this.query
                }), e), {
                    variables: (0,
                    f.pi)((0,
                    f.pi)({}, this.options.variables), e.variables)
                })), {
                    fetchPolicy: "no-cache"
                })
                  , n = this.queryManager.generateQueryId()
                  , i = this.queryInfo
                  , o = i.networkStatus;
                i.networkStatus = l.fetchMore,
                r.notifyOnNetworkStatusChange && this.observe();
                var a = new Set;
                return this.queryManager.fetchQuery(n, r, l.fetchMore).then(function(s) {
                    return t.queryManager.removeQuery(n),
                    i.networkStatus === l.fetchMore && (i.networkStatus = o),
                    t.queryManager.cache.batch({
                        update: function(n) {
                            var i = e.updateQuery;
                            i ? n.updateQuery({
                                query: t.query,
                                variables: t.variables,
                                returnPartialData: !0,
                                optimistic: !1
                            }, function(e) {
                                return i(e, {
                                    fetchMoreResult: s.data,
                                    variables: r.variables
                                })
                            }) : n.writeQuery({
                                query: r.query,
                                variables: r.variables,
                                data: s.data
                            })
                        },
                        onWatchUpdated: function(e) {
                            a.add(e.query)
                        }
                    }),
                    s
                }).finally(function() {
                    a.has(t.query) || tJ(t)
                })
            }
            ,
            t.prototype.subscribeToMore = function(e) {
                var t = this
                  , r = this.queryManager.startGraphQLSubscription({
                    query: e.document,
                    variables: e.variables,
                    context: e.context
                }).subscribe({
                    next: function(r) {
                        var n = e.updateQuery;
                        n && t.updateQuery(function(e, t) {
                            return n(e, {
                                subscriptionData: r,
                                variables: t.variables
                            })
                        })
                    },
                    error: function(t) {
                        if (e.onError) {
                            e.onError(t);
                            return
                        }
                        __DEV__ && m.error("Unhandled GraphQL subscription error", t)
                    }
                });
                return this.subscriptions.add(r),
                function() {
                    t.subscriptions.delete(r) && r.unsubscribe()
                }
            }
            ,
            t.prototype.setOptions = function(e) {
                return this.reobserve(e)
            }
            ,
            t.prototype.setVariables = function(e) {
                return e3(this.variables, e) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = e,
                this.observers.size) ? this.reobserve({
                    fetchPolicy: this.options.initialFetchPolicy,
                    variables: e
                }, l.setVariables) : Promise.resolve()
            }
            ,
            t.prototype.updateQuery = function(e) {
                var t = this.queryManager
                  , r = e(t.cache.diff({
                    query: this.options.query,
                    variables: this.variables,
                    returnPartialData: !0,
                    optimistic: !1
                }).result, {
                    variables: this.variables
                });
                r && (t.cache.writeQuery({
                    query: this.options.query,
                    data: r,
                    variables: this.variables
                }),
                t.broadcastQueries())
            }
            ,
            t.prototype.startPolling = function(e) {
                this.options.pollInterval = e,
                this.updatePolling()
            }
            ,
            t.prototype.stopPolling = function() {
                this.options.pollInterval = 0,
                this.updatePolling()
            }
            ,
            t.prototype.applyNextFetchPolicy = function(e, t) {
                if (t.nextFetchPolicy) {
                    var r = t.fetchPolicy
                      , n = void 0 === r ? "cache-first" : r
                      , i = t.initialFetchPolicy
                      , o = void 0 === i ? n : i;
                    "standby" === n || ("function" == typeof t.nextFetchPolicy ? t.fetchPolicy = t.nextFetchPolicy(n, {
                        reason: e,
                        options: t,
                        observable: this,
                        initialFetchPolicy: o
                    }) : "variables-changed" === e ? t.fetchPolicy = o : t.fetchPolicy = t.nextFetchPolicy)
                }
                return t.fetchPolicy
            }
            ,
            t.prototype.fetch = function(e, t) {
                return this.queryManager.setObservableQuery(this),
                this.queryManager.fetchQueryObservable(this.queryId, e, t)
            }
            ,
            t.prototype.updatePolling = function() {
                var e = this;
                if (!this.queryManager.ssrMode) {
                    var t = this.pollingInfo
                      , r = this.options.pollInterval;
                    if (!r) {
                        t && (clearTimeout(t.timeout),
                        delete this.pollingInfo);
                        return
                    }
                    if (!t || t.interval !== r) {
                        __DEV__ ? m(r, "Attempted to start a polling query without a polling interval.") : m(r, 10),
                        (t || (this.pollingInfo = {})).interval = r;
                        var n = function() {
                            e.pollingInfo && (tB(e.queryInfo.networkStatus) ? i() : e.reobserve({
                                fetchPolicy: "network-only"
                            }, l.poll).then(i, i))
                        }
                          , i = function() {
                            var t = e.pollingInfo;
                            t && (clearTimeout(t.timeout),
                            t.timeout = setTimeout(n, t.interval))
                        };
                        i()
                    }
                }
            }
            ,
            t.prototype.updateLastResult = function(e, t) {
                return void 0 === t && (t = this.variables),
                this.last = (0,
                f.pi)((0,
                f.pi)({}, this.last), {
                    result: this.queryManager.assumeImmutableResults ? e : tW(e),
                    variables: t
                }),
                tV(e.errors) || delete this.last.error,
                this.last
            }
            ,
            t.prototype.reobserve = function(e, t) {
                var r = this;
                this.isTornDown = !1;
                var n = t === l.refetch || t === l.fetchMore || t === l.poll
                  , i = this.options.variables
                  , o = this.options.fetchPolicy
                  , a = ta(this.options, e || {})
                  , s = n ? a : t$(this.options, a);
                !n && (this.updatePolling(),
                e && e.variables && !e3(e.variables, i) && "standby" !== s.fetchPolicy && s.fetchPolicy === o && (this.applyNextFetchPolicy("variables-changed", s),
                void 0 === t && (t = l.setVariables)));
                var u = s.variables && (0,
                f.pi)({}, s.variables)
                  , c = this.fetch(s, t)
                  , h = {
                    next: function(e) {
                        r.reportResult(e, u)
                    },
                    error: function(e) {
                        r.reportError(e, u)
                    }
                };
                return n || (this.concast && this.observer && this.concast.removeObserver(this.observer),
                this.concast = c,
                this.observer = h),
                c.addObserver(h),
                c.promise
            }
            ,
            t.prototype.observe = function() {
                this.reportResult(this.getCurrentResult(!1), this.variables)
            }
            ,
            t.prototype.reportResult = function(e, t) {
                var r = this.getLastError();
                (r || this.isDifferentFromLastResult(e)) && ((r || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t),
                tM(this.observers, "next", e))
            }
            ,
            t.prototype.reportError = function(e, t) {
                var r = (0,
                f.pi)((0,
                f.pi)({}, this.getLastResult()), {
                    error: e,
                    errors: e.graphQLErrors,
                    networkStatus: l.error,
                    loading: !1
                });
                this.updateLastResult(r, t),
                tM(this.observers, "error", this.last.error = e)
            }
            ,
            t.prototype.hasObservers = function() {
                return this.observers.size > 0
            }
            ,
            t.prototype.tearDownQuery = function() {
                this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer),
                delete this.concast,
                delete this.observer),
                this.stopPolling(),
                this.subscriptions.forEach(function(e) {
                    return e.unsubscribe()
                }),
                this.subscriptions.clear(),
                this.queryManager.stopQuery(this.queryId),
                this.observers.clear(),
                this.isTornDown = !0)
            }
            ,
            t
        }(K);
        function tJ(e) {
            var t = e.options
              , r = t.fetchPolicy
              , n = t.nextFetchPolicy;
            return "cache-and-network" === r || "network-only" === r ? e.reobserve({
                fetchPolicy: "cache-first",
                nextFetchPolicy: function() {
                    return (this.nextFetchPolicy = n,
                    "function" == typeof n) ? n.apply(this, arguments) : r
                }
            }) : e.reobserve()
        }
        function tY(e) {
            __DEV__ && m.error("Unhandled error", e.message, e.stack)
        }
        function tH(e) {
            __DEV__ && e && __DEV__ && m.debug("Missing cache result fields: ".concat(JSON.stringify(e)), e)
        }
        tj(tK);
        var tX = null
          , tZ = {}
          , t0 = 1
          , t1 = "@wry/context:Slot"
          , t2 = Array
          , t3 = t2[t1] || function() {
            var e = function() {
                function e() {
                    this.id = ["slot", t0++, Date.now(), Math.random().toString(36).slice(2)].join(":")
                }
                return e.prototype.hasValue = function() {
                    for (var e = tX; e; e = e.parent)
                        if (this.id in e.slots) {
                            var t = e.slots[this.id];
                            if (t === tZ)
                                break;
                            return e !== tX && (tX.slots[this.id] = t),
                            !0
                        }
                    return tX && (tX.slots[this.id] = tZ),
                    !1
                }
                ,
                e.prototype.getValue = function() {
                    if (this.hasValue())
                        return tX.slots[this.id]
                }
                ,
                e.prototype.withValue = function(e, t, r, n) {
                    var i, o = ((i = {
                        __proto__: null
                    })[this.id] = e,
                    i), a = tX;
                    tX = {
                        parent: a,
                        slots: o
                    };
                    try {
                        return t.apply(n, r)
                    } finally {
                        tX = a
                    }
                }
                ,
                e.bind = function(e) {
                    var t = tX;
                    return function() {
                        var r = tX;
                        try {
                            return tX = t,
                            e.apply(this, arguments)
                        } finally {
                            tX = r
                        }
                    }
                }
                ,
                e.noContext = function(e, t, r) {
                    if (!tX)
                        return e.apply(r, t);
                    var n = tX;
                    try {
                        return tX = null,
                        e.apply(r, t)
                    } finally {
                        tX = n
                    }
                }
                ,
                e
            }();
            try {
                Object.defineProperty(t2, t1, {
                    value: t2[t1] = e,
                    enumerable: !1,
                    writable: !1,
                    configurable: !1
                })
            } finally {
                return e
            }
        }();
        function t4() {}
        t3.bind,
        t3.noContext;
        var t5 = function() {
            function e(e, t) {
                void 0 === e && (e = 1 / 0),
                void 0 === t && (t = t4),
                this.max = e,
                this.dispose = t,
                this.map = new Map,
                this.newest = null,
                this.oldest = null
            }
            return e.prototype.has = function(e) {
                return this.map.has(e)
            }
            ,
            e.prototype.get = function(e) {
                var t = this.getNode(e);
                return t && t.value
            }
            ,
            e.prototype.getNode = function(e) {
                var t = this.map.get(e);
                if (t && t !== this.newest) {
                    var r = t.older
                      , n = t.newer;
                    n && (n.older = r),
                    r && (r.newer = n),
                    t.older = this.newest,
                    t.older.newer = t,
                    t.newer = null,
                    this.newest = t,
                    t === this.oldest && (this.oldest = n)
                }
                return t
            }
            ,
            e.prototype.set = function(e, t) {
                var r = this.getNode(e);
                return r ? r.value = t : (r = {
                    key: e,
                    value: t,
                    newer: null,
                    older: this.newest
                },
                this.newest && (this.newest.newer = r),
                this.newest = r,
                this.oldest = this.oldest || r,
                this.map.set(e, r),
                r.value)
            }
            ,
            e.prototype.clean = function() {
                for (; this.oldest && this.map.size > this.max; )
                    this.delete(this.oldest.key)
            }
            ,
            e.prototype.delete = function(e) {
                var t = this.map.get(e);
                return !!t && (t === this.newest && (this.newest = t.older),
                t === this.oldest && (this.oldest = t.newer),
                t.newer && (t.newer.older = t.older),
                t.older && (t.older.newer = t.newer),
                this.map.delete(e),
                this.dispose(t.value, e),
                !0)
            }
            ,
            e
        }()
          , t8 = new t3
          , t9 = Object.prototype.hasOwnProperty
          , t7 = void 0 === (h = Array.from) ? function(e) {
            var t = [];
            return e.forEach(function(e) {
                return t.push(e)
            }),
            t
        }
        : h;
        function t6(e) {
            var t = e.unsubscribe;
            "function" == typeof t && (e.unsubscribe = void 0,
            t())
        }
        var re = [];
        function rt(e, t) {
            if (!e)
                throw Error(t || "assertion failure")
        }
        function rr(e) {
            switch (e.length) {
            case 0:
                throw Error("unknown value");
            case 1:
                return e[0];
            case 2:
                throw e[1]
            }
        }
        var rn = function() {
            function e(t) {
                this.fn = t,
                this.parents = new Set,
                this.childValues = new Map,
                this.dirtyChildren = null,
                this.dirty = !0,
                this.recomputing = !1,
                this.value = [],
                this.deps = null,
                ++e.count
            }
            return e.prototype.peek = function() {
                if (1 === this.value.length && !ra(this))
                    return ri(this),
                    this.value[0]
            }
            ,
            e.prototype.recompute = function(e) {
                var t;
                return rt(!this.recomputing, "already recomputing"),
                ri(this),
                ra(this) && (rh(this),
                t8.withValue(this, ro, [this, e]),
                function(e, t) {
                    if ("function" == typeof e.subscribe)
                        try {
                            t6(e),
                            e.unsubscribe = e.subscribe.apply(null, t)
                        } catch (r) {
                            return e.setDirty(),
                            !1
                        }
                    return !0
                }(this, e) && (this.dirty = !1,
                ra(this) || (t = this,
                rs(t, rc)))),
                rr(this.value)
            }
            ,
            e.prototype.setDirty = function() {
                this.dirty || (this.dirty = !0,
                this.value.length = 0,
                rs(this, ru),
                t6(this))
            }
            ,
            e.prototype.dispose = function() {
                var e = this;
                this.setDirty(),
                rh(this),
                rs(this, function(t, r) {
                    t.setDirty(),
                    rf(t, e)
                })
            }
            ,
            e.prototype.forget = function() {
                this.dispose()
            }
            ,
            e.prototype.dependOn = function(e) {
                e.add(this),
                this.deps || (this.deps = re.pop() || new Set),
                this.deps.add(e)
            }
            ,
            e.prototype.forgetDeps = function() {
                var e = this;
                this.deps && (t7(this.deps).forEach(function(t) {
                    return t.delete(e)
                }),
                this.deps.clear(),
                re.push(this.deps),
                this.deps = null)
            }
            ,
            e.count = 0,
            e
        }();
        function ri(e) {
            var t = t8.getValue();
            if (t)
                return e.parents.add(t),
                t.childValues.has(e) || t.childValues.set(e, []),
                ra(e) ? ru(t, e) : rc(t, e),
                t
        }
        function ro(e, t) {
            e.recomputing = !0,
            e.value.length = 0;
            try {
                e.value[0] = e.fn.apply(null, t)
            } catch (r) {
                e.value[1] = r
            }
            e.recomputing = !1
        }
        function ra(e) {
            return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size)
        }
        function rs(e, t) {
            var r = e.parents.size;
            if (r)
                for (var n = t7(e.parents), i = 0; i < r; ++i)
                    t(n[i], e)
        }
        function ru(e, t) {
            rt(e.childValues.has(t)),
            rt(ra(t));
            var r = !ra(e);
            if (e.dirtyChildren) {
                if (e.dirtyChildren.has(t))
                    return
            } else
                e.dirtyChildren = re.pop() || new Set;
            e.dirtyChildren.add(t),
            r && rs(e, ru)
        }
        function rc(e, t) {
            rt(e.childValues.has(t)),
            rt(!ra(t));
            var r, n, i = e.childValues.get(t);
            0 === i.length ? e.childValues.set(t, t.value.slice(0)) : (r = t.value,
            (n = i.length) > 0 && n === r.length && i[n - 1] === r[n - 1] || e.setDirty()),
            rl(e, t),
            ra(e) || rs(e, rc)
        }
        function rl(e, t) {
            var r = e.dirtyChildren;
            r && (r.delete(t),
            0 === r.size && (re.length < 100 && re.push(r),
            e.dirtyChildren = null))
        }
        function rh(e) {
            e.childValues.size > 0 && e.childValues.forEach(function(t, r) {
                rf(e, r)
            }),
            e.forgetDeps(),
            rt(null === e.dirtyChildren)
        }
        function rf(e, t) {
            t.parents.delete(e),
            e.childValues.delete(t),
            rl(e, t)
        }
        var rp = {
            setDirty: !0,
            dispose: !0,
            forget: !0
        };
        function rd(e) {
            var t = new Map
              , r = e && e.subscribe;
            function n(e) {
                var n = t8.getValue();
                if (n) {
                    var i = t.get(e);
                    i || t.set(e, i = new Set),
                    n.dependOn(i),
                    "function" == typeof r && (t6(i),
                    i.unsubscribe = r(e))
                }
            }
            return n.dirty = function(e, r) {
                var n = t.get(e);
                if (n) {
                    var i = r && t9.call(rp, r) ? r : "setDirty";
                    t7(n).forEach(function(e) {
                        return e[i]()
                    }),
                    t.delete(e),
                    t6(n)
                }
            }
            ,
            n
        }
        function ry() {
            var e = new tr("function" == typeof WeakMap);
            return function() {
                return e.lookupArray(arguments)
            }
        }
        ry();
        var rv = new Set;
        function rm(e, t) {
            void 0 === t && (t = Object.create(null));
            var r = new t5(t.max || 65536,function(e) {
                return e.dispose()
            }
            )
              , n = t.keyArgs
              , i = t.makeCacheKey || ry()
              , o = function() {
                var o = i.apply(null, n ? n.apply(null, arguments) : arguments);
                if (void 0 === o)
                    return e.apply(null, arguments);
                var a = r.get(o);
                a || (r.set(o, a = new rn(e)),
                a.subscribe = t.subscribe,
                a.forget = function() {
                    return r.delete(o)
                }
                );
                var s = a.recompute(Array.prototype.slice.call(arguments));
                return r.set(o, a),
                rv.add(r),
                t8.hasValue() || (rv.forEach(function(e) {
                    return e.clean()
                }),
                rv.clear()),
                s
            };
            function a(e) {
                var t = r.get(e);
                t && t.setDirty()
            }
            function s(e) {
                var t = r.get(e);
                if (t)
                    return t.peek()
            }
            function u(e) {
                return r.delete(e)
            }
            return Object.defineProperty(o, "size", {
                get: function() {
                    return r.map.size
                },
                configurable: !1,
                enumerable: !1
            }),
            o.dirtyKey = a,
            o.dirty = function() {
                a(i.apply(null, arguments))
            }
            ,
            o.peekKey = s,
            o.peek = function() {
                return s(i.apply(null, arguments))
            }
            ,
            o.forgetKey = u,
            o.forget = function() {
                return u(i.apply(null, arguments))
            }
            ,
            o.makeCacheKey = i,
            o.getKey = n ? function() {
                return i.apply(null, n.apply(null, arguments))
            }
            : i,
            Object.freeze(o)
        }
        var rg = new t3
          , rb = new WeakMap;
        function r_(e) {
            var t = rb.get(e);
            return t || rb.set(e, t = {
                vars: new Set,
                dep: rd()
            }),
            t
        }
        function rE(e) {
            r_(e).vars.forEach(function(t) {
                return t.forgetCache(e)
            })
        }
        function rw(e) {
            var t = new Set
              , r = new Set
              , n = function(o) {
                if (arguments.length > 0) {
                    if (e !== o) {
                        e = o,
                        t.forEach(function(e) {
                            r_(e).dep.dirty(n),
                            e.broadcastWatches && e.broadcastWatches()
                        });
                        var a = Array.from(r);
                        r.clear(),
                        a.forEach(function(t) {
                            return t(e)
                        })
                    }
                } else {
                    var s = rg.getValue();
                    s && (i(s),
                    r_(s).dep(n))
                }
                return e
            };
            n.onNextChange = function(e) {
                return r.add(e),
                function() {
                    r.delete(e)
                }
            }
            ;
            var i = n.attachCache = function(e) {
                return t.add(e),
                r_(e).vars.add(n),
                n
            }
            ;
            return n.forgetCache = function(e) {
                return t.delete(e)
            }
            ,
            n
        }
        var rO = function() {
            function e(e) {
                var t = e.cache
                  , r = e.client
                  , n = e.resolvers
                  , i = e.fragmentMatcher;
                this.cache = t,
                r && (this.client = r),
                n && this.addResolvers(n),
                i && this.setFragmentMatcher(i)
            }
            return e.prototype.addResolvers = function(e) {
                var t = this;
                this.resolvers = this.resolvers || {},
                Array.isArray(e) ? e.forEach(function(e) {
                    t.resolvers = tl(t.resolvers, e)
                }) : this.resolvers = tl(this.resolvers, e)
            }
            ,
            e.prototype.setResolvers = function(e) {
                this.resolvers = {},
                this.addResolvers(e)
            }
            ,
            e.prototype.getResolvers = function() {
                return this.resolvers || {}
            }
            ,
            e.prototype.runResolvers = function(e) {
                var t = e.document
                  , r = e.remoteResult
                  , n = e.context
                  , i = e.variables
                  , o = e.onlyRunForcedResolvers
                  , a = void 0 !== o && o;
                return (0,
                f.mG)(this, void 0, void 0, function() {
                    return (0,
                    f.Jh)(this, function(e) {
                        return t ? [2, this.resolveDocument(t, r.data, n, i, this.fragmentMatcher, a).then(function(e) {
                            return (0,
                            f.pi)((0,
                            f.pi)({}, r), {
                                data: e.result
                            })
                        })] : [2, r]
                    })
                })
            }
            ,
            e.prototype.setFragmentMatcher = function(e) {
                this.fragmentMatcher = e
            }
            ,
            e.prototype.getFragmentMatcher = function() {
                return this.fragmentMatcher
            }
            ,
            e.prototype.clientQuery = function(e) {
                return tu(["client"], e) && this.resolvers ? e : null
            }
            ,
            e.prototype.serverQuery = function(e) {
                var t;
                return eh(e),
                (t = tA([{
                    test: function(e) {
                        return "client" === e.name.value
                    },
                    remove: !0
                }], e)) && (t = eD(t, {
                    FragmentDefinition: {
                        enter: function(e) {
                            if (e.selectionSet && e.selectionSet.selections.every(function(e) {
                                return ec(e) && "__typename" === e.name.value
                            }))
                                return null
                        }
                    }
                })),
                t
            }
            ,
            e.prototype.prepareContext = function(e) {
                var t = this.cache;
                return (0,
                f.pi)((0,
                f.pi)({}, e), {
                    cache: t,
                    getCacheKey: function(e) {
                        return t.identify(e)
                    }
                })
            }
            ,
            e.prototype.addExportedVariables = function(e, t, r) {
                return void 0 === t && (t = {}),
                void 0 === r && (r = {}),
                (0,
                f.mG)(this, void 0, void 0, function() {
                    return (0,
                    f.Jh)(this, function(n) {
                        return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(r), t).then(function(e) {
                            return (0,
                            f.pi)((0,
                            f.pi)({}, t), e.exportedVariables)
                        })] : [2, (0,
                        f.pi)({}, t)]
                    })
                })
            }
            ,
            e.prototype.shouldForceResolvers = function(e) {
                var t = !1;
                return eD(e, {
                    Directive: {
                        enter: function(e) {
                            if ("client" === e.name.value && e.arguments && (t = e.arguments.some(function(e) {
                                return "always" === e.name.value && "BooleanValue" === e.value.kind && !0 === e.value.value
                            })))
                                return eI
                        }
                    }
                }),
                t
            }
            ,
            e.prototype.buildRootValueFromCache = function(e, t) {
                return this.cache.diff({
                    query: "query" === ev(e).operation ? e : eD(e, {
                        OperationDefinition: {
                            enter: function(e) {
                                return (0,
                                f.pi)((0,
                                f.pi)({}, e), {
                                    operation: "query"
                                })
                            }
                        }
                    }),
                    variables: t,
                    returnPartialData: !0,
                    optimistic: !1
                }).result
            }
            ,
            e.prototype.resolveDocument = function(e, t, r, n, i, o) {
                return void 0 === r && (r = {}),
                void 0 === n && (n = {}),
                void 0 === i && (i = function() {
                    return !0
                }
                ),
                void 0 === o && (o = !1),
                (0,
                f.mG)(this, void 0, void 0, function() {
                    var a, s, u, c, l, h, p, d;
                    return (0,
                    f.Jh)(this, function(y) {
                        return a = ev(e),
                        s = H(ed(e)),
                        c = (u = a.operation) ? u.charAt(0).toUpperCase() + u.slice(1) : "Query",
                        l = this,
                        h = l.cache,
                        p = l.client,
                        d = {
                            fragmentMap: s,
                            context: (0,
                            f.pi)((0,
                            f.pi)({}, r), {
                                cache: h,
                                client: p
                            }),
                            variables: n,
                            fragmentMatcher: i,
                            defaultOperationType: c,
                            exportedVariables: {},
                            onlyRunForcedResolvers: o
                        },
                        [2, this.resolveSelectionSet(a.selectionSet, t, d).then(function(e) {
                            return {
                                result: e,
                                exportedVariables: d.exportedVariables
                            }
                        })]
                    })
                })
            }
            ,
            e.prototype.resolveSelectionSet = function(e, t, r) {
                return (0,
                f.mG)(this, void 0, void 0, function() {
                    var n, i, o, a, s, u = this;
                    return (0,
                    f.Jh)(this, function(c) {
                        return n = r.fragmentMap,
                        i = r.context,
                        o = r.variables,
                        a = [t],
                        s = function(e) {
                            return (0,
                            f.mG)(u, void 0, void 0, function() {
                                var s, u;
                                return (0,
                                f.Jh)(this, function(c) {
                                    return ts(e, o) ? ec(e) ? [2, this.resolveField(e, t, r).then(function(t) {
                                        var r;
                                        void 0 !== t && a.push(((r = {})[es(e)] = t,
                                        r))
                                    })] : (el(e) ? s = e : (s = n[e.name.value],
                                    __DEV__ ? m(s, "No fragment named ".concat(e.name.value)) : m(s, 9)),
                                    s && s.typeCondition && (u = s.typeCondition.name.value,
                                    r.fragmentMatcher(t, u, i))) ? [2, this.resolveSelectionSet(s.selectionSet, t, r).then(function(e) {
                                        a.push(e)
                                    })] : [2] : [2]
                                })
                            })
                        }
                        ,
                        [2, Promise.all(e.selections.map(s)).then(function() {
                            return th(a)
                        })]
                    })
                })
            }
            ,
            e.prototype.resolveField = function(e, t, r) {
                return (0,
                f.mG)(this, void 0, void 0, function() {
                    var n, i, o, a, s, u, c, l, h, p = this;
                    return (0,
                    f.Jh)(this, function(f) {
                        return n = r.variables,
                        a = (i = e.name.value) !== (o = es(e)),
                        u = Promise.resolve(s = t[o] || t[i]),
                        (!r.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (c = t.__typename || r.defaultOperationType,
                        (l = this.resolvers && this.resolvers[c]) && (h = l[a ? i : o]) && (u = Promise.resolve(rg.withValue(this.cache, h, [t, ea(e, n), r.context, {
                            field: e,
                            fragmentMap: r.fragmentMap
                        }])))),
                        [2, u.then(function(t) {
                            return (void 0 === t && (t = s),
                            e.directives && e.directives.forEach(function(e) {
                                "export" === e.name.value && e.arguments && e.arguments.forEach(function(e) {
                                    "as" === e.name.value && "StringValue" === e.value.kind && (r.exportedVariables[e.value.value] = t)
                                })
                            }),
                            e.selectionSet && null != t) ? Array.isArray(t) ? p.resolveSubSelectedArray(e, t, r) : e.selectionSet ? p.resolveSelectionSet(e.selectionSet, t, r) : void 0 : t
                        })]
                    })
                })
            }
            ,
            e.prototype.resolveSubSelectedArray = function(e, t, r) {
                var n = this;
                return Promise.all(t.map(function(t) {
                    return null === t ? null : Array.isArray(t) ? n.resolveSubSelectedArray(e, t, r) : e.selectionSet ? n.resolveSelectionSet(e.selectionSet, t, r) : void 0
                }))
            }
            ,
            e
        }()
          , rk = new (tn ? WeakMap : Map);
        function rT(e, t) {
            var r = e[t];
            "function" == typeof r && (e[t] = function() {
                return rk.set(e, (rk.get(e) + 1) % 1e15),
                r.apply(this, arguments)
            }
            )
        }
        function rx(e) {
            e.notifyTimeout && (clearTimeout(e.notifyTimeout),
            e.notifyTimeout = void 0)
        }
        var rS = function() {
            function e(e, t) {
                void 0 === t && (t = e.generateQueryId()),
                this.queryId = t,
                this.listeners = new Set,
                this.document = null,
                this.lastRequestId = 1,
                this.subscriptions = new Set,
                this.stopped = !1,
                this.dirty = !1,
                this.observableQuery = null;
                var r = this.cache = e.cache;
                rk.has(r) || (rk.set(r, 0),
                rT(r, "evict"),
                rT(r, "modify"),
                rT(r, "reset"))
            }
            return e.prototype.init = function(e) {
                var t = e.networkStatus || l.loading;
                return this.variables && this.networkStatus !== l.loading && !e3(this.variables, e.variables) && (t = l.setVariables),
                e3(e.variables, this.variables) || (this.lastDiff = void 0),
                Object.assign(this, {
                    document: e.document,
                    variables: e.variables,
                    networkError: null,
                    graphQLErrors: this.graphQLErrors || [],
                    networkStatus: t
                }),
                e.observableQuery && this.setObservableQuery(e.observableQuery),
                e.lastRequestId && (this.lastRequestId = e.lastRequestId),
                this
            }
            ,
            e.prototype.reset = function() {
                rx(this),
                this.lastDiff = void 0,
                this.dirty = !1
            }
            ,
            e.prototype.getDiff = function(e) {
                void 0 === e && (e = this.variables);
                var t = this.getDiffOptions(e);
                if (this.lastDiff && e3(t, this.lastDiff.options))
                    return this.lastDiff.diff;
                this.updateWatch(this.variables = e);
                var r = this.observableQuery;
                if (r && "no-cache" === r.options.fetchPolicy)
                    return {
                        complete: !1
                    };
                var n = this.cache.diff(t);
                return this.updateLastDiff(n, t),
                n
            }
            ,
            e.prototype.updateLastDiff = function(e, t) {
                this.lastDiff = e ? {
                    diff: e,
                    options: t || this.getDiffOptions()
                } : void 0
            }
            ,
            e.prototype.getDiffOptions = function(e) {
                var t;
                return void 0 === e && (e = this.variables),
                {
                    query: this.document,
                    variables: e,
                    returnPartialData: !0,
                    optimistic: !0,
                    canonizeResults: null === (t = this.observableQuery) || void 0 === t ? void 0 : t.options.canonizeResults
                }
            }
            ,
            e.prototype.setDiff = function(e) {
                var t = this
                  , r = this.lastDiff && this.lastDiff.diff;
                this.updateLastDiff(e),
                this.dirty || e3(r && r.result, e && e.result) || (this.dirty = !0,
                this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
                    return t.notify()
                }, 0)))
            }
            ,
            e.prototype.setObservableQuery = function(e) {
                var t = this;
                e !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener),
                this.observableQuery = e,
                e ? (e.queryInfo = this,
                this.listeners.add(this.oqListener = function() {
                    t.getDiff().fromOptimisticTransaction ? e.observe() : tJ(e)
                }
                )) : delete this.oqListener)
            }
            ,
            e.prototype.notify = function() {
                var e = this;
                rx(this),
                this.shouldNotify() && this.listeners.forEach(function(t) {
                    return t(e)
                }),
                this.dirty = !1
            }
            ,
            e.prototype.shouldNotify = function() {
                if (!this.dirty || !this.listeners.size)
                    return !1;
                if (tB(this.networkStatus) && this.observableQuery) {
                    var e = this.observableQuery.options.fetchPolicy;
                    if ("cache-only" !== e && "cache-and-network" !== e)
                        return !1
                }
                return !0
            }
            ,
            e.prototype.stop = function() {
                if (!this.stopped) {
                    this.stopped = !0,
                    this.reset(),
                    this.cancel(),
                    this.cancel = e.prototype.cancel,
                    this.subscriptions.forEach(function(e) {
                        return e.unsubscribe()
                    });
                    var t = this.observableQuery;
                    t && t.stopPolling()
                }
            }
            ,
            e.prototype.cancel = function() {}
            ,
            e.prototype.updateWatch = function(e) {
                var t = this;
                void 0 === e && (e = this.variables);
                var r = this.observableQuery;
                if (!r || "no-cache" !== r.options.fetchPolicy) {
                    var n = (0,
                    f.pi)((0,
                    f.pi)({}, this.getDiffOptions(e)), {
                        watcher: this,
                        callback: function(e) {
                            return t.setDiff(e)
                        }
                    });
                    this.lastWatch && e3(n, this.lastWatch) || (this.cancel(),
                    this.cancel = this.cache.watch(this.lastWatch = n))
                }
            }
            ,
            e.prototype.resetLastWrite = function() {
                this.lastWrite = void 0
            }
            ,
            e.prototype.shouldWrite = function(e, t) {
                var r = this.lastWrite;
                return !(r && r.dmCount === rk.get(this.cache) && e3(t, r.variables) && e3(e.data, r.result.data))
            }
            ,
            e.prototype.markResult = function(e, t, r) {
                var n = this;
                this.graphQLErrors = tV(e.errors) ? e.errors : [],
                this.reset(),
                "no-cache" === t.fetchPolicy ? this.updateLastDiff({
                    result: e.data,
                    complete: !0
                }, this.getDiffOptions(t.variables)) : 0 !== r && (rI(e, t.errorPolicy) ? this.cache.performTransaction(function(i) {
                    if (n.shouldWrite(e, t.variables))
                        i.writeQuery({
                            query: n.document,
                            data: e.data,
                            variables: t.variables,
                            overwrite: 1 === r
                        }),
                        n.lastWrite = {
                            result: e,
                            variables: t.variables,
                            dmCount: rk.get(n.cache)
                        };
                    else if (n.lastDiff && n.lastDiff.diff.complete) {
                        e.data = n.lastDiff.diff.result;
                        return
                    }
                    var o = n.getDiffOptions(t.variables)
                      , a = i.diff(o);
                    n.stopped || n.updateWatch(t.variables),
                    n.updateLastDiff(a, o),
                    a.complete && (e.data = a.result)
                }) : this.lastWrite = void 0)
            }
            ,
            e.prototype.markReady = function() {
                return this.networkError = null,
                this.networkStatus = l.ready
            }
            ,
            e.prototype.markError = function(e) {
                return this.networkStatus = l.error,
                this.lastWrite = void 0,
                this.reset(),
                e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors),
                e.networkError && (this.networkError = e.networkError),
                e
            }
            ,
            e
        }();
        function rI(e, t) {
            void 0 === t && (t = "none");
            var r = "ignore" === t || "all" === t
              , n = !tx(e);
            return !n && r && e.data && (n = !0),
            n
        }
        var rD = Object.prototype.hasOwnProperty
          , rN = function() {
            function e(e) {
                var t = e.cache
                  , r = e.link
                  , n = e.defaultOptions
                  , i = e.queryDeduplication
                  , o = e.onBroadcast
                  , a = e.ssrMode
                  , s = e.clientAwareness
                  , u = e.localState
                  , c = e.assumeImmutableResults;
                this.clientAwareness = {},
                this.queries = new Map,
                this.fetchCancelFns = new Map,
                this.transformCache = new (tn ? WeakMap : Map),
                this.queryIdCounter = 1,
                this.requestIdCounter = 1,
                this.mutationIdCounter = 1,
                this.inFlightLinkObservables = new Map,
                this.cache = t,
                this.link = r,
                this.defaultOptions = n || Object.create(null),
                this.queryDeduplication = void 0 !== i && i,
                this.clientAwareness = void 0 === s ? {} : s,
                this.localState = u || new rO({
                    cache: t
                }),
                this.ssrMode = void 0 !== a && a,
                this.assumeImmutableResults = !!c,
                (this.onBroadcast = o) && (this.mutationStore = Object.create(null))
            }
            return e.prototype.stop = function() {
                var e = this;
                this.queries.forEach(function(t, r) {
                    e.stopQueryNoBroadcast(r)
                }),
                this.cancelPendingFetches(__DEV__ ? new v("QueryManager stopped while query was in flight") : new v(11))
            }
            ,
            e.prototype.cancelPendingFetches = function(e) {
                this.fetchCancelFns.forEach(function(t) {
                    return t(e)
                }),
                this.fetchCancelFns.clear()
            }
            ,
            e.prototype.mutate = function(e) {
                var t, r, n = e.mutation, i = e.variables, o = e.optimisticResponse, a = e.updateQueries, s = e.refetchQueries, u = void 0 === s ? [] : s, c = e.awaitRefetchQueries, l = void 0 !== c && c, h = e.update, p = e.onQueryUpdated, d = e.fetchPolicy, y = void 0 === d ? (null === (t = this.defaultOptions.mutate) || void 0 === t ? void 0 : t.fetchPolicy) || "network-only" : d, v = e.errorPolicy, g = void 0 === v ? (null === (r = this.defaultOptions.mutate) || void 0 === r ? void 0 : r.errorPolicy) || "none" : v, b = e.keepRootFields, _ = e.context;
                return (0,
                f.mG)(this, void 0, void 0, function() {
                    var e, t, r;
                    return (0,
                    f.Jh)(this, function(s) {
                        switch (s.label) {
                        case 0:
                            if (__DEV__ ? m(n, "mutation option is required. You must specify your GraphQL document in the mutation option.") : m(n, 12),
                            __DEV__ ? m("network-only" === y || "no-cache" === y, "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : m("network-only" === y || "no-cache" === y, 13),
                            e = this.generateMutationId(),
                            n = this.transform(n).document,
                            i = this.getVariables(n, i),
                            !this.transform(n).hasClientExports)
                                return [3, 2];
                            return [4, this.localState.addExportedVariables(n, i, _)];
                        case 1:
                            i = s.sent(),
                            s.label = 2;
                        case 2:
                            return t = this.mutationStore && (this.mutationStore[e] = {
                                mutation: n,
                                variables: i,
                                loading: !0,
                                error: null
                            }),
                            o && this.markMutationOptimistic(o, {
                                mutationId: e,
                                document: n,
                                variables: i,
                                fetchPolicy: y,
                                errorPolicy: g,
                                context: _,
                                updateQueries: a,
                                update: h,
                                keepRootFields: b
                            }),
                            this.broadcastQueries(),
                            r = this,
                            [2, new Promise(function(s, c) {
                                return tT(r.getObservableFromLink(n, (0,
                                f.pi)((0,
                                f.pi)({}, _), {
                                    optimisticResponse: o
                                }), i, !1), function(s) {
                                    if (tx(s) && "none" === g)
                                        throw new tU({
                                            graphQLErrors: s.errors
                                        });
                                    t && (t.loading = !1,
                                    t.error = null);
                                    var c = (0,
                                    f.pi)({}, s);
                                    return "function" == typeof u && (u = u(c)),
                                    "ignore" === g && tx(c) && delete c.errors,
                                    r.markMutationResult({
                                        mutationId: e,
                                        result: c,
                                        document: n,
                                        variables: i,
                                        fetchPolicy: y,
                                        errorPolicy: g,
                                        context: _,
                                        update: h,
                                        updateQueries: a,
                                        awaitRefetchQueries: l,
                                        refetchQueries: u,
                                        removeOptimistic: o ? e : void 0,
                                        onQueryUpdated: p,
                                        keepRootFields: b
                                    })
                                }).subscribe({
                                    next: function(e) {
                                        r.broadcastQueries(),
                                        s(e)
                                    },
                                    error: function(n) {
                                        t && (t.loading = !1,
                                        t.error = n),
                                        o && r.cache.removeOptimistic(e),
                                        r.broadcastQueries(),
                                        c(n instanceof tU ? n : new tU({
                                            networkError: n
                                        }))
                                    }
                                })
                            }
                            )]
                        }
                    })
                })
            }
            ,
            e.prototype.markMutationResult = function(e, t) {
                var r = this;
                void 0 === t && (t = this.cache);
                var n = e.result
                  , i = []
                  , o = "no-cache" === e.fetchPolicy;
                if (!o && rI(n, e.errorPolicy)) {
                    i.push({
                        result: n.data,
                        dataId: "ROOT_MUTATION",
                        query: e.document,
                        variables: e.variables
                    });
                    var a = e.updateQueries;
                    a && this.queries.forEach(function(e, o) {
                        var s = e.observableQuery
                          , u = s && s.queryName;
                        if (u && rD.call(a, u)) {
                            var c = a[u]
                              , l = r.queries.get(o)
                              , h = l.document
                              , f = l.variables
                              , p = t.diff({
                                query: h,
                                variables: f,
                                returnPartialData: !0,
                                optimistic: !1
                            })
                              , d = p.result;
                            if (p.complete && d) {
                                var y = c(d, {
                                    mutationResult: n,
                                    queryName: h && ep(h) || void 0,
                                    queryVariables: f
                                });
                                y && i.push({
                                    result: y,
                                    dataId: "ROOT_QUERY",
                                    query: h,
                                    variables: f
                                })
                            }
                        }
                    })
                }
                if (i.length > 0 || e.refetchQueries || e.update || e.onQueryUpdated || e.removeOptimistic) {
                    var s = [];
                    if (this.refetchQueries({
                        updateCache: function(t) {
                            o || i.forEach(function(e) {
                                return t.write(e)
                            });
                            var a = e.update;
                            if (a) {
                                if (!o) {
                                    var s = t.diff({
                                        id: "ROOT_MUTATION",
                                        query: r.transform(e.document).asQuery,
                                        variables: e.variables,
                                        optimistic: !1,
                                        returnPartialData: !0
                                    });
                                    s.complete && (n = (0,
                                    f.pi)((0,
                                    f.pi)({}, n), {
                                        data: s.result
                                    }))
                                }
                                a(t, n, {
                                    context: e.context,
                                    variables: e.variables
                                })
                            }
                            o || e.keepRootFields || t.modify({
                                id: "ROOT_MUTATION",
                                fields: function(e, t) {
                                    var r = t.fieldName
                                      , n = t.DELETE;
                                    return "__typename" === r ? e : n
                                }
                            })
                        },
                        include: e.refetchQueries,
                        optimistic: !1,
                        removeOptimistic: e.removeOptimistic,
                        onQueryUpdated: e.onQueryUpdated || null
                    }).forEach(function(e) {
                        return s.push(e)
                    }),
                    e.awaitRefetchQueries || e.onQueryUpdated)
                        return Promise.all(s).then(function() {
                            return n
                        })
                }
                return Promise.resolve(n)
            }
            ,
            e.prototype.markMutationOptimistic = function(e, t) {
                var r = this
                  , n = "function" == typeof e ? e(t.variables) : e;
                return this.cache.recordOptimisticTransaction(function(e) {
                    try {
                        r.markMutationResult((0,
                        f.pi)((0,
                        f.pi)({}, t), {
                            result: {
                                data: n
                            }
                        }), e)
                    } catch (i) {
                        __DEV__ && m.error(i)
                    }
                }, t.mutationId)
            }
            ,
            e.prototype.fetchQuery = function(e, t, r) {
                return this.fetchQueryObservable(e, t, r).promise
            }
            ,
            e.prototype.getQueryStore = function() {
                var e = Object.create(null);
                return this.queries.forEach(function(t, r) {
                    e[r] = {
                        variables: t.variables,
                        networkStatus: t.networkStatus,
                        networkError: t.networkError,
                        graphQLErrors: t.graphQLErrors
                    }
                }),
                e
            }
            ,
            e.prototype.resetErrors = function(e) {
                var t = this.queries.get(e);
                t && (t.networkError = void 0,
                t.graphQLErrors = [])
            }
            ,
            e.prototype.transform = function(e) {
                var t = this.transformCache;
                if (!t.has(e)) {
                    var r = this.cache.transformDocument(e)
                      , n = tA([tC], eh(this.cache.transformForLink(r)))
                      , i = this.localState.clientQuery(r)
                      , o = n && this.localState.serverQuery(n)
                      , a = {
                        document: r,
                        hasClientExports: r && tu(["client"], r) && tu(["export"], r),
                        hasForcedResolvers: this.localState.shouldForceResolvers(r),
                        clientQuery: i,
                        serverQuery: o,
                        defaultVars: em(ef(r)),
                        asQuery: (0,
                        f.pi)((0,
                        f.pi)({}, r), {
                            definitions: r.definitions.map(function(e) {
                                return "OperationDefinition" === e.kind && "query" !== e.operation ? (0,
                                f.pi)((0,
                                f.pi)({}, e), {
                                    operation: "query"
                                }) : e
                            })
                        })
                    }
                      , s = function(e) {
                        e && !t.has(e) && t.set(e, a)
                    };
                    s(e),
                    s(r),
                    s(i),
                    s(o)
                }
                return t.get(e)
            }
            ,
            e.prototype.getVariables = function(e, t) {
                return (0,
                f.pi)((0,
                f.pi)({}, this.transform(e).defaultVars), t)
            }
            ,
            e.prototype.watchQuery = function(e) {
                void 0 === (e = (0,
                f.pi)((0,
                f.pi)({}, e), {
                    variables: this.getVariables(e.query, e.variables)
                })).notifyOnNetworkStatusChange && (e.notifyOnNetworkStatusChange = !1);
                var t = new rS(this)
                  , r = new tK({
                    queryManager: this,
                    queryInfo: t,
                    options: e
                });
                return this.queries.set(r.queryId, t),
                t.init({
                    document: r.query,
                    observableQuery: r,
                    variables: r.variables
                }),
                r
            }
            ,
            e.prototype.query = function(e, t) {
                var r = this;
                return void 0 === t && (t = this.generateQueryId()),
                __DEV__ ? m(e.query, "query option is required. You must specify your GraphQL document in the query option.") : m(e.query, 14),
                __DEV__ ? m("Document" === e.query.kind, 'You must wrap the query string in a "gql" tag.') : m("Document" === e.query.kind, 15),
                __DEV__ ? m(!e.returnPartialData, "returnPartialData option only supported on watchQuery.") : m(!e.returnPartialData, 16),
                __DEV__ ? m(!e.pollInterval, "pollInterval option only supported on watchQuery.") : m(!e.pollInterval, 17),
                this.fetchQuery(t, e).finally(function() {
                    return r.stopQuery(t)
                })
            }
            ,
            e.prototype.generateQueryId = function() {
                return String(this.queryIdCounter++)
            }
            ,
            e.prototype.generateRequestId = function() {
                return this.requestIdCounter++
            }
            ,
            e.prototype.generateMutationId = function() {
                return String(this.mutationIdCounter++)
            }
            ,
            e.prototype.stopQueryInStore = function(e) {
                this.stopQueryInStoreNoBroadcast(e),
                this.broadcastQueries()
            }
            ,
            e.prototype.stopQueryInStoreNoBroadcast = function(e) {
                var t = this.queries.get(e);
                t && t.stop()
            }
            ,
            e.prototype.clearStore = function(e) {
                return void 0 === e && (e = {
                    discardWatches: !0
                }),
                this.cancelPendingFetches(__DEV__ ? new v("Store reset while query was in flight (not completed in link chain)") : new v(18)),
                this.queries.forEach(function(e) {
                    e.observableQuery ? e.networkStatus = l.loading : e.stop()
                }),
                this.mutationStore && (this.mutationStore = Object.create(null)),
                this.cache.reset(e)
            }
            ,
            e.prototype.getObservableQueries = function(e) {
                var t = this;
                void 0 === e && (e = "active");
                var r = new Map
                  , n = new Map
                  , i = new Set;
                return Array.isArray(e) && e.forEach(function(e) {
                    "string" == typeof e ? n.set(e, !1) : J(e) && "Document" === e.kind && Array.isArray(e.definitions) ? n.set(t.transform(e).document, !1) : J(e) && e.query && i.add(e)
                }),
                this.queries.forEach(function(t, i) {
                    var o = t.observableQuery
                      , a = t.document;
                    if (o) {
                        if ("all" === e) {
                            r.set(i, o);
                            return
                        }
                        var s = o.queryName;
                        if ("standby" === o.options.fetchPolicy || "active" === e && !o.hasObservers())
                            return;
                        ("active" === e || s && n.has(s) || a && n.has(a)) && (r.set(i, o),
                        s && n.set(s, !0),
                        a && n.set(a, !0))
                    }
                }),
                i.size && i.forEach(function(e) {
                    var n = tP("legacyOneTimeQuery")
                      , i = t.getQuery(n).init({
                        document: e.query,
                        variables: e.variables
                    })
                      , o = new tK({
                        queryManager: t,
                        queryInfo: i,
                        options: (0,
                        f.pi)((0,
                        f.pi)({}, e), {
                            fetchPolicy: "network-only"
                        })
                    });
                    m(o.queryId === n),
                    i.setObservableQuery(o),
                    r.set(n, o)
                }),
                __DEV__ && n.size && n.forEach(function(e, t) {
                    !e && __DEV__ && m.warn("Unknown query ".concat("string" == typeof t ? "named " : "").concat(JSON.stringify(t, null, 2), " requested in refetchQueries options.include array"))
                }),
                r
            }
            ,
            e.prototype.reFetchObservableQueries = function(e) {
                var t = this;
                void 0 === e && (e = !1);
                var r = [];
                return this.getObservableQueries(e ? "all" : "active").forEach(function(n, i) {
                    var o = n.options.fetchPolicy;
                    n.resetLastResults(),
                    (e || "standby" !== o && "cache-only" !== o) && r.push(n.refetch()),
                    t.getQuery(i).setDiff(null)
                }),
                this.broadcastQueries(),
                Promise.all(r)
            }
            ,
            e.prototype.setObservableQuery = function(e) {
                this.getQuery(e.queryId).setObservableQuery(e)
            }
            ,
            e.prototype.startGraphQLSubscription = function(e) {
                var t = this
                  , r = e.query
                  , n = e.fetchPolicy
                  , i = e.errorPolicy
                  , o = e.variables
                  , a = e.context
                  , s = void 0 === a ? {} : a;
                r = this.transform(r).document,
                o = this.getVariables(r, o);
                var u = function(e) {
                    return t.getObservableFromLink(r, s, e).map(function(o) {
                        if ("no-cache" !== n && (rI(o, i) && t.cache.write({
                            query: r,
                            result: o.data,
                            dataId: "ROOT_SUBSCRIPTION",
                            variables: e
                        }),
                        t.broadcastQueries()),
                        tx(o))
                            throw new tU({
                                graphQLErrors: o.errors
                            });
                        return o
                    })
                };
                if (this.transform(r).hasClientExports) {
                    var c = this.localState.addExportedVariables(r, o, s).then(u);
                    return new K(function(e) {
                        var t = null;
                        return c.then(function(r) {
                            return t = r.subscribe(e)
                        }, e.error),
                        function() {
                            return t && t.unsubscribe()
                        }
                    }
                    )
                }
                return u(o)
            }
            ,
            e.prototype.stopQuery = function(e) {
                this.stopQueryNoBroadcast(e),
                this.broadcastQueries()
            }
            ,
            e.prototype.stopQueryNoBroadcast = function(e) {
                this.stopQueryInStoreNoBroadcast(e),
                this.removeQuery(e)
            }
            ,
            e.prototype.removeQuery = function(e) {
                this.fetchCancelFns.delete(e),
                this.queries.has(e) && (this.getQuery(e).stop(),
                this.queries.delete(e))
            }
            ,
            e.prototype.broadcastQueries = function() {
                this.onBroadcast && this.onBroadcast(),
                this.queries.forEach(function(e) {
                    return e.notify()
                })
            }
            ,
            e.prototype.getLocalState = function() {
                return this.localState
            }
            ,
            e.prototype.getObservableFromLink = function(e, t, r, n) {
                var i, o, a = this;
                void 0 === n && (n = null !== (i = null == t ? void 0 : t.queryDeduplication) && void 0 !== i ? i : this.queryDeduplication);
                var s = this.transform(e).serverQuery;
                if (s) {
                    var u = this.inFlightLinkObservables
                      , c = this.link
                      , l = {
                        query: s,
                        variables: r,
                        operationName: ep(s) || void 0,
                        context: this.prepareContext((0,
                        f.pi)((0,
                        f.pi)({}, t), {
                            forceFetch: !n
                        }))
                    };
                    if (t = l.context,
                    n) {
                        var h = u.get(s) || new Map;
                        u.set(s, h);
                        var p = tO(r);
                        if (!(o = h.get(p))) {
                            var d = new tq([eO(c, l)]);
                            h.set(p, o = d),
                            d.cleanup(function() {
                                h.delete(p) && h.size < 1 && u.delete(s)
                            })
                        }
                    } else
                        o = new tq([eO(c, l)])
                } else
                    o = new tq([K.of({
                        data: {}
                    })]),
                    t = this.prepareContext(t);
                var y = this.transform(e).clientQuery;
                return y && (o = tT(o, function(e) {
                    return a.localState.runResolvers({
                        document: y,
                        remoteResult: e,
                        context: t,
                        variables: r
                    })
                })),
                o
            }
            ,
            e.prototype.getResultsFromLink = function(e, t, r) {
                var n = e.lastRequestId = this.generateRequestId();
                return tT(this.getObservableFromLink(e.document, r.context, r.variables), function(i) {
                    var o = tV(i.errors);
                    if (n >= e.lastRequestId) {
                        if (o && "none" === r.errorPolicy)
                            throw e.markError(new tU({
                                graphQLErrors: i.errors
                            }));
                        e.markResult(i, r, t),
                        e.markReady()
                    }
                    var a = {
                        data: i.data,
                        loading: !1,
                        networkStatus: l.ready
                    };
                    return o && "ignore" !== r.errorPolicy && (a.errors = i.errors,
                    a.networkStatus = l.error),
                    a
                }, function(t) {
                    var r = t.hasOwnProperty("graphQLErrors") ? t : new tU({
                        networkError: t
                    });
                    throw n >= e.lastRequestId && e.markError(r),
                    r
                })
            }
            ,
            e.prototype.fetchQueryObservable = function(e, t, r) {
                var n = this;
                void 0 === r && (r = l.loading);
                var i = this.transform(t.query).document
                  , o = this.getVariables(i, t.variables)
                  , a = this.getQuery(e)
                  , s = this.defaultOptions.watchQuery
                  , u = t.fetchPolicy
                  , c = void 0 === u ? s && s.fetchPolicy || "cache-first" : u
                  , h = t.errorPolicy
                  , f = void 0 === h ? s && s.errorPolicy || "none" : h
                  , p = t.returnPartialData
                  , d = t.notifyOnNetworkStatusChange
                  , y = t.context
                  , v = Object.assign({}, t, {
                    query: i,
                    variables: o,
                    fetchPolicy: c,
                    errorPolicy: f,
                    returnPartialData: void 0 !== p && p,
                    notifyOnNetworkStatusChange: void 0 !== d && d,
                    context: void 0 === y ? {} : y
                })
                  , m = function(e) {
                    v.variables = e;
                    var i = n.fetchQueryByPolicy(a, v, r);
                    return "standby" !== v.fetchPolicy && i.length > 0 && a.observableQuery && a.observableQuery.applyNextFetchPolicy("after-fetch", t),
                    i
                }
                  , g = function() {
                    return n.fetchCancelFns.delete(e)
                };
                this.fetchCancelFns.set(e, function(e) {
                    g(),
                    setTimeout(function() {
                        return b.cancel(e)
                    })
                });
                var b = new tq(this.transform(v.query).hasClientExports ? this.localState.addExportedVariables(v.query, v.variables, v.context).then(m) : m(v.variables));
                return b.promise.then(g, g),
                b
            }
            ,
            e.prototype.refetchQueries = function(e) {
                var t = this
                  , r = e.updateCache
                  , n = e.include
                  , i = e.optimistic
                  , o = void 0 !== i && i
                  , a = e.removeOptimistic
                  , s = void 0 === a ? o ? tP("refetchQueries") : void 0 : a
                  , u = e.onQueryUpdated
                  , c = new Map;
                n && this.getObservableQueries(n).forEach(function(e, r) {
                    c.set(r, {
                        oq: e,
                        lastDiff: t.getQuery(r).getDiff()
                    })
                });
                var l = new Map;
                return r && this.cache.batch({
                    update: r,
                    optimistic: o && s || !1,
                    removeOptimistic: s,
                    onWatchUpdated: function(e, t, r) {
                        var n = e.watcher instanceof rS && e.watcher.observableQuery;
                        if (n) {
                            if (u) {
                                c.delete(n.queryId);
                                var i = u(n, t, r);
                                return !0 === i && (i = n.refetch()),
                                !1 !== i && l.set(n, i),
                                i
                            }
                            null !== u && c.set(n.queryId, {
                                oq: n,
                                lastDiff: r,
                                diff: t
                            })
                        }
                    }
                }),
                c.size && c.forEach(function(e, r) {
                    var n, i = e.oq, o = e.lastDiff, a = e.diff;
                    if (u) {
                        if (!a) {
                            var s = i.queryInfo;
                            s.reset(),
                            a = s.getDiff()
                        }
                        n = u(i, a, o)
                    }
                    u && !0 !== n || (n = i.refetch()),
                    !1 !== n && l.set(i, n),
                    r.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(r)
                }),
                s && this.cache.removeOptimistic(s),
                l
            }
            ,
            e.prototype.fetchQueryByPolicy = function(e, t, r) {
                var n = this
                  , i = t.query
                  , o = t.variables
                  , a = t.fetchPolicy
                  , s = t.refetchWritePolicy
                  , u = t.errorPolicy
                  , c = t.returnPartialData
                  , h = t.context
                  , p = t.notifyOnNetworkStatusChange
                  , d = e.networkStatus;
                e.init({
                    document: this.transform(i).document,
                    variables: o,
                    networkStatus: r
                });
                var y = function() {
                    return e.getDiff(o)
                }
                  , v = function(t, r) {
                    void 0 === r && (r = e.networkStatus || l.loading);
                    var a = t.result;
                    !__DEV__ || c || e3(a, {}) || tH(t.missing);
                    var s = function(e) {
                        return K.of((0,
                        f.pi)({
                            data: e,
                            loading: tB(r),
                            networkStatus: r
                        }, t.complete ? null : {
                            partial: !0
                        }))
                    };
                    return a && n.transform(i).hasForcedResolvers ? n.localState.runResolvers({
                        document: i,
                        remoteResult: {
                            data: a
                        },
                        context: h,
                        variables: o,
                        onlyRunForcedResolvers: !0
                    }).then(function(e) {
                        return s(e.data || void 0)
                    }) : s(a)
                }
                  , m = "no-cache" === a ? 0 : r === l.refetch && "merge" !== s ? 1 : 2
                  , g = function() {
                    return n.getResultsFromLink(e, m, {
                        variables: o,
                        context: h,
                        fetchPolicy: a,
                        errorPolicy: u
                    })
                }
                  , b = p && "number" == typeof d && d !== r && tB(r);
                switch (a) {
                default:
                case "cache-first":
                    var _ = y();
                    if (_.complete)
                        return [v(_, e.markReady())];
                    if (c || b)
                        return [v(_), g()];
                    return [g()];
                case "cache-and-network":
                    var _ = y();
                    if (_.complete || c || b)
                        return [v(_), g()];
                    return [g()];
                case "cache-only":
                    return [v(y(), e.markReady())];
                case "network-only":
                    if (b)
                        return [v(y()), g()];
                    return [g()];
                case "no-cache":
                    if (b)
                        return [v(e.getDiff()), g()];
                    return [g()];
                case "standby":
                    return []
                }
            }
            ,
            e.prototype.getQuery = function(e) {
                return e && !this.queries.has(e) && this.queries.set(e, new rS(this,e)),
                this.queries.get(e)
            }
            ,
            e.prototype.prepareContext = function(e) {
                void 0 === e && (e = {});
                var t = this.localState.prepareContext(e);
                return (0,
                f.pi)((0,
                f.pi)({}, t), {
                    clientAwareness: this.clientAwareness
                })
            }
            ,
            e
        }();
        function rA(e, t) {
            return ta(e, t, t.variables && {
                variables: (0,
                f.pi)((0,
                f.pi)({}, e && e.variables), t.variables)
            })
        }
        var rR = !1
          , rC = function() {
            function e(e) {
                var t = this;
                this.resetStoreCallbacks = [],
                this.clearStoreCallbacks = [];
                var r = e.uri
                  , n = e.credentials
                  , i = e.headers
                  , o = e.cache
                  , a = e.ssrMode
                  , s = void 0 !== a && a
                  , u = e.ssrForceFetchDelay
                  , c = void 0 === u ? 0 : u
                  , l = e.connectToDevTools
                  , h = void 0 === l ? "object" == typeof window && !window.__APOLLO_CLIENT__ && __DEV__ : l
                  , f = e.queryDeduplication
                  , p = void 0 === f || f
                  , d = e.defaultOptions
                  , y = e.assumeImmutableResults
                  , g = e.resolvers
                  , b = e.typeDefs
                  , _ = e.fragmentMatcher
                  , E = e.name
                  , w = e.version
                  , O = e.link;
                if (O || (O = r ? new eH({
                    uri: r,
                    credentials: n,
                    headers: i
                }) : ew.empty()),
                !o)
                    throw __DEV__ ? new v("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs") : new v(7);
                if (this.link = O,
                this.cache = o,
                this.disableNetworkFetches = s || c > 0,
                this.queryDeduplication = p,
                this.defaultOptions = d || Object.create(null),
                this.typeDefs = b,
                c && setTimeout(function() {
                    return t.disableNetworkFetches = !1
                }, c),
                this.watchQuery = this.watchQuery.bind(this),
                this.query = this.query.bind(this),
                this.mutate = this.mutate.bind(this),
                this.resetStore = this.resetStore.bind(this),
                this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this),
                h && "object" == typeof window && (window.__APOLLO_CLIENT__ = this),
                !rR && __DEV__ && (rR = !0,
                "undefined" != typeof window && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)) {
                    var k = window.navigator
                      , T = k && k.userAgent
                      , x = void 0;
                    "string" == typeof T && (T.indexOf("Chrome/") > -1 ? x = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : T.indexOf("Firefox/") > -1 && (x = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),
                    x && __DEV__ && m.log("Download the Apollo DevTools for a better development experience: " + x)
                }
                this.version = "3.6.9",
                this.localState = new rO({
                    cache: o,
                    client: this,
                    resolvers: g,
                    fragmentMatcher: _
                }),
                this.queryManager = new rN({
                    cache: this.cache,
                    link: this.link,
                    defaultOptions: this.defaultOptions,
                    queryDeduplication: p,
                    ssrMode: s,
                    clientAwareness: {
                        name: E,
                        version: w
                    },
                    localState: this.localState,
                    assumeImmutableResults: void 0 !== y && y,
                    onBroadcast: h ? function() {
                        t.devToolsHookCb && t.devToolsHookCb({
                            action: {},
                            state: {
                                queries: t.queryManager.getQueryStore(),
                                mutations: t.queryManager.mutationStore || {}
                            },
                            dataWithOptimisticResults: t.cache.extract(!0)
                        })
                    }
                    : void 0
                })
            }
            return e.prototype.stop = function() {
                this.queryManager.stop()
            }
            ,
            e.prototype.watchQuery = function(e) {
                return this.defaultOptions.watchQuery && (e = rA(this.defaultOptions.watchQuery, e)),
                this.disableNetworkFetches && ("network-only" === e.fetchPolicy || "cache-and-network" === e.fetchPolicy) && (e = (0,
                f.pi)((0,
                f.pi)({}, e), {
                    fetchPolicy: "cache-first"
                })),
                this.queryManager.watchQuery(e)
            }
            ,
            e.prototype.query = function(e) {
                return this.defaultOptions.query && (e = rA(this.defaultOptions.query, e)),
                __DEV__ ? m("cache-and-network" !== e.fetchPolicy, "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : m("cache-and-network" !== e.fetchPolicy, 8),
                this.disableNetworkFetches && "network-only" === e.fetchPolicy && (e = (0,
                f.pi)((0,
                f.pi)({}, e), {
                    fetchPolicy: "cache-first"
                })),
                this.queryManager.query(e)
            }
            ,
            e.prototype.mutate = function(e) {
                return this.defaultOptions.mutate && (e = rA(this.defaultOptions.mutate, e)),
                this.queryManager.mutate(e)
            }
            ,
            e.prototype.subscribe = function(e) {
                return this.queryManager.startGraphQLSubscription(e)
            }
            ,
            e.prototype.readQuery = function(e, t) {
                return void 0 === t && (t = !1),
                this.cache.readQuery(e, t)
            }
            ,
            e.prototype.readFragment = function(e, t) {
                return void 0 === t && (t = !1),
                this.cache.readFragment(e, t)
            }
            ,
            e.prototype.writeQuery = function(e) {
                this.cache.writeQuery(e),
                this.queryManager.broadcastQueries()
            }
            ,
            e.prototype.writeFragment = function(e) {
                this.cache.writeFragment(e),
                this.queryManager.broadcastQueries()
            }
            ,
            e.prototype.__actionHookForDevTools = function(e) {
                this.devToolsHookCb = e
            }
            ,
            e.prototype.__requestRaw = function(e) {
                return eO(this.link, e)
            }
            ,
            e.prototype.resetStore = function() {
                var e = this;
                return Promise.resolve().then(function() {
                    return e.queryManager.clearStore({
                        discardWatches: !1
                    })
                }).then(function() {
                    return Promise.all(e.resetStoreCallbacks.map(function(e) {
                        return e()
                    }))
                }).then(function() {
                    return e.reFetchObservableQueries()
                })
            }
            ,
            e.prototype.clearStore = function() {
                var e = this;
                return Promise.resolve().then(function() {
                    return e.queryManager.clearStore({
                        discardWatches: !0
                    })
                }).then(function() {
                    return Promise.all(e.clearStoreCallbacks.map(function(e) {
                        return e()
                    }))
                })
            }
            ,
            e.prototype.onResetStore = function(e) {
                var t = this;
                return this.resetStoreCallbacks.push(e),
                function() {
                    t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function(t) {
                        return t !== e
                    })
                }
            }
            ,
            e.prototype.onClearStore = function(e) {
                var t = this;
                return this.clearStoreCallbacks.push(e),
                function() {
                    t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function(t) {
                        return t !== e
                    })
                }
            }
            ,
            e.prototype.reFetchObservableQueries = function(e) {
                return this.queryManager.reFetchObservableQueries(e)
            }
            ,
            e.prototype.refetchQueries = function(e) {
                var t = this.queryManager.refetchQueries(e)
                  , r = []
                  , n = [];
                t.forEach(function(e, t) {
                    r.push(t),
                    n.push(e)
                });
                var i = Promise.all(n);
                return i.queries = r,
                i.results = n,
                i.catch(function(e) {
                    __DEV__ && m.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(e))
                }),
                i
            }
            ,
            e.prototype.getObservableQueries = function(e) {
                return void 0 === e && (e = "active"),
                this.queryManager.getObservableQueries(e)
            }
            ,
            e.prototype.extract = function(e) {
                return this.cache.extract(e)
            }
            ,
            e.prototype.restore = function(e) {
                return this.cache.restore(e)
            }
            ,
            e.prototype.addResolvers = function(e) {
                this.localState.addResolvers(e)
            }
            ,
            e.prototype.setResolvers = function(e) {
                this.localState.setResolvers(e)
            }
            ,
            e.prototype.getResolvers = function() {
                return this.localState.getResolvers()
            }
            ,
            e.prototype.setLocalStateFragmentMatcher = function(e) {
                this.localState.setFragmentMatcher(e)
            }
            ,
            e.prototype.setLink = function(e) {
                this.link = this.queryManager.link = e
            }
            ,
            e
        }()
          , rF = function() {
            function e() {
                this.getFragmentDoc = rm(Y)
            }
            return e.prototype.batch = function(e) {
                var t, r = this, n = "string" == typeof e.optimistic ? e.optimistic : !1 === e.optimistic ? null : void 0;
                return this.performTransaction(function() {
                    return t = e.update(r)
                }, n),
                t
            }
            ,
            e.prototype.recordOptimisticTransaction = function(e, t) {
                this.performTransaction(e, t)
            }
            ,
            e.prototype.transformDocument = function(e) {
                return e
            }
            ,
            e.prototype.identify = function(e) {}
            ,
            e.prototype.gc = function() {
                return []
            }
            ,
            e.prototype.modify = function(e) {
                return !1
            }
            ,
            e.prototype.transformForLink = function(e) {
                return e
            }
            ,
            e.prototype.readQuery = function(e, t) {
                return void 0 === t && (t = !!e.optimistic),
                this.read((0,
                f.pi)((0,
                f.pi)({}, e), {
                    rootId: e.id || "ROOT_QUERY",
                    optimistic: t
                }))
            }
            ,
            e.prototype.readFragment = function(e, t) {
                return void 0 === t && (t = !!e.optimistic),
                this.read((0,
                f.pi)((0,
                f.pi)({}, e), {
                    query: this.getFragmentDoc(e.fragment, e.fragmentName),
                    rootId: e.id,
                    optimistic: t
                }))
            }
            ,
            e.prototype.writeQuery = function(e) {
                var t = e.id
                  , r = e.data
                  , n = (0,
                f._T)(e, ["id", "data"]);
                return this.write(Object.assign(n, {
                    dataId: t || "ROOT_QUERY",
                    result: r
                }))
            }
            ,
            e.prototype.writeFragment = function(e) {
                var t = e.id
                  , r = e.data
                  , n = e.fragment
                  , i = e.fragmentName
                  , o = (0,
                f._T)(e, ["id", "data", "fragment", "fragmentName"]);
                return this.write(Object.assign(o, {
                    query: this.getFragmentDoc(n, i),
                    dataId: t,
                    result: r
                }))
            }
            ,
            e.prototype.updateQuery = function(e, t) {
                return this.batch({
                    update: function(r) {
                        var n = r.readQuery(e)
                          , i = t(n);
                        return null == i ? n : (r.writeQuery((0,
                        f.pi)((0,
                        f.pi)({}, e), {
                            data: i
                        })),
                        i)
                    }
                })
            }
            ,
            e.prototype.updateFragment = function(e, t) {
                return this.batch({
                    update: function(r) {
                        var n = r.readFragment(e)
                          , i = t(n);
                        return null == i ? n : (r.writeFragment((0,
                        f.pi)((0,
                        f.pi)({}, e), {
                            data: i
                        })),
                        i)
                    }
                })
            }
            ,
            e
        }()
          , rP = function(e, t, r, n) {
            this.message = e,
            this.path = t,
            this.query = r,
            this.variables = n
        };
        function rM(e) {
            if (__DEV__) {
                var t;
                (t = new Set([e])).forEach(function(e) {
                    J(e) && function(e) {
                        if (__DEV__ && !Object.isFrozen(e))
                            try {
                                Object.freeze(e)
                            } catch (t) {
                                if (t instanceof TypeError)
                                    return null;
                                throw t
                            }
                        return e
                    }(e) === e && Object.getOwnPropertyNames(e).forEach(function(r) {
                        J(e[r]) && t.add(e[r])
                    })
                })
            }
            return e
        }
        var rj = Object.create(null)
          , rL = function() {
            return rj
        }
          , rq = Object.create(null)
          , rV = function() {
            function e(e, t) {
                var r = this;
                this.policies = e,
                this.group = t,
                this.data = Object.create(null),
                this.rootIds = Object.create(null),
                this.refs = Object.create(null),
                this.getFieldValue = function(e, t) {
                    return rM(ee(e) ? r.get(e.__ref, t) : e && e[t])
                }
                ,
                this.canRead = function(e) {
                    return ee(e) ? r.has(e.__ref) : "object" == typeof e
                }
                ,
                this.toReference = function(e, t) {
                    if ("string" == typeof e)
                        return Z(e);
                    if (ee(e))
                        return e;
                    var n = r.policies.identify(e)[0];
                    if (n) {
                        var i = Z(n);
                        return t && r.merge(n, e),
                        i
                    }
                }
            }
            return e.prototype.toObject = function() {
                return (0,
                f.pi)({}, this.data)
            }
            ,
            e.prototype.has = function(e) {
                return void 0 !== this.lookup(e, !0)
            }
            ,
            e.prototype.get = function(e, t) {
                if (this.group.depend(e, t),
                td.call(this.data, e)) {
                    var r = this.data[e];
                    if (r && td.call(r, t))
                        return r[t]
                }
                return "__typename" === t && td.call(this.policies.rootTypenamesById, e) ? this.policies.rootTypenamesById[e] : this instanceof rB ? this.parent.get(e, t) : void 0
            }
            ,
            e.prototype.lookup = function(e, t) {
                return (t && this.group.depend(e, "__exists"),
                td.call(this.data, e)) ? this.data[e] : this instanceof rB ? this.parent.lookup(e, t) : this.policies.rootTypenamesById[e] ? Object.create(null) : void 0
            }
            ,
            e.prototype.merge = function(e, t) {
                var r, n = this;
                ee(e) && (e = e.__ref),
                ee(t) && (t = t.__ref);
                var i = "string" == typeof e ? this.lookup(r = e) : e
                  , o = "string" == typeof t ? this.lookup(r = t) : t;
                if (o) {
                    __DEV__ ? m("string" == typeof r, "store.merge expects a string ID") : m("string" == typeof r, 1);
                    var a = new tp(rW).merge(i, o);
                    if (this.data[r] = a,
                    a !== i && (delete this.refs[r],
                    this.group.caching)) {
                        var s = Object.create(null);
                        i || (s.__exists = 1),
                        Object.keys(o).forEach(function(e) {
                            if (!i || i[e] !== a[e]) {
                                s[e] = 1;
                                var t = tb(e);
                                t === e || n.policies.hasKeyArgs(a.__typename, t) || (s[t] = 1),
                                void 0 !== a[e] || n instanceof rB || delete a[e]
                            }
                        }),
                        s.__typename && !(i && i.__typename) && this.policies.rootTypenamesById[r] === a.__typename && delete s.__typename,
                        Object.keys(s).forEach(function(e) {
                            return n.group.dirty(r, e)
                        })
                    }
                }
            }
            ,
            e.prototype.modify = function(e, t) {
                var r = this
                  , n = this.lookup(e);
                if (n) {
                    var i = Object.create(null)
                      , o = !1
                      , a = !0
                      , s = {
                        DELETE: rj,
                        INVALIDATE: rq,
                        isReference: ee,
                        toReference: this.toReference,
                        canRead: this.canRead,
                        readField: function(t, n) {
                            return r.policies.readField("string" == typeof t ? {
                                fieldName: t,
                                from: n || Z(e)
                            } : t, {
                                store: r
                            })
                        }
                    };
                    if (Object.keys(n).forEach(function(u) {
                        var c = tb(u)
                          , l = n[u];
                        if (void 0 !== l) {
                            var h = "function" == typeof t ? t : t[u] || t[c];
                            if (h) {
                                var p = h === rL ? rj : h(rM(l), (0,
                                f.pi)((0,
                                f.pi)({}, s), {
                                    fieldName: c,
                                    storeFieldName: u,
                                    storage: r.getStorage(e, u)
                                }));
                                p === rq ? r.group.dirty(e, u) : (p === rj && (p = void 0),
                                p !== l && (i[u] = p,
                                o = !0,
                                l = p))
                            }
                            void 0 !== l && (a = !1)
                        }
                    }),
                    o)
                        return this.merge(e, i),
                        a && (this instanceof rB ? this.data[e] = void 0 : delete this.data[e],
                        this.group.dirty(e, "__exists")),
                        !0
                }
                return !1
            }
            ,
            e.prototype.delete = function(e, t, r) {
                var n, i = this.lookup(e);
                if (i) {
                    var o = this.getFieldValue(i, "__typename")
                      , a = t && r ? this.policies.getStoreFieldName({
                        typename: o,
                        fieldName: t,
                        args: r
                    }) : t;
                    return this.modify(e, a ? ((n = {})[a] = rL,
                    n) : rL)
                }
                return !1
            }
            ,
            e.prototype.evict = function(e, t) {
                var r = !1;
                return e.id && (td.call(this.data, e.id) && (r = this.delete(e.id, e.fieldName, e.args)),
                this instanceof rB && this !== t && (r = this.parent.evict(e, t) || r),
                (e.fieldName || r) && this.group.dirty(e.id, e.fieldName || "__exists")),
                r
            }
            ,
            e.prototype.clear = function() {
                this.replace(null)
            }
            ,
            e.prototype.extract = function() {
                var e = this
                  , t = this.toObject()
                  , r = [];
                return this.getRootIdSet().forEach(function(t) {
                    td.call(e.policies.rootTypenamesById, t) || r.push(t)
                }),
                r.length && (t.__META = {
                    extraRootIds: r.sort()
                }),
                t
            }
            ,
            e.prototype.replace = function(e) {
                var t = this;
                if (Object.keys(this.data).forEach(function(r) {
                    e && td.call(e, r) || t.delete(r)
                }),
                e) {
                    var r = e.__META
                      , n = (0,
                    f._T)(e, ["__META"]);
                    Object.keys(n).forEach(function(e) {
                        t.merge(e, n[e])
                    }),
                    r && r.extraRootIds.forEach(this.retain, this)
                }
            }
            ,
            e.prototype.retain = function(e) {
                return this.rootIds[e] = (this.rootIds[e] || 0) + 1
            }
            ,
            e.prototype.release = function(e) {
                if (this.rootIds[e] > 0) {
                    var t = --this.rootIds[e];
                    return t || delete this.rootIds[e],
                    t
                }
                return 0
            }
            ,
            e.prototype.getRootIdSet = function(e) {
                return void 0 === e && (e = new Set),
                Object.keys(this.rootIds).forEach(e.add, e),
                this instanceof rB ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e),
                e
            }
            ,
            e.prototype.gc = function() {
                var e = this
                  , t = this.getRootIdSet()
                  , r = this.toObject();
                t.forEach(function(n) {
                    td.call(r, n) && (Object.keys(e.findChildRefIds(n)).forEach(t.add, t),
                    delete r[n])
                });
                var n = Object.keys(r);
                if (n.length) {
                    for (var i = this; i instanceof rB; )
                        i = i.parent;
                    n.forEach(function(e) {
                        return i.delete(e)
                    })
                }
                return n
            }
            ,
            e.prototype.findChildRefIds = function(e) {
                if (!td.call(this.refs, e)) {
                    var t = this.refs[e] = Object.create(null)
                      , r = this.data[e];
                    if (!r)
                        return t;
                    var n = new Set([r]);
                    n.forEach(function(e) {
                        ee(e) && (t[e.__ref] = !0),
                        J(e) && Object.keys(e).forEach(function(t) {
                            var r = e[t];
                            J(r) && n.add(r)
                        })
                    })
                }
                return this.refs[e]
            }
            ,
            e.prototype.makeCacheKey = function() {
                return this.group.keyMaker.lookupArray(arguments)
            }
            ,
            e
        }()
          , rQ = function() {
            function e(e, t) {
                void 0 === t && (t = null),
                this.caching = e,
                this.parent = t,
                this.d = null,
                this.resetCaching()
            }
            return e.prototype.resetCaching = function() {
                this.d = this.caching ? rd() : null,
                this.keyMaker = new tr(tn)
            }
            ,
            e.prototype.depend = function(e, t) {
                if (this.d) {
                    this.d(t + "#" + e);
                    var r = tb(t);
                    r !== t && this.d(r + "#" + e),
                    this.parent && this.parent.depend(e, t)
                }
            }
            ,
            e.prototype.dirty = function(e, t) {
                this.d && this.d.dirty(t + "#" + e, "__exists" === t ? "forget" : "setDirty")
            }
            ,
            e
        }();
        function rU(e, t) {
            r$(e) && e.group.depend(t, "__exists")
        }
        s = function(e) {
            function t(t) {
                var r = t.policies
                  , n = t.resultCaching
                  , i = t.seed
                  , o = e.call(this, r, new rQ(void 0 === n || n)) || this;
                return o.stump = new rz(o),
                o.storageTrie = new tr(tn),
                i && o.replace(i),
                o
            }
            return (0,
            f.ZT)(t, e),
            t.prototype.addLayer = function(e, t) {
                return this.stump.addLayer(e, t)
            }
            ,
            t.prototype.removeLayer = function() {
                return this
            }
            ,
            t.prototype.getStorage = function() {
                return this.storageTrie.lookupArray(arguments)
            }
            ,
            t
        }(a = rV || (rV = {})),
        a.Root = s;
        var rB = function(e) {
            function t(t, r, n, i) {
                var o = e.call(this, r.policies, i) || this;
                return o.id = t,
                o.parent = r,
                o.replay = n,
                o.group = i,
                n(o),
                o
            }
            return (0,
            f.ZT)(t, e),
            t.prototype.addLayer = function(e, r) {
                return new t(e,this,r,this.group)
            }
            ,
            t.prototype.removeLayer = function(e) {
                var t = this
                  , r = this.parent.removeLayer(e);
                return e === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(e) {
                    var n = t.data[e]
                      , i = r.lookup(e);
                    i ? n ? n !== i && Object.keys(n).forEach(function(r) {
                        e3(n[r], i[r]) || t.group.dirty(e, r)
                    }) : (t.group.dirty(e, "__exists"),
                    Object.keys(i).forEach(function(r) {
                        t.group.dirty(e, r)
                    })) : t.delete(e)
                }),
                r) : r === this.parent ? this : r.addLayer(this.id, this.replay)
            }
            ,
            t.prototype.toObject = function() {
                return (0,
                f.pi)((0,
                f.pi)({}, this.parent.toObject()), this.data)
            }
            ,
            t.prototype.findChildRefIds = function(t) {
                var r = this.parent.findChildRefIds(t);
                return td.call(this.data, t) ? (0,
                f.pi)((0,
                f.pi)({}, r), e.prototype.findChildRefIds.call(this, t)) : r
            }
            ,
            t.prototype.getStorage = function() {
                for (var e = this.parent; e.parent; )
                    e = e.parent;
                return e.getStorage.apply(e, arguments)
            }
            ,
            t
        }(rV)
          , rz = function(e) {
            function t(t) {
                return e.call(this, "EntityStore.Stump", t, function() {}, new rQ(t.group.caching,t.group)) || this
            }
            return (0,
            f.ZT)(t, e),
            t.prototype.removeLayer = function() {
                return this
            }
            ,
            t.prototype.merge = function() {
                return this.parent.merge.apply(this.parent, arguments)
            }
            ,
            t
        }(rB);
        function rW(e, t, r) {
            var n = e[r]
              , i = t[r];
            return e3(n, i) ? n : i
        }
        function r$(e) {
            return !!(e instanceof rV && e.group.caching)
        }
        function rG(e) {
            return [e.selectionSet, e.objectOrReference, e.context, e.context.canonizeResults]
        }
        var rK = function() {
            function e(e) {
                var t = this;
                this.knownResults = new (tn ? WeakMap : Map),
                this.config = ta(e, {
                    addTypename: !1 !== e.addTypename,
                    canonizeResults: tm(e)
                }),
                this.canon = e.canon || new tw,
                this.executeSelectionSet = rm(function(e) {
                    var r, n = e.context.canonizeResults, i = rG(e);
                    i[3] = !n;
                    var o = (r = t.executeSelectionSet).peek.apply(r, i);
                    return o ? n ? (0,
                    f.pi)((0,
                    f.pi)({}, o), {
                        result: t.canon.admit(o.result)
                    }) : o : (rU(e.context.store, e.enclosingRef.__ref),
                    t.execSelectionSetImpl(e))
                }, {
                    max: this.config.resultCacheMaxSize,
                    keyArgs: rG,
                    makeCacheKey: function(e, t, r, n) {
                        if (r$(r.store))
                            return r.store.makeCacheKey(e, ee(t) ? t.__ref : t, r.varString, n)
                    }
                }),
                this.executeSubSelectedArray = rm(function(e) {
                    return rU(e.context.store, e.enclosingRef.__ref),
                    t.execSubSelectedArrayImpl(e)
                }, {
                    max: this.config.resultCacheMaxSize,
                    makeCacheKey: function(e) {
                        var t = e.field
                          , r = e.array
                          , n = e.context;
                        if (r$(n.store))
                            return n.store.makeCacheKey(t, r, n.varString)
                    }
                })
            }
            return e.prototype.resetCanon = function() {
                this.canon = new tw
            }
            ,
            e.prototype.diffQueryAgainstStore = function(e) {
                var t, r = e.store, n = e.query, i = e.rootId, o = e.variables, a = e.returnPartialData, s = e.canonizeResults, u = void 0 === s ? this.config.canonizeResults : s, c = this.config.cache.policies;
                o = (0,
                f.pi)((0,
                f.pi)({}, em(ey(n))), o);
                var l = Z(void 0 === i ? "ROOT_QUERY" : i)
                  , h = this.executeSelectionSet({
                    selectionSet: ev(n).selectionSet,
                    objectOrReference: l,
                    enclosingRef: l,
                    context: {
                        store: r,
                        query: n,
                        policies: c,
                        variables: o,
                        varString: tO(o),
                        canonizeResults: u,
                        fragmentMap: H(ed(n))
                    }
                });
                if (h.missing && (t = [new rP(function(e) {
                    try {
                        JSON.stringify(e, function(e, t) {
                            if ("string" == typeof t)
                                throw t;
                            return t
                        })
                    } catch (t) {
                        return t
                    }
                }(h.missing),h.missing,n,o)],
                !(void 0 === a || a)))
                    throw t[0];
                return {
                    result: h.result,
                    complete: !t,
                    missing: t
                }
            }
            ,
            e.prototype.isFresh = function(e, t, r, n) {
                if (r$(n.store) && this.knownResults.get(e) === r) {
                    var i = this.executeSelectionSet.peek(r, t, n, this.canon.isKnown(e));
                    if (i && e === i.result)
                        return !0
                }
                return !1
            }
            ,
            e.prototype.execSelectionSetImpl = function(e) {
                var t, r = this, n = e.selectionSet, i = e.objectOrReference, o = e.enclosingRef, a = e.context;
                if (ee(i) && !a.policies.rootTypenamesById[i.__ref] && !a.store.has(i.__ref))
                    return {
                        result: this.canon.empty,
                        missing: "Dangling reference to missing ".concat(i.__ref, " object")
                    };
                var s = a.variables
                  , u = a.policies
                  , c = a.store.getFieldValue(i, "__typename")
                  , l = []
                  , h = new tp;
                function f(e, r) {
                    var n;
                    return e.missing && (t = h.merge(t, ((n = {})[r] = e.missing,
                    n))),
                    e.result
                }
                this.config.addTypename && "string" == typeof c && !u.rootIdsByTypename[c] && l.push({
                    __typename: c
                });
                var p = new Set(n.selections);
                p.forEach(function(e) {
                    var n, d;
                    if (ts(e, s)) {
                        if (ec(e)) {
                            var y = u.readField({
                                fieldName: e.name.value,
                                field: e,
                                variables: a.variables,
                                from: i
                            }, a)
                              , v = es(e);
                            void 0 === y ? tR.added(e) || (t = h.merge(t, ((n = {})[v] = "Can't find field '".concat(e.name.value, "' on ").concat(ee(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)),
                            n))) : tE(y) ? y = f(r.executeSubSelectedArray({
                                field: e,
                                array: y,
                                enclosingRef: o,
                                context: a
                            }), v) : e.selectionSet ? null != y && (y = f(r.executeSelectionSet({
                                selectionSet: e.selectionSet,
                                objectOrReference: y,
                                enclosingRef: ee(y) ? y : o,
                                context: a
                            }), v)) : a.canonizeResults && (y = r.canon.pass(y)),
                            void 0 !== y && l.push(((d = {})[v] = y,
                            d))
                        } else {
                            var m = X(e, a.fragmentMap);
                            m && u.fragmentMatches(m, c) && m.selectionSet.selections.forEach(p.add, p)
                        }
                    }
                });
                var d = {
                    result: th(l),
                    missing: t
                }
                  , y = a.canonizeResults ? this.canon.admit(d) : rM(d);
                return y.result && this.knownResults.set(y.result, n),
                y
            }
            ,
            e.prototype.execSubSelectedArrayImpl = function(e) {
                var t, r = this, n = e.field, i = e.array, o = e.enclosingRef, a = e.context, s = new tp;
                function u(e, r) {
                    var n;
                    return e.missing && (t = s.merge(t, ((n = {})[r] = e.missing,
                    n))),
                    e.result
                }
                return n.selectionSet && (i = i.filter(a.store.canRead)),
                i = i.map(function(e, t) {
                    return null === e ? null : tE(e) ? u(r.executeSubSelectedArray({
                        field: n,
                        array: e,
                        enclosingRef: o,
                        context: a
                    }), t) : n.selectionSet ? u(r.executeSelectionSet({
                        selectionSet: n.selectionSet,
                        objectOrReference: e,
                        enclosingRef: ee(e) ? e : o,
                        context: a
                    }), t) : (__DEV__ && function(e, t, r) {
                        if (!t.selectionSet) {
                            var n = new Set([r]);
                            n.forEach(function(r) {
                                J(r) && (__DEV__ ? m(!ee(r), "Missing selection set for object of type ".concat(ee(r) ? e.get(r.__ref, "__typename") : r && r.__typename, " returned for query field ").concat(t.name.value)) : m(!ee(r), 5),
                                Object.values(r).forEach(n.add, n))
                            })
                        }
                    }(a.store, n, e),
                    e)
                }),
                {
                    result: a.canonizeResults ? this.canon.admit(i) : i,
                    missing: t
                }
            }
            ,
            e
        }()
          , rJ = Object.create(null);
        function rY(e) {
            var t = JSON.stringify(e);
            return rJ[t] || (rJ[t] = Object.create(null))
        }
        function rH(e) {
            var t = rY(e);
            return t.keyFieldsFn || (t.keyFieldsFn = function(t, r) {
                var n = function(e, t) {
                    return r.readField(t, e)
                }
                  , i = r.keyObject = rZ(e, function(e) {
                    var i = r1(r.storeObject, e, n);
                    return void 0 === i && t !== r.storeObject && td.call(t, e[0]) && (i = r1(t, e, r0)),
                    __DEV__ ? m(void 0 !== i, "Missing field '".concat(e.join("."), "' while extracting keyFields from ").concat(JSON.stringify(t))) : m(void 0 !== i, 2),
                    i
                });
                return "".concat(r.typename, ":").concat(JSON.stringify(i))
            }
            )
        }
        function rX(e) {
            var t = rY(e);
            return t.keyArgsFn || (t.keyArgsFn = function(t, r) {
                var n = r.field
                  , i = r.variables
                  , o = r.fieldName
                  , a = JSON.stringify(rZ(e, function(e) {
                    var r = e[0]
                      , o = r.charAt(0);
                    if ("@" === o) {
                        if (n && tV(n.directives)) {
                            var a = r.slice(1)
                              , s = n.directives.find(function(e) {
                                return e.name.value === a
                            })
                              , u = s && ea(s, i);
                            return u && r1(u, e.slice(1))
                        }
                        return
                    }
                    if ("$" === o) {
                        var c = r.slice(1);
                        if (i && td.call(i, c)) {
                            var l = e.slice(0);
                            return l[0] = c,
                            r1(i, l)
                        }
                        return
                    }
                    if (t)
                        return r1(t, e)
                }));
                return (t || "{}" !== a) && (o += ":" + a),
                o
            }
            )
        }
        function rZ(e, t) {
            var r = new tp;
            return (function e(t) {
                var r = rY(t);
                if (!r.paths) {
                    var n = r.paths = []
                      , i = [];
                    t.forEach(function(r, o) {
                        tE(r) ? (e(r).forEach(function(e) {
                            return n.push(i.concat(e))
                        }),
                        i.length = 0) : (i.push(r),
                        tE(t[o + 1]) || (n.push(i.slice(0)),
                        i.length = 0))
                    })
                }
                return r.paths
            }
            )(e).reduce(function(e, n) {
                var i, o = t(n);
                if (void 0 !== o) {
                    for (var a = n.length - 1; a >= 0; --a)
                        (i = {})[n[a]] = o,
                        o = i;
                    e = r.merge(e, o)
                }
                return e
            }, Object.create(null))
        }
        function r0(e, t) {
            return e[t]
        }
        function r1(e, t, r) {
            return r = r || r0,
            function e(t) {
                return J(t) ? tE(t) ? t.map(e) : rZ(Object.keys(t).sort(), function(e) {
                    return r1(t, e)
                }) : t
            }(t.reduce(function e(t, n) {
                return tE(t) ? t.map(function(t) {
                    return e(t, n)
                }) : t && r(t, n)
            }, e))
        }
        function r2(e) {
            return void 0 !== e.args ? e.args : e.field ? ea(e.field, e.variables) : null
        }
        en.setStringify(tO);
        var r3 = function() {}
          , r4 = function(e, t) {
            return t.fieldName
        }
          , r5 = function(e, t, r) {
            return (0,
            r.mergeObjects)(e, t)
        }
          , r8 = function(e, t) {
            return t
        }
          , r9 = function() {
            function e(e) {
                this.config = e,
                this.typePolicies = Object.create(null),
                this.toBeAdded = Object.create(null),
                this.supertypeMap = new Map,
                this.fuzzySubtypes = new Map,
                this.rootIdsByTypename = Object.create(null),
                this.rootTypenamesById = Object.create(null),
                this.usingPossibleTypes = !1,
                this.config = (0,
                f.pi)({
                    dataIdFromObject: ty
                }, e),
                this.cache = this.config.cache,
                this.setRootTypename("Query"),
                this.setRootTypename("Mutation"),
                this.setRootTypename("Subscription"),
                e.possibleTypes && this.addPossibleTypes(e.possibleTypes),
                e.typePolicies && this.addTypePolicies(e.typePolicies)
            }
            return e.prototype.identify = function(e, t) {
                var r, n, i = this, o = t && (t.typename || (null === (r = t.storeObject) || void 0 === r ? void 0 : r.__typename)) || e.__typename;
                if (o === this.rootTypenamesById.ROOT_QUERY)
                    return ["ROOT_QUERY"];
                for (var a = t && t.storeObject || e, s = (0,
                f.pi)((0,
                f.pi)({}, t), {
                    typename: o,
                    storeObject: a,
                    readField: t && t.readField || function() {
                        var e = r6(arguments, a);
                        return i.readField(e, {
                            store: i.cache.data,
                            variables: e.variables
                        })
                    }
                }), u = o && this.getTypePolicy(o), c = u && u.keyFn || this.config.dataIdFromObject; c; ) {
                    var l = c(e, s);
                    if (tE(l))
                        c = rH(l);
                    else {
                        n = l;
                        break
                    }
                }
                return n = n ? String(n) : void 0,
                s.keyObject ? [n, s.keyObject] : [n]
            }
            ,
            e.prototype.addTypePolicies = function(e) {
                var t = this;
                Object.keys(e).forEach(function(r) {
                    var n = e[r]
                      , i = n.queryType
                      , o = n.mutationType
                      , a = n.subscriptionType
                      , s = (0,
                    f._T)(n, ["queryType", "mutationType", "subscriptionType"]);
                    i && t.setRootTypename("Query", r),
                    o && t.setRootTypename("Mutation", r),
                    a && t.setRootTypename("Subscription", r),
                    td.call(t.toBeAdded, r) ? t.toBeAdded[r].push(s) : t.toBeAdded[r] = [s]
                })
            }
            ,
            e.prototype.updateTypePolicy = function(e, t) {
                var r = this
                  , n = this.getTypePolicy(e)
                  , i = t.keyFields
                  , o = t.fields;
                function a(e, t) {
                    e.merge = "function" == typeof t ? t : !0 === t ? r5 : !1 === t ? r8 : e.merge
                }
                a(n, t.merge),
                n.keyFn = !1 === i ? r3 : tE(i) ? rH(i) : "function" == typeof i ? i : n.keyFn,
                o && Object.keys(o).forEach(function(t) {
                    var n = r.getFieldPolicy(e, t, !0)
                      , i = o[t];
                    if ("function" == typeof i)
                        n.read = i;
                    else {
                        var s = i.keyArgs
                          , u = i.read
                          , c = i.merge;
                        n.keyFn = !1 === s ? r4 : tE(s) ? rX(s) : "function" == typeof s ? s : n.keyFn,
                        "function" == typeof u && (n.read = u),
                        a(n, c)
                    }
                    n.read && n.merge && (n.keyFn = n.keyFn || r4)
                })
            }
            ,
            e.prototype.setRootTypename = function(e, t) {
                void 0 === t && (t = e);
                var r = "ROOT_" + e.toUpperCase()
                  , n = this.rootTypenamesById[r];
                t !== n && (__DEV__ ? m(!n || n === e, "Cannot change root ".concat(e, " __typename more than once")) : m(!n || n === e, 3),
                n && delete this.rootIdsByTypename[n],
                this.rootIdsByTypename[t] = r,
                this.rootTypenamesById[r] = t)
            }
            ,
            e.prototype.addPossibleTypes = function(e) {
                var t = this;
                this.usingPossibleTypes = !0,
                Object.keys(e).forEach(function(r) {
                    t.getSupertypeSet(r, !0),
                    e[r].forEach(function(e) {
                        t.getSupertypeSet(e, !0).add(r);
                        var n = e.match(tg);
                        n && n[0] === e || t.fuzzySubtypes.set(e, RegExp(e))
                    })
                })
            }
            ,
            e.prototype.getTypePolicy = function(e) {
                var t = this;
                if (!td.call(this.typePolicies, e)) {
                    var r = this.typePolicies[e] = Object.create(null);
                    r.fields = Object.create(null);
                    var n = this.supertypeMap.get(e);
                    n && n.size && n.forEach(function(e) {
                        var n = t.getTypePolicy(e)
                          , i = n.fields;
                        Object.assign(r, (0,
                        f._T)(n, ["fields"])),
                        Object.assign(r.fields, i)
                    })
                }
                var i = this.toBeAdded[e];
                return i && i.length && i.splice(0).forEach(function(r) {
                    t.updateTypePolicy(e, r)
                }),
                this.typePolicies[e]
            }
            ,
            e.prototype.getFieldPolicy = function(e, t, r) {
                if (e) {
                    var n = this.getTypePolicy(e).fields;
                    return n[t] || r && (n[t] = Object.create(null))
                }
            }
            ,
            e.prototype.getSupertypeSet = function(e, t) {
                var r = this.supertypeMap.get(e);
                return !r && t && this.supertypeMap.set(e, r = new Set),
                r
            }
            ,
            e.prototype.fragmentMatches = function(e, t, r, n) {
                var i = this;
                if (!e.typeCondition)
                    return !0;
                if (!t)
                    return !1;
                var o = e.typeCondition.name.value;
                if (t === o)
                    return !0;
                if (this.usingPossibleTypes && this.supertypeMap.has(o))
                    for (var a = this.getSupertypeSet(t, !0), s = [a], u = function(e) {
                        var t = i.getSupertypeSet(e, !1);
                        t && t.size && 0 > s.indexOf(t) && s.push(t)
                    }, c = !!(r && this.fuzzySubtypes.size), l = !1, h = 0; h < s.length; ++h) {
                        var f = s[h];
                        if (f.has(o))
                            return a.has(o) || (l && __DEV__ && m.warn("Inferring subtype ".concat(t, " of supertype ").concat(o)),
                            a.add(o)),
                            !0;
                        f.forEach(u),
                        c && h === s.length - 1 && function e(t, r, n) {
                            return !!J(r) && (tE(r) ? r.every(function(r) {
                                return e(t, r, n)
                            }) : t.selections.every(function(t) {
                                if (ec(t) && ts(t, n)) {
                                    var i = es(t);
                                    return td.call(r, i) && (!t.selectionSet || e(t.selectionSet, r[i], n))
                                }
                                return !0
                            }))
                        }(e.selectionSet, r, n) && (c = !1,
                        l = !0,
                        this.fuzzySubtypes.forEach(function(e, r) {
                            var n = t.match(e);
                            n && n[0] === t && u(r)
                        }))
                    }
                return !1
            }
            ,
            e.prototype.hasKeyArgs = function(e, t) {
                var r = this.getFieldPolicy(e, t, !1);
                return !!(r && r.keyFn)
            }
            ,
            e.prototype.getStoreFieldName = function(e) {
                var t, r, n, i, o, a = e.typename, s = e.fieldName, u = this.getFieldPolicy(a, s, !1), c = u && u.keyFn;
                if (c && a)
                    for (var l = {
                        typename: a,
                        fieldName: s,
                        field: e.field || null,
                        variables: e.variables
                    }, h = r2(e); c; ) {
                        var f = c(h, l);
                        if (tE(f))
                            c = rX(f);
                        else {
                            o = f || s;
                            break
                        }
                    }
                return void 0 === o && (o = e.field ? (t = e.field,
                r = e.variables,
                n = null,
                t.directives && (n = {},
                t.directives.forEach(function(e) {
                    n[e.name.value] = {},
                    e.arguments && e.arguments.forEach(function(t) {
                        var i = t.name
                          , o = t.value;
                        return et(n[e.name.value], i, o, r)
                    })
                })),
                i = null,
                t.arguments && t.arguments.length && (i = {},
                t.arguments.forEach(function(e) {
                    return et(i, e.name, e.value, r)
                })),
                en(t.name.value, i, n)) : en(s, r2(e))),
                !1 === o ? s : s === tb(o) ? o : s + ":" + o
            }
            ,
            e.prototype.readField = function(e, t) {
                var r = e.from;
                if (r && (e.field || e.fieldName)) {
                    if (void 0 === e.typename) {
                        var n = t.store.getFieldValue(r, "__typename");
                        n && (e.typename = n)
                    }
                    var i = this.getStoreFieldName(e)
                      , o = tb(i)
                      , a = t.store.getFieldValue(r, i)
                      , s = this.getFieldPolicy(e.typename, o, !1)
                      , u = s && s.read;
                    if (u) {
                        var c = r7(this, r, e, t, t.store.getStorage(ee(r) ? r.__ref : r, i));
                        return rg.withValue(this.cache, u, [a, c])
                    }
                    return a
                }
            }
            ,
            e.prototype.getReadFunction = function(e, t) {
                var r = this.getFieldPolicy(e, t, !1);
                return r && r.read
            }
            ,
            e.prototype.getMergeFunction = function(e, t, r) {
                var n = this.getFieldPolicy(e, t, !1)
                  , i = n && n.merge;
                return !i && r && (i = (n = this.getTypePolicy(r)) && n.merge),
                i
            }
            ,
            e.prototype.runMergeFunction = function(e, t, r, n, i) {
                var o = r.field
                  , a = r.typename
                  , s = r.merge;
                return s === r5 ? ne(n.store)(e, t) : s === r8 ? t : (n.overwrite && (e = void 0),
                s(e, t, r7(this, void 0, {
                    typename: a,
                    fieldName: o.name.value,
                    field: o,
                    variables: n.variables
                }, n, i || Object.create(null))))
            }
            ,
            e
        }();
        function r7(e, t, r, n, i) {
            var o = e.getStoreFieldName(r)
              , a = tb(o)
              , s = r.variables || n.variables
              , u = n.store
              , c = u.toReference
              , l = u.canRead;
            return {
                args: r2(r),
                field: r.field || null,
                fieldName: a,
                storeFieldName: o,
                variables: s,
                isReference: ee,
                toReference: c,
                storage: i,
                cache: e.cache,
                canRead: l,
                readField: function() {
                    return e.readField(r6(arguments, t, s), n)
                },
                mergeObjects: ne(n.store)
            }
        }
        function r6(e, t, r) {
            var n, i, o, a = e[0], s = e[1], u = e.length;
            return "string" == typeof a ? o = {
                fieldName: a,
                from: u > 1 ? s : t
            } : (o = (0,
            f.pi)({}, a),
            td.call(o, "from") || (o.from = t)),
            __DEV__ && void 0 === o.from && __DEV__ && m.warn("Undefined 'from' passed to readField with arguments ".concat((n = Array.from(e),
            i = tP("stringifyForDisplay"),
            JSON.stringify(n, function(e, t) {
                return void 0 === t ? i : t
            }).split(JSON.stringify(i)).join("<undefined>")))),
            void 0 === o.variables && (o.variables = r),
            o
        }
        function ne(e) {
            return function(t, r) {
                if (tE(t) || tE(r))
                    throw __DEV__ ? new v("Cannot automatically merge arrays") : new v(4);
                if (J(t) && J(r)) {
                    var n = e.getFieldValue(t, "__typename")
                      , i = e.getFieldValue(r, "__typename");
                    if (n && i && n !== i)
                        return r;
                    if (ee(t) && t_(r))
                        return e.merge(t.__ref, r),
                        t;
                    if (t_(t) && ee(r))
                        return e.merge(t, r.__ref),
                        r;
                    if (t_(t) && t_(r))
                        return (0,
                        f.pi)((0,
                        f.pi)({}, t), r)
                }
                return r
            }
        }
        function nt(e, t, r) {
            var n = "".concat(t).concat(r)
              , i = e.flavors.get(n);
            return i || e.flavors.set(n, i = e.clientOnly === t && e.deferred === r ? e : (0,
            f.pi)((0,
            f.pi)({}, e), {
                clientOnly: t,
                deferred: r
            })),
            i
        }
        var nr = function() {
            function e(e, t) {
                this.cache = e,
                this.reader = t
            }
            return e.prototype.writeToStore = function(e, t) {
                var r = this
                  , n = t.query
                  , i = t.result
                  , o = t.dataId
                  , a = t.variables
                  , s = t.overwrite
                  , u = ef(n)
                  , c = new tp;
                a = (0,
                f.pi)((0,
                f.pi)({}, em(u)), a);
                var l = {
                    store: e,
                    written: Object.create(null),
                    merge: function(e, t) {
                        return c.merge(e, t)
                    },
                    variables: a,
                    varString: tO(a),
                    fragmentMap: H(ed(n)),
                    overwrite: !!s,
                    incomingById: new Map,
                    clientOnly: !1,
                    deferred: !1,
                    flavors: new Map
                }
                  , h = this.processSelectionSet({
                    result: i || Object.create(null),
                    dataId: o,
                    selectionSet: u.selectionSet,
                    mergeTree: {
                        map: new Map
                    },
                    context: l
                });
                if (!ee(h))
                    throw __DEV__ ? new v("Could not identify object ".concat(JSON.stringify(i))) : new v(6);
                return l.incomingById.forEach(function(t, n) {
                    var i = t.storeObject
                      , o = t.mergeTree
                      , a = t.fieldNodeSet
                      , s = Z(n);
                    if (o && o.map.size) {
                        var u = r.applyMerges(o, s, i, l);
                        if (ee(u))
                            return;
                        i = u
                    }
                    if (__DEV__ && !l.overwrite) {
                        var c = Object.create(null);
                        a.forEach(function(e) {
                            e.selectionSet && (c[e.name.value] = !0)
                        });
                        var h = function(e) {
                            var t = o && o.map.get(e);
                            return Boolean(t && t.info && t.info.merge)
                        };
                        Object.keys(i).forEach(function(e) {
                            !0 !== c[tb(e)] || h(e) || function(e, t, r, n) {
                                var i = function(e) {
                                    var t = n.getFieldValue(e, r);
                                    return "object" == typeof t && t
                                }
                                  , o = i(e);
                                if (o) {
                                    var a = i(t);
                                    if (!(!a || ee(o) || e3(o, a) || Object.keys(o).every(function(e) {
                                        return void 0 !== n.getFieldValue(a, e)
                                    }))) {
                                        var s = n.getFieldValue(e, "__typename") || n.getFieldValue(t, "__typename")
                                          , u = tb(r)
                                          , c = "".concat(s, ".").concat(u);
                                        if (!ns.has(c)) {
                                            ns.add(c);
                                            var l = [];
                                            tE(o) || tE(a) || [o, a].forEach(function(e) {
                                                var t = n.getFieldValue(e, "__typename");
                                                "string" != typeof t || l.includes(t) || l.push(t)
                                            }),
                                            __DEV__ && m.warn("Cache data may be lost when replacing the ".concat(u, " field of a ").concat(s, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(l.length ? "either ensure all objects of type " + l.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(c, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(o).slice(0, 1e3), "\n  incoming: ").concat(JSON.stringify(a).slice(0, 1e3), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"))
                                        }
                                    }
                                }
                            }(s, i, e, l.store)
                        })
                    }
                    e.merge(n, i)
                }),
                e.retain(h.__ref),
                h
            }
            ,
            e.prototype.processSelectionSet = function(e) {
                var t = this
                  , r = e.dataId
                  , n = e.result
                  , i = e.selectionSet
                  , o = e.context
                  , a = e.mergeTree
                  , s = this.cache.policies
                  , u = Object.create(null)
                  , c = r && s.rootTypenamesById[r] || eu(n, i, o.fragmentMap) || r && o.store.get(r, "__typename");
                "string" == typeof c && (u.__typename = c);
                var l = function() {
                    var e = r6(arguments, u, o.variables);
                    if (ee(e.from)) {
                        var t = o.incomingById.get(e.from.__ref);
                        if (t) {
                            var r = s.readField((0,
                            f.pi)((0,
                            f.pi)({}, e), {
                                from: t.storeObject
                            }), o);
                            if (void 0 !== r)
                                return r
                        }
                    }
                    return s.readField(e, o)
                }
                  , h = new Set;
                this.flattenFields(i, n, o, c).forEach(function(e, r) {
                    var i, o = n[es(r)];
                    if (h.add(r),
                    void 0 !== o) {
                        var f = s.getStoreFieldName({
                            typename: c,
                            fieldName: r.name.value,
                            field: r,
                            variables: e.variables
                        })
                          , p = ni(a, f)
                          , d = t.processFieldValue(o, r, r.selectionSet ? nt(e, !1, !1) : e, p)
                          , y = void 0;
                        r.selectionSet && (ee(d) || t_(d)) && (y = l("__typename", d));
                        var v = s.getMergeFunction(c, r.name.value, y);
                        v ? p.info = {
                            field: r,
                            typename: c,
                            merge: v
                        } : na(a, f),
                        u = e.merge(u, ((i = {})[f] = d,
                        i))
                    } else
                        __DEV__ && !e.clientOnly && !e.deferred && !tR.added(r) && !s.getReadFunction(c, r.name.value) && __DEV__ && m.error("Missing field '".concat(es(r), "' while writing result ").concat(JSON.stringify(n, null, 2)).substring(0, 1e3))
                });
                try {
                    var p = s.identify(n, {
                        typename: c,
                        selectionSet: i,
                        fragmentMap: o.fragmentMap,
                        storeObject: u,
                        readField: l
                    })
                      , d = p[0]
                      , y = p[1];
                    r = r || d,
                    y && (u = o.merge(u, y))
                } catch (v) {
                    if (!r)
                        throw v
                }
                if ("string" == typeof r) {
                    var g = Z(r)
                      , b = o.written[r] || (o.written[r] = []);
                    if (b.indexOf(i) >= 0 || (b.push(i),
                    this.reader && this.reader.isFresh(n, g, i, o)))
                        return g;
                    var _ = o.incomingById.get(r);
                    return _ ? (_.storeObject = o.merge(_.storeObject, u),
                    _.mergeTree = function e(t, r) {
                        if (t === r || !r || no(r))
                            return t;
                        if (!t || no(t))
                            return r;
                        var n = t.info && r.info ? (0,
                        f.pi)((0,
                        f.pi)({}, t.info), r.info) : t.info || r.info
                          , i = t.map.size && r.map.size
                          , o = {
                            info: n,
                            map: i ? new Map : t.map.size ? t.map : r.map
                        };
                        if (i) {
                            var a = new Set(r.map.keys());
                            t.map.forEach(function(t, n) {
                                o.map.set(n, e(t, r.map.get(n))),
                                a.delete(n)
                            }),
                            a.forEach(function(n) {
                                o.map.set(n, e(r.map.get(n), t.map.get(n)))
                            })
                        }
                        return o
                    }(_.mergeTree, a),
                    h.forEach(function(e) {
                        return _.fieldNodeSet.add(e)
                    })) : o.incomingById.set(r, {
                        storeObject: u,
                        mergeTree: no(a) ? void 0 : a,
                        fieldNodeSet: h
                    }),
                    g
                }
                return u
            }
            ,
            e.prototype.processFieldValue = function(e, t, r, n) {
                var i = this;
                return t.selectionSet && null !== e ? tE(e) ? e.map(function(e, o) {
                    var a = i.processFieldValue(e, t, r, ni(n, o));
                    return na(n, o),
                    a
                }) : this.processSelectionSet({
                    result: e,
                    selectionSet: t.selectionSet,
                    context: r,
                    mergeTree: n
                }) : __DEV__ ? tW(e) : e
            }
            ,
            e.prototype.flattenFields = function(e, t, r, n) {
                void 0 === n && (n = eu(t, e, r.fragmentMap));
                var i = new Map
                  , o = this.cache.policies
                  , a = new tr(!1);
                return function e(s, u) {
                    var c = a.lookup(s, u.clientOnly, u.deferred);
                    c.visited || (c.visited = !0,
                    s.selections.forEach(function(a) {
                        if (ts(a, r.variables)) {
                            var s = u.clientOnly
                              , c = u.deferred;
                            if (!(s && c) && tV(a.directives) && a.directives.forEach(function(e) {
                                var t = e.name.value;
                                if ("client" === t && (s = !0),
                                "defer" === t) {
                                    var n = ea(e, r.variables);
                                    n && !1 === n.if || (c = !0)
                                }
                            }),
                            ec(a)) {
                                var l = i.get(a);
                                l && (s = s && l.clientOnly,
                                c = c && l.deferred),
                                i.set(a, nt(r, s, c))
                            } else {
                                var h = X(a, r.fragmentMap);
                                h && o.fragmentMatches(h, n, t, r.variables) && e(h.selectionSet, nt(r, s, c))
                            }
                        }
                    }))
                }(e, r),
                i
            }
            ,
            e.prototype.applyMerges = function(e, t, r, n, i) {
                var o = this;
                if (e.map.size && !ee(r)) {
                    var a, s, u = !tE(r) && (ee(t) || t_(t)) ? t : void 0, c = r;
                    u && !i && (i = [ee(u) ? u.__ref : u]);
                    var l = function(e, t) {
                        return tE(e) ? "number" == typeof t ? e[t] : void 0 : n.store.getFieldValue(e, String(t))
                    };
                    e.map.forEach(function(e, t) {
                        var r = l(u, t)
                          , a = l(c, t);
                        if (void 0 !== a) {
                            i && i.push(t);
                            var h = o.applyMerges(e, r, a, n, i);
                            h !== a && (s = s || new Map).set(t, h),
                            i && m(i.pop() === t)
                        }
                    }),
                    s && (r = tE(c) ? c.slice(0) : (0,
                    f.pi)({}, c),
                    s.forEach(function(e, t) {
                        r[t] = e
                    }))
                }
                return e.info ? this.cache.policies.runMergeFunction(t, r, e.info, n, i && (a = n.store).getStorage.apply(a, i)) : r
            }
            ,
            e
        }()
          , nn = [];
        function ni(e, t) {
            var r = e.map;
            return r.has(t) || r.set(t, nn.pop() || {
                map: new Map
            }),
            r.get(t)
        }
        function no(e) {
            return !e || !(e.info || e.map.size)
        }
        function na(e, t) {
            var r = e.map
              , n = r.get(t);
            n && no(n) && (nn.push(n),
            r.delete(t))
        }
        var ns = new Set
          , nu = function(e) {
            function t(t) {
                void 0 === t && (t = {});
                var r = e.call(this) || this;
                return r.watches = new Set,
                r.typenameDocumentCache = new Map,
                r.makeVar = rw,
                r.txCount = 0,
                r.config = ta(tv, t),
                r.addTypename = !!r.config.addTypename,
                r.policies = new r9({
                    cache: r,
                    dataIdFromObject: r.config.dataIdFromObject,
                    possibleTypes: r.config.possibleTypes,
                    typePolicies: r.config.typePolicies
                }),
                r.init(),
                r
            }
            return (0,
            f.ZT)(t, e),
            t.prototype.init = function() {
                var e = this.data = new rV.Root({
                    policies: this.policies,
                    resultCaching: this.config.resultCaching
                });
                this.optimisticData = e.stump,
                this.resetResultCache()
            }
            ,
            t.prototype.resetResultCache = function(e) {
                var t = this
                  , r = this.storeReader;
                this.storeWriter = new nr(this,this.storeReader = new rK({
                    cache: this,
                    addTypename: this.addTypename,
                    resultCacheMaxSize: this.config.resultCacheMaxSize,
                    canonizeResults: tm(this.config),
                    canon: e ? void 0 : r && r.canon
                })),
                this.maybeBroadcastWatch = rm(function(e, r) {
                    return t.broadcastWatch(e, r)
                }, {
                    max: this.config.resultCacheMaxSize,
                    makeCacheKey: function(e) {
                        var r = e.optimistic ? t.optimisticData : t.data;
                        if (r$(r)) {
                            var n = e.optimistic
                              , i = e.rootId
                              , o = e.variables;
                            return r.makeCacheKey(e.query, e.callback, tO({
                                optimistic: n,
                                rootId: i,
                                variables: o
                            }))
                        }
                    }
                }),
                new Set([this.data.group, this.optimisticData.group]).forEach(function(e) {
                    return e.resetCaching()
                })
            }
            ,
            t.prototype.restore = function(e) {
                return this.init(),
                e && this.data.replace(e),
                this
            }
            ,
            t.prototype.extract = function(e) {
                return void 0 === e && (e = !1),
                (e ? this.optimisticData : this.data).extract()
            }
            ,
            t.prototype.read = function(e) {
                var t = e.returnPartialData;
                try {
                    return this.storeReader.diffQueryAgainstStore((0,
                    f.pi)((0,
                    f.pi)({}, e), {
                        store: e.optimistic ? this.optimisticData : this.data,
                        config: this.config,
                        returnPartialData: void 0 !== t && t
                    })).result || null
                } catch (r) {
                    if (r instanceof rP)
                        return null;
                    throw r
                }
            }
            ,
            t.prototype.write = function(e) {
                try {
                    return ++this.txCount,
                    this.storeWriter.writeToStore(this.data, e)
                } finally {
                    --this.txCount || !1 === e.broadcast || this.broadcastWatches()
                }
            }
            ,
            t.prototype.modify = function(e) {
                if (td.call(e, "id") && !e.id)
                    return !1;
                var t = e.optimistic ? this.optimisticData : this.data;
                try {
                    return ++this.txCount,
                    t.modify(e.id || "ROOT_QUERY", e.fields)
                } finally {
                    --this.txCount || !1 === e.broadcast || this.broadcastWatches()
                }
            }
            ,
            t.prototype.diff = function(e) {
                return this.storeReader.diffQueryAgainstStore((0,
                f.pi)((0,
                f.pi)({}, e), {
                    store: e.optimistic ? this.optimisticData : this.data,
                    rootId: e.id || "ROOT_QUERY",
                    config: this.config
                }))
            }
            ,
            t.prototype.watch = function(e) {
                var t = this;
                return this.watches.size || function(e) {
                    r_(e).vars.forEach(function(t) {
                        return t.attachCache(e)
                    })
                }(this),
                this.watches.add(e),
                e.immediate && this.maybeBroadcastWatch(e),
                function() {
                    t.watches.delete(e) && !t.watches.size && rE(t),
                    t.maybeBroadcastWatch.forget(e)
                }
            }
            ,
            t.prototype.gc = function(e) {
                tO.reset();
                var t = this.optimisticData.gc();
                return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()),
                t
            }
            ,
            t.prototype.retain = function(e, t) {
                return (t ? this.optimisticData : this.data).retain(e)
            }
            ,
            t.prototype.release = function(e, t) {
                return (t ? this.optimisticData : this.data).release(e)
            }
            ,
            t.prototype.identify = function(e) {
                if (ee(e))
                    return e.__ref;
                try {
                    return this.policies.identify(e)[0]
                } catch (t) {
                    __DEV__ && m.warn(t)
                }
            }
            ,
            t.prototype.evict = function(e) {
                if (!e.id) {
                    if (td.call(e, "id"))
                        return !1;
                    e = (0,
                    f.pi)((0,
                    f.pi)({}, e), {
                        id: "ROOT_QUERY"
                    })
                }
                try {
                    return ++this.txCount,
                    this.optimisticData.evict(e, this.data)
                } finally {
                    --this.txCount || !1 === e.broadcast || this.broadcastWatches()
                }
            }
            ,
            t.prototype.reset = function(e) {
                var t = this;
                return this.init(),
                tO.reset(),
                e && e.discardWatches ? (this.watches.forEach(function(e) {
                    return t.maybeBroadcastWatch.forget(e)
                }),
                this.watches.clear(),
                rE(this)) : this.broadcastWatches(),
                Promise.resolve()
            }
            ,
            t.prototype.removeOptimistic = function(e) {
                var t = this.optimisticData.removeLayer(e);
                t !== this.optimisticData && (this.optimisticData = t,
                this.broadcastWatches())
            }
            ,
            t.prototype.batch = function(e) {
                var t, r = this, n = e.update, i = e.optimistic, o = void 0 === i || i, a = e.removeOptimistic, s = e.onWatchUpdated, u = function(e) {
                    var i = r.data
                      , o = r.optimisticData;
                    ++r.txCount,
                    e && (r.data = r.optimisticData = e);
                    try {
                        return t = n(r)
                    } finally {
                        --r.txCount,
                        r.data = i,
                        r.optimisticData = o
                    }
                }, c = new Set;
                return s && !this.txCount && this.broadcastWatches((0,
                f.pi)((0,
                f.pi)({}, e), {
                    onWatchUpdated: function(e) {
                        return c.add(e),
                        !1
                    }
                })),
                "string" == typeof o ? this.optimisticData = this.optimisticData.addLayer(o, u) : !1 === o ? u(this.data) : u(),
                "string" == typeof a && (this.optimisticData = this.optimisticData.removeLayer(a)),
                s && c.size ? (this.broadcastWatches((0,
                f.pi)((0,
                f.pi)({}, e), {
                    onWatchUpdated: function(e, t) {
                        var r = s.call(this, e, t);
                        return !1 !== r && c.delete(e),
                        r
                    }
                })),
                c.size && c.forEach(function(e) {
                    return r.maybeBroadcastWatch.dirty(e)
                })) : this.broadcastWatches(e),
                t
            }
            ,
            t.prototype.performTransaction = function(e, t) {
                return this.batch({
                    update: e,
                    optimistic: t || null !== t
                })
            }
            ,
            t.prototype.transformDocument = function(e) {
                if (this.addTypename) {
                    var t = this.typenameDocumentCache.get(e);
                    return t || (t = tR(e),
                    this.typenameDocumentCache.set(e, t),
                    this.typenameDocumentCache.set(t, t)),
                    t
                }
                return e
            }
            ,
            t.prototype.broadcastWatches = function(e) {
                var t = this;
                this.txCount || this.watches.forEach(function(r) {
                    return t.maybeBroadcastWatch(r, e)
                })
            }
            ,
            t.prototype.broadcastWatch = function(e, t) {
                var r = e.lastDiff
                  , n = this.diff(e);
                (!t || (e.optimistic && "string" == typeof t.optimistic && (n.fromOptimisticTransaction = !0),
                !t.onWatchUpdated || !1 !== t.onWatchUpdated.call(this, e, n, r))) && (r && e3(r.result, n.result) || e.callback(e.lastDiff = n, r))
            }
            ,
            t
        }(rF)
          , nc = r(1779)
          , nl = r(4155);
        function nh() {
            return n || (n = new rC({
                link: new eH({
                    uri: (0,
                    nc.bq)(nl.env.WORDPRESS_GRAPHQL_ENDPOINT)
                }),
                cache: new nu({
                    typePolicies: {
                        RootQuery: {
                            queryType: !0
                        },
                        RootMutation: {
                            mutationType: !0
                        }
                    }
                })
            })),
            n
        }
    },
    2247: function(e, t, r) {
        "use strict";
        r.d(t, {
            Gy: function() {
                return b
            },
            yA: function() {
                return v
            }
        });
        var n = r(5509)
          , i = r(7297)
          , o = r(7283);
        function a() {
            let e = (0,
            i.Z)(["\n  fragment PageFields on Page {\n    children {\n      edges {\n        node {\n          id\n          slug\n          uri\n          ... on Page {\n            id\n            title\n          }\n        }\n      }\n    }\n    id\n    menuOrder\n    parent {\n      node {\n        id\n        slug\n        uri\n        ... on Page {\n          title\n        }\n      }\n    }\n    slug\n    title\n    uri\n  }\n"]);
            return a = function() {
                return e
            }
            ,
            e
        }
        function s() {
            let e = (0,
            i.Z)(["\n  ", "\n  query AllPagesIndex {\n    pages(first: 10000, where: { hasPassword: false }) {\n      edges {\n        node {\n          ...PageFields\n        }\n      }\n    }\n  }\n"]);
            return s = function() {
                return e
            }
            ,
            e
        }
        function u() {
            let e = (0,
            i.Z)(["\n  ", "\n  query AllPagesIndex {\n    pages(first: 10000, where: { hasPassword: false }) {\n      edges {\n        node {\n          ...PageFields\n        }\n      }\n    }\n  }\n"]);
            return u = function() {
                return e
            }
            ,
            e
        }
        function c() {
            let e = (0,
            i.Z)(["\n  ", "\n  query AllPagesIndex {\n    pages(first: 10000, where: { hasPassword: false }) {\n      edges {\n        node {\n          ...PageFields\n          content\n          featuredImage {\n            node {\n              altText\n              caption\n              id\n              sizes\n              sourceUrl\n              srcSet\n            }\n          }\n        }\n      }\n    }\n  }\n"]);
            return c = function() {
                return e
            }
            ,
            e
        }
        function l() {
            let e = (0,
            i.Z)(["\n  query PageByUri($uri: ID!) {\n    page(id: $uri, idType: URI) {\n      children {\n        edges {\n          node {\n            id\n            slug\n            uri\n            ... on Page {\n              id\n              title\n            }\n          }\n        }\n      }\n      content\n      featuredImage {\n        node {\n          altText\n          caption\n          id\n          sizes\n          sourceUrl\n          srcSet\n        }\n      }\n      id\n      menuOrder\n      parent {\n        node {\n          id\n          slug\n          uri\n          ... on Page {\n            title\n          }\n        }\n      }\n      slug\n      title\n      uri\n    }\n  }\n"]);
            return l = function() {
                return e
            }
            ,
            e
        }
        function h() {
            let e = (0,
            i.Z)(["\n  query PageSEOByUri($uri: ID!) {\n    page(id: $uri, idType: URI) {\n      id\n      seo {\n        canonical\n        metaDesc\n        metaRobotsNofollow\n        metaRobotsNoindex\n        opengraphAuthor\n        opengraphDescription\n        opengraphModifiedTime\n        opengraphPublishedTime\n        opengraphPublisher\n        opengraphTitle\n        opengraphType\n        readingTime\n        title\n        twitterDescription\n        twitterTitle\n        twitterImage {\n          altText\n          sourceUrl\n          mediaDetails {\n            width\n            height\n          }\n        }\n        opengraphImage {\n          altText\n          sourceUrl\n          mediaDetails {\n            height\n            width\n          }\n        }\n      }\n    }\n  }\n"]);
            return h = function() {
                return e
            }
            ,
            e
        }
        let f = (0,
        o.Ps)(a())
          , p = (0,
        o.Ps)(s(), f)
          , d = (0,
        o.Ps)(u(), f)
          , y = (0,
        o.Ps)(c(), f);
        function v(e) {
            return "/".concat(e)
        }
        (0,
        o.Ps)(l()),
        (0,
        o.Ps)(h()),
        r(4155);
        let m = {
            all: y,
            archive: d,
            index: p
        };
        async function g() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , {queryIncludes: t="index"} = e
              , r = (0,
            n.W)()
              , i = await r.query({
                query: m[t]
            })
              , o = null == i ? void 0 : i.data.pages.edges.map(e=>{
                let {node: t={}} = e;
                return t
            }
            ).map(_);
            return {
                pages: o
            }
        }
        async function b(e) {
            let {pages: t} = await g(e)
              , r = t.filter(e=>{
                let {parent: t} = e;
                return null === t
            }
            );
            return r.sort((e,t)=>parseFloat(e.menuOrder) - parseFloat(t.menuOrder)),
            r
        }
        function _() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = {
                ...e
            };
            return t.featuredImage && (t.featuredImage = t.featuredImage.node),
            t.parent && (t.parent = t.parent.node),
            t.children && (t.children = t.children.edges.map(e=>{
                let {node: t} = e;
                return t
            }
            )),
            t
        }
    },
    5788: function(e, t, r) {
        "use strict";
        r.d(t, {
            z0: function() {
                return p
            },
            Oq: function() {
                return f
            },
            iB: function() {
                return d
            }
        });
        var n = r(5509)
          , i = r(1779)
          , o = r(7297)
          , a = r(7283);
        function s() {
            let e = (0,
            o.Z)(["\n  query SiteData {\n    generalSettings {\n      description\n      language\n      title\n    }\n  }\n"]);
            return s = function() {
                return e
            }
            ,
            e
        }
        function u() {
            let e = (0,
            o.Z)(["\n  query SeoData {\n    seo {\n      webmaster {\n        yandexVerify\n        msVerify\n        googleVerify\n        baiduVerify\n      }\n      social {\n        youTube {\n          url\n        }\n        wikipedia {\n          url\n        }\n        twitter {\n          username\n          cardType\n        }\n        pinterest {\n          metaTag\n          url\n        }\n        mySpace {\n          url\n        }\n        linkedIn {\n          url\n        }\n        instagram {\n          url\n        }\n        facebook {\n          url\n          defaultImage {\n            altText\n            sourceUrl\n            mediaDetails {\n              height\n              width\n            }\n          }\n        }\n      }\n    }\n  }\n"]);
            return u = function() {
                return e
            }
            ,
            e
        }
        let c = (0,
        a.Ps)(s())
          , l = (0,
        a.Ps)(u());
        var h = r(4155);
        async function f() {
            let e, t;
            let r = (0,
            n.W)();
            try {
                e = await r.query({
                    query: c
                })
            } catch (o) {
                throw console.log("[site][getSiteMetadata] Failed to query site data: ".concat(o.message)),
                o
            }
            let {generalSettings: a} = (null == e ? void 0 : e.data) || {}
              , {title: s, description: u, language: f} = a
              , p = {
                title: s,
                siteTitle: s,
                description: u
            };
            if (f && "" !== f ? p.language = f.split("_")[0] : p.language = "en",
            !0 === h.env.WORDPRESS_PLUGIN_SEO) {
                var d;
                try {
                    t = await r.query({
                        query: l
                    })
                } catch (y) {
                    throw console.log("[site][getSiteMetadata] Failed to query SEO plugin: ".concat(y.message)),
                    console.log("Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js."),
                    y
                }
                let {webmaster: v, social: m} = (null == t ? void 0 : null === (d = t.data) || void 0 === d ? void 0 : d.seo) || {};
                m && (p.social = {},
                Object.keys(m).forEach(e=>{
                    let {url: t} = m[e];
                    t && "__typename" !== e && (p.social[e] = t)
                }
                )),
                v && (p.webmaster = {},
                Object.keys(v).forEach(e=>{
                    v[e] && "__typename" !== e && (p.webmaster[e] = v[e])
                }
                )),
                m.twitter && (p.twitter = {
                    username: m.twitter.username,
                    cardType: m.twitter.cardType
                },
                p.social.twitter = {
                    url: "https://twitter.com/".concat(p.twitter.username)
                })
            }
            return p.title = (0,
            i.aV)(p.title),
            p
        }
        function p() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , {router: n={}, homepage: i=""} = r
              , {asPath: o} = n
              , a = "".concat(i).concat(o)
              , s = new URL(a).pathname
              , u = t.canonical || "".concat(i).concat(s)
              , c = {
                canonical: u,
                og: {
                    url: a
                },
                twitter: {}
            };
            return ["description", "language", "title"].forEach(r=>{
                let n = void 0 !== t[r] ? t[r] : e[r];
                void 0 !== n && (c[r] = n)
            }
            ),
            t.og && ["description", "imageUrl", "imageHeight", "imageSecureUrl", "imageWidth", "title", "type"].forEach(r=>{
                var n, i;
                let o = null === (n = t.og) || void 0 === n ? void 0 : n[r]
                  , a = t[r]
                  , s = null === (i = e.og) || void 0 === i ? void 0 : i[r]
                  , u = e[r]
                  , l = o || a || s || u;
                void 0 !== l && (c.og[r] = l)
            }
            ),
            t.twitter && ["cardType", "description", "imageUrl", "title", "username"].forEach(e=>{
                var r;
                let n = null === (r = t.twitter) || void 0 === r ? void 0 : r[e]
                  , i = c.og[e]
                  , o = n || i;
                void 0 !== o && (c.twitter[e] = o)
            }
            ),
            "article" === c.og.type && t.article && (c.article = {},
            ["author", "modifiedTime", "publishedTime", "publisher"].forEach(e=>{
                let r = t.article[e];
                void 0 !== r && (c.article[e] = r)
            }
            )),
            c
        }
        function d() {
            var e, t, r, n, o, a, s, u, c, l, h, f, p, d, y, v, m, g;
            let b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , {link: E=[], meta: w=[], setTitle: O=!0} = _
              , k = (0,
            i.zm)(b.description)
              , T = {
                htmlAttributes: {
                    lang: b.language
                }
            };
            return O && (T.title = b.title),
            T.link = [...E, {
                rel: "canonical",
                href: b.canonical
            }].filter(function() {
                let {href: e} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return !!e
            }),
            T.meta = [...w, {
                name: "description",
                content: k
            }, {
                property: "og:title",
                content: (null === (e = b.og) || void 0 === e ? void 0 : e.title) || b.title
            }, {
                property: "og:description",
                content: (null === (t = b.og) || void 0 === t ? void 0 : t.description) || k
            }, {
                property: "og:url",
                content: null === (r = b.og) || void 0 === r ? void 0 : r.url
            }, {
                property: "og:image",
                content: null === (n = b.og) || void 0 === n ? void 0 : n.imageUrl
            }, {
                property: "og:image:secure_url",
                content: null === (o = b.og) || void 0 === o ? void 0 : o.imageSecureUrl
            }, {
                property: "og:image:width",
                content: null === (a = b.og) || void 0 === a ? void 0 : a.imageWidth
            }, {
                property: "og:image:height",
                content: null === (s = b.og) || void 0 === s ? void 0 : s.imageHeight
            }, {
                property: "og:type",
                content: (null === (u = b.og) || void 0 === u ? void 0 : u.type) || "website"
            }, {
                property: "og:site_name",
                content: b.siteTitle
            }, {
                property: "twitter:title",
                content: (null === (c = b.twitter) || void 0 === c ? void 0 : c.title) || (null === (l = b.og) || void 0 === l ? void 0 : l.title) || b.title
            }, {
                property: "twitter:description",
                content: (null === (h = b.twitter) || void 0 === h ? void 0 : h.description) || (null === (f = b.og) || void 0 === f ? void 0 : f.description) || k
            }, {
                property: "twitter:image",
                content: (null === (p = b.twitter) || void 0 === p ? void 0 : p.imageUrl) || (null === (d = b.og) || void 0 === d ? void 0 : d.imageUrl)
            }, {
                property: "twitter:site",
                content: (null === (y = b.twitter) || void 0 === y ? void 0 : y.username) && "@".concat(b.twitter.username)
            }, {
                property: "twitter:card",
                content: null === (v = b.twitter) || void 0 === v ? void 0 : v.cardType
            }, {
                property: "article:modified_time",
                content: null === (m = b.article) || void 0 === m ? void 0 : m.modifiedTime
            }, {
                property: "article:published_time",
                content: null === (g = b.article) || void 0 === g ? void 0 : g.publishedTime
            }].filter(function() {
                let {content: e} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return !!e
            }),
            T
        }
    },
    1779: function(e, t, r) {
        "use strict";
        function n(e) {
            if ("string" != typeof e)
                throw Error("Failed to decode HTML entity: invalid type ".concat(typeof e));
            let t = {
                "&amp;": "&",
                "&quot;": '"',
                "&#039;": "'"
            };
            return e.replace(/&amp;|&quot;|&#039;/g, e=>t[e])
        }
        function i(e) {
            return "string" != typeof e ? e : e.replace(/\/$/, "")
        }
        function o(e) {
            if ("string" == typeof e)
                return e.replace(/\s+/g, " ").trim()
        }
        r.d(t, {
            aV: function() {
                return n
            },
            bq: function() {
                return i
            },
            zm: function() {
                return o
            }
        })
    },
    2721: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            default: function() {
                return w
            }
        });
        var n = r(1844)
          , i = r(8845)
          , o = r.n(i)
          , a = r(5298)
          , s = r(3461)
          , u = r(5788)
          , c = r(3457)
          , l = r.n(c)
          , h = r(5509)
          , f = r(2247)
          , p = r(7297)
          , d = r(7283);
        function y() {
            let e = (0,
            p.Z)(["\n  query AllMenus {\n    menus {\n      edges {\n        node {\n          id\n          menuItems {\n            edges {\n              node {\n                cssClasses\n                id\n                parentId\n                label\n                title\n                target\n                path\n              }\n            }\n          }\n          name\n          slug\n          locations\n        }\n      }\n    }\n  }\n"]);
            return y = function() {
                return e
            }
            ,
            e
        }
        let v = (0,
        d.Ps)(y());
        async function m() {
            let e = (0,
            h.W)()
              , t = await e.query({
                query: v
            })
              , r = null == t ? void 0 : t.data.menus.edges.map(g)
              , n = function(e) {
                let {locations: t, pages: r} = e;
                return {
                    menuItems: r.map(e=>{
                        let {id: t, uri: r, title: n} = e;
                        return {
                            label: n,
                            path: r,
                            id: t
                        }
                    }
                    ),
                    locations: t
                }
            }({
                locations: ["DEFAULT_NAVIGATION"],
                pages: await (0,
                f.Gy)({
                    queryIncludes: "index"
                })
            });
            return r.push(n),
            {
                menus: r
            }
        }
        function g() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , {node: t} = e
              , r = {
                ...t
            };
            return r.menuItems = r.menuItems.edges.map(e=>{
                let {node: t} = e;
                return {
                    ...t
                }
            }
            ),
            r
        }
        r(6937);
        var b = r(8509)
          , _ = r.n(b);
        function E(e) {
            let {Component: t, pageProps: r={}, metadata: i, menus: o} = e
              , u = (0,
            a.AA)({
                metadata: i,
                menus: o
            });
            return (0,
            n.jsx)(a.DN.Provider, {
                value: u,
                children: (0,
                n.jsxs)(s.X$, {
                    children: [(0,
                    n.jsx)(l(), {
                        height: 4,
                        color: _().progressbarColor
                    }), (0,
                    n.jsx)(t, {
                        ...r
                    })]
                })
            })
        }
        E.getInitialProps = async function(e) {
            let t = await o().getInitialProps(e)
              , {menus: r=[]} = await m();
            return {
                ...t,
                metadata: await (0,
                u.Oq)(),
                menus: r
            }
        }
        ;
        var w = E
    },
    9803: function(e, t, r) {
        "use strict";
        /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var n = r(5784)
          , i = Symbol.for("react.element")
          , o = Symbol.for("react.fragment")
          , a = Object.prototype.hasOwnProperty
          , s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
          , u = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function c(e, t, r) {
            var n, o = {}, c = null, l = null;
            for (n in void 0 !== r && (c = "" + r),
            void 0 !== t.key && (c = "" + t.key),
            void 0 !== t.ref && (l = t.ref),
            t)
                a.call(t, n) && !u.hasOwnProperty(n) && (o[n] = t[n]);
            if (e && e.defaultProps)
                for (n in t = e.defaultProps)
                    void 0 === o[n] && (o[n] = t[n]);
            return {
                $$typeof: i,
                type: e,
                key: c,
                ref: l,
                props: o,
                _owner: s.current
            }
        }
        t.Fragment = o,
        t.jsx = c,
        t.jsxs = c
    },
    1844: function(e, t, r) {
        "use strict";
        e.exports = r(9803)
    },
    1163: function(e, t, r) {
        e.exports = r(5337)
    },
    3457: function(e, t, r) {
        var n, i = Object.create, o = Object.defineProperty, a = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, u = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, l = e=>o(e, "__esModule", {
            value: !0
        }), h = (e,t)=>o(e, "name", {
            value: t,
            configurable: !0
        }), f = (e,t,r,n)=>{
            if (t && "object" == typeof t || "function" == typeof t)
                for (let i of s(t))
                    !c.call(e, i) && (r || "default" !== i) && o(e, i, {
                        get: ()=>t[i],
                        enumerable: !(n = a(t, i)) || n.enumerable
                    });
            return e
        }
        , p = (e,t)=>f(l(o(null != e ? i(u(e)) : {}, "default", !t && e && e.__esModule ? {
            get: ()=>e.default,
            enumerable: !0
        } : {
            value: e,
            enumerable: !0
        })), e), d = (n = "undefined" != typeof WeakMap ? new WeakMap : 0,
        (e,t)=>n && n.get(e) || (t = f(l({}), e, 1),
        n && n.set(e, t),
        t)), y = {};
        ((e,t)=>{
            for (var r in t)
                o(e, r, {
                    get: t[r],
                    enumerable: !0
                })
        }
        )(y, {
            default: ()=>_
        });
        var v = p(r(1163))
          , m = p(r(4865))
          , g = p(r(5697))
          , b = p(r(5784));
        function _({color: e="#29D", startPosition: t=.3, stopDelayMs: r=200, height: n=3, showOnShallow: i=!0, options: o, nonce: a}) {
            let s = null;
            b.useEffect(()=>(o && m.configure(o),
            v.default.events.on("routeChangeStart", u),
            v.default.events.on("routeChangeComplete", c),
            v.default.events.on("routeChangeError", c),
            ()=>{
                v.default.events.off("routeChangeStart", u),
                v.default.events.off("routeChangeComplete", c),
                v.default.events.off("routeChangeError", c)
            }
            ), []);
            let u = h((e,{shallow: r})=>{
                (!r || i) && (m.set(t),
                m.start())
            }
            , "routeChangeStart")
              , c = h((e,{shallow: t})=>{
                (!t || i) && (s && clearTimeout(s),
                s = setTimeout(()=>{
                    m.done(!0)
                }
                , r))
            }
            , "routeChangeEnd");
            return b.createElement("style", {
                nonce: a
            }, `
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: ${e};
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: ${n}px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
        opacity: 1;
        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
      }
      #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
      }
      #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        border: solid 2px transparent;
        border-top-color: ${e};
        border-left-color: ${e};
        border-radius: 50%;
        -webkit-animation: nprogresss-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
      }
      .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
      }
      .nprogress-custom-parent #nprogress .spinner,
      .nprogress-custom-parent #nprogress .bar {
        position: absolute;
      }
      @-webkit-keyframes nprogress-spinner {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes nprogress-spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `)
        }
        h(_, "NextNProgress"),
        _.propTypes = {
            color: g.string,
            startPosition: g.number,
            stopDelayMs: g.number,
            height: g.number,
            showOnShallow: g.bool,
            options: g.object,
            nonce: g.string
        },
        e.exports = d(y)
    },
    4865: function(e, t, r) {
        var n, i;
        void 0 !== (n = "function" == typeof (i = function() {
            var e, t, r, n = {};
            n.version = "0.2.0";
            var i = n.settings = {
                minimum: .08,
                easing: "ease",
                positionUsing: "",
                speed: 200,
                trickle: !0,
                trickleRate: .02,
                trickleSpeed: 800,
                showSpinner: !0,
                barSelector: '[role="bar"]',
                spinnerSelector: '[role="spinner"]',
                parent: "body",
                template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            };
            function o(e, t, r) {
                return e < t ? t : e > r ? r : e
            }
            n.configure = function(e) {
                var t, r;
                for (t in e)
                    void 0 !== (r = e[t]) && e.hasOwnProperty(t) && (i[t] = r);
                return this
            }
            ,
            n.status = null,
            n.set = function(e) {
                var t = n.isStarted();
                e = o(e, i.minimum, 1),
                n.status = 1 === e ? null : e;
                var r = n.render(!t)
                  , u = r.querySelector(i.barSelector)
                  , c = i.speed
                  , l = i.easing;
                return r.offsetWidth,
                a(function(t) {
                    var o, a;
                    "" === i.positionUsing && (i.positionUsing = n.getPositioningCSS()),
                    s(u, (o = e,
                    (a = "translate3d" === i.positionUsing ? {
                        transform: "translate3d(" + (-1 + o) * 100 + "%,0,0)"
                    } : "translate" === i.positionUsing ? {
                        transform: "translate(" + (-1 + o) * 100 + "%,0)"
                    } : {
                        "margin-left": (-1 + o) * 100 + "%"
                    }).transition = "all " + c + "ms " + l,
                    a)),
                    1 === e ? (s(r, {
                        transition: "none",
                        opacity: 1
                    }),
                    r.offsetWidth,
                    setTimeout(function() {
                        s(r, {
                            transition: "all " + c + "ms linear",
                            opacity: 0
                        }),
                        setTimeout(function() {
                            n.remove(),
                            t()
                        }, c)
                    }, c)) : setTimeout(t, c)
                }),
                this
            }
            ,
            n.isStarted = function() {
                return "number" == typeof n.status
            }
            ,
            n.start = function() {
                n.status || n.set(0);
                var e = function() {
                    setTimeout(function() {
                        n.status && (n.trickle(),
                        e())
                    }, i.trickleSpeed)
                };
                return i.trickle && e(),
                this
            }
            ,
            n.done = function(e) {
                return e || n.status ? n.inc(.3 + .5 * Math.random()).set(1) : this
            }
            ,
            n.inc = function(e) {
                var t = n.status;
                return t ? ("number" != typeof e && (e = (1 - t) * o(Math.random() * t, .1, .95)),
                t = o(t + e, 0, .994),
                n.set(t)) : n.start()
            }
            ,
            n.trickle = function() {
                return n.inc(Math.random() * i.trickleRate)
            }
            ,
            e = 0,
            t = 0,
            n.promise = function(r) {
                return r && "resolved" !== r.state() && (0 === t && n.start(),
                e++,
                t++,
                r.always(function() {
                    0 == --t ? (e = 0,
                    n.done()) : n.set((e - t) / e)
                })),
                this
            }
            ,
            n.render = function(e) {
                if (n.isRendered())
                    return document.getElementById("nprogress");
                c(document.documentElement, "nprogress-busy");
                var t = document.createElement("div");
                t.id = "nprogress",
                t.innerHTML = i.template;
                var r, o, a = t.querySelector(i.barSelector), u = e ? "-100" : (-1 + (n.status || 0)) * 100, l = document.querySelector(i.parent);
                return s(a, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + u + "%,0,0)"
                }),
                !i.showSpinner && (o = t.querySelector(i.spinnerSelector)) && f(o),
                l != document.body && c(l, "nprogress-custom-parent"),
                l.appendChild(t),
                t
            }
            ,
            n.remove = function() {
                l(document.documentElement, "nprogress-busy"),
                l(document.querySelector(i.parent), "nprogress-custom-parent");
                var e = document.getElementById("nprogress");
                e && f(e)
            }
            ,
            n.isRendered = function() {
                return !!document.getElementById("nprogress")
            }
            ,
            n.getPositioningCSS = function() {
                var e = document.body.style
                  , t = "WebkitTransform"in e ? "Webkit" : "MozTransform"in e ? "Moz" : "msTransform"in e ? "ms" : "OTransform"in e ? "O" : "";
                return t + "Perspective"in e ? "translate3d" : t + "Transform"in e ? "translate" : "margin"
            }
            ;
            var a = (r = [],
            function(e) {
                r.push(e),
                1 == r.length && function e() {
                    var t = r.shift();
                    t && t(e)
                }()
            }
            )
              , s = function() {
                var e = ["Webkit", "O", "Moz", "ms"]
                  , t = {};
                function r(r, n, i) {
                    var o;
                    n = t[o = (o = n).replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
                        return t.toUpperCase()
                    })] || (t[o] = function(t) {
                        var r = document.body.style;
                        if (t in r)
                            return t;
                        for (var n, i = e.length, o = t.charAt(0).toUpperCase() + t.slice(1); i--; )
                            if ((n = e[i] + o)in r)
                                return n;
                        return t
                    }(o)),
                    r.style[n] = i
                }
                return function(e, t) {
                    var n, i, o = arguments;
                    if (2 == o.length)
                        for (n in t)
                            void 0 !== (i = t[n]) && t.hasOwnProperty(n) && r(e, n, i);
                    else
                        r(e, o[1], o[2])
                }
            }();
            function u(e, t) {
                return ("string" == typeof e ? e : h(e)).indexOf(" " + t + " ") >= 0
            }
            function c(e, t) {
                var r = h(e);
                u(r, t) || (e.className = (r + t).substring(1))
            }
            function l(e, t) {
                var r, n = h(e);
                u(e, t) && (r = n.replace(" " + t + " ", " "),
                e.className = r.substring(1, r.length - 1))
            }
            function h(e) {
                return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
            }
            function f(e) {
                e && e.parentNode && e.parentNode.removeChild(e)
            }
            return n
        }
        ) ? i.call(t, r, t, e) : i) && (e.exports = n)
    },
    4155: function(e) {
        var t, r, n, i = e.exports = {};
        function o() {
            throw Error("setTimeout has not been defined")
        }
        function a() {
            throw Error("clearTimeout has not been defined")
        }
        function s(e) {
            if (t === setTimeout)
                return setTimeout(e, 0);
            if ((t === o || !t) && setTimeout)
                return t = setTimeout,
                setTimeout(e, 0);
            try {
                return t(e, 0)
            } catch (n) {
                try {
                    return t.call(null, e, 0)
                } catch (r) {
                    return t.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                t = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                t = o
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (n) {
                r = a
            }
        }();
        var u = []
          , c = !1
          , l = -1;
        function h() {
            c && n && (c = !1,
            n.length ? u = n.concat(u) : l = -1,
            u.length && f())
        }
        function f() {
            if (!c) {
                var e = s(h);
                c = !0;
                for (var t = u.length; t; ) {
                    for (n = u,
                    u = []; ++l < t; )
                        n && n[l].run();
                    l = -1,
                    t = u.length
                }
                n = null,
                c = !1,
                function(e) {
                    if (r === clearTimeout)
                        return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout)
                        return r = clearTimeout,
                        clearTimeout(e);
                    try {
                        r(e)
                    } catch (n) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function p(e, t) {
            this.fun = e,
            this.array = t
        }
        function d() {}
        i.nextTick = function(e) {
            var t = Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
            u.push(new p(e,t)),
            1 !== u.length || c || s(f)
        }
        ,
        p.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        i.title = "browser",
        i.browser = !0,
        i.env = {},
        i.argv = [],
        i.version = "",
        i.versions = {},
        i.on = d,
        i.addListener = d,
        i.once = d,
        i.off = d,
        i.removeListener = d,
        i.removeAllListeners = d,
        i.emit = d,
        i.prependListener = d,
        i.prependOnceListener = d,
        i.listeners = function(e) {
            return []
        }
        ,
        i.binding = function(e) {
            throw Error("process.binding is not supported")
        }
        ,
        i.cwd = function() {
            return "/"
        }
        ,
        i.chdir = function(e) {
            throw Error("process.chdir is not supported")
        }
        ,
        i.umask = function() {
            return 0
        }
    },
    2703: function(e, t, r) {
        "use strict";
        var n = r(414);
        function i() {}
        function o() {}
        o.resetWarningCache = i,
        e.exports = function() {
            function e(e, t, r, i, o, a) {
                if (a !== n) {
                    var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw s.name = "Invariant Violation",
                    s
                }
            }
            function t() {
                return e
            }
            e.isRequired = e;
            var r = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: o,
                resetWarningCache: i
            };
            return r.PropTypes = r,
            r
        }
    },
    5697: function(e, t, r) {
        e.exports = r(2703)()
    },
    414: function(e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    655: function(e, t, r) {
        "use strict";
        r.d(t, {
            Jh: function() {
                return u
            },
            ZT: function() {
                return i
            },
            _T: function() {
                return a
            },
            ev: function() {
                return c
            },
            mG: function() {
                return s
            },
            pi: function() {
                return o
            }
        });
        var n = function(e, t) {
            return (n = Object.setPrototypeOf || ({
                __proto__: []
            })instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            )(e, t)
        };
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        var o = function() {
            return (o = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var i in t = arguments[r])
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }
            ).apply(this, arguments)
        };
        function a(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
            return r
        }
        function s(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function a(e) {
                    try {
                        u(n.next(e))
                    } catch (t) {
                        o(t)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (t) {
                        o(t)
                    }
                }
                function u(e) {
                    var t;
                    e.done ? i(e.value) : ((t = e.value)instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(a, s)
                }
                u((n = n.apply(e, t || [])).next())
            }
            )
        }
        function u(e, t) {
            var r, n, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (r)
                            throw TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n),
                                0) : n.next) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (o = [2 & o[0], i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (s) {
                                o = [6, s],
                                n = 0
                            } finally {
                                r = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }
        function c(e, t, r) {
            if (r || 2 == arguments.length)
                for (var n, i = 0, o = t.length; i < o; i++)
                    !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)),
                    n[i] = t[i]);
            return e.concat(n || Array.prototype.slice.call(t))
        }
    },
    7297: function(e, t, r) {
        "use strict";
        function n(e, t) {
            return t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        r.d(t, {
            Z: function() {
                return n
            }
        })
    },
    7826: function(e, t, r) {
        "use strict";
        function n(e, t) {
            let r = Boolean(e);
            if (!r)
                throw Error(t)
        }
        r.d(t, {
            a: function() {
                return n
            }
        })
    },
    5821: function(e, t, r) {
        "use strict";
        function n(e) {
            return function e(t, r) {
                switch (typeof t) {
                case "string":
                    return JSON.stringify(t);
                case "function":
                    return t.name ? `[function ${t.name}]` : "[function]";
                case "object":
                    return function(t, r) {
                        if (null === t)
                            return "null";
                        if (r.includes(t))
                            return "[Circular]";
                        let n = [...r, t];
                        if ("function" == typeof t.toJSON) {
                            let i = t.toJSON();
                            if (i !== t)
                                return "string" == typeof i ? i : e(i, n)
                        } else if (Array.isArray(t))
                            return function(t, r) {
                                if (0 === t.length)
                                    return "[]";
                                if (r.length > 2)
                                    return "[Array]";
                                let n = Math.min(10, t.length)
                                  , i = t.length - n
                                  , o = [];
                                for (let a = 0; a < n; ++a)
                                    o.push(e(t[a], r));
                                return 1 === i ? o.push("... 1 more item") : i > 1 && o.push(`... ${i} more items`),
                                "[" + o.join(", ") + "]"
                            }(t, n);
                        return function(t, r) {
                            let n = Object.entries(t);
                            if (0 === n.length)
                                return "{}";
                            if (r.length > 2)
                                return "[" + function(e) {
                                    let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
                                    if ("Object" === t && "function" == typeof e.constructor) {
                                        let r = e.constructor.name;
                                        if ("string" == typeof r && "" !== r)
                                            return r
                                    }
                                    return t
                                }(t) + "]";
                            let i = n.map(([t,n])=>t + ": " + e(n, r));
                            return "{ " + i.join(", ") + " }"
                        }(t, n)
                    }(t, r);
                default:
                    return String(t)
                }
            }(e, [])
        }
        r.d(t, {
            X: function() {
                return n
            }
        })
    },
    2380: function(e, t, r) {
        "use strict";
        var n;
        let i;
        r.d(t, {
            UG: function() {
                return c
            },
            WU: function() {
                return a
            },
            Ye: function() {
                return o
            },
            h8: function() {
                return s
            },
            ku: function() {
                return i
            }
        });
        class o {
            constructor(e, t, r) {
                this.start = e.start,
                this.end = t.end,
                this.startToken = e,
                this.endToken = t,
                this.source = r
            }
            get[Symbol.toStringTag]() {
                return "Location"
            }
            toJSON() {
                return {
                    start: this.start,
                    end: this.end
                }
            }
        }
        class a {
            constructor(e, t, r, n, i, o) {
                this.kind = e,
                this.start = t,
                this.end = r,
                this.line = n,
                this.column = i,
                this.value = o,
                this.prev = null,
                this.next = null
            }
            get[Symbol.toStringTag]() {
                return "Token"
            }
            toJSON() {
                return {
                    kind: this.kind,
                    value: this.value,
                    line: this.line,
                    column: this.column
                }
            }
        }
        let s = {
            Name: [],
            Document: ["definitions"],
            OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
            VariableDefinition: ["variable", "type", "defaultValue", "directives"],
            Variable: ["name"],
            SelectionSet: ["selections"],
            Field: ["alias", "name", "arguments", "directives", "selectionSet"],
            Argument: ["name", "value"],
            FragmentSpread: ["name", "directives"],
            InlineFragment: ["typeCondition", "directives", "selectionSet"],
            FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
            IntValue: [],
            FloatValue: [],
            StringValue: [],
            BooleanValue: [],
            NullValue: [],
            EnumValue: [],
            ListValue: ["values"],
            ObjectValue: ["fields"],
            ObjectField: ["name", "value"],
            Directive: ["name", "arguments"],
            NamedType: ["name"],
            ListType: ["type"],
            NonNullType: ["type"],
            SchemaDefinition: ["description", "directives", "operationTypes"],
            OperationTypeDefinition: ["type"],
            ScalarTypeDefinition: ["description", "name", "directives"],
            ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
            FieldDefinition: ["description", "name", "arguments", "type", "directives"],
            InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
            InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
            UnionTypeDefinition: ["description", "name", "directives", "types"],
            EnumTypeDefinition: ["description", "name", "directives", "values"],
            EnumValueDefinition: ["description", "name", "directives"],
            InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
            DirectiveDefinition: ["description", "name", "arguments", "locations"],
            SchemaExtension: ["directives", "operationTypes"],
            ScalarTypeExtension: ["name", "directives"],
            ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
            InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
            UnionTypeExtension: ["name", "directives", "types"],
            EnumTypeExtension: ["name", "directives", "values"],
            InputObjectTypeExtension: ["name", "directives", "fields"]
        }
          , u = new Set(Object.keys(s));
        function c(e) {
            let t = null == e ? void 0 : e.kind;
            return "string" == typeof t && u.has(t)
        }
        (n = i || (i = {})).QUERY = "query",
        n.MUTATION = "mutation",
        n.SUBSCRIPTION = "subscription"
    },
    7392: function(e, t, r) {
        "use strict";
        r.d(t, {
            LZ: function() {
                return o
            },
            wv: function() {
                return i
            }
        });
        var n = r(8297);
        function i(e) {
            var t, r;
            let i = Number.MAX_SAFE_INTEGER
              , o = null
              , a = -1;
            for (let s = 0; s < e.length; ++s) {
                let u = e[s]
                  , c = function(e) {
                    let t = 0;
                    for (; t < e.length && (0,
                    n.FD)(e.charCodeAt(t)); )
                        ++t;
                    return t
                }(u);
                c !== u.length && (o = null !== (r = o) && void 0 !== r ? r : s,
                a = s,
                0 !== s && c < i && (i = c))
            }
            return e.map((e,t)=>0 === t ? e : e.slice(i)).slice(null !== (t = o) && void 0 !== t ? t : 0, a + 1)
        }
        function o(e, t) {
            let r = e.replace(/"""/g, '\\"""')
              , i = r.split(/\r\n|[\n\r]/g)
              , o = 1 === i.length
              , a = i.length > 1 && i.slice(1).every(e=>0 === e.length || (0,
            n.FD)(e.charCodeAt(0)))
              , s = r.endsWith('\\"""')
              , u = e.endsWith('"') && !s
              , c = e.endsWith("\\")
              , l = u || c
              , h = !(null != t && t.minimize) && (!o || e.length > 70 || l || a || s)
              , f = ""
              , p = o && (0,
            n.FD)(e.charCodeAt(0));
            return (h && !p || a) && (f += "\n"),
            f += r,
            (h || l) && (f += "\n"),
            '"""' + f + '"""'
        }
    },
    8297: function(e, t, r) {
        "use strict";
        function n(e) {
            return 9 === e || 32 === e
        }
        function i(e) {
            return e >= 48 && e <= 57
        }
        function o(e) {
            return e >= 97 && e <= 122 || e >= 65 && e <= 90
        }
        function a(e) {
            return o(e) || 95 === e
        }
        function s(e) {
            return o(e) || i(e) || 95 === e
        }
        r.d(t, {
            FD: function() {
                return n
            },
            HQ: function() {
                return s
            },
            LQ: function() {
                return a
            },
            X1: function() {
                return i
            }
        })
    },
    7359: function(e, t, r) {
        "use strict";
        var n;
        let i;
        r.d(t, {
            h: function() {
                return i
            }
        }),
        (n = i || (i = {})).NAME = "Name",
        n.DOCUMENT = "Document",
        n.OPERATION_DEFINITION = "OperationDefinition",
        n.VARIABLE_DEFINITION = "VariableDefinition",
        n.SELECTION_SET = "SelectionSet",
        n.FIELD = "Field",
        n.ARGUMENT = "Argument",
        n.FRAGMENT_SPREAD = "FragmentSpread",
        n.INLINE_FRAGMENT = "InlineFragment",
        n.FRAGMENT_DEFINITION = "FragmentDefinition",
        n.VARIABLE = "Variable",
        n.INT = "IntValue",
        n.FLOAT = "FloatValue",
        n.STRING = "StringValue",
        n.BOOLEAN = "BooleanValue",
        n.NULL = "NullValue",
        n.ENUM = "EnumValue",
        n.LIST = "ListValue",
        n.OBJECT = "ObjectValue",
        n.OBJECT_FIELD = "ObjectField",
        n.DIRECTIVE = "Directive",
        n.NAMED_TYPE = "NamedType",
        n.LIST_TYPE = "ListType",
        n.NON_NULL_TYPE = "NonNullType",
        n.SCHEMA_DEFINITION = "SchemaDefinition",
        n.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition",
        n.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition",
        n.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition",
        n.FIELD_DEFINITION = "FieldDefinition",
        n.INPUT_VALUE_DEFINITION = "InputValueDefinition",
        n.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition",
        n.UNION_TYPE_DEFINITION = "UnionTypeDefinition",
        n.ENUM_TYPE_DEFINITION = "EnumTypeDefinition",
        n.ENUM_VALUE_DEFINITION = "EnumValueDefinition",
        n.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition",
        n.DIRECTIVE_DEFINITION = "DirectiveDefinition",
        n.SCHEMA_EXTENSION = "SchemaExtension",
        n.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension",
        n.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension",
        n.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension",
        n.UNION_TYPE_EXTENSION = "UnionTypeExtension",
        n.ENUM_TYPE_EXTENSION = "EnumTypeExtension",
        n.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension"
    },
    1270: function(e, t, r) {
        "use strict";
        r.d(t, {
            H: function() {
                return o
            },
            T: function() {
                return a
            }
        });
        var n = r(7826)
          , i = r(5821);
        class o {
            constructor(e, t="GraphQL request", r={
                line: 1,
                column: 1
            }) {
                "string" == typeof e || (0,
                n.a)(!1, `Body must be a string. Received: ${(0,
                i.X)(e)}.`),
                this.body = e,
                this.name = t,
                this.locationOffset = r,
                this.locationOffset.line > 0 || (0,
                n.a)(!1, "line in locationOffset is 1-indexed and must be positive."),
                this.locationOffset.column > 0 || (0,
                n.a)(!1, "column in locationOffset is 1-indexed and must be positive.")
            }
            get[Symbol.toStringTag]() {
                return "Source"
            }
        }
        function a(e) {
            return e instanceof o
        }
    },
    4147: function(e) {
        "use strict";
        e.exports = JSON.parse('{"name":"next-wordpress-starter","homepage":"https://next-wordpress-starter.spacejelly.dev","version":"0.1.0","license":"MIT","author":"Colby Fayock <hello@colbyfayock.com>","scripts":{"build":"next build","dev":"next dev","export":"next export","format":"yarn lint --fix","format:no-path":"yarn lint:no-path --fix","lint":"eslint .","lint:no-path":"eslint","start":"next start -p ${PORT:=3000}","prepare":"husky install"},"lint-staged":{"**/*.js":"yarn format:no-path","**/*.scss":"yarn prettier --write"},"dependencies":{"@apollo/client":"^3.6.9","date-fns":"^2.29.1","dotenv":"^16.0.1","fuse.js":"^6.6.2","graphql":"^16.5.0","he":"^1.2.0","loader-utils":"^3.2.0","next":"^13.1.0","next-compose-plugins":"^2.2.1","nextjs-progressbar":"^0.0.14","node-html-parser":"^5.3.3","parameterize":"^1.0.0","path":"^0.12.7","react":"^18.2.0","react-dom":"^18.2.0","react-helmet":"^6.1.0","react-icons":"^4.4.0","rss":"^1.2.2","sass":"^1.54.0","style.css":"^1.0.3"},"devDependencies":{"eslint":"8.19.0","eslint-config-next":"^13.1.0","eslint-config-prettier":"^8.5.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-react":"^7.30.1","husky":"^8.0.1","lint-staged":">=13.0.3","playwright":"^1.23.1","prettier":"2.7.1"},"repository":{"type":"git","url":"https://github.com/colbyfayock/next-wordpress-starter"},"bugs":{"url":"https://github.com/colbyfayock/next-wordpress-starter/issues"}}')
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [179], function() {
        return t(1118),
        t(5337)
    }),
    _N_E = e.O()
}
]);
