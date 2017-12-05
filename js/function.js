// функция гамбургер меню

// @var
var hamburgerClass = 'hamburger';
var hamburgerClassActive = 'is-active';
var menu = '.slider-main-text-bottom ul';
var toggleMenu = 'left';

var hamburgerObj = jQuery( '.' + hamburgerClass );
var menuObj = jQuery( menu );

// активация гамбургера
function activeHamburger() {
    hamburgerObj.addClass( hamburgerClassActive );
    hamburgerObj.css( 'zIndex', '999999').css('position', 'fixed');
    hoverDocument();
}

// деактивация гамбургера
function notActiveHamburger() {
    hamburgerObj.removeClass( hamburgerClassActive );
    hoverDocument('drop');
}

function getToggleMenu() {
    if ( typeof toggleMenu !== "undefined" ) {
        if ( toggleMenu === 'left' ) {
            menuObj.toggle( 'slide' );
            menuObj.css( 'zIndex', '999999').css('position', 'fixed');
        }
    } else {
        menuObj.slideToggle();
    }
}

function hoverDocument( type ) {
    var hover = '<div class="hover-document-menu" style="width: 100%; height: 100vh; background-color: #000000; opacity: 0.7;position: fixed; top: 0; left: 0; z-index: 999997"></div>';
    if ( typeof type !== "undefined" ) {
        if ( type === 'create' ) {
            jQuery( 'body' ).prepend( hover );
        }
        if ( type === 'drop' ) {
            jQuery( ".hover-document-menu" ).remove();
        }
    } else {
        jQuery('body').prepend( hover );
    }
}

// клик по гамбургеру
jQuery( document ).on( 'click', '.' + hamburgerClass, function () {
    hamburgerObj.hasClass( hamburgerClassActive ) ? notActiveHamburger() : activeHamburger();
    getToggleMenu();

});

//qwerty