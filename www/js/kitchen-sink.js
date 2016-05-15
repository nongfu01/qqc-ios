var myApp = new Framework7({
    modalTitle: '提示',
    animateNavBackIcon: true,
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {
    // Enable Dynamic Navbar for this view
    dynamicNavbar: true,
});
// Add another view, which is in right panel
var rightView = myApp.addView('.view-right', {
    // Enable Dynamic Navbar for this view
    dynamicNavbar: true
});

var openUrl = 'a.qqcapp.com';//a.qqcapp.com

var testUrl = 'a.qqcapp.com';//192.168.1.100



//提交submit处理
$$(document).on('submitted', function (e) {
    if (e.detail.xhr.requestUrl.indexOf('method=customer&source=login') >= 0) {

        var result = JSON.parse(e.detail.data);

        if(result.status == 'succ'){
            myApp.alert(result.msg);
            window.localStorage.userid = result.data.user_id;
            mainView.router.loadPage('ucenter.html');
        }else{
            myApp.alert(result.msg);
        }

        return;
    }

    if(e.detail.xhr.requestUrl.indexOf('&method=searchany&source=goods') >= 0){
        $$('.searchany').html(e.detail.data);
        return ;
    }

    if(e.detail.xhr.requestUrl.indexOf('&method=customer&source=register') >= 0){

        var result = JSON.parse(e.detail.data);

        if(result.status == 'succ'){
            myApp.alert(result.msg);
            window.localStorage.userid = result.data.user_id;
            mainView.router.loadPage('ucenter.html');
        }else{
            myApp.alert(result.msg);
        }

        return;

    }

    if(e.detail.xhr.requestUrl.indexOf('&method=customer&source=doaddr') >= 0){

        // var result = JSON.parse(e.detail.data);

        // if(result.status == 'succ'){
        //     myApp.alert(result.msg);
        //     window.localStorage.userid = result.data.user_id;
        //     mainView.router.loadPage('ucenter.html');
        // }else{
        //     myApp.alert(result.msg);
        // }

        myApp.alert(e.detail.data);
        return;

    }

    if(e.detail.xhr.requestUrl.indexOf('&method=customer&source=douinfo') >= 0){

        var result = JSON.parse(e.detail.data);

        if(result.status == 'succ'){
            myApp.alert(result.msg);
            mainView.router.loadPage('ucenter.html');
        }else{
            myApp.alert(result.msg);
        }

        return;

    }

    if (e.detail.xhr.requestUrl.indexOf('&method=customer&source=cpwd') >= 0) {

        var result = JSON.parse(e.detail.data);

        if(result.status == 'succ'){
            myApp.alert(result.msg);
            window.localStorage.userid = null;
            mainView.router.loadPage('ucenter.html');
        }else{
            myApp.alert(result.msg);
        }

        return;
    }

});

// Show/hide preloader for remote ajax loaded pages
// Probably should be removed on a production/local app
// $$(document).on('ajaxStart', function (e) {

//     if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
//         // Don't show preloader for autocomplete demo requests
//         return;
//     }
//     myApp.showIndicator();
// });
// $$(document).on('ajaxComplete', function (e) {
//     if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
//         // Don't show preloader for autocomplete demo requests
//         return;
//     }
//     myApp.hideIndicator();
// });

// Callbacks for specific pages when it initialized
/* ===== Modals Page events  ===== */
myApp.onPageInit('modals', function (page) {

    $$('.product-index').css('bottom','-50px');
    $$('.index-index').css('bottom','0px');

    $$('.demo-alert').on('click', function () {
        myApp.alert('Hello!');
    });
    $$('.demo-confirm').on('click', function () {
        myApp.confirm('Are you feel good today?', function () {
            myApp.alert('Great!');
        });
    });
    $$('.demo-prompt').on('click', function () {
        myApp.prompt('What is your name?', function (data) {
            // @data contains input value
            myApp.confirm('Are you sure that your name is ' + data + '?', function () {
                myApp.alert('Ok, your name is ' + data + ' ;)');
            });
        });
    });
    $$('.demo-login').on('click', function () {
        myApp.modalLogin('Enter your username and password', function (username, password) {
            myApp.alert('Thank you! Username: ' + username + ', password: ' + password);
        });
    });
    $$('.demo-password').on('click', function () {
        myApp.modalPassword('Enter your password', function (password) {
            myApp.alert('Thank you! Password: ' + password);
        });
    });
    $$('.demo-modals-stack').on('click', function () {
        // Open 5 alerts
        myApp.alert('Alert 1');
        myApp.alert('Alert 2');
        myApp.alert('Alert 3');
        myApp.alert('Alert 4');
        myApp.alert('Alert 5');
    });
    $$('.demo-picker-modal').on('click', function () {
        myApp.pickerModal('.picker-modal-demo');
    });
});

/* ===== Preloader Page events ===== */
myApp.onPageInit('preloader', function (page) {
    $$('.product-index').css('bottom','-50px');
    $$('.index-index').css('bottom','0px');

    $$('.demo-indicator').on('click', function () {
        myApp.showIndicator();
        setTimeout(function () {
            myApp.hideIndicator();
        }, 2000);
    });
    $$('.demo-preloader').on('click', function () {
        myApp.showPreloader();
        setTimeout(function () {
            myApp.hidePreloader();
        }, 2000);
    });
    $$('.demo-preloader-custom').on('click', function () {
        myApp.showPreloader('My text...');
        setTimeout(function () {
            myApp.hidePreloader();
        }, 2000);
    });
});

/* ===== Swipe to delete events callback demo ===== */

myApp.onPageInit('swipe-delete media-lists', function (page) {

    $$('.product-index').css('bottom','-50px');
    $$('.index-index').css('bottom','0px');

    $$('.demo-reply').on('click', function () {
        myApp.alert('Reply');
    });
    $$('.demo-mark').on('click', function () {
        myApp.alert('Mark');
    });
    $$('.demo-forward').on('click', function () {
        myApp.alert('Forward');
    });
});

/* ===== Action sheet, we use it on few pages ===== */
myApp.onPageInit('swipe-delete modals media-lists form-elements', function (page) {

    $$('.product-index').css('bottom','-50px');
    $$('.index-index').css('bottom','0px');

    var actionSheetButtons = [
        // First buttons group
        [
            // Group Label
            {
                text: 'Here comes some optional description or warning for actions below',
                label: true
            },
            // First button
            {
                text: 'Alert',
                onClick: function () {
                    myApp.alert('He Hoou!');
                }
            },
            // Another red button
            {
                text: 'Nice Red Button ',
                color: 'red',
                onClick: function () {
                    myApp.alert('You have clicked red button!');
                }
            },
        ],
        // Second group
        [
            {
                text: 'Cancel',
                bold: true
            }
        ]
    ];
    $$('.demo-actions').on('click', function (e) {
        myApp.actions(actionSheetButtons);
    });
    $$('.demo-actions-popover').on('click', function (e) {
        // We need to pass additional target parameter (this) for popover
        myApp.actions(this, actionSheetButtons);
    });

});

myApp.onPageInit('list-view',function (page) {

    var userid = window.localStorage.userid;

    if(userid){
        $$.ajax({
            url: 'http://'+testUrl+'/index.php?con=api&act=index&method=customer&source=uinfo&id='+userid,
            method: 'GET',
            dataType:'json',
            //send "query" to server. Useful in case you generate response dynamically
            success: function (data) {

                var src = '';

                var res = data.data;

                if(res.head_pic == null){
                    src = './img/avatar.jpg';
                }else{
                    src = res.head_pic;
                }

                
                $$('#image').attr('src',src);

                if(data.status == 'succ'){
                    var html = res.name+' | '+res.balance+'元';
                    $$('#islogin').html(html);
                    $$('#nologin').css('display','none');
                    $$('.loginout').show();
                }else{
                    $$('#islogin').css('display','none');
                    $$('#nologin').css('display','block');
                    $$('.loginout').hide();
                }
 
            }
        });
        
    }else{

        var src = './img/avatar.jpg';
        $$('#islogin').css('display','none');
        $$('#nologin').css('display','block');
        $$('#image').attr('src',src);
        $$('.loginout').hide();
    }

    $$('.loginout').on('click',function(){
        window.localStorage.clear();
        mainView.router.loadPage('index.html');
        return false;
    }); 

});

/* ===== Messages Page ===== */
myApp.onPageInit('messages', function (page) {
    var conversationStarted = false;
    var answers = [
        'Yes!',
        'No',
        'Hm...',
        'I am not sure',
        'And what about you?',
        'May be ;)',
        'Lorem ipsum dolor sit amet, consectetur',
        'What?',
        'Are you sure?',
        'Of course',
        'Need to think about it',
        'Amazing!!!',
    ];
    var people = [
        {
            name: 'Kate Johnson',
            avatar: 'http://lorempixel.com/output/people-q-c-100-100-9.jpg'
        },
        {
            name: 'Blue Ninja',
            avatar: 'http://lorempixel.com/output/people-q-c-100-100-7.jpg'
        },

    ];
    var answerTimeout, isFocused;

    // Initialize Messages
    var myMessages = myApp.messages('.messages');

    // Initialize Messagebar
    var myMessagebar = myApp.messagebar('.messagebar');

    $$('.messagebar a.send-message').on('touchstart mousedown', function () {
        isFocused = document.activeElement && document.activeElement === myMessagebar.textarea[0];
    });
    $$('.messagebar a.send-message').on('click', function (e) {
        // Keep focused messagebar's textarea if it was in focus before
        if (isFocused) {
            e.preventDefault();
            myMessagebar.textarea[0].focus();
        }
        var messageText = myMessagebar.value();
        if (messageText.length === 0) {
            return;
        }
        // Clear messagebar
        myMessagebar.clear();

        // Add Message
        myMessages.addMessage({
            text: messageText,
            type: 'sent',
            day: !conversationStarted ? 'Today' : false,
            time: !conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
        });
        conversationStarted = true;
        // Add answer after timeout
        if (answerTimeout) clearTimeout(answerTimeout);
        answerTimeout = setTimeout(function () {
            var answerText = answers[Math.floor(Math.random() * answers.length)];
            var person = people[Math.floor(Math.random() * people.length)];
            myMessages.addMessage({
                text: answers[Math.floor(Math.random() * answers.length)],
                type: 'received',
                name: person.name,
                avatar: person.avatar
            });
        }, 2000);
    });
});

/* ===== Pull To Refresh Demo ===== */
myApp.onPageInit('pull-to-refresh', function (page) {
    
    $$('.product-index').css('bottom','-50px');
    $$('.index-index').css('bottom','0px');

    // Dummy Content
    var songs = ['Yellow Submarine', 'Don\'t Stop Me Now', 'Billie Jean', 'Californication'];
    var authors = ['Beatles', 'Queen', 'Michael Jackson', 'Red Hot Chili Peppers'];
    // Pull to refresh content
    var ptrContent = $$(page.container).find('.pull-to-refresh-content');
    // Add 'refresh' listener on it
    ptrContent.on('refresh', function (e) {
        // Emulate 2s loading
        setTimeout(function () {
            var picURL = 'http://lorempixel.com/88/88/abstract/' + Math.round(Math.random() * 10);
            var song = songs[Math.floor(Math.random() * songs.length)];
            var author = authors[Math.floor(Math.random() * authors.length)];
            var linkHTML = '<li class="item-content">' +
                                '<div class="item-media"><img src="' + picURL + '" width="44"/></div>' +
                                '<div class="item-inner">' +
                                    '<div class="item-title-row">' +
                                        '<div class="item-title">' + song + '</div>' +
                                    '</div>' +
                                    '<div class="item-subtitle">' + author + '</div>' +
                                '</div>' +
                            '</li>';
            ptrContent.find('ul').prepend(linkHTML);
            // When loading done, we need to "close" it
            myApp.pullToRefreshDone();
        }, 2000);
    });
});

/* ===== Sortable page ===== */
myApp.onPageInit('sortable-list', function (page) {

    $$('.product-index').css('bottom','-50px');
    $$('.index-index').css('bottom','0px');

    // Sortable toggler
    $$('.list-block.sortable').on('open', function () {
        $$('.toggle-sortable').text('Done');
    });
    $$('.list-block.sortable').on('close', function () {
        $$('.toggle-sortable').text('Edit');
    });
});

/* ===== Photo Browser Examples ===== */
// Create photoprobsers first:
var photoBrowserPhotos = [
	{
		url: 'img/beach.jpg',
		caption: 'Amazing beach in Goa, India'
	},
    'http://placekitten.com/1024/1024',
    'img/lock.jpg',
    {
        url: 'img/monkey.jpg',
        caption: 'I met this monkey in Chinese mountains'
    },
    {
        url: 'img/mountains.jpg',
        caption: 'Beautiful mountains in Zhangjiajie, China'
    }

];
var photoBrowserStandalone = myApp.photoBrowser({
    photos: photoBrowserPhotos
});
var photoBrowserPopup = myApp.photoBrowser({
    photos: photoBrowserPhotos,
    type: 'popup'
});
var photoBrowserPage = myApp.photoBrowser({
    photos: photoBrowserPhotos,
    type: 'page',
    backLinkText: 'Back'
});
var photoBrowserDark = myApp.photoBrowser({
    photos: photoBrowserPhotos,
    theme: 'dark'
});
var photoBrowserPopupDark = myApp.photoBrowser({
    photos: photoBrowserPhotos,
    theme: 'dark',
    type: 'popup'
});
var photoBrowserLazy = myApp.photoBrowser({
    photos: photoBrowserPhotos,
    lazyLoading: true,
    theme: 'dark'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.ks-pb-standalone').on('click', function () {
        photoBrowserStandalone.open();
    });
    $$('.ks-pb-popup').on('click', function () {
        photoBrowserPopup.open();
    });
    $$('.ks-pb-page').on('click', function () {
        photoBrowserPage.open();
    });
    $$('.ks-pb-popup-dark').on('click', function () {
        photoBrowserPopupDark.open();
    });
    $$('.ks-pb-standalone-dark').on('click', function () {
        photoBrowserDark.open();
    });
    $$('.ks-pb-lazy').on('click', function () {
        photoBrowserLazy.open();
    });
});

/* ===== Infinite Scroll Page ===== */
myApp.onPageInit('infinite-scroll', function (page) {

    $$('.product-index').css('bottom','-50px');
    $$('.index-index').css('bottom','0px');

    // Loading trigger
    var loading = false;
    // Last loaded index, we need to pass it to script
    var lastLoadedIndex = $$('.infinite-scroll .list-block li').length;
    // Attach 'infinite' event handler
    $$('.infinite-scroll').on('infinite', function () {
        // Exit, if loading in progress
        if (loading) return;
        // Set loading trigger
        loading = true;
        // Request some file with data
        $$.get('infinite-scroll-load.php', {leftIndex: lastLoadedIndex + 1}, function (data) {
            loading = false;
            if (data === '') {
                // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
                myApp.detachInfiniteScroll($$('.infinite-scroll'));
            }
            else {
                // Append loaded elements to list block
                $$('.infinite-scroll .list-block ul').append(data);
                // Update last loaded index
                lastLoadedIndex = $$('.infinite-scroll .list-block li').length;
            }
        });
    });
});

/* ===== Notifications Page ===== */
myApp.onPageInit('notifications', function (page) {
    $$('.ks-notification-simple').on('click', function () {
        myApp.addNotification({
            title: 'Framework7',
            message: 'This is a simple notification message with title and message'
        });
    });
    $$('.ks-notification-full').on('click', function () {
        myApp.addNotification({
            title: 'Framework7',
            subtitle: 'Notification subtitle',
            message: 'This is a simple notification message with custom icon and subtitle',
            media: '<i class="icon icon-f7"></i>'
        });
    });
    $$('.ks-notification-custom').on('click', function () {
        myApp.addNotification({
            title: 'My Awesome App',
            subtitle: 'New message from John Doe',
            message: 'Hello, how are you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut posuere erat. Pellentesque id elementum urna, a aliquam ante. Donec vitae volutpat orci. Aliquam sed molestie risus, quis tincidunt dui.',
            media: '<img width="44" height="44" style="border-radius:100%" src="http://lorempixel.com/output/people-q-c-100-100-9.jpg">'
        });
    });
    $$('.ks-notification-callback').on('click', function () {
        myApp.addNotification({
            title: 'My Awesome App',
            subtitle: 'New message from John Doe',
            message: 'Hello, how are you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut posuere erat. Pellentesque id elementum urna, a aliquam ante. Donec vitae volutpat orci. Aliquam sed molestie risus, quis tincidunt dui.',
            media: '<img width="44" height="44" style="border-radius:100%" src="http://lorempixel.com/output/people-q-c-100-100-9.jpg">',
            onClose: function () {
                myApp.alert('Notification closed');
            }
        });
    });
});

/* ===== Login screen page events ===== */
myApp.onPageInit('login-screen-embedded', function (page) {
    $$(page.container).find('.list-button').on('click', function () {
        var username = $$(page.container).find('input[name="username"]').val();
        var password = $$(page.container).find('input[name="password"]').val();
        myApp.alert('Username: ' + username + ', password: ' + password, function () {
            mainView.router.back();
        });
    });
});
$$('.login-screen').find('.list-button').on('click', function () {
    var username = $$('.login-screen').find('input[name="username"]').val();
    var password = $$('.login-screen').find('input[name="password"]').val();
    myApp.alert('Username: ' + username + ', password: ' + password, function () {
        myApp.closeModal('.login-screen');
    });
});

/* ===== Demo Popover ===== */
$$('.popover a').on('click', function () {
    myApp.closeModal('.popover');
});

/* ===== Color themes ===== */
myApp.onPageInit('color-themes', function (page) {
    var themes = 'theme-white theme-black theme-yellow theme-red theme-blue theme-green theme-pink theme-lightblue theme-orange theme-gray';
    var layouts = 'layout-dark layout-white';
    $$(page.container).find('.ks-color-theme').click(function () {
        $$('body').removeClass(themes).addClass('theme-' + $$(this).attr('data-theme'));
    });
    $$(page.container).find('.ks-layout-theme').click(function () {
        $$('body').removeClass(layouts).addClass('layout-' + $$(this).attr('data-theme'));
    });
});

/* ===== Virtual List ===== */
myApp.onPageInit('virtual-list', function (page) {
    // Generate array with 10000 demo items:
    var items = [];
    for (var i = 0; i < 10000; i++) {
        items.push({
            title: 'Item ' + i,
            subtitle: 'Subtitle ' + i
        });
    }

    // Create virtual list
    var virtualList = myApp.virtualList($$(page.container).find('.virtual-list'), {
        // Pass array with items
        items: items,
        // Custom search function for searchbar
        searchAll: function (query, items) {
            var found = [];
            for (var i = 0; i < items.length; i++) {
                if (items[i].title.indexOf(query) >= 0 || query.trim() === '') found.push(i);
            }
            return found; //return array with mathced indexes
        },
        // List item Template7 template
        template: '<li>' +
                    '<a href="#" class="item-link item-content">' +
                      '<div class="item-inner">' +
                        '<div class="item-title-row">' +
                          '<div class="item-title">{{title}}</div>' +
                        '</div>' +
                        '<div class="item-subtitle">{{subtitle}}</div>' +
                      '</div>' +
                    '</a>' +
                  '</li>',
        // Item height
        height: 63,
    });
});
/* ===== Swiper Two Way Control Gallery ===== */
myApp.onPageInit('swiper-gallery', function (page) {

    $$('.product-index').css('bottom','-50px');
    $$('.index-index').css('bottom','0px');

    var swiperTop = myApp.swiper('.ks-swiper-gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10
    });
    var swiperThumbs = myApp.swiper('.ks-swiper-gallery-thumbs', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    swiperTop.params.control = swiperThumbs;
    swiperThumbs.params.control = swiperTop;
});
/* ===== Calendar ===== */
myApp.onPageInit('calendar', function (page) {
    // Default
    var calendarDefault = myApp.calendar({
        input: '#ks-calendar-default',
    });
    // With custom date format
    var calendarDateFormat = myApp.calendar({
        input: '#ks-calendar-date-format',
        dateFormat: 'DD, MM dd, yyyy'
    });
    // With multiple values
    var calendarMultiple = myApp.calendar({
        input: '#ks-calendar-multiple',
        dateFormat: 'M dd yyyy',
        multiple: true
    });
    // Range Picker
    var calendarRange = myApp.calendar({
        input: '#ks-calendar-range',
        dateFormat: 'M dd yyyy',
        rangePicker: true
    });
    // Inline with custom toolbar
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];
    var calendarInline = myApp.calendar({
        container: '#ks-calendar-inline-container',
        value: [new Date()],
        weekHeader: false,
        toolbarTemplate:
            '<div class="toolbar calendar-custom-toolbar">' +
                '<div class="toolbar-inner">' +
                    '<div class="left">' +
                        '<a href="#" class="link icon-only"><i class="icon icon-back"></i></a>' +
                    '</div>' +
                    '<div class="center"></div>' +
                    '<div class="right">' +
                        '<a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>' +
                    '</div>' +
                '</div>' +
            '</div>',
        onOpen: function (p) {
            $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
            $$('.calendar-custom-toolbar .left .link').on('click', function () {
                calendarInline.prevMonth();
            });
            $$('.calendar-custom-toolbar .right .link').on('click', function () {
                calendarInline.nextMonth();
            });
        },
        onMonthYearChangeStart: function (p) {
            $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
        }
    });
});

/* ===== Pickers ===== */
myApp.onPageInit('pickers form-elements', function (page) {

    $$('.product-index').css('bottom','-50px');
    $$('.index-index').css('bottom','0px');

    var today = new Date();

    // iOS Device picker
    var pickerDevice = myApp.picker({
        input: '#ks-picker-device',
        cols: [
            {
                textAlign: 'center',
                values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
            }
        ]
    });



    // Describe yourself picker
    var pickerDescribe = myApp.picker({
        input: '#ks-picker-describe',
        rotateEffect: true,
        cols: [
            {
                textAlign: 'left',
                values: ('Super Lex Amazing Bat Iron Rocket Lex Cool Beautiful Wonderful Raining Happy Amazing Funny Cool Hot').split(' ')
            },
            {
                values: ('Man Luthor Woman Boy Girl Person Cutie Babe Raccoon').split(' ')
            },
        ]
    });

    // Dependent values
    var carVendors = {
        Japanese : ['Honda', 'Lexus', 'Mazda', 'Nissan', 'Toyota'],
        German : ['Audi', 'BMW', 'Mercedes', 'Volkswagen', 'Volvo'],
        American : ['Cadillac', 'Chrysler', 'Dodge', 'Ford']
    };
    var pickerDependent = myApp.picker({
        input: '#ks-picker-dependent',
        rotateEffect: true,
        formatValue: function (picker, values) {
            return values[1];
        },
        cols: [
            {
                textAlign: 'left',
                values: ['Japanese', 'German', 'American'],
                onChange: function (picker, country) {
                    if(picker.cols[1].replaceValues){
                        picker.cols[1].replaceValues(carVendors[country]);
                    }
                }
            },
            {
                values: carVendors.Japanese,
                width: 160,
            },
        ]
    });


    // Custom Toolbar
    var pickerCustomToolbar = myApp.picker({
        input: '#ks-picker-custom-toolbar',
        rotateEffect: true,
        toolbarTemplate:
            '<div class="toolbar">' +
                '<div class="toolbar-inner">' +
                    '<div class="left">' +
                        '<a href="#" class="link toolbar-randomize-link">Randomize</a>' +
                    '</div>' +
                    '<div class="right">' +
                        '<a href="#" class="link close-picker">That\'s me</a>' +
                    '</div>' +
                '</div>' +
            '</div>',
        cols: [
            {
                values: ['Mr', 'Ms'],
            },
            {
                textAlign: 'left',
                values: ('Super Lex Amazing Bat Iron Rocket Lex Cool Beautiful Wonderful Raining Happy Amazing Funny Cool Hot').split(' ')
            },
            {
                values: ('Man Luthor Woman Boy Girl Person Cutie Babe Raccoon').split(' ')
            },
        ],
        onOpen: function (picker) {
            picker.container.find('.toolbar-randomize-link').on('click', function () {
                var col0Values = picker.cols[0].values;
                var col0Random = col0Values[Math.floor(Math.random() * col0Values.length)];

                var col1Values = picker.cols[1].values;
                var col1Random = col1Values[Math.floor(Math.random() * col1Values.length)];

                var col2Values = picker.cols[2].values;
                var col2Random = col2Values[Math.floor(Math.random() * col2Values.length)];

                picker.setValue([col0Random, col1Random, col2Random]);
            });
        }
    });

    // Inline date-time
    var pickerInline = myApp.picker({
        input: '#ks-picker-date',
        container: '#ks-picker-date-container',
        toolbar: false,
        rotateEffect: true,
        value: [today.getMonth(), today.getDate(), today.getFullYear(), today.getHours(), (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes())],
        onChange: function (picker, values, displayValues) {
            var daysInMonth = new Date(picker.value[2], picker.value[0]*1 + 1, 0).getDate();
            if (values[1] > daysInMonth) {
                picker.cols[1].setValue(daysInMonth);
            }
        },
        formatValue: function (p, values, displayValues) {
            return displayValues[0] + ' ' + values[1] + ', ' + values[2] + ' ' + values[3] + ':' + values[4];
        },
        cols: [
            // Months
            {
                values: ('0 1 2 3 4 5 6 7 8 9 10 11').split(' '),
                displayValues: ('January February March April May June July August September October November December').split(' '),
                textAlign: 'left'
            },
            // Days
            {
                values: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
            },
            // Years
            {
                values: (function () {
                    var arr = [];
                    for (var i = 1950; i <= 2030; i++) { arr.push(i); }
                    return arr;
                })(),
            },
            // Space divider
            {
                divider: true,
                content: '&nbsp;&nbsp;'
            },
            // Hours
            {
                values: (function () {
                    var arr = [];
                    for (var i = 0; i <= 23; i++) { arr.push(i); }
                    return arr;
                })(),
            },
            // Divider
            {
                divider: true,
                content: ':'
            },
            // Minutes
            {
                values: (function () {
                    var arr = [];
                    for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
                    return arr;
                })(),
            }
        ]
    });
});

/* ===== Progress Bars ===== */
myApp.onPageInit('progressbar', function (page) {
    $$('.ks-demo-progressbar-inline .button').on('click', function () {
        var progress = $$(this).attr('data-progress');
        var progressbar = $$('.ks-demo-progressbar-inline .progressbar');
        myApp.setProgressbar(progressbar, progress);
    });
    $$('.ks-demo-progressbar-load-hide .button').on('click', function () {
        var container = $$('.ks-demo-progressbar-load-hide p:first-child');
        if (container.children('.progressbar').length) return; //don't run all this if there is a current progressbar loading

        myApp.showProgressbar(container, 0);

        // Simluate Loading Something
        var progress = 0;
        function simulateLoading() {
            setTimeout(function () {
                var progressBefore = progress;
                progress += Math.random() * 20;
                myApp.setProgressbar(container, progress);
                if (progressBefore < 100) {
                    simulateLoading(); //keep "loading"
                }
                else myApp.hideProgressbar(container); //hide
            }, Math.random() * 200 + 200);
        }
        simulateLoading();
    });
    $$('.ks-demo-progressbar-overlay .button').on('click', function () {
        // Add Directly To Body
        var container = $$('body');
        if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading

        myApp.showProgressbar(container, 0);

        // Simluate Loading Something
        var progress = 0;
        function simulateLoading() {
            setTimeout(function () {
                var progressBefore = progress;
                progress += Math.random() * 20;
                myApp.setProgressbar(container, progress);
                if (progressBefore < 100) {
                    simulateLoading(); //keep "loading"
                }
                else myApp.hideProgressbar(container); //hide
            }, Math.random() * 200 + 200);
        }
        simulateLoading();
    });
    $$('.ks-demo-progressbar-infinite-overlay .button').on('click', function () {
        // Add Directly To Body
        var container = $$('body');
        if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
        myApp.showProgressbar(container);
        setTimeout(function () {
            myApp.hideProgressbar();
        }, 3000);
    });
    $$('.ks-demo-progressbar-infinite-multi-overlay .button').on('click', function () {
        var container = $$('body');
        if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
        myApp.showProgressbar(container, 'multi');
        setTimeout(function () {
            myApp.hideProgressbar();
        }, 3000);
    });
});

/* ===== Autocomplete ===== */
myApp.onPageInit('autocomplete', function (page) {
    // Fruits data demo array
    var fruits = ('Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple').split(' ');

    // Simple Dropdown
    var autocompleteDropdownSimple = myApp.autocomplete({
        input: '#autocomplete-dropdown',
        openIn: 'dropdown',
        source: function (autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Find matched items
            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
            }
            // Render items by passing array with result items
            render(results);
        }
    });

    // Dropdown with input expand
    var autocompleteDropdownExpand = myApp.autocomplete({
        input: '#autocomplete-dropdown-expand',
        openIn: 'dropdown',
        expandInput: true, // expand input
        source: function (autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Find matched items
            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
            }
            // Render items by passing array with result items
            render(results);
        }
    });

    // Dropdown with all values
    var autocompleteDropdownAll = myApp.autocomplete({
        input: '#autocomplete-dropdown-all',
        openIn: 'dropdown',
        source: function (autocomplete, query, render) {
            var results = [];
            // Find matched items
            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
            }
            // Render items by passing array with result items
            render(results);
        }
    });

    // Dropdown with placeholder
    var autocompleteDropdownPlaceholder = myApp.autocomplete({
        input: '#autocomplete-dropdown-placeholder',
        openIn: 'dropdown',
        dropdownPlaceholderText: 'Try to type "Apple"',
        source: function (autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Find matched items
            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
            }
            // Render items by passing array with result items
            render(results);
        }
    });

    // Dropdown with ajax data
    var autocompleteDropdownAjax = myApp.autocomplete({
        input: '#autocomplete-dropdown-ajax',
        openIn: 'dropdown',
        preloader: true, //enable preloader
        valueProperty: 'id', //object's "value" property name
        textProperty: 'name', //object's "text" property name
        limit: 20, //limit to 20 results
        dropdownPlaceholderText: 'Try "JavaScript"',
        expandInput: true, // expand input
        source: function (autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Show Preloader
            autocomplete.showPreloader();
            // Do Ajax request to Autocomplete data
            $$.ajax({
                url: 'js/autocomplete-languages.json',
                method: 'GET',
                dataType: 'json',
                //send "query" to server. Useful in case you generate response dynamically
                data: {
                    query: query
                },
                success: function (data) {
                    // Find matched items
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
                    }
                    // Hide Preoloader
                    autocomplete.hidePreloader();
                    // Render items by passing array with result items
                    render(results);
                }
            });
        }
    });

    // Simple Standalone
    var autocompleteStandaloneSimple = myApp.autocomplete({
        openIn: 'page', //open in page
        opener: $$('#autocomplete-standalone'), //link that opens autocomplete
        backOnSelect: true, //go back after we select something
        source: function (autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Find matched items
            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
            }
            // Render items by passing array with result items
            render(results);
        },
        onChange: function (autocomplete, value) {
            // Add item text value to item-after
            $$('#autocomplete-standalone').find('.item-after').text(value[0]);
            // Add item value to input value
            $$('#autocomplete-standalone').find('input').val(value[0]);
        }
    });

    // Standalone Popup
    var autocompleteStandalonePopup = myApp.autocomplete({
        openIn: 'popup', //open in page
        opener: $$('#autocomplete-standalone-popup'), //link that opens autocomplete
        backOnSelect: true, //go back after we select something
        source: function (autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Find matched items
            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
            }
            // Render items by passing array with result items
            render(results);
        },
        onChange: function (autocomplete, value) {
            // Add item text value to item-after
            $$('#autocomplete-standalone-popup').find('.item-after').text(value[0]);
            // Add item value to input value
            $$('#autocomplete-standalone-popup').find('input').val(value[0]);
        }
    });

    // Multiple Standalone
    var autocompleteStandaloneMultiple = myApp.autocomplete({
        openIn: 'page', //open in page
        opener: $$('#autocomplete-standalone-multiple'), //link that opens autocomplete
        multiple: true, //allow multiple values
        source: function (autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Find matched items
            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
            }
            // Render items by passing array with result items
            render(results);
        },
        onChange: function (autocomplete, value) {
            // Add item text value to item-after
            $$('#autocomplete-standalone-multiple').find('.item-after').text(value.join(', '));
            // Add item value to input value
            $$('#autocomplete-standalone-multiple').find('input').val(value.join(', '));
        }
    });

    // Standalone With Ajax
    var autocompleteStandaloneAjax = myApp.autocomplete({
        openIn: 'page', //open in page
        opener: $$('#autocomplete-standalone-ajax'), //link that opens autocomplete
        multiple: true, //allow multiple values
        valueProperty: 'id', //object's "value" property name
        textProperty: 'name', //object's "text" property name
        limit: 50,
        preloader: true, //enable preloader
        source: function (autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Show Preloader
            autocomplete.showPreloader();
            // Do Ajax request to Autocomplete data
            $$.ajax({
                url: 'js/autocomplete-languages.json',
                method: 'GET',
                dataType: 'json',
                //send "query" to server. Useful in case you generate response dynamically
                data: {
                    query: query
                },
                success: function (data) {
                    // Find matched items
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
                    }
                    // Hide Preoloader
                    autocomplete.hidePreloader();
                    // Render items by passing array with result items
                    render(results);
                }
            });
        },
        onChange: function (autocomplete, value) {
            var itemText = [],
                inputValue = [];
            for (var i = 0; i < value.length; i++) {
                itemText.push(value[i].name);
                inputValue.push(value[i].id);
            }
            // Add item text value to item-after
            $$('#autocomplete-standalone-ajax').find('.item-after').text(itemText.join(', '));
            // Add item value to input value
            $$('#autocomplete-standalone-ajax').find('input').val(inputValue.join(', '));
        }
    });
});

/* ===== Change statusbar bg when panel opened/closed ===== */
$$('.panel-left').on('open', function () {
    $$('.statusbar-overlay').addClass('with-panel-left');
});
$$('.panel-right').on('open', function () {
    $$('.statusbar-overlay').addClass('with-panel-right');
});
$$('.panel-left, .panel-right').on('close', function () {
    $$('.statusbar-overlay').removeClass('with-panel-left with-panel-right');
});

/* ===== Generate Content Dynamically ===== */
var dynamicPageIndex = 0;
function createContentPage() {
    mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left sliding"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-content" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or generate <a href="#" class="ks-generate-page">one more page</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
    return;
}
$$(document).on('click', '.ks-generate-page', createContentPage);


myApp.onPageInit('accordion',function (page){

    $$('.buttontab').removeClass('_active');
    $$('.cattab').addClass('_active');


    $$('.linktab').css('color','black');
    $$('.indexcate').css('color','white');


    $$('.product-index').css('bottom','-50px');
    $$('.index-index').css('bottom','0px');

    $$('.accordion-list ul').html('');

    $$.ajax({
        url: 'http://'+openUrl+'/index.php?con=api&act=index&method=gcat&source=category',
        method: 'GET',
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.accordion-list ul').append(data);
        }
    });
});

myApp.onPageInit('searchbar',function (page){

    $$('.product-index').css('bottom','-50px');
    $$('.index-index').css('bottom','0px');
    
});

//首页
myApp.onPageInit('tabs-swipeable',function (page){

    $$('.buttontab').removeClass('_active');
    $$('.hometab').addClass('_active');

    $$('.linktab').css('color','black');
    $$('.indexshouye').css('color','white');

    $$.ajax({
        url: 'http://'+openUrl+'/index.php?con=api&act=index&method=advert',
        method: 'GET',
        async:false,
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.swiper-wrapper').append(data);
        }
    });

    var swiper = new Swiper('.swiper-mason', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

    $$('.buttons-row').html('<div class="col-80"><a href="#tab1" class="button active tab-link">首页</a></div>&nbsp;<div class="col-80"><a href="#tab2" class="button tab-link">新品</a></div>&nbsp;');

      $$.ajax({
          url: 'http://'+openUrl+'/index.php?con=api&act=index&method=gcat&source=index',
          method: 'GET',
          //send "query" to server. Useful in case you generate response dynamically
          success: function (data) {
              $$('.buttons-row').append(data);
          }
      });

    $$.ajax({
        url: 'http://'+testUrl+'/index.php?con=api&act=index&method=carts&source=scount',
        method: 'GET',
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.cart-count').text(data);
        }
    });

});

//商品列表页面
myApp.onPageInit('cards',function (page){
    $$('.infinite-scroll').html('');
    
    var url = 'http://'+testUrl+'/index.php?con=api&act=index&method=goods';
    // Request some file with data
    $$.get(url, {leftIndex: 0}, function (data) {
        // Append loaded elements to list block
        $$('.infinite-scroll').append(data);
    });

    // Loading trigger
    var loading = false;
    // Last loaded index, we need to pass it to script
    var lastLoadedIndex = $$('.infinite-scroll .ks-facebook-card').length;

    // Attach 'infinite' event handler
    $$('.infinite-scroll').on('infinite', function () {
        // Exit, if loading in progress
        if (loading) return;
        // Set loading trigger
        loading = true;

        var url = 'http://'+testUrl+'/index.php?con=api&act=index&method=goods';
        // Request some file with data
        $$.get(url, {leftIndex: lastLoadedIndex + 1}, function (data) {
            loading = false;
            if (data === '') {
                // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
                myApp.detachInfiniteScroll($$('.infinite-scroll'));
            }
            else {
                // Append loaded elements to list block
                $$('.infinite-scroll').append(data);
                // Update last loaded index
                lastLoadedIndex = $$('.infinite-scroll .ks-facebook-card').length;
            }
        });
    });
});


//商品详情页面
myApp.onPageInit('swiper-loop', function (page) {
    
    
    $$('.product-detail').html('');

    $$('.product-index').css('bottom','0px');
    $$('.index-index').css('bottom','-50px');

    var id = page.query.id;
    var url = 'http://'+testUrl+'/index.php?con=api&act=index&method=products';

    $$.ajax({
            url: url+'&id='+id+'&gethtml=1',
            method: 'GET',
            async:false,
            //send "query" to server. Useful in case you generate response dynamically
            success: function (data) {
                 $$('.product-detail').html(data);
            }
        });

    // Request some file with data
    $$.ajax({
        url: url+'&id='+id,
        method: 'GET',
        dataType:'json',
        async:false,
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {

             sys_item = data.data.sys_item;

            

        }
    });

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

        $$('.spinner').each(function (){
            var increaseButton = $$('.spinner_decr').click(function () { changeValue(-1) });
            var decreaseButton = $$('.spinner_incr').click(function () { changeValue(1) });
            var spinnerText = $$('.spinner_text').change(function (){ changeValueText()});


            function changeValue(delta) {

                delta = getValue() + delta;

                if(delta > 0){
                    $$('.spinner_text').val(delta)
                }else{
                    $$('.spinner_text').val(0)
                }
                
            }
            
            function getValue() {
                return parseInt($$('.spinner_text').val() || 0, 10)
            }

            function isInvalid(value) { return isNaN(+value) || value < 0 || value == ''; }

            function changeValueText(){
                var value = $$('.spinner_text').val();

                if(!isInvalid(value)){
                    // console.info(value);
                    $$('.spinner_text').val(value)
                }else{
                    $$('.spinner_text').val(0)
                }
            }

        });

    $$(".sys_item_spec .sys_item_specpara").each(function(){
        var i=$$(this);
        var p=i.find("ul>li");
        p.click(function(){
            if(!!$$(this).hasClass("selected")){
                $$(this).removeClass("selected");
                i.removeAttr("data-attrval");
            }else{
                p.each(function(){
                    $$(this).removeClass("selected");
                });

                $$(this).addClass("selected");//.siblings("li").removeClass("selected");
                i.attr("data-attrval",$$(this).attr("data-aid"))
            }

            getattrprice(sys_item) //输出价格
        })
    })
    
    //获取对应属性的价格
    function getattrprice(item){
        var defaultstats=true;
        var _val='';
        var _resp={
            price:".sys_item_price",
            pro_no:".sys_item_pro_no",
            store_num:".sys_item_store_num"
        }  //输出对应的class
        $$(".sys_item_spec .sys_item_specpara").each(function(){
            var i=$$(this);
            var v=i.attr("data-attrval");

            if(!v){
                defaultstats=false;
            }else{
                _val+=_val!=""?"_":"";
                _val+=v;
            }
        })

        var sys_item = item;

        if(!!defaultstats){

            _price=sys_item["sys_attrprice"][_val]["price"];
            _pro_no=sys_item["sys_attrprice"][_val]["pro_no"];
            _store_num=sys_item["sys_attrprice"][_val]["store_num"];
        }else{
            _price=sys_item["price"];
            _pro_no=sys_item["pro_no"];
            _store_num=sys_item["store_num"];
        }

        //输出价格
        $$(_resp.price).text(_price);
        $$(_resp.pro_no).text(_pro_no);
        $$(_resp.store_num).text(_store_num);
    }

    $$('.add-count-click').on('click',function (e){

        var pro_num = $$('#product_num').val();

        var pro_no = $$('#pro_no_hidden').val();

        if(pro_num <=0){
            myApp.alert('请输入购买数量');
            return false;
        }

        $$.ajax({
            url: 'http://'+testUrl+'/index.php?con=api&act=index&method=carts&source=addcart&pro_num='+pro_num+'&pro_no='+pro_no,
            method: 'GET',
            dataType:'json',
            //send "query" to server. Useful in case you generate response dynamically
            success: function (data) {
                if(data.status == 'succ') {
                    $$('.cart-count').text(data.data.count);
                }

                myApp.alert(data.msg);
            }
        });
    });

});


//收货地址管理
myApp.onPageInit('addressmanage',function (page){

    $$('.addressmanage ul').html('');

    var url = 'http://'+testUrl+'/index.php?con=api&act=index&method=customer&source=address';

    var userid = window.localStorage.userid;

    if(!userid){
        mainView.router.loadPage('login.html');
        return false;
    }

    $$.ajax({
        url: url+'&id='+userid,
        method: 'GET',
        async:false,
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.addressmanage ul').html(data);
        }
    });


    $$('.addr-delete').on('click',function (e){
        $$.ajax({
            url: 'http://'+testUrl+'/index.php?con=api&act=index&method=customer&source=doaddr&_act=del&id='+$$(this).attr('aid')+'&user_id='+userid,
            method: 'GET',
            dataType:'json',
            async:false,
            //send "query" to server. Useful in case you generate response dynamically
            success: function (data) {
                myApp.alert(data.msg);
            }
        });
    });

    $$('.set-default').on('click',function (e){

        $$.ajax({
            url: 'http://'+testUrl+'/index.php?con=api&act=index&method=customer&source=doaddr&_act=setdefault&is_default=1&id='+$$(this).attr('aid')+'&user_id='+userid,
            method: 'GET',
            dataType:'json',
            async:false,
            //send "query" to server. Useful in case you generate response dynamically
            success: function (data) {
                myApp.alert(data.msg);
            }
        });
    });

    $$.ajax({
        url: 'http://'+testUrl+'/index.php?con=api&act=index&method=carts&source=scount',
        method: 'GET',
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.cart-count').text(data);
        }
    });

});

//添加收货地址
myApp.onPageInit('add-address',function (page){

    // http://zd.tinyshop.com/index.php?con=ajax&act=area_data
    
    $$('.product-index').css('bottom','-50px');
    $$('.index-index').css('bottom','0px');

    var addr_id = 0;
    var _act = 'add';

    if(page.query.id){
        addr_id = page.query.id;
        _act = 'edit';
    }
    
    $$('#addr_id').val(addr_id);
    $$('#_act').val(_act);

    $$.ajax({
        url: 'http://'+testUrl+'/index.php?con=api&act=index&method=customer&source=addaddr&id='+page.query.id,
        method: 'GET',
        dataType:'json',
        async:false,
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            // alert(data);
            var formData = data.data;
            $$('#province').attr('province',formData.province);
            $$('#city').attr('city',formData.city);
            $$('#county').attr('county',formData.county);
            $$('#test').attr('value',formData.province+','+formData.city+','+formData.county);
            myApp.formFromJSON('#my-address', formData);
        }
    });


    // 无限级连动插件
    function Linkage(o){
        // o = $$.extend({url:'',selects:['#province','#city','#county'],initRunCallBack:false,selected:['0','0','0']}, o || {});
        var url = o.url;
        var arrNodeChild = new Array();
        var arrSelect = o.selected;
        var options = new Array();
        $$.each(arrSelect,function(i){
            options[i] = '';
        });
        var len = o.selects.length;
        for(var i=0;i<len;i++) arrNodeChild[i] = new Array();
        
        $$.ajax({
            url: o.url,
            method: 'POST',
            dataType: 'json',
            async:false,
            //send "query" to server. Useful in case you generate response dynamically
            success: function (data) {
                $$.each(data, function(i, n){
                    var c_id = i.substr(2);
                    var selected = (c_id == arrSelect[0]) ? 'selected="selected"' : '';
                    options[0] += '<option value="' + c_id + '" ' + selected + '>' + n.t + '</option>';

                    n.id = c_id;
                    if(n.c !== null){
                        arrNodeChild[0][i] = n.c;
                        parse(n,0);
                    }
                });

                
                $$.each(o.selects,function(i,em){
                    $$(em).html('');
                    $$(em).append(options[i]);
                });
                if(o.initRunCallBack)callback();
            }
        });

        //解析每一层元素
        function parse(data,num){
            if(data.c !==undefined && data.c !== null) {
                $$.each(data.c, function(i, n) {
                    var c_id = i.substr(2);
                    if(data.id == arrSelect[num]) {
                        var selected = (c_id == arrSelect[num+1]) ? 'selected="selected"' : '';
                        options[num+1] += '<option value="' + c_id + '" ' + selected + '>' + n.t + '</option>';
                    }
                    n.id = c_id;
                    arrNodeChild[num+1][i] = n.c;
                    if(n.c !== null) parse(n,num+1);
                });
            }
        }
        //回调处理
        function callback()
        {
            if(typeof(o.callback) == 'function'){
                var selected =new Array(); value =new Array(); text = new Array();
                $$.each(o.selects,function(i,em){
                    value[i] = $$(em).val();
                    text[i] = $$('option:selected',$$(em)).text();
                });
                selected[0] = value;
                selected[1] = text;
                o.callback(selected);
            }
        }
        //逐级绑定连动事件
        var len = o.selects.length;
        $$.each(o.selects,function(i,em){
            $$(em).change(function(){
                var val = 'o_'+$$(this).val();
                if(arrNodeChild[i][val] !== null && i<len-1) {

                    for(var j=i+1 ; j<len ;j++){

                        var option = $$(o.selects[j]).children();

                        if(option.val()==0){
                            $$(o.selects[j]).html('');
                            $$(o.selects[j]).append(option);
                        }else{
                            $$(o.selects[j]).html('');
                            $$(o.selects[j]).append("<option value='0'>请选择</option>");
                        } 
                    }
                    if(val != 0){
                        var select = '';
                        if(arrNodeChild[i][val]!==undefined){
                            $$.each(arrNodeChild[i][val], function(k, n) {
                            var c_id = k.substr(2);

                            select += '<option value="' + c_id + '">' + n.t + '</option>';
                        });
                        $$(o.selects[i+1]).html('');
                        $$(o.selects[i+1]).append(select);
                        }

                    }
                }
                callback();
            });
        });
    }

    var province = $$('#province').attr('province');
    var city = $$('#city').attr('city');
    var county = $$('#county').attr('county');


    var o = { url:"http://"+testUrl+"/index.php?con=api&act=index&method=arealist",selected:[province,city,county],selects:['#province','#city','#county'],initRunCallBack:true,callback:function(data){
        var text = new Array();
        var value = new Array();
        for(i in data[0]){
          if(data[0][i]!=0){
            text.push(data[1][i]);
            value.push(data[0][i]);
          }
        }
        $$("#test").val(value.join(','));
        FireEvent(document.getElementById("test"),"change");
    }};

    Linkage(o);

});


//个人资料
myApp.onPageInit('user-info-edit', function (page){

    $$('.buttontab').removeClass('_active');
    $$('.usertab').addClass('_active');

    $$('.linktab').css('color','black');
    $$('.indexucenter').css('color','white');

    var userid = window.localStorage.userid;

    if(!userid){
        mainView.router.loadPage('login.html');
        return false;
    }

    $$('#user_id').val(userid);

    $$.ajax({
        url: 'http://'+testUrl+'/index.php?con=api&act=index&method=customer&source=uinfo&id='+userid,
        method: 'GET',
        dataType:'json',
        async:false,
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            // alert(data);
            var formData = data.data;
            $$('#province').attr('province',formData.province);
            $$('#city').attr('city',formData.city);
            $$('#county').attr('county',formData.county);
            $$('#test').attr('value',formData.province+','+formData.city+','+formData.county);
            myApp.formFromJSON('#my-form', formData);
        }
    });
  //   var formData = {
  //   'name': 'John',
  //   'email': 'john@doe.com',
  //   'sex': 'female',
  //   'real_name': 'mason',
  //   'birthday': '1987-04-10',
  //   'real_name': 'mason',
  //   'mobile': '121321212',
  //   'phone': '23424234324',
  //   'addr': 'mason addr',
  //   }

  // myApp.formFromJSON('#my-form', formData);

// 无限级连动插件
    function Linkage(o){
        // o = $$.extend({url:'',selects:['#province','#city','#county'],initRunCallBack:false,selected:['0','0','0']}, o || {});
        var url = o.url;
        var arrNodeChild = new Array();
        var arrSelect = o.selected;
        var options = new Array();
        $$.each(arrSelect,function(i){
            options[i] = '';
        });
        var len = o.selects.length;
        for(var i=0;i<len;i++) arrNodeChild[i] = new Array();
        
        $$.ajax({
            url: o.url,
            method: 'POST',
            dataType: 'json',
            //send "query" to server. Useful in case you generate response dynamically
            success: function (data) {
                $$.each(data, function(i, n){
                    var c_id = i.substr(2);
                    var selected = (c_id == arrSelect[0]) ? 'selected="selected"' : '';
                    options[0] += '<option value="' + c_id + '" ' + selected + '>' + n.t + '</option>';

                    n.id = c_id;
                    if(n.c !== null){
                        arrNodeChild[0][i] = n.c;
                        parse(n,0);
                    }
                });

                
                $$.each(o.selects,function(i,em){
                    $$(em).html('');
                    $$(em).append(options[i]);
                });
                if(o.initRunCallBack)callback();
            }
        });

        //解析每一层元素
        function parse(data,num){
            if(data.c !==undefined && data.c !== null) {
                $$.each(data.c, function(i, n) {
                    var c_id = i.substr(2);
                    if(data.id == arrSelect[num]) {
                        var selected = (c_id == arrSelect[num+1]) ? 'selected="selected"' : '';
                        options[num+1] += '<option value="' + c_id + '" ' + selected + '>' + n.t + '</option>';
                    }
                    n.id = c_id;
                    arrNodeChild[num+1][i] = n.c;
                    if(n.c !== null) parse(n,num+1);
                });
            }
        }
        //回调处理
        function callback()
        {
            if(typeof(o.callback) == 'function'){
                var selected =new Array(); value =new Array(); text = new Array();
                $$.each(o.selects,function(i,em){
                    value[i] = $$(em).val();
                    text[i] = $$('option:selected',$$(em)).text();
                });
                selected[0] = value;
                selected[1] = text;
                o.callback(selected);
            }
        }
        //逐级绑定连动事件
        var len = o.selects.length;
        $$.each(o.selects,function(i,em){
            $$(em).change(function(){
                var val = 'o_'+$$(this).val();
                if(arrNodeChild[i][val] !== null && i<len-1) {

                    for(var j=i+1 ; j<len ;j++){

                        var option = $$(o.selects[j]).children();

                        if(option.val()==0){
                            $$(o.selects[j]).html('');
                            $$(o.selects[j]).append(option);
                        }else{
                            $$(o.selects[j]).html('');
                            $$(o.selects[j]).append("<option value='0'>请选择</option>");
                        } 
                    }
                    if(val != 0){
                        var select = '';
                        if(arrNodeChild[i][val]!==undefined){
                            $$.each(arrNodeChild[i][val], function(k, n) {
                            var c_id = k.substr(2);

                            select += '<option value="' + c_id + '">' + n.t + '</option>';
                        });
                        $$(o.selects[i+1]).html('');
                        $$(o.selects[i+1]).append(select);
                        }

                    }
                }
                callback();
            });
        });
    }

    var province = $$('#province').attr('province');
    var city = $$('#city').attr('city');
    var county = $$('#county').attr('county');

    var o = { url:"http://"+testUrl+"/index.php?con=api&act=index&method=arealist",selected:[province,city,county],selects:['#province','#city','#county'],initRunCallBack:true,callback:function(data){
        var text = new Array();
        var value = new Array();
        for(i in data[0]){
          if(data[0][i]!=0){
            text.push(data[1][i]);
            value.push(data[0][i]);
          }
        }
        $$("#test").val(value.join(','));
        FireEvent(document.getElementById("test"),"change");
    }};

    Linkage(o);

    var actionSheetButtons = [
        // First buttons group
        [
            // Group Label
            {
                text: '选择图片',
                label: true
            },
            // First button
            {
                text: '拍照',
                onClick: function () {
                    capturePhoto();
                }
            },
            // Another red button
            {
                text: '从相册中找',
                color: 'red',
                onClick: function () {
                    getPhoto();
                }
            },
        ],
        // Second group
        [
            {
                text: '取消',
                bold: true
            }
        ]
    ];

    $$('.choose-image').on('click', function (e) {
        myApp.actions(actionSheetButtons);
    });

    function capturePhoto(){
        navigator.camera.getPicture(onSuccess,onFail,{
                                    quality:100,
                                    targetWidth:250,
                                    targetHeight:250
                                    });
    }
    
    function onSuccess(imageURI){
        $$('#image-head').attr('src',imageURI);
    }
    
    function onFail(message){
        myApp.alert(message);
    }
    
    function getPhoto(){
        navigator.camera.getPicture(onSuccess,onFail,{
                                    quality:100,
                                    destinationType: Camera.DestinationType.FILE_URI,
                                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                                    targetWidth:250,
                                    targetHeight:250
                                    });
    }

    //sex
    var pickeSex = myApp.picker({
        input: '#ks-picker-sex',
        toolbarTemplate:
            '<div class="toolbar">' +
                '<div class="toolbar-inner">' +
                '<div class="left">' +
                '&nbsp;' +
                '</div>' +
                '<div class="right">' +
                '<a href="#" class="link close-picker">确定</a>' +
                '</div>' +
                '</div>' +
                '</div>',
        cols: [
            {
                textAlign: 'center',
                values: ['男', '女']
            }
        ]
    });
    
    //生日选择
    var pickerBirthdayToolbar = myApp.picker({
        input: '#ks-picker-birthday',
        rotateEffect: true,
        toolbarTemplate:
            '<div class="toolbar">' +
                '<div class="toolbar-inner">' +
                '<div class="left">' +
                '&nbsp;' +
                '</div>' +
                '<div class="right">' +
                '<a href="#" class="link close-picker">确定</a>' +
                '</div>' +
                '</div>' +
                '</div>',
        //value: [today.getMonth(), today.getDate(), today.getFullYear()],
        onChange: function (picker, values, displayValues) {
            var daysInMonth = new Date(picker.value[2], picker.value[0]*1 + 1, 0).getDate();
            if (values[1] > daysInMonth) {
                picker.cols[1].setValue(daysInMonth);
            }
        },
        cols: [
            // Years
            {
                values: (function () {
                    var arr = [];
                    for (var i = 1950; i <= 2030; i++) { arr.push(i); }
                    return arr;
                })(),
            },
            // Months
            {
                values: ('1 2 3 4 5 6 7 8 9 10 11 12').split(' '),
                displayValues: ('1 2 3 4 5 6 7 8 9 10 11 12').split(' '),
                textAlign: 'left'
            },
            // Days
            {
                values: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
            },

            // Space divider
            {
                divider: true,
                content: '&nbsp;&nbsp;'
            },
        ],
        formatValue: function (p, values, displayValues) {
            return displayValues[0] + '-' + values[1]  + '-' + values[2];
        },
    });


});


//登录
myApp.onPageInit('login-index', function (page){

});

//我的订单
myApp.onPageBeforeInit('myorder-index', function (page){

    $$('.buttontab').removeClass('_active');
    $$('.usertab').addClass('_active');

    $$('.linktab').css('color','black');
    $$('.indexucenter').css('color','white');

    $$('.myorderlists').html('');

    var userid = window.localStorage.userid;

    if(!userid){
        mainView.router.loadPage('login.html');
        return false;
    }

    var url = 'http://'+testUrl+'/index.php?con=api&act=index&method=customer&id='+userid;

    //全部订单
    $$.ajax({
        url: url+'&source=morders&type=all',
        method: 'GET',
        async:false,
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.myorderlists').html(data);
        }
    });

    $$.ajax({
        url: 'http://'+testUrl+'/index.php?con=api&act=index&method=carts&source=scount',
        method: 'GET',
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.cart-count').text(data);
        }
    });

    //待支付订单

    $$.ajax({
        url: url+'&source=morders&type=waitpay',
        method: 'GET',
        async:false,
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.waitpayorderlists').html(data);
        }
    });


    //待发货订单
    $$.ajax({
        url: url+'&source=morders&type=delivery',
        method: 'GET',
        async:false,
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.waitdeliveryorderlist').html(data);
        }
    });


    //已完成订单
    $$.ajax({
        url: url+'&source=morders&type=finish',
        method: 'GET',
        async:false,
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.finishorderlist').html(data);
        }
    });


});


//订单详情

myApp.onPageInit('orderdetail-index', function (page){

    $$('.buttontab').removeClass('_active');
    $$('.usertab').addClass('_active');

    $$('.linktab').css('color','black');
    $$('.indexucenter').css('color','white');

    $$('.product-index').css('bottom','-50px');
    $$('.index-index').css('bottom','0px');

    $$('.orderdetail').html('');

    var id = page.query.id;

    $$.ajax({
        url: 'http://'+testUrl+'/index.php?con=api&act=index&method=orders&source=orderdetail&id='+id,
        method: 'GET',
        async:false,
        dataType:'json',
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.pop-show-title').html('订单日志');
            $$('.popup-show').html(data.data.orderlog);
            $$('.orderdetail').html(data.data.detail);
        }
    });

    $$.ajax({
        url: 'http://'+testUrl+'/index.php?con=api&act=index&method=carts&source=scount',
        method: 'GET',
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.cart-count').text(data);
        }
    });

    var actionSheetButtons = [
        // First buttons group
        [
            // Group Label
            {
                text: '请选择取消订单的理由',
                label: true
            },
            // First button
            {
                text: '重复下单',
                onClick: function () {
                    myApp.alert('He Hoou!');
                }
            },
            // Another red button
            {
                text: '买错了,重复买',
                onClick: function () {
                    myApp.alert('You have clicked red button!');
                }
            },
            {
                text: '付款出现问题',
                onClick: function () {
                    myApp.alert('You have clicked red button!');
                }
            },
        ],
        // Second group
        [
            {
                text: '我再想想',
                color: 'red',
                bold: true
            }
        ]
    ];
    $$('.demo-actions').on('click', function (e) {
        myApp.actions(actionSheetButtons);
    });
    $$('.demo-actions-popover').on('click', function (e) {
        // We need to pass additional target parameter (this) for popover
        myApp.actions(this, actionSheetButtons);
    });

    $$('.dopay').on('click',function (e) {
        cordova.InAppBrowser.open($$(this).attr('payurl'), '_blank', 'location=no');
    });
});

//购物车
myApp.onPageInit('cart-index', function (page){

    $$('.buttontab').removeClass('_active');
    $$('.carttab').addClass('_active');

    $$('.linktab').css('color','black');
    $$('.indexcart').css('color','white');

    $$('.product-index').css('bottom','-50px');
    $$('.index-index').css('bottom','0px');

    $$('.cartdetail ul').html('');

    $$.ajax({
        url: 'http://'+testUrl+'/index.php?con=api&act=index&method=carts&source=cindex',
        method: 'GET',
        async:false,
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.cartdetail').html(data);
        }
    });


    $$.ajax({
        url: 'http://'+testUrl+'/index.php?con=api&act=index&method=carts&source=scount',
        method: 'GET',
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.cart-count').text(data);
        }
    });

    $$('.demo-remove-callback').on('deleted', function () {
        myApp.alert('Thanks, item removed!');
    });

    $$('.spinner').each(function (){
            var increaseButton = $$('.spinner_decr').click(function () { changeValue(-1) });
            var decreaseButton = $$('.spinner_incr').click(function () { changeValue(1) });
            var spinnerText = $$('.spinner_text').change(function (){ changeValueText()});


            function changeValue(delta) {

                delta = getValue() + delta;

                if(delta > 0){
                    $$('.spinner_text').val(delta)
                }else{
                    $$('.spinner_text').val(0)
                }
                
            }
            
            function getValue() {
                return parseInt($$('.spinner_text').val() || 0, 10)
            }

            function isInvalid(value) { return isNaN(+value) || value < 0 || value == ''; }

            function changeValueText(){
                var value = $$('.spinner_text').val();

                if(!isInvalid(value)){
                    // console.info(value);
                    $$('.spinner_text').val(value)
                }else{
                    $$('.spinner_text').val(0)
                }
            }

        });

});

//个人中心
myApp.onPageInit('list-view', function (page){

    $$('.buttontab').removeClass('_active');
    $$('.usertab').addClass('_active');

    $$('.linktab').css('color','black');
    $$('.indexucenter').css('color','white');
    
    $$.ajax({
        url: 'http://'+testUrl+'/index.php?con=api&act=index&method=carts&source=scount',
        method: 'GET',
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.cart-count').text(data);
        }
    });

});

myApp.onPageInit('change-pwd', function (page) {
    $$('.product-index').css('bottom','-50px');
    $$('.index-index').css('bottom','0px');

    $$('.buttontab').removeClass('_active');
    $$('.usertab').addClass('_active');

    $$('.linktab').css('color','black');
    $$('.indexucenter').css('color','white');

    $$.ajax({
        url: 'http://'+testUrl+'/index.php?con=api&act=index&method=carts&source=scount',
        method: 'GET',
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.cart-count').text(data);
        }
    });

    var userid = window.localStorage.userid;

    if(!userid){
        alert(mainView.router);
        mainView.router.loadPage('login.html');
        return false;
    }

    $$('#user_id').val(userid);


});

//客户服务
myApp.onPageInit('about', function (page){
    $$('.buttontab').removeClass('_active');
    $$('.usertab').addClass('_active');

    $$('.linktab').css('color','black');
    $$('.indexucenter').css('color','white');


    $$('.cservcie').html('<p>正在加载...</p>');

    $$.ajax({
        url: 'http://'+testUrl+'/index.php?con=api&act=index&method=cservice',
        method: 'GET',
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.cservcie').html(data);
        }
    });

    $$.ajax({
        url: 'http://'+testUrl+'/index.php?con=api&act=index&method=carts&source=scount',
        method: 'GET',
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.cart-count').text(data);
        }
    });
    
});

//结算
myApp.onPageInit('checkout-index', function (page){

    $$('.checkout').html('');

    var userid = window.localStorage.userid;

    $$.ajax({
        url: 'http://'+testUrl+'/index.php?con=api&act=index&method=carts&source=checkout&userid='+userid,
        method: 'GET',
        async:false,
        //send "query" to server. Useful in case you generate response dynamically
        success: function (data) {
            $$('.checkout').html(data);
        }
    });
    

    $$('.add-chekcout-click').on('click',function (e) {

        e.preventDefault();

        var user_remark = '';

        var data = {address_id:$$('#address_id').val(),payment_id:$$('#payment_id').val(),userid:userid};
        // alert(data);
        var url = 'http://'+testUrl+'/index.php?con=api&act=index&method=carts&source=docheckout&userid='+userid;
        
        myApp.alert('正在提交订单...');

        $$('.add-chekcout-click').attr('disabled','disabled');

        $$.ajax({
            url: url,
            method: 'POST',
             async:false,
            data: data,
            dataType:'json',
            //send "query" to server. Useful in case you generate response dynamically
            success: function (data) {
                if(data.status == 'succ'){
                    myApp.alert(data.msg);
                    mainView.router.loadPage('orderdetail.html?id='+data.data.orderid);
                }else{
                    myApp.alert('订单创建失败,请稍后再试');
                    mainView.router.loadPage('cart.html');
                }
                
            }
        });
    });

});

