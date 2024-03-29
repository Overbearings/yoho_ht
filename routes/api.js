var express = require('express');
var router = express.Router();

/* GET home page. */
// 轮播图
router.get('/banner', function (req, res, next) {
	var arr = [
		'http://img10.static.yhbimg.com/yhb-img01/2019/07/01/10/011ad0cd847250f8e39c4fa20e51bed5ae.jpg?imageView2/2/w/640/h/240/q/60',
		'http://img11.static.yhbimg.com/yhb-img01/2019/06/27/16/01b191a3ec55edf9cec55438e0c57f3558.jpg?imageView2/2/w/640/h/240/q/60',
		'http://img10.static.yhbimg.com/yhb-img01/2019/06/27/16/01a1e0b8f8640ab05c157e1401fd2aa942.jpg?imageView2/2/w/640/h/240/q/60'
	]
	res.send(arr)
});

// 分类列表接口
router.get('/category', function (req, res, next) {
	var arr = [{
			imgurl: 'http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/010a6210ab22aea2ab304727a02a0b86c1.png?imageView2/2/w/98/h/98/q/60',
			href: '/hotselling',
			cpm: '新品到着'
		},
		{
			imgurl: 'http://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/01c07611bfd87c167b614e76fd4e648d1a.png?imageView2/2/w/98/h/98/q/60',
			href: '/hotselling',
			cpm: '品牌一览'
		},
		{
			imgurl: 'http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/0136b1097e58f1da29b8aa5e11014530d6.png?imageView2/2/w/98/h/98/q/60',
			href: '/hotselling',
			cpm: '玩具娱乐'
		},
		{
			imgurl: 'http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01a59222ccd78f99235ceb010e473c40e5.png?imageView2/2/w/98/h/98/q/60',
			href: '/sort',
			cpm: '全部分类'
		},
		{
			imgurl: 'http://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/017a3e5b1c186344dafa450ca016316be0.png?imageView2/2/w/98/h/98/q/60',
			href: '/hotselling',
			cpm: '中小童'
		},
		{
			imgurl: 'http://img10.static.yhbimg.com/yhb-img01/2017/03/01/12/0185ee3b9ba7a02d99a9e82834448ba677.png?imageView2/2/w/98/h/98/q/60',
			href: '/coupon',
			cpm: '领券中心'
		},
		{
			imgurl: 'http://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/0137b842d791e17b2f432ec6566afe109f.png?imageView2/2/w/98/h/98/q/60',
			href: '/hotselling',
			cpm: '装酷必备'
		},
		{
			imgurl: 'http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01d3b9f604a085e0c9c9c16a76bc1f882f.png?imageView2/2/w/98/h/98/q/60',
			href: '/hotselling',
			cpm: '折扣专区'
		}
	]
	res.send(arr)
});


//  热门分类
router.get('/brandList', function (req, res, next) {
	var arr = [

		{
			imgurl: "http://img11.static.yhbimg.com/yhb-img01/2019/06/04/17/01566a613461f43235adfecc88fcb7660e.jpg?imageView2/2/w/140/h/140/q/60",
			href: '/tx'
		},
		{
			imgurl: "http://img11.static.yhbimg.com/yhb-img01/2019/06/04/17/01284d201b8110de82cd6a138fa37cd507.jpg?imageView2/2/w/140/h/140/q/60",
			href: '/tx'
		},
		{
			imgurl: "http://img11.static.yhbimg.com/yhb-img01/2019/06/04/17/01b9fff0f60d45d0a1d0a126ba5a828954.jpg?imageView2/2/w/140/h/140/q/60",
			href: '/tx'
		},
		{
			imgurl: "http://img11.static.yhbimg.com/yhb-img01/2019/06/04/17/01abe4ea9d359b64be29e8a47f51333fdd.jpg?imageView2/2/w/140/h/140/q/60",
			href: '/tx'
		},
		{
			imgurl: "http://img10.static.yhbimg.com/yhb-img01/2019/06/04/17/015eefeff818102f6a685cba1dac4a836a.jpg?imageView2/2/w/140/h/140/q/60",
			href: '/tx'
		},
		{
			imgurl: "http://img11.static.yhbimg.com/yhb-img01/2019/06/04/17/01992e5f63d20e0df82110189de5c6769e.jpg?imageView2/2/w/140/h/140/q/60",
			href: '/tx'
		},
		{
			imgurl: "http://img11.static.yhbimg.com/yhb-img01/2019/06/04/17/019dec02a4dc2eb684c6ea4a3d99249848.jpg?imageView2/2/w/140/h/140/q/60",
			href: '/tx'
		},
		{
			imgurl: "http://img11.static.yhbimg.com/yhb-img01/2019/06/04/17/01bf2a89f7f423805ac34ceab6fa66066c.jpg?imageView2/2/w/140/h/140/q/60",
			href: '/tx'
		},
		{
			imgurl: "http://img10.static.yhbimg.com/yhb-img01/2019/06/04/17/01d692f46c44307035c20b399fe9676af9.jpg?imageView2/2/w/140/h/140/q/60",
			href: '/tx'
		},
		{
			imgurl: "http://img10.static.yhbimg.com/yhb-img01/2019/06/04/17/0186f88c61d3e590eb5ceb8ff158e8eb03.jpg?imageView2/2/w/140/h/140/q/60",
			href: '/tx'
		},
		{
			imgurl: "http://img10.static.yhbimg.com/yhb-img01/2019/06/04/17/01d1de9b5d672bcd34904606de30a94d92.jpg?imageView2/2/w/140/h/140/q/60",
			href: '/tx'
		},
		{
			imgurl: "http://img11.static.yhbimg.com/yhb-img01/2019/06/04/17/013aee3828e0e20cd14ae9d9f8f8bfce2c.jpg?imageView2/2/w/140/h/140/q/60",
			href: '/tx'
		}
	]


	res.send(arr)
});
// 热门品牌
router.get('/hotBanner', function (req, res, next) {
	var arr = [{
			imgurl: "http://img10.static.yhbimg.com/yhb-img01/2019/05/08/11/0163cced81d378372b2774c2d3208d3f2d.jpg?imageView2/2/w/158/h/174/q/60",
			href: '/mine'
		},
		{
			imgurl: "http://img10.static.yhbimg.com/yhb-img01/2019/05/08/11/01917e5c217a79855a428c6a0b06382a6a.jpg?imageView2/2/w/158/h/174/q/60",
			href: ''
		},
		{
			imgurl: "http://img11.static.yhbimg.com/yhb-img01/2019/03/13/14/01f6dd73fb985dd92d9d3d7d6f1aa50d34.jpg?imageView2/2/w/158/h/174/q/60",
			href: ''
		},
		{
			imgurl: "http://img10.static.yhbimg.com/yhb-img01/2019/03/13/14/0112b22667adf2ed2dd3779aacdaa5daae.jpg?imageView2/2/w/158/h/174/q/60",
			href: ''
		},
		{
			imgurl: "http://img10.static.yhbimg.com/yhb-img01/2019/06/04/17/01d9019cf05ae76617640b564d8f89cfb4.jpg?imageView2/2/w/158/h/174/q/60",
			href: ''
		},
		{
			imgurl: "http://img11.static.yhbimg.com/yhb-img01/2019/05/08/11/017016fda0727134349d232b89cb8305a4.jpg?imageView2/2/w/158/h/174/q/60",
			href: ''
		},
		{
			imgurl: "http://img10.static.yhbimg.com/yhb-img01/2017/11/22/13/01029e508c50a40b0314db1f9de02769d0.jpg?imageView2/2/w/320/h/172/q/60",
			href: ''
		}
	]

	res.send(arr)
});

//滑动接口
router.get('/huadong', function (req, res, next) {
	var arr = [{
			img: '//img13.static.yhbimg.com/goodsimg/2019/06/11/11/02086c8cd53780b66639cfafcc46073799.jpg?imageMogr2/thumbnail/450x600/position/center/quality/60',
			price: '146.00',
			num: "82人",
			browse: "正在浏览",
			url:'/goods'
		},
		{
			img: 'http://img11.static.yhbimg.com/goodsimg/2017/08/18/18/01147d529fc5eb75060f9237e6a4d940c2.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '269.00',
			num: "140人",
			browse: "正在浏览",
			url:'/goods'
		},
		{
			img: 'http://img11.static.yhbimg.com/goodsimg/2019/01/02/11/01865818f1acc954fd93b77c1cf54c2b8e.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '129.00',
			num: "134人",
			browse: "正在浏览",
			url:'/goods'
		},
		{
			img: 'http://img12.static.yhbimg.com/goodsimg/2018/09/25/11/02cc3632ef6767ccaf479684c1967580ed.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '79.00',
			num: "134人",
			browse: "正在浏览",
			url:'/goods'
		},
		{
			img: 'http://img11.static.yhbimg.com/goodsimg/2018/12/29/19/01cb7ecd8980162e4f5a9e19c2004439c9.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '109.00',
			num: "134人",
			browse: "正在浏览",
			url:'/goods'
		},
		{
			img: 'http://img13.static.yhbimg.com/goodsimg/2019/03/21/16/02828618a5561eba5fe47624d8d2c14124.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '185.00',
			num: "59人",
			browse: "正在浏览",
			url:'/goods'
		},
		{
			img: 'http://img11.static.yhbimg.com/goodsimg/2016/11/03/18/01ac9117bbf97c19e4f472cf04db3e4157.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '109.00',
			num: "111人",
			browse: "正在浏览",
			url:'/goods'
		},
		{
			img: 'http://img11.static.yhbimg.com/goodsimg/2018/09/03/17/019ea6bab8b331c427c69163d9dae080d2.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '259.00',
			num: "111人",
			browse: "正在浏览",
			url:'/goods'
		},
		{
			img: 'http://img11.static.yhbimg.com/goodsimg/2018/09/25/15/01457751bf19ea61221cb5cd1441dd3d03.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '139.00',
			num: "111人",
			browse: "正在浏览",
			url:'/goods'
		},
		{
			img: 'http://img11.static.yhbimg.com/goodsimg/2018/06/08/10/01cbb2cd88642fbbfbd3984ee475aa5e76.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '209.00',
			num: "111人",
			browse: "正在浏览",
			url:'/goods'
		},
		{
			img: 'http://img12.static.yhbimg.com/goodsimg/2018/09/30/18/029e3508d5e949a57fb4d9277f74e71309.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '109.00',
			num: "111人",
			browse: "正在浏览",
			url:'/goods'
		},
		{
			img: 'http://img11.static.yhbimg.com/goodsimg/2018/05/26/17/01ce7569f9797c837d28d616cf3cb54788.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '45.00',
			num: "178人",
			browse: "正在浏览",
			url:'/goods'
		}
	]
	res.send(arr)
});


// 首页底部图片
router.get('/botpic', function (req, res, next) {
	var arr = [{
			imgs: 'http://img11.static.yhbimg.com/yhb-img01/2019/04/08/15/01332fd25f4ccd8988a21a6b44a6cd949f.jpg?imageView2/3/w/640/h/200/q/60',
			url:'/hotselling'
		},
		{
			imgs: 'http:////img11.static.yhbimg.com/yhb-img01/2019/04/08/15/0117ace5690e73d6687da6ff4ec617c3d8.jpg?imageView2/3/w/640/h/200/q/60',
			url:'/hotselling'
		},
		{
			imgs: 'http://img11.static.yhbimg.com/yhb-img01/2019/04/08/15/012a6f64cf2c5bd9557caa882589525de9.jpg?imageView2/3/w/640/h/200/q/60',
			url:'/hotselling'
		}

	]
	res.send(arr)
});


router.get('/orderP', function (req, res, next) {
	var arr = [
		{
			ortitle:'默认购物通道',
			chtitle:'潮童Kids',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png'
		},
		{
			ortitle:'我的订单',
			chtitle:'全部订单',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png'
		}
	]
	res.send(arr)
});

router.get('/orderFen', function (req, res, next) {
	var arr = [
		{
			imgs:'http://127.0.0.1:3000/images/mine/yh.png',
			fentitle:'待付款',
			href:'/logon'
		},
		{
			imgs:'http://127.0.0.1:3000/images/mine/df.png',
			fentitle:'待发货',
			href:'/logon'
		},
		{
			imgs:'http://127.0.0.1:3000/images/mine/ds.png',
			fentitle:'待收货',
			href:'/logon'
		},	
		{
			cs:'0',
			fentitle:'商品收藏',
			href:'/logon'
		},
		{
			cs:'0',
			fentitle:'品牌收藏',
			href:'/logon'
		},
		{
			cs:'0',
			fentitle:'浏览记录',
			href:'/logon'
		}
	]
	
	res.send(arr)
});

router.get('/orderCen', function (req, res, next) {
	var arr = [
		{
			img1:'http://127.0.0.1:3000/images/mine/yhj.png',
			centitle:'优惠劵',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png',
			href:'/logon'
		},
		{
			img1:'http://127.0.0.1:3000/images/mine/money.png',
			centitle:'有货币',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png',
			href:'/logon'
		},
		{
			img1:'http://127.0.0.1:3000/images/mine/xx.png',
			centitle:'消息',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png',
			href:'/logon'
		},	
		{
			img1:'http://127.0.0.1:3000/images/mine/fu.png',
			centitle:'服务与反馈',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png',
			href:'/custom'

		},
		
	]
	
	res.send(arr)
});
//服务与反馈
router.get('/cusTom', function (req, res, next) {
	var arr = [
		{
			img1:'http://127.0.0.1:3000/images/mine/ufo.png',
			centitle:'UFO专区',
			p:'UFO、买家、卖家',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png',
		},
		{
			img1:'http://127.0.0.1:3000/images/mine/qd.png',
			centitle:'有货有赚',
			p:'佣金、分享、提现',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png',
		},	
		{
			img1:'http://127.0.0.1:3000/images/mine/ddcx.png',
			centitle:'订单查询',
			p:'取消订单、修改地址、修改订单',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png',
		},
		{
			img1:'http://127.0.0.1:3000/images/mine/wl.png',
			centitle:'物流配送',
			p:'物流时效、快递选择、运费标准',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png',
		},
		{
			img1:'http://127.0.0.1:3000/images/mine/zf.png',
			centitle:'支付问题',
			p:'在线问题、货到付款、分期付款',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png',
		},
		{
			img1:'http://127.0.0.1:3000/images/mine/sh.png',
			centitle:'售后问题',
			p:'退货、换货、补寄发货',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png',
		},
		{
			img1:'http://127.0.0.1:3000/images/mine/zhwt.png',
			centitle:'账户问题',
			p:'个人信息、账户管理、VIP管理',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png',
		},
		{
			img1:'http://127.0.0.1:3000/images/mine/qqg.png',
			centitle:'全球购专区',
			p:'全球购购买、订单、售后',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png',
		},
		{
			img1:'http://127.0.0.1:3000/images/mine/sfz.png',
			centitle:'经营资质',
			p:'营业执照、经营许可证',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png',
		},
		{
			img1:'http://127.0.0.1:3000/images/mine/xy.png',
			centitle:'服务协议、隐私协议',
			p:'',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png',
		},
		
	]
	
	res.send(arr)
});

router.get('/orderLoop', function (req, res, next) {
	var arr = [
		{
			img:'//img13.static.yhbimg.com/goodsimg/2018/11/19/17/0265adcb842f115d2ec28e515624d76183.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60/format/webp',
			title:'YOHO!BUY有货 x Circleclean限量球鞋湿巾（12片装）',
			money:'49',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/05/29/15/011e323cbb8124c2e60a73c68dc4811436.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60/format/webp',
			title:'adidas Originals OZWEEGO PRIDE 2019 LGBT 休闲运动鞋',
			money:'1099',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/04/17/11/018da2af908fc63f6f7cd873cd7799bf3d.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'CHEAP MONDAY  印花帆布托特包',
			money:'250',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/06/03/16/01e68dad5f9b2291ad0e645010285020db.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'Levi’s® LMC X POGGY 小木基史黄色夹克',
			money:'2299',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2018/03/02/15/013752b037d45ef2f3e4819ed25117021a.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'Dr.Martens 3 Eye Shoe',
			money:'1399',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2019/01/07/14/011ba018de161ef7bf515dddb0f6011ae8.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'Timberland x MADNESS TYPE-MD02 6英寸高帮靴',
			money:'2190',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2018/12/19/14/02d8b777fe61eeca9b64948bc91ca3f9fd.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'Lee X Marvel CNY中国新年系列男式731小直脚中腰九分牛仔裤',
			money:'909',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2017/04/18/18/0221a1efb5f9e8434f88101f9d0186ba68.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'Lightning Bear 7周年 小熊印花短袖T恤',
			money:'158',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/05/15/11/02fb8d02ca339adbb7739d193c9b1f639d.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'STARTER 米原康正联名款短袖T恤',
			money:'499',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2018/11/21/12/021aa10e3d917b05456e841e92ae245404.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'Converse Lucky Star Hi 高帮休闲鞋',
			money:'599',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/01/14/13/026df510348a3fcf6d203c8d8719760cf1.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'PUMA X SANKUANZ Chinchilla-Blac Thunder 休闲运动鞋',
			money:'899',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/02/13/15/01c7ae52692350d67def9127d769ead37f.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'Skullcandy  骷髅头 PUSH真无线入耳式蓝牙耳机--运动通话耳塞 S2BBW-L638',
			money:'959',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2019/01/24/11/012f70a29de421de990f13e352ea1a9c6b.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'Reebok Instapump Fury x 麦兜新年特别款 休闲运动鞋',
			money:'714',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2018/04/18/18/01c9f34c8faef8aa075e2261582ac0878e.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'YOHO!GIRL x Randomevent 拼色提花图案毛衣',
			money:'499',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/03/24/15/0194c201fe20b52deb3ea40616011635d4.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'MADNESS x WIND AND SEA PRINT TEE',
			money:'499',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2017/12/29/15/025044056ae104a7f4ca067e53c8fb8d96.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:"CHUMS 80's blouson 男款复古运动夹克",
			money:'349',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/03/21/14/015a62e71b16bf364fb9971036a6ee98ea.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'initial gentleman x 熊谷隆志 联名款 印花短袖T恤  黑色',
			money:'690',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2019/05/13/11/0135b1760f53ff5cf4bf09326c3f1b9bcb.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'Joystone 银豆豆手链',
			money:'299',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2018/09/20/16/02f258fc9e0b0c44f2448ce1cb088a2a62.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'UGG  W Darlala Classic 精灵哒啦啦经典短靴',
			money:'782',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/05/28/17/024ff2926655c8840290025bfa5a4b83f8.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'李宁 韦德系列ALL CITY全城7篮球运动鞋',
			money:'999',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/05/28/10/016d010758a11357ae23551ff18589b083.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'FOOT INDUSTRY 透气网面拼接运动鞋',
			money:'520',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			
			img:'//img12.static.yhbimg.com/goodsimg/2019/03/04/15/025e8975b35aafc4098aedadc53f374832.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'Kappa x WHIZ 条纹LOGO印花棒球夹克',
			money:'2299',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2017/07/30/16/01aa908b40b136c0a8d8b87dc6875d6c7c.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'BLACKJACK  漫威经典印花燕尾大衣【两色可选】',
			money:'569',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2018/03/29/10/015f1016979ead29898ecebd9c0dc00289.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'Eone Timepieces 南方有乔木同款  触感磁力防水 中性时尚腕表BR-KU 酷MA萌定制版',
			money:'3010',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2018/08/18/11/026fac9f7f71ece90cc29eb1eef9f9385a.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'Ron English x APPortfolio x made by monsters Melty Ronnnie Rabbbit 粉红版',
			money:'2480',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2018/08/18/15/02f75635e3368b2c7a2e2674e594b3d308.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'Hanes x karla The Original 纯白色T恤',
			money:'299',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2018/07/30/12/022896c0dba6f4130e024b30f7fd1b82a2.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'GUESS Originals系列 男士撞色条纹短袖T恤',
			money:'499',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2018/12/28/10/02d678ebb1992a66b399bff9f803f00e20.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:"Levi's® x FENGCHENWANG新春合作系列男士刺绣连帽卫衣",
			money:'699',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/02/02/13/011987cdc3f61f92c06db9c5067cc40c86.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'Faith Connexion  女式串标休闲裤【Kappa合作款】',
			money:'1369',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2018/12/19/14/02afc6ece2faad7126eb00be32382e78e1.jpg?imageMogr2/thumbnail/235x314/background/d2hpdGU=/position/center/quality/60',
			title:'Dickies x YOHO! 限定合作款连帽卫衣',
			money:'399',
			imgs:'http://127.0.0.1:3000/images/mine/lue.png'
		}
		
	]
	
	res.send(arr)
});

router.get('/spin', function (req, res, next) {
	var arr = [
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/07/02/10/02295069d386ceb02913e4171bf26be66e.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/03/08/14/017d93122d9f7b7373294b66bcd0d26352.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/06/22/10/01e00f9b4fb59b9ec5e68ee6fa9c933e38.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/02/28/15/02f92eadb5cc73c60e9f64cc5385b82481.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp'
		},
	]
	
	res.send(arr)
});

router.get('/strNew', function(req, res, next) {
	var arr=[
		'//img11.static.yhbimg.com/yhb-img01/2019/03/08/10/01a49fa9712202eaf5e14a7b43b1a61d87.jpg?imageView2/2/w/640/h/275/q/60',
        '//img11.static.yhbimg.com/yhb-img01/2019/03/05/11/012b42b61e990c017ce2942015222e276c.jpg?imageView2/2/w/640/h/275/q/60',
        '//img11.static.yhbimg.com/yhb-img01/2019/03/04/16/01d7c114d5f19421e9e6f996ef2dcdb30b.jpg?imageView2/2/w/640/h/275/q/60',
        '//img10.static.yhbimg.com/yhb-img01/2019/03/01/18/01e2d433374738fa9dbc57aacb627cb512.jpg?imageView2/2/w/640/h/275/q/60',
        '//img11.static.yhbimg.com/yhb-img01/2019/01/18/15/01bb84fc22d6a72bb8636ec4f7e2c6625f.jpg?imageView2/2/w/640/h/275/q/60',
        '//img10.static.yhbimg.com/yhb-img01/2019/01/15/10/016a26cc9545a049b30da1db9a513a4f09.jpg?imageView2/2/w/640/h/275/q/60'
	]
	
  res.send(arr)
});

//最新页面内容
router.get('/strBl', function(req, res, next) {
	var arr=[
		{
			img:'//img10.static.yhbimg.com/article/2019/07/08/14/0147451f6d06e9f60061cd5cda7f2c64f8.jpg?imageView2/2/w/640/h/640/q/60',
			text:'Slogan Tee，把态度穿在身上| 点阅秀出你的宣言',
			p:'Slogan Tee',
			read:'搭配 | 1566人阅读',
			num:34,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/07/03/20/028853afa00f9d7840b4ac9a4650105611.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'UNDERCOVER 骷髅印花短袖T恤',
					money:'1689.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/07/03/20/01f6753ec259eba1362b8c4c2c2f466051.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'UNDERCOVER  RootlegTruth印花短袖T恤',
					money:'849.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2018/03/02/14/016f0a76d5fe3869e2099cd2a2226f7ce2.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'F.A,M.T.  Need money not friends.Slogan 白色T恤',
					money:'279.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2018/06/12/17/02f821215eb8119caa0aced38670b19475.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'F.A,M.T.  You need more shit. slogan 绿色T恤',
					money:'259.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/06/07/14/02b7e93846cf75ee38fe399e96a9a16d66.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'F.A,M.T. “Make sense.”slogan短袖T恤',
					money:'399.00'
				}
				
			]
		},
		{
			img:'//img11.static.yhbimg.com/article/2019/07/05/19/01e191cadcb8184a708a6e14965857e33f.jpg?imageView2/2/w/640/h/640/q/60',
			text:'从万宝路烟盒衬衫到NBA超级明星，Rhude靠什么打入洛杉矶时尚圈？',
			p:'Rhude靠什么打入洛杉矶时尚圈',
			read:'圈内事 | 6031人阅读',
			num:32,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[]
		},
		{
			img:'//img12.static.yhbimg.com/article/2019/07/03/14/02064926c17830ee9b04e722775591d7a3.jpg?imageView2/2/w/640/h/640/q/60',
			text:'嘻哈青年就是要Keep real | 查看文章选购Hip Hop单品',
			p:'hip hop',
			read:'搭配 | 17514人阅读',
			num:42,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/06/08/17/027930557b349f2fdbdb1396a19111112b.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'F.A,M.T.  “Face the reality.”slogan短袖T恤',
					money:'399.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/04/26/17/0173aa38e1583e2dab40ae4d720b609228.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'ETUDES STUDIO 连帽人像印花卫衣',
					money:'6189.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/06/14/16/01402946a72cbf463cd0cf4358368f2975.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'AMBUSH  INFLATED TEDDY BEAR EARRING',
					money:'3199.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/01/18/02516f1bf782e5d2181c09447ea4089678.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'HUMAN MADE 条纹拼接假两件连体衣',
					money:'3219.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/01/17/02f426837770ccf450f97d5205276713ff.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'Cote&Ciel Isarau Small斜挎胸包',
					money:'980.00'
				}
			]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/07/02/01/0185b7ae11a4d933ebc893b3ebbf25414a.jpeg?imageView2/2/w/640/h/640/q/60',
			text:'主宰蹦迪现场，只需一双好鞋|点击继续下半场',
			p:'shoes',
			read:'搭配 | 32836人阅读',
			num:41,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img12.static.yhbimg.com/goodsimg/2018/10/18/11/0238899964a454912f7082c205ea3f421f.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'COMMON PROJECTS Original Achilles 低帮灰粉色平底休闲鞋',
					money:'3459.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/05/02/10/01444c1a2900ff702ad130ec715c4dfec4.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'Rick Owens DRKSHDW 低帮拼贴帆布运动鞋',
					money:'3009.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2018/05/05/16/01e2eb9379711e1a7332d9d6dbf315f9b5.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'TOGA PULLA 尖头镂空金属时装鞋',
					money:'1319.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2018/09/22/15/021276f2563fd64de02d7b3779794ad53b.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'PALM ANGELS 红色火焰休闲运动鞋',
					money:'2579.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2018/11/21/14/01bbb75869b876ec0b715e87f29a64cafb.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'RICK OWENS 黑色长筒靴子',
					money:'3069.00'
				}
			]
		},
		{
			img:'//img13.static.yhbimg.com/article/2019/07/01/10/028d9f8cbcff9daf8b2235d67a4f2c291b.jpg?imageView2/2/w/640/h/640/q/60',
			text:'潮流课堂 | 在YO!COFFEE.快闪店，感受手冲咖啡的魅力',
			p:'6.26~7.25 YO!COFFEE.快闪店登陆YOHO!STORE！',
			read:'YOHO!STORE | 2063人阅读',
			num:31,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[]
		},
		{
			img:'//img13.static.yhbimg.com/article/2019/06/28/18/021245b2b893da74420ef73fa19d11cadd.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'以不寻常造型配饰“发声”，Ambush会成为你今夏的选择吗？',
			p:'先锋街头品牌AMBUSH',
			read:'潮牌热 | 19313人阅读',
			num:37,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[]
		},
		{
			img:'//img13.static.yhbimg.com/article/2019/06/23/22/0296a6bc42d28246dcec8d4e3ca4924dea.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'半年度品牌联名盘点 | 2019春夏最值得你收藏种草的联名单品',
			p:'半年度联名盘点',
			read:'圈内事 | 17766人阅读',
			num:46,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[]
		},
		{
			img:'//img12.static.yhbimg.com/article/2019/06/26/12/0297f2af62bfadc6a95c0c8b11bf0c8dfc.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'“穿”出来的少年气 | 查阅文章GET同款衬衫',
			p:'少年气衬衫',
			read:'搭配 | 31289人阅读',
			num:56,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/06/12/15/01ef514e2b0a6bd33fbb486c08dcb593a8.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'HUMAN MADE  满版卡通短袖衬衫',
					money:'1719.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/02/19/10/02b1aa3fd6873cb71338865192a76ae9bd.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'GCDS  CARGO SHIRT',
					money:'1719.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/05/29/16/021ed94f2cc1caffe05a752e4855331527.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'J.W.ANDERSON 印花拼接长袖衬衫',
					money:'2889.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/05/29/16/01dc4a3744ac23cffec88ba2311cc007e6.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'TAKAHIROMIYASHITA Thesoloist. 格纹人像印花长袖衬衫',
					money:'2679.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2018/11/18/17/02b4da72d7a3099b77ef02d51e9d701025.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'HUMAN MADE 蓝灰格纹衬衫',
					money:'1649.00'
				}
			]
		},
		{
			img:'//img12.static.yhbimg.com/article/2019/06/24/14/02d1db51b02b985344527660ae140049b7.jpg?imageView2/2/w/640/h/640/q/60',
			text:'夏季包包，就要与众不同 | 点击获取吸睛利器',
			p:'夏季包包',
			read:'搭配 | 32689人阅读',
			num:48,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/04/17/21/01f969716d69685cad7bb379e4618443d2.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MM6 Maison Margiela LOGO透明手拎包',
					money:'2749.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/04/01/15/01b6d833886f20389a2ccbdb4ba72abc6e.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Cote&Ciel Timsah双肩包',
					money:'2080.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/04/05/14/021b44e9ec244c5ba890b05f15cb8907f9.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MARCELO BURLON  CROSS FANNY PACK',
					money:'2559.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/04/17/12/0119267e190e4399f157baff1fcea64cce.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Maison Kitsune  LOGO蓝色单肩包',
					money:'459.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/06/12/15/02cb7f9cacf367343155c4e79a8c5dd635.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'HUMAN MADE LOGO字母手包',
					money:'449.00'
				}
			]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/06/20/11/014543d2b1846530e194f1bdd02bd85d7c.jpeg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'不只通勤时间能用的托特包 | 点击文章选购更多款式',
			p:'TOTE',
			read:'搭配 | 53798人阅读',
			num:54,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/04/17/12/0119267e190e4399f157baff1fcea64cce.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Maison Kitsune  LOGO蓝色单肩包',
					money:'459.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/01/08/23/023aa25a2452c0f3955ae87e02dbaa8614.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'UNIFORM EXPERIMENT 黑色字母tote包',
					money:'449.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/04/17/11/01a775bcb5fc3143c9e296bb594da7dd93.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Maison Kitsune PARISIEN撞色单肩包',
					money:'349.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/01/08/14/010f9a6c199c566a5ba2e01f80866e76a8.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'UNIFORM EXPERIMENT 橙色字母tote包',
					money:'449.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/02/18/13/02ab6942e68775b155422f6d80de9e3afc.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'J.W.ANDERSON 彩色托特单肩包',
					money:'5339.00'
				}
				
			]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/06/18/13/01af00bd7d91b55f449f06ad6e167ac31f.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'你离时髦只隔这一副墨镜 | 入手遮挡太阳的“利器”',
			p:'墨镜',
			read:'搭配 | 21130人阅读',
			num:50,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/06/14/16/012fa289c4b6d90acc26154eba3887645f.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'人人都穿但怎样才不会撞车 | 春夏经典鞋履小白鞋',
			p:'夏日小白鞋',
			read:'买物 | 32804人阅读',
			num:38,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[]
		},
		{
			img:'//img11.static.yhbimg.com/article/2019/06/12/14/01a074421be04e3ff55a8951ff7a15b4d0.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'律动的夏季，运动的少年|点击更换夏季运动风装备',
			p:'夏季运动风',
			read:'搭配 | 44344人阅读',
			num:63,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/05/14/027c199ce9ec444bed45300f330dfa597b.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'GEO BELT BAG',
					money:'1129.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/02/18/13/02836392a3f00cb1965f39bfd7394d2b52.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MSGM  字母印花休闲鞋',
					money:'3350.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/30/14/0265ba9cc6bb8894806d5425755d26e3d7.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Rick Owens DRKSHDW 高帮拼贴帆布运动鞋',
					money:'4439.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2018/11/21/14/01f12d6a8eeef4b139437dd7bb453d5a9e.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Rick Owens 黑白绑带高帮休闲鞋',
					money:'4019.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2018/06/29/11/01ffbbab3a775be5d66bf90e117f74a775.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'F.A,M.T.  All you need is less.Slogan 蓝色腰包',
					money:'279.00'
				}
				
			]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/06/03/16/011b28aeabfbb3ef746ab4a63b7eeaa7cc.jpg?imageView2/2/w/640/h/640/q/60',
			text:'用尼龙颠覆规则 | 点击查看不容错过的尼龙单品',
			p:'尼龙',
			read:'搭配 | 18621人阅读',
			num:62,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/06/19/14/013f43063c6b7e6e0d65194bc878871c8f.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'GCDS NEW BAND TRACKSUIT',
					money:'3129.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/06/19/14/020a08a0841a1eefe6fe3c7920778ccdbb.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'GCDS  LOGO K-WAY',
					money:'3129.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/07/03/10/029c85fda5cc0324d3b041f4b3f1e1d2d3.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'BILLIONAIRE BOYS CLUB  NYLON RIPSTOP SHORTS',
					money:'1389.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/06/19/14/01299ceef8d21150caee589c514080acc3.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'GCDS LOGO K-WAY',
					money:'2759.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/07/03/10/01fb4336a64ab8c0159892abc5f17ef9dd.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'BILLIONAIRE BOYS CLUB  NYLON RIPSTOP SHORTS',
					money:'1389.00'
				}
				
			]
		},
		{
			img:'//img12.static.yhbimg.com/article/2019/06/06/17/029af643424efc109ee090effaff331482.jpg?imageView2/2/w/640/h/640/q/60',
			text:'Mini Bag | 迷你SIZE的小包才是你今年夏天的首选',
			p:'mini bag',
			read:'买物 | 37745人阅读',
			num:41,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[]
		},
		{
			img:'//img12.static.yhbimg.com/article/2019/06/05/18/02959caf340b24191f294d22d978390039.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'凉鞋配长袜才是夏日正经事 | 点击文章清凉一夏',
			p:'夏日凉拖',
			read:'搭配 | 43168人阅读',
			num:59,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/04/30/22/011d3403f4a439e8b637670cd213bdb24d.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Rick Owens DRKSHDW 拼贴一字拖鞋',
					money:'1549.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/02/11/16/0162afc5c3b9126ed5a6fccbcef0cb6e0e.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MARCELO BURLON  CROSS SLIDER',
					money:'1219.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/04/26/15/015858732532d94691c7dc9cf80c5aba23.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'C2H4 LA 字母针织袜子',
					money:'129.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/05/02/14/01a0f1ceac07cb9c066c853190fcd34272.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Rick Owens LOGO针织长袜',
					money:'699.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/04/18/10/0264d5e729b86a4c1742e2e3101f9423fc.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'GCDS  CC LOGO SLIDES',
					money:'819.00'
				}
				
			]
		},
		{
			img:'//img11.static.yhbimg.com/article/2019/06/03/10/010b27c1007e2712579187d1dc74dbaa17.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'迷幻色彩主义 | 如何将“渐变扎染”穿在自己的身上？',
			p:'扎染',
			read:'搭配 | 46467人阅读',
			num:55,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/06/18/17/018be3d0dc6e1e60fe74fc52923b585ed5.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'FENG CHEN WANG  GRADIENT T-SHIRT',
					money:'1909.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/06/04/18/02ec7a979c581dffd18a63eb51b7c6d721.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Maison Margiela 字母印花短袖T恤',
					money:'659.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/07/03/10/02d718c21b56e151f45ef3b1bccc9c95a3.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'BILLIONAIRE BOYS CLUB  BLEACHED T-SHIRT',
					money:'1039.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/06/11/12/019f77190cc8f7203fef936c63d3199f24.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MM6 Maison Margiela LOGO扎染连帽卫衣',
					money:'2889.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/05/08/17/01c22b38897f4d4f069c3a0cd560c13acf.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'BILLIONAIRE BOYS CLUB  BLEACHED  T-SHIRT',
					money:'1039.00'
				}
				
			]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/05/27/16/0142c156b7040f6ad0d11e3f0fe17b8629.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'酷女孩的穿搭灵感 | 找到匹配你的专属风格',
			p:'酷女孩穿搭灵感',
			read:'怎么穿 | 55595人阅读',
			num:46,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img11.static.yhbimg.com/goodsimg/2018/03/04/15/01ccef483ba3689c8bc10eb3aa5f3096a3.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MM6 Maison Margiela 条纹阔腿休闲裤',
					money:'1129.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/01/30/14/0134d726b1e854f128641f4699c8f5b9d5.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'PALM ANGELS 拼色针织运动裤',
					money:'2845.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/05/22/16/02c87633db95de8b4ae7f216945a150d36.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'ETUDES STUDIO LOGO运动短裤',
					money:'1579.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/18/18/0233f7b0eafa6007686bd69d729401ba1f.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'REPRESENT  FLAMING CAR印花短袖T恤',
					money:'639.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/02/10/02b9f45575c8d49dd0fb01d6ed756be145.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'UNDERCOVER 猫咪卡通短袖T恤',
					money:'1539.00'
				}
				
			]
		}
	]
	
  res.send(arr)
});

//搭配页面内容
router.get('/strDp', function(req, res, next) {
	var arr=[
		{
			img:'//img10.static.yhbimg.com/article/2019/07/08/14/0147451f6d06e9f60061cd5cda7f2c64f8.jpg?imageView2/2/w/640/h/640/q/60',
			text:'Slogan Tee，把态度穿在身上| 点阅秀出你的宣言',
			p:'Slogan Tee',
			read:'搭配 | 1566人阅读',
			num:33,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/07/03/20/028853afa00f9d7840b4ac9a4650105611.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'UNDERCOVER 骷髅印花短袖T恤',
					money:'1689.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/07/03/20/01f6753ec259eba1362b8c4c2c2f466051.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'UNDERCOVER  RootlegTruth印花短袖T恤',
					money:'849.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2018/03/02/14/016f0a76d5fe3869e2099cd2a2226f7ce2.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'F.A,M.T.  Need money not friends.Slogan 白色T恤',
					money:'279.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2018/06/12/17/02f821215eb8119caa0aced38670b19475.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'F.A,M.T.  You need more shit. slogan 绿色T恤',
					money:'259.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/06/07/14/02b7e93846cf75ee38fe399e96a9a16d66.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'F.A,M.T. “Make sense.”slogan短袖T恤',
					money:'399.00'
				}
				
			]
		},
		{
			img:'//img12.static.yhbimg.com/article/2019/07/03/14/02064926c17830ee9b04e722775591d7a3.jpg?imageView2/2/w/640/h/640/q/60',
			text:'嘻哈青年就是要Keep real | 查看文章选购Hip Hop单品',
			p:'hip hop',
			read:'搭配 | 17514人阅读',
			num:42,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/06/08/17/027930557b349f2fdbdb1396a19111112b.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'F.A,M.T.  “Face the reality.”slogan短袖T恤',
					money:'399.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/04/26/17/0173aa38e1583e2dab40ae4d720b609228.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'ETUDES STUDIO 连帽人像印花卫衣',
					money:'6189.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/06/14/16/01402946a72cbf463cd0cf4358368f2975.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'AMBUSH  INFLATED TEDDY BEAR EARRING',
					money:'3199.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/01/18/02516f1bf782e5d2181c09447ea4089678.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'HUMAN MADE 条纹拼接假两件连体衣',
					money:'3219.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/01/17/02f426837770ccf450f97d5205276713ff.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'Cote&Ciel Isarau Small斜挎胸包',
					money:'980.00'
				}
			]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/07/02/01/0185b7ae11a4d933ebc893b3ebbf25414a.jpeg?imageView2/2/w/640/h/640/q/60',
			text:'主宰蹦迪现场，只需一双好鞋|点击继续下半场',
			p:'shoes',
			read:'搭配 | 32836人阅读',
			num:41,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img12.static.yhbimg.com/goodsimg/2018/10/18/11/0238899964a454912f7082c205ea3f421f.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'COMMON PROJECTS Original Achilles 低帮灰粉色平底休闲鞋',
					money:'3459.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/05/02/10/01444c1a2900ff702ad130ec715c4dfec4.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'Rick Owens DRKSHDW 低帮拼贴帆布运动鞋',
					money:'3009.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2018/05/05/16/01e2eb9379711e1a7332d9d6dbf315f9b5.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'TOGA PULLA 尖头镂空金属时装鞋',
					money:'1319.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2018/09/22/15/021276f2563fd64de02d7b3779794ad53b.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'PALM ANGELS 红色火焰休闲运动鞋',
					money:'2579.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2018/11/21/14/01bbb75869b876ec0b715e87f29a64cafb.jpg?imageView2/2/w/106/h/138/q/60',
					titles:'RICK OWENS 黑色长筒靴子',
					money:'3069.00'
				}
			]
		},
		{
			img:'//img12.static.yhbimg.com/article/2019/06/26/12/0297f2af62bfadc6a95c0c8b11bf0c8dfc.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'“穿”出来的少年气 | 查阅文章GET同款衬衫',
			p:'少年气衬衫',
			read:'搭配 | 31289人阅读',
			num:56,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/06/12/15/01ef514e2b0a6bd33fbb486c08dcb593a8.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'HUMAN MADE  满版卡通短袖衬衫',
					money:'1719.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/02/19/10/02b1aa3fd6873cb71338865192a76ae9bd.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'GCDS  CARGO SHIRT',
					money:'1719.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/05/29/16/021ed94f2cc1caffe05a752e4855331527.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'J.W.ANDERSON 印花拼接长袖衬衫',
					money:'2889.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/05/29/16/01dc4a3744ac23cffec88ba2311cc007e6.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'TAKAHIROMIYASHITA Thesoloist. 格纹人像印花长袖衬衫',
					money:'2679.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2018/11/18/17/02b4da72d7a3099b77ef02d51e9d701025.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'HUMAN MADE 蓝灰格纹衬衫',
					money:'1649.00'
				}
			]
		},
		{
			img:'//img12.static.yhbimg.com/article/2019/06/24/14/02d1db51b02b985344527660ae140049b7.jpg?imageView2/2/w/640/h/640/q/60',
			text:'夏季包包，就要与众不同 | 点击获取吸睛利器',
			p:'夏季包包',
			read:'搭配 | 32689人阅读',
			num:48,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/04/17/21/01f969716d69685cad7bb379e4618443d2.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MM6 Maison Margiela LOGO透明手拎包',
					money:'2749.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/04/01/15/01b6d833886f20389a2ccbdb4ba72abc6e.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Cote&Ciel Timsah双肩包',
					money:'2080.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/04/05/14/021b44e9ec244c5ba890b05f15cb8907f9.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MARCELO BURLON  CROSS FANNY PACK',
					money:'2559.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/04/17/12/0119267e190e4399f157baff1fcea64cce.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Maison Kitsune  LOGO蓝色单肩包',
					money:'459.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/06/12/15/02cb7f9cacf367343155c4e79a8c5dd635.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'HUMAN MADE LOGO字母手包',
					money:'449.00'
				}
			]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/06/20/11/014543d2b1846530e194f1bdd02bd85d7c.jpeg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'不只通勤时间能用的托特包 | 点击文章选购更多款式',
			p:'TOTE',
			read:'搭配 | 53798人阅读',
			num:54,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/04/17/12/0119267e190e4399f157baff1fcea64cce.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Maison Kitsune  LOGO蓝色单肩包',
					money:'459.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/01/08/23/023aa25a2452c0f3955ae87e02dbaa8614.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'UNIFORM EXPERIMENT 黑色字母tote包',
					money:'449.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/04/17/11/01a775bcb5fc3143c9e296bb594da7dd93.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Maison Kitsune PARISIEN撞色单肩包',
					money:'349.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/01/08/14/010f9a6c199c566a5ba2e01f80866e76a8.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'UNIFORM EXPERIMENT 橙色字母tote包',
					money:'449.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/02/18/13/02ab6942e68775b155422f6d80de9e3afc.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'J.W.ANDERSON 彩色托特单肩包',
					money:'5339.00'
				}
				
			]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/06/18/13/01af00bd7d91b55f449f06ad6e167ac31f.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'你离时髦只隔这一副墨镜 | 入手遮挡太阳的“利器”',
			p:'墨镜',
			read:'搭配 | 21130人阅读',
			num:50,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[]
		},
		{
			img:'//img11.static.yhbimg.com/article/2019/06/12/14/01a074421be04e3ff55a8951ff7a15b4d0.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'律动的夏季，运动的少年|点击更换夏季运动风装备',
			p:'夏季运动风',
			read:'搭配 | 44344人阅读',
			num:63,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/05/14/027c199ce9ec444bed45300f330dfa597b.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'GEO BELT BAG',
					money:'1129.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/02/18/13/02836392a3f00cb1965f39bfd7394d2b52.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MSGM  字母印花休闲鞋',
					money:'3350.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/30/14/0265ba9cc6bb8894806d5425755d26e3d7.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Rick Owens DRKSHDW 高帮拼贴帆布运动鞋',
					money:'4439.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2018/11/21/14/01f12d6a8eeef4b139437dd7bb453d5a9e.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Rick Owens 黑白绑带高帮休闲鞋',
					money:'4019.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2018/06/29/11/01ffbbab3a775be5d66bf90e117f74a775.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'F.A,M.T.  All you need is less.Slogan 蓝色腰包',
					money:'279.00'
				}
				
			]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/06/03/16/011b28aeabfbb3ef746ab4a63b7eeaa7cc.jpg?imageView2/2/w/640/h/640/q/60',
			text:'用尼龙颠覆规则 | 点击查看不容错过的尼龙单品',
			p:'尼龙',
			read:'搭配 | 18621人阅读',
			num:62,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/06/19/14/013f43063c6b7e6e0d65194bc878871c8f.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'GCDS NEW BAND TRACKSUIT',
					money:'3129.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/06/19/14/020a08a0841a1eefe6fe3c7920778ccdbb.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'GCDS  LOGO K-WAY',
					money:'3129.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/07/03/10/029c85fda5cc0324d3b041f4b3f1e1d2d3.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'BILLIONAIRE BOYS CLUB  NYLON RIPSTOP SHORTS',
					money:'1389.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/06/19/14/01299ceef8d21150caee589c514080acc3.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'GCDS LOGO K-WAY',
					money:'2759.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/07/03/10/01fb4336a64ab8c0159892abc5f17ef9dd.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'BILLIONAIRE BOYS CLUB  NYLON RIPSTOP SHORTS',
					money:'1389.00'
				}
				
			]
		},
		{
			img:'//img12.static.yhbimg.com/article/2019/06/05/18/02959caf340b24191f294d22d978390039.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'凉鞋配长袜才是夏日正经事 | 点击文章清凉一夏',
			p:'夏日凉拖',
			read:'搭配 | 43168人阅读',
			num:59,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/04/30/22/011d3403f4a439e8b637670cd213bdb24d.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Rick Owens DRKSHDW 拼贴一字拖鞋',
					money:'1549.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/02/11/16/0162afc5c3b9126ed5a6fccbcef0cb6e0e.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MARCELO BURLON  CROSS SLIDER',
					money:'1219.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/04/26/15/015858732532d94691c7dc9cf80c5aba23.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'C2H4 LA 字母针织袜子',
					money:'129.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/05/02/14/01a0f1ceac07cb9c066c853190fcd34272.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Rick Owens LOGO针织长袜',
					money:'699.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/04/18/10/0264d5e729b86a4c1742e2e3101f9423fc.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'GCDS  CC LOGO SLIDES',
					money:'819.00'
				}
				
			]
		},
		{
			img:'//img11.static.yhbimg.com/article/2019/06/03/10/010b27c1007e2712579187d1dc74dbaa17.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'迷幻色彩主义 | 如何将“渐变扎染”穿在自己的身上？',
			p:'扎染',
			read:'搭配 | 46467人阅读',
			num:55,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/06/18/17/018be3d0dc6e1e60fe74fc52923b585ed5.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'FENG CHEN WANG  GRADIENT T-SHIRT',
					money:'1909.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/06/04/18/02ec7a979c581dffd18a63eb51b7c6d721.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Maison Margiela 字母印花短袖T恤',
					money:'659.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/07/03/10/02d718c21b56e151f45ef3b1bccc9c95a3.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'BILLIONAIRE BOYS CLUB  BLEACHED T-SHIRT',
					money:'1039.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/06/11/12/019f77190cc8f7203fef936c63d3199f24.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MM6 Maison Margiela LOGO扎染连帽卫衣',
					money:'2889.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/05/08/17/01c22b38897f4d4f069c3a0cd560c13acf.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'BILLIONAIRE BOYS CLUB  BLEACHED  T-SHIRT',
					money:'1039.00'
				}
				
			]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/05/27/16/0142c156b7040f6ad0d11e3f0fe17b8629.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'酷女孩的穿搭灵感 | 找到匹配你的专属风格',
			p:'酷女孩穿搭灵感',
			read:'怎么穿 | 55595人阅读',
			num:46,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img11.static.yhbimg.com/goodsimg/2018/03/04/15/01ccef483ba3689c8bc10eb3aa5f3096a3.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MM6 Maison Margiela 条纹阔腿休闲裤',
					money:'1129.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/01/30/14/0134d726b1e854f128641f4699c8f5b9d5.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'PALM ANGELS 拼色针织运动裤',
					money:'2845.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/05/22/16/02c87633db95de8b4ae7f216945a150d36.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'ETUDES STUDIO LOGO运动短裤',
					money:'1579.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/18/18/0233f7b0eafa6007686bd69d729401ba1f.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'REPRESENT  FLAMING CAR印花短袖T恤',
					money:'639.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/02/10/02b9f45575c8d49dd0fb01d6ed756be145.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'UNDERCOVER 猫咪卡通短袖T恤',
					money:'1539.00'
				}
				
			]
		},
		{
			img:'//img11.static.yhbimg.com/article/2019/05/23/12/0147f285672054ea43ea9cb13c00bbff1f.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'宽松裁剪，以阔腿裤解放身体 | 点击挑选你的阔腿裤',
			p:'阔腿裤',
			read:'BLK | 18533人阅读',
			num:48,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/05/29/16/01898c0066dc28b8a5f5401fbca5fa0ed3.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'J.W.ANDERSON 褶皱拼接阔腿休闲裤',
					money:'4889.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2018/11/01/14/02c840d4782e85134c42644d34a1b8895e.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'SANKUANZ  纯色休闲阔腿裤',
					money:'2959.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/04/24/15/021b9c4cb04747aa3b0993c63ab01fcb88.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'SUNNEI  条纹裤脚阔腿牛仔裤',
					money:'1929.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2018/11/01/16/02ac96b41031a413f42cdb22498bacd7a7.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'SANKUANZ  纯色休闲阔腿裤',
					money:'2959.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/05/02/17/02e197b03db2105976ee4258ebe887609a.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'SANKUANZ  纯色休闲阔腿裤',
					money:'2959.00'
				}
				
			]
		},
		{
			img:'//img11.static.yhbimg.com/article/2019/05/21/18/01b7d6cb143868049ebea011344e04f2d5.jpg?imageView2/2/w/640/h/640/q/60',
			text:'牛仔元素的5种玩法 | 点击查看经典元素多变样式',
			p:'丹宁',
			read:'BLK | 17196人阅读',
			num:39,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/02/11/14/01546c5c84ddf0e09f6822a26b04301c4a.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MSGM   字母印花牛仔衬衫',
					money:'2229.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/04/26/10/01c1d49c0360d29c3707f841d4b3ddf11a.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MM6 Maison Margiela 字母浅色镂空夹克',
					money:'4999.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/05/02/10/01eb55f6601ef88eec56289de3a1b71f1e.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Rick Owens 拼接撞色牛仔裤',
					money:'4339.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2018/12/10/14/01ba71c19ef017ac1ba7a4c034261ca30b.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MISBHV 个性印花牛仔夹克',
					money:'1819.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/04/24/15/021b9c4cb04747aa3b0993c63ab01fcb88.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'SUNNEI  条纹裤脚阔腿牛仔裤',
					money:'1929.00'
				}
				
			]
		},
		{
			img:'//img13.static.yhbimg.com/article/2019/05/14/12/0267ad937574186e93896acb1383d60833.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'Back to 1990s | 在新时代演绎锐舞青年经典造型',
			p:'锐舞青年穿搭指南',
			read:'BLK | 12901人阅读',
			num:36,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/02/11/15/02f143c7432f0b80034b2b193d9f08d749.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MARCELO BURLON  CONFIDENCIAL STRIPES SHIRT',
					money:'4099.00'
				},
				{
					image:'src="//img11.static.yhbimg.com/goodsimg/2018/09/25/12/011d18fdffb5e9d878c95c42994a9b9035.jpg?imageView2/2/w/106/h/138/q/60/format/webp"',
					titles:'JINNNN SINGLE系列银色边框太阳镜',
					money:'1680.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2018/04/14/10/02af04782ad62f20c43592ff7597a29996.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Cody Sanderson  Cut Out Opposing Star',
					money:'13549.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/24/16/02ee9e947e5863d36e6dc8278f963bc21f.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'SUNNEI 黄白条纹短袖衬衫',
					money:'2609.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2018/11/02/08/0190722559a9325d45854f0c19a41885f0.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'3.1 Phillip Lim  拼色牛仔短裤',
					money:'1179.00'
				}
				
			]
		},
		{
			img:'//img13.static.yhbimg.com/article/2019/05/07/10/02503f8ac0e51b274c2c6f070f76ce9436.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'错过Coachella，还有这份全宇宙时髦音乐节指南',
			p:'音乐节指南',
			read:'BLK | 12819人阅读',
			num:40,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/02/11/15/02f143c7432f0b80034b2b193d9f08d749.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MARCELO BURLON  CONFIDENCIAL STRIPES SHIRT',
					money:'4099.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/04/11/17/0186b2496a65c1550fa21b789d86c134a6.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'REPRESENT 做旧条形码印花牛仔夹克',
					money:'1389.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/03/22/12/02c21142113c292a922bae78f8fad7a8cd.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'UNRAVEL PROJECT 绑带磨毛牛仔短裤',
					money:'3389.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/03/16/09/02f41372b6cdac1092c3668e0d0c32c576.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'ETUDES STUDIO 刺绣LOGO渔夫帽',
					money:'739.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/02/18/13/01b261ad3076c70e0c871164da8f0fc825.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MSGM  LOGO印花休闲鞋（女码）',
					money:'4050.00'
				}
				
			]
		}
	]
	
  res.send(arr)
});

//头条页面内容
router.get('/strTt', function(req, res, next) {
	var arr=[
		{
			img:'//img11.static.yhbimg.com/article/2019/07/05/19/01e191cadcb8184a708a6e14965857e33f.jpg?imageView2/2/w/640/h/640/q/60',
			text:'从万宝路烟盒衬衫到NBA超级明星，Rhude靠什么打入洛杉矶时尚圈？',
			p:'Rhude靠什么打入洛杉矶时尚圈',
			read:'圈内事 | 6031人阅读',
			num:32,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img13.static.yhbimg.com/article/2019/06/28/18/021245b2b893da74420ef73fa19d11cadd.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'以不寻常造型配饰“发声”，Ambush会成为你今夏的选择吗？',
			p:'先锋街头品牌AMBUSH',
			read:'潮牌热 | 19313人阅读',
			num:37,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img13.static.yhbimg.com/article/2019/06/23/22/0296a6bc42d28246dcec8d4e3ca4924dea.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'半年度品牌联名盘点 | 2019春夏最值得你收藏种草的联名单品',
			p:'半年度联名盘点',
			read:'圈内事 | 17766人阅读',
			num:46,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/06/14/16/012fa289c4b6d90acc26154eba3887645f.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'人人都穿但怎样才不会撞车 | 春夏经典鞋履小白鞋',
			p:'夏日小白鞋',
			read:'买物 | 32857人阅读',
			num:38,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img12.static.yhbimg.com/article/2019/06/06/17/029af643424efc109ee090effaff331482.jpg?imageView2/2/w/640/h/640/q/60',
			text:'Mini Bag | 迷你SIZE的小包才是你今年夏天的首选',
			p:'mini bag',
			read:'买物 | 37745人阅读',
			num:41,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img11.static.yhbimg.com/article/2019/03/19/18/01398ba26d776dbbac827f38820cf652fd.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'时装品牌“丹宁”升级的时代',
			p:'时装品牌的“丹宁”升级',
			read:'圈内事 | 71444人阅读',
			num:58,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img11.static.yhbimg.com/article/2019/03/07/16/014c525a9c64c63e2dbed9ba8f39c929ea.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'GCDS,上帝无法摧毁的“皮卡丘”',
			p:'GCDS',
			read:'圈内事 | 62029人阅读',
			num:64,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/02/20/09/0160cff449f9b76bdd41d931bfbfbe8f66.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'买最贵的就最潮？折扣淘到好货才是真本事！',
			p:'买最好的鞋，穿最划算的衣服。',
			read:'买物 | 71191人阅读',
			num:51,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img11.static.yhbimg.com/article/2019/02/14/13/0140a1b6a3ba810cc8cef1a2e17424c2c9.jpg?imageView2/2/w/640/h/640/q/60',
			text:'一年四季都少不了的裤子绝对是它了吧',
			p:'谁还没有个10条8条的牛仔裤呢',
			read:'买物 | 46124人阅读',
			num:49,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/02/15/14/01225870ce03553a7e68deb39d67f29115.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'穿上这些3M，你就是夜里最酷炫的仔！',
			p:'要的就是这个回头率！',
			read:'买物 | 77974人阅读',
			num:62,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img13.static.yhbimg.com/article/2019/02/22/16/0245121d1e9f1e9d48ce5ae7b967613728.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'Converse“膨胀”了？还好我们还有Vans！',
			p:'都是帆布鞋，选合适的就行~',
			read:'球鞋 | 77196人阅读',
			num:57,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img11.static.yhbimg.com/article/2019/03/01/16/01879fa6f2998fb8abb427cb008d998f5e.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'工业机械品牌也卖鞋？这双叫Cat的靴子到底什么来头？',
			p:'硬核级Cat Colorado经典不退潮！',
			read:'特别企划 | 62078458人阅读',
			num:214,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/03/04/09/019d07f117ffddbcd408181fff2cd960c5.jpg?imageView2/2/w/640/h/640/q/60',
			text:'打破时髦规则，MOCO一秒切换N种人格',
			p:'春季新品首发，年度最大力度优惠券开抢→',
			read:'特别企划 | 30665225人阅读',
			num:381,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/02/26/13/01bd95a281f6fd2e3a6ec6b7595595b41b.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'留给你的压岁钱不多了，不要再惦记这些球鞋了！',
			p:'不如拿来买这些刚需束脚裤',
			read:'买物 | 77250人阅读',
			num:52,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img12.static.yhbimg.com/article/2019/02/21/17/026c34e69255ff024e3733b473eddab7f7.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'亮色斜挎包，是开春最不能少的一抹色彩！',
			p:'既是实用必需品又是搭配神物！',
			read:'买物 | 31836人阅读',
			num:37,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img11.static.yhbimg.com/article/2019/02/21/15/01475aa087a2b78d465d32f6e42b7f7fc4.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'还有比现在的温度更适合穿校服卫裤的吗？',
			p:'又到了该穿卫裤的季节啦！',
			read:'买物 | 27365人阅读',
			num:38,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/02/19/16/01083a2b829020ecfbc9e91f2820205f36.jpg?imageView2/2/w/640/h/640/q/60',
			text:'Supreme都在用的这个元素，你怎么能没有？！',
			p:'买不到Supreme，但你可以买到这个元素！',
			read:'买物 | 25104人阅读',
			num:36,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img11.static.yhbimg.com/article/2019/02/20/15/01e28fb47e2a98a30b6ac0484acfb2e94c.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'开春了，就是想要一双训练老爹鞋！',
			p:'比普通老爹鞋更复古！',
			read:'买物 | 40599人阅读',
			num:41,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		},
		{
			img:'//img11.static.yhbimg.com/article/2019/03/01/17/01c39145782e5a619ed68a9e6c8424daea.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'男生现在都喜欢这种鲜嫩多汁的工装小姐姐？',
			p:'百搭潮流帆布包助你立马get工装风女友！',
			read:'买物 | 53131人阅读',
			num:51,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png'
		}
	]
	
  res.send(arr)
});

//上新页面内容
router.get('/strSx', function(req, res, next) {
	var arr=[
		{
			img:'//img13.static.yhbimg.com/article/2019/07/01/10/028d9f8cbcff9daf8b2235d67a4f2c291b.jpg?imageView2/2/w/640/h/640/q/60',
			text:'潮流课堂 | 在YO!COFFEE.快闪店，感受手冲咖啡的魅力',
			p:'6.26~7.25 YO!COFFEE.快闪店登陆YOHO!STORE！',
			read:'YOHO!STORE | 2063人阅读',
			num:31,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/06/17/10/01fcd6dde803b80a1fff33fd35f71c4dfc.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'POP-UP STORE | 在吗？黄明昊在线q你',
			p:'QQ20周年强势回忆杀来了！',
			read:'YOHO!STORE | 1570人阅读',
			num:33,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/06/17/10/0112f7d4e0114502c5ecb338c1f74a4bdb.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'POP-UP STORE | 塔卡沙和大力水手联名来了！',
			p:'快来领取你的童年男神！',
			read:'YOHO!STORE | 2594人阅读',
			num:35,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/05/29/19/0173b75066c512d830b234edd644b551e3.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'拼接元素，衔接创意与实穿|点击签收你的新衣柜',
			p:'拼接',
			read:'BLK | 30219人阅读',
			num:52,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/04/27/17/020421a25467da2f075b6aa43f0426e056.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'C2H4 LA 拼接贴袋西装',
					money:'2649.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/02/24/13/02c3df99ac8d529260ca6085564238454d.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'BALENCIAGA  TRIPLE S NUBUCK RESILLE DOUBLE MOUSSE BICOLORE',
					money:'5719.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/26/16/0251a89f0f65b19f3638eef19a69b5dd38.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'C2H4 LA 圆领拼接短袖T恤',
					money:'769.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/05/02/10/01eb55f6601ef88eec56289de3a1b71f1e.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Rick Owens 拼接撞色牛仔裤',
					money:'4339.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/02/10/0299591864e3cbd99aa604a5f4da915728.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'HUMAN MADE 拼色贝雷帽',
					money:'759.00'
				}
				
			]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/05/17/16/0195272f0037423a7cb582d902f2a3031b.jpeg?imageView2/2/w/640/h/640/q/60',
			text:'A Date With Miserable Faith | 痛仰乐队 舞台背后的另一面',
			p:'痛仰乐队专访',
			read:'BLK | 126006人阅读',
			num:76,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[]
		},
		{
			img:'//img11.static.yhbimg.com/article/2019/05/28/12/014aa51cae233f6fdb59924d6fa0b178c4.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'升级基本款 | 查看文章完成你的穿搭段位进阶',
			p:'基本款',
			read:'BLK | 25115人阅读',
			num:44,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/04/26/16/0195600921df7fb1c1d4ca10179432459a.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'C2H4 LA 圆领拼接短袖T恤',
					money:'769.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/04/30/21/019a3ac16844b30698ebcabfc7ac3284b1.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Rick Owens 黑色长袖衬衫',
					money:'2829.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/04/18/10/016d48c6daa8faff35709fe9f63c04d1db.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Maison Margiela  纯色简约长袖衬衫',
					money:'3389.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/06/26/10/026654430e52f4b53457b7d9c686c2950a.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Rick Owens DRKSHDW 黑色连帽宽松开襟卫衣',
					money:'3309.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/01/30/11/020e46bb12fdbf23e1b34a3495bb6e4f21.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'PALM ANGELS  黑色LOGO短袖T恤(带胸针）',
					money:'1915.00'
				}
				
			]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/05/27/16/0142c156b7040f6ad0d11e3f0fe17b8629.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'酷女孩的穿搭灵感 | 找到匹配你的专属风格',
			p:'酷女孩穿搭灵感',
			read:'怎么穿 | 55595人阅读',
			num:46,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img11.static.yhbimg.com/goodsimg/2018/03/04/15/01ccef483ba3689c8bc10eb3aa5f3096a3.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MM6 Maison Margiela 条纹阔腿休闲裤',
					money:'1129.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/01/30/14/0134d726b1e854f128641f4699c8f5b9d5.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'PALM ANGELS 拼色针织运动裤',
					money:'2845.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/05/22/16/02c87633db95de8b4ae7f216945a150d36.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'ETUDES STUDIO LOGO运动短裤',
					money:'1579.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/18/18/0233f7b0eafa6007686bd69d729401ba1f.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'REPRESENT  FLAMING CAR印花短袖T恤',
					money:'639.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/02/10/02b9f45575c8d49dd0fb01d6ed756be145.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'UNDERCOVER 猫咪卡通短袖T恤',
					money:'1539.00'
				}
				
			]
		},
		{
			img:'//img11.static.yhbimg.com/article/2019/05/23/12/0147f285672054ea43ea9cb13c00bbff1f.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'宽松裁剪，以阔腿裤解放身体 | 点击挑选你的阔腿裤',
			p:'阔腿裤',
			read:'BLK | 18533人阅读',
			num:48,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/05/29/16/01898c0066dc28b8a5f5401fbca5fa0ed3.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'J.W.ANDERSON 褶皱拼接阔腿休闲裤',
					money:'4889.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2018/11/01/14/02c840d4782e85134c42644d34a1b8895e.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'SANKUANZ  纯色休闲阔腿裤',
					money:'2959.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/04/24/15/021b9c4cb04747aa3b0993c63ab01fcb88.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'SUNNEI  条纹裤脚阔腿牛仔裤',
					money:'1929.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2018/11/01/16/02ac96b41031a413f42cdb22498bacd7a7.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'SANKUANZ  纯色休闲阔腿裤',
					money:'2959.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/05/02/17/02e197b03db2105976ee4258ebe887609a.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'SANKUANZ  纯色休闲阔腿裤',
					money:'2959.00'
				}
				
			]
		},
		{
			img:'//img11.static.yhbimg.com/article/2019/05/21/18/01b7d6cb143868049ebea011344e04f2d5.jpg?imageView2/2/w/640/h/640/q/60',
			text:'牛仔元素的5种玩法 | 点击查看经典元素多变样式',
			p:'丹宁',
			read:'BLK | 17196人阅读',
			num:39,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/02/11/14/01546c5c84ddf0e09f6822a26b04301c4a.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MSGM   字母印花牛仔衬衫',
					money:'2229.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/04/26/10/01c1d49c0360d29c3707f841d4b3ddf11a.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MM6 Maison Margiela 字母浅色镂空夹克',
					money:'4999.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/05/02/10/01eb55f6601ef88eec56289de3a1b71f1e.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Rick Owens 拼接撞色牛仔裤',
					money:'4339.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2018/12/10/14/01ba71c19ef017ac1ba7a4c034261ca30b.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MISBHV 个性印花牛仔夹克',
					money:'1819.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2019/04/24/15/021b9c4cb04747aa3b0993c63ab01fcb88.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'SUNNEI  条纹裤脚阔腿牛仔裤',
					money:'1929.00'
				}
				
			]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/05/20/09/0158b40019fffa7fa2d3a513099174d029.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'玩味设计打破传统！MSGM POP-UP STORE正式来袭！',
			p:'MSGM来了！',
			read:'YOHO!STORE | 2608人阅读',
			num:38,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[]
		},
		{
			img:'//img13.static.yhbimg.com/article/2019/05/14/12/0267ad937574186e93896acb1383d60833.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'Back to 1990s | 在新时代演绎锐舞青年经典造型',
			p:'锐舞青年穿搭指南',
			read:'BLK | 12901人阅读',
			num:36,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/02/11/15/02f143c7432f0b80034b2b193d9f08d749.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MARCELO BURLON  CONFIDENCIAL STRIPES SHIRT',
					money:'4099.00'
				},
				{
					image:'src="//img11.static.yhbimg.com/goodsimg/2018/09/25/12/011d18fdffb5e9d878c95c42994a9b9035.jpg?imageView2/2/w/106/h/138/q/60/format/webp"',
					titles:'JINNNN SINGLE系列银色边框太阳镜',
					money:'1680.00'
				},
				{
					image:'//img12.static.yhbimg.com/goodsimg/2018/04/14/10/02af04782ad62f20c43592ff7597a29996.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'Cody Sanderson  Cut Out Opposing Star',
					money:'13549.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/04/24/16/02ee9e947e5863d36e6dc8278f963bc21f.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'SUNNEI 黄白条纹短袖衬衫',
					money:'2609.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2018/11/02/08/0190722559a9325d45854f0c19a41885f0.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'3.1 Phillip Lim  拼色牛仔短裤',
					money:'1179.00'
				}
				
			]
		},
		{
			img:'//img13.static.yhbimg.com/article/2019/05/07/10/02503f8ac0e51b274c2c6f070f76ce9436.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'错过Coachella，还有这份全宇宙时髦音乐节指南',
			p:'音乐节指南',
			read:'BLK | 12819人阅读',
			num:40,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/02/11/15/02f143c7432f0b80034b2b193d9f08d749.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MARCELO BURLON  CONFIDENCIAL STRIPES SHIRT',
					money:'4099.00'
				},
				{
					image:'//img10.static.yhbimg.com/goodsimg/2019/04/11/17/0186b2496a65c1550fa21b789d86c134a6.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'REPRESENT 做旧条形码印花牛仔夹克',
					money:'1389.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/03/22/12/02c21142113c292a922bae78f8fad7a8cd.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'UNRAVEL PROJECT 绑带磨毛牛仔短裤',
					money:'3389.00'
				},
				{
					image:'//img13.static.yhbimg.com/goodsimg/2019/03/16/09/02f41372b6cdac1092c3668e0d0c32c576.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'ETUDES STUDIO 刺绣LOGO渔夫帽',
					money:'739.00'
				},
				{
					image:'//img11.static.yhbimg.com/goodsimg/2019/02/18/13/01b261ad3076c70e0c871164da8f0fc825.jpg?imageView2/2/w/106/h/138/q/60/format/webp',
					titles:'MSGM  LOGO印花休闲鞋（女码）',
					money:'4050.00'
				}
				
			]
		},
		{
			img:'//img12.static.yhbimg.com/article/2019/05/07/16/0289d12344fdc398da27f82fe2c4d924b7.jpg?imageView2/2/w/640/h/640/q/60',
			text:'上身国潮见证真正的崛起！国潮崛起主题空降YOHO!STORE',
			p:'国潮崛起',
			read:'YOHO!STORE | 3923人阅读',
			num:31,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[]
		},
		{
			img:'//img10.static.yhbimg.com/article/2019/05/06/18/01068287fc12a1d79f438f825a285a96f9.jpg?imageView2/2/w/640/h/640/q/60/format/webp',
			text:'POP-UP丨艺术与自然的完美融合 Vault by Vans X Ralph Steadman POP-UP STORE来了！',
			p:'Vault by Vans X Ralph Steadman POP-UP STORE来了！',
			read:'YOHO!STORE | 3234人阅读',
			num:44,
			imgs:'http://127.0.0.1:3000/images/stroll/dianzan.png',
			child:[]
		}
	]
	
  res.send(arr)
});
//资讯
router.get('/ziXun', function (req, res, next) {
	var arr = [
	  {
		img: 'http://img02.yohoboys.com/contentimg/2019/07/11/15/02a7c2b82c1aae0d8680882472829030fa.jpg?imageView2/1/w/640/h/275/q/60',
		titles: '“如果他不是周杰伦，他就是那种会被我揍的篮球队友。”',
		text: '有留意周杰伦ins账号的朋友，一定发现最近的他频频上传#打球视频#，还入手16800港币的天价Chanel篮球！周董对于篮球的热爱，一点也不亚于豪车和球鞋。作为狂热篮球爱好者，周董的球技到底是个什么水平？今天的文章就来不正经地剖析一下吧！ 杰伦和篮球的缘分 热爱值：❤️❤️❤️❤️❤️2000年，周',
		month: '07月11',
		time: '15:50'
	  },
	  {
		img: 'http://img01.yohoboys.com/contentimg/2019/07/11/10/011c318eac5cca0317a92fffce0955256e.jpeg?imageView2/1/w/640/h/275/q/60',
		titles: '这个特立独行的品牌如何紧紧抓住当代年轻人的心?丨专访塔卡沙主理人',
		text: '对于塔卡沙 TYAKASHA 这个名字，相信很多人都不会陌生。毕竟作为一个覆盖多个年龄层次的服装品牌，无论是各大社交媒体的热度，还是官方线上店铺的销量，TYAKASHA 都在国内一众潮流服饰品牌中位列前茅。或许很多人都不知道，TYAKASHA 主理人童云并不是服装科班出身，亦曾经在一家美国公司任职插',
		month: '07月11',
		time: '10:05'
	  },
	  {
		img: 'http://img01.yohoboys.com/contentimg/2019/07/11/10/01524daa4d677bdadcfd18277b6a063faa.jpg?imageView2/1/w/640/h/275/q/60',
		titles: '壁纸丨长长长长腿姐妹花，笑容感染力满分分分分！',
		text: 'IMAGE CREDIT INSTAGRAM@mocean__',
		month: '07月11',
		time: '10:05'
	  },
	  {
		img: 'http://img02.yohoboys.com/contentimg/2019/07/10/16/0205911ebd89393423dd2d4ed7c67b7a98.jpg?imageView2/1/w/640/h/275/q/60',
		titles: '潮流圈「绳」操作，到底有多神？',
		text: '关于酷女孩与绳结如何在炎炎夏日正确相爱：在梦里当一枚乘风破浪的水手？又或者，解锁这 4 个“绳结爱好者”无法绕道的潮流品牌！没错，请吃下这份正经安利～001  Ottolinger   你也许有件自己最喜欢的T恤，它不能再穿了 … 试下把它拆开：）热衷搞破坏的 Ottolinger 首先是个柏林牌子',
		month: '07月11',
		time: '16:40'
	  },
	  {
		img: 'http://img02.yohoboys.com/contentimg/2019/07/10/16/029ddf8bf55bd3f5024ba23bf91771b136.jpg?imageView2/1/w/640/h/275/q/60',
		titles: '潮闻快食丨HUMAN MADE 发布 FW19 LOOKBOOK，黑红 AJ11 全新实物图曝光！',
		text: ' HUMAN MADE FW19 LOOKBOOK 发布 日前，由 NIGO® 主理的潮流品牌 HUMAN MADE 发布了 FW19 的 LOOKBOOK 。全新一季的产品延续了 HUMAN MADE 的风格，心形的 Logo 依旧是最大的亮点，为大家带来连帽卫衣，夹克、西服等单品。同时，这次还加',
		month: '07月11',
		time: '16:35'
	  },
	  {
		img: 'http://img02.yohoboys.com/contentimg/2019/07/09/16/029fc820b91a3ddd73ff5e877099c9afb4.jpg?imageView2/1/w/640/h/275/q/60',
		titles: '潮闻快食 | Yohji Yamamoto打造香水系列！MADNESS x Teva全新联名登场',
		text: ' Yohji Yamamoto 打造香水系列Nicholas Hlobo、Alex Israel、Tschabalala Self 以及 Jonas Wood 六位顶尖当代艺术家的合作打造，并重新演绎经典的 Capucines 手袋。近日，日本时装品牌 Yohji Yamamoto 正式推出「Yohj',
		month: '07月11',
		time: '16:35'
	  },
	  {
		img: 'http://img02.yohoboys.com/contentimg/2019/07/09/15/0225f9c146c3d2106babd4c51c4d7bf48a.jpg?imageView2/1/w/640/h/275/q/60',
		titles: '二次元轰炸时代，你的二次元初恋是谁？',
		text: '真实地说，我一个几乎不看动画片的人，在一个星期内进了两次电影院，观影对象都是——动画片。一部是《千与千寻》、一部是《玩具总动员4》，前者是独自走进电影院回味童年，后者是朋友圈刷屏太多只想跟风。当然是好看的，认识了叉叉、潇洒公爵等可爱的小宝贝。二次元是真的火，作为已经承担起社会责任的大人，动画片不是只',
		month: '07月11',
		time: '15:35'
	  },
	  {
		img: 'http://img01.yohoboys.com/contentimg/2018/07/09/10/01768e7bdd929a6e9e5c91c40241d13287.jpg?imageView2/1/w/640/h/275/q/60',
		titles: '超高仿Supreme配件连“潮流警察”都没有办法？| Real or Fake',
		text: '在上一期的《潮流警察出动！市面上10件Supreme高仿配件真假大对决（视频+多图）》中，Kelvin和咸旦已率先给大家对比了10款大热Supreme高仿配件中的6款，而在这一期中，我们将会带来另外4款的真假对比，其中有两款是仿真度90%以上的级别，如果不细心观察，大家分分钟会受骗买到假货！第二期的',
		month: '07月09',
		time: '10:35'
	  },
	  {
		img: 'http://img02.yohoboys.com/contentimg/2019/07/09/13/027aecc8fea116b2b0ddfb0dbb69e77932.jpeg?imageView2/1/w/640/h/275/q/60',
		titles: '顺风顺水的卡戴珊，这一次扑街了！',
		text: '这两周金卡戴珊很忙。自己朝思暮想了十五年的塑身内衣品牌 Kimono 终于面世了。品牌会为不同肤色、不同体型的女性打造贴身衣物。尽管已经十分小心翼翼，但细心的观众还是发现：把「和服」作为内衣品牌名称的卡戴珊是不是「辱日」了？一时间日本消费者表达了强烈的不满，在网络上发起了实名抵制卡戴珊的活动。无论这',
		month: '07月09',
		time: '13:35'
	  },
	  {
		img: 'http://img01.yohoboys.com/contentimg/2019/07/09/10/01eb49b1e22dd60bd851bf5e245372c904.jpg?imageView2/1/w/640/h/275/q/60',
		titles: '别让你的夏天死气沉沉，来点冰激凌色，让回头率飙升！',
		text: '在刚刚落幕的 2020 春夏大秀里，从服装到Sneaker，一改往日冰冷色调，从薰衣草紫、水蓝、柠檬黄到腮红粉...各种冰激凌色调，也太垂涎可口了吧~各大秀场仿佛在拿着扩音器呼喊，“接下来你们可以穿冰激凌色系了，什么黑白灰统统甩掉，可爱起来就完事了~”。国外潮流 ICON 马上响应这波流行趋势，在这',
		month: '07月09',
		time: '10:15'
	  },
	  {
		img: 'http://img01.yohoboys.com/contentimg/2019/07/08/16/0144caac6f8e93ac46e4eaaea5965d57e1.jpg?imageView2/1/w/640/h/275/q/60',
		titles: '脸上长痣是不是加分项？这些“优痣”青年证明给你看！',
		text: '不知道你有没有一种感觉，随着年龄增大，身上的痣越来越多……作为20岁+的酷女孩们，脸上、身上都免不了有那么几颗甚至十几颗痣！虽然这不是一个必然规律，但也算是一个普遍现象了。从医学角度上来说，痣可以分为三种：皮内痣、交界痣、复合痣，这就关系到哪些痣可以“治”，哪些痣又不能碰的问题了。关于这一点，Zoy',
		month: '07月08',
		time: '16:15'
	  },
	  {
		img: 'http://img01.yohoboys.com/contentimg/2019/07/08/13/012f348d35011826bb4b42431f08b3a32d.jpeg?imageView2/1/w/640/h/275/q/60',
		titles: '只需0元，我们改装了一双媲美「The Ten」的匡威Chuck 70 | 球鞋大改造',
		text: '2017-2019年，可以说是球鞋定制行业迎来丰收的年份。一众定制大神如The Shoe Surgeon早已如日方中，经它手定制的球鞋成为媒体报道的焦点，在鞋市上也是有市有价的狠货；运动品牌开始在球鞋定制上大造文章，线下展会与消费者互动的Event更比比皆是。不知不觉，球鞋定制已成为球鞋文化中重要的',
		month: '07月08',
		time: '13:40'
	  },
	  {
		img: 'http://img01.yohoboys.com/contentimg/2018/07/08/09/01ebfd2f69ac724f59bebf24a154939a1a.jpg?imageView2/1/w/640/h/275/q/60',
		titles: '穿上这件HUMAN MADE 短袖，才是夏天的顶配！',
		text: '细心的老粉丝肯定有发现YOHO!BUY有货其实有很多敲有来头的品牌，HUMAN MADE就是其中之一啦~今天小编就来聊聊这个潮流巨头都爱的品牌吧！毕竟穿上HUMAN MADE短袖，才是夏天的顶配！01# HUMAN MADE 什么来头 #按照惯例还是先放上视频，老铁们赶紧点开了解一下HUMAN MA',
		month: '07月08',
		time: '09:12'
	  },
	  {
		img: 'http://img01.yohoboys.com/contentimg/2019/07/08/11/013b9250948058c7234418a071b3242df8.jpg?imageView2/1/w/640/h/275/q/60',
		titles: '潮流板报 | 潮味十足的电饭煲，你会想要吗？',
		text: '叮咚，本周潮流板报奉上！⬇️⬇️⬇️“I’D RATHER STAY HOME”I am Telling You： 在所有人都以为 Anti Social Social Club 已“死”的时候，他们今年却动作频频。虽然发任何官宣消息都会被底下的评论骂个底朝天，但是 ASSC 的新品却一直没断过。撇',
		month: '07月08',
		time: '11:12'
	  },
	  {
		img: 'http://img02.yohoboys.com/contentimg/2019/07/08/09/0226a80f0378d948cc3d5b8402e790b8f6.jpg?imageView2/1/w/640/h/275/q/60',
		titles: '中国创造力 | 曾经的国货之光，今番回潮',
		text: '2019年注定是国民品牌元年，老字号品牌纷纷成为潮人的心头好。中国元素亦影响着各行各业，在时尚届，愈来愈多的设计师以中国文化为设计元素，制造一个又一个的「网红」产品和抢购潮，甚至引领新的潮流，令人惊喜。国内开花，国外「更香」，在过去的一周，Pitti Immagine Uomo男装周上，中国最受瞩目',
		month: '07月08',
		time: '09:32'
	  },
	  {
		img: 'http://img02.yohoboys.com/contentimg/2019/07/08/10/0272ace2882609f6b194abbc303877086c.jpg?imageView2/1/w/640/h/275/q/60',
		titles: 'SNKR Girls｜可爱在性感面前一文不值？但今天的球鞋女生们两个都有！7.1-7.7',
		text: '注意！注意！注意！[6.24 - 6.30 ]得奖的 SNKR Girls要揭晓了！谨记不要盗图来投稿哦！另外，我们发现个别选手存在刷票行为，将取消资格把名次顺延，请保持诚实～[ 6.24-6.30]中获奖的SNKR Girls分别是：第一名：23号Kylee1676票第2、3名分别是：18号陈丽热',
		month: '07月08',
		time: '10:35'
	  },
	  {
		img: 'http://img01.yohoboys.com/contentimg/2019/07/05/17/01262e1956153bb6e663f3166195cfbf6d.jpg?imageView2/1/w/640/h/275/q/60',
		titles: '潮闻快食 | adidas YEEZY BOOST 350 V2 迎来全新配色，BAPE® 发布全新 2019 AW系列型录',
		text: '潮闻快食 | adidas YEEZY BOOST 350 V2 迎来全新配色，BAPE® 发布全新 2019 AW系列型录',
		month: '07月05',
		time: '17:35'
	  },
	  {
		img: 'http://img02.yohoboys.com/contentimg/2019/07/05/17/02a7d57eadefcb16da89e6ac04b201b120.jpg?imageView2/1/w/640/h/275/q/60',
		titles: '憋了那么久，终于有人来吐槽时尚编辑了。',
		text: '“你又要搞事情了是吧？”“是的，我又来搞事情了。”😊老板说我今天这个选题是要“搞事情”，是的没错，最近选题创意匮乏，我想了很久准备把这个想做又一直不太敢做的话题拿出来遛遛。之前不敢写是因为它很容易“得罪”一些人，又很容易“害了”一些人……所以，今天参与这个选题的，都是我的真朋友，都是时尚圈的真勇士。',
		month: '07月05',
		time: '17:23'
	  },
	  {
		img: 'http://img01.yohoboys.com/contentimg/2019/07/05/17/018d411d14ccf803209e8f0ca921df52fd.jpeg?imageView2/1/w/640/h/275/q/60',
		titles: '现在长得跟潮牌似的LV、DIOR，怎还卖那么贵？',
		text: '最近不知道大家有没有和我一样的疑惑，看看奢侈品牌突然和八竿子打不着的街头艺术家合作，我脑袋里都会冒出”？？！”。然后再看看最近该品牌的业绩报表，立刻就秒懂了。因为再不搞点噱头，可能真的要倒闭了。论噱头和圈钱，潮牌们真的要叫LV一声“爸爸”。最近LV不仅悄悄换了Logo，也在不知不觉中从那个“只有中国',
		month: '07月05',
		time: '17:16'
	  },
	  {
		img: 'http://img01.yohoboys.com/contentimg/2019/07/04/13/0174f9bc9d17584364d595fdf749cdd438.jpg?imageView2/1/w/640/h/275/q/60',
		titles: '潮闻快食 | LV发布古龙水系列,LACOSTE发布COURTLINE动感撞线系列',
		text: 'Louis Vuitton 发布 2019 古龙水系列Louis Vuitton 调香大师 Jacques Cavallier Belletrud 以珍稀的高品质天然原料调制出太阳之歌（Sun Song）、绿园（Cactus Garden）和午后之泳（Afternoon Swim）。仿若动身前往夏日',
		month: '07月04',
		time: '13:16'
	  }
	]
	res.send(arr)
  })
  

// 为你优选新品
router.get('/foryou', function(req, res, next) {
	var arr = [
		{
			img: '//img13.static.yhbimg.com/goodsimg/2018/11/20/16/02a053b9ac0e007b2bca75d6aa5c0f89da.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'RED CHARCOAL x  Staple  黑灰麂皮绒拼接夹克',
			price: '999.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2019/05/17/17/01da7a7bb5c964ae917c2afd9a711429d6.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: '【有货独家】THE HUNDREDS X COMBACK 迷彩翻盖双肩包',
			price: '468.00'
		},
		{
			img: '//img12.static.yhbimg.com/goodsimg/2019/03/14/12/028ebe39431836b826532fcac0ba120853.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'Converse One Star Academy 低帮休闲鞋',
			price: '639.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2019/03/23/14/0136f7e751fe3fea4e20f0a3e77386b97d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'MADNESS x WIND AND SEA PRINT TEE',
			price: '499.00'
		},
		{
			img: '//img12.static.yhbimg.com/goodsimg/2019/05/15/11/02fb8d02ca339adbb7739d193c9b1f639d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'STARTER 米原康正联名款短袖T恤',
			price: '499.00'
		},
		{
			img: '//img13.static.yhbimg.com/goodsimg/2019/03/16/13/02fb723b31f3a3bde7cb8a9cfaeb495f66.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'VANS  SK8-Hi Bricolage LX【VAULT高端解构主义】',
			price: '980.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2018/04/18/18/01c9f34c8faef8aa075e2261582ac0878e.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'YOHO!GIRL x Randomevent 拼色提花图案毛衣',
			price: '499.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2018/12/07/17/0161351c99dfc5dd6f1293d1ad972fca57.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'SMG 【林俊杰同款】拼接羊羔绒夹克',
			price: '1499.00'
		},
		{
			img: '//img12.static.yhbimg.com/goodsimg/2018/12/19/14/02afc6ece2faad7126eb00be32382e78e1.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'Dickies x YOHO! 限定合作款连帽卫衣',
			price: '399.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2019/03/21/14/015a62e71b16bf364fb9971036a6ee98ea.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'initial gentleman x 熊谷隆志 联名款 印花短袖T恤  黑色',
			price: '690.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2017/07/30/16/01aa908b40b136c0a8d8b87dc6875d6c7c.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'BLACKJACK  漫威经典印花燕尾大衣【两色可选】',
			price: '569.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2019/05/28/10/016d010758a11357ae23551ff18589b083.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'FOOT INDUSTRY 透气网面拼接运动鞋',
			price: '520.00'
		},
		{
			img: '//img12.static.yhbimg.com/goodsimg/2019/05/28/17/024ff2926655c8840290025bfa5a4b83f8.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: '李宁 韦德系列ALL CITY全城7篮球运动鞋',
			price: '999.00'
		},
		{
			img: '//img12.static.yhbimg.com/goodsimg/2019/03/04/15/02264bb3694ca319f9cde285203527f226.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'Kappa x WHIZ 条纹撞色运动裤',
			price: '1599.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2019/01/24/11/012f70a29de421de990f13e352ea1a9c6b.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'Reebok Instapump Fury x 麦兜新年特别款 休闲运动鞋',
			price: '714.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2019/05/09/10/0185a688366bc76d3191cc4eb539530ee2.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'Skullcandy 骷髅头 VENUE无线蓝牙头戴式耳机  S6HCW-M687',
			price: '1280.00'
		},
		{
			img: '//img12.static.yhbimg.com/goodsimg/2018/08/18/11/026fac9f7f71ece90cc29eb1eef9f9385a.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'Ron English x APPortfolio x made by monsters Melty Ronnnie Rabbbit 粉红版',
			price: '2480.00'
		},
		{
			img: '//img13.static.yhbimg.com/goodsimg/2018/08/18/15/02f75635e3368b2c7a2e2674e594b3d308.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'Hanes x karla The Original 纯白色T恤',
			price: '299.00'
		},
		{
			img: '//img10.static.yhbimg.com/goodsimg/2018/09/30/19/01f56298b39caeb6a830e8ef6a566f501e.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'GUESS×Hello Kitty亚洲联名限量胶囊系列  男女款LOGO印花短袖T恤',
			price: '399.00'
		},
		{
			img: '//img10.static.yhbimg.com/goodsimg/2018/03/29/10/015f1016979ead29898ecebd9c0dc00289.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'Eone Timepieces 南方有乔木同款  触感磁力防水 中性时尚腕表BR-KU 酷MA萌定制版',
			price: '3010.00'
		},
	]
    res.send(arr)
});


// 为你优选新品
router.get('/foryou', function(req, res, next) {
	var arr = [
		{
			img: '//img13.static.yhbimg.com/goodsimg/2018/11/20/16/02a053b9ac0e007b2bca75d6aa5c0f89da.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'RED CHARCOAL x  Staple  黑灰麂皮绒拼接夹克',
			price: '999.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2019/05/17/17/01da7a7bb5c964ae917c2afd9a711429d6.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: '【有货独家】THE HUNDREDS X COMBACK 迷彩翻盖双肩包',
			price: '468.00'
		},
		{
			img: '//img12.static.yhbimg.com/goodsimg/2019/03/14/12/028ebe39431836b826532fcac0ba120853.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'Converse One Star Academy 低帮休闲鞋',
			price: '639.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2019/03/23/14/0136f7e751fe3fea4e20f0a3e77386b97d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'MADNESS x WIND AND SEA PRINT TEE',
			price: '499.00'
		},
		{
			img: '//img12.static.yhbimg.com/goodsimg/2019/05/15/11/02fb8d02ca339adbb7739d193c9b1f639d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'STARTER 米原康正联名款短袖T恤',
			price: '499.00'
		},
		{
			img: '//img13.static.yhbimg.com/goodsimg/2019/03/16/13/02fb723b31f3a3bde7cb8a9cfaeb495f66.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'VANS  SK8-Hi Bricolage LX【VAULT高端解构主义】',
			price: '980.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2018/04/18/18/01c9f34c8faef8aa075e2261582ac0878e.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'YOHO!GIRL x Randomevent 拼色提花图案毛衣',
			price: '499.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2018/12/07/17/0161351c99dfc5dd6f1293d1ad972fca57.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'SMG 【林俊杰同款】拼接羊羔绒夹克',
			price: '1499.00'
		},
		{
			img: '//img12.static.yhbimg.com/goodsimg/2018/12/19/14/02afc6ece2faad7126eb00be32382e78e1.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'Dickies x YOHO! 限定合作款连帽卫衣',
			price: '399.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2019/03/21/14/015a62e71b16bf364fb9971036a6ee98ea.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'initial gentleman x 熊谷隆志 联名款 印花短袖T恤  黑色',
			price: '690.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2017/07/30/16/01aa908b40b136c0a8d8b87dc6875d6c7c.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'BLACKJACK  漫威经典印花燕尾大衣【两色可选】',
			price: '569.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2019/05/28/10/016d010758a11357ae23551ff18589b083.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'FOOT INDUSTRY 透气网面拼接运动鞋',
			price: '520.00'
		},
		{
			img: '//img12.static.yhbimg.com/goodsimg/2019/05/28/17/024ff2926655c8840290025bfa5a4b83f8.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: '李宁 韦德系列ALL CITY全城7篮球运动鞋',
			price: '999.00'
		},
		{
			img: '//img12.static.yhbimg.com/goodsimg/2019/03/04/15/02264bb3694ca319f9cde285203527f226.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'Kappa x WHIZ 条纹撞色运动裤',
			price: '1599.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2019/01/24/11/012f70a29de421de990f13e352ea1a9c6b.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'Reebok Instapump Fury x 麦兜新年特别款 休闲运动鞋',
			price: '714.00'
		},
		{
			img: '//img11.static.yhbimg.com/goodsimg/2019/05/09/10/0185a688366bc76d3191cc4eb539530ee2.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'Skullcandy 骷髅头 VENUE无线蓝牙头戴式耳机  S6HCW-M687',
			price: '1280.00'
		},
		{
			img: '//img12.static.yhbimg.com/goodsimg/2018/08/18/11/026fac9f7f71ece90cc29eb1eef9f9385a.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'Ron English x APPortfolio x made by monsters Melty Ronnnie Rabbbit 粉红版',
			price: '2480.00'
		},
		{
			img: '//img13.static.yhbimg.com/goodsimg/2018/08/18/15/02f75635e3368b2c7a2e2674e594b3d308.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'Hanes x karla The Original 纯白色T恤',
			price: '299.00'
		},
		{
			img: '//img10.static.yhbimg.com/goodsimg/2018/09/30/19/01f56298b39caeb6a830e8ef6a566f501e.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'GUESS×Hello Kitty亚洲联名限量胶囊系列  男女款LOGO印花短袖T恤',
			price: '399.00'
		},
		{
			img: '//img10.static.yhbimg.com/goodsimg/2018/03/29/10/015f1016979ead29898ecebd9c0dc00289.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			content: 'Eone Timepieces 南方有乔木同款  触感磁力防水 中性时尚腕表BR-KU 酷MA萌定制版',
			price: '3010.00'
		},
	]
    res.send(arr)
});
// 推荐
router.get('/cateListright', function(req, res, next) {
	var arr=[
		{
			img:'//img11.static.yhbimg.com/goodsimg/2019/04/18/18/0111b28b41fd8c8c01179d35697537b1e2.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'外套'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/03/18/11/01c74e9315b0ebcf44c15fb58c62853bdf.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'风衣'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2016/08/24/17/02edbc87c4fd7184a60bca0f86251d6037.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'皮靴'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/05/13/15/02254099da59c40ef189dbed8832a89dd6.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'包包'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/07/04/11/013877dc659ea53a549699b692b19b89d9.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'运动鞋'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/03/04/21/02379d4049a5c784261964b5bf2e6fe223.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'毛衣'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2019/06/22/10/0113eb11a1cf862e300705d5e5a32f8aa4.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'男裤'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/06/17/20/02cea5de759c6a3f4ef8d5979b4ff4da12.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'套装'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/05/23/14/013b5ebc0fa715a6b9512f5adcdc5c4f63.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'帽子'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/05/16/09/02961e6ff89b61f07bfcbf6e03ced25419.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'背心'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/05/13/16/026dc1ff4762ecf4cc34d884c0dc953571.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'袜子'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/06/05/13/026f2007f529093eb14deafed94257ebcc.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'生活用品'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2016/05/30/03/01519ca958c7549b195250736ae927a93d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'太阳镜'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/06/05/14/027f153f8db43f3e2da07dda44ab70cffd.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'夹克'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2018/12/29/19/01f2b5b69db7b235d380bf407fb8f2362e.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'家居服'
		}
	]
	
	
  	res.send(arr);
});

// T恤
router.get('/cateTx', function(req, res, next) {
	var arr=[
		{
			img:'//img11.static.yhbimg.com/goodsimg/2019/06/11/11/01616660eaea906141d603b86b32a81d66.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'TYAKASHA|男|女|TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款100-140浅紫色背心',
			price:'175',
			noprice: '198',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2019/06/11/11/011d36a94f922897075b5aac64d206e618.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'TYAKASHA|男|女|TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款100-140雾黄色短袖T恤',
			price:'140',
			noprice: '158',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/06/11/10/01b083855d5e111cd17dc3e640dff83867.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'TYAKASHA|男|女|TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款100-140深紫撞色短袖T恤',
			price:'148',
			noprice: '168',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/02086c8cd53780b66639cfafcc46073799.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'TYAKASHA|男|女|TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款100-140天蓝色短袖T恤',
			price:'140',
			noprice: '158',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/05/27/15/01c14879dd8db284e858852f5aa696fc73.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'kizzuruumu|男|女|kizzuruumu 男女童90-120码 运动撞色家居套装',
			price:'112',
			noprice: '139',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/05/22/11/0157dde408bfc092825128eee5a1851822.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'Buling Bubble|男|女|Buling Bubble 男女童90-130 趣味印花短袖T恤',
			price:'55',
			noprice: '258',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/06/11/10/013b31f2e8c1743cc2cbcfa21650567670.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'TYAKASHA|男|女|TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款100-140粉色短袖T恤',
			price:'140',
			noprice: '158',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/06/19/16/02b04f76001063ea680abcef7530592ce8.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'yiigoo 壹果|男|yiigoo 壹果 男童100-140码你好夏天无袖T恤',
			price:'129',
			noprice: '299',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2019/06/19/16/01fc273733ed669c3909ab0393ea1f6c86.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'yiigoo 壹果|男|女|yiigoo 壹果 潮童100-140码萌猫胖虎短袖衬衫',
			price:'121',
			noprice: '369',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/06/25/14/02c29375f66bbc5c70ec723be5ad05f2cb.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:"EOEO's梨小闲|女|EOEO's梨小闲 女潮童100-130码 撞色字母印花运动套装",
			price:'121',
			noprice: '369',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/05/14/11/029a52981050566ea29d53aebfc8dd1091.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'MINI CHOC|女|MINI CHOC 女童110-150码趣味卡通印花衬衫',
			price:'239',
			noprice: '399',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/06/02/16/02b194b3c016f1915f01f5751685700add.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'boxboxbox|男|女|boxboxbox 女童110-130码 微生物印花荷叶边上衣',
			price:'168',
			noprice: '240',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/05/10/14/02cc21f6c4eb249513b6e16034079a7ca0.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'babyONE|女|babyONE 女潮童90-140码细格纹小飞袖棉质衬衫',
			price:'239',
			noprice: '399',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/07/02/14/022259340c1ae231671c021711071894cd.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'JUZI STORE|男|女|JUZI STORE 男女童80-130码 基本款字母印花衬衫',
			price:'386',
			noprice: '429',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/06/19/18/027db6cc496c60075e879c23cdfc676256.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'yiigoo 壹果|女|yiigoo 壹果 女童100-140码剔透小冰无袖森系娃娃衫',
			price:'129',
			noprice: '299',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/06/19/15/02125aae012c61f1a46866ff8d711f7970.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'yiigoo 壹果|女|yiigoo 壹果 女童100-140码海芋之恋娃娃衫',
			price:'129',
			noprice: '299',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/06/13/11/02320641a20590ba68e40e3c34127bbc41.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'SOYO舍予|男|女|SOYO舍予 潮童90-130 格纹印花短袖衬衫',
			price:'129',
			noprice: '159',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/05/10/14/02c84132d4002d8ff92f602f86b1466db4.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'babyONE|女|babyONE 女潮童90-140码细格纹小飞袖棉质衬衫',
			price:'159',
			noprice: '299',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2019/05/07/16/01b4433843e29ff79b8fac4f577992c664.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'SOYO舍予|男|女|SOYO舍予 潮童90-130 天丝牛仔衬衫',
			price:'159',
			noprice: '199',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/05/05/14/028b071c00f4d4addb2c54b4dfb5c015ba.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
			title:'yiigoo 壹果|女|yiigoo 壹果 女童100-140码萌妹柔柔娃娃衫',
			price:'129',
			noprice: '299',
			url:'/home',
			pic: 'http://127.0.0.1:3000/images/mine/lue.png'
		},

	]
  	res.send(arr);
});
 

//上衣
router.get('/cateListright1', function(req, res, next) {
	var arr=[
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/05/31/22/0263c86529f1773e966d133420767734b0.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'全部上衣'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/05/17/17/01c09235e8db6a868bd31d3c2356fc9f06.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'T恤'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/06/13/15/01698570adaec4c843ea7683fc687fc605.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'防风外套'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2019/06/19/15/0133437ec241f211ae0e85cc7138ff8073.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'衬衫'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/04/25/17/012b5eced513897c642ce12f585b993e39.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'夹克'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/04/11/18/0193da77b1f4bd6d72b9a79d722111ec8e.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'卫衣'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/06/30/15/02b31d5b1d5798bdde36ecb51b2b99486e.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'背心'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/03/04/14/01291e4215a941548e23647e77362f8989.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'大衣/风衣'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/03/04/17/02eeaee3db980c78c4422517f52bc0504d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'马甲'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2018/11/21/15/02c138905299362aa44103a4dcbb4c8be9.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'家居服'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/03/05/14/0266cb03ff838b6609f5d6b41cb1022045.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'毛衣/针织'
		},
		
	]
	
	
  	res.send(arr);
});
//裤装
router.get('/cateListright2', function(req, res, next) {
	var arr=[
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/06/11/11/01413013303f95867e609c6b09623458b5.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'休闲裤'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/05/17/17/02a384b67a8dc3f29d10235b938c30036f.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'短裤'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/03/05/14/02e24e7c4a206647842afca819702fe76e.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'运动裤'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/05/07/11/02c2e7df7da22dbee35e3c1e01d9388a62.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'牛仔裤'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/04/10/14/02ba023bbfda16f70a277f46411d721607.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'连体裤'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2017/11/01/16/022d674babd7d61f17cb8a81d9defc3a56.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'打底裤'
		},
		
	]
	
	
  	res.send(arr);
});
//鞋靴
router.get('/cateListright3', function(req, res, next) {
	var arr=[
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/06/28/17/02bcd14d96f790387caad3f247f8fe74ca.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'运动鞋'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2019/04/10/19/01f127a9d1d062779bbcd838c8e1fb2a72.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'凉鞋'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/07/03/17/02c2f692cdc81ea9051e67a7d5d8a35661.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'休闲鞋'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/07/04/15/02ac0ba21e1c7be77149ba4cf9a8ba556c.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'靴子'
		},
		
		
	]
	
	
  	res.send(arr);
});
//裙装
router.get('/cateListright4', function(req, res, next) {
	var arr=[
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/06/17/23/01c1ee3906b0711058f2d84a68e83e9bbc.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'连衣裙'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/06/25/13/024270c0c38e095f94142b6246fd747df3.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'半身裙'
		},
	]
  	res.send(arr);
});
//服饰
router.get('/cateListright5', function(req, res, next) {
	var arr=[
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/05/13/15/024f610f08c8aa46b26f806b37d1426023.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'袜子'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/05/22/13/023b46906ec59d965167dc2751bc24a4aa.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'帽子'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2019/06/03/18/0191b3275f94fef425996947ca3fee7f11.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'双肩包'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/02/21/10/02a7f09bb4e9551ff2ce03a17a0f2c27f5.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'单肩包'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2017/01/11/17/01a666a3a3812cf093c4acc3f3e15e4f33.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'太阳镜'
		},
		
		
	]
  	res.send(arr);
});
//有玩
router.get('/cateListright6', function(req, res, next) {
	var arr=[
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/05/13/14/02a8c315988b671f93a8e408f22eca1737.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'毛绒玩偶'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/05/29/09/0123d9b899193587f0ca749117bdd4f2e4.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'益智游戏'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/06/27/18/02eabf84d0008cc6f4f6c13c5be5575cf7.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'玩具模型'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2018/04/19/17/01a9e08ab39ae448eaa446d50c5fd381a7.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'生活用品'
		},
	]
  	res.send(arr);
});

/* GET home page. */
//衬衫
router.get('shirt', function(req, res, next) {
	var arr = [
        {
            imgurl: 'https://img10.static.yhbimg.com/goodsimg/2019/06/19/16/01fc273733ed669c3909ab0393ea1f6c86.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'壹果 潮童100-140码萌猫胖虎短袖衬衫',
            newNum: '￥129.00',
            oldNum: '￥229.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl: 'https://img11.static.yhbimg.com/goodsimg/2019/06/19/15/01d1a7f43d8071839b384e7004c26d150c.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:' 壹果 女童100-140码蝶舞翩翩娃娃衫"',
            newNum: '￥129.00',
            oldNum: '￥229.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl: 'https://img13.static.yhbimg.com/goodsimg/2019/05/10/14/02cc21f6c4eb249513b6e16034079a7ca0.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'babyONE 女潮童90-140码细格纹小飞袖棉质衬衫',
            newNum: '￥79.00',
            oldNum: '￥159.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/06/13/11/02c3fcc46c352f57e78033e2c6d9af1e36.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'SOYO舍予 潮童90-130 格纹印花短袖衬衫',
            newNum: '￥129.00',
            oldNum: '￥159.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/07/02/14/022259340c1ae231671c021711071894cd.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'JUZI STORE 男女童80-130码 基本款字母印花衬衫',
            newNum: '￥386.00',
            oldNum: '￥429.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/06/25/14/01531d9f8863a5ed3755e077295fd3c2a9.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'EOEOs梨小闲 女潮童90- 抽象印花短袖衬衫',
            newNum: '￥76.00',
            oldNum: '￥260.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/06/19/15/0133437ec241f211ae0e85cc7138ff8073.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'yiigoo 壹果 潮童90-130码浣熊尼克波点短袖衬衫',
            newNum: '￥129.00',
            oldNum: '￥299.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
         {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/06/19/18/027db6cc496c60075e879c23cdfc676256.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'yiigoo 壹果 女童100-140码剔透小冰无袖森系娃娃衫',
            newNum: '￥129.00',
            oldNum: '￥299.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/06/19/15/02125aae012c61f1a46866ff8d711f7970.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'yiigoo 壹果 女童100-140码海芋之恋娃娃衫',
            newNum: '￥129.00',
            oldNum: '￥299.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/06/13/11/02320641a20590ba68e40e3c34127bbc41.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'SOYO舍予 潮童90-130 格纹印花短袖衬衫',
            newNum: '￥129.00',
            oldNum: '￥159.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/06/05/13/0103f7ed4039c70b0726e271d30a984e78.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'ENHENN 潮童 100-140码 棉麻长袖衬衫',
            nnewNum: '￥129.00',
            oldNum: '￥249.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/06/05/13/02d25b5d5651921334ae179c2f2595d8e3.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'ENHENN 潮童 100-140码 韩版短袖白衬衫',
            nnewNum: '￥189.00',
            oldNum: '￥232.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/06/02/16/02b194b3c016f1915f01f5751685700add.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'boxboxbox 女童110-130码 微生物印花荷叶边上衣',
            nnewNum: '￥168.00',
            oldNum: '￥240.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/05/22/11/02ecec628546610bc82c006d1c16d7dd81.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'Buling Bubble 男女童90-130 格纹印花长袖衬衫',
            newNum: '￥99.00',
            oldNum: '￥398.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/05/10/14/02c84132d4002d8ff92f602f86b1466db4.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'babyONE 女潮童90-140码细格纹小飞袖棉质衬衫',
            newNum: '￥79.00',
            oldNum: '￥159.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/05/14/11/029a52981050566ea29d53aebfc8dd1091.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'boxboxbox 女童110-130码 微生物印花荷叶边上衣',
            newNum: '￥168.00',
            oldNum: '￥240.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/05/04/09/02cd9384619ddded4ae3cc6a186e3de32a.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'Buling Bubble 男女童90-130 卡通印花衬衫',
            newNum: '￥99.00',
            oldNum: '￥398.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/05/05/15/02c5ff027ca99d3824ab05d11356879c71.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'yiigoo 壹果 女童100-140码鹦鹉贝贝娃娃衫',
            nnewNum: '￥129.00',
            oldNum: '￥249.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/05/05/14/028b071c00f4d4addb2c54b4dfb5c015ba.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'yiigoo 壹果 女童100-140码萌妹柔柔娃娃衫',
            nnewNum: '￥129.00',
            oldNum: '￥249.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/05/05/14/013ad6603d50a0ccaa6071f37a7f1d3541.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'yiigoo 壹果 女童100-140码镂空点点娃娃衫',
            nnewNum: '￥129.00',
            oldNum: '￥249.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/05/05/14/01a477302c23957afb31f50d07c59baede.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'yiigoo 壹果 女童100-140码夏日庄园娃娃衫',
            nnewNum: '￥129.00',
            oldNum: '￥249.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        
	]
    res.send(arr)
});

// 帽子
router.get('cap', function(req, res, next) {
    var arr = [
    {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/05/23/14/013b5ebc0fa715a6b9512f5adcdc5c4f63.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'kizzuruumu 潮童双面双层撞色DIY绣花渔夫帽',
            nnewNum: '￥88.00',
            oldNum: '￥109.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/07/02/14/02a8f02a0e676af329e5156d4cffd61b25.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'JUZI STORE 潮童户外运动遮阳帽',
            nnewNum: '￥269.00',
            oldNum: '￥299.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/06/21/14/0200ed514e62e64fa42f45e3a828729628.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'EOEOs梨小闲 潮童撞色字母印花棒球帽',
            nnewNum: '￥39.00',
            oldNum: '￥96.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/06/11/11/02ea2115480b4c936ef9da412c4391e6a8.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款米白色棒球帽',
            nnewNum: '￥139.00',
            oldNum: '￥158.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/06/11/10/0146379cb09849642798df5f6c8b17b9e1.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款竖条纹拼色渔夫帽',
            nnewNum: '￥139.00',
            oldNum: '￥158.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/06/11/10/016f85daecbe83515b397a8c3fc2dbad2e.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款拼色渔夫帽',
            nnewNum: '￥140.00',
            oldNum: '￥158.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/06/03/18/01f2aaf304516978b43a19e467c29c3430.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'OMT 日系潮童防晒渔夫帽',
            nnewNum: '￥119.00',
            oldNum: '￥388.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/05/14/10/0169ba845b826221b1d511c584183fd837.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'BABAMA 简约纯色潮童棒球帽',
            nnewNum: '￥119.00',
            oldNum: '￥328.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/05/14/10/012b600018cd2d2af4d0ae2273c16b194f.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'BABAMA M字标志红色潮童棒球帽',
            nnewNum: '￥119.00',
            oldNum: '￥328.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/05/06/14/0190cf600f82f2f38e15e0413b52102470.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'SOYO舍予 潮童个性两面带渔夫帽',
            nnewNum: '￥89.00',
            oldNum: '￥159.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/04/26/15/01a344503a84461993a7b846c61987ec51.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'OMTO 儿童logo贴布渔夫帽',
            nnewNum: '￥119.00',
            oldNum: '￥358.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/04/19/13/02bf8d1219c9709c3e9ae994cb354bafb1.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'BABAMA 儿童刺绣渔夫帽',
            nnewNum: '￥169.00',
            oldNum: '￥418.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/04/15/11/0166bf7510fa4c9edd5c8a508f56feefcb.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'CHUMS Kids 美国户外潮牌 潮童 拼色口袋装饰渔夫帽',
            nnewNum: '￥298.00',
            oldNum: '￥598.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/04/15/11/019f0583148a29944ce9a7476b317f5a33.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'CHUMS Kids 美国户外潮牌 潮童 趣味彩色渔夫帽',
            nnewNum: '￥298.00',
            oldNum: '￥598.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/04/11/15/01876d544509d39a22df4720dc52345ee0.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'MARUKO HAHA 男女潮童 星星圆顶草帽',
            nnewNum: '￥39.00',
            oldNum: '￥199.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/03/23/23/029d1bf68d19d295d2d3a578e07e9f432b.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'CHUMS Kids 美国户外潮牌 潮童 LOGO刺绣棒球帽',
            nnewNum: '￥98.00',
            oldNum: '￥298.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/05/16/10/01d66e597f0c5645007cc48c938311895a.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'JUZI STORE 男女潮童 泡泡纱遮阳渔夫帽',
            nnewNum: '￥254.00',
            oldNum: '￥299.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/03/15/11/024bbaa95b54a47e786eaa68dd52c611be.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'DARKNESS 机车网眼棒球帽',
            nnewNum: '￥109.00',
            oldNum: '￥219.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2018/04/17/10/01b5d1635b5243456ed86c342a34c18ae0.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'PINKORANGE 水洗字母刺绣做旧儿童棒球帽',
            nnewNum: '￥99.00',
            oldNum: '￥199.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2018/04/17/11/01b6917117e3e0fc2ddfa8ad29a9631172.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'PINKORANGE 字母刺绣做旧儿童棒球帽',
            nnewNum: '￥99.00',
            oldNum: '￥199.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
    ]
    res.send(arr)
});

// 凉鞋
router.get('sandal', function(req, res, next) {
    var arr = [
    {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/04/10/19/01c656397a87e1dd2350e1f3859e800c6d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'Timberland 撞色魔术贴凉鞋',
            nnewNum: '￥465.00',
            oldNum: '￥490.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/04/10/19/01f127a9d1d062779bbcd838c8e1fb2a72.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'Timberland 撞色魔术贴凉鞋',
            nnewNum: '￥390.00',
            oldNum: '￥490.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/03/28/15/01bd1cba8c49cc2e9ad06f77f9889875b7.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'Timberland 小童撞色休闲凉鞋',
           nnewNum: '￥390.00',
            oldNum: '￥490.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/03/28/13/014295da844d4c640ee443561cc731f93d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
             title:'Timberland 小童撞色休闲凉鞋',
           nnewNum: '￥390.00',
            oldNum: '￥490.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/03/28/15/026e3a8232745b412f81a162f6dcb2c93d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
             title:'Timberland 小童撞色休闲凉鞋',
           nnewNum: '￥390.00',
            oldNum: '￥490.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/03/28/15/02cd0cf6274fb89f93b4c3a2a204b0416b.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
             title:'Timberland 小童撞色休闲凉鞋',
           nnewNum: '￥490.00',
            oldNum: '￥490.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/03/28/13/0164e1f0052128b577079e445e68d93d48.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'Timberland 小童撞色休闲凉鞋',
           nnewNum: '￥390.00',
            oldNum: '￥490.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/03/28/15/02eedb57a745f82050350287828fc8995b.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'Timberland 小童撞色休闲凉鞋',
           nnewNum: '￥421.00',
            oldNum: '￥490.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/03/15/16/02eabfd8a72a54dd12d5316db7fd32fe99.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'TEVA 舒适轻量防滑派科龙儿童凉鞋',
            nnewNum: '￥250.00',
            oldNum: '￥400.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/03/15/16/0282e7e2e84ea8b5f10533170df1924734.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'TEVA 舒适轻量防滑派科龙儿童凉鞋',
            nnewNum: '￥250.00',
            oldNum: '￥400.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/03/15/16/0279f4f0b95fe311436bd39261b99be85c.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'TEVA 舒适轻量防滑派科龙儿童凉鞋',
            nnewNum: '￥290.00',
            oldNum: '￥450.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/03/15/16/01ea04c47cae9b6319e75cefb62189deb6.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'TEVA 舒适轻量防滑派科龙儿童凉鞋',
            nnewNum: '￥290.00',
            oldNum: '￥450.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/03/15/16/0102d034a7898dce195818af2aea89adc2.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
           title:'TEVA 舒适轻量防滑派科龙儿童凉鞋',
            nnewNum: '￥320.00',
            oldNum: '￥450.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/03/15/16/01577ecd2f74fa483896e54b73ce9d378c.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
           title:'TEVA 舒适轻量防滑派科龙儿童凉鞋',
            nnewNum: '￥320.00',
            oldNum: '￥450.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/03/15/16/0166e822c672d46dcf0d1d45d6afc27ae5.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'TEVA 舒适轻量防滑派科龙儿童凉鞋',
            nnewNum: '￥320.00',
            oldNum: '￥450.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/03/15/16/025fbddd2d3835e39c9e908b5a9f82a8da.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'TEVA 舒适轻量防滑派科龙儿童凉鞋',
            nnewNum: '￥320.00',
            oldNum: '￥450.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/03/15/16/027a99f418331af0c33d3c3656c89379b9.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'TEVA x Herschel合作版 舒适轻量儿童凉鞋',
            nnewNum: '￥390.00',
            oldNum: '￥550.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/03/07/14/023e2ea81ae39b88e7d8f649a3dbbf9cfa.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'TEVA 舒适轻量防滑派科龙儿童凉鞋',
            nnewNum: '￥320.00',
            oldNum: '￥450.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/01/16/17/0264f2cc7ed0c81783d0b5d46f4a50de57.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'THE WHITE BRAND 撞色字母低跟儿童凉拖',
            nnewNum: '￥268.00',
            oldNum: '￥478.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/01/15/17/0293197c4a803528dda3c886c7be914cfb.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'THE WHITE BRAND 撞色字母低跟儿童凉拖',
            nnewNum: '￥268.00',
            oldNum: '￥478.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        }
    ]
    res.send(arr)
});

// 背心
router.get('undwaist', function(req, res, next) {
    var arr = [
    {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/05/16/09/02961e6ff89b61f07bfcbf6e03ced25419.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'MINI CHOC 男女童110-150码字母印花口袋装背心',
            nnewNum: '￥135.00',
            oldNum: '￥269.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/05/22/11/01d3fec3e37c3fb9a22a04162f6b72cdf0.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'kizzuruumu 男女童90-120码 针织印花背心',
            nnewNum: '￥72.00',
            oldNum: '￥89.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/05/27/14/01c9c7223945c6376620e07ce14513624e.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'kizzuruumu 女童90-120码 蝴蝶结绑带吊带背心',
            nnewNum: '￥96.00',
            oldNum: '￥119.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/06/20/10/01e855db74a3abc776a94691da3256ada3.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'yiigoo 壹果 潮童90-130码斑马跳跳卡通背心',
            nnewNum: '￥49.00',
            oldNum: '￥199.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/06/20/11/0229a891e5847ea16948f148cec3d797d1.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'yiigoo 壹果 女童90-130码猫先生卡通背心',
             nnewNum: '￥49.00',
            oldNum: '￥199.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/06/20/11/01d8109adf44bd16dd88dd83e3a7f46c46.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'yiigoo 壹果 潮童90-130码蓝鲸萌萌卡通背心',
            nnewNum: '￥49.00',
            oldNum: '￥199.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/06/30/16/02928748f205a809b1822ed48dfce1f733.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'SOYO舍予 潮童90-130 清凉撞色小背心',
            nnewNum: '￥59.00',
            oldNum: '￥129.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/06/30/17/01290da6e89abb3adbc59ce9b27064a015.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
             title:'SOYO舍予 潮童90-130 清凉撞色小背心',
            nnewNum: '￥59.00',
            oldNum: '￥129.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/06/30/15/02b31d5b1d5798bdde36ecb51b2b99486e.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'SOYO舍予 潮童90-130 简约全棉小背心',
            nnewNum: '￥59.00',
            oldNum: '￥189.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/06/30/14/0282482fc8ccd052df69f1d12ebdc6da58.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'SOYO舍予 潮童90-130 小太阳印花宽松背心',
            nnewNum: '￥69.00',
            oldNum: '￥129.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/06/20/10/016b22432d8af52794d35bd1d89f84e764.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'yiigoo 壹果 女童100-140码优雅公主娃娃衫',
            nnewNum: '￥129.00',
            oldNum: '￥299.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/06/20/11/02dc73574025513696877e27aeb33cd6f8.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'yiigoo 壹果 潮童90-130码三只小鸭卡通背心',
            nnewNum: '￥49.00',
            oldNum: '￥199.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/06/20/11/01d438fcefbcd46b22d4c32f609ab398c2.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'yiigoo 壹果 潮童90-130码小鹿斑比卡通背心',
            nnewNum: '￥49.00',
            oldNum: '￥199.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/06/20/11/02c895443a68d88878271fc28e6708f5b3.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'yiigoo 壹果 潮童90-130码丢丢飞机卡通背心',
            nnewNum: '￥49.00',
            oldNum: '￥199.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/06/05/13/023aab36379c7cb76f25935ab866d20277.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'ENHENN 女潮童 100-140码 基础吊带背心',
            nnewNum: '￥79.00',
            oldNum: '￥99.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/06/06/14/02e940ac8858ef0d48043d309aff85e0da.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'ENHENN 潮童 100-140码 无袖黑边背心',
            nnewNum: '￥99.00',
            oldNum: '￥119.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/06/01/11/0100ef956556d069cc4453a98bfb260706.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'boxboxbox 女童100-130码 个性印花吊带小衫',
            nnewNum: '￥168.00',
            oldNum: '￥238.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/05/29/09/0280960ebe1f65c141eda95e1586b748eb.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'strawberry bread 男女童 100-140 字母印花套头背心',
            nnewNum: '￥99.00',
            oldNum: '￥199.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/05/21/11/01d8cf1e3c3b5d618c88159ec313f1505e.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'boxboxbox 女童100-130码 抽象印花拼接无袖上衣',
            nnewNum: '￥158.00',
            oldNum: '￥228.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/05/05/13/02cc0ac250b4007d4a220f1389160beaf0.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'babyONE 女潮童100-140码小红果印花无袖衬衣',
            nnewNum: '￥99.00',
            oldNum: '￥109.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
    ]
    res.send(arr)
});

// 防晒衣
router.get('suntan', function(req, res, next) {
    var arr = [
    {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/06/13/15/01fb83de8a8698ee4238477af2eebaed01.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'SOYO舍予 潮童90-130 撞色透气防晒衣',
            nnewNum: '￥139.00',
            oldNum: '￥199.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/06/13/15/01698570adaec4c843ea7683fc687fc605.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'SOYO舍予 潮童90-130 撞色透气防晒衣',
            nnewNum: '￥139.00',
            oldNum: '￥199.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/05/16/17/01cc4b124d423f794116ce2d6d8eb0f514.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'MINI CHOC 男女童110-150码透气轻薄防晒衣',
            nnewNum: '￥162.00',
            oldNum: '￥369.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/06/21/14/02e66278be453467721c14fee9bca8b2d3.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'EOEO梨小闲 女潮童100-140码 撞色连帽轻薄防晒衫',
            nnewNum: '￥116.00',
            oldNum: '￥394.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/07/02/14/02b1be2470df67338a93a0b1acb0ac1806.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'JUZI STORE 男女童80-130码 纯色口袋装饰防风外套',
            nnewNum: '￥449.00',
            oldNum: '￥549.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/07/02/16/01ea5b4ba417aada81fb9e2b76d1448b93.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'JUZI STORE 男女童80-130码 简约纯色防风外套',
            nnewNum: '￥449.00',
            oldNum: '￥549.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/07/02/10/02356a9a2d0ebf5307a8471c114a951856.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'JUZI STORE 男女童80-130码 字母印花恐龙帽防风外套',
            nnewNum: '￥509.00',
            oldNum: '￥599.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/04/22/11/02b39d6243f5fc72f5945ed1896a299302.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'yiigoo 壹果 男童100-140码恐龙乐园防晒服',
            nnewNum: '￥199.00',
            oldNum: '￥399.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/04/10/11/02d451608cdbac7e2d6ce664750e91be69.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'MINI CHOC 男女童110-150码字母印花防风外套',
            nnewNum: '￥219.00',
            oldNum: '￥699.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/04/10/17/01e890fd2e4ed1d01b10b3c45cfa60cf33.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'MINI CHOC 男女童110-150码字母印花防风外套',
            nnewNum: '￥219.00',
            oldNum: '￥699.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/04/18/18/0111b28b41fd8c8c01179d35697537b1e2.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'MINI CHOC 男女童110-150码个性满版印花外套',
            nnewNum: '￥169.00',
            oldNum: '￥569.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/04/10/17/01dfa8143de694eb188bf021be45a8528f.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'MINI CHOC 男女童110-140码撞色防风外套',
            nnewNum: '￥189.00',
            oldNum: '￥599.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/03/24/17/01d2da079ecb74a2ed2d5d0dc5f9405ccf.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'JUZI STORE 男女潮童80-130码 泡泡纱宽松斗篷',
            nnewNum: '￥269.00',
            oldNum: '￥499.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/03/15/10/02d04a8c8f185554f802fbb1d81ce9cb89.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'boxboxbox 女童90-130码 洋气两面穿短款外套',
            nnewNum: '￥199.00',
            oldNum: '￥348.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2018/04/20/13/02bb5ada10d5805d81e860b3e900b07da7.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'yiigoo 壹果 男童100-140码像素恐龙亲子款防晒服',
            nnewNum: '￥139.00',
            oldNum: '￥599.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/04/24/16/01db09386ec710a7f88f48dc03091234d0.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'MINI CHOC 男童110-150码卡通批图外套',
            nnewNum: '￥189.00',
            oldNum: '￥599.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2017/03/17/17/027198a38dd3cc8cb089705a072d30a3d5.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'DISITU 迪斯兔 男童110-160码超轻薄防水防晒皮肤衣',
            nnewNum: '￥99.00',
            oldNum: '￥288.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2017/03/17/17/012f652287dc088c2203b27b0320c0a4eb.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'DISITU 迪斯兔 男童110-160码超轻薄防水防晒皮肤衣',
            nnewNum: '￥139.00',
            oldNum: '￥288.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2017/03/17/17/0194d6a2ebd08f82af422df74290a5062f.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'DISITU 迪斯兔 男童110-160码超轻薄防水防晒皮肤衣',
            nnewNum: '￥99.00',
            oldNum: '￥288.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2017/02/09/17/027e22c8894f6faadbf04e2a33c76e1b99.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'MINI CHOC 男潮童110-140码迷彩防风衣',
            nnewNum: '￥159.00',
            oldNum: '￥569.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
    ]
    res.send(arr)
});

// 半身裙
router.get('half', function(req, res, next) {
    var arr = [
    {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/06/25/13/024270c0c38e095f94142b6246fd747df3.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'EOEO梨小闲 女潮童90-120码 马卡龙渐变彩纱半身裙',
            nnewNum: '￥132.00',
            oldNum: '￥434.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/05/16/09/0221d2cb053f0c44557ef6cce8e975d22a.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'MINI CHOC 女童110-150码公主网纱A字蓬蓬裙',
            nnewNum: '￥219.00',
            oldNum: '￥369.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/05/27/14/02b248b879188d06d495299aca5c22818d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'kizzuruumu 女童90-110码 蓝格子系带蝴蝶结半身裙',
            nnewNum: '￥56.00',
            oldNum: '￥69.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/06/25/15/02ff911833cfeb35b24e5a1752a37987de.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'EOEOs梨小闲 女潮童90-140码 刺绣蓬蓬纱半身裙',
            nnewNum: '￥137.00',
            oldNum: '￥487.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/06/25/15/01ac5cd1d1c07e60fb23315f076985e19f.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'EOEOs梨小闲 女潮童90-120码 牛仔网纱拼接A字半身裙',
            nnewNum: '￥111.00',
            oldNum: '￥371.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/07/02/14/011ea919c3013c0b8d72120e55706e6273.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'JUZI STORE 女潮童80-130码 撞色运动半身裙',
            nnewNum: '￥386.00',
            oldNum: '￥429.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/06/19/11/010b1b18d7566a5c4561d09d4ddec5a089.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'yiigoo 壹果 女童100-140码清凉芋头百褶A字短裙',
            nnewNum: '￥129.00',
            oldNum: '￥299.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/06/05/13/0135e7c2daf6ca55a09476a6d3e04f13c2.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'日着rizhuo 女童100-140 趣味卡通印花轻薄星空裙',
            nnewNum: '￥190.00',
            oldNum: '￥199.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img10.static.yhbimg.com/goodsimg/2019/06/03/17/01cba3b9ed1f305ea8534c32c4dfa0c9a7.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'ENHENN 女潮童100-140码纯色大摆针织半身长裙',
            nnewNum: '￥179.00',
            oldNum: '￥232.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/05/28/17/026ef005a5001c797fcefdfe57db1c91ad.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'TYAKASHA塔卡沙 童话系列 童款蓝格子拼接半身裙',
            nnewNum: '￥278.00',
            oldNum: '￥328.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/05/27/13/02563977c8c7cabe69a299354fcfb39dea.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'kizzuruumu 女童90-110码 蓬蓬纱半身裙',
            nnewNum: '￥56.00',
            oldNum: '￥69.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/05/22/13/0171ed71ced45ffd5b4d527bd2210235ba.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'kizzuruumu 女童90-120码 绿色细格纹连衣裙',
            nnewNum: '￥205.00',
            oldNum: '￥256.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/05/21/11/02804693cd9264e5b95dabcc77f77e556d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'boxboxbox 女童100-130码 蓬蓬松公主半身裙',
            nnewNum: '￥180.00',
            oldNum: '￥268.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/05/16/10/02cfcb4d82af65be8c5748de30aa0e6890.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'MINI CHOC 女童110-150码字母印网纱半身裙',
            nnewNum: '￥159.00',
            oldNum: '￥299.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/04/30/16/0178bfeed316eccd1474e1760a497a28d6.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'TYAKASHA塔卡沙 出去走走系列 童款100-140绿色插画印花半身裙',
            nnewNum: '￥229.00',
            oldNum: '￥288.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/04/24/11/02996188e15d4680fefdbfe42f5f7f690b.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'boxboxbox 女童100-130码 微生物口袋蓬松半身裙',
            nnewNum: '￥168.00',
            oldNum: '￥240.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img12.static.yhbimg.com/goodsimg/2019/04/22/13/027d90c19ce109813a6d1fd6ee1280e9e1.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'ENHENN 女潮童 100-140码 牛仔半身裙',
            nnewNum: '￥168.00',
            oldNum: '￥210.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/04/22/11/01f16fa0c5ceb9fb364d77100ea04e2e9c.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'ENHENN 女潮童 100-140码 纽扣装饰半身裙',
            nnewNum: '￥159.00',
            oldNum: '￥199.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img13.static.yhbimg.com/goodsimg/2019/04/11/18/02e26d7036348959ae298804fb93185339.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
            title:'MINI CHOC 女童110-150码趣味印花半身裙',
            nnewNum: '￥198.00',
            oldNum: '￥399.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
        {
            imgurl:'https://img11.static.yhbimg.com/goodsimg/2019/04/22/11/01f16fa0c5ceb9fb364d77100ea04e2e9c.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
            title:'ENHENN 女潮童 100-140码 纽扣装饰半身裙',
            nnewNum: '￥159.00',
            oldNum: '￥199.00',
            url:'/home',
            pic: 'http://127.0.0.1:3000/images/mine/lue.png'
        },
    ]
    res.send(arr)
});


// 短裤
router.get('/shortsList', function(req, res, next) {
	var arr = [
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/06/11/11/02caed465b33b5b9ab2fe7127f36f57496.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'TYAKASHA|男|女|TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款100-140紫色撞色短裤',
					newNum: '￥210.00',
					oldNum: '￥238.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/05/17/17/02a384b67a8dc3f29d10235b938c30036f.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'MINI CHOC|男|女|MINI CHOC 男女童110-140码字母印花五分短裤',
					newNum: '￥239.00',
					oldNum: '￥399.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/05/31/22/01410e10ea6026cbdc48744ef00756fc20.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'JUZI STORE|男|女|JUZI STORE 男女童800-130码 军事徽标印花短裤',
					newNum: '￥314.00',
					oldNum: '￥349.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/05/22/13/0271525ff0031346135e310d403a274691.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'kizzuruumu|男|女|kizzuruumu  男女童90-130码 经典牛仔短裤',
					newNum: '￥119.00',
					oldNum: '￥148.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/06/11/10/014ae627fceb38fd16be163da1f3dee273.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'TYAKASHA|男|女|TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款100-140紫色休闲短裤',
					newNum: '￥263.00',
					oldNum: '￥298.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/06/21/14/011ee3c71040815862d0315d36345db242.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'EOEOs梨小闲|男|女|EOEOs梨小闲 女潮童90-140码 百搭牛仔短裤',
					newNum: '￥126.00',
					oldNum: '￥343.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/05/22/16/01df9cdaf09ccd0c21c573c538165b9e2b.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'kizzuruumu|男|女|kizzuruumu 男女童90-130码 口袋印花牛仔短裤',
					newNum: '￥119.00',
					oldNum: '￥148.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/06/21/16/02b19872c0ac121786e3f981316b2f090f.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'EOEOs梨小闲|男|女|EOEOs梨小闲 女潮童100-150码 百搭破洞牛仔短裤',
					newNum: '￥68.00',
					oldNum: '￥385.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/06/22/10/01e00f9b4fb59b9ec5e68ee6fa9c933e38.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'EOEOs梨小闲|男|女|EOEOs梨小闲 女潮童100-150码 破洞大口袋牛仔中裤',
					newNum: '￥101.00',
					oldNum: '￥344.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/05/15/17/01acc34398599965dd38bd1042d45d9286.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'MINI CHOC|女|MINI CHOC 女童110-140码趣味字母印花短裤',
					newNum: '￥189.00',
					oldNum: '￥329.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/05/28/17/02bbd5b27f81c6e9d94b9afb87971dd57e.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'strawberry bread|男|女|strawberry bread 男女童 100-140 撞色针织中裤',
					newNum: '￥179.00',
					oldNum: '￥289.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/06/30/16/023949bc2ef358be799bde383041ec0a02.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'SOYO舍予|男|女|SOYO舍予 潮童90-130 撞色条纹印花短裤',
					newNum: '￥69.00',
					oldNum: '￥129.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/05/16/15/010ec457eb0f5427fe89345b852f60d77d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'babyONE|女|babyONE 女潮童100-140码牛仔色休闲花苞短裤',
					newNum: '￥114.00',
					oldNum: '￥220.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/06/18/14/0181f960e1b22d6a8a698459abd1226169.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|男|女|yiigoo 壹果 潮童100-140码海盐柠檬中裤',
					newNum: '￥129.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/06/18/15/0247d9a3908eefbad37ab839f806538bdf.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|女|yiigoo 壹果 女童100-140码月亮小船短裤',
					newNum: '￥129.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
			},
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/06/18/14/023f5cd66e8fed204d78283c046f161466.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|女|yiigoo 壹果 女童100-140码海底世界短裤',
					newNum: '￥129.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/06/18/15/023b7eba124b57909f6cd8c1d158f40da7.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|男|女|yiigoo 壹果 潮童100-140码天空之城中裤',
					newNum: '￥129.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/06/18/14/01ecf077b85046611bba856bd98338fb2a.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|男|女|yiigoo 壹果 潮童100-140码海底世界中裤',
					newNum: '￥129.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/06/19/11/0199e450d1cfa03a3be2c69a02f34bdbe5.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|女|yiigoo 壹果 女童100-140码少女时代裙裤',
					newNum: '￥129.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/06/18/13/012cf32f84449a9fce389f86b603495083.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|男|yiigoo 壹果 男童100-130码纯白漫画中裤',
					newNum: '￥129.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			}
	]
	res.send(arr);
});

// 连衣裙
router.get('/dressList', function(req, res, next) {
	var arr = [
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/06/17/23/017cb595e48b587508ebdd67b9fc181089.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|女|yiigoo 壹果 女童100-140码奶油娃娃连衣裙',
					newNum: '￥129.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'   
			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/05/22/17/02222732a92f6108d2c71c6ec68a096622.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'babyONE|女|babyONE 女潮童100-140码梦幻网纱公主裙',
					newNum: '￥139.00',
					oldNum: '￥359.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/06/04/15/01d1a4c99fc498c5ca98cc752ab8501a06.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'boxboxbox|男|女|boxboxbox 女童100-130码 背带牛仔裙',
					newNum: '￥198.00',
					oldNum: '￥288.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/05/22/13/02cfbfdd291b0b5f756bc4d39549287d2a.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'kizzuruumu|女|kizzuruumu 女童90-120码 绣标素色连衣裙',
					newNum: '￥136.00',
					oldNum: '￥169.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/06/17/21/01479aae87a6c309aa2091d394e9bdc3ba.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|女|yiigoo 壹果 女童100-140码彩色棉花糖连衣裙',
					newNum: '￥109.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/06/01/11/01266ab178673e71fcf59ec4858c5b362d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'boxboxbox|男|女|boxboxbox 女童100-130码 不对称背带个性吊带裙',
					newNum: '￥258.00',
					oldNum: '￥358.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/06/25/14/0218d7aec92ff10da43103b631f5471154.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'EOEOs梨小闲|女|EOEOs梨小闲 女潮童90-140码 2件套仙纱公主连衣裙',
					newNum: '￥160.00',
					oldNum: '￥596.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/05/21/11/026a6f6f96b6a5ef359d2aeb9bc3744d5f.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'boxboxbox|女|boxboxbox 女童100-130码 仙人掌印花抽绳连衣裙',
					newNum: '￥228.00',
					oldNum: '￥328.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/06/17/23/01c1ee3906b0711058f2d84a68e83e9bbc.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|女|yiigoo 壹果 女童100-130码镂空花瓣连衣裙',
					newNum: '￥109.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/06/17/22/0111eb990ef32d95740a22c4e9111c6a7d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|女|yiigoo 壹果 女童100-130码草莓甜心连衣裙',
					newNum: '￥109.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/06/17/23/01e67a4ffb3ec70df37b441320e77109f5.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|女|yiigoo 壹果 女童100-140码满棠梨花无袖连衣裙',
					newNum: '￥111.00',
					oldNum: '￥276.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/05/14/10/02a06a828427ecded685913a26b357328c.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'MINI CHOC|女|MINI CHOC 女童110-150码字母印花连衣裙',
					newNum: '￥129.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/06/18/00/0172548a8fe944faa56a14c10545e7bf1e.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|女|yiigoo 壹果 女童100-140码仙女桔梗蕾丝连衣裙',
					newNum: '￥129.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/06/17/22/0199bf1d2501449dcd8bcea473c56fdd22.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|女|yiigoo 壹果 女童100-140码加奶咖啡无袖连衣裙',
					newNum: '￥129.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
			},
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/06/18/00/027d663f40e81d92e704adb6763ac6bc21.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|女|yiigoo 壹果 女童100-140码乡间小路连衣裙',
					newNum: '￥129.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/06/18/00/012c163ccf7d9e4ef4f34355c019ae939c.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|女|yiigoo 壹果 女童100-140码森林精灵连衣裙',
					newNum: '￥129.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/06/24/17/0164020909a7c414ede3276392ff40bda0.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'boxboxbox|女|boxboxbox 女童100-130码 荷叶边拼接波浪连衣裙',
					newNum: '￥218.00',
					oldNum: '￥312.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/06/18/00/0222782f7d674c0922be14970c1a7bcddd.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|女|yiigoo 壹果 女童100-140码小鱼果果连衣裙',
					newNum: '￥109.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/06/24/16/029cc23f142735e0f93baf87edbc17d44d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'boxboxbox|女|boxboxbox 女童100-130码 无袖网纱拼接连衣裙',
					newNum: '￥188.00',
					oldNum: '￥268.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/05/14/11/0165f5cdd3c9d45887f9e546fc242fefc1.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'MINI CHOC|女|MINI CHOC 女童110-150码网纱吊带蛋糕连衣裙',
					newNum: '￥162.00',
					oldNum: '￥699.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			}
	]
	res.send(arr);
});

// 套装
router.get('/suitsList', function(req, res, next) {
	var arr = [
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/05/22/11/029a726bc637f00bfefb723d642025d5b7.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'Buling Bubble|男|女|Buling Bubble 男女童90-130 数字印花套装',
					newNum: '￥99.00',
					oldNum: '￥588.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/06/25/14/02c29375f66bbc5c70ec723be5ad05f2cb.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'EOEOs梨小闲|女|EOEOs梨小闲 女潮童100-130码 撞色字母印花运动套装',
					newNum: '￥121.00',
					oldNum: '￥360.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
					
			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/05/27/15/01c14879dd8db284e858852f5aa696fc73.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'kizzuruumu|男|女|kizzuruumu 男女童90-120码 运动撞色家居套装',
					newNum: '￥112.00',
					oldNum: '￥139.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/06/17/20/0189f3fff0159c608e0692164829874128.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|男|yiigoo 壹果 男童100-140码巨蟹与狮子T恤背心套装',
					newNum: '￥129.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/06/17/20/02cea5de759c6a3f4ef8d5979b4ff4da12.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|女|yiigoo 壹果 女童100-140码夏夜瓢虫娃娃衫短裤套装',
					newNum: '￥169.00',
					oldNum: '￥399.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/05/22/10/02d01cbdc597e40f5c327af1ea03902abd.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'Buling Bubble|男|女|Buling Bubble 男女童90-130 小章鱼印花套装',
					newNum: '￥99.00',
					oldNum: '￥588.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/06/30/14/02fb72dc02ddf6218e3d5e89eee8effb66.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'SOYO舍予|男|女|SOYO舍予 潮童90-130 撞色包边运动套装',
					newNum: '￥89.00',
					oldNum: '￥159.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/06/25/14/0110369a5a18d80bb8c56142985e7a6efa.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'EOEOs梨小闲|女|EOEOs梨小闲 女潮童100-130码 三角波浪纹印花套装',
					newNum: '￥119.00',
					oldNum: '￥470.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/06/17/21/02ae667653fdd6aa7e959a26d6fe6a0039.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|男|女|yiigoo 壹果 潮童90-130码咸蛋糯米短袖短裤套装',
					newNum: '￥129.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/06/17/20/01347500cfd330db5efb675107d3f476fe.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|男|女|yiigoo 壹果 潮童100-140码LOOK ME短袖短裤套装',
					newNum: '￥129.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/06/17/20/022e962fd7e8cee891d215db07d4503f3f.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|女|yiigoo 壹果 女童100-140码菠萝冰淇淋T恤套装',
					newNum: '￥129.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/06/13/15/01be681cca545b4469235bb34601ded6a8.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'SOYO舍予|男|女|SOYO舍予 潮童90-130 棉花印花家居套装',
					newNum: '￥129.00',
					oldNum: '￥159.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/06/13/12/021a664028b49309a9e1062a5b1bebdb4c.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'SOYO舍予|男|女|SOYO舍予 潮童90-130 棉花印花家居套装',
					newNum: '￥129.00',
					oldNum: '￥159.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/06/13/11/02216835ef1ae6c5b8ca3d2920f2485b9e.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'SOYO舍予|男|女|SOYO舍予 潮童90-130 棉花印花家居套装',
					newNum: '￥129.00',
					oldNum: '￥159.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/06/05/14/0117664e6c6cea79ac1ecd649b934b9f4f.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'ENHENN|男|女|ENHENN 潮童 110-140码 灰色短袖套装',
					newNum: '￥179.00',
					oldNum: '￥219.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/05/22/17/01f73b73ed4a91473b6ccac9a61ae72bf0.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'babyONE|女|babyONE 女潮童100-140码纯色花边无袖套装',
					newNum: '￥179.00',
					oldNum: '￥359.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'
			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/05/07/16/019c63ee5e2a411b31c06dd81e97d7a711.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'SOYO舍予|男|女|SOYO舍予 潮童90-130 条纹撞色家居套装',
					newNum: '￥129.00',
					oldNum: '￥159.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/05/04/11/01acec73302c45c222cb964700f7ded329.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'Buling Bubble|男|女|Buling Bubble 男女童90-130 趣味印花短袖T恤套装',
					newNum: '￥88.00',
					oldNum: '￥588.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/05/04/12/01fae3bc27ad79d6c543f84008e9a1970a.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'Buling Bubble|男|女|Buling Bubble 男女童90-130 趣味印花短袖T恤套装',
					newNum: '￥88.00',
					oldNum: '￥588.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/05/04/10/0221f7f1038f602dff901c3a2072a447f1.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'Buling Bubble|男|女|Buling Bubble 男女童90-130 趣味印花短袖T恤套装',
					newNum: '￥99.00',
					oldNum: '￥588.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			}
	]
	res.send(arr);
});

// 运动鞋
router.get('/sneakerList', function(req, res, next) {
	var arr = [
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/05/20/17/016bcbafd3adad84596dd39a127d76e3aa.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|男|女|yiigoo 壹果 潮童飞织弹力休闲运动鞋',
					newNum: '￥99.00',
					oldNum: '￥599.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/05/13/16/02404bc6fd357e3392ea4b8a13f401462d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|男|女|yiigoo 壹果 潮童一体织轻盈帆布运动鞋',
					newNum: '￥99.00',
					oldNum: '￥599.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/05/20/17/01ea1cd87145bef41f2b931ca56afecbd2.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|女|yiigoo 壹果 潮童一脚蹬全棉松紧帆布鞋',
					newNum: '￥79.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/07/03/17/01311fcfd2fe72318160d48973c35139c8.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'Onitsuka Tiger kids|男|女|Onitsuka Tiger kids 鬼塚虎 小中童 MEXICO 66 PS运动鞋',
					newNum: '￥450.00',
					oldNum: '',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/06/28/17/02bcd14d96f790387caad3f247f8fe74ca.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'Onitsuka Tiger kids|男|女|Onitsuka Tiger kids 鬼塚虎 幼小童 MEXICO 66 TS运动鞋',
					newNum: '￥350.00',
					oldNum: '',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/07/04/11/020e7676d9aed951bc67c4882fc40fffa7.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'Onitsuka Tiger kids|男|女|Onitsuka Tiger kids 鬼塚虎 幼小童 MEXICO 66 TS 运动鞋',
					newNum: '￥350.00',
					oldNum: '',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img11.static.yhbimg.com/goodsimg/2019/06/03/11/0144e4e4832af1fd67d9ee5cc7f1790bcd.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'CHUCHUNA|女|CHUCHUNA 女童 2-5岁 软底袜子鞋',
					newNum: '￥269.00',
					oldNum: '',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/06/03/11/0292a0c1de7e0e4709224c9f4d0262b306.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'CHUCHUNA|男|女|CHUCHUNA 潮童中性款 2-5岁 休闲运动鞋',
					newNum: '￥399.00',
					oldNum: '',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/06/03/10/02f74202293f2d4f69d124888e19533778.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'CHUCHUNA|男|女|CHUCHUNA 潮童中性款 2-5岁 休闲运动鞋',
					newNum: '￥399.00',
					oldNum: '',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/05/26/17/01ab0747ebac7a205241c0236170d8deca.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'DC KIDS|男|女|DC KIDS 潮童5-10岁 PURE HT SE EV B SHOE休闲运动鞋',
					newNum: '￥495.00',
					oldNum: '',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/07/03/17/01e1a59c47ac2e0d5892c5c3e19a60adc1.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'Onitsuka Tiger kids|男|女|Onitsuka Tiger kids 鬼塚虎 小中童 LAWNSHIP PS 运动鞋',
					newNum: '￥390.00',
					oldNum: '',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img11.static.yhbimg.com/goodsimg/2019/07/03/17/01f69b2bfc63172e42cd075f161312f1d0.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'Onitsuka Tiger kids|男|女|Onitsuka Tiger kids 鬼塚虎 幼小童 GSM TS 运动鞋',
					newNum: '￥396.00',
					oldNum: '',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/07/03/18/01b772f164e3e71135a754928a7f15bb0d.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
					title: 'Onitsuka Tiger kids|男|女|Onitsuka Tiger kids 鬼塚虎 小中童 GSM PS 运动鞋',
					newNum: '￥440.00',
					oldNum: '￥550.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/07/03/18/010fa00496dfe2a808b8117e3553c3b5bc.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
					title: 'Onitsuka Tiger kids|男|女|Onitsuka Tiger kids 鬼塚虎 小中童 MEXICO 66 PS 运动鞋',
					newNum: '￥450.00',
					oldNum: '',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/04/16/10/0191b42ef00005bfe83e400202aef21e91.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
					title: 'DC KIDS|男|女|DC KIDS 潮童5-10岁 PURE ELASTIC SE B SHOE 休闲旅游鞋',
					newNum: '￥428.00',
					oldNum: '￥476.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/04/16/10/02527e3bce729dd1a6a8466127fdb331ea.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
					title: 'DC KIDS|男|女|DC KIDS 潮童5-10岁 EVAN TX B SHOE 休闲帆布鞋',
					newNum: '￥383.00',
					oldNum: '￥425.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/04/08/09/026dd77eac06c88f5fc637f89f9815000b.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
					title: 'DC KIDS|女|DC KIDS 女潮童5-10岁 HEATHROW G SHOE 休闲旅游鞋',
					newNum: '￥383.00',
					oldNum: '￥425.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img13.static.yhbimg.com/goodsimg/2019/04/02/13/02278220c5e308ebb1edb76e9bf8d85a7a.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
					title: 'DC KIDS|男|女|DC KIDS 潮童5-10岁 TRASE TX B SHOE RED 休闲帆布鞋',
					newNum: '￥329.00',
					oldNum: '￥365.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img11.static.yhbimg.com/goodsimg/2019/04/02/14/01f84dbe33e4088c58f2ec1a98f13589a1.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
					title: 'DC KIDS|男|女|DC KIDS 潮童5-10岁 TRASE V SE B SHOE MLT 休闲鞋',
					newNum: '￥383.00',
					oldNum: '￥425.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/03/08/19/0268970092977b63f5749755b3a31ae797.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60/format/webp',
					title: '回力|男|女|回力 儿童拼接魔术贴休闲帆布鞋',
					newNum: '￥110.00',
					oldNum: '￥138.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			}
	]
	res.send(arr);
});

// 休闲裤
router.get('/slacksList', function(req, res, next) {
	var arr = [
			{
					imgurl:'//img10.static.yhbimg.com/goodsimg/2019/05/22/13/018dc478c261de770f4162a2f08a957b9f.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'kizzuruumu|男|女|kizzuruumu 男女童90-130码 宽松阔腿休闲裤',
					newNum: '￥138.00',
					oldNum: '￥160.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img13.static.yhbimg.com/goodsimg/2019/05/22/11/02f55d305305a4fdda19440b0c7d7d41a9.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'kizzuruumu|男|女|kizzuruumu 男女童90-120码 轻薄阔腿绣标休闲裤',
					newNum: '￥136.00',
					oldNum: '￥160.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img12.static.yhbimg.com/goodsimg/2019/06/30/17/023e7995fae84ed6c3badd0436373a6d06.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'SOYO舍予|男|女|SOYO舍予 潮童90-130 撞色拼条萝卜裤',
					newNum: '￥89.00',
					oldNum: '￥129.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img13.static.yhbimg.com/goodsimg/2019/06/13/10/02287c3f8546bfca90fd2f91f551b14552.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'SOYO舍予|男|女|SOYO舍予 潮童90-130 轻薄透气防蚊裤',
					newNum: '￥99.00',
					oldNum: '',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img11.static.yhbimg.com/goodsimg/2019/06/03/17/0164ff68e6268583337881368a49f03c82.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'ENHENN|男|女|ENHENN 潮童100-140码百搭纯色休闲裤',
					newNum: '￥179.00',
					oldNum: '￥222.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img11.static.yhbimg.com/goodsimg/2019/06/11/11/01413013303f95867e609c6b09623458b5.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'TYAKASHA|男|女|TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款100-140米色九分裤',
					newNum: '￥262.00',
					oldNum: '￥296.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img10.static.yhbimg.com/goodsimg/2019/05/29/12/01d2104136a87ff8819bb0e3fab912cdf9.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'strawberry bread|男|女|strawberry bread 男女童 100-140 趣味波点印花针织裤',
					newNum: '￥239.00',
					oldNum: '',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img13.static.yhbimg.com/goodsimg/2019/05/28/17/0248c190cf031c913157eb570051091acb.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'TYAKASHA|男|女|TYAKASHA塔卡沙 童话系列  童款100-140绿色格子九分裤',
					newNum: '￥278.00',
					oldNum: '￥328.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img10.static.yhbimg.com/goodsimg/2019/05/22/09/010a7404391ceff9021b75dc9ab7e54c61.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'kizzuruumu|男|女|kizzuruumu 男女童90-120码 宽松针织休闲裤',
					newNum: '￥112.00',
					oldNum: '￥139.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img12.static.yhbimg.com/goodsimg/2019/05/07/13/0252e3c96a2922194680a30f343ca4560b.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'SOYO舍予|男|女|SOYO舍予 潮童90-120 侧边拼条休闲裤',
					newNum: '￥99.00',
					oldNum: '￥159.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'http://img12.static.yhbimg.com/goodsimg/2019/05/07/13/02f7b1105bbc2e1695c943d1a455bdb3b2.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'SOYO舍予|男|女|SOYO舍予 潮童90-130 宽松胯裆七分裤',
					newNum: '￥89.00',
					oldNum: '￥129.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img12.static.yhbimg.com/goodsimg/2019/04/30/16/02fe144fb8803167aa797333300c80855e.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'TYAKASHA|男|女|TYAKASHA塔卡沙 出去走走系列 童款100-140绿色插画印花九分裤',
					newNum: '￥206.00',
					oldNum: '￥258.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img13.static.yhbimg.com/goodsimg/2019/05/04/18/02d6b02e0ae8cf239d1715cf6bdbdc36d0.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'Buling Bubble|男|女|Buling Bubble 男女童90-130 趣味印花灯笼裤',
					newNum: '￥49.00',
					oldNum: '￥258.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img10.static.yhbimg.com/goodsimg/2019/05/05/12/01983a5c519a83161373fee41f3ba75502.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'Buling Bubble|男|女|Buling Bubble 男女童90-130 侧边串标拼接休闲裤',
					newNum: '￥88.00',
					oldNum: '￥258.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img13.static.yhbimg.com/goodsimg/2019/05/04/18/0232db655f92a5788e5ee0123cf71b85e8.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'Buling Bubble|男|女|Buling Bubble 男女童90-130 竖条纹印花休闲裤',
					newNum: '￥49.00',
					oldNum: '￥188.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img10.static.yhbimg.com/goodsimg/2019/05/05/09/0144ad55ceb668329dfb7f1a7cb5a06d85.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'Buling Bubble|男|女|Buling Bubble 男女童90-130 侧边白条拼接休闲裤',
					newNum: '￥88.00',
					oldNum: '￥268.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img12.static.yhbimg.com/goodsimg/2019/05/05/14/027551d119196f1a32716244ea2db199f7.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: 'yiigoo 壹果|女|yiigoo 壹果 女童90-130码热情普吉岛防蚊裤',
					newNum: '￥99.00',
					oldNum: '￥299.00',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img12.static.yhbimg.com/goodsimg/2019/06/28/11/022f9caeff22bd5c0f04bb801369789c95.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: '日着rizhuo|女|日着rizhuo 小女童100-140 文艺条纹裤脚抽绳短裤',
					newNum: '￥139.00',
					oldNum: '',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img12.static.yhbimg.com/goodsimg/2019/06/28/11/02a5bcab44a1c2ac4c35ff027fc8cabd54.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: '日着rizhuo|男|日着rizhuo 男童100-140 宽松文艺条纹印花短裤',
					newNum: '￥139.00',
					oldNum: '',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			},
			{
					imgurl:'//img12.static.yhbimg.com/goodsimg/2019/04/25/18/02fbc3eaa21a4ef10052e49ae6dc8f5e0f.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
					title: '日着rizhuo|男|女|日着rizhuo 男女童100-140 撞色印花阔腿裤',
					newNum: '￥199.00',
					oldNum: '',
					url:'/home',
					pic: 'http://127.0.0.1:3000/images/mine/lue.png'

			}
	]

	res.send(arr);
});

router.get('/cateListright6', function(req, res, next) {
	var arr=[
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/05/13/14/02a8c315988b671f93a8e408f22eca1737.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'毛绒玩偶'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/05/29/09/0123d9b899193587f0ca749117bdd4f2e4.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'益智游戏'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/06/27/18/02eabf84d0008cc6f4f6c13c5be5575cf7.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'玩具模型'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2018/04/19/17/01a9e08ab39ae448eaa446d50c5fd381a7.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'生活用品'
		},
	]
  	res.send(arr);
});
router.get('/wangguan', function (req, res, next) {
  var arr = [
    {
      img: '//img10.static.yhbimg.com/goodsimg/2019/03/18/11/0148df032d97bcab3456f9eb65ba4020dc.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '1',
      title: 'Garfield by fun 潮童110-140码 卡通印花短袖T恤',
      price: '￥239'
    },
    {
      img: '//img11.static.yhbimg.com/goodsimg/2019/07/03/17/01311fcfd2fe72318160d48973c35139c8.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '2',
      title: 'Onitsuka Tiger kids 鬼塚虎 小中童 MEXICO 66 PS运动鞋',
      price: '￥450'
    },
    {
      img: '//img12.static.yhbimg.com/goodsimg/2019/06/11/11/02caed465b33b5b9ab2fe7127f36f57496.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '3',
      title: 'TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款100-140紫色撞色短裤',
      price: '￥210'
    },
    {
      img: '//img11.static.yhbimg.com/goodsimg/2017/05/06/14/01720a0bb8f3f295bb8a6e459d950017af.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '4',
      title: 'Timberland 大童经典防水高帮黄靴',
      price: '￥1990'
    },
    {
      img: '//img10.static.yhbimg.com/goodsimg/2019/03/24/17/010cbb41736fb874aca29739100107c08a.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '5',
      title: 'JUZI STORE  女童80-130码 轻薄牛仔假两件背带裙',
      price: '￥450'
    },
    {
      img: '//img12.static.yhbimg.com/goodsimg/2019/06/28/17/02bcd14d96f790387caad3f247f8fe74ca.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '6',
      title: 'Onitsuka Tiger kids 鬼塚虎 幼小童 MEXICO 66 TS运动鞋',
      price: '￥350'
    },
    {
      img: '//img11.static.yhbimg.com/goodsimg/2019/06/17/23/017cb595e48b587508ebdd67b9fc181089.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '7',
      title: 'yiigoo 壹果 女童100-140码奶油娃娃连衣裙',
      price: '￥129'
    },
    {
      img: '//img13.static.yhbimg.com/goodsimg/2019/06/11/11/02086c8cd53780b66639cfafcc46073799.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '8',
      title: 'TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款100-140天蓝色短袖T恤',
      price: '￥140'
    },
    {
      img: '//img12.static.yhbimg.com/goodsimg/2018/04/03/17/02c6f3c5b68b277ab4ef9c125449f3def8.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '9',
      title: 'Garfield by fun 卡通印花背带短裤',
      price: '¥281'
    },
    {
      img: '//img11.static.yhbimg.com/goodsimg/2019/06/11/11/01413013303f95867e609c6b09623458b5.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '10',
      title: 'TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款100-140米色九分裤',
      price: '¥262'
    },
    {
      img: '//img11.static.yhbimg.com/goodsimg/2019/06/11/10/013b31f2e8c1743cc2cbcfa21650567670.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '11',
      title: 'TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款100-140粉色短袖T恤',
      price: '¥140'
    },
    {
      img: '//img12.static.yhbimg.com/goodsimg/2019/05/04/09/023940d744a10de3159dd703c53ba37963.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '12',
      title: 'Buling Bubble 男女童90-130 趣味卡通印花T恤',
      price: '¥55'
    },
    {
      img: '//img10.static.yhbimg.com/goodsimg/2019/05/16/10/0133fecd9726fe88612dc70fba24a76d7f.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '13',
      title: 'yiigoo 壹果 女童100-140码菠萝乐园防晒服',
      price: '¥199'
    },
    {
      img: '//img11.static.yhbimg.com/goodsimg/2019/06/11/10/012028add1023ff15bec838e9d115139d0.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '14',
      title: 'TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款100-140黄色短袖T恤',
      price: '¥147'
    },
    {
      img: '//img13.static.yhbimg.com/goodsimg/2019/06/11/10/02d061eee8244682c5605c0accdd1de6b8.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '15',
      title: 'TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款100-140绿紫条纹短袖T恤',
      price: '¥147'
    },
    {
      img: '//img11.static.yhbimg.com/goodsimg/2019/05/16/10/01d66e597f0c5645007cc48c938311895a.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '16',
      title: 'JUZI STORE 男女潮童 泡泡纱遮阳渔夫帽',
      price: '¥147'
    },
    {
      img: '//img10.static.yhbimg.com/goodsimg/2019/06/19/16/01fc273733ed669c3909ab0393ea1f6c86.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '17',
      title: 'yiigoo 壹果 潮童100-140码萌猫胖虎短袖衬衫',
      price: '￥129'
    },
    {
      img: '//img10.static.yhbimg.com/goodsimg/2019/06/18/00/0172548a8fe944faa56a14c10545e7bf1e.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '18',
      title: 'yiigoo 壹果 女童100-140码仙女桔梗蕾丝连衣裙',
      price: '￥189'
    },
    {
      img: '//img10.static.yhbimg.com/goodsimg/2019/05/13/15/015ce05491c133dce145818ae3c004851b.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '19',
      title: 'yiigoo 壹果 潮童偏光太阳镜',
      price: '¥129'
    },
    {
      img: '//img12.static.yhbimg.com/goodsimg/2019/06/19/16/02b04f76001063ea680abcef7530592ce8.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '20',
      title: 'yiigoo 壹果 男童100-140码你好夏天无袖T恤',
      price: '¥168'
    },
    {
      img: '//img12.static.yhbimg.com/goodsimg/2019/03/15/09/02c43e706bedf1ea1b846974b6ecba7a9c.jpg?imageMogr2/thumbnail/75x114/background/d2hpdGU=/position/center/quality/60/format/webp',
      logo: '21',
      title: 'strawberry bread 男女童 100-140 连帽多袋工装外套',
      price: '￥499'
    }

  ]

  res.send(arr)
})


router.get('/good', function (req, res, next) {
	var arr = [
			'//img13.static.yhbimg.com/goodsimg/2019/06/11/11/02086c8cd53780b66639cfafcc46073799.jpg?imageMogr2/thumbnail/450x600/position/center/quality/60',
			'//img11.static.yhbimg.com/goodsimg/2019/06/11/11/0150525465841f76fe272916b4a7cfd24c.jpg?imageMogr2/thumbnail/450x600/position/center/quality/60',
			'//img12.static.yhbimg.com/goodsimg/2019/06/17/11/0230ca555cf52c8a7a0a0b08f606a3abf2.jpg?imageMogr2/thumbnail/450x600/position/center/quality/60',
			'//img12.static.yhbimg.com/goodsimg/2019/06/17/11/0213581391b87ab710aa8871b3631c62ac.jpg?imageMogr2/thumbnail/450x600/position/center/quality/60'
   ]
	res.send(arr)
});

router.get('/goodpic', function (req, res, next) {
	var arr = [
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/027aa71478d607ac8ff96c76ecc30dbcc2.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img11.static.yhbimg.com/goodsimg/2019/06/11/11/0176be894e655e53aeea0fe911d6082c8e.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img11.static.yhbimg.com/goodsimg/2019/06/11/11/016a937dd7f349152b800074ca7218e8ef.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/020a70de803d9b815da96a385a4fc01cab.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/021b78b5d31d168f04b822968f32aeef9e.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/029cacd76dce321cf243170043995e72ba.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/02696dccaeb12129f217a07b4f4d201b2f.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/02bf1266b2dcc076bb0c4af4e6f6810485.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img11.static.yhbimg.com/goodsimg/2019/06/11/11/0189188f02f17b27c932970d68bbe5acb3.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/0281db5ff70949e4cf2c938d7586bc11e1.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img11.static.yhbimg.com/goodsimg/2019/06/11/11/01eb17f010557e801fdcb907d12e926629.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/02dc71ebb5ef196378ab1690ca15a1f0b3.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/02a28f85681e97fd2fbd2d092c93d2e82d.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/02e53e37ec16b87e4778b233646b166250.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/020bb590c8c38d8e7898fbcb4e6c30e30e.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/02df88decd1bb98629f469430909341cb5.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img11.static.yhbimg.com/goodsimg/2019/06/11/11/01acde39e2d8a786f18ebaaf747534aac2.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/02e632c4a6df0cc153da11d658f80fd25b.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img11.static.yhbimg.com/goodsimg/2019/06/11/11/0153e3dda07417fc533986aa8d6c0bb2d6.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/025b5c09630ce38d003c8f30935fe6d79d.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/0264be9c1622e1d5806705004edac7ccb6.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/029b9afa63fcce995ce8a7ec91b23800d9.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/02374fd757d6fc4185d2dbac74e0a84e90.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img11.static.yhbimg.com/goodsimg/2019/06/11/11/01d483653fb5fd019509c167005b1856c7.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/020922f44bc6ebaff93d418f83797823c9.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img11.static.yhbimg.com/goodsimg/2019/06/11/11/0165bfabc896f60aa0bae2869a7df20643.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/02939b64b4b0cbd7087b78125f5fff85b0.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/02ffc39c604a399cd9faa63be7a088d320.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/02c2232c2a857ab5572d2ea7834b1c1bf5.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img11.static.yhbimg.com/goodsimg/2019/06/11/11/0114954a15473bc2ee5c6ab3830d2c764f.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/0249f7b746ad84c2dd02132fd39f207800.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/17/11/0230ca555cf52c8a7a0a0b08f606a3abf2.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img13.static.yhbimg.com/goodsimg/2019/06/17/11/020760db730e6730e153bc10c26a8f120b.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/17/11/025e611e917935316ed2c662f47895f95a.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp',
		'//img12.static.yhbimg.com/goodsimg/2019/06/17/11/029fab7f6fdcaf816f8233aa4a8153a2c0.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp'
  ]
	res.send(arr)
});


router.get('/goods', function (req, res, next) {
	var arr = [
		{
		  
		  h: 'TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 童款100-140天蓝色短袖T恤',
		  newNum: '¥145',
		  oldNum: '¥158',
		  xia: '下单8.8折' 
		}
	  ]
	  
	res.send(arr)
});




module.exports = router;