//var temp='37.1';
var openTime=1;
var item=0;
var data = [
	{
		num: '37.1',
		num1:'设备已离线',
		handle: '@崔玺萌',
		info: '截至上次测量宝宝温度正常'
	},
	{
		num: '37.1',
		num1:'设备已离线',
		handle: '@杨嵘',
		info: '截至上次测量宝宝温度正常'
	},
	{
		num: 12,
		handle: '@aaronrogers',
		info: 'This is some info about the player and sports.'
	},
	{
		num: 7,
		handle: '@benroethlisberger',
		info: 'This is some info about the player and sports.'
	},
	{
		num: 9,
		handle: '@drewbrees',
		info: 'This is some info about the player and sports.'
	},
	{
		num: 18,
		handle: '@peytonmanning',
		info: 'This is some info about the player and sports.'
	}
];


var Cards = (function() {
	
	var view 	= $('.view');
	var vw 		= view.innerWidth();
	var vh	 	= view.innerHeight();
	var vo 		= view.offset();
	var card 	= $('.card__item');
	var cardfull = $('.card__full');
	var cardfulltop = cardfull.find('.card__full-top');
	var arrow = cardfulltop.find('svg');
	var cardnum = cardfulltop.find('.card__full-num');
	var cardnum1 = cardfulltop.find('.card__full-num1');
	var cardhandle = cardfull.find('.card__full-handle');
	var cardinfo = cardfull.find('.card__full-info');
	var w 		= $(window);
	
	// var data = [
	// 	{
	// 		num: '37.1 ℃',
	// 		handle: '@崔玺萌',
	// 		info: 'This is some info about the player and sports.'
	// 	},
	// 	{
	// 		num: '38.0 ℃',
	// 		handle: '@杨嵘',
	// 		info: 'This is some info about the player and sports.'
	// 	},
	// 	{
	// 		num: 12,
	// 		handle: '@aaronrogers',
	// 		info: 'This is some info about the player and sports.'
	// 	},
	// 	{
	// 		num: 7,
	// 		handle: '@benroethlisberger',
	// 		info: 'This is some info about the player and sports.'
	// 	},
	// 	{
	// 		num: 9,
	// 		handle: '@drewbrees',
	// 		info: 'This is some info about the player and sports.'
	// 	},
	// 	{
	// 		num: 18,
	// 		handle: '@peytonmanning',
	// 		info: 'This is some info about the player and sports.'
	// 	}
	// ];
	
	var moveCard = function() {
		var self = $(this);
		var selfIndex = self.index();
		var selfO = self.offset();
		var ty = w.innerHeight()/2 - selfO.top -4;
		
		var color = self.css('border-top-color');
		cardfulltop.css('background-color', color);
		cardhandle.css('color', color);
		
		updateData(selfIndex);
		
		self.css({
			'transform': 'translateY(' + ty + 'px)'
		});
				
		self.on('transitionend', function() {
			cardfull.addClass('active');
			self.off('transitionend');
		});
		
		return false;
	};
	
	var closeCard = function() {
		cardfull.removeClass('active');
		cardnum.hide();
		cardinfo.hide();
		cardhandle.hide();
		cardfull.on('transitionend', function() {
			card.removeAttr('style');
			cardnum.show();
			cardinfo.show();
			cardhandle.show();
			cardfull.off('transitionend');
		});
	};
	
	var updateData = function(index) {
		if(index==0){
			item=0;
		}else if(index==1){
			item=1;
		}
		var temp="历史温度值: "+data[index].num+" ℃";
		cardnum.text(temp);
		cardnum1.text(data[index].num1);
		cardhandle.text(data[index].handle);
		cardinfo.text(data[index].info);
	};
	
	var bindActions = function() {
		card.on('click', moveCard);
		arrow.on('click', closeCard);
	};
	
	var init = function() {
		bindActions();
	};
	
	return {
		init: init
	};
	
}());

Cards.init();