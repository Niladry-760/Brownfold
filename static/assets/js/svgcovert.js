!(function ($) {
  $.fn.svgConvert = function (t) {
    var e = $.extend(
        {
          svgCleanupAttr: [
            "width",
            "height",
            "id",
            "x",
            "y",
            "xmlns",
            "xmlns:a",
            "xmlns:xlink",
            "xml:space",
            "enable-background",
            "version",
            "style",
          ],
          imgIncludeAttr: !0,
          imgCleanupAttr: [],
          removeClass: !0,
          addClass: "svg-converted",
          onComplete: function () {},
        },
        t
      ),
      s = this.selector,
      n = s.substring(1),
      a = $(s).length;
    e.imgCleanupAttr.push("alt", "src"),
      $(s).each(function (t) {
        var s = $(this),
          i = s.attr("src"),
          l = {};
        e.imgIncludeAttr &&
          $.each(this.attributes, function () {
            this.specified &&
              0 !== e.imgCleanupAttr.indexOf(this.name) &&
              ("class" === this.name &&
                e.removeClass &&
                (this.value = this.value.replace(n + " ", "")),
              "class" === this.name &&
                e.addClass &&
                (this.value = this.value += " " + e.addClass),
              (l[this.name] = this.value));
          }),
          $.get(i, function (n) {
            var i = $(n).find("svg"),
              r;
            $.each(e.svgCleanupAttr, function (t, e) {
              i.removeAttr(e);
            }),
              e.imgIncludeAttr &&
                $.each(l, function (t, e) {
                  i.attr(t, e);
                }),
              s.replaceWith($(n).find("svg")),
              t + 1 === a && e.onComplete.call(this);
          });
      });
  };
})(jQuery);
