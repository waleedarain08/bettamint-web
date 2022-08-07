(window.webpackJsonp = window.webpackJsonp || []).push([
    [7, 4], {
        575: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(4),
                o = (n(43), n(30), n(54), n(62), n(28), n(47), n(29), n(14), n(73), n(98)),
                c = {
                    components: { marketplacePage: function() { return n.e(21).then(n.bind(null, 682)) }, marketingPage: function() { return n.e(18).then(n.bind(null, 683)) }, resourcesPage: function() { return Promise.all([n.e(0), n.e(14)]).then(n.bind(null, 667)) }, contentPage: function() { return n.e(17).then(n.bind(null, 684)) }, partnerPage: function() { return Promise.all([n.e(22), n.e(20)]).then(n.bind(null, 685)) }, searchPage: function() { return Promise.all([n.e(0), n.e(16)]).then(n.bind(null, 676)) } },
                    head: function() {
                        var t, e = this.content.seo || {},
                            n = (null === (t = this.content.thumbnail) || void 0 === t ? void 0 : t.filename) || o.b,
                            r = function(t, content) { return { name: t, content: content, property: t, hid: t.replace(":", "_") } };
                        return { title: e.title || this.name, meta: [r("description", e.description || ""), r("og:title", e.og_title || e.title || this.name), r("og:description", e.og_description || e.description || o.a), r("og:image", e.og_image || n), r("twitter:title", e.twitter_title || e.title || this.name), r("twitter:description", e.twitter_description || e.description || o.a), r("twitter:image", e.twitter_image || e.og_image || n)] }
                    },
                    data: function() { return { content: {} } },
                    computed: { component: function() { var t; return (null === (t = this.content) || void 0 === t ? void 0 : t.component) || "" } },
                    mounted: function() {
                        this.initVisualEditor();
                        var path = this.$route.path;
                        this.$store.getters.getLink(path) ? this.$trackPage({ path: path, name: this.name }) : this.trackError(404)
                    },
                    fetch: function() { this.$store.commit("SET_CONTENT_TYPE", this.component), this.$store.commit("SET_CTA", { link: this.content.cta_link, label: this.content.cta_label }) },
                    asyncData: function(t) {
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            var n, r, o, c, l, d, h;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.route, r = t.store, o = t.error, !(c = t.payload)) { e.next = 3; break }
                                        return e.abrupt("return", { id: c.id, uuid: c.uuid, name: c.name, slug: c.full_slug, content: c.content, published_at: c.published_at, first_published_at: c.first_published_at });
                                    case 3:
                                        if (e.prev = 3, l = r.getters.getLink(n.path)) { e.next = 7; break }
                                        throw new Error("Not Found");
                                    case 7:
                                        return e.next = 9, r.dispatch("getPage", { path: l.slug });
                                    case 9:
                                        return d = e.sent, e.abrupt("return", { id: d.id, uuid: d.uuid, name: d.name, slug: d.full_slug, content: d.content, published_at: d.published_at, first_published_at: d.first_published_at });
                                    case 13:
                                        throw e.prev = 13, e.t0 = e.catch(3), e.t0;
                                    case 17:
                                        console.error(e.t0), h = e.t0.response ? e.t0.response.status : 404, o({ statusCode: h, message: "Not Found" });
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 13]
                            ])
                        })))()
                    },
                    methods: { trackError: function(t) { this.$trackPage({ path: this.$route.path, status: t, name: t }), this.$gtm.push({ event: t }) }, initVisualEditor: function() { return null } }
                },
                l = n(1),
                component = Object(l.a)(c, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return "marketplace-page" === t.component ? n("marketplace-page", { attrs: { blok: t.content, title: t.name } }) : t.component.startsWith("marketing-page") ? n("marketing-page", { attrs: { blok: t.content, title: t.name } }) : ["category-page", "resources-page"].includes(t.component) ? n("resources-page", { attrs: { blok: t.content, title: t.name, slug: t.slug } }) : t.component.startsWith("content-page") ? n("content-page", { attrs: { blok: t.content, slug: t.slug, uuid: t.uuid, modified: t.published_at, published: t.first_published_at } }) : "partner-page" === t.component ? n("partner-page", { attrs: { blok: t.content, title: t.name } }) : "careers-page" === t.component ? n("careers-page", { attrs: { blok: t.content } }) : "search-page" === t.component ? n("search-page", { attrs: { blok: t.content, title: t.name, slug: t.slug } }) : t._e()
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        686: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(575).default,
                o = n(1),
                component = Object(o.a)(r, undefined, undefined, !1, null, null, null);
            e.default = component.exports
        }
    }
]);