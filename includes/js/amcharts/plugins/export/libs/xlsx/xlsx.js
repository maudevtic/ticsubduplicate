/* xlsx.js (C) 2013-2015 SheetJS -- http://sheetjs.com */
/* vim: set ts=2: */
/*jshint -W041 */
/*jshint funcscope:true, eqnull:true */
var XLSX = {};
(function make_xlsx(XLSX){
XLSX.version = '0.8.0';
var current_codepage = 1200, current_cptable;
if(typeof module !== "undefined" && typeof require !== 'undefined') {
    if(typeof cptable === 'undefined') cptable = require('./dist/cpexcel');
    current_cptable = cptable[current_codepage];
}
function reset_cp() { set_cp(1200); }
var set_cp = function(cp) { current_codepage = cp; };

function char_codes(data) { var o = []; for(var i = 0, len = data.length; i < len; ++i) o[i] = data.charCodeAt(i); return o; }
var debom_xml = function(data) { return data; };

var _getchar = function _gc1(x) { return String.fromCharCode(x); };
if(typeof cptable !== 'undefined') {
    set_cp = function(cp) { current_codepage = cp; current_cptable = cptable[cp]; };
    debom_xml = function(data) {
        if(data.charCodeAt(0) === 0xFF && data.charCodeAt(1) === 0xFE) { return cptable.utils.decode(1200, char_codes(data.substr(2))); }
        return data;
    };
    _getchar = function _gc2(x) {
        if(current_codepage === 1200) return String.fromCharCode(x);
        return cptable.utils.decode(current_codepage, [x&255,x>>8])[0];
    };
}
var Base64 = (function make_b64(){
    var map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    return {
        encode: function(input, utf8) {
            var o = "";
            var c1, c2, c3, e1, e2, e3, e4;
            for(var i = 0; i < input.length; ) {
                c1 = input.charCodeAt(i++);
                c2 = input.charCodeAt(i++);
                c3 = input.charCodeAt(i++);
                e1 = c1 >> 2;
                e2 = (c1 & 3) << 4 | c2 >> 4;
                e3 = (c2 & 15) << 2 | c3 >> 6;
                e4 = c3 & 63;
                if (isNaN(c2)) { e3 = e4 = 64; }
                else if (isNaN(c3)) { e4 = 64; }
                o += map.charAt(e1) + map.charAt(e2) + map.charAt(e3) + map.charAt(e4);
            }
            return o;
        },
        decode: function b64_decode(input, utf8) {
            var o = "";
            var c1, c2, c3;
            var e1, e2, e3, e4;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            for(var i = 0; i < input.length;) {
                e1 = map.indexOf(input.charAt(i++));
                e2 = map.indexOf(input.charAt(i++));
                e3 = map.indexOf(input.charAt(i++));
                e4 = map.indexOf(input.charAt(i++));
                c1 = e1 << 2 | e2 >> 4;
                c2 = (e2 & 15) << 4 | e3 >> 2;
                c3 = (e3 & 3) << 6 | e4;
                o += String.fromCharCode(c1);
                if (e3 != 64) { o += String.fromCharCode(c2); }
                if (e4 != 64) { o += String.fromCharCode(c3); }
            }
            return o;
        }
    };
})();
var has_buf = (typeof Buffer !== 'undefined');

function new_raw_buf(len) {
    /* jshint -W056 */
    return new (has_buf ? Buffer : Array)(len);
    /* jshint +W056 */
}

function s2a(s) {
    if(has_buf) return new Buffer(s, "binary");
    return s.split("").map(function(x){ return x.charCodeAt(0) & 0xff; });
}

var bconcat = function(bufs) { return [].concat.apply([], bufs); };

var chr0 = /\u0000/g, chr1 = /[\u0001-\u0006]/;
/* ssf.js (C) 2013-2014 SheetJS -- http://sheetjs.com */
/*jshint -W041 */
var SSF = {};
var make_ssf = function make_ssf(SSF){
SSF.version = '0.8.1';
function _strrev(x) { var o = "", i = x.length-1; while(i>=0) o += x.charAt(i--); return o; }
function fill(c,l) { var o = ""; while(o.length < l) o+=c; return o; }
function pad0(v,d){var t=""+v; return t.length>=d?t:fill('0',d-t.length)+t;}
function pad_(v,d){var t=""+v;return t.length>=d?t:fill(' ',d-t.length)+t;}
function rpad_(v,d){var t=""+v; return t.length>=d?t:t+fill(' ',d-t.length);}
function pad0r1(v,d){var t=""+Math.round(v); return t.length>=d?t:fill('0',d-t.length)+t;}
function pad0r2(v,d){var t=""+v; return t.length>=d?t:fill('0',d-t.length)+t;}
var p2_32 = Math.pow(2,32);
function pad0r(v,d){if(v>p2_32||v<-p2_32) return pad0r1(v,d); var i = Math.round(v); return pad0r2(i,d); }
function isgeneral(s, i) { return s.length >= 7 + i && (s.charCodeAt(i)|32) === 103 && (s.charCodeAt(i+1)|32) === 101 && (s.charCodeAt(i+2)|32) === 110 && (s.charCodeAt(i+3)|32) === 101 && (s.charCodeAt(i+4)|32) === 114 && (s.charCodeAt(i+5)|32) === 97 && (s.charCodeAt(i+6)|32) === 108; }
/* Options */
var opts_fmt = [
    ["date1904", 0],
    ["output", ""],
    ["WTF", false]
];
function fixopts(o){
    for(var y = 0; y != opts_fmt.length; ++y) if(o[opts_fmt[y][0]]===undefined) o[opts_fmt[y][0]]=opts_fmt[y][1];
}
SSF.opts = opts_fmt;
var table_fmt = {
    0:  'General',
    1:  '0',
    2:  '0.00',
    3:  '#,##0',
    4:  '#,##0.00',
    9:  '0%',
    10: '0.00%',
    11: '0.00E+00',
    12: '# ?/?',
    13: '# ??/??',
    14: 'm/d/yy',
    15: 'd-mmm-yy',
    16: 'd-mmm',
    17: 'mmm-yy',
    18: 'h:mm AM/PM',
    19: 'h:mm:ss AM/PM',
    20: 'h:mm',
    21: 'h:mm:ss',
    22: 'm/d/yy h:mm',
    37: '#,##0 ;(#,##0)',
    38: '#,##0 ;[Red](#,##0)',
    39: '#,##0.00;(#,##0.00)',
    40: '#,##0.00;[Red](#,##0.00)',
    45: 'mm:ss',
    46: '[h]:mm:ss',
    47: 'mmss.0',
    48: '##0.0E+0',
    49: '@',
    56: '"上午/下午 "hh"時"mm"分"ss"秒 "',
    65535: 'General'
};
var days = [
    ['Sun', 'Sunday'],
    ['Mon', 'Monday'],
    ['Tue', 'Tuesday'],
    ['Wed', 'Wednesday'],
    ['Thu', 'Thursday'],
    ['Fri', 'Friday'],
    ['Sat', 'Saturday']
];
var months = [
    ['J', 'Jan', 'January'],
    ['F', 'Feb', 'February'],
    ['M', 'Mar', 'March'],
    ['A', 'Apr', 'April'],
    ['M', 'May', 'May'],
    ['J', 'Jun', 'June'],
    ['J', 'Jul', 'July'],
    ['A', 'Aug', 'August'],
    ['S', 'Sep', 'September'],
    ['O', 'Oct', 'October'],
    ['N', 'Nov', 'November'],
    ['D', 'Dec', 'December']
];
function frac(x, D, mixed) {
    var sgn = x < 0 ? -1 : 1;
    var B = x * sgn;
    var P_2 = 0, P_1 = 1, P = 0;
    var Q_2 = 1, Q_1 = 0, Q = 0;
    var A = Math.floor(B);
    while(Q_1 < D) {
        A = Math.floor(B);
        P = A * P_1 + P_2;
        Q = A * Q_1 + Q_2;
        if((B - A) < 0.0000000005) break;
        B = 1 / (B - A);
        P_2 = P_1; P_1 = P;
        Q_2 = Q_1; Q_1 = Q;
    }
    if(Q > D) { Q = Q_1; P = P_1; }
    if(Q > D) { Q = Q_2; P = P_2; }
    if(!mixed) return [0, sgn * P, Q];
    if(Q===0) throw "Unexpected state: "+P+" "+P_1+" "+P_2+" "+Q+" "+Q_1+" "+Q_2;
    var q = Math.floor(sgn * P/Q);
    return [q, sgn*P - q*Q, Q];
}
function general_fmt_int(v, opts) { return ""+v; }
SSF._general_int = general_fmt_int;
var general_fmt_num = (function make_general_fmt_num() {
var gnr1 = /\.(\d*[1-9])0+$/, gnr2 = /\.0*$/, gnr4 = /\.(\d*[1-9])0+/, gnr5 = /\.0*[Ee]/, gnr6 = /(E[+-])(\d)$/;
function gfn2(v) {
    var w = (v<0?12:11);
    var o = gfn5(v.toFixed(12)); if(o.length <= w) return o;
    o = v.toPrecision(10); if(o.length <= w) return o;
    return v.toExponential(5);
}
function gfn3(v) {
    var o = v.toFixed(11).replace(gnr1,".$1");
    if(o.length > (v<0?12:11)) o = v.toPrecision(6);
    return o;
}
function gfn4(o) {
    for(var i = 0; i != o.length; ++i) if((o.charCodeAt(i) | 0x20) === 101) return o.replace(gnr4,".$1").replace(gnr5,"E").replace("e","E").replace(gnr6,"$10$2");
    return o;
}
function gfn5(o) {
    //for(var i = 0; i != o.length; ++i) if(o.charCodeAt(i) === 46) return o.replace(gnr2,"").replace(gnr1,".$1");
    //return o;
    return o.indexOf(".") > -1 ? o.replace(gnr2,"").replace(gnr1,".$1") : o;
}
return function general_fmt_num(v, opts) {
    var V = Math.floor(Math.log(Math.abs(v))*Math.LOG10E), o;
    if(V >= -4 && V <= -1) o = v.toPrecision(10+V);
    else if(Math.abs(V) <= 9) o = gfn2(v);
    else if(V === 10) o = v.toFixed(10).substr(0,12);
    else o = gfn3(v);
    return gfn5(gfn4(o));
};})();
SSF._general_num = general_fmt_num;
function general_fmt(v, opts) {
    switch(typeof v) {
        case 'string': return v;
        case 'boolean': return v ? "TRUE" : "FALSE";
        case 'number': return (v|0) === v ? general_fmt_int(v, opts) : general_fmt_num(v, opts);
    }
    throw new Error("unsupported value in General format: " + v);
}
SSF._general = general_fmt;
function fix_hijri(date, o) { return 0; }
function parse_date_code(v,opts,b2) {
    if(v > 2958465 || v < 0) return null;
    var date = (v|0), time = Math.floor(86400 * (v - date)), dow=0;
    var dout=[];
    var out={D:date, T:time, u:86400*(v-date)-time,y:0,m:0,d:0,H:0,M:0,S:0,q:0};
    if(Math.abs(out.u) < 1e-6) out.u = 0;
    fixopts(opts != null ? opts : (opts=[]));
    if(opts.date1904) date += 1462;
    if(out.u > 0.999) {
        out.u = 0;
        if(++time == 86400) { time = 0; ++date; }
    }
    if(date === 60) {dout = b2 ? [1317,10,29] : [1900,2,29]; dow=3;}
    else if(date === 0) {dout = b2 ? [1317,8,29] : [1900,1,0]; dow=6;}
    else {
        if(date > 60) --date;
        /* 1 = Jan 1 1900 */
        var d = new Date(1900,0,1);
        d.setDate(d.getDate() + date - 1);
        dout = [d.getFullYear(), d.getMonth()+1,d.getDate()];
        dow = d.getDay();
        if(date < 60) dow = (dow + 6) % 7;
        if(b2) dow = fix_hijri(d, dout);
    }
    out.y = dout[0]; out.m = dout[1]; out.d = dout[2];
    out.S = time % 60; time = Math.floor(time / 60);
    out.M = time % 60; time = Math.floor(time / 60);
    out.H = time;
    out.q = dow;
    return out;
}
SSF.parse_date_code = parse_date_code;
/*jshint -W086 */
function write_date(type, fmt, val, ss0) {
    var o="", ss=0, tt=0, y = val.y, out, outl = 0;
    switch(type) {
        case 98: /* 'b' buddhist year */
            y = val.y + 543;
            /* falls through */
        case 121: /* 'y' year */
        switch(fmt.length) {
            case 1: case 2: out = y % 100; outl = 2; break;
            default: out = y % 10000; outl = 4; break;
        } break;
        case 109: /* 'm' month */
        switch(fmt.length) {
            case 1: case 2: out = val.m; outl = fmt.length; break;
            case 3: return months[val.m-1][1];
            case 5: return months[val.m-1][0];
            default: return months[val.m-1][2];
        } break;
        case 100: /* 'd' day */
        switch(fmt.length) {
            case 1: case 2: out = val.d; outl = fmt.length; break;
            case 3: return days[val.q][0];
            default: return days[val.q][1];
        } break;
        case 104: /* 'h' 12-hour */
        switch(fmt.length) {
            case 1: case 2: out = 1+(val.H+11)%12; outl = fmt.length; break;
            default: throw 'bad hour format: ' + fmt;
        } break;
        case 72: /* 'H' 24-hour */
        switch(fmt.length) {
            case 1: case 2: out = val.H; outl = fmt.length; break;
            default: throw 'bad hour format: ' + fmt;
        } break;
        case 77: /* 'M' minutes */
        switch(fmt.length) {
            case 1: case 2: out = val.M; outl = fmt.length; break;
            default: throw 'bad minute format: ' + fmt;
        } break;
        case 115: /* 's' seconds */
        if(val.u === 0) switch(fmt) {
            case 's': case 'ss': return pad0(val.S, fmt.length);
            case '.0': case '.00': case '.000':
        }
        switch(fmt) {
            case 's': case 'ss': case '.0': case '.00': case '.000':
                if(ss0 >= 2) tt = ss0 === 3 ? 1000 : 100;
                else tt = ss0 === 1 ? 10 : 1;
                ss = Math.round((tt)*(val.S + val.u));
                if(ss >= 60*tt) ss = 0;
                if(fmt === 's') return ss === 0 ? "0" : ""+ss/tt;
                o = pad0(ss,2 + ss0);
                if(fmt === 'ss') return o.substr(0,2);
                return "." + o.substr(2,fmt.length-1);
            default: throw 'bad second format: ' + fmt;
        }
        case 90: /* 'Z' absolute time */
        switch(fmt) {
            case '[h]': case '[hh]': out = val.D*24+val.H; break;
            case '[m]': case '[mm]': out = (val.D*24+val.H)*60+val.M; break;
            case '[s]': case '[ss]': out = ((val.D*24+val.H)*60+val.M)*60+Math.round(val.S+val.u); break;
            default: throw 'bad abstime format: ' + fmt;
        } outl = fmt.length === 3 ? 1 : 2; break;
        case 101: /* 'e' era */
            out = y; outl = 1;
    }
    if(outl > 0) return pad0(out, outl); else return "";
}
/*jshint +W086 */
function commaify(s) {
    if(s.length <= 3) return s;
    var j = (s.length % 3), o = s.substr(0,j);
    for(; j!=s.length; j+=3) o+=(o.length > 0 ? "," : "") + s.substr(j,3);
    return o;
}
var write_num = (function make_write_num(){
var pct1 = /%/g;
function write_num_pct(type, fmt, val){
    var sfmt = fmt.replace(pct1,""), mul = fmt.length - sfmt.length;
    return write_num(type, sfmt, val * Math.pow(10,2*mul)) + fill("%",mul);
}
function write_num_cm(type, fmt, val){
    var idx = fmt.length - 1;
    while(fmt.charCodeAt(idx-1) === 44) --idx;
    return write_num(type, fmt.substr(0,idx), val / Math.pow(10,3*(fmt.length-idx)));
}
function write_num_exp(fmt, val){
    var o;
    var idx = fmt.indexOf("E") - fmt.indexOf(".") - 1;
    if(fmt.match(/^#+0.0E\+0$/)) {
        var period = fmt.indexOf("."); if(period === -1) period=fmt.indexOf('E');
        var ee = Math.floor(Math.log(Math.abs(val))*Math.LOG10E)%period;
        if(ee < 0) ee += period;
        o = (val/Math.pow(10,ee)).toPrecision(idx+1+(period+ee)%period);
        if(o.indexOf("e") === -1) {
            var fakee = Math.floor(Math.log(Math.abs(val))*Math.LOG10E);
            if(o.indexOf(".") === -1) o = o[0] + "." + o.substr(1) + "E+" + (fakee - o.length+ee);
            else o += "E+" + (fakee - ee);
            while(o.substr(0,2) === "0.") {
                o = o[0] + o.substr(2,period) + "." + o.substr(2+period);
                o = o.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.");
            }
            o = o.replace(/\+-/,"-");
        }
        o = o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function($$,$1,$2,$3) { return $1 + $2 + $3.substr(0,(period+ee)%period) + "." + $3.substr(ee) + "E"; });
    } else o = val.toExponential(idx);
    if(fmt.match(/E\+00$/) && o.match(/e[+-]\d$/)) o = o.substr(0,o.length-1) + "0" + o[o.length-1];
    if(fmt.match(/E\-/) && o.match(/e\+/)) o = o.replace(/e\+/,"e");
    return o.replace("e","E");
}
var frac1 = /# (\?+)( ?)\/( ?)(\d+)/;
function write_num_f1(r, aval, sign) {
    var den = parseInt(r[4]), rr = Math.round(aval * den), base = Math.floor(rr/den);
    var myn = (rr - base*den), myd = den;
    return sign + (base === 0 ? "" : ""+base) + " " + (myn === 0 ? fill(" ", r[1].length + 1 + r[4].length) : pad_(myn,r[1].length) + r[2] + "/" + r[3] + pad0(myd,r[4].length));
}
function write_num_f2(r, aval, sign) {
    return sign + (aval === 0 ? "" : ""+aval) + fill(" ", r[1].length + 2 + r[4].length);
}
var dec1 = /^#*0*\.(0+)/;
var closeparen = /\).*[0#]/;
var phone = /\(###\) ###\\?-####/;
function hashq(str) {
    var o = "", cc;
    for(var i = 0; i != str.length; ++i) switch((cc=str.charCodeAt(i))) {
        case 35: break;
        case 63: o+= " "; break;
        case 48: o+= "0"; break;
        default: o+= String.fromCharCode(cc);
    }
    return o;
}
function rnd(val, d) { var dd = Math.pow(10,d); return ""+(Math.round(val * dd)/dd); }
function dec(val, d) { return Math.round((val-Math.floor(val))*Math.pow(10,d)); }
function flr(val) { if(val < 2147483647 && val > -2147483648) return ""+(val >= 0 ? (val|0) : (val-1|0)); return ""+Math.floor(val); }
function write_num_flt(type, fmt, val) {
    if(type.charCodeAt(0) === 40 && !fmt.match(closeparen)) {
        var ffmt = fmt.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");
        if(val >= 0) return write_num_flt('n', ffmt, val);
        return '(' + write_num_flt('n', ffmt, -val) + ')';
    }
    if(fmt.charCodeAt(fmt.length - 1) === 44) return write_num_cm(type, fmt, val);
    if(fmt.indexOf('%') !== -1) return write_num_pct(type, fmt, val);
    if(fmt.indexOf('E') !== -1) return write_num_exp(fmt, val);
    if(fmt.charCodeAt(0) === 36) return "$"+write_num_flt(type,fmt.substr(fmt[1]==' '?2:1),val);
    var o, oo;
    var r, ri, ff, aval = Math.abs(val), sign = val < 0 ? "-" : "";
    if(fmt.match(/^00+$/)) return sign + pad0r(aval,fmt.length);
    if(fmt.match(/^[#?]+$/)) {
        o = pad0r(val,0); if(o === "0") o = "";
        return o.length > fmt.length ? o : hashq(fmt.substr(0,fmt.length-o.length)) + o;
    }
    if((r = fmt.match(frac1)) !== null) return write_num_f1(r, aval, sign);
    if(fmt.match(/^#+0+$/) !== null) return sign + pad0r(aval,fmt.length - fmt.indexOf("0"));
    if((r = fmt.match(dec1)) !== null) {
        o = rnd(val, r[1].length).replace(/^([^\.]+)$/,"$1."+r[1]).replace(/\.$/,"."+r[1]).replace(/\.(\d*)$/,function($$, $1) { return "." + $1 + fill("0", r[1].length-$1.length); });
        return fmt.indexOf("0.") !== -1 ? o : o.replace(/^0\./,".");
    }
    fmt = fmt.replace(/^#+([0.])/, "$1");
    if((r = fmt.match(/^(0*)\.(#*)$/)) !== null) {
        return sign + rnd(aval, r[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,r[1].length?"0.":".");
    }
    if((r = fmt.match(/^#,##0(\.?)$/)) !== null) return sign + commaify(pad0r(aval,0));
    if((r = fmt.match(/^#,##0\.([#0]*0)$/)) !== null) {
        return val < 0 ? "-" + write_num_flt(type, fmt, -val) : commaify(""+(Math.floor(val))) + "." + pad0(dec(val, r[1].length),r[1].length);
    }
    if((r = fmt.match(/^#,#*,#0/)) !== null) return write_num_flt(type,fmt.replace(/^#,#*,/,""),val);
    if((r = fmt.match(/^([0#]+)(\\?-([0#]+))+$/)) !== null) {
        o = _strrev(write_num_flt(type, fmt.replace(/[\\-]/g,""), val));
        ri = 0;
        return _strrev(_strrev(fmt.replace(/\\/g,"")).replace(/[0#]/g,function(x){return ri<o.length?o[ri++]:x==='0'?'0':"";}));
    }
    if(fmt.match(phone) !== null) {
        o = write_num_flt(type, "##########", val);
        return "(" + o.substr(0,3) + ") " + o.substr(3, 3) + "-" + o.substr(6);
    }
    var oa = "";
    if((r = fmt.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) !== null) {
        ri = Math.min(r[4].length,7);
        ff = frac(aval, Math.pow(10,ri)-1, false);
        o = "" + sign;
        oa = write_num("n", r[1], ff[1]);
        if(oa[oa.length-1] == " ") oa = oa.substr(0,oa.length-1) + "0";
        o += oa + r[2] + "/" + r[3];
        oa = rpad_(ff[2],ri);
        if(oa.length < r[4].length) oa = hashq(r[4].substr(r[4].length-oa.length)) + oa;
        o += oa;
        return o;
    }
    if((r = fmt.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) !== null) {
        ri = Math.min(Math.max(r[1].length, r[4].length),7);
        ff = frac(aval, Math.pow(10,ri)-1, true);
        return sign + (ff[0]||(ff[1] ? "" : "0")) + " " + (ff[1] ? pad_(ff[1],ri) + r[2] + "/" + r[3] + rpad_(ff[2],ri): fill(" ", 2*ri+1 + r[2].length + r[3].length));
    }
    if((r = fmt.match(/^[#0?]+$/)) !== null) {
        o = pad0r(val, 0);
        if(fmt.length <= o.length) return o;
        return hashq(fmt.substr(0,fmt.length-o.length)) + o;
    }
  if((r = fmt.match(/^([#0?]+)\.([#0]+)$/)) !== null) {
        o = "" + val.toFixed(Math.min(r[2].length,10)).replace(/([^0])0+$/,"$1");
        ri = o.indexOf(".");
        var lres = fmt.indexOf(".") - ri, rres = fmt.length - o.length - lres;
        return hashq(fmt.substr(0,lres) + o + fmt.substr(fmt.length-rres));
    }
    if((r = fmt.match(/^00,000\.([#0]*0)$/)) !== null) {
        ri = dec(val, r[1].length);
        return val < 0 ? "-" + write_num_flt(type, fmt, -val) : commaify(flr(val)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function($$) { return "00," + ($$.length < 3 ? pad0(0,3-$$.length) : "") + $$; }) + "." + pad0(ri,r[1].length);
    }
    switch(fmt) {
        case "#,###": var x = commaify(pad0r(aval,0)); return x !== "0" ? sign + x : "";
        default:
    }
    throw new Error("unsupported format |" + fmt + "|");
}
function write_num_cm2(type, fmt, val){
    var idx = fmt.length - 1;
    while(fmt.charCodeAt(idx-1) === 44) --idx;
    return write_num(type, fmt.substr(0,idx), val / Math.pow(10,3*(fmt.length-idx)));
}
function write_num_pct2(type, fmt, val){
    var sfmt = fmt.replace(pct1,""), mul = fmt.length - sfmt.length;
    return write_num(type, sfmt, val * Math.pow(10,2*mul)) + fill("%",mul);
}
function write_num_exp2(fmt, val){
    var o;
    var idx = fmt.indexOf("E") - fmt.indexOf(".") - 1;
    if(fmt.match(/^#+0.0E\+0$/)) {
        var period = fmt.indexOf("."); if(period === -1) period=fmt.indexOf('E');
        var ee = Math.floor(Math.log(Math.abs(val))*Math.LOG10E)%period;
        if(ee < 0) ee += period;
        o = (val/Math.pow(10,ee)).toPrecision(idx+1+(period+ee)%period);
        if(!o.match(/[Ee]/)) {
            var fakee = Math.floor(Math.log(Math.abs(val))*Math.LOG10E);
            if(o.indexOf(".") === -1) o = o[0] + "." + o.substr(1) + "E+" + (fakee - o.length+ee);
            else o += "E+" + (fakee - ee);
            o = o.replace(/\+-/,"-");
        }
        o = o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function($$,$1,$2,$3) { return $1 + $2 + $3.substr(0,(period+ee)%period) + "." + $3.substr(ee) + "E"; });
    } else o = val.toExponential(idx);
    if(fmt.match(/E\+00$/) && o.match(/e[+-]\d$/)) o = o.substr(0,o.length-1) + "0" + o[o.length-1];
    if(fmt.match(/E\-/) && o.match(/e\+/)) o = o.replace(/e\+/,"e");
    return o.replace("e","E");
}
function write_num_int(type, fmt, val) {
    if(type.charCodeAt(0) === 40 && !fmt.match(closeparen)) {
        var ffmt = fmt.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");
        if(val >= 0) return write_num_int('n', ffmt, val);
        return '(' + write_num_int('n', ffmt, -val) + ')';
    }
    if(fmt.charCodeAt(fmt.length - 1) === 44) return write_num_cm2(type, fmt, val);
    if(fmt.indexOf('%') !== -1) return write_num_pct2(type, fmt, val);
    if(fmt.indexOf('E') !== -1) return write_num_exp2(fmt, val);
    if(fmt.charCodeAt(0) === 36) return "$"+write_num_int(type,fmt.substr(fmt[1]==' '?2:1),val);
    var o;
    var r, ri, ff, aval = Math.abs(val), sign = val < 0 ? "-" : "";
    if(fmt.match(/^00+$/)) return sign + pad0(aval,fmt.length);
    if(fmt.match(/^[#?]+$/)) {
        o = (""+val); if(val === 0) o = "";
        return o.length > fmt.length ? o : hashq(fmt.substr(0,fmt.length-o.length)) + o;
    }
    if((r = fmt.match(frac1)) !== null) return write_num_f2(r, aval, sign);
    if(fmt.match(/^#+0+$/) !== null) return sign + pad0(aval,fmt.length - fmt.indexOf("0"));
    if((r = fmt.match(dec1)) !== null) {
        o = (""+val).replace(/^([^\.]+)$/,"$1."+r[1]).replace(/\.$/,"."+r[1]).replace(/\.(\d*)$/,function($$, $1) { return "." + $1 + fill("0", r[1].length-$1.length); });
        return fmt.indexOf("0.") !== -1 ? o : o.replace(/^0\./,".");
    }
    fmt = fmt.replace(/^#+([0.])/, "$1");
    if((r = fmt.match(/^(0*)\.(#*)$/)) !== null) {
        return sign + (""+aval).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,r[1].length?"0.":".");
    }
    if((r = fmt.match(/^#,##0(\.?)$/)) !== null) return sign + commaify((""+aval));
    if((r = fmt.match(/^#,##0\.([#0]*0)$/)) !== null) {
        return val < 0 ? "-" + write_num_int(type, fmt, -val) : commaify((""+val)) + "." + fill('0',r[1].length);
    }
    if((r = fmt.match(/^#,#*,#0/)) !== null) return write_num_int(type,fmt.replace(/^#,#*,/,""),val);
    if((r = fmt.match(/^([0#]+)(\\?-([0#]+))+$/)) !== null) {
        o = _strrev(write_num_int(type, fmt.replace(/[\\-]/g,""), val));
        ri = 0;
        return _strrev(_strrev(fmt.replace(/\\/g,"")).replace(/[0#]/g,function(x){return ri<o.length?o[ri++]:x==='0'?'0':"";}));
    }
    if(fmt.match(phone) !== null) {
        o = write_num_int(type, "##########", val);
        return "(" + o.substr(0,3) + ") " + o.substr(3, 3) + "-" + o.substr(6);
    }
    var oa = "";
    if((r = fmt.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) !== null) {
        ri = Math.min(r[4].length,7);
        ff = frac(aval, Math.pow(10,ri)-1, false);
        o = "" + sign;
        oa = write_num("n", r[1], ff[1]);
        if(oa[oa.length-1] == " ") oa = oa.substr(0,oa.length-1) + "0";
        o += oa + r[2] + "/" + r[3];
        oa = rpad_(ff[2],ri);
        if(oa.length < r[4].length) oa = hashq(r[4].substr(r[4].length-oa.length)) + oa;
        o += oa;
        return o;
    }
    if((r = fmt.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) !== null) {
        ri = Math.min(Math.max(r[1].length, r[4].length),7);
        ff = frac(aval, Math.pow(10,ri)-1, true);
        return sign + (ff[0]||(ff[1] ? "" : "0")) + " " + (ff[1] ? pad_(ff[1],ri) + r[2] + "/" + r[3] + rpad_(ff[2],ri): fill(" ", 2*ri+1 + r[2].length + r[3].length));
    }
    if((r = fmt.match(/^[#0?]+$/)) !== null) {
        o = "" + val;
        if(fmt.length <= o.length) return o;
        return hashq(fmt.substr(0,fmt.length-o.length)) + o;
    }
    if((r = fmt.match(/^([#0]+)\.([#0]+)$/)) !== null) {
        o = "" + val.toFixed(Math.min(r[2].length,10)).replace(/([^0])0+$/,"$1");
        ri = o.indexOf(".");
        var lres = fmt.indexOf(".") - ri, rres = fmt.length - o.length - lres;
        return hashq(fmt.substr(0,lres) + o + fmt.substr(fmt.length-rres));
    }
    if((r = fmt.match(/^00,000\.([#0]*0)$/)) !== null) {
        return val < 0 ? "-" + write_num_int(type, fmt, -val) : commaify(""+val).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function($$) { return "00," + ($$.length < 3 ? pad0(0,3-$$.length) : "") + $$; }) + "." + pad0(0,r[1].length);
    }
    switch(fmt) {
        case "#,###": var x = commaify(""+aval); return x !== "0" ? sign + x : "";
        default:
    }
    throw new Error("unsupported format |" + fmt + "|");
}
return function write_num(type, fmt, val) {
    return (val|0) === val ? write_num_int(type, fmt, val) : write_num_flt(type, fmt, val);
};})();
function split_fmt(fmt) {
    var out = [];
    var in_str = false, cc;
    for(var i = 0, j = 0; i < fmt.length; ++i) switch((cc=fmt.charCodeAt(i))) {
        case 34: /* '"' */
            in_str = !in_str; break;
        case 95: case 42: case 92: /* '_' '*' '\\' */
            ++i; break;
        case 59: /* ';' */
            out[out.length] = fmt.substr(j,i-j);
            j = i+1;
    }
    out[out.length] = fmt.substr(j);
    if(in_str === true) throw new Error("Format |" + fmt + "| unterminated string ");
    return out;
}
SSF._split = split_fmt;
var abstime = /\[[HhMmSs]*\]/;
function eval_fmt(fmt, v, opts, flen) {
    var out = [], o = "", i = 0, c = "", lst='t', q, dt, j, cc;
    var hr='H';
    /* Tokenize */
    while(i < fmt.length) {
        switch((c = fmt[i])) {
            case 'G': /* General */
                if(!isgeneral(fmt, i)) throw new Error('unrecognized character ' + c + ' in ' +fmt);
                out[out.length] = {t:'G', v:'General'}; i+=7; break;
            case '"': /* Literal text */
                for(o="";(cc=fmt.charCodeAt(++i)) !== 34 && i < fmt.length;) o += String.fromCharCode(cc);
                out[out.length] = {t:'t', v:o}; ++i; break;
            case '\\': var w = fmt[++i], t = (w === "(" || w === ")") ? w : 't';
                out[out.length] = {t:t, v:w}; ++i; break;
            case '_': out[out.length] = {t:'t', v:" "}; i+=2; break;
            case '@': /* Text Placeholder */
                out[out.length] = {t:'T', v:v}; ++i; break;
            case 'B': case 'b':
                if(fmt[i+1] === "1" || fmt[i+1] === "2") {
          if(dt==null) { dt=parse_date_code(v, opts, fmt[i+1] === "2"); if(dt==null) return ""; }
                    out[out.length] = {t:'X', v:fmt.substr(i,2)}; lst = c; i+=2; break;
                }
                /* falls through */
            case 'M': case 'D': case 'Y': case 'H': case 'S': case 'E':
                c = c.toLowerCase();
                /* falls through */
            case 'm': case 'd': case 'y': case 'h': case 's': case 'e': case 'g':
                if(v < 0) return "";
                if(dt==null) { dt=parse_date_code(v, opts); if(dt==null) return ""; }
                o = c; while(++i<fmt.length && fmt[i].toLowerCase() === c) o+=c;
                if(c === 'm' && lst.toLowerCase() === 'h') c = 'M'; /* m = minute */
                if(c === 'h') c = hr;
                out[out.length] = {t:c, v:o}; lst = c; break;
            case 'A':
                q={t:c, v:"A"};
                if(dt==null) dt=parse_date_code(v, opts);
        if(fmt.substr(i, 3) === "A/P") { if(dt!=null) q.v = dt.H >= 12 ? "P" : "A"; q.t = 'T'; hr='h';i+=3;}
        else if(fmt.substr(i,5) === "AM/PM") { if(dt!=null) q.v = dt.H >= 12 ? "PM" : "AM"; q.t = 'T'; i+=5; hr='h'; }
                else { q.t = "t"; ++i; }
                if(dt==null && q.t === 'T') return "";
                out[out.length] = q; lst = c; break;
            case '[':
                o = c;
                while(fmt[i++] !== ']' && i < fmt.length) o += fmt[i];
                if(o.substr(-1) !== ']') throw 'unterminated "[" block: |' + o + '|';
                if(o.match(abstime)) {
                    if(dt==null) { dt=parse_date_code(v, opts); if(dt==null) return ""; }
                    out[out.length] = {t:'Z', v:o.toLowerCase()};
                } else { o=""; }
                break;
            /* Numbers */
            case '.':
                if(dt != null) {
                    o = c; while((c=fmt[++i]) === "0") o += c;
                    out[out.length] = {t:'s', v:o}; break;
                }
                /* falls through */
            case '0': case '#':
                o = c; while("0#?.,E+-%".indexOf(c=fmt[++i]) > -1 || c=='\\' && fmt[i+1] == "-" && "0#".indexOf(fmt[i+2])>-1) o += c;
                out[out.length] = {t:'n', v:o}; break;
            case '?':
                o = c; while(fmt[++i] === c) o+=c;
                q={t:c, v:o}; out[out.length] = q; lst = c; break;
            case '*': ++i; if(fmt[i] == ' ' || fmt[i] == '*') ++i; break; // **
            case '(': case ')': out[out.length] = {t:(flen===1?'t':c), v:c}; ++i; break;
            case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
                o = c; while("0123456789".indexOf(fmt[++i]) > -1) o+=fmt[i];
                out[out.length] = {t:'D', v:o}; break;
            case ' ': out[out.length] = {t:c, v:c}; ++i; break;
            default:
                if(",$-+/():!^&'~{}<>=€acfijklopqrtuvwxz".indexOf(c) === -1) throw new Error('unrecognized character ' + c + ' in ' + fmt);
                out[out.length] = {t:'t', v:c}; ++i; break;
        }
    }
    var bt = 0, ss0 = 0, ssm;
    for(i=out.length-1, lst='t'; i >= 0; --i) {
        switch(out[i].t) {
            case 'h': case 'H': out[i].t = hr; lst='h'; if(bt < 1) bt = 1; break;
            case 's':
                if((ssm=out[i].v.match(/\.0+$/))) ss0=Math.max(ss0,ssm[0].length-1);
                if(bt < 3) bt = 3;
            /* falls through */
            case 'd': case 'y': case 'M': case 'e': lst=out[i].t; break;
            case 'm': if(lst === 's') { out[i].t = 'M'; if(bt < 2) bt = 2; } break;
            case 'X': if(out[i].v === "B2");
                break;
            case 'Z':
                if(bt < 1 && out[i].v.match(/[Hh]/)) bt = 1;
                if(bt < 2 && out[i].v.match(/[Mm]/)) bt = 2;
                if(bt < 3 && out[i].v.match(/[Ss]/)) bt = 3;
        }
    }
    switch(bt) {
        case 0: break;
        case 1:
            if(dt.u >= 0.5) { dt.u = 0; ++dt.S; }
            if(dt.S >=  60) { dt.S = 0; ++dt.M; }
            if(dt.M >=  60) { dt.M = 0; ++dt.H; }
            break;
        case 2:
            if(dt.u >= 0.5) { dt.u = 0; ++dt.S; }
            if(dt.S >=  60) { dt.S = 0; ++dt.M; }
            break;
    }
    /* replace fields */
    var nstr = "", jj;
    for(i=0; i < out.length; ++i) {
        switch(out[i].t) {
            case 't': case 'T': case ' ': case 'D': break;
            case 'X': out[i] = undefined; break;
            case 'd': case 'm': case 'y': case 'h': case 'H': case 'M': case 's': case 'e': case 'b': case 'Z':
                out[i].v = write_date(out[i].t.charCodeAt(0), out[i].v, dt, ss0);
                out[i].t = 't'; break;
            case 'n': case '(': case '?':
                jj = i+1;
                while(out[jj] != null && (
                    (c=out[jj].t) === "?" || c === "D" ||
                    (c === " " || c === "t") && out[jj+1] != null && (out[jj+1].t === '?' || out[jj+1].t === "t" && out[jj+1].v === '/') ||
                    out[i].t === '(' && (c === ' ' || c === 'n' || c === ')') ||
                    c === 't' && (out[jj].v === '/' || '$€'.indexOf(out[jj].v) > -1 || out[jj].v === ' ' && out[jj+1] != null && out[jj+1].t == '?')
                )) {
                    out[i].v += out[jj].v;
                    out[jj] = undefined; ++jj;
                }
                nstr += out[i].v;
                i = jj-1; break;
            case 'G': out[i].t = 't'; out[i].v = general_fmt(v,opts); break;
        }
    }
    var vv = "", myv, ostr;
    if(nstr.length > 0) {
        myv = (v<0&&nstr.charCodeAt(0) === 45 ? -v : v); /* '-' */
        ostr = write_num(nstr.charCodeAt(0) === 40 ? '(' : 'n', nstr, myv); /* '(' */
        jj=ostr.length-1;
        var decpt = out.length;
        for(i=0; i < out.length; ++i) if(out[i] != null && out[i].v.indexOf(".") > -1) { decpt = i; break; }
        var lasti=out.length;
        if(decpt === out.length && ostr.indexOf("E") === -1) {
            for(i=out.length-1; i>= 0;--i) {
                if(out[i] == null || 'n?('.indexOf(out[i].t) === -1) continue;
                if(jj>=out[i].v.length-1) { jj -= out[i].v.length; out[i].v = ostr.substr(jj+1, out[i].v.length); }
                else if(jj < 0) out[i].v = "";
                else { out[i].v = ostr.substr(0, jj+1); jj = -1; }
                out[i].t = 't';
                lasti = i;
            }
            if(jj>=0 && lasti<out.length) out[lasti].v = ostr.substr(0,jj+1) + out[lasti].v;
        }
        else if(decpt !== out.length && ostr.indexOf("E") === -1) {
            jj = ostr.indexOf(".")-1;
            for(i=decpt; i>= 0; --i) {
                if(out[i] == null || 'n?('.indexOf(out[i].t) === -1) continue;
                j=out[i].v.indexOf(".")>-1&&i===decpt?out[i].v.indexOf(".")-1:out[i].v.length-1;
                vv = out[i].v.substr(j+1);
                for(; j>=0; --j) {
                    if(jj>=0 && (out[i].v[j] === "0" || out[i].v[j] === "#")) vv = ostr[jj--] + vv;
                }
                out[i].v = vv;
                out[i].t = 't';
                lasti = i;
            }
            if(jj>=0 && lasti<out.length) out[lasti].v = ostr.substr(0,jj+1) + out[lasti].v;
            jj = ostr.indexOf(".")+1;
            for(i=decpt; i<out.length; ++i) {
                if(out[i] == null || 'n?('.indexOf(out[i].t) === -1 && i !== decpt ) continue;
                j=out[i].v.indexOf(".")>-1&&i===decpt?out[i].v.indexOf(".")+1:0;
                vv = out[i].v.substr(0,j);
                for(; j<out[i].v.length; ++j) {
                    if(jj<ostr.length) vv += ostr[jj++];
                }
                out[i].v = vv;
                out[i].t = 't';
                lasti = i;
            }
        }
    }
    for(i=0; i<out.length; ++i) if(out[i] != null && 'n(?'.indexOf(out[i].t)>-1) {
        myv = (flen >1 && v < 0 && i>0 && out[i-1].v === "-" ? -v:v);
        out[i].v = write_num(out[i].t, out[i].v, myv);
        out[i].t = 't';
    }
    var retval = "";
    for(i=0; i !== out.length; ++i) if(out[i] != null) retval += out[i].v;
    return retval;
}
SSF._eval = eval_fmt;
var cfregex = /\[[=<>]/;
var cfregex2 = /\[([=<>]*)(-?\d+\.?\d*)\]/;
function chkcond(v, rr) {
    if(rr == null) return false;
    var thresh = parseFloat(rr[2]);
    switch(rr[1]) {
        case "=":  if(v == thresh) return true; break;
        case ">":  if(v >  thresh) return true; break;
        case "<":  if(v <  thresh) return true; break;
        case "<>": if(v != thresh) return true; break;
        case ">=": if(v >= thresh) return true; break;
        case "<=": if(v <= thresh) return true; break;
    }
    return false;
}
function choose_fmt(f, v) {
    var fmt = split_fmt(f);
    var l = fmt.length, lat = fmt[l-1].indexOf("@");
    if(l<4 && lat>-1) --l;
    if(fmt.length > 4) throw "cannot find right format for |" + fmt + "|";
    if(typeof v !== "number") return [4, fmt.length === 4 || lat>-1?fmt[fmt.length-1]:"@"];
    switch(fmt.length) {
        case 1: fmt = lat>-1 ? ["General", "General", "General", fmt[0]] : [fmt[0], fmt[0], fmt[0], "@"]; break;
        case 2: fmt = lat>-1 ? [fmt[0], fmt[0], fmt[0], fmt[1]] : [fmt[0], fmt[1], fmt[0], "@"]; break;
        case 3: fmt = lat>-1 ? [fmt[0], fmt[1], fmt[0], fmt[2]] : [fmt[0], fmt[1], fmt[2], "@"]; break;
        case 4: break;
    }
    var ff = v > 0 ? fmt[0] : v < 0 ? fmt[1] : fmt[2];
    if(fmt[0].indexOf("[") === -1 && fmt[1].indexOf("[") === -1) return [l, ff];
    if(fmt[0].match(cfregex) != null || fmt[1].match(cfregex) != null) {
        var m1 = fmt[0].match(cfregex2);
        var m2 = fmt[1].match(cfregex2);
        return chkcond(v, m1) ? [l, fmt[0]] : chkcond(v, m2) ? [l, fmt[1]] : [l, fmt[m1 != null && m2 != null ? 2 : 1]];
    }
    return [l, ff];
}
function format(fmt,v,o) {
    fixopts(o != null ? o : (o=[]));
    var sfmt = "";
    switch(typeof fmt) {
        case "string": sfmt = fmt; break;
        case "number": sfmt = (o.table != null ? o.table : table_fmt)[fmt]; break;
    }
    if(isgeneral(sfmt,0)) return general_fmt(v, o);
    var f = choose_fmt(sfmt, v);
    if(isgeneral(f[1])) return general_fmt(v, o);
    if(v === true) v = "TRUE"; else if(v === false) v = "FALSE";
    else if(v === "" || v == null) return "";
    return eval_fmt(f[1], v, o, f[0]);
}
SSF._table = table_fmt;
SSF.load = function load_entry(fmt, idx) { table_fmt[idx] = fmt; };
SSF.format = format;
SSF.get_table = function get_table() { return table_fmt; };
SSF.load_table = function load_table(tbl) { for(var i=0; i!=0x0188; ++i) if(tbl[i] !== undefined) SSF.load(tbl[i], i); };
};
make_ssf(SSF);
/* map from xlml named formats to SSF TODO: localize */
var XLMLFormatMap = {
    "General Number": "General",
    "General Date": SSF._table[22],
    "Long Date": "dddd, mmmm dd, yyyy",
    "Medium Date": SSF._table[15],
    "Short Date": SSF._table[14],
    "Long Time": SSF._table[19],
    "Medium Time": SSF._table[18],
    "Short Time": SSF._table[20],
    "Currency": '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    "Fixed": SSF._table[2],
    "Standard": SSF._table[4],
    "Percent": SSF._table[10],
    "Scientific": SSF._table[11],
    "Yes/No": '"Yes";"Yes";"No";@',
    "True/False": '"True";"True";"False";@',
    "On/Off": '"Yes";"Yes";"No";@'
};

var DO_NOT_EXPORT_CFB = true;
/* cfb.js (C) 2013-2014 SheetJS -- http://sheetjs.com */
/* vim: set ts=2: */
/*jshint eqnull:true */

/* [MS-CFB] v20130118 */
var CFB = (function _CFB(){
var exports = {};
exports.version = '0.10.2';
function parse(file) {
var mver = 3; // major version
var ssz = 512; // sector size
var nmfs = 0; // number of mini FAT sectors
var ndfs = 0; // number of DIFAT sectors
var dir_start = 0; // first directory sector location
var minifat_start = 0; // first mini FAT sector location
var difat_start = 0; // first mini FAT sector location

var fat_addrs = []; // locations of FAT sectors

/* [MS-CFB] 2.2 Compound File Header */
var blob = file.slice(0,512);
prep_blob(blob, 0);

/* major version */
var mv = check_get_mver(blob);
mver = mv[0];
switch(mver) {
    case 3: ssz = 512; break; case 4: ssz = 4096; break;
    default: throw "Major Version: Expected 3 or 4 saw " + mver;
}

/* reprocess header */
if(ssz !== 512) { blob = file.slice(0,ssz); prep_blob(blob, 28 /* blob.l */); }
/* Save header for final object */
var header = file.slice(0,ssz);

check_shifts(blob, mver);

// Number of Directory Sectors
var nds = blob.read_shift(4, 'i');
if(mver === 3 && nds !== 0) throw '# Directory Sectors: Expected 0 saw ' + nds;

// Number of FAT Sectors
//var nfs = blob.read_shift(4, 'i');
blob.l += 4;

// First Directory Sector Location
dir_start = blob.read_shift(4, 'i');

// Transaction Signature
blob.l += 4;

// Mini Stream Cutoff Size
blob.chk('00100000', 'Mini Stream Cutoff Size: ');

// First Mini FAT Sector Location
minifat_start = blob.read_shift(4, 'i');

// Number of Mini FAT Sectors
nmfs = blob.read_shift(4, 'i');

// First DIFAT sector location
difat_start = blob.read_shift(4, 'i');

// Number of DIFAT Sectors
ndfs = blob.read_shift(4, 'i');

// Grab FAT Sector Locations
for(var q, j = 0; j < 109; ++j) { /* 109 = (512 - blob.l)>>>2; */
    q = blob.read_shift(4, 'i');
    if(q<0) break;
    fat_addrs[j] = q;
}

/** Break the file up into sectors */
var sectors = sectorify(file, ssz);

sleuth_fat(difat_start, ndfs, sectors, ssz, fat_addrs);

/** Chains */
var sector_list = make_sector_list(sectors, dir_start, fat_addrs, ssz);

sector_list[dir_start].name = "!Directory";
if(nmfs > 0 && minifat_start !== ENDOFCHAIN) sector_list[minifat_start].name = "!MiniFAT";
sector_list[fat_addrs[0]].name = "!FAT";
sector_list.fat_addrs = fat_addrs;
sector_list.ssz = ssz;

/* [MS-CFB] 2.6.1 Compound File Directory Entry */
var files = {}, Paths = [], FileIndex = [], FullPaths = [], FullPathDir = {};
read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex);

build_full_paths(FileIndex, FullPathDir, FullPaths, Paths);

var root_name = Paths.shift();
Paths.root = root_name;

/* [MS-CFB] 2.6.4 (Unicode 3.0.1 case conversion) */
var find_path = make_find_path(FullPaths, Paths, FileIndex, files, root_name);

return {
    raw: {header: header, sectors: sectors},
    FileIndex: FileIndex,
    FullPaths: FullPaths,
    FullPathDir: FullPathDir,
    find: find_path
};
} // parse

/* [MS-CFB] 2.2 Compound File Header -- read up to major version */
function check_get_mver(blob) {
    // header signature 8
    blob.chk(HEADER_SIGNATURE, 'Header Signature: ');

    // clsid 16
    blob.chk(HEADER_CLSID, 'CLSID: ');

    // minor version 2
    var mver = blob.read_shift(2, 'u');

    return [blob.read_shift(2,'u'), mver];
}
function check_shifts(blob, mver) {
    var shift = 0x09;

    // Byte Order
    blob.chk('feff', 'Byte Order: ');

    // Sector Shift
    switch((shift = blob.read_shift(2))) {
        case 0x09: if(mver !== 3) throw 'MajorVersion/SectorShift Mismatch'; break;
        case 0x0c: if(mver !== 4) throw 'MajorVersion/SectorShift Mismatch'; break;
        default: throw 'Sector Shift: Expected 9 or 12 saw ' + shift;
    }

    // Mini Sector Shift
    blob.chk('0600', 'Mini Sector Shift: ');

    // Reserved
    blob.chk('000000000000', 'Reserved: ');
}

/** Break the file up into sectors */
function sectorify(file, ssz) {
    var nsectors = Math.ceil(file.length/ssz)-1;
    var sectors = new Array(nsectors);
    for(var i=1; i < nsectors; ++i) sectors[i-1] = file.slice(i*ssz,(i+1)*ssz);
    sectors[nsectors-1] = file.slice(nsectors*ssz);
    return sectors;
}

/* [MS-CFB] 2.6.4 Red-Black Tree */
function build_full_paths(FI, FPD, FP, Paths) {
    var i = 0, L = 0, R = 0, C = 0, j = 0, pl = Paths.length;
    var dad = new Array(pl), q = new Array(pl);

    for(; i < pl; ++i) { dad[i]=q[i]=i; FP[i]=Paths[i]; }

    for(; j < q.length; ++j) {
        i = q[j];
        L = FI[i].L; R = FI[i].R; C = FI[i].C;
        if(dad[i] === i) {
            if(L !== -1 /*NOSTREAM*/ && dad[L] !== L) dad[i] = dad[L];
            if(R !== -1 && dad[R] !== R) dad[i] = dad[R];
        }
        if(C !== -1 /*NOSTREAM*/) dad[C] = i;
        if(L !== -1) { dad[L] = dad[i]; q.push(L); }
        if(R !== -1) { dad[R] = dad[i]; q.push(R); }
    }
    for(i=1; i !== pl; ++i) if(dad[i] === i) {
        if(R !== -1 /*NOSTREAM*/ && dad[R] !== R) dad[i] = dad[R];
        else if(L !== -1 && dad[L] !== L) dad[i] = dad[L];
    }

    for(i=1; i < pl; ++i) {
        if(FI[i].type === 0 /* unknown */) continue;
        j = dad[i];
        if(j === 0) FP[i] = FP[0] + "/" + FP[i];
        else while(j !== 0) {
            FP[i] = FP[j] + "/" + FP[i];
            j = dad[j];
        }
        dad[i] = 0;
    }

    FP[0] += "/";
    for(i=1; i < pl; ++i) {
        if(FI[i].type !== 2 /* stream */) FP[i] += "/";
        FPD[FP[i]] = FI[i];
    }
}

/* [MS-CFB] 2.6.4 */
function make_find_path(FullPaths, Paths, FileIndex, files, root_name) {
    var UCFullPaths = new Array(FullPaths.length);
    var UCPaths = new Array(Paths.length), i;
    for(i = 0; i < FullPaths.length; ++i) UCFullPaths[i] = FullPaths[i].toUpperCase().replace(chr0,'').replace(chr1,'!');
    for(i = 0; i < Paths.length; ++i) UCPaths[i] = Paths[i].toUpperCase().replace(chr0,'').replace(chr1,'!');
    return function find_path(path) {
        var k;
        if(path.charCodeAt(0) === 47 /* "/" */) { k=true; path = root_name + path; }
        else k = path.indexOf("/") !== -1;
        var UCPath = path.toUpperCase().replace(chr0,'').replace(chr1,'!');
        var w = k === true ? UCFullPaths.indexOf(UCPath) : UCPaths.indexOf(UCPath);
        if(w === -1) return null;
        return k === true ? FileIndex[w] : files[Paths[w]];
    };
}

/** Chase down the rest of the DIFAT chain to build a comprehensive list
    DIFAT chains by storing the next sector number as the last 32 bytes */
function sleuth_fat(idx, cnt, sectors, ssz, fat_addrs) {
    var q;
    if(idx === ENDOFCHAIN) {
        if(cnt !== 0) throw "DIFAT chain shorter than expected";
    } else if(idx !== -1 /*FREESECT*/) {
        var sector = sectors[idx], m = (ssz>>>2)-1;
        for(var i = 0; i < m; ++i) {
            if((q = __readInt32LE(sector,i*4)) === ENDOFCHAIN) break;
            fat_addrs.push(q);
        }
        sleuth_fat(__readInt32LE(sector,ssz-4),cnt - 1, sectors, ssz, fat_addrs);
    }
}

/** Follow the linked list of sectors for a given starting point */
function get_sector_list(sectors, start, fat_addrs, ssz, chkd) {
    var sl = sectors.length;
    var buf, buf_chain;
    if(!chkd) chkd = new Array(sl);
    var modulus = ssz - 1, j, jj;
    buf = [];
    buf_chain = [];
    for(j=start; j>=0;) {
        chkd[j] = true;
        buf[buf.length] = j;
        buf_chain.push(sectors[j]);
        var addr = fat_addrs[Math.floor(j*4/ssz)];
        jj = ((j*4) & modulus);
        if(ssz < 4 + jj) throw "FAT boundary crossed: " + j + " 4 "+ssz;
        j = __readInt32LE(sectors[addr], jj);
    }
    return {nodes: buf, data:__toBuffer([buf_chain])};
}

/** Chase down the sector linked lists */
function make_sector_list(sectors, dir_start, fat_addrs, ssz) {
    var sl = sectors.length, sector_list = new Array(sl);
    var chkd = new Array(sl), buf, buf_chain;
    var modulus = ssz - 1, i, j, k, jj;
    for(i=0; i < sl; ++i) {
        buf = [];
        k = (i + dir_start); if(k >= sl) k-=sl;
        if(chkd[k] === true) continue;
        buf_chain = [];
        for(j=k; j>=0;) {
            chkd[j] = true;
            buf[buf.length] = j;
            buf_chain.push(sectors[j]);
            var addr = fat_addrs[Math.floor(j*4/ssz)];
            jj = ((j*4) & modulus);
            if(ssz < 4 + jj) throw "FAT boundary crossed: " + j + " 4 "+ssz;
            j = __readInt32LE(sectors[addr], jj);
        }
        sector_list[k] = {nodes: buf, data:__toBuffer([buf_chain])};
    }
    return sector_list;
}

/* [MS-CFB] 2.6.1 Compound File Directory Entry */
function read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex) {
    var blob;
    var minifat_store = 0, pl = (Paths.length?2:0);
    var sector = sector_list[dir_start].data;
    var i = 0, namelen = 0, name, o, ctime, mtime;
    for(; i < sector.length; i+= 128) {
        blob = sector.slice(i, i+128);
        prep_blob(blob, 64);
        namelen = blob.read_shift(2);
        if(namelen === 0) continue;
        name = __utf16le(blob,0,namelen-pl);
        Paths.push(name);
        o = {
            name:  name,
            type:  blob.read_shift(1),
            color: blob.read_shift(1),
            L:     blob.read_shift(4, 'i'),
            R:     blob.read_shift(4, 'i'),
            C:     blob.read_shift(4, 'i'),
            clsid: blob.read_shift(16),
            state: blob.read_shift(4, 'i')
        };
        ctime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
        if(ctime !== 0) {
            o.ctime = ctime; o.ct = read_date(blob, blob.l-8);
        }
        mtime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
        if(mtime !== 0) {
            o.mtime = mtime; o.mt = read_date(blob, blob.l-8);
        }
        o.start = blob.read_shift(4, 'i');
        o.size = blob.read_shift(4, 'i');
        if(o.type === 5) { /* root */
            minifat_store = o.start;
            if(nmfs > 0 && minifat_store !== ENDOFCHAIN) sector_list[minifat_store].name = "!StreamData";
            /*minifat_size = o.size;*/
        } else if(o.size >= 4096 /* MSCSZ */) {
            o.storage = 'fat';
            if(sector_list[o.start] === undefined) sector_list[o.start] = get_sector_list(sectors, o.start, sector_list.fat_addrs, sector_list.ssz);
            sector_list[o.start].name = o.name;
            o.content = sector_list[o.start].data.slice(0,o.size);
            prep_blob(o.content, 0);
        } else {
            o.storage = 'minifat';
            if(minifat_store !== ENDOFCHAIN && o.start !== ENDOFCHAIN) {
                o.content = sector_list[minifat_store].data.slice(o.start*MSSZ,o.start*MSSZ+o.size);
                prep_blob(o.content, 0);
            }
        }
        files[name] = o;
        FileIndex.push(o);
    }
}

function read_date(blob, offset) {
    return new Date(( ( (__readUInt32LE(blob,offset+4)/1e7)*Math.pow(2,32)+__readUInt32LE(blob,offset)/1e7 ) - 11644473600)*1000);
}

var fs;
function readFileSync(filename, options) {
    if(fs === undefined) fs = require('fs');
    return parse(fs.readFileSync(filename), options);
}

function readSync(blob, options) {
    switch(options !== undefined && options.type !== undefined ? options.type : "base64") {
        case "file": return readFileSync(blob, options);
        case "base64": return parse(s2a(Base64.decode(blob)), options);
        case "binary": return parse(s2a(blob), options);
    }
    return parse(blob);
}

/** CFB Constants */
var MSSZ = 64; /* Mini Sector Size = 1<<6 */
//var MSCSZ = 4096; /* Mini Stream Cutoff Size */
/* 2.1 Compound File Sector Numbers and Types */
var ENDOFCHAIN = -2;
/* 2.2 Compound File Header */
var HEADER_SIGNATURE = 'd0cf11e0a1b11ae1';
var HEADER_CLSID = '00000000000000000000000000000000';
var consts = {
    /* 2.1 Compund File Sector Numbers and Types */
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: ENDOFCHAIN,
    FREESECT: -1,
    /* 2.2 Compound File Header */
    HEADER_SIGNATURE: HEADER_SIGNATURE,
    HEADER_MINOR_VERSION: '3e00',
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: HEADER_CLSID,
    /* 2.6.1 Compound File Directory Entry */
    EntryTypes: ['unknown','storage','stream','lockbytes','property','root']
};

exports.read = readSync;
exports.parse = parse;
exports.utils = {
    ReadShift: ReadShift,
    CheckField: CheckField,
    prep_blob: prep_blob,
    bconcat: bconcat,
    consts: consts
};

return exports;
})();

if(typeof require !== 'undefined' && typeof module !== 'undefined' && typeof DO_NOT_EXPORT_CFB === 'undefined') { module.exports = CFB; }
function isval(x) { return x !== undefined && x !== null; }

function keys(o) { return Object.keys(o); }

function evert_key(obj, key) {
    var o = [], K = keys(obj);
    for(var i = 0; i !== K.length; ++i) o[obj[K[i]][key]] = K[i];
    return o;
}

function evert(obj) {
    var o = [], K = keys(obj);
    for(var i = 0; i !== K.length; ++i) o[obj[K[i]]] = K[i];
    return o;
}

function evert_num(obj) {
    var o = [], K = keys(obj);
    for(var i = 0; i !== K.length; ++i) o[obj[K[i]]] = parseInt(K[i],10);
    return o;
}

function evert_arr(obj) {
    var o = [], K = keys(obj);
    for(var i = 0; i !== K.length; ++i) {
        if(o[obj[K[i]]] == null) o[obj[K[i]]] = [];
        o[obj[K[i]]].push(K[i]);
    }
    return o;
}

/* TODO: date1904 logic */
function datenum(v, date1904) {
    if(date1904) v+=1462;
    var epoch = Date.parse(v);
    return (epoch + 2209161600000) / (24 * 60 * 60 * 1000);
}

function cc2str(arr) {
    var o = "";
    for(var i = 0; i != arr.length; ++i) o += String.fromCharCode(arr[i]);
    return o;
}

function getdata(data) {
    if(!data) return null;
    if(data.name.substr(-4) === ".bin") {
        if(data.data) return char_codes(data.data);
        if(data.asNodeBuffer && has_buf) return data.asNodeBuffer();
        if(data._data && data._data.getContent) return Array.prototype.slice.call(data._data.getContent());
    } else {
        if(data.data) return data.name.substr(-4) !== ".bin" ? debom_xml(data.data) : char_codes(data.data);
        if(data.asNodeBuffer && has_buf) return debom_xml(data.asNodeBuffer().toString('binary'));
        if(data.asBinary) return debom_xml(data.asBinary());
        if(data._data && data._data.getContent) return debom_xml(cc2str(Array.prototype.slice.call(data._data.getContent(),0)));
    }
    return null;
}

function safegetzipfile(zip, file) {
    var f = file; if(zip.files[f]) return zip.files[f];
    f = file.toLowerCase(); if(zip.files[f]) return zip.files[f];
    f = f.replace(/\//g,'\\'); if(zip.files[f]) return zip.files[f];
    return null;
}

function getzipfile(zip, file) {
    var o = safegetzipfile(zip, file);
    if(o == null) throw new Error("Cannot find file " + file + " in zip");
    return o;
}

function getzipdata(zip, file, safe) {
    if(!safe) return getdata(getzipfile(zip, file));
    if(!file) return null;
    try { return getzipdata(zip, file); } catch(e) { return null; }
}

var _fs, jszip;
if(typeof JSZip !== 'undefined') jszip = JSZip;
if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        if(has_buf && typeof jszip === 'undefined') jszip = require('js'+'zip');
        if(typeof jszip === 'undefined') jszip = require('./js'+'zip').JSZip;
        _fs = require('f'+'s');
    }
}
var attregexg=/([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g;
var tagregex=/<[^>]*>/g;
var nsregex=/<\w*:/, nsregex2 = /<(\/?)\w+:/;
function parsexmltag(tag, skip_root) {
    var z = [];
    var eq = 0, c = 0;
    for(; eq !== tag.length; ++eq) if((c = tag.charCodeAt(eq)) === 32 || c === 10 || c === 13) break;
    if(!skip_root) z[0] = tag.substr(0, eq);
    if(eq === tag.length) return z;
    var m = tag.match(attregexg), j=0, w="", v="", i=0, q="", cc="";
    if(m) for(i = 0; i != m.length; ++i) {
        cc = m[i];
        for(c=0; c != cc.length; ++c) if(cc.charCodeAt(c) === 61) break;
        q = cc.substr(0,c); v = cc.substring(c+2, cc.length-1);
        for(j=0;j!=q.length;++j) if(q.charCodeAt(j) === 58) break;
        if(j===q.length) z[q] = v;
        else z[(j===5 && q.substr(0,5)==="xmlns"?"xmlns":"")+q.substr(j+1)] = v;
    }
    return z;
}
function strip_ns(x) { return x.replace(nsregex2, "<$1"); }

var encodings = {
    '&quot;': '"',
    '&apos;': "'",
    '&gt;': '>',
    '&lt;': '<',
    '&amp;': '&'
};
var rencoding = evert(encodings);
var rencstr = "&<>'\"".split("");

// TODO: CP remap (need to read file version to determine OS)
var unescapexml = (function() {
    var encregex = /&[a-z]*;/g, coderegex = /_x([\da-fA-F]+)_/g;
    return function unescapexml(text){
        var s = text + '';
        return s.replace(encregex, function($$) { return encodings[$$]; }).replace(coderegex,function(m,c) {return String.fromCharCode(parseInt(c,16));});
    };
})();

var decregex=/[&<>'"]/g, charegex = /[\u0000-\u0008\u000b-\u001f]/g;
function escapexml(text){
    var s = text + '';
    return s.replace(decregex, function(y) { return rencoding[y]; }).replace(charegex,function(s) { return "_x" + ("000"+s.charCodeAt(0).toString(16)).substr(-4) + "_";});
}

/* TODO: handle codepages */
var xlml_fixstr = (function() {
    var entregex = /&#(\d+);/g;
    function entrepl($$,$1) { return String.fromCharCode(parseInt($1,10)); }
    return function xlml_fixstr(str) { return str.replace(entregex,entrepl); };
})();

function parsexmlbool(value, tag) {
    switch(value) {
        case '1': case 'true': case 'TRUE': return true;
        /* case '0': case 'false': case 'FALSE':*/
        default: return false;
    }
}

var utf8read = function utf8reada(orig) {
    var out = "", i = 0, c = 0, d = 0, e = 0, f = 0, w = 0;
    while (i < orig.length) {
        c = orig.charCodeAt(i++);
        if (c < 128) { out += String.fromCharCode(c); continue; }
        d = orig.charCodeAt(i++);
        if (c>191 && c<224) { out += String.fromCharCode(((c & 31) << 6) | (d & 63)); continue; }
        e = orig.charCodeAt(i++);
        if (c < 240) { out += String.fromCharCode(((c & 15) << 12) | ((d & 63) << 6) | (e & 63)); continue; }
        f = orig.charCodeAt(i++);
        w = (((c & 7) << 18) | ((d & 63) << 12) | ((e & 63) << 6) | (f & 63))-65536;
        out += String.fromCharCode(0xD800 + ((w>>>10)&1023));
        out += String.fromCharCode(0xDC00 + (w&1023));
    }
    return out;
};


if(has_buf) {
    var utf8readb = function utf8readb(data) {
        var out = new Buffer(2*data.length), w, i, j = 1, k = 0, ww=0, c;
        for(i = 0; i < data.length; i+=j) {
            j = 1;
            if((c=data.charCodeAt(i)) < 128) w = c;
            else if(c < 224) { w = (c&31)*64+(data.charCodeAt(i+1)&63); j=2; }
            else if(c < 240) { w=(c&15)*4096+(data.charCodeAt(i+1)&63)*64+(data.charCodeAt(i+2)&63); j=3; }
            else { j = 4;
                w = (c & 7)*262144+(data.charCodeAt(i+1)&63)*4096+(data.charCodeAt(i+2)&63)*64+(data.charCodeAt(i+3)&63);
                w -= 65536; ww = 0xD800 + ((w>>>10)&1023); w = 0xDC00 + (w&1023);
            }
            if(ww !== 0) { out[k++] = ww&255; out[k++] = ww>>>8; ww = 0; }
            out[k++] = w%256; out[k++] = w>>>8;
        }
        out.length = k;
        return out.toString('ucs2');
    };
    var corpus = "foo bar baz\u00e2\u0098\u0083\u00f0\u009f\u008d\u00a3";
    if(utf8read(corpus) == utf8readb(corpus)) utf8read = utf8readb;
    var utf8readc = function utf8readc(data) { return Buffer(data, 'binary').toString('utf8'); };
    if(utf8read(corpus) == utf8readc(corpus)) utf8read = utf8readc;
}

// matches <foo>...</foo> extracts content
var matchtag = (function() {
    var mtcache = {};
    return function matchtag(f,g) {
        var t = f+"|"+g;
        if(mtcache[t] !== undefined) return mtcache[t];
        return (mtcache[t] = new RegExp('<(?:\\w+:)?'+f+'(?: xml:space="preserve")?(?:[^>]*)>([^\u2603]*)</(?:\\w+:)?'+f+'>',(g||"")));
    };
})();

var vtregex = (function(){ var vt_cache = {};
    return function vt_regex(bt) {
        if(vt_cache[bt] !== undefined) return vt_cache[bt];
        return (vt_cache[bt] = new RegExp("<vt:" + bt + ">(.*?)</vt:" + bt + ">", 'g') );
};})();
var vtvregex = /<\/?vt:variant>/g, vtmregex = /<vt:([^>]*)>(.*)</;
function parseVector(data) {
    var h = parsexmltag(data);

    var matches = data.match(vtregex(h.baseType))||[];
    if(matches.length != h.size) throw "unexpected vector length " + matches.length + " != " + h.size;
    var res = [];
    matches.forEach(function(x) {
        var v = x.replace(vtvregex,"").match(vtmregex);
        res.push({v:v[2], t:v[1]});
    });
    return res;
}

var wtregex = /(^\s|\s$|\n)/;
function writetag(f,g) {return '<' + f + (g.match(wtregex)?' xml:space="preserve"' : "") + '>' + g + '</' + f + '>';}

function wxt_helper(h) { return keys(h).map(function(k) { return " " + k + '="' + h[k] + '"';}).join(""); }
function writextag(f,g,h) { return '<' + f + (isval(h) ? wxt_helper(h) : "") + (isval(g) ? (g.match(wtregex)?' xml:space="preserve"' : "") + '>' + g + '</' + f : "/") + '>';}

function write_w3cdtf(d, t) { try { return d.toISOString().replace(/\.\d*/,""); } catch(e) { if(t) throw e; } }

function write_vt(s) {
    switch(typeof s) {
        case 'string': return writextag('vt:lpwstr', s);
        case 'number': return writextag((s|0)==s?'vt:i4':'vt:r8', String(s));
        case 'boolean': return writextag('vt:bool',s?'true':'false');
    }
    if(s instanceof Date) return writextag('vt:filetime', write_w3cdtf(s));
    throw new Error("Unable to serialize " + s);
}

var XML_HEADER = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n';
var XMLNS = {
    'dc': 'http://purl.org/dc/elements/1.1/',
    'dcterms': 'http://purl.org/dc/terms/',
    'dcmitype': 'http://purl.org/dc/dcmitype/',
    'mx': 'http://schemas.microsoft.com/office/mac/excel/2008/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    'sjs': 'http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties',
    'vt': 'http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes',
    'xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    'xsd': 'http://www.w3.org/2001/XMLSchema'
};

XMLNS.main = [
    'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
    'http://purl.oclc.org/ooxml/spreadsheetml/main',
    'http://schemas.microsoft.com/office/excel/2006/main',
    'http://schemas.microsoft.com/office/excel/2006/2'
];

function readIEEE754(buf, idx, isLE, nl, ml) {
    if(isLE === undefined) isLE = true;
    if(!nl) nl = 8;
    if(!ml && nl === 8) ml = 52;
    var e, m, el = nl * 8 - ml - 1, eMax = (1 << el) - 1, eBias = eMax >> 1;
    var bits = -7, d = isLE ? -1 : 1, i = isLE ? (nl - 1) : 0, s = buf[idx + i];

    i += d;
    e = s & ((1 << (-bits)) - 1); s >>>= (-bits); bits += el;
    for (; bits > 0; e = e * 256 + buf[idx + i], i += d, bits -= 8);
    m = e & ((1 << (-bits)) - 1); e >>>= (-bits); bits += ml;
    for (; bits > 0; m = m * 256 + buf[idx + i], i += d, bits -= 8);
    if (e === eMax) return m ? NaN : ((s ? -1 : 1) * Infinity);
    else if (e === 0) e = 1 - eBias;
    else { m = m + Math.pow(2, ml); e = e - eBias; }
    return (s ? -1 : 1) * m * Math.pow(2, e - ml);
}

var __toBuffer, ___toBuffer;
__toBuffer = ___toBuffer = function toBuffer_(bufs) { var x = []; for(var i = 0; i < bufs[0].length; ++i) { x.push.apply(x, bufs[0][i]); } return x; };
var __utf16le, ___utf16le;
__utf16le = ___utf16le = function utf16le_(b,s,e) { var ss=[]; for(var i=s; i<e; i+=2) ss.push(String.fromCharCode(__readUInt16LE(b,i))); return ss.join(""); };
var __hexlify, ___hexlify;
__hexlify = ___hexlify = function hexlify_(b,s,l) { return b.slice(s,(s+l)).map(function(x){return (x<16?"0":"") + x.toString(16);}).join(""); };
var __utf8, ___utf8;
__utf8 = ___utf8 = function(b,s,e) { var ss=[]; for(var i=s; i<e; i++) ss.push(String.fromCharCode(__readUInt8(b,i))); return ss.join(""); };
var __lpstr, ___lpstr;
__lpstr = ___lpstr = function lpstr_(b,i) { var len = __readUInt32LE(b,i); return len > 0 ? __utf8(b, i+4,i+4+len-1) : "";};
var __lpwstr, ___lpwstr;
__lpwstr = ___lpwstr = function lpwstr_(b,i) { var len = 2*__readUInt32LE(b,i); return len > 0 ? __utf8(b, i+4,i+4+len-1) : "";};
var __double, ___double;
__double = ___double = function(b, idx) { return readIEEE754(b, idx);};

var is_buf = function is_buf_a(a) { return Array.isArray(a); };
if(has_buf) {
    __utf16le = function utf16le_b(b,s,e) { if(!Buffer.isBuffer(b)) return ___utf16le(b,s,e); return b.toString('utf16le',s,e); };
    __hexlify = function(b,s,l) { return Buffer.isBuffer(b) ? b.toString('hex',s,s+l) : ___hexlify(b,s,l); };
    __lpstr = function lpstr_b(b,i) { if(!Buffer.isBuffer(b)) return ___lpstr(b, i); var len = b.readUInt32LE(i); return len > 0 ? b.toString('utf8',i+4,i+4+len-1) : "";};
    __lpwstr = function lpwstr_b(b,i) { if(!Buffer.isBuffer(b)) return ___lpwstr(b, i); var len = 2*b.readUInt32LE(i); return b.toString('utf16le',i+4,i+4+len-1);};
    __utf8 = function utf8_b(s,e) { return this.toString('utf8',s,e); };
    __toBuffer = function(bufs) { return (bufs[0].length > 0 && Buffer.isBuffer(bufs[0][0])) ? Buffer.concat(bufs[0]) : ___toBuffer(bufs);};
    bconcat = function(bufs) { return Buffer.isBuffer(bufs[0]) ? Buffer.concat(bufs) : [].concat.apply([], bufs); };
    __double = function double_(b,i) { if(Buffer.isBuffer(b)) return b.readDoubleLE(i); return ___double(b,i); };
    is_buf = function is_buf_b(a) { return Buffer.isBuffer(a) || Array.isArray(a); };
}

/* from js-xls */
if(typeof cptable !== 'undefined') {
    __utf16le = function(b,s,e) { return cptable.utils.decode(1200, b.slice(s,e)); };
    __utf8 = function(b,s,e) { return cptable.utils.decode(65001, b.slice(s,e)); };
    __lpstr = function(b,i) { var len = __readUInt32LE(b,i); return len > 0 ? cptable.utils.decode(current_codepage, b.slice(i+4, i+4+len-1)) : "";};
    __lpwstr = function(b,i) { var len = 2*__readUInt32LE(b,i); return len > 0 ? cptable.utils.decode(1200, b.slice(i+4,i+4+len-1)) : "";};
}

var __readUInt8 = function(b, idx) { return b[idx]; };
var __readUInt16LE = function(b, idx) { return b[idx+1]*(1<<8)+b[idx]; };
var __readInt16LE = function(b, idx) { var u = b[idx+1]*(1<<8)+b[idx]; return (u < 0x8000) ? u : (0xffff - u + 1) * -1; };
var __readUInt32LE = function(b, idx) { return b[idx+3]*(1<<24)+(b[idx+2]<<16)+(b[idx+1]<<8)+b[idx]; };
var __readInt32LE = function(b, idx) { return (b[idx+3]<<24)|(b[idx+2]<<16)|(b[idx+1]<<8)|b[idx]; };

var ___unhexlify = function(s) { return s.match(/../g).map(function(x) { return parseInt(x,16);}); };
var __unhexlify = typeof Buffer !== "undefined" ? function(s) { return Buffer.isBuffer(s) ? new Buffer(s, 'hex') : ___unhexlify(s); } : ___unhexlify;

function ReadShift(size, t) {
    var o="", oI, oR, oo=[], w, vv, i, loc;
    switch(t) {
        case 'dbcs':
            loc = this.l;
            if(has_buf && Buffer.isBuffer(this)) o = this.slice(this.l, this.l+2*size).toString("utf16le");
            else for(i = 0; i != size; ++i) { o+=String.fromCharCode(__readUInt16LE(this, loc)); loc+=2; }
            size *= 2;
            break;

        case 'utf8': o = __utf8(this, this.l, this.l + size); break;
        case 'utf16le': size *= 2; o = __utf16le(this, this.l, this.l + size); break;

        /* [MS-OLEDS] 2.1.4 LengthPrefixedAnsiString */
        case 'lpstr': o = __lpstr(this, this.l); size = 5 + o.length; break;
        /* [MS-OLEDS] 2.1.5 LengthPrefixedUnicodeString */
        case 'lpwstr': o = __lpwstr(this, this.l); size = 5 + o.length; if(o[o.length-1] == '\u0000') size += 2; break;

        case 'cstr': size = 0; o = "";
            while((w=__readUInt8(this, this.l + size++))!==0) oo.push(_getchar(w));
            o = oo.join(""); break;
        case 'wstr': size = 0; o = "";
            while((w=__readUInt16LE(this,this.l +size))!==0){oo.push(_getchar(w));size+=2;}
            size+=2; o = oo.join(""); break;

        /* sbcs and dbcs support continue records in the SST way TODO codepages */
        case 'dbcs-cont': o = ""; loc = this.l;
            for(i = 0; i != size; ++i) {
                if(this.lens && this.lens.indexOf(loc) !== -1) {
                    w = __readUInt8(this, loc);
                    this.l = loc + 1;
                    vv = ReadShift.call(this, size-i, w ? 'dbcs-cont' : 'sbcs-cont');
                    return oo.join("") + vv;
                }
                oo.push(_getchar(__readUInt16LE(this, loc)));
                loc+=2;
            } o = oo.join(""); size *= 2; break;

        case 'sbcs-cont': o = ""; loc = this.l;
            for(i = 0; i != size; ++i) {
                if(this.lens && this.lens.indexOf(loc) !== -1) {
                    w = __readUInt8(this, loc);
                    this.l = loc + 1;
                    vv = ReadShift.call(this, size-i, w ? 'dbcs-cont' : 'sbcs-cont');
                    return oo.join("") + vv;
                }
                oo.push(_getchar(__readUInt8(this, loc)));
                loc+=1;
            } o = oo.join(""); break;

        default:
    switch(size) {
        case 1: oI = __readUInt8(this, this.l); this.l++; return oI;
        case 2: oI = (t === 'i' ? __readInt16LE : __readUInt16LE)(this, this.l); this.l += 2; return oI;
        case 4:
            if(t === 'i' || (this[this.l+3] & 0x80)===0) { oI = __readInt32LE(this, this.l); this.l += 4; return oI; }
            else { oR = __readUInt32LE(this, this.l); this.l += 4; return oR; } break;
        case 8: if(t === 'f') { oR = __double(this, this.l); this.l += 8; return oR; }
        /* falls through */
        case 16: o = __hexlify(this, this.l, size); break;
    }}
    this.l+=size; return o;
}

function WriteShift(t, val, f) {
    var size, i;
    if(f === 'dbcs') {
        for(i = 0; i != val.length; ++i) this.writeUInt16LE(val.charCodeAt(i), this.l + 2 * i);
        size = 2 * val.length;
    } else switch(t) {
        case  1: size = 1; this[this.l] = val&255; break;
        case  3: size = 3; this[this.l+2] = val & 255; val >>>= 8; this[this.l+1] = val&255; val >>>= 8; this[this.l] = val&255; break;
        case  4: size = 4; this.writeUInt32LE(val, this.l); break;
        case  8: size = 8; if(f === 'f') { this.writeDoubleLE(val, this.l); break; }
        /* falls through */
        case 16: break;
        case -4: size = 4; this.writeInt32LE(val, this.l); break;
    }
    this.l += size; return this;
}

function CheckField(hexstr, fld) {
    var m = __hexlify(this,this.l,hexstr.length>>1);
    if(m !== hexstr) throw fld + 'Expected ' + hexstr + ' saw ' + m;
    this.l += hexstr.length>>1;
}

function prep_blob(blob, pos) {
    blob.l = pos;
    blob.read_shift = ReadShift;
    blob.chk = CheckField;
    blob.write_shift = WriteShift;
}

function parsenoop(blob, length) { blob.l += length; }

function writenoop(blob, length) { blob.l += length; }

function new_buf(sz) {
    var o = new_raw_buf(sz);
    prep_blob(o, 0);
    return o;
}

/* [MS-XLSB] 2.1.4 Record */
function recordhopper(data, cb, opts) {
    var tmpbyte, cntbyte, length;
    prep_blob(data, data.l || 0);
    while(data.l < data.length) {
        var RT = data.read_shift(1);
        if(RT & 0x80) RT = (RT & 0x7F) + ((data.read_shift(1) & 0x7F)<<7);
        var R = XLSBRecordEnum[RT] || XLSBRecordEnum[0xFFFF];
        tmpbyte = data.read_shift(1);
        length = tmpbyte & 0x7F;
        for(cntbyte = 1; cntbyte <4 && (tmpbyte & 0x80); ++cntbyte) length += ((tmpbyte = data.read_shift(1)) & 0x7F)<<(7*cntbyte);
        var d = R.f(data, length, opts);
        if(cb(d, R, RT)) return;
    }
}

/* control buffer usage for fixed-length buffers */
function buf_array() {
    var bufs = [], blksz = 2048;
    var newblk = function ba_newblk(sz) {
        var o = new_buf(sz);
        prep_blob(o, 0);
        return o;
    };

    var curbuf = newblk(blksz);

    var endbuf = function ba_endbuf() {
        curbuf.length = curbuf.l;
        if(curbuf.length > 0) bufs.push(curbuf);
        curbuf = null;
    };

    var next = function ba_next(sz) {
        if(sz < curbuf.length - curbuf.l) return curbuf;
        endbuf();
        return (curbuf = newblk(Math.max(sz+1, blksz)));
    };

    var end = function ba_end() {
        endbuf();
        return __toBuffer([bufs]);
    };

    var push = function ba_push(buf) { endbuf(); curbuf = buf; next(blksz); };

    return { next:next, push:push, end:end, _bufs:bufs };
}

function write_record(ba, type, payload, length) {
    var t = evert_RE[type], l;
    if(!length) length = XLSBRecordEnum[t].p || (payload||[]).length || 0;
    l = 1 + (t >= 0x80 ? 1 : 0) + 1 + length;
    if(length >= 0x80) ++l; if(length >= 0x4000) ++l; if(length >= 0x200000) ++l;
    var o = ba.next(l);
    if(t <= 0x7F) o.write_shift(1, t);
    else {
        o.write_shift(1, (t & 0x7F) + 0x80);
        o.write_shift(1, (t >> 7));
    }
    for(var i = 0; i != 4; ++i) {
        if(length >= 0x80) { o.write_shift(1, (length & 0x7F)+0x80); length >>= 7; }
        else { o.write_shift(1, length); break; }
    }
    if(length > 0 && is_buf(payload)) ba.push(payload);
}
/* XLS ranges enforced */
function shift_cell_xls(cell, tgt) {
    if(tgt.s) {
        if(cell.cRel) cell.c += tgt.s.c;
        if(cell.rRel) cell.r += tgt.s.r;
    } else {
        cell.c += tgt.c;
        cell.r += tgt.r;
    }
    cell.cRel = cell.rRel = 0;
    while(cell.c >= 0x100) cell.c -= 0x100;
    while(cell.r >= 0x10000) cell.r -= 0x10000;
    return cell;
}

function shift_range_xls(cell, range) {
    cell.s = shift_cell_xls(cell.s, range.s);
    cell.e = shift_cell_xls(cell.e, range.s);
    return cell;
}

var OFFCRYPTO = {};
var make_offcrypto = function(O, _crypto) {
    var crypto;
    if(typeof _crypto !== 'undefined') crypto = _crypto;
    else if(typeof require !== 'undefined') {
        try { crypto = require('cry'+'pto'); }
        catch(e) { crypto = null; }
    }

    O.rc4 = function(key, data) {
        var S = new Array(256);
        var c = 0, i = 0, j = 0, t = 0;
        for(i = 0; i != 256; ++i) S[i] = i;
        for(i = 0; i != 256; ++i) {
            j = (j + S[i] + (key[i%key.length]).charCodeAt(0))&255;
            t = S[i]; S[i] = S[j]; S[j] = t;
        }
        i = j = 0; out = Buffer(data.length);
        for(c = 0; c != data.length; ++c) {
            i = (i + 1)&255;
            j = (j + S[i])%256;
            t = S[i]; S[i] = S[j]; S[j] = t;
            out[c] = (data[c] ^ S[(S[i]+S[j])&255]);
        }
        return out;
    };

    if(crypto) {
        O.md5 = function(hex) { return crypto.createHash('md5').update(hex).digest('hex'); };
    } else {
        O.md5 = function(hex) { throw "unimplemented"; };
    }
};
make_offcrypto(OFFCRYPTO, typeof crypto !== "undefined" ? crypto : undefined);


/* [MS-XLSB] 2.5.143 */
function parse_StrRun(data, length) {
    return { ich: data.read_shift(2), ifnt: data.read_shift(2) };
}

/* [MS-XLSB] 2.1.7.121 */
function parse_RichStr(data, length) {
    var start = data.l;
    var flags = data.read_shift(1);
    var str = parse_XLWideString(data);
    var rgsStrRun = [];
    var z = { t: str, h: str };
    if((flags & 1) !== 0) { /* fRichStr */
        /* TODO: formatted string */
        var dwSizeStrRun = data.read_shift(4);
        for(var i = 0; i != dwSizeStrRun; ++i) rgsStrRun.push(parse_StrRun(data));
        z.r = rgsStrRun;
    }
    else z.r = "<t>" + escapexml(str) + "</t>";
    if((flags & 2) !== 0) { /* fExtStr */
        /* TODO: phonetic string */
    }
    data.l = start + length;
    return z;
}
function write_RichStr(str, o) {
    /* TODO: formatted string */
    if(o == null) o = new_buf(5+2*str.t.length);
    o.write_shift(1,0);
    write_XLWideString(str.t, o);
    return o;
}

/* [MS-XLSB] 2.5.9 */
function parse_XLSBCell(data) {
    var col = data.read_shift(4);
    var iStyleRef = data.read_shift(2);
    iStyleRef += data.read_shift(1) <<16;
    var fPhShow = data.read_shift(1);
    return { c:col, iStyleRef: iStyleRef };
}
function write_XLSBCell(cell, o) {
    if(o == null) o = new_buf(8);
    o.write_shift(-4, cell.c);
    o.write_shift(3, cell.iStyleRef === undefined ? cell.iStyleRef : cell.s);
    o.write_shift(1, 0); /* fPhShow */
    return o;
}


/* [MS-XLSB] 2.5.21 */
function parse_XLSBCodeName (data, length) { return parse_XLWideString(data, length); }

/* [MS-XLSB] 2.5.166 */
function parse_XLNullableWideString(data) {
    var cchCharacters = data.read_shift(4);
    return cchCharacters === 0 || cchCharacters === 0xFFFFFFFF ? "" : data.read_shift(cchCharacters, 'dbcs');
}
function write_XLNullableWideString(data, o) {
    if(!o) o = new_buf(127);
    o.write_shift(4, data.length > 0 ? data.length : 0xFFFFFFFF);
    if(data.length > 0) o.write_shift(0, data, 'dbcs');
    return o;
}

/* [MS-XLSB] 2.5.168 */
function parse_XLWideString(data) {
    var cchCharacters = data.read_shift(4);
    return cchCharacters === 0 ? "" : data.read_shift(cchCharacters, 'dbcs');
}
function write_XLWideString(data, o) {
    if(o == null) o = new_buf(4+2*data.length);
    o.write_shift(4, data.length);
    if(data.length > 0) o.write_shift(0, data, 'dbcs');
    return o;
}

/* [MS-XLSB] 2.5.114 */
var parse_RelID = parse_XLNullableWideString;
var write_RelID = write_XLNullableWideString;


/* [MS-XLSB] 2.5.122 */
/* [MS-XLS] 2.5.217 */
function parse_RkNumber(data) {
    var b = data.slice(data.l, data.l+4);
    var fX100 = b[0] & 1, fInt = b[0] & 2;
    data.l+=4;
    b[0] &= 0xFC; // b[0] &= ~3;
    var RK = fInt === 0 ? __double([0,0,0,0,b[0],b[1],b[2],b[3]],0) : __readInt32LE(b,0)>>2;
    return fX100 ? RK/100 : RK;
}

/* [MS-XLSB] 2.5.153 */
function parse_UncheckedRfX(data) {
    var cell = {s: {}, e: {}};
    cell.s.r = data.read_shift(4);
    cell.e.r = data.read_shift(4);
    cell.s.c = data.read_shift(4);
    cell.e.c = data.read_shift(4);
    return cell;
}

function write_UncheckedRfX(r, o) {
    if(!o) o = new_buf(16);
    o.write_shift(4, r.s.r);
    o.write_shift(4, r.e.r);
    o.write_shift(4, r.s.c);
    o.write_shift(4, r.e.c);
    return o;
}

/* [MS-XLSB] 2.5.171 */
/* [MS-XLS] 2.5.342 */
function parse_Xnum(data, length) { return data.read_shift(8, 'f'); }
function write_Xnum(data, o) { return (o || new_buf(8)).write_shift(8, 'f', data); }

/* [MS-XLSB] 2.5.198.2 */
var BErr = {
    0x00: "#NULL!",
    0x07: "#DIV/0!",
    0x0F: "#VALUE!",
    0x17: "#REF!",
    0x1D: "#NAME?",
    0x24: "#NUM!",
    0x2A: "#N/A",
    0x2B: "#GETTING_DATA",
    0xFF: "#WTF?"
};
var RBErr = evert_num(BErr);

/* [MS-XLSB] 2.4.321 BrtColor */
function parse_BrtColor(data, length) {
    var out = {};
    var d = data.read_shift(1);
    out.fValidRGB = d & 1;
    out.xColorType = d >>> 1;
    out.index = data.read_shift(1);
    out.nTintAndShade = data.read_shift(2, 'i');
    out.bRed   = data.read_shift(1);
    out.bGreen = data.read_shift(1);
    out.bBlue  = data.read_shift(1);
    out.bAlpha = data.read_shift(1);
}

/* [MS-XLSB] 2.5.52 */
function parse_FontFlags(data, length) {
    var d = data.read_shift(1);
    data.l++;
    var out = {
        fItalic: d & 0x2,
        fStrikeout: d & 0x8,
        fOutline: d & 0x10,
        fShadow: d & 0x20,
        fCondense: d & 0x40,
        fExtend: d & 0x80
    };
    return out;
}
/* [MS-OLEPS] 2.2 PropertyType */
{
    var VT_EMPTY    = 0x0000;
    var VT_NULL     = 0x0001;
    var VT_I2       = 0x0002;
    var VT_I4       = 0x0003;
    var VT_R4       = 0x0004;
    var VT_R8       = 0x0005;
    var VT_CY       = 0x0006;
    var VT_DATE     = 0x0007;
    var VT_BSTR     = 0x0008;
    var VT_ERROR    = 0x000A;
    var VT_BOOL     = 0x000B;
    var VT_VARIANT  = 0x000C;
    var VT_DECIMAL  = 0x000E;
    var VT_I1       = 0x0010;
    var VT_UI1      = 0x0011;
    var VT_UI2      = 0x0012;
    var VT_UI4      = 0x0013;
    var VT_I8       = 0x0014;
    var VT_UI8      = 0x0015;
    var VT_INT      = 0x0016;
    var VT_UINT     = 0x0017;
    var VT_LPSTR    = 0x001E;
    var VT_LPWSTR   = 0x001F;
    var VT_FILETIME = 0x0040;
    var VT_BLOB     = 0x0041;
    var VT_STREAM   = 0x0042;
    var VT_STORAGE  = 0x0043;
    var VT_STREAMED_Object  = 0x0044;
    var VT_STORED_Object    = 0x0045;
    var VT_BLOB_Object      = 0x0046;
    var VT_CF       = 0x0047;
    var VT_CLSID    = 0x0048;
    var VT_VERSIONED_STREAM = 0x0049;
    var VT_VECTOR   = 0x1000;
    var VT_ARRAY    = 0x2000;

    var VT_STRING   = 0x0050; // 2.3.3.1.11 VtString
    var VT_USTR     = 0x0051; // 2.3.3.1.12 VtUnalignedString
    var VT_CUSTOM   = [VT_STRING, VT_USTR];
}

/* [MS-OSHARED] 2.3.3.2.2.1 Document Summary Information PIDDSI */
var DocSummaryPIDDSI = {
    0x01: { n: 'CodePage', t: VT_I2 },
    0x02: { n: 'Category', t: VT_STRING },
    0x03: { n: 'PresentationFormat', t: VT_STRING },
    0x04: { n: 'ByteCount', t: VT_I4 },
    0x05: { n: 'LineCount', t: VT_I4 },
    0x06: { n: 'ParagraphCount', t: VT_I4 },
    0x07: { n: 'SlideCount', t: VT_I4 },
    0x08: { n: 'NoteCount', t: VT_I4 },
    0x09: { n: 'HiddenCount', t: VT_I4 },
    0x0a: { n: 'MultimediaClipCount', t: VT_I4 },
    0x0b: { n: 'Scale', t: VT_BOOL },
    0x0c: { n: 'HeadingPair', t: VT_VECTOR | VT_VARIANT },
    0x0d: { n: 'DocParts', t: VT_VECTOR | VT_LPSTR },
    0x0e: { n: 'Manager', t: VT_STRING },
    0x0f: { n: 'Company', t: VT_STRING },
    0x10: { n: 'LinksDirty', t: VT_BOOL },
    0x11: { n: 'CharacterCount', t: VT_I4 },
    0x13: { n: 'SharedDoc', t: VT_BOOL },
    0x16: { n: 'HLinksChanged', t: VT_BOOL },
    0x17: { n: 'AppVersion', t: VT_I4, p: 'version' },
    0x1A: { n: 'ContentType', t: VT_STRING },
    0x1B: { n: 'ContentStatus', t: VT_STRING },
    0x1C: { n: 'Language', t: VT_STRING },
    0x1D: { n: 'Version', t: VT_STRING },
    0xFF: {}
};

/* [MS-OSHARED] 2.3.3.2.1.1 Summary Information Property Set PIDSI */
var SummaryPIDSI = {
    0x01: { n: 'CodePage', t: VT_I2 },
    0x02: { n: 'Title', t: VT_STRING },
    0x03: { n: 'Subject', t: VT_STRING },
    0x04: { n: 'Author', t: VT_STRING },
    0x05: { n: 'Keywords', t: VT_STRING },
    0x06: { n: 'Comments', t: VT_STRING },
    0x07: { n: 'Template', t: VT_STRING },
    0x08: { n: 'LastAuthor', t: VT_STRING },
    0x09: { n: 'RevNumber', t: VT_STRING },
    0x0A: { n: 'EditTime', t: VT_FILETIME },
    0x0B: { n: 'LastPrinted', t: VT_FILETIME },
    0x0C: { n: 'CreatedDate', t: VT_FILETIME },
    0x0D: { n: 'ModifiedDate', t: VT_FILETIME },
    0x0E: { n: 'PageCount', t: VT_I4 },
    0x0F: { n: 'WordCount', t: VT_I4 },
    0x10: { n: 'CharCount', t: VT_I4 },
    0x11: { n: 'Thumbnail', t: VT_CF },
    0x12: { n: 'ApplicationName', t: VT_LPSTR },
    0x13: { n: 'DocumentSecurity', t: VT_I4 },
    0xFF: {}
};

/* [MS-OLEPS] 2.18 */
var SpecialProperties = {
    0x80000000: { n: 'Locale', t: VT_UI4 },
    0x80000003: { n: 'Behavior', t: VT_UI4 },
    0x72627262: {}
};

(function() {
    for(var y in SpecialProperties) if(SpecialProperties.hasOwnProperty(y))
    DocSummaryPIDDSI[y] = SummaryPIDSI[y] = SpecialProperties[y];
})();

/* [MS-XLS] 2.4.63 Country/Region codes */
var CountryEnum = {
    0x0001: "US", // United States
    0x0002: "CA", // Canada
    0x0003: "", // Latin America (except Brazil)
    0x0007: "RU", // Russia
    0x0014: "EG", // Egypt
    0x001E: "GR", // Greece
    0x001F: "NL", // Netherlands
    0x0020: "BE", // Belgium
    0x0021: "FR", // France
    0x0022: "ES", // Spain
    0x0024: "HU", // Hungary
    0x0027: "IT", // Italy
    0x0029: "CH", // Switzerland
    0x002B: "AT", // Austria
    0x002C: "GB", // United Kingdom
    0x002D: "DK", // Denmark
    0x002E: "SE", // Sweden
    0x002F: "NO", // Norway
    0x0030: "PL", // Poland
    0x0031: "DE", // Germany
    0x0034: "MX", // Mexico
    0x0037: "BR", // Brazil
    0x003d: "AU", // Australia
    0x0040: "NZ", // New Zealand
    0x0042: "TH", // Thailand
    0x0051: "JP", // Japan
    0x0052: "KR", // Korea
    0x0054: "VN", // Viet Nam
    0x0056: "CN", // China
    0x005A: "TR", // Turkey
    0x0069: "JS", // Ramastan
    0x00D5: "DZ", // Algeria
    0x00D8: "MA", // Morocco
    0x00DA: "LY", // Libya
    0x015F: "PT", // Portugal
    0x0162: "IS", // Iceland
    0x0166: "FI", // Finland
    0x01A4: "CZ", // Czech Republic
    0x0376: "TW", // Taiwan
    0x03C1: "LB", // Lebanon
    0x03C2: "JO", // Jordan
    0x03C3: "SY", // Syria
    0x03C4: "IQ", // Iraq
    0x03C5: "KW", // Kuwait
    0x03C6: "SA", // Saudi Arabia
    0x03CB: "AE", // United Arab Emirates
    0x03CC: "IL", // Israel
    0x03CE: "QA", // Qatar
    0x03D5: "IR", // Iran
    0xFFFF: "US"  // United States
};

/* [MS-XLS] 2.5.127 */
var XLSFillPattern = [
    null,
    'solid',
    'mediumGray',
    'darkGray',
    'lightGray',
    'darkHorizontal',
    'darkVertical',
    'darkDown',
    'darkUp',
    'darkGrid',
    'darkTrellis',
    'lightHorizontal',
    'lightVertical',
    'lightDown',
    'lightUp',
    'lightGrid',
    'lightTrellis',
    'gray125',
    'gray0625'
];

function rgbify(arr) { return arr.map(function(x) { return [(x>>16)&255,(x>>8)&255,x&255]; }); }

/* [MS-XLS] 2.5.161 */
var XLSIcv = rgbify([
    /* Color Constants */
    0x000000,
    0xFFFFFF,
    0xFF0000,
    0x00FF00,
    0x0000FF,
    0xFFFF00,
    0xFF00FF,
    0x00FFFF,

    /* Defaults */
    0x000000,
    0xFFFFFF,
    0xFF0000,
    0x00FF00,
    0x0000FF,
    0xFFFF00,
    0xFF00FF,
    0x00FFFF,

    0x800000,
    0x008000,
    0x000080,
    0x808000,
    0x800080,
    0x008080,
    0xC0C0C0,
    0x808080,
    0x9999FF,
    0x993366,
    0xFFFFCC,
    0xCCFFFF,
    0x660066,
    0xFF8080,
    0x0066CC,
    0xCCCCFF,

    0x000080,
    0xFF00FF,
    0xFFFF00,
    0x00FFFF,
    0x800080,
    0x800000,
    0x008080,
    0x0000FF,
    0x00CCFF,
    0xCCFFFF,
    0xCCFFCC,
    0xFFFF99,
    0x99CCFF,
    0xFF99CC,
    0xCC99FF,
    0xFFCC99,

    0x3366FF,
    0x33CCCC,
    0x99CC00,
    0xFFCC00,
    0xFF9900,
    0xFF6600,
    0x666699,
    0x969696,
    0x003366,
    0x339966,
    0x003300,
    0x333300,
    0x993300,
    0x993366,
    0x333399,
    0x333333,

    /* Sheet */
    0xFFFFFF,
    0x000000
]);

/* Parts enumerated in OPC spec, MS-XLSB and MS-XLSX */
/* 12.3 Part Summary <SpreadsheetML> */
/* 14.2 Part Summary <DrawingML> */
/* [MS-XLSX] 2.1 Part Enumerations */
/* [MS-XLSB] 2.1.7 Part Enumeration */
var ct2type = {
    /* Workbook */
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",

    /* Worksheet */
    "application/vnd.ms-excel.binIndexWs": "TODO", /* Binary Index */

    /* Chartsheet */
    "application/vnd.ms-excel.chartsheet": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "TODO",

    /* Dialogsheet */
    "application/vnd.ms-excel.dialogsheet": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "TODO",

    /* Macrosheet */
    "application/vnd.ms-excel.macrosheet": "TODO",
    "application/vnd.ms-excel.macrosheet+xml": "TODO",
    "application/vnd.ms-excel.intlmacrosheet": "TODO",
    "application/vnd.ms-excel.binIndexMs": "TODO", /* Binary Index */

    /* File Properties */
    "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
    "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
    "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",

    /* Custom Data Properties */
    "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",

    /* Comments */
    "application/vnd.ms-excel.comments": "comments",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",

    /* PivotTable */
    "application/vnd.ms-excel.pivotTable": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",

    /* Calculation Chain */
    "application/vnd.ms-excel.calcChain": "calcchains",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",

    /* Printer Settings */
    "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",

    /* ActiveX */
    "application/vnd.ms-office.activeX": "TODO",
    "application/vnd.ms-office.activeX+xml": "TODO",

    /* Custom Toolbars */
    "application/vnd.ms-excel.attachedToolbars": "TODO",

    /* External Data Connections */
    "application/vnd.ms-excel.connections": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",

    /* External Links */
    "application/vnd.ms-excel.externalLink": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "TODO",

    /* Metadata */
    "application/vnd.ms-excel.sheetMetadata": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "TODO",

    /* PivotCache */
    "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
    "application/vnd.ms-excel.pivotCacheRecords": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",

    /* Query Table */
    "application/vnd.ms-excel.queryTable": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",

    /* Shared Workbook */
    "application/vnd.ms-excel.userNames": "TODO",
    "application/vnd.ms-excel.revisionHeaders": "TODO",
    "application/vnd.ms-excel.revisionLog": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",

    /* Single Cell Table */
    "application/vnd.ms-excel.tableSingleCells": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",

    /* Slicer */
    "application/vnd.ms-excel.slicer": "TODO",
    "application/vnd.ms-excel.slicerCache": "TODO",
    "application/vnd.ms-excel.slicer+xml": "TODO",
    "application/vnd.ms-excel.slicerCache+xml": "TODO",

    /* Sort Map */
    "application/vnd.ms-excel.wsSortMap": "TODO",

    /* Table */
    "application/vnd.ms-excel.table": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",

    /* Themes */
    "application/vnd.openxmlformats-officedocument.theme+xml": "themes",

    /* Timeline */
    "application/vnd.ms-excel.Timeline+xml": "TODO", /* verify */
    "application/vnd.ms-excel.TimelineCache+xml": "TODO", /* verify */

    /* VBA */
    "application/vnd.ms-office.vbaProject": "vba",
    "application/vnd.ms-office.vbaProjectSignature": "vba",

    /* Volatile Dependencies */
    "application/vnd.ms-office.volatileDependencies": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",

    /* Control Properties */
    "application/vnd.ms-excel.controlproperties+xml": "TODO",

    /* Data Model */
    "application/vnd.openxmlformats-officedocument.model+data": "TODO",

    /* Survey */
    "application/vnd.ms-excel.Survey+xml": "TODO",

    /* Drawing */
    "application/vnd.openxmlformats-officedocument.drawing+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",

    /* VML */
    "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",

    "application/vnd.openxmlformats-package.relationships+xml": "rels",
    "application/vnd.openxmlformats-officedocument.oleObject": "TODO",

    "sheet": "js"
};

var CT_LIST = (function(){
    var o = {
        workbooks: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
            xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
            xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
            xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
        },
        strs: { /* Shared Strings */
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
            xlsb: "application/vnd.ms-excel.sharedStrings"
        },
        sheets: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
            xlsb: "application/vnd.ms-excel.worksheet"
        },
        styles: {/* Styles */
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
            xlsb: "application/vnd.ms-excel.styles"
        }
    };
    keys(o).forEach(function(k) { if(!o[k].xlsm) o[k].xlsm = o[k].xlsx; });
    keys(o).forEach(function(k){ keys(o[k]).forEach(function(v) { ct2type[o[k][v]] = k; }); });
    return o;
})();

var type2ct = evert_arr(ct2type);

XMLNS.CT = 'http://schemas.openxmlformats.org/package/2006/content-types';

function parse_ct(data, opts) {
    var ctext = {};
    if(!data || !data.match) return data;
    var ct = { workbooks: [], sheets: [], calcchains: [], themes: [], styles: [],
        coreprops: [], extprops: [], custprops: [], strs:[], comments: [], vba: [],
        TODO:[], rels:[], xmlns: "" };
    (data.match(tagregex)||[]).forEach(function(x) {
        var y = parsexmltag(x);
        switch(y[0].replace(nsregex,"<")) {
            case '<?xml': break;
            case '<Types': ct.xmlns = y['xmlns' + (y[0].match(/<(\w+):/)||["",""])[1] ]; break;
            case '<Default': ctext[y.Extension] = y.ContentType; break;
            case '<Override':
                if(ct[ct2type[y.ContentType]] !== undefined) ct[ct2type[y.ContentType]].push(y.PartName);
                else if(opts.WTF) console.error(y);
                break;
        }
    });
    if(ct.xmlns !== XMLNS.CT) throw new Error("Unknown Namespace: " + ct.xmlns);
    ct.calcchain = ct.calcchains.length > 0 ? ct.calcchains[0] : "";
    ct.sst = ct.strs.length > 0 ? ct.strs[0] : "";
    ct.style = ct.styles.length > 0 ? ct.styles[0] : "";
    ct.defaults = ctext;
    delete ct.calcchains;
    return ct;
}

var CTYPE_XML_ROOT = writextag('Types', null, {
    'xmlns': XMLNS.CT,
    'xmlns:xsd': XMLNS.xsd,
    'xmlns:xsi': XMLNS.xsi
});

var CTYPE_DEFAULTS = [
    ['xml', 'application/xml'],
    ['bin', 'application/vnd.ms-excel.sheet.binary.macroEnabled.main'],
    ['rels', type2ct.rels[0]]
].map(function(x) {
    return writextag('Default', null, {'Extension':x[0], 'ContentType': x[1]});
});

function write_ct(ct, opts) {
    var o = [], v;
    o[o.length] = (XML_HEADER);
    o[o.length] = (CTYPE_XML_ROOT);
    o = o.concat(CTYPE_DEFAULTS);
    var f1 = function(w) {
        if(ct[w] && ct[w].length > 0) {
            v = ct[w][0];
            o[o.length] = (writextag('Override', null, {
                'PartName': (v[0] == '/' ? "":"/") + v,
                'ContentType': CT_LIST[w][opts.bookType || 'xlsx']
            }));
        }
    };
    var f2 = function(w) {
        ct[w].forEach(function(v) {
            o[o.length] = (writextag('Override', null, {
                'PartName': (v[0] == '/' ? "":"/") + v,
                'ContentType': CT_LIST[w][opts.bookType || 'xlsx']
            }));
        });
    };
    var f3 = function(t) {
        (ct[t]||[]).forEach(function(v) {
            o[o.length] = (writextag('Override', null, {
                'PartName': (v[0] == '/' ? "":"/") + v,
                'ContentType': type2ct[t][0]
            }));
        });
    };
    f1('workbooks');
    f2('sheets');
    f3('themes');
    ['strs', 'styles'].forEach(f1);
    ['coreprops', 'extprops', 'custprops'].forEach(f3);
    if(o.length>2){ o[o.length] = ('</Types>'); o[1]=o[1].replace("/>",">"); }
    return o.join("");
}
/* 9.3.2 OPC Relationships Markup */
var RELS = {
    WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
    SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument"
};

function parse_rels(data, currentFilePath) {
    if (!data) return data;
    if (currentFilePath.charAt(0) !== '/') {
        currentFilePath = '/'+currentFilePath;
    }
    var rels = {};
    var hash = {};
    var resolveRelativePathIntoAbsolute = function (to) {
        var toksFrom = currentFilePath.split('/');
        toksFrom.pop(); // folder path
        var toksTo = to.split('/');
        var reversed = [];
        while (toksTo.length !== 0) {
            var tokTo = toksTo.shift();
            if (tokTo === '..') {
                toksFrom.pop();
            } else if (tokTo !== '.') {
                toksFrom.push(tokTo);
            }
        }
        return toksFrom.join('/');
    };

    data.match(tagregex).forEach(function(x) {
        var y = parsexmltag(x);
        /* 9.3.2.2 OPC_Relationships */
        if (y[0] === '<Relationship') {
            var rel = {}; rel.Type = y.Type; rel.Target = y.Target; rel.Id = y.Id; rel.TargetMode = y.TargetMode;
            var canonictarget = y.TargetMode === 'External' ? y.Target : resolveRelativePathIntoAbsolute(y.Target);
            rels[canonictarget] = rel;
            hash[y.Id] = rel;
        }
    });
    rels["!id"] = hash;
    return rels;
}

XMLNS.RELS = 'http://schemas.openxmlformats.org/package/2006/relationships';

var RELS_ROOT = writextag('Relationships', null, {
    //'xmlns:ns0': XMLNS.RELS,
    'xmlns': XMLNS.RELS
});

/* TODO */
function write_rels(rels) {
    var o = [];
    o[o.length] = (XML_HEADER);
    o[o.length] = (RELS_ROOT);
    keys(rels['!id']).forEach(function(rid) { var rel = rels['!id'][rid];
        o[o.length] = (writextag('Relationship', null, rel));
    });
    if(o.length>2){ o[o.length] = ('</Relationships>'); o[1]=o[1].replace("/>",">"); }
    return o.join("");
}
/* ECMA-376 Part II 11.1 Core Properties Part */
/* [MS-OSHARED] 2.3.3.2.[1-2].1 (PIDSI/PIDDSI) */
var CORE_PROPS = [
    ["cp:category", "Category"],
    ["cp:contentStatus", "ContentStatus"],
    ["cp:keywords", "Keywords"],
    ["cp:lastModifiedBy", "LastAuthor"],
    ["cp:lastPrinted", "LastPrinted"],
    ["cp:revision", "RevNumber"],
    ["cp:version", "Version"],
    ["dc:creator", "Author"],
    ["dc:description", "Comments"],
    ["dc:identifier", "Identifier"],
    ["dc:language", "Language"],
    ["dc:subject", "Subject"],
    ["dc:title", "Title"],
    ["dcterms:created", "CreatedDate", 'date'],
    ["dcterms:modified", "ModifiedDate", 'date']
];

XMLNS.CORE_PROPS = "http://schemas.openxmlformats.org/package/2006/metadata/core-properties";
RELS.CORE_PROPS  = 'http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties';

var CORE_PROPS_REGEX = (function() {
    var r = new Array(CORE_PROPS.length);
    for(var i = 0; i < CORE_PROPS.length; ++i) {
        var f = CORE_PROPS[i];
        var g = "(?:"+ f[0].substr(0,f[0].indexOf(":")) +":)"+ f[0].substr(f[0].indexOf(":")+1);
        r[i] = new RegExp("<" + g + "[^>]*>(.*)<\/" + g + ">");
    }
    return r;
})();

function parse_core_props(data) {
    var p = {};

    for(var i = 0; i < CORE_PROPS.length; ++i) {
        var f = CORE_PROPS[i], cur = data.match(CORE_PROPS_REGEX[i]);
        if(cur != null && cur.length > 0) p[f[1]] = cur[1];
        if(f[2] === 'date' && p[f[1]]) p[f[1]] = new Date(p[f[1]]);
    }

    return p;
}

var CORE_PROPS_XML_ROOT = writextag('cp:coreProperties', null, {
    //'xmlns': XMLNS.CORE_PROPS,
    'xmlns:cp': XMLNS.CORE_PROPS,
    'xmlns:dc': XMLNS.dc,
    'xmlns:dcterms': XMLNS.dcterms,
    'xmlns:dcmitype': XMLNS.dcmitype,
    'xmlns:xsi': XMLNS.xsi
});

function cp_doit(f, g, h, o, p) {
    if(p[f] != null || g == null || g === "") return;
    p[f] = g;
    o[o.length] = (h ? writextag(f,g,h) : writetag(f,g));
}

function write_core_props(cp, opts) {
    var o = [XML_HEADER, CORE_PROPS_XML_ROOT], p = {};
    if(!cp) return o.join("");


    if(cp.CreatedDate != null) cp_doit("dcterms:created", typeof cp.CreatedDate === "string" ? cp.CreatedDate : write_w3cdtf(cp.CreatedDate, opts.WTF), {"xsi:type":"dcterms:W3CDTF"}, o, p);
    if(cp.ModifiedDate != null) cp_doit("dcterms:modified", typeof cp.ModifiedDate === "string" ? cp.ModifiedDate : write_w3cdtf(cp.ModifiedDate, opts.WTF), {"xsi:type":"dcterms:W3CDTF"}, o, p);

    for(var i = 0; i != CORE_PROPS.length; ++i) { var f = CORE_PROPS[i]; cp_doit(f[0], cp[f[1]], null, o, p); }
    if(o.length>2){ o[o.length] = ('</cp:coreProperties>'); o[1]=o[1].replace("/>",">"); }
    return o.join("");
}
/* 15.2.12.3 Extended File Properties Part */
/* [MS-OSHARED] 2.3.3.2.[1-2].1 (PIDSI/PIDDSI) */
var EXT_PROPS = [
    ["Application", "Application", "string"],
    ["AppVersion", "AppVersion", "string"],
    ["Company", "Company", "string"],
    ["DocSecurity", "DocSecurity", "string"],
    ["Manager", "Manager", "string"],
    ["HyperlinksChanged", "HyperlinksChanged", "bool"],
    ["SharedDoc", "SharedDoc", "bool"],
    ["LinksUpToDate", "LinksUpToDate", "bool"],
    ["ScaleCrop", "ScaleCrop", "bool"],
    ["HeadingPairs", "HeadingPairs", "raw"],
    ["TitlesOfParts", "TitlesOfParts", "raw"]
];

XMLNS.EXT_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties";
RELS.EXT_PROPS  = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties';

function parse_ext_props(data, p) {
    var q = {}; if(!p) p = {};

    EXT_PROPS.forEach(function(f) {
        switch(f[2]) {
            case "string": p[f[1]] = (data.match(matchtag(f[0]))||[])[1]; break;
            case "bool": p[f[1]] = (data.match(matchtag(f[0]))||[])[1] === "true"; break;
            case "raw":
                var cur = data.match(new RegExp("<" + f[0] + "[^>]*>(.*)<\/" + f[0] + ">"));
                if(cur && cur.length > 0) q[f[1]] = cur[1];
                break;
        }
    });

    if(q.HeadingPairs && q.TitlesOfParts) {
        var v = parseVector(q.HeadingPairs);
        var j = 0, widx = 0;
        for(var i = 0; i !== v.length; ++i) {
            switch(v[i].v) {
                case "Worksheets": widx = j; p.Worksheets = +(v[++i].v); break;
                case "Named Ranges": ++i; break; // TODO: Handle Named Ranges
            }
        }
        var parts = parseVector(q.TitlesOfParts).map(function(x) { return utf8read(x.v); });
        p.SheetNames = parts.slice(widx, widx + p.Worksheets);
    }
    return p;
}

var EXT_PROPS_XML_ROOT = writextag('Properties', null, {
    'xmlns': XMLNS.EXT_PROPS,
    'xmlns:vt': XMLNS.vt
});

function write_ext_props(cp, opts) {
    var o = [], p = {}, W = writextag;
    if(!cp) cp = {};
    cp.Application = "SheetJS";
    o[o.length] = (XML_HEADER);
    o[o.length] = (EXT_PROPS_XML_ROOT);

    EXT_PROPS.forEach(function(f) {
        if(cp[f[1]] === undefined) return;
        var v;
        switch(f[2]) {
            case 'string': v = cp[f[1]]; break;
            case 'bool': v = cp[f[1]] ? 'true' : 'false'; break;
        }
        if(v !== undefined) o[o.length] = (W(f[0], v));
    });

    /* TODO: HeadingPairs, TitlesOfParts */
    o[o.length] = (W('HeadingPairs', W('vt:vector', W('vt:variant', '<vt:lpstr>Worksheets</vt:lpstr>')+W('vt:variant', W('vt:i4', String(cp.Worksheets))), {size:2, baseType:"variant"})));
    o[o.length] = (W('TitlesOfParts', W('vt:vector', cp.SheetNames.map(function(s) { return "<vt:lpstr>" + s + "</vt:lpstr>"; }).join(""), {size: cp.Worksheets, baseType:"lpstr"})));
    if(o.length>2){ o[o.length] = ('</Properties>'); o[1]=o[1].replace("/>",">"); }
    return o.join("");
}
/* 15.2.12.2 Custom File Properties Part */
XMLNS.CUST_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties";
RELS.CUST_PROPS  = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties';

var custregex = /<[^>]+>[^<]*/g;
function parse_cust_props(data, opts) {
    var p = {}, name;
    var m = data.match(custregex);
    if(m) for(var i = 0; i != m.length; ++i) {
        var x = m[i], y = parsexmltag(x);
        switch(y[0]) {
            case '<?xml': break;
            case '<Properties':
                if(y.xmlns !== XMLNS.CUST_PROPS) throw "unrecognized xmlns " + y.xmlns;
                if(y.xmlnsvt && y.xmlnsvt !== XMLNS.vt) throw "unrecognized vt " + y.xmlnsvt;
                break;
            case '<property': name = y.name; break;
            case '</property>': name = null; break;
            default: if (x.indexOf('<vt:') === 0) {
                var toks = x.split('>');
                var type = toks[0].substring(4), text = toks[1];
                /* 22.4.2.32 (CT_Variant). Omit the binary types from 22.4 (Variant Types) */
                switch(type) {
                    case 'lpstr': case 'lpwstr': case 'bstr': case 'lpwstr':
                        p[name] = unescapexml(text);
                        break;
                    case 'bool':
                        p[name] = parsexmlbool(text, '<vt:bool>');
                        break;
                    case 'i1': case 'i2': case 'i4': case 'i8': case 'int': case 'uint':
                        p[name] = parseInt(text, 10);
                        break;
                    case 'r4': case 'r8': case 'decimal':
                        p[name] = parseFloat(text);
                        break;
                    case 'filetime': case 'date':
                        p[name] = new Date(text);
                        break;
                    case 'cy': case 'error':
                        p[name] = unescapexml(text);
                        break;
                    default:
                        if(typeof console !== 'undefined') console.warn('Unexpected', x, type, toks);
                }
            } else if(x.substr(0,2) === "</") {
            } else if(opts.WTF) throw new Error(x);
        }
    }
    return p;
}

var CUST_PROPS_XML_ROOT = writextag('Properties', null, {
    'xmlns': XMLNS.CUST_PROPS,
    'xmlns:vt': XMLNS.vt
});

function write_cust_props(cp, opts) {
    var o = [XML_HEADER, CUST_PROPS_XML_ROOT];
    if(!cp) return o.join("");
    var pid = 1;
    keys(cp).forEach(function custprop(k) { ++pid;
        o[o.length] = (writextag('property', write_vt(cp[k]), {
            'fmtid': '{D5CDD505-2E9C-101B-9397-08002B2CF9AE}',
            'pid': pid,
            'name': k
        }));
    });
    if(o.length>2){ o[o.length] = '</Properties>'; o[1]=o[1].replace("/>",">"); }
    return o.join("");
}
function xlml_set_prop(Props, tag, val) {
    /* TODO: Normalize the properties */
    switch(tag) {
        case 'Description': tag = 'Comments'; break;
    }
    Props[tag] = val;
}

/* [MS-DTYP] 2.3.3 FILETIME */
/* [MS-OLEDS] 2.1.3 FILETIME (Packet Version) */
/* [MS-OLEPS] 2.8 FILETIME (Packet Version) */
function parse_FILETIME(blob) {
    var dwLowDateTime = blob.read_shift(4), dwHighDateTime = blob.read_shift(4);
    return new Date(((dwHighDateTime/1e7*Math.pow(2,32) + dwLowDateTime/1e7) - 11644473600)*1000).toISOString().replace(/\.000/,"");
}

/* [MS-OSHARED] 2.3.3.1.4 Lpstr */
function parse_lpstr(blob, type, pad) {
    var str = blob.read_shift(0, 'lpstr');
    if(pad) blob.l += (4 - ((str.length+1) & 3)) & 3;
    return str;
}

/* [MS-OSHARED] 2.3.3.1.6 Lpwstr */
function parse_lpwstr(blob, type, pad) {
    var str = blob.read_shift(0, 'lpwstr');
    if(pad) blob.l += (4 - ((str.length+1) & 3)) & 3;
    return str;
}


/* [MS-OSHARED] 2.3.3.1.11 VtString */
/* [MS-OSHARED] 2.3.3.1.12 VtUnalignedString */
function parse_VtStringBase(blob, stringType, pad) {
    if(stringType === 0x1F /*VT_LPWSTR*/) return parse_lpwstr(blob);
    return parse_lpstr(blob, stringType, pad);
}

function parse_VtString(blob, t, pad) { return parse_VtStringBase(blob, t, pad === false ? 0: 4); }
function parse_VtUnalignedString(blob, t) { if(!t) throw new Error("dafuq?"); return parse_VtStringBase(blob, t, 0); }

/* [MS-OSHARED] 2.3.3.1.9 VtVecUnalignedLpstrValue */
function parse_VtVecUnalignedLpstrValue(blob) {
    var length = blob.read_shift(4);
    var ret = [];
    for(var i = 0; i != length; ++i) ret[i] = blob.read_shift(0, 'lpstr');
    return ret;
}

/* [MS-OSHARED] 2.3.3.1.10 VtVecUnalignedLpstr */
function parse_VtVecUnalignedLpstr(blob) {
    return parse_VtVecUnalignedLpstrValue(blob);
}

/* [MS-OSHARED] 2.3.3.1.13 VtHeadingPair */
function parse_VtHeadingPair(blob) {
    var headingString = parse_TypedPropertyValue(blob, VT_USTR);
    var headerParts = parse_TypedPropertyValue(blob, VT_I4);
    return [headingString, headerParts];
}

/* [MS-OSHARED] 2.3.3.1.14 VtVecHeadingPairValue */
function parse_VtVecHeadingPairValue(blob) {
    var cElements = blob.read_shift(4);
    var out = [];
    for(var i = 0; i != cElements / 2; ++i) out.push(parse_VtHeadingPair(blob));
    return out;
}

/* [MS-OSHARED] 2.3.3.1.15 VtVecHeadingPair */
function parse_VtVecHeadingPair(blob) {
    // NOTE: When invoked, wType & padding were already consumed
    return parse_VtVecHeadingPairValue(blob);
}

/* [MS-OLEPS] 2.18.1 Dictionary (uses 2.17, 2.16) */
function parse_dictionary(blob,CodePage) {
    var cnt = blob.read_shift(4);
    var dict = {};
    for(var j = 0; j != cnt; ++j) {
        var pid = blob.read_shift(4);
        var len = blob.read_shift(4);
        dict[pid] = blob.read_shift(len, (CodePage === 0x4B0 ?'utf16le':'utf8')).replace(chr0,'').replace(chr1,'!');
    }
    if(blob.l & 3) blob.l = (blob.l>>2+1)<<2;
    return dict;
}

/* [MS-OLEPS] 2.9 BLOB */
function parse_BLOB(blob) {
    var size = blob.read_shift(4);
    var bytes = blob.slice(blob.l,blob.l+size);
    if(size & 3 > 0) blob.l += (4 - (size & 3)) & 3;
    return bytes;
}

/* [MS-OLEPS] 2.11 ClipboardData */
function parse_ClipboardData(blob) {
    // TODO
    var o = {};
    o.Size = blob.read_shift(4);
    //o.Format = blob.read_shift(4);
    blob.l += o.Size;
    return o;
}

/* [MS-OLEPS] 2.14 Vector and Array Property Types */
function parse_VtVector(blob, cb) {
    /* [MS-OLEPS] 2.14.2 VectorHeader */
/*  var Length = blob.read_shift(4);
    var o = [];
    for(var i = 0; i != Length; ++i) {
        o.push(cb(blob));
    }
    return o;*/
}

/* [MS-OLEPS] 2.15 TypedPropertyValue */
function parse_TypedPropertyValue(blob, type, _opts) {
    var t = blob.read_shift(2), ret, opts = _opts||{};
    blob.l += 2;
    if(type !== VT_VARIANT)
    if(t !== type && VT_CUSTOM.indexOf(type)===-1) throw new Error('Expected type ' + type + ' saw ' + t);
    switch(type === VT_VARIANT ? t : type) {
        case 0x02 /*VT_I2*/: ret = blob.read_shift(2, 'i'); if(!opts.raw) blob.l += 2; return ret;
        case 0x03 /*VT_I4*/: ret = blob.read_shift(4, 'i'); return ret;
        case 0x0B /*VT_BOOL*/: return blob.read_shift(4) !== 0x0;
        case 0x13 /*VT_UI4*/: ret = blob.read_shift(4); return ret;
        case 0x1E /*VT_LPSTR*/: return parse_lpstr(blob, t, 4).replace(chr0,'');
        case 0x1F /*VT_LPWSTR*/: return parse_lpwstr(blob);
        case 0x40 /*VT_FILETIME*/: return parse_FILETIME(blob);
        case 0x41 /*VT_BLOB*/: return parse_BLOB(blob);
        case 0x47 /*VT_CF*/: return parse_ClipboardData(blob);
        case 0x50 /*VT_STRING*/: return parse_VtString(blob, t, !opts.raw && 4).replace(chr0,'');
        case 0x51 /*VT_USTR*/: return parse_VtUnalignedString(blob, t, 4).replace(chr0,'');
        case 0x100C /*VT_VECTOR|VT_VARIANT*/: return parse_VtVecHeadingPair(blob);
        case 0x101E /*VT_LPSTR*/: return parse_VtVecUnalignedLpstr(blob);
        default: throw new Error("TypedPropertyValue unrecognized type " + type + " " + t);
    }
}
/* [MS-OLEPS] 2.14.2 VectorHeader */
/*function parse_VTVectorVariant(blob) {
    var Length = blob.read_shift(4);

    if(Length & 1 !== 0) throw new Error("VectorHeader Length=" + Length + " must be even");
    var o = [];
    for(var i = 0; i != Length; ++i) {
        o.push(parse_TypedPropertyValue(blob, VT_VARIANT));
    }
    return o;
}*/

/* [MS-OLEPS] 2.20 PropertySet */
function parse_PropertySet(blob, PIDSI) {
    var start_addr = blob.l;
    var size = blob.read_shift(4);
    var NumProps = blob.read_shift(4);
    var Props = [], i = 0;
    var CodePage = 0;
    var Dictionary = -1, DictObj;
    for(i = 0; i != NumProps; ++i) {
        var PropID = blob.read_shift(4);
        var Offset = blob.read_shift(4);
        Props[i] = [PropID, Offset + start_addr];
    }
    var PropH = {};
    for(i = 0; i != NumProps; ++i) {
        if(blob.l !== Props[i][1]) {
            var fail = true;
            if(i>0 && PIDSI) switch(PIDSI[Props[i-1][0]].t) {
                case 0x02 /*VT_I2*/: if(blob.l +2 === Props[i][1]) { blob.l+=2; fail = false; } break;
                case 0x50 /*VT_STRING*/: if(blob.l <= Props[i][1]) { blob.l=Props[i][1]; fail = false; } break;
                case 0x100C /*VT_VECTOR|VT_VARIANT*/: if(blob.l <= Props[i][1]) { blob.l=Props[i][1]; fail = false; } break;
            }
            if(!PIDSI && blob.l <= Props[i][1]) { fail=false; blob.l = Props[i][1]; }
            if(fail) throw new Error("Read Error: Expected address " + Props[i][1] + ' at ' + blob.l + ' :' + i);
        }
        if(PIDSI) {
            var piddsi = PIDSI[Props[i][0]];
            PropH[piddsi.n] = parse_TypedPropertyValue(blob, piddsi.t, {raw:true});
            if(piddsi.p === 'version') PropH[piddsi.n] = String(PropH[piddsi.n] >> 16) + "." + String(PropH[piddsi.n] & 0xFFFF);
            if(piddsi.n == "CodePage") switch(PropH[piddsi.n]) {
                case 0: PropH[piddsi.n] = 1252;
                    /* falls through */
                case 10000: // OSX Roman
                case 1252: // Windows Latin

                case 874: // SB Windows Thai
                case 1250: // SB Windows Central Europe
                case 1251: // SB Windows Cyrillic
                case 1253: // SB Windows Greek
                case 1254: // SB Windows Turkish
                case 1255: // SB Windows Hebrew
                case 1256: // SB Windows Arabic
                case 1257: // SB Windows Baltic
                case 1258: // SB Windows Vietnam

                case 932: // DB Windows Japanese Shift-JIS
                case 936: // DB Windows Simplified Chinese GBK
                case 949: // DB Windows Korean
                case 950: // DB Windows Traditional Chinese Big5

                case 1200: // UTF16LE
                case 1201: // UTF16BE
                case 65000: case -536: // UTF-7
                case 65001: case -535: // UTF-8
                    set_cp(CodePage = PropH[piddsi.n]); break;
                default: throw new Error("Unsupported CodePage: " + PropH[piddsi.n]);
            }
        } else {
            if(Props[i][0] === 0x1) {
                CodePage = PropH.CodePage = parse_TypedPropertyValue(blob, VT_I2);
                set_cp(CodePage);
                if(Dictionary !== -1) {
                    var oldpos = blob.l;
                    blob.l = Props[Dictionary][1];
                    DictObj = parse_dictionary(blob,CodePage);
                    blob.l = oldpos;
                }
            } else if(Props[i][0] === 0) {
                if(CodePage === 0) { Dictionary = i; blob.l = Props[i+1][1]; continue; }
                DictObj = parse_dictionary(blob,CodePage);
            } else {
                var name = DictObj[Props[i][0]];
                var val;
                /* [MS-OSHARED] 2.3.3.2.3.1.2 + PROPVARIANT */
                switch(blob[blob.l]) {
                    case 0x41 /*VT_BLOB*/: blob.l += 4; val = parse_BLOB(blob); break;
                    case 0x1E /*VT_LPSTR*/: blob.l += 4; val = parse_VtString(blob, blob[blob.l-4]); break;
                    case 0x1F /*VT_LPWSTR*/: blob.l += 4; val = parse_VtString(blob, blob[blob.l-4]); break;
                    case 0x03 /*VT_I4*/: blob.l += 4; val = blob.read_shift(4, 'i'); break;
                    case 0x13 /*VT_UI4*/: blob.l += 4; val = blob.read_shift(4); break;
                    case 0x05 /*VT_R8*/: blob.l += 4; val = blob.read_shift(8, 'f'); break;
                    case 0x0B /*VT_BOOL*/: blob.l += 4; val = parsebool(blob, 4); break;
                    case 0x40 /*VT_FILETIME*/: blob.l += 4; val = new Date(parse_FILETIME(blob)); break;
                    default: throw new Error("unparsed value: " + blob[blob.l]);
                }
                PropH[name] = val;
            }
        }
    }
    blob.l = start_addr + size; /* step ahead to skip padding */
    return PropH;
}

/* [MS-OLEPS] 2.21 PropertySetStream */
function parse_PropertySetStream(file, PIDSI) {
    var blob = file.content;
    prep_blob(blob, 0);

    var NumSets, FMTID0, FMTID1, Offset0, Offset1;
    blob.chk('feff', 'Byte Order: ');

    var vers = blob.read_shift(2); // TODO: check version
    var SystemIdentifier = blob.read_shift(4);
    blob.chk(CFB.utils.consts.HEADER_CLSID, 'CLSID: ');
    NumSets = blob.read_shift(4);
    if(NumSets !== 1 && NumSets !== 2) throw "Unrecognized #Sets: " + NumSets;
    FMTID0 = blob.read_shift(16); Offset0 = blob.read_shift(4);

    if(NumSets === 1 && Offset0 !== blob.l) throw "Length mismatch";
    else if(NumSets === 2) { FMTID1 = blob.read_shift(16); Offset1 = blob.read_shift(4); }
    var PSet0 = parse_PropertySet(blob, PIDSI);

    var rval = { SystemIdentifier: SystemIdentifier };
    for(var y in PSet0) rval[y] = PSet0[y];
    //rval.blob = blob;
    rval.FMTID = FMTID0;
    //rval.PSet0 = PSet0;
    if(NumSets === 1) return rval;
    if(blob.l !== Offset1) throw "Length mismatch 2: " + blob.l + " !== " + Offset1;
    var PSet1;
    try { PSet1 = parse_PropertySet(blob, null); } catch(e) { }
    for(y in PSet1) rval[y] = PSet1[y];
    rval.FMTID = [FMTID0, FMTID1]; // TODO: verify FMTID0/1
    return rval;
}


function parsenoop2(blob, length) { blob.read_shift(length); return null; }

function parslurp(blob, length, cb) {
    var arr = [], target = blob.l + length;
    while(blob.l < target) arr.push(cb(blob, target - blob.l));
    if(target !== blob.l) throw new Error("Slurp error");
    return arr;
}

function parslurp2(blob, length, cb) {
    var arr = [], target = blob.l + length, len = blob.read_shift(2);
    while(len-- !== 0) arr.push(cb(blob, target - blob.l));
    if(target !== blob.l) throw new Error("Slurp error");
    return arr;
}

function parsebool(blob, length) { return blob.read_shift(length) === 0x1; }

function parseuint16(blob) { return blob.read_shift(2, 'u'); }
function parseuint16a(blob, length) { return parslurp(blob,length,parseuint16);}

/* --- 2.5 Structures --- */

/* [MS-XLS] 2.5.14 Boolean */
var parse_Boolean = parsebool;

/* [MS-XLS] 2.5.10 Bes (boolean or error) */
function parse_Bes(blob) {
    var v = blob.read_shift(1), t = blob.read_shift(1);
    return t === 0x01 ? v : v === 0x01;
}

/* [MS-XLS] 2.5.240 ShortXLUnicodeString */
function parse_ShortXLUnicodeString(blob, length, opts) {
    var cch = blob.read_shift(1);
    var width = 1, encoding = 'sbcs-cont';
    var cp = current_codepage;
    if(opts && opts.biff >= 8) current_codepage = 1200;
    if(opts === undefined || opts.biff !== 5) {
        var fHighByte = blob.read_shift(1);
        if(fHighByte) { width = 2; encoding = 'dbcs-cont'; }
    }
    var o = cch ? blob.read_shift(cch, encoding) : "";
    current_codepage = cp;
    return o;
}

/* 2.5.293 XLUnicodeRichExtendedString */
function parse_XLUnicodeRichExtendedString(blob) {
    var cp = current_codepage;
    current_codepage = 1200;
    var cch = blob.read_shift(2), flags = blob.read_shift(1);
    var fHighByte = flags & 0x1, fExtSt = flags & 0x4, fRichSt = flags & 0x8;
    var width = 1 + (flags & 0x1); // 0x0 -> utf8, 0x1 -> dbcs
    var cRun, cbExtRst;
    var z = {};
    if(fRichSt) cRun = blob.read_shift(2);
    if(fExtSt) cbExtRst = blob.read_shift(4);
    var encoding = (flags & 0x1) ? 'dbcs-cont' : 'sbcs-cont';
    var msg = cch === 0 ? "" : blob.read_shift(cch, encoding);
    if(fRichSt) blob.l += 4 * cRun; //TODO: parse this
    if(fExtSt) blob.l += cbExtRst; //TODO: parse this
    z.t = msg;
    if(!fRichSt) { z.raw = "<t>" + z.t + "</t>"; z.r = z.t; }
    current_codepage = cp;
    return z;
}

/* 2.5.296 XLUnicodeStringNoCch */
function parse_XLUnicodeStringNoCch(blob, cch, opts) {
    var retval;
    var fHighByte = blob.read_shift(1);
    if(fHighByte===0) { retval = blob.read_shift(cch, 'sbcs-cont'); }
    else { retval = blob.read_shift(cch, 'dbcs-cont'); }
    return retval;
}

/* 2.5.294 XLUnicodeString */
function parse_XLUnicodeString(blob, length, opts) {
    var cch = blob.read_shift(opts !== undefined && opts.biff > 0 && opts.biff < 8 ? 1 : 2);
    if(cch === 0) { blob.l++; return ""; }
    return parse_XLUnicodeStringNoCch(blob, cch, opts);
}
/* BIFF5 override */
function parse_XLUnicodeString2(blob, length, opts) {
    if(opts.biff !== 5 && opts.biff !== 2) return parse_XLUnicodeString(blob, length, opts);
    var cch = blob.read_shift(1);
    if(cch === 0) { blob.l++; return ""; }
    return blob.read_shift(cch, 'sbcs-cont');
}

/* [MS-XLS] 2.5.61 ControlInfo */
var parse_ControlInfo = parsenoop;

/* [MS-OSHARED] 2.3.7.6 URLMoniker TODO: flags */
var parse_URLMoniker = function(blob, length) {
    var len = blob.read_shift(4), start = blob.l;
    var extra = false;
    if(len > 24) {
        /* look ahead */
        blob.l += len - 24;
        if(blob.read_shift(16) === "795881f43b1d7f48af2c825dc4852763") extra = true;
        blob.l = start;
    }
    var url = blob.read_shift((extra?len-24:len)>>1, 'utf16le').replace(chr0,"");
    if(extra) blob.l += 24;
    return url;
};

/* [MS-OSHARED] 2.3.7.8 FileMoniker TODO: all fields */
var parse_FileMoniker = function(blob, length) {
    var cAnti = blob.read_shift(2);
    var ansiLength = blob.read_shift(4);
    var ansiPath = blob.read_shift(ansiLength, 'cstr');
    var endServer = blob.read_shift(2);
    var versionNumber = blob.read_shift(2);
    var cbUnicodePathSize = blob.read_shift(4);
    if(cbUnicodePathSize === 0) return ansiPath.replace(/\\/g,"/");
    var cbUnicodePathBytes = blob.read_shift(4);
    var usKeyValue = blob.read_shift(2);
    var unicodePath = blob.read_shift(cbUnicodePathBytes>>1, 'utf16le').replace(chr0,"");
    return unicodePath;
};

/* [MS-OSHARED] 2.3.7.2 HyperlinkMoniker TODO: all the monikers */
var parse_HyperlinkMoniker = function(blob, length) {
    var clsid = blob.read_shift(16); length -= 16;
    switch(clsid) {
        case "e0c9ea79f9bace118c8200aa004ba90b": return parse_URLMoniker(blob, length);
        case "0303000000000000c000000000000046": return parse_FileMoniker(blob, length);
        default: throw "unsupported moniker " + clsid;
    }
};

/* [MS-OSHARED] 2.3.7.9 HyperlinkString */
var parse_HyperlinkString = function(blob, length) {
    var len = blob.read_shift(4);
    var o = blob.read_shift(len, 'utf16le').replace(chr0, "");
    return o;
};

/* [MS-OSHARED] 2.3.7.1 Hyperlink Object TODO: unify params with XLSX */
var parse_Hyperlink = function(blob, length) {
    var end = blob.l + length;
    var sVer = blob.read_shift(4);
    if(sVer !== 2) throw new Error("Unrecognized streamVersion: " + sVer);
    var flags = blob.read_shift(2);
    blob.l += 2;
    var displayName, targetFrameName, moniker, oleMoniker, location, guid, fileTime;
    if(flags & 0x0010) displayName = parse_HyperlinkString(blob, end - blob.l);
    if(flags & 0x0080) targetFrameName = parse_HyperlinkString(blob, end - blob.l);
    if((flags & 0x0101) === 0x0101) moniker = parse_HyperlinkString(blob, end - blob.l);
    if((flags & 0x0101) === 0x0001) oleMoniker = parse_HyperlinkMoniker(blob, end - blob.l);
    if(flags & 0x0008) location = parse_HyperlinkString(blob, end - blob.l);
    if(flags & 0x0020) guid = blob.read_shift(16);
    if(flags & 0x0040) fileTime = parse_FILETIME(blob, 8);
    blob.l = end;
    var target = (targetFrameName||moniker||oleMoniker);
    if(location) target+="#"+location;
    return {Target: target};
};

/* 2.5.178 LongRGBA */
function parse_LongRGBA(blob, length) { var r = blob.read_shift(1), g = blob.read_shift(1), b = blob.read_shift(1), a = blob.read_shift(1); return [r,g,b,a]; }

/* 2.5.177 LongRGB */
function parse_LongRGB(blob, length) { var x = parse_LongRGBA(blob, length); x[3] = 0; return x; }


/* --- MS-XLS --- */

/* 2.5.19 */
function parse_XLSCell(blob, length) {
    var rw = blob.read_shift(2); // 0-indexed
    var col = blob.read_shift(2);
    var ixfe = blob.read_shift(2);
    return {r:rw, c:col, ixfe:ixfe};
}

/* 2.5.134 */
function parse_frtHeader(blob) {
    var rt = blob.read_shift(2);
    var flags = blob.read_shift(2); // TODO: parse these flags
    blob.l += 8;
    return {type: rt, flags: flags};
}



function parse_OptXLUnicodeString(blob, length, opts) { return length === 0 ? "" : parse_XLUnicodeString2(blob, length, opts); }

/* 2.5.158 */
var HIDEOBJENUM = ['SHOWALL', 'SHOWPLACEHOLDER', 'HIDEALL'];
var parse_HideObjEnum = parseuint16;

/* 2.5.344 */
function parse_XTI(blob, length) {
    var iSupBook = blob.read_shift(2), itabFirst = blob.read_shift(2,'i'), itabLast = blob.read_shift(2,'i');
    return [iSupBook, itabFirst, itabLast];
}

/* 2.5.218 */
function parse_RkRec(blob, length) {
    var ixfe = blob.read_shift(2);
    var RK = parse_RkNumber(blob);
    //console.log("::", ixfe, RK,";;");
    return [ixfe, RK];
}

/* 2.5.1 */
function parse_AddinUdf(blob, length) {
    blob.l += 4; length -= 4;
    var l = blob.l + length;
    var udfName = parse_ShortXLUnicodeString(blob, length);
    var cb = blob.read_shift(2);
    l -= blob.l;
    if(cb !== l) throw "Malformed AddinUdf: padding = " + l + " != " + cb;
    blob.l += cb;
    return udfName;
}

/* 2.5.209 TODO: Check sizes */
function parse_Ref8U(blob, length) {
    var rwFirst = blob.read_shift(2);
    var rwLast = blob.read_shift(2);
    var colFirst = blob.read_shift(2);
    var colLast = blob.read_shift(2);
    return {s:{c:colFirst, r:rwFirst}, e:{c:colLast,r:rwLast}};
}

/* 2.5.211 */
function parse_RefU(blob, length) {
    var rwFirst = blob.read_shift(2);
    var rwLast = blob.read_shift(2);
    var colFirst = blob.read_shift(1);
    var colLast = blob.read_shift(1);
    return {s:{c:colFirst, r:rwFirst}, e:{c:colLast,r:rwLast}};
}

/* 2.5.207 */
var parse_Ref = parse_RefU;

/* 2.5.143 */
function parse_FtCmo(blob, length) {
    blob.l += 4;
    var ot = blob.read_shift(2);
    var id = blob.read_shift(2);
    var flags = blob.read_shift(2);
    blob.l+=12;
    return [id, ot, flags];
}

/* 2.5.149 */
function parse_FtNts(blob, length) {
    var out = {};
    blob.l += 4;
    blob.l += 16; // GUID TODO
    out.fSharedNote = blob.read_shift(2);
    blob.l += 4;
    return out;
}

/* 2.5.142 */
function parse_FtCf(blob, length) {
    var out = {};
    blob.l += 4;
    blob.cf = blob.read_shift(2);
    return out;
}

/* 2.5.140 - 2.5.154 and friends */
var FtTab = {
    0x15: parse_FtCmo,
    0x13: parsenoop,                                /* FtLbsData */
    0x12: function(blob, length) { blob.l += 12; }, /* FtCblsData */
    0x11: function(blob, length) { blob.l += 8; },  /* FtRboData */
    0x10: parsenoop,                                /* FtEdoData */
    0x0F: parsenoop,                                /* FtGboData */
    0x0D: parse_FtNts,                              /* FtNts */
    0x0C: function(blob, length) { blob.l += 24; }, /* FtSbs */
    0x0B: function(blob, length) { blob.l += 10; }, /* FtRbo */
    0x0A: function(blob, length) { blob.l += 16; }, /* FtCbls */
    0x09: parsenoop,                                /* FtPictFmla */
    0x08: function(blob, length) { blob.l += 6; },  /* FtPioGrbit */
    0x07: parse_FtCf,                               /* FtCf */
    0x06: function(blob, length) { blob.l += 6; },  /* FtGmo */
    0x04: parsenoop,                                /* FtMacro */
    0x00: function(blob, length) { blob.l += 4; }   /* FtEnding */
};
function parse_FtArray(blob, length, ot) {
    var s = blob.l;
    var fts = [];
    while(blob.l < s + length) {
        var ft = blob.read_shift(2);
        blob.l-=2;
        try {
            fts.push(FtTab[ft](blob, s + length - blob.l));
        } catch(e) { blob.l = s + length; return fts; }
    }
    if(blob.l != s + length) blob.l = s + length; //throw "bad Object Ft-sequence";
    return fts;
}

/* 2.5.129 */
var parse_FontIndex = parseuint16;

/* --- 2.4 Records --- */

/* 2.4.21 */
function parse_BOF(blob, length) {
    var o = {};
    o.BIFFVer = blob.read_shift(2); length -= 2;
    switch(o.BIFFVer) {
        case 0x0600: /* BIFF8 */
        case 0x0500: /* BIFF5 */
        case 0x0002: case 0x0007: /* BIFF2 */
            break;
        default: throw "Unexpected BIFF Ver " + o.BIFFVer;
    }
    blob.read_shift(length);
    return o;
}


/* 2.4.146 */
function parse_InterfaceHdr(blob, length) {
    if(length === 0) return 0x04b0;
    var q;
    if((q=blob.read_shift(2))!==0x04b0) throw 'InterfaceHdr codePage ' + q;
    return 0x04b0;
}


/* 2.4.349 */
function parse_WriteAccess(blob, length, opts) {
    if(opts.enc) { blob.l += length; return ""; }
    var l = blob.l;
    // TODO: make sure XLUnicodeString doesnt overrun
    var UserName = parse_XLUnicodeString(blob, 0, opts);
    blob.read_shift(length + l - blob.l);
    return UserName;
}

/* 2.4.28 */
function parse_BoundSheet8(blob, length, opts) {
    var pos = blob.read_shift(4);
    var hidden = blob.read_shift(1) >> 6;
    var dt = blob.read_shift(1);
    switch(dt) {
        case 0: dt = 'Worksheet'; break;
        case 1: dt = 'Macrosheet'; break;
        case 2: dt = 'Chartsheet'; break;
        case 6: dt = 'VBAModule'; break;
    }
    var name = parse_ShortXLUnicodeString(blob, 0, opts);
    if(name.length === 0) name = "Sheet1";
    return { pos:pos, hs:hidden, dt:dt, name:name };
}

/* 2.4.265 TODO */
function parse_SST(blob, length) {
    var cnt = blob.read_shift(4);
    var ucnt = blob.read_shift(4);
    var strs = [];
    for(var i = 0; i != ucnt; ++i) {
        strs.push(parse_XLUnicodeRichExtendedString(blob));
    }
    strs.Count = cnt; strs.Unique = ucnt;
    return strs;
}

/* 2.4.107 */
function parse_ExtSST(blob, length) {
    var extsst = {};
    extsst.dsst = blob.read_shift(2);
    blob.l += length-2;
    return extsst;
}


/* 2.4.221 TODO*/
function parse_Row(blob, length) {
    var rw = blob.read_shift(2), col = blob.read_shift(2), Col = blob.read_shift(2), rht = blob.read_shift(2);
    blob.read_shift(4); // reserved(2), unused(2)
    var flags = blob.read_shift(1); // various flags
    blob.read_shift(1); // reserved
    blob.read_shift(2); //ixfe, other flags
    return {r:rw, c:col, cnt:Col-col};
}


/* 2.4.125 */
function parse_ForceFullCalculation(blob, length) {
    var header = parse_frtHeader(blob);
    if(header.type != 0x08A3) throw "Invalid Future Record " + header.type;
    var fullcalc = blob.read_shift(4);
    return fullcalc !== 0x0;
}


var parse_CompressPictures = parsenoop2; /* 2.4.55 Not interesting */



/* 2.4.215 rt */
function parse_RecalcId(blob, length) {
    blob.read_shift(2);
    return blob.read_shift(4);
}

/* 2.4.87 */
function parse_DefaultRowHeight (blob, length) {
    var f = blob.read_shift(2), miyRw;
    miyRw = blob.read_shift(2); // flags & 0x02 -> hidden, else empty
    var fl = {Unsynced:f&1,DyZero:(f&2)>>1,ExAsc:(f&4)>>2,ExDsc:(f&8)>>3};
    return [fl, miyRw];
}

/* 2.4.345 TODO */
function parse_Window1(blob, length) {
    var xWn = blob.read_shift(2), yWn = blob.read_shift(2), dxWn = blob.read_shift(2), dyWn = blob.read_shift(2);
    var flags = blob.read_shift(2), iTabCur = blob.read_shift(2), iTabFirst = blob.read_shift(2);
    var ctabSel = blob.read_shift(2), wTabRatio = blob.read_shift(2);
    return { Pos: [xWn, yWn], Dim: [dxWn, dyWn], Flags: flags, CurTab: iTabCur,
        FirstTab: iTabFirst, Selected: ctabSel, TabRatio: wTabRatio };
}

/* 2.4.122 TODO */
function parse_Font(blob, length, opts) {
    blob.l += 14;
    var name = parse_ShortXLUnicodeString(blob, 0, opts);
    return name;
}

/* 2.4.149 */
function parse_LabelSst(blob, length) {
    var cell = parse_XLSCell(blob);
    cell.isst = blob.read_shift(4);
    return cell;
}

/* 2.4.148 */
function parse_Label(blob, length, opts) {
    var cell = parse_XLSCell(blob, 6);
    var str = parse_XLUnicodeString(blob, length-6, opts);
    cell.val = str;
    return cell;
}

/* 2.4.126 Number Formats */
function parse_Format(blob, length, opts) {
    var ifmt = blob.read_shift(2);
    var fmtstr = parse_XLUnicodeString2(blob, 0, opts);
    return [ifmt, fmtstr];
}

/* 2.4.90 */
function parse_Dimensions(blob, length) {
    var w = length === 10 ? 2 : 4;
    var r = blob.read_shift(w), R = blob.read_shift(w),
        c = blob.read_shift(2), C = blob.read_shift(2);
    blob.l += 2;
    return {s: {r:r, c:c}, e: {r:R, c:C}};
}

/* 2.4.220 */
function parse_RK(blob, length) {
    var rw = blob.read_shift(2), col = blob.read_shift(2);
    var rkrec = parse_RkRec(blob);
    return {r:rw, c:col, ixfe:rkrec[0], rknum:rkrec[1]};
}

/* 2.4.175 */
function parse_MulRk(blob, length) {
    var target = blob.l + length - 2;
    var rw = blob.read_shift(2), col = blob.read_shift(2);
    var rkrecs = [];
    while(blob.l < target) rkrecs.push(parse_RkRec(blob));
    if(blob.l !== target) throw "MulRK read error";
    var lastcol = blob.read_shift(2);
    if(rkrecs.length != lastcol - col + 1) throw "MulRK length mismatch";
    return {r:rw, c:col, C:lastcol, rkrec:rkrecs};
}

/* 2.5.20 2.5.249 TODO */
function parse_CellStyleXF(blob, length, style) {
    var o = {};
    var a = blob.read_shift(4), b = blob.read_shift(4);
    var c = blob.read_shift(4), d = blob.read_shift(2);
    o.patternType = XLSFillPattern[c >> 26];
    o.icvFore = d & 0x7F;
    o.icvBack = (d >> 7) & 0x7F;
    return o;
}
function parse_CellXF(blob, length) {return parse_CellStyleXF(blob,length,0);}
function parse_StyleXF(blob, length) {return parse_CellStyleXF(blob,length,1);}

/* 2.4.353 TODO: actually do this right */
function parse_XF(blob, length) {
    var o = {};
    o.ifnt = blob.read_shift(2); o.ifmt = blob.read_shift(2); o.flags = blob.read_shift(2);
    o.fStyle = (o.flags >> 2) & 0x01;
    length -= 6;
    o.data = parse_CellStyleXF(blob, length, o.fStyle);
    return o;
}

/* 2.4.134 */
function parse_Guts(blob, length) {
    blob.l += 4;
    var out = [blob.read_shift(2), blob.read_shift(2)];
    if(out[0] !== 0) out[0]--;
    if(out[1] !== 0) out[1]--;
    if(out[0] > 7 || out[1] > 7) throw "Bad Gutters: " + out;
    return out;
}

/* 2.4.24 */
function parse_BoolErr(blob, length) {
    var cell = parse_XLSCell(blob, 6);
    var val = parse_Bes(blob, 2);
    cell.val = val;
    cell.t = (val === true || val === false) ? 'b' : 'e';
    return cell;
}

/* 2.4.180 Number */
function parse_Number(blob, length) {
    var cell = parse_XLSCell(blob, 6);
    var xnum = parse_Xnum(blob, 8);
    cell.val = xnum;
    return cell;
}

var parse_XLHeaderFooter = parse_OptXLUnicodeString; // TODO: parse 2.4.136

/* 2.4.271 */
function parse_SupBook(blob, length, opts) {
    var end = blob.l + length;
    var ctab = blob.read_shift(2);
    var cch = blob.read_shift(2);
    var virtPath;
    if(cch >=0x01 && cch <=0xff) virtPath = parse_XLUnicodeStringNoCch(blob, cch);
    var rgst = blob.read_shift(end - blob.l);
    opts.sbcch = cch;
    return [cch, ctab, virtPath, rgst];
}

/* 2.4.105 TODO */
function parse_ExternName(blob, length, opts) {
    var flags = blob.read_shift(2);
    var body;
    var o = {
        fBuiltIn: flags & 0x01,
        fWantAdvise: (flags >>> 1) & 0x01,
        fWantPict: (flags >>> 2) & 0x01,
        fOle: (flags >>> 3) & 0x01,
        fOleLink: (flags >>> 4) & 0x01,
        cf: (flags >>> 5) & 0x3FF,
        fIcon: flags >>> 15 & 0x01
    };
    if(opts.sbcch === 0x3A01) body = parse_AddinUdf(blob, length-2);
    //else throw new Error("unsupported SupBook cch: " + opts.sbcch);
    o.body = body || blob.read_shift(length-2);
    return o;
}

/* 2.4.150 TODO */
function parse_Lbl(blob, length, opts) {
    if(opts.biff < 8) return parse_Label(blob, length, opts);
    var target = blob.l + length;
    var flags = blob.read_shift(2);
    var chKey = blob.read_shift(1);
    var cch = blob.read_shift(1);
    var cce = blob.read_shift(2);
    blob.l += 2;
    var itab = blob.read_shift(2);
    blob.l += 4;
    var name = parse_XLUnicodeStringNoCch(blob, cch, opts);
    var rgce = parse_NameParsedFormula(blob, target - blob.l, opts, cce);
    return {
        chKey: chKey,
        Name: name,
        rgce: rgce
    };
}

/* 2.4.106 TODO: verify supbook manipulation */
function parse_ExternSheet(blob, length, opts) {
    if(opts.biff < 8) return parse_ShortXLUnicodeString(blob, length, opts);
    var o = parslurp2(blob,length,parse_XTI);
    var oo = [];
    if(opts.sbcch === 0x0401) {
        for(var i = 0; i != o.length; ++i) oo.push(opts.snames[o[i][1]]);
        return oo;
    }
    else return o;
}

/* 2.4.260 */
function parse_ShrFmla(blob, length, opts) {
    var ref = parse_RefU(blob, 6);
    blob.l++;
    var cUse = blob.read_shift(1);
    length -= 8;
    return [parse_SharedParsedFormula(blob, length, opts), cUse];
}

/* 2.4.4 TODO */
function parse_Array(blob, length, opts) {
    var ref = parse_Ref(blob, 6);
    blob.l += 6; length -= 12; /* TODO: fAlwaysCalc */
    return [ref, parse_ArrayParsedFormula(blob, length, opts, ref)];
}

/* 2.4.173 */
function parse_MTRSettings(blob, length) {
    var fMTREnabled = blob.read_shift(4) !== 0x00;
    var fUserSetThreadCount = blob.read_shift(4) !== 0x00;
    var cUserThreadCount = blob.read_shift(4);
    return [fMTREnabled, fUserSetThreadCount, cUserThreadCount];
}

/* 2.5.186 TODO: BIFF5 */
function parse_NoteSh(blob, length, opts) {
    if(opts.biff < 8) return;
    var row = blob.read_shift(2), col = blob.read_shift(2);
    var flags = blob.read_shift(2), idObj = blob.read_shift(2);
    var stAuthor = parse_XLUnicodeString2(blob, 0, opts);
    if(opts.biff < 8) blob.read_shift(1);
    return [{r:row,c:col}, stAuthor, idObj, flags];
}

/* 2.4.179 */
function parse_Note(blob, length, opts) {
    /* TODO: Support revisions */
    return parse_NoteSh(blob, length, opts);
}

/* 2.4.168 */
function parse_MergeCells(blob, length) {
    var merges = [];
    var cmcs = blob.read_shift(2);
    while (cmcs--) merges.push(parse_Ref8U(blob,length));
    return merges;
}

/* 2.4.181 TODO: parse all the things! */
function parse_Obj(blob, length) {
    var cmo = parse_FtCmo(blob, 22); // id, ot, flags
    var fts = parse_FtArray(blob, length-22, cmo[1]);
    return { cmo: cmo, ft:fts };
}

/* 2.4.329 TODO: parse properly */
function parse_TxO(blob, length, opts) {
    var s = blob.l;
try {
    blob.l += 4;
    var ot = (opts.lastobj||{cmo:[0,0]}).cmo[1];
    var controlInfo;
    if([0,5,7,11,12,14].indexOf(ot) == -1) blob.l += 6;
    else controlInfo = parse_ControlInfo(blob, 6, opts);
    var cchText = blob.read_shift(2);
    var cbRuns = blob.read_shift(2);
    var ifntEmpty = parse_FontIndex(blob, 2);
    var len = blob.read_shift(2);
    blob.l += len;
    //var fmla = parse_ObjFmla(blob, s + length - blob.l);

    var texts = "";
    for(var i = 1; i < blob.lens.length-1; ++i) {
        if(blob.l-s != blob.lens[i]) throw "TxO: bad continue record";
        var hdr = blob[blob.l];
        var t = parse_XLUnicodeStringNoCch(blob, blob.lens[i+1]-blob.lens[i]-1);
        texts += t;
        if(texts.length >= (hdr ? cchText : 2*cchText)) break;
    }
    if(texts.length !== cchText && texts.length !== cchText*2) {
        throw "cchText: " + cchText + " != " + texts.length;
    }

    blob.l = s + length;
    /* 2.5.272 TxORuns */
//  var rgTxoRuns = [];
//  for(var j = 0; j != cbRuns/8-1; ++j) blob.l += 8;
//  var cchText2 = blob.read_shift(2);
//  if(cchText2 !== cchText) throw "TxOLastRun mismatch: " + cchText2 + " " + cchText;
//  blob.l += 6;
//  if(s + length != blob.l) throw "TxO " + (s + length) + ", at " + blob.l;
    return { t: texts };
} catch(e) { blob.l = s + length; return { t: texts||"" }; }
}

/* 2.4.140 */
var parse_HLink = function(blob, length) {
    var ref = parse_Ref8U(blob, 8);
    blob.l += 16; /* CLSID */
    var hlink = parse_Hyperlink(blob, length-24);
    return [ref, hlink];
};

/* 2.4.141 */
var parse_HLinkTooltip = function(blob, length) {
    var end = blob.l + length;
    blob.read_shift(2);
    var ref = parse_Ref8U(blob, 8);
    var wzTooltip = blob.read_shift((length-10)/2, 'dbcs-cont');
    wzTooltip = wzTooltip.replace(chr0,"");
    return [ref, wzTooltip];
};

/* 2.4.63 */
function parse_Country(blob, length) {
    var o = [], d;
    d = blob.read_shift(2); o[0] = CountryEnum[d] || d;
    d = blob.read_shift(2); o[1] = CountryEnum[d] || d;
    return o;
}

/* 2.4.50 ClrtClient */
function parse_ClrtClient(blob, length) {
    var ccv = blob.read_shift(2);
    var o = [];
    while(ccv-->0) o.push(parse_LongRGB(blob, 8));
    return o;
}

/* 2.4.188 */
function parse_Palette(blob, length) {
    var ccv = blob.read_shift(2);
    var o = [];
    while(ccv-->0) o.push(parse_LongRGB(blob, 8));
    return o;
}

/* 2.4.354 */
function parse_XFCRC(blob, length) {
    blob.l += 2;
    var o = {cxfs:0, crc:0};
    o.cxfs = blob.read_shift(2);
    o.crc = blob.read_shift(4);
    return o;
}


var parse_Style = parsenoop;
var parse_StyleExt = parsenoop;

var parse_ColInfo = parsenoop;

var parse_Window2 = parsenoop;


var parse_Backup = parsebool; /* 2.4.14 */
var parse_Blank = parse_XLSCell; /* 2.4.20 Just the cell */
var parse_BottomMargin = parse_Xnum; /* 2.4.27 */
var parse_BuiltInFnGroupCount = parseuint16; /* 2.4.30 0x0E or 0x10 but excel 2011 generates 0x11? */
var parse_CalcCount = parseuint16; /* 2.4.31 #Iterations */
var parse_CalcDelta = parse_Xnum; /* 2.4.32 */
var parse_CalcIter = parsebool;  /* 2.4.33 1=iterative calc */
var parse_CalcMode = parseuint16; /* 2.4.34 0=manual, 1=auto (def), 2=table */
var parse_CalcPrecision = parsebool; /* 2.4.35 */
var parse_CalcRefMode = parsenoop2; /* 2.4.36 */
var parse_CalcSaveRecalc = parsebool; /* 2.4.37 */
var parse_CodePage = parseuint16; /* 2.4.52 */
var parse_Compat12 = parsebool; /* 2.4.54 true = no compatibility check */
var parse_Date1904 = parsebool; /* 2.4.77 - 1=1904,0=1900 */
var parse_DefColWidth = parseuint16; /* 2.4.89 */
var parse_DSF = parsenoop2; /* 2.4.94 -- MUST be ignored */
var parse_EntExU2 = parsenoop2; /* 2.4.102 -- Explicitly says to ignore */
var parse_EOF = parsenoop2; /* 2.4.103 */
var parse_Excel9File = parsenoop2; /* 2.4.104 -- Optional and unused */
var parse_FeatHdr = parsenoop2; /* 2.4.112 */
var parse_FontX = parseuint16; /* 2.4.123 */
var parse_Footer = parse_XLHeaderFooter; /* 2.4.124 */
var parse_GridSet = parseuint16; /* 2.4.132, =1 */
var parse_HCenter = parsebool; /* 2.4.135 sheet centered horizontal on print */
var parse_Header = parse_XLHeaderFooter; /* 2.4.136 */
var parse_HideObj = parse_HideObjEnum; /* 2.4.139 */
var parse_InterfaceEnd = parsenoop2; /* 2.4.145 -- noop */
var parse_LeftMargin = parse_Xnum; /* 2.4.151 */
var parse_Mms = parsenoop2; /* 2.4.169 -- Explicitly says to ignore */
var parse_ObjProtect = parsebool; /* 2.4.183 -- must be 1 if present */
var parse_Password = parseuint16; /* 2.4.191 */
var parse_PrintGrid = parsebool; /* 2.4.202 */
var parse_PrintRowCol = parsebool; /* 2.4.203 */
var parse_PrintSize = parseuint16; /* 2.4.204 0:3 */
var parse_Prot4Rev = parsebool; /* 2.4.205 */
var parse_Prot4RevPass = parseuint16; /* 2.4.206 */
var parse_Protect = parsebool; /* 2.4.207 */
var parse_RefreshAll = parsebool; /* 2.4.217 -- must be 0 if not template */
var parse_RightMargin = parse_Xnum; /* 2.4.219 */
var parse_RRTabId = parseuint16a; /* 2.4.241 */
var parse_ScenarioProtect = parsebool; /* 2.4.245 */
var parse_Scl = parseuint16a; /* 2.4.247 num, den */
var parse_String = parse_XLUnicodeString; /* 2.4.268 */
var parse_SxBool = parsebool; /* 2.4.274 */
var parse_TopMargin = parse_Xnum; /* 2.4.328 */
var parse_UsesELFs = parsebool; /* 2.4.337 -- should be 0 */
var parse_VCenter = parsebool; /* 2.4.342 */
var parse_WinProtect = parsebool; /* 2.4.347 */
var parse_WriteProtect = parsenoop; /* 2.4.350 empty record */


/* ---- */
var parse_VerticalPageBreaks = parsenoop;
var parse_HorizontalPageBreaks = parsenoop;
var parse_Selection = parsenoop;
var parse_Continue = parsenoop;
var parse_Pane = parsenoop;
var parse_Pls = parsenoop;
var parse_DCon = parsenoop;
var parse_DConRef = parsenoop;
var parse_DConName = parsenoop;
var parse_XCT = parsenoop;
var parse_CRN = parsenoop;
var parse_FileSharing = parsenoop;
var parse_Uncalced = parsenoop;
var parse_Template = parsenoop;
var parse_Intl = parsenoop;
var parse_WsBool = parsenoop;
var parse_Sort = parsenoop;
var parse_Sync = parsenoop;
var parse_LPr = parsenoop;
var parse_DxGCol = parsenoop;
var parse_FnGroupName = parsenoop;
var parse_FilterMode = parsenoop;
var parse_AutoFilterInfo = parsenoop;
var parse_AutoFilter = parsenoop;
var parse_Setup = parsenoop;
var parse_ScenMan = parsenoop;
var parse_SCENARIO = parsenoop;
var parse_SxView = parsenoop;
var parse_Sxvd = parsenoop;
var parse_SXVI = parsenoop;
var parse_SxIvd = parsenoop;
var parse_SXLI = parsenoop;
var parse_SXPI = parsenoop;
var parse_DocRoute = parsenoop;
var parse_RecipName = parsenoop;
var parse_MulBlank = parsenoop;
var parse_SXDI = parsenoop;
var parse_SXDB = parsenoop;
var parse_SXFDB = parsenoop;
var parse_SXDBB = parsenoop;
var parse_SXNum = parsenoop;
var parse_SxErr = parsenoop;
var parse_SXInt = parsenoop;
var parse_SXString = parsenoop;
var parse_SXDtr = parsenoop;
var parse_SxNil = parsenoop;
var parse_SXTbl = parsenoop;
var parse_SXTBRGIITM = parsenoop;
var parse_SxTbpg = parsenoop;
var parse_ObProj = parsenoop;
var parse_SXStreamID = parsenoop;
var parse_DBCell = parsenoop;
var parse_SXRng = parsenoop;
var parse_SxIsxoper = parsenoop;
var parse_BookBool = parsenoop;
var parse_DbOrParamQry = parsenoop;
var parse_OleObjectSize = parsenoop;
var parse_SXVS = parsenoop;
var parse_BkHim = parsenoop;
var parse_MsoDrawingGroup = parsenoop;
var parse_MsoDrawing = parsenoop;
var parse_MsoDrawingSelection = parsenoop;
var parse_PhoneticInfo = parsenoop;
var parse_SxRule = parsenoop;
var parse_SXEx = parsenoop;
var parse_SxFilt = parsenoop;
var parse_SxDXF = parsenoop;
var parse_SxItm = parsenoop;
var parse_SxName = parsenoop;
var parse_SxSelect = parsenoop;
var parse_SXPair = parsenoop;
var parse_SxFmla = parsenoop;
var parse_SxFormat = parsenoop;
var parse_SXVDEx = parsenoop;
var parse_SXFormula = parsenoop;
var parse_SXDBEx = parsenoop;
var parse_RRDInsDel = parsenoop;
var parse_RRDHead = parsenoop;
var parse_RRDChgCell = parsenoop;
var parse_RRDRenSheet = parsenoop;
var parse_RRSort = parsenoop;
var parse_RRDMove = parsenoop;
var parse_RRFormat = parsenoop;
var parse_RRAutoFmt = parsenoop;
var parse_RRInsertSh = parsenoop;
var parse_RRDMoveBegin = parsenoop;
var parse_RRDMoveEnd = parsenoop;
var parse_RRDInsDelBegin = parsenoop;
var parse_RRDInsDelEnd = parsenoop;
var parse_RRDConflict = parsenoop;
var parse_RRDDefName = parsenoop;
var parse_RRDRstEtxp = parsenoop;
var parse_LRng = parsenoop;
var parse_CUsr = parsenoop;
var parse_CbUsr = parsenoop;
var parse_UsrInfo = parsenoop;
var parse_UsrExcl = parsenoop;
var parse_FileLock = parsenoop;
var parse_RRDInfo = parsenoop;
var parse_BCUsrs = parsenoop;
var parse_UsrChk = parsenoop;
var parse_UserBView = parsenoop;
var parse_UserSViewBegin = parsenoop; // overloaded
var parse_UserSViewEnd = parsenoop;
var parse_RRDUserView = parsenoop;
var parse_Qsi = parsenoop;
var parse_CondFmt = parsenoop;
var parse_CF = parsenoop;
var parse_DVal = parsenoop;
var parse_DConBin = parsenoop;
var parse_Lel = parsenoop;
var parse_XLSCodeName = parse_XLUnicodeString;
var parse_SXFDBType = parsenoop;
var parse_ObNoMacros = parsenoop;
var parse_Dv = parsenoop;
var parse_Index = parsenoop;
var parse_Table = parsenoop;
var parse_BigName = parsenoop;
var parse_ContinueBigName = parsenoop;
var parse_WebPub = parsenoop;
var parse_QsiSXTag = parsenoop;
var parse_DBQueryExt = parsenoop;
var parse_ExtString = parsenoop;
var parse_TxtQry = parsenoop;
var parse_Qsir = parsenoop;
var parse_Qsif = parsenoop;
var parse_RRDTQSIF = parsenoop;
var parse_OleDbConn = parsenoop;
var parse_WOpt = parsenoop;
var parse_SXViewEx = parsenoop;
var parse_SXTH = parsenoop;
var parse_SXPIEx = parsenoop;
var parse_SXVDTEx = parsenoop;
var parse_SXViewEx9 = parsenoop;
var parse_ContinueFrt = parsenoop;
var parse_RealTimeData = parsenoop;
var parse_ChartFrtInfo = parsenoop;
var parse_FrtWrapper = parsenoop;
var parse_StartBlock = parsenoop;
var parse_EndBlock = parsenoop;
var parse_StartObject = parsenoop;
var parse_EndObject = parsenoop;
var parse_CatLab = parsenoop;
var parse_YMult = parsenoop;
var parse_SXViewLink = parsenoop;
var parse_PivotChartBits = parsenoop;
var parse_FrtFontList = parsenoop;
var parse_SheetExt = parsenoop;
var parse_BookExt = parsenoop;
var parse_SXAddl = parsenoop;
var parse_CrErr = parsenoop;
var parse_HFPicture = parsenoop;
var parse_Feat = parsenoop;
var parse_DataLabExt = parsenoop;
var parse_DataLabExtContents = parsenoop;
var parse_CellWatch = parsenoop;
var parse_FeatHdr11 = parsenoop;
var parse_Feature11 = parsenoop;
var parse_DropDownObjIds = parsenoop;
var parse_ContinueFrt11 = parsenoop;
var parse_DConn = parsenoop;
var parse_List12 = parsenoop;
var parse_Feature12 = parsenoop;
var parse_CondFmt12 = parsenoop;
var parse_CF12 = parsenoop;
var parse_CFEx = parsenoop;
var parse_AutoFilter12 = parsenoop;
var parse_ContinueFrt12 = parsenoop;
var parse_MDTInfo = parsenoop;
var parse_MDXStr = parsenoop;
var parse_MDXTuple = parsenoop;
var parse_MDXSet = parsenoop;
var parse_MDXProp = parsenoop;
var parse_MDXKPI = parsenoop;
var parse_MDB = parsenoop;
var parse_PLV = parsenoop;
var parse_DXF = parsenoop;
var parse_TableStyles = parsenoop;
var parse_TableStyle = parsenoop;
var parse_TableStyleElement = parsenoop;
var parse_NamePublish = parsenoop;
var parse_NameCmt = parsenoop;
var parse_SortData = parsenoop;
var parse_GUIDTypeLib = parsenoop;
var parse_FnGrp12 = parsenoop;
var parse_NameFnGrp12 = parsenoop;
var parse_HeaderFooter = parsenoop;
var parse_CrtLayout12 = parsenoop;
var parse_CrtMlFrt = parsenoop;
var parse_CrtMlFrtContinue = parsenoop;
var parse_ShapePropsStream = parsenoop;
var parse_TextPropsStream = parsenoop;
var parse_RichTextStream = parsenoop;
var parse_CrtLayout12A = parsenoop;
var parse_Units = parsenoop;
var parse_Chart = parsenoop;
var parse_Series = parsenoop;
var parse_DataFormat = parsenoop;
var parse_LineFormat = parsenoop;
var parse_MarkerFormat = parsenoop;
var parse_AreaFormat = parsenoop;
var parse_PieFormat = parsenoop;
var parse_AttachedLabel = parsenoop;
var parse_SeriesText = parsenoop;
var parse_ChartFormat = parsenoop;
var parse_Legend = parsenoop;
var parse_SeriesList = parsenoop;
var parse_Bar = parsenoop;
var parse_Line = parsenoop;
var parse_Pie = parsenoop;
var parse_Area = parsenoop;
var parse_Scatter = parsenoop;
var parse_CrtLine = parsenoop;
var parse_Axis = parsenoop;
var parse_Tick = parsenoop;
var parse_ValueRange = parsenoop;
var parse_CatSerRange = parsenoop;
var parse_AxisLine = parsenoop;
var parse_CrtLink = parsenoop;
var parse_DefaultText = parsenoop;
var parse_Text = parsenoop;
var parse_ObjectLink = parsenoop;
var parse_Frame = parsenoop;
var parse_Begin = parsenoop;
var parse_End = parsenoop;
var parse_PlotArea = parsenoop;
var parse_Chart3d = parsenoop;
var parse_PicF = parsenoop;
var parse_DropBar = parsenoop;
var parse_Radar = parsenoop;
var parse_Surf = parsenoop;
var parse_RadarArea = parsenoop;
var parse_AxisParent = parsenoop;
var parse_LegendException = parsenoop;
var parse_ShtProps = parsenoop;
var parse_SerToCrt = parsenoop;
var parse_AxesUsed = parsenoop;
var parse_SBaseRef = parsenoop;
var parse_SerParent = parsenoop;
var parse_SerAuxTrend = parsenoop;
var parse_IFmtRecord = parsenoop;
var parse_Pos = parsenoop;
var parse_AlRuns = parsenoop;
var parse_BRAI = parsenoop;
var parse_SerAuxErrBar = parsenoop;
var parse_SerFmt = parsenoop;
var parse_Chart3DBarShape = parsenoop;
var parse_Fbi = parsenoop;
var parse_BopPop = parsenoop;
var parse_AxcExt = parsenoop;
var parse_Dat = parsenoop;
var parse_PlotGrowth = parsenoop;
var parse_SIIndex = parsenoop;
var parse_GelFrame = parsenoop;
var parse_BopPopCustom = parsenoop;
var parse_Fbi2 = parsenoop;

/* --- Specific to versions before BIFF8 --- */
function parse_BIFF5String(blob) {
    var len = blob.read_shift(1);
    return blob.read_shift(len, 'sbcs-cont');
}

/* BIFF2_??? where ??? is the name from [XLS] */
function parse_BIFF2STR(blob, length, opts) {
    var cell = parse_XLSCell(blob, 6);
    ++blob.l;
    var str = parse_XLUnicodeString2(blob, length-7, opts);
    cell.val = str;
    return cell;
}

function parse_BIFF2NUM(blob, length, opts) {
    var cell = parse_XLSCell(blob, 6);
    ++blob.l;
    var num = parse_Xnum(blob, 8);
    cell.val = num;
    return cell;
}

/* 18.4.1 charset to codepage mapping */
var CS2CP = {
    0:    1252, /* ANSI */
    1:   65001, /* DEFAULT */
    2:   65001, /* SYMBOL */
    77:  10000, /* MAC */
    128:   932, /* SHIFTJIS */
    129:   949, /* HANGUL */
    130:  1361, /* JOHAB */
    134:   936, /* GB2312 */
    136:   950, /* CHINESEBIG5 */
    161:  1253, /* GREEK */
    162:  1254, /* TURKISH */
    163:  1258, /* VIETNAMESE */
    177:  1255, /* HEBREW */
    178:  1256, /* ARABIC */
    186:  1257, /* BALTIC */
    204:  1251, /* RUSSIAN */
    222:   874, /* THAI */
    238:  1250, /* EASTEUROPE */
    255:  1252, /* OEM */
    69:   6969  /* MISC */
};

/* Parse a list of <r> tags */
var parse_rs = (function parse_rs_factory() {
    var tregex = matchtag("t"), rpregex = matchtag("rPr"), rregex = /<r>/g, rend = /<\/r>/, nlregex = /\r\n/g;
    /* 18.4.7 rPr CT_RPrElt */
    var parse_rpr = function parse_rpr(rpr, intro, outro) {
        var font = {}, cp = 65001;
        var m = rpr.match(tagregex), i = 0;
        if(m) for(;i!=m.length; ++i) {
            var y = parsexmltag(m[i]);
            switch(y[0]) {
                /* 18.8.12 condense CT_BooleanProperty */
                /* ** not required . */
                case '<condense': break;
                /* 18.8.17 extend CT_BooleanProperty */
                /* ** not required . */
                case '<extend': break;
                /* 18.8.36 shadow CT_BooleanProperty */
                /* ** not required . */
                case '<shadow':
                    /* falls through */
                case '<shadow/>': break;

                /* 18.4.1 charset CT_IntProperty TODO */
                case '<charset':
                    if(y.val == '1') break;
                    cp = CS2CP[parseInt(y.val, 10)];
                    break;

                /* 18.4.2 outline CT_BooleanProperty TODO */
                case '<outline':
                    /* falls through */
                case '<outline/>': break;

                /* 18.4.5 rFont CT_FontName */
                case '<rFont': font.name = y.val; break;

                /* 18.4.11 sz CT_FontSize */
                case '<sz': font.sz = y.val; break;

                /* 18.4.10 strike CT_BooleanProperty */
                case '<strike':
                    if(!y.val) break;
                    /* falls through */
                case '<strike/>': font.strike = 1; break;
                case '</strike>': break;

                /* 18.4.13 u CT_UnderlineProperty */
                case '<u':
                    if(!y.val) break;
                    /* falls through */
                case '<u/>': font.u = 1; break;
                case '</u>': break;

                /* 18.8.2 b */
                case '<b':
                    if(!y.val) break;
                    /* falls through */
                case '<b/>': font.b = 1; break;
                case '</b>': break;

                /* 18.8.26 i */
                case '<i':
                    if(!y.val) break;
                    /* falls through */
                case '<i/>': font.i = 1; break;
                case '</i>': break;

                /* 18.3.1.15 color CT_Color TODO: tint, theme, auto, indexed */
                case '<color':
                    if(y.rgb) font.color = y.rgb.substr(2,6);
                    break;

                /* 18.8.18 family ST_FontFamily */
                case '<family': font.family = y.val; break;

                /* 18.4.14 vertAlign CT_VerticalAlignFontProperty TODO */
                case '<vertAlign': break;

                /* 18.8.35 scheme CT_FontScheme TODO */
                case '<scheme': break;

                default:
                    if(y[0].charCodeAt(1) !== 47) throw 'Unrecognized rich format ' + y[0];
            }
        }
        /* TODO: These should be generated styles, not inline */
        var style = [];
        if(font.b) style.push("font-weight: bold;");
        if(font.i) style.push("font-style: italic;");
        intro.push('<span style="' + style.join("") + '">');
        outro.push("</span>");
        return cp;
    };

    /* 18.4.4 r CT_RElt */
    function parse_r(r) {
        var terms = [[],"",[]];
        /* 18.4.12 t ST_Xstring */
        var t = r.match(tregex), cp = 65001;
        if(!isval(t)) return "";
        terms[1] = t[1];

        var rpr = r.match(rpregex);
        if(isval(rpr)) cp = parse_rpr(rpr[1], terms[0], terms[2]);

        return terms[0].join("") + terms[1].replace(nlregex,'<br/>') + terms[2].join("");
    }
    return function parse_rs(rs) {
        return rs.replace(rregex,"").split(rend).map(parse_r).join("");
    };
})();

/* 18.4.8 si CT_Rst */
var sitregex = /<t[^>]*>([^<]*)<\/t>/g, sirregex = /<r>/;
function parse_si(x, opts) {
    var html = opts ? opts.cellHTML : true;
    var z = {};
    if(!x) return null;
    var y;
    /* 18.4.12 t ST_Xstring (Plaintext String) */
    if(x.charCodeAt(1) === 116) {
        z.t = utf8read(unescapexml(x.substr(x.indexOf(">")+1).split(/<\/t>/)[0]));
        z.r = x;
        if(html) z.h = z.t;
    }
    /* 18.4.4 r CT_RElt (Rich Text Run) */
    else if((y = x.match(sirregex))) {
        z.r = x;
        z.t = utf8read(unescapexml(x.match(sitregex).join("").replace(tagregex,"")));
        if(html) z.h = parse_rs(x);
    }
    /* 18.4.3 phoneticPr CT_PhoneticPr (TODO: needed for Asian support) */
    /* 18.4.6 rPh CT_PhoneticRun (TODO: needed for Asian support) */
    return z;
}

/* 18.4 Shared String Table */
var sstr0 = /<sst([^>]*)>([\s\S]*)<\/sst>/;
var sstr1 = /<(?:si|sstItem)>/g;
var sstr2 = /<\/(?:si|sstItem)>/;
function parse_sst_xml(data, opts) {
    var s = [], ss;
    /* 18.4.9 sst CT_Sst */
    var sst = data.match(sstr0);
    if(isval(sst)) {
        ss = sst[2].replace(sstr1,"").split(sstr2);
        for(var i = 0; i != ss.length; ++i) {
            var o = parse_si(ss[i], opts);
            if(o != null) s[s.length] = o;
        }
        sst = parsexmltag(sst[1]); s.Count = sst.count; s.Unique = sst.uniqueCount;
    }
    return s;
}

RELS.SST = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";
var straywsregex = /^\s|\s$|[\t\n\r]/;
function write_sst_xml(sst, opts) {
    if(!opts.bookSST) return "";
    var o = [XML_HEADER];
    o[o.length] = (writextag('sst', null, {
        xmlns: XMLNS.main[0],
        count: sst.Count,
        uniqueCount: sst.Unique
    }));
    for(var i = 0; i != sst.length; ++i) { if(sst[i] == null) continue;
        var s = sst[i];
        var sitag = "<si>";
        if(s.r) sitag += s.r;
        else {
            sitag += "<t";
            if(s.t.match(straywsregex)) sitag += ' xml:space="preserve"';
            sitag += ">" + escapexml(s.t) + "</t>";
        }
        sitag += "</si>";
        o[o.length] = (sitag);
    }
    if(o.length>2){ o[o.length] = ('</sst>'); o[1]=o[1].replace("/>",">"); }
    return o.join("");
}
/* [MS-XLSB] 2.4.219 BrtBeginSst */
function parse_BrtBeginSst(data, length) {
    return [data.read_shift(4), data.read_shift(4)];
}

/* [MS-XLSB] 2.1.7.45 Shared Strings */
function parse_sst_bin(data, opts) {
    var s = [];
    var pass = false;
    recordhopper(data, function hopper_sst(val, R, RT) {
        switch(R.n) {
            case 'BrtBeginSst': s.Count = val[0]; s.Unique = val[1]; break;
            case 'BrtSSTItem': s.push(val); break;
            case 'BrtEndSst': return true;
            /* TODO: produce a test case with a future record */
            case 'BrtFRTBegin': pass = true; break;
            case 'BrtFRTEnd': pass = false; break;
            default: if(!pass || opts.WTF) throw new Error("Unexpected record " + RT + " " + R.n);
        }
    });
    return s;
}

function write_BrtBeginSst(sst, o) {
    if(!o) o = new_buf(8);
    o.write_shift(4, sst.Count);
    o.write_shift(4, sst.Unique);
    return o;
}

var write_BrtSSTItem = write_RichStr;

function write_sst_bin(sst, opts) {
    var ba = buf_array();
    write_record(ba, "BrtBeginSst", write_BrtBeginSst(sst));
    for(var i = 0; i < sst.length; ++i) write_record(ba, "BrtSSTItem", write_BrtSSTItem(sst[i]));
    write_record(ba, "BrtEndSst");
    return ba.end();
}
function _JS2ANSI(str) { if(typeof cptable !== 'undefined') return cptable.utils.encode(1252, str); return str.split("").map(function(x) { return x.charCodeAt(0); }); }

/* [MS-OFFCRYPTO] 2.1.4 Version */
function parse_Version(blob, length) {
    var o = {};
    o.Major = blob.read_shift(2);
    o.Minor = blob.read_shift(2);
    return o;
}
/* [MS-OFFCRYPTO] 2.3.2 Encryption Header */
function parse_EncryptionHeader(blob, length) {
    var o = {};
    o.Flags = blob.read_shift(4);

    // Check if SizeExtra is 0x00000000
    var tmp = blob.read_shift(4);
    if(tmp !== 0) throw 'Unrecognized SizeExtra: ' + tmp;

    o.AlgID = blob.read_shift(4);
    switch(o.AlgID) {
        case 0: case 0x6801: case 0x660E: case 0x660F: case 0x6610: break;
        default: throw 'Unrecognized encryption algorithm: ' + o.AlgID;
    }
    parsenoop(blob, length-12);
    return o;
}

/* [MS-OFFCRYPTO] 2.3.3 Encryption Verifier */
function parse_EncryptionVerifier(blob, length) {
    return parsenoop(blob, length);
}
/* [MS-OFFCRYPTO] 2.3.5.1 RC4 CryptoAPI Encryption Header */
function parse_RC4CryptoHeader(blob, length) {
    var o = {};
    var vers = o.EncryptionVersionInfo = parse_Version(blob, 4); length -= 4;
    if(vers.Minor != 2) throw 'unrecognized minor version code: ' + vers.Minor;
    if(vers.Major > 4 || vers.Major < 2) throw 'unrecognized major version code: ' + vers.Major;
    o.Flags = blob.read_shift(4); length -= 4;
    var sz = blob.read_shift(4); length -= 4;
    o.EncryptionHeader = parse_EncryptionHeader(blob, sz); length -= sz;
    o.EncryptionVerifier = parse_EncryptionVerifier(blob, length);
    return o;
}
/* [MS-OFFCRYPTO] 2.3.6.1 RC4 Encryption Header */
function parse_RC4Header(blob, length) {
    var o = {};
    var vers = o.EncryptionVersionInfo = parse_Version(blob, 4); length -= 4;
    if(vers.Major != 1 || vers.Minor != 1) throw 'unrecognized version code ' + vers.Major + ' : ' + vers.Minor;
    o.Salt = blob.read_shift(16);
    o.EncryptedVerifier = blob.read_shift(16);
    o.EncryptedVerifierHash = blob.read_shift(16);
    return o;
}

/* [MS-OFFCRYPTO] 2.3.7.1 Binary Document Password Verifier Derivation */
function crypto_CreatePasswordVerifier_Method1(Password) {
    var Verifier = 0x0000, PasswordArray;
    var PasswordDecoded = _JS2ANSI(Password);
    var len = PasswordDecoded.length + 1, i, PasswordByte;
    var Intermediate1, Intermediate2, Intermediate3;
    PasswordArray = new_raw_buf(len);
    PasswordArray[0] = PasswordDecoded.length;
    for(i = 1; i != len; ++i) PasswordArray[i] = PasswordDecoded[i-1];
    for(i = len-1; i >= 0; --i) {
        PasswordByte = PasswordArray[i];
        Intermediate1 = ((Verifier & 0x4000) === 0x0000) ? 0 : 1;
        Intermediate2 = (Verifier << 1) & 0x7FFF;
        Intermediate3 = Intermediate1 | Intermediate2;
        Verifier = Intermediate3 ^ PasswordByte;
    }
    return Verifier ^ 0xCE4B;
}

/* [MS-OFFCRYPTO] 2.3.7.2 Binary Document XOR Array Initialization */
var crypto_CreateXorArray_Method1 = (function() {
    var PadArray = [0xBB, 0xFF, 0xFF, 0xBA, 0xFF, 0xFF, 0xB9, 0x80, 0x00, 0xBE, 0x0F, 0x00, 0xBF, 0x0F, 0x00];
    var InitialCode = [0xE1F0, 0x1D0F, 0xCC9C, 0x84C0, 0x110C, 0x0E10, 0xF1CE, 0x313E, 0x1872, 0xE139, 0xD40F, 0x84F9, 0x280C, 0xA96A, 0x4EC3];
    var XorMatrix = [0xAEFC, 0x4DD9, 0x9BB2, 0x2745, 0x4E8A, 0x9D14, 0x2A09, 0x7B61, 0xF6C2, 0xFDA5, 0xEB6B, 0xC6F7, 0x9DCF, 0x2BBF, 0x4563, 0x8AC6, 0x05AD, 0x0B5A, 0x16B4, 0x2D68, 0x5AD0, 0x0375, 0x06EA, 0x0DD4, 0x1BA8, 0x3750, 0x6EA0, 0xDD40, 0xD849, 0xA0B3, 0x5147, 0xA28E, 0x553D, 0xAA7A, 0x44D5, 0x6F45, 0xDE8A, 0xAD35, 0x4A4B, 0x9496, 0x390D, 0x721A, 0xEB23, 0xC667, 0x9CEF, 0x29FF, 0x53FE, 0xA7FC, 0x5FD9, 0x47D3, 0x8FA6, 0x0F6D, 0x1EDA, 0x3DB4, 0x7B68, 0xF6D0, 0xB861, 0x60E3, 0xC1C6, 0x93AD, 0x377B, 0x6EF6, 0xDDEC, 0x45A0, 0x8B40, 0x06A1, 0x0D42, 0x1A84, 0x3508, 0x6A10, 0xAA51, 0x4483, 0x8906, 0x022D, 0x045A, 0x08B4, 0x1168, 0x76B4, 0xED68, 0xCAF1, 0x85C3, 0x1BA7, 0x374E, 0x6E9C, 0x3730, 0x6E60, 0xDCC0, 0xA9A1, 0x4363, 0x86C6, 0x1DAD, 0x3331, 0x6662, 0xCCC4, 0x89A9, 0x0373, 0x06E6, 0x0DCC, 0x1021, 0x2042, 0x4084, 0x8108, 0x1231, 0x2462, 0x48C4];
    var Ror = function(Byte) { return ((Byte/2) | (Byte*128)) & 0xFF; };
    var XorRor = function(byte1, byte2) { return Ror(byte1 ^ byte2); };
    var CreateXorKey_Method1 = function(Password) {
        var XorKey = InitialCode[Password.length - 1];
        var CurrentElement = 0x68;
        for(var i = Password.length-1; i >= 0; --i) {
            var Char = Password[i];
            for(var j = 0; j != 7; ++j) {
                if(Char & 0x40) XorKey ^= XorMatrix[CurrentElement];
                Char *= 2; --CurrentElement;
            }
        }
        return XorKey;
    };
    return function(password) {
        var Password = _JS2ANSI(password);
        var XorKey = CreateXorKey_Method1(Password);
        var Index = Password.length;
        var ObfuscationArray = new_raw_buf(16);
        for(var i = 0; i != 16; ++i) ObfuscationArray[i] = 0x00;
        var Temp, PasswordLastChar, PadIndex;
        if((Index & 1) === 1) {
            Temp = XorKey >> 8;
            ObfuscationArray[Index] = XorRor(PadArray[0], Temp);
            --Index;
            Temp = XorKey & 0xFF;
            PasswordLastChar = Password[Password.length - 1];
            ObfuscationArray[Index] = XorRor(PasswordLastChar, Temp);
        }
        while(Index > 0) {
            --Index;
            Temp = XorKey >> 8;
            ObfuscationArray[Index] = XorRor(Password[Index], Temp);
            --Index;
            Temp = XorKey & 0xFF;
            ObfuscationArray[Index] = XorRor(Password[Index], Temp);
        }
        Index = 15;
        PadIndex = 15 - Password.length;
        while(PadIndex > 0) {
            Temp = XorKey >> 8;
            ObfuscationArray[Index] = XorRor(PadArray[PadIndex], Temp);
            --Index;
            --PadIndex;
            Temp = XorKey & 0xFF;
            ObfuscationArray[Index] = XorRor(Password[Index], Temp);
            --Index;
            --PadIndex;
        }
        return ObfuscationArray;
    };
})();

/* [MS-OFFCRYPTO] 2.3.7.3 Binary Document XOR Data Transformation Method 1 */
var crypto_DecryptData_Method1 = function(password, Data, XorArrayIndex, XorArray, O) {
    /* If XorArray is set, use it; if O is not set, make changes in-place */
    if(!O) O = Data;
    if(!XorArray) XorArray = crypto_CreateXorArray_Method1(password);
    var Index, Value;
    for(Index = 0; Index != Data.length; ++Index) {
        Value = Data[Index];
        Value ^= XorArray[XorArrayIndex];
        Value = ((Value>>5) | (Value<<3)) & 0xFF;
        O[Index] = Value;
        ++XorArrayIndex;
    }
    return [O, XorArrayIndex, XorArray];
};

var crypto_MakeXorDecryptor = function(password) {
    var XorArrayIndex = 0, XorArray = crypto_CreateXorArray_Method1(password);
    return function(Data) {
        var O = crypto_DecryptData_Method1(null, Data, XorArrayIndex, XorArray);
        XorArrayIndex = O[1];
        return O[0];
    };
};

/* 2.5.343 */
function parse_XORObfuscation(blob, length, opts, out) {
    var o = { key: parseuint16(blob), verificationBytes: parseuint16(blob) };
    if(opts.password) o.verifier = crypto_CreatePasswordVerifier_Method1(opts.password);
    out.valid = o.verificationBytes === o.verifier;
    if(out.valid) out.insitu_decrypt = crypto_MakeXorDecryptor(opts.password);
    return o;
}

/* 2.4.117 */
function parse_FilePassHeader(blob, length, oo) {
    var o = oo || {}; o.Info = blob.read_shift(2); blob.l -= 2;
    if(o.Info === 1) o.Data = parse_RC4Header(blob, length);
    else o.Data = parse_RC4CryptoHeader(blob, length);
    return o;
}
function parse_FilePass(blob, length, opts) {
    var o = { Type: blob.read_shift(2) }; /* wEncryptionType */
    if(o.Type) parse_FilePassHeader(blob, length-2, o);
    else parse_XORObfuscation(blob, length-2, opts, o);
    return o;
}


function hex2RGB(h) {
    var o = h.substr(h[0]==="#"?1:0,6);
    return [parseInt(o.substr(0,2),16),parseInt(o.substr(0,2),16),parseInt(o.substr(0,2),16)];
}
function rgb2Hex(rgb) {
    for(var i=0,o=1; i!=3; ++i) o = o*256 + (rgb[i]>255?255:rgb[i]<0?0:rgb[i]);
    return o.toString(16).toUpperCase().substr(1);
}

function rgb2HSL(rgb) {
    var R = rgb[0]/255, G = rgb[1]/255, B=rgb[2]/255;
    var M = Math.max(R, G, B), m = Math.min(R, G, B), C = M - m;
    if(C === 0) return [0, 0, R];

    var H6 = 0, S = 0, L2 = (M + m);
    S = C / (L2 > 1 ? 2 - L2 : L2);
    switch(M){
        case R: H6 = ((G - B) / C + 6)%6; break;
        case G: H6 = ((B - R) / C + 2); break;
        case B: H6 = ((R - G) / C + 4); break;
    }
    return [H6 / 6, S, L2 / 2];
}

function hsl2RGB(hsl){
    var H = hsl[0], S = hsl[1], L = hsl[2];
    var C = S * 2 * (L < 0.5 ? L : 1 - L), m = L - C/2;
    var rgb = [m,m,m], h6 = 6*H;

    var X;
    if(S !== 0) switch(h6|0) {
        case 0: case 6: X = C * h6; rgb[0] += C; rgb[1] += X; break;
        case 1: X = C * (2 - h6);   rgb[0] += X; rgb[1] += C; break;
        case 2: X = C * (h6 - 2);   rgb[1] += C; rgb[2] += X; break;
        case 3: X = C * (4 - h6);   rgb[1] += X; rgb[2] += C; break;
        case 4: X = C * (h6 - 4);   rgb[2] += C; rgb[0] += X; break;
        case 5: X = C * (6 - h6);   rgb[2] += X; rgb[0] += C; break;
    }
    for(var i = 0; i != 3; ++i) rgb[i] = Math.round(rgb[i]*255);
    return rgb;
}

/* 18.8.3 bgColor tint algorithm */
function rgb_tint(hex, tint) {
    if(tint === 0) return hex;
    var hsl = rgb2HSL(hex2RGB(hex));
    if (tint < 0) hsl[2] = hsl[2] * (1 + tint);
    else hsl[2] = 1 - (1 - hsl[2]) * (1 - tint);
    return rgb2Hex(hsl2RGB(hsl));
}

/* 18.3.1.13 width calculations */
var DEF_MDW = 7, MAX_MDW = 15, MIN_MDW = 1, MDW = DEF_MDW;
function width2px(width) { return (( width + ((128/MDW)|0)/256 )* MDW )|0; }
function px2char(px) { return (((px - 5)/MDW * 100 + 0.5)|0)/100; }
function char2width(chr) { return (((chr * MDW + 5)/MDW*256)|0)/256; }
function cycle_width(collw) { return char2width(px2char(width2px(collw))); }
function find_mdw(collw, coll) {
    if(cycle_width(collw) != collw) {
        for(MDW=DEF_MDW; MDW>MIN_MDW; --MDW) if(cycle_width(collw) === collw) break;
        if(MDW === MIN_MDW) for(MDW=DEF_MDW+1; MDW<MAX_MDW; ++MDW) if(cycle_width(collw) === collw) break;
        if(MDW === MAX_MDW) MDW = DEF_MDW;
    }
}

/* [MS-EXSPXML3] 2.4.54 ST_enmPattern */
var XLMLPatternTypeMap = {
    "None": "none",
    "Solid": "solid",
    "Gray50": "mediumGray",
    "Gray75": "darkGray",
    "Gray25": "lightGray",
    "HorzStripe": "darkHorizontal",
    "VertStripe": "darkVertical",
    "ReverseDiagStripe": "darkDown",
    "DiagStripe": "darkUp",
    "DiagCross": "darkGrid",
    "ThickDiagCross": "darkTrellis",
    "ThinHorzStripe": "lightHorizontal",
    "ThinVertStripe": "lightVertical",
    "ThinReverseDiagStripe": "lightDown",
    "ThinHorzCross": "lightGrid"
};

var styles = {}; // shared styles

var themes = {}; // shared themes

/* 18.8.21 fills CT_Fills */
function parse_fills(t, opts) {
    styles.Fills = [];
    var fill = {};
    t[0].match(tagregex).forEach(function(x) {
        var y = parsexmltag(x);
        switch(y[0]) {
            case '<fills': case '<fills>': case '</fills>': break;

            /* 18.8.20 fill CT_Fill */
            case '<fill>': break;
            case '</fill>': styles.Fills.push(fill); fill = {}; break;

            /* 18.8.32 patternFill CT_PatternFill */
            case '<patternFill':
                if(y.patternType) fill.patternType = y.patternType;
                break;
            case '<patternFill/>': case '</patternFill>': break;

            /* 18.8.3 bgColor CT_Color */
            case '<bgColor':
                if(!fill.bgColor) fill.bgColor = {};
                if(y.indexed) fill.bgColor.indexed = parseInt(y.indexed, 10);
                if(y.theme) fill.bgColor.theme = parseInt(y.theme, 10);
                if(y.tint) fill.bgColor.tint = parseFloat(y.tint);
                /* Excel uses ARGB strings */
                if(y.rgb) fill.bgColor.rgb = y.rgb.substring(y.rgb.length - 6);
                break;
            case '<bgColor/>': case '</bgColor>': break;

            /* 18.8.19 fgColor CT_Color */
            case '<fgColor':
                if(!fill.fgColor) fill.fgColor = {};
                if(y.theme) fill.fgColor.theme = parseInt(y.theme, 10);
                if(y.tint) fill.fgColor.tint = parseFloat(y.tint);
                /* Excel uses ARGB strings */
                if(y.rgb) fill.fgColor.rgb = y.rgb.substring(y.rgb.length - 6);
                break;
            case '<fgColor/>': case '</fgColor>': break;

            default: if(opts.WTF) throw 'unrecognized ' + y[0] + ' in fills';
        }
    });
}

/* 18.8.31 numFmts CT_NumFmts */
function parse_numFmts(t, opts) {
    styles.NumberFmt = [];
    var k = keys(SSF._table);
    for(var i=0; i < k.length; ++i) styles.NumberFmt[k[i]] = SSF._table[k[i]];
    var m = t[0].match(tagregex);
    for(i=0; i < m.length; ++i) {
        var y = parsexmltag(m[i]);
        switch(y[0]) {
            case '<numFmts': case '</numFmts>': case '<numFmts/>': case '<numFmts>': break;
            case '<numFmt': {
                var f=unescapexml(utf8read(y.formatCode)), j=parseInt(y.numFmtId,10);
                styles.NumberFmt[j] = f; if(j>0) SSF.load(f,j);
            } break;
            default: if(opts.WTF) throw 'unrecognized ' + y[0] + ' in numFmts';
        }
    }
}

function write_numFmts(NF, opts) {
    var o = ["<numFmts>"];
    [[5,8],[23,26],[41,44],[63,66],[164,392]].forEach(function(r) {
        for(var i = r[0]; i <= r[1]; ++i) if(NF[i] !== undefined) o[o.length] = (writextag('numFmt',null,{numFmtId:i,formatCode:escapexml(NF[i])}));
    });
    if(o.length === 1) return "";
    o[o.length] = ("</numFmts>");
    o[0] = writextag('numFmts', null, { count:o.length-2 }).replace("/>", ">");
    return o.join("");
}

/* 18.8.10 cellXfs CT_CellXfs */
function parse_cellXfs(t, opts) {
    styles.CellXf = [];
    t[0].match(tagregex).forEach(function(x) {
        var y = parsexmltag(x);
        switch(y[0]) {
            case '<cellXfs': case '<cellXfs>': case '<cellXfs/>': case '</cellXfs>': break;

            /* 18.8.45 xf CT_Xf */
            case '<xf': delete y[0];
                if(y.numFmtId) y.numFmtId = parseInt(y.numFmtId, 10);
                if(y.fillId) y.fillId = parseInt(y.fillId, 10);
                styles.CellXf.push(y); break;
            case '</xf>': break;

            /* 18.8.1 alignment CT_CellAlignment */
            case '<alignment': case '