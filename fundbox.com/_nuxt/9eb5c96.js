(window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    [, , , , , , , , function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() { return c })), r.d(e, "a", (function() { return d }));
        var n = r(5),
            o = (r(11), r(330)),
            l = r(341).gsap,
            c = function(t) {
                var element = t.element,
                    e = t.triggerHook,
                    r = void 0 === e ? 1 : e,
                    c = t.duration,
                    d = void 0 === c ? "100%" : c,
                    m = t.reversed;
                if (!element) return null;
                var f = l.timeline({ paused: !0 });
                element.querySelectorAll("[data-parallax]").forEach((function(t) {
                    var e, r, o = "x" === t.dataset.axis ? "x" : "y",
                        c = t.dataset.duration || 1,
                        d = t.dataset.shift || "100vh",
                        h = t.dataset.delay || 0;
                    m || l.to(t, (e = {}, Object(n.a)(e, o, d), Object(n.a)(e, "duration", 0), e)), f.add(l.to(t, (r = {}, Object(n.a)(r, o, m ? d : 0), Object(n.a)(r, "ease", "power1.easeOut"), Object(n.a)(r, "duration", c), r)), h)
                })), new o.a({ triggerElement: element, gsap: { timeline: f }, triggerHook: r, duration: d })
            },
            d = function(t) {
                var element = t.element,
                    e = t.points,
                    r = t.width,
                    n = t.height,
                    l = t.start,
                    c = t.duration,
                    d = t.type,
                    m = function(t) {
                        this.type = d, this.start = l, this.duration = c, this.points = e, this.w = r, this.h = n, this.progress = void 0, this.onProgress = this.onProgress.bind(this), this.onTrigger = this.onTrigger.bind(this), this.animationStep = this.animationStep.bind(this), this.wrapImageWithSvg(t), this.setAnimationProgress(0);
                        var m = new o.a({ triggerElement: this.$el, triggerHook: this.start / 100, duration: ("scroll" === this.type ? this.duration : 100) + "%" });
                        this.scene = m.Scene, "scroll" == this.type ? this.scene.on("progress", this.onProgress) : this.scene.on("start", this.onTrigger)
                    };
                return m.prototype = {
                    wrapImageWithSvg: function(t) {
                        var e = document.createElement("div");
                        e.style.paddingTop = 100 * this.h / this.w + "%", e.style.position = "relative", e.style.width = "100%", e.style.height = 0;
                        var r = document.createElement("div");
                        r.style.position = "absolute", r.style.height = "100%", r.style.width = "100%", r.style.top = "0", e.append(r);
                        var n = "http://www.w3.org/2000/svg",
                            o = "masker_" + +new Date,
                            svg = document.createElementNS(n, "svg");
                        svg.setAttribute("width", "100%"), svg.setAttribute("height", "100%"), svg.setAttribute("viewBox", "0 0 " + this.w + " " + this.h), r.append(svg), svg.style.position = "absolute";
                        var defs = document.createElementNS(n, "defs");
                        svg.appendChild(defs);
                        var mask = document.createElementNS(n, "mask");
                        mask.setAttribute("id", o), defs.appendChild(mask);
                        var image = document.createElementNS(n, "rect");
                        image.setAttribute("fill", "currentColor"), image.setAttribute("x", "0"), image.setAttribute("y", "0"), image.setAttribute("width", "100%"), image.setAttribute("height", "100%"), image.setAttribute("mask", "url(#" + o + ")"), svg.appendChild(image);
                        for (var i = 0; i < this.points.length; i++) {
                            var circle = document.createElementNS(n, "circle"),
                                l = this.points[i];
                            this.points[i] = { x: l[0], y: l[1], s: l[2], t: l[3], el: circle }, l = this.points[i], circle.setAttribute("cx", l.x), circle.setAttribute("cy", l.y), circle.setAttribute("r", l.s / 2), circle.setAttribute("fill", "white"), mask.appendChild(circle)
                        }
                        var c = document.createElementNS(n, "image");
                        c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACZCAMAAAALgmiIAAAAulBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yHCTBAAAAPXRSTlMAA/z69gcJ8+4T6hcNKwvwQN3ORxvWx7Tn4zHarsKDH3lTD3Q3JiLf0riIbU3hnzvLaFeNYr2ZlFyRqaV/Bd+sBQAACXtJREFUeNrc2etS4kAQBeCke3IhF0JCIEC4CgKCoKyKgnve/7UWcbcUVkKGRNja70dKC4o6dHqaGVD+W+r22rkblDqbf7SirvwjdF0t6lqp6Qket7v9crk7vR3ajnOlFzcPbXOfn6rp2uZiD912zNggMu8DT5itab/Zmj88TMr6Jpl69nSOo4WlsFjs/HgS+K3ysPYArpkEsTGaD84YTFXUsKBtrppWmFTuo6g6Y/wRL5sePuG5U+icKVrjLiy4g2vbtrXGq4c99eaTic+s1WKxvaFqoaB8I3VoNwaNcqPbbEb9dsDYF/9c7qUVQU/RHF1pvEaLhqN8l+vHUqiXbyoWM1kG/lZ7bXrYFZTc/mq1rBK88frlewpXLE1/9htXEwMHsbBM7DLuq4YgbJF103fzb7tSVBvN4vZjCwmEJ7CHdp9w0xvmWzh3TXgT31tIwAYjmbcsN8L86nbVNvCOmJKCETOOsFZ3rmsr+Ri0kI4QOM6av5TLQyUPjxZSYkYKPG73ymEeFQuQFglCCmRVH6YlXcnELrnTGtJiywDSZavNHjI1m/PTDyqMtIRvIr11J8OsWNUBQmpsCkhoDhVF05QTNJ7wrWgeKqojH6046MaQQzUTMvzFlaLqqmyL3d32fdlkcWDIRZs6iqxCu7VsQZKYVQMBGVazrEneyi7DE5DEbN77BCkryeExbOIEwsCoIiAlcuWOCuEcJ6j7LCzJZDeuIkPvjXEC0zdAkGO0ZfZrWrmFs/F7qqalrliAM5qEHVtL02tqY17DOXnRi1MMi0dzqXqfcF71hVO0neNVs+c4s9Vg8KNsH0umKtdNnNf4dlhquLcNXUmm9WKcV/DD7U0is+kmLcowvL57JpyX8IPYJKBbPPy1xct0uniu4UIqpUOtVphW42pg4mLahUMlWzQFCJfDB/YdavF6iQt70ZQvXUe4sMevk2kvJi7LvP0ymVqu4KLqTxNX/yKX6raQlRkbOBETd21Vu9L+bv9iH5kJi+FZDHmiVhkvrsvXYUHd7zHdDZAZGwIgnEDw+nkdxV07tPejXf1EdrVWHSSdjAAE98Fr1UMw0O0rda/9Z8iuElnUiqVbwADG0ahuEmj+WLJ3W81+RQ6EQexbSI8IYNMgsCBmACJYdcOdkpUs5MCLPUhhQdglbiYNfWdTZiEfwmSZZJ7AHuvZ1RT1I9ntDBch+Istrq5onxaAhXzUR4yMlp2dmhnIA1EOz5r9cFT1I1lMyI4NxnGiemMlBm8NPmpWXFQECMSMLMw64yiqPD+PkMT42Kapd00TbBosBL6dF1SOrd+F/jFnBYHjZpQxGZumx0jCDGLCEV1dV3+vTBMb1rpd3fYn4UQkRmPvyGQlHPfU6BSUN/oUb8ToviKwfU+nYs+gzEsXsNol+73/25/XluFR8mskJCfByIzq1WXPUd44q50HGImMoHZKVQhpcbRaPb4nu3qV+z3Qv5lBDkFGLZpP35PZESB18wRLRZBuXK81LSpvOkHiehOEZMkZWECaNdU/hsYhbBgGZ/pAJEirvR889UnyjDJNpu2EPNqMxAlhZQTudtQOxziGar6xnVXJM8I0sYtxEn5wnMLbzRRIRdQ9Tu65kY9PjKieUNAkQUMP7U2yl9w2YZXg0Aomv1pJfUigSUEJnU2yR4IsMvjLZGMcwKMRUjN7ulrYnptGkMf8xTiIfewhJoKsWlnXnO04i/Law8bx/pwgAXnGoqDq26nxgJz4IwBkCWRU7zrv86yd18lkVt/+mZ1f3tasuEYOhMcGwzSQi6qrbNj3yAUJwczIRbxN1vGRDxa/mrnP5rSBIAzAu7qCTs2il9BBNFNFjc3+/7+VAJkxcQwB6Qx6vsAAA++cdHdIexIzSAOWqZ5KA7mqQVrw8gvpkN/NKgIAASs1Tloc9jQNMq1uIAAEouhuNJ08YKSDWQ/H8pAMwNv9oAQxaquuB4AAqDoWaTEpkQ78vSfhAFWrajFKkHVDHIO1ZW9cr75QcgzVKZktQeayBUqOmo2nNjs8uBlKjkHv1GYKAbyFQcmRb8CRh57j5ylBMjYcoXT9sUkJUmzDiTNrDpO0MWnjwRF2R3NGSZqf6hKOcPZeIj3MMtdZT0c/Y5AeLGVQfNxHOMJsinRhOpL1AzhBP1Edk6io4I8gUYNZafAq4Q81JT10HNTxfeOjli5CSo6878CHYEBECRnRRo3zGr/aUjT6SwKm79hnycSKtIl5/GT54jwZzsykJCvN/koGjbW2HYzzeMm60D5P1u7En6AY+1jpEJ2ZRYQz2OsUyoaeoSxeF2CdHMI54S62ZYojlaITk1McSwV/k936IObGjN8FjPTcWkn4xPO35WfPT+kwF9rwD9lY5cmgZ5r6X655R2ivav2nNtooa8OX0HGb5hOT8WbX+ToYAnQL8ZNFG9AYN+YzJS4mqwzjJ4vWOdPVaug68DVEDC2Ki0drs/dxq9LGS8lEb0qxsbwZqaY59hVc1NiQBgZFkO5cCwaySRpEKlcUu20BVzS2PyYUk5G36H4jG65D1WFxk6VNult5pwRcJ1v92MWZCM2+bin4TP9ifKvM6F6jHsL/5DaMHi49Rvg/r2PSoxUDuEVu9EIP1pRwE9V8cLS1C7cRlXd6FIMzyvhwK5EtPqoQNXmbFytwB9Va00O8jccuwj28jkUPYFTHDYS7qFGKvp1R3O57cCe5MNlgUEoZkUr9JX7Drp8ejlypBNwr19wHQWvZp/tZN8zpbF6feYAIEaCjJKh9iXFG+qVDPOSKCIWjus2fy2KKtKu50FYIkSFKrw3uWvcxJ5uMchCXp1Bt2Z094D/lJ7MatkED3OXpHqc77V3xsnUlggZenZNOxjQHmsjOvNA36GbXrzFI1R3QBoX3Ork9mlUbXv50wQe91GpaLFgfC/ToMjbchUN+6T48HugmHGV38vz402+vVU4X8WFrtrE+v9hPl9KDug3fIXAr4bvF+5MfLXBrl8+sGIVVdvo52Tz0d4EEQAHfQdmV5XJWCV2BremyPr8QzSrUPu9n5v40TiDC9xDtno2n7xeI2aGV4sYt/zWspoBvd3anGtEIOxcXVLB8rfDb+m3Z3BY6Eh4KEYXIDr+IZpCxntmuG/SUREAP4aFQIIBjz2qcpzg7uxKLpQuDmg+y0ZMIT4AIwrHtwJmtXheL/bRYGC4XzYxBZG2yvu9hTsKTIKBEOHaIw9N2QwkhWuvha3B8MwEQzzZwLlCJCHWEmJwsF2hN+AsNXi7CwMDrgQAAAABJRU5ErkJggg=="), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("width", "0"), c.setAttribute("height", "0"), mask.appendChild(c), this.curMask = c, this.$el = e, t.parentNode.insertBefore(this.$el, t.nextSibling), t.style.display = "none", this.$img = t
                    },
                    onProgress: function(t) { this.setAnimationProgress(t.progress) },
                    onTrigger: function() { if (cancelAnimationFrame(this.animationFrame), "DURING" == this.scene.state() && (this.animation = { timeStart: +new Date, timeEnd: +new Date + this.duration * (1 - this.progress), valueStart: this.progress, valueEnd: 1 }, this.animationStep()), "BEFORE" == this.scene.state()) return null; "AFTER" == this.scene.state() && this.setAnimationProgress(1) },
                    animationStep: function() {
                        var time = +new Date,
                            t = this.animation.timeEnd - this.animation.timeStart;
                        time < this.animation.timeStart ? time = this.animation.timeStart : time > this.animation.timeEnd && (time = this.animation.timeEnd);
                        var e = t ? (time - this.animation.timeStart) / t : 1;
                        this.setAnimationProgress(this.animation.valueStart + (this.animation.valueEnd - this.animation.valueStart) * e), e < 1 && (this.animationFrame = requestAnimationFrame(this.animationStep))
                    },
                    getPointIndex: function(time) {
                        for (var t = 0, e = this.points.length - 1; Math.abs(t - e) > 1;) {
                            var i = Math.round((t + e) / 2);
                            time >= this.points[t].t && time <= this.points[i].t ? e = i : t = i
                        }
                        return t + (time - this.points[t].t) / (this.points[e].t - this.points[t].t)
                    },
                    setAnimationProgress: function(t) {
                        this.progress = t;
                        var s, e, r, n = this.getPointIndex(1e4 * t),
                            o = Math.ceil(n),
                            l = n + 1 - o,
                            c = this.points[0];
                        0 == o && (this.curMask.setAttribute("width", 0), this.curMask.setAttribute("height", 0));
                        for (var i = 1; i < this.points.length; i++) {
                            var d = this.points[i];
                            if (i < o ? (s = d.s, e = d.x, r = d.y) : i == o ? (s = c.s + (d.s - c.s) * l, e = c.x + (d.x - c.x) * l, r = c.y + (d.y - c.y) * l) : (s = 0, e = d.x, r = d.y), d.curS != s || d.curX != e || d.curY != r) {
                                if (i == o) {
                                    d.el.setAttribute("r", 0);
                                    var m = 1.065 * s,
                                        f = 1.065 * s,
                                        h = e - f / 2,
                                        v = r - m / 2;
                                    this.curMask.setAttribute("x", h), this.curMask.setAttribute("y", v), this.curMask.setAttribute("width", f), this.curMask.setAttribute("height", m)
                                } else d.el.setAttribute("cx", e), d.el.setAttribute("cy", r), d.el.setAttribute("r", s / 2);
                                d.curS = s, d.curX = e, d.curY = r
                            }
                            c = d
                        }
                    },
                    destroy: function() { cancelAnimationFrame(this.animationFrame), "scroll" == this.type ? this.scene.off("progress", this.onProgress) : this.scene.off("start", this.onTrigger), this.scene.remove(), this.$img.show(), this.$el.remove() }
                }, element ? "true" === element.getAttribute("data-masker") ? null : void element.addEventListener("load", (function() {
                    new m(element);
                    element.setAttribute("data-masker", "true")
                })) : console.warn("masker script requires element")
            }
    }, , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r(159);
        var n = r(8),
            o = { props: { points: { type: Array, required: !0 }, scrollable: { type: Boolean, default: !1 }, duration: { type: [String, Number], default: 1500 }, start: { type: [String, Number], default: 80 }, width: { type: [String, Number], required: !0 }, height: { type: [String, Number], required: !0 }, image: { type: String, required: !0 }, color: { type: String, default: "blue" }, isStatic: { type: Boolean, default: !1 } }, mounted: function() { if (this.isStatic) return null; try { Object(n.a)({ element: this.$refs.img, points: this.points, height: this.height, width: this.width, start: this.start, type: this.scrollable ? "scroll" : "trigger", duration: this.scrollable ? this.duration : 1500 }) } catch (t) { console.error(t) } } },
            l = r(1),
            component = Object(l.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("figure", { class: "text-" + t.color, style: "mask: url('" + t.image + "') center/contain; -webkit-mask: url('" + t.image + "') center/contain; " }, [r("img", { ref: "img", staticClass: "w-full", class: t.isStatic ? "" : "invisible", attrs: { src: t.image, alt: "decoration brush" } })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, , , , function(t, e, r) {
        "use strict";
        var n = { components: { brush: r(21).a }, props: { color: String } },
            o = r(1),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("brush", {
                    attrs: {
                        width: "560",
                        height: "648",
                        points: [
                            [110, 538, 0, 0],
                            [110, 538, 65, 28],
                            [104, 516, 65, 57],
                            [96, 493, 65, 98],
                            [90, 474, 65, 127],
                            [85, 456, 65, 142],
                            [81, 428, 65, 171],
                            [75, 407, 65, 184],
                            [68, 387, 65, 213],
                            [59, 345, 65, 369],
                            [54, 313, 65, 405],
                            [50, 293, 65, 432],
                            [44, 263, 65, 461],
                            [40, 230, 65, 488],
                            [35, 206, 65, 517],
                            [28, 157, 65, 821],
                            [27, 129, 65, 863],
                            [25, 102, 65, 890],
                            [24, 69, 65, 918],
                            [24, 50, 65, 932],
                            [52, 66, 65, 987],
                            [43, 33, 55, 1677],
                            [66, 115, 55, 2001],
                            [69, 131, 55, 2014],
                            [74, 147, 55, 2029],
                            [79, 162, 55, 2056],
                            [82, 179, 55, 2097],
                            [87, 205, 55, 2126],
                            [90, 222, 55, 2168],
                            [102, 238, 55, 2238],
                            [110, 262, 55, 2559],
                            [115, 278, 55, 2613],
                            [124, 295, 55, 2684],
                            [127, 310, 55, 2740],
                            [133, 325, 55, 2783],
                            [141, 340, 55, 2839],
                            [146, 357, 55, 2910],
                            [153, 378, 55, 2979],
                            [160, 407, 55, 3252],
                            [169, 427, 55, 3280],
                            [177, 446, 55, 3336],
                            [184, 461, 55, 3364],
                            [191, 478, 55, 3418],
                            [196, 493, 55, 3447],
                            [201, 508, 55, 3476],
                            [206, 523, 55, 3503],
                            [212, 544, 55, 3532],
                            [221, 561, 55, 3559],
                            [232, 586, 55, 3732],
                            [238, 604, 55, 3763],
                            [248, 622, 55, 3791],
                            [261, 637, 55, 3834],
                            [291, 618, 55, 4043],
                            [283, 594, 55, 4056],
                            [272, 563, 55, 4100],
                            [268, 549, 55, 4114],
                            [263, 532, 55, 4141],
                            [258, 518, 55, 4168],
                            [250, 500, 55, 4197],
                            [243, 485, 55, 4224],
                            [238, 468, 55, 4239],
                            [227, 443, 55, 4266],
                            [214, 408, 55, 4648],
                            [210, 393, 55, 4676],
                            [205, 376, 55, 4703],
                            [202, 360, 55, 4730],
                            [201, 344, 55, 4773],
                            [197, 324, 55, 4814],
                            [193, 305, 55, 4841],
                            [190, 290, 55, 4869],
                            [184, 271, 55, 4912],
                            [182, 256, 55, 4953],
                            [178, 220, 55, 5193],
                            [178, 203, 55, 5220],
                            [176, 185, 55, 5249],
                            [173, 170, 55, 5276],
                            [170, 149, 55, 5304],
                            [166, 116, 55, 5331],
                            [164, 83, 55, 5531],
                            [164, 63, 55, 5567],
                            [165, 41, 55, 5582],
                            [171, 26, 55, 5609],
                            [194, 19, 55, 5638],
                            [196, 35, 55, 5667],
                            [204, 54, 55, 5695],
                            [208, 73, 55, 5737],
                            [209, 88, 55, 5766],
                            [212, 111, 55, 5793],
                            [217, 125, 55, 5837],
                            [221, 144, 55, 5893],
                            [229, 161, 55, 5905],
                            [224, 176, 55, 6164],
                            [234, 189, 55, 6178],
                            [238, 207, 55, 6205],
                            [246, 226, 55, 6234],
                            [250, 248, 55, 6261],
                            [254, 271, 55, 6290],
                            [262, 302, 55, 6526],
                            [263, 317, 55, 6540],
                            [271, 332, 55, 6555],
                            [280, 353, 55, 6582],
                            [287, 371, 55, 6611],
                            [291, 387, 55, 6638],
                            [295, 402, 55, 6654],
                            [299, 419, 55, 6667],
                            [307, 443, 55, 6696],
                            [314, 461, 55, 6709],
                            [316, 481, 55, 6737],
                            [337, 502, 55, 6977],
                            [350, 477, 55, 7033],
                            [351, 462, 55, 7074],
                            [352, 444, 55, 7101],
                            [345, 415, 55, 7130],
                            [340, 400, 55, 7159],
                            [336, 384, 55, 7186],
                            [330, 349, 55, 7334],
                            [324, 333, 55, 7393],
                            [319, 317, 55, 7420],
                            [317, 302, 55, 7448],
                            [312, 287, 55, 7493],
                            [307, 272, 55, 7548],
                            [304, 254, 55, 7604],
                            [300, 240, 55, 7630],
                            [292, 204, 55, 7747],
                            [292, 184, 55, 7777],
                            [290, 168, 55, 7792],
                            [288, 151, 55, 7806],
                            [288, 130, 55, 7834],
                            [300, 112, 55, 7875],
                            [332, 107, 55, 7918],
                            [332, 121, 55, 7958],
                            [333, 135, 55, 7987],
                            [336, 157, 55, 8030],
                            [339, 173, 55, 8058],
                            [341, 190, 55, 8099],
                            [343, 205, 55, 8128],
                            [346, 224, 55, 8155],
                            [351, 238, 55, 8184],
                            [358, 265, 55, 8211],
                            [361, 280, 55, 8238],
                            [364, 298, 55, 8267],
                            [366, 314, 55, 8281],
                            [371, 331, 55, 8296],
                            [375, 345, 55, 8309],
                            [378, 364, 55, 8336],
                            [387, 387, 55, 8462],
                            [389, 404, 55, 8475],
                            [395, 420, 55, 8503],
                            [412, 434, 55, 8574],
                            [423, 416, 55, 8630],
                            [423, 400, 55, 8659],
                            [425, 384, 55, 8672],
                            [422, 363, 55, 8698],
                            [417, 342, 55, 8727],
                            [413, 323, 55, 8740],
                            [408, 303, 55, 8754],
                            [403, 278, 55, 8769],
                            [399, 260, 55, 8783],
                            [394, 232, 55, 8904],
                            [391, 206, 55, 8931],
                            [388, 187, 55, 8960],
                            [390, 171, 55, 8975],
                            [404, 167, 55, 9002],
                            [420, 168, 55, 9031],
                            [423, 185, 55, 9060],
                            [429, 201, 55, 9088],
                            [433, 215, 55, 9116],
                            [433, 229, 55, 9143],
                            [433, 248, 55, 9171],
                            [434, 262, 55, 9185],
                            [439, 303, 55, 9212],
                            [444, 324, 55, 9225],
                            [453, 351, 55, 9240],
                            [462, 369, 55, 9267],
                            [461, 402, 55, 9419],
                            [479, 397, 55, 9475],
                            [482, 377, 55, 9532],
                            [480, 363, 55, 9559],
                            [473, 341, 55, 9600],
                            [468, 319, 55, 9614],
                            [464, 298, 55, 9629],
                            [463, 281, 55, 9642],
                            [461, 259, 55, 9658],
                            [462, 243, 55, 9671],
                            [462, 222, 55, 9686],
                            [486, 208, 55, 9801],
                            [494, 233, 55, 9815],
                            [508, 267, 55, 9829],
                            [512, 284, 55, 9888],
                            [517, 302, 55, 9916],
                            [521, 324, 55, 9944],
                            [531, 343, 55, 1e4]
                        ],
                        image: r(418),
                        color: t.color
                    }
                })
            }), [], !1, null, null, null);
        e.a = component.exports
    }, , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        var n = { components: { brush: r(21).a }, props: { color: String } },
            o = r(1),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("brush", {
                    attrs: {
                        width: "828",
                        height: "340",
                        points: [
                            [14, 314, 0, 0],
                            [14, 314, 55, 43],
                            [14, 300, 55, 87],
                            [17, 279, 55, 131],
                            [23, 250, 55, 218],
                            [24, 235, 55, 258],
                            [30, 210, 55, 306],
                            [43, 181, 55, 355],
                            [48, 165, 55, 399],
                            [61, 139, 55, 486],
                            [69, 121, 55, 530],
                            [82, 97, 55, 618],
                            [88, 83, 55, 662],
                            [102, 64, 55, 749],
                            [121, 69, 55, 929],
                            [118, 101, 55, 973],
                            [116, 120, 55, 1383],
                            [116, 141, 55, 1470],
                            [116, 155, 55, 1558],
                            [115, 171, 55, 1649],
                            [115, 187, 55, 1781],
                            [115, 212, 55, 1912],
                            [115, 227, 55, 1956],
                            [116, 245, 55, 2e3],
                            [118, 268, 55, 2044],
                            [119, 295, 55, 2088],
                            [125, 319, 55, 2175],
                            [141, 321, 55, 2268],
                            [153, 298, 55, 2356],
                            [157, 267, 55, 2399],
                            [160, 247, 55, 2443],
                            [163, 226, 55, 2482],
                            [173, 196, 55, 2531],
                            [182, 168, 55, 2575],
                            [191, 145, 55, 2618],
                            [199, 125, 55, 2662],
                            [205, 110, 55, 2706],
                            [212, 96, 55, 2750],
                            [225, 76, 55, 2799],
                            [245, 44, 55, 2886],
                            [262, 36, 55, 3018],
                            [275, 46, 55, 3105],
                            [264, 77, 55, 3198],
                            [251, 105, 55, 3286],
                            [249, 120, 55, 3324],
                            [248, 136, 55, 3417],
                            [248, 152, 55, 3466],
                            [246, 168, 55, 3504],
                            [245, 192, 55, 3553],
                            [244, 213, 55, 3597],
                            [241, 230, 55, 3641],
                            [239, 246, 55, 3685],
                            [236, 271, 55, 3773],
                            [239, 286, 55, 3860],
                            [261, 279, 55, 3953],
                            [276, 264, 55, 4040],
                            [283, 243, 55, 4085],
                            [287, 224, 55, 4128],
                            [292, 206, 55, 4177],
                            [299, 185, 55, 4259],
                            [304, 170, 55, 4308],
                            [314, 149, 55, 4352],
                            [322, 130, 55, 4396],
                            [331, 112, 55, 4435],
                            [350, 77, 55, 4484],
                            [363, 59, 55, 4531],
                            [384, 45, 55, 4619],
                            [404, 56, 55, 4750],
                            [396, 82, 55, 4838],
                            [382, 103, 55, 4882],
                            [391, 120, 55, 4969],
                            [384, 154, 55, 5057],
                            [382, 186, 55, 5189],
                            [381, 216, 55, 5237],
                            [378, 240, 55, 5320],
                            [372, 265, 55, 5369],
                            [366, 294, 55, 5418],
                            [389, 297, 55, 5505],
                            [410, 274, 55, 5593],
                            [414, 248, 55, 5637],
                            [426, 222, 55, 5681],
                            [433, 190, 55, 5724],
                            [450, 155, 55, 5773],
                            [458, 117, 55, 6494],
                            [466, 80, 55, 6538],
                            [481, 52, 55, 6582],
                            [494, 38, 55, 6631],
                            [511, 56, 55, 6723],
                            [511, 85, 55, 6854],
                            [507, 108, 55, 6898],
                            [506, 130, 55, 6947],
                            [505, 148, 55, 6991],
                            [502, 168, 55, 7034],
                            [500, 187, 55, 7083],
                            [495, 211, 55, 7127],
                            [492, 247, 55, 7166],
                            [491, 288, 55, 7215],
                            [498, 317, 55, 7259],
                            [523, 306, 55, 7400],
                            [534, 263, 55, 7442],
                            [540, 226, 55, 7491],
                            [549, 199, 55, 7579],
                            [560, 178, 55, 7623],
                            [570, 158, 55, 7666],
                            [581, 140, 55, 7710],
                            [592, 120, 55, 7749],
                            [611, 84, 55, 7798],
                            [635, 50, 55, 7846],
                            [649, 32, 55, 7890],
                            [665, 25, 55, 7978],
                            [681, 35, 55, 8154],
                            [669, 64, 55, 8241],
                            [659, 83, 55, 8285],
                            [654, 99, 55, 8329],
                            [645, 129, 55, 8417],
                            [638, 166, 55, 8460],
                            [637, 204, 55, 8504],
                            [637, 228, 55, 8548],
                            [636, 242, 55, 8597],
                            [633, 261, 55, 8641],
                            [630, 286, 55, 8684],
                            [630, 309, 55, 9113],
                            [648, 308, 55, 9196],
                            [656, 276, 55, 9283],
                            [672, 248, 55, 9332],
                            [688, 209, 55, 9381],
                            [699, 174, 55, 9419],
                            [716, 142, 55, 9468],
                            [730, 125, 55, 9512],
                            [743, 107, 55, 9556],
                            [760, 97, 55, 9600],
                            [775, 69, 55, 9649],
                            [800, 45, 55, 1e4]
                        ],
                        image: r(424),
                        color: t.color
                    }
                })
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        r(15), r(14), r(10), r(18), r(11), r(19);
        var n = r(44),
            o = r(45),
            l = ["class", "staticClass", "style", "staticStyle", "attrs"];

        function c(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(object, t).enumerable }))), e.push.apply(e, r)
            }
            return e
        }
        r(17), t.exports = {
            functional: !0,
            render: function(t, e) {
                var r = e._c,
                    data = (e._v, e.data),
                    d = e.children,
                    m = void 0 === d ? [] : d,
                    f = data.class,
                    h = data.staticClass,
                    style = data.style,
                    v = data.staticStyle,
                    x = data.attrs,
                    _ = void 0 === x ? {} : x,
                    w = o(data, l);
                return r("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? c(Object(source), !0).forEach((function(e) { n(t, e, source[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e)) }))
                    }
                    return t
                }({ class: [f, h], style: [style, v], attrs: Object.assign({ width: "9px", height: "14px", viewBox: "0 0 9 14", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, _) }, w), m.concat([r("g", { attrs: { id: "SMB-Desktop", "stroke-width": "1", fill: "none", stroke: "#000", "fill-rule": "evenodd", "stroke-linejoin": "round" } }, [r("g", { attrs: { id: "04_SMB_How-Net-1", transform: "translate(-972.000000, -793.000000)", "stroke-width": "2" } }, [r("g", { attrs: { id: "Arrows", transform: "translate(839.707031, 794.000000)" } }, [r("polyline", { attrs: { id: "Path-2", points: "133 0 139.558594 6.32324219 133 12.2607422" } })])])])]))
            }
        }
    }, function(t, e, r) {
        r(15), r(14), r(10), r(18), r(11), r(19);
        var n = r(44),
            o = r(45),
            l = ["class", "staticClass", "style", "staticStyle", "attrs"];

        function c(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(object, t).enumerable }))), e.push.apply(e, r)
            }
            return e
        }
        r(17), t.exports = {
            functional: !0,
            render: function(t, e) {
                var r = e._c,
                    data = (e._v, e.data),
                    d = e.children,
                    m = void 0 === d ? [] : d,
                    f = data.class,
                    h = data.staticClass,
                    style = data.style,
                    v = data.staticStyle,
                    x = data.attrs,
                    _ = void 0 === x ? {} : x,
                    w = o(data, l);
                return r("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? c(Object(source), !0).forEach((function(e) { n(t, e, source[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e)) }))
                    }
                    return t
                }({ class: [f, h], style: [style, v], attrs: Object.assign({ width: "9px", height: "14px", viewBox: "0 0 9 14", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, _) }, w), m.concat([r("g", { attrs: { id: "SMB-Desktop", fill: "none", stroke: "#000", "fill-rule": "evenodd", "stroke-linejoin": "round" } }, [r("g", { attrs: { id: "04_SMB_How-Net-1", transform: "translate(-838.000000, -793.000000)", "stroke-width": "2" } }, [r("g", { attrs: { id: "Arrows", transform: "translate(839.707031, 794.000000)" } }, [r("polyline", { attrs: { id: "Path-2-Copy", transform: "translate(3.279297, 6.130371) scale(-1, 1) translate(-3.279297, -6.130371) ", points: "7.90478794e-14 0 6.55859375 6.32324219 7.90478794e-14 12.2607422" } })])])])]))
            }
        }
    }, function(t, e, r) {
        "use strict";
        var n = { components: { brush: r(21).a }, props: { color: String } },
            o = r(1),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("brush", {
                    attrs: {
                        width: "586",
                        height: "169",
                        points: [
                            [31, 133, 0, 0],
                            [31, 133, 70, 80],
                            [49, 124, 70, 160],
                            [68, 109, 70, 290],
                            [86, 92, 70, 460],
                            [103, 73, 70, 710],
                            [124, 54, 70, 860],
                            [138, 36, 70, 1080],
                            [133, 58, 70, 1430],
                            [127, 78, 70, 1490],
                            [123, 96, 70, 1610],
                            [120, 114, 70, 1740],
                            [127, 131, 70, 2059],
                            [144, 142, 70, 2330],
                            [162, 133, 70, 2520],
                            [180, 124, 70, 2710],
                            [198, 111, 70, 2880],
                            [216, 94, 70, 3130],
                            [236, 77, 70, 3290],
                            [253, 59, 70, 3540],
                            [249, 86, 70, 3830],
                            [249, 104, 70, 3950],
                            [253, 122, 70, 4300],
                            [271, 129, 70, 4680],
                            [288, 130, 70, 5080],
                            [306, 114, 70, 5250],
                            [325, 103, 70, 5430],
                            [342, 95, 70, 5570],
                            [361, 84, 70, 5730],
                            [380, 69, 70, 5880],
                            [392, 52, 70, 6059],
                            [397, 34, 70, 6559],
                            [397, 54, 70, 6950],
                            [397, 73, 70, 7010],
                            [399, 92, 70, 7100],
                            [399, 112, 70, 7200],
                            [419, 128, 70, 7510],
                            [438, 135, 70, 7740],
                            [457, 137, 70, 7820],
                            [474, 134, 70, 7950],
                            [493, 121, 70, 8149],
                            [510, 110, 70, 8340],
                            [528, 99, 70, 9020],
                            [546, 82, 70, 9290],
                            [558, 64, 70, 9490],
                            [568, 46, 70, 1e4]
                        ],
                        image: r(429),
                        color: t.color
                    }
                })
            }), [], !1, null, null, null);
        e.a = component.exports
    }, , , , , , , , , , function(t, e, r) {
        r(15), r(14), r(10), r(18), r(11), r(19);
        var n = r(44),
            o = r(45),
            l = ["class", "staticClass", "style", "staticStyle", "attrs"];

        function c(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(object, t).enumerable }))), e.push.apply(e, r)
            }
            return e
        }
        r(17), t.exports = {
            functional: !0,
            render: function(t, e) {
                var r = e._c,
                    d = e._v,
                    data = e.data,
                    m = e.children,
                    f = void 0 === m ? [] : m,
                    h = data.class,
                    v = data.staticClass,
                    style = data.style,
                    x = data.staticStyle,
                    _ = data.attrs,
                    w = void 0 === _ ? {} : _,
                    k = o(data, l);
                return r("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? c(Object(source), !0).forEach((function(e) { n(t, e, source[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e)) }))
                    }
                    return t
                }({ class: [h, v], style: [style, x], attrs: Object.assign({ width: "22px", height: "14px", viewBox: "0 0 22 14", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, w) }, k), f.concat([r("title", [d("Arrow")]), r("g", { attrs: { id: "Design-New", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" } }, [r("g", { attrs: { id: "Homepage-b2", transform: "translate(-994.000000, -4050.000000)", fill: "#000000", "fill-rule": "nonzero", stroke: "#000000" } }, [r("g", { attrs: { id: "Path", transform: "translate(995.000000, 4051.000000)" } }, [r("path", { attrs: { d: "M13.7920862,0 L13.1357259,0.615288778 L18.419,5.567 L0,5.56723325 L0,6.43628193 L18.418,6.436 L13.1357259,11.3881819 L13.7920862,12 L19.8644157,6.30764439 C20.0451948,6.13817745 20.0451948,5.86268577 19.8644157,5.69235561 L13.7920862,0 Z" } })])])])]))
            }
        }
    }, , , , , , , function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() { return n })), r.d(e, "c", (function() { return o })), r.d(e, "a", (function() { return l }));
        r(154), r(28), r(81), r(69), r(67), r(47), r(30), r(155), r(87);
        var n = function(t) {
                if (!t) return t;
                var a = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",
                    p = new RegExp(a.split("").join("|"), "g");
                return t.toString().toLowerCase().replace(/\s+/g, "-").replace(p, (function(t) { return "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(a.indexOf(t)) })).replace(/&/g, "-and-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            o = function(path) { return path.replace(/\/$/, "") },
            l = function(path) { return path && path.endsWith("/") ? path : "".concat(path, "/") }
    }, , , , , function(t, e, r) {
        "use strict";
        var n = { components: { brush: r(21).a }, props: { color: String } },
            o = r(1),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("brush", {
                    attrs: {
                        width: "1071",
                        height: "634",
                        points: [
                            [108, 463, 0, 0],
                            [108, 463, 52, 29],
                            [93, 460, 52, 58],
                            [77, 450, 52, 99],
                            [63, 436, 52, 154],
                            [58, 423, 52, 212],
                            [57, 405, 52, 270],
                            [57, 391, 52, 312],
                            [62, 378, 52, 408],
                            [66, 363, 52, 458],
                            [73, 345, 52, 508],
                            [80, 327, 52, 558],
                            [89, 312, 52, 633],
                            [104, 300, 52, 700],
                            [112, 287, 52, 758],
                            [124, 273, 52, 837],
                            [138, 260, 52, 912],
                            [152, 246, 52, 1021],
                            [162, 232, 52, 1117],
                            [176, 220, 52, 1200],
                            [191, 208, 52, 1275],
                            [205, 201, 52, 1354],
                            [219, 190, 52, 1413],
                            [233, 185, 52, 1517],
                            [247, 178, 52, 1571],
                            [262, 171, 52, 1638],
                            [276, 163, 52, 1700],
                            [291, 156, 52, 1763],
                            [305, 149, 52, 1817],
                            [319, 143, 52, 1854],
                            [334, 139, 52, 1888],
                            [348, 134, 52, 1938],
                            [363, 126, 52, 2025],
                            [376, 122, 52, 2050],
                            [394, 121, 52, 2092],
                            [409, 119, 52, 2121],
                            [426, 122, 52, 2159],
                            [442, 124, 52, 2192],
                            [457, 127, 52, 2225],
                            [471, 138, 52, 2263],
                            [485, 148, 52, 2313],
                            [499, 156, 52, 2359],
                            [510, 163, 42, 2392],
                            [525, 185, 31, 2476],
                            [501, 157, 52, 2501],
                            [541, 225, 52, 2526],
                            [540, 216, 45, 2555],
                            [548, 236, 52, 2638],
                            [546, 250, 52, 2692],
                            [544, 265, 52, 2755],
                            [542, 279, 52, 2813],
                            [539, 293, 52, 2884],
                            [537, 308, 52, 2934],
                            [531, 325, 52, 2980],
                            [526, 339, 52, 3021],
                            [520, 354, 52, 3063],
                            [516, 368, 52, 3121],
                            [510, 383, 52, 3167],
                            [503, 398, 52, 3205],
                            [493, 412, 52, 3255],
                            [479, 425, 52, 3313],
                            [466, 439, 52, 3380],
                            [454, 453, 52, 3438],
                            [440, 462, 52, 3476],
                            [427, 476, 52, 3534],
                            [413, 486, 52, 3647],
                            [399, 492, 52, 3743],
                            [385, 500, 52, 3826],
                            [371, 509, 52, 3918],
                            [357, 520, 52, 3993],
                            [343, 526, 52, 4064],
                            [328, 532, 52, 4122],
                            [314, 537, 52, 4160],
                            [299, 537, 52, 4197],
                            [285, 540, 52, 4235],
                            [272, 542, 52, 4272],
                            [258, 545, 52, 4310],
                            [243, 536, 52, 4397],
                            [232, 521, 52, 4447],
                            [227, 505, 52, 4505],
                            [228, 491, 52, 4555],
                            [230, 477, 52, 4618],
                            [236, 462, 52, 4680],
                            [242, 447, 52, 4726],
                            [250, 432, 52, 4781],
                            [260, 417, 52, 4847],
                            [266, 400, 52, 4885],
                            [276, 386, 52, 4931],
                            [285, 372, 52, 4985],
                            [298, 358, 52, 5027],
                            [311, 342, 52, 5077],
                            [323, 327, 52, 5143],
                            [337, 312, 52, 5193],
                            [354, 298, 52, 5273],
                            [370, 288, 52, 5323],
                            [387, 281, 52, 5360],
                            [402, 272, 52, 5394],
                            [416, 260, 52, 5423],
                            [431, 248, 52, 5494],
                            [446, 238, 52, 5539],
                            [460, 230, 52, 5585],
                            [476, 217, 52, 5639],
                            [490, 207, 52, 5698],
                            [495, 205, 52, 5731],
                            [484, 206, 52, 5785],
                            [493, 203, 50, 5823],
                            [559, 169, 52, 5889],
                            [564, 180, 52, 5927],
                            [578, 174, 52, 5985],
                            [593, 168, 52, 6048],
                            [608, 164, 52, 6102],
                            [622, 162, 52, 6140],
                            [636, 161, 52, 6194],
                            [650, 158, 52, 6252],
                            [666, 155, 52, 6290],
                            [680, 153, 52, 6331],
                            [695, 153, 52, 6373],
                            [709, 153, 52, 6398],
                            [722, 153, 52, 6440],
                            [736, 154, 52, 6486],
                            [751, 161, 52, 6523],
                            [765, 172, 52, 6569],
                            [781, 185, 52, 6632],
                            [795, 197, 52, 6686],
                            [806, 210, 52, 6748],
                            [815, 224, 52, 6778],
                            [811, 236, 38, 6823],
                            [823, 242, 32, 6869],
                            [830, 264, 33, 6911],
                            [833, 281, 34, 6948],
                            [841, 305, 43, 6990],
                            [833, 328, 52, 7027],
                            [830, 325, 52, 7077],
                            [832, 341, 52, 7144],
                            [833, 355, 52, 7177],
                            [833, 370, 52, 7240],
                            [825, 384, 52, 7302],
                            [815, 398, 52, 7365],
                            [805, 415, 52, 7432],
                            [796, 429, 52, 7482],
                            [786, 443, 52, 7565],
                            [775, 457, 52, 7653],
                            [762, 472, 52, 7778],
                            [745, 481, 52, 7832],
                            [730, 492, 52, 7882],
                            [714, 501, 52, 7928],
                            [700, 506, 52, 7982],
                            [686, 502, 52, 8041],
                            [674, 487, 52, 8078],
                            [668, 473, 52, 8111],
                            [667, 459, 52, 8141],
                            [667, 445, 52, 8178],
                            [673, 428, 52, 8241],
                            [686, 412, 52, 8291],
                            [699, 395, 52, 8336],
                            [712, 381, 52, 8366],
                            [723, 367, 52, 8403],
                            [736, 351, 52, 8449],
                            [750, 338, 52, 8507],
                            [765, 325, 52, 8566],
                            [775, 311, 52, 8624],
                            [787, 297, 52, 8703],
                            [800, 283, 52, 8807],
                            [783, 306, 52, 8882],
                            [790, 283, 52, 8941],
                            [867, 246, 52, 8991],
                            [860, 248, 52, 9137],
                            [873, 244, 52, 9191],
                            [887, 236, 52, 9249],
                            [901, 230, 52, 9312],
                            [916, 222, 52, 9420],
                            [930, 218, 52, 9508],
                            [945, 210, 52, 9583],
                            [959, 207, 52, 9637],
                            [973, 205, 52, 9720],
                            [987, 204, 52, 9754],
                            [1001, 202, 52, 9787],
                            [1015, 202, 52, 1e4]
                        ],
                        image: r(420),
                        color: t.color
                    }
                })
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var n = { props: ["content"] },
            o = r(1),
            l = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return t.content ? r("rich-text-renderer", { attrs: { document: t.content } }) : t._e()
            }), [], !1, null, null, null).exports;
        e.a = l
    }, function(t, e, r) {
        "use strict";
        var n = [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("figure", [e("img", { staticClass: "w-40 md:w-64", attrs: { src: r(371), alt: "decorative brush" } })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "text-lg mt-6 max-w-lg mx-auto" }, [t._v("\n    Ok, let's see if we can help you find the right page.\n    "), r("br", { staticClass: "hidden md:block" }), t._v("Visit our\n    "), r("a", { staticClass: "link-underline", attrs: { href: "https://help.fundbox.com/hc/en-us" } }, [t._v("\n      support center\n    ")]), t._v("\n    or\n    "), r("a", { staticClass: "link-underline", attrs: { href: "/contact/" } }, [t._v("\n      contact us\n    ")]), t._v("\n    for help to get started.\n  ")])
            }],
            o = {
                props: ["error"],
                mounted: function() { this.trackError() },
                computed: { message: function() { return 404 === this.error.statusCode ? "Sorry, the page you're looking for isn't here" : this.error.message } },
                methods: {
                    trackError: function() {
                        var t = this.error.statusCode || 404;
                        this.$trackPage({ path: this.$route.path, status: t, name: t }), this.$gtm.push({ event: t })
                    }
                }
            },
            l = r(1),
            component = Object(l.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("main", { staticClass: "text-center flex flex-col justify-center px-3 py-10" }, [r("h1", { staticClass: "text-blue mb-4 text-4xl md:text-6xl font-semibold", domProps: { textContent: t._s(t.error.statusCode) } }), t._v(" "), t._m(0), t._v(" "), r("h2", { staticClass: "font-black text-xl md:text-3xl pt-6 md:mt-10", domProps: { textContent: t._s(t.message) } }), t._v(" "), r("div", { staticClass: "mt-6 text-lg hidden md:block" }, [t._v("\n    Let's try this again\n  ")]), t._v(" "), r("div", { staticClass: "mt-6" }, [r("a", { staticClass: "btn btn-md max-w-sm mx-auto", attrs: { href: "/" }, domProps: { textContent: t._s("Go To Homepage") } })]), t._v(" "), t._m(1)])
            }), n, !1, null, null, null);
        e.a = component.exports
    }, , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        var n = { components: { brush: r(21).a }, props: { color: String } },
            o = r(1),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("brush", {
                    attrs: {
                        width: "710",
                        height: "282",
                        points: [
                            [13, 191, 0, 0],
                            [13, 191, 45, 90],
                            [27, 190, 45, 180],
                            [41, 189, 45, 270],
                            [58, 187, 45, 360],
                            [74, 183, 45, 451],
                            [88, 178, 45, 541],
                            [105, 175, 45, 627],
                            [119, 172, 45, 714],
                            [132, 168, 35, 874],
                            [152, 166, 32, 965],
                            [167, 161, 30, 1051],
                            [187, 150, 45, 1192],
                            [210, 142, 45, 1282],
                            [227, 134, 45, 1373],
                            [246, 122, 45, 1467],
                            [264, 109, 45, 1557],
                            [276, 95, 45, 1639],
                            [288, 83, 45, 1741],
                            [299, 63, 45, 1832],
                            [300, 45, 45, 1922],
                            [295, 30, 45, 2012],
                            [282, 29, 45, 2102],
                            [270, 29, 45, 2145],
                            [253, 31, 45, 2287],
                            [232, 41, 45, 2377],
                            [214, 49, 45, 2506],
                            [202, 57, 45, 2600],
                            [188, 68, 45, 2738],
                            [173, 83, 45, 2867],
                            [166, 95, 45, 2957],
                            [163, 110, 45, 3052],
                            [158, 125, 45, 3197],
                            [156, 140, 45, 3287],
                            [154, 146, 31, 3377],
                            [176, 192, 45, 3464],
                            [164, 198, 45, 3562],
                            [182, 199, 45, 3652],
                            [198, 206, 45, 3742],
                            [213, 213, 45, 3832],
                            [227, 216, 45, 3923],
                            [239, 217, 45, 4013],
                            [252, 220, 45, 4103],
                            [266, 221, 45, 4240],
                            [284, 222, 45, 4335],
                            [299, 222, 45, 4425],
                            [312, 222, 45, 4468],
                            [334, 223, 45, 4558],
                            [346, 225, 45, 4605],
                            [367, 225, 45, 4696],
                            [386, 222, 45, 4786],
                            [403, 216, 45, 4829],
                            [423, 217, 45, 4986],
                            [435, 215, 45, 5033],
                            [458, 212, 45, 5123],
                            [474, 210, 45, 5210],
                            [494, 205, 45, 5304],
                            [512, 200, 45, 5394],
                            [528, 196, 45, 5531],
                            [543, 193, 45, 5621],
                            [555, 187, 45, 5755],
                            [570, 180, 45, 5884],
                            [584, 178, 45, 5986],
                            [596, 174, 45, 6124],
                            [609, 171, 45, 6206],
                            [625, 164, 45, 6398],
                            [639, 159, 45, 6708],
                            [656, 155, 45, 6802],
                            [668, 151, 45, 6889],
                            [685, 144, 45, 7026],
                            [657, 133, 45, 7246],
                            [634, 129, 45, 7336],
                            [613, 124, 45, 7434],
                            [594, 122, 45, 7524],
                            [581, 117, 45, 7567],
                            [569, 116, 45, 7614],
                            [552, 114, 45, 7658],
                            [533, 112, 45, 7705],
                            [516, 110, 45, 7795],
                            [662, 174, 45, 9050],
                            [636, 188, 45, 9093],
                            [624, 195, 45, 9184],
                            [602, 203, 45, 9274],
                            [590, 208, 45, 9325],
                            [573, 215, 45, 9415],
                            [550, 226, 45, 9505],
                            [531, 237, 45, 9595],
                            [519, 243, 45, 9694],
                            [504, 252, 45, 1e4]
                        ],
                        image: r(433),
                        color: t.color
                    }
                })
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e) { t.exports = { sm: "480px", md: "768px", lg: "1024px", xl: "1440px" } }, function(t, e, r) {
        "use strict";
        var n = r(4),
            o = (r(43), r(167)),
            l = r.n(o);
        window.wistiaDisableMux = !0;
        var c = {
                data: function() { return { playing: !1 } },
                props: { videoId: String },
                methods: {
                    initVideo: function() {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, l.a.load("https://fast.wistia.com/embed/medias/".concat(t.videoId, ".jsonp"));
                                    case 2:
                                        return e.next = 4, l.a.load("https://fast.wistia.com/assets/external/E-v1.js");
                                    case 4:
                                        window.wistiaDisableMux = !0, window._wq = window._wq || [], _wq.push({ id: t.videoId, onReady: function(video) { video.bind("play", (function() { t.playing = !0 })), video.bind("pause", (function() { t.playing = !1 })), video.bind("end", (function() { t.playing = !1 })) } });
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                },
                mounted: function() { this.$refs.image.addEventListener("load", this.initVideo, !0) }
            },
            d = r(1),
            component = Object(d.a)(c, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", [r("div", { staticClass: "wistia_responsive_padding", staticStyle: { padding: "56.25% 0 0 0", position: "relative" } }, [r("div", { staticClass: "wistia_responsive_wrapper", staticStyle: { height: "100%", left: "0", position: "absolute", top: "0", width: "100%" } }, [r("div", { staticClass: "wistia_embed videoFoam=true", class: "wistia_async_" + t.videoId, staticStyle: { height: "100%", position: "relative", width: "100%" } }, [r("div", { staticClass: "wistia_swatch", staticStyle: { height: "100%", left: "0", opacity: "0", overflow: "hidden", position: "absolute", top: "0", transition: "opacity 200ms", width: "100%" } }, [r("img", { ref: "image", staticClass: "lazyload", staticStyle: { filter: "blur(5px)", height: "100%", "object-fit": "contain", width: "100%" }, attrs: { "data-src": "https://fast.wistia.com/embed/medias/" + t.videoId + "/swatch", onload: "this.parentNode.style.opacity=1;", alt: "", "aria-hidden": "true", id: "img-" + this.videoId } })])])])])])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() { return n })), r.d(e, "b", (function() { return o }));
        var n = "We build financial technology to help more business owners succeed. Our goal is to revolutionize the business economy by evolving how funding flows.",
            o = "https://fundbox.com/img/social-cover.jpg"
    }, , , function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() { return f }));
        var n = r(26),
            o = (r(28), r(67), r(69), r(22), r(37), r(46), r(47), r(155), r(87), r(10), r(0)),
            l = r(125),
            c = r.n(l),
            d = function(t, e) { var r, n = { day: "numeric", year: "numeric", month: e ? "short" : "long", timeZone: "Europe/London" }; "number" == typeof t && (r = t < 1e12 ? 1e3 * t : t), "string" == typeof t && (r = t.split(" ")[0]); var o = new Date(r); return r ? o.toLocaleString("en-US", n) : "" },
            m = function(image, param) {
                var t = param.split("@"),
                    e = Object(n.a)(t, 2),
                    r = e[0],
                    o = e[1];
                if (o && (r = r.split("x").map((function(t) { return parseInt(t) * parseFloat(o) })).join("x")), void 0 !== image) { var l = image.includes("https:") ? "https://a.storyblok.com" : "//a.storyblok.com"; return "//img2.storyblok.com/" + r + image.replace(l, "") }
                return null
            },
            f = function(path) { return path && path.endsWith("/") ? path : "".concat(path, "/") };
        o.a.prototype.$addTrailingSlash = f, o.a.prototype.$findPageById = function(t, e) { return e[c()(e, { uuid: t })] }, o.a.prototype.$isValidPhone = function(t) { return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(t) }, o.a.prototype.$isValidEmail = function(t) { return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t) }, o.a.prototype.$getShade = function(t) { return t ? "yellow" === t ? "orange" : "orange" === t ? "yellow" : t.startsWith("light") ? t.replace("light", "") : "light" + t : null }, o.a.prototype.$date = d, o.a.prototype.$resize = m, o.a.prototype.$nl2br = function(t) { if (null == t) return ""; return (t + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1<br />$2") }, o.a.filter("resize", m), o.a.filter("date", d)
    }, , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        var n = { components: { brush: r(21).a }, props: { color: String } },
            o = r(1),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("brush", {
                    attrs: {
                        width: "830",
                        height: "386",
                        points: [
                            [20, 184, 0, 0],
                            [20, 184, 60, 101],
                            [32, 200, 60, 203],
                            [49, 212, 60, 274],
                            [70, 215, 60, 414],
                            [92, 221, 60, 486],
                            [108, 222, 60, 625],
                            [131, 222, 60, 697],
                            [149, 227, 60, 915],
                            [165, 232, 60, 983],
                            [183, 232, 60, 1160],
                            [202, 234, 60, 1228],
                            [221, 237, 60, 1333],
                            [244, 242, 60, 1405],
                            [262, 241, 60, 1476],
                            [281, 236, 60, 1544],
                            [302, 237, 60, 1653],
                            [327, 239, 60, 1721],
                            [345, 239, 60, 1792],
                            [361, 237, 60, 1826],
                            [390, 234, 60, 1898],
                            [451, 227, 60, 2666],
                            [473, 223, 60, 2805],
                            [493, 220, 60, 2869],
                            [513, 217, 60, 2942],
                            [542, 210, 60, 3013],
                            [558, 204, 60, 3081],
                            [585, 195, 60, 3149],
                            [602, 188, 60, 3183],
                            [619, 181, 60, 3217],
                            [640, 168, 60, 3288],
                            [656, 160, 60, 3322],
                            [676, 141, 60, 3424],
                            [692, 119, 60, 3495],
                            [694, 84, 60, 3819],
                            [688, 66, 60, 3891],
                            [682, 50, 60, 3958],
                            [653, 30, 60, 4064],
                            [629, 26, 60, 4131],
                            [610, 33, 60, 4308],
                            [593, 32, 60, 4452],
                            [576, 43, 60, 4658],
                            [557, 37, 60, 4869],
                            [546, 61, 60, 5142],
                            [529, 62, 60, 5271],
                            [510, 74, 60, 5511],
                            [480, 92, 60, 5903],
                            [493, 110, 60, 6069],
                            [458, 149, 60, 6136],
                            [454, 123, 60, 6245],
                            [439, 151, 45, 7209],
                            [435, 163, 45, 7382],
                            [432, 186, 45, 7486],
                            [429, 199, 45, 7520],
                            [429, 212, 45, 7558],
                            [429, 226, 45, 7591],
                            [429, 248, 45, 7660],
                            [433, 271, 45, 7693],
                            [434, 284, 45, 7731],
                            [449, 304, 45, 8111],
                            [464, 317, 45, 8183],
                            [478, 331, 45, 8254],
                            [490, 342, 45, 8322],
                            [507, 349, 45, 8394],
                            [522, 353, 45, 8462],
                            [537, 360, 45, 8533],
                            [548, 366, 45, 8642],
                            [560, 364, 45, 8676],
                            [578, 364, 45, 8744],
                            [598, 362, 45, 8811],
                            [609, 364, 45, 8955],
                            [630, 363, 45, 8988],
                            [642, 361, 45, 9056],
                            [655, 361, 45, 9090],
                            [678, 356, 45, 9128],
                            [696, 353, 45, 9199],
                            [708, 346, 45, 9233],
                            [725, 336, 45, 9301],
                            [746, 332, 45, 9369],
                            [761, 327, 45, 9440],
                            [775, 312, 45, 9789],
                            [790, 300, 45, 9856],
                            [801, 286, 45, 9928],
                            [813, 273, 45, 1e4]
                        ],
                        image: r(432),
                        color: t.color
                    }
                })
            }), [], !1, null, null, null);
        e.a = component.exports
    }, , , , , function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() { return c })), r.d(e, "c", (function() { return d }));
        r(15), r(14), r(18), r(11), r(19);
        var n = r(5);
        r(181), r(22), r(10), r(29), r(154), r(28), r(81), r(47);

        function o(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(object, t).enumerable }))), e.push.apply(e, r)
            }
            return e
        }

        function l(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? o(Object(source), !0).forEach((function(e) { Object(n.a)(t, e, source[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : o(Object(source)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e)) }))
            }
            return t
        }
        var c = function(t) { var e = t.shmigleColor; return function(p) { return { date: p.date, link: p.link, tags: p.tags, title: p.title, type: p.category, excerpt: p.excerpt, shmigle: p.shmigle, color: e, category: p.category, image: p.image.filename, objectID: p.id || p._uid, isBw: !p.shmiggle_is_embedded, _editable: p._editable } } },
            d = function(t, e, r) {
                var n, o, c = function(path) { return path ? { name: path.title, full_slug: path.slug } : null },
                    d = [],
                    m = null;
                if (t._tags) {
                    d = t._tags.map((function(t) { return e["/resources/tags/" + t] })).filter(Boolean).map(c);
                    var f = "blog-posts" === t.type ? "/blog" : "/resources/" + t.type;
                    m = c(e[f])
                } else t.tags && (d = t.tags.map((function(t) { return r(t, e) })).filter(Boolean).map(c), m = c(r(t.category, e)));
                var link = { cached_url: t.link.cached_url || t.link },
                    h = (null === (n = t.meta) || void 0 === n ? void 0 : n.stripe_selected) || t.shmigle,
                    v = (null === (o = t.meta) || void 0 === o ? void 0 : o.category_color) || t.color,
                    x = t.meta ? "yes" !== t.meta.bw_feature : t.isBw;
                return l(l({}, t), {}, { category: m, shmigle: h, color: v, link: link, tags: d, isBw: x })
            },
            m = { props: { posts: Array, list: Boolean, query: String, dense: Boolean, grouped: Boolean, noShmiggles: Boolean }, computed: { populatedPosts: function() { var t = this; return this.posts ? this.posts.map((function(p) { return d(p, t.$store.state.pathMap, t.$findPageById) })) : [] }, group: function() { var t, e; return this.grouped ? (null === (t = this.populatedPosts[0]) || void 0 === t || null === (e = t.category) || void 0 === e ? void 0 : e.name) || "Other" : null } }, methods: { highlightQuery: function(text) { if (!this.query || !text) return text; var t = new RegExp(this.query, "ig"); return text.replace(t, "<em>".concat(this.query, "</em>")) } } },
            f = (r(442), r(1)),
            component = Object(f.a)(m, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return t.list ? r("section", { staticClass: "resources-grid resources-grid--list" }, [t.grouped ? r("h3", { staticClass: "col-span-1 md:col-span-2 block mt-8 -mb-3 text-2xl md:text-3xl" }, [t._v(t._s(t.group))]) : t._e(), t._v(" "), t._l(t.populatedPosts, (function(e) { return r("div", { key: e.objectID, staticClass: "z-10" }, [r("div", { staticClass: "flex text-sm pb-1" }, [r("div", { staticClass: "pr-3 flex-1 font-medium" }, [e.category ? r("f-link", { staticClass: "font-semibold capitalize hover:underline", attrs: { to: { cached_url: e.category.full_slug } } }, [r("span", { domProps: { innerHTML: t._s(t.highlightQuery(e.category.name)) } })]) : t._e()], 1), t._v(" "), r("div", { staticClass: "font-light hidden md:flex" }, [t._l(e.tags, (function(e, i) { return [i ? r("span", { key: e.full_slug + "_", staticClass: "opacity-50 mx-2 font-bold" }, [t._v("•")]) : t._e(), t._v(" "), r("f-link", { key: e.full_slug, staticClass: "hover:underline", attrs: { to: { cached_url: e.full_slug } } }, [r("span", { domProps: { innerHTML: t._s(t.highlightQuery(e.name)) } })])] }))], 2)]), t._v(" "), r("f-link", { staticClass: "flex", attrs: { to: e.link } }, [r("div", { staticClass: "h-24 w-24 mr-4 bg-gray-100" }, [r("f-shmigled-image", { attrs: { gray: e.isBw, color: e.color, shmigle: e.shmigle, "is-square": "" } }, [r("f-image", { staticClass: "object-cover w-full h-full", attrs: { alt: e.alt || e.title, src: e.image, width: 320 } })], 1)], 1), t._v(" "), r("div", { staticClass: "flex-1 h-24 overflow-hidden" }, [r("h3", { staticClass: "text-base md:text-lg font-bold mb-2 md:mb-0", domProps: { innerHTML: t._s(e.title) } }), t._v(" "), r("p", { staticClass: "text-sm md:text-base pt-1", domProps: { innerHTML: t._s(e.excerpt) } })])])], 1) }))], 2) : r("section", { staticClass: "resources-grid", class: { "resources-grid--dense": t.dense } }, t._l(t.populatedPosts, (function(e) { return r("div", { directives: [{ name: "editable", rawName: "v-editable", value: e, expression: "post" }], key: e.objectID, staticClass: "z-10 md:last:hidden lg:last:flex flex flex-col" }, [r("div", { staticClass: "pb-3" }, [e.category ? r("f-link", { staticClass: "font-semibold capitalize hover:underline", attrs: { to: { cached_url: e.category.full_slug }, label: e.category.name } }) : t._e()], 1), t._v(" "), r("f-link", { staticClass: "resources-grid-image", attrs: { to: e.link } }, [r("f-shmigled-image", { attrs: { shmigle: t.noShmiggles ? null : e.shmigle, color: e.color, gray: e.isBw } }, [r("f-image", { attrs: { src: e.image, alt: e.title, width: 320 } })], 1)], 1), t._v(" "), r("h3", { staticClass: "text-lg xl:text-xl font-bold mb-3 hover:opacity-75 flex-1" }, [r("f-link", { attrs: { to: e.link } }, [r("span", { domProps: { innerHTML: t._s(e.title) } })])], 1), t._v(" "), r("div", { staticClass: "text-sm font-light h-5 overflow-hidden" }, t._l(e.tags, (function(e, i) { return r("div", { key: e.full_slug, staticClass: "whitespace-nowrap inline-block" }, [i ? r("span", { staticClass: "opacity-50 mx-2 font-bold" }, [t._v("•")]) : t._e(), t._v(" "), r("f-link", { staticClass: "hover:underline", attrs: { label: e.name, to: { cached_url: e.full_slug } } })], 1) })), 0)], 1) })), 0)
            }), [], !1, null, null, null);
        e.a = component.exports
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        var n = r(293);
        e.a = function(t) {
            var e = t.store;
            Object(n.a)({ key: "fundbox-v1", paths: ["notificationClosed", "ghId"] })(e)
        }
    }, function(t, e, r) {
        "use strict";
        e.a = function(t) {
            var e = t.route.query.gh_src;
            if (!e) return null;
            t.store.commit("SET_GREENHOUSE_ID", e)
        }
    }, function(t, e, r) {
        "use strict";
        r(28), r(67), r(29), r(58);
        var n = r(72),
            o = r.n(n),
            l = r(101);
        o.a.init("b08bbda1927854f3c12342c059269a84", { debug: undefined }), o.a.register_once({ visitor_id: function(t) { var e = ("; " + document.cookie).split("; " + t + "="); if (2 == e.length) return e.pop().split(";").shift() }("fbxvid") }), e.a = function(t, e) {
            e("mp", o.a), e("trackPage", (function(t) {
                var path = t.path,
                    e = t.name,
                    r = t.status,
                    n = void 0 === r ? 200 : r;
                return o.a.track("Page View", { "Page Url": Object(l.a)(path), "Status Code": n, "Page Name": e })
            })), e("trackClick", (function(t) {
                var title = t.title,
                    e = t.tag,
                    r = t.href,
                    n = t.redirect;
                if (window.ga) {
                    var l = ga.getAll()[0].get("clientId");
                    ga("create", "UA-44823039-13", { clientId: l }), ga("send", "event", { eventCategory: "Link click", eventAction: "click", eventLabel: r || title, transport: "beacon" })
                }
                o.a.track("Click", { "Tag Name": e, Title: title, Href: r }, (function() { n && setTimeout((function() { window.location = r }), 10) }))
            })), e("trackForm", (function(data) { o.a.track("Submit Form", { Page: data.page, "Form Class": data.class, "Form Handler": data.form }) }))
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(0),
            o = r(3);
        n.a.use(o.a)
    }, function(t, e, r) {
        "use strict";
        r(28), r(224), r(37), r(46), r(47), r(67), r(69), r(22);
        var n = r(295),
            o = r.n(n);

        function l(t) { if (/a.storyblok.com/.test(t)) { var e = t.includes("https:") ? "https://a.storyblok.com" : "//a.storyblok.com"; return "//img2.storyblok.com/filters:format(webp)" + t.replace(e, "") } if (/filters/.test(t)) { var r = t.split("/filters:"); return r[0] + "/filters:format(webp):" + r[1] } if (/img2.storyblok.com/.test(t)) { var n = t.split("/f/"); return n[0] + "/filters:format(webp)/f/" + n[1] } return t }
        var c = function() { var t = navigator.userAgent.match(/(Edge|Firefox)\/(\d+)\./); if (t) return "Firefox" === t[1] && +t[2] >= 65 || "Edge" === t[1] && +t[2] >= 18; var e = document.createElement("canvas"); return !!e.toDataURL && 0 == e.toDataURL("image/webp").indexOf("data:image/webp") }();
        document.addEventListener("lazybeforeunveil", (function(t) {
            var e = t.target.getAttribute("data-bg");
            if (e && (c && (e = l(e)), t.target.style.backgroundImage = 'url("' + e + '")'), c) {
                var r = t.target.getAttribute("data-src"),
                    n = t.target.getAttribute("data-src-webp"),
                    o = t.target.getAttribute("data-srcset");
                if (n ? t.target.setAttribute("data-src", n) : r && t.target.setAttribute("data-src", l(r)), o) {
                    var d = o.split(",").map((function(t) { return l(t) })).join(",");
                    t.target.setAttribute("data-srcset", d)
                }
            }
        })), e.a = o.a
    }, function(t, e, r) {
        "use strict";
        var n = r(0),
            o = r(296),
            l = r.n(o);
        n.a.use(l.a)
    }, function(t, e, r) {
        "use strict";
        var n = r(0),
            o = r(297),
            l = r(83),
            c = r.n(l);
        n.a.use(o.a, c.a)
    }, function(t, e, r) {
        "use strict";
        var n = r(0),
            o = r(298),
            l = r.n(o);
        n.a.use(l.a)
    }, function(t, e, r) {
        "use strict";
        var n, o = r(5),
            l = r(0),
            c = r(9),
            d = r(294),
            m = (r(530), r(3)),
            f = Object(m.b)({
                props: { attrs: { type: Object, required: !0 } },
                setup: function(t) {
                    var e = t.attrs,
                        r = e.href,
                        n = e.target,
                        o = e.anchor,
                        l = e.linktype;
                    return { linkType: l, anchor: o, target: n, href: r, to: "story" === l ? { cached_url: r } : r }
                }
            }),
            h = r(1),
            v = Object(h.a)(f, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return "email" === t.linkType ? r("a", { attrs: { href: "mailto:" + t.href } }, [t._t("default")], 2) : r("f-link", { attrs: { to: t.to, hash: t.anchor, target: t.target } }, [t._t("default")], 2)
            }), [], !1, null, null, null).exports,
            x = {
                props: { body: Object },
                computed: {
                    mainClasses: function() { return "block h-auto sm:w-full" },
                    widthClass: function() {
                        switch (this.body.width) {
                            case "75":
                                return "md:w-3/4";
                            case "fifth":
                                return "md:w-1/5";
                            case "third":
                                return "md:w-1/3";
                            case "50":
                                return "md:w-1/2";
                            default:
                                return "md:w-full"
                        }
                    },
                    floatingClass: function() { return this.body.floating ? "left" === this.body.floating ? "md:float-left md:mr-4" : "right" === this.body.floating ? "md:float-right md:ml-4" : void 0 : "" },
                    grayscaleClass: function() { return this.body.grayscale ? "grayscale" : "" }
                }
            },
            _ = Object(h.a)(x, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("f-shmigled-image", { attrs: { shmigle: t.body.shmigle, color: t.body.shmigle_color } }, [r("img", { class: [t.mainClasses, t.floatingClass, t.widthClass, t.grayscaleClass], attrs: { src: t.body.image.filename, alt: t.body.alt || t.body.image.alt } })])
            }), [], !1, null, null, null).exports,
            w = (r(28), r(47), {
                props: { body: Object },
                computed: { table: function() { return this.body.table } },
                methods: {
                    cellWidth: function(t) {
                        var e = !t,
                            r = this.table.thead.length;
                        return this.body.has_column_heading && e ? null : this.body.equal_columns ? parseInt(100 / r) + "%" : null
                    },
                    format: function(text) { return text.replace(/\*\*(.*?)\*\*/gm, "<strong>$1</strong>").replace(/(?:\r\n|\r|\n)/g, '<div class="mb-2"></div>') }
                }
            }),
            k = Object(h.a)(w, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("section", { staticClass: "overflow-x-scroll md:w-full w-screen my-6 -mx-3 px-3 md:mx-0 md:px-0" }, [t.table ? r("table", { staticClass: "w-full md:text-left text-xs md:text-sm border-b border-solid border-gray-300" }, [r("thead", { staticClass: "border-t border-solid border-gray-100" }, [r("tr", { staticClass: "border-b border-solid border-gray-300" }, t._l(t.table.thead, (function(th, e) { return r("th", { key: th._uid, staticClass: "p-2", style: { width: t.cellWidth(e) }, domProps: { textContent: t._s(th.value) } }) })), 0)]), t._v(" "), r("tbody", { staticClass: "md:leading-5" }, t._l(t.table.tbody, (function(tr) { return r("tr", { key: tr._uid, staticClass: "f-full border-t border-solid border-gray-100" }, [t._l(tr.body, (function(td, i) { return [t.body.has_column_heading && !i ? r("th", { key: td._uid, staticClass: "p-2 pl-0", domProps: { innerHTML: t._s(t.format(td.value)) } }) : r("td", { key: td._uid, staticClass: "p-2", class: { "bg-lightblue opacity-25 w-16": !td.value }, domProps: { innerHTML: t._s(t.format(td.value)) } })] }))], 2) })), 0)]) : t._e()])
            }), [], !1, null, null, null).exports,
            y = (r(37), r(59)),
            C = Object(m.b)({ props: ["attrs"], computed: { id: function() { try { if (!["h2", "h3"].includes(this.tag)) return ""; var content = this.$slots.default[0].text; return content ? "h-".concat(Object(y.b)(content)) : void 0 } catch (t) { return "" } }, classes: function() { return { h1: "font-black text-3xl mb-6", h2: "font-bold text-2xl mt-6 md:mt-10 mb-5", h3: "font-semibold text-xl mt-4 md:mt-7 mb-4", h4: "font-bold text-lg mt-3 md:mt-6 mb-2", h5: "font-semibold text-lg mt-5 mb-1", h6: "font-bold text-base mt-5 mb-1" }[this.tag] } }, setup: function(t) { var e = t.attrs.level; return { tag: Object(m.d)("h".concat(e)) } } }),
            O = Object(h.a)(C, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)(t.tag, { tag: "component", class: t.classes, attrs: { id: t.id } }, [t._t("default")], 2)
            }), [], !1, null, null, null).exports,
            j = {
                components: { richText: r(65).a },
                props: ["body"],
                computed: {
                    mainClasses: function() { return "block h-auto sm:w-full sm:my-4 md:mt-2 md:mb-4" },
                    widthClass: function() {
                        switch (this.body.width) {
                            case "75":
                                return "md:w-3/4";
                            case "fifth":
                                return "md:w-1/5";
                            case "third":
                                return "md:w-1/3";
                            case "50":
                                return "md:w-1/2";
                            default:
                                return "md:w-full"
                        }
                    },
                    floatingClass: function() { return this.body.floating ? "left" === this.body.floating ? "md:float-left md:mr-4" : "right" === this.body.floating ? "md:float-right md:ml-4" : void 0 : "" }
                }
            },
            P = Object(h.a)(j, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return t.body.disable_clearfix ? r("div", { class: [t.mainClasses, t.floatingClass, t.widthClass] }, [r("rich-text", { attrs: { content: t.body.content } })], 1) : r("div", { staticClass: "clearfix" }, [r("div", { class: [t.mainClasses, t.floatingClass, t.widthClass] }, [r("rich-text", { attrs: { content: t.body.content } })], 1)])
            }), [], !1, null, null, null).exports,
            E = r(26),
            S = (r(67), r(17), {
                props: { body: Object },
                computed: {
                    ctaLink: function() {
                        var t = "https://app.fundbox.com/signup",
                            path = this.$route.path.split("/resources/")[1];
                        if (!path) return t;
                        var e = path.split("/"),
                            r = Object(E.a)(e, 2),
                            n = r[0],
                            o = r[1];
                        return t + "?utm_source=fundbox&utm_medium=website-resource" + "&utm_campaign=".concat(n, "&utm_content=").concat(o)
                    }
                }
            }),
            $ = Object(h.a)(S, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("section", { staticClass: "bg-lightsand my-4 px-8 pb-6 pt-8 relative overflow-hidden bg-cover", staticStyle: { "background-image": "url(/blog/wp-content/themes/fundbox-blog/assets/img/stripes/newsletter-brown.png)" } }, [r("h3", { staticClass: "text-2xl mb-2 z-10" }, [t._v(t._s(t.body.title || "Ready for more?"))]), t._v(" "), r("div", { staticClass: "sm:flex" }, [r("div", { staticClass: "flex-1 pr-2 z-10" }, [t._v("\n      " + t._s(t.body.subtitle || "Apply for funding and find out if you qualify today") + "\n    ")]), t._v(" "), r("div", { staticClass: "z-10" }, [r("f-link", { staticClass: "btn px-5 py-2 font-medium text-base mt-4 sm:-mt-1", attrs: { label: "Apply Now", to: t.ctaLink } })], 1)])])
            }), [], !1, null, null, null).exports,
            T = { props: ["body"], components: { wistiaVideo: r(84).a } },
            A = Object(h.a)(T, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return t.body.wistia_id ? r("wistia-video", { staticClass: "Wistia_video", attrs: { "video-id": t.body.wistia_id } }) : t._e()
            }), [], !1, null, null, null).exports,
            M = { props: { body: Object } },
            D = Object(h.a)(M, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return t.body.embed_id ? r("iframe", { staticClass: "rounded-lg", attrs: { src: "https://open.spotify.com/embed/episode/" + t.body.embed_id + "?utm_source=generator&theme=0", width: "100%", height: "232", frameBorder: "0", allowfullscreen: "", allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" } }) : t._e()
            }), [], !1, null, null, null).exports,
            L = { props: ["body"], computed: { url: function() { var t = this.body.buzzsproud_episode_id; return t ? "https://www.buzzsprout.com/1030801/".concat(t, "?").concat("client_source=small_player&amp;iframe=true") : null } } },
            N = (r(531), Object(h.a)(L, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "buzzsproud_iframe" }, [t.url ? r("iframe", { attrs: { src: t.url, frameborder: "0", scrolling: "no" } }) : t._e()])
            }), [], !1, null, null, null).exports),
            z = l.a.component("space-placeholder", { props: ["attrs"], render: function(t) { return t("span", [" ", this.$slots.default]) } });
        l.a.use(d.a, { resolvers: { components: { "inline-image": _, "inline-table": k, "inline-container": P, "inline-cta-section": $, "inline-wistia-video": A, "inline-spotify-playlist": D, "inline-buzzsprout-player": N }, blocks: Object(o.a)({}, c.a.HEADING, O), marks: (n = {}, Object(o.a)(n, c.c.LINK, v), Object(o.a)(n, c.c.STYLED, z), n) } })
    }, , , , function(t, e, r) {
        "use strict";
        var n = { props: { gray: Boolean } },
            o = (r(426), r(1)),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "spinner", class: t.gray ? "spinner--gray" : "" }, [r("div", { staticClass: "bounce1" }), t._v(" "), r("div", { staticClass: "bounce2" }), t._v(" "), r("div", { staticClass: "bounce3" })])
            }), [], !1, null, "fa0a9126", null);
        e.a = component.exports
    }, , , , , , , , , , , function(t, e, r) {
        "use strict";
        var n = { components: { brush: r(21).a }, props: { color: String } },
            o = r(1),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("brush", {
                    attrs: {
                        width: "931",
                        height: "157",
                        points: [
                            [19, 134, 0, 0],
                            [19, 134, 60, 169],
                            [37, 125, 60, 338],
                            [53, 121, 60, 471],
                            [69, 114, 60, 587],
                            [85, 108, 60, 658],
                            [101, 100, 60, 782],
                            [117, 92, 60, 916],
                            [135, 83, 60, 1040],
                            [154, 77, 60, 1094],
                            [170, 72, 60, 1138],
                            [191, 65, 60, 1183],
                            [209, 61, 60, 1236],
                            [229, 56, 60, 1290],
                            [245, 53, 60, 1343],
                            [263, 49, 60, 1405],
                            [283, 45, 60, 1476],
                            [306, 40, 60, 1530],
                            [326, 38, 60, 1556],
                            [350, 36, 60, 1610],
                            [368, 34, 60, 1663],
                            [384, 33, 60, 1779],
                            [383, 50, 60, 2411],
                            [381, 69, 60, 2544],
                            [378, 85, 60, 2749],
                            [377, 101, 60, 3887],
                            [393, 98, 60, 4448],
                            [411, 88, 60, 4510],
                            [428, 77, 60, 4599],
                            [444, 67, 60, 4715],
                            [465, 61, 60, 4804],
                            [484, 56, 60, 4866],
                            [503, 54, 60, 4955],
                            [522, 53, 60, 5071],
                            [542, 52, 60, 5160],
                            [558, 47, 60, 5266],
                            [573, 41, 60, 5373],
                            [591, 33, 60, 5524],
                            [609, 28, 60, 5667],
                            [625, 26, 60, 5791],
                            [642, 25, 60, 5916],
                            [659, 23, 60, 6023],
                            [676, 23, 60, 6147],
                            [694, 23, 60, 6370],
                            [704, 40, 60, 7169],
                            [703, 57, 60, 7320],
                            [699, 74, 60, 7481],
                            [696, 90, 60, 7650],
                            [717, 82, 60, 8433],
                            [735, 70, 60, 8566],
                            [752, 64, 60, 8744],
                            [770, 58, 60, 8886],
                            [787, 54, 60, 9091],
                            [802, 50, 60, 9224],
                            [818, 45, 60, 9411],
                            [835, 41, 60, 9545],
                            [851, 39, 60, 9625],
                            [869, 35, 60, 9723],
                            [884, 35, 60, 9829],
                            [903, 34, 60, 1e4]
                        ],
                        image: r(425),
                        color: t.color
                    }
                })
            }), [], !1, null, null, null);
        e.a = component.exports
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        e.a = { "@context": "http://schema.org", "@type": "Organization", url: "https://fundbox.com", brand: "Fundbox", name: "Fundbox", Logo: "https://fundbox.com/img/brand-logo.png", address: { "@type": "PostalAddress", addressLocality: "Plano, TX", postalCode: "75024", streetAddress: "6900 Dallas Parkway" }, ContactPoint: [{ "@type": "ContactPoint", email: "support@Fundbox.com", telephone: "+18555727707", contactType: "customer service", contactOption: "TollFree", areaServed: "US" }], sameAs: ["https://www.facebook.com/fundbox", "https://www.linkedin.com/company/fundbox", "https://twitter.com/fundbox"] }
    }, function(t, e, r) { t.exports = r.p + "img/logo.4159475.png" }, function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, , , , , , , , , , function(t, e, r) { t.exports = {} }, , function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = r.p + "20b617e48ec017124967dd67e96d1c0e.svg" }, function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, , , , , function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, , , , , , , , , , , , , function(t, e, r) { t.exports = {} }, function(t, e, r) {
        "use strict";
        r(37), r(46), r(28), r(47);
        var n = r(8),
            o = {
                props: { blok: Object },
                data: function() { return { isMounted: !1 } },
                mounted: function() {
                    if (this.isMounted = !0, !this.$screen.md) return null;
                    Object(n.b)({ element: this.$el, duration: "200%", triggerHook: .1, reversed: !0 })
                },
                computed: { ebookSlug: function() { var path = this.$route.path; return path.includes("ebooks") ? path.replace("/", "") : null }, isMobile: function() { return !this.isMounted || !this.$screen.sm } }
            },
            l = (r(423), r(1)),
            c = Object(l.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "xl:max-w-full", class: t.blok.has_screenshots ? "pb-20 xl:pb-32" : "pb-32 md:pb-24 xl:pb-20" }, [n("div", { class: ["bg-" + t.blok.color, t.isMobile && t.blok.has_screenshots ? "overflow-hidden" : ""] }, [n("div", { staticClass: "xl:container py-8 md:py-16 xl:py-24 px-5 sm:px-8 xl:px-24 relative fbx-head-container", class: ["flex flex-col", t.blok.align_right ? "md:flex-row-reverse" : "md:flex-row"] }, [t.blok.align_right || "lightblue" !== t.blok.color ? t._e() : n("figure", { staticClass: "absolute right-0 bottom-0 max-w-4xl overflow-hidden", class: t.isMobile ? "w-auto -mx-24" : "-mr-16 w-full" }, [n("img", { staticClass: "block w-full", attrs: { src: r(422), alt: "decorative brush" } })]), t._v(" "), n("div", { staticClass: "flex-1 -mt-2 relative" }, [t.ebookSlug ? t._t("breadcrumbs", null, { slug: t.ebookSlug, classes: "absolute top-0 left-0 -mt-2 md:-mt-6 md:-mr-100" }) : t._e(), t._v(" "), n("h1", { staticClass: "font-bold max-w-xl sm:whitespace-pre-line md:whitespace-pre mb-6", class: [t.blok.title.length > 40 ? "text-3xl" : "text-4xl", "xl:text-5xl", t.ebookSlug ? "mt-8" : ""], domProps: { textContent: t._s(t.blok.title) } }), t._v(" "), t.blok.subtitle ? n("h3", { staticClass: "sm:max-w-md font-normal text-xl xl:text-2xl mb-6", domProps: { innerHTML: t._s(t.blok.subtitle) } }) : t._e(), t._v(" "), t.blok.text ? n("p", { staticClass: "sm:max-w-md text-base mb-6 block whitespace-pre-line", domProps: { innerHTML: t._s(t.blok.text) } }) : t._e(), t._v(" "), t.blok.cta_label ? n("f-link", { staticClass: "btn btn-md leading-7 w-full sm:w-auto max-w-full", attrs: { target: t.blok.cta_new_tab ? "_blank" : null, label: t.blok.cta_label, to: t.blok.cta_link } }) : t._e(), t._v(" "), t.blok.disclosure ? n("div", { staticClass: "text-sm mt-4 max-w-xs md:-mb-12", domProps: { textContent: t._s(t.blok.disclosure) } }) : t._e()], 2), t._v(" "), n("div", { staticClass: "pt-6 md:pt-0 md:w-7/12 max-w-md md:max-w-full", class: [t.blok.align_right ? "md:pr-12 xl:pr-16" : "md:pl-8", !t.blok.align_right && t.blok.image_is_narrow ? "xl:pl-16" : "", t.blok.align_right || t.blok.image_is_narrow ? "" : "xl:pl-10"] }, [t.blok.has_screenshots ? n("figure", { staticClass: "relative", class: t.isMobile ? "-mb-10 h-82 mt-4 flex flex-col justify-end" : "-mb-40 md:-mb-64", attrs: { "data-parallax": "", "data-shift": "-10rem" } }, [t.isMobile ? n("img", { staticClass: "w-full block mx-auto max-w-xs sm:hidden", attrs: { src: t.blok.mobile_image.filename, alt: t.blok.mobile_image.name } }) : t._e(), t._v(" "), n("transition", { attrs: { name: "fade", appear: "" } }, [t.isMobile ? t._e() : n("img", { staticClass: "w-full", attrs: { src: t.blok.image.filename, alt: t.blok.image.name } })])], 1) : n("figure", { staticClass: "h-48 relative overflow-hidden -mb-40 md:-mb-64", class: t.blok.disclosure ? "pt-3/4" : "pt-2/3", attrs: { "data-parallax": "", "data-shift": "-15rem" } }, [t.blok.video.filename ? n("f-video", { staticClass: "absolute top-0 left-0 w-full h-full object-cover rounded-xl", attrs: { video: t.blok.video } }) : n("f-image", { staticClass: "absolute top-0 left-0 w-full h-full object-cover rounded-xl", attrs: { image: t.blok.image, lazy: !1, width: 688 } })], 1)])])])])
            }), [], !1, null, null, null).exports;
        e.a = c
    }, , , , function(t, e, r) {
        r(15), r(14), r(10), r(18), r(11), r(19);
        var n = r(44),
            o = r(45),
            l = ["class", "staticClass", "style", "staticStyle", "attrs"];

        function c(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(object, t).enumerable }))), e.push.apply(e, r)
            }
            return e
        }
        r(17), t.exports = {
            functional: !0,
            render: function(t, e) {
                var r = e._c,
                    data = (e._v, e.data),
                    d = e.children,
                    m = void 0 === d ? [] : d,
                    f = data.class,
                    h = data.staticClass,
                    style = data.style,
                    v = data.staticStyle,
                    x = data.attrs,
                    _ = void 0 === x ? {} : x,
                    w = o(data, l);
                return r("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? c(Object(source), !0).forEach((function(e) { n(t, e, source[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e)) }))
                    }
                    return t
                }({ class: [f, h], style: [style, v], attrs: Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "27", height: "23", viewBox: "0 0 27 23" }, _) }, w), m.concat([r("g", { attrs: { fill: "none", "fill-rule": "evenodd", stroke: "#000", "stroke-linecap": "square", "stroke-width": "1.5" } }, [r("path", { attrs: { d: "M25.866 22.25H1M25.866 11.5H1M25.866 1.25H1" } })])]))
            }
        }
    }, function(t, e, r) {
        r(15), r(14), r(10), r(18), r(11), r(19);
        var n = r(44),
            o = r(45),
            l = ["class", "staticClass", "style", "staticStyle", "attrs"];

        function c(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(object, t).enumerable }))), e.push.apply(e, r)
            }
            return e
        }
        r(17), t.exports = {
            functional: !0,
            render: function(t, e) {
                var r = e._c,
                    data = (e._v, e.data),
                    d = e.children,
                    m = void 0 === d ? [] : d,
                    f = data.class,
                    h = data.staticClass,
                    style = data.style,
                    v = data.staticStyle,
                    x = data.attrs,
                    _ = void 0 === x ? {} : x,
                    w = o(data, l);
                return r("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? c(Object(source), !0).forEach((function(e) { n(t, e, source[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e)) }))
                    }
                    return t
                }({ class: [f, h], style: [style, v], attrs: Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "21", height: "16", viewBox: "0 0 21 16" }, _) }, w), m.concat([r("path", { attrs: { "fill-rule": "evenodd", d: "M20.25 1.894a8.294 8.294 0 0 1-2.357.636A4.058 4.058 0 0 0 19.697.295a8.299 8.299 0 0 1-2.605.98A4.127 4.127 0 0 0 14.097 0c-2.65 0-4.596 2.433-3.998 4.959A11.71 11.71 0 0 1 1.642.739a4.007 4.007 0 0 0 1.27 5.393 4.135 4.135 0 0 1-1.858-.505c-.045 1.87 1.318 3.622 3.291 4.011-.578.154-1.21.19-1.853.07.521 1.604 2.036 2.771 3.833 2.804A8.344 8.344 0 0 1 .25 14.185 11.75 11.75 0 0 0 6.54 16c7.618 0 11.923-6.334 11.663-12.015a8.283 8.283 0 0 0 2.047-2.09z" } })]))
            }
        }
    }, function(t, e, r) {
        r(15), r(14), r(10), r(18), r(11), r(19);
        var n = r(44),
            o = r(45),
            l = ["class", "staticClass", "style", "staticStyle", "attrs"];

        function c(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(object, t).enumerable }))), e.push.apply(e, r)
            }
            return e
        }
        r(17), t.exports = {
            functional: !0,
            render: function(t, e) {
                var r = e._c,
                    data = (e._v, e.data),
                    d = e.children,
                    m = void 0 === d ? [] : d,
                    f = data.class,
                    h = data.staticClass,
                    style = data.style,
                    v = data.staticStyle,
                    x = data.attrs,
                    _ = void 0 === x ? {} : x,
                    w = o(data, l);
                return r("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? c(Object(source), !0).forEach((function(e) { n(t, e, source[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e)) }))
                    }
                    return t
                }({ class: [f, h], style: [style, v], attrs: Object.assign({ xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", width: "25", height: "18", viewBox: "0 0 25 18" }, _) }, w), m.concat([r("defs", [r("path", { attrs: { id: "a", d: "M0 0h25v18H0z" } })]), r("g", { attrs: { "fill-rule": "evenodd" } }, [r("mask", { attrs: { id: "b" } }, [r("use", { attrs: { "xlink:href": "#a" } })]), r("path", { attrs: { d: "M9.943 12.799V5.2l6.534 3.8-6.534 3.798zM24.478 2.81C24.19 1.704 23.343.833 22.268.537 20.317 0 12.5 0 12.5 0S4.682 0 2.733.537C1.657.833.81 1.704.523 2.811 0 4.816 0 9 0 9s0 4.184.522 6.19c.288 1.106 1.135 1.977 2.21 2.273C4.683 18 12.5 18 12.5 18s7.818 0 9.767-.537c1.076-.296 1.923-1.167 2.21-2.274C25 13.184 25 9 25 9s0-4.184-.522-6.19z", mask: "url(#b)" } })])]))
            }
        }
    }, function(t, e, r) {
        r(15), r(14), r(10), r(18), r(11), r(19);
        var n = r(44),
            o = r(45),
            l = ["class", "staticClass", "style", "staticStyle", "attrs"];

        function c(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(object, t).enumerable }))), e.push.apply(e, r)
            }
            return e
        }
        r(17), t.exports = {
            functional: !0,
            render: function(t, e) {
                var r = e._c,
                    data = (e._v, e.data),
                    d = e.children,
                    m = void 0 === d ? [] : d,
                    f = data.class,
                    h = data.staticClass,
                    style = data.style,
                    v = data.staticStyle,
                    x = data.attrs,
                    _ = void 0 === x ? {} : x,
                    w = o(data, l);
                return r("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? c(Object(source), !0).forEach((function(e) { n(t, e, source[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e)) }))
                    }
                    return t
                }({ class: [f, h], style: [style, v], attrs: Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "21", height: "20", viewBox: "0 0 21 20" }, _) }, w), m.concat([r("path", { attrs: { "fill-rule": "evenodd", d: "M19.396 0H1.604C.994 0 .5.494.5 1.104v17.793C.5 19.506.994 20 1.604 20h9.58v-7.745H8.576V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.927h2.989l-.39 3.019h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20.5.494 20.006 0 19.396 0z" } })]))
            }
        }
    }, function(t, e, r) {
        r(15), r(14), r(10), r(18), r(11), r(19);
        var n = r(44),
            o = r(45),
            l = ["class", "staticClass", "style", "staticStyle", "attrs"];

        function c(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(object, t).enumerable }))), e.push.apply(e, r)
            }
            return e
        }
        r(17), t.exports = {
            functional: !0,
            render: function(t, e) {
                var r = e._c,
                    data = (e._v, e.data),
                    d = e.children,
                    m = void 0 === d ? [] : d,
                    f = data.class,
                    h = data.staticClass,
                    style = data.style,
                    v = data.staticStyle,
                    x = data.attrs,
                    _ = void 0 === x ? {} : x,
                    w = o(data, l);
                return r("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? c(Object(source), !0).forEach((function(e) { n(t, e, source[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e)) }))
                    }
                    return t
                }({ class: [f, h], style: [style, v], attrs: Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20" }, _) }, w), m.concat([r("path", { attrs: { "fill-rule": "nonzero", d: "M15.833 0H4.167A4.167 4.167 0 0 0 0 4.167v11.666C0 18.134 1.866 20 4.167 20h11.666A4.167 4.167 0 0 0 20 15.833V4.167C20 1.866 18.135 0 15.833 0zM6.667 15.833h-2.5V6.667h2.5v9.166zM5.417 5.61a1.465 1.465 0 0 1-1.459-1.47c0-.812.654-1.47 1.459-1.47s1.458.658 1.458 1.47c0 .812-.652 1.47-1.458 1.47zm11.25 10.223h-2.5v-4.67c0-2.806-3.334-2.594-3.334 0v4.67h-2.5V6.667h2.5v1.47c1.164-2.154 5.834-2.314 5.834 2.064v5.632z" } })]))
            }
        }
    }, function(t, e, r) {
        r(15), r(14), r(10), r(18), r(11), r(19);
        var n = r(44),
            o = r(45),
            l = ["class", "staticClass", "style", "staticStyle", "attrs"];

        function c(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(object, t).enumerable }))), e.push.apply(e, r)
            }
            return e
        }
        r(17), t.exports = {
            functional: !0,
            render: function(t, e) {
                var r = e._c,
                    data = (e._v, e.data),
                    d = e.children,
                    m = void 0 === d ? [] : d,
                    f = data.class,
                    h = data.staticClass,
                    style = data.style,
                    v = data.staticStyle,
                    x = data.attrs,
                    _ = void 0 === x ? {} : x,
                    w = o(data, l);
                return r("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? c(Object(source), !0).forEach((function(e) { n(t, e, source[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e)) }))
                    }
                    return t
                }({ class: [f, h], style: [style, v], attrs: Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "21", height: "20", viewBox: "0 0 21 20" }, _) }, w), m.concat([r("path", { attrs: { "fill-rule": "nonzero", d: "M10.75 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.987-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C8.034 0 7.694.012 6.628.06 2.996.227.978 2.242.81 5.877.76 6.944.75 7.284.75 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.123C20.527 2.25 18.51.227 14.874.061 13.807.01 13.466 0 10.75 0zm0 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" } })]))
            }
        }
    }, , function(t, e, r) {
        r(15), r(14), r(10), r(18), r(11), r(19);
        var n = r(44),
            o = r(45),
            l = ["class", "staticClass", "style", "staticStyle", "attrs"];

        function c(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(object, t).enumerable }))), e.push.apply(e, r)
            }
            return e
        }
        r(17), t.exports = {
            functional: !0,
            render: function(t, e) {
                var r = e._c,
                    data = (e._v, e.data),
                    d = e.children,
                    m = void 0 === d ? [] : d,
                    f = data.class,
                    h = data.staticClass,
                    style = data.style,
                    v = data.staticStyle,
                    x = data.attrs,
                    _ = void 0 === x ? {} : x,
                    w = o(data, l);
                return r("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? c(Object(source), !0).forEach((function(e) { n(t, e, source[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e)) }))
                    }
                    return t
                }({ class: [f, h], style: [style, v], attrs: Object.assign({ width: "20px", height: "20px", viewBox: "0 0 20 20", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, _) }, w), m.concat([r("g", { attrs: { id: "Design-New", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" } }, [r("g", { attrs: { id: "Careers", transform: "translate(-104.000000, -978.000000)", stroke: "#000000" } }, [r("g", { attrs: { id: "Group-13", transform: "translate(104.000000, 978.000000)" } }, [r("circle", { attrs: { id: "Oval", cx: "10", cy: "10", r: "9.5" } }), r("g", { attrs: { id: "Group-2", transform: "translate(5.285714, 5.000000)" } }, [r("line", { attrs: { x1: "4.71428571", y1: "0.357142857", x2: "4.71428571", y2: "10.0292505", id: "Line-3", stroke: "currentColor" } }), r("line", { attrs: { x1: "4.87823189", y1: "0.521089032", x2: "4.87823189", y2: "10.1931967", id: "Line-3-Copy", transform: "translate(4.878232, 5.357143) rotate(90.000000) translate(-4.878232, -5.357143) " } })])])])])]))
            }
        }
    }, , function(t, e, r) {
        r(15), r(14), r(10), r(18), r(11), r(19);
        var n = r(44),
            o = r(45),
            l = ["class", "staticClass", "style", "staticStyle", "attrs"];

        function c(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(object, t).enumerable }))), e.push.apply(e, r)
            }
            return e
        }
        r(17), t.exports = {
            functional: !0,
            render: function(t, e) {
                var r = e._c,
                    data = (e._v, e.data),
                    d = e.children,
                    m = void 0 === d ? [] : d,
                    f = data.class,
                    h = data.staticClass,
                    style = data.style,
                    v = data.staticStyle,
                    x = data.attrs,
                    _ = void 0 === x ? {} : x,
                    w = o(data, l);
                return r("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? c(Object(source), !0).forEach((function(e) { n(t, e, source[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e)) }))
                    }
                    return t
                }({ class: [f, h], style: [style, v], attrs: Object.assign({ width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, _) }, w), m.concat([r("path", { attrs: { d: "M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z", fill: "#39B2DB", stroke: "#39B2DB" } }), r("path", { attrs: { d: "M6.5 11.5L10.5 14.5L16.5 7.5", stroke: "white", "stroke-width": "2" } })]))
            }
        }
    }, , , , , , , , , , , function(t, e, r) {
        "use strict";
        var n = r(5),
            o = (r(58), r(11), r(22), r(15), r(14), r(10), r(18), r(19), r(98)),
            l = r(227),
            c = r(59),
            d = (r(181), r(29), r(17), {
                data: function() { return { mounted: !1, baseWidth: 380, baseHeight: 400, debounceDelay: 150, isMenuHovered: !1 } },
                props: { menu: { type: Array, required: !0 } },
                computed: { menuHasDropdown: function() { return this.menu.filter((function(t) { return t.dropdown })) }, hasDropdownEls: function() { return (this.$refs.links || []).filter((function(t) { return t.classList.contains("TopMenu-has-dropdown") })) }, sectionEls: function() { return (this.$refs.sections || []).map((function(t) { return { el: t, name: t.getAttribute("data-dropdown"), content: t.children[0] } })) } },
                mounted: function() {
                    var t = this;
                    setTimeout((function() { t.mounted = !0, t._pointerEvent = window.PointerEvent ? { end: "pointerup", enter: "pointerenter", leave: "pointerleave" } : { end: "touchend", enter: "mouseenter", leave: "mouseleave" }, t.registerGlobalEvents(), t.registerDropdownElsEvents(), t.registerDropdownContainerEvents() }), 50)
                },
                beforeDestroy: function() { this.unregisterGlobalEvents() },
                methods: {
                    registerGlobalEvents: function() { window.addEventListener("resize", this.windowResizeHandler), document.addEventListener("touchmove", this.touchMoveHandler), document.addEventListener("touchstart", this.touchStartHandler) },
                    registerDropdownElsEvents: function() {
                        var t = this;
                        this.hasDropdownEls.forEach((function(e) { e._vsm_menu || (e.addEventListener("focusin", (function() { t.stopCloseTimeout(), t.openDropdown(e) })), e.addEventListener(t._pointerEvent.enter, (function(r) { "touch" !== r.pointerType && (t.stopCloseTimeout(), setTimeout((function() { t.isMenuHovered && t.openDropdown(e) }), t.debounceDelay)) })), e.addEventListener(t._pointerEvent.leave, (function(e) { "touch" !== e.pointerType && t.startCloseTimeout() })), e._vsm_menu = !0) }))
                    },
                    registerDropdownContainerEvents: function() {
                        var t = this;
                        this.$refs.dropdownContainer._vsm_menu || (this.$refs.dropdownContainer.addEventListener(this._pointerEvent.end, (function(t) { t.stopPropagation() })), this.$refs.dropdownContainer.addEventListener(this._pointerEvent.enter, (function(e) { "touch" !== e.pointerType && t.stopCloseTimeout() })), this.$refs.dropdownContainer.addEventListener(this._pointerEvent.leave, (function(e) { "touch" !== e.pointerType && t.startCloseTimeout() })), this.$refs.dropdownContainer._vsm_menu = !0)
                    },
                    unregisterGlobalEvents: function() { window.removeEventListener("resize", this.windowResizeHandler), document.removeEventListener("touchmove", this.touchMoveHandler), document.removeEventListener("touchstart", this.touchStartHandler) },
                    toggleDropdown: function(t) { this._activeDropdown === t || this.openDropdown(t) },
                    openDropdown: function(t) {
                        var e = this;
                        if (this._activeDropdown !== t) {
                            this.$emit("open-dropdown", t), this.$el.classList.add("TopMenu-overlay-active"), this.$el.classList.add("TopMenu-dropdown-active"), this._activeDropdown = t, this._activeDropdown.setAttribute("aria-expanded", "true"), this.hasDropdownEls.forEach((function(t) { return t.classList.remove("TopMenu-active") })), t.classList.add("TopMenu-active");
                            var r, n, content, o = t.getAttribute("data-dropdown"),
                                l = "TopMenu-left";
                            this.sectionEls.forEach((function(t) { t.el.classList.remove("TopMenu-active"), t.el.classList.remove("TopMenu-left"), t.el.classList.remove("TopMenu-right"), t.name === o ? (t.el.setAttribute("aria-hidden", "false"), t.el.classList.add("TopMenu-active"), l = "TopMenu-right", r = t.content.offsetWidth, n = t.content.offsetHeight, content = t.content) : (t.el.classList.add(l), t.el.setAttribute("aria-hidden", "true")) }));
                            var c = this.$el.offsetLeft,
                                d = document.documentElement.offsetWidth,
                                m = r / +this.baseWidth,
                                f = n / +this.baseHeight,
                                rect = t.getBoundingClientRect(),
                                h = rect.left + (rect.right - rect.left) / 2,
                                v = Math.round(Math.max(rect.left + rect.width / 2 - r / 2 - c, 0 - c)),
                                x = rect.left + rect.width / 2 + r / 2;
                            x + c > d && (v = Math.round(v - (x - d))), clearTimeout(this._disableTransitionTimeout), this._enableTransitionTimeout = setTimeout((function() { e.$el.classList.remove("TopMenu-no-transition") }), 50);
                            this.$refs.dropdownContainer.style.transform = "translate(".concat(v - 0, "px, ").concat(t.offsetTop, "px)"), this.$refs.dropdownContainer.style.width = "".concat(r, "px"), this.$refs.dropdownContainer.style.height = "".concat(n, "px"), this.$refs.arrow.style.opacity = n ? 1 : 0, this.$refs.arrow.style.transform = "translate(".concat(Math.round(h - 10 - c), "px, ").concat(t.offsetTop, "px) rotate(45deg)"), this.$refs.background.style.transform = "translate(".concat(v - 0, "px, ").concat(t.offsetTop, "px) scaleX(").concat(m, ") scaleY(").concat(f, ")"), this.$refs.backgroundAlt.style.transform = "translateY(".concat((content.children[0] && content.children[0].offsetHeight || 0) / f, "px)")
                        }
                    },
                    closeDropdown: function() {
                        var t = this;
                        if (this._activeDropdown) {
                            this.$emit("close-dropdown", this._activeDropdown), this.hasDropdownEls.forEach((function(t) { t.classList.remove("TopMenu-active") }));
                            var e = this.$refs.dropdownContainer.querySelector('[aria-hidden="false"]');
                            e && e.setAttribute("aria-hidden", "true"), clearTimeout(this._enableTransitionTimeout), this._disableTransitionTimeout = setTimeout((function() { t.$el.classList.add("TopMenu-no-transition") }), 50), this.$el.classList.remove("TopMenu-overlay-active"), this.$el.classList.remove("TopMenu-dropdown-active"), this._activeDropdown.setAttribute("aria-expanded", "false"), this._activeDropdown = void 0
                        }
                    },
                    startCloseTimeout: function() {
                        var t = this;
                        this._closeDropdownTimeout = setTimeout((function() { t.closeDropdown() }), 50)
                    },
                    stopCloseTimeout: function() { clearTimeout(this._closeDropdownTimeout) },
                    touchMoveHandler: function() { this._isDragging = !0 },
                    touchStartHandler: function() { this._isDragging = !1 },
                    windowResizeHandler: function() { this.$refs.dropdownContainer.style = null, this.$refs.arrow.style = null, this.$refs.background.style = null, this.$refs.backgroundAlt.style = null, this.closeDropdown() }
                }
            }),
            m = (r(378), r(1)),
            f = Object(m.a)(d, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("nav", { staticClass: "TopMenu-menu TopMenu-no-transition" }, [r("ul", { ref: "root", staticClass: "flex", on: { mouseover: function(e) { t.isMenuHovered = !0 }, mouseout: function(e) { t.isMenuHovered = !1 } } }, t._l(t.menu, (function(e, n) { return r("li", t._g(t._b({ key: n, ref: "links", refInFor: !0, staticClass: "px-3 py-4", class: { "TopMenu-has-dropdown": e.dropdown }, attrs: { "data-dropdown": e.dropdown, "aria-haspopup": e.dropdown && "true", "aria-expanded": e.dropdown && "false" } }, "li", e.attributes, !1), e.listeners), [t._t("title", null, { item: e, index: n })], 2) })), 0), t._v(" "), r("div", { staticClass: "TopMenu-dropdown" }, [t.mounted ? r("div", { ref: "background", staticClass: "TopMenu-background" }, [r("div", { ref: "backgroundAlt", staticClass: "TopMenu-background-alt" })]) : t._e(), t._v(" "), t.mounted ? r("div", { ref: "arrow", staticClass: "TopMenu-arrow" }) : t._e(), t._v(" "), r("div", { ref: "dropdownContainer", staticClass: "TopMenu-dropdown-container" }, t._l(t.menuHasDropdown, (function(e, n) { return r("div", { key: n, ref: "sections", refInFor: !0, staticClass: "TopMenu-dropdown-section", attrs: { "data-dropdown": e.dropdown, "aria-hidden": "false" } }, [r("div", { staticClass: "TopMenu-dropdown-content" }, [t._t("default", null, { item: e, index: n })], 2)]) })), 0)])])
            }), [], !1, null, null, null).exports,
            h = r(281),
            v = {
                components: { topMenu: f, menuIcon: r.n(h).a },
                props: { menu: Array },
                methods: {
                    focusSubLink: function() {
                        try {
                            var t = document.querySelector(".TopMenu-dropdown-section.TopMenu-active");
                            if (!t) return null;
                            var e = t.querySelector(".topnav-sublink");
                            e && e.focus()
                        } catch (t) { console.error(t) }
                    }
                },
                computed: {
                    layout: function() { return this.$store.state.layout },
                    cta: function() {
                        var t = this.$store.state.cta,
                            link = t.link,
                            label = t.label;
                        return { link: link || this.layout.cta_link, label: label || this.layout.cta_label }
                    },
                    ctaIsLong: function() { return this.cta.label.length > 8 }
                },
                watch: { $route: function() { this.$refs.menu.closeDropdown() } }
            },
            x = (r(380), Object(m.a)(v, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.layout ? n("header", { staticClass: "topnav bg-white" }, [n("div", { staticClass: "h-12 md:h-20 flex items-center px-3 md:px-8 xl:px-24 xl:container" }, [n("f-link", { staticClass: "topnav-logo md:mr-4 xl:mr-10", attrs: { to: "/", "data-event": "Header Logo click" } }, [n("img", { staticClass: "w-20 md:w-24 pt-1", attrs: { srcset: r(228) + " 1x, " + r(377) + " 2x", src: r(228), alt: "Fundbox" } })]), t._v(" "), n("top-menu", { ref: "menu", staticClass: "text-lg hidden md:block", attrs: { menu: t.menu }, scopedSlots: t._u([{ key: "default", fn: function(data) { return [data.item.dropdown ? n("div", { staticClass: "topnav-dropdown" }, [data.item.hashLinks ? n("div", { staticClass: "topnav-column" }, [n("h5", { staticClass: "text-gray-300 text-xs font-medium pb-2" }, [t._v("Quick Jump")]), t._v(" "), n("hr", { staticClass: "w-6 mt-1 ml-0 border-l border-solid border-blue" }), t._v(" "), n("scrollactive", { attrs: { offset: 0, "scroll-offset": -80, scrollOnStart: !1 } }, t._l(data.item.hashLinks, (function(link) { return n("f-link", { key: link.hash, staticClass: "topnav-sublink link-bold hash-link", attrs: { to: { cached_url: data.item.target.slug }, hash: link.hash, label: link.label, "data-hover-title": link.label, "scrollactive-link": "" } }) })), 1)], 1) : t._e(), t._v(" "), t._l(data.item.columns, (function(col) { return [n("div", { directives: [{ name: "editable", rawName: "v-editable", value: col, expression: "col" }], key: col._uid, staticClass: "topnav-column" }, [n("h5", { staticClass: "text-gray-300 text-xs font-medium pb-2" }, [t._v(t._s(col.title))]), t._v(" "), n("hr", { staticClass: "w-6 mt-1 ml-0 border-l border-solid border-blue" }), t._v(" "), t._l(col.links, (function(link) { return n("f-link", { directives: [{ name: "editable", rawName: "v-editable", value: link, expression: "link" }], key: link._uid, staticClass: "topnav-sublink link-bold", attrs: { to: link.link, hash: link.hash, label: link.label, "data-hover-title": link.label } }) }))], 2)] }))], 2) : t._e()] } }, { key: "title", fn: function(data) { return [n("f-link", { directives: [{ name: "editable", rawName: "v-editable", value: data.item, expression: "data.item" }], staticClass: "link-bold topnav-link", class: t.$route.hash ? "" : "topnav-link--nohash", attrs: { to: { cached_url: data.item.target.slug }, label: data.item.label, "data-hover-title": data.item.label, "data-skip-link-track": data.item.dropdown ? "true" : "false" }, on: { keydown: function(e) { return !e.type.indexOf("key") && t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"]) ? null : (e.preventDefault(), t.focusSubLink.apply(null, arguments)) } } })] } }], null, !1, 1694139260) }), t._v(" "), n("div", { staticClass: "flex-1" }), t._v(" "), n("div", { staticClass: "flex md:text-lg leading-3 md:leading-4" }, [n("f-link", { staticClass: "btn px-5 md:px-6 py-2 nav-cta-btn", attrs: { to: t.cta.link, label: t.cta.label } }), t._v(" "), n("f-link", { staticClass: "link-bold px-3 md:pl-4 md:pr-0 py-2", class: t.ctaIsLong ? "link-hide-xs" : "", attrs: { to: "/login", label: "Log in", "data-hover-title": "Log in" } }), t._v(" "), n("button", { staticClass: "md:hidden hover:opacity-75 -mr-1", attrs: { title: "Open Menu" }, on: { click: function(e) { return t.$emit("toggle-sidenav") } } }, [n("menu-icon", { staticClass: "block", staticStyle: { height: "16px" } })], 1)], 1)], 1)]) : t._e()
            }), [], !1, null, null, null)),
            _ = x.exports,
            w = (r(103), r(40)),
            k = r.n(w),
            y = r(41),
            C = r.n(y),
            O = {
                components: { arrowRight: k.a, arrowLeft: C.a },
                data: function() { return { currentMenu: null } },
                props: { opened: Boolean, menu: Array },
                methods: {
                    toggleSubmenu: function(t, e) {
                        if (!t) return null;
                        e.preventDefault(), this.currentMenu ? this.currentMenu = null : this.currentMenu = t
                    }
                },
                computed: {
                    currentItem: function() { var t = this; return this.currentMenu ? this.menu.find((function(menu) { return menu.dropdown === t.currentMenu })) : null },
                    submenu: function() {
                        if (!this.currentMenu) return null;
                        var t = this.currentItem,
                            e = t.hashLinks,
                            r = [];
                        return t.columns && t.columns.forEach((function(t) { t.links.forEach((function(link) { r.push(link) })) })), { links: r, hashLinks: e }
                    }
                }
            },
            j = (r(381), Object(m.a)(O, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return t.menu ? r("div", { staticClass: "top-0 right-0 w-full h-full fixed z-10", class: t.opened ? "visible" : "invisible" }, [t.opened ? r("div", { staticClass: "absolute left-0 top-0 w-full h-full", on: { click: function(e) { return t.$emit("toggle-sidenav") } } }) : t._e(), t._v(" "), r("transition", { attrs: { name: "slide" } }, [t.opened ? r("aside", { staticClass: "top-0 right-0 absolute bg-white w-82 h-full", staticStyle: { "max-width": "85%" } }, [r("div", { staticClass: "py-2 px-6 h-full overflow-y-auto pt-12 md:pt-20" }, [t._l(t.menu, (function(link) { return r("f-link", { directives: [{ name: "editable", rawName: "v-editable", value: link, expression: "link" }], key: link._uid, staticClass: "sidenav-link link-bold", attrs: { "data-hover-title": link.label, to: { cached_url: link.target.slug }, "data-skip-link-track": link.dropdown ? "true" : "false" }, on: { click: function(e) { return t.toggleSubmenu(link.dropdown, e) } } }, [t._v("\n            " + t._s(link.label) + "\n            "), link.dropdown ? r("arrow-right", { staticClass: "float-right" }) : t._e()], 1) })), t._v(" "), r("transition", { attrs: { name: "slide" } }, [t.currentItem ? r("div", { staticClass: "absolute top-0 left-0 w-full h-full pl-6 bg-white overflow-y-auto pt-12 md:pt-20" }, [r("f-link", { staticClass: "sidenav-link link-bold sidenav-link--active", attrs: { to: { cached_url: t.currentItem.target.slug }, "data-hover-title": t.currentItem.label, "data-skip-link-track": "true" }, on: { click: function(e) { return t.toggleSubmenu(t.currentItem.dropdown, e) } } }, [r("arrow-left", { staticClass: "mr-2" }), t._v("\n                " + t._s(t.currentItem.label) + "\n              ")], 1), t._v(" "), r("scrollactive", { key: t.currentMenu, attrs: { offset: 0, "scroll-offset": -80, scrollOnStart: !1 } }, [r("div", { key: t.currentMenu + "overview" }, [r("f-link", { staticClass: "sidenav-link link-bold hash-link", attrs: { hash: "empty", "data-hover-title": "Overview", to: { cached_url: t.currentItem.target.slug }, "scrollactive-link": "" }, domProps: { textContent: t._s("Overview") }, on: { click: function(e) { return t.$emit("toggle-sidenav") } } })], 1), t._v(" "), t._l(t.submenu.hashLinks, (function(link) { return r("div", { key: link._uid }, [r("f-link", { staticClass: "sidenav-link link-bold hash-link", attrs: { to: { cached_url: t.currentItem.target.slug }, hash: link.hash, "data-hover-title": link.label, "scrollactive-link": "" }, domProps: { textContent: t._s(link.label) }, on: { click: function(e) { return t.$emit("toggle-sidenav") } } })], 1) }))], 2), t._v(" "), t._l(t.submenu.links, (function(link) { return r("div", { key: link._uid }, [r("f-link", { directives: [{ name: "editable", rawName: "v-editable", value: link, expression: "link" }], staticClass: "sidenav-link link-bold", attrs: { to: link.link, hash: link.hash, "data-hover-title": link.label }, domProps: { textContent: t._s(link.label) }, on: { click: function(e) { return t.$emit("toggle-sidenav") } } })], 1) }))], 2) : t._e()])], 2)]) : t._e()])], 1) : t._e()
            }), [], !1, null, null, null).exports),
            P = (r(382), Object(m.a)({}, (function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            }), [function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "fixed bottom-0 left-0 w-full p-3 text-center z-50 hidden ie-only" }, [r("b", [t._v("Your web browser (Internet Explorer) is out of date.")]), r("br"), t._v(" "), r("a", { staticClass: "link-underline", attrs: { href: "https://browsehappy.com/" } }, [t._v("Update your browser")]), t._v("\n  for more security, speed and the best experience on this site.\n")])
            }], !1, null, null, null).exports),
            E = r(282),
            S = r.n(E),
            $ = r(283),
            T = r.n($),
            A = r(284),
            M = r.n(A),
            D = r(285),
            L = r.n(D),
            N = r(286),
            z = r.n(N),
            B = { components: { youtube: T.a, twitter: S.a, facebook: M.a, linkedin: L.a, instagram: z.a }, computed: { layout: function() { return this.$store.state.layout }, notificationEnabled: function() { var t = this.layout.notification_dismissable && this.$store.state.notificationClosed; return this.layout.notification_enabled && !t } } },
            I = (r(383), {
                methods: { close: function() { this.$store.commit("CLOSE_NOTIFICATION") } },
                computed: {
                    layout: function() { return this.$store.state.layout },
                    isEnabled: function() { var t; return null === (t = this.layout) || void 0 === t ? void 0 : t.notification_enabled },
                    isDismissable: function() { var t; return null === (t = this.layout) || void 0 === t ? void 0 : t.notification_dismissable },
                    isClosed: function() { return !!this.isDismissable && this.$store.state.notificationClosed },
                    isVisible: function() {
                        var t, e = !(null !== (t = this.layout) && void 0 !== t && t.notification_homepage_only),
                            r = "/" === this.$route.path;
                        return this.isEnabled && !this.isClosed && (e || r)
                    }
                }
            });

        function H(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(object, t).enumerable }))), e.push.apply(e, r)
            }
            return e
        }
        var R = {
                components: {
                    topNav: _,
                    sideNav: j,
                    warning: P,
                    bottomFooter: Object(m.a)(B, (function() {
                        var t = this,
                            e = t.$createElement,
                            r = t._self._c || e;
                        return t.layout ? r("footer", { staticClass: "text-sm bg-black text-white font-thin" }, [r("div", { staticClass: "xl:container px-4 md:px-12 xl:px-24 py-4 md:pt-10", class: { "pb-32 sm:pb-20": t.notificationEnabled } }, [r("section", { staticClass: "md:flex flex-wrap" }, [t._l(t.layout.footer_columns, (function(e) { return r("div", { key: e._uid, staticClass: "footer-column" }, [r("h5", { staticClass: "mb-3 text-sm", domProps: { textContent: t._s(e.title) } }), t._v(" "), r("nav", { staticClass: "flex-1 relative" }, t._l(e.links, (function(link) { return r("f-link", { directives: [{ name: "editable", rawName: "v-editable", value: link, expression: "link" }], key: link._uid, staticClass: "footer-link link-white link-bold", attrs: { "data-hover-title": link.label, target: link.target, label: link.label, to: link.link } }) })), 1)]) })), t._v(" "), r("div", { staticClass: "footer-divider" }), t._v(" "), r("div", { staticClass: "mb-5 w-full md:w-1/4 xl:w-auto" }, [r("nav", { staticClass: "pt-1 md:pt-8" }, t._l(t.layout.social_links, (function(link, i) { return r("f-link", { directives: [{ name: "editable", rawName: "v-editable", value: link, expression: "link" }], key: link._uid, class: i ? "ml-6" : "", attrs: { target: "blank", to: link.link.url, title: link.label } }, [r(link.label.toLowerCase(), { tag: "svg", staticClass: "text-white fill-current h-5 w-5 lg:w-auto hover:opacity-75" })], 1) })), 1)]), t._v(" "), r("div", { staticClass: "xl:pr-12" }, [r("p", { staticClass: "mb-3", domProps: { textContent: t._s(t.layout.security_description) } }), t._v(" "), r("nav", { staticClass: "flex flex-wrap" }, t._l(t.layout.security_images, (function(link) { return r("f-link", { directives: [{ name: "editable", rawName: "v-editable", value: link, expression: "link" }], key: link._uid, attrs: { target: "blank", title: link.title, to: link.link } }, [r("img", { staticClass: "lazyload h-6 mb-2 mr-4", attrs: { "data-src": link.image.filename, alt: link.title } })]) })), 1)]), t._v(" "), r("div", { staticClass: "opacity-75 max-w-5xl xl:max-w-2xl mt-2 xl:mt-0" }, [r("p", [t._v(t._s(t.layout.legal_descr) + " © " + t._s((new Date).getFullYear()) + " All rights reserved.")])])], 2), t._v(" "), r("section", { staticClass: "mt-10 clearfix clear float-none relative block" }, [r("div", { staticClass: "absolute opacity-25 bg-white pt-px w-full top-0 left-0" }), t._v(" "), r("nav", { staticClass: "flex justify-center pt-3 flex-wrap" }, t._l(t.layout.footer_links, (function(link) { return r("f-link", { directives: [{ name: "editable", rawName: "v-editable", value: link, expression: "link" }], key: link._uid, staticClass: "footer-link footer-link-dividers text-gray-300 hover:text-white", attrs: { to: link.link, label: link.label, target: link.target } }) })), 1)])])]) : t._e()
                    }), [], !1, null, null, null).exports,
                    notification: Object(m.a)(I, (function() {
                        var t = this,
                            e = t.$createElement,
                            r = t._self._c || e;
                        return t.isVisible ? r("div", { directives: [{ name: "editable", rawName: "v-editable", value: t.layout, expression: "layout" }], staticClass: "fixed left-0 bottom-0 z-40 w-full flex justify-center", class: "bg-" + t.layout.notification_color }, [r("div", { staticClass: "max-w-md md:max-w-2xl md:flex py-2 px-3 text-center" }, [r("div", { staticClass: "flex-1 flex flex-col justify-center" }, [r("div", { staticClass: "md:whitespace-pre-line pr-6 text-sm md:text-base", staticStyle: { "min-width": "18rem" }, domProps: { innerHTML: t._s(t.layout.notification_text) } })]), t._v(" "), r("div", { staticClass: "flex flex-col justify-center" }, [t.layout.notification_btn_href ? r("f-link", { staticClass: "btn mx-auto px-3 md:py-2 md:px-6 mt-2 md:mt-0 w-64 md:w-auto text-lg", attrs: { label: t.layout.notification_btn_label, to: t.layout.notification_btn_href, target: "blank" } }) : t._e()], 1)]), t._v(" "), t.isDismissable ? r("button", { staticClass: "text-black block text-xl hover:opacity-75", class: "absolute right-0 p-1 mr-1 md:mr-4", staticStyle: { "font-family": "Arial, sans-serif", top: "22%" }, domProps: { textContent: t._s("×") }, on: { click: t.close } }) : t._e()]) : t._e()
                    }), [], !1, null, null, null).exports
                },
                head: function() { return { link: [{ rel: "canonical", href: "https://fundbox.com" + Object(c.a)(this.$route.path) }], meta: [{ name: "description", hid: "description", content: "" }, { name: "og:description", property: "og:description", hid: "og_description", content: o.a }, { name: "og:image", property: "og:image", hid: "og_image", content: o.b }, { name: "twitter:image", hid: "twitter_image", content: o.b }, { name: "twitter:description", hid: "twitter_description", content: o.a }, { name: "twitter:card", hid: "twitter_card", content: "summary_large_image" }, { name: "twitter:site", hid: "twitter_site", content: "@fundbox" }] } },
                data: function() { return { sideNavOpened: !1 } },
                mounted: function() { this.trackElements(), this.applyScale() },
                methods: {
                    toggleSideNav: function() { this.sideNavOpened = !this.sideNavOpened },
                    applyScale: function() {
                        var t = function() {
                            var t = window.innerWidth - document.documentElement.clientWidth || 0,
                                e = document.body.clientWidth + t,
                                r = e >= 768 && e < 1024 ? 1024 : e;
                            document.documentElement.style.fontSize = 16 * e / r + "px"
                        };
                        window.addEventListener("resize", t, !1), t()
                    },
                    trackElements: function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = e.contentOnly;
                        setTimeout((function() {
                            if (!t.$mp) return null;
                            var e = r ? "main" : "body";
                            document.querySelectorAll("".concat(e, ' a:not([data-skip-link-track="true"])')).forEach((function(input) {
                                return input.addEventListener("click", (function(e) {
                                    var link = e.currentTarget,
                                        r = link.getAttribute("href"),
                                        n = "default";
                                    if (/^tel\:/i.test(r) && (n = "tel"), /^mailto\:/i.test(r) && (n = "mail"), "default" == n) {
                                        var o = link.dataset.trackTitle;
                                        if (o && o.length || (o = link.getAttribute("title")) && o.length || (o = link.innerText), "_blank" === link.target || link.getAttribute("internal")) return t.$trackClick({ title: o, href: r, tag: "a" }), !0;
                                        t.$trackClick({ title: o, href: r, tag: "a", redirect: !0 }), e.preventDefault()
                                    }
                                }))
                            })), document.querySelectorAll("".concat(e, ' button:not([data-skip-button-track="true"])')).forEach((function(input) {
                                return input.addEventListener("click", (function(e) {
                                    var r = e.currentTarget,
                                        n = r.dataset.trackTitle;
                                    n && n.length || (n = r.getAttribute("title")) && n.length || (n = r.innerText), n && n.length && t.$trackClick({ title: n, tag: "button" })
                                }))
                            })), document.querySelectorAll("".concat(e, ' input:not([data-skip-button-track="true"])')).forEach((function(input) {
                                return input.addEventListener("blur", (function(e) {
                                    var input = e.currentTarget,
                                        r = input.dataset.trackTitle;
                                    r && r.length || (r = input.getAttribute("placeholder")) && r.length || (r = input.getAttribute("name")), r && r.length && input.value && t.$mp.track("Form Field Value Entered", { "Field Name": r, "Class Name": input.parentNode.className })
                                }))
                            }))
                        }), 100)
                    }
                },
                computed: {
                    layout: function() { return this.$store.state.layout },
                    menu: function() {
                        var t, e;
                        return null === (t = this.layout) || void 0 === t || null === (e = t.topnav_menu) || void 0 === e ? void 0 : e.map((function(menu) {
                            var t, e, r = (null === (t = menu.target) || void 0 === t || null === (e = t.links) || void 0 === e ? void 0 : e.length) && menu.target.links.map((function(link) { return { label: link, hash: Object(c.b)(link) } }));
                            return function(t) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var source = null != arguments[i] ? arguments[i] : {};
                                    i % 2 ? H(Object(source), !0).forEach((function(e) { Object(n.a)(t, e, source[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : H(Object(source)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e)) }))
                                }
                                return t
                            }({ hashLinks: r, dropdown: r || menu.columns.length ? menu.label : null }, menu)
                        }))
                    }
                },
                watch: { $route: function() { this.sideNavOpened && this.toggleSideNav(), this.trackElements({ contentOnly: !0 }) } },
                jsonld: function() { return l.a }
            },
            F = R,
            U = Object(m.a)(F, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", [t.menu ? r("top-nav", { attrs: { menu: t.menu }, on: { "toggle-sidenav": t.toggleSideNav } }) : t._e(), t._v(" "), r("side-nav", { attrs: { menu: t.menu, opened: t.sideNavOpened }, on: { "toggle-sidenav": t.toggleSideNav } }), t._v(" "), r("div", { staticClass: "flex flex-col mt-12 md:mt-20 md:min-h-screen", style: t.sideNavOpened ? "filter: blur(5px)" : "" }, [r("nuxt", { staticClass: "flex-1" }), t._v(" "), r("bottom-footer")], 1), t._v(" "), r("client-only", [r("notification")], 1), t._v(" "), r("warning")], 1)
            }), [], !1, null, null, null);
        e.a = U.exports
    }, function(t, e, r) {
        "use strict";
        r(37), r(46);
        var n = r(195),
            o = r(5),
            l = r(4),
            c = (r(43), r(69), r(28), r(67), r(22), r(15), r(14), r(10), r(18), r(11), r(19), r(289));

        function d(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(object, t).enumerable }))), e.push.apply(e, r)
            }
            return e
        }

        function m(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(e) { Object(o.a)(t, e, source[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e)) }))
            }
            return t
        }
        var f = {
                components: { spinner: r(184).a, TheMask: c.TheMask },
                props: { formId: String, fileUrl: String, formUrl: String, emailOnly: Boolean, variant: { type: String, default: "simple" }, textBtn: { type: String, default: "Submit" }, scope: { type: String, default: "Common_Subscribe" } },
                methods: {
                    resetErrors: function() { this.errors = [] },
                    validate: function() {
                        for (var t in this.form) {
                            var e = this.form[t];
                            this.emailOnly && "email" !== t || (this.vendorForm && "phone" === t || (this.vendorForm || "referrerEmail" !== t) && (this.vendorForm || "referrerName" !== t) && (this.vendorForm || "referrerBusinessName" !== t) && ("revenue" !== this.variant && "revenue" === t || (!e || e.length < 2 ? this.errors.push(t) : "email" !== t || this.$isValidEmail(e) ? "phone" !== t || this.$isValidPhone(e) || this.errors.push("phone") : this.errors.push("email"), this.vendorForm && ("referrerEmail" !== t || this.$isValidEmail(e) ? "referrerName" !== t || e ? "referrerBusinessName" !== t || e || this.errors.push("referrerBusinessName") : this.errors.push("referrerName") : this.errors.push("referrerEmail")))))
                        }
                        if (this.errors.length) throw new Error("validation error ".concat(this.errors.join(", ")))
                    },
                    submit: function() {
                        var t = this;
                        return Object(l.a)(regeneratorRuntime.mark((function e() {
                            var r, n, o, l;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.loading = !0, e.prev = 1, t.resetErrors(), t.validate(), r = null, t.fileUrl && (n = t.fileUrl.split("/x/")[1], r = n ? "/storage/" + n : null), o = {}, ["utm_term", "utm_source", "utm_medium", "utm_content", "utm_campaign", "campaign_id", "campaign_name", "campaign_source"].map((function(param) { o[param] = t.$route.query[param] || null })), (l = t.form).phone = "+1" + l.phone, e.next = 12, t.$axios({ method: "post", url: "/.netlify/functions/contact-form", data: m(m(m({ formId: t.formId, form: t.formUrl }, o), l), {}, { file: r }) });
                                    case 12:
                                        t.$trackForm({ page: t.$route.path, form: t.formUrl, class: t.scope }), t.$gtm.push({ event: "submit-pardot-lead-form" }), t.downloadURL = r, t.$emit("success"), t.success = !0, e.next = 22;
                                        break;
                                    case 19:
                                        e.prev = 19, e.t0 = e.catch(1), console.error(e.t0);
                                    case 22:
                                        t.loading = !1;
                                    case 23:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 19]
                            ])
                        })))()
                    }
                },
                data: function() { return { form: { referrerBusinessName: null, referrerEmail: null, referrerName: null, businessName: null, firstName: null, lastName: null, revenue: null, email: null, phone: null }, downloadURL: null, success: !1, loading: !1, errors: [] } },
                computed: { vendorForm: function() { return "vendor" === this.variant }, referrerPrefix: function() { return this.vendorForm ? "Vendor" : "" } }
            },
            h = r(1),
            component = Object(h.a)(f, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "contact-form", class: t.scope + "-wrapper " + (t.success ? "submitted" : "") }, [t.success ? r("div", { class: t.scope + "-submitted" }, [t.downloadURL ? r("div", { staticClass: "text-lg" }, [t._v("Click here to download the file:")]) : t._e(), t._v(" "), t.downloadURL ? r("a", {
                    class: t.scope + "-signup btn btn-md mt-3 w-full",
                    attrs: { href: t.downloadURL, "data-track-title": "Download", download: "" },
                    on: {
                        contextmenu: function(t) {
                            return t.preventDefault(),
                                function() {}.apply(null, arguments)
                        }
                    }
                }, [t._v("\n      Download\n    ")]) : t._e()]) : t._e(), t._v(" "), t.success ? t._e() : [r("form", { class: [t.scope + "-form", t.emailOnly ? "sm:flex" : ""], on: { submit: function(e) { return e.preventDefault(), t.submit.apply(null, arguments) } } }, [t.emailOnly ? t._e() : r("div", { class: t.scope + "-input-wrapper" }, [r("input", { directives: [{ name: "model", rawName: "v-model.trim", value: t.form.firstName, expression: "form.firstName", modifiers: { trim: !0 } }], class: { "border-coral": t.errors.includes("firstName") }, attrs: { type: "text", placeholder: "First name", name: "firstName", "data-track-title": "Subscribe — First name" }, domProps: { value: t.form.firstName }, on: { focus: t.resetErrors, change: t.resetErrors, input: function(e) { e.target.composing || t.$set(t.form, "firstName", e.target.value.trim()) }, blur: function(e) { return t.$forceUpdate() } } }), t._v(" "), r("label", { class: t.scope + "-label" }, [t._v(t._s(t.referrerPrefix) + " First name")]), t._v(" "), t.errors.includes("firstName") ? r("div", { class: t.scope + "-error" }, [t._v("Please enter a valid name")]) : t._e()]), t._v(" "), t.emailOnly ? t._e() : r("div", { class: t.scope + "-input-wrapper" }, [r("input", { directives: [{ name: "model", rawName: "v-model.trim", value: t.form.lastName, expression: "form.lastName", modifiers: { trim: !0 } }], class: { "border-coral": t.errors.includes("lastName") }, attrs: { type: "text", placeholder: "Last name", name: "lastName", "data-track-title": "Subscribe — Last name" }, domProps: { value: t.form.lastName }, on: { focus: t.resetErrors, change: t.resetErrors, input: function(e) { e.target.composing || t.$set(t.form, "lastName", e.target.value.trim()) }, blur: function(e) { return t.$forceUpdate() } } }), t._v(" "), r("label", { class: t.scope + "-label" }, [t._v(t._s(t.referrerPrefix) + " Last name")]), t._v(" "), t.errors.includes("lastName") ? r("div", { class: t.scope + "-error" }, [t._v("Please enter a valid name")]) : t._e()]), t._v(" "), r("div", { class: [t.scope + "-input-wrapper", t.emailOnly ? "w-full flex-1 pb-4 sm:pb-0" : ""], style: t.emailOnly ? "margin-bottom: 0" : "" }, [r("input", { directives: [{ name: "model", rawName: "v-model.trim", value: t.form.email, expression: "form.email", modifiers: { trim: !0 } }], class: { "border-coral": t.errors.includes("email") }, attrs: { type: "email", placeholder: "Email address", name: "email", "data-track-title": "Subscribe — Email address" }, domProps: { value: t.form.email }, on: { focus: t.resetErrors, change: t.resetErrors, input: function(e) { e.target.composing || t.$set(t.form, "email", e.target.value.trim()) }, blur: function(e) { return t.$forceUpdate() } } }), t._v(" "), r("label", { class: t.scope + "-label" }, [t._v(t._s(t.referrerPrefix) + " Email address")]), t._v(" "), t.errors.includes("email") ? r("div", { class: t.scope + "-error" }, [t._v("Please enter a valid email address")]) : t._e()]), t._v(" "), t.emailOnly ? t._e() : r("div", { class: t.scope + "-input-wrapper" }, [r("input", { directives: [{ name: "model", rawName: "v-model.trim", value: t.form.businessName, expression: "form.businessName", modifiers: { trim: !0 } }], class: { "border-coral": t.errors.includes("businessName") }, attrs: { type: "text", placeholder: "Company name", name: "businessName", "data-track-title": "Subscribe — Company name" }, domProps: { value: t.form.businessName }, on: { focus: t.resetErrors, change: t.resetErrors, input: function(e) { e.target.composing || t.$set(t.form, "businessName", e.target.value.trim()) }, blur: function(e) { return t.$forceUpdate() } } }), t._v(" "), r("label", { class: t.scope + "-label" }, [t._v(t._s(t.referrerPrefix) + " Company name")]), t._v(" "), t.errors.includes("businessName") ? r("div", { class: t.scope + "-error" }, [t._v("Please enter a valid company name")]) : t._e()]), t._v(" "), t.emailOnly ? t._e() : r("div", { class: t.scope + "-input-wrapper" }, [r("the-mask", { class: { "border-coral": t.errors.includes("phone") }, attrs: { mask: "+1 (###) ###-####", type: "tel", inputmode: "numeric", placeholder: "Phone number", name: "phone", "data-track-title": "Subscribe — Phone number" }, nativeOn: { focus: function(e) { return t.resetErrors.apply(null, arguments) }, change: function(e) { return t.resetErrors.apply(null, arguments) } }, model: { value: t.form.phone, callback: function(e) { t.$set(t.form, "phone", e) }, expression: "form.phone" } }), t._v(" "), r("label", { class: t.scope + "-label" }, [t._v("Phone number")]), t._v(" "), t.errors.includes("phone") ? r("div", { class: t.scope + "-error" }, [t._v("Please enter a valid phone number")]) : t._e()], 1), t._v(" "), r("button", { class: [t.scope + "-signup text-base btn p-4 w-full leading-5", t.emailOnly ? "sm:w-auto" : "mt-3"], style: t.emailOnly ? "max-height: 3.2rem" : "", attrs: { disabled: t.loading, "data-track-title": "Subscribe" } }, [t.loading ? r("spinner") : [t._v(t._s(t.textBtn))]], 2), t._v(" "), r("input", { attrs: { type: "hidden", name: "ga_cid", value: "" } })]), t._v(" "), r("div", { class: t.scope + "-terms" }, [t._v("By clicking this button, you agree to our "), r("f-link", { attrs: { to: "/privacy" } }, [t._v("Privacy Policy")]), t._v(" and "), r("f-link", { attrs: { to: "/tou" } }, [t._v("Terms of Use")]), t._v(".")], 1)]], 2)
            }), [], !1, null, null, null),
            v = component.exports,
            x = r(8),
            _ = {
                props: { blok: Object },
                components: { contactForm: v, curvesWhiteBrush: n.a },
                computed: { hasLink: function() { var t; return null === (t = this.blok.form_id) || void 0 === t ? void 0 : t.includes("https") }, twoColumns: function() { return !this.blok.centered }, title: function() { return this.success ? this.successTitle : this.blok.title }, text: function() { return this.success ? this.successText : this.blok.text }, successTitle: function() { return this.blok.success_title || "Thank you!" }, successText: function() { return this.blok.success_text || "We'll be in touch shortly." } },
                data: function() { return { success: !1 } },
                methods: { onSuccess: function() { this.success = !0 } },
                mounted: function() {
                    if (!this.$screen.md) return null;
                    Object(x.b)({ element: this.$el })
                }
            },
            w = (r(427), r(428), Object(h.a)(_, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "p-5 pb-16 md:pb-20 md:px-12 xl:px-48 Common_Subscribe" }, [r("div", { staticClass: "md:flex justify-between relative", class: t.twoColumns ? "" : "text-center" }, [r("figure", { staticClass: "absolute top-0 md:w-full max-w-4xl", class: t.twoColumns ? "right-0 mt-48 sm:mt-32 -mr-64" : "mt-4 left-0 -ml-20 md:ml-0", staticStyle: { width: "250%" } }, [r("curves-white-brush", { staticClass: "text-left", attrs: { color: t.blok.color } })], 1), t._v(" "), r("div", { staticClass: "flex-1 relative", attrs: { "data-parallax": "", "data-shift": "12rem" } }, [r("h3", { staticClass: "font-bold text-3xl xl:text-4xl my-4 md:my-8 xl:whitespace-pre-line", domProps: { textContent: t._s(t.title) } }), t._v(" "), r("div", { staticClass: "max-w-sm text-base xl:whitespace-pre-line", class: t.twoColumns ? "" : "mx-auto", domProps: { innerHTML: t._s(t.text) } }), t._v(" "), t.hasLink ? r("f-link", { staticClass: "btn btn-md mt-6", attrs: { to: t.blok.form_id, label: t.blok.btn_label, target: "blank" } }) : t._e()], 1), t._v(" "), t.twoColumns ? r("div", { staticClass: "md:pl-10 pt-8 max-w-lg md:max-w-full relative" }, [r("contact-form", { class: t.blok.email_only ? "md:mt-24" : "", attrs: { scope: "Common_Subscribe", "form-id": t.blok.form_id, "text-btn": t.blok.btn_label, "email-only": t.blok.email_only, "text-submitted": t.blok.text_submitted, "file-url": t.blok.ebook_file && t.blok.ebook_file.filename }, on: { success: t.onSuccess } })], 1) : t._e()])])
            }), [], !1, null, null, null).exports);
        e.a = w
    }, function(t, e, r) {
        "use strict";
        r(10);
        var n = r(8),
            o = r(42),
            l = r(39),
            c = { components: { brush: r(21).a }, props: { color: String } },
            d = r(1),
            m = Object(d.a)(c, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("brush", {
                    attrs: {
                        start: "80",
                        delay: "10",
                        width: "2160",
                        height: "1440",
                        duration: "800",
                        points: [
                            [64, 516, 0, 0],
                            [64, 516, 200, 353],
                            [136, 578, 200, 707],
                            [200, 639, 200, 889],
                            [254, 682, 200, 975],
                            [352, 736, 200, 1152],
                            [419, 764, 200, 1248],
                            [507, 794, 200, 1420],
                            [604, 825, 200, 1602],
                            [727, 846, 200, 1864],
                            [786, 855, 200, 1961],
                            [857, 859, 200, 2143],
                            [952, 870, 200, 2406],
                            [1034, 867, 150, 2674],
                            [1075, 855, 110, 2942],
                            [1096, 844, 81.5, 3076],
                            [1116, 833, 53, 3210],
                            [1120, 831, 51.9, 3228],
                            [1124, 830, 50.8, 3245],
                            [1127, 827, 48.7, 3263],
                            [1131, 826, 47.6, 3281],
                            [1135, 825, 44, 3299],
                            [1140, 822, 44.4, 3317],
                            [1143, 819, 41.8, 3335],
                            [1147, 816, 42.2, 3353],
                            [1151, 814, 39.1, 3371],
                            [1155, 811, 38, 3389],
                            [1158, 809, 36.4, 3407],
                            [1162, 806, 34.8, 3425],
                            [1166, 803, 33.2, 3443],
                            [1171, 801, 30.6, 3461],
                            [1174, 798, 30.5, 3479],
                            [1177, 795, 30.4, 3497],
                            [1182, 792, 29.3, 3515],
                            [1186, 789, 28.200000000000003, 3533],
                            [1188, 785, 29.133333333333336, 3545],
                            [1190, 784, 30.066666666666666, 3557],
                            [1191, 781, 31, 3569],
                            [1216, 747, 90, 4019],
                            [1210, 691, 120, 4367],
                            [1175, 619, 200, 4817],
                            [1090, 550, 200, 5359],
                            [1036, 533, 200, 5627],
                            [972, 533, 200, 6162],
                            [939, 591, 200, 6613],
                            [941, 643, 200, 6875],
                            [1045, 719, 200, 7320],
                            [1144, 762, 200, 7593],
                            [1259, 812, 200, 7856],
                            [1382, 872, 200, 8124],
                            [1445, 918, 200, 8220],
                            [1524, 950, 200, 8403],
                            [1645, 991, 200, 8660],
                            [1708, 1034, 200, 8751],
                            [1840, 1043, 200, 8938],
                            [1937, 1069, 200, 9196],
                            [2026, 1080, 200, 9469],
                            [2114, 1077, 200, 1e4]
                        ],
                        image: r(434),
                        color: t.color
                    }
                })
            }), [], !1, null, null, null).exports,
            f = r(52),
            h = r.n(f),
            v = r(41),
            x = r.n(v),
            _ = r(40),
            w = r.n(_),
            k = r(16),
            y = {
                props: { blok: Object },
                components: { Slide: k.c, Hooper: k.a, Pagination: k.b, wavesCoralBrush: o.a, zigzagBrush: l.a, loopBrush: m, rightIcon: w.a, leftIcon: x.a, arrow: h.a },
                mounted: function() {
                    if (this.isMounted = !0, !this.$screen.sm) return null;
                    Object(n.b)({ element: this.$el })
                },
                methods: { loadMore: function() { this.page = this.page + 1 } },
                computed: {
                    paginatedItems: function() { var t = this; return this.blok.items.filter((function(i, e) { return e < 6 + 6 * t.page })) },
                    showPagination: function() {
                        var t = this.blok.items.length,
                            e = (t - 6) / 6;
                        return t > 6 && this.page < e
                    },
                    isDesktop: function() { return !this.isMounted || this.$screen.sm },
                    isCompact: function() { return this.blok.items.length > 12 }
                },
                data: function() { return { page: 0, isMounted: !1, linkLabel: "Read the full story", settings: { itemsToShow: 1, transition: 400, wheelControl: !1, infiniteScroll: !0 } } }
            },
            C = (r(435), Object(d.a)(y, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "py-8 sm:px-4 md:py-20 md:px-8 xl:px-24 relative" }, [t.blok.alternative_shmiggle ? r("loop-brush", { staticClass: "absolute top-0 right-0 mt-48 md:mt-64 md:-mr-20 w-full max-w-2xl", attrs: { color: t.blok.color } }) : t._e(), t._v(" "), t.blok.alternative_shmiggle || t.blok.is_narrow ? t._e() : r("zigzag-brush", { staticClass: "absolute top-0 left-0 mt-32 -ml-20 w-full max-w-3xl", attrs: { color: t.blok.color } }), t._v(" "), t.blok.is_narrow ? r("waves-coral-brush", { staticClass: "max-w-xs sm:max-w-sm w-full absolute top-0 left-1/2", class: "-ml-40 sm:-ml-48 mt-2 md:mt-12", attrs: { color: t.blok.color } }) : t._e(), t._v(" "), t.blok.title ? r("h3", { staticClass: "text-3xl md:text-4xl mb-6 md:mb-10 text-center relative", domProps: { textContent: t._s(t.blok.title) } }) : t._e(), t._v(" "), t.isDesktop ? r("transition-group", { staticClass: "md:pt-4 max-w-6xl relative mx-auto hidden sm:grid sm:grid-cols-2 md:grid-cols-3", class: t.blok.is_narrow ? "md:max-w-4xl gap-6 md:gap-12" : "gap-6 md:gap-12 xl:gap-x-24", attrs: { name: "list-fade", tag: "div", "data-parallax": "", "data-shift": "6rem" } }, t._l(t.paginatedItems, (function(e) { return r("div", { directives: [{ name: "editable", rawName: "v-editable", value: e, expression: "item" }], key: e._uid, staticClass: "fbx-press-item" }, [e.logo.filename ? r("figure", { staticClass: "h-12 w-32", class: t.blok.is_narrow ? "" : "mx-auto" }, [r("f-image", { staticClass: "object-contain w-full h-full", class: t.blok.is_narrow ? "object-left" : "object-center", attrs: { image: e.logo, resize: !1 } })], 1) : t._e(), t._v(" "), r("p", { staticClass: "mt-6 flex-1", domProps: { textContent: t._s(e.text) } }), t._v(" "), r("div", { staticClass: "mt-4" }, [e.date ? r("time", { staticClass: "mb-2 text-sm block" }, [t._v("\n          " + t._s(t.$date(e.date, !0)) + "\n        ")]) : t._e(), t._v(" "), r("f-link", { staticClass: "link-underline font-semibold", attrs: { label: t.linkLabel, to: e.link, target: "_blank" } })], 1)]) })), 0) : r("hooper", { ref: "carousel", staticClass: "text-center", attrs: { settings: t.settings } }, [t._l(t.blok.items, (function(e) { return r("slide", { key: e._uid }, [r("div", { staticClass: "fbx-press-item mx-3 mt-3 max-w-xs" }, [e.logo.filename ? r("figure", { staticClass: "h-12 w-32" }, [r("f-image", { staticClass: "object-contain object-left w-full h-full", attrs: { image: e.logo, resize: !1 } })], 1) : t._e(), t._v(" "), r("p", { staticClass: "mt-6 flex-1 max-w-xs", domProps: { textContent: t._s(e.text) } }), t._v(" "), r("div", { staticClass: "mt-4" }, [e.date ? r("time", { staticClass: "mb-2 text-sm block" }, [t._v("\n            " + t._s(t.$date(e.date, !0)) + "\n          ")]) : t._e(), t._v(" "), r("f-link", { staticClass: "link-underline font-semibold", attrs: { label: t.linkLabel, to: e.link, target: "_blank" } })], 1)])]) })), t._v(" "), r("div", { staticClass: "flex justify-center my-6", attrs: { slot: "hooper-addons" }, slot: "hooper-addons" }, [r("button", { staticClass: "-mb-3", on: { click: function(e) { return t.$refs.carousel.slidePrev() } } }, [r("left-icon", { staticClass: "stroke-current text-black" })], 1), t._v(" "), r("pagination", { staticClass: "mx-3", class: t.isCompact ? "mt-2 mx-6" : "", attrs: { mode: t.isCompact ? "fraction" : "indicator" } }), t._v(" "), r("button", { staticClass: "-mb-3", on: { click: function(e) { return t.$refs.carousel.slideNext() } } }, [r("right-icon", { staticClass: "stroke-current text-black" })], 1)], 1)], 2), t._v(" "), t.blok.link_label ? r("section", { staticClass: "sm:pt-10 z-20 text-center", attrs: { "data-parallax": "", "data-shift": "20rem" } }, [r("f-link", { staticClass: "hover:opacity-75 font-semibold", attrs: { to: t.blok.link, label: t.blok.link_label } }), t._v(" "), r("arrow", { staticClass: "ml-3 -mb-px" })], 1) : t.showPagination && t.isDesktop ? r("section", { staticClass: "py-4 z-20 mt-8 text-center", attrs: { "data-parallax": "" } }, [r("button", { staticClass: "hover:opacity-75 font-semibold text-base", on: { click: t.loadMore } }, [t._v("\n      Load more\n      "), r("arrow", { staticClass: "ml-3 -mb-px" })], 1)]) : t._e()], 1)
            }), [], !1, null, null, null).exports);
        e.a = C
    }, function(t, e, r) {
        "use strict";
        r(22);
        var n = r(129),
            o = { components: { brush: r(21).a }, props: { color: String } },
            l = r(1),
            c = Object(l.a)(o, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("brush", {
                    attrs: {
                        width: "728",
                        height: "540",
                        duration: "600",
                        points: [
                            [13, 516, 0, 0],
                            [13, 516, 45, 102],
                            [16, 504, 45, 205],
                            [19, 491, 45, 261],
                            [21, 479, 45, 304],
                            [23, 468, 45, 347],
                            [28, 453, 45, 381],
                            [33, 441, 45, 425],
                            [38, 426, 45, 463],
                            [41, 414, 45, 489],
                            [42, 403, 45, 519],
                            [45, 388, 45, 553],
                            [48, 374, 45, 588],
                            [53, 362, 45, 630],
                            [60, 350, 45, 669],
                            [65, 337, 45, 703],
                            [69, 324, 45, 729],
                            [75, 309, 45, 763],
                            [80, 296, 45, 781],
                            [85, 283, 45, 806],
                            [92, 272, 45, 836],
                            [98, 260, 45, 862],
                            [105, 246, 45, 896],
                            [112, 232, 45, 931],
                            [120, 220, 45, 961],
                            [128, 207, 45, 999],
                            [135, 195, 45, 1047],
                            [141, 183, 45, 1081],
                            [151, 169, 45, 1124],
                            [158, 157, 45, 1154],
                            [165, 144, 45, 1201],
                            [175, 131, 45, 1244],
                            [185, 120, 45, 1296],
                            [197, 107, 45, 1360],
                            [206, 93, 45, 1403],
                            [219, 80, 45, 1454],
                            [232, 69, 45, 1497],
                            [243, 58, 45, 1549],
                            [256, 48, 45, 1613],
                            [269, 40, 45, 1652],
                            [281, 33, 45, 1691],
                            [294, 28, 45, 1729],
                            [308, 26, 45, 1776],
                            [320, 21, 45, 1828],
                            [331, 18, 45, 1888],
                            [343, 16, 45, 1935],
                            [355, 16, 45, 1991],
                            [366, 20, 45, 2025],
                            [378, 31, 45, 2081],
                            [382, 42, 45, 2116],
                            [389, 56, 45, 2158],
                            [396, 69, 45, 2206],
                            [401, 82, 45, 2270],
                            [402, 95, 45, 2317],
                            [404, 111, 45, 2356],
                            [404, 123, 45, 2382],
                            [406, 137, 45, 2420],
                            [406, 150, 45, 2472],
                            [407, 162, 45, 2510],
                            [407, 173, 45, 2545],
                            [407, 185, 45, 2575],
                            [408, 197, 45, 2592],
                            [408, 210, 45, 2626],
                            [403, 216, 45, 2661],
                            [399, 219, 45, 2695],
                            [407, 243, 20, 2729],
                            [406, 251, 21, 2759],
                            [412, 282, 45, 2811],
                            [401, 284, 45, 2854],
                            [398, 299, 45, 2901],
                            [395, 311, 45, 2931],
                            [389, 323, 45, 2969],
                            [385, 335, 45, 3008],
                            [377, 347, 45, 3038],
                            [372, 359, 45, 3072],
                            [366, 374, 45, 3120],
                            [361, 385, 45, 3154],
                            [358, 397, 45, 3197],
                            [353, 409, 45, 3235],
                            [348, 421, 45, 3270],
                            [340, 433, 45, 3313],
                            [334, 444, 45, 3364],
                            [323, 458, 45, 3420],
                            [312, 470, 45, 3476],
                            [304, 483, 45, 3519],
                            [295, 495, 45, 3566],
                            [284, 508, 45, 3622],
                            [270, 518, 45, 3678],
                            [257, 524, 45, 3725],
                            [243, 530, 45, 3776],
                            [232, 531, 45, 3828],
                            [222, 519, 45, 3918],
                            [222, 507, 45, 3952],
                            [221, 494, 45, 3991],
                            [222, 481, 45, 4029],
                            [226, 470, 45, 4073],
                            [232, 457, 45, 4124],
                            [240, 446, 45, 4176],
                            [247, 433, 45, 4218],
                            [254, 420, 45, 4261],
                            [262, 407, 45, 4313],
                            [267, 395, 45, 4369],
                            [273, 383, 45, 4407],
                            [280, 370, 45, 4459],
                            [287, 357, 45, 4497],
                            [293, 345, 45, 4540],
                            [300, 334, 45, 4587],
                            [312, 322, 45, 4639],
                            [323, 310, 45, 4686],
                            [336, 302, 45, 4746],
                            [347, 294, 45, 4811],
                            [359, 286, 45, 4879],
                            [372, 278, 45, 4948],
                            [378, 257, 45, 4991],
                            [406, 282, 34, 5029],
                            [405, 259, 19, 5073],
                            [369, 275, 45, 5115],
                            [446, 230, 45, 5171],
                            [436, 245, 45, 5261],
                            [457, 223, 45, 5313],
                            [471, 226, 45, 5390],
                            [485, 238, 45, 5493],
                            [497, 243, 45, 5562],
                            [508, 256, 45, 5699],
                            [513, 274, 45, 5841],
                            [513, 286, 45, 5931],
                            [513, 299, 45, 5974],
                            [511, 310, 45, 6025],
                            [511, 322, 45, 6085],
                            [509, 334, 45, 6133],
                            [508, 345, 45, 6193],
                            [507, 357, 45, 6278],
                            [503, 369, 45, 6368],
                            [497, 380, 45, 6502],
                            [490, 392, 45, 6575],
                            [481, 404, 45, 6682],
                            [472, 415, 45, 6781],
                            [463, 427, 45, 6888],
                            [449, 429, 45, 6974],
                            [439, 416, 45, 7077],
                            [440, 404, 45, 7133],
                            [449, 392, 45, 7193],
                            [460, 380, 45, 7248],
                            [471, 369, 45, 7309],
                            [483, 358, 45, 7364],
                            [491, 346, 45, 7459],
                            [503, 336, 45, 7575],
                            [515, 324, 45, 7639],
                            [527, 313, 45, 7716],
                            [535, 302, 45, 7793],
                            [546, 290, 45, 7905],
                            [558, 286, 45, 7974],
                            [570, 283, 45, 8025],
                            [581, 283, 45, 8072],
                            [593, 283, 45, 8145],
                            [604, 290, 45, 8218],
                            [615, 302, 45, 8321],
                            [623, 314, 45, 8399],
                            [625, 327, 45, 8480],
                            [625, 339, 45, 8549],
                            [625, 350, 45, 8648],
                            [623, 362, 45, 8716],
                            [620, 374, 45, 8802],
                            [618, 387, 45, 8897],
                            [610, 398, 45, 9051],
                            [599, 409, 45, 9150],
                            [587, 413, 45, 9249],
                            [580, 401, 45, 9334],
                            [582, 388, 45, 9373],
                            [588, 376, 45, 9420],
                            [601, 364, 45, 9472],
                            [612, 353, 45, 9532],
                            [625, 347, 45, 9574],
                            [637, 340, 45, 9626],
                            [648, 337, 45, 9708],
                            [661, 332, 45, 9776],
                            [674, 330, 45, 9836],
                            [689, 329, 45, 9888],
                            [701, 331, 45, 9931],
                            [712, 335, 45, 1e4]
                        ],
                        image: r(443),
                        color: t.color
                    }
                })
            }), [], !1, null, null, null).exports,
            d = r(8),
            m = { props: { blok: Object }, components: { resourcesGrid: n.a, spiral: c }, computed: { posts: function() { return this.blok.resources.map(Object(n.b)({})) } }, mounted: function() { Object(d.b)({ element: this.$el, duration: "120%" }) } },
            f = Object(l.a)(m, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "px-4 xl:px-24 py-16 sm:pb-20 relative" }, [r("figure", { staticClass: "absolute right-0 bottom-0 overflow-hidden px-64 py-32 xl:mr-20 mb-24", class: "bg-yellow rounded-xl hidden sm:block", attrs: { "data-parallax": "", "data-shift": "20rem" } }, [r("spiral", { staticClass: "absolute right-0 top-0 mt-6 w-full max-w-xl", attrs: { color: "orange" } })], 1), t._v(" "), r("spiral", { staticClass: "absolute right-0 top-0 mt-64 w-full max-w-xl", class: "sm:hidden", attrs: { "data-parallax": "", "data-shift": "32rem", color: "orange" } }), t._v(" "), t.blok.title ? r("h2", { staticClass: "my-4 text-3xl md:text-4xl font-bold text-center", domProps: { textContent: t._s(t.blok.title) } }) : t._e(), t._v(" "), r("resources-grid", { staticClass: "sm:py-8 z-10 xl:pr-20 sm:pb-24", attrs: { "no-shmiggles": "", posts: t.posts, "data-parallax": "", "data-shift": "5rem" } })], 1)
            }), [], !1, null, null, null).exports;
        e.a = f
    }, , function(t, e, r) {
        "use strict";
        var n = r(8),
            o = r(65),
            l = r(25),
            c = {
                props: { blok: Object },
                components: { richText: o.a, zigzagWhiteBrush: l.a },
                mounted: function() {
                    if (this.mobileRedirect(), !this.$screen.sm) return null;
                    Object(n.b)({ element: this.$el, reversed: !0 })
                },
                methods: {
                    mobileRedirect: function() {
                        try {
                            if (!this.$route.query.mobile_redirect) return null;
                            if (!this.blok.app_store_link || !this.blok.google_play_link) return null;
                            var t = window.navigator.userAgent,
                                e = window.navigator.platform; - 1 !== ["iPhone", "iPad", "iPod"].indexOf(e) ? window.location.href = this.blok.app_store_link : /Android/.test(t) && (window.location.href = this.blok.google_play_link)
                        } catch (t) { console.error(t) }
                    }
                }
            },
            d = (r(419), r(1)),
            m = Object(d.a)(c, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "md:px-24 xl:px-24 pt-10 mb-24 relative" }, [n("h2", { staticClass: "px-4 text-3xl md:text-4xl font-bold md:pl-20 mb-10", domProps: { textContent: t._s(t.blok.title) } }), t._v(" "), n("div", { staticClass: "sm:rounded-xl px-4 sm:px-10 md:px-20 py-10 xl:mr-64 overflow-hidden relative", class: ["bg-" + t.blok.color, "pb-100 sm:pb-10"] }, [n("zigzag-white-brush", { staticClass: "max-w-xs w-full absolute bottom-0 right-0 -mb-20 md:mr-10", attrs: { "data-parallax": "", "data-shift": "2rem", color: t.$getShade(t.blok.color) } }), t._v(" "), n("div", { staticClass: "relative" }, [n("rich-text", { staticClass: "mb-6", attrs: { content: t.blok.content } }), t._v(" "), t.blok.google_play_link ? n("f-link", { staticClass: "mr-2 hover:opacity-75", attrs: { to: t.blok.google_play_link, target: "_blank" } }, [n("img", { attrs: { src: r(414), alt: "Google Play" } })]) : t._e(), t._v(" "), t.blok.app_store_link ? n("f-link", { staticClass: "hover:opacity-75", attrs: { to: t.blok.app_store_link, target: "_blank" } }, [n("img", { attrs: { src: r(415), alt: "App Store" } })]) : t._e()], 1)], 1), t._v(" "), n("f-image", { staticClass: "shadow-lg absolute right-0 top-0 md:w-48 xl:w-64 mr-20", class: "hidden md:block", attrs: { resize: !1, image: t.blok.image_2, "data-parallax": "", "data-shift": "2rem" } }), t._v(" "), n("f-image", { staticClass: "shadow-lg absolute right-1/2 sm:right-0 bottom-0 sm:top-0 w-48 sm:w-40 md:w-48 xl:w-64 -mr-24 sm:mr-6 md:mr-40 xl:mr-64", class: "mt-24 md:mt-0 -mb-10 md:mb-0", attrs: { resize: !1, image: t.blok.image_1, "data-parallax": "", "data-shift": "4rem" } })], 1)
            }), [], !1, null, null, null).exports;
        e.a = m
    }, function(t, e, r) {
        "use strict";
        var n = r(8),
            o = r(244),
            l = r(288),
            c = r.n(l),
            d = r(64),
            m = { props: { blok: Object }, components: { CollapseTransition: o.a, expandIcon: c.a, shmiggle: d.a }, data: function() { return { currentQuestion: null } }, methods: { toggle: function(t) { this.currentQuestion === t ? this.currentQuestion = null : this.currentQuestion = t } }, mounted: function() { Object(n.b)({ element: this.$el }) } },
            f = (r(421), r(1)),
            h = Object(f.a)(m, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("section", { staticClass: "pt-12 pb-24 px-3 sm:px-8 xl:px-24 relative" }, [r("h2", { staticClass: "text-3xl md:text-4xl mb-6 md:mb-16", attrs: { "data-parallax": "", "data-shift": "2rem" }, domProps: { textContent: t._s(t.blok.title) } }), t._v(" "), r("shmiggle", { staticClass: "w-full max-w-2xl absolute right-0 top-0 mt-20 -mr-32", attrs: { color: t.blok.color } }), t._v(" "), r("div", { staticClass: "flex" }, [r("h3", { staticClass: "text-xl md:text-2xl hidden md:block w-full max-w-xs", attrs: { "data-parallax": "", "data-shift": "4rem" }, domProps: { textContent: t._s(t.blok.subtitle) } }), t._v(" "), r("div", { staticClass: "flex-1 max-w-xl" }, [t._l(t.blok.questions, (function(e, i) { return r("div", { key: e._uid, staticClass: "mb-4", attrs: { "data-parallax": "", "data-shift": "20rem", "data-delay": .033 * i } }, [r("div", { staticClass: "flex cursor-pointer", on: { click: function(r) { return t.toggle(e._uid) } } }, [r("expand-icon", { staticClass: "mt-1 mr-3", class: e._uid === t.currentQuestion ? "text-transparent" : "" }), t._v(" "), r("h5", { staticClass: "text-lg md:text-xl font-bold flex-1" }, [t._v(t._s(e.heading))])], 1), t._v(" "), r("collapse-transition", { attrs: { tag: "div" } }, [r("section", { directives: [{ name: "show", rawName: "v-show", value: e._uid === t.currentQuestion, expression: "question._uid === currentQuestion" }] }, [r("div", { staticClass: "pl-8 article-content", domProps: { innerHTML: t._s(e.text.html) } })])])], 1) })), t._v(" "), t.blok.link_label && t.blok.link ? r("div", { staticClass: "mt-12", attrs: { "data-parallax": "", "data-shift": "20rem", "data-delay": .03 * t.blok.questions.length } }, [r("f-link", { staticClass: "link-underline font-semibold", attrs: { to: t.blok.link, target: "_blank" } }, [t._v("\n          " + t._s(t.blok.link_label) + "\n        ")])], 1) : t._e(), t._v(" "), t.blok.text ? r("div", { staticClass: "mt-12 whitespace-pre-line", attrs: { "data-parallax": "", "data-shift": "20rem", "data-delay": .03 * t.blok.questions.length }, domProps: { innerHTML: t._s(t.blok.text) } }) : t._e()], 2)])], 1)
            }), [], !1, null, null, null).exports;
        e.a = h
    }, function(t, e, r) {
        "use strict";
        var n = r(52),
            o = r.n(n),
            l = r(39),
            c = { props: { blok: Object }, components: { arrow: o.a, shmiggle: l.a } },
            d = r(1),
            m = Object(d.a)(c, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "px-3 md:px-10 xl:px-64 py-10 relative" }, [r("h2", { staticClass: "text-4xl font-bold mb-16 text-center relative z-10", domProps: { textContent: t._s(t.blok.title) } }), t._v(" "), r("shmiggle", { staticClass: "absolute left-1/2 top-0 mt-32 -ml-100 w-full max-w-3xl", attrs: { color: t.blok.color } }), t._v(" "), r("section", { staticClass: "grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-12 xl:gap-x-24 relative" }, t._l(t.blok.items, (function(t) { return r("div", { key: t._uid, staticClass: "flex flex-col" }, [r("f-link", { staticClass: "pt-1/1 block relative mb-4 rounded shadow-md mx-4 sm:mx-0 bg-white", attrs: { to: t.link } }, [r("f-image", { staticClass: "rounded-lg object-cover hover:opacity-75", class: "absolute w-full h-full top-0 left-0", attrs: { image: t.image, lazy: "" } })], 1)], 1) })), 0), t._v(" "), t.blok.link_url ? r("f-link", { staticClass: "text-center block font-semibold hover:opacity-75 relative mt-16", attrs: { to: t.blok.link_url } }, [t._v("\n    " + t._s(t.blok.link_label) + "\n    "), r("arrow", { staticClass: "ml-2 -mb-px" })], 1) : t._e()], 1)
            }), [], !1, null, null, null).exports;
        e.a = m
    }, function(t, e, r) {
        "use strict";
        r(103), r(10);
        var n = r(42),
            o = r(39),
            l = r(25),
            c = { props: { blok: Object }, components: { wavesBrush: n.a, zigzagBrush: o.a, strokesBrush: l.a }, methods: { colWidth: function(t) { return "lg" === t ? "w-9/16" : "md" === t ? "w-1/3" : "sm" === t ? "w-1/4" : "flex-1" }, rowHeight: function(t) { return "lg" === t ? "lg:h-82" : "md" === t ? "lg:h-64" : "" }, shmiggle: function(t, e) { var r = this.blok.items[t]; return !!r.has_shmiggle && this.blok.items.filter((function(i) { return i.has_shmiggle })).find((function(t, i) { return i === e && t._uid === r._uid })) } } },
            d = (r(430), r(1)),
            m = Object(d.a)(c, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "py-8 md:py-16 px-3 lg:px-24" }, [r("h2", { staticClass: "font-bold text-3xl lg:text-4xl mb-16 text-center", domProps: { textContent: t._s(t.blok.title) } }), t._v(" "), r("div", { staticClass: "flex flex-wrap justify-center", class: t.blok.is_solid ? "rounded-xl overflow-hidden" : "gap-5" }, t._l(t.blok.items, (function(e, i) { return r("figure", { key: e._uid, staticClass: "fbx-grid-item relative flex flex-col justify-center overflow-hidden", class: [t.blok.is_solid ? "" : "rounded-xl", t.colWidth(e.width), t.rowHeight(e.height), e.image.filename ? "" : "xl:px-12 p-6 bg-" + e.color] }, [e.image.filename ? r("f-image", { staticClass: "w-full h-full object-cover", attrs: { image: e.image } }) : t._e(), t._v(" "), t.shmiggle(i, 0) ? r("waves-brush", { staticClass: "absolute top-0 right-0 w-1/3 -mr-4 -mt-2", attrs: { color: t.$getShade(e.color) } }) : t._e(), t._v(" "), t.shmiggle(i, 2) ? r("zigzag-brush", { staticClass: "absolute top-0 right-0 w-1/2 -mr-4 -mt-8", attrs: { color: t.$getShade(e.color) } }) : t._e(), t._v(" "), t.shmiggle(i, 1) ? r("strokes-brush", { staticClass: "absolute top-0 left-0 w-1/3 -ml-4 -mt-8", attrs: { color: t.$getShade(e.color) } }) : t._e(), t._v(" "), e.image.filename ? t._e() : [r("h3", { staticClass: "text-xl mb-3 font-bold px-10 text-center", domProps: { textContent: t._s(e.title) } }), t._v(" "), r("p", { staticClass: "text-lg text-center", domProps: { textContent: t._s(e.text) } })]], 2) })), 0)])
            }), [], !1, null, null, null).exports;
        e.a = m
    }, function(t, e, r) {
        "use strict";
        var n = r(4),
            o = (r(43), r(8)),
            l = r(290),
            c = {
                props: { blok: Object },
                components: { checkIcon: r.n(l).a },
                mounted: function() {
                    var t = this;
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t.isMounted = !0, e.next = 3, t.$forceUpdate();
                                case 3:
                                    Object(o.b)({ element: t.$el });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                data: function() { return { isMounted: !1 } }
            },
            d = (r(431), r(1)),
            m = Object(d.a)(c, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("section", { staticClass: "xl:max-w-full py-12 md:pb-20 relative text-center px-3" }, [t.blok.title ? r("h2", { staticClass: "text-3xl md:text-4xl mb-6 md:mb-16", domProps: { textContent: t._s(t.blok.title) } }) : t._e(), t._v(" "), t.blok.subtitle ? r("p", { staticClass: "text-base mb-6 md:mb-16 md:-mt-6 block md:whitespace-pre", domProps: { textContent: t._s(t.blok.subtitle) } }) : t._e(), t._v(" "), r("div", { staticClass: "relative" }, [t.isMounted && t.$screen.sm ? r("figure", { staticClass: "bg-lightblue h-82 w-full mt-16 bg-opacity-40 absolute top-0", attrs: { "data-parallax": "", "data-shift": "12rem" } }) : t._e(), t._v(" "), r("table", { staticClass: "shadow-lg mx-auto bg-white text-sm sm:text-base", attrs: { "data-parallax": "", "data-shift": ".1rem" } }, [r("thead", [r("tr", [r("td"), t._v(" "), r("td", { staticClass: "px-2 sm:px-8 py-4" }, [r("div", { staticClass: "text-base sm:text-2xl mb-2" }, [t._v(t._s(t.blok.plan_1_title))]), t._v(" "), r("figure", { staticClass: "bg-blue h-px w-12 sm:w-24 mx-auto" }), t._v(" "), r("div", { staticClass: "mt-2" }, [t._v(t._s(t.blok.plan_1_subtitle))])]), t._v(" "), r("td", { staticClass: "px-2 sm:px-8 py-4 border-blue border-t border-l border-r border-solid" }, [r("div", { staticClass: "text-base sm:text-2xl mb-2" }, [t._v(t._s(t.blok.plan_2_title))]), t._v(" "), r("figure", { staticClass: "bg-blue h-px w-12 sm:w-24 mx-auto" }), t._v(" "), r("div", { staticClass: "mt-2" }, [t._v(t._s(t.blok.plan_2_subtitle))])])])]), t._v(" "), r("tbody", t._l(t.blok.rows.tbody, (function(e) { return r("tr", { key: e._uid }, t._l(e.body, (function(e, i) { return r("td", { key: e._uid }, [i ? "false" === e.value ? r("div", [t._v("—")]) : "true" === e.value ? r("figure", { staticClass: "mx-auto" }, [r("checkIcon", { staticClass: "w-5 h-5" })], 1) : r("div", { domProps: { innerHTML: t._s(e.value) } }) : r("div", { staticClass: "text-left" }, [t._v(t._s(e.value))])]) })), 0) })), 0)])])])
            }), [], !1, null, null, null).exports;
        e.a = m
    }, function(t, e, r) {
        "use strict";
        var n = r(42),
            o = r(64),
            l = r(39),
            c = r(25),
            d = { props: { blok: Object }, components: { wavesBrush: n.a, curlsBrush: o.a, zigzagBrush: l.a, strokesBrush: c.a } },
            m = r(1),
            f = Object(m.a)(d, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "py-8 md:py-16 px-3 md:px-8 xl:px-24" }, [r("h2", { staticClass: "font-bold text-3xl lg:text-4xl mb-16 text-center", domProps: { textContent: t._s(t.blok.title) } }), t._v(" "), r("div", { staticClass: "grid grid-cols-1 sm:grid-cols-2 mx-auto gap-5", class: t.blok.items.length % 2 == 0 ? "md:grid-cols-4" : "md:grid-cols-3" }, t._l(t.blok.items, (function(e, i) { return r("div", { key: e._uid, staticClass: "relative overflow-hidden", class: "rounded-xl bg-" + t.blok.color, staticStyle: { "min-width": "12rem" } }, [r("div", { staticClass: "relative sm:absolute sm:hover:opacity-0 w-full sm:h-full transition-opacity" }, [i ? 1 === i ? r("curls-brush", { staticClass: "absolute bottom-0 right-0 w-2/3 -mr-3 -mb-6", attrs: { color: t.blok.color } }) : 2 === i ? r("strokes-brush", { staticClass: "absolute bottom-0 right-0 w-1/3 -mr-3 -mb-8", attrs: { color: t.blok.color } }) : 3 === i ? r("zigzag-brush", { staticClass: "absolute bottom-0 right-0 w-1/2 -mr-4", attrs: { color: t.blok.color } }) : t._e() : r("waves-brush", { staticClass: "absolute bottom-0 right-0 w-2/3 -mr-4", attrs: { color: t.blok.color } }), t._v(" "), r("f-image", { staticClass: "w-full h-full object-cover", attrs: { image: e.image, alt: e.title } })], 1), t._v(" "), r("div", { staticClass: "px-8 py-10" }, [r("h3", { staticClass: "text-2xl mb-3 font-bold text-center", domProps: { textContent: t._s(e.title) } }), t._v(" "), r("p", { staticClass: "text-center", domProps: { textContent: t._s(e.text) } })])]) })), 0)])
            }), [], !1, null, null, null).exports;
        e.a = f
    }, function(t, e, r) {
        "use strict";
        var n = r(124),
            o = r(82),
            l = r(42),
            c = r(25),
            d = { props: { blok: Object }, components: { arrowBrush: o.a, wavesBrush: l.a, loopBrush: n.a, strokesBrush: c.a } },
            m = r(1),
            f = Object(m.a)(d, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "py-8 md:py-16 px-3 md:px-10 xl:px-24" }, [r("h2", { staticClass: "font-bold text-3xl lg:text-4xl mb-10 md:mb-16 md:whitespace-pre", domProps: { textContent: t._s(t.blok.title) } }), t._v(" "), r("div", { staticClass: "grid md:grid-cols-2 gap-10" }, t._l(t.blok.items, (function(e) { return r("div", { key: e._uid, staticClass: "sm:flex text-center sm:text-left xl:pr-20" }, [r("figure", { staticClass: "rounded-xl sm:mr-6 relative overflow-hidden mb-3 mx-auto flex items-center justify-center text-left", class: "bg-" + e.color, staticStyle: { width: "7rem", height: "7rem" } }, [e.color.includes("yellow") ? r("waves-brush", { staticClass: "absolute bottom-0 left-0 w-48 -ml-2", attrs: { color: t.$getShade(e.color) } }) : e.color.includes("coral") ? r("strokes-brush", { staticClass: "absolute bottom-0 right-0 w-32 -mr-12 -mb-16", attrs: { color: t.$getShade(e.color) } }) : e.color.includes("blue") ? r("arrow-brush", { staticClass: "absolute bottom-0 right-0 w-full -mr-4 transform -rotate-45", attrs: { color: t.$getShade(e.color) } }) : r("loop-brush", { staticClass: "absolute bottom-0 left-0 w-32 -ml-8 -mb-3", attrs: { color: t.$getShade(e.color) } }), t._v(" "), r("img", { staticClass: "w-20 h-20 z-10", attrs: { src: e.icon.filename, alt: e.title } })], 1), t._v(" "), r("div", { staticClass: "flex-1 md:pt-2" }, [r("h3", { staticClass: "text-xl mb-3 font-bold", domProps: { textContent: t._s(e.title) } }), t._v(" "), r("p", { staticClass: "mb-3 text-base", domProps: { textContent: t._s(e.text) } })])]) })), 0)])
            }), [], !1, null, null, null).exports;
        e.a = f
    }, function(t, e, r) {
        "use strict";
        var n = r(8),
            o = r(52),
            l = r.n(o),
            c = r(84),
            d = r(25),
            m = {
                props: { blok: Object },
                components: { arrow: l.a, wistiaVideo: c.a, zigzagWhiteBrush: d.a },
                mounted: function() {
                    if (!this.$screen.md) return null;
                    Object(n.b)({ element: this.$el })
                }
            },
            f = r(1),
            h = Object(f.a)(m, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "pb-4 md:py-16 lg:py-20 md:px-12 xl:px-24 flex flex-col-reverse md:flex-row-reverse items-end" }, [r("section", { staticClass: "w-full md:w-1/2", attrs: { "data-parallax": "", "data-shift": "5rem" } }, [r("h2", { staticClass: "text-4xl pl-20 xl:ml-8 hidden md:block", domProps: { textContent: t._s(t.blok.title) } }), t._v(" "), r("div", { staticClass: "px-4 sm:px-10 pb-10 pt-40 md:pt-10 md:py-12 lg:py-20 md:pl-48 md:pr-10 transform md:translate-y-8 md:-ml-32", class: ["bg-" + t.blok.color, "md:rounded-xl relative overflow-hidden"], staticStyle: { "min-height": "25rem" } }, [r("zigzag-white-brush", { staticClass: "absolute right-0 bottom-0 -mr-48 sm:-mr-24 -mb-40 w-full max-w-xs transform rotate-45", attrs: { color: t.$getShade(t.blok.color) } }), t._v(" "), r("div", { staticClass: "md:pl-4 xl:ml-8 relative" }, [r("h2", { staticClass: "text-3xl mb-3 md:hidden", domProps: { textContent: t._s(t.blok.title) } }), t._v(" "), r("div", { staticClass: "max-w-md text-xl mb-8 xl:pr-10" }, [t._v("\n          “" + t._s(t.blok.quote) + "”\n        ")]), t._v(" "), r("div", { staticClass: "mb-6 font-bold text-base" }, [t._v("\n          " + t._s(t.blok.author) + "\n        ")]), t._v(" "), t.blok.link_label ? r("f-link", { staticClass: "font-semibold hover:opacity-75", attrs: { to: t.blok.link } }, [t._v("\n          " + t._s(t.blok.link_label) + "\n          "), r("arrow", { staticClass: "ml-2 -mb-px" })], 1) : t._e()], 1)], 1)]), t._v(" "), r("section", { staticClass: "w-full md:w-1/2", attrs: { "data-parallax": "", "data-delay": "0.1", "data-shift": "15rem" } }, [r("div", { staticClass: "relative transform translate-y-32 md:-translate-y-8 md:-mr-10 px-4 sm:px-10 md:px-0" }, [r("figure", { staticClass: "rounded-xl bg-gray overflow-hidden relative", class: t.blok.video ? "" : "pt-2/3 md:pt-3/4" }, [t.blok.video ? r("wistia-video", { staticClass: "f-full", attrs: { "video-id": t.blok.video } }) : r("f-image", { staticClass: "w-full h-full object-cover absolute top-0 left-0", attrs: { image: t.blok.image, alt: t.blok.author } })], 1), t._v(" "), r("figure", { staticClass: "absolute font-black ml-6 -mt-24 -top-4", class: "text-" + t.blok.color, staticStyle: { "font-size": "15rem" }, domProps: { textContent: t._s("“") } })])])])
            }), [], !1, null, null, null).exports;
        e.a = h
    }, function(t, e, r) {
        "use strict";
        var n = r(42),
            o = { props: { blok: Object }, components: { wavesCoralBrush: n.a }, computed: { hasPoints: function() { return this.blok.points.length } } },
            l = r(1),
            c = Object(l.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "px-4 xl:px-24 pt-20", class: t.hasPoints ? "md:pb-4" : "pb-16" }, [n("waves-coral-brush", { staticClass: "max-w-xs sm:max-w-sm w-full absolute top-0 left-1/2", class: "-ml-40 sm:-ml-48 mt-16 sm:mt-12", attrs: { color: t.blok.color } }), t._v(" "), n("div", { staticClass: "text-center relative" }, [n("h2", { staticClass: "text-3xl md:text-4xl mb-8 md:mb-12", domProps: { textContent: t._s(t.blok.title) } }), t._v(" "), t.hasPoints ? n("div", { staticClass: "max-w-lg mx-auto mb-6 text-base", domProps: { textContent: t._s(t.blok.text) } }) : n("div", { staticClass: "flex flex-wrap space-y-3 justify-center pb-8 pt-2" }, [n("f-link", { staticClass: "mr-8 block pt-5", attrs: { to: t.blok.link, target: "_blank" } }, [n("img", { staticClass: "h-6", attrs: { src: r(253), alt: "Trustpilot" } })]), t._v(" "), n("div", { staticClass: "flex relative pt-1" }, [n("div", { staticClass: "absolute top-0 left-0 ml-12 pl-2 -mt-6 hidden md:block" }, [t._v("Excellent")]), t._v(" "), t._l(5, (function(t) { return n("img", { key: t, staticClass: "h-8 mx-px", attrs: { src: r(436), alt: "Rating star" } }) }))], 2), t._v(" "), n("div", { staticClass: "max-w-lg px-8 md:pr-0 whitespace-pre text-left", domProps: { textContent: t._s(t.blok.rating_text) } })], 1), t._v(" "), t.hasPoints ? n("div", { staticClass: "flex justify-center md:space-x-4 lg:space-x-12 mb-6 md:mb-12 flex-wrap" }, t._l(t.blok.points, (function(e) { return n("div", { key: e._uid, staticClass: "max-w-sm px-6 sm:px-4 pt-6 w-64 sm:w-auto" }, [n("h3", { staticClass: "text-3xl md:text-4xl mb-4" }, [t._v("\n          " + t._s(e.title) + "\n        ")]), t._v(" "), n("p", { staticClass: "whitespace-pre", domProps: { textContent: t._s(e.text) } }), t._v(" "), e.text.includes("reviews") ? n("f-link", { staticClass: "link-bold", attrs: { to: t.blok.link, target: "_blank" } }, [t._v("\n          on\n          "), n("img", { staticClass: "h-5 -mb-1", attrs: { src: r(253), alt: "Trustpilot" } })]) : t._e()], 1) })), 0) : t._e()]), t._v(" "), n("hr", { staticClass: "opacity-50" }), t._v(" "), t.hasPoints ? t._e() : n("div", { staticClass: "md:flex pt-4 md:pt-10 mx-auto max-w-4xl" }, [n("div", { staticClass: "max-w-xs sm:max-w-md text-base mb-6 mx-auto", domProps: { textContent: t._s(t.blok.text) } }), t._v(" "), n("div", { staticClass: "flex space-x-6 flex-1 justify-between md:pl-8 max-w-md mx-auto" }, t._l(t.blok.images, (function(image) { return n("figure", { key: image.filename, staticClass: "h-10 sm:h-12" }, [n("f-image", { staticClass: "h-full w-full sm:w-auto object-contain", attrs: { image: image, resize: !1 } })], 1) })), 0)])], 1)
            }), [], !1, null, null, null).exports;
        e.a = c
    }, function(t, e, r) {
        "use strict";
        var n = r(5),
            o = r(305),
            l = r(16),
            c = r(83),
            d = r.n(c),
            m = r(41),
            f = r.n(m),
            h = r(40),
            v = r.n(h),
            x = {
                components: { Slide: l.c, Hooper: l.a, Pagination: l.b, leftIcon: f.a, rightIcon: v.a },
                props: { blok: Object },
                data: function() { return { isMounted: !1 } },
                mounted: function() { this.isMounted = !0 },
                computed: {
                    settings: function() {
                        var t, e = d.a.sm,
                            r = d.a.md,
                            o = d.a.xl;
                        return { itemsToShow: 1, transition: 400, wheelControl: !1, trimWhiteSpace: !1, breakpoints: (t = {}, Object(n.a)(t, parseInt(e), { itemsToShow: 2 }), Object(n.a)(t, parseInt(r), { itemsToShow: 3 }), Object(n.a)(t, parseInt(o), { itemsToShow: 4 }), t) }
                    }
                },
                methods: { timeAgo: function(t) { return Object(o.a)(t) } }
            },
            _ = (r(438), r(1)),
            w = Object(_.a)(x, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "px-6 md:px-10 xl:px-24 pt-6 md:py-10", class: { "fbx-reviews--ssr": !t.isMounted } }, [n("hooper", { ref: "carousel", staticClass: "pb-6", attrs: { settings: t.settings } }, [t._l(t.blok.reviews, (function(e) { return n("slide", { key: e._uid }, [n("div", { staticClass: "max-w-xs sm:pr-10 mb-4 mx-auto sm:mx-0" }, [n("div", { staticClass: "flex mb-4" }, [t._l(5, (function(t) { return n("img", { key: t, staticClass: "h-5 mx-px", attrs: { src: r(437), alt: "Rating star" } }) })), t._v(" "), n("div", { staticClass: "flex-1 text-right pl-2 whitespace-pre" }, [t._v(t._s(t.timeAgo(e.date)))])], 2), t._v(" "), n("h4", { staticClass: "mb-4" }, [t._v(t._s(e.title))]), t._v(" "), n("p", { staticClass: "mb-6" }, [t._v(t._s(e.text))]), t._v(" "), n("p", [t._v(t._s(e.author))])])]) })), t._v(" "), n("div", { staticClass: "flex justify-center", attrs: { slot: "hooper-addons" }, slot: "hooper-addons" }, [n("button", { staticClass: "-mb-3", on: { click: function(e) { return t.$refs.carousel.slidePrev() } } }, [n("left-icon", { staticClass: "stroke-current text-black" })], 1), t._v(" "), n("pagination", { staticClass: "m-3" }), t._v(" "), n("button", { staticClass: "-mb-3", on: { click: function(e) { return t.$refs.carousel.slideNext() } } }, [n("right-icon", { staticClass: "stroke-current text-black" })], 1)], 1)], 2)], 1)
            }), [], !1, null, null, null).exports;
        e.a = w
    }, function(t, e, r) {
        "use strict";
        var n = r(52),
            o = r.n(n),
            l = r(82),
            c = r(39),
            d = r(25),
            m = { props: { blok: Object }, components: { arrowBrush: l.a, zigzagBrush: c.a, strokesBrush: d.a, arrow: o.a } },
            f = r(1),
            h = Object(f.a)(m, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "py-8 md:py-16 px-3 md:px-10 xl:px-24" }, [r("h2", { staticClass: "font-bold text-3xl lg:text-4xl mb-16 text-center", domProps: { textContent: t._s(t.blok.title) } }), t._v(" "), r("div", { staticClass: "md:flex" }, [r("div", { staticClass: "md:w-1/2 lg:w-5/12 md:pr-12" }, t._l(t.blok.products, (function(e, i) { return r("section", { key: e._uid, staticClass: "sm:flex mb-8 lg:mb-12 text-center sm:text-left" }, [r("figure", { staticClass: "rounded-xl h-24 w-24 sm:mr-6 mt-1 relative overflow-hidden mb-3 mx-auto flex items-center justify-center text-left", class: "bg-" + e.color }, [i ? 1 === i ? r("arrow-brush", { staticClass: "absolute bottom-0 right-0 w-full -mr-4 transform -rotate-45", attrs: { color: t.$getShade(e.color) } }) : r("strokes-brush", { staticClass: "absolute bottom-0 right-0 w-2/3 -mr-3 -mb-8", attrs: { color: t.$getShade(e.color) } }) : r("zigzag-brush", { staticClass: "absolute bottom-0 right-0 w-full -mr-8 -mb-3", attrs: { color: t.$getShade(e.color) } }), t._v(" "), r("img", { staticClass: "w-16 h-16 z-10", attrs: { src: e.icon.filename, alt: e.title } })], 1), t._v(" "), r("div", { staticClass: "flex-1" }, [r("h3", { staticClass: "text-xl mb-3 font-bold", domProps: { textContent: t._s(e.title) } }), t._v(" "), r("p", { staticClass: "mb-3 text-base", domProps: { textContent: t._s(e.text) } }), t._v(" "), e.disclosure ? r("small", { staticClass: "mb-4 block font-light text-gray-700 md:pr-10", domProps: { textContent: t._s(e.disclosure) } }) : t._e(), t._v(" "), e.link ? r("f-link", { staticClass: "hover:opacity-75 font-semibold", attrs: { to: e.link } }, [t._v("\n            Read more "), r("arrow", { staticClass: "ml-2 -mb-px" })], 1) : t._e()], 1)]) })), 0), t._v(" "), r("div", { staticClass: "flex-1 md:pl-10" }, [r("h5", { staticClass: "md:hidden pt-3 mb-6 text-xl font-normal text-center" }, [t._v("\n        See how it works\n      ")]), t._v(" "), r("figure", { staticClass: "pt-3/4 relative" }, [r("f-video", { staticClass: "max-w-full w-full h-full object-contain rounded-xl shadow-lg", class: "absolute top-0 left-0", attrs: { video: t.blok.video } })], 1)])])])
            }), [], !1, null, null, null).exports;
        e.a = h
    }, function(t, e, r) {
        "use strict";
        var n = r(8),
            o = { props: { blok: Object }, mounted: function() { Object(n.b)({ element: this.$el }) } },
            l = (r(440), r(1)),
            c = Object(l.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "py-10 xl:py-16 px-3 md:px-8 xl:px-48" }, [t.blok.title ? n("h2", { staticClass: "text-3xl mb-10 text-center relative z-10 xl:whitespace-pre-line", domProps: { innerHTML: t._s(t.blok.title) } }) : t._e(), t._v(" "), n("div", { staticClass: "relative" }, [n("img", { staticClass: "absolute left-0 top-0 mt-16 w-full max-w-4xl md:-ml-100", attrs: { src: r(439), "data-parallax": "", "data-shift": "4rem", alt: "decorative brush" } }), t._v(" "), n("div", { staticClass: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-10 relative" }, t._l(t.blok.items, (function(t) { return n(t.link.url ? "f-link" : "figure", { key: t._uid, tag: "component", staticClass: "partner-card shadow-md", class: t.link.url ? "hover:shadow-lg cursor-pointer" : "", attrs: { to: t.link.url ? t.link : void 0, target: t.link.url ? "_blank" : void 0 } }, [n("f-image", { staticClass: "w-full h-full object-contain", staticStyle: { "max-height": "3rem" }, attrs: { image: t.image, alt: t.title } })], 1) })), 1)])])
            }), [], !1, null, null, null).exports;
        e.a = c
    }, function(t, e, r) {
        "use strict";
        var n = r(16),
            o = r(41),
            l = r.n(o),
            c = r(40),
            d = r.n(c),
            m = r(124),
            f = { components: { Slide: n.c, Hooper: n.a, Pagination: n.b, leftIcon: l.a, rightIcon: d.a, loopBrush: m.a }, props: { blok: Object }, data: function() { return { isMounted: !1 } }, mounted: function() { this.isMounted = !0 }, computed: { settings: function() { return { itemsToShow: 1, transition: 400, wheelControl: !1, trimWhiteSpace: !1 } } } },
            h = (r(441), r(1)),
            v = Object(h.a)(f, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "p-6 md:py-10", class: { "fbx-carousel--ssr": !t.isMounted } }, [r("loop-brush", { staticClass: "absolute left-0 top-0 w-full max-w-md -ml-10 mt-10", attrs: { color: t.blok.color } }), t._v(" "), r("h2", { staticClass: "font-bold text-3xl lg:text-4xl mb-16 text-center relative", domProps: { textContent: t._s(t.blok.title) } }), t._v(" "), r("hooper", { ref: "carousel", staticClass: "max-w-screen-lg mx-auto", attrs: { settings: t.settings } }, [t._l(t.blok.items, (function(e) { return r("slide", { key: e._uid }, [r("div", { staticClass: "md:flex md:px-6" }, [r("figure", { staticClass: "sm:w-1/2 h-full overflow-hidden rounded-xl mx-auto" }, [r("f-image", { staticClass: "w-full h-full", attrs: { image: e.image } })], 1), t._v(" "), r("div", { staticClass: "md:pl-10 flex-1 text-xl" }, [e.author ? r("figure", { staticClass: "font-black h-24", class: "text-" + t.$getShade(t.blok.color), staticStyle: { "font-size": "12rem", "line-height": "10rem" }, domProps: { textContent: t._s("“") } }) : t._e(), t._v(" "), r("p", { staticClass: "mb-6" }, [t._v(t._s(e.text))]), t._v(" "), r("div", { staticClass: "mb-4" }, [r("b", [t._v(t._s(e.author))]), t._v(", " + t._s(e.title))])])])]) })), t._v(" "), r("div", { staticClass: "flex justify-center mt-6", attrs: { slot: "hooper-addons" }, slot: "hooper-addons" }, [r("button", { staticClass: "-mb-3", on: { click: function(e) { return t.$refs.carousel.slidePrev() } } }, [r("left-icon", { staticClass: "stroke-current text-black" })], 1), t._v(" "), r("pagination", { staticClass: "m-3" }), t._v(" "), r("button", { staticClass: "-mb-3", on: { click: function(e) { return t.$refs.carousel.slideNext() } } }, [r("right-icon", { staticClass: "stroke-current text-black" })], 1)], 1)], 2)], 1)
            }), [], !1, null, null, null).exports;
        e.a = v
    }, function(t, e, r) {
        "use strict";
        var n = r(8),
            o = r(64),
            l = { props: { blok: Object }, components: { shmiggle: o.a }, mounted: function() { Object(n.b)({ element: this.$el }) } },
            c = r(1),
            d = Object(c.a)(l, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "py-20 px-3 md:px-8 xl:px-24 relative" }, [r("h2", { staticClass: "text-4xl mb-10 text-center", domProps: { textContent: t._s(t.blok.title) } }), t._v(" "), r("shmiggle", { staticClass: "absolute right-0 top-0 mt-32 w-full max-w-4xl -mr-32", attrs: { color: t.blok.color } }), t._v(" "), r("div", { staticClass: "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-12 relative" }, t._l(t.blok.investors, (function(t, i) { return r("figure", { key: t._uid, staticClass: "shadow-md rounded-lg p-4 md:py-10 flex bg-white overflow-hidden" }, [r("f-image", { staticClass: "w-full h-full object-contain", staticStyle: { "max-height": "3rem" }, attrs: { "data-parallax": "", "data-shift": "5rem", image: t.image } })], 1) })), 0)], 1)
            }), [], !1, null, null, null).exports;
        e.a = d
    }, function(t, e, r) {
        "use strict";
        var n = { props: { blok: Object } },
            o = r(1),
            l = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "p-3 md:px-8 xl:px-24" }, [t.blok.text ? r("div", { staticClass: "text-sm font-light text-gray-500 max-w-lg", domProps: { textContent: t._s(t.blok.text) } }) : t._e()])
            }), [], !1, null, null, null).exports;
        e.a = l
    }, function(t, e, r) {
        "use strict";
        var n = r(291),
            o = r.n(n),
            l = r(292),
            c = r.n(l),
            d = r(8),
            m = {
                props: { blok: Object },
                mounted: function() {
                    if (!this.$screen.sm) return null;
                    Object(d.b)({ element: this.$el, duration: "60%" })
                },
                computed: { columns: function() { return this.toColumns(this.blok.points) } },
                methods: { toColumns: function(t) { return o()(t, c()(t.length / 3)) } }
            },
            f = r(1),
            h = Object(f.a)(m, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "px-4 sm:px-12 xl:px-24 py-10 md:py-16", class: "mx-auto xl:max-w-6xl md:flex items-center" }, [n("div", { staticClass: "md:pr-16" }, [n("h2", { staticClass: "font-bold text-3xl md:text-4xl mb-8", domProps: { textContent: t._s(t.blok.title) } })]), t._v(" "), n("div", { staticClass: "flex flex-wrap justify-between flex-1" }, t._l(t.columns, (function(e, i) { return n("div", { key: i, staticClass: "pr-3", attrs: { "data-parallax": "", "data-shift": "3rem" } }, t._l(e, (function(e) { return n("div", { key: e._uid, staticClass: "flex items-center xl:mb-10 mt-6" }, [n("figure", { staticClass: "mr-6" }, [n("img", { staticClass: "h-8 w-8", attrs: { src: r(444), alt: "checkmark" } })]), t._v(" "), n("h4", { staticClass: "text-base font-normal sm:whitespace-pre", domProps: { textContent: t._s(e.title) } })]) })), 0) })), 0)])
            }), [], !1, null, null, null).exports;
        e.a = h
    }, function(t, e, r) {
        "use strict";
        var n = r(16),
            o = r(8),
            l = r(84),
            c = r(65),
            d = r(52),
            m = r.n(d),
            f = r(41),
            h = r.n(f),
            v = r(40),
            x = r.n(v),
            _ = r(64),
            w = r(25),
            k = r(42),
            y = {
                props: { blok: Object },
                components: { arrow: m.a, richText: c.a, leftIcon: h.a, rightIcon: x.a, wistiaVideo: l.a, Slide: n.c, Hooper: n.a, Pagination: n.b, wavesCoralBrush: k.a, zigzagWhiteBrush: w.a, spiralLightcoralBrush: _.a },
                mounted: function() {
                    var t = !this.$screen.md;
                    this.blok.is_large && !t ? Object(o.b)({ element: this.$el, duration: "300%", reversed: !0 }) : Object(o.b)({ element: this.$el })
                },
                data: function() { return { settings: { itemsToShow: 1, transition: 600, wheelControl: !1, trimWhiteSpace: !0 } } },
                computed: { aspectRatio: function() { return this.blok.tall_image ? "pt-2/3 md:pt-3/4" : "pt-2/3" }, shmiggle: function() { return "lightcoral" === this.blok.color ? { name: "spiral-lightcoral-brush", class: "max-w-lg -mb-20", color: "coral" } : "lightblue" === this.blok.color ? { name: "waves-coral-brush", class: "max-w-lg sm:-mr-64", color: "blue" } : "lightsand" === this.blok.color ? { name: "zigzag-white-brush", class: "max-w-xs sm:-mr-24 -mb-20", color: "sand" } : { name: "div", class: "hidden" } } }
            },
            C = (r(455), r(1)),
            O = Object(C.a)(y, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "py-10 md:py-16 xl:py-24 md:px-8 xl:px-24 flex flex-col", class: [t.blok.align_left ? "md:flex-row" : "md:flex-row-reverse", t.blok.is_large ? "" : "items-end"] }, [r("section", { staticClass: "w-full md:w-1/2" }, [r("h2", { staticClass: "text-3xl xl:text-4xl px-4 sm:pl-10 sm:ml-4 md:ml-0", class: t.blok.align_left ? "md:pl-0 md:pr-10" : "md:pl-24 md:ml-8", domProps: { textContent: t._s(t.blok.title) } }), t._v(" "), r("article", { staticClass: "pb-16 pt-6 sm:pl-10 md:py-10 md:rounded-xl transform translate-y-10 relative overflow-hidden", class: [t.blok.align_left ? "sm:pr-40 sm:-mr-32" : "md:pr-10 md:pl-64 md:-ml-40", "white" === t.blok.color ? "md:pl-0 xl:-translate-y-10" : "", "bg-" + t.blok.color] }, [r(t.shmiggle.name, { tag: "component", staticClass: "absolute right-0 -mr-48 w-full bottom-0", class: t.shmiggle.class, attrs: { color: t.shmiggle.color } }), t._v(" "), t.blok.slides && t.blok.slides.length ? r("hooper", { ref: "carousel", attrs: { settings: t.settings } }, [t._l(t.blok.slides, (function(t) { return r("slide", { key: t._uid }, [r("rich-text", { staticClass: "px-4 max-w-sm xl:max-w-md relative", attrs: { content: t.content } })], 1) })), t._v(" "), r("div", { staticClass: "flex px-4", attrs: { slot: "hooper-addons" }, slot: "hooper-addons" }, [r("button", { staticClass: "-mb-4", on: { click: function(e) { return t.$refs.carousel.slidePrev() } } }, [r("left-icon", { staticClass: "stroke-current text-black" })], 1), t._v(" "), r("pagination", { staticClass: "m-3" }), t._v(" "), r("button", { staticClass: "-mb-4", on: { click: function(e) { return t.$refs.carousel.slideNext() } } }, [r("right-icon", { staticClass: "stroke-current text-black" })], 1)], 1)], 2) : r("div", { staticClass: "mx-4 relative", class: t.blok.align_left ? "md:mx-0" : "" }, [r("rich-text", { staticClass: "sm:pr-4 max-w-sm xl:max-w-md", attrs: { content: t.blok.content } }), t._v(" "), t.blok.link_label ? r("f-link", { staticClass: "font-semibold hover:opacity-75 pt-2 block", attrs: { to: t.blok.link } }, [t._v("\n          " + t._s(t.blok.link_label) + "\n          "), r("arrow", { staticClass: "ml-2 -mb-px" })], 1) : t._e()], 1)], 1)]), t._v(" "), r("section", { staticClass: "w-full max-w-lg md:max-w-full md:w-1/2 px-4 md:px-0", attrs: { "data-parallax": "", "data-shift": t.blok.is_large ? "30rem" : "10rem" } }, [r("figure", { staticClass: "relative transform px-4 md:px-0", class: [t.blok.align_left ? "md:-ml-10" : "md:-mr-10", t.blok.video_id ? "md:-translate-y-20" : t.aspectRatio + " md:-translate-y-12"] }, [t.blok.video_id ? r("wistia-video", { staticClass: "shadow-lg rounded-xl overflow-hidden", attrs: { "video-id": t.blok.video_id } }) : t.blok.video_mp4.filename ? r("f-video", { staticClass: "w-full h-full object-cover shadow-lg rounded-xl", class: "absolute top-0 right-0", attrs: { video: t.blok.video_mp4 } }) : r("f-image", { staticClass: "w-full h-full object-cover block rounded-xl bg-gray", class: ["absolute top-0 left-0", t.blok.has_shadow ? "shadow-lg" : ""], attrs: { image: t.blok.image } }), t._v(" "), t.blok.image_caption ? r("figcaption", { staticClass: "absolute bottom-0 right-0 w-full text-right -mb-8 text-xs text-gray-300", domProps: { textContent: t._s(t.blok.image_caption) } }) : t._e()], 1)])])
            }), [], !1, null, null, null).exports;
        e.a = O
    }, function(t, e, r) {
        "use strict";
        var n = r(82),
            o = r(39),
            l = r(25),
            c = { props: { blok: Object }, components: { arrowBrush: n.a, zigzagBrush: o.a, strokesBrush: l.a } },
            d = r(1),
            m = Object(d.a)(c, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "px-3 pb-4 pt-8 lg:px-10 xl:px-24 text-center" }, [t.blok.title ? r("h2", { staticClass: "font-bold text-3xl md:text-4xl mb-6 xl:mt-12", domProps: { textContent: t._s(t.blok.title) } }) : t._e(), t._v(" "), r("div", { staticClass: "sm:flex flex-wrap sm:pt-8 xl:px-20 justify-center" }, t._l(t.blok.points, (function(e, i) { return r("div", { key: e._uid, staticClass: "sm:w-1/2 md:w-1/3 px-3 lg:px-6 pb-5" }, [e.icon && e.icon.filename ? r("figure", { staticClass: "rounded-xl h-24 w-24 relative overflow-hidden mb-3 mx-auto flex items-center justify-center text-left", class: "bg-" + e.color }, [i ? 1 === i ? r("arrow-brush", { staticClass: "absolute bottom-0 right-0 w-full -mr-4 transform -rotate-45", attrs: { color: t.$getShade(e.color) } }) : r("strokes-brush", { staticClass: "absolute bottom-0 right-0 w-2/3 -mr-3 -mb-8", attrs: { color: t.$getShade(e.color) } }) : r("zigzag-brush", { staticClass: "absolute bottom-0 right-0 w-full -mr-8 -mb-3", attrs: { color: t.$getShade(e.color) } }), t._v(" "), r("img", { staticClass: "w-16 h-16 z-10", attrs: { src: e.icon.filename, alt: e.title } })], 1) : t._e(), t._v(" "), e.title ? r("h3", { staticClass: "text-xl mb-4 font-bold md:whitespace-pre-line", domProps: { textContent: t._s(e.title) } }) : t._e(), t._v(" "), e.icon && e.icon.filename ? t._e() : r("figure", { staticClass: "py-px mx-auto w-16 mb-4", class: "bg-" + e.color }), t._v(" "), r("p", { staticClass: "md:whitespace-pre-line mb-4 text-base", domProps: { textContent: t._s(e.text) } })]) })), 0)])
            }), [], !1, null, null, null).exports;
        e.a = m
    }, function(t, e, r) {
        "use strict";
        var n = { props: { blok: Object } },
            o = r(1),
            l = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { staticClass: "px-3 pb-4 pt-10 lg:px-10 xl:px-24 text-center" }, [t.blok.title ? r("h2", { staticClass: "font-bold text-3xl mb-6 xl:mt-10", domProps: { textContent: t._s(t.blok.title) } }) : t._e(), t._v(" "), r("div", { staticClass: "sm:flex flex-wrap sm:pt-8 xl:px-32 justify-center" }, t._l(t.blok.images, (function(col) { return r("div", { key: col._uid, staticClass: "sm:w-1/2 md:w-1/3 pb-6" }, [r(col.link && col.link.cached_url ? "f-link" : "figure", { tag: "component", class: col.link && col.link.cached_url ? "hover:opacity-75" : "", attrs: { target: col.link && col.link.cached_url && col.link_new_tab ? "_blank" : null, to: col.link && col.link.cached_url ? col.link : null } }, [r("f-image", { staticClass: "mx-auto w-48 mb-2", attrs: { image: col.image } })], 1), t._v(" "), r("div", { staticClass: "md:whitespace-pre-line text-lg w-40 mx-auto", domProps: { innerHTML: t._s(col.text.html) } })], 1) })), 0)])
            }), [], !1, null, null, null).exports;
        e.a = l
    }, function(t, e, r) {
        "use strict";
        r(159);
        var n = r(65),
            o = r(41),
            l = r.n(o),
            c = r(40),
            d = r.n(c),
            m = r(16),
            f = { props: { classScope: { type: String, default: "Common_TextCarousel" }, blok: Object, i: Number }, components: { richText: n.a, leftIcon: l.a, rightIcon: d.a, Slide: m.c, Hooper: m.a, Pagination: m.b }, data: function() { return { settings: { itemsToShow: 1, transition: 400, wheelControl: !1, infiniteScroll: !0 } } } },
            h = (r(456), r(1)),
            component = Object(h.a)(f, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { directives: [{ name: "editable", rawName: "v-editable", value: t.blok, expression: "blok" }] }, [r("div", { class: t.classScope + "-carousel-item-inner " + t.classScope + "-carousel-inner--" + t.i }, [r("hooper", { ref: "carousel", attrs: { settings: t.settings } }, [t._l(t.blok.slides, (function(e) { return r("slide", { key: e._uid }, [r("div", { class: "item " + t.classScope + "-carousel-inner-item" }, [r("div", { class: t.classScope + "-carousel-inner-item-title" }, [t._v(t._s(e.title))]), t._v(" "), e.content ? r("rich-text", { class: t.classScope + "-carousel-inner-item-text", attrs: { content: e.content } }) : r("div", { class: t.classScope + "-carousel-inner-item-text" }, [t._v(t._s(e.text))])], 1)]) })), t._v(" "), r("div", { staticClass: "flex -mb-2 md:mb-0", attrs: { slot: "hooper-addons" }, slot: "hooper-addons" }, [r("button", { staticClass: "-mb-4", attrs: { "data-track-title": "Quote — Prev slide" }, on: { click: function(e) { return t.$refs.carousel.slidePrev() } } }, [r("left-icon", { staticClass: "stroke-current text-black" })], 1), t._v(" "), r("pagination", { staticClass: "m-3" }), t._v(" "), r("button", { staticClass: "-mb-4", attrs: { "data-track-title": "Quote — Next slide" }, on: { click: function(e) { return t.$refs.carousel.slideNext() } } }, [r("right-icon", { staticClass: "stroke-current text-black" })], 1)], 1)], 2)], 1)])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var n = r(32),
            o = (r(68), r(87), r(125)),
            l = r.n(o),
            c = function(path) { return path ? ("/" !== path[0] && (path = "/".concat(path)), "/" === path[path.length - 1] && (path = path.slice(0, -1)), path) : null },
            d = {
                name: "fLink",
                props: { scrollactiveLink: Boolean, to: [String, Object], samePage: Boolean, target: String, label: String, hash: String },
                computed: {
                    smartLabel: function() {
                        if (this.label) return this.label;
                        if (this.$slots.default) return null;
                        var t = this.to.cached_url,
                            e = this.getRealPath(c(t));
                        return e ? this.internalLinks[e].title : ""
                    },
                    href: function() { if (!this.to) return ""; if (this.samePage) return this.$addTrailingSlash(this.$route.path); if ("object" === Object(n.a)(this.to)) { if (this.to.url) return this.to.url; var t = this.to.cached_url; if (t || this.reportBrokenLink(), "/" === t) return t; if (t.startsWith("http")) return t; var e = this.getRealPath(c(t)); return e ? this.$addTrailingSlash(e) : (this.reportBrokenLink(), t) } return this.to },
                    hrefWithHash: function() { var t = this.hash ? "#".concat(this.hash) : ""; return "#empty" === t && (t = "#"), t || this.href ? this.href + t : "#" },
                    isInternalLink: function() { return !1 },
                    isCurrentPage: function() { return this.href === this.$addTrailingSlash(this.$route.path) },
                    internalLinks: function() { return this.$store.state.pathMap },
                    targetAttribute: function() { return ("blank" === this.target || "_blank" === this.target) && "_blank" },
                    hasScrollactiveClass: function() { return this.scrollactiveLink && (this.isCurrentPage || !this.to) && this.hash }
                },
                methods: { getRealPath: function(path) { return l()(this.internalLinks, { slug: path }) }, reportBrokenLink: function() { var t = "A broken Internal-link detected, props: " + JSON.stringify({ label: this.label, hash: this.hash, to: this.to }); throw new Error(t) } }
            },
            m = r(1),
            component = Object(m.a)(d, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return t.isInternalLink ? r("n-link", t._g(t._b({ class: { "scrollactive-item": t.hasScrollactiveClass }, attrs: { "data-internal": "1", target: t.targetAttribute, to: t.hrefWithHash } }, "n-link", t.$attrs, !1), t.$listeners), [t.smartLabel ? [t._v(t._s(t.smartLabel))] : t._t("default")], 2) : r("a", t._g(t._b({ class: { "nuxt-link-exact-active": t.isCurrentPage, "scrollactive-item": t.hasScrollactiveClass }, attrs: { target: t.targetAttribute, href: t.hrefWithHash } }, "a", t.$attrs, !1), t.$listeners), [t.smartLabel ? [t._v(t._s(t.smartLabel))] : t._t("default")], 2)
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        r(37), r(46), r(28), r(47), r(159), r(69), r(22), r(29);
        var n = [370, 550, 920, 1840],
            o = [.5, 1, 2],
            l = n[2],
            c = {
                props: { smart: Boolean, src: String, image: Object, alt: { type: String, default: "Fundbox" }, width: { type: Number, default: 0 }, height: { type: Number, default: 0 }, lazy: { type: Boolean, default: !0 }, resize: { type: Boolean, default: !0 } },
                methods: {
                    resizeToWidth: function(t, e) {
                        return function(image, t) {
                            var e = t.width,
                                r = t.height,
                                n = t.scale,
                                o = void 0 === n ? 1 : n,
                                l = t.smart;
                            if (!image) return "";
                            if (!image.includes("a.storyblok")) return image;
                            var c = parseInt(e * o) + "x" + parseInt(r * o),
                                d = l ? "/smart" : "",
                                m = image.includes("https:") ? "https://a.storyblok.com" : "//a.storyblok.com";
                            return "//img2.storyblok.com/" + c + d + image.replace(m, "")
                        }(this.imageURL, { height: this.height, width: t || this.width, smart: this.smart, scale: e })
                    }
                },
                computed: { fallback: function() { return this.height ? this.resizeToWidth() : this.resizeToWidth(this.width || l) }, srcset: function() { var t = this; return this.resize ? this.height ? null : !this.lazy && this.width ? o.map((function(e) { var r = t.width * e; return t.resizeToWidth(r) + " " + (r + "w") })).join(",\n") : n.map((function(e) { return t.resizeToWidth(e) + " " + (e + "w") })).join(",\n") : null }, imageURL: function() { var t; return this.src ? this.src : null === (t = this.image) || void 0 === t ? void 0 : t.filename }, altText: function() { var t, e; return this.image && ((null === (t = this.image) || void 0 === t ? void 0 : t.alt) || (null === (e = this.image) || void 0 === e ? void 0 : e.name)) || this.alt } }
            },
            d = r(1),
            component = Object(d.a)(c, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return t.lazy ? r("img", t._g(t._b({ staticClass: "lazyload", attrs: { "data-src": t.fallback, "data-srcset": t.srcset, "data-sizes": "auto", alt: t.altText } }, "img", t.$attrs, !1), t.$listeners)) : r("img", t._g(t._b({ attrs: { src: t.fallback, srcset: t.srcset, alt: t.altText } }, "img", t.$attrs, !1), t.$listeners))
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var n = r(4),
            o = (r(43), {
                props: { video: Object },
                mounted: function() { this.initVideo() },
                methods: {
                    initVideo: function() {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            var r;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.$nextTick();
                                    case 2:
                                        null === (r = t.$refs.video) || void 0 === r || r.play();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                }
            }),
            l = r(1),
            component = Object(l.a)(o, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("video", { ref: "video", attrs: { src: t.video.filename, playsinline: "", muted: "" }, domProps: { muted: !0 }, on: { ended: t.initVideo } })
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, r) {
        "use strict";
        var n = { props: ["blok"] },
            o = r(1),
            component = Object(o.a)(n, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", { directives: [{ name: "editable", rawName: "v-editable", value: t.blok, expression: "blok" }], staticClass: "text-block" }, [t.blok.heading ? r("h2", [t._v(t._s(t.blok.heading))]) : t._e(), t._v(" "), r("div", { domProps: { innerHTML: t._s(t.blok.text.html) } })])
            }), [], !1, null, null, null);
        e.a = component.exports
    }, , , , , , , , , , , , , function(t, e, r) { t.exports = r(343) }, , , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(4);
        r(43);

        function o() {
            return (o = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                var r, n, o, l, c, d;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (r = e.store, n = e.env, o = e.query, l = e.payload, !r.state.version) { t.next = 3; break }
                            return t.abrupt("return");
                        case 3:
                            if (!n.isProduction, c = !!o._storyblok, !0, d = !n.hasStoryblokPublicKey && (c || true), r.commit("SET_VERSION", d ? "draft" : "published"), !l) { t.next = 13; break }
                            r.commit("SET_PATHS", l.paths), r.commit("SET_LAYOUT", l.layout), t.next = 17;
                            break;
                        case 13:
                            return t.next = 15, r.dispatch("getPaths");
                        case 15:
                            return t.next = 17, r.dispatch("getLayout");
                        case 17:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }
        e.default = function(t) { return o.apply(this, arguments) }
    }, , , , , , , , , , , , function(t, e, r) { t.exports = r.p + "img/brushNotFound@2x.24e229d.png" }, , function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = {} }, function(t, e, r) { t.exports = r.p + "img/logo@2x.df83bec.png" }, function(t, e, r) {
        "use strict";
        r(229)
    }, , function(t, e, r) {
        "use strict";
        r(230)
    }, function(t, e, r) {
        "use strict";
        r(231)
    }, function(t, e, r) {
        "use strict";
        r(232)
    }, function(t, e, r) {
        "use strict";
        r(233)
    }, function(t, e, r) {
        "use strict";
        r.r(e), r.d(e, "state", (function() { return l })), r.d(e, "mutations", (function() { return c })), r.d(e, "getters", (function() { return d })), r.d(e, "actions", (function() { return m }));
        var n = r(4),
            o = (r(43), r(22), r(10), r(11), r(385), r(37), r(46), r(29), r(59)),
            l = function() { return { cta: {}, ghId: null, layout: null, pathMap: null, version: null, contentType: "", notificationClosed: !1, cacheVersion: +new Date } },
            c = {
                SET_LAYOUT: function(t, e) {
                    var data = JSON.parse(JSON.stringify(e));
                    data.topnav_menu = data.topnav_menu.filter((function(menu) { var t; return null === (t = menu.target) || void 0 === t ? void 0 : t.content })).map((function(menu) { var t; return menu.target = { slug: menu.target.slug, links: (null === (t = menu.target.content.body) || void 0 === t ? void 0 : t.map((function(t) { return t.nav_label })).filter(Boolean)) || [] }, menu })), t.layout = data
                },
                CLOSE_NOTIFICATION: function(t) { t.notificationClosed = !0 },
                SET_VERSION: function(t, e) { t.version = "draft" === e ? "draft" : "published" },
                SET_CONTENT_TYPE: function(t, e) { t.contentType = e },
                SET_CTA: function(t, e) { t.cta = e },
                SET_GREENHOUSE_ID: function(t, e) { t.ghId = e },
                SET_PATHS: function(t, data) {
                    var e = {};
                    Object.values(data).filter((function(p) { return !p.is_folder })).filter((function(p) { return !p.real_path.includes("/assets") })).forEach((function(p) {
                        var t = Object(o.c)(p.slug),
                            path = Object(o.c)(p.real_path) || "/";
                        e[path] = { slug: "/" + t, title: p.name, uuid: p.uuid }
                    })), t.pathMap = e
                }
            },
            d = { getLink: function(t) { return function(path) { var e = Object(o.c)(path) || "/"; return t.pathMap[e] } } },
            m = {
                getLayout: function(t) {
                    var e = this;
                    return Object(n.a)(regeneratorRuntime.mark((function r() {
                        var n, o, l, data;
                        return regeneratorRuntime.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return n = t.state, o = t.commit, r.next = 3, e.$storyapi.get("cdn/stories/assets/layout", { resolve_relations: "dropdown_menu.target", version: n.version, cv: n.cacheVersion });
                                case 3:
                                    l = r.sent, data = l.data, o("SET_LAYOUT", data.story.content);
                                case 6:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))()
                },
                getPaths: function(t) {
                    var e = this;
                    return Object(n.a)(regeneratorRuntime.mark((function r() {
                        var n, o, l, data;
                        return regeneratorRuntime.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return n = t.state, o = t.commit, r.next = 3, e.$storyapi.get("cdn/links", { version: n.version, cv: n.cacheVersion });
                                case 3:
                                    l = r.sent, data = l.data, o("SET_PATHS", data.links);
                                case 6:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))()
                },
                getPartners: function(t) {
                    var e = this;
                    return Object(n.a)(regeneratorRuntime.mark((function r() {
                        var n, o, data;
                        return regeneratorRuntime.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return n = t.state, r.next = 3, e.$storyapi.get("cdn/stories", { starts_with: "marketplace", version: n.version, cv: n.cacheVersion, sort_by: "slug:asc", is_startpage: 0 });
                                case 3:
                                    return o = r.sent, data = o.data, r.abrupt("return", data.stories);
                                case 6:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))()
                },
                getOffice: function(t, e) {
                    var r = this;
                    return Object(n.a)(regeneratorRuntime.mark((function n() {
                        var o, l, c, data;
                        return regeneratorRuntime.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return o = t.state, l = e.officeId, n.next = 4, r.$storyapi.get("cdn/stories/assets/offices/".concat(l), { version: o.version, cv: o.cacheVersion });
                                case 4:
                                    return c = n.sent, data = c.data, n.abrupt("return", data.story);
                                case 7:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                },
                getPage: function(t, e) {
                    var r = this;
                    return Object(n.a)(regeneratorRuntime.mark((function n() {
                        var o, path, l, data;
                        return regeneratorRuntime.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return o = t.state, path = e.path, n.next = 4, r.$storyapi.get("cdn/stories".concat(path), { version: o.version, cv: o.cacheVersion });
                                case 4:
                                    return l = n.sent, data = l.data, n.abrupt("return", data.story);
                                case 7:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                }
            }
    }, , , , , , , , , , , function(t, e) {}, , , , , , , , , , , , , , , , , , , function(t, e, r) { t.exports = r.p + "48f4b48bf9edee641f6bb672c1c3798d.svg" }, function(t, e, r) { t.exports = r.p + "8e6349bf0b652a281b6154e7e9436c63.svg" }, , , function(t, e, r) { t.exports = r.p + "img/image.681b6fc.png" }, function(t, e, r) {
        "use strict";
        r(243)
    }, function(t, e, r) { t.exports = r.p + "img/image.6128d5e.png" }, function(t, e, r) {
        "use strict";
        r(245)
    }, function(t, e, r) { t.exports = r.p + "img/shmiggle.fd4fcd1.png" }, function(t, e, r) {
        "use strict";
        r(246)
    }, function(t, e, r) { t.exports = r.p + "img/image.6dde301.png" }, function(t, e, r) { t.exports = r.p + "img/image.c26d0ea.png" }, function(t, e, r) {
        "use strict";
        r(247)
    }, function(t, e, r) {
        "use strict";
        r(248)
    }, function(t, e, r) {
        "use strict";
        r(249)
    }, function(t, e, r) { t.exports = r.p + "img/image.6ea9b72.png" }, function(t, e, r) {
        "use strict";
        r(250)
    }, function(t, e, r) {
        "use strict";
        r(251)
    }, function(t, e, r) { t.exports = r.p + "img/image.4a95509.png" }, function(t, e, r) { t.exports = r.p + "img/image.eb07323.png" }, function(t, e, r) { t.exports = r.p + "img/image.b156851.png" }, function(t, e, r) {
        "use strict";
        r(252)
    }, function(t, e, r) { t.exports = r.p + "5e1432fbf510879b5cb4772f65454c66.svg" }, function(t, e, r) { t.exports = r.p + "4c0b27b326afabee52d7137419c9152a.svg" }, function(t, e, r) {
        "use strict";
        r(254)
    }, function(t, e, r) { t.exports = r.p + "img/zigzag-long.257f8ba.png" }, function(t, e, r) {
        "use strict";
        r(255)
    }, function(t, e, r) {
        "use strict";
        r(256)
    }, function(t, e, r) {
        "use strict";
        r(257)
    }, function(t, e, r) { t.exports = r.p + "img/image.60d7af9.png" }, function(t, e, r) { t.exports = r.p + "136b99077abe98ddd777da4dbb250539.svg" }, , , , , , , , , , , function(t, e, r) {
        "use strict";
        r(262)
    }, function(t, e, r) {
        "use strict";
        r(263)
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        r(276)
    }],
    [
        [342, 12, 2, 13]
    ]
]);