(function($){


$.fn.dcMegaMenu = function(options){

var defaults = {
classParent: 'dc-mega',
rowItems: 3,
speed: 'fast',
effect: 'fade'
};


var options = $.extend(defaults, options);
var $dcMegaMenuObj = this;


return $dcMegaMenuObj.each(function(options){

megaSetup();

function megaOver(){
var subNav = $('.sub',this);
$(this).addClass('mega-hover');
if(defaults.effect == 'fade'){
$(subNav).fadeIn(defaults.speed);
}
if(defaults.effect == 'slide'){
$(subNav).slideDown(defaults.speed);
}
}

function megaOut(){
var subNav = $('.sub',this);
$(this).removeClass('mega-hover');
$(subNav).hide();
}

function megaSetup(){
$arrow = '<span class="dc-mega-icon"></span>';
var classParentLi = defaults.classParent+'-li';
var menuWidth = $($dcMegaMenuObj).outerWidth(true);
$('> li',$dcMegaMenuObj).each(function(){

var mainSub = $('> ul',this);
var primaryLink = $('> a',this);
if($(mainSub).length > 0){
$(primaryLink).addClass(defaults.classParent).append($arrow);
$(mainSub).addClass('sub').wrap('<div class="sub-container" />');


var position = $(this).position();
parentLeft = position.left;

if($('ul',mainSub).length > 0){
$(this).addClass(classParentLi);
$('.sub-container',this).addClass('mega');
$('> li',mainSub).addClass('mega-hdr');
$('.mega-hdr > a').addClass('mega-hdr-a');

var hdrs = $('.mega-hdr',this);
rowSize = parseInt(defaults.rowItems);
for(var i = 0; i < hdrs.length; i+=rowSize){
hdrs.slice(i, i+rowSize).wrapAll('<div class="row" />');
}


$(mainSub).show();


var parentWidth = $(this).width();


var subWidth = $(mainSub).outerWidth(true);
var totalWidth = $(mainSub).parent('.sub-container').outerWidth(true);
var containerPad = totalWidth - subWidth;
var itemWidth = $('.mega-hdr',mainSub).outerWidth(true);
var rowItems = $('.row:eq(0) .mega-hdr',mainSub).length;
var innerItemWidth = itemWidth * rowItems;
var totalItemWidth = innerItemWidth + containerPad;


$('.row',this).each(function(){
$('.mega-hdr:last',this).addClass('last');
var maxValue = undefined;
$('.mega-hdr-a',this).each(function(){
var val = parseInt($(this).height());
if (maxValue === undefined || maxValue < val){
maxValue = val;
}
});
$('.mega-hdr-a',this).css('height',maxValue+'px');
$(this).css('width',innerItemWidth+'px');
});


var marginLeft = (totalItemWidth - parentWidth)/2;
var subLeft = parentLeft - marginLeft;


if(subLeft < 0){
$('.sub-container',this).css('left','0');
} else {
$('.sub-container',this).css('left',parentLeft+'px').css('margin-left',-marginLeft+'px');
}


$('.row',mainSub).each(function(){
var rowHeight = $(this).height();
$('.mega-hdr',this).css('height',rowHeight+'px');
$(this).parent('.row').css('height',rowHeight+'px');
});
$(mainSub).hide();

} else {
$('.sub-container',this).addClass('non-mega').css('left',parentLeft+'px');
}
}
});

var menuHeight = $('> li > a',$dcMegaMenuObj).outerHeight(true);
$('.sub-container',$dcMegaMenuObj).css({top: menuHeight+'px'}).css('z-index','1000');

var config = {
sensitivity: 2, 
interval: 100, 
over: megaOver, 
timeout: 400, 
out: megaOut 
};
$('li',$dcMegaMenuObj).hoverIntent(config);
}
});
};
})(jQuery);