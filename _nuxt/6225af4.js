(window.webpackJsonp = window.webpackJsonp || []).push([
    [18], {
        537: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() { return o }));
            var r = n(127);
            var l = n(182);

            function o(t) { return function(t) { if (Array.isArray(t)) return Object(r.a)(t) }(t) || function(t) { if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t) }(t) || Object(l.a)(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }
        },
        538: function(t, e, n) {
            "use strict";
            var r = n(537),
                l = (n(10), n(22), n(28), n(67), n(69), n(68), n(181), n(17), n(11), {
                    props: { slug: String, link: Object, title: String },
                    computed: {
                        parents: function() {
                            var t = this;
                            if (!this.slug) return [];
                            var path = "/" + this.slug,
                                e = this.$store.getters.getLink,
                                n = path.split("/").map((function(t, i, e) { return e.slice(0, i).join("/") })).filter(Boolean);
                            return n.map((function(path) { var link = e(path); return link ? t.title && link.title === t.title ? null : { path: path, title: link.title } : null })).filter(Boolean)
                        },
                        links: function() { var t = [{ path: "/", title: "Home" }]; return this.link ? t.push(this.link) : t = [].concat(Object(r.a)(t), Object(r.a)(this.parents)), t },
                        prevLink: function() { return this.links[this.links.length - 1] }
                    },
                    jsonld: function() {
                        var t = this,
                            e = "https://fundbox.com",
                            n = [];
                        return this.link ? n.push({ "@type": "ListItem", position: 1, item: { "@id": this.$addTrailingSlash(e + this.link.path), name: this.link.title } }) : this.parents.forEach((function(r, i) { n.push({ "@type": "ListItem", position: i + 1, item: { "@id": t.$addTrailingSlash(e + r.path), name: r.title } }) })), n.length ? { "@context": "http://schema.org", "@type": "BreadcrumbList", itemListElement: n } : null
                    }
                }),
                o = n(1),
                component = Object(o.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("nav", { staticClass: "text-lg truncate" }, [r("ul", { staticClass: "hidden md:flex overflow-hidden" }, [t._l(t.links, (function(link) { return r("li", { key: link.title }, [r("f-link", { staticClass: "font-semibold hover:opacity-75", attrs: { to: t.$addTrailingSlash(link.path) } }, [t._v(t._s(link.title))]), t._v(" "), r("img", { staticClass: "h-2 w-2 mr-2 mb-px", attrs: { src: n(539), alt: "arrow" } })], 1) })), t._v(" "), t.title ? r("li", [r("div", { domProps: { textContent: t._s(t.title) } })]) : t._e()], 2), t._v(" "), t.prevLink ? r("f-link", { staticClass: "md:hidden font-semibold", attrs: { to: t.$addTrailingSlash(t.prevLink.path) } }, [r("img", { staticClass: "w-2 pr-px mr-1 mb-px", attrs: { src: n(540), alt: "arrow" } }), t._v(" "), r("span", [t._v("Back")])]) : t._e()], 1)
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        539: function(t, e, n) { t.exports = n.p + "36d87d80abdedfa236e83a69674c1a28.svg" },
        540: function(t, e, n) { t.exports = n.p + "96a3c2bff0595c7009929fccb702aa4a.svg" },
        559: function(t, e, n) { t.exports = {} },
        630: function(t, e, n) {
            "use strict";
            n(559)
        },
        683: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(5),
                l = (n(22), n(10), n(15), n(14), n(18), n(11), n(19), n(59));

            function o(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(object, t).enumerable }))), e.push.apply(e, n)
                }
                return e
            }

            function c(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? o(Object(source), !0).forEach((function(e) { Object(r.a)(t, e, source[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : o(Object(source)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e)) }))
                }
                return t
            }
            var f = { components: { breadcrumbs: n(538).a }, props: { title: String, blok: Object }, computed: { sections: function() { return this.blok.body.filter(this.$componentExists).map((function(section) { return c(c({}, section), {}, { navLabel: section.nav_label ? Object(l.b)(section.nav_label) : null }) })) } } },
                d = (n(630), n(1)),
                component = Object(d.a)(f, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("main", { staticClass: "md:pb-16 pb-8" }, t._l(t.sections, (function(e, i) {
                        return n("section", { directives: [{ name: "editable", rawName: "v-editable", value: e, expression: "blok" }], key: e._uid, staticClass: "relative overflow-hidden", class: e.component }, [e.navLabel ? n("div", { staticClass: "scroll-target", attrs: { id: e.navLabel } }) : t._e(), t._v(" "), n(e.component, {
                            tag: "component",
                            staticClass: "xl:container",
                            attrs: { blok: e },
                            scopedSlots: t._u([i ? null : {
                                key: "breadcrumbs",
                                fn: function(e) {
                                    var link = e.link,
                                        r = e.classes,
                                        l = e.slug;
                                    return [n("breadcrumbs", { class: r, attrs: { title: t.title, slug: l, link: link } })]
                                }
                            }], null, !0)
                        })], 1)
                    })), 0)
                }), [], !1, null, null, null);
            e.default = component.exports
        }
    }
]);