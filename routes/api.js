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
			href: '/mine',
			cpm: '新品到着'
		},
		{
			imgurl: 'http://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/01c07611bfd87c167b614e76fd4e648d1a.png?imageView2/2/w/98/h/98/q/60',
			href: '',
			cpm: '品牌一览'
		},
		{
			imgurl: 'http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/0136b1097e58f1da29b8aa5e11014530d6.png?imageView2/2/w/98/h/98/q/60',
			href: '',
			cpm: '玩具娱乐'
		},
		{
			imgurl: 'http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01a59222ccd78f99235ceb010e473c40e5.png?imageView2/2/w/98/h/98/q/60',
			href: '',
			cpm: '全部分类'
		},
		{
			imgurl: 'http://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/017a3e5b1c186344dafa450ca016316be0.png?imageView2/2/w/98/h/98/q/60',
			href: '',
			cpm: '中小童'
		},
		{
			imgurl: 'http://img10.static.yhbimg.com/yhb-img01/2017/03/01/12/0185ee3b9ba7a02d99a9e82834448ba677.png?imageView2/2/w/98/h/98/q/60',
			href: '',
			cpm: '领券中心'
		},
		{
			imgurl: 'http://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/0137b842d791e17b2f432ec6566afe109f.png?imageView2/2/w/98/h/98/q/60',
			href: '',
			cpm: '装酷必备'
		},
		{
			imgurl: 'http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01d3b9f604a085e0c9c9c16a76bc1f882f.png?imageView2/2/w/98/h/98/q/60',
			href: '',
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
			href: '/mine'
		},
		{
			imgurl: "http://img11.static.yhbimg.com/yhb-img01/2019/06/04/17/01284d201b8110de82cd6a138fa37cd507.jpg?imageView2/2/w/140/h/140/q/60",
			href: ''
		},
		{
			imgurl: "http://img11.static.yhbimg.com/yhb-img01/2019/06/04/17/01b9fff0f60d45d0a1d0a126ba5a828954.jpg?imageView2/2/w/140/h/140/q/60",
			href: ''
		},
		{
			imgurl: "http://img11.static.yhbimg.com/yhb-img01/2019/06/04/17/01abe4ea9d359b64be29e8a47f51333fdd.jpg?imageView2/2/w/140/h/140/q/60",
			href: ''
		},
		{
			imgurl: "http://img10.static.yhbimg.com/yhb-img01/2019/06/04/17/015eefeff818102f6a685cba1dac4a836a.jpg?imageView2/2/w/140/h/140/q/60",
			href: ''
		},
		{
			imgurl: "http://img11.static.yhbimg.com/yhb-img01/2019/06/04/17/01992e5f63d20e0df82110189de5c6769e.jpg?imageView2/2/w/140/h/140/q/60",
			href: ''
		},
		{
			imgurl: "http://img11.static.yhbimg.com/yhb-img01/2019/06/04/17/019dec02a4dc2eb684c6ea4a3d99249848.jpg?imageView2/2/w/140/h/140/q/60",
			href: ''
		},
		{
			imgurl: "http://img11.static.yhbimg.com/yhb-img01/2019/06/04/17/01bf2a89f7f423805ac34ceab6fa66066c.jpg?imageView2/2/w/140/h/140/q/60",
			href: ''
		},
		{
			imgurl: "http://img10.static.yhbimg.com/yhb-img01/2019/06/04/17/01d692f46c44307035c20b399fe9676af9.jpg?imageView2/2/w/140/h/140/q/60",
			href: ''
		},
		{
			imgurl: "http://img10.static.yhbimg.com/yhb-img01/2019/06/04/17/0186f88c61d3e590eb5ceb8ff158e8eb03.jpg?imageView2/2/w/140/h/140/q/60",
			href: ''
		},
		{
			imgurl: "http://img10.static.yhbimg.com/yhb-img01/2019/06/04/17/01d1de9b5d672bcd34904606de30a94d92.jpg?imageView2/2/w/140/h/140/q/60",
			href: ''
		},
		{
			imgurl: "http://img11.static.yhbimg.com/yhb-img01/2019/06/04/17/013aee3828e0e20cd14ae9d9f8f8bfce2c.jpg?imageView2/2/w/140/h/140/q/60",
			href: ''
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
			img: 'http://img13.static.yhbimg.com/goodsimg/2017/07/30/12/02d803ccddbb2d8c6c82cd59cd9bc73692.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '59.00',
			num: "82人",
			browse: "正在浏览"
		},
		{
			img: 'http://img11.static.yhbimg.com/goodsimg/2017/08/18/18/01147d529fc5eb75060f9237e6a4d940c2.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '269.00',
			num: "140人",
			browse: "正在浏览"
		},
		{
			img: 'http://img11.static.yhbimg.com/goodsimg/2019/01/02/11/01865818f1acc954fd93b77c1cf54c2b8e.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '129.00',
			num: "134人",
			browse: "正在浏览"
		},
		{
			img: 'http://img12.static.yhbimg.com/goodsimg/2018/09/25/11/02cc3632ef6767ccaf479684c1967580ed.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '79.00',
			num: "134人",
			browse: "正在浏览"
		},
		{
			img: 'http://img11.static.yhbimg.com/goodsimg/2018/12/29/19/01cb7ecd8980162e4f5a9e19c2004439c9.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '109.00',
			num: "134人",
			browse: "正在浏览"
		},
		{
			img: 'http://img13.static.yhbimg.com/goodsimg/2019/03/21/16/02828618a5561eba5fe47624d8d2c14124.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '185.00',
			num: "59人",
			browse: "正在浏览"
		},
		{
			img: 'http://img11.static.yhbimg.com/goodsimg/2016/11/03/18/01ac9117bbf97c19e4f472cf04db3e4157.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '109.00',
			num: "111人",
			browse: "正在浏览"
		},
		{
			img: 'http://img11.static.yhbimg.com/goodsimg/2018/09/03/17/019ea6bab8b331c427c69163d9dae080d2.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '259.00',
			num: "111人",
			browse: "正在浏览"
		},
		{
			img: 'http://img11.static.yhbimg.com/goodsimg/2018/09/25/15/01457751bf19ea61221cb5cd1441dd3d03.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '139.00',
			num: "111人",
			browse: "正在浏览"
		},
		{
			img: 'http://img11.static.yhbimg.com/goodsimg/2018/06/08/10/01cbb2cd88642fbbfbd3984ee475aa5e76.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '209.00',
			num: "111人",
			browse: "正在浏览"
		},
		{
			img: 'http://img12.static.yhbimg.com/goodsimg/2018/09/30/18/029e3508d5e949a57fb4d9277f74e71309.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '109.00',
			num: "111人",
			browse: "正在浏览"
		},
		{
			img: 'http://img11.static.yhbimg.com/goodsimg/2018/05/26/17/01ce7569f9797c837d28d616cf3cb54788.jpg?imageMogr2/thumbnail/153x206/position/center/quality/60',
			price: '45.00',
			num: "178人",
			browse: "正在浏览"
		}
	]
	res.send(arr)
});


// 首页底部图片
router.get('/botpic', function (req, res, next) {
	var arr = [{
			imgs: 'http://img11.static.yhbimg.com/yhb-img01/2019/04/08/15/01332fd25f4ccd8988a21a6b44a6cd949f.jpg?imageView2/3/w/640/h/200/q/60'
		},
		{
			imgs: 'http:////img11.static.yhbimg.com/yhb-img01/2019/04/08/15/0117ace5690e73d6687da6ff4ec617c3d8.jpg?imageView2/3/w/640/h/200/q/60'
		},
		{
			imgs: 'http://img11.static.yhbimg.com/yhb-img01/2019/04/08/15/012a6f64cf2c5bd9557caa882589525de9.jpg?imageView2/3/w/640/h/200/q/60'
		}


	]
	res.send(arr)
});

// 分类列表左
router.get('/cateList', function (req, res, next) {
	var arr = [{
			id: 0,
			title: '推荐'
		},
		{
			id: 1,
			title: '上衣'
		},
		{
			id: 2,
			title: '裤装'
		},
		{
			id: 3,
			title: '鞋靴'
		},
		{
			id: 4,
			title: '包类/装备'
		},
		{
			id: 5,
			title: '服配'
		},
		{
			id: 6,
			title: '创意生活'
		},
		{
			id: 7,
			title: '有食'
		},
		{
			id: 8,
			title: '有玩'
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
			fentitle:'待付款'
		},
		{
			imgs:'http://127.0.0.1:3000/images/mine/df.png',
			fentitle:'待发货'
		},
		{
			imgs:'http://127.0.0.1:3000/images/mine/ds.png',
			fentitle:'待收货'
		},	
		{
			cs:'0',
			fentitle:'商品收藏'
		},
		{
			cs:'0',
			fentitle:'品牌收藏'
		},
		{
			cs:'0',
			fentitle:'浏览记录'
		}
	]
	
	res.send(arr)
});

router.get('/orderCen', function (req, res, next) {
	var arr = [
		{
			img1:'http://127.0.0.1:3000/images/mine/yhj.png',
			centitle:'优惠劵',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png'
		},
		{
			img1:'http://127.0.0.1:3000/images/mine/money.png',
			centitle:'有货币',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png'
		},
		{
			img1:'http://127.0.0.1:3000/images/mine/xx.png',
			centitle:'消息',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png'
		},	
		{
			img1:'http://127.0.0.1:3000/images/mine/fu.png',
			centitle:'服务与反馈',
			imgs:'http://127.0.0.1:3000/images/mine/rt.png'
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

router.get('/cateListright', function(req, res, next) {
	var arr=[
		{
			img:'//img11.static.yhbimg.com/goodsimg/2019/06/11/11/01616660eaea906141d603b86b32a81d66.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'风衣'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2019/06/11/11/011d36a94f922897075b5aac64d206e618.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'风衣'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/06/11/10/01b083855d5e111cd17dc3e640dff83867.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'风衣'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/06/11/11/02086c8cd53780b66639cfafcc46073799.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'风衣'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/05/27/15/01c14879dd8db284e858852f5aa696fc73.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'风衣'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/05/22/11/0157dde408bfc092825128eee5a1851822.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'风衣'
		},
		{
			img:'//img10.static.yhbimg.com/goodsimg/2019/06/11/10/013b31f2e8c1743cc2cbcfa21650567670.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'风衣'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/06/19/16/02b04f76001063ea680abcef7530592ce8.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'风衣'
		},
		{
			img:'//img11.static.yhbimg.com/goodsimg/2019/06/19/16/01fc273733ed669c3909ab0393ea1f6c86.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'风衣'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/06/25/14/02c29375f66bbc5c70ec723be5ad05f2cb.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'风衣'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/05/14/11/029a52981050566ea29d53aebfc8dd1091.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'风衣'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/06/02/16/02b194b3c016f1915f01f5751685700add.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'风衣'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/05/10/14/02cc21f6c4eb249513b6e16034079a7ca0.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'风衣'
		},
		{
			img:'//img12.static.yhbimg.com/goodsimg/2019/07/02/14/022259340c1ae231671c021711071894cd.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'风衣'
		},
		{
			img:'//img13.static.yhbimg.com/goodsimg/2019/06/19/18/027db6cc496c60075e879c23cdfc676256.jpg?imageMogr2/thumbnail/235x314/position/center/quality/60',
			title:'风衣'
		}
	]
	
	
  	res.send(arr);
});


module.exports = router;