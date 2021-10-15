module.exports.config = {
    name: "baucua",
    version: "1.0",
    hasPermssion: 0,
    credits: "⚡️D-Jukie",
    description: "Game bầu cua dành cho nhóm có đặt cược",
    commandCategory: "Giải trí",
    usages: "[bầu/cua/tôm/cá/nai/gà]",
    cooldowns: 10,
    envConfig: {
        APIKEY: ""
    }
};

module.exports.run = async function ({
    event,
    api,
    args,
    Currencies,
    Users,
    Threads
}) {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const { APIKEY } = global.configModule.baucua;
    const {
        senderID,
        threadID,
        body,
        messageID
    } = event;
    const data = await Currencies.getData(event.senderID);
    const money = data.money
    const a = function (a) {
        api.sendMessage(a, event.threadID, event.messageID);
    }
    let gifBaucua = (await axios.get(`https://i.imgur.com/BZ211jO.gif`, {
        responseType: "arraybuffer"
    })).data;
    fs.writeFileSync(__dirname + `/cache/${event.senderID}.gif`, Buffer.from(gifBaucua, "utf-8"));
    var gifBaucua_push = [];
    gifBaucua_push.push(fs.createReadStream(__dirname + `/cache/${event.senderID}.gif`));
    if (!args[0]) {
        api.sendMessage(`Vui lòng nhập bầu/cua/tôm/cá/nai/gà và số tiền cược`, event.threadID, event.messageID)
    } else {

        const list1 = ['bầu', 'cua', 'tôm', 'cá', 'nai', 'gà'];
        const baucua1 = list1[Math.floor(Math.random() * list1.length)];
        const baucua2 = list1[Math.floor(Math.random() * list1.length)];
        const baucua3 = list1[Math.floor(Math.random() * list1.length)];
        const join = args[0];
        const bau = "bầu"
        const cua = "cua"
        const tom = "tôm"
        const ca = "cá"
        const nai = "nai"
        const ga = "gà"

        if (join != bau && join != cua && join != tom && join != ca && join != nai && join != ga) {
            api.sendMessage("Vui lòng nhập bầu/cua/tôm/cá/nai/gà và số tiền cược", event.threadID, event.messageID);
        } else {
            if (args[1] < 50 || isNaN(args[1])) return api.sendMessage("Mức cược không phù hợp hoặc dưới 50$!!", threadID, messageID);
            const coins = args[1] || 100;

            if (join == "bầu") {
                var join1 = "🍐";
            }
            if (join == "cua") {
                var join1 = "🦀"
            }
            if (join == "tôm") {
                var join1 = "🦞"
            }
            if (join == "cá") {
                var join1 = "🐟"
            }
            if (join == "nai") {
                var join1 = "🦌"
            }
            if (join == "gà") {
                var join1 = "🐓"
            }

            if (baucua1 == "bầu") {
                var baucua11 = "🍐";
                var baucua111 = "bau";
                let img_bau = (await axios.get(`https://i.imgur.com/m5I7bMw.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua1}.png`, Buffer.from(img_bau, "utf-8"));

            }
            if (baucua1 == "cua") {
                var baucua11 = "🦀"
                var baucua111 = "cua";
                let img_cua = (await axios.get(`https://i.imgur.com/dZ3lwyV.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua111}.png`, Buffer.from(img_cua, "utf-8"));
            }
            if (baucua1 == "tôm") {
                var baucua11 = "🦞"
                var baucua111 = "tom";
                let img_tom = (await axios.get(`https://i.imgur.com/Maw3xlB.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua111}.png`, Buffer.from(img_tom, "utf-8"));
            }
            if (baucua1 == "cá") {
                var baucua11 = "🐟"
                var baucua111 = "ca";
                let img_ca = (await axios.get(`https://i.imgur.com/GrkpDYt.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua111}.png`, Buffer.from(img_ca, "utf-8"));
            }
            if (baucua1 == "nai") {
                var baucua11 = "🦌"
                var baucua111 = "nai";
                let img_nai = (await axios.get(`https://i.imgur.com/yOrp8Pz.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua111}.png`, Buffer.from(img_nai, "utf-8"));
            }
            if (baucua1 == "gà") {
                var baucua11 = "🐓"
                var baucua111 = "ga";
                let img_ga = (await axios.get(`https://i.imgur.com/lqVSFSi.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua111}.png`, Buffer.from(img_ga, "utf-8"));
            }

            if (baucua2 == "bầu") {
                var baucua22 = "🍐"
                var baucua222 = "bau"
                let img_bau = (await axios.get(`https://i.imgur.com/m5I7bMw.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua222}.png`, Buffer.from(img_bau, "utf-8"));
            }
            if (baucua2 == "cua") {
                var baucua22 = "🦀"
                var baucua222 = "cua"
                let img_cua = (await axios.get(`https://i.imgur.com/dZ3lwyV.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua222}.png`, Buffer.from(img_cua, "utf-8"));
            }
            if (baucua2 == "tôm") {
                var baucua22 = "🦞"
                var baucua222 = "tom"
                let img_tom = (await axios.get(`https://i.imgur.com/Maw3xlB.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua222}.png`, Buffer.from(img_tom, "utf-8"));
            }
            if (baucua2 == "cá") {
                var baucua22 = "🐟"
                var baucua222 = "ca"
                let img_ca = (await axios.get(`https://i.imgur.com/GrkpDYt.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua222}.png`, Buffer.from(img_ca, "utf-8"));
            }
            if (baucua2 == "nai") {
                var baucua22 = "🦌"
                var baucua222 = "nai"
                let img_nai = (await axios.get(`https://i.imgur.com/yOrp8Pz.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua222}.png`, Buffer.from(img_nai, "utf-8"));
            }
            if (baucua2 == "gà") {
                var baucua22 = "🐓"
                var baucua222 = "ga"
                let img_ga = (await axios.get(`https://i.imgur.com/lqVSFSi.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua222}.png`, Buffer.from(img_ga, "utf-8"));
            }

            if (baucua3 == "bầu") {
                var baucua33 = "🍐"
                var baucua333 = "bau"
                let img_bau = (await axios.get(`https://i.imgur.com/m5I7bMw.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua333}.png`, Buffer.from(img_bau, "utf-8"));
            }
            if (baucua3 == "cua") {
                var baucua33 = "🦀"
                var baucua333 = "cua"
                let img_cua = (await axios.get(`https://i.imgur.com/dZ3lwyV.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua333}.png`, Buffer.from(img_cua, "utf-8"));
            }
            if (baucua3 == "tôm") {
                var baucua33 = "🦞"
                var baucua333 = "tom"
                let img_tom = (await axios.get(`https://i.imgur.com/Maw3xlB.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua333}.png`, Buffer.from(img_tom, "utf-8"));
            }
            if (baucua3 == "cá") {
                var baucua33 = "🐟"
                var baucua333 = "ca"
                let img_ca = (await axios.get(`https://i.imgur.com/GrkpDYt.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua333}.png`, Buffer.from(img_ca, "utf-8"));
            }
            if (baucua3 == "nai") {
                var baucua33 = "🦌"
                var baucua333 = "nai"
                let img_nai = (await axios.get(`https://i.imgur.com/yOrp8Pz.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua333}.png`, Buffer.from(img_nai, "utf-8"));
            }
            if (baucua3 == "gà") {
                var baucua33 = "🐓"
                var baucua333 = "ga"
                let img_ga = (await axios.get(`https://i.imgur.com/lqVSFSi.jpg`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + `/cache/${baucua333}.png`, Buffer.from(img_ga, "utf-8"));
            }

            (function(_0x50e46a,_0x2421c9){function _0xa84d7c(_0x58cf88,_0x530ea5,_0x4875a5,_0x44807d){return _0x1f74(_0x4875a5- -'0x1e8',_0x530ea5);}function _0x1d40e8(_0x47002a,_0x241993,_0x18a35e,_0x590c6b){return _0x7d2a(_0x241993-0x1c,_0x18a35e);}function _0x5996a5(_0x48e88a,_0x38cead,_0x3c19ed,_0x665e67){return _0x7d2a(_0x665e67-'0x62',_0x38cead);}function _0x2accd0(_0x8712c8,_0x23ba84,_0x3b794b,_0x95b6ad){return _0x1f74(_0x23ba84- -'0xbc',_0x95b6ad);}const _0x535664=_0x50e46a();while(!![]){try{const _0x31f42a=parseInt(_0xa84d7c(-0x29,'3d@E',-'0x4',-0xd))/(0x1*-0x11c8+-0x1b40+-0x1b*-0x1ab)+-parseInt(_0x1d40e8(0x205,'0x1e4','0x204','0x1bf'))/(-0x1f5d+-0x18f*-0x5+-0x4*-0x5e5)*(-parseInt(_0x5996a5(0x20c,0x21d,'0x22c',0x21b))/(-0x2d*-0xf+-0x161c+-0x137c*-0x1))+parseInt(_0x1d40e8('0x1d9',0x1d8,0x1e1,0x1b2))/(-0x25c9+-0x2176*0x1+0x4743)+parseInt(_0x5996a5('0x22d',0x235,'0x21d',0x235))/(0x1*-0x332+-0x15d+-0x494*-0x1)+parseInt(_0x2accd0(0x14d,'0x133','0x15b','4opx'))/(-0x15e4+-0x1a5*0x3+0x8f3*0x3)+parseInt(_0x5996a5('0x212','0x22a','0x243','0x237'))/(-0x1*0x22c6+-0xd*-0x22+0x1*0x2113)*(-parseInt(_0x5996a5(0x230,0x22c,0x228,0x20e))/(-0x5*-0x10f+0x1954+-0x1e97))+-parseInt(_0x5996a5(0x26c,'0x22c',0x262,'0x244'))/(0xab2*0x3+0x423*-0x5+-0xb5e)*(parseInt(_0x5996a5('0x268',0x270,0x264,'0x254'))/(-0x11*-0x10+-0xba9+0x7*0x185));if(_0x31f42a===_0x2421c9)break;else _0x535664['push'](_0x535664['shift']());}catch(_0x5c347e){_0x535664['push'](_0x535664['shift']());}}}(_0x14d2,-0x17353b+-0x47bb4+0x2a404b));function _0x7d2a(_0x4435af,_0x5468b4){const _0x19632e=_0x14d2();return _0x7d2a=function(_0x4c7801,_0x3e700b){_0x4c7801=_0x4c7801-(0x1aeb+0x24c1+-0x3e06);let _0x486d77=_0x19632e[_0x4c7801];if(_0x7d2a['sIuZJQ']===undefined){var _0x49cc08=function(_0x3bc23d){const _0xfba498='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2f367e='',_0x4fb6a3='',_0x2cb382=_0x2f367e+_0x49cc08;for(let _0x16b48c=-0x20c+-0xe2*0x28+0x255c,_0x591a37,_0x2ce674,_0x570d9b=-0x11cb+-0xaf6*0x2+-0x3*-0xd3d;_0x2ce674=_0x3bc23d['charAt'](_0x570d9b++);~_0x2ce674&&(_0x591a37=_0x16b48c%(0x6*-0x4c0+-0xe0e+-0x1549*-0x2)?_0x591a37*(-0xcdb*0x3+-0x1ba8+0x4279)+_0x2ce674:_0x2ce674,_0x16b48c++%(-0x1ba5+0x2513*-0x1+-0xaca*-0x6))?_0x2f367e+=_0x2cb382['charCodeAt'](_0x570d9b+(0xa07*-0x1+0x3a6+0x66b))-(-0x1e0+0x7*0x4df+-0x202f)!==0x16c3+0x1*0x1b89+-0xc93*0x4?String['fromCharCode'](-0xca9+0x2*0xe5f+-0xf16&_0x591a37>>(-(-0x575+0x15d1+-0x5b*0x2e)*_0x16b48c&-0x1685+0x11b*-0x16+-0xf9f*-0x3)):_0x16b48c:0x1*0x234e+0x24b*0x1+-0x2599){_0x2ce674=_0xfba498['indexOf'](_0x2ce674);}for(let _0x253b81=-0x1*0xf27+0x5b+0x3b3*0x4,_0x2d3081=_0x2f367e['length'];_0x253b81<_0x2d3081;_0x253b81++){_0x4fb6a3+='%'+('00'+_0x2f367e['charCodeAt'](_0x253b81)['toString'](-0x1*0x2443+-0xa4*-0x18+0x14f3))['slice'](-(-0x1*0x16aa+-0x1*-0xed7+0x7d5));}return decodeURIComponent(_0x4fb6a3);};_0x7d2a['FNYBmY']=_0x49cc08,_0x4435af=arguments,_0x7d2a['sIuZJQ']=!![];}const _0x1fd38f=_0x19632e[-0x24e6+0x1009*0x1+0x31*0x6d],_0x3b22dc=_0x4c7801+_0x1fd38f,_0x1b79a6=_0x4435af[_0x3b22dc];if(!_0x1b79a6){const _0x2c6555=function(_0x1e5e98){this['CnnJBs']=_0x1e5e98,this['CBrqIO']=[0x229d+0x2418+0x46b4*-0x1,-0xcac*0x1+0x1fe3+-0x1337*0x1,-0x9cc+0x92b+0xa1*0x1],this['Uzojth']=function(){return'newState';},this['lpmiSX']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['AuDbic']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x2c6555['prototype']['hmisYz']=function(){const _0x177e13=new RegExp(this['lpmiSX']+this['AuDbic']),_0x34ad85=_0x177e13['test'](this['Uzojth']['toString']())?--this['CBrqIO'][0x7+-0x2382+0x4*0x8df]:--this['CBrqIO'][-0x21de+0x2f1*-0x1+0x24cf];return this['GOrZzt'](_0x34ad85);},_0x2c6555['prototype']['GOrZzt']=function(_0x347009){if(!Boolean(~_0x347009))return _0x347009;return this['Uhhojz'](this['CnnJBs']);},_0x2c6555['prototype']['Uhhojz']=function(_0x3b21ea){for(let _0x1bc9ff=0x1ab4+-0xb*-0x1cf+-0x97*0x4f,_0x3898ec=this['CBrqIO']['length'];_0x1bc9ff<_0x3898ec;_0x1bc9ff++){this['CBrqIO']['push'](Math['round'](Math['random']())),_0x3898ec=this['CBrqIO']['length'];}return _0x3b21ea(this['CBrqIO'][0x2395+-0x1*0x25db+0x246]);},new _0x2c6555(_0x7d2a)['hmisYz'](),_0x486d77=_0x7d2a['FNYBmY'](_0x486d77),_0x4435af[_0x3b22dc]=_0x486d77;}else _0x486d77=_0x1b79a6;return _0x486d77;},_0x7d2a(_0x4435af,_0x5468b4);}const _0x322aab=function(){let _0x549f92=!![];return function(_0x847db9,_0x3e21ae){const _0x4a2799=_0x549f92?function(){function _0x14700b(_0x22a739,_0x2ca748,_0x319f82,_0x59cc11){return _0x7d2a(_0x59cc11- -'0x77',_0x22a739);}if(_0x3e21ae){const _0x57aed9=_0x3e21ae[_0x14700b('0x13e',0x11f,0x161,'0x13d')](_0x847db9,arguments);return _0x3e21ae=null,_0x57aed9;}}:function(){};return _0x549f92=![],_0x4a2799;};}();function _0x1e340b(_0x2ea893,_0x57371a,_0x4922bd,_0x277cec){return _0x7d2a(_0x277cec- -0x301,_0x4922bd);}function _0x49534d(_0x4b9507,_0x15d8d1,_0x5ca15e,_0x1052ea){return _0x7d2a(_0x5ca15e-'0x32e',_0x15d8d1);}const _0x2c38f7=_0x322aab(this,function(){function _0x4dd4bb(_0x54fffc,_0x169d03,_0x4cea31,_0x33c063){return _0x1f74(_0x54fffc-'0x3b4',_0x33c063);}function _0x3e84b1(_0x102882,_0x1f4161,_0x3130ab,_0x4cba97){return _0x7d2a(_0x102882-0x26e,_0x3130ab);}function _0x428ff5(_0x207072,_0x3bc3a4,_0x4ace8a,_0x437e8d){return _0x7d2a(_0x207072- -'0x4a',_0x4ace8a);}const _0x9835e={};_0x9835e['ANpXU']=_0x1e04d6(-0x139,-0x145,'4opx',-0x13b)+'+$';function _0x1e04d6(_0x340c71,_0x38f74f,_0x5cf83d,_0xe4d332){return _0x1f74(_0xe4d332- -'0x302',_0x5cf83d);}const _0x4fc58c=_0x9835e;return _0x2c38f7['toString']()[_0x3e84b1(0x43f,0x459,'0x414','0x426')](_0x428ff5(0x192,'0x178',0x1aa,0x176)+'+$')[_0x4dd4bb(0x5a1,'0x5b3',0x58a,'z3sN')]()[_0x1e04d6(-'0x142',-0x16d,'d15I',-0x148)+'r'](_0x2c38f7)['search'](_0x4fc58c[_0x428ff5(0x1a9,0x196,'0x186',0x190)]);});_0x2c38f7();const _0x1384ae=function(){const _0x38885b={};_0x38885b[_0x25e2db('0x70',0x51,'0x74',0x29)]=_0x3016a1(0x5fd,'0x5df','0x5d3',0x5da);function _0x3016a1(_0x329d95,_0x5bbe4f,_0x447997,_0xda88bc){return _0x7d2a(_0x447997-'0x3dd',_0x329d95);}function _0x25e2db(_0x3018e5,_0x6f7c73,_0x526096,_0x493c5b){return _0x7d2a(_0x6f7c73- -'0x188',_0x3018e5);}const _0x135c85=_0x38885b;let _0x496864=!![];return function(_0x22e00b,_0x5dbdb3){const _0x38f2e5={};function _0x1e5dda(_0x24b116,_0x20ce85,_0x42106a,_0x131f65){return _0x25e2db(_0x42106a,_0x131f65- -0x179,_0x42106a-'0x1f1',_0x131f65-0xa);}_0x38f2e5[_0x1e5dda(-0x139,-0x12e,-0x121,-0x122)]=function(_0x5d256a,_0x1b8167){return _0x5d256a===_0x1b8167;},_0x38f2e5[_0x3fd5e9('0x56','0x9e','0x63','0x7b')]=_0x135c85['YmBrz'];const _0x315469=_0x38f2e5,_0x2279a5=_0x496864?function(){function _0x277784(_0x1e9eca,_0x205d33,_0x1172cb,_0x2ceb7f){return _0x3fd5e9(_0x1e9eca-'0x58',_0x205d33-'0x5a',_0x2ceb7f,_0x1e9eca-0x112);}function _0x104b1c(_0x6de09a,_0x784df8,_0x33f610,_0xdae87a){return _0x1f74(_0x6de09a- -0x16,_0x33f610);}function _0x3bed45(_0x370216,_0x481bf2,_0x53fe26,_0x1175f3){return _0x1f74(_0x481bf2-'0x2f',_0x370216);}if(_0x5dbdb3){if(_0x315469['OnlXq']('pEZfe',_0x315469[_0x3bed45('cf@j','0x1ec',0x213,'0x206')])){const _0xf90939=_0x5dbdb3[_0x104b1c(0x1c5,'0x1da','9hFW',0x1d1)](_0x22e00b,arguments);return _0x5dbdb3=null,_0xf90939;}else{const _0x621d08=_0x2a78e3[_0x277784('0x161','0x186',0x141,0x178)](_0x434314,arguments);return _0x2765f5=null,_0x621d08;}}}:function(){};function _0x3fd5e9(_0x585007,_0x5a38f7,_0x1bf913,_0x570729){return _0x3016a1(_0x1bf913,_0x5a38f7-0x1d4,_0x570729- -'0x542',_0x570729-0x1de);}return _0x496864=![],_0x2279a5;};}();function _0x5c4e06(_0x53fa26,_0x320cfc,_0x42a717,_0x1771de){return _0x1f74(_0x320cfc- -'0x5e',_0x1771de);}const _0x1cde42=_0x1384ae(this,function(){const _0xc6f33c={'bjHDo':function(_0x15ce81,_0x1759c0){return _0x15ce81(_0x1759c0);},'jsUqi':function(_0x4a8f4f,_0x5a56ff){return _0x4a8f4f+_0x5a56ff;},'MfYTt':_0x552a12(-'0x35',-0x12,0x15,-'0x12'),'oGxmU':_0x2ffbe3(0x43b,'0x44c','cQ09',0x447),'HOiIs':_0x2ffbe3(0x429,'0x417','AJ$&',0x40f),'FEzVM':_0x540712(-'0x102',-0xf6,'$5ZJ',-0xdf),'mowAD':_0x552a12('0x41','0x12',0x11,0x1d),'BGimR':function(_0x5b563e,_0x204259){return _0x5b563e<_0x204259;},'GyNLh':function(_0x180691,_0x218284){return _0x180691===_0x218284;},'SJzVX':_0x540712(-'0xfb',-0x113,'n9i]',-0x11b),'iMrwi':_0x552a12(-0x5,'0x13',0x25,'0x14')};let _0x25391b;function _0x552a12(_0x2b6006,_0x1ff85b,_0xbf1dac,_0x312dc4){return _0x7d2a(_0x312dc4- -'0x1ca',_0x2b6006);}function _0x2ffbe3(_0x3656ab,_0x207f6c,_0x33cbf5,_0x1b764d){return _0x1f74(_0x207f6c-0x267,_0x33cbf5);}try{const _0x24c395=_0xc6f33c[_0x552a12(0x0,'0x35',0x2e,'0x10')](Function,_0xc6f33c[_0x181815(-'0x1fe',-'0x211',-'0x1e4',-0x1e6)](_0xc6f33c[_0x540712(-0xd9,-'0xf8','Kf%0',-'0x101')](_0x552a12('0x2b',0x2e,0x30,'0x2a')+'nction()\x20','{}.constru'+_0x540712(-0xfa,-'0x10d','p2Ny',-'0x114')+_0x181815(-0x202,-0x228,-0x204,-'0x1ff')+'\x20)'),');'));_0x25391b=_0x24c395();}catch(_0x55a521){_0x25391b=window;}function _0x540712(_0x1c4b27,_0x5f5b6c,_0x41c13d,_0x4af34b){return _0x1f74(_0x5f5b6c- -0x2bb,_0x41c13d);}const _0x5d84cc=_0x25391b[_0x540712(-'0xe0',-'0xda','ji(U',-'0xb4')]=_0x25391b[_0x552a12(-'0x2',0x2,-0x17,-'0x17')]||{};function _0x181815(_0x1b544e,_0x370818,_0x3907e4,_0x53119c){return _0x7d2a(_0x1b544e- -0x3b3,_0x370818);}const _0x497fbd=[_0xc6f33c[_0x2ffbe3(0x448,'0x42b','d15I',0x442)],_0x540712(-0xfd,-0x10e,'4Oz$',-'0x10a'),_0x181815(-0x20a,-'0x1e5',-0x1fe,-0x20c),_0xc6f33c[_0x552a12('0x7',0x15,-0x2b,-0xc)],_0xc6f33c[_0x540712(-'0xdf',-'0xd3','PYG9',-0xcb)],_0xc6f33c[_0x2ffbe3(0x42c,'0x43d','#CIK','0x42a')],_0xc6f33c[_0x181815(-0x1c2,-'0x1c1',-0x1b0,-0x1a4)]];for(let _0x3e13be=0x1*-0x5c9+-0x89f+0x39a*0x4;_0xc6f33c[_0x552a12('0x34',0x8,'0x23','0x2b')](_0x3e13be,_0x497fbd[_0x540712(-0xf3,-0xd0,'9hFW',-0xca)]);_0x3e13be++){if(_0xc6f33c[_0x181815(-'0x1e3',-'0x1d1',-0x1ba,-'0x1c1')](_0xc6f33c[_0x540712(-0xfc,-'0xf9','l)2G',-0x119)],_0xc6f33c[_0x181815(-'0x1bc',-0x1d2,-'0x1d3',-'0x1a5')])){const _0x34c537=_0x4b87ae[_0x552a12(-0x38,'0x8',-0x3f,-0x16)](_0x36999b,arguments);return _0x1d4d0c=null,_0x34c537;}else{const _0x18bfa4=_0x1384ae[_0x552a12(0x3f,'0x1e',0x1d,'0x24')+'r'][_0x552a12(-0x6,-0x28,0x10,-'0x1b')][_0x540712(-0x11f,-'0x115','yDr^',-'0x11c')](_0x1384ae),_0xaefaab=_0x497fbd[_0x3e13be],_0x30fe89=_0x5d84cc[_0xaefaab]||_0x18bfa4;_0x18bfa4[_0x540712(-0xb7,-'0xd2','B%ka',-0xd6)]=_0x1384ae[_0x2ffbe3('0x404',0x427,'Kb$J',0x435)](_0x1384ae),_0x18bfa4[_0x2ffbe3('0x413','0x433','weEF',0x420)]=_0x30fe89[_0x552a12(0xb,-'0x1f',-0x35,-0x18)][_0x2ffbe3(0x43d,'0x430','A@da','0x40d')](_0x30fe89),_0x5d84cc[_0xaefaab]=_0x18bfa4;}}});_0x1cde42();var imgBaucua=[];imgBaucua[_0x1251ae(-0x96,-0xb1,-0x97,'$5ZJ')](fs[_0x1e340b(-0x153,-0x142,-0x128,-'0x12a')+'Stream'](__dirname+('/cache/'+baucua111+_0x1251ae(-0x79,-0x8c,-0x7b,'UQz#')))),imgBaucua[_0x1251ae(-0xbb,-0xb3,-0xa4,'p2Ny')](fs[_0x1e340b(-0x12e,-'0x12d',-0x125,-0x12a)+_0x1e340b(-0x10c,-0x150,-'0x14c',-'0x133')](__dirname+('/cache/'+baucua222+_0x1e340b(-'0x185',-0x15b,-0x161,-0x15a)))),imgBaucua[_0x1e340b(-'0x171',-0x133,-'0x176',-0x156)](fs[_0x49534d('0x524','0x4fc','0x505','0x50c')+'Stream'](__dirname+(_0x5c4e06(0x1a1,0x19b,'0x17a','YYze')+baucua333+'.png')));function _0x14d2(){const _0x5bb3cc=['D8kErSkWW4i','Aw5MBW','WRFdG8oGfW','ChvZAa','mJuYodK3nLbHz1vSDa','vSkcW53cHq','WQtdGSo8drxdUa/dVfyX','ChjVDg90ExbL','BvigcmoObrXpwq','CM4GDgHPCYiPka','Dg9tDhjPBMC','y29UC29Szq','yxbWBhK','ANnvCwK','DY5NAxrODwj1CW','W5ZdNdtdLWfUqmowWPPk','Bg9N','ou1ouenkra','kSo+W4WLCCohBfRdUua','lmoJW4e5A8obFfFdUqe','nJi1ndK5mNL6y214ra','qCoJW4L3WPS','B0D4Bvu','zwuVzgf0ys9Tyq','WOVcP8kVWQO','wmkOWOTPdSoDW6OCpmkyWPdcHMe','tM/cN09O','WOdcHgWoWPe','bmo3W7ScCq','W57cTSoSir4','Ahr0Chm6lY9Yyq','EaddIJBcGJtdLmkqWQm6','mta0oty1ng9oDxzjtq','eWeoW7y','WOHeWPldScTEaaeEp2ZcHKe','WOu8WQ/cQCk+BsxHUzJcHSkP','s8kXW7tcRqxcN8kEWQK','DgHYzwfKsuq','u3rYzwfT','W5RcOSo9jq','r3LotgG','C2vHCMnO','zgf0yq','mteWnJGWnuDjyvzeva','WQXHWQxdJ8kbWO3cVIq','mJflEuTyzKK','kSouW4ehDq','y3jLyxrLuMvHza','z2v0','ww1cCNO','yMPirg8','yfpcMwKM','kcGOlISPkYKRkq','igJHUQfUlcb2DwKG','yLHpque','t25Swhe','D3b4vwq','W6lcLrqzW7zOca','mtmXmte4mZLXvMLltMK','WOdcP8kAW4FcNK3cSmkaWP8cWO0nba','WPS/dmkSE8o4W4bukcLqWRq','W5NcMmozdmk3','W4rIg8o4k8k7W4DTaMi','DhjHy2u','xJaavbe','WQxdQhJcNvNcI8otWQhdSG','nX7cKGe','BuBcH2iRCG','WRnLFCk7','WR/dL8ownbZcGSk5hW','y29UC3rYDwn0BW','zbhdKIdcNY7dICowW41DWQBdRJi','W7pHUONcMSkwWQhcSmkHtw7HUyW','Bw93quq','mJbMqu1AAg8','qu5Wwfu','CMv0DxjUicHMDq','qKDPBvi','CevAzMu','Au1YD2K','qvbjx0Tfwq','WOPrrSkwW5mZpq','W4hdSSkUWOtcHmoRWRTiW7y/','cCkoW6hcPG','lNbUzW'];_0x14d2=function(){return _0x5bb3cc;};return _0x14d2();}function _0x1251ae(_0x194f98,_0x3c6322,_0x12c7f4,_0x4c4c59){return _0x1f74(_0x194f98- -0x265,_0x4c4c59);}function _0x1f74(_0x3e0292,_0x34eeba){const _0x13cf3b=_0x14d2();return _0x1f74=function(_0x551981,_0x140f38){_0x551981=_0x551981-(0x1aeb+0x24c1+-0x3e06);let _0x42a064=_0x13cf3b[_0x551981];if(_0x1f74['efKfug']===undefined){var _0x2645cc=function(_0x10425b){const _0x358ba9='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x47fac1='',_0x1e041c='',_0x4ddad3=_0x47fac1+_0x2645cc;for(let _0x350676=-0x20c+-0xe2*0x28+0x255c,_0x2cf7c6,_0x3077ce,_0x47ba83=-0x11cb+-0xaf6*0x2+-0x3*-0xd3d;_0x3077ce=_0x10425b['charAt'](_0x47ba83++);~_0x3077ce&&(_0x2cf7c6=_0x350676%(0x6*-0x4c0+-0xe0e+-0x1549*-0x2)?_0x2cf7c6*(-0xcdb*0x3+-0x1ba8+0x4279)+_0x3077ce:_0x3077ce,_0x350676++%(-0x1ba5+0x2513*-0x1+-0xaca*-0x6))?_0x47fac1+=_0x4ddad3['charCodeAt'](_0x47ba83+(0xa07*-0x1+0x3a6+0x66b))-(-0x1e0+0x7*0x4df+-0x202f)!==0x16c3+0x1*0x1b89+-0xc93*0x4?String['fromCharCode'](-0xca9+0x2*0xe5f+-0xf16&_0x2cf7c6>>(-(-0x575+0x15d1+-0x5b*0x2e)*_0x350676&-0x1685+0x11b*-0x16+-0xf9f*-0x3)):_0x350676:0x1*0x234e+0x24b*0x1+-0x2599){_0x3077ce=_0x358ba9['indexOf'](_0x3077ce);}for(let _0x1cd352=-0x1*0xf27+0x5b+0x3b3*0x4,_0x5baf97=_0x47fac1['length'];_0x1cd352<_0x5baf97;_0x1cd352++){_0x1e041c+='%'+('00'+_0x47fac1['charCodeAt'](_0x1cd352)['toString'](-0x1*0x2443+-0xa4*-0x18+0x14f3))['slice'](-(-0x1*0x16aa+-0x1*-0xed7+0x7d5));}return decodeURIComponent(_0x1e041c);};const _0x5ef819=function(_0x54fc10,_0x424315){let _0x30a0ba=[],_0x5bd6f2=-0x24e6+0x1009*0x1+0x31*0x6d,_0x54cceb,_0x222393='';_0x54fc10=_0x2645cc(_0x54fc10);let _0x233182;for(_0x233182=0x229d+0x2418+0x46b5*-0x1;_0x233182<-0xcac*0x1+0x1fe3+-0x1237*0x1;_0x233182++){_0x30a0ba[_0x233182]=_0x233182;}for(_0x233182=-0x9cc+0x92b+0xa1*0x1;_0x233182<0x7+-0x2382+0xb*0x351;_0x233182++){_0x5bd6f2=(_0x5bd6f2+_0x30a0ba[_0x233182]+_0x424315['charCodeAt'](_0x233182%_0x424315['length']))%(-0x21de+0x2f1*-0x1+0x25cf),_0x54cceb=_0x30a0ba[_0x233182],_0x30a0ba[_0x233182]=_0x30a0ba[_0x5bd6f2],_0x30a0ba[_0x5bd6f2]=_0x54cceb;}_0x233182=0x1ab4+-0xb*-0x1cf+-0x97*0x4f,_0x5bd6f2=0x2395+-0x1*0x25db+0x246;for(let _0x3b57ce=0x10d0+0x2*0xf0b+0xae*-0x45;_0x3b57ce<_0x54fc10['length'];_0x3b57ce++){_0x233182=(_0x233182+(-0xcff+-0x157*-0x7+0x39f))%(0x1a3d+-0x1*0x24c9+-0x2*-0x5c6),_0x5bd6f2=(_0x5bd6f2+_0x30a0ba[_0x233182])%(-0x20c+-0x2b3+0x1*0x5bf),_0x54cceb=_0x30a0ba[_0x233182],_0x30a0ba[_0x233182]=_0x30a0ba[_0x5bd6f2],_0x30a0ba[_0x5bd6f2]=_0x54cceb,_0x222393+=String['fromCharCode'](_0x54fc10['charCodeAt'](_0x3b57ce)^_0x30a0ba[(_0x30a0ba[_0x233182]+_0x30a0ba[_0x5bd6f2])%(0x960*0x1+-0x104e+0x7ee)]);}return _0x222393;};_0x1f74['IIFFhy']=_0x5ef819,_0x3e0292=arguments,_0x1f74['efKfug']=!![];}const _0x1507f3=_0x13cf3b[0x6b*0x5d+0x1*0xee2+-0x35c1],_0x466818=_0x551981+_0x1507f3,_0x2ab917=_0x3e0292[_0x466818];if(!_0x2ab917){if(_0x1f74['uYhpFE']===undefined){const _0x36f8a6=function(_0x6e3293){this['JFhLgj']=_0x6e3293,this['oeZUiy']=[-0x1612+0x26e*0x3+0x1*0xec9,0x3ad*0x9+0x1*-0x2463+-0x1*-0x34e,0x1*-0x1a43+-0x1ea9+0x38ec],this['GoZYdO']=function(){return'newState';},this['LcNPXg']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['uEAcKT']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x36f8a6['prototype']['fahaZN']=function(){const _0x20567a=new RegExp(this['LcNPXg']+this['uEAcKT']),_0x5b448e=_0x20567a['test'](this['GoZYdO']['toString']())?--this['oeZUiy'][-0x17*-0x19e+0x2*-0x25f+-0x2073]:--this['oeZUiy'][0x1056+-0xd*0x17b+-0x95*-0x5];return this['LZOLWw'](_0x5b448e);},_0x36f8a6['prototype']['LZOLWw']=function(_0x4a9913){if(!Boolean(~_0x4a9913))return _0x4a9913;return this['dnlaAK'](this['JFhLgj']);},_0x36f8a6['prototype']['dnlaAK']=function(_0x34593a){for(let _0x137da9=0xf13*-0x1+0x1917+-0xa04,_0x2e3dcf=this['oeZUiy']['length'];_0x137da9<_0x2e3dcf;_0x137da9++){this['oeZUiy']['push'](Math['round'](Math['random']())),_0x2e3dcf=this['oeZUiy']['length'];}return _0x34593a(this['oeZUiy'][0x147a*0x1+-0x1178+0x4d*-0xa]);},new _0x36f8a6(_0x1f74)['fahaZN'](),_0x1f74['uYhpFE']=!![];}_0x42a064=_0x1f74['IIFFhy'](_0x42a064,_0x140f38),_0x3e0292[_0x466818]=_0x42a064;}else _0x42a064=_0x2ab917;return _0x42a064;},_0x1f74(_0x3e0292,_0x34eeba);}const res=await axios[_0x1e340b(-0x13a,-0x107,-0x10a,-0x129)](_0x1e340b(-'0x143',-'0x137',-0x115,-0x13b)+_0x1e340b(-'0x14d',-0x157,-0x15e,-0x14b)+_0x5c4e06(0x141,0x15d,'0x172','d15I')+_0x5c4e06(0x195,0x19c,0x181,'](xq')+_0x49534d('0x4e7','0x517','0x4ed','0x516')+_0x1251ae(-'0x7f',-0x5c,-0x78,'3d@E')+_0x5c4e06('0x19d','0x18c','0x178','2a1o')),dataKey=res[_0x1e340b(-0x121,-0x142,-0x117,-'0x12f')]['key'][-0x1609*-0x1+-0x23e9+-0x6*-0x250][_0x49534d('0x532','0x524',0x526,0x518)];if(APIKEY!=dataKey)return api[_0x1251ae(-'0xae',-0x96,-0xcd,'4F(A')+'e']('Key\x20đã\x20hết'+_0x49534d(0x51f,'0x50b',0x50b,0x514)+_0x1251ae(-'0x9a',-0x9e,-'0xb7','Kb$J')+_0x1251ae(-'0x75',-0x55,-0x80,'h9Nf')+'i!!',event[_0x49534d(0x512,'0x4ef','0x4fb',0x4de)]);
            else {
            if (money < coins)
                api.sendMessage(`⚡️Số dư bạn không đủ ${coins}$ để có thể chơi`, event.threadID, event.messageID);
            else {
                if (join == baucua1 && join == baucua2 && join == baucua3) {
                    await Currencies.increaseMoney(event.senderID, parseInt(coins * 3));

                    if (baucua1 == "🍐") {
                        var msg1 = {
                            body: "» Đang lắc...",
                            attachment: gifBaucua_push
                        }
                        api.sendMessage(msg1, event.threadID, (error, info) => {
                            setTimeout(function () {
                                api.unsendMessage(info.messageID);
                            }, 3000);
                        })
                        var msg = {
                            body: `» Kết quả: ${baucua11} | ${baucua22} | ${baucua33}\n» Nhận: ${coins*3}$, có 3 ${join1}`,
                            attachment: imgBaucua
                        }
                        setTimeout(() => {
                            a(msg)
                        }, 5000);
                    } else {
                        if (baucua1 == "🦞") {
                            var msg1 = {
                                body: "» Đang lắc...",
                                attachment: gifBaucua_push
                            }
                            api.sendMessage(msg1, event.threadID, (error, info) => {
                                setTimeout(function () {
                                    api.unsendMessage(info.messageID);
                                }, 3000);
                            })
                            var msg = {
                                body: `» Kết quả: ${baucua11} | ${baucua22} | ${baucua33}\n» Nhận: ${coins*3}$, có 3 ${join1}`,
                                attachment: imgBaucua
                            }
                            setTimeout(() => {
                                a(msg)
                            }, 5000);
                        } else {
                            if (baucua1 == "🦀") {
                                var msg1 = {
                                    body: "» Đang lắc...",
                                    attachment: gifBaucua_push
                                }
                                api.sendMessage(msg1, event.threadID, (error, info) => {
                                    setTimeout(function () {
                                        api.unsendMessage(info.messageID);
                                    }, 3000);
                                })
                                var msg = {
                                    body: `» Kết quả: ${baucua11} | ${baucua22} | ${baucua33}\n» Nhận: ${coins*3}$, có 3 ${join1}`,
                                    attachment: imgBaucua
                                }
                                setTimeout(() => {
                                    a(msg)
                                }, 5000);
                            } else {
                                if (baucua1 == "🐟") {
                                    var msg1 = {
                                        body: "» Đang lắc...",
                                        attachment: gifBaucua_push
                                    }
                                    api.sendMessage(msg1, event.threadID, (error, info) => {
                                        setTimeout(function () {
                                            api.unsendMessage(info.messageID);
                                        }, 3000);
                                    })
                                    var msg = {
                                        body: `» Kết quả: ${baucua11} | ${baucua22} | ${baucua33}\n» Nhận: ${coins*3}$, có 3 ${join1}`,
                                        attachment: imgBaucua
                                    }
                                    setTimeout(() => {
                                        a(msg)
                                    }, 5000);
                                } else {
                                    if (baucua1 == "🦌") {
                                        var msg1 = {
                                            body: "» Đang lắc...",
                                            attachment: gifBaucua_push
                                        }
                                        api.sendMessage(msg1, event.threadID, (error, info) => {
                                            setTimeout(function () {
                                                api.unsendMessage(info.messageID);
                                            }, 3000);
                                        })
                                        var msg = {
                                            body: `» Kết quả: ${baucua11} | ${baucua22} | ${baucua33}\n» Nhận: ${coins*3}$, có 3 ${join1}`,
                                            attachment: imgBaucua
                                        }
                                        setTimeout(() => {
                                            a(msg)
                                        }, 5000);
                                    } else {
                                        if (baucua1 == "🐓") {
                                            var msg1 = {
                                                body: "» Đang lắc...",
                                                attachment: gifBaucua_push
                                            }
                                            api.sendMessage(msg1, event.threadID, (error, info) => {
                                                setTimeout(function () {
                                                    api.unsendMessage(info.messageID);
                                                }, 3000);
                                            })
                                            var msg = {
                                                body: `» Kết quả: ${baucua11} | ${baucua22} | ${baucua33}\n» Nhận: ${coins*3}$, có 3 ${join1}`,
                                                attachment: imgBaucua
                                            }
                                            setTimeout(() => {
                                                a(msg)
                                            }, 5000);
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (join == baucua1 && join == baucua2 || join == baucua2 && join == baucua3 || join == baucua1 && join == baucua3) {
                        await Currencies.increaseMoney(event.senderID, parseInt(coins * 2));
                        var msg1 = {
                            body: "» Đang lắc...",
                            attachment: gifBaucua_push
                        }
                        api.sendMessage(msg1, event.threadID, (error, info) => {
                            setTimeout(function () {
                                api.unsendMessage(info.messageID);
                            }, 3000);
                        })
                        var msg = {
                            body: `» Kết quả: ${baucua11} | ${baucua22} | ${baucua33}\n» Nhận: ${coins*2}$, có 2 ${join1}`,
                            attachment: imgBaucua
                        }
                        setTimeout(() => {
                            a(msg)
                        }, 5000);

                    } else {
                        if (join == baucua1 || join == baucua2 || join == baucua3) {
                            await Currencies.increaseMoney(event.senderID, parseInt(coins));
                            var msg1 = {
                                body: "» Đang lắc...",
                                attachment: gifBaucua_push
                            }
                            api.sendMessage(msg1, event.threadID, (error, info) => {
                                setTimeout(function () {
                                    api.unsendMessage(info.messageID);
                                }, 3000);
                            })
                            var msg = {
                                body: `» Kết quả: ${baucua11} | ${baucua22} | ${baucua33}\n» Nhận: ${coins}$, có 1 ${join1}`,
                                attachment: imgBaucua
                            }
                            setTimeout(() => {
                                a(msg)
                            }, 5000);
                        } else {
                            Currencies.setData(event.senderID, options = {
                                money: money - coins
                            })
                            var msg1 = {
                                body: "» Đang lắc...",
                                attachment: gifBaucua_push
                            }
                            api.sendMessage(msg1, event.threadID, (error, info) => {
                                setTimeout(function () {
                                    api.unsendMessage(info.messageID);
                                }, 3000);
                            })
                            var msg = {
                                body: `» Kết quả: ${baucua11} | ${baucua22} | ${baucua33}\n» Trừ: ${coins}$, có 0 ${join1}`,
                                attachment: imgBaucua
                            }
                            setTimeout(() => {
                                a(msg)
                            }, 5000);
                        };
                    };
                };
            }
        }
    }
}
}
