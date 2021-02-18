new Waline({
el: '#waline',
path: location.pathname,
placeholder: "不用登陆也可以发表评论哦q(≧▽≦q)",
avator: "retro",
serverURL: 'https://waline.rubbybutton.vercel.app/',
// uploadImage: function(file) {
//     const formData = new FormData();
//     formData.append('image', file);
    
//     return fetch('https://7bu.top/upload/upload.html', {
//         method: 'POST',
//         body: formData
//     }).then(resp => resp.json()).then(resp => resp.data.url);
//     },


emojiCDN: 'https://cdn.jsdelivr.net/gh/Dreamy-TZK/iemotion-pic@latest/img/',
emojiMaps: {
    "bilibili_2333-卖萌": "bilibili_2333/卖萌.png",
    "bilibili_2333-吃惊": "bilibili_2333/吃惊.png",
    "bilibili_2333-吐魂": "bilibili_2333/吐魂.png",
    "bilibili_2333-喝水": "bilibili_2333/喝水.png",
    "bilibili_2333-困惑": "bilibili_2333/困惑.png",
    "bilibili_2333-大哭": "bilibili_2333/大哭.png",
    "bilibili_2333-大笑": "bilibili_2333/大笑.png",
    "bilibili_2333-委屈": "bilibili_2333/委屈.png",
    "bilibili_2333-怒": "bilibili_2333/怒.png",
    "bilibili_2333-无言": "bilibili_2333/无言.png",
    "bilibili_2333-汗": "bilibili_2333/汗.png",
    "bilibili_2333-疑问": "bilibili_2333/疑问.png",
    "bilibili_2333-第一": "bilibili_2333/第一.png",
    "bilibili_2333-耶": "bilibili_2333/耶.png",
    "bilibili_2333-郁闷": "bilibili_2333/郁闷.png",
    "bilibili_tv_png-doge": "bilibili_tv_png/doge.png",
    "bilibili_tv_png-亲亲": "bilibili_tv_png/亲亲.png",
    "bilibili_tv_png-偷笑": "bilibili_tv_png/偷笑.png",
    "bilibili_tv_png-再见": "bilibili_tv_png/再见.png",
    "bilibili_tv_png-冷漠": "bilibili_tv_png/冷漠.png",
    "bilibili_tv_png-发怒": "bilibili_tv_png/发怒.png",
    "bilibili_tv_png-发财": "bilibili_tv_png/发财.png",
    "bilibili_tv_png-可爱": "bilibili_tv_png/可爱.png",
    "bilibili_tv_png-吐血": "bilibili_tv_png/吐血.png",
    "bilibili_tv_png-呆": "bilibili_tv_png/呆.png",
    "bilibili_tv_png-呕吐": "bilibili_tv_png/呕吐.png",
    "bilibili_tv_png-困": "bilibili_tv_png/困.png",
    "bilibili_tv_png-坏笑": "bilibili_tv_png/坏笑.png",
    "bilibili_tv_png-大佬": "bilibili_tv_png/大佬.png",
    "bilibili_tv_png-大哭": "bilibili_tv_png/大哭.png",
    "bilibili_tv_png-委屈": "bilibili_tv_png/委屈.png",
    "bilibili_tv_png-害羞": "bilibili_tv_png/害羞.png",
    "bilibili_tv_png-尴尬": "bilibili_tv_png/尴尬.png",
    "bilibili_tv_png-微笑": "bilibili_tv_png/微笑.png",
    "bilibili_tv_png-思考": "bilibili_tv_png/思考.png",
    "bilibili_tv_png-惊吓": "bilibili_tv_png/惊吓.png",
    "bilibili_tv_png-打脸": "bilibili_tv_png/打脸.png",
    "bilibili_tv_png-抓狂": "bilibili_tv_png/抓狂.png",
    "bilibili_tv_png-抠鼻": "bilibili_tv_png/抠鼻.png",
    "bilibili_tv_png-斜眼笑": "bilibili_tv_png/斜眼笑.png",
    "bilibili_tv_png-无奈": "bilibili_tv_png/无奈.png",
    "bilibili_tv_png-晕": "bilibili_tv_png/晕.png",
    "bilibili_tv_png-流汗": "bilibili_tv_png/流汗.png",
    "bilibili_tv_png-流泪": "bilibili_tv_png/流泪.png",
    "bilibili_tv_png-流鼻血": "bilibili_tv_png/流鼻血.png",
    "bilibili_tv_png-点赞": "bilibili_tv_png/点赞.png",
    "bilibili_tv_png-生气": "bilibili_tv_png/生气.png",
    "bilibili_tv_png-生病": "bilibili_tv_png/生病.png",
    "bilibili_tv_png-疑问": "bilibili_tv_png/疑问.png",
    "bilibili_tv_png-白眼": "bilibili_tv_png/白眼.png",
    "bilibili_tv_png-皱眉": "bilibili_tv_png/皱眉.png",
    "bilibili_tv_png-目瞪口呆": "bilibili_tv_png/目瞪口呆.png",
    "bilibili_tv_png-睡着": "bilibili_tv_png/睡着.png",
    "bilibili_tv_png-笑哭": "bilibili_tv_png/笑哭.png",
    "bilibili_tv_png-腼腆": "bilibili_tv_png/腼腆.png",
    "bilibili_tv_png-色": "bilibili_tv_png/色.png",
    "bilibili_tv_png-调侃": "bilibili_tv_png/调侃.png",
    "bilibili_tv_png-调皮": "bilibili_tv_png/调皮.png",
    "bilibili_tv_png-鄙视": "bilibili_tv_png/鄙视.png",
    "bilibili_tv_png-闭嘴": "bilibili_tv_png/闭嘴.png",
    "bilibili_tv_png-难过": "bilibili_tv_png/难过.png",
    "bilibili_tv_png-馋": "bilibili_tv_png/馋.png",
    "bilibili_tv_png-鬼脸": "bilibili_tv_png/鬼脸.png",
    "bilibili_tv_png-黑人问号": "bilibili_tv_png/黑人问号.png",
    "bilibili_tv_png-鼓掌": "bilibili_tv_png/鼓掌.png",
    "原神-1": "原神/1.jpg",
    "原神-10": "原神/10.jpg",
    "原神-11": "原神/11.jpg",
    "原神-12": "原神/12.jpg",
    "原神-13": "原神/13.jpg",
    "原神-14": "原神/14.jpg",
    "原神-15": "原神/15.jpg",
    "原神-16": "原神/16.jpg",
    "原神-17": "原神/17.jpg",
    "原神-18": "原神/18.jpg",
    "原神-19": "原神/19.jpg",
    "原神-2": "原神/2.jpg",
    "原神-20": "原神/20.jpg",
    "原神-21": "原神/21.jpg",
    "原神-22": "原神/22.jpg",
    "原神-3": "原神/3.jpg",
    "原神-4": "原神/4.jpg",
    "原神-5": "原神/5.jpg",
    "原神-6": "原神/6.jpg",
    "原神-7": "原神/7.jpg",
    "原神-8": "原神/8.jpg",
    "原神-9": "原神/9.jpg"
}


});

// //这一段是加载最近评论的
// window.addEventListener('load', function() {
//     Waline.Widget.RecentComments({
//     el: '#waline-recent',
//     serverURL: 'https://waline.rubbybutton.vercel.app/',
//     count: 4
//     });
// });