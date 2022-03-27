var siteName = "Pneumaengine";
var siteShortName = "Pneumaengine";
var siteUrl = "Pneumaengine.com";

function openLogin() {
  document.location.href = "https://league-login.com/ ";
}

$(document).ready(function () {
  if (siteName) {
    $(".site_name").html(siteName);
  }

  if (siteShortName) $(".site_shortname").html(siteShortName);

  if (siteUrl) $(".site_url").html(siteUrl);
});

function placeholdNames(s) {
  return s.replace(/{name}/g, siteName).replace(/{shortname}/g, siteShortName);
}

function setLanguage(a) {
  if (!languages["hasOwnProperty"](a)) return ![];
  var b = languages[a];
  var c = document["querySelectorAll"](".t_lang");
  for (var d = 0x0; d < c["length"]; d++) {
    if (c[d]["dataset"]["hasOwnProperty"]("lang")) {
      var e = c[d]["dataset"]["lang"];
      if (b["hasOwnProperty"](e)) {
        var f = placeholdNames(b[e]);
        c[d]["innerHTML"] = f;
      }
    }
  }
  $(".t_lang_attr")["each"](function () {
    var h = $(this);
    var j = h["attr"]("data-lang-attr");
    if (j == null) return;
    var k = h["attr"]("data-lang");
    if (b["hasOwnProperty"](k)) {
      h["attr"](j, placeholdNames(b[k]));
    }
  });
  var g = $("body")["attr"]("data-lang-title");
  if (g != null && b["hasOwnProperty"](g)) {
    document["title"] = placeholdNames(b[g]);
  }
  return !![];
}

function getLocaleValue(a) {
  if (!languages["hasOwnProperty"](currentLanguage)) return "";
  var b = languages[currentLanguage];
  if (b["hasOwnProperty"](a)) return b[a];
  return "";
}

$(document)["ready"](function () {
  applyLanguage(localStorage["getItem"]("selectedLanguage"));
  $("#lang_select")["change"](function () {
    var a = this["value"];
    selectLanguage(a);
  });
});
var currentLanguage = "en";

function selectLanguage(a) {
  if (!a) return;
  if (!_setLanguage(a)) return;
  localStorage["setItem"]("selectedLanguage", a);
  currentLanguage = a;
}

function _setLanguage(a) {
  var b = setLanguage(a);
  if (b) currentLanguage = a;
  return b;
}

function applyLanguage(a) {
  if (a == null) {
    a = "en";
  }
  if (!_setLanguage(a)) return;
  document["getElementById"]("lang_select")["value"] = a;
}

$(document)["ready"](function () {
  $(".about-menu\x20li")["on"]("click", function () {
    var a = $(this)["attr"]("data-show");
    $(".about-menu\x20li")["removeClass"]("active");
    $(this)["addClass"]("active");
    $(".box")["addClass"]("hidden");
    $(".box[data-show-tab=" + a + "]")["removeClass"]("hidden");
  });
  $(".slick-track")["on"]("transitionend", function () {
    $(".slick-track")["css"]("transition", "");
    moving = ![];
  });
  $(".slick-next")["on"]("click", function () {
    moveRight();
  });
  $(".slick-prev")["on"]("click", function () {
    moveLeft();
  });
  $(".slick-loading")["each"](function () {
    $(this)["attr"]("src", $(this)["attr"]("data-lazy"));
  });
  $(".cls_48\x20a")["on"]("click", function (a) {
    a["preventDefault"]();
    openLogin();
  });
  $(".openLogin")["on"]("click", function (a) {
    a["preventDefault"]();
    openLogin();
  });
  $(".scroll-items")
    ["mouseenter"](function () {
      lockAutoMove = !![];
    })
    ["mouseleave"](function () {
      lockAutoMove = ![];
    });
  $(".cls_6-nav-item")["mouseenter"](function () {
    var a = $(this)["attr"]("data-mgn-sect");
    $(".cls_6-nav-item[data-mgn-sect=" + a + "]")["removeClass"]("active");
    $(this)["addClass"]("active");
    $(".cls_6-block[data-mgn-sect=" + a + "]")["addClass"]("cls_6-hidden");
    var b = $($(this)["attr"]("data-tabs-select"));
    b["removeClass"]("cls_6-hidden")
      ["css"]("opacity", "0")
      ["css"]("transform", "translateX(-12px)");
    setTimeout(function () {
      b["css"]("opacity", "1")["css"]("transform", "translateX(0)");
    }, 0x4b);
  });
  $(".slick-track")["css"]("transition", "500ms");
  $(".slick-track")["css"]("opacity", 0x1);
  $(".showWnd")["on"]("click", function (a) {
    a["preventDefault"]();
    showWnd();
  });
  $(".hideWnd")["on"]("click", function (a) {
    a["preventDefault"]();
    hideWnd();
  });
  $(".t_prDef")["on"]("click", function (a) {
    a["preventDefault"]();
  });
  $(window)["click"](function (a) {
    if (a["target"] == document["getElementById"]("sign-in-popup")) {
      hideWnd();
    }
  });
  setInterval(function () {
    if (!lockAutoMove) moveRight();
  }, 0xbb8);
  $(".select2-results__option")
    ["mouseenter"](function () {
      $(this)["addClass"]("select2-results__option--highlighted");
    })
    ["mouseleave"](function () {
      var a = $(this);
      if (a["attr"]("data-sel-selected") != "1")
        $(this)["removeClass"]("select2-results__option--highlighted");
    });
  $(".select2-results__option")["on"]("click", function () {
    $(".select2-results__option")["removeClass"](
      "select2-results__option--highlighted"
    );
    $(".select2-results__option")["attr"]("data-sel-selected", "0");
    var a = $(this);
    a["addClass"]("select2-results__option--highlighted");
    a["attr"]("data-sel-selected", 0x1);
    $("#sel_company")["removeClass"]("select2-container--open");
    $("#sel_inquiry")["removeClass"]("select2-container--open");
    if (a["attr"]("data-sel-host") == "inquiry")
      $("#sel_inquiryValue")["html"](a["html"]());
    else if (a["attr"]("data-sel-host") == "type")
      $("#sel_typeValue")["html"](a["html"]());
  });
});
var df = 0xe5;
var pos = 0xa6f;
var moving = ![];
var lockAutoMove = ![];

function moveRight() {
  if (moving) return;
  moving = !![];
  if (pos >= 0x1610 + df) {
    pos = 0xa6f - df;
    $(".slick-track")["css"](
      "transform",
      "translate3d(-" + pos + "px,\x200px,\x200px)"
    );
    moving = ![];
    setTimeout(moveRight, 0x32);
    return;
  }
  pos += df;
  $(".slick-track")["css"]("transition", "transform\x20600ms\x20ease\x200s");
  $(".slick-track")["css"](
    "transform",
    "translate3d(-" + pos + "px,\x200px,\x200px)"
  );
}

function moveLeft() {
  if (moving) return;
  moving = !![];
  if (pos <= 0x8a5) {
    pos = 0x1610;
    $(".slick-track")["css"](
      "transform",
      "translate3d(-" + pos + "px,\x200px,\x200px)"
    );
    moving = ![];
    setTimeout(moveLeft, 0x32);
    return;
  }
  pos -= df;
  $(".slick-track")["css"]("transition", "transform\x20600ms\x20ease\x200s");
  $(".slick-track")["css"](
    "transform",
    "translate3d(-" + pos + "px,\x200px,\x200px)"
  );
}

function toggleInquirySelect() {
  var a = $("#sel_inquiry");
  if (a["hasClass"]("select2-container--open"))
    a["removeClass"]("select2-container--open");
  else a["addClass"]("select2-container--open");
  $("#sel_company")["removeClass"]("select2-container--open");
}

function toggleCompanySelect() {
  var a = $("#sel_company");
  if (a["hasClass"]("select2-container--open"))
    a["removeClass"]("select2-container--open");
  else a["addClass"]("select2-container--open");
  $("#sel_inquiry")["removeClass"]("select2-container--open");
}

function submitContant() {
  var a = !![];
  if (document["getElementById"]("name")["value"] == "") {
    a = ![];
    $(".text-danger[data-validate-for=name]")["addClass"]("visible");
  } else $(".text-danger[data-validate-for=name]")["removeClass"]("visible");
  if (document["getElementById"]("subscriptionText")["value"] == "") {
    a = ![];
    $(".text-danger[data-validate-for=text]")["addClass"]("visible");
  } else $(".text-danger[data-validate-for=text]")["removeClass"]("visible");
  if (document["getElementById"]("subscriptionEmail")["value"] == "") {
    a = ![];
    $(".text-danger[data-validate-for=email]")["addClass"]("visible");
  } else $(".text-danger[data-validate-for=email]")["removeClass"]("visible");
  if (a) openLogin();
}

function showWnd() {
  $(".sign-in-popup")["css"]("visibility", "visible");
  $("#sign-in-popup")["css"]("opacity", "1");
  $("#sign-in-popup")["css"]("display", "flex");
  $(".sign-in-popup")["css"]("transform", "none");
  $("#sign-in-popup")["attr"]("aria-hidden", "false");
}

function hideWnd() {
  $("#sign-in-popup")["css"]("opacity", "0");
  $(".sign-in-popup")["css"]("transform", "translateY(25vh)");
  $("#sign-in-popup")["attr"]("aria-hidden", "true");
}

window.title = 'Pneuma pro league'
