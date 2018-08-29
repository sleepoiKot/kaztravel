$(function () {
    $('.button_up').fadeOut();

    $(window).scroll(function () {
        if ($(this).scrollTop() > $(window).height()) {
            $('.button_up').fadeIn();
        } else {
            $('.button_up').fadeOut();
        }
    });

    $('.button_up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    bidBntInCart();
});

DnShare = {
    vkontakte: function (purl, ptitle, pimg, text) {

        purl = window.location.href;
        ptitle = $("#hfDnShareTitle").val();
        pimg = $("#hfDnShareImgPath").val();
        text = $("#hfDnShareDesc").val();

        url = 'http://vk.com/share.php?';
        url += 'url=' + encodeURIComponent(purl);
        url += '&title=' + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image=' + encodeURIComponent(pimg);
        url += '&noparse=true';
        DnShare.popup(url);
    },
    odnoklassniki: function (purl, text) {

        purl = window.location.href;
        ptitle = $("#hfDnShareTitle").val();
        pimg = $("#hfDnShareImgPath").val();
        text = $("#hfDnShareDesc").val();

        url = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
        url += '&st.comments=' + encodeURIComponent(text);
        url += '&st._surl=' + encodeURIComponent(purl);
        DnShare.popup(url);
    },
    facebook: function (purl, ptitle, pimg, text) {

        purl = window.location.href;
        ptitle = $("#hfDnShareTitle").val();
        pimg = $("#hfDnShareImgPath").val();
        text = $("#hfDnShareDesc").val();

        url = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]=' + encodeURIComponent(ptitle);
        url += '&p[summary]=' + encodeURIComponent(text);
        url += '&p[url]=' + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        DnShare.popup(url);
    },
    twitter: function (purl, ptitle) {

        purl = window.location.href;
        ptitle = $("#hfDnShareTitle").val();
        pimg = $("#hfDnShareImgPath").val();
        text = $("#hfDnShareDesc").val();

        url = 'http://twitter.com/share?';
        url += 'text=' + encodeURIComponent(ptitle);
        url += '&url=' + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        DnShare.popup(url);
    },
    gp: function (purl, ptitle, pimg, text) {

        purl = window.location.href;
        ptitle = $("#hfDnShareTitle").val();
        pimg = $("#hfDnShareImgPath").val();
        text = $("#hfDnShareDesc").val();

        url = 'https://plus.google.com/share?';
        url += 'url=' + encodeURIComponent(purl);
        //url += '&title=' + encodeURIComponent(ptitle);
        //url += '&description=' + encodeURIComponent(text);
        //url += '&imageurl=' + encodeURIComponent(pimg);
        DnShare.popup(url)
    },

    popup: function (url) {
        window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
    }
};

function dnIsMobile() {
    return (!!(navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/iPhone|iPad|iPod/i)
      || navigator.userAgent.match(/Opera Mini/i)
      || navigator.userAgent.match(/IEMobile/i))
    );
}

function bidBntInCart() {
    $(".js-newkk-add-to-cart-btn, .jsd-btn-incart").hover(
        function () {
            //console.log("hover in", $(this).hasClass("jsd-btn-incart"));
            if ($(this).hasClass("jsd-btn-incart")) {
                if ($(this).parent().hasClass("book-content"))
                    $(this).find("a:first-child").html("<span>Оформить</span>");
                else if ($(this).hasClass("jsd-sku-incart"))
                    $(this).find("div").text("Оформить");
                else
                    $(this).find("a:first-child").text("Оформить");
            }
        },
        function () {
            //console.log("hover out", $(this).hasClass("jsd-btn-incart"));
            if ($(this).hasClass("jsd-btn-incart")) {
                if ($(this).parent().hasClass("book-content"))
                    $(this).find("a:first-child").html("<span>В корзине</span>");
                else if ($(this).hasClass("jsd-sku-incart"))
                    $(this).find("div").text("В корзине");
                else
                    $(this).find("a:first-child").text("В корзине")
            }

        });
}

function dunPopupLoginInit() {
    $('.js-popupLoginLink').css("cursor", "pointer");
    $('.js-popupLoginLink').click(function (e) {
        if (!($(this).hasClass('-state_logged'))) {
            $('.js-popupLogin').remove();
            window.location.href = "/Special-Pages/Logon/";
        }
    });
}

function checoutInputPhoneValidationInit() {
    $(".jsd-input-phone-in-checkout").click(function (e) {

        var tb = $(".b-delivery__field.fCustomerPhone");
        var v = tb.val();
        if (v.length !== 11 || v[0] !== '8' || v.replace(/\D/g, '').length !== 11) {
            e.preventDefault();
            var div = tb.parent().parent().next();
            div.html("<span class='Error' style='padding: 58px 14px 0px;'>Введите значение в формате '84951234567'.</span>");
        }
    });
}

var openPhotoSwipe = function (items, currentUrl) {
    var pswpElement = document.querySelectorAll('.jsd-pswp0')[0];

    var currentIndex = 0;
    if (currentUrl) {
        var itemsCurrentIndex = 0;
        for (var k in items) {
            if (items[k].src === currentUrl) {
                currentIndex = itemsCurrentIndex;
            }
            itemsCurrentIndex++;
        }
    }

    // define options (if needed)
    var options = {
        index: currentIndex,

        // history & focus options are disabled on CodePen
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0

    };

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

function DunAjaxServiceMethod(serviceName, methodName, pars, onSuccess, onComplete, onError, withoutAlerts) {
    $.ajax({
        type: "POST",
        url: "/CLEVERServices/" + serviceName + ".asmx/" + methodName,
        dataType: "json",
        data: JSON.stringify(pars),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var resultJson = JSON.parse(data.d);

            if (resultJson.IsSuccess) {
                if (onSuccess) onSuccess(resultJson.Result, resultJson);
            }
            else {
                if (!withoutAlerts) alert(resultJson.MessageToUser);
                if (onError) onError(resultJson.MessageToUser, resultJson.Result);
            }
        },
        error: function (a, b, c) {
            // alert("ошибка");
            console.log("ошибка in DunAjaxServiceMethod", methodName, pars, onSuccess, a, b, c);

            if (onError) onError();
        },
        complete: function () {
            if (onComplete) onComplete();
        }
    });
}

function DunAjaxNewKkServiceMethod(methodName, pars, onSuccess, onComplete, onError) {
    DunAjaxServiceMethod("NewKkService", methodName, pars, onSuccess, onComplete, onError);
}
function DunAjaxCommonServiceServiceMethod(methodName, pars, onSuccess, onComplete, onError, withoutAlerts) {
    DunAjaxServiceMethod("CommonService", methodName, pars, onSuccess, onComplete, onError, withoutAlerts);
}


function initMyOrdersPage() {
    $(".js-order-click-for-detail").click(function (e) {
        e.preventDefault();

        var orderId = $(this).data("order-id");
        var tr = $("#trOrder" + orderId);
        var td = tr.find("td");
        var progress = td.find(".js-progress-of-load-my-orders-order-details");

        tr.fadeToggle(600);

        if (progress.length) {
            DunAjaxCommonServiceServiceMethod("SendRequestToGetPreview", { orderId: orderId }, function (r) {
                progress.remove();
                for (var i in r) {
                    var item = r[i];
                    td.append($("<div>").html(item.Name + ', ' + item.Count + ' x ' + item.Price + ' руб.'));
                }
            });
        }
    });
}

function initNewKkFromAaa() {
    var l = $("#newKkAaa a.-type_basket");
    if (l.length) {
        $("#newKkFromTheSameSeriesCont").show();

        l.each(function () {

            var na = $($(this)[0].outerHTML);
            //na.attr("href", "javascript:initNewKkFromAaa2(" + $(this).data("aaa-id") + ")");
            //console.log(na[0].outerHTML);

            var li = $("<li class='nkk-b-productList__item' style='width: 170px'>");
            li.html("<a class='nkk-b-productList__cove' href='" + $(this).data("aaa-doc-url") + "' title='Перейти на страницу продукта'>"
                + "<img class='nkk-b-productList__img' src='" + $(this).data("aaa-img") + "' alt='Изображение' height='150' width='105' style='width: 105px; height: 150px;'>"
                + "</a>"
                + "<a class='nkk-b-productList__title' href='" + $(this).data("aaa-doc-url") + "' style='font-size: 30px; line-height: 33px; height: 66px; overflow: hidden'>" + $(this).data("aaa-name") + "</a>"
                + "<div class='nkk-b-productList__descr'>" + $(this).data("aaa-author") + "</div>"
                + na[0].outerHTML
                + "</div>");
            $("#newKkFromTheSameSeriesSlider").append(li);
        });
    } else {
        $("#newKkFromTheSameSeriesCont").hide();
    }
}

function initNewKkFromAaa2(id) {
    var a = $("#newKkAaa a.-type_basket[data-aaa-id=" + id + "]");
    a.click();
}

function newKkSoBookPagesStartSlider(items) {
    if (!items || !items.length) {
        $("#newKkSoBookPagesCont").hide();
        return;
    }

    var pswpElement = document.querySelectorAll('.jsd-pswp1')[0];
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0, // start at first slide,
        modal: false,
        bgOpacity: 0,
        spacing: 0,
        closeOnVerticalDrag: false,
        escKey: false,
        pinchToClose: false,
        closeOnScroll: false,
        clickToCloseNonZoomable: false,
        history: false,
        noCloseIfClickedOutside: true,

        barsSize: { top: 0, bottom: 0 },

        // Buttons/elements
        closeEl: false,
        captionEl: false,
        fullscreenEl: false,
        zoomEl: false,
        shareEl: false,
        counterEl: false,
        arrowEl: true,
        preloaderEl: false,
    };

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

    $("#newKkSoBookPagesCont").fadeIn(300);
}

function initNewKkSoBookPages(lst) {
    if (!lst || !lst.length) {
        $("#newKkSoBookPagesCont").hide();
    } else {

        var l = lst.length;
        _newKkSliderSoBookPagesTotal = l;

        var containerWidth = $(window).width();
        var oneMargin = 25;
        //var oneWidth = 620 + 2 * oneMargin;
        //var contentWidth = l * oneWidth;

        for (var i in lst) {
            var item = lst[i];
            var li = $("<li>");

            var w = Math.floor(500 * item.Width / item.Height);

            var img = $("<img src='" + item.Src + "' alt='' data-w='" + w + "' class='nkk-b-sliderList__background' style='margin: 0 25px; height:500px' />");
            li.append(img);

            $("#newKkSoBookPagesSlider").append(li);
        }

        var iWidth = parseInt($("#newKkSoBookPagesSlider img").eq(0).data("w")) + 2 * oneMargin;
        var l = (function () {
            if (containerWidth <= iWidth) return -oneMargin;

            var centerFieldX = Math.floor(containerWidth / 2 - iWidth / 2);
            return centerFieldX - oneMargin;
        })();
        $("#newKkSoBookPagesSlider").css("left", l + "px");

        sliderNewKkNextPrevControlsVis();

        initSliderNewKk();
        $("#newKkSoBookPagesCont").fadeIn(300);
    }
}

//function initNewKkSoBookPages(lst) {
//    if (!lst || !lst.length) {
//        $("#newKkSoBookPagesCont").hide();
//    } else {

//        var l = lst.length;

//        var containerWidth = $(window).width();
//        var oneMargin = 25;
//        var oneWidth = 620 + 2 * oneMargin;
//        var contentWidth = l * oneWidth;
//        var needMinCount = containerWidth / oneWidth === Math.floor(containerWidth / oneWidth) ? Math.floor(containerWidth / oneWidth) : Math.floor(containerWidth / oneWidth) + 1;

//        var count = (function () {
//            var nk = _dunHelper.NOK([l, needMinCount]);
//            for (var i = 1; i <= nk / l; i++) {
//                if (3 * needMinCount <= i * l)
//                    return i * l;
//            }
//            return 3 * nk;
//        })();

//        for (var j = 0; j < count / l; ++j) {
//            for (var i in lst) {
//                var item = lst[i];
//                var li = $("<li>");

//                var img = $("<img src='" + item + "' alt='' class='nkk-b-sliderList__background' style='width: 620px; height: 500px; margin: 0 25px;' />");
//                li.append(img);

//                $("#newKkSoBookPagesSlider").append(li);
//            }
//        }

//        var l = (function () {
//            if (containerWidth <= oneWidth) return -oneMargin;

//            var centerFieldX = Math.floor(containerWidth / 2 - oneWidth / 2);
//            var sdvig = centerFieldX / oneWidth === Math.floor(centerFieldX / oneWidth) ? Math.floor(centerFieldX / oneWidth) : Math.floor(centerFieldX / oneWidth) + 1;

//            return centerFieldX - oneWidth * sdvig - oneWidth * l;
//        })();
//        $("#newKkSoBookPagesSlider").css("left", l + "px");

//        initSliderNewKk();
//        $("#newKkSoBookPagesCont").fadeIn(300);
//    }
//}

function initSliderNewKk() {
    $('.js-new-kk-slider-control').click(function () {
        sliderNewKkNextPrev($(this).data("action") === "next");
    });

    //_newKkSliderSoBookPagesTimer = setTimeout(sliderSoBookPagesIter, 3000);

    //$('.js-new-kk-slider-control').mouseenter(function () {
    //    clearTimeout(_newKkSliderSoBookPagesTimer);
    //});
    //$('.js-new-kk-slider-control').mouseout(function () {
    //    _newKkSliderSoBookPagesTimer = setTimeout(sliderSoBookPagesIter, 3000);
    //});
}
function sliderSoBookPagesIter() {
    sliderNewKkNextPrev(false);
    _newKkSliderSoBookPagesTimer = setTimeout(sliderSoBookPagesIter, 3000);
}

function sliderNewKkNextPrev(isNext) {
    if (_newKkSliderSoBookPagesBlocker) return;

    _newKkSliderSoBookPagesBlocker = true;

    var oneWidth1 = 50 + parseInt($("#newKkSoBookPagesSlider img").eq(_newKkSliderSoBookPagesCurrentIndex).data("w"));

    if (isNext) {
        ++_newKkSliderSoBookPagesCurrentIndex;
    } else {
        --_newKkSliderSoBookPagesCurrentIndex;
    }
    sliderNewKkNextPrevControlsVis();

    var oneWidth2 = 50 + parseInt($("#newKkSoBookPagesSlider img").eq(_newKkSliderSoBookPagesCurrentIndex).data("w"));

    var oneWidth = Math.floor((oneWidth1 + oneWidth2) / 2);
    console.log(oneWidth1, oneWidth2, oneWidth);

    var l = parseInt($("#newKkSoBookPagesSlider").css("left"));
    $("#newKkSoBookPagesSlider").animate({ "left": (!isNext ? l + oneWidth : l - oneWidth) + "px" }, 600, function () {
        sliderNewKkNextPrevControlsVis();
        _newKkSliderSoBookPagesBlocker = false;
    });
}
function sliderNewKkNextPrevControlsVis() {
    var prev = $("li.js-new-kk-slider-control.-type-prev");
    var next = $("li.js-new-kk-slider-control.-type-next");

    if (_newKkSliderSoBookPagesTotal < 1) {
        prev.hide();
        next.hide();
    }
    if (_newKkSliderSoBookPagesCurrentIndex < 1) {
        prev.hide();
        next.show();
    } else if (_newKkSliderSoBookPagesCurrentIndex >= _newKkSliderSoBookPagesTotal - 1) {
        prev.show();
        next.hide();
    } else {
        prev.show();
        next.show();
    }
}
//function sliderNewKkNextPrev(isNext) {
//    if (_newKkSliderSoBookPagesBlocker) return;

//    _newKkSliderSoBookPagesBlocker = true;
//    var oneWidth = 670;
//    var l = parseInt($("#newKkSoBookPagesSlider").css("left"));
//    $("#newKkSoBookPagesSlider").animate({ "left": (isNext ? l + oneWidth : l - oneWidth) + "px" }, 300, function () {
//        var li = isNext ? $("#newKkSoBookPagesSlider > li:last-child") : $("#newKkSoBookPagesSlider > li:first-child");
//        if (isNext) {
//            $("#newKkSoBookPagesSlider").prepend(li);
//        } else {
//            $("#newKkSoBookPagesSlider").append(li);
//        }
//        $("#newKkSoBookPagesSlider").css("left", l + "px");
//        _newKkSliderSoBookPagesBlocker = false;
//    });
//}
var _newKkSliderSoBookPagesTimer;
var _newKkSliderSoBookPagesBlocker = false;
var _newKkSliderSoBookPagesCurrentIndex = 0;
var _newKkSliderSoBookPagesTotal = 0;


function initNewKkAddToWishlistLink() {
    $(".js-newkk-add-to-wishlist-link").click(function (e) {
        e.preventDefault();

        // newKkAddToWishlistLinkClick(this);
    });
}

function bindNewDgnMyCleverWishlistAvatarCab() {
    var span = $("#myCleverWishlistAvatarCab");
    span.fadeTo(500, .3);
    DunAjaxCommonServiceServiceMethod("GetCurrentWishlistCount", {}, function (r) {
        if (r) {
            span.css("background-image", "url(/img/blocks/l-siteHeader/my-fill.svg)");
        } else {
            span.css("background-image", null);
        }
        span.fadeTo(500, 1);
    });
}

function bindNewDgnSpanOfInTheCart() {
    var span = $("#newDgnSpanOfInTheCart");
    var spanInfoAboutFreeDelivery = $(".jsd-newkk-info-about-free-delivery");
    if (!span || !spanInfoAboutFreeDelivery) return;
    span.fadeTo(500, .3);
    DunAjaxCommonServiceServiceMethod("GetCurrentCartData", {}, function (r) {
        span.text(r.Count);
        span.fadeTo(500, 1);
        spanInfoAboutFreeDelivery.text(r.Count < 1 ? "нет книг" : r.Count + " книг" + okonchanieKnig(r.Count) + " на сумму " + r.Sum + " руб.");
    });
}
function bindHeaderUserName() {
    var div = $("#dnHeaderUserName");
    div.fadeTo(500, .3);
    DunAjaxCommonServiceServiceMethod("GetHeaderUserName", {}, function (r) {
        div.html(r);
        div.fadeTo(500, 1);
    });
}
function lbLogOutClick() {
    var href = $("#lbLogOutHidden").attr("href");
    var funcOut = href.replace(new RegExp("javascript:", 'g'), "");
    eval(funcOut);
}

function okonchanieKnig(c) {
    var cm10 = c % 10;
    var cm100 = c % 100;

    if ((cm100 < 10 || cm100 > 20) && cm10 == 1)
        return "а";

    if ((cm100 < 10 || cm100 > 20) && cm10 > 1 && cm10 < 5)
        return "и";

    return "";
}

function newDgnAddToCart4450Pers(redirToCart) {
    $("#dnPersPageSaveClick").click();
}

function smkAddToCart(args) {
    for (var i = 0; i < args.length - 1; i += 2) {
        newDgnAddToCart(args[i], args[i + 1]);
}
    alert('Книги добавлены в корзину');
}

function newDgnAddToCart(skuId, oldSkuId) {
    var links = $(".jsd-skuid-" + skuId);
    links.fadeTo(500, .3);
    DunAjaxCommonServiceServiceMethod("NewDgnAddToCart", { skuId: skuId }, function (r) {
        links.addClass("-on");
        links.addClass("-state_added");
        links.parent().addClass("jsd-btn-incart");
        links.parent().addClass("-state_added");
        links.each(function () {
            if ($(this).attr("href")) $(this).attr("href", "/Special-Pages/Checkout/Shopping-Cart/");
            else $(this).attr("onclick", "window.location.href='/Special-Pages/Checkout/Shopping-Cart/'");

            if ($(this).data("in-cart-color")) $(this).css("background-color", $(this).data("in-cart-color"));

            if ($(this).hasClass("jsd-in-dnkk")) {
                $(this).addClass("jsd-sku-incart");
                $(this).addClass("jsd-btn-incart");
                $(this).html("<div class='b-productCard__basket'>В корзине</div>");
            }
            else if ($(this).parent().parent().hasClass("book-content"))
                $(this).html("<span>В корзине</span>");
            else
                $(this).text("В корзине");
        });
        links.fadeTo(500, 1);
        bidBntInCart();
        bindNewDgnSpanOfInTheCart();
        // newKkInfoAboutFreeDeliveryRefresh();
        lgnLCartinfoUpdatePnlRefresh();
    });

    try {
        try { if (oldSkuId) { rrApi.addToBasket(oldSkuId); console.log("rrApi.AddToCart", skuId, oldSkuId); } } catch (e) { }
        dnYmEcommerseAddToCart(skuId);
        yaCounter35658125.reachGoal('cart-btn');
    } catch (e) {
        console.log("yaCounter35658125 error", e);
    }
    try {
        var priceStr = $("meta[itemprop=price]").attr("content");
        if (priceStr) {
            var price = parseInt(priceStr);
            fbq('track', 'AddToCart', {
                content_ids: [skuId.toString()],
                content_type: 'product',
                value: price,
                currency: 'RUB'
            });
        }
    } catch (e) {
        console.log("FBPixel error", e);
    }
}

function dnYmEcommerseSeePageGoodCard(goodId, goodName) {
    dataLayer.push({
        'ecommerce': {
            'detail': {
                'products': [
                  {
                      'name': goodName,
                      'id': goodId.toString()
                      //'price': 'Стоимость',
                      //'brand': 'Производитель или бренд2',
                      //'category': 'Категория товара2, до 5 позиций',
                      //'variant': 'Вариант исполнения2'
                  }
                ]
            }
        }
    });
    //console.log("dnYmEcommerseSeePageGoodCard", goodId, goodName);
}
function dnYmEcommerseAddToCart(goodId) {
    DunAjaxCommonServiceServiceMethod("GetSkuNameBySkuId", { skuId: goodId },
        function (r) {
            if (r == null || !r) return;
            dataLayer.push({
                'ecommerce': {
                    'add': { // remove для удаления товара из корзины
                        'products': [
                          {
                              'name': r, // обязательное
                              'id': goodId.toString() //, // обязательное
                              //'price': 100,
                              //'brand': 'Производитель или бренд7',
                              //'category': 'Категория товара7, до 5 позиций',
                              //'variant': 'Вариант исполнения',
                              //'quantity': 1
                          }
                        ]
                    }
                }
            });
        },
        null, null, true);
}
function dnYmEcommerseDelFromCart(goodId, goodName) {
    dataLayer.push({
        'ecommerce': {
            'remove': { // remove для удаления товара из корзины
                'products': [
                  {
                      'name': goodName, // обязательное
                      'id': goodId.toString() //, // обязательное
                      //'price': 100,
                      //'brand': 'Производитель или бренд7',
                      //'category': 'Категория товара7, до 5 позиций',
                      //'variant': 'Вариант исполнения',
                      //'quantity': 1
                  }
                ]
            }
        }
    });
    //console.log("dnYmEcommerseDelFromCart", goodId, goodName);
}
function dnYmEcommerseSeePageThanksForOrder(onSuccess) {
    //console.log("dnYmEcommerseSeePageThanksForOrder");
    DunAjaxCommonServiceServiceMethod("GetDataForDnYmEcommerseSeePageThanksForOrderByLastOrder", { },
        function (r) {
            if (r == null || !r || !r.Success) return;
            var products = [];
            var skuIds = [];
            var rrItems = [];
            for (var idx in r.Products) {
                var itm = r.Products[idx];
                skuIds.push(itm.Id.toString());
                products.push({ 'name': itm.Name, 'id': itm.Id, 'price': itm.Price, 'quantity': itm.Qty });
                rrItems.push({ 'id': itm.OldSkuId, 'price': itm.Price, 'qnt': itm.Qty });
            }

            dataLayer.push({
                'ecommerce': {
                    'purchase': {
                        'actionField': {
                            'id': r.Id, // обязательное
                            'affiliation': 'Клевер', // название магазина
                            'revenue': r.Revenue, // сумма заказа
                            //'tax': 10, // налог
                            //'shipping': 20, //доставка
                            'coupon': r.Coupon
                        },
                        'products': products //[
                        //  {
                        //      'name': 'НАЗВАНИЕ ТОВАРА7', // обязательное
                        //      'id': 'АРТИКУЛ7 или ИДЕНТИФИКАТОР7', // обязательное
                        //      'price': 100,
                        //      //'brand': 'Производитель или бренд7',
                        //      //'category': 'Категория товара7, до 5 позиций',
                        //      //'variant': 'Вариант исполнения',
                        //      'quantity': 1,
                        //      //'coupon': 'Купон на скидку для товара'
                        //  }
                        //]
                    }
                }
            });

            fbq('track', 'Purchase', {
                content_ids: skuIds,
                content_type: 'product',
                value: r.Revenue,
                currency: 'RUB'
            });

            (window["rrApiOnReady"] = window["rrApiOnReady"] || []).push(function() {
                try {
                    rrApi.order({
                        transaction: r.Id,
                        items: rrItems
                    });
                    console.log("rro", items);
                } catch(e) {}});

            DunAjaxCommonServiceServiceMethod("SetDnSendedToYmPurchaseToOrder", { orderId: r.Id }, function () {
                if (onSuccess) onSuccess();
            });

        },
        null, null, true);
}

function newKkAddToWishlistLinkClick(ths, isNewCat) {
    yaCounter35658125.reachGoal('favorite-btn');

    isNewCat = !!isNewCat;
    var selectedCssClass = isNewCat ? "on" : "-state_added";
    var skuid = $(ths).data("skuid");

    if (!$(ths).data("isauth")) {
        alert("Чтобы добавлять товар в избранное, пожалуйста, войдите на сайт");
    } else if ($(ths).hasClass(selectedCssClass)) {
        alert("Этот товар уже есть в избранном");
    }
    else {
        $(ths).fadeTo(500, .3);
        DunAjaxCommonServiceServiceMethod("AddProductToCustomerWishlist", { skuId: skuid }, function () {
            var favLinks = $(".nkk-b-productCard__favorite[data-skuid=" + skuid + "], .b-productCard__favorite[data-skuid=" + skuid + "], .book-content .favorite[data-skuid=" + skuid + "]");
            if (!isNewCat) favLinks.text("В избранном");
            favLinks.addClass(selectedCssClass);
            bindNewDgnMyCleverWishlistAvatarCab();
        }, function () {
            $(ths).fadeTo(500, 1);
        }, function () {
            alert("Не удалось добавить товар в избранное");
        });
    }
}

function newKkDelFromWishlistLinkClick(ths) {

    var skuid = parseInt($(ths).data("skuid"));

    if (!$(ths).data("isauth")) {
        alert("Чтобы удалять товар из избранного, пожалуйста, войдите на сайт");
    }
    else {
        $(ths).fadeTo(500, .3);
        DunAjaxCommonServiceServiceMethod("DelProductFromCustomerWishlist", { skuId: skuid }, function () {
            window.location.href = "/cabinet/?t=f";
        },
        null,
        function () {
            alert("Не удалось удалить товар из избранное");
        });
    }
}

function newKkInfoAboutFreeDeliveryRefresh() {
    $(".newKkInfoAboutFreeDeliverUpnlClass").each(function () {
        __doPostBack($(this).attr("ID"), '');
    });
}
function lgnLCartinfoUpdatePnlRefresh() {
    $(".jsd-lgn-l-cart-info-upnl").each(function () {
        $(this).html("<span style='opacity: .3'>" + $(this).html() + "</span>");
        __doPostBack($(this).attr("ID"), '');
    });
}

function divLnkAddClick(ths) {
    window.location.href = $(ths).find(".nkk-b-productCard__add").attr("href");
}

function initNewKkReview() {
    var l = $("#divNewKkReviewOut").data("length");
    if (!l) return;

    for (var i = 0; i < l; ++i) {
        $("<li id='newKkReviewolLi" + i + "' class=''><a href='#' data-idx='" + i + "'><em>Item 1</em></a></li>").appendTo("#newKkReviewOl");
    }

    $("#newKkReviewOl > li > a").click(function (e) {
        e.preventDefault();
        selectNewKkReviewItem(parseInt($(this).data("idx")));
    });

    selectNewKkReviewItem(0);
}
function selectNewKkReviewItem(idx) {
    var d = $("#divNewKkReviewOut");

    $("#newKkReviewOl > li").removeClass("selected");

    $("#newKkReviewName").text(d.data("name" + idx));
    $("#newKkReviewTitle").text(d.data("title" + idx));
    $("#newKkReviewText").html(d.data("text" + idx));

    var photoGuid = d.data("photoguid" + idx);
    if (photoGuid) {
        $("#imgAuthorPhoto").attr("src", "/getfile/" + photoGuid);
        $("#imgAuthorPhoto").show();
    } else {
        $("#imgAuthorPhoto").hide();
    }

    $("#newKkReviewolLi" + idx).addClass("selected");
}

function initNewKkSubscriptionToNews() {
    $("#newKkSubscribeToNews").click(function (e) {
        e.preventDefault();
        $("#newKkSubscribeToNewsSuccessMessage").show();

        DunAjaxCommonServiceServiceMethod("AddEmailToSubscription", { email: $("#newKkSubscriptionEmail").val() }, null, null, function (a, b, c) { console.log("initNewKkSubscriptionToNews.error", a, b, c); })
    });
}

function newKkGetPreviewRepositionByimgHeightInit() {
    $("#productCardMainImg").load(function () {
        var imgHeightMin = 362;
        var imgHeight = $("#productCardMainImg").height();

        $(".nkk-preview__form").css("top", ((imgHeight < imgHeightMin ? imgHeightMin : imgHeight) + 70) + "px");
    });
}

function newKkGetPreviewRepositionByimgHeight() {
    //var imgHeightMin = 362;
    //var imgHeight = $("#productCardMainImg").height();

    //$(".nkk-preview__form").css("top", ((imgHeight < imgHeightMin ? imgHeightMin : imgHeight) + 70) + "px");
}

function initDnShoppingCart() {
    $(".jsd-shopping-cart-item-count").keydown(function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();

            var ths = $(this);
            ths.fadeTo(300, .2);

            var skuId = parseInt($(this).data("skuid"));

            DunAjaxCommonServiceServiceMethod("DnShoppingCartItemSetCount",
                { skuId: skuId, countValObj: $(this).val() },
                function (r) {
                    window.location.reload();
                },
                function () {
                    ths.fadeTo(300, 1);
                    _dnShoppingCartBlocker = false;
                },
                function (a, b, c) {
                    ths.fadeTo(300, 1);
                    console.log(a, b, c);
                },
                false
            );
        }
    });

    $(".jsd-shopping-cart-del-item").click(function (e) {
        e.preventDefault();

        if (_dnShoppingCartBlocker) return;
        else _dnShoppingCartBlocker = true;

        var ths = $(this);
        ths.fadeTo(300, .2);

        var skuId = parseInt($(this).data("skuid"));

        dnYmEcommerseDelFromCart(skuId, $(this).data("skuname"));

        DunAjaxCommonServiceServiceMethod("DnDelFromCart",
            { skuId: skuId },
            function (r) {
                window.location.reload();
            },
            function () {
                ths.fadeTo(300, 1);
                _dnShoppingCartBlocker = false;
            },
            function (a, b, c) {
                ths.fadeTo(300, 1);
                console.log(a, b, c);
            },
            true
        );
    });

    $(".jsd-shopping-cart-del-all-items").click(function (e) {
        e.preventDefault();

        if (_dnShoppingCartBlocker) return;
        else _dnShoppingCartBlocker = true;

        var ths = $(this);
        ths.fadeTo(300, .2);

        $(".jsd-shopping-cart-del-item").each(function () {
            dnYmEcommerseDelFromCart($(this).data("skuid"), $(this).data("skuname"));
        });

        DunAjaxCommonServiceServiceMethod("DnDelAllFromCart",
            { },
            function (r) {
                window.location.reload();
            },
            function () {
                ths.fadeTo(300, 1);
                _dnShoppingCartBlocker = false;
            },
            function (a, b, c) {
                ths.fadeTo(300, 1);
                console.log(a, b, c);
            },
            true
        );
    });

    $(".jsd-shopping-cart-change-item-count").click(function (e) {
        e.preventDefault();

        dnShoppingCartPlusMinusItem($(this).data("skuid"), $(this).data("action"));
    });
}

function dnShoppingCartPlusMinusItem(skuId, action) {
    if (_dnShoppingCartBlocker) return;
    else _dnShoppingCartBlocker = true;

    $("body").fadeTo(300, .2);

    DunAjaxCommonServiceServiceMethod("DnShoppingCartItemChangeCount",
        { skuId: parseInt(skuId), action: action },
        function (r) {
            window.location.reload();
        },
        function () {
            $("body").fadeTo(300, 1);
            _dnShoppingCartBlocker = false;
        },
        function (a, b, c) {
            console.log(a, b, c);
        },
        false
    );

}

var _dnShoppingCartBlocker = false;

function initNewKkAddToCartBtn() {
    $(".js-newkk-add-to-cart-btn").hover(function () {
        $(this).find("a.-state_added").text("Оформить");
    }, function () {
        $(this).find("a.-state_added").text("В Kорзине");
    });
}

function initDunContactsPhotos() {
    _dunContactsPhotosLocker = 1;
    fillDunContactsPhotosItems();
    _dunContactsPhotosLocker = 0;

    $(".dunContactsPhotos > img").click(function () {
        if (_dunContactsPhotosLocker === 1) return;

        _dunContactsPhotosLocker = 1;
        console.log(_dunContactsPhotosItems);
        openPhotoSwipe(_dunContactsPhotosItems, $(this).attr("src"));
        _dunContactsPhotosLocker = 0;
    });
}
function fillDunContactsPhotosItems(divWithImages) {

    if (!_dunContactsPhotosItems.length) {
        $(".dunContactsPhotos").find("img").each(function () {
            var img = $(this);

            var o = { src: img.attr("src") };
            _dunContactsPhotosItems.push(o);

            var img = new Image();
            img.onload = function () {
                o.w = img.width;
                o.h = img.height;
            }
            img.src = o.src;
        });
    }

}
var _dunContactsPhotosItems = [];
var _dunContactsPhotosLocker = 0;

$().ready(function () {
    dunPopupLoginInit();
    //initNewKkAddToWishlistLink();
    initNewKkAddToCartBtn();
    initDunContactsPhotos();
});


var _dunHelper = {
    NOK: function NOK(A) {
        var n = A.length, a = Math.abs(A[0]);
        for (var i = 1; i < n; i++) {
            var b = Math.abs(A[i]), c = a;
            while (a && b) { a > b ? a %= b : b %= a; }
            a = Math.abs(c * A[i]) / (a + b);
        }
        return a;
    }
}

function loadDnKkCommentsOut() {
    var cmntsOut = $(".dn-kk-cmnts-out");
    var skuId = cmntsOut.data("skuid");
    var sort = $(".dn-kk-cmnts-flt-sort-by-sel").data("sort-key") || "new";

    var currentFltRatingKey = $(".dn-kk-cmnts-flt-rating-sel").data("rating-key");
    var fltRating = currentFltRatingKey ? parseInt(currentFltRatingKey) : 0;
    $.ajax({
        type: "POST",
        url: "/dmvc/kkcomment/?skuid=" + skuId + "&sort=" + sort + "&fltRating=" + fltRating,
        contentType: "text/html; charset=utf-8",
        success: function (resp) {
            cmntsOut.html(resp);
        },
        error: function (a, b, c) {
            console.log("not success loadDnKkCommentsOut", a, b, c);
        }
    });
}

function initDnKkCommentsForm() {
    $(".dn-kk-cmnts-requirements-lnk").click(dnKkCommentsRequirementsLnkClick);
    $(".dn-kk-cmnts-rating-star").click(dnKkCommentsRatingStarClick);
    $(".dn-kk-cmnts-recommendations-chbx").click(dnKkCommentsRecommendationsChbxClick);
    $(".dn-kk-cmnts-submit-btn").click(dnKkCommentsSubmitBtnClick);

    window.addEventListener("message", function (e) {
        if (e.data.action === 'dn-kk-cmnts-pics') {
            if (e.data.what === 'disable') {
                $(".dn-kk-cmnts-pics-add-lnk").fadeTo(600, .4);
                $(".dn-kk-cmnts-pics-add-lnk-iframe").hide();
            }
            if (e.data.what === 'enable') {
                dnKkCommentsLoadTmpPics();
                $(".dn-kk-cmnts-pics-add-lnk").fadeTo(600, 1);
                $(".dn-kk-cmnts-pics-add-lnk-iframe").show();
            }
        }
    },
    false);
}

function initDnKkCommentsAnswerForm() {
    $(".dn-kk-cmnts-answer-requirements-lnk, .dn-kk-cmnts-answer-submit-btn").off('click');
    $(".dn-kk-cmnts-answer-requirements-lnk").click(dnKkCommentsAnswerRequirementsLnkClick);
    $(".dn-kk-cmnts-answer-submit-btn").click(dnKkCommentsAnswerSubmitBtnClick);
}

function initDnKkCommentsItems() {
    initDnKkCommentsBenefitYesNo();
    $(".dn-kk-cmnts-comment-answer").click(dnKkCommentsAnswerClick);
    $(".dn-kk-cmnts-show-form-btn, .dn-kk-cmnts-show-form-btn-in-not-auth").click(dnKkCommentsShowFormBtnClick);
    $(".dn-kk-cmnts-flt-sort-by").click(dnKkCommentsFltSortByClick);
    $(".dn-kk-cmnts-flt-rating-lnk").click(dnKkCommentsFltRatingLnkClick);
    $(".dn-kk-cmnts-flt-rating-item").click(dnKkCommentsFltRatingItemClick);
    $(".dn-kk-cmnts-login-btn-on-comments").click(dnKkCommentsloginBtnOnCommentsClick);
    $(".dn-kk-cmnts-login-modal-on-comments button").click(dnKkCommentsLoginBtnOnCommentsSubmitClick);
    $(".dn-kk-cmnts-comment-del").click(dnKkCommentsCommentDelClick);
    $(".dn-kk-cmnts-approve-all-comments-lnk").click(dnKkCommentsApproveAllCommentsLnkClick);
}

function dnKkCommentsApproveAllCommentsLnkClick(e) {
    e.preventDefault();

    var ths = $(this);
    ths.fadeTo(300, .3);

    var pars = {
        skuId: parseInt($('.dn-kk-cmnts-out1').data("skuid"))
    };

    $.ajax({
        type: "POST",
        url: "/CLEVERServices/CommonService.asmx/ApproveAllComments",
        dataType: "json",
        data: JSON.stringify(pars),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var resultJson = JSON.parse(data.d);
            if (resultJson.IsSuccess) {
                alert('Все отзывы утверждены');
                loadDnKkCommentsOut();
            } else {
                alert(resultJson.MessageToUser || 'Не удалось утвердить.');
                ths.fadeTo(300, 1);
            }
        },
        error: function (a, b, c) {
            console.log("not success dnKkCommentsApproveAllCommentsLnkClick", a, b, c);
            ths.fadeTo(300, 1);
        }
    });
}

function dnKkCommentsCommentDelClick(e) {
    e.preventDefault();

    if (!confirm("Вы уверены, что хотите удалить этот отзыв/ответ?")) return;

    var ths = $(this);
    ths.fadeTo(300, .3);

    var pars = {
        commentId: parseInt(ths.data("commentid"))
    };

    $.ajax({
        type: "POST",
        url: "/CLEVERServices/CommonService.asmx/DelComment",
        dataType: "json",
        data: JSON.stringify(pars),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var resultJson = JSON.parse(data.d);
            if (resultJson.IsSuccess) {
                alert('Отзыв/ответ удален...');
                loadDnKkCommentsOut();
            } else {
                alert(resultJson.MessageToUser || 'Не удалось удалить.');
                ths.fadeTo(300, 1);
            }
        },
        error: function (a, b, c) {
            console.log("not success dnKkCommentsCommentDelClick", a, b, c);
            ths.fadeTo(300, 1);
        }
    });
}

var _dnKkCommentsLoginBtnOnCommentsSubmitClickLocker = false;
function dnKkCommentsLoginBtnOnCommentsSubmitClick(e) {
    e.preventDefault();

    if (_dnKkCommentsLoginBtnOnCommentsSubmitClickLocker) return;
    _dnKkCommentsLoginBtnOnCommentsSubmitClickLocker = true;

    var pars = {
        l: $('.dn-kk-cmnts-login-modal-on-comments-email').val() || '',
        p: $('.dn-kk-cmnts-login-modal-on-comments-password').val() || ''
    };

    var divOut = $('.dn-kk-cmnts-login-modal-on-comments');
    divOut.fadeTo(300, .3);

    $.ajax({
        type: "POST",
        url: "/CLEVERServices/CommonService.asmx/LoginInModel",
        dataType: "json",
        data: JSON.stringify(pars),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var resultJson = JSON.parse(data.d);
            if (resultJson.IsSuccess) {
                loadDnKkCommentsOut();
            } else {
                alert(resultJson.MessageToUser || 'Не удалось авторизоваться.');
                divOut.fadeTo(300, 1);
            }
        },
        error: function (a, b, c) {
            console.log("not success dnKkCommentsLoginBtnOnCommentsSubmitClick", a, b, c);
            divOut.fadeTo(300, 1);
        },
        complete: function () {
            _dnKkCommentsLoginBtnOnCommentsSubmitClickLocker = false;
        }
    });
}

var _dnKkCommentsApproveCommentLnkLocker = false;
function initDnKkCommentsApproveComment() {
    $('.dn-kk-cmnts-approve-comment-lnk, .dn-kk-cmnts-disapprove-comment-lnk').off('click');
    $('.dn-kk-cmnts-approve-comment-lnk, .dn-kk-cmnts-disapprove-comment-lnk').click(function (e) {
        e.preventDefault();

        var commentId = parseInt($(this).data("approve-comment-id"));
        if (!commentId) return;

        var divOut = $('.dn-kk-cmnts-approve-comment-out-' + commentId);
        if (!divOut.length) return;

        var isDisapprove = $(this).hasClass("dn-kk-cmnts-disapprove-comment-lnk");

        if (_dnKkCommentsApproveCommentLnkLocker) return;
        _dnKkCommentsApproveCommentLnkLocker = true;

        divOut.fadeTo(300, .3);

        $.ajax({
            type: "POST",
            url: "/dmvc/kkcomment/SetApproveComment/?commentId=" + commentId + "&setDisapprove=" + (isDisapprove ? 1 : 0),
            contentType: "text/html; charset=utf-8",
            success: function (resp) {
                var newDivOut = $(resp);
                newDivOut.fadeTo(0, .3);
                divOut.hide();
                newDivOut.insertAfter(divOut);
                divOut.remove();
                newDivOut.fadeTo(300, 1);
                initDnKkCommentsApproveComment();
            },
            error: function (a, b, c) {
                console.log("not success dmvc/kkcomment/SetApproveComment", a, b, c);
                divOut.fadeTo(300, 1);
            },
            complete: function () {
                _dnKkCommentsApproveCommentLnkLocker = false;
            }
        });
    });
}

function dnKkCommentsFltRatingItemClick(e) {
    e.preventDefault();

    var ratingKey = parseInt($(this).data("rating-key"));
    if (!ratingKey) return;

    $(".dn-kk-cmnts-flt-rating-perc").removeClass("dn-kk-cmnts-flt-rating-sel");
    var spanRatingPerc = $(this).find('.dn-kk-cmnts-flt-rating-perc');
    spanRatingPerc.addClass("dn-kk-cmnts-flt-rating-sel");

    loadDnKkCommentsOut();
}

function dnKkCommentsloginBtnOnCommentsClick(e) {
    e.preventDefault();

    $('.dn-kk-cmnts-login-modal-on-comments').fadeToggle(600);
}

function dnKkCommentsFltRatingLnkClick(e) {
    e.preventDefault();

    $('.dn-kk-cmnts-flt-rating-modal').fadeToggle(600);
}

function dnKkCommentsFltSortByClick(e) {
    e.preventDefault();

    $(".dn-kk-cmnts-flt-sort-by").removeClass("dn-kk-cmnts-flt-sort-by-sel");
    $(this).addClass("dn-kk-cmnts-flt-sort-by-sel");

    loadDnKkCommentsOut();
}

function dnKkCommentsShowFormBtnClick(e) {
    e.preventDefault();

    $('.dn-kk-cmnts-form-in-comments-out').fadeToggle(600);
}

function initDnKkCommentsBenefitYesNo() {
    $(".dn-kk-cmnts-comment-benefit-yes, .dn-kk-cmnts-comment-benefit-no").off("click");
    $(".dn-kk-cmnts-comment-benefit-yes").click(function (e) { dnKkCommentsBenefitYesNoClick($(this), e, true) });
    $(".dn-kk-cmnts-comment-benefit-no").click(function (e) { dnKkCommentsBenefitYesNoClick($(this), e, false) });
}

var _dnKkCommentsBenefitYesNoClickLocker = false;
function dnKkCommentsBenefitYesNoClick(ths, e, isYes) {
    e.preventDefault();
    if (_dnKkCommentsBenefitYesNoClickLocker) return;
    _dnKkCommentsBenefitYesNoClickLocker = true;

    var span = ths.parent();

    span.fadeTo(300, .3);

    $.ajax({
        type: "POST",
        url: "/dmvc/kkcomment/benefit/?commentId=" + span.data("commentid") + "&addYesNo=" + (isYes ? 10 : -10),
        contentType: "text/html; charset=utf-8",
        success: function (resp) {
            var newSpan = $(resp);
            newSpan.fadeTo(0, .3);
            span.hide();
            newSpan.insertAfter(span);
            span.remove();
            newSpan.fadeTo(300, 1);
            initDnKkCommentsBenefitYesNo();
        },
        error: function (a, b, c) {
            console.log("not success dmvc/kkcomment/benefit", a, b, c);
            span.fadeTo(300, 1);
        },
        complete: function () {
            _dnKkCommentsBenefitYesNoClickLocker = false;
        }
    });
}

function dnKkCommentsAnswerClick(e) {
    e.preventDefault();

    var ths = $(this);

    var commentId = parseInt(ths.data("commentid"));
    if (!commentId) return;

    var divId = 'dnKkCmntsAnswerMessageOut' + commentId;
    var div = $('#' + divId)
    if (div.length) {
        div.fadeTo(600, 0, function () { div.remove(); });
    } else {
        var tmp = $("<div style='margin: 10px 5px; color: #666'>");
        tmp.text('Пожалуйста, подождите, форма загружается...');
        tmp.insertAfter(ths);

        $.ajax({
            type: "POST",
            url: "/dmvc/kkcomment/AnswerToComment/?commentId=" + commentId,
            contentType: "text/html; charset=utf-8",
            success: function (resp) {
                div = $(resp);
                div.fadeTo(0, .3);
                tmp.remove();
                div.insertAfter(ths);
                div.fadeTo(600, 1);
            },
            error: function (a, b, c) {
                console.log("not success dmvc/kkcomment/AnswerToComment", a, b, c);
            }
        });
    }
}

function dnKkCommentsLoadTmpPics() {
    var guid = $(".dn-kk-cmnts-out1").data("guid");
    var datestr = $(".dn-kk-cmnts-out1").data("datestr");
    $.ajax({
        type: "POST",
        url: "/CLEVERServices/CommonService.asmx/GetKkCommentTmpPics",
        dataType: "json",
        data: JSON.stringify({ datestr: datestr, guid: guid }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var resultJson = JSON.parse(data.d);
            $(".dn-kk-cmnts-pics-out > .dn-kk-cmnts-pics-img-out").remove();
            $.each(resultJson.Result, function (a, b) {
                var d1 = $("<div class='dn-kk-cmnts-pics-img-out'>");
                $(".dn-kk-cmnts-pics-out").append(d1);
                var img = $("<img src='/CLEVER/s2img/x.jpg' class='dn-kk-cmnts-pics-img-x' data-n='" + b.n + "'>");
                d1.append(img);
                var d2 = $("<div class='dn-kk-cmnts-pics-img'>");
                d1.append(d2);
                var img = $("<img>");
                d2.append(img);
                img.attr("src", b.u);
                if (b.w > b.h) {
                    img.height(64);
                    img.css("left", "-" + Math.round((64 * b.w / b.h - 64) / 2) + "px");
                } else {
                    img.width(64);
                    img.css("top", "-" + Math.round((64 * b.h / b.w - 64) / 2) + "px");
                }
            });

            dnKkCommentsBindEventsForPicsImgXs();
        },
        error: function (a, b, c) {
            console.log("not success dnKkCommentsLoadTmpPics", a, b, c);
        }
    });
}

function dnKkCommentsBindEventsForPicsImgXs() {
    $(".dn-kk-cmnts-pics-img-x").click(function () {
        var commentDateStr = $(".dn-kk-cmnts-out1").data("datestr");
        var commentGuid = $(".dn-kk-cmnts-out1").data("guid");
        var imgNumber = parseInt($(this).data("n"));
        $.ajax({
            type: "POST",
            url: "/CLEVERServices/CommonService.asmx/RemoveKkCommentTmpPic",
            dataType: "json",
            data: JSON.stringify({ commentDateStr: commentDateStr, commentGuid: commentGuid, imgNumber: imgNumber }),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var resultJson = JSON.parse(data.d);
                dnKkCommentsLoadTmpPics();
            },
            error: function (a, b, c) {
                console.log("not success dn-kk-cmnts-pics-img-x click", a, b, c);
            }
        });
    });
}

// Показать подсказку
function dnKkCommentsRequirementsLnkClick(e) {
    e.preventDefault();
    console.log('Показать подсказку');
}

// Показать подсказку по ответам
function dnKkCommentsAnswerRequirementsLnkClick(e) {
    e.preventDefault();
    console.log('Показать подсказку по ответам');
}

// Звездочки рейтинга
function dnKkCommentsRatingStarClick(e) {
    e.preventDefault();
    var cont = $(this).parent();
    var v = parseInt($(this).data("v"));
    cont.find(".dn-kk-cmnts-rating-star").removeClass("dn-kk-cmnts-rating-star-sel");
    for (var i = 0; i < 5; i++) {
        var el = cont.find(".dn-kk-cmnts-rating-star:eq(" + i + ")");
        if (i + 1 <= v) el.addClass("dn-kk-cmnts-rating-star-sel");
    }
}

// Радиобатоны рекомендовать или нет
function dnKkCommentsRecommendationsChbxClick(e) {
    e.preventDefault();
    var cont = $(this).parent().parent();
    var v = !!$(this).data("yesno");
    var chbxs = cont.find("label").find(".dn-kk-cmnts-recommendations-chbx");
    chbxs.removeClass("dn-kk-cmnts-recommendations-chbx-green");
    for (var i = 0 ; i < chbxs.length; i++) {
        var chbx = chbxs.eq(i);
        var lv = !!chbx.data("yesno");
        if (lv === v) chbx.addClass("dn-kk-cmnts-recommendations-chbx-green");
    }
}

// Отправить ответ на отзыв
function dnKkCommentsAnswerSubmitBtnClick(e) {
    e.preventDefault();

    var commentId = parseInt($(this).data("commentid"));
    if (!commentId) return;

    var div = $('#dnKkCmntsAnswerMessageOut' + commentId);

    var prs = {
        commentId: commentId,
        message: $('#dnKkCmntsAnswerMessage' + commentId).val() || '',
        anonName: $('#dnKkCmntsAnswerAnonName' +commentId).val() || '',
        anonEmail: $('#dnKkCmntsAnswerAnonEmail' +commentId).val() || ''
    };

    div.fadeTo(200, .1);
    $.ajax({
        type: "POST",
        url: "/CLEVERServices/CommonService.asmx/AddKkCommentAnswer",
        dataType: "json",
        data: JSON.stringify(prs),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var resultJson = JSON.parse(data.d);
            if (!resultJson.IsSuccess) {
                alert(resultJson.MessageToUser || 'Не удалось добавить ответ на комментарий..');
                div.fadeTo(200, 1);
            } else {
                div.fadeTo(600, 0, function () { div.remove(); alert("Ответ на комментарий добавлен"); });
            }
        },
        error: function (a, b, c) {
            div.fadeTo(200, 1);
            console.log("not success", a, b, c);
        }
    });
}

// Отправить комментарий
function dnKkCommentsSubmitBtnClick(e) {
    e.preventDefault();

    var cmntsOut1 = $('.dn-kk-cmnts-out1');
    if (cmntsOut1.length != 1) {
        alert('Отзыв не может быть оставлен');
        return;
    }

    var imagesJson = [];
    $(".dn-kk-cmnts-pics-img > img").each(function (a, b) {
        var img = $(".dn-kk-cmnts-pics-img > img").eq(a);
        imagesJson.push(img.attr("src"));
    });

    var prs = {
        skuId: parseInt($(".dn-kk-cmnts-out1").data("skuid")),
        parentId: 0,
        message: $(".dn-kk-cmnts-message").val(),
        rating: $(".dn-kk-cmnts-rating-star-sel").length,
        recommendation: !!$(".dn-kk-cmnts-recommendations-chbx-green").data("yesno"),
        anonName: $('.dn-kk-cmnts-anon-name').val() || '',
        anonEmail: $('.dn-kk-cmnts-anon-email').val() || '',
        imagesJson: JSON.stringify(imagesJson)
    };

    $.ajax({
        type: "POST",
        url: "/CLEVERServices/CommonService.asmx/AddKkComment",
        dataType: "json",
        data: JSON.stringify(prs),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var resultJson = JSON.parse(data.d);
            if (!resultJson.IsSuccess) {
                alert(resultJson.MessageToUser || 'Не удалось добавить комментарий');
            } else {
                alert("Комментарий добавлен");
                $(".dn-kk-cmnts-out").html("<div style='text-align: center; color: #666; padding: 40px 0'>комментарии загружаются...</div>");
                $(".dn-kk-cmnts-out").fadeTo(300, .5);
                loadDnKkCommentsOut();
                $(".dn-kk-cmnts-out").fadeTo(300, 1);
            }
        },
        error: function (a, b, c) {
            console.log("not success", a, b, c);
        }
    });
}
