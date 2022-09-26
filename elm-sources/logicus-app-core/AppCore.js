(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$append = _Utils_append;
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $author$project$LogicUS$PL$SyntaxSemantics$Atom = function (a) {
	return {$: 'Atom', a: a};
};
var $author$project$LogicUS$PL$SyntaxSemantics$Neg = function (a) {
	return {$: 'Neg', a: a};
};
var $author$project$LogicUS$PL$Clauses$clauseLitToLiteral = function (_v0) {
	var symb = _v0.a;
	var sign = _v0.b;
	return sign ? $author$project$LogicUS$PL$SyntaxSemantics$Atom(symb) : $author$project$LogicUS$PL$SyntaxSemantics$Neg(
		$author$project$LogicUS$PL$SyntaxSemantics$Atom(symb));
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$Basics$compare = _Utils_compare;
var $author$project$LogicUS$PL$Clauses$compareClausePLLiterals = F2(
	function (_v0, _v1) {
		var symb1 = _v0.a;
		var sign1 = _v0.b;
		var symb2 = _v1.a;
		var sign2 = _v1.b;
		var _v2 = _Utils_Tuple2(sign1, sign2);
		_v2$2:
		while (true) {
			if (_v2.a) {
				if (!_v2.b) {
					return $elm$core$Basics$LT;
				} else {
					break _v2$2;
				}
			} else {
				if (_v2.b) {
					return $elm$core$Basics$GT;
				} else {
					break _v2$2;
				}
			}
		}
		return A2($elm$core$Basics$compare, symb1, symb2);
	});
var $elm$core$List$sortWith = _List_sortWith;
var $author$project$LogicUS$PL$Clauses$cplSort = function (cs) {
	return A2($elm$core$List$sortWith, $author$project$LogicUS$PL$Clauses$compareClausePLLiterals, cs);
};
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$String$fromList = _String_fromList;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$LogicUS$PL$AuxiliarFunctions$replaceBySubscript = function (s) {
	var dictSubscripts = $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				_Utils_chr('0'),
				_Utils_chr('₀')),
				_Utils_Tuple2(
				_Utils_chr('1'),
				_Utils_chr('₁')),
				_Utils_Tuple2(
				_Utils_chr('2'),
				_Utils_chr('₂')),
				_Utils_Tuple2(
				_Utils_chr('3'),
				_Utils_chr('₃')),
				_Utils_Tuple2(
				_Utils_chr('4'),
				_Utils_chr('₄')),
				_Utils_Tuple2(
				_Utils_chr('5'),
				_Utils_chr('₅')),
				_Utils_Tuple2(
				_Utils_chr('6'),
				_Utils_chr('₆')),
				_Utils_Tuple2(
				_Utils_chr('7'),
				_Utils_chr('₇')),
				_Utils_Tuple2(
				_Utils_chr('8'),
				_Utils_chr('₈')),
				_Utils_Tuple2(
				_Utils_chr('9'),
				_Utils_chr('₉')),
				_Utils_Tuple2(
				_Utils_chr(','),
				_Utils_chr(' '))
			]));
	return $elm$core$String$fromList(
		A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$elm$core$Maybe$withDefault,
					x,
					A2($elm$core$Dict$get, x, dictSubscripts));
			},
			$elm$core$String$toList(s)));
};
var $author$project$LogicUS$PL$SyntaxSemantics$fplToString = function (f) {
	switch (f.$) {
		case 'Atom':
			if (!f.a.b.b) {
				var _v1 = f.a;
				var pname = _v1.a;
				return pname;
			} else {
				var _v2 = f.a;
				var pname = _v2.a;
				var pindices = _v2.b;
				return _Utils_ap(
					pname,
					$author$project$LogicUS$PL$AuxiliarFunctions$replaceBySubscript(
						A2(
							$elm$core$String$join,
							',',
							A2($elm$core$List$map, $elm$core$String$fromInt, pindices))));
			}
		case 'Neg':
			var p = f.a;
			switch (p.$) {
				case 'Conj':
					return '¬ (' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(p) + ')');
				case 'Disj':
					return '¬ (' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(p) + ')');
				case 'Impl':
					return '¬ (' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(p) + ')');
				case 'Equi':
					return '¬ (' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(p) + ')');
				default:
					return '¬ ' + $author$project$LogicUS$PL$SyntaxSemantics$fplToString(p);
			}
		case 'Conj':
			var p = f.a;
			var q = f.b;
			var rhs = function () {
				switch (q.$) {
					case 'Disj':
						return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(q) + ')');
					case 'Impl':
						return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(q) + ')');
					case 'Equi':
						return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(q) + ')');
					default:
						return $author$project$LogicUS$PL$SyntaxSemantics$fplToString(q);
				}
			}();
			var lhs = function () {
				switch (p.$) {
					case 'Disj':
						return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(p) + ')');
					case 'Impl':
						return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(p) + ')');
					case 'Equi':
						return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(p) + ')');
					default:
						return $author$project$LogicUS$PL$SyntaxSemantics$fplToString(p);
				}
			}();
			return lhs + (' ∧ ' + rhs);
		case 'Disj':
			var p = f.a;
			var q = f.b;
			var rhs = function () {
				switch (q.$) {
					case 'Impl':
						return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(q) + ')');
					case 'Equi':
						return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(q) + ')');
					default:
						return $author$project$LogicUS$PL$SyntaxSemantics$fplToString(q);
				}
			}();
			var lhs = function () {
				switch (p.$) {
					case 'Impl':
						return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(p) + ')');
					case 'Equi':
						return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(p) + ')');
					default:
						return $author$project$LogicUS$PL$SyntaxSemantics$fplToString(p);
				}
			}();
			return lhs + (' ∨ ' + rhs);
		case 'Impl':
			var p = f.a;
			var q = f.b;
			var rhs = function () {
				if (q.$ === 'Equi') {
					return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(q) + ')');
				} else {
					return $author$project$LogicUS$PL$SyntaxSemantics$fplToString(q);
				}
			}();
			var lhs = function () {
				switch (p.$) {
					case 'Impl':
						return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(p) + ')');
					case 'Equi':
						return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(p) + ')');
					default:
						return $author$project$LogicUS$PL$SyntaxSemantics$fplToString(p);
				}
			}();
			return lhs + (' → ' + rhs);
		case 'Equi':
			var p = f.a;
			var q = f.b;
			var rhs = $author$project$LogicUS$PL$SyntaxSemantics$fplToString(q);
			var lhs = function () {
				if (p.$ === 'Equi') {
					return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString(p) + ')');
				} else {
					return $author$project$LogicUS$PL$SyntaxSemantics$fplToString(p);
				}
			}();
			return lhs + (' ↔ ' + rhs);
		case 'Insat':
			return '⊥';
		default:
			return '⊤';
	}
};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $author$project$LogicUS$PL$Clauses$cplToString = function (c) {
	return $elm$core$List$isEmpty(c) ? '□' : ('{' + (A2(
		$elm$core$String$join,
		',',
		A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $author$project$LogicUS$PL$SyntaxSemantics$fplToString, $author$project$LogicUS$PL$Clauses$clauseLitToLiteral),
			$author$project$LogicUS$PL$Clauses$cplSort(c))) + '}'));
};
var $author$project$LogicUS$PL$Clauses$csplToString = function (cs) {
	return '{' + (A2(
		$elm$core$String$join,
		',',
		A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $author$project$LogicUS$PL$Clauses$cplToString, $author$project$LogicUS$PL$Clauses$cplSort),
			cs)) + '}');
};
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$element = _Browser_element;
var $author$project$LogicUS$FOL$SyntaxSemantics$Var = function (a) {
	return {$: 'Var', a: a};
};
var $author$project$LogicUS$FOL$AuxiliarFuctions$replaceBySubscript = function (s) {
	var dictSubscripts = $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				_Utils_chr('0'),
				_Utils_chr('₀')),
				_Utils_Tuple2(
				_Utils_chr('1'),
				_Utils_chr('₁')),
				_Utils_Tuple2(
				_Utils_chr('2'),
				_Utils_chr('₂')),
				_Utils_Tuple2(
				_Utils_chr('3'),
				_Utils_chr('₃')),
				_Utils_Tuple2(
				_Utils_chr('4'),
				_Utils_chr('₄')),
				_Utils_Tuple2(
				_Utils_chr('5'),
				_Utils_chr('₅')),
				_Utils_Tuple2(
				_Utils_chr('6'),
				_Utils_chr('₆')),
				_Utils_Tuple2(
				_Utils_chr('7'),
				_Utils_chr('₇')),
				_Utils_Tuple2(
				_Utils_chr('8'),
				_Utils_chr('₈')),
				_Utils_Tuple2(
				_Utils_chr('9'),
				_Utils_chr('₉')),
				_Utils_Tuple2(
				_Utils_chr(','),
				_Utils_chr(' '))
			]));
	return $elm$core$String$fromList(
		A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$elm$core$Maybe$withDefault,
					x,
					A2($elm$core$Dict$get, x, dictSubscripts));
			},
			$elm$core$String$toList(s)));
};
var $author$project$LogicUS$FOL$AuxiliarFuctions$replaceBySuperscript = function (s) {
	var dictSuperscripts = $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				_Utils_chr('0'),
				_Utils_chr('⁰')),
				_Utils_Tuple2(
				_Utils_chr('1'),
				_Utils_chr('¹')),
				_Utils_Tuple2(
				_Utils_chr('2'),
				_Utils_chr('²')),
				_Utils_Tuple2(
				_Utils_chr('3'),
				_Utils_chr('³')),
				_Utils_Tuple2(
				_Utils_chr('4'),
				_Utils_chr('⁴')),
				_Utils_Tuple2(
				_Utils_chr('5'),
				_Utils_chr('⁵')),
				_Utils_Tuple2(
				_Utils_chr('6'),
				_Utils_chr('⁶')),
				_Utils_Tuple2(
				_Utils_chr('7'),
				_Utils_chr('⁷')),
				_Utils_Tuple2(
				_Utils_chr('8'),
				_Utils_chr('⁸')),
				_Utils_Tuple2(
				_Utils_chr('9'),
				_Utils_chr('⁹'))
			]));
	return $elm$core$String$fromList(
		A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$elm$core$Maybe$withDefault,
					x,
					A2($elm$core$Dict$get, x, dictSuperscripts));
			},
			$elm$core$String$toList(s)));
};
var $elm$core$String$toLower = _String_toLower;
var $author$project$LogicUS$FOL$SyntaxSemantics$varToString = function (_v0) {
	var vname = _v0.a;
	var sb = _v0.b;
	var sp = _v0.c;
	return _Utils_ap(
		A2(
			$elm$core$Basics$composeL,
			$elm$core$String$toLower,
			$elm$core$String$left(1))(vname),
		_Utils_ap(
			A2($elm$core$String$dropLeft, 1, vname),
			_Utils_ap(
				$elm$core$List$isEmpty(sb) ? '' : $author$project$LogicUS$FOL$AuxiliarFuctions$replaceBySubscript(
					A2(
						$elm$core$String$join,
						',',
						A2($elm$core$List$map, $elm$core$String$fromInt, sb))),
				(sp <= 0) ? '' : $author$project$LogicUS$FOL$AuxiliarFuctions$replaceBySuperscript(
					$elm$core$String$fromInt(sp)))));
};
var $author$project$LogicUS$FOL$SyntaxSemantics$termToString = function (t) {
	if (t.$ === 'Var') {
		var v = t.a;
		return $author$project$LogicUS$FOL$SyntaxSemantics$varToString(v);
	} else {
		if (!t.a.b.b) {
			var _v1 = t.a;
			var fname = _v1.a;
			var ts = t.b;
			return _Utils_ap(
				fname,
				$author$project$LogicUS$FOL$SyntaxSemantics$termsToString(ts));
		} else {
			var _v2 = t.a;
			var fname = _v2.a;
			var findices = _v2.b;
			var ts = t.b;
			return _Utils_ap(
				fname,
				_Utils_ap(
					$author$project$LogicUS$FOL$AuxiliarFuctions$replaceBySubscript(
						A2(
							$elm$core$String$join,
							',',
							A2($elm$core$List$map, $elm$core$String$fromInt, findices))),
					$author$project$LogicUS$FOL$SyntaxSemantics$termsToString(ts)));
		}
	}
};
var $author$project$LogicUS$FOL$SyntaxSemantics$termsToString = function (ts) {
	return $elm$core$List$isEmpty(ts) ? '' : ('(' + (A2(
		$elm$core$String$join,
		',',
		A2($elm$core$List$map, $author$project$LogicUS$FOL$SyntaxSemantics$termToString, ts)) + ')'));
};
var $author$project$LogicUS$FOL$SyntaxSemantics$ffolToString = function (f) {
	switch (f.$) {
		case 'Pred':
			if (!f.a.b.b) {
				var _v1 = f.a;
				var pname = _v1.a;
				var ts = f.b;
				return _Utils_ap(
					pname,
					$author$project$LogicUS$FOL$SyntaxSemantics$termsToString(ts));
			} else {
				var _v2 = f.a;
				var pname = _v2.a;
				var pindices = _v2.b;
				var ts = f.b;
				return _Utils_ap(
					pname,
					_Utils_ap(
						$author$project$LogicUS$FOL$AuxiliarFuctions$replaceBySubscript(
							A2(
								$elm$core$String$join,
								',',
								A2($elm$core$List$map, $elm$core$String$fromInt, pindices))),
						$author$project$LogicUS$FOL$SyntaxSemantics$termsToString(ts)));
			}
		case 'Equal':
			var t1 = f.a;
			var t2 = f.b;
			return '(' + ($author$project$LogicUS$FOL$SyntaxSemantics$termToString(t1) + (' = ' + ($author$project$LogicUS$FOL$SyntaxSemantics$termToString(t2) + ')')));
		case 'Neg':
			var p = f.a;
			return '¬' + $author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(p);
		case 'Conj':
			var p = f.a;
			var q = f.b;
			return '(' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(p) + (' ∧ ' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(q) + ')')));
		case 'Disj':
			var p = f.a;
			var q = f.b;
			return '(' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(p) + (' ∨ ' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(q) + ')')));
		case 'Impl':
			var p = f.a;
			var q = f.b;
			return '(' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(p) + (' → ' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(q) + ')')));
		case 'Equi':
			var p = f.a;
			var q = f.b;
			return '(' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(p) + (' ↔ ' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(q) + ')')));
		case 'Exists':
			var v = f.a;
			var p = f.b;
			return '∃' + ($author$project$LogicUS$FOL$SyntaxSemantics$termToString(
				$author$project$LogicUS$FOL$SyntaxSemantics$Var(v)) + $author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(p));
		case 'Forall':
			var v = f.a;
			var p = f.b;
			return '∀' + ($author$project$LogicUS$FOL$SyntaxSemantics$termToString(
				$author$project$LogicUS$FOL$SyntaxSemantics$Var(v)) + $author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(p));
		case 'Taut':
			return '⊤';
		default:
			return '⊥';
	}
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$AppCore$init = function (_v0) {
	return _Utils_Tuple2(
		{outputsCFOL: $elm$core$Dict$empty, outputsCPL: $elm$core$Dict$empty, outputsCSFOL: $elm$core$Dict$empty, outputsCSPL: $elm$core$Dict$empty, outputsCSPPL: $elm$core$Dict$empty, outputsFFOL: $elm$core$Dict$empty, outputsFHRS: $elm$core$Dict$empty, outputsFPL: $elm$core$Dict$empty, outputsKBHRS: $elm$core$Dict$empty, outputsRHRS: $elm$core$Dict$empty, outputsRSHRS: $elm$core$Dict$empty, outputsSFOL: $elm$core$Dict$empty, outputsSPL: $elm$core$Dict$empty},
		$elm$core$Platform$Cmd$none);
};
var $author$project$AppCore$modelDictToString = F2(
	function (outputs, ftoString) {
		return A2(
			$elm$core$String$join,
			', ',
			A2(
				$elm$core$List$map,
				function (_v0) {
					var _v1 = _v0.a;
					var i = _v1.a;
					var s = _v1.b;
					var v = _v0.b;
					return '(' + ($elm$core$String$fromInt(i) + (', ' + ($elm$core$String$fromInt(s) + ('): ' + ftoString(v)))));
				},
				$elm$core$Dict$toList(outputs)));
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$sfolToString = function (fs) {
	return '{' + (A2(
		$elm$core$String$join,
		', ',
		A2($elm$core$List$map, $author$project$LogicUS$FOL$SyntaxSemantics$ffolToString, fs)) + '}');
};
var $author$project$LogicUS$PL$SyntaxSemantics$splToString = function (fs) {
	return '{' + (A2(
		$elm$core$String$join,
		', ',
		A2($elm$core$List$map, $author$project$LogicUS$PL$SyntaxSemantics$fplToString, fs)) + '}');
};
var $author$project$AppCore$Recv = function (a) {
	return {$: 'Recv', a: a};
};
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$AppCore$messageReceiver = _Platform_incomingPort('messageReceiver', $elm$json$Json$Decode$string);
var $author$project$AppCore$subscriptions = function (_v0) {
	return $author$project$AppCore$messageReceiver($author$project$AppCore$Recv);
};
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$filter = F2(
	function (isGood, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, d) {
					return A2(isGood, k, v) ? A3($elm$core$Dict$insert, k, v, d) : d;
				}),
			$elm$core$Dict$empty,
			dict);
	});
var $elm$json$Json$Encode$int = _Json_wrap;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $author$project$LogicUS$PL$CSP$Insat = {$: 'Insat'};
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $author$project$LogicUS$PL$CSP$BAnd = F3(
	function (a, b, c) {
		return {$: 'BAnd', a: a, b: b, c: c};
	});
var $author$project$LogicUS$PL$CSP$BOr = F3(
	function (a, b, c) {
		return {$: 'BOr', a: a, b: b, c: c};
	});
var $author$project$LogicUS$PL$CSP$Neg = function (a) {
	return {$: 'Neg', a: a};
};
var $author$project$LogicUS$PL$B_Expressions$T = {$: 'T'};
var $author$project$LogicUS$PL$CSP$Taut = {$: 'Taut'};
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 'Bad', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 'Good', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parseA(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					var _v2 = callback(a);
					var parseB = _v2.a;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
					}
				}
			});
	});
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $author$project$LogicUS$PL$CSP$Atom = F2(
	function (a, b) {
		return {$: 'Atom', a: a, b: b};
	});
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $elm$parser$Parser$ExpectingVariable = {$: 'ExpectingVariable'};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 'AddRight', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {col: col, contextStack: contextStack, problem: problem, row: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 'Empty'};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
	});
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $elm$parser$Parser$Advanced$varHelp = F7(
	function (isGood, offset, row, col, src, indent, context) {
		varHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
			if (_Utils_eq(newOffset, -1)) {
				return {col: col, context: context, indent: indent, offset: offset, row: row, src: src};
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$variable = function (i) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var firstOffset = A3($elm$parser$Parser$Advanced$isSubChar, i.start, s.offset, s.src);
			if (_Utils_eq(firstOffset, -1)) {
				return A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, i.expecting));
			} else {
				var s1 = _Utils_eq(firstOffset, -2) ? A7($elm$parser$Parser$Advanced$varHelp, i.inner, s.offset + 1, s.row + 1, 1, s.src, s.indent, s.context) : A7($elm$parser$Parser$Advanced$varHelp, i.inner, firstOffset, s.row, s.col + 1, s.src, s.indent, s.context);
				var name = A3($elm$core$String$slice, s.offset, s1.offset, s.src);
				return A2($elm$core$Set$member, name, i.reserved) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, i.expecting)) : A3($elm$parser$Parser$Advanced$Good, true, name, s1);
			}
		});
};
var $elm$parser$Parser$variable = function (i) {
	return $elm$parser$Parser$Advanced$variable(
		{expecting: $elm$parser$Parser$ExpectingVariable, inner: i.inner, reserved: i.reserved, start: i.start});
};
var $author$project$LogicUS$PL$CSP$atomName = $elm$parser$Parser$variable(
	{
		inner: function (c) {
			return $elm$core$Char$isAlpha(c);
		},
		reserved: $elm$core$Set$fromList(_List_Nil),
		start: $elm$core$Char$isAlpha
	});
var $elm$parser$Parser$Forbidden = {$: 'Forbidden'};
var $author$project$LogicUS$PL$A_Expressions$Number = function (a) {
	return {$: 'Number', a: a};
};
var $author$project$LogicUS$PL$A_Expressions$Var = function (a) {
	return {$: 'Var', a: a};
};
var $author$project$LogicUS$PL$A_Expressions$Add = F2(
	function (a, b) {
		return {$: 'Add', a: a, b: b};
	});
var $author$project$LogicUS$PL$A_Expressions$Dif = F2(
	function (a, b) {
		return {$: 'Dif', a: a, b: b};
	});
var $author$project$LogicUS$PL$A_Expressions$DifOp = {$: 'DifOp'};
var $author$project$LogicUS$PL$A_Expressions$Div = F2(
	function (a, b) {
		return {$: 'Div', a: a, b: b};
	});
var $author$project$LogicUS$PL$A_Expressions$DivOp = {$: 'DivOp'};
var $author$project$LogicUS$PL$A_Expressions$Mod = F2(
	function (a, b) {
		return {$: 'Mod', a: a, b: b};
	});
var $author$project$LogicUS$PL$A_Expressions$ModOp = {$: 'ModOp'};
var $author$project$LogicUS$PL$A_Expressions$Mul = F2(
	function (a, b) {
		return {$: 'Mul', a: a, b: b};
	});
var $author$project$LogicUS$PL$A_Expressions$MulOp = {$: 'MulOp'};
var $author$project$LogicUS$PL$A_Expressions$finalize = F2(
	function (revOps, finalExpr) {
		finalize:
		while (true) {
			_v0$6:
			while (true) {
				_v0$10:
				while (true) {
					_v0$15:
					while (true) {
						if (!revOps.b) {
							return finalExpr;
						} else {
							switch (revOps.a.b.$) {
								case 'ModOp':
									var _v1 = revOps.a;
									var expr = _v1.a;
									var _v2 = _v1.b;
									var otherRevOps = revOps.b;
									var $temp$revOps = otherRevOps,
										$temp$finalExpr = A2($author$project$LogicUS$PL$A_Expressions$Mod, expr, finalExpr);
									revOps = $temp$revOps;
									finalExpr = $temp$finalExpr;
									continue finalize;
								case 'DivOp':
									if (revOps.b.b && (revOps.b.a.b.$ === 'ModOp')) {
										var _v3 = revOps.a;
										var expr = _v3.a;
										var _v4 = _v3.b;
										var _v5 = revOps.b;
										var _v6 = _v5.a;
										var expr2 = _v6.a;
										var _v7 = _v6.b;
										var otherRevOps = _v5.b;
										return A2(
											$author$project$LogicUS$PL$A_Expressions$Div,
											A2(
												$author$project$LogicUS$PL$A_Expressions$finalize,
												A2(
													$elm$core$List$cons,
													_Utils_Tuple2(expr2, $author$project$LogicUS$PL$A_Expressions$ModOp),
													otherRevOps),
												expr),
											finalExpr);
									} else {
										var _v8 = revOps.a;
										var expr = _v8.a;
										var _v9 = _v8.b;
										var otherRevOps = revOps.b;
										var $temp$revOps = otherRevOps,
											$temp$finalExpr = A2($author$project$LogicUS$PL$A_Expressions$Div, expr, finalExpr);
										revOps = $temp$revOps;
										finalExpr = $temp$finalExpr;
										continue finalize;
									}
								case 'MulOp':
									if (revOps.b.b) {
										switch (revOps.b.a.b.$) {
											case 'ModOp':
												var _v10 = revOps.a;
												var expr = _v10.a;
												var _v11 = _v10.b;
												var _v12 = revOps.b;
												var _v13 = _v12.a;
												var expr2 = _v13.a;
												var _v14 = _v13.b;
												var otherRevOps = _v12.b;
												return A2(
													$author$project$LogicUS$PL$A_Expressions$Mul,
													A2(
														$author$project$LogicUS$PL$A_Expressions$finalize,
														A2(
															$elm$core$List$cons,
															_Utils_Tuple2(expr2, $author$project$LogicUS$PL$A_Expressions$ModOp),
															otherRevOps),
														expr),
													finalExpr);
											case 'DivOp':
												var _v15 = revOps.a;
												var expr = _v15.a;
												var _v16 = _v15.b;
												var _v17 = revOps.b;
												var _v18 = _v17.a;
												var expr2 = _v18.a;
												var _v19 = _v18.b;
												var otherRevOps = _v17.b;
												return A2(
													$author$project$LogicUS$PL$A_Expressions$Mul,
													A2(
														$author$project$LogicUS$PL$A_Expressions$finalize,
														A2(
															$elm$core$List$cons,
															_Utils_Tuple2(expr2, $author$project$LogicUS$PL$A_Expressions$DivOp),
															otherRevOps),
														expr),
													finalExpr);
											default:
												break _v0$6;
										}
									} else {
										break _v0$6;
									}
								case 'DifOp':
									if (revOps.b.b) {
										switch (revOps.b.a.b.$) {
											case 'ModOp':
												var _v22 = revOps.a;
												var expr = _v22.a;
												var _v23 = _v22.b;
												var _v24 = revOps.b;
												var _v25 = _v24.a;
												var expr2 = _v25.a;
												var _v26 = _v25.b;
												var otherRevOps = _v24.b;
												return A2(
													$author$project$LogicUS$PL$A_Expressions$Dif,
													A2(
														$author$project$LogicUS$PL$A_Expressions$finalize,
														A2(
															$elm$core$List$cons,
															_Utils_Tuple2(expr2, $author$project$LogicUS$PL$A_Expressions$ModOp),
															otherRevOps),
														expr),
													finalExpr);
											case 'DivOp':
												var _v27 = revOps.a;
												var expr = _v27.a;
												var _v28 = _v27.b;
												var _v29 = revOps.b;
												var _v30 = _v29.a;
												var expr2 = _v30.a;
												var _v31 = _v30.b;
												var otherRevOps = _v29.b;
												return A2(
													$author$project$LogicUS$PL$A_Expressions$Dif,
													A2(
														$author$project$LogicUS$PL$A_Expressions$finalize,
														A2(
															$elm$core$List$cons,
															_Utils_Tuple2(expr2, $author$project$LogicUS$PL$A_Expressions$DivOp),
															otherRevOps),
														expr),
													finalExpr);
											case 'MulOp':
												var _v32 = revOps.a;
												var expr = _v32.a;
												var _v33 = _v32.b;
												var _v34 = revOps.b;
												var _v35 = _v34.a;
												var expr2 = _v35.a;
												var _v36 = _v35.b;
												var otherRevOps = _v34.b;
												return A2(
													$author$project$LogicUS$PL$A_Expressions$Dif,
													A2(
														$author$project$LogicUS$PL$A_Expressions$finalize,
														A2(
															$elm$core$List$cons,
															_Utils_Tuple2(expr2, $author$project$LogicUS$PL$A_Expressions$MulOp),
															otherRevOps),
														expr),
													finalExpr);
											default:
												break _v0$10;
										}
									} else {
										break _v0$10;
									}
								default:
									if (revOps.b.b) {
										switch (revOps.b.a.b.$) {
											case 'ModOp':
												var _v39 = revOps.a;
												var expr = _v39.a;
												var _v40 = _v39.b;
												var _v41 = revOps.b;
												var _v42 = _v41.a;
												var expr2 = _v42.a;
												var _v43 = _v42.b;
												var otherRevOps = _v41.b;
												return A2(
													$author$project$LogicUS$PL$A_Expressions$Add,
													A2(
														$author$project$LogicUS$PL$A_Expressions$finalize,
														A2(
															$elm$core$List$cons,
															_Utils_Tuple2(expr2, $author$project$LogicUS$PL$A_Expressions$ModOp),
															otherRevOps),
														expr),
													finalExpr);
											case 'DivOp':
												var _v44 = revOps.a;
												var expr = _v44.a;
												var _v45 = _v44.b;
												var _v46 = revOps.b;
												var _v47 = _v46.a;
												var expr2 = _v47.a;
												var _v48 = _v47.b;
												var otherRevOps = _v46.b;
												return A2(
													$author$project$LogicUS$PL$A_Expressions$Add,
													A2(
														$author$project$LogicUS$PL$A_Expressions$finalize,
														A2(
															$elm$core$List$cons,
															_Utils_Tuple2(expr2, $author$project$LogicUS$PL$A_Expressions$DivOp),
															otherRevOps),
														expr),
													finalExpr);
											case 'MulOp':
												var _v49 = revOps.a;
												var expr = _v49.a;
												var _v50 = _v49.b;
												var _v51 = revOps.b;
												var _v52 = _v51.a;
												var expr2 = _v52.a;
												var _v53 = _v52.b;
												var otherRevOps = _v51.b;
												return A2(
													$author$project$LogicUS$PL$A_Expressions$Add,
													A2(
														$author$project$LogicUS$PL$A_Expressions$finalize,
														A2(
															$elm$core$List$cons,
															_Utils_Tuple2(expr2, $author$project$LogicUS$PL$A_Expressions$MulOp),
															otherRevOps),
														expr),
													finalExpr);
											case 'DifOp':
												var _v54 = revOps.a;
												var expr = _v54.a;
												var _v55 = _v54.b;
												var _v56 = revOps.b;
												var _v57 = _v56.a;
												var expr2 = _v57.a;
												var _v58 = _v57.b;
												var otherRevOps = _v56.b;
												return A2(
													$author$project$LogicUS$PL$A_Expressions$Add,
													A2(
														$author$project$LogicUS$PL$A_Expressions$finalize,
														A2(
															$elm$core$List$cons,
															_Utils_Tuple2(expr2, $author$project$LogicUS$PL$A_Expressions$DifOp),
															otherRevOps),
														expr),
													finalExpr);
											default:
												break _v0$15;
										}
									} else {
										break _v0$15;
									}
							}
						}
					}
					var _v59 = revOps.a;
					var expr = _v59.a;
					var _v60 = _v59.b;
					var otherRevOps = revOps.b;
					var $temp$revOps = otherRevOps,
						$temp$finalExpr = A2($author$project$LogicUS$PL$A_Expressions$Add, expr, finalExpr);
					revOps = $temp$revOps;
					finalExpr = $temp$finalExpr;
					continue finalize;
				}
				var _v37 = revOps.a;
				var expr = _v37.a;
				var _v38 = _v37.b;
				var otherRevOps = revOps.b;
				var $temp$revOps = otherRevOps,
					$temp$finalExpr = A2($author$project$LogicUS$PL$A_Expressions$Dif, expr, finalExpr);
				revOps = $temp$revOps;
				finalExpr = $temp$finalExpr;
				continue finalize;
			}
			var _v20 = revOps.a;
			var expr = _v20.a;
			var _v21 = _v20.b;
			var otherRevOps = revOps.b;
			var $temp$revOps = otherRevOps,
				$temp$finalExpr = A2($author$project$LogicUS$PL$A_Expressions$Mul, expr, finalExpr);
			revOps = $temp$revOps;
			finalExpr = $temp$finalExpr;
			continue finalize;
		}
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0.a;
		var parseB = _v1.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v2 = parseA(s0);
				if (_v2.$ === 'Bad') {
					var p = _v2.a;
					var x = _v2.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v2.a;
					var a = _v2.b;
					var s1 = _v2.c;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3(
							$elm$parser$Parser$Advanced$Good,
							p1 || p2,
							A2(func, a, b),
							s2);
					}
				}
			});
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v0 = thunk(_Utils_Tuple0);
			var parse = _v0.a;
			return parse(s);
		});
};
var $elm$parser$Parser$lazy = $elm$parser$Parser$Advanced$lazy;
var $elm$parser$Parser$ExpectingInt = {$: 'ExpectingInt'};
var $elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
var $elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
var $elm$parser$Parser$Advanced$bumpOffset = F2(
	function (newOffset, s) {
		return {col: s.col + (newOffset - s.offset), context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src};
	});
var $elm$parser$Parser$Advanced$chompBase10 = _Parser_chompBase10;
var $elm$parser$Parser$Advanced$isAsciiCode = _Parser_isAsciiCode;
var $elm$parser$Parser$Advanced$consumeExp = F2(
	function (offset, src) {
		if (A3($elm$parser$Parser$Advanced$isAsciiCode, 101, offset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 69, offset, src)) {
			var eOffset = offset + 1;
			var expOffset = (A3($elm$parser$Parser$Advanced$isAsciiCode, 43, eOffset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 45, eOffset, src)) ? (eOffset + 1) : eOffset;
			var newOffset = A2($elm$parser$Parser$Advanced$chompBase10, expOffset, src);
			return _Utils_eq(expOffset, newOffset) ? (-newOffset) : newOffset;
		} else {
			return offset;
		}
	});
var $elm$parser$Parser$Advanced$consumeDotAndExp = F2(
	function (offset, src) {
		return A3($elm$parser$Parser$Advanced$isAsciiCode, 46, offset, src) ? A2(
			$elm$parser$Parser$Advanced$consumeExp,
			A2($elm$parser$Parser$Advanced$chompBase10, offset + 1, src),
			src) : A2($elm$parser$Parser$Advanced$consumeExp, offset, src);
	});
var $elm$parser$Parser$Advanced$finalizeInt = F5(
	function (invalid, handler, startOffset, _v0, s) {
		var endOffset = _v0.a;
		var n = _v0.b;
		if (handler.$ === 'Err') {
			var x = handler.a;
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		} else {
			var toValue = handler.a;
			return _Utils_eq(startOffset, endOffset) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				_Utils_cmp(s.offset, startOffset) < 0,
				A2($elm$parser$Parser$Advanced$fromState, s, invalid)) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				toValue(n),
				A2($elm$parser$Parser$Advanced$bumpOffset, endOffset, s));
		}
	});
var $elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var $elm$core$String$toFloat = _String_toFloat;
var $elm$parser$Parser$Advanced$finalizeFloat = F6(
	function (invalid, expecting, intSettings, floatSettings, intPair, s) {
		var intOffset = intPair.a;
		var floatOffset = A2($elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.src);
		if (floatOffset < 0) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A4($elm$parser$Parser$Advanced$fromInfo, s.row, s.col - (floatOffset + s.offset), invalid, s.context));
		} else {
			if (_Utils_eq(s.offset, floatOffset)) {
				return A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting));
			} else {
				if (_Utils_eq(intOffset, floatOffset)) {
					return A5($elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.offset, intPair, s);
				} else {
					if (floatSettings.$ === 'Err') {
						var x = floatSettings.a;
						return A2(
							$elm$parser$Parser$Advanced$Bad,
							true,
							A2($elm$parser$Parser$Advanced$fromState, s, invalid));
					} else {
						var toValue = floatSettings.a;
						var _v1 = $elm$core$String$toFloat(
							A3($elm$core$String$slice, s.offset, floatOffset, s.src));
						if (_v1.$ === 'Nothing') {
							return A2(
								$elm$parser$Parser$Advanced$Bad,
								true,
								A2($elm$parser$Parser$Advanced$fromState, s, invalid));
						} else {
							var n = _v1.a;
							return A3(
								$elm$parser$Parser$Advanced$Good,
								true,
								toValue(n),
								A2($elm$parser$Parser$Advanced$bumpOffset, floatOffset, s));
						}
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$number = function (c) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			if (A3($elm$parser$Parser$Advanced$isAsciiCode, 48, s.offset, s.src)) {
				var zeroOffset = s.offset + 1;
				var baseOffset = zeroOffset + 1;
				return A3($elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.hex,
					baseOffset,
					A2($elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.src),
					s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.octal,
					baseOffset,
					A3($elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.src),
					s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.binary,
					baseOffset,
					A3($elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.src),
					s) : A6(
					$elm$parser$Parser$Advanced$finalizeFloat,
					c.invalid,
					c.expecting,
					c._int,
					c._float,
					_Utils_Tuple2(zeroOffset, 0),
					s)));
			} else {
				return A6(
					$elm$parser$Parser$Advanced$finalizeFloat,
					c.invalid,
					c.expecting,
					c._int,
					c._float,
					A3($elm$parser$Parser$Advanced$consumeBase, 10, s.offset, s.src),
					s);
			}
		});
};
var $elm$parser$Parser$Advanced$int = F2(
	function (expecting, invalid) {
		return $elm$parser$Parser$Advanced$number(
			{
				binary: $elm$core$Result$Err(invalid),
				expecting: expecting,
				_float: $elm$core$Result$Err(invalid),
				hex: $elm$core$Result$Err(invalid),
				_int: $elm$core$Result$Ok($elm$core$Basics$identity),
				invalid: invalid,
				octal: $elm$core$Result$Err(invalid)
			});
	});
var $elm$parser$Parser$int = A2($elm$parser$Parser$Advanced$int, $elm$parser$Parser$ExpectingInt, $elm$parser$Parser$ExpectingInt);
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 'Append', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
		});
};
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$Good, false, a, s);
		});
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 'ExpectingSymbol', a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 'Token', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$core$Basics$not = _Basics_not;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $elm$parser$Parser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $author$project$LogicUS$PL$A_Expressions$numberParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($elm$core$Basics$negate),
				$elm$parser$Parser$symbol('-')),
			$elm$parser$Parser$int),
			$elm$parser$Parser$int
		]));
var $author$project$LogicUS$PL$A_Expressions$AddOp = {$: 'AddOp'};
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						func(a),
						s1);
				} else {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				}
			});
	});
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $author$project$LogicUS$PL$A_Expressions$operatorA = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$map,
			function (_v0) {
				return $author$project$LogicUS$PL$A_Expressions$AddOp;
			},
			$elm$parser$Parser$symbol('+')),
			A2(
			$elm$parser$Parser$map,
			function (_v1) {
				return $author$project$LogicUS$PL$A_Expressions$DifOp;
			},
			$elm$parser$Parser$symbol('-')),
			A2(
			$elm$parser$Parser$map,
			function (_v2) {
				return $author$project$LogicUS$PL$A_Expressions$MulOp;
			},
			$elm$parser$Parser$symbol('*')),
			A2(
			$elm$parser$Parser$map,
			function (_v3) {
				return $author$project$LogicUS$PL$A_Expressions$DivOp;
			},
			$elm$parser$Parser$symbol('/')),
			A2(
			$elm$parser$Parser$map,
			function (_v4) {
				return $author$project$LogicUS$PL$A_Expressions$ModOp;
			},
			$elm$parser$Parser$symbol('%'))
		]));
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $elm$parser$Parser$UnexpectedChar = {$: 'UnexpectedChar'};
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
				return _Utils_eq(newOffset, -1) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: 1, context: s.context, indent: s.indent, offset: s.offset + 1, row: s.row + 1, src: s.src}) : A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: s.col + 1, context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src}));
			});
	});
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.offset, offset) < 0,
					_Utils_Tuple0,
					{col: col, context: s0.context, indent: s0.indent, offset: offset, row: row, src: s0.src});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
		});
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						A2(
							func,
							A3($elm$core$String$slice, s0.offset, s1.offset, s0.src),
							a),
						s1);
				}
			});
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $author$project$LogicUS$PL$A_Expressions$varAExpr = $elm$parser$Parser$getChompedString(
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed(_Utils_Tuple0),
				$elm$parser$Parser$chompIf($elm$core$Char$isLower)),
			$elm$parser$Parser$chompWhile($elm$core$Char$isLower)),
		$elm$parser$Parser$chompWhile($elm$core$Char$isDigit)));
var $author$project$LogicUS$PL$A_Expressions$expressionAAux = F2(
	function (revOps, aExpr) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$andThen,
					function (_v1) {
						var op = _v1.a;
						var newExpr = _v1.b;
						return A2(
							$author$project$LogicUS$PL$A_Expressions$expressionAAux,
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(aExpr, op),
								revOps),
							newExpr);
					},
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							$elm$parser$Parser$succeed($elm$core$Tuple$pair),
							$author$project$LogicUS$PL$A_Expressions$operatorA),
						$author$project$LogicUS$PL$A_Expressions$cyclic$termAExpr())),
					$elm$parser$Parser$lazy(
					function (_v2) {
						return $elm$parser$Parser$succeed(
							A2($author$project$LogicUS$PL$A_Expressions$finalize, revOps, aExpr));
					})
				]));
	});
function $author$project$LogicUS$PL$A_Expressions$cyclic$expressionA() {
	return A2(
		$elm$parser$Parser$andThen,
		$author$project$LogicUS$PL$A_Expressions$expressionAAux(_List_Nil),
		$author$project$LogicUS$PL$A_Expressions$cyclic$termAExpr());
}
function $author$project$LogicUS$PL$A_Expressions$cyclic$termAExpr() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($author$project$LogicUS$PL$A_Expressions$Number),
				$author$project$LogicUS$PL$A_Expressions$numberParser),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($author$project$LogicUS$PL$A_Expressions$Var),
				$author$project$LogicUS$PL$A_Expressions$varAExpr),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$symbol('(')),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$lazy(
						function (_v0) {
							return $author$project$LogicUS$PL$A_Expressions$cyclic$expressionA();
						}),
					$elm$parser$Parser$symbol(')')))
			]));
}
try {
	var $author$project$LogicUS$PL$A_Expressions$expressionA = $author$project$LogicUS$PL$A_Expressions$cyclic$expressionA();
	$author$project$LogicUS$PL$A_Expressions$cyclic$expressionA = function () {
		return $author$project$LogicUS$PL$A_Expressions$expressionA;
	};
	var $author$project$LogicUS$PL$A_Expressions$termAExpr = $author$project$LogicUS$PL$A_Expressions$cyclic$termAExpr();
	$author$project$LogicUS$PL$A_Expressions$cyclic$termAExpr = function () {
		return $author$project$LogicUS$PL$A_Expressions$termAExpr;
	};
} catch ($) {
	throw 'Some top-level definitions from `LogicUS.PL.A_Expressions` are causing infinite recursion:\n\n  ┌─────┐\n  │    expressionA\n  │     ↓\n  │    expressionAAux\n  │     ↓\n  │    termAExpr\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0.a;
			var _v1 = parse(s0);
			if (_v1.$ === 'Good') {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (step.$ === 'Loop') {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
			});
	});
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $elm$parser$Parser$Advanced$revAlways = F2(
	function (_v0, b) {
		return b;
	});
var $elm$parser$Parser$Advanced$skip = F2(
	function (iParser, kParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$parser$Parser$Advanced$revAlways, iParser, kParser);
	});
var $elm$parser$Parser$Advanced$sequenceEndForbidden = F5(
	function (ender, ws, parseItem, sep, revItems) {
		var chompRest = function (item) {
			return A5(
				$elm$parser$Parser$Advanced$sequenceEndForbidden,
				ender,
				ws,
				parseItem,
				sep,
				A2($elm$core$List$cons, item, revItems));
		};
		return A2(
			$elm$parser$Parser$Advanced$skip,
			ws,
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$Advanced$skip,
						sep,
						A2(
							$elm$parser$Parser$Advanced$skip,
							ws,
							A2(
								$elm$parser$Parser$Advanced$map,
								function (item) {
									return $elm$parser$Parser$Advanced$Loop(
										A2($elm$core$List$cons, item, revItems));
								},
								parseItem))),
						A2(
						$elm$parser$Parser$Advanced$map,
						function (_v0) {
							return $elm$parser$Parser$Advanced$Done(
								$elm$core$List$reverse(revItems));
						},
						ender)
					])));
	});
var $elm$parser$Parser$Advanced$sequenceEndMandatory = F4(
	function (ws, parseItem, sep, revItems) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$map,
					function (item) {
						return $elm$parser$Parser$Advanced$Loop(
							A2($elm$core$List$cons, item, revItems));
					},
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						parseItem,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							ws,
							A2($elm$parser$Parser$Advanced$ignorer, sep, ws)))),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(revItems));
					},
					$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0))
				]));
	});
var $elm$parser$Parser$Advanced$sequenceEndOptional = F5(
	function (ender, ws, parseItem, sep, revItems) {
		var parseEnd = A2(
			$elm$parser$Parser$Advanced$map,
			function (_v0) {
				return $elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(revItems));
			},
			ender);
		return A2(
			$elm$parser$Parser$Advanced$skip,
			ws,
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$Advanced$skip,
						sep,
						A2(
							$elm$parser$Parser$Advanced$skip,
							ws,
							$elm$parser$Parser$Advanced$oneOf(
								_List_fromArray(
									[
										A2(
										$elm$parser$Parser$Advanced$map,
										function (item) {
											return $elm$parser$Parser$Advanced$Loop(
												A2($elm$core$List$cons, item, revItems));
										},
										parseItem),
										parseEnd
									])))),
						parseEnd
					])));
	});
var $elm$parser$Parser$Advanced$sequenceEnd = F5(
	function (ender, ws, parseItem, sep, trailing) {
		var chompRest = function (item) {
			switch (trailing.$) {
				case 'Forbidden':
					return A2(
						$elm$parser$Parser$Advanced$loop,
						_List_fromArray(
							[item]),
						A4($elm$parser$Parser$Advanced$sequenceEndForbidden, ender, ws, parseItem, sep));
				case 'Optional':
					return A2(
						$elm$parser$Parser$Advanced$loop,
						_List_fromArray(
							[item]),
						A4($elm$parser$Parser$Advanced$sequenceEndOptional, ender, ws, parseItem, sep));
				default:
					return A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$skip,
							ws,
							A2(
								$elm$parser$Parser$Advanced$skip,
								sep,
								A2(
									$elm$parser$Parser$Advanced$skip,
									ws,
									A2(
										$elm$parser$Parser$Advanced$loop,
										_List_fromArray(
											[item]),
										A3($elm$parser$Parser$Advanced$sequenceEndMandatory, ws, parseItem, sep))))),
						ender);
			}
		};
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2($elm$parser$Parser$Advanced$andThen, chompRest, parseItem),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return _List_Nil;
					},
					ender)
				]));
	});
var $elm$parser$Parser$Advanced$sequence = function (i) {
	return A2(
		$elm$parser$Parser$Advanced$skip,
		$elm$parser$Parser$Advanced$token(i.start),
		A2(
			$elm$parser$Parser$Advanced$skip,
			i.spaces,
			A5(
				$elm$parser$Parser$Advanced$sequenceEnd,
				$elm$parser$Parser$Advanced$token(i.end),
				i.spaces,
				i.item,
				$elm$parser$Parser$Advanced$token(i.separator),
				i.trailing)));
};
var $elm$parser$Parser$Advanced$Forbidden = {$: 'Forbidden'};
var $elm$parser$Parser$Advanced$Mandatory = {$: 'Mandatory'};
var $elm$parser$Parser$Advanced$Optional = {$: 'Optional'};
var $elm$parser$Parser$toAdvancedTrailing = function (trailing) {
	switch (trailing.$) {
		case 'Forbidden':
			return $elm$parser$Parser$Advanced$Forbidden;
		case 'Optional':
			return $elm$parser$Parser$Advanced$Optional;
		default:
			return $elm$parser$Parser$Advanced$Mandatory;
	}
};
var $elm$parser$Parser$Expecting = function (a) {
	return {$: 'Expecting', a: a};
};
var $elm$parser$Parser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $elm$parser$Parser$sequence = function (i) {
	return $elm$parser$Parser$Advanced$sequence(
		{
			end: $elm$parser$Parser$toToken(i.end),
			item: i.item,
			separator: $elm$parser$Parser$toToken(i.separator),
			spaces: i.spaces,
			start: $elm$parser$Parser$toToken(i.start),
			trailing: $elm$parser$Parser$toAdvancedTrailing(i.trailing)
		});
};
var $elm$parser$Parser$Advanced$spaces = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return _Utils_eq(
			c,
			_Utils_chr(' ')) || (_Utils_eq(
			c,
			_Utils_chr('\n')) || _Utils_eq(
			c,
			_Utils_chr('\r')));
	});
var $elm$parser$Parser$spaces = $elm$parser$Parser$Advanced$spaces;
var $author$project$LogicUS$PL$CSP$atomSubscript = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($author$project$LogicUS$PL$CSP$Atom),
		$author$project$LogicUS$PL$CSP$atomName),
	$elm$parser$Parser$sequence(
		{end: '}', item: $author$project$LogicUS$PL$A_Expressions$expressionA, separator: ',', spaces: $elm$parser$Parser$spaces, start: '_{', trailing: $elm$parser$Parser$Forbidden}));
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0.a;
	return $elm$parser$Parser$Advanced$Parser(
		function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 'Bad') {
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, false, x);
			} else {
				var a = _v1.b;
				var s1 = _v1.c;
				return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
			}
		});
};
var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
var $author$project$LogicUS$PL$CSP$atomParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$backtrackable($author$project$LogicUS$PL$CSP$atomSubscript)),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				function (x) {
					return A2($author$project$LogicUS$PL$CSP$Atom, x, _List_Nil);
				}),
			$author$project$LogicUS$PL$CSP$atomName)
		]));
var $author$project$LogicUS$PL$B_Expressions$Cond = function (a) {
	return {$: 'Cond', a: a};
};
var $author$project$LogicUS$PL$B_Expressions$F = {$: 'F'};
var $author$project$LogicUS$PL$B_Expressions$Not = function (a) {
	return {$: 'Not', a: a};
};
var $author$project$LogicUS$PL$B_Expressions$EQ = {$: 'EQ'};
var $author$project$LogicUS$PL$B_Expressions$GE = {$: 'GE'};
var $author$project$LogicUS$PL$B_Expressions$GT = {$: 'GT'};
var $author$project$LogicUS$PL$B_Expressions$LE = {$: 'LE'};
var $author$project$LogicUS$PL$B_Expressions$LT = {$: 'LT'};
var $author$project$LogicUS$PL$B_Expressions$NE = {$: 'NE'};
var $author$project$LogicUS$PL$B_Expressions$compCondition = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$B_Expressions$GE),
			$elm$parser$Parser$symbol('>=')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$B_Expressions$LE),
			$elm$parser$Parser$symbol('<=')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$B_Expressions$NE),
			$elm$parser$Parser$symbol('!=')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$B_Expressions$GT),
			$elm$parser$Parser$symbol('>')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$B_Expressions$LT),
			$elm$parser$Parser$symbol('<')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$B_Expressions$EQ),
			$elm$parser$Parser$symbol('='))
		]));
var $author$project$LogicUS$PL$B_Expressions$createCondition = F3(
	function (f, c, s) {
		return {comp: c, e1: f, e2: s};
	});
var $author$project$LogicUS$PL$B_Expressions$condition = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$B_Expressions$createCondition),
			$author$project$LogicUS$PL$A_Expressions$expressionA),
		$author$project$LogicUS$PL$B_Expressions$compCondition),
	$author$project$LogicUS$PL$A_Expressions$expressionA);
var $author$project$LogicUS$PL$B_Expressions$And = F2(
	function (a, b) {
		return {$: 'And', a: a, b: b};
	});
var $author$project$LogicUS$PL$B_Expressions$AndOp = {$: 'AndOp'};
var $author$project$LogicUS$PL$B_Expressions$Or = F2(
	function (a, b) {
		return {$: 'Or', a: a, b: b};
	});
var $author$project$LogicUS$PL$B_Expressions$finalize = F2(
	function (revOps, finalExpr) {
		finalize:
		while (true) {
			if (!revOps.b) {
				return finalExpr;
			} else {
				if (revOps.a.b.$ === 'AndOp') {
					var _v1 = revOps.a;
					var expr = _v1.a;
					var _v2 = _v1.b;
					var otherRevOps = revOps.b;
					var $temp$revOps = otherRevOps,
						$temp$finalExpr = A2($author$project$LogicUS$PL$B_Expressions$And, expr, finalExpr);
					revOps = $temp$revOps;
					finalExpr = $temp$finalExpr;
					continue finalize;
				} else {
					if (revOps.b.b && (revOps.b.a.b.$ === 'AndOp')) {
						var _v3 = revOps.a;
						var expr = _v3.a;
						var _v4 = _v3.b;
						var _v5 = revOps.b;
						var _v6 = _v5.a;
						var expr2 = _v6.a;
						var _v7 = _v6.b;
						var otherRevOps = _v5.b;
						return A2(
							$author$project$LogicUS$PL$B_Expressions$Or,
							A2(
								$author$project$LogicUS$PL$B_Expressions$finalize,
								A2(
									$elm$core$List$cons,
									_Utils_Tuple2(expr2, $author$project$LogicUS$PL$B_Expressions$AndOp),
									otherRevOps),
								expr),
							finalExpr);
					} else {
						var _v8 = revOps.a;
						var expr = _v8.a;
						var _v9 = _v8.b;
						var otherRevOps = revOps.b;
						var $temp$revOps = otherRevOps,
							$temp$finalExpr = A2($author$project$LogicUS$PL$B_Expressions$Or, expr, finalExpr);
						revOps = $temp$revOps;
						finalExpr = $temp$finalExpr;
						continue finalize;
					}
				}
			}
		}
	});
var $author$project$LogicUS$PL$B_Expressions$OrOp = {$: 'OrOp'};
var $author$project$LogicUS$PL$B_Expressions$operatorB = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$map,
			function (_v0) {
				return $author$project$LogicUS$PL$B_Expressions$AndOp;
			},
			$elm$parser$Parser$symbol('AND')),
			A2(
			$elm$parser$Parser$map,
			function (_v1) {
				return $author$project$LogicUS$PL$B_Expressions$OrOp;
			},
			$elm$parser$Parser$symbol('OR'))
		]));
var $author$project$LogicUS$PL$B_Expressions$expressionBAux = F2(
	function (revOps, bExpr) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$andThen,
					function (_v2) {
						var op = _v2.a;
						var newExpr = _v2.b;
						return A2(
							$author$project$LogicUS$PL$B_Expressions$expressionBAux,
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(bExpr, op),
								revOps),
							newExpr);
					},
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							$elm$parser$Parser$succeed($elm$core$Tuple$pair),
							$author$project$LogicUS$PL$B_Expressions$operatorB),
						$author$project$LogicUS$PL$B_Expressions$cyclic$termBExpr())),
					$elm$parser$Parser$lazy(
					function (_v3) {
						return $elm$parser$Parser$succeed(
							A2($author$project$LogicUS$PL$B_Expressions$finalize, revOps, bExpr));
					})
				]));
	});
function $author$project$LogicUS$PL$B_Expressions$cyclic$expressionB() {
	return A2(
		$elm$parser$Parser$andThen,
		$author$project$LogicUS$PL$B_Expressions$expressionBAux(_List_Nil),
		$author$project$LogicUS$PL$B_Expressions$cyclic$termBExpr());
}
function $author$project$LogicUS$PL$B_Expressions$cyclic$termBExpr() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($author$project$LogicUS$PL$B_Expressions$T),
				$elm$parser$Parser$symbol('T')),
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($author$project$LogicUS$PL$B_Expressions$F),
				$elm$parser$Parser$symbol('F')),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($author$project$LogicUS$PL$B_Expressions$Not),
					$elm$parser$Parser$symbol('NOT')),
				$elm$parser$Parser$lazy(
					function (_v0) {
						return $author$project$LogicUS$PL$B_Expressions$cyclic$expressionB();
					})),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($author$project$LogicUS$PL$B_Expressions$Cond),
					$elm$parser$Parser$symbol('[')),
				A2(
					$elm$parser$Parser$ignorer,
					$author$project$LogicUS$PL$B_Expressions$condition,
					$elm$parser$Parser$symbol(']'))),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$symbol('(')),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$lazy(
						function (_v1) {
							return $author$project$LogicUS$PL$B_Expressions$cyclic$expressionB();
						}),
					$elm$parser$Parser$symbol(')')))
			]));
}
try {
	var $author$project$LogicUS$PL$B_Expressions$expressionB = $author$project$LogicUS$PL$B_Expressions$cyclic$expressionB();
	$author$project$LogicUS$PL$B_Expressions$cyclic$expressionB = function () {
		return $author$project$LogicUS$PL$B_Expressions$expressionB;
	};
	var $author$project$LogicUS$PL$B_Expressions$termBExpr = $author$project$LogicUS$PL$B_Expressions$cyclic$termBExpr();
	$author$project$LogicUS$PL$B_Expressions$cyclic$termBExpr = function () {
		return $author$project$LogicUS$PL$B_Expressions$termBExpr;
	};
} catch ($) {
	throw 'Some top-level definitions from `LogicUS.PL.B_Expressions` are causing infinite recursion:\n\n  ┌─────┐\n  │    expressionB\n  │     ↓\n  │    expressionBAux\n  │     ↓\n  │    termBExpr\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $author$project$LogicUS$PL$CSP$AndOp = {$: 'AndOp'};
var $author$project$LogicUS$PL$CSP$Conj = F2(
	function (a, b) {
		return {$: 'Conj', a: a, b: b};
	});
var $author$project$LogicUS$PL$CSP$Disj = F2(
	function (a, b) {
		return {$: 'Disj', a: a, b: b};
	});
var $author$project$LogicUS$PL$CSP$Equi = F2(
	function (a, b) {
		return {$: 'Equi', a: a, b: b};
	});
var $author$project$LogicUS$PL$CSP$Impl = F2(
	function (a, b) {
		return {$: 'Impl', a: a, b: b};
	});
var $author$project$LogicUS$PL$CSP$ImplOp = {$: 'ImplOp'};
var $author$project$LogicUS$PL$CSP$OrOp = {$: 'OrOp'};
var $author$project$LogicUS$PL$CSP$finalize = F2(
	function (revOps, finalExpr) {
		finalize:
		while (true) {
			_v0$6:
			while (true) {
				_v0$10:
				while (true) {
					if (!revOps.b) {
						return finalExpr;
					} else {
						switch (revOps.a.b.$) {
							case 'AndOp':
								var _v1 = revOps.a;
								var expr = _v1.a;
								var _v2 = _v1.b;
								var otherRevOps = revOps.b;
								var $temp$revOps = otherRevOps,
									$temp$finalExpr = A2($author$project$LogicUS$PL$CSP$Conj, expr, finalExpr);
								revOps = $temp$revOps;
								finalExpr = $temp$finalExpr;
								continue finalize;
							case 'OrOp':
								if (revOps.b.b && (revOps.b.a.b.$ === 'AndOp')) {
									var _v3 = revOps.a;
									var expr = _v3.a;
									var _v4 = _v3.b;
									var _v5 = revOps.b;
									var _v6 = _v5.a;
									var expr2 = _v6.a;
									var _v7 = _v6.b;
									var otherRevOps = _v5.b;
									return A2(
										$author$project$LogicUS$PL$CSP$Disj,
										A2(
											$author$project$LogicUS$PL$CSP$finalize,
											A2(
												$elm$core$List$cons,
												_Utils_Tuple2(expr2, $author$project$LogicUS$PL$CSP$AndOp),
												otherRevOps),
											expr),
										finalExpr);
								} else {
									var _v8 = revOps.a;
									var expr = _v8.a;
									var _v9 = _v8.b;
									var otherRevOps = revOps.b;
									var $temp$revOps = otherRevOps,
										$temp$finalExpr = A2($author$project$LogicUS$PL$CSP$Disj, expr, finalExpr);
									revOps = $temp$revOps;
									finalExpr = $temp$finalExpr;
									continue finalize;
								}
							case 'ImplOp':
								if (revOps.b.b) {
									switch (revOps.b.a.b.$) {
										case 'AndOp':
											var _v10 = revOps.a;
											var expr = _v10.a;
											var _v11 = _v10.b;
											var _v12 = revOps.b;
											var _v13 = _v12.a;
											var expr2 = _v13.a;
											var _v14 = _v13.b;
											var otherRevOps = _v12.b;
											return A2(
												$author$project$LogicUS$PL$CSP$Impl,
												A2(
													$author$project$LogicUS$PL$CSP$finalize,
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(expr2, $author$project$LogicUS$PL$CSP$AndOp),
														otherRevOps),
													expr),
												finalExpr);
										case 'OrOp':
											var _v15 = revOps.a;
											var expr = _v15.a;
											var _v16 = _v15.b;
											var _v17 = revOps.b;
											var _v18 = _v17.a;
											var expr2 = _v18.a;
											var _v19 = _v18.b;
											var otherRevOps = _v17.b;
											return A2(
												$author$project$LogicUS$PL$CSP$Impl,
												A2(
													$author$project$LogicUS$PL$CSP$finalize,
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(expr2, $author$project$LogicUS$PL$CSP$OrOp),
														otherRevOps),
													expr),
												finalExpr);
										default:
											break _v0$6;
									}
								} else {
									break _v0$6;
								}
							default:
								if (revOps.b.b) {
									switch (revOps.b.a.b.$) {
										case 'AndOp':
											var _v22 = revOps.a;
											var expr = _v22.a;
											var _v23 = _v22.b;
											var _v24 = revOps.b;
											var _v25 = _v24.a;
											var expr2 = _v25.a;
											var _v26 = _v25.b;
											var otherRevOps = _v24.b;
											return A2(
												$author$project$LogicUS$PL$CSP$Equi,
												A2(
													$author$project$LogicUS$PL$CSP$finalize,
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(expr2, $author$project$LogicUS$PL$CSP$AndOp),
														otherRevOps),
													expr),
												finalExpr);
										case 'OrOp':
											var _v27 = revOps.a;
											var expr = _v27.a;
											var _v28 = _v27.b;
											var _v29 = revOps.b;
											var _v30 = _v29.a;
											var expr2 = _v30.a;
											var _v31 = _v30.b;
											var otherRevOps = _v29.b;
											return A2(
												$author$project$LogicUS$PL$CSP$Equi,
												A2(
													$author$project$LogicUS$PL$CSP$finalize,
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(expr2, $author$project$LogicUS$PL$CSP$OrOp),
														otherRevOps),
													expr),
												finalExpr);
										case 'ImplOp':
											var _v32 = revOps.a;
											var expr = _v32.a;
											var _v33 = _v32.b;
											var _v34 = revOps.b;
											var _v35 = _v34.a;
											var expr2 = _v35.a;
											var _v36 = _v35.b;
											var otherRevOps = _v34.b;
											return A2(
												$author$project$LogicUS$PL$CSP$Equi,
												A2(
													$author$project$LogicUS$PL$CSP$finalize,
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(expr2, $author$project$LogicUS$PL$CSP$ImplOp),
														otherRevOps),
													expr),
												finalExpr);
										default:
											break _v0$10;
									}
								} else {
									break _v0$10;
								}
						}
					}
				}
				var _v37 = revOps.a;
				var expr = _v37.a;
				var _v38 = _v37.b;
				var otherRevOps = revOps.b;
				var $temp$revOps = otherRevOps,
					$temp$finalExpr = A2($author$project$LogicUS$PL$CSP$Equi, expr, finalExpr);
				revOps = $temp$revOps;
				finalExpr = $temp$finalExpr;
				continue finalize;
			}
			var _v20 = revOps.a;
			var expr = _v20.a;
			var _v21 = _v20.b;
			var otherRevOps = revOps.b;
			var $temp$revOps = otherRevOps,
				$temp$finalExpr = A2($author$project$LogicUS$PL$CSP$Impl, expr, finalExpr);
			revOps = $temp$revOps;
			finalExpr = $temp$finalExpr;
			continue finalize;
		}
	});
var $author$project$LogicUS$PL$CSP$nameParamBigFPL = $elm$parser$Parser$getChompedString(
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$chompIf($elm$core$Char$isLower)),
			$elm$parser$Parser$chompWhile($elm$core$Char$isLower)),
		$elm$parser$Parser$chompWhile($elm$core$Char$isDigit)));
var $elm$parser$Parser$Optional = {$: 'Optional'};
var $elm$parser$Parser$Problem = function (a) {
	return {$: 'Problem', a: a};
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$parser$Parser$problem = function (msg) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(msg));
};
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {col: col, problem: problem, row: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 'Empty':
					return list;
				case 'AddRight':
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0.a;
		var _v1 = parse(
			{col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src: src});
		if (_v1.$ === 'Good') {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (_v0.$ === 'Ok') {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $author$project$LogicUS$PL$CSP$myIntToInt = function (readed) {
	var _v0 = A2($elm$parser$Parser$run, $elm$parser$Parser$int, readed);
	if (_v0.$ === 'Ok') {
		var i = _v0.a;
		return $elm$parser$Parser$succeed(i);
	} else {
		return $elm$parser$Parser$problem('Expecting Int');
	}
};
var $author$project$LogicUS$PL$CSP$myInt = A2(
	$elm$parser$Parser$andThen,
	$author$project$LogicUS$PL$CSP$myIntToInt,
	$elm$parser$Parser$getChompedString(
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$chompWhile($elm$core$Char$isDigit))));
var $author$project$LogicUS$PL$CSP$valuesParamBigFPL = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$sequence(
			{
				end: '}',
				item: $elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$ignorer,
								$elm$parser$Parser$succeed($elm$core$Basics$negate),
								$elm$parser$Parser$symbol('-')),
							$author$project$LogicUS$PL$CSP$myInt),
							$author$project$LogicUS$PL$CSP$myInt
						])),
				separator: ',',
				spaces: $elm$parser$Parser$spaces,
				start: '{',
				trailing: $elm$parser$Parser$Optional
			}),
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$List$range),
					$elm$parser$Parser$symbol('(')),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								A2(
								$elm$parser$Parser$keeper,
								A2(
									$elm$parser$Parser$ignorer,
									$elm$parser$Parser$succeed($elm$core$Basics$negate),
									$elm$parser$Parser$symbol('-')),
								$author$project$LogicUS$PL$CSP$myInt),
								$author$project$LogicUS$PL$CSP$myInt
							])),
					$elm$parser$Parser$symbol('..'))),
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$ignorer,
								$elm$parser$Parser$succeed($elm$core$Basics$negate),
								$elm$parser$Parser$symbol('-')),
							$author$project$LogicUS$PL$CSP$myInt),
							$author$project$LogicUS$PL$CSP$myInt
						])),
				$elm$parser$Parser$symbol(')')))
		]));
var $author$project$LogicUS$PL$CSP$paramBigFPL = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed(
			F2(
				function (n, v) {
					return {name: n, values: v};
				})),
		A2(
			$elm$parser$Parser$ignorer,
			$author$project$LogicUS$PL$CSP$nameParamBigFPL,
			$elm$parser$Parser$symbol('\\in'))),
	$author$project$LogicUS$PL$CSP$valuesParamBigFPL);
var $author$project$LogicUS$PL$CSP$listParamBigFPL = $elm$parser$Parser$sequence(
	{end: '', item: $author$project$LogicUS$PL$CSP$paramBigFPL, separator: ',', spaces: $elm$parser$Parser$spaces, start: '', trailing: $elm$parser$Parser$Forbidden});
var $author$project$LogicUS$PL$CSP$EquivOp = {$: 'EquivOp'};
var $author$project$LogicUS$PL$CSP$operator = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$CSP$AndOp),
			$elm$parser$Parser$symbol('&')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$CSP$AndOp),
			$elm$parser$Parser$symbol('∧')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$CSP$OrOp),
			$elm$parser$Parser$symbol('|')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$CSP$OrOp),
			$elm$parser$Parser$symbol('∨')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$CSP$ImplOp),
			$elm$parser$Parser$symbol('->')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$CSP$ImplOp),
			$elm$parser$Parser$symbol('→')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$CSP$EquivOp),
			$elm$parser$Parser$symbol('<->')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$CSP$EquivOp),
			$elm$parser$Parser$symbol('↔'))
		]));
var $author$project$LogicUS$PL$CSP$expressionBigFPLAux = F2(
	function (revOps, expr) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$andThen,
					function (_v4) {
						var op = _v4.a;
						var newExpr = _v4.b;
						return A2(
							$author$project$LogicUS$PL$CSP$expressionBigFPLAux,
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(expr, op),
								revOps),
							newExpr);
					},
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							$elm$parser$Parser$succeed($elm$core$Tuple$pair),
							$author$project$LogicUS$PL$CSP$operator),
						$author$project$LogicUS$PL$CSP$cyclic$termBigFPL())),
					$elm$parser$Parser$lazy(
					function (_v5) {
						return $elm$parser$Parser$succeed(
							A2($author$project$LogicUS$PL$CSP$finalize, revOps, expr));
					})
				]));
	});
function $author$project$LogicUS$PL$CSP$cyclic$expressionBigFPL() {
	return A2(
		$elm$parser$Parser$andThen,
		$author$project$LogicUS$PL$CSP$expressionBigFPLAux(_List_Nil),
		$author$project$LogicUS$PL$CSP$cyclic$termBigFPL());
}
function $author$project$LogicUS$PL$CSP$cyclic$termBigFPL() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				$author$project$LogicUS$PL$CSP$atomParser),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$ignorer,
							A2(
								$elm$parser$Parser$ignorer,
								$elm$parser$Parser$succeed($author$project$LogicUS$PL$CSP$BAnd),
								$elm$parser$Parser$oneOf(
									_List_fromArray(
										[
											$elm$parser$Parser$symbol('/\\'),
											$elm$parser$Parser$symbol('!&'),
											$elm$parser$Parser$symbol('⋀')
										]))),
							$elm$parser$Parser$symbol('_{')),
						$author$project$LogicUS$PL$CSP$listParamBigFPL),
					A2(
						$elm$parser$Parser$ignorer,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$oneOf(
								_List_fromArray(
									[
										A2(
										$elm$parser$Parser$keeper,
										A2(
											$elm$parser$Parser$ignorer,
											$elm$parser$Parser$succeed($elm$core$Basics$identity),
											$elm$parser$Parser$symbol(':')),
										$author$project$LogicUS$PL$B_Expressions$expressionB),
										$elm$parser$Parser$succeed($author$project$LogicUS$PL$B_Expressions$T)
									])),
							$elm$parser$Parser$symbol('}')),
						$elm$parser$Parser$symbol('('))),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$lazy(
						function (_v0) {
							return $author$project$LogicUS$PL$CSP$cyclic$expressionBigFPL();
						}),
					$elm$parser$Parser$symbol(')'))),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$ignorer,
							A2(
								$elm$parser$Parser$ignorer,
								$elm$parser$Parser$succeed($author$project$LogicUS$PL$CSP$BOr),
								$elm$parser$Parser$oneOf(
									_List_fromArray(
										[
											$elm$parser$Parser$symbol('\\/'),
											$elm$parser$Parser$symbol('!|'),
											$elm$parser$Parser$symbol('⋁')
										]))),
							$elm$parser$Parser$symbol('_{')),
						$author$project$LogicUS$PL$CSP$listParamBigFPL),
					A2(
						$elm$parser$Parser$ignorer,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$oneOf(
								_List_fromArray(
									[
										A2(
										$elm$parser$Parser$keeper,
										A2(
											$elm$parser$Parser$ignorer,
											$elm$parser$Parser$succeed($elm$core$Basics$identity),
											$elm$parser$Parser$symbol(':')),
										$author$project$LogicUS$PL$B_Expressions$expressionB),
										$elm$parser$Parser$succeed($author$project$LogicUS$PL$B_Expressions$T)
									])),
							$elm$parser$Parser$symbol('}')),
						$elm$parser$Parser$symbol('('))),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$lazy(
						function (_v1) {
							return $author$project$LogicUS$PL$CSP$cyclic$expressionBigFPL();
						}),
					$elm$parser$Parser$symbol(')'))),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$symbol('(')),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$lazy(
						function (_v2) {
							return $author$project$LogicUS$PL$CSP$cyclic$expressionBigFPL();
						}),
					$elm$parser$Parser$symbol(')'))),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($author$project$LogicUS$PL$CSP$Neg),
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								$elm$parser$Parser$symbol('¬'),
								$elm$parser$Parser$symbol('-')
							]))),
				$elm$parser$Parser$lazy(
					function (_v3) {
						return $author$project$LogicUS$PL$CSP$cyclic$termBigFPL();
					})),
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($author$project$LogicUS$PL$CSP$Insat),
				$elm$parser$Parser$symbol('!F')),
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($author$project$LogicUS$PL$CSP$Taut),
				$elm$parser$Parser$symbol('!T'))
			]));
}
try {
	var $author$project$LogicUS$PL$CSP$expressionBigFPL = $author$project$LogicUS$PL$CSP$cyclic$expressionBigFPL();
	$author$project$LogicUS$PL$CSP$cyclic$expressionBigFPL = function () {
		return $author$project$LogicUS$PL$CSP$expressionBigFPL;
	};
	var $author$project$LogicUS$PL$CSP$termBigFPL = $author$project$LogicUS$PL$CSP$cyclic$termBigFPL();
	$author$project$LogicUS$PL$CSP$cyclic$termBigFPL = function () {
		return $author$project$LogicUS$PL$CSP$termBigFPL;
	};
} catch ($) {
	throw 'Some top-level definitions from `LogicUS.PL.CSP` are causing infinite recursion:\n\n  ┌─────┐\n  │    expressionBigFPL\n  │     ↓\n  │    expressionBigFPLAux\n  │     ↓\n  │    termBigFPL\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $elm_community$list_extra$List$Extra$uniqueHelp = F4(
	function (f, existing, remaining, accumulator) {
		uniqueHelp:
		while (true) {
			if (!remaining.b) {
				return $elm$core$List$reverse(accumulator);
			} else {
				var first = remaining.a;
				var rest = remaining.b;
				var computedFirst = f(first);
				if (A2($elm$core$List$member, computedFirst, existing)) {
					var $temp$f = f,
						$temp$existing = existing,
						$temp$remaining = rest,
						$temp$accumulator = accumulator;
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				} else {
					var $temp$f = f,
						$temp$existing = A2($elm$core$List$cons, computedFirst, existing),
						$temp$remaining = rest,
						$temp$accumulator = A2($elm$core$List$cons, first, accumulator);
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$uniqueBy = F2(
	function (f, list) {
		return A4($elm_community$list_extra$List$Extra$uniqueHelp, f, _List_Nil, list, _List_Nil);
	});
var $elm_community$list_extra$List$Extra$allDifferentBy = F2(
	function (f, list) {
		return _Utils_eq(
			$elm$core$List$length(list),
			$elm$core$List$length(
				A2($elm_community$list_extra$List$Extra$uniqueBy, f, list)));
	});
var $elm_community$list_extra$List$Extra$allDifferent = function (list) {
	return A2($elm_community$list_extra$List$Extra$allDifferentBy, $elm$core$Basics$identity, list);
};
var $author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList = F2(
	function (xs, ys) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (x, ac) {
					return A2($elm$core$List$member, x, ac) ? ac : _Utils_ap(
						ac,
						_List_fromArray(
							[x]));
				}),
			xs,
			ys);
	});
var $author$project$LogicUS$PL$A_Expressions$varsInA_Expr = function (expr) {
	switch (expr.$) {
		case 'Number':
			return _List_Nil;
		case 'Var':
			var s = expr.a;
			return _List_fromArray(
				[s]);
		case 'Add':
			var e1 = expr.a;
			var e2 = expr.b;
			return A2(
				$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
				$author$project$LogicUS$PL$A_Expressions$varsInA_Expr(e1),
				$author$project$LogicUS$PL$A_Expressions$varsInA_Expr(e2));
		case 'Dif':
			var e1 = expr.a;
			var e2 = expr.b;
			return A2(
				$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
				$author$project$LogicUS$PL$A_Expressions$varsInA_Expr(e1),
				$author$project$LogicUS$PL$A_Expressions$varsInA_Expr(e2));
		case 'Mul':
			var e1 = expr.a;
			var e2 = expr.b;
			return A2(
				$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
				$author$project$LogicUS$PL$A_Expressions$varsInA_Expr(e1),
				$author$project$LogicUS$PL$A_Expressions$varsInA_Expr(e2));
		case 'Div':
			var e1 = expr.a;
			var e2 = expr.b;
			return A2(
				$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
				$author$project$LogicUS$PL$A_Expressions$varsInA_Expr(e1),
				$author$project$LogicUS$PL$A_Expressions$varsInA_Expr(e2));
		default:
			var e1 = expr.a;
			var e2 = expr.b;
			return A2(
				$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
				$author$project$LogicUS$PL$A_Expressions$varsInA_Expr(e1),
				$author$project$LogicUS$PL$A_Expressions$varsInA_Expr(e2));
	}
};
var $author$project$LogicUS$PL$B_Expressions$varsInB_Expr = function (expr) {
	varsInB_Expr:
	while (true) {
		switch (expr.$) {
			case 'T':
				return _List_Nil;
			case 'F':
				return _List_Nil;
			case 'And':
				var e1 = expr.a;
				var e2 = expr.b;
				return A2(
					$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
					$author$project$LogicUS$PL$B_Expressions$varsInB_Expr(e1),
					$author$project$LogicUS$PL$B_Expressions$varsInB_Expr(e2));
			case 'Or':
				var e1 = expr.a;
				var e2 = expr.b;
				return A2(
					$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
					$author$project$LogicUS$PL$B_Expressions$varsInB_Expr(e1),
					$author$project$LogicUS$PL$B_Expressions$varsInB_Expr(e2));
			case 'Not':
				var e1 = expr.a;
				var $temp$expr = e1;
				expr = $temp$expr;
				continue varsInB_Expr;
			default:
				var c = expr.a;
				return A2(
					$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
					$author$project$LogicUS$PL$A_Expressions$varsInA_Expr(c.e1),
					$author$project$LogicUS$PL$A_Expressions$varsInA_Expr(c.e2));
		}
	}
};
var $author$project$LogicUS$PL$CSP$isWFFAux = F2(
	function (f, curli) {
		isWFFAux:
		while (true) {
			switch (f.$) {
				case 'Atom':
					var is = f.b;
					return A2(
						$elm$core$List$all,
						function (x) {
							return A2($elm$core$List$member, x, curli);
						},
						A3(
							$elm$core$List$foldl,
							F2(
								function (i, ac) {
									return A2(
										$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
										ac,
										$author$project$LogicUS$PL$A_Expressions$varsInA_Expr(i));
								}),
							_List_Nil,
							is));
				case 'Neg':
					var p = f.a;
					var $temp$f = p,
						$temp$curli = curli;
					f = $temp$f;
					curli = $temp$curli;
					continue isWFFAux;
				case 'Conj':
					var p = f.a;
					var q = f.b;
					return A2($author$project$LogicUS$PL$CSP$isWFFAux, p, curli) && A2($author$project$LogicUS$PL$CSP$isWFFAux, q, curli);
				case 'Disj':
					var p = f.a;
					var q = f.b;
					return A2($author$project$LogicUS$PL$CSP$isWFFAux, p, curli) && A2($author$project$LogicUS$PL$CSP$isWFFAux, q, curli);
				case 'Impl':
					var p = f.a;
					var q = f.b;
					return A2($author$project$LogicUS$PL$CSP$isWFFAux, p, curli) && A2($author$project$LogicUS$PL$CSP$isWFFAux, q, curli);
				case 'Equi':
					var p = f.a;
					var q = f.b;
					return A2($author$project$LogicUS$PL$CSP$isWFFAux, p, curli) && A2($author$project$LogicUS$PL$CSP$isWFFAux, q, curli);
				case 'BAnd':
					var li = f.a;
					var c = f.b;
					var p = f.c;
					var new_curli = _Utils_ap(
						curli,
						A2(
							$elm$core$List$map,
							function ($) {
								return $.name;
							},
							li));
					if ($elm_community$list_extra$List$Extra$allDifferent(new_curli) && A2(
						$elm$core$List$all,
						function (x) {
							return A2($elm$core$List$member, x, new_curli);
						},
						$author$project$LogicUS$PL$B_Expressions$varsInB_Expr(c))) {
						var $temp$f = p,
							$temp$curli = new_curli;
						f = $temp$f;
						curli = $temp$curli;
						continue isWFFAux;
					} else {
						return false;
					}
				case 'BOr':
					var li = f.a;
					var c = f.b;
					var p = f.c;
					var new_curli = _Utils_ap(
						curli,
						A2(
							$elm$core$List$map,
							function ($) {
								return $.name;
							},
							li));
					if ($elm_community$list_extra$List$Extra$allDifferent(new_curli) && A2(
						$elm$core$List$all,
						function (x) {
							return A2($elm$core$List$member, x, new_curli);
						},
						$author$project$LogicUS$PL$B_Expressions$varsInB_Expr(c))) {
						var $temp$f = p,
							$temp$curli = new_curli;
						f = $temp$f;
						curli = $temp$curli;
						continue isWFFAux;
					} else {
						return false;
					}
				case 'Insat':
					return true;
				default:
					return true;
			}
		}
	});
var $author$project$LogicUS$PL$CSP$isWFF = function (f) {
	isWFF:
	while (true) {
		switch (f.$) {
			case 'Atom':
				if (!f.b.b) {
					return true;
				} else {
					return false;
				}
			case 'Neg':
				var p = f.a;
				var $temp$f = p;
				f = $temp$f;
				continue isWFF;
			case 'Conj':
				var p = f.a;
				var q = f.b;
				return $author$project$LogicUS$PL$CSP$isWFF(p) && $author$project$LogicUS$PL$CSP$isWFF(q);
			case 'Disj':
				var p = f.a;
				var q = f.b;
				return $author$project$LogicUS$PL$CSP$isWFF(p) && $author$project$LogicUS$PL$CSP$isWFF(q);
			case 'Impl':
				var p = f.a;
				var q = f.b;
				return $author$project$LogicUS$PL$CSP$isWFF(p) && $author$project$LogicUS$PL$CSP$isWFF(q);
			case 'Equi':
				var p = f.a;
				var q = f.b;
				return $author$project$LogicUS$PL$CSP$isWFF(p) && $author$project$LogicUS$PL$CSP$isWFF(q);
			case 'BAnd':
				var li = f.a;
				var c = f.b;
				var p = f.c;
				var new_curli = A2(
					$elm$core$List$map,
					function ($) {
						return $.name;
					},
					li);
				return ($elm_community$list_extra$List$Extra$allDifferent(new_curli) && A2(
					$elm$core$List$all,
					function (x) {
						return A2($elm$core$List$member, x, new_curli);
					},
					$author$project$LogicUS$PL$B_Expressions$varsInB_Expr(c))) ? A2($author$project$LogicUS$PL$CSP$isWFFAux, p, new_curli) : false;
			case 'BOr':
				var li = f.a;
				var c = f.b;
				var p = f.c;
				var new_curli = A2(
					$elm$core$List$map,
					function ($) {
						return $.name;
					},
					li);
				return ($elm_community$list_extra$List$Extra$allDifferent(new_curli) && A2(
					$elm$core$List$all,
					function (x) {
						return A2($elm$core$List$member, x, new_curli);
					},
					$author$project$LogicUS$PL$B_Expressions$varsInB_Expr(c))) ? A2($author$project$LogicUS$PL$CSP$isWFFAux, p, new_curli) : false;
			case 'Insat':
				return true;
			default:
				return true;
		}
	}
};
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $elm$core$Debug$toString = _Debug_toString;
var $author$project$LogicUS$PL$CSP$bfplReadFromString = function (str) {
	if (str === '') {
		return _Utils_Tuple2($elm$core$Maybe$Nothing, 'Empty expression');
	} else {
		var _v0 = A2(
			$elm$parser$Parser$run,
			$author$project$LogicUS$PL$CSP$expressionBigFPL,
			A3(
				$elm$core$String$replace,
				' ',
				'',
				A3($elm$core$String$replace, '\n', '', '(' + (str + ')'))));
		if (_v0.$ === 'Ok') {
			var y = _v0.a;
			return $author$project$LogicUS$PL$CSP$isWFF(y) ? _Utils_Tuple2(
				$elm$core$Maybe$Just(y),
				'') : _Utils_Tuple2($elm$core$Maybe$Nothing, 'Illegal use of indices');
		} else {
			var err = _v0.a;
			return _Utils_Tuple2(
				$elm$core$Maybe$Nothing,
				'Syntax Error: ' + ($elm$core$Debug$toString(err) + str));
		}
	}
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm_community$list_extra$List$Extra$last = function (items) {
	last:
	while (true) {
		if (!items.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!items.b.b) {
				var x = items.a;
				return $elm$core$Maybe$Just(x);
			} else {
				var rest = items.b;
				var $temp$items = rest;
				items = $temp$items;
				continue last;
			}
		}
	}
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$LogicUS$PL$CSP$paramToMathString = function (i) {
	return i.name + ('\\in \\{' + (A2(
		$elm$core$Maybe$withDefault,
		'',
		A2(
			$elm$core$Maybe$map,
			$elm$core$String$fromInt,
			$elm$core$List$head(i.values))) + ('..' + (A2(
		$elm$core$Maybe$withDefault,
		'',
		A2(
			$elm$core$Maybe$map,
			$elm$core$String$fromInt,
			$elm_community$list_extra$List$Extra$last(i.values))) + '\\}'))));
};
var $author$project$LogicUS$PL$A_Expressions$toMathStringAExpr = function (aExpr) {
	switch (aExpr.$) {
		case 'Number':
			var p = aExpr.a;
			return $elm$core$String$fromInt(p);
		case 'Var':
			var p = aExpr.a;
			return p;
		case 'Add':
			var p = aExpr.a;
			var q = aExpr.b;
			return '(' + ($author$project$LogicUS$PL$A_Expressions$toMathStringAExpr(p) + ('+' + ($author$project$LogicUS$PL$A_Expressions$toMathStringAExpr(q) + ')')));
		case 'Dif':
			var p = aExpr.a;
			var q = aExpr.b;
			return '(' + ($author$project$LogicUS$PL$A_Expressions$toMathStringAExpr(p) + ('-' + ($author$project$LogicUS$PL$A_Expressions$toMathStringAExpr(q) + ')')));
		case 'Mul':
			var p = aExpr.a;
			var q = aExpr.b;
			return '(' + ($author$project$LogicUS$PL$A_Expressions$toMathStringAExpr(p) + ('\\cdot ' + ($author$project$LogicUS$PL$A_Expressions$toMathStringAExpr(q) + ')')));
		case 'Div':
			var p = aExpr.a;
			var q = aExpr.b;
			return '(' + ($author$project$LogicUS$PL$A_Expressions$toMathStringAExpr(p) + ('//' + ($author$project$LogicUS$PL$A_Expressions$toMathStringAExpr(q) + ')')));
		default:
			var p = aExpr.a;
			var q = aExpr.b;
			return '(' + ($author$project$LogicUS$PL$A_Expressions$toMathStringAExpr(p) + ('\\% ' + ($author$project$LogicUS$PL$A_Expressions$toMathStringAExpr(q) + ')')));
	}
};
var $author$project$LogicUS$PL$B_Expressions$toMathStringComparator = function (c) {
	switch (c.$) {
		case 'EQ':
			return '= ';
		case 'NE':
			return '\\neq ';
		case 'GT':
			return '> ';
		case 'LT':
			return '< ';
		case 'GE':
			return '\\geq ';
		default:
			return '\\leq ';
	}
};
var $author$project$LogicUS$PL$B_Expressions$toMathStringCondition = function (c) {
	return _Utils_ap(
		$author$project$LogicUS$PL$A_Expressions$toMathStringAExpr(c.e1),
		_Utils_ap(
			$author$project$LogicUS$PL$B_Expressions$toMathStringComparator(c.comp),
			$author$project$LogicUS$PL$A_Expressions$toMathStringAExpr(c.e2)));
};
var $author$project$LogicUS$PL$B_Expressions$toMathStringBExpr = function (bexpr) {
	switch (bexpr.$) {
		case 'T':
			return 'T';
		case 'F':
			return 'F';
		case 'And':
			var e1 = bexpr.a;
			var e2 = bexpr.b;
			return '(' + ($author$project$LogicUS$PL$B_Expressions$toMathStringBExpr(e1) + ('\\wedge ' + ($author$project$LogicUS$PL$B_Expressions$toMathStringBExpr(e2) + ')')));
		case 'Or':
			var e1 = bexpr.a;
			var e2 = bexpr.b;
			return '(' + ($author$project$LogicUS$PL$B_Expressions$toMathStringBExpr(e1) + ('\\vee ' + ($author$project$LogicUS$PL$B_Expressions$toMathStringBExpr(e2) + ')')));
		case 'Not':
			var e = bexpr.a;
			return '( \\neg ' + ($author$project$LogicUS$PL$B_Expressions$toMathStringBExpr(e) + ')');
		default:
			var c = bexpr.a;
			return '[' + ($author$project$LogicUS$PL$B_Expressions$toMathStringCondition(c) + ']');
	}
};
var $author$project$LogicUS$PL$A_Expressions$toStringAExpr = function (aExpr) {
	switch (aExpr.$) {
		case 'Number':
			var p = aExpr.a;
			return $elm$core$String$fromInt(p);
		case 'Var':
			var p = aExpr.a;
			return p;
		case 'Add':
			var p = aExpr.a;
			var q = aExpr.b;
			return '(' + ($author$project$LogicUS$PL$A_Expressions$toStringAExpr(p) + ('+' + ($author$project$LogicUS$PL$A_Expressions$toStringAExpr(q) + ')')));
		case 'Dif':
			var p = aExpr.a;
			var q = aExpr.b;
			return '(' + ($author$project$LogicUS$PL$A_Expressions$toStringAExpr(p) + ('-' + ($author$project$LogicUS$PL$A_Expressions$toStringAExpr(q) + ')')));
		case 'Mul':
			var p = aExpr.a;
			var q = aExpr.b;
			return '(' + ($author$project$LogicUS$PL$A_Expressions$toStringAExpr(p) + ('*' + ($author$project$LogicUS$PL$A_Expressions$toStringAExpr(q) + ')')));
		case 'Div':
			var p = aExpr.a;
			var q = aExpr.b;
			return '(' + ($author$project$LogicUS$PL$A_Expressions$toStringAExpr(p) + ('//' + ($author$project$LogicUS$PL$A_Expressions$toStringAExpr(q) + ')')));
		default:
			var p = aExpr.a;
			var q = aExpr.b;
			return '(' + ($author$project$LogicUS$PL$A_Expressions$toStringAExpr(p) + ('%' + ($author$project$LogicUS$PL$A_Expressions$toStringAExpr(q) + ')')));
	}
};
var $author$project$LogicUS$PL$CSP$bfplToMathStringAux = F2(
	function (f, i) {
		switch (f.$) {
			case 'Insat':
				return _Utils_Tuple2('\\perp', _List_Nil);
			case 'Taut':
				return _Utils_Tuple2('\\top', _List_Nil);
			case 'Atom':
				var pname = f.a;
				var is = f.b;
				return _Utils_Tuple2(
					pname + ('_{' + (A2(
						$elm$core$String$join,
						',',
						A2($elm$core$List$map, $author$project$LogicUS$PL$A_Expressions$toStringAExpr, is)) + '}')),
					_List_Nil);
			case 'Neg':
				var p = f.a;
				var _v1 = A2($author$project$LogicUS$PL$CSP$bfplToMathStringAux, p, i);
				var ps = _v1.a;
				var ls = _v1.b;
				return _Utils_Tuple2('\\neg ' + ps, ls);
			case 'Conj':
				var p = f.a;
				var q = f.b;
				var _v2 = A2($author$project$LogicUS$PL$CSP$bfplToMathStringAux, p, i);
				var ps = _v2.a;
				var ls = _v2.b;
				var _v3 = A2(
					$author$project$LogicUS$PL$CSP$bfplToMathStringAux,
					q,
					i + $elm$core$List$length(ls));
				var qs = _v3.a;
				var ls2 = _v3.b;
				return _Utils_Tuple2(
					'( ' + (ps + (' \\wedge ' + (qs + ' )'))),
					_Utils_ap(ls, ls2));
			case 'Disj':
				var p = f.a;
				var q = f.b;
				var _v4 = A2($author$project$LogicUS$PL$CSP$bfplToMathStringAux, p, i);
				var ps = _v4.a;
				var ls = _v4.b;
				var _v5 = A2(
					$author$project$LogicUS$PL$CSP$bfplToMathStringAux,
					q,
					i + $elm$core$List$length(ls));
				var qs = _v5.a;
				var ls2 = _v5.b;
				return _Utils_Tuple2(
					'( ' + (ps + (' \\vee ' + (qs + ' )'))),
					_Utils_ap(ls, ls2));
			case 'Impl':
				var p = f.a;
				var q = f.b;
				var _v6 = A2($author$project$LogicUS$PL$CSP$bfplToMathStringAux, p, i);
				var ps = _v6.a;
				var ls = _v6.b;
				var _v7 = A2(
					$author$project$LogicUS$PL$CSP$bfplToMathStringAux,
					q,
					i + $elm$core$List$length(ls));
				var qs = _v7.a;
				var ls2 = _v7.b;
				return _Utils_Tuple2(
					'( ' + (ps + (' \\rightarrow ' + (qs + ' )'))),
					_Utils_ap(ls, ls2));
			case 'Equi':
				var p = f.a;
				var q = f.b;
				var _v8 = A2($author$project$LogicUS$PL$CSP$bfplToMathStringAux, p, i);
				var ps = _v8.a;
				var ls = _v8.b;
				var _v9 = A2(
					$author$project$LogicUS$PL$CSP$bfplToMathStringAux,
					q,
					i + $elm$core$List$length(ls));
				var qs = _v9.a;
				var ls2 = _v9.b;
				return _Utils_Tuple2(
					'( ' + (ps + (' \\leftrightarrow ' + (qs + ' )'))),
					_Utils_ap(ls, ls2));
			case 'BAnd':
				var li = f.a;
				var c = f.b;
				var p = f.c;
				if (!_Utils_eq(c, $author$project$LogicUS$PL$B_Expressions$T)) {
					var _v10 = A2($author$project$LogicUS$PL$CSP$bfplToMathStringAux, p, i + 1);
					var ps = _v10.a;
					var ls = _v10.b;
					var _v11 = _Utils_Tuple2(
						'\\theta_{' + ($elm$core$String$fromInt(i) + ('}\\equiv ' + $author$project$LogicUS$PL$B_Expressions$toMathStringBExpr(c))),
						's.t. \\, \\theta_{' + ($elm$core$String$fromInt(i) + '}'));
					var c_s1 = _v11.a;
					var c_s2 = _v11.b;
					return _Utils_Tuple2(
						'\\bigwedge \\limits_{ \\begin{array}{c} \\scriptsize ' + (A2(
							$elm$core$String$join,
							'\\\\ \\scriptsize ',
							A2($elm$core$List$map, $author$project$LogicUS$PL$CSP$paramToMathString, li)) + ('\\\\ \\scriptsize ' + (c_s2 + ('\\end{array}} ' + ps)))),
						A2($elm$core$List$cons, c_s1, ls));
				} else {
					var _v12 = A2($author$project$LogicUS$PL$CSP$bfplToMathStringAux, p, i);
					var ps = _v12.a;
					var ls = _v12.b;
					return _Utils_Tuple2(
						'\\bigwedge \\limits_{ \\begin{array}{c} \\scriptsize ' + (A2(
							$elm$core$String$join,
							'\\\\ \\scriptsize ',
							A2($elm$core$List$map, $author$project$LogicUS$PL$CSP$paramToMathString, li)) + ('\\end{array}} ' + ps)),
						ls);
				}
			default:
				var li = f.a;
				var c = f.b;
				var p = f.c;
				if (!_Utils_eq(c, $author$project$LogicUS$PL$B_Expressions$T)) {
					var _v13 = A2($author$project$LogicUS$PL$CSP$bfplToMathStringAux, p, i + 1);
					var ps = _v13.a;
					var ls = _v13.b;
					var _v14 = _Utils_Tuple2(
						'\\theta_{' + ($elm$core$String$fromInt(i) + ('}\\equiv ' + $author$project$LogicUS$PL$B_Expressions$toMathStringBExpr(c))),
						's.t. \\, \\theta_{' + ($elm$core$String$fromInt(i) + '}'));
					var c_s1 = _v14.a;
					var c_s2 = _v14.b;
					return _Utils_Tuple2(
						'\\bigvee \\limits_{ \\begin{array}{c} \\scriptsize ' + (A2(
							$elm$core$String$join,
							'\\\\ \\scriptsize ',
							A2($elm$core$List$map, $author$project$LogicUS$PL$CSP$paramToMathString, li)) + ('\\\\ \\scriptsize ' + (c_s2 + ('\\end{array}} ' + ps)))),
						A2($elm$core$List$cons, c_s1, ls));
				} else {
					var _v15 = A2($author$project$LogicUS$PL$CSP$bfplToMathStringAux, p, i);
					var ps = _v15.a;
					var ls = _v15.b;
					return _Utils_Tuple2(
						'\\bigvee \\limits_{ \\begin{array}{c} \\scriptsize ' + (A2(
							$elm$core$String$join,
							'\\\\ \\scriptsize ',
							A2($elm$core$List$map, $author$project$LogicUS$PL$CSP$paramToMathString, li)) + ('\\end{array}} ' + ps)),
						ls);
				}
		}
	});
var $author$project$LogicUS$PL$CSP$bfplToMathString2 = function (f) {
	var _v0 = A2($author$project$LogicUS$PL$CSP$bfplToMathStringAux, f, 1);
	var fs = _v0.a;
	var ls = _v0.b;
	return _Utils_Tuple2(
		fs,
		'\\begin{array}{l} \\scriptsize ' + (A2($elm$core$String$join, '\\\\ \\scriptsize ', ls) + '\\end{array}'));
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$json$Json$Decode$map3 = _Json_map3;
var $author$project$PLBasicProcessors$processCSPPL = function (content) {
	var contentDecoder = A4(
		$elm$json$Json$Decode$map3,
		F3(
			function (x, y, z) {
				return {index: y, input: z, option: x};
			}),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['option']),
			$elm$json$Json$Decode$string),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['index']),
			$elm$json$Json$Decode$int),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['input']),
			$elm$json$Json$Decode$string));
	var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
	if (_v0.$ === 'Ok') {
		var c = _v0.a;
		var _v1 = c.option;
		switch (_v1) {
			case 'checkBFPL':
				var _v2 = $author$project$LogicUS$PL$CSP$bfplReadFromString(c.input);
				if (_v2.a.$ === 'Just') {
					var bf = _v2.a.a;
					var _v3 = $author$project$LogicUS$PL$CSP$bfplToMathString2(bf);
					var outputF = _v3.a;
					var outputC = _v3.b;
					return {
						errorCode: 0,
						message: $elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'input',
									$elm$json$Json$Encode$string(c.input)),
									_Utils_Tuple2(
									'index',
									$elm$json$Json$Encode$int(c.index)),
									_Utils_Tuple2(
									'outputFormula',
									$elm$json$Json$Encode$string(outputF)),
									_Utils_Tuple2(
									'outputConditions',
									$elm$json$Json$Encode$string(outputC)),
									_Utils_Tuple2(
									'errorState',
									$elm$json$Json$Encode$int(0)),
									_Utils_Tuple2(
									'option',
									$elm$json$Json$Encode$string('checkBFPL'))
								])),
						result: _List_Nil
					};
				} else {
					var _v4 = _v2.a;
					var errDetails = _v2.b;
					return {
						errorCode: 1,
						message: $elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'input',
									$elm$json$Json$Encode$string(c.input)),
									_Utils_Tuple2(
									'index',
									$elm$json$Json$Encode$int(c.index)),
									_Utils_Tuple2(
									'outputFormula',
									$elm$json$Json$Encode$string(errDetails)),
									_Utils_Tuple2(
									'outputConditions',
									$elm$json$Json$Encode$string(errDetails)),
									_Utils_Tuple2(
									'errorState',
									$elm$json$Json$Encode$int(1)),
									_Utils_Tuple2(
									'option',
									$elm$json$Json$Encode$string('checkBFPL'))
								])),
						result: _List_Nil
					};
				}
			case 'readCSP':
				var _v5 = A2(
					$elm$json$Json$Decode$decodeString,
					$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
					c.input);
				if (_v5.$ === 'Ok') {
					var ls = _v5.a;
					var parsedSet = A2(
						$elm$core$List$indexedMap,
						F2(
							function (index, input) {
								var _v10 = $author$project$LogicUS$PL$CSP$bfplReadFromString(input);
								if (_v10.a.$ === 'Just') {
									var bf = _v10.a.a;
									var _v11 = $author$project$LogicUS$PL$CSP$bfplToMathString2(bf);
									var outputF = _v11.a;
									var outputC = _v11.b;
									return _Utils_Tuple2(
										_Utils_Tuple2(true, bf),
										_List_fromArray(
											[
												_Utils_Tuple2(
												'input',
												$elm$json$Json$Encode$string(input)),
												_Utils_Tuple2(
												'index',
												$elm$json$Json$Encode$int(index)),
												_Utils_Tuple2(
												'outputFormula',
												$elm$json$Json$Encode$string(outputF)),
												_Utils_Tuple2(
												'outputConditions',
												$elm$json$Json$Encode$string(outputC)),
												_Utils_Tuple2(
												'errorState',
												$elm$json$Json$Encode$int(0))
											]));
								} else {
									var _v12 = _v10.a;
									var errDetails = _v10.b;
									return _Utils_Tuple2(
										_Utils_Tuple2(false, $author$project$LogicUS$PL$CSP$Insat),
										_List_fromArray(
											[
												_Utils_Tuple2(
												'input',
												$elm$json$Json$Encode$string(input)),
												_Utils_Tuple2(
												'index',
												$elm$json$Json$Encode$int(index)),
												_Utils_Tuple2(
												'outputFormula',
												$elm$json$Json$Encode$string(errDetails)),
												_Utils_Tuple2(
												'outputConditions',
												$elm$json$Json$Encode$string(errDetails)),
												_Utils_Tuple2(
												'errorState',
												$elm$json$Json$Encode$int(1))
											]));
								}
							}),
						ls);
					var _v6 = A3(
						$elm$core$List$foldl,
						F2(
							function (_v7, _v9) {
								var _v8 = _v7.a;
								var e = _v8.a;
								var f = _v8.b;
								var o = _v7.b;
								var acE = _v9.a;
								var acF = _v9.b;
								var acO = _v9.c;
								return _Utils_Tuple3(
									acE && e,
									_Utils_ap(
										acF,
										_List_fromArray(
											[f])),
									_Utils_ap(
										acO,
										_List_fromArray(
											[o])));
							}),
						_Utils_Tuple3(true, _List_Nil, _List_Nil),
						parsedSet);
					if (!_v6.a) {
						var ps = _v6.c;
						return {
							errorCode: 1,
							message: $elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'formulas',
										A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$object, ps)),
										_Utils_Tuple2(
										'option',
										$elm$json$Json$Encode$string('saveCSP'))
									])),
							result: _List_Nil
						};
					} else {
						var fs = _v6.b;
						var ps = _v6.c;
						return {
							errorCode: 0,
							message: $elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'formulas',
										A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$object, ps)),
										_Utils_Tuple2(
										'option',
										$elm$json$Json$Encode$string('saveCSP'))
									])),
							result: fs
						};
					}
				} else {
					var e = _v5.a;
					return {
						errorCode: 3,
						message: $elm$json$Json$Encode$string(
							$elm$json$Json$Decode$errorToString(e)),
						result: _List_Nil
					};
				}
			default:
				return {
					errorCode: 4,
					message: $elm$json$Json$Encode$string('undefined option for node of type CSPPL'),
					result: _List_Nil
				};
		}
	} else {
		var e = _v0.a;
		return {
			errorCode: 3,
			message: $elm$json$Json$Encode$string(
				$elm$json$Json$Decode$errorToString(e)),
			result: _List_Nil
		};
	}
};
var $author$project$LogicUS$PL$SyntaxSemantics$Insat = {$: 'Insat'};
var $author$project$LogicUS$PL$SyntaxSemantics$Conj = F2(
	function (a, b) {
		return {$: 'Conj', a: a, b: b};
	});
var $author$project$LogicUS$PL$SyntaxSemantics$Disj = F2(
	function (a, b) {
		return {$: 'Disj', a: a, b: b};
	});
var $author$project$LogicUS$PL$SyntaxSemantics$Equi = F2(
	function (a, b) {
		return {$: 'Equi', a: a, b: b};
	});
var $author$project$LogicUS$PL$SyntaxSemantics$Impl = F2(
	function (a, b) {
		return {$: 'Impl', a: a, b: b};
	});
var $author$project$LogicUS$PL$SyntaxSemantics$Taut = {$: 'Taut'};
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm_community$list_extra$List$Extra$andThen = $elm$core$List$concatMap;
var $elm_community$list_extra$List$Extra$lift2 = F3(
	function (f, la, lb) {
		return A2(
			$elm_community$list_extra$List$Extra$andThen,
			function (a) {
				return A2(
					$elm_community$list_extra$List$Extra$andThen,
					function (b) {
						return _List_fromArray(
							[
								A2(f, a, b)
							]);
					},
					lb);
			},
			la);
	});
var $elm_community$list_extra$List$Extra$cartesianProduct = function (ll) {
	if (!ll.b) {
		return _List_fromArray(
			[_List_Nil]);
	} else {
		var xs = ll.a;
		var xss = ll.b;
		return A3(
			$elm_community$list_extra$List$Extra$lift2,
			$elm$core$List$cons,
			xs,
			$elm_community$list_extra$List$Extra$cartesianProduct(xss));
	}
};
var $elm_community$maybe_extra$Maybe$Extra$combineHelp = F2(
	function (list, acc) {
		combineHelp:
		while (true) {
			if (list.b) {
				var head = list.a;
				var tail = list.b;
				if (head.$ === 'Just') {
					var a = head.a;
					var $temp$list = tail,
						$temp$acc = A2($elm$core$List$cons, a, acc);
					list = $temp$list;
					acc = $temp$acc;
					continue combineHelp;
				} else {
					return $elm$core$Maybe$Nothing;
				}
			} else {
				return $elm$core$Maybe$Just(
					$elm$core$List$reverse(acc));
			}
		}
	});
var $elm_community$maybe_extra$Maybe$Extra$combine = function (list) {
	return A2($elm_community$maybe_extra$Maybe$Extra$combineHelp, list, _List_Nil);
};
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $elm$core$Basics$modBy = _Basics_modBy;
var $author$project$LogicUS$PL$A_Expressions$evaluateAExpr = F2(
	function (expr, vals) {
		switch (expr.$) {
			case 'Number':
				var i = expr.a;
				return $elm$core$Maybe$Just(i);
			case 'Var':
				var s = expr.a;
				return A2($elm$core$Dict$get, s, vals);
			case 'Add':
				var e1 = expr.a;
				var e2 = expr.b;
				return A3(
					$elm$core$Maybe$map2,
					$elm$core$Basics$add,
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, e1, vals),
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, e2, vals));
			case 'Dif':
				var e1 = expr.a;
				var e2 = expr.b;
				return A3(
					$elm$core$Maybe$map2,
					$elm$core$Basics$sub,
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, e1, vals),
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, e2, vals));
			case 'Mul':
				var e1 = expr.a;
				var e2 = expr.b;
				return A3(
					$elm$core$Maybe$map2,
					$elm$core$Basics$mul,
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, e1, vals),
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, e2, vals));
			case 'Div':
				var e1 = expr.a;
				var e2 = expr.b;
				return A3(
					$elm$core$Maybe$map2,
					$elm$core$Basics$idiv,
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, e1, vals),
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, e2, vals));
			default:
				var e1 = expr.a;
				var e2 = expr.b;
				return A3(
					$elm$core$Maybe$map2,
					$elm$core$Basics$modBy,
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, e2, vals),
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, e1, vals));
		}
	});
var $elm$core$Basics$ge = _Utils_ge;
var $author$project$LogicUS$PL$B_Expressions$evalCond = F2(
	function (c, vals) {
		var _v0 = c.comp;
		switch (_v0.$) {
			case 'EQ':
				return A3(
					$elm$core$Maybe$map2,
					$elm$core$Basics$eq,
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, c.e1, vals),
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, c.e2, vals));
			case 'NE':
				return A3(
					$elm$core$Maybe$map2,
					$elm$core$Basics$neq,
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, c.e1, vals),
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, c.e2, vals));
			case 'GT':
				return A3(
					$elm$core$Maybe$map2,
					$elm$core$Basics$gt,
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, c.e1, vals),
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, c.e2, vals));
			case 'LT':
				return A3(
					$elm$core$Maybe$map2,
					$elm$core$Basics$lt,
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, c.e1, vals),
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, c.e2, vals));
			case 'GE':
				return A3(
					$elm$core$Maybe$map2,
					$elm$core$Basics$ge,
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, c.e1, vals),
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, c.e2, vals));
			default:
				return A3(
					$elm$core$Maybe$map2,
					$elm$core$Basics$le,
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, c.e1, vals),
					A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, c.e2, vals));
		}
	});
var $author$project$LogicUS$PL$B_Expressions$evaluateBExpr = F2(
	function (expr, vals) {
		switch (expr.$) {
			case 'T':
				return $elm$core$Maybe$Just(true);
			case 'F':
				return $elm$core$Maybe$Just(false);
			case 'And':
				var e1 = expr.a;
				var e2 = expr.b;
				return A3(
					$elm$core$Maybe$map2,
					$elm$core$Basics$and,
					A2($author$project$LogicUS$PL$B_Expressions$evaluateBExpr, e1, vals),
					A2($author$project$LogicUS$PL$B_Expressions$evaluateBExpr, e2, vals));
			case 'Or':
				var e1 = expr.a;
				var e2 = expr.b;
				return A3(
					$elm$core$Maybe$map2,
					$elm$core$Basics$or,
					A2($author$project$LogicUS$PL$B_Expressions$evaluateBExpr, e1, vals),
					A2($author$project$LogicUS$PL$B_Expressions$evaluateBExpr, e2, vals));
			case 'Not':
				var e = expr.a;
				return A2(
					$elm$core$Maybe$map,
					$elm$core$Basics$not,
					A2($author$project$LogicUS$PL$B_Expressions$evaluateBExpr, e, vals));
			default:
				var c = expr.a;
				return A2($author$project$LogicUS$PL$B_Expressions$evalCond, c, vals);
		}
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $author$project$LogicUS$PL$SyntaxSemantics$splConjunction = function (fs) {
	if (!fs.b) {
		return $author$project$LogicUS$PL$SyntaxSemantics$Taut;
	} else {
		var x = fs.a;
		var xs = fs.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (f, ac) {
					return A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, ac, f);
				}),
			x,
			xs);
	}
};
var $author$project$LogicUS$PL$SyntaxSemantics$splDisjunction = function (fs) {
	if (!fs.b) {
		return $author$project$LogicUS$PL$SyntaxSemantics$Insat;
	} else {
		var x = fs.a;
		var xs = fs.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (f, ac) {
					return A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, ac, f);
				}),
			x,
			xs);
	}
};
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm_community$list_extra$List$Extra$zip = $elm$core$List$map2($elm$core$Tuple$pair);
var $author$project$LogicUS$PL$CSP$bfplExpansionAux = F2(
	function (var_val, f) {
		switch (f.$) {
			case 'Atom':
				var p = f.a;
				var is = f.b;
				return A2(
					$elm$core$Maybe$map,
					A2(
						$elm$core$Basics$composeL,
						$author$project$LogicUS$PL$SyntaxSemantics$Atom,
						$elm$core$Tuple$pair(p)),
					$elm_community$maybe_extra$Maybe$Extra$combine(
						A2(
							$elm$core$List$map,
							function (i) {
								return A2($author$project$LogicUS$PL$A_Expressions$evaluateAExpr, i, var_val);
							},
							is)));
			case 'Neg':
				var p = f.a;
				return A2(
					$elm$core$Maybe$map,
					$author$project$LogicUS$PL$SyntaxSemantics$Neg,
					A2($author$project$LogicUS$PL$CSP$bfplExpansionAux, var_val, p));
			case 'Conj':
				var p = f.a;
				var q = f.b;
				return A3(
					$elm$core$Maybe$map2,
					$author$project$LogicUS$PL$SyntaxSemantics$Conj,
					A2($author$project$LogicUS$PL$CSP$bfplExpansionAux, var_val, p),
					A2($author$project$LogicUS$PL$CSP$bfplExpansionAux, var_val, q));
			case 'Disj':
				var p = f.a;
				var q = f.b;
				return A3(
					$elm$core$Maybe$map2,
					$author$project$LogicUS$PL$SyntaxSemantics$Disj,
					A2($author$project$LogicUS$PL$CSP$bfplExpansionAux, var_val, p),
					A2($author$project$LogicUS$PL$CSP$bfplExpansionAux, var_val, q));
			case 'Impl':
				var p = f.a;
				var q = f.b;
				return A3(
					$elm$core$Maybe$map2,
					$author$project$LogicUS$PL$SyntaxSemantics$Impl,
					A2($author$project$LogicUS$PL$CSP$bfplExpansionAux, var_val, p),
					A2($author$project$LogicUS$PL$CSP$bfplExpansionAux, var_val, q));
			case 'Equi':
				var p = f.a;
				var q = f.b;
				return A3(
					$elm$core$Maybe$map2,
					$author$project$LogicUS$PL$SyntaxSemantics$Equi,
					A2($author$project$LogicUS$PL$CSP$bfplExpansionAux, var_val, p),
					A2($author$project$LogicUS$PL$CSP$bfplExpansionAux, var_val, q));
			case 'BAnd':
				var li = f.a;
				var c = f.b;
				var p = f.c;
				var values = A2(
					$elm$core$List$map,
					function ($) {
						return $.values;
					},
					li);
				var names = A2(
					$elm$core$List$map,
					function ($) {
						return $.name;
					},
					li);
				var valid_subs = A2(
					$elm$core$List$filter,
					function (s) {
						return A2(
							$elm$core$Maybe$withDefault,
							false,
							A2($author$project$LogicUS$PL$B_Expressions$evaluateBExpr, c, s));
					},
					A2(
						$elm$core$List$map,
						function (x) {
							return A2(
								$elm$core$Dict$union,
								var_val,
								$elm$core$Dict$fromList(
									A2($elm_community$list_extra$List$Extra$zip, names, x)));
						},
						$elm_community$list_extra$List$Extra$cartesianProduct(values)));
				return A2(
					$elm$core$Maybe$map,
					$author$project$LogicUS$PL$SyntaxSemantics$splConjunction,
					$elm_community$maybe_extra$Maybe$Extra$combine(
						A2(
							$elm$core$List$map,
							function (s) {
								return A2($author$project$LogicUS$PL$CSP$bfplExpansionAux, s, p);
							},
							valid_subs)));
			case 'BOr':
				var li = f.a;
				var c = f.b;
				var p = f.c;
				var values = A2(
					$elm$core$List$map,
					function ($) {
						return $.values;
					},
					li);
				var names = A2(
					$elm$core$List$map,
					function ($) {
						return $.name;
					},
					li);
				var valid_subs = A2(
					$elm$core$List$filter,
					function (s) {
						return A2(
							$elm$core$Maybe$withDefault,
							false,
							A2($author$project$LogicUS$PL$B_Expressions$evaluateBExpr, c, s));
					},
					A2(
						$elm$core$List$map,
						function (x) {
							return A2(
								$elm$core$Dict$union,
								var_val,
								$elm$core$Dict$fromList(
									A2($elm_community$list_extra$List$Extra$zip, names, x)));
						},
						$elm_community$list_extra$List$Extra$cartesianProduct(values)));
				return A2(
					$elm$core$Maybe$map,
					$author$project$LogicUS$PL$SyntaxSemantics$splDisjunction,
					$elm_community$maybe_extra$Maybe$Extra$combine(
						A2(
							$elm$core$List$map,
							function (s) {
								return A2($author$project$LogicUS$PL$CSP$bfplExpansionAux, s, p);
							},
							valid_subs)));
			case 'Insat':
				return $elm$core$Maybe$Just($author$project$LogicUS$PL$SyntaxSemantics$Insat);
			default:
				return $elm$core$Maybe$Just($author$project$LogicUS$PL$SyntaxSemantics$Taut);
		}
	});
var $author$project$LogicUS$PL$CSP$bfplToFPL = function (f) {
	return $author$project$LogicUS$PL$CSP$isWFF(f) ? A2(
		$elm$core$Maybe$withDefault,
		$author$project$LogicUS$PL$SyntaxSemantics$Insat,
		A2($author$project$LogicUS$PL$CSP$bfplExpansionAux, $elm$core$Dict$empty, f)) : $author$project$LogicUS$PL$SyntaxSemantics$Insat;
};
var $elm$core$List$sortBy = _List_sortBy;
var $elm$core$List$sort = function (xs) {
	return A2($elm$core$List$sortBy, $elm$core$Basics$identity, xs);
};
var $author$project$LogicUS$PL$Clauses$cplSymbols = function (c) {
	return $elm$core$List$sort(
		A2($elm$core$List$map, $elm$core$Tuple$first, c));
};
var $author$project$LogicUS$PL$Clauses$csplSymbols = function (cs) {
	return $elm$core$List$sort(
		A3(
			$elm$core$List$foldl,
			F2(
				function (c, ac) {
					return A2(
						$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
						ac,
						$author$project$LogicUS$PL$Clauses$cplSymbols(c));
				}),
			_List_Nil,
			cs));
};
var $author$project$LogicUS$PL$SyntaxSemantics$fplToMathString = function (f) {
	switch (f.$) {
		case 'Atom':
			if (!f.a.b.b) {
				var _v1 = f.a;
				var pname = _v1.a;
				return pname;
			} else {
				var _v2 = f.a;
				var pname = _v2.a;
				var pindices = _v2.b;
				return pname + ('_{' + (A2(
					$elm$core$String$join,
					',',
					A2($elm$core$List$map, $elm$core$String$fromInt, pindices)) + '}'));
			}
		case 'Neg':
			var p = f.a;
			switch (p.$) {
				case 'Conj':
					return ' \\neg \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(p) + ' \\right) ');
				case 'Disj':
					return ' \\neg \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(p) + ' \\right) ');
				case 'Impl':
					return ' \\neg \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(p) + ' \\right) ');
				case 'Equi':
					return ' \\neg \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(p) + ' \\right) ');
				default:
					return ' \\neg ' + $author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(p);
			}
		case 'Conj':
			var p = f.a;
			var q = f.b;
			var rhs = function () {
				switch (q.$) {
					case 'Disj':
						return ' \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(q) + ' \\right) ');
					case 'Impl':
						return ' \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(q) + ' \\right) ');
					case 'Equi':
						return ' \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(q) + ' \\right) ');
					default:
						return $author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(q);
				}
			}();
			var lhs = function () {
				switch (p.$) {
					case 'Disj':
						return ' \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(p) + ' \\right) ');
					case 'Impl':
						return ' \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(p) + ' \\right) ');
					case 'Equi':
						return ' \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(p) + ' \\right) ');
					default:
						return $author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(p);
				}
			}();
			return lhs + (' \\wedge ' + rhs);
		case 'Disj':
			var p = f.a;
			var q = f.b;
			var rhs = function () {
				switch (q.$) {
					case 'Impl':
						return ' \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(q) + ' \\right) ');
					case 'Equi':
						return ' \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(q) + ' \\right) ');
					default:
						return $author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(q);
				}
			}();
			var lhs = function () {
				switch (p.$) {
					case 'Impl':
						return ' \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(p) + ' \\right) ');
					case 'Equi':
						return ' \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(p) + ' \\right) ');
					default:
						return $author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(p);
				}
			}();
			return lhs + (' \\vee ' + rhs);
		case 'Impl':
			var p = f.a;
			var q = f.b;
			var rhs = function () {
				if (q.$ === 'Equi') {
					return ' \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(q) + ' \\right) ');
				} else {
					return $author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(q);
				}
			}();
			var lhs = function () {
				switch (p.$) {
					case 'Impl':
						return ' \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(p) + ' \\right) ');
					case 'Equi':
						return ' \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(p) + ' \\right) ');
					default:
						return $author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(p);
				}
			}();
			return lhs + (' \\rightarrow ' + rhs);
		case 'Equi':
			var p = f.a;
			var q = f.b;
			var rhs = $author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(q);
			var lhs = function () {
				if (p.$ === 'Equi') {
					return ' \\left( ' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(p) + ' \\right) ');
				} else {
					return $author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(p);
				}
			}();
			return lhs + (' \\leftrightarrow ' + rhs);
		case 'Insat':
			return ' \\perp ';
		default:
			return ' \\top ';
	}
};
var $elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var left = dict.d;
				var right = dict.e;
				var $temp$n = A2($elm$core$Dict$sizeHelp, n + 1, right),
					$temp$dict = left;
				n = $temp$n;
				dict = $temp$dict;
				continue sizeHelp;
			}
		}
	});
var $elm$core$Dict$size = function (dict) {
	return A2($elm$core$Dict$sizeHelp, 0, dict);
};
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $author$project$LogicUS$PL$Clauses$csplToDIMACS = function (cs) {
	var symbs = $elm$core$Dict$fromList(
		A2(
			$elm$core$List$indexedMap,
			F2(
				function (i, s) {
					return _Utils_Tuple2(s, i + 1);
				}),
			$author$project$LogicUS$PL$Clauses$csplSymbols(cs)));
	var symbsStr = A2(
		$elm$core$String$join,
		', ',
		A2(
			$elm$core$List$map,
			function (_v1) {
				var k = _v1.a;
				var v = _v1.b;
				return $elm$core$String$fromInt(v) + (' : ' + $author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(
					$author$project$LogicUS$PL$SyntaxSemantics$Atom(k)));
			},
			$elm$core$Dict$toList(symbs)));
	var cplToDIMACS = function (c) {
		return A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				function (_v0) {
					var symb = _v0.a;
					var sign = _v0.b;
					var symb_id = A2(
						$elm$core$Maybe$withDefault,
						0,
						A2($elm$core$Dict$get, symb, symbs));
					return sign ? $elm$core$String$fromInt(symb_id) : $elm$core$String$fromInt(-symb_id);
				},
				c)) + ' 0';
	};
	return _Utils_Tuple2(
		'p cnf ' + ($elm$core$String$fromInt(
			$elm$core$Dict$size(symbs)) + (' ' + ($elm$core$String$fromInt(
			$elm$core$List$length(cs)) + ('\n' + (A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, cplToDIMACS, cs)) + ('\nc ' + symbsStr)))))),
		$elm$core$Dict$fromList(
			A3(
				$elm$core$List$map2,
				$elm$core$Tuple$pair,
				$elm$core$Dict$values(symbs),
				$elm$core$Dict$keys(symbs))));
};
var $author$project$LogicUS$PL$Clauses$cplSubsumes = F2(
	function (c1, c2) {
		return A2(
			$elm$core$List$all,
			function (x) {
				return A2($elm$core$List$member, x, c2);
			},
			c1);
	});
var $author$project$LogicUS$PL$Clauses$csplRemoveSubsumedClauses = function (cs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (c, ac) {
				return A2(
					$elm$core$List$any,
					function (x) {
						return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x, c);
					},
					ac) ? ac : _Utils_ap(
					A2(
						$elm$core$List$filter,
						A2(
							$elm$core$Basics$composeL,
							$elm$core$Basics$not,
							$author$project$LogicUS$PL$Clauses$cplSubsumes(c)),
						ac),
					_List_fromArray(
						[c]));
			}),
		_List_Nil,
		A2($elm$core$List$map, $author$project$LogicUS$PL$Clauses$cplSort, cs));
};
var $author$project$LogicUS$PL$Clauses$cplIsTautology = function (c) {
	return A2(
		$elm$core$List$any,
		function (_v0) {
			var psymb = _v0.a;
			var sign = _v0.b;
			return A2(
				$elm$core$List$member,
				_Utils_Tuple2(psymb, !sign),
				c);
		},
		c);
};
var $author$project$LogicUS$PL$Clauses$csplRemoveTautClauses = function (cs) {
	return A2(
		$elm$core$List$filter,
		A2($elm$core$Basics$composeL, $elm$core$Basics$not, $author$project$LogicUS$PL$Clauses$cplIsTautology),
		A2($elm$core$List$map, $author$project$LogicUS$PL$Clauses$cplSort, cs));
};
var $author$project$LogicUS$PL$Clauses$csplFromCNF = function (f) {
	var csplFromCNFAux = function (g) {
		_v0$5:
		while (true) {
			switch (g.$) {
				case 'Atom':
					var symb = g.a;
					return $elm$core$Maybe$Just(
						_List_fromArray(
							[
								_List_fromArray(
								[
									_Utils_Tuple2(symb, true)
								])
							]));
				case 'Neg':
					if (g.a.$ === 'Atom') {
						var symb = g.a.a;
						return $elm$core$Maybe$Just(
							_List_fromArray(
								[
									_List_fromArray(
									[
										_Utils_Tuple2(symb, false)
									])
								]));
					} else {
						break _v0$5;
					}
				case 'Disj':
					var g1 = g.a;
					var g2 = g.b;
					return A2(
						$elm$core$Maybe$map,
						function (c) {
							return _List_fromArray(
								[c]);
						},
						A2(
							$elm$core$Maybe$map,
							$author$project$LogicUS$PL$Clauses$cplSort,
							A3(
								$elm$core$Maybe$map2,
								$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
								A2(
									$elm$core$Maybe$map,
									$elm$core$List$concat,
									csplFromCNFAux(g1)),
								A2(
									$elm$core$Maybe$map,
									$elm$core$List$concat,
									csplFromCNFAux(g2)))));
				case 'Insat':
					return $elm$core$Maybe$Just(
						_List_fromArray(
							[_List_Nil]));
				case 'Taut':
					return $elm$core$Maybe$Just(_List_Nil);
				default:
					break _v0$5;
			}
		}
		return $elm$core$Maybe$Nothing;
	};
	_v1$6:
	while (true) {
		switch (f.$) {
			case 'Conj':
				var f1 = f.a;
				var f2 = f.b;
				return A3(
					$elm$core$Maybe$map2,
					$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
					$author$project$LogicUS$PL$Clauses$csplFromCNF(f1),
					$author$project$LogicUS$PL$Clauses$csplFromCNF(f2));
			case 'Atom':
				var symb = f.a;
				return $elm$core$Maybe$Just(
					_List_fromArray(
						[
							_List_fromArray(
							[
								_Utils_Tuple2(symb, true)
							])
						]));
			case 'Neg':
				if (f.a.$ === 'Atom') {
					var symb = f.a.a;
					return $elm$core$Maybe$Just(
						_List_fromArray(
							[
								_List_fromArray(
								[
									_Utils_Tuple2(symb, false)
								])
							]));
				} else {
					break _v1$6;
				}
			case 'Disj':
				var f1 = f.a;
				var f2 = f.b;
				return A2(
					$elm$core$Maybe$map,
					function (c) {
						return _List_fromArray(
							[c]);
					},
					A2(
						$elm$core$Maybe$map,
						$author$project$LogicUS$PL$Clauses$cplSort,
						A3(
							$elm$core$Maybe$map2,
							$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
							A2(
								$elm$core$Maybe$map,
								$elm$core$List$concat,
								csplFromCNFAux(f1)),
							A2(
								$elm$core$Maybe$map,
								$elm$core$List$concat,
								csplFromCNFAux(f2)))));
			case 'Insat':
				return $elm$core$Maybe$Just(
					_List_fromArray(
						[_List_Nil]));
			case 'Taut':
				return $elm$core$Maybe$Just(_List_Nil);
			default:
				break _v1$6;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $author$project$LogicUS$PL$NormalForms$fplInteriorizeAllDisj = function (f) {
	_v0$8:
	while (true) {
		switch (f.$) {
			case 'Atom':
				return $elm$core$Maybe$Just(f);
			case 'Conj':
				var f1 = f.a;
				var f2 = f.b;
				return A3(
					$elm$core$Maybe$map2,
					$author$project$LogicUS$PL$SyntaxSemantics$Conj,
					$author$project$LogicUS$PL$NormalForms$fplInteriorizeAllDisj(f1),
					$author$project$LogicUS$PL$NormalForms$fplInteriorizeAllDisj(f2));
			case 'Disj':
				if (f.a.$ === 'Conj') {
					var _v1 = f.a;
					var f1 = _v1.a;
					var f2 = _v1.b;
					var g = f.b;
					return $author$project$LogicUS$PL$NormalForms$fplInteriorizeAllDisj(
						A2(
							$author$project$LogicUS$PL$SyntaxSemantics$Conj,
							A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, f1, g),
							A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, f2, g)));
				} else {
					if (f.b.$ === 'Conj') {
						var g = f.a;
						var _v2 = f.b;
						var f1 = _v2.a;
						var f2 = _v2.b;
						return $author$project$LogicUS$PL$NormalForms$fplInteriorizeAllDisj(
							A2(
								$author$project$LogicUS$PL$SyntaxSemantics$Conj,
								A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, g, f1),
								A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, g, f2)));
					} else {
						var f1 = f.a;
						var f2 = f.b;
						var g2 = $author$project$LogicUS$PL$NormalForms$fplInteriorizeAllDisj(f2);
						var g1 = $author$project$LogicUS$PL$NormalForms$fplInteriorizeAllDisj(f1);
						if (g1.$ === 'Just') {
							if (g1.a.$ === 'Conj') {
								var _v4 = g1.a;
								var x1 = _v4.a;
								var y1 = _v4.b;
								if (g2.$ === 'Just') {
									if (g2.a.$ === 'Conj') {
										var _v6 = g2.a;
										var x2 = _v6.a;
										var y2 = _v6.b;
										return $author$project$LogicUS$PL$NormalForms$fplInteriorizeAllDisj(
											A2(
												$author$project$LogicUS$PL$SyntaxSemantics$Disj,
												A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, x1, y1),
												A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, x2, y2)));
									} else {
										var x2 = g2.a;
										return $author$project$LogicUS$PL$NormalForms$fplInteriorizeAllDisj(
											A2(
												$author$project$LogicUS$PL$SyntaxSemantics$Disj,
												A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, x1, y1),
												x2));
									}
								} else {
									return $elm$core$Maybe$Nothing;
								}
							} else {
								var x1 = g1.a;
								if (g2.$ === 'Just') {
									if (g2.a.$ === 'Conj') {
										var _v8 = g2.a;
										var x2 = _v8.a;
										var y2 = _v8.b;
										return $author$project$LogicUS$PL$NormalForms$fplInteriorizeAllDisj(
											A2(
												$author$project$LogicUS$PL$SyntaxSemantics$Disj,
												x1,
												A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, x2, y2)));
									} else {
										var x2 = g2.a;
										return $elm$core$Maybe$Just(
											A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, x1, x2));
									}
								} else {
									return $elm$core$Maybe$Nothing;
								}
							}
						} else {
							return $elm$core$Maybe$Nothing;
						}
					}
				}
			case 'Neg':
				if (f.a.$ === 'Atom') {
					return $elm$core$Maybe$Just(f);
				} else {
					break _v0$8;
				}
			case 'Insat':
				return $elm$core$Maybe$Just($author$project$LogicUS$PL$SyntaxSemantics$Insat);
			case 'Taut':
				return $elm$core$Maybe$Just($author$project$LogicUS$PL$SyntaxSemantics$Taut);
			default:
				break _v0$8;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $author$project$LogicUS$PL$NormalForms$fplToNNF = function (f) {
	var fplToNNFAux = function (p) {
		switch (p.$) {
			case 'Atom':
				var x = p.a;
				return $author$project$LogicUS$PL$SyntaxSemantics$Neg(
					$author$project$LogicUS$PL$SyntaxSemantics$Atom(x));
			case 'Neg':
				var x = p.a;
				return $author$project$LogicUS$PL$NormalForms$fplToNNF(x);
			case 'Conj':
				var x = p.a;
				var y = p.b;
				return A2(
					$author$project$LogicUS$PL$SyntaxSemantics$Disj,
					fplToNNFAux(x),
					fplToNNFAux(y));
			case 'Disj':
				var x = p.a;
				var y = p.b;
				return A2(
					$author$project$LogicUS$PL$SyntaxSemantics$Conj,
					fplToNNFAux(x),
					fplToNNFAux(y));
			case 'Impl':
				var x = p.a;
				var y = p.b;
				return A2(
					$author$project$LogicUS$PL$SyntaxSemantics$Conj,
					$author$project$LogicUS$PL$NormalForms$fplToNNF(x),
					fplToNNFAux(y));
			case 'Equi':
				var x = p.a;
				var y = p.b;
				return A2(
					$author$project$LogicUS$PL$SyntaxSemantics$Disj,
					A2(
						$author$project$LogicUS$PL$SyntaxSemantics$Conj,
						$author$project$LogicUS$PL$NormalForms$fplToNNF(x),
						fplToNNFAux(y)),
					A2(
						$author$project$LogicUS$PL$SyntaxSemantics$Conj,
						fplToNNFAux(x),
						$author$project$LogicUS$PL$NormalForms$fplToNNF(y)));
			case 'Insat':
				return $author$project$LogicUS$PL$SyntaxSemantics$Taut;
			default:
				return $author$project$LogicUS$PL$SyntaxSemantics$Insat;
		}
	};
	switch (f.$) {
		case 'Atom':
			var x = f.a;
			return $author$project$LogicUS$PL$SyntaxSemantics$Atom(x);
		case 'Neg':
			var x = f.a;
			return fplToNNFAux(x);
		case 'Conj':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Conj,
				$author$project$LogicUS$PL$NormalForms$fplToNNF(x),
				$author$project$LogicUS$PL$NormalForms$fplToNNF(y));
		case 'Disj':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Disj,
				$author$project$LogicUS$PL$NormalForms$fplToNNF(x),
				$author$project$LogicUS$PL$NormalForms$fplToNNF(y));
		case 'Impl':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Disj,
				fplToNNFAux(x),
				$author$project$LogicUS$PL$NormalForms$fplToNNF(y));
		case 'Equi':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Conj,
				A2(
					$author$project$LogicUS$PL$SyntaxSemantics$Disj,
					fplToNNFAux(x),
					$author$project$LogicUS$PL$NormalForms$fplToNNF(y)),
				A2(
					$author$project$LogicUS$PL$SyntaxSemantics$Disj,
					fplToNNFAux(y),
					$author$project$LogicUS$PL$NormalForms$fplToNNF(x)));
		case 'Insat':
			return $author$project$LogicUS$PL$SyntaxSemantics$Insat;
		default:
			return $author$project$LogicUS$PL$SyntaxSemantics$Taut;
	}
};
var $author$project$LogicUS$PL$NormalForms$fplToCNF = function (f) {
	return A2(
		$elm$core$Maybe$withDefault,
		$author$project$LogicUS$PL$SyntaxSemantics$Insat,
		$author$project$LogicUS$PL$NormalForms$fplInteriorizeAllDisj(
			$author$project$LogicUS$PL$NormalForms$fplToNNF(f)));
};
var $author$project$LogicUS$PL$Clauses$fplToClauses = function (f) {
	return $author$project$LogicUS$PL$Clauses$csplRemoveTautClauses(
		$author$project$LogicUS$PL$Clauses$csplRemoveSubsumedClauses(
			A2(
				$elm$core$Maybe$withDefault,
				_List_fromArray(
					[_List_Nil]),
				$author$project$LogicUS$PL$Clauses$csplFromCNF(
					$author$project$LogicUS$PL$NormalForms$fplToCNF(f)))));
};
var $author$project$LogicUS$PL$Clauses$splToClauses = function (fs) {
	return $author$project$LogicUS$PL$Clauses$csplRemoveTautClauses(
		$author$project$LogicUS$PL$Clauses$csplRemoveSubsumedClauses(
			$elm$core$List$concat(
				A2($elm$core$List$map, $author$project$LogicUS$PL$Clauses$fplToClauses, fs))));
};
var $author$project$PLBasicProcessors$processCSPPLToDIMACS = F2(
	function (input, outputsCSPPL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var _v0 = A2($elm$json$Json$Decode$decodeString, inputDecoder, input);
		if (_v0.$ === 'Ok') {
			var source = _v0.a;
			var _v1 = A2(
				$elm$core$Dict$get,
				_Utils_Tuple2(source.origin_id, source.origin_slot),
				outputsCSPPL);
			if (_v1.$ === 'Just') {
				var cs = _v1.a;
				return {
					errorCode: 0,
					message: function (_v2) {
						var cont = _v2.a;
						var dvars = _v2.b;
						return $elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'content',
									$elm$json$Json$Encode$string(cont)),
									_Utils_Tuple2(
									'dvars',
									$elm$json$Json$Encode$object(
										A2(
											$elm$core$List$map,
											function (_v3) {
												var k = _v3.a;
												var v = _v3.b;
												return _Utils_Tuple2(
													$elm$core$String$fromInt(k),
													$elm$json$Json$Encode$string(
														$author$project$LogicUS$PL$SyntaxSemantics$fplToMathString(
															$author$project$LogicUS$PL$SyntaxSemantics$Atom(v))));
											},
											$elm$core$Dict$toList(dvars))))
								]));
					}(
						$author$project$LogicUS$PL$Clauses$csplToDIMACS(
							$author$project$LogicUS$PL$Clauses$splToClauses(
								A2($elm$core$List$map, $author$project$LogicUS$PL$CSP$bfplToFPL, cs))))
				};
			} else {
				return {
					errorCode: 2,
					message: $elm$json$Json$Encode$string(
						'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')'))))
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e))
			};
		}
	});
var $author$project$LogicUS$FOL$Clauses$Eq = F2(
	function (a, b) {
		return {$: 'Eq', a: a, b: b};
	});
var $author$project$LogicUS$FOL$Clauses$P = F2(
	function (a, b) {
		return {$: 'P', a: a, b: b};
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$Func = F2(
	function (a, b) {
		return {$: 'Func', a: a, b: b};
	});
var $author$project$LogicUS$FOL$Clauses$folFuncNameParser = $elm$parser$Parser$getChompedString(
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(_Utils_Tuple0),
			$elm$parser$Parser$chompIf($elm$core$Char$isLower)),
		$elm$parser$Parser$chompWhile($elm$core$Char$isAlpha)));
var $author$project$LogicUS$FOL$Clauses$folFuncIdentifierSubindexedParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($elm$core$Tuple$pair),
		$author$project$LogicUS$FOL$Clauses$folFuncNameParser),
	$elm$parser$Parser$sequence(
		{end: '}', item: $elm$parser$Parser$int, separator: ',', spaces: $elm$parser$Parser$spaces, start: '_{', trailing: $elm$parser$Parser$Forbidden}));
var $author$project$LogicUS$FOL$Clauses$folFuncIdentifierParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$backtrackable($author$project$LogicUS$FOL$Clauses$folFuncIdentifierSubindexedParser)),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				function (x) {
					return _Utils_Tuple2(x, _List_Nil);
				}),
			$author$project$LogicUS$FOL$Clauses$folFuncNameParser)
		]));
var $author$project$LogicUS$FOL$Clauses$folVarNameParser = $elm$parser$Parser$getChompedString(
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(_Utils_Tuple0),
			$elm$parser$Parser$chompIf($elm$core$Char$isUpper)),
		$elm$parser$Parser$chompWhile($elm$core$Char$isAlpha)));
var $author$project$LogicUS$FOL$Clauses$folVarSubSuperIndexedParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				F3(
					function (x, y, z) {
						return _Utils_Tuple3(x, y, z);
					})),
			$author$project$LogicUS$FOL$Clauses$folVarNameParser),
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$sequence(
				{end: '}', item: $elm$parser$Parser$int, separator: ',', spaces: $elm$parser$Parser$spaces, start: '_{', trailing: $elm$parser$Parser$Forbidden}),
			$elm$parser$Parser$symbol('^{'))),
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$int,
		$elm$parser$Parser$symbol('}')));
var $author$project$LogicUS$FOL$Clauses$folVarSubindexedParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed(
			F2(
				function (x, y) {
					return _Utils_Tuple3(x, y, 0);
				})),
		$author$project$LogicUS$FOL$Clauses$folVarNameParser),
	$elm$parser$Parser$sequence(
		{end: '}', item: $elm$parser$Parser$int, separator: ',', spaces: $elm$parser$Parser$spaces, start: '_{', trailing: $elm$parser$Parser$Forbidden}));
var $author$project$LogicUS$FOL$Clauses$folVarSupindexedParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed(
			F2(
				function (x, y) {
					return _Utils_Tuple3(x, _List_Nil, y);
				})),
		A2(
			$elm$parser$Parser$ignorer,
			$author$project$LogicUS$FOL$Clauses$folVarNameParser,
			$elm$parser$Parser$symbol('^{'))),
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$int,
		$elm$parser$Parser$symbol('}')));
var $author$project$LogicUS$FOL$Clauses$folVariableParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$backtrackable($author$project$LogicUS$FOL$Clauses$folVarSubSuperIndexedParser)),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$backtrackable($author$project$LogicUS$FOL$Clauses$folVarSubindexedParser)),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$backtrackable($author$project$LogicUS$FOL$Clauses$folVarSupindexedParser)),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				function (x) {
					return _Utils_Tuple3(x, _List_Nil, 0);
				}),
			$author$project$LogicUS$FOL$Clauses$folVarNameParser)
		]));
var $author$project$LogicUS$FOL$Clauses$folEnumerationTermParserAux = F2(
	function (ts, t) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$andThen,
					function (newt) {
						return A2(
							$author$project$LogicUS$FOL$Clauses$folEnumerationTermParserAux,
							_Utils_ap(
								ts,
								_List_fromArray(
									[newt])),
							t);
					},
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed($elm$core$Basics$identity),
							$elm$parser$Parser$symbol(',')),
						$author$project$LogicUS$FOL$Clauses$cyclic$folTermParser())),
					$elm$parser$Parser$lazy(
					function (_v1) {
						return $elm$parser$Parser$succeed(
							A2($elm$core$List$cons, t, ts));
					})
				]));
	});
function $author$project$LogicUS$FOL$Clauses$cyclic$folEnumerationTermParser() {
	return A2(
		$elm$parser$Parser$andThen,
		$author$project$LogicUS$FOL$Clauses$folEnumerationTermParserAux(_List_Nil),
		$author$project$LogicUS$FOL$Clauses$cyclic$folTermParser());
}
function $author$project$LogicUS$FOL$Clauses$cyclic$folTermParser() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$Func),
					$author$project$LogicUS$FOL$Clauses$folFuncIdentifierParser),
				$author$project$LogicUS$FOL$Clauses$cyclic$folListTermParser()),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$Var),
				$author$project$LogicUS$FOL$Clauses$folVariableParser)
			]));
}
function $author$project$LogicUS$FOL$Clauses$cyclic$folListTermParser() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$symbol('(')),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$lazy(
						function (_v0) {
							return $author$project$LogicUS$FOL$Clauses$cyclic$folEnumerationTermParser();
						}),
					$elm$parser$Parser$symbol(')'))),
				$elm$parser$Parser$succeed(_List_Nil)
			]));
}
try {
	var $author$project$LogicUS$FOL$Clauses$folEnumerationTermParser = $author$project$LogicUS$FOL$Clauses$cyclic$folEnumerationTermParser();
	$author$project$LogicUS$FOL$Clauses$cyclic$folEnumerationTermParser = function () {
		return $author$project$LogicUS$FOL$Clauses$folEnumerationTermParser;
	};
	var $author$project$LogicUS$FOL$Clauses$folTermParser = $author$project$LogicUS$FOL$Clauses$cyclic$folTermParser();
	$author$project$LogicUS$FOL$Clauses$cyclic$folTermParser = function () {
		return $author$project$LogicUS$FOL$Clauses$folTermParser;
	};
	var $author$project$LogicUS$FOL$Clauses$folListTermParser = $author$project$LogicUS$FOL$Clauses$cyclic$folListTermParser();
	$author$project$LogicUS$FOL$Clauses$cyclic$folListTermParser = function () {
		return $author$project$LogicUS$FOL$Clauses$folListTermParser;
	};
} catch ($) {
	throw 'Some top-level definitions from `LogicUS.FOL.Clauses` are causing infinite recursion:\n\n  ┌─────┐\n  │    folEnumerationTermParser\n  │     ↓\n  │    folEnumerationTermParserAux\n  │     ↓\n  │    folTermParser\n  │     ↓\n  │    folListTermParser\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $author$project$LogicUS$FOL$Clauses$folPredNameParser = $elm$parser$Parser$getChompedString(
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(_Utils_Tuple0),
			$elm$parser$Parser$chompIf($elm$core$Char$isUpper)),
		$elm$parser$Parser$chompWhile($elm$core$Char$isAlpha)));
var $author$project$LogicUS$FOL$Clauses$folPredIdentifierSubindexedParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($elm$core$Tuple$pair),
		$author$project$LogicUS$FOL$Clauses$folPredNameParser),
	$elm$parser$Parser$sequence(
		{end: '}', item: $elm$parser$Parser$int, separator: ',', spaces: $elm$parser$Parser$spaces, start: '_{', trailing: $elm$parser$Parser$Forbidden}));
var $author$project$LogicUS$FOL$Clauses$folPredIdentifierParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$backtrackable($author$project$LogicUS$FOL$Clauses$folPredIdentifierSubindexedParser)),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				function (x) {
					return _Utils_Tuple2(x, _List_Nil);
				}),
			$author$project$LogicUS$FOL$Clauses$folPredNameParser)
		]));
var $author$project$LogicUS$FOL$Clauses$literalParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						F2(
							function (t1, t2) {
								return _Utils_Tuple2(
									A2($author$project$LogicUS$FOL$Clauses$Eq, t1, t2),
									false);
							})),
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								$elm$parser$Parser$symbol('¬('),
								$elm$parser$Parser$symbol('-(')
							]))),
				A2(
					$elm$parser$Parser$ignorer,
					$author$project$LogicUS$FOL$Clauses$folTermParser,
					$elm$parser$Parser$symbol('='))),
			A2(
				$elm$parser$Parser$ignorer,
				$author$project$LogicUS$FOL$Clauses$folTermParser,
				$elm$parser$Parser$symbol(')'))),
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						F2(
							function (x, ts) {
								return _Utils_Tuple2(
									A2($author$project$LogicUS$FOL$Clauses$P, x, ts),
									false);
							})),
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								$elm$parser$Parser$symbol('¬'),
								$elm$parser$Parser$symbol('-')
							]))),
				$author$project$LogicUS$FOL$Clauses$folPredIdentifierParser),
			$author$project$LogicUS$FOL$Clauses$folListTermParser),
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					F2(
						function (x, ts) {
							return _Utils_Tuple2(
								A2($author$project$LogicUS$FOL$Clauses$P, x, ts),
								true);
						})),
				$author$project$LogicUS$FOL$Clauses$folPredIdentifierParser),
			$author$project$LogicUS$FOL$Clauses$folListTermParser),
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					F2(
						function (t1, t2) {
							return _Utils_Tuple2(
								A2($author$project$LogicUS$FOL$Clauses$Eq, t1, t2),
								true);
						})),
				A2(
					$elm$parser$Parser$ignorer,
					$author$project$LogicUS$FOL$Clauses$folTermParser,
					$elm$parser$Parser$symbol('='))),
			$author$project$LogicUS$FOL$Clauses$folTermParser)
		]));
var $author$project$LogicUS$FOL$Clauses$cfolParserAux = $elm$parser$Parser$sequence(
	{end: '}', item: $author$project$LogicUS$FOL$Clauses$literalParser, separator: ',', spaces: $elm$parser$Parser$spaces, start: '{', trailing: $elm$parser$Parser$Optional});
var $elm$parser$Parser$ExpectingEnd = {$: 'ExpectingEnd'};
var $elm$parser$Parser$Advanced$end = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return _Utils_eq(
				$elm$core$String$length(s.src),
				s.offset) ? A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s) : A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $author$project$LogicUS$FOL$Clauses$cfolParser = A2(
	$elm$parser$Parser$keeper,
	$elm$parser$Parser$succeed($elm$core$Basics$identity),
	A2($elm$parser$Parser$ignorer, $author$project$LogicUS$FOL$Clauses$cfolParserAux, $elm$parser$Parser$end));
var $author$project$LogicUS$FOL$Clauses$compareClauseFOLAtoms = F2(
	function (a1, a2) {
		if (a1.$ === 'P') {
			var _v1 = a1.a;
			var s1 = _v1.a;
			var is1 = _v1.b;
			if (a2.$ === 'P') {
				var _v3 = a2.a;
				var s2 = _v3.a;
				var is2 = _v3.b;
				var _v4 = A2($elm$core$Basics$compare, s1, s2);
				switch (_v4.$) {
					case 'LT':
						return $elm$core$Basics$LT;
					case 'GT':
						return $elm$core$Basics$GT;
					default:
						return A2($elm$core$Basics$compare, is1, is2);
				}
			} else {
				return $elm$core$Basics$LT;
			}
		} else {
			if (a2.$ === 'P') {
				return $elm$core$Basics$GT;
			} else {
				return $elm$core$Basics$EQ;
			}
		}
	});
var $author$project$LogicUS$FOL$Clauses$compareClauseFOLLiterals = F2(
	function (_v0, _v1) {
		var a1 = _v0.a;
		var sign1 = _v0.b;
		var a2 = _v1.a;
		var sign2 = _v1.b;
		return sign1 ? (sign2 ? A2($author$project$LogicUS$FOL$Clauses$compareClauseFOLAtoms, a1, a2) : $elm$core$Basics$LT) : (sign2 ? $elm$core$Basics$GT : A2($author$project$LogicUS$FOL$Clauses$compareClauseFOLAtoms, a1, a2));
	});
var $author$project$LogicUS$FOL$Clauses$cfolSort = function (cs) {
	return A2($elm$core$List$sortWith, $author$project$LogicUS$FOL$Clauses$compareClauseFOLLiterals, cs);
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: false, multiline: false},
		string);
};
var $elm$regex$Regex$never = _Regex_never;
var $elm_community$string_extra$String$Extra$regexFromString = A2(
	$elm$core$Basics$composeR,
	$elm$regex$Regex$fromString,
	$elm$core$Maybe$withDefault($elm$regex$Regex$never));
var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var $elm$core$String$trim = _String_trim;
var $elm_community$string_extra$String$Extra$clean = function (string) {
	return $elm$core$String$trim(
		A3(
			$elm$regex$Regex$replace,
			$elm_community$string_extra$String$Extra$regexFromString('\\s\\s+'),
			$elm$core$Basics$always(' '),
			string));
};
var $author$project$LogicUS$FOL$AuxiliarFuctions$cleanSpaces = function (x) {
	return A2(
		$elm$core$String$join,
		'',
		A2(
			$elm$core$String$split,
			' ',
			$elm_community$string_extra$String$Extra$clean(x)));
};
var $author$project$LogicUS$FOL$Clauses$cfolReadFromString = function (x) {
	var clean_x = $author$project$LogicUS$FOL$AuxiliarFuctions$cleanSpaces(x);
	var _v0 = A2($elm$core$String$left, 1, clean_x);
	switch (_v0) {
		case '':
			return _Utils_Tuple3($elm$core$Maybe$Nothing, '', 'Argument is empty');
		case '{':
			var _v1 = A2($elm$parser$Parser$run, $author$project$LogicUS$FOL$Clauses$cfolParser, clean_x);
			if (_v1.$ === 'Ok') {
				var y = _v1.a;
				return _Utils_Tuple3(
					A2($elm$core$Basics$composeL, $elm$core$Maybe$Just, $author$project$LogicUS$FOL$Clauses$cfolSort)(y),
					'',
					'');
			} else {
				var y = _v1.a;
				return _Utils_Tuple3(
					$elm$core$Maybe$Nothing,
					clean_x,
					'Error: ' + A3(
						$elm$core$String$replace,
						'\"',
						'\'',
						$elm$core$Debug$toString(y)));
			}
		default:
			var _v2 = A2($elm$parser$Parser$run, $author$project$LogicUS$FOL$Clauses$cfolParser, '{' + (clean_x + '}'));
			if (_v2.$ === 'Ok') {
				var y = _v2.a;
				return _Utils_Tuple3(
					$elm$core$Maybe$Just(y),
					'',
					'');
			} else {
				var y = _v2.a;
				return _Utils_Tuple3(
					$elm$core$Maybe$Nothing,
					'{' + (clean_x + '}'),
					'Error: ' + A3(
						$elm$core$String$replace,
						'\"',
						'\'',
						$elm$core$Debug$toString(y)));
			}
	}
};
var $author$project$LogicUS$FOL$SyntaxSemantics$Equal = F2(
	function (a, b) {
		return {$: 'Equal', a: a, b: b};
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$Neg = function (a) {
	return {$: 'Neg', a: a};
};
var $author$project$LogicUS$FOL$SyntaxSemantics$Pred = F2(
	function (a, b) {
		return {$: 'Pred', a: a, b: b};
	});
var $author$project$LogicUS$FOL$Clauses$clauseFOLLitToLiteral = function (_v0) {
	var a = _v0.a;
	var sign = _v0.b;
	if (a.$ === 'P') {
		var p = a.a;
		var ts = a.b;
		return sign ? A2($author$project$LogicUS$FOL$SyntaxSemantics$Pred, p, ts) : $author$project$LogicUS$FOL$SyntaxSemantics$Neg(
			A2($author$project$LogicUS$FOL$SyntaxSemantics$Pred, p, ts));
	} else {
		var t1 = a.a;
		var t2 = a.b;
		return sign ? A2($author$project$LogicUS$FOL$SyntaxSemantics$Equal, t1, t2) : $author$project$LogicUS$FOL$SyntaxSemantics$Neg(
			A2($author$project$LogicUS$FOL$SyntaxSemantics$Equal, t1, t2));
	}
};
var $author$project$LogicUS$FOL$Clauses$cfolToString = function (c) {
	return $elm$core$List$isEmpty(c) ? '□' : ('{' + (A2(
		$elm$core$String$join,
		',',
		A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $author$project$LogicUS$FOL$SyntaxSemantics$ffolToString, $author$project$LogicUS$FOL$Clauses$clauseFOLLitToLiteral),
			$author$project$LogicUS$FOL$Clauses$cfolSort(c))) + '}'));
};
var $author$project$FOLBasicProcessors$processClauseFOLNode = function (content) {
	var _v0 = $author$project$LogicUS$FOL$Clauses$cfolReadFromString(content);
	if (_v0.a.$ === 'Nothing') {
		var _v1 = _v0.a;
		var errDetails = _v0.c;
		return {
			errorCode: 1,
			message: $elm$json$Json$Encode$string(errDetails),
			result: _List_Nil
		};
	} else {
		var c = _v0.a.a;
		return {
			errorCode: 0,
			message: $elm$json$Json$Encode$string(
				$author$project$LogicUS$FOL$Clauses$cfolToString(c)),
			result: c
		};
	}
};
var $author$project$LogicUS$PL$AuxiliarFunctions$cleanSpaces = function (x) {
	return A2(
		$elm$core$String$join,
		'',
		A2(
			$elm$core$String$split,
			' ',
			$elm_community$string_extra$String$Extra$clean(x)));
};
var $author$project$LogicUS$PL$Clauses$plVarNameParser = $elm$parser$Parser$getChompedString(
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(_Utils_Tuple0),
			$elm$parser$Parser$chompIf($elm$core$Char$isLower)),
		$elm$parser$Parser$chompWhile($elm$core$Char$isLower)));
var $author$project$LogicUS$PL$Clauses$plVarIdentifierSubindexedParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($elm$core$Tuple$pair),
		$author$project$LogicUS$PL$Clauses$plVarNameParser),
	$elm$parser$Parser$sequence(
		{end: '}', item: $elm$parser$Parser$int, separator: ',', spaces: $elm$parser$Parser$spaces, start: '_{', trailing: $elm$parser$Parser$Forbidden}));
var $author$project$LogicUS$PL$Clauses$plVarParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$backtrackable($author$project$LogicUS$PL$Clauses$plVarIdentifierSubindexedParser)),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				function (x) {
					return _Utils_Tuple2(x, _List_Nil);
				}),
			$author$project$LogicUS$PL$Clauses$plVarNameParser)
		]));
var $author$project$LogicUS$PL$Clauses$literalParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed(
					function (x) {
						return _Utils_Tuple2(x, false);
					}),
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							$elm$parser$Parser$symbol('¬'),
							$elm$parser$Parser$symbol('-')
						]))),
			$author$project$LogicUS$PL$Clauses$plVarParser),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				function (x) {
					return _Utils_Tuple2(x, true);
				}),
			$author$project$LogicUS$PL$Clauses$plVarParser)
		]));
var $author$project$LogicUS$PL$Clauses$cplParserAux = $elm$parser$Parser$sequence(
	{end: '}', item: $author$project$LogicUS$PL$Clauses$literalParser, separator: ',', spaces: $elm$parser$Parser$spaces, start: '{', trailing: $elm$parser$Parser$Optional});
var $author$project$LogicUS$PL$Clauses$cplParser = A2(
	$elm$parser$Parser$keeper,
	$elm$parser$Parser$succeed($elm$core$Basics$identity),
	A2($elm$parser$Parser$ignorer, $author$project$LogicUS$PL$Clauses$cplParserAux, $elm$parser$Parser$end));
var $author$project$LogicUS$PL$Clauses$cplReadFromString = function (x) {
	var clean_x = $author$project$LogicUS$PL$AuxiliarFunctions$cleanSpaces(x);
	var _v0 = A2($elm$core$String$left, 1, clean_x);
	switch (_v0) {
		case '':
			return _Utils_Tuple3($elm$core$Maybe$Nothing, '', 'Argument is empty');
		case '{':
			var _v1 = A2($elm$parser$Parser$run, $author$project$LogicUS$PL$Clauses$cplParser, clean_x);
			if (_v1.$ === 'Ok') {
				var y = _v1.a;
				return _Utils_Tuple3(
					A2($elm$core$Basics$composeL, $elm$core$Maybe$Just, $author$project$LogicUS$PL$Clauses$cplSort)(y),
					'',
					'');
			} else {
				var y = _v1.a;
				return _Utils_Tuple3(
					$elm$core$Maybe$Nothing,
					clean_x,
					'Error: ' + A3(
						$elm$core$String$replace,
						'\"',
						'\'',
						$elm$core$Debug$toString(y)));
			}
		default:
			var _v2 = A2($elm$parser$Parser$run, $author$project$LogicUS$PL$Clauses$cplParser, '{' + (clean_x + '}'));
			if (_v2.$ === 'Ok') {
				var y = _v2.a;
				return _Utils_Tuple3(
					$elm$core$Maybe$Just(y),
					'',
					'');
			} else {
				var y = _v2.a;
				return _Utils_Tuple3(
					$elm$core$Maybe$Nothing,
					'{' + (clean_x + '}'),
					'Error: ' + A3(
						$elm$core$String$replace,
						'\"',
						'\'',
						$elm$core$Debug$toString(y)));
			}
	}
};
var $author$project$PLBasicProcessors$processClausePLNode = function (content) {
	var _v0 = $author$project$LogicUS$PL$Clauses$cplReadFromString(content);
	if (_v0.a.$ === 'Nothing') {
		var _v1 = _v0.a;
		var errDetails = _v0.c;
		return {
			errorCode: 1,
			message: $elm$json$Json$Encode$string(errDetails),
			result: _List_Nil
		};
	} else {
		var c = _v0.a.a;
		return {
			errorCode: 0,
			message: $elm$json$Json$Encode$string(
				$author$project$LogicUS$PL$Clauses$cplToString(c)),
			result: c
		};
	}
};
var $author$project$LogicUS$FOL$AuxiliarFuctions$uniqueConcatList = F2(
	function (xs, ys) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (x, ac) {
					return A2($elm$core$List$member, x, ac) ? ac : _Utils_ap(
						ac,
						_List_fromArray(
							[x]));
				}),
			xs,
			ys);
	});
var $author$project$LogicUS$FOL$Clauses$csfolFromCNF = function (f) {
	var csfolFromCNFAux = function (g) {
		_v0$7:
		while (true) {
			switch (g.$) {
				case 'Pred':
					var p = g.a;
					var ts = g.b;
					return $elm$core$Maybe$Just(
						_List_fromArray(
							[
								_List_fromArray(
								[
									_Utils_Tuple2(
									A2($author$project$LogicUS$FOL$Clauses$P, p, ts),
									true)
								])
							]));
				case 'Equal':
					var t1 = g.a;
					var t2 = g.b;
					return $elm$core$Maybe$Just(
						_List_fromArray(
							[
								_List_fromArray(
								[
									_Utils_Tuple2(
									A2($author$project$LogicUS$FOL$Clauses$Eq, t1, t2),
									true)
								])
							]));
				case 'Neg':
					switch (g.a.$) {
						case 'Pred':
							var _v1 = g.a;
							var p = _v1.a;
							var ts = _v1.b;
							return $elm$core$Maybe$Just(
								_List_fromArray(
									[
										_List_fromArray(
										[
											_Utils_Tuple2(
											A2($author$project$LogicUS$FOL$Clauses$P, p, ts),
											false)
										])
									]));
						case 'Equal':
							var _v2 = g.a;
							var t1 = _v2.a;
							var t2 = _v2.b;
							return $elm$core$Maybe$Just(
								_List_fromArray(
									[
										_List_fromArray(
										[
											_Utils_Tuple2(
											A2($author$project$LogicUS$FOL$Clauses$Eq, t1, t2),
											false)
										])
									]));
						default:
							break _v0$7;
					}
				case 'Disj':
					var g1 = g.a;
					var g2 = g.b;
					return A2(
						$elm$core$Maybe$map,
						function (c) {
							return _List_fromArray(
								[c]);
						},
						A2(
							$elm$core$Maybe$map,
							$author$project$LogicUS$FOL$Clauses$cfolSort,
							A3(
								$elm$core$Maybe$map2,
								$author$project$LogicUS$FOL$AuxiliarFuctions$uniqueConcatList,
								A2(
									$elm$core$Maybe$map,
									$elm$core$List$concat,
									csfolFromCNFAux(g1)),
								A2(
									$elm$core$Maybe$map,
									$elm$core$List$concat,
									csfolFromCNFAux(g2)))));
				case 'Insat':
					return $elm$core$Maybe$Just(
						_List_fromArray(
							[_List_Nil]));
				case 'Taut':
					return $elm$core$Maybe$Just(_List_Nil);
				default:
					break _v0$7;
			}
		}
		return $elm$core$Maybe$Nothing;
	};
	_v3$8:
	while (true) {
		switch (f.$) {
			case 'Conj':
				var f1 = f.a;
				var f2 = f.b;
				return A3(
					$elm$core$Maybe$map2,
					$author$project$LogicUS$FOL$AuxiliarFuctions$uniqueConcatList,
					$author$project$LogicUS$FOL$Clauses$csfolFromCNF(f1),
					$author$project$LogicUS$FOL$Clauses$csfolFromCNF(f2));
			case 'Pred':
				var p = f.a;
				var ts = f.b;
				return $elm$core$Maybe$Just(
					_List_fromArray(
						[
							_List_fromArray(
							[
								_Utils_Tuple2(
								A2($author$project$LogicUS$FOL$Clauses$P, p, ts),
								true)
							])
						]));
			case 'Equal':
				var t1 = f.a;
				var t2 = f.b;
				return $elm$core$Maybe$Just(
					_List_fromArray(
						[
							_List_fromArray(
							[
								_Utils_Tuple2(
								A2($author$project$LogicUS$FOL$Clauses$Eq, t1, t2),
								true)
							])
						]));
			case 'Neg':
				switch (f.a.$) {
					case 'Pred':
						var _v4 = f.a;
						var p = _v4.a;
						var ts = _v4.b;
						return $elm$core$Maybe$Just(
							_List_fromArray(
								[
									_List_fromArray(
									[
										_Utils_Tuple2(
										A2($author$project$LogicUS$FOL$Clauses$P, p, ts),
										false)
									])
								]));
					case 'Equal':
						var _v5 = f.a;
						var t1 = _v5.a;
						var t2 = _v5.b;
						return $elm$core$Maybe$Just(
							_List_fromArray(
								[
									_List_fromArray(
									[
										_Utils_Tuple2(
										A2($author$project$LogicUS$FOL$Clauses$Eq, t1, t2),
										false)
									])
								]));
					default:
						break _v3$8;
				}
			case 'Disj':
				var f1 = f.a;
				var f2 = f.b;
				return A2(
					$elm$core$Maybe$map,
					function (c) {
						return _List_fromArray(
							[c]);
					},
					A2(
						$elm$core$Maybe$map,
						$author$project$LogicUS$FOL$Clauses$cfolSort,
						A3(
							$elm$core$Maybe$map2,
							$author$project$LogicUS$FOL$AuxiliarFuctions$uniqueConcatList,
							A2(
								$elm$core$Maybe$map,
								$elm$core$List$concat,
								csfolFromCNFAux(f1)),
							A2(
								$elm$core$Maybe$map,
								$elm$core$List$concat,
								csfolFromCNFAux(f2)))));
			case 'Insat':
				return $elm$core$Maybe$Just(
					_List_fromArray(
						[_List_Nil]));
			case 'Taut':
				return $elm$core$Maybe$Just(_List_Nil);
			default:
				break _v3$8;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $author$project$LogicUS$FOL$Clauses$cfolSubsumes = F2(
	function (c1, c2) {
		return A2(
			$elm$core$List$all,
			function (x) {
				return A2($elm$core$List$member, x, c2);
			},
			c1);
	});
var $author$project$LogicUS$FOL$Clauses$csfolRemoveSubsumedClauses = function (cs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (c, ac) {
				return A2(
					$elm$core$List$any,
					function (x) {
						return A2($author$project$LogicUS$FOL$Clauses$cfolSubsumes, x, c);
					},
					ac) ? ac : _Utils_ap(
					A2(
						$elm$core$List$filter,
						A2(
							$elm$core$Basics$composeL,
							$elm$core$Basics$not,
							$author$project$LogicUS$FOL$Clauses$cfolSubsumes(c)),
						ac),
					_List_fromArray(
						[c]));
			}),
		_List_Nil,
		A2($elm$core$List$map, $author$project$LogicUS$FOL$Clauses$cfolSort, cs));
};
var $author$project$LogicUS$FOL$Clauses$cfolIsTautology = function (c) {
	return A2(
		$elm$core$List$any,
		function (_v0) {
			var a = _v0.a;
			var sign = _v0.b;
			return A2(
				$elm$core$List$member,
				_Utils_Tuple2(a, !sign),
				c);
		},
		c);
};
var $author$project$LogicUS$FOL$Clauses$csfolRemoveTautClauses = function (cs) {
	return A2(
		$elm$core$List$filter,
		A2($elm$core$Basics$composeL, $elm$core$Basics$not, $author$project$LogicUS$FOL$Clauses$cfolIsTautology),
		A2($elm$core$List$map, $author$project$LogicUS$FOL$Clauses$cfolSort, cs));
};
var $author$project$LogicUS$FOL$Clauses$csfolToString = function (cs) {
	return '{' + (A2(
		$elm$core$String$join,
		',',
		A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $author$project$LogicUS$FOL$Clauses$cfolToString, $author$project$LogicUS$FOL$Clauses$cfolSort),
			cs)) + '}');
};
var $elm_community$maybe_extra$Maybe$Extra$isNothing = function (m) {
	if (m.$ === 'Nothing') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$LogicUS$FOL$SyntaxSemantics$Conj = F2(
	function (a, b) {
		return {$: 'Conj', a: a, b: b};
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$Disj = F2(
	function (a, b) {
		return {$: 'Disj', a: a, b: b};
	});
var $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeDisj = function (f) {
	switch (f.$) {
		case 'Conj':
			var f1 = f.a;
			var f2 = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Conj,
				$author$project$LogicUS$FOL$NormalForms$ffolInteriorizeDisj(f1),
				$author$project$LogicUS$FOL$NormalForms$ffolInteriorizeDisj(f2));
		case 'Disj':
			if (f.a.$ === 'Conj') {
				var _v1 = f.a;
				var f1 = _v1.a;
				var f2 = _v1.b;
				var g = f.b;
				return $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeDisj(
					A2(
						$author$project$LogicUS$FOL$SyntaxSemantics$Conj,
						A2($author$project$LogicUS$FOL$SyntaxSemantics$Disj, f1, g),
						A2($author$project$LogicUS$FOL$SyntaxSemantics$Disj, f2, g)));
			} else {
				if (f.b.$ === 'Conj') {
					var g = f.a;
					var _v2 = f.b;
					var f1 = _v2.a;
					var f2 = _v2.b;
					return $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeDisj(
						A2(
							$author$project$LogicUS$FOL$SyntaxSemantics$Conj,
							A2($author$project$LogicUS$FOL$SyntaxSemantics$Disj, g, f1),
							A2($author$project$LogicUS$FOL$SyntaxSemantics$Disj, g, f2)));
				} else {
					var f1 = f.a;
					var f2 = f.b;
					var g2 = $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeDisj(f2);
					var g1 = $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeDisj(f1);
					if (g1.$ === 'Conj') {
						return $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeDisj(
							A2($author$project$LogicUS$FOL$SyntaxSemantics$Disj, g1, g2));
					} else {
						if (g2.$ === 'Conj') {
							return $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeDisj(
								A2($author$project$LogicUS$FOL$SyntaxSemantics$Disj, g1, g2));
						} else {
							return f;
						}
					}
				}
			}
		default:
			return f;
	}
};
var $author$project$LogicUS$FOL$SyntaxSemantics$Equi = F2(
	function (a, b) {
		return {$: 'Equi', a: a, b: b};
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$Exists = F2(
	function (a, b) {
		return {$: 'Exists', a: a, b: b};
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$Forall = F2(
	function (a, b) {
		return {$: 'Forall', a: a, b: b};
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$Impl = F2(
	function (a, b) {
		return {$: 'Impl', a: a, b: b};
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$Insat = {$: 'Insat'};
var $author$project$LogicUS$FOL$SyntaxSemantics$Taut = {$: 'Taut'};
var $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg = function (f) {
	var aux = function (g) {
		switch (g.$) {
			case 'Pred':
				return $author$project$LogicUS$FOL$SyntaxSemantics$Neg(g);
			case 'Equal':
				return $author$project$LogicUS$FOL$SyntaxSemantics$Neg(g);
			case 'Neg':
				var h = g.a;
				return $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg(h);
			case 'Conj':
				var x = g.a;
				var y = g.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Disj,
					aux(x),
					aux(y));
			case 'Disj':
				var x = g.a;
				var y = g.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Conj,
					aux(x),
					aux(y));
			case 'Impl':
				var x = g.a;
				var y = g.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Conj,
					$author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg(x),
					aux(y));
			case 'Equi':
				var x = g.a;
				var y = g.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Disj,
					aux(
						A2($author$project$LogicUS$FOL$SyntaxSemantics$Impl, x, y)),
					aux(
						A2($author$project$LogicUS$FOL$SyntaxSemantics$Impl, y, x)));
			case 'Insat':
				return $author$project$LogicUS$FOL$SyntaxSemantics$Taut;
			case 'Taut':
				return $author$project$LogicUS$FOL$SyntaxSemantics$Insat;
			case 'Exists':
				var v = g.a;
				var h = g.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Forall,
					v,
					aux(h));
			default:
				var v = g.a;
				var h = g.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Exists,
					v,
					aux(h));
		}
	};
	switch (f.$) {
		case 'Pred':
			return f;
		case 'Equal':
			return f;
		case 'Neg':
			var h = f.a;
			return aux(h);
		case 'Conj':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Conj,
				$author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg(x),
				$author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg(y));
		case 'Disj':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Disj,
				$author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg(x),
				$author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg(y));
		case 'Impl':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Impl,
				$author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg(x),
				$author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg(y));
		case 'Equi':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Equi,
				$author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg(x),
				$author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg(y));
		case 'Insat':
			return $author$project$LogicUS$FOL$SyntaxSemantics$Insat;
		case 'Taut':
			return $author$project$LogicUS$FOL$SyntaxSemantics$Taut;
		case 'Exists':
			var v = f.a;
			var h = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Exists,
				v,
				$author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg(h));
		default:
			var v = f.a;
			var h = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Forall,
				v,
				$author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg(h));
	}
};
var $author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv = function (f) {
	switch (f.$) {
		case 'Pred':
			return f;
		case 'Equal':
			return f;
		case 'Neg':
			var h = f.a;
			return $author$project$LogicUS$FOL$SyntaxSemantics$Neg(
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv(h));
		case 'Conj':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Conj,
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv(x),
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv(y));
		case 'Disj':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Disj,
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv(x),
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv(y));
		case 'Impl':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Impl,
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv(x),
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv(y));
		case 'Equi':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Conj,
				A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Impl,
					$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv(x),
					$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv(y)),
				A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Impl,
					$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv(y),
					$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv(x)));
		case 'Insat':
			return $author$project$LogicUS$FOL$SyntaxSemantics$Insat;
		case 'Taut':
			return $author$project$LogicUS$FOL$SyntaxSemantics$Taut;
		case 'Exists':
			var v = f.a;
			var h = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Exists,
				v,
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv(h));
		default:
			var v = f.a;
			var h = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Forall,
				v,
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv(h));
	}
};
var $author$project$LogicUS$FOL$NormalForms$ffolRemoveAllImpl = function (f) {
	switch (f.$) {
		case 'Pred':
			return f;
		case 'Equal':
			return f;
		case 'Neg':
			var x = f.a;
			return $author$project$LogicUS$FOL$SyntaxSemantics$Neg(
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllImpl(x));
		case 'Conj':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Conj,
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllImpl(x),
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllImpl(y));
		case 'Disj':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Disj,
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllImpl(x),
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllImpl(y));
		case 'Impl':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Disj,
				$author$project$LogicUS$FOL$SyntaxSemantics$Neg(
					$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllImpl(x)),
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllImpl(y));
		case 'Equi':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Conj,
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllImpl(
					A2($author$project$LogicUS$FOL$SyntaxSemantics$Impl, x, y)),
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllImpl(
					A2($author$project$LogicUS$FOL$SyntaxSemantics$Impl, x, y)));
		case 'Forall':
			var v = f.a;
			var g = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Forall,
				v,
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllImpl(g));
		case 'Exists':
			var v = f.a;
			var g = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Exists,
				v,
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllImpl(g));
		case 'Insat':
			return $author$project$LogicUS$FOL$SyntaxSemantics$Insat;
		default:
			return $author$project$LogicUS$FOL$SyntaxSemantics$Taut;
	}
};
var $author$project$LogicUS$FOL$SyntaxSemantics$termApplySubstitution = F2(
	function (s, t) {
		if (t.$ === 'Var') {
			var x = t.a;
			return A2(
				$elm$core$Maybe$withDefault,
				$author$project$LogicUS$FOL$SyntaxSemantics$Var(x),
				A2($elm$core$Dict$get, x, s));
		} else {
			var f_ = t.a;
			var ts = t.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Func,
				f_,
				A2(
					$elm$core$List$map,
					$author$project$LogicUS$FOL$SyntaxSemantics$termApplySubstitution(s),
					ts));
		}
	});
var $elm_community$list_extra$List$Extra$unique = function (list) {
	return A4($elm_community$list_extra$List$Extra$uniqueHelp, $elm$core$Basics$identity, _List_Nil, list, _List_Nil);
};
var $author$project$LogicUS$FOL$SyntaxSemantics$termVarSymbols = function (t) {
	if (t.$ === 'Var') {
		var x = t.a;
		return _List_fromArray(
			[x]);
	} else {
		var ts = t.b;
		return $elm$core$List$sort(
			$elm_community$list_extra$List$Extra$unique(
				$elm$core$List$concat(
					A2($elm$core$List$map, $author$project$LogicUS$FOL$SyntaxSemantics$termVarSymbols, ts))));
	}
};
var $author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution = F2(
	function (s, f) {
		switch (f.$) {
			case 'Pred':
				var p_ = f.a;
				var ts = f.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Pred,
					p_,
					A2(
						$elm$core$List$map,
						$author$project$LogicUS$FOL$SyntaxSemantics$termApplySubstitution(s),
						ts));
			case 'Equal':
				var t1 = f.a;
				var t2 = f.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Equal,
					A2($author$project$LogicUS$FOL$SyntaxSemantics$termApplySubstitution, s, t1),
					A2($author$project$LogicUS$FOL$SyntaxSemantics$termApplySubstitution, s, t2));
			case 'Neg':
				var g = f.a;
				return $author$project$LogicUS$FOL$SyntaxSemantics$Neg(
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution, s, g));
			case 'Conj':
				var g = f.a;
				var h = f.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Conj,
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution, s, g),
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution, s, h));
			case 'Disj':
				var g = f.a;
				var h = f.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Disj,
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution, s, g),
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution, s, h));
			case 'Impl':
				var g = f.a;
				var h = f.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Impl,
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution, s, g),
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution, s, h));
			case 'Equi':
				var g = f.a;
				var h = f.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Equi,
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution, s, g),
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution, s, h));
			case 'Exists':
				var x = f.a;
				var g = f.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Exists,
					x,
					A2(
						$author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution,
						A2(
							$elm$core$Dict$filter,
							F2(
								function (k, v) {
									return (!_Utils_eq(k, x)) && (!A2(
										$elm$core$List$member,
										x,
										$author$project$LogicUS$FOL$SyntaxSemantics$termVarSymbols(v)));
								}),
							s),
						g));
			case 'Forall':
				var x = f.a;
				var g = f.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Forall,
					x,
					A2(
						$author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution,
						A2(
							$elm$core$Dict$filter,
							F2(
								function (k, v) {
									return (!_Utils_eq(k, x)) && (!A2(
										$elm$core$List$member,
										x,
										$author$project$LogicUS$FOL$SyntaxSemantics$termVarSymbols(v)));
								}),
							s),
						g));
			case 'Taut':
				return $author$project$LogicUS$FOL$SyntaxSemantics$Taut;
			default:
				return $author$project$LogicUS$FOL$SyntaxSemantics$Insat;
		}
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$termsVarSymbols = function (ts) {
	return $elm$core$List$sort(
		$elm_community$list_extra$List$Extra$unique(
			$elm$core$List$concat(
				A2($elm$core$List$map, $author$project$LogicUS$FOL$SyntaxSemantics$termVarSymbols, ts))));
};
var $author$project$LogicUS$FOL$SyntaxSemantics$ffolHasFreeInstanceOfVar = F2(
	function (f, v) {
		ffolHasFreeInstanceOfVar:
		while (true) {
			switch (f.$) {
				case 'Pred':
					var ts = f.b;
					return A2(
						$elm$core$List$member,
						v,
						$author$project$LogicUS$FOL$SyntaxSemantics$termsVarSymbols(ts));
				case 'Equal':
					var t1 = f.a;
					var t2 = f.b;
					return A2(
						$elm$core$List$member,
						v,
						$author$project$LogicUS$FOL$SyntaxSemantics$termsVarSymbols(
							_List_fromArray(
								[t1, t2])));
				case 'Neg':
					var g = f.a;
					var $temp$f = g,
						$temp$v = v;
					f = $temp$f;
					v = $temp$v;
					continue ffolHasFreeInstanceOfVar;
				case 'Conj':
					var g = f.a;
					var h = f.b;
					return A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolHasFreeInstanceOfVar, g, v) || A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolHasFreeInstanceOfVar, h, v);
				case 'Disj':
					var g = f.a;
					var h = f.b;
					return A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolHasFreeInstanceOfVar, g, v) || A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolHasFreeInstanceOfVar, h, v);
				case 'Impl':
					var g = f.a;
					var h = f.b;
					return A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolHasFreeInstanceOfVar, g, v) || A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolHasFreeInstanceOfVar, h, v);
				case 'Equi':
					var g = f.a;
					var h = f.b;
					return A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolHasFreeInstanceOfVar, g, v) || A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolHasFreeInstanceOfVar, h, v);
				case 'Exists':
					var x = f.a;
					var g = f.b;
					return (!_Utils_eq(x, v)) && A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolHasFreeInstanceOfVar, g, v);
				case 'Forall':
					var x = f.a;
					var g = f.b;
					return (!_Utils_eq(x, v)) && A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolHasFreeInstanceOfVar, g, v);
				default:
					return false;
			}
		}
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$ffolVarSymbols = function (f) {
	ffolVarSymbols:
	while (true) {
		switch (f.$) {
			case 'Pred':
				var ts = f.b;
				return $author$project$LogicUS$FOL$SyntaxSemantics$termsVarSymbols(ts);
			case 'Equal':
				var t1 = f.a;
				var t2 = f.b;
				return $author$project$LogicUS$FOL$SyntaxSemantics$termsVarSymbols(
					_List_fromArray(
						[t1, t2]));
			case 'Neg':
				var p = f.a;
				var $temp$f = p;
				f = $temp$f;
				continue ffolVarSymbols;
			case 'Conj':
				var p = f.a;
				var q = f.b;
				return $elm$core$List$sort(
					$elm_community$list_extra$List$Extra$unique(
						_Utils_ap(
							$author$project$LogicUS$FOL$SyntaxSemantics$ffolVarSymbols(p),
							$author$project$LogicUS$FOL$SyntaxSemantics$ffolVarSymbols(q))));
			case 'Disj':
				var p = f.a;
				var q = f.b;
				return $elm$core$List$sort(
					$elm_community$list_extra$List$Extra$unique(
						_Utils_ap(
							$author$project$LogicUS$FOL$SyntaxSemantics$ffolVarSymbols(p),
							$author$project$LogicUS$FOL$SyntaxSemantics$ffolVarSymbols(q))));
			case 'Impl':
				var p = f.a;
				var q = f.b;
				return $elm$core$List$sort(
					$elm_community$list_extra$List$Extra$unique(
						_Utils_ap(
							$author$project$LogicUS$FOL$SyntaxSemantics$ffolVarSymbols(p),
							$author$project$LogicUS$FOL$SyntaxSemantics$ffolVarSymbols(q))));
			case 'Equi':
				var p = f.a;
				var q = f.b;
				return $elm$core$List$sort(
					$elm_community$list_extra$List$Extra$unique(
						_Utils_ap(
							$author$project$LogicUS$FOL$SyntaxSemantics$ffolVarSymbols(p),
							$author$project$LogicUS$FOL$SyntaxSemantics$ffolVarSymbols(q))));
			case 'Exists':
				var x = f.a;
				var p = f.b;
				return $elm$core$List$sort(
					$elm_community$list_extra$List$Extra$unique(
						_Utils_ap(
							$author$project$LogicUS$FOL$SyntaxSemantics$ffolVarSymbols(p),
							_List_fromArray(
								[x]))));
			case 'Forall':
				var x = f.a;
				var p = f.b;
				return $elm$core$List$sort(
					$elm_community$list_extra$List$Extra$unique(
						_Utils_ap(
							$author$project$LogicUS$FOL$SyntaxSemantics$ffolVarSymbols(p),
							_List_fromArray(
								[x]))));
			default:
				return _List_Nil;
		}
	}
};
var $author$project$LogicUS$FOL$SyntaxSemantics$ffolFreeVars = function (f) {
	return A2(
		$elm$core$List$filter,
		function (v) {
			return A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolHasFreeInstanceOfVar, f, v);
		},
		$author$project$LogicUS$FOL$SyntaxSemantics$ffolVarSymbols(f));
};
var $elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $author$project$LogicUS$FOL$NormalForms$ffolToSkolem2Aux = F3(
	function (b, i, f) {
		ffolToSkolem2Aux:
		while (true) {
			switch (f.$) {
				case 'Conj':
					var g = f.a;
					var h = f.b;
					var _v1 = A3($author$project$LogicUS$FOL$NormalForms$ffolToSkolem2Aux, b, i, g);
					var f1 = _v1.a;
					var i1 = _v1.b;
					var _v2 = A3($author$project$LogicUS$FOL$NormalForms$ffolToSkolem2Aux, b, i1, h);
					var f2 = _v2.a;
					var i2 = _v2.b;
					return _Utils_Tuple2(
						A2($author$project$LogicUS$FOL$SyntaxSemantics$Conj, f1, f2),
						i2);
				case 'Disj':
					var g = f.a;
					var h = f.b;
					var _v3 = A3($author$project$LogicUS$FOL$NormalForms$ffolToSkolem2Aux, b, i, g);
					var f1 = _v3.a;
					var i1 = _v3.b;
					var _v4 = A3($author$project$LogicUS$FOL$NormalForms$ffolToSkolem2Aux, b, i1, h);
					var f2 = _v4.a;
					var i2 = _v4.b;
					return _Utils_Tuple2(
						A2($author$project$LogicUS$FOL$SyntaxSemantics$Disj, f1, f2),
						i2);
				case 'Impl':
					var g = f.a;
					var h = f.b;
					var _v5 = A3($author$project$LogicUS$FOL$NormalForms$ffolToSkolem2Aux, !b, i, g);
					var f1 = _v5.a;
					var i1 = _v5.b;
					var _v6 = A3($author$project$LogicUS$FOL$NormalForms$ffolToSkolem2Aux, b, i1, h);
					var f2 = _v6.a;
					var i2 = _v6.b;
					return _Utils_Tuple2(
						A2($author$project$LogicUS$FOL$SyntaxSemantics$Impl, f1, f2),
						i2);
				case 'Exists':
					var v = f.a;
					var g = f.b;
					if (b) {
						var ls = $author$project$LogicUS$FOL$SyntaxSemantics$ffolFreeVars(f);
						var ss = A2(
							$elm$core$Dict$singleton,
							v,
							A2(
								$author$project$LogicUS$FOL$SyntaxSemantics$Func,
								_Utils_Tuple2(
									'ş',
									_List_fromArray(
										[i])),
								A2($elm$core$List$map, $author$project$LogicUS$FOL$SyntaxSemantics$Var, ls)));
						var h = A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution, ss, g);
						var $temp$b = b,
							$temp$i = i + 1,
							$temp$f = h;
						b = $temp$b;
						i = $temp$i;
						f = $temp$f;
						continue ffolToSkolem2Aux;
					} else {
						var _v7 = A3($author$project$LogicUS$FOL$NormalForms$ffolToSkolem2Aux, b, i, g);
						var h = _v7.a;
						var i1 = _v7.b;
						return _Utils_Tuple2(h, i1);
					}
				case 'Forall':
					var v = f.a;
					var g = f.b;
					if (b) {
						var _v8 = A3($author$project$LogicUS$FOL$NormalForms$ffolToSkolem2Aux, b, i, g);
						var h = _v8.a;
						var i1 = _v8.b;
						return _Utils_Tuple2(h, i1);
					} else {
						var ls = $author$project$LogicUS$FOL$SyntaxSemantics$ffolFreeVars(f);
						var ss = A2(
							$elm$core$Dict$singleton,
							v,
							A2(
								$author$project$LogicUS$FOL$SyntaxSemantics$Func,
								_Utils_Tuple2(
									'ş',
									_List_fromArray(
										[i])),
								A2($elm$core$List$map, $author$project$LogicUS$FOL$SyntaxSemantics$Var, ls)));
						var h = A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution, ss, g);
						var $temp$b = b,
							$temp$i = i + 1,
							$temp$f = h;
						b = $temp$b;
						i = $temp$i;
						f = $temp$f;
						continue ffolToSkolem2Aux;
					}
				default:
					return _Utils_Tuple2(f, i);
			}
		}
	});
var $author$project$LogicUS$FOL$NormalForms$sfolToSkolem = function (fs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (f, _v0) {
				var ls = _v0.a;
				var i = _v0.b;
				var _v1 = A3($author$project$LogicUS$FOL$NormalForms$ffolToSkolem2Aux, true, i, f);
				var g = _v1.a;
				var j = _v1.b;
				return _Utils_Tuple2(
					_Utils_ap(
						ls,
						_List_fromArray(
							[g])),
					j);
			}),
		_Utils_Tuple2(_List_Nil, 1),
		fs).a;
};
var $author$project$LogicUS$FOL$NormalForms$sfolToNNF = function (fs) {
	return $author$project$LogicUS$FOL$NormalForms$sfolToSkolem(
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeL,
				A2($elm$core$Basics$composeL, $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg, $author$project$LogicUS$FOL$NormalForms$ffolRemoveAllImpl),
				$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv),
			fs));
};
var $author$project$LogicUS$FOL$NormalForms$sfolToCNF = function (fs) {
	return A2(
		$elm$core$List$map,
		$author$project$LogicUS$FOL$NormalForms$ffolInteriorizeDisj,
		$author$project$LogicUS$FOL$NormalForms$sfolToNNF(fs));
};
var $author$project$LogicUS$FOL$Clauses$sfolToClauses = function (fs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (f, ac) {
				return A2(
					$author$project$LogicUS$FOL$AuxiliarFuctions$uniqueConcatList,
					ac,
					A2(
						$elm$core$Maybe$withDefault,
						_List_fromArray(
							[_List_Nil]),
						$author$project$LogicUS$FOL$Clauses$csfolFromCNF(f)));
			}),
		_List_Nil,
		$author$project$LogicUS$FOL$NormalForms$sfolToCNF(fs));
};
var $elm_community$list_extra$List$Extra$unconsLast = function (list) {
	var _v0 = $elm$core$List$reverse(list);
	if (!_v0.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var last_ = _v0.a;
		var rest = _v0.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(
				last_,
				$elm$core$List$reverse(rest)));
	}
};
var $author$project$Auxiliar$uniqueConcatList = F2(
	function (xs, ys) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (x, ac) {
					return A2($elm$core$List$member, x, ac) ? ac : _Utils_ap(
						ac,
						_List_fromArray(
							[x]));
				}),
			xs,
			ys);
	});
var $author$project$FOLBasicProcessors$processClauseSetFOLNode = F4(
	function (content, outputsCFOL, outputsSFOL, outputsCSFOL) {
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = c.option;
			switch (_v1) {
				case 'fromFile':
					var parsedSet = function () {
						var _v5 = $elm_community$list_extra$List$Extra$unconsLast(
							A2($elm$core$String$split, '.', c.input));
						if (_v5.$ === 'Just') {
							if (_v5.a.a === '') {
								if (!_v5.a.b.b) {
									var _v6 = _v5.a;
									return _List_Nil;
								} else {
									var _v7 = _v5.a;
									var ls = _v7.b;
									return A2($elm$core$List$map, $author$project$LogicUS$FOL$Clauses$cfolReadFromString, ls);
								}
							} else {
								var _v8 = _v5.a;
								var s = _v8.a;
								var ls = _v8.b;
								return A2(
									$elm$core$List$map,
									$author$project$LogicUS$FOL$Clauses$cfolReadFromString,
									_Utils_ap(
										ls,
										_List_fromArray(
											[s])));
							}
						} else {
							return _List_Nil;
						}
					}();
					if (A2(
						$elm$core$List$any,
						function (_v2) {
							var cl = _v2.a;
							return $elm_community$maybe_extra$Maybe$Extra$isNothing(cl);
						},
						parsedSet)) {
						return {
							errorCode: 1,
							message: $elm$json$Json$Encode$string(
								A2(
									$elm$core$String$join,
									'.',
									A2(
										$elm$core$List$indexedMap,
										F2(
											function (i, _v3) {
												var m = _v3.c;
												return (m !== '') ? ('cl' + ($elm$core$String$fromInt(i) + (' : ' + m))) : '';
											}),
										parsedSet))),
							result: _List_Nil
						};
					} else {
						var cs = $elm_community$list_extra$List$Extra$unique(
							A2(
								$elm$core$List$map,
								function (_v4) {
									var cl = _v4.a;
									return A2($elm$core$Maybe$withDefault, _List_Nil, cl);
								},
								parsedSet));
						return {
							errorCode: 0,
							message: $elm$json$Json$Encode$string(
								$author$project$LogicUS$FOL$Clauses$csfolToString(cs)),
							result: cs
						};
					}
				case 'collect':
					var inputDecoder = $elm$json$Json$Decode$list(
						A3(
							$elm$json$Json$Decode$map2,
							$elm$core$Tuple$pair,
							A2(
								$elm$json$Json$Decode$at,
								_List_fromArray(
									['origin_id']),
								$elm$json$Json$Decode$int),
							A2(
								$elm$json$Json$Decode$at,
								_List_fromArray(
									['origin_slot']),
								$elm$json$Json$Decode$int)));
					var _v9 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
					if (_v9.$ === 'Ok') {
						var sources = _v9.a;
						var cls = A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(
									x,
									A2($elm$core$Dict$get, x, outputsCFOL));
							},
							sources);
						var _v10 = A2(
							$elm$core$List$filter,
							A2($elm$core$Basics$composeL, $elm_community$maybe_extra$Maybe$Extra$isNothing, $elm$core$Tuple$second),
							cls);
						if (!_v10.b) {
							var cls_ = $elm_community$list_extra$List$Extra$unique(
								A2(
									$elm$core$List$map,
									A2(
										$elm$core$Basics$composeL,
										$elm$core$Maybe$withDefault(_List_Nil),
										$elm$core$Tuple$second),
									cls));
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$Clauses$csfolToString(cls_)),
								result: cls_
							};
						} else {
							var undefSources = _v10;
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown sources:' + A2(
										$elm$core$String$join,
										'. ',
										A2(
											$elm$core$List$map,
											function (_v11) {
												var _v12 = _v11.a;
												var sid = _v12.a;
												var sslot = _v12.b;
												return '(' + ($elm$core$String$fromInt(sid) + (', ' + ($elm$core$String$fromInt(sslot) + ')')));
											},
											undefSources))),
								result: _List_Nil
							};
						}
					} else {
						var e = _v9.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$json$Json$Decode$errorToString(e)),
							result: _List_Nil
						};
					}
				case 'union':
					var inputDecoder = $elm$json$Json$Decode$list(
						A3(
							$elm$json$Json$Decode$map2,
							$elm$core$Tuple$pair,
							A2(
								$elm$json$Json$Decode$at,
								_List_fromArray(
									['origin_id']),
								$elm$json$Json$Decode$int),
							A2(
								$elm$json$Json$Decode$at,
								_List_fromArray(
									['origin_slot']),
								$elm$json$Json$Decode$int)));
					var _v13 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
					if (_v13.$ === 'Ok') {
						var sources = _v13.a;
						var clss = A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(
									x,
									A2($elm$core$Dict$get, x, outputsCSFOL));
							},
							sources);
						var _v14 = A2(
							$elm$core$List$filter,
							A2($elm$core$Basics$composeL, $elm_community$maybe_extra$Maybe$Extra$isNothing, $elm$core$Tuple$second),
							clss);
						if (!_v14.b) {
							var cls_ = A3(
								$elm$core$List$foldl,
								F2(
									function (_v15, ac) {
										var cls = _v15.b;
										return A2(
											$author$project$Auxiliar$uniqueConcatList,
											ac,
											A2($elm$core$Maybe$withDefault, _List_Nil, cls));
									}),
								_List_Nil,
								clss);
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$Clauses$csfolToString(cls_)),
								result: cls_
							};
						} else {
							var undefSources = _v14;
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown sources:' + A2(
										$elm$core$String$join,
										'. ',
										A2(
											$elm$core$List$map,
											function (_v16) {
												var _v17 = _v16.a;
												var sid = _v17.a;
												var sslot = _v17.b;
												return '(' + ($elm$core$String$fromInt(sid) + (', ' + ($elm$core$String$fromInt(sslot) + ')')));
											},
											undefSources))),
								result: _List_Nil
							};
						}
					} else {
						var e = _v13.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$json$Json$Decode$errorToString(e)),
							result: _List_Nil
						};
					}
				case 'fromCNFSet':
					var inputDecoder = A3(
						$elm$json$Json$Decode$map2,
						F2(
							function (x, y) {
								return {origin_id: x, origin_slot: y};
							}),
						A2(
							$elm$json$Json$Decode$at,
							_List_fromArray(
								['origin_id']),
							$elm$json$Json$Decode$int),
						A2(
							$elm$json$Json$Decode$at,
							_List_fromArray(
								['origin_slot']),
							$elm$json$Json$Decode$int));
					var _v18 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
					if (_v18.$ === 'Ok') {
						var source = _v18.a;
						var _v19 = A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(source.origin_id, source.origin_slot),
							outputsSFOL);
						if (_v19.$ === 'Just') {
							var s = _v19.a;
							var cls = A3(
								$elm$core$List$map2,
								$elm$core$Tuple$pair,
								s,
								A2($elm$core$List$map, $author$project$LogicUS$FOL$Clauses$csfolFromCNF, s));
							var _v20 = A2(
								$elm$core$List$filter,
								A2($elm$core$Basics$composeL, $elm_community$maybe_extra$Maybe$Extra$isNothing, $elm$core$Tuple$second),
								cls);
							if (!_v20.b) {
								var cls_ = $author$project$LogicUS$FOL$Clauses$csfolRemoveTautClauses(
									$author$project$LogicUS$FOL$Clauses$csfolRemoveSubsumedClauses(
										$elm$core$List$concat(
											A2(
												$elm$core$List$map,
												A2(
													$elm$core$Basics$composeL,
													$elm$core$Maybe$withDefault(_List_Nil),
													$elm$core$Tuple$second),
												cls))));
								return {
									errorCode: 0,
									message: $elm$json$Json$Encode$string(
										$author$project$LogicUS$FOL$Clauses$csfolToString(cls_)),
									result: cls_
								};
							} else {
								var xs = _v20;
								return {
									errorCode: 1,
									message: $elm$json$Json$Encode$string(
										'These formulas from the set are not in CNF' + A2(
											$elm$core$String$join,
											'. ',
											A2(
												$elm$core$List$map,
												A2($elm$core$Basics$composeL, $author$project$LogicUS$FOL$SyntaxSemantics$ffolToString, $elm$core$Tuple$first),
												xs))),
									result: _List_Nil
								};
							}
						} else {
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (',' + ($elm$core$String$fromInt(source.origin_slot) + ')')))),
								result: _List_Nil
							};
						}
					} else {
						var e = _v18.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$json$Json$Decode$errorToString(e)),
							result: _List_Nil
						};
					}
				case 'fromSetFOL':
					var inputDecoder = A3(
						$elm$json$Json$Decode$map2,
						F2(
							function (x, y) {
								return {origin_id: x, origin_slot: y};
							}),
						A2(
							$elm$json$Json$Decode$at,
							_List_fromArray(
								['origin_id']),
							$elm$json$Json$Decode$int),
						A2(
							$elm$json$Json$Decode$at,
							_List_fromArray(
								['origin_slot']),
							$elm$json$Json$Decode$int));
					var _v21 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
					if (_v21.$ === 'Ok') {
						var source = _v21.a;
						var _v22 = A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(source.origin_id, source.origin_slot),
							outputsSFOL);
						if (_v22.$ === 'Just') {
							var s = _v22.a;
							var cls_ = $author$project$LogicUS$FOL$Clauses$sfolToClauses(s);
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$Clauses$csfolToString(cls_)),
								result: cls_
							};
						} else {
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (',' + ($elm$core$String$fromInt(source.origin_slot) + ')')))),
								result: _List_Nil
							};
						}
					} else {
						var e = _v21.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$json$Json$Decode$errorToString(e)),
							result: _List_Nil
						};
					}
				default:
					return {
						errorCode: 4,
						message: $elm$json$Json$Encode$string('undefined option for node of type SetFOL'),
						result: _List_Nil
					};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: _List_Nil
			};
		}
	});
var $author$project$PLBasicProcessors$processClauseSetPLNode = F4(
	function (content, outputsCPL, outputsSPL, outputsCSPL) {
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = c.option;
			switch (_v1) {
				case 'fromFile':
					var parsedSet = function () {
						var _v5 = $elm_community$list_extra$List$Extra$unconsLast(
							A2($elm$core$String$split, '.', c.input));
						if (_v5.$ === 'Just') {
							if (_v5.a.a === '') {
								if (!_v5.a.b.b) {
									var _v6 = _v5.a;
									return _List_Nil;
								} else {
									var _v7 = _v5.a;
									var ls = _v7.b;
									return A2($elm$core$List$map, $author$project$LogicUS$PL$Clauses$cplReadFromString, ls);
								}
							} else {
								var _v8 = _v5.a;
								var s = _v8.a;
								var ls = _v8.b;
								return A2(
									$elm$core$List$map,
									$author$project$LogicUS$PL$Clauses$cplReadFromString,
									_Utils_ap(
										ls,
										_List_fromArray(
											[s])));
							}
						} else {
							return _List_Nil;
						}
					}();
					if (A2(
						$elm$core$List$any,
						function (_v2) {
							var cl = _v2.a;
							return $elm_community$maybe_extra$Maybe$Extra$isNothing(cl);
						},
						parsedSet)) {
						return {
							errorCode: 1,
							message: $elm$json$Json$Encode$string(
								A2(
									$elm$core$String$join,
									'.',
									A2(
										$elm$core$List$indexedMap,
										F2(
											function (i, _v3) {
												var m = _v3.c;
												return (m !== '') ? ('cl' + ($elm$core$String$fromInt(i) + (' : ' + m))) : '';
											}),
										parsedSet))),
							result: _List_Nil
						};
					} else {
						var cs = $elm_community$list_extra$List$Extra$unique(
							A2(
								$elm$core$List$map,
								function (_v4) {
									var cl = _v4.a;
									return A2($elm$core$Maybe$withDefault, _List_Nil, cl);
								},
								parsedSet));
						return {
							errorCode: 0,
							message: $elm$json$Json$Encode$string(
								$author$project$LogicUS$PL$Clauses$csplToString(cs)),
							result: cs
						};
					}
				case 'collect':
					var inputDecoder = $elm$json$Json$Decode$list(
						A3(
							$elm$json$Json$Decode$map2,
							$elm$core$Tuple$pair,
							A2(
								$elm$json$Json$Decode$at,
								_List_fromArray(
									['origin_id']),
								$elm$json$Json$Decode$int),
							A2(
								$elm$json$Json$Decode$at,
								_List_fromArray(
									['origin_slot']),
								$elm$json$Json$Decode$int)));
					var _v9 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
					if (_v9.$ === 'Ok') {
						var sources = _v9.a;
						var cls = A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(
									x,
									A2($elm$core$Dict$get, x, outputsCPL));
							},
							sources);
						var _v10 = A2(
							$elm$core$List$filter,
							A2($elm$core$Basics$composeL, $elm_community$maybe_extra$Maybe$Extra$isNothing, $elm$core$Tuple$second),
							cls);
						if (!_v10.b) {
							var cls_ = $elm_community$list_extra$List$Extra$unique(
								A2(
									$elm$core$List$map,
									A2(
										$elm$core$Basics$composeL,
										$elm$core$Maybe$withDefault(_List_Nil),
										$elm$core$Tuple$second),
									cls));
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$Clauses$csplToString(cls_)),
								result: cls_
							};
						} else {
							var undefSources = _v10;
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown sources:' + A2(
										$elm$core$String$join,
										'. ',
										A2(
											$elm$core$List$map,
											function (_v11) {
												var _v12 = _v11.a;
												var sid = _v12.a;
												var sslot = _v12.b;
												return '(' + ($elm$core$String$fromInt(sid) + (', ' + ($elm$core$String$fromInt(sslot) + ')')));
											},
											undefSources))),
								result: _List_Nil
							};
						}
					} else {
						var e = _v9.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$json$Json$Decode$errorToString(e)),
							result: _List_Nil
						};
					}
				case 'union':
					var inputDecoder = $elm$json$Json$Decode$list(
						A3(
							$elm$json$Json$Decode$map2,
							$elm$core$Tuple$pair,
							A2(
								$elm$json$Json$Decode$at,
								_List_fromArray(
									['origin_id']),
								$elm$json$Json$Decode$int),
							A2(
								$elm$json$Json$Decode$at,
								_List_fromArray(
									['origin_slot']),
								$elm$json$Json$Decode$int)));
					var _v13 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
					if (_v13.$ === 'Ok') {
						var sources = _v13.a;
						var clss = A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(
									x,
									A2($elm$core$Dict$get, x, outputsCSPL));
							},
							sources);
						var _v14 = A2(
							$elm$core$List$filter,
							A2($elm$core$Basics$composeL, $elm_community$maybe_extra$Maybe$Extra$isNothing, $elm$core$Tuple$second),
							clss);
						if (!_v14.b) {
							var cls_ = A3(
								$elm$core$List$foldl,
								F2(
									function (_v15, ac) {
										var cls = _v15.b;
										return A2(
											$author$project$Auxiliar$uniqueConcatList,
											ac,
											A2($elm$core$Maybe$withDefault, _List_Nil, cls));
									}),
								_List_Nil,
								clss);
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$Clauses$csplToString(cls_)),
								result: cls_
							};
						} else {
							var undefSources = _v14;
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown sources:' + A2(
										$elm$core$String$join,
										'. ',
										A2(
											$elm$core$List$map,
											function (_v16) {
												var _v17 = _v16.a;
												var sid = _v17.a;
												var sslot = _v17.b;
												return '(' + ($elm$core$String$fromInt(sid) + (', ' + ($elm$core$String$fromInt(sslot) + ')')));
											},
											undefSources))),
								result: _List_Nil
							};
						}
					} else {
						var e = _v13.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$json$Json$Decode$errorToString(e)),
							result: _List_Nil
						};
					}
				case 'fromCNFSet':
					var inputDecoder = A3(
						$elm$json$Json$Decode$map2,
						F2(
							function (x, y) {
								return {origin_id: x, origin_slot: y};
							}),
						A2(
							$elm$json$Json$Decode$at,
							_List_fromArray(
								['origin_id']),
							$elm$json$Json$Decode$int),
						A2(
							$elm$json$Json$Decode$at,
							_List_fromArray(
								['origin_slot']),
							$elm$json$Json$Decode$int));
					var _v18 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
					if (_v18.$ === 'Ok') {
						var source = _v18.a;
						var _v19 = A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(source.origin_id, source.origin_slot),
							outputsSPL);
						if (_v19.$ === 'Just') {
							var s = _v19.a;
							var cls = A3(
								$elm$core$List$map2,
								$elm$core$Tuple$pair,
								s,
								A2($elm$core$List$map, $author$project$LogicUS$PL$Clauses$csplFromCNF, s));
							var _v20 = A2(
								$elm$core$List$filter,
								A2($elm$core$Basics$composeL, $elm_community$maybe_extra$Maybe$Extra$isNothing, $elm$core$Tuple$second),
								cls);
							if (!_v20.b) {
								var cls_ = $author$project$LogicUS$PL$Clauses$csplRemoveTautClauses(
									$author$project$LogicUS$PL$Clauses$csplRemoveSubsumedClauses(
										$elm$core$List$concat(
											A2(
												$elm$core$List$map,
												A2(
													$elm$core$Basics$composeL,
													$elm$core$Maybe$withDefault(_List_Nil),
													$elm$core$Tuple$second),
												cls))));
								return {
									errorCode: 0,
									message: $elm$json$Json$Encode$string(
										$author$project$LogicUS$PL$Clauses$csplToString(cls_)),
									result: cls_
								};
							} else {
								var xs = _v20;
								return {
									errorCode: 1,
									message: $elm$json$Json$Encode$string(
										'These formulas from the set are not in CNF' + A2(
											$elm$core$String$join,
											'. ',
											A2(
												$elm$core$List$map,
												A2($elm$core$Basics$composeL, $author$project$LogicUS$PL$SyntaxSemantics$fplToString, $elm$core$Tuple$first),
												xs))),
									result: _List_Nil
								};
							}
						} else {
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (',' + ($elm$core$String$fromInt(source.origin_slot) + ')')))),
								result: _List_Nil
							};
						}
					} else {
						var e = _v18.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$json$Json$Decode$errorToString(e)),
							result: _List_Nil
						};
					}
				case 'fromSetPL':
					var inputDecoder = A3(
						$elm$json$Json$Decode$map2,
						F2(
							function (x, y) {
								return {origin_id: x, origin_slot: y};
							}),
						A2(
							$elm$json$Json$Decode$at,
							_List_fromArray(
								['origin_id']),
							$elm$json$Json$Decode$int),
						A2(
							$elm$json$Json$Decode$at,
							_List_fromArray(
								['origin_slot']),
							$elm$json$Json$Decode$int));
					var _v21 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
					if (_v21.$ === 'Ok') {
						var source = _v21.a;
						var _v22 = A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(source.origin_id, source.origin_slot),
							outputsSPL);
						if (_v22.$ === 'Just') {
							var s = _v22.a;
							var cls_ = $author$project$LogicUS$PL$Clauses$splToClauses(s);
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$Clauses$csplToString(cls_)),
								result: cls_
							};
						} else {
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (',' + ($elm$core$String$fromInt(source.origin_slot) + ')')))),
								result: _List_Nil
							};
						}
					} else {
						var e = _v21.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$json$Json$Decode$errorToString(e)),
							result: _List_Nil
						};
					}
				default:
					return {
						errorCode: 4,
						message: $elm$json$Json$Encode$string('undefined option for node of type SetPL'),
						result: _List_Nil
					};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: _List_Nil
			};
		}
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation = function (f) {
	switch (f.$) {
		case 'Neg':
			var g = f.a;
			return g;
		case 'Taut':
			return $author$project$LogicUS$FOL$SyntaxSemantics$Insat;
		case 'Insat':
			return $author$project$LogicUS$FOL$SyntaxSemantics$Taut;
		default:
			return $author$project$LogicUS$FOL$SyntaxSemantics$Neg(f);
	}
};
var $elm$json$Json$Decode$map4 = _Json_map4;
var $author$project$FOLBasicProcessors$processConnectiveFOLNode = F2(
	function (content, outputsffol) {
		var inputDecoder = A5(
			$elm$json$Json$Decode$map4,
			F4(
				function (x, y, z, u) {
					return {origin1_id: x, origin1_slot: y, origin2_id: z, origin2_slot: u};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin1_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin1_slot']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin2_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin2_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var sources = _v1.a;
				var _v2 = c.option;
				switch (_v2) {
					case 'neg':
						var _v3 = A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(sources.origin1_id, sources.origin1_slot),
							outputsffol);
						if (_v3.$ === 'Just') {
							var f = _v3.a;
							var f_ = $author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation(f);
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f_)),
								result: f_
							};
						} else {
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown source: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ')')))),
								result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
							};
						}
					case 'conj':
						var _v4 = A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(sources.origin1_id, sources.origin1_slot),
							outputsffol);
						if (_v4.$ === 'Just') {
							var f1 = _v4.a;
							var _v5 = A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin2_id, sources.origin2_slot),
								outputsffol);
							if (_v5.$ === 'Just') {
								var f2 = _v5.a;
								var f = A2($author$project$LogicUS$FOL$SyntaxSemantics$Conj, f1, f2);
								return {
									errorCode: 0,
									message: $elm$json$Json$Encode$string(
										$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f)),
									result: f
								};
							} else {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown source: (' + ($elm$core$String$fromInt(sources.origin2_id) + (', ' + ($elm$core$String$fromInt(sources.origin2_slot) + ')')))),
									result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
								};
							}
						} else {
							var _v6 = A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin2_id, sources.origin2_slot),
								outputsffol);
							if (_v6.$ === 'Just') {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown source: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ')')))),
									result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
								};
							} else {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown sources: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ('). (' + ($elm$core$String$fromInt(sources.origin2_id) + (', ' + ($elm$core$String$fromInt(sources.origin2_slot) + ')')))))))),
									result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
								};
							}
						}
					case 'disj':
						var _v7 = A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(sources.origin1_id, sources.origin1_slot),
							outputsffol);
						if (_v7.$ === 'Just') {
							var f1 = _v7.a;
							var _v8 = A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin2_id, sources.origin2_slot),
								outputsffol);
							if (_v8.$ === 'Just') {
								var f2 = _v8.a;
								var f = A2($author$project$LogicUS$FOL$SyntaxSemantics$Disj, f1, f2);
								return {
									errorCode: 0,
									message: $elm$json$Json$Encode$string(
										$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f)),
									result: f
								};
							} else {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown source: (' + ($elm$core$String$fromInt(sources.origin2_id) + (', ' + ($elm$core$String$fromInt(sources.origin2_slot) + ')')))),
									result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
								};
							}
						} else {
							var _v9 = A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin2_id, sources.origin2_slot),
								outputsffol);
							if (_v9.$ === 'Just') {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown source: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ')')))),
									result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
								};
							} else {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown sources: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ('). (' + ($elm$core$String$fromInt(sources.origin2_id) + (', ' + ($elm$core$String$fromInt(sources.origin2_slot) + ')')))))))),
									result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
								};
							}
						}
					case 'impl':
						var _v10 = A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(sources.origin1_id, sources.origin1_slot),
							outputsffol);
						if (_v10.$ === 'Just') {
							var f1 = _v10.a;
							var _v11 = A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin2_id, sources.origin2_slot),
								outputsffol);
							if (_v11.$ === 'Just') {
								var f2 = _v11.a;
								var f = A2($author$project$LogicUS$FOL$SyntaxSemantics$Impl, f1, f2);
								return {
									errorCode: 0,
									message: $elm$json$Json$Encode$string(
										$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f)),
									result: f
								};
							} else {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown source: (' + ($elm$core$String$fromInt(sources.origin2_id) + (', ' + ($elm$core$String$fromInt(sources.origin2_slot) + ')')))),
									result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
								};
							}
						} else {
							var _v12 = A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin2_id, sources.origin2_slot),
								outputsffol);
							if (_v12.$ === 'Just') {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown source: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ')')))),
									result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
								};
							} else {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown sources: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ('). (' + ($elm$core$String$fromInt(sources.origin2_id) + (', ' + ($elm$core$String$fromInt(sources.origin2_slot) + ')')))))))),
									result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
								};
							}
						}
					case 'equi':
						var _v13 = A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(sources.origin1_id, sources.origin1_slot),
							outputsffol);
						if (_v13.$ === 'Just') {
							var f1 = _v13.a;
							var _v14 = A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin2_id, sources.origin2_slot),
								outputsffol);
							if (_v14.$ === 'Just') {
								var f2 = _v14.a;
								var f = A2($author$project$LogicUS$FOL$SyntaxSemantics$Equi, f1, f2);
								return {
									errorCode: 0,
									message: $elm$json$Json$Encode$string(
										$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f)),
									result: f
								};
							} else {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown source: (' + ($elm$core$String$fromInt(sources.origin2_id) + (', ' + ($elm$core$String$fromInt(sources.origin2_slot) + ')')))),
									result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
								};
							}
						} else {
							var _v15 = A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin2_id, sources.origin2_slot),
								outputsffol);
							if (_v15.$ === 'Just') {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown source: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ')')))),
									result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
								};
							} else {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown sources: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ('). (' + ($elm$core$String$fromInt(sources.origin2_id) + (', ' + ($elm$core$String$fromInt(sources.origin2_slot) + ')')))))))),
									result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
								};
							}
						}
					default:
						return {
							errorCode: 4,
							message: $elm$json$Json$Encode$string('undefined option for node of type ConnectiveFOL'),
							result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
						};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e)),
					result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
			};
		}
	});
var $author$project$LogicUS$PL$SyntaxSemantics$fplNegation = function (f) {
	switch (f.$) {
		case 'Neg':
			var p = f.a;
			return p;
		case 'Insat':
			return $author$project$LogicUS$PL$SyntaxSemantics$Taut;
		case 'Taut':
			return $author$project$LogicUS$PL$SyntaxSemantics$Insat;
		default:
			return $author$project$LogicUS$PL$SyntaxSemantics$Neg(f);
	}
};
var $author$project$PLBasicProcessors$processConnectivePLNode = F2(
	function (content, outputsFPL) {
		var inputDecoder = A5(
			$elm$json$Json$Decode$map4,
			F4(
				function (x, y, z, u) {
					return {origin1_id: x, origin1_slot: y, origin2_id: z, origin2_slot: u};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin1_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin1_slot']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin2_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin2_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var sources = _v1.a;
				var _v2 = c.option;
				switch (_v2) {
					case 'neg':
						var _v3 = A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(sources.origin1_id, sources.origin1_slot),
							outputsFPL);
						if (_v3.$ === 'Just') {
							var f = _v3.a;
							var f_ = $author$project$LogicUS$PL$SyntaxSemantics$fplNegation(f);
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$fplToString(f_)),
								result: f_
							};
						} else {
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown source: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ')')))),
								result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
							};
						}
					case 'conj':
						var _v4 = A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(sources.origin1_id, sources.origin1_slot),
							outputsFPL);
						if (_v4.$ === 'Just') {
							var f1 = _v4.a;
							var _v5 = A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin2_id, sources.origin2_slot),
								outputsFPL);
							if (_v5.$ === 'Just') {
								var f2 = _v5.a;
								var f = A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, f1, f2);
								return {
									errorCode: 0,
									message: $elm$json$Json$Encode$string(
										$author$project$LogicUS$PL$SyntaxSemantics$fplToString(f)),
									result: f
								};
							} else {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown source: (' + ($elm$core$String$fromInt(sources.origin2_id) + (', ' + ($elm$core$String$fromInt(sources.origin2_slot) + ')')))),
									result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
								};
							}
						} else {
							var _v6 = A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin2_id, sources.origin2_slot),
								outputsFPL);
							if (_v6.$ === 'Just') {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown source: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ')')))),
									result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
								};
							} else {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown sources: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ('). (' + ($elm$core$String$fromInt(sources.origin2_id) + (', ' + ($elm$core$String$fromInt(sources.origin2_slot) + ')')))))))),
									result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
								};
							}
						}
					case 'disj':
						var _v7 = A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(sources.origin1_id, sources.origin1_slot),
							outputsFPL);
						if (_v7.$ === 'Just') {
							var f1 = _v7.a;
							var _v8 = A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin2_id, sources.origin2_slot),
								outputsFPL);
							if (_v8.$ === 'Just') {
								var f2 = _v8.a;
								var f = A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, f1, f2);
								return {
									errorCode: 0,
									message: $elm$json$Json$Encode$string(
										$author$project$LogicUS$PL$SyntaxSemantics$fplToString(f)),
									result: f
								};
							} else {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown source: (' + ($elm$core$String$fromInt(sources.origin2_id) + (', ' + ($elm$core$String$fromInt(sources.origin2_slot) + ')')))),
									result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
								};
							}
						} else {
							var _v9 = A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin2_id, sources.origin2_slot),
								outputsFPL);
							if (_v9.$ === 'Just') {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown source: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ')')))),
									result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
								};
							} else {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown sources: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ('). (' + ($elm$core$String$fromInt(sources.origin2_id) + (', ' + ($elm$core$String$fromInt(sources.origin2_slot) + ')')))))))),
									result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
								};
							}
						}
					case 'impl':
						var _v10 = A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(sources.origin1_id, sources.origin1_slot),
							outputsFPL);
						if (_v10.$ === 'Just') {
							var f1 = _v10.a;
							var _v11 = A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin2_id, sources.origin2_slot),
								outputsFPL);
							if (_v11.$ === 'Just') {
								var f2 = _v11.a;
								var f = A2($author$project$LogicUS$PL$SyntaxSemantics$Impl, f1, f2);
								return {
									errorCode: 0,
									message: $elm$json$Json$Encode$string(
										$author$project$LogicUS$PL$SyntaxSemantics$fplToString(f)),
									result: f
								};
							} else {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown source: (' + ($elm$core$String$fromInt(sources.origin2_id) + (', ' + ($elm$core$String$fromInt(sources.origin2_slot) + ')')))),
									result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
								};
							}
						} else {
							var _v12 = A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin2_id, sources.origin2_slot),
								outputsFPL);
							if (_v12.$ === 'Just') {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown source: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ')')))),
									result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
								};
							} else {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown sources: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ('). (' + ($elm$core$String$fromInt(sources.origin2_id) + (', ' + ($elm$core$String$fromInt(sources.origin2_slot) + ')')))))))),
									result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
								};
							}
						}
					case 'equi':
						var _v13 = A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(sources.origin1_id, sources.origin1_slot),
							outputsFPL);
						if (_v13.$ === 'Just') {
							var f1 = _v13.a;
							var _v14 = A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin2_id, sources.origin2_slot),
								outputsFPL);
							if (_v14.$ === 'Just') {
								var f2 = _v14.a;
								var f = A2($author$project$LogicUS$PL$SyntaxSemantics$Equi, f1, f2);
								return {
									errorCode: 0,
									message: $elm$json$Json$Encode$string(
										$author$project$LogicUS$PL$SyntaxSemantics$fplToString(f)),
									result: f
								};
							} else {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown source: (' + ($elm$core$String$fromInt(sources.origin2_id) + (', ' + ($elm$core$String$fromInt(sources.origin2_slot) + ')')))),
									result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
								};
							}
						} else {
							var _v15 = A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin2_id, sources.origin2_slot),
								outputsFPL);
							if (_v15.$ === 'Just') {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown source: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ')')))),
									result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
								};
							} else {
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown sources: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ('). (' + ($elm$core$String$fromInt(sources.origin2_id) + (', ' + ($elm$core$String$fromInt(sources.origin2_slot) + ')')))))))),
									result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
								};
							}
						}
					default:
						return {
							errorCode: 4,
							message: $elm$json$Json$Encode$string('undefined option for node of type ConnectivePL'),
							result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
						};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e)),
					result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
			};
		}
	});
var $author$project$LogicUS$PL$ForeignOperators$sigma = function (g) {
	sigma:
	while (true) {
		_v0$3:
		while (true) {
			_v0$4:
			while (true) {
				_v0$7:
				while (true) {
					_v0$8:
					while (true) {
						_v0$11:
						while (true) {
							_v0$12:
							while (true) {
								_v0$15:
								while (true) {
									_v0$16:
									while (true) {
										_v0$18:
										while (true) {
											switch (g.$) {
												case 'Neg':
													switch (g.a.$) {
														case 'Taut':
															var _v1 = g.a;
															return $author$project$LogicUS$PL$SyntaxSemantics$Insat;
														case 'Insat':
															var _v2 = g.a;
															return $author$project$LogicUS$PL$SyntaxSemantics$Taut;
														default:
															break _v0$18;
													}
												case 'Conj':
													switch (g.a.$) {
														case 'Taut':
															var _v3 = g.a;
															var h = g.b;
															return h;
														case 'Insat':
															switch (g.b.$) {
																case 'Taut':
																	break _v0$3;
																case 'Insat':
																	break _v0$4;
																default:
																	break _v0$4;
															}
														default:
															switch (g.b.$) {
																case 'Taut':
																	break _v0$3;
																case 'Insat':
																	var _v6 = g.b;
																	return $author$project$LogicUS$PL$SyntaxSemantics$Insat;
																default:
																	break _v0$18;
															}
													}
												case 'Disj':
													switch (g.a.$) {
														case 'Taut':
															var _v7 = g.a;
															return $author$project$LogicUS$PL$SyntaxSemantics$Taut;
														case 'Insat':
															switch (g.b.$) {
																case 'Taut':
																	break _v0$7;
																case 'Insat':
																	break _v0$8;
																default:
																	break _v0$8;
															}
														default:
															switch (g.b.$) {
																case 'Taut':
																	break _v0$7;
																case 'Insat':
																	var h = g.a;
																	var _v10 = g.b;
																	return h;
																default:
																	break _v0$18;
															}
													}
												case 'Impl':
													switch (g.a.$) {
														case 'Taut':
															var _v11 = g.a;
															var h = g.b;
															return h;
														case 'Insat':
															switch (g.b.$) {
																case 'Taut':
																	break _v0$11;
																case 'Insat':
																	break _v0$12;
																default:
																	break _v0$12;
															}
														default:
															switch (g.b.$) {
																case 'Taut':
																	break _v0$11;
																case 'Insat':
																	var h = g.a;
																	var _v14 = g.b;
																	var $temp$g = $author$project$LogicUS$PL$SyntaxSemantics$Neg(h);
																	g = $temp$g;
																	continue sigma;
																default:
																	break _v0$18;
															}
													}
												case 'Equi':
													switch (g.b.$) {
														case 'Taut':
															var h = g.a;
															var _v15 = g.b;
															return h;
														case 'Insat':
															switch (g.a.$) {
																case 'Taut':
																	break _v0$15;
																case 'Insat':
																	break _v0$16;
																default:
																	var h = g.a;
																	var _v18 = g.b;
																	var $temp$g = $author$project$LogicUS$PL$SyntaxSemantics$Neg(h);
																	g = $temp$g;
																	continue sigma;
															}
														default:
															switch (g.a.$) {
																case 'Taut':
																	break _v0$15;
																case 'Insat':
																	break _v0$16;
																default:
																	break _v0$18;
															}
													}
												default:
													break _v0$18;
											}
										}
										return g;
									}
									var _v17 = g.a;
									var h = g.b;
									var $temp$g = $author$project$LogicUS$PL$SyntaxSemantics$Neg(h);
									g = $temp$g;
									continue sigma;
								}
								var _v16 = g.a;
								var h = g.b;
								return h;
							}
							var _v13 = g.a;
							return $author$project$LogicUS$PL$SyntaxSemantics$Taut;
						}
						var _v12 = g.b;
						return $author$project$LogicUS$PL$SyntaxSemantics$Taut;
					}
					var _v9 = g.a;
					var h = g.b;
					return h;
				}
				var _v8 = g.b;
				return $author$project$LogicUS$PL$SyntaxSemantics$Taut;
			}
			var _v5 = g.a;
			return $author$project$LogicUS$PL$SyntaxSemantics$Insat;
		}
		var h = g.a;
		var _v4 = g.b;
		return h;
	}
};
var $author$project$LogicUS$PL$ForeignOperators$canonicFOF = F2(
	function (f, p) {
		switch (f.$) {
			case 'Atom':
				var q = f.a;
				return _Utils_eq(p, q) ? $author$project$LogicUS$PL$SyntaxSemantics$Insat : $author$project$LogicUS$PL$SyntaxSemantics$Atom(q);
			case 'Neg':
				var g = f.a;
				return $author$project$LogicUS$PL$ForeignOperators$sigma(
					$author$project$LogicUS$PL$SyntaxSemantics$Neg(
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOF, g, p)));
			case 'Conj':
				var g = f.a;
				var h = f.b;
				return $author$project$LogicUS$PL$ForeignOperators$sigma(
					A2(
						$author$project$LogicUS$PL$SyntaxSemantics$Conj,
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOF, g, p),
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOF, h, p)));
			case 'Disj':
				var g = f.a;
				var h = f.b;
				return $author$project$LogicUS$PL$ForeignOperators$sigma(
					A2(
						$author$project$LogicUS$PL$SyntaxSemantics$Disj,
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOF, g, p),
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOF, h, p)));
			case 'Impl':
				var g = f.a;
				var h = f.b;
				return $author$project$LogicUS$PL$ForeignOperators$sigma(
					A2(
						$author$project$LogicUS$PL$SyntaxSemantics$Impl,
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOF, g, p),
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOF, h, p)));
			case 'Equi':
				var g = f.a;
				var h = f.b;
				return $author$project$LogicUS$PL$ForeignOperators$sigma(
					A2(
						$author$project$LogicUS$PL$SyntaxSemantics$Equi,
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOF, g, p),
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOF, h, p)));
			default:
				return f;
		}
	});
var $author$project$LogicUS$PL$ForeignOperators$canonicFOT = F2(
	function (f, p) {
		switch (f.$) {
			case 'Atom':
				var q = f.a;
				return _Utils_eq(p, q) ? $author$project$LogicUS$PL$SyntaxSemantics$Taut : $author$project$LogicUS$PL$SyntaxSemantics$Atom(q);
			case 'Neg':
				var g = f.a;
				return $author$project$LogicUS$PL$ForeignOperators$sigma(
					$author$project$LogicUS$PL$SyntaxSemantics$Neg(
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOT, g, p)));
			case 'Conj':
				var g = f.a;
				var h = f.b;
				return $author$project$LogicUS$PL$ForeignOperators$sigma(
					A2(
						$author$project$LogicUS$PL$SyntaxSemantics$Conj,
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOT, g, p),
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOT, h, p)));
			case 'Disj':
				var g = f.a;
				var h = f.b;
				return $author$project$LogicUS$PL$ForeignOperators$sigma(
					A2(
						$author$project$LogicUS$PL$SyntaxSemantics$Disj,
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOT, g, p),
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOT, h, p)));
			case 'Impl':
				var g = f.a;
				var h = f.b;
				return $author$project$LogicUS$PL$ForeignOperators$sigma(
					A2(
						$author$project$LogicUS$PL$SyntaxSemantics$Impl,
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOT, g, p),
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOT, h, p)));
			case 'Equi':
				var g = f.a;
				var h = f.b;
				return $author$project$LogicUS$PL$ForeignOperators$sigma(
					A2(
						$author$project$LogicUS$PL$SyntaxSemantics$Equi,
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOT, g, p),
						A2($author$project$LogicUS$PL$ForeignOperators$canonicFOT, h, p)));
			default:
				return f;
		}
	});
var $elm$core$Set$singleton = function (key) {
	return $elm$core$Set$Set_elm_builtin(
		A2($elm$core$Dict$singleton, key, _Utils_Tuple0));
};
var $elm$core$Set$union = F2(
	function (_v0, _v1) {
		var dict1 = _v0.a;
		var dict2 = _v1.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$union, dict1, dict2));
	});
var $author$project$LogicUS$PL$SyntaxSemantics$fplSymbolsAux = function (f) {
	fplSymbolsAux:
	while (true) {
		switch (f.$) {
			case 'Atom':
				var psymb = f.a;
				return $elm$core$Set$singleton(psymb);
			case 'Neg':
				var p = f.a;
				var $temp$f = p;
				f = $temp$f;
				continue fplSymbolsAux;
			case 'Conj':
				var p = f.a;
				var q = f.b;
				return A2(
					$elm$core$Set$union,
					$author$project$LogicUS$PL$SyntaxSemantics$fplSymbolsAux(p),
					$author$project$LogicUS$PL$SyntaxSemantics$fplSymbolsAux(q));
			case 'Disj':
				var p = f.a;
				var q = f.b;
				return A2(
					$elm$core$Set$union,
					$author$project$LogicUS$PL$SyntaxSemantics$fplSymbolsAux(p),
					$author$project$LogicUS$PL$SyntaxSemantics$fplSymbolsAux(q));
			case 'Impl':
				var p = f.a;
				var q = f.b;
				return A2(
					$elm$core$Set$union,
					$author$project$LogicUS$PL$SyntaxSemantics$fplSymbolsAux(p),
					$author$project$LogicUS$PL$SyntaxSemantics$fplSymbolsAux(q));
			case 'Equi':
				var p = f.a;
				var q = f.b;
				return A2(
					$elm$core$Set$union,
					$author$project$LogicUS$PL$SyntaxSemantics$fplSymbolsAux(p),
					$author$project$LogicUS$PL$SyntaxSemantics$fplSymbolsAux(q));
			case 'Insat':
				return $elm$core$Set$empty;
			default:
				return $elm$core$Set$empty;
		}
	}
};
var $author$project$LogicUS$PL$SyntaxSemantics$fplSymbols = function (f) {
	return $elm$core$List$sort(
		$elm$core$Set$toList(
			$author$project$LogicUS$PL$SyntaxSemantics$fplSymbolsAux(f)));
};
var $author$project$LogicUS$PL$ForeignOperators$canonicFO = F2(
	function (f, p) {
		return A2(
			$elm$core$List$member,
			p,
			$author$project$LogicUS$PL$SyntaxSemantics$fplSymbols(f)) ? $author$project$LogicUS$PL$ForeignOperators$sigma(
			A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Disj,
				A2($author$project$LogicUS$PL$ForeignOperators$canonicFOT, f, p),
				A2($author$project$LogicUS$PL$ForeignOperators$canonicFOF, f, p))) : f;
	});
var $author$project$LogicUS$PL$AuxiliarFunctions$setMinus = F2(
	function (xs, ys) {
		return A2(
			$elm$core$List$filter,
			function (x) {
				return !A2($elm$core$List$member, x, ys);
			},
			xs);
	});
var $author$project$LogicUS$PL$ForeignOperators$fplConservativeRetraction = F2(
	function (f, ls) {
		var lsf = $elm$core$List$sort(
			$elm_community$list_extra$List$Extra$unique(
				A2(
					$author$project$LogicUS$PL$AuxiliarFunctions$setMinus,
					$author$project$LogicUS$PL$SyntaxSemantics$fplSymbols(f),
					ls)));
		return A3(
			$elm$core$List$foldl,
			F2(
				function (p, g) {
					return A2($author$project$LogicUS$PL$ForeignOperators$canonicFO, g, p);
				}),
			f,
			lsf);
	});
var $author$project$LogicUS$PL$SyntaxSemantics$AndOp = {$: 'AndOp'};
var $author$project$LogicUS$PL$SyntaxSemantics$ImplOp = {$: 'ImplOp'};
var $author$project$LogicUS$PL$SyntaxSemantics$OrOp = {$: 'OrOp'};
var $author$project$LogicUS$PL$SyntaxSemantics$finalize = F2(
	function (revOps, finalExpr) {
		finalize:
		while (true) {
			_v0$6:
			while (true) {
				_v0$10:
				while (true) {
					if (!revOps.b) {
						return finalExpr;
					} else {
						switch (revOps.a.b.$) {
							case 'AndOp':
								var _v1 = revOps.a;
								var expr = _v1.a;
								var _v2 = _v1.b;
								var otherRevOps = revOps.b;
								var $temp$revOps = otherRevOps,
									$temp$finalExpr = A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, expr, finalExpr);
								revOps = $temp$revOps;
								finalExpr = $temp$finalExpr;
								continue finalize;
							case 'OrOp':
								if (revOps.b.b && (revOps.b.a.b.$ === 'AndOp')) {
									var _v3 = revOps.a;
									var expr = _v3.a;
									var _v4 = _v3.b;
									var _v5 = revOps.b;
									var _v6 = _v5.a;
									var expr2 = _v6.a;
									var _v7 = _v6.b;
									var otherRevOps = _v5.b;
									return A2(
										$author$project$LogicUS$PL$SyntaxSemantics$Disj,
										A2(
											$author$project$LogicUS$PL$SyntaxSemantics$finalize,
											A2(
												$elm$core$List$cons,
												_Utils_Tuple2(expr2, $author$project$LogicUS$PL$SyntaxSemantics$AndOp),
												otherRevOps),
											expr),
										finalExpr);
								} else {
									var _v8 = revOps.a;
									var expr = _v8.a;
									var _v9 = _v8.b;
									var otherRevOps = revOps.b;
									var $temp$revOps = otherRevOps,
										$temp$finalExpr = A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, expr, finalExpr);
									revOps = $temp$revOps;
									finalExpr = $temp$finalExpr;
									continue finalize;
								}
							case 'ImplOp':
								if (revOps.b.b) {
									switch (revOps.b.a.b.$) {
										case 'AndOp':
											var _v10 = revOps.a;
											var expr = _v10.a;
											var _v11 = _v10.b;
											var _v12 = revOps.b;
											var _v13 = _v12.a;
											var expr2 = _v13.a;
											var _v14 = _v13.b;
											var otherRevOps = _v12.b;
											return A2(
												$author$project$LogicUS$PL$SyntaxSemantics$Impl,
												A2(
													$author$project$LogicUS$PL$SyntaxSemantics$finalize,
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(expr2, $author$project$LogicUS$PL$SyntaxSemantics$AndOp),
														otherRevOps),
													expr),
												finalExpr);
										case 'OrOp':
											var _v15 = revOps.a;
											var expr = _v15.a;
											var _v16 = _v15.b;
											var _v17 = revOps.b;
											var _v18 = _v17.a;
											var expr2 = _v18.a;
											var _v19 = _v18.b;
											var otherRevOps = _v17.b;
											return A2(
												$author$project$LogicUS$PL$SyntaxSemantics$Impl,
												A2(
													$author$project$LogicUS$PL$SyntaxSemantics$finalize,
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(expr2, $author$project$LogicUS$PL$SyntaxSemantics$OrOp),
														otherRevOps),
													expr),
												finalExpr);
										default:
											break _v0$6;
									}
								} else {
									break _v0$6;
								}
							default:
								if (revOps.b.b) {
									switch (revOps.b.a.b.$) {
										case 'AndOp':
											var _v22 = revOps.a;
											var expr = _v22.a;
											var _v23 = _v22.b;
											var _v24 = revOps.b;
											var _v25 = _v24.a;
											var expr2 = _v25.a;
											var _v26 = _v25.b;
											var otherRevOps = _v24.b;
											return A2(
												$author$project$LogicUS$PL$SyntaxSemantics$Equi,
												A2(
													$author$project$LogicUS$PL$SyntaxSemantics$finalize,
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(expr2, $author$project$LogicUS$PL$SyntaxSemantics$AndOp),
														otherRevOps),
													expr),
												finalExpr);
										case 'OrOp':
											var _v27 = revOps.a;
											var expr = _v27.a;
											var _v28 = _v27.b;
											var _v29 = revOps.b;
											var _v30 = _v29.a;
											var expr2 = _v30.a;
											var _v31 = _v30.b;
											var otherRevOps = _v29.b;
											return A2(
												$author$project$LogicUS$PL$SyntaxSemantics$Equi,
												A2(
													$author$project$LogicUS$PL$SyntaxSemantics$finalize,
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(expr2, $author$project$LogicUS$PL$SyntaxSemantics$OrOp),
														otherRevOps),
													expr),
												finalExpr);
										case 'ImplOp':
											var _v32 = revOps.a;
											var expr = _v32.a;
											var _v33 = _v32.b;
											var _v34 = revOps.b;
											var _v35 = _v34.a;
											var expr2 = _v35.a;
											var _v36 = _v35.b;
											var otherRevOps = _v34.b;
											return A2(
												$author$project$LogicUS$PL$SyntaxSemantics$Equi,
												A2(
													$author$project$LogicUS$PL$SyntaxSemantics$finalize,
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(expr2, $author$project$LogicUS$PL$SyntaxSemantics$ImplOp),
														otherRevOps),
													expr),
												finalExpr);
										default:
											break _v0$10;
									}
								} else {
									break _v0$10;
								}
						}
					}
				}
				var _v37 = revOps.a;
				var expr = _v37.a;
				var _v38 = _v37.b;
				var otherRevOps = revOps.b;
				var $temp$revOps = otherRevOps,
					$temp$finalExpr = A2($author$project$LogicUS$PL$SyntaxSemantics$Equi, expr, finalExpr);
				revOps = $temp$revOps;
				finalExpr = $temp$finalExpr;
				continue finalize;
			}
			var _v20 = revOps.a;
			var expr = _v20.a;
			var _v21 = _v20.b;
			var otherRevOps = revOps.b;
			var $temp$revOps = otherRevOps,
				$temp$finalExpr = A2($author$project$LogicUS$PL$SyntaxSemantics$Impl, expr, finalExpr);
			revOps = $temp$revOps;
			finalExpr = $temp$finalExpr;
			continue finalize;
		}
	});
var $author$project$LogicUS$PL$SyntaxSemantics$EquivOp = {$: 'EquivOp'};
var $author$project$LogicUS$PL$SyntaxSemantics$operator = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$SyntaxSemantics$AndOp),
			$elm$parser$Parser$symbol('&')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$SyntaxSemantics$AndOp),
			$elm$parser$Parser$symbol('∧')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$SyntaxSemantics$OrOp),
			$elm$parser$Parser$symbol('|')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$SyntaxSemantics$OrOp),
			$elm$parser$Parser$symbol('∨')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$SyntaxSemantics$ImplOp),
			$elm$parser$Parser$symbol('->')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$SyntaxSemantics$ImplOp),
			$elm$parser$Parser$symbol('→')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$SyntaxSemantics$EquivOp),
			$elm$parser$Parser$symbol('<->')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$PL$SyntaxSemantics$EquivOp),
			$elm$parser$Parser$symbol('↔'))
		]));
var $author$project$LogicUS$PL$SyntaxSemantics$plVarNameParser = $elm$parser$Parser$getChompedString(
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(_Utils_Tuple0),
			$elm$parser$Parser$chompIf($elm$core$Char$isAlphaNum)),
		$elm$parser$Parser$chompWhile($elm$core$Char$isAlphaNum)));
var $author$project$LogicUS$PL$SyntaxSemantics$plVarIdentifierSubindexedParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($elm$core$Tuple$pair),
		$author$project$LogicUS$PL$SyntaxSemantics$plVarNameParser),
	$elm$parser$Parser$sequence(
		{end: '}', item: $elm$parser$Parser$int, separator: ',', spaces: $elm$parser$Parser$spaces, start: '_{', trailing: $elm$parser$Parser$Forbidden}));
var $author$project$LogicUS$PL$SyntaxSemantics$plVarParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$backtrackable($author$project$LogicUS$PL$SyntaxSemantics$plVarIdentifierSubindexedParser)),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				function (x) {
					return _Utils_Tuple2(x, _List_Nil);
				}),
			$author$project$LogicUS$PL$SyntaxSemantics$plVarNameParser)
		]));
var $author$project$LogicUS$PL$SyntaxSemantics$expressionAux = F2(
	function (revOps, expr) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$andThen,
					function (_v2) {
						var op = _v2.a;
						var newExpr = _v2.b;
						return A2(
							$author$project$LogicUS$PL$SyntaxSemantics$expressionAux,
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(expr, op),
								revOps),
							newExpr);
					},
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							$elm$parser$Parser$succeed($elm$core$Tuple$pair),
							$author$project$LogicUS$PL$SyntaxSemantics$operator),
						$author$project$LogicUS$PL$SyntaxSemantics$cyclic$fplParserAux())),
					$elm$parser$Parser$lazy(
					function (_v3) {
						return $elm$parser$Parser$succeed(
							A2($author$project$LogicUS$PL$SyntaxSemantics$finalize, revOps, expr));
					})
				]));
	});
function $author$project$LogicUS$PL$SyntaxSemantics$cyclic$expression() {
	return A2(
		$elm$parser$Parser$andThen,
		$author$project$LogicUS$PL$SyntaxSemantics$expressionAux(_List_Nil),
		$author$project$LogicUS$PL$SyntaxSemantics$cyclic$fplParserAux());
}
function $author$project$LogicUS$PL$SyntaxSemantics$cyclic$fplParserAux() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$symbol('(')),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$lazy(
						function (_v0) {
							return $author$project$LogicUS$PL$SyntaxSemantics$cyclic$expression();
						}),
					$elm$parser$Parser$symbol(')'))),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($author$project$LogicUS$PL$SyntaxSemantics$Neg),
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								$elm$parser$Parser$symbol('¬'),
								$elm$parser$Parser$symbol('-')
							]))),
				$elm$parser$Parser$lazy(
					function (_v1) {
						return $author$project$LogicUS$PL$SyntaxSemantics$cyclic$fplParserAux();
					})),
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($author$project$LogicUS$PL$SyntaxSemantics$Insat),
				$elm$parser$Parser$symbol('!F')),
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($author$project$LogicUS$PL$SyntaxSemantics$Insat),
				$elm$parser$Parser$symbol('⊥')),
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($author$project$LogicUS$PL$SyntaxSemantics$Taut),
				$elm$parser$Parser$symbol('!T')),
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($author$project$LogicUS$PL$SyntaxSemantics$Taut),
				$elm$parser$Parser$symbol('⊤')),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($author$project$LogicUS$PL$SyntaxSemantics$Atom),
				$author$project$LogicUS$PL$SyntaxSemantics$plVarParser)
			]));
}
try {
	var $author$project$LogicUS$PL$SyntaxSemantics$expression = $author$project$LogicUS$PL$SyntaxSemantics$cyclic$expression();
	$author$project$LogicUS$PL$SyntaxSemantics$cyclic$expression = function () {
		return $author$project$LogicUS$PL$SyntaxSemantics$expression;
	};
	var $author$project$LogicUS$PL$SyntaxSemantics$fplParserAux = $author$project$LogicUS$PL$SyntaxSemantics$cyclic$fplParserAux();
	$author$project$LogicUS$PL$SyntaxSemantics$cyclic$fplParserAux = function () {
		return $author$project$LogicUS$PL$SyntaxSemantics$fplParserAux;
	};
} catch ($) {
	throw 'Some top-level definitions from `LogicUS.PL.SyntaxSemantics` are causing infinite recursion:\n\n  ┌─────┐\n  │    expression\n  │     ↓\n  │    expressionAux\n  │     ↓\n  │    fplParserAux\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $author$project$LogicUS$PL$SyntaxSemantics$fplParser = A2(
	$elm$parser$Parser$keeper,
	$elm$parser$Parser$succeed($elm$core$Basics$identity),
	A2($elm$parser$Parser$ignorer, $author$project$LogicUS$PL$SyntaxSemantics$fplParserAux, $elm$parser$Parser$end));
var $author$project$LogicUS$PL$SyntaxSemantics$fplToInputString = function (f) {
	switch (f.$) {
		case 'Atom':
			if (!f.a.b.b) {
				var _v1 = f.a;
				var vname = _v1.a;
				return _Utils_ap(
					A2(
						$elm$core$Basics$composeL,
						$elm$core$String$toLower,
						$elm$core$String$left(1))(vname),
					A2($elm$core$String$dropLeft, 1, vname));
			} else {
				var _v2 = f.a;
				var vname = _v2.a;
				var vindices = _v2.b;
				return A2(
					$elm$core$Basics$composeL,
					$elm$core$String$toLower,
					$elm$core$String$left(1))(vname) + (A2($elm$core$String$dropLeft, 1, vname) + ('_{' + (A2(
					$elm$core$String$join,
					',',
					A2($elm$core$List$map, $elm$core$String$fromInt, vindices)) + '}')));
			}
		case 'Neg':
			var p = f.a;
			return '¬' + $author$project$LogicUS$PL$SyntaxSemantics$fplToInputString(p);
		case 'Conj':
			var p = f.a;
			var q = f.b;
			return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToInputString(p) + ('&' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToInputString(q) + ')')));
		case 'Disj':
			var p = f.a;
			var q = f.b;
			return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToInputString(p) + ('|' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToInputString(q) + ')')));
		case 'Impl':
			var p = f.a;
			var q = f.b;
			return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToInputString(p) + ('->' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToInputString(q) + ')')));
		case 'Equi':
			var p = f.a;
			var q = f.b;
			return '(' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToInputString(p) + ('<->' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToInputString(q) + ')')));
		case 'Insat':
			return '!F';
		default:
			return '!T';
	}
};
var $author$project$LogicUS$PL$SyntaxSemantics$fplReadFromString = function (x) {
	var _v0 = $author$project$LogicUS$PL$AuxiliarFunctions$cleanSpaces(x);
	if (_v0 === '') {
		return _Utils_Tuple3($elm$core$Maybe$Nothing, '', 'Argument is empty');
	} else {
		var s = _v0;
		var _v1 = A2($elm$parser$Parser$run, $author$project$LogicUS$PL$SyntaxSemantics$fplParser, '(' + (s + ')'));
		if (_v1.$ === 'Ok') {
			var y = _v1.a;
			return _Utils_Tuple3(
				$elm$core$Maybe$Just(y),
				$author$project$LogicUS$PL$SyntaxSemantics$fplToInputString(y),
				'');
		} else {
			var y = _v1.a;
			return _Utils_Tuple3(
				$elm$core$Maybe$Nothing,
				'(' + (s + ')'),
				'Error: ' + A3(
					$elm$core$String$replace,
					'\"',
					'\'',
					$elm$core$Debug$toString(y)));
		}
	}
};
var $author$project$LogicUS$PL$SyntaxSemantics$splSymbols = function (fs) {
	return $elm$core$List$sort(
		$elm$core$Set$toList(
			A3(
				$elm$core$List$foldr,
				F2(
					function (x, acc) {
						return A2(
							$elm$core$Set$union,
							acc,
							$author$project$LogicUS$PL$SyntaxSemantics$fplSymbolsAux(x));
					}),
				$elm$core$Set$empty,
				fs)));
};
var $author$project$PLExtProcessors$processConservativeRetractionFPL = F2(
	function (content, outputsFPL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A4(
			$elm$json$Json$Decode$map3,
			F3(
				function (x, y, z) {
					return {input: y, option: x, vars: z};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['vars']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var source = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(source.origin_id, source.origin_slot),
					outputsFPL);
				if (_v2.$ === 'Just') {
					var f = _v2.a;
					var varsLecture = A2(
						$elm$core$List$map,
						$author$project$LogicUS$PL$SyntaxSemantics$fplReadFromString,
						A2($elm$core$String$split, ',', c.vars));
					if (A2(
						$elm$core$List$any,
						function (_v3) {
							var x = _v3.a;
							return _Utils_eq(x, $elm$core$Maybe$Nothing);
						},
						varsLecture)) {
						return {
							errorCode: 1,
							message: $elm$json$Json$Encode$string(
								A2(
									$elm$core$String$join,
									'.',
									A2(
										$elm$core$List$indexedMap,
										F2(
											function (i, _v4) {
												var m = _v4.c;
												return (m !== '') ? ('var' + ($elm$core$String$fromInt(i) + (' : ' + m))) : '';
											}),
										varsLecture))),
							result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
						};
					} else {
						var vars = $author$project$LogicUS$PL$SyntaxSemantics$splSymbols(
							A2(
								$elm$core$List$map,
								function (_v6) {
									var x = _v6.a;
									return A2($elm$core$Maybe$withDefault, $author$project$LogicUS$PL$SyntaxSemantics$Insat, x);
								},
								varsLecture));
						var _v5 = c.option;
						if (_v5 === 'canonicFO') {
							var f_ = A2($author$project$LogicUS$PL$ForeignOperators$fplConservativeRetraction, f, vars);
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$fplToString(f_)),
								result: f_
							};
						} else {
							return {
								errorCode: 4,
								message: $elm$json$Json$Encode$string('Unknown option (' + (c.option + ') for ConservativeRetractionFPL')),
								result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
							};
						}
					}
				} else {
					return {
						errorCode: 2,
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')')))),
						result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e)),
					result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
			};
		}
	});
var $author$project$LogicUS$PL$ForeignOperators$splConservativeRetraction = F2(
	function (fs, ls) {
		var lsf = $elm$core$List$sort(
			$elm_community$list_extra$List$Extra$unique(
				A2(
					$author$project$LogicUS$PL$AuxiliarFunctions$setMinus,
					$author$project$LogicUS$PL$SyntaxSemantics$splSymbols(fs),
					ls)));
		return A3(
			$elm$core$List$foldl,
			F2(
				function (p, gs) {
					return A2(
						$elm$core$List$map,
						function (g) {
							return A2($author$project$LogicUS$PL$ForeignOperators$canonicFO, g, p);
						},
						gs);
				}),
			fs,
			lsf);
	});
var $author$project$PLExtProcessors$processConservativeRetractionSPL = F2(
	function (content, outputsSPL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A4(
			$elm$json$Json$Decode$map3,
			F3(
				function (x, y, z) {
					return {input: y, option: x, vars: z};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['vars']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var source = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(source.origin_id, source.origin_slot),
					outputsSPL);
				if (_v2.$ === 'Just') {
					var fs = _v2.a;
					var varsLecture = A2(
						$elm$core$List$map,
						$author$project$LogicUS$PL$SyntaxSemantics$fplReadFromString,
						A2($elm$core$String$split, ',', c.vars));
					if (A2(
						$elm$core$List$any,
						function (_v3) {
							var x = _v3.a;
							return _Utils_eq(x, $elm$core$Maybe$Nothing);
						},
						varsLecture)) {
						return {
							errorCode: 1,
							message: $elm$json$Json$Encode$string(
								A2(
									$elm$core$String$join,
									'.',
									A2(
										$elm$core$List$indexedMap,
										F2(
											function (i, _v4) {
												var m = _v4.c;
												return (m !== '') ? ('var' + ($elm$core$String$fromInt(i) + (' : ' + m))) : '';
											}),
										varsLecture))),
							result: _List_Nil
						};
					} else {
						var vars = $author$project$LogicUS$PL$SyntaxSemantics$splSymbols(
							A2(
								$elm$core$List$map,
								function (_v6) {
									var x = _v6.a;
									return A2($elm$core$Maybe$withDefault, $author$project$LogicUS$PL$SyntaxSemantics$Insat, x);
								},
								varsLecture));
						var _v5 = c.option;
						if (_v5 === 'canonicFO') {
							var fs_ = A2($author$project$LogicUS$PL$ForeignOperators$splConservativeRetraction, fs, vars);
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$splToString(fs_)),
								result: A2(
									$elm$core$List$filter,
									function (g) {
										return !_Utils_eq($author$project$LogicUS$PL$SyntaxSemantics$Taut, g);
									},
									fs_)
							};
						} else {
							return {
								errorCode: 4,
								message: $elm$json$Json$Encode$string('Unknown option (' + (c.option + ') for ConservativeRetractionSPL')),
								result: _List_Nil
							};
						}
					}
				} else {
					return {
						errorCode: 2,
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')')))),
						result: _List_Nil
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e)),
					result: _List_Nil
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: _List_Nil
			};
		}
	});
var $elm_community$graph$Graph$Edge = F3(
	function (from, to, label) {
		return {from: from, label: label, to: to};
	});
var $elm_community$graph$Graph$Node = F2(
	function (id, label) {
		return {id: id, label: label};
	});
var $elm_community$graph$Graph$Graph = function (a) {
	return {$: 'Graph', a: a};
};
var $elm_community$graph$Graph$NodeContext = F3(
	function (node, incoming, outgoing) {
		return {incoming: incoming, node: node, outgoing: outgoing};
	});
var $elm_community$intdict$IntDict$Empty = {$: 'Empty'};
var $elm_community$intdict$IntDict$empty = $elm_community$intdict$IntDict$Empty;
var $elm_community$intdict$IntDict$Inner = function (a) {
	return {$: 'Inner', a: a};
};
var $elm_community$intdict$IntDict$size = function (dict) {
	switch (dict.$) {
		case 'Empty':
			return 0;
		case 'Leaf':
			return 1;
		default:
			var i = dict.a;
			return i.size;
	}
};
var $elm_community$intdict$IntDict$inner = F3(
	function (p, l, r) {
		var _v0 = _Utils_Tuple2(l, r);
		if (_v0.a.$ === 'Empty') {
			var _v1 = _v0.a;
			return r;
		} else {
			if (_v0.b.$ === 'Empty') {
				var _v2 = _v0.b;
				return l;
			} else {
				return $elm_community$intdict$IntDict$Inner(
					{
						left: l,
						prefix: p,
						right: r,
						size: $elm_community$intdict$IntDict$size(l) + $elm_community$intdict$IntDict$size(r)
					});
			}
		}
	});
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$complement = _Bitwise_complement;
var $elm$core$Bitwise$or = _Bitwise_or;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm_community$intdict$IntDict$highestBitSet = function (n) {
	var shiftOr = F2(
		function (i, shift) {
			return i | (i >>> shift);
		});
	var n1 = A2(shiftOr, n, 1);
	var n2 = A2(shiftOr, n1, 2);
	var n3 = A2(shiftOr, n2, 4);
	var n4 = A2(shiftOr, n3, 8);
	var n5 = A2(shiftOr, n4, 16);
	return n5 & (~(n5 >>> 1));
};
var $elm_community$intdict$IntDict$signBit = $elm_community$intdict$IntDict$highestBitSet(-1);
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $elm_community$intdict$IntDict$isBranchingBitSet = function (p) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$Bitwise$xor($elm_community$intdict$IntDict$signBit),
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Bitwise$and(p.branchingBit),
			$elm$core$Basics$neq(0)));
};
var $elm_community$intdict$IntDict$higherBitMask = function (branchingBit) {
	return branchingBit ^ (~(branchingBit - 1));
};
var $elm_community$intdict$IntDict$lcp = F2(
	function (x, y) {
		var branchingBit = $elm_community$intdict$IntDict$highestBitSet(x ^ y);
		var mask = $elm_community$intdict$IntDict$higherBitMask(branchingBit);
		var prefixBits = x & mask;
		return {branchingBit: branchingBit, prefixBits: prefixBits};
	});
var $elm_community$intdict$IntDict$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm_community$intdict$IntDict$leaf = F2(
	function (k, v) {
		return $elm_community$intdict$IntDict$Leaf(
			{key: k, value: v});
	});
var $elm_community$intdict$IntDict$prefixMatches = F2(
	function (p, n) {
		return _Utils_eq(
			n & $elm_community$intdict$IntDict$higherBitMask(p.branchingBit),
			p.prefixBits);
	});
var $elm_community$intdict$IntDict$update = F3(
	function (key, alter, dict) {
		var join = F2(
			function (_v2, _v3) {
				var k1 = _v2.a;
				var l = _v2.b;
				var k2 = _v3.a;
				var r = _v3.b;
				var prefix = A2($elm_community$intdict$IntDict$lcp, k1, k2);
				return A2($elm_community$intdict$IntDict$isBranchingBitSet, prefix, k2) ? A3($elm_community$intdict$IntDict$inner, prefix, l, r) : A3($elm_community$intdict$IntDict$inner, prefix, r, l);
			});
		var alteredNode = function (mv) {
			var _v1 = alter(mv);
			if (_v1.$ === 'Just') {
				var v = _v1.a;
				return A2($elm_community$intdict$IntDict$leaf, key, v);
			} else {
				return $elm_community$intdict$IntDict$empty;
			}
		};
		switch (dict.$) {
			case 'Empty':
				return alteredNode($elm$core$Maybe$Nothing);
			case 'Leaf':
				var l = dict.a;
				return _Utils_eq(l.key, key) ? alteredNode(
					$elm$core$Maybe$Just(l.value)) : A2(
					join,
					_Utils_Tuple2(
						key,
						alteredNode($elm$core$Maybe$Nothing)),
					_Utils_Tuple2(l.key, dict));
			default:
				var i = dict.a;
				return A2($elm_community$intdict$IntDict$prefixMatches, i.prefix, key) ? (A2($elm_community$intdict$IntDict$isBranchingBitSet, i.prefix, key) ? A3(
					$elm_community$intdict$IntDict$inner,
					i.prefix,
					i.left,
					A3($elm_community$intdict$IntDict$update, key, alter, i.right)) : A3(
					$elm_community$intdict$IntDict$inner,
					i.prefix,
					A3($elm_community$intdict$IntDict$update, key, alter, i.left),
					i.right)) : A2(
					join,
					_Utils_Tuple2(
						key,
						alteredNode($elm$core$Maybe$Nothing)),
					_Utils_Tuple2(i.prefix.prefixBits, dict));
		}
	});
var $elm_community$intdict$IntDict$insert = F3(
	function (key, value, dict) {
		return A3(
			$elm_community$intdict$IntDict$update,
			key,
			$elm$core$Basics$always(
				$elm$core$Maybe$Just(value)),
			dict);
	});
var $elm_community$intdict$IntDict$get = F2(
	function (key, dict) {
		get:
		while (true) {
			switch (dict.$) {
				case 'Empty':
					return $elm$core$Maybe$Nothing;
				case 'Leaf':
					var l = dict.a;
					return _Utils_eq(l.key, key) ? $elm$core$Maybe$Just(l.value) : $elm$core$Maybe$Nothing;
				default:
					var i = dict.a;
					if (!A2($elm_community$intdict$IntDict$prefixMatches, i.prefix, key)) {
						return $elm$core$Maybe$Nothing;
					} else {
						if (A2($elm_community$intdict$IntDict$isBranchingBitSet, i.prefix, key)) {
							var $temp$key = key,
								$temp$dict = i.right;
							key = $temp$key;
							dict = $temp$dict;
							continue get;
						} else {
							var $temp$key = key,
								$temp$dict = i.left;
							key = $temp$key;
							dict = $temp$dict;
							continue get;
						}
					}
			}
		}
	});
var $elm_community$intdict$IntDict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm_community$intdict$IntDict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm_community$graph$Graph$fromNodesAndEdges = F2(
	function (nodes_, edges_) {
		var nodeRep = A3(
			$elm$core$List$foldl,
			function (n) {
				return A2(
					$elm_community$intdict$IntDict$insert,
					n.id,
					A3($elm_community$graph$Graph$NodeContext, n, $elm_community$intdict$IntDict$empty, $elm_community$intdict$IntDict$empty));
			},
			$elm_community$intdict$IntDict$empty,
			nodes_);
		var addEdge = F2(
			function (edge, rep) {
				var updateOutgoing = function (ctx) {
					return _Utils_update(
						ctx,
						{
							outgoing: A3($elm_community$intdict$IntDict$insert, edge.to, edge.label, ctx.outgoing)
						});
				};
				var updateIncoming = function (ctx) {
					return _Utils_update(
						ctx,
						{
							incoming: A3($elm_community$intdict$IntDict$insert, edge.from, edge.label, ctx.incoming)
						});
				};
				return A3(
					$elm_community$intdict$IntDict$update,
					edge.to,
					$elm$core$Maybe$map(updateIncoming),
					A3(
						$elm_community$intdict$IntDict$update,
						edge.from,
						$elm$core$Maybe$map(updateOutgoing),
						rep));
			});
		var addEdgeIfValid = F2(
			function (edge, rep) {
				return (A2($elm_community$intdict$IntDict$member, edge.from, rep) && A2($elm_community$intdict$IntDict$member, edge.to, rep)) ? A2(addEdge, edge, rep) : rep;
			});
		return $elm_community$graph$Graph$Graph(
			A3($elm$core$List$foldl, addEdgeIfValid, nodeRep, edges_));
	});
var $elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _v0) {
				var trues = _v0.a;
				var falses = _v0.b;
				return pred(x) ? _Utils_Tuple2(
					A2($elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2($elm$core$List$cons, x, falses));
			});
		return A3(
			$elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var $elm_community$list_extra$List$Extra$gatherWith = F2(
	function (testFn, list) {
		var helper = F2(
			function (scattered, gathered) {
				helper:
				while (true) {
					if (!scattered.b) {
						return $elm$core$List$reverse(gathered);
					} else {
						var toGather = scattered.a;
						var population = scattered.b;
						var _v1 = A2(
							$elm$core$List$partition,
							testFn(toGather),
							population);
						var gathering = _v1.a;
						var remaining = _v1.b;
						var $temp$scattered = remaining,
							$temp$gathered = A2(
							$elm$core$List$cons,
							_Utils_Tuple2(toGather, gathering),
							gathered);
						scattered = $temp$scattered;
						gathered = $temp$gathered;
						continue helper;
					}
				}
			});
		return A2(helper, list, _List_Nil);
	});
var $elm_community$list_extra$List$Extra$gatherEqualsBy = F2(
	function (extract, list) {
		return A2(
			$elm_community$list_extra$List$Extra$gatherWith,
			F2(
				function (a, b) {
					return _Utils_eq(
						extract(a),
						extract(b));
				}),
			list);
	});
var $elm_community$list_extra$List$Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _v1) {
				var y = _v1.a;
				var fy = _v1.b;
				var fx = f(x);
				return (_Utils_cmp(fx, fy) > 0) ? _Utils_Tuple2(x, fx) : _Utils_Tuple2(y, fy);
			});
		if (ls.b) {
			if (!ls.b.b) {
				var l_ = ls.a;
				return $elm$core$Maybe$Just(l_);
			} else {
				var l_ = ls.a;
				var ls_ = ls.b;
				return $elm$core$Maybe$Just(
					A3(
						$elm$core$List$foldl,
						maxBy,
						_Utils_Tuple2(
							l_,
							f(l_)),
						ls_).a);
			}
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$LogicUS$PL$DPLL$dpll = function (cs) {
	var new_cs = $author$project$LogicUS$PL$Clauses$csplRemoveSubsumedClauses(
		$author$project$LogicUS$PL$Clauses$csplRemoveTautClauses(cs));
	var dpllAux = F2(
		function (clauses, nid) {
			var propagation = function (_v9) {
				var lsymb = _v9.a;
				var lsign = _v9.b;
				return $author$project$LogicUS$PL$Clauses$csplRemoveSubsumedClauses(
					A3(
						$elm$core$List$foldl,
						F2(
							function (x, ac) {
								return A2(
									$elm$core$List$member,
									_Utils_Tuple2(lsymb, lsign),
									x) ? ac : _Utils_ap(
									ac,
									_List_fromArray(
										[
											A2(
											$elm$core$List$filter,
											function (_v8) {
												var ysymb = _v8.a;
												return !_Utils_eq(ysymb, lsymb);
											},
											x)
										]));
							}),
						_List_Nil,
						clauses));
			};
			if ($elm$core$List$isEmpty(clauses)) {
				return _Utils_Tuple2(
					_List_fromArray(
						[
							A2(
							$elm_community$graph$Graph$Node,
							nid,
							_Utils_Tuple2(1, clauses))
						]),
					_List_Nil);
			} else {
				if (A2(
					$elm$core$List$any,
					function (c) {
						return $elm$core$List$isEmpty(c);
					},
					clauses)) {
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(
								$elm_community$graph$Graph$Node,
								nid,
								_Utils_Tuple2(-1, clauses))
							]),
						_List_Nil);
				} else {
					var _v0 = $elm$core$List$head(
						A2(
							$elm$core$List$filter,
							function (x) {
								return $elm$core$List$length(x) === 1;
							},
							clauses));
					if (((_v0.$ === 'Just') && _v0.a.b) && (!_v0.a.b.b)) {
						var _v1 = _v0.a;
						var l = _v1.a;
						var new_clauses = propagation(l);
						var _v2 = A2(dpllAux, new_clauses, nid + 1);
						var nodes = _v2.a;
						var edges = _v2.b;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(
									$elm_community$graph$Graph$Node,
									nid,
									_Utils_Tuple2(0, clauses)),
								nodes),
							A2(
								$elm$core$List$cons,
								A3($elm_community$graph$Graph$Edge, nid, nid + 1, l),
								edges));
					} else {
						var psymbsOcurrFreq = A2(
							$elm$core$List$map,
							function (_v7) {
								var x = _v7.a;
								var xs = _v7.b;
								return _Utils_Tuple2(
									x.a,
									$elm$core$List$length(xs));
							},
							A2(
								$elm_community$list_extra$List$Extra$gatherEqualsBy,
								$elm$core$Tuple$first,
								$elm$core$List$concat(clauses)));
						var _v3 = A2($elm_community$list_extra$List$Extra$maximumBy, $elm$core$Tuple$second, psymbsOcurrFreq);
						if (_v3.$ === 'Just') {
							var _v4 = _v3.a;
							var lsymb = _v4.a;
							var new_clauses2 = propagation(
								_Utils_Tuple2(lsymb, false));
							var new_clauses1 = propagation(
								_Utils_Tuple2(lsymb, true));
							var _v5 = A2(dpllAux, new_clauses1, nid + 1);
							var nodes1 = _v5.a;
							var edges1 = _v5.b;
							var next_id = (nid + $elm$core$List$length(nodes1)) + 1;
							var _v6 = A2(dpllAux, new_clauses2, next_id);
							var nodes2 = _v6.a;
							var edges2 = _v6.b;
							return _Utils_Tuple2(
								A2(
									$elm$core$List$cons,
									A2(
										$elm_community$graph$Graph$Node,
										nid,
										_Utils_Tuple2(0, clauses)),
									_Utils_ap(nodes1, nodes2)),
								_Utils_ap(
									_List_fromArray(
										[
											A3(
											$elm_community$graph$Graph$Edge,
											nid,
											nid + 1,
											_Utils_Tuple2(lsymb, true)),
											A3(
											$elm_community$graph$Graph$Edge,
											nid,
											next_id,
											_Utils_Tuple2(lsymb, false))
										]),
									_Utils_ap(edges1, edges2)));
						} else {
							return _Utils_Tuple2(
								_List_fromArray(
									[
										A2(
										$elm_community$graph$Graph$Node,
										nid,
										_Utils_Tuple2(-1, clauses))
									]),
								_List_Nil);
						}
					}
				}
			}
		});
	var _v10 = A2(dpllAux, new_cs, 0);
	var nodes = _v10.a;
	var edges = _v10.b;
	return A2($elm_community$graph$Graph$fromNodesAndEdges, nodes, edges);
};
var $elm_community$graph$Graph$DOT$Styles = F4(
	function (rankdir, graph, node, edge) {
		return {edge: edge, graph: graph, node: node, rankdir: rankdir};
	});
var $elm_community$graph$Graph$DOT$TB = {$: 'TB'};
var $elm_community$graph$Graph$DOT$defaultStyles = A4($elm_community$graph$Graph$DOT$Styles, $elm_community$graph$Graph$DOT$TB, '', '', '');
var $elm_community$intdict$IntDict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			switch (dict.$) {
				case 'Empty':
					return acc;
				case 'Leaf':
					var l = dict.a;
					return A3(f, l.key, l.value, acc);
				default:
					var i = dict.a;
					var $temp$f = f,
						$temp$acc = A3($elm_community$intdict$IntDict$foldl, f, acc, i.left),
						$temp$dict = i.right;
					f = $temp$f;
					acc = $temp$acc;
					dict = $temp$dict;
					continue foldl;
			}
		}
	});
var $elm_community$graph$Graph$unGraph = function (graph) {
	var rep = graph.a;
	return rep;
};
var $elm_community$graph$Graph$edges = function (graph) {
	var flippedFoldl = F3(
		function (f, dict, list) {
			return A3($elm_community$intdict$IntDict$foldl, f, list, dict);
		});
	var prependEdges = F2(
		function (node1, ctx) {
			return A2(
				flippedFoldl,
				F2(
					function (node2, e) {
						return $elm$core$List$cons(
							{from: node1, label: e, to: node2});
					}),
				ctx.outgoing);
		});
	return A3(
		flippedFoldl,
		prependEdges,
		$elm_community$graph$Graph$unGraph(graph),
		_List_Nil);
};
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var $elm_community$intdict$IntDict$foldr = F3(
	function (f, acc, dict) {
		foldr:
		while (true) {
			switch (dict.$) {
				case 'Empty':
					return acc;
				case 'Leaf':
					var l = dict.a;
					return A3(f, l.key, l.value, acc);
				default:
					var i = dict.a;
					var $temp$f = f,
						$temp$acc = A3($elm_community$intdict$IntDict$foldr, f, acc, i.right),
						$temp$dict = i.left;
					f = $temp$f;
					acc = $temp$acc;
					dict = $temp$dict;
					continue foldr;
			}
		}
	});
var $elm_community$intdict$IntDict$values = function (dict) {
	return A3(
		$elm_community$intdict$IntDict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $elm_community$graph$Graph$nodes = A2(
	$elm$core$Basics$composeR,
	$elm_community$graph$Graph$unGraph,
	A2(
		$elm$core$Basics$composeR,
		$elm_community$intdict$IntDict$values,
		$elm$core$List$map(
			function ($) {
				return $.node;
			})));
var $elm_community$graph$Graph$DOT$outputWithStylesAndAttributes = F4(
	function (styles, nodeAttrs, edgeAttrs, graph) {
		var rankDirToString = function (r) {
			switch (r.$) {
				case 'TB':
					return 'TB';
				case 'LR':
					return 'LR';
				case 'BT':
					return 'BT';
				default:
					return 'RL';
			}
		};
		var nodes = $elm_community$graph$Graph$nodes(graph);
		var encode = A2(
			$elm$core$Basics$composeR,
			$elm$json$Json$Encode$string,
			$elm$json$Json$Encode$encode(0));
		var edges = function () {
			var compareEdge = F2(
				function (a, b) {
					var _v1 = A2($elm$core$Basics$compare, a.from, b.from);
					switch (_v1.$) {
						case 'LT':
							return $elm$core$Basics$LT;
						case 'GT':
							return $elm$core$Basics$GT;
						default:
							return A2($elm$core$Basics$compare, a.to, b.to);
					}
				});
			return A2(
				$elm$core$List$sortWith,
				compareEdge,
				$elm_community$graph$Graph$edges(graph));
		}();
		var attrAssocs = A2(
			$elm$core$Basics$composeR,
			$elm$core$Dict$toList,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$List$map(
					function (_v0) {
						var k = _v0.a;
						var v = _v0.b;
						return k + ('=' + encode(v));
					}),
				$elm$core$String$join(', ')));
		var makeAttrs = function (d) {
			return $elm$core$Dict$isEmpty(d) ? '' : (' [' + (attrAssocs(d) + ']'));
		};
		var edge = function (e) {
			return '  ' + ($elm$core$String$fromInt(e.from) + (' -> ' + ($elm$core$String$fromInt(e.to) + makeAttrs(
				edgeAttrs(e.label)))));
		};
		var edgesString = A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, edge, edges));
		var node = function (n) {
			return '  ' + ($elm$core$String$fromInt(n.id) + makeAttrs(
				nodeAttrs(n.label)));
		};
		var nodesString = A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, node, nodes));
		return A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[
					'digraph G {',
					'  rankdir=' + rankDirToString(styles.rankdir),
					'  graph [' + (styles.graph + ']'),
					'  node [' + (styles.node + ']'),
					'  edge [' + (styles.edge + ']'),
					'',
					edgesString,
					'',
					nodesString,
					'}'
				]));
	});
var $elm_community$graph$Graph$DOT$outputWithStyles = F4(
	function (styles, mapNode, mapEdge, graph) {
		var labelOnly = function (maybeLabel) {
			if (maybeLabel.$ === 'Nothing') {
				return $elm$core$Dict$empty;
			} else {
				var l = maybeLabel.a;
				return A2($elm$core$Dict$singleton, 'label', l);
			}
		};
		return A4(
			$elm_community$graph$Graph$DOT$outputWithStylesAndAttributes,
			styles,
			A2($elm$core$Basics$composeL, labelOnly, mapNode),
			A2($elm$core$Basics$composeL, labelOnly, mapEdge),
			graph);
	});
var $elm_community$graph$Graph$DOT$output = $elm_community$graph$Graph$DOT$outputWithStyles($elm_community$graph$Graph$DOT$defaultStyles);
var $author$project$LogicUS$PL$DPLL$dpllTableauToDOT = function (g) {
	var toStringNode = function (_v0) {
		var i = _v0.a;
		var cs = _v0.b;
		switch (i) {
			case 0:
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$String$join,
						', ',
						A2($elm$core$List$map, $author$project$LogicUS$PL$Clauses$cplToString, cs)));
			case 1:
				return $elm$core$Maybe$Just('◯');
			default:
				return $elm$core$Maybe$Just('□');
		}
	};
	var toStringEdge = function (l) {
		return A2(
			$elm$core$Basics$composeL,
			A2($elm$core$Basics$composeL, $elm$core$Maybe$Just, $author$project$LogicUS$PL$SyntaxSemantics$fplToString),
			$author$project$LogicUS$PL$Clauses$clauseLitToLiteral)(l);
	};
	return A3(
		$elm$core$String$replace,
		'\n',
		'',
		A3($elm_community$graph$Graph$DOT$output, toStringNode, toStringEdge, g));
};
var $author$project$PLAlgProcessors$processDPLLGraphPL = F2(
	function (input, outputsCSPL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var _v0 = A2($elm$json$Json$Decode$decodeString, inputDecoder, input);
		if (_v0.$ === 'Ok') {
			var source = _v0.a;
			var _v1 = A2(
				$elm$core$Dict$get,
				_Utils_Tuple2(source.origin_id, source.origin_slot),
				outputsCSPL);
			if (_v1.$ === 'Just') {
				var cs = _v1.a;
				return {
					errorCode: 0,
					message: $elm$json$Json$Encode$string(
						$author$project$LogicUS$PL$DPLL$dpllTableauToDOT(
							$author$project$LogicUS$PL$DPLL$dpll(cs)))
				};
			} else {
				return {
					errorCode: 2,
					message: $elm$json$Json$Encode$string(
						'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')'))))
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e))
			};
		}
	});
var $author$project$PLExtProcessors$processForeignVarsFPL = F2(
	function (content, outputsFPL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A4(
			$elm$json$Json$Decode$map3,
			F3(
				function (x, y, z) {
					return {input: y, option: x, vars: z};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['vars']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var source = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(source.origin_id, source.origin_slot),
					outputsFPL);
				if (_v2.$ === 'Just') {
					var f = _v2.a;
					var varsLecture = A2(
						$elm$core$List$map,
						$author$project$LogicUS$PL$SyntaxSemantics$fplReadFromString,
						A2($elm$core$String$split, ',', c.vars));
					if (A2(
						$elm$core$List$any,
						function (_v3) {
							var x = _v3.a;
							return _Utils_eq(x, $elm$core$Maybe$Nothing);
						},
						varsLecture)) {
						return {
							errorCode: 1,
							message: $elm$json$Json$Encode$string(
								A2(
									$elm$core$String$join,
									'.',
									A2(
										$elm$core$List$indexedMap,
										F2(
											function (i, _v4) {
												var m = _v4.c;
												return (m !== '') ? ('var' + ($elm$core$String$fromInt(i) + (' : ' + m))) : '';
											}),
										varsLecture))),
							result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
						};
					} else {
						var vars = $author$project$LogicUS$PL$SyntaxSemantics$splSymbols(
							A2(
								$elm$core$List$map,
								function (_v6) {
									var x = _v6.a;
									return A2($elm$core$Maybe$withDefault, $author$project$LogicUS$PL$SyntaxSemantics$Insat, x);
								},
								varsLecture));
						var _v5 = c.option;
						if (_v5 === 'canonicFO') {
							var f_ = A3(
								$elm$core$List$foldl,
								F2(
									function (v, g) {
										return A2($author$project$LogicUS$PL$ForeignOperators$canonicFO, g, v);
									}),
								f,
								vars);
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$fplToString(f_)),
								result: f_
							};
						} else {
							return {
								errorCode: 4,
								message: $elm$json$Json$Encode$string('Unknown option (' + (c.option + ') for ForeignVarsFPL')),
								result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
							};
						}
					}
				} else {
					return {
						errorCode: 2,
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')')))),
						result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e)),
					result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
			};
		}
	});
var $author$project$PLExtProcessors$processForeignVarsSPL = F2(
	function (content, outputsSPL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A4(
			$elm$json$Json$Decode$map3,
			F3(
				function (x, y, z) {
					return {input: y, option: x, vars: z};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['vars']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var source = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(source.origin_id, source.origin_slot),
					outputsSPL);
				if (_v2.$ === 'Just') {
					var fs = _v2.a;
					var varsLecture = A2(
						$elm$core$List$map,
						$author$project$LogicUS$PL$SyntaxSemantics$fplReadFromString,
						A2($elm$core$String$split, ',', c.vars));
					if (A2(
						$elm$core$List$any,
						function (_v3) {
							var x = _v3.a;
							return _Utils_eq(x, $elm$core$Maybe$Nothing);
						},
						varsLecture)) {
						return {
							errorCode: 1,
							message: $elm$json$Json$Encode$string(
								A2(
									$elm$core$String$join,
									'.',
									A2(
										$elm$core$List$indexedMap,
										F2(
											function (i, _v4) {
												var m = _v4.c;
												return (m !== '') ? ('var' + ($elm$core$String$fromInt(i) + (' : ' + m))) : '';
											}),
										varsLecture))),
							result: _List_Nil
						};
					} else {
						var vars = $author$project$LogicUS$PL$SyntaxSemantics$splSymbols(
							A2(
								$elm$core$List$map,
								function (_v6) {
									var x = _v6.a;
									return A2($elm$core$Maybe$withDefault, $author$project$LogicUS$PL$SyntaxSemantics$Insat, x);
								},
								varsLecture));
						var _v5 = c.option;
						if (_v5 === 'canonicFO') {
							var fs_ = A3(
								$elm$core$List$foldl,
								F2(
									function (v, gs) {
										return A2(
											$elm$core$List$map,
											function (g) {
												return A2($author$project$LogicUS$PL$ForeignOperators$canonicFO, g, v);
											},
											gs);
									}),
								fs,
								vars);
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$splToString(fs_)),
								result: A2(
									$elm$core$List$filter,
									function (g) {
										return !_Utils_eq($author$project$LogicUS$PL$SyntaxSemantics$Taut, g);
									},
									fs_)
							};
						} else {
							return {
								errorCode: 4,
								message: $elm$json$Json$Encode$string('Unknown option (' + (c.option + ') for ForeignVarsSPL')),
								result: _List_Nil
							};
						}
					}
				} else {
					return {
						errorCode: 2,
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')')))),
						result: _List_Nil
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e)),
					result: _List_Nil
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: _List_Nil
			};
		}
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$cleanSpaces = function (x) {
	return A3(
		$elm$core$String$replace,
		' ',
		'',
		A3($elm$core$String$replace, '\n', '', x));
};
var $author$project$LogicUS$FOL$SyntaxSemantics$AndOp = {$: 'AndOp'};
var $author$project$LogicUS$FOL$SyntaxSemantics$ImplOp = {$: 'ImplOp'};
var $author$project$LogicUS$FOL$SyntaxSemantics$OrOp = {$: 'OrOp'};
var $author$project$LogicUS$FOL$SyntaxSemantics$finalize = F2(
	function (revOps, finalExpr) {
		finalize:
		while (true) {
			_v0$6:
			while (true) {
				_v0$10:
				while (true) {
					if (!revOps.b) {
						return finalExpr;
					} else {
						switch (revOps.a.b.$) {
							case 'AndOp':
								var _v1 = revOps.a;
								var expr = _v1.a;
								var _v2 = _v1.b;
								var otherRevOps = revOps.b;
								var $temp$revOps = otherRevOps,
									$temp$finalExpr = A2($author$project$LogicUS$FOL$SyntaxSemantics$Conj, expr, finalExpr);
								revOps = $temp$revOps;
								finalExpr = $temp$finalExpr;
								continue finalize;
							case 'OrOp':
								if (revOps.b.b && (revOps.b.a.b.$ === 'AndOp')) {
									var _v3 = revOps.a;
									var expr = _v3.a;
									var _v4 = _v3.b;
									var _v5 = revOps.b;
									var _v6 = _v5.a;
									var expr2 = _v6.a;
									var _v7 = _v6.b;
									var otherRevOps = _v5.b;
									return A2(
										$author$project$LogicUS$FOL$SyntaxSemantics$Disj,
										A2(
											$author$project$LogicUS$FOL$SyntaxSemantics$finalize,
											A2(
												$elm$core$List$cons,
												_Utils_Tuple2(expr2, $author$project$LogicUS$FOL$SyntaxSemantics$AndOp),
												otherRevOps),
											expr),
										finalExpr);
								} else {
									var _v8 = revOps.a;
									var expr = _v8.a;
									var _v9 = _v8.b;
									var otherRevOps = revOps.b;
									var $temp$revOps = otherRevOps,
										$temp$finalExpr = A2($author$project$LogicUS$FOL$SyntaxSemantics$Disj, expr, finalExpr);
									revOps = $temp$revOps;
									finalExpr = $temp$finalExpr;
									continue finalize;
								}
							case 'ImplOp':
								if (revOps.b.b) {
									switch (revOps.b.a.b.$) {
										case 'AndOp':
											var _v10 = revOps.a;
											var expr = _v10.a;
											var _v11 = _v10.b;
											var _v12 = revOps.b;
											var _v13 = _v12.a;
											var expr2 = _v13.a;
											var _v14 = _v13.b;
											var otherRevOps = _v12.b;
											return A2(
												$author$project$LogicUS$FOL$SyntaxSemantics$Impl,
												A2(
													$author$project$LogicUS$FOL$SyntaxSemantics$finalize,
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(expr2, $author$project$LogicUS$FOL$SyntaxSemantics$AndOp),
														otherRevOps),
													expr),
												finalExpr);
										case 'OrOp':
											var _v15 = revOps.a;
											var expr = _v15.a;
											var _v16 = _v15.b;
											var _v17 = revOps.b;
											var _v18 = _v17.a;
											var expr2 = _v18.a;
											var _v19 = _v18.b;
											var otherRevOps = _v17.b;
											return A2(
												$author$project$LogicUS$FOL$SyntaxSemantics$Impl,
												A2(
													$author$project$LogicUS$FOL$SyntaxSemantics$finalize,
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(expr2, $author$project$LogicUS$FOL$SyntaxSemantics$OrOp),
														otherRevOps),
													expr),
												finalExpr);
										default:
											break _v0$6;
									}
								} else {
									break _v0$6;
								}
							default:
								if (revOps.b.b) {
									switch (revOps.b.a.b.$) {
										case 'AndOp':
											var _v22 = revOps.a;
											var expr = _v22.a;
											var _v23 = _v22.b;
											var _v24 = revOps.b;
											var _v25 = _v24.a;
											var expr2 = _v25.a;
											var _v26 = _v25.b;
											var otherRevOps = _v24.b;
											return A2(
												$author$project$LogicUS$FOL$SyntaxSemantics$Equi,
												A2(
													$author$project$LogicUS$FOL$SyntaxSemantics$finalize,
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(expr2, $author$project$LogicUS$FOL$SyntaxSemantics$AndOp),
														otherRevOps),
													expr),
												finalExpr);
										case 'OrOp':
											var _v27 = revOps.a;
											var expr = _v27.a;
											var _v28 = _v27.b;
											var _v29 = revOps.b;
											var _v30 = _v29.a;
											var expr2 = _v30.a;
											var _v31 = _v30.b;
											var otherRevOps = _v29.b;
											return A2(
												$author$project$LogicUS$FOL$SyntaxSemantics$Equi,
												A2(
													$author$project$LogicUS$FOL$SyntaxSemantics$finalize,
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(expr2, $author$project$LogicUS$FOL$SyntaxSemantics$OrOp),
														otherRevOps),
													expr),
												finalExpr);
										case 'ImplOp':
											var _v32 = revOps.a;
											var expr = _v32.a;
											var _v33 = _v32.b;
											var _v34 = revOps.b;
											var _v35 = _v34.a;
											var expr2 = _v35.a;
											var _v36 = _v35.b;
											var otherRevOps = _v34.b;
											return A2(
												$author$project$LogicUS$FOL$SyntaxSemantics$Equi,
												A2(
													$author$project$LogicUS$FOL$SyntaxSemantics$finalize,
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(expr2, $author$project$LogicUS$FOL$SyntaxSemantics$ImplOp),
														otherRevOps),
													expr),
												finalExpr);
										default:
											break _v0$10;
									}
								} else {
									break _v0$10;
								}
						}
					}
				}
				var _v37 = revOps.a;
				var expr = _v37.a;
				var _v38 = _v37.b;
				var otherRevOps = revOps.b;
				var $temp$revOps = otherRevOps,
					$temp$finalExpr = A2($author$project$LogicUS$FOL$SyntaxSemantics$Equi, expr, finalExpr);
				revOps = $temp$revOps;
				finalExpr = $temp$finalExpr;
				continue finalize;
			}
			var _v20 = revOps.a;
			var expr = _v20.a;
			var _v21 = _v20.b;
			var otherRevOps = revOps.b;
			var $temp$revOps = otherRevOps,
				$temp$finalExpr = A2($author$project$LogicUS$FOL$SyntaxSemantics$Impl, expr, finalExpr);
			revOps = $temp$revOps;
			finalExpr = $temp$finalExpr;
			continue finalize;
		}
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$folTermNameParser = $elm$parser$Parser$getChompedString(
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(_Utils_Tuple0),
			$elm$parser$Parser$chompIf($elm$core$Char$isLower)),
		$elm$parser$Parser$chompWhile($elm$core$Char$isAlpha)));
var $author$project$LogicUS$FOL$SyntaxSemantics$folTermIdentifierSubindexedParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($elm$core$Tuple$pair),
		$author$project$LogicUS$FOL$SyntaxSemantics$folTermNameParser),
	$elm$parser$Parser$sequence(
		{end: '}', item: $elm$parser$Parser$int, separator: ',', spaces: $elm$parser$Parser$spaces, start: '_{', trailing: $elm$parser$Parser$Forbidden}));
var $author$project$LogicUS$FOL$SyntaxSemantics$folTermIdentifierParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$backtrackable($author$project$LogicUS$FOL$SyntaxSemantics$folTermIdentifierSubindexedParser)),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				function (x) {
					return _Utils_Tuple2(x, _List_Nil);
				}),
			$author$project$LogicUS$FOL$SyntaxSemantics$folTermNameParser),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				function (x) {
					return _Utils_Tuple2(x, _List_Nil);
				}),
			A2($elm$parser$Parser$map, $elm$core$String$fromInt, $elm$parser$Parser$int))
		]));
var $author$project$LogicUS$FOL$SyntaxSemantics$folVarNameParser = $elm$parser$Parser$getChompedString(
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(_Utils_Tuple0),
			$elm$parser$Parser$chompIf($elm$core$Char$isUpper)),
		$elm$parser$Parser$chompWhile($elm$core$Char$isAlpha)));
var $author$project$LogicUS$FOL$SyntaxSemantics$folVarSubSuperIndexedParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				F3(
					function (x, y, z) {
						return _Utils_Tuple3(x, y, z);
					})),
			$author$project$LogicUS$FOL$SyntaxSemantics$folVarNameParser),
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$sequence(
				{end: '}', item: $elm$parser$Parser$int, separator: ',', spaces: $elm$parser$Parser$spaces, start: '_{', trailing: $elm$parser$Parser$Forbidden}),
			$elm$parser$Parser$symbol('^{'))),
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$int,
		$elm$parser$Parser$symbol('}')));
var $author$project$LogicUS$FOL$SyntaxSemantics$folVarSubindexedParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed(
			F2(
				function (x, y) {
					return _Utils_Tuple3(x, y, 0);
				})),
		$author$project$LogicUS$FOL$SyntaxSemantics$folVarNameParser),
	$elm$parser$Parser$sequence(
		{end: '}', item: $elm$parser$Parser$int, separator: ',', spaces: $elm$parser$Parser$spaces, start: '_{', trailing: $elm$parser$Parser$Forbidden}));
var $author$project$LogicUS$FOL$SyntaxSemantics$folVarSupindexedParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed(
			F2(
				function (x, y) {
					return _Utils_Tuple3(x, _List_Nil, y);
				})),
		A2(
			$elm$parser$Parser$ignorer,
			$author$project$LogicUS$FOL$SyntaxSemantics$folVarNameParser,
			$elm$parser$Parser$symbol('^{'))),
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$int,
		$elm$parser$Parser$symbol('}')));
var $author$project$LogicUS$FOL$SyntaxSemantics$folVariableParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$backtrackable($author$project$LogicUS$FOL$SyntaxSemantics$folVarSubSuperIndexedParser)),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$backtrackable($author$project$LogicUS$FOL$SyntaxSemantics$folVarSubindexedParser)),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$backtrackable($author$project$LogicUS$FOL$SyntaxSemantics$folVarSupindexedParser)),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				function (x) {
					return _Utils_Tuple3(x, _List_Nil, 0);
				}),
			$author$project$LogicUS$FOL$SyntaxSemantics$folVarNameParser)
		]));
var $author$project$LogicUS$FOL$SyntaxSemantics$folEnumerationTermParserAux = F2(
	function (ts, t) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$andThen,
					function (newt) {
						return A2(
							$author$project$LogicUS$FOL$SyntaxSemantics$folEnumerationTermParserAux,
							_Utils_ap(
								ts,
								_List_fromArray(
									[newt])),
							t);
					},
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed($elm$core$Basics$identity),
							$elm$parser$Parser$symbol(',')),
						$author$project$LogicUS$FOL$SyntaxSemantics$cyclic$folTermParser())),
					$elm$parser$Parser$lazy(
					function (_v1) {
						return $elm$parser$Parser$succeed(
							A2($elm$core$List$cons, t, ts));
					})
				]));
	});
function $author$project$LogicUS$FOL$SyntaxSemantics$cyclic$folEnumerationTermParser() {
	return A2(
		$elm$parser$Parser$andThen,
		$author$project$LogicUS$FOL$SyntaxSemantics$folEnumerationTermParserAux(_List_Nil),
		$author$project$LogicUS$FOL$SyntaxSemantics$cyclic$folTermParser());
}
function $author$project$LogicUS$FOL$SyntaxSemantics$cyclic$folTermParser() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$Func),
					$author$project$LogicUS$FOL$SyntaxSemantics$folTermIdentifierParser),
				$author$project$LogicUS$FOL$SyntaxSemantics$cyclic$folListTermParser()),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$Var),
				$author$project$LogicUS$FOL$SyntaxSemantics$folVariableParser)
			]));
}
function $author$project$LogicUS$FOL$SyntaxSemantics$cyclic$folListTermParser() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$symbol('(')),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$lazy(
						function (_v0) {
							return $author$project$LogicUS$FOL$SyntaxSemantics$cyclic$folEnumerationTermParser();
						}),
					$elm$parser$Parser$symbol(')'))),
				$elm$parser$Parser$succeed(_List_Nil)
			]));
}
try {
	var $author$project$LogicUS$FOL$SyntaxSemantics$folEnumerationTermParser = $author$project$LogicUS$FOL$SyntaxSemantics$cyclic$folEnumerationTermParser();
	$author$project$LogicUS$FOL$SyntaxSemantics$cyclic$folEnumerationTermParser = function () {
		return $author$project$LogicUS$FOL$SyntaxSemantics$folEnumerationTermParser;
	};
	var $author$project$LogicUS$FOL$SyntaxSemantics$folTermParser = $author$project$LogicUS$FOL$SyntaxSemantics$cyclic$folTermParser();
	$author$project$LogicUS$FOL$SyntaxSemantics$cyclic$folTermParser = function () {
		return $author$project$LogicUS$FOL$SyntaxSemantics$folTermParser;
	};
	var $author$project$LogicUS$FOL$SyntaxSemantics$folListTermParser = $author$project$LogicUS$FOL$SyntaxSemantics$cyclic$folListTermParser();
	$author$project$LogicUS$FOL$SyntaxSemantics$cyclic$folListTermParser = function () {
		return $author$project$LogicUS$FOL$SyntaxSemantics$folListTermParser;
	};
} catch ($) {
	throw 'Some top-level definitions from `LogicUS.FOL.SyntaxSemantics` are causing infinite recursion:\n\n  ┌─────┐\n  │    folEnumerationTermParser\n  │     ↓\n  │    folEnumerationTermParserAux\n  │     ↓\n  │    folTermParser\n  │     ↓\n  │    folListTermParser\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $author$project$LogicUS$FOL$SyntaxSemantics$folPredNameParser = $elm$parser$Parser$getChompedString(
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(_Utils_Tuple0),
			$elm$parser$Parser$chompIf($elm$core$Char$isUpper)),
		$elm$parser$Parser$chompWhile($elm$core$Char$isAlpha)));
var $author$project$LogicUS$FOL$SyntaxSemantics$folPredIdentifierSubindexedParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($elm$core$Tuple$pair),
		$author$project$LogicUS$FOL$SyntaxSemantics$folPredNameParser),
	$elm$parser$Parser$sequence(
		{end: '}', item: $elm$parser$Parser$int, separator: ',', spaces: $elm$parser$Parser$spaces, start: '_{', trailing: $elm$parser$Parser$Forbidden}));
var $author$project$LogicUS$FOL$SyntaxSemantics$folPredIdentifierParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$backtrackable($author$project$LogicUS$FOL$SyntaxSemantics$folPredIdentifierSubindexedParser)),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				function (x) {
					return _Utils_Tuple2(x, _List_Nil);
				}),
			$author$project$LogicUS$FOL$SyntaxSemantics$folPredNameParser)
		]));
var $author$project$LogicUS$FOL$SyntaxSemantics$EquivOp = {$: 'EquivOp'};
var $author$project$LogicUS$FOL$SyntaxSemantics$operator = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$AndOp),
			$elm$parser$Parser$symbol('&')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$AndOp),
			$elm$parser$Parser$symbol('∧')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$OrOp),
			$elm$parser$Parser$symbol('|')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$OrOp),
			$elm$parser$Parser$symbol('∨')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$ImplOp),
			$elm$parser$Parser$symbol('->')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$ImplOp),
			$elm$parser$Parser$symbol('→')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$EquivOp),
			$elm$parser$Parser$symbol('<->')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$EquivOp),
			$elm$parser$Parser$symbol('↔'))
		]));
var $author$project$LogicUS$FOL$SyntaxSemantics$expressionAux = F2(
	function (revOps, expr) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$andThen,
					function (_v4) {
						var op = _v4.a;
						var newExpr = _v4.b;
						return A2(
							$author$project$LogicUS$FOL$SyntaxSemantics$expressionAux,
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(expr, op),
								revOps),
							newExpr);
					},
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							$elm$parser$Parser$succeed($elm$core$Tuple$pair),
							$author$project$LogicUS$FOL$SyntaxSemantics$operator),
						$author$project$LogicUS$FOL$SyntaxSemantics$cyclic$ffolParserAux())),
					$elm$parser$Parser$lazy(
					function (_v5) {
						return $elm$parser$Parser$succeed(
							A2($author$project$LogicUS$FOL$SyntaxSemantics$finalize, revOps, expr));
					})
				]));
	});
function $author$project$LogicUS$FOL$SyntaxSemantics$cyclic$expression() {
	return A2(
		$elm$parser$Parser$andThen,
		$author$project$LogicUS$FOL$SyntaxSemantics$expressionAux(_List_Nil),
		$author$project$LogicUS$FOL$SyntaxSemantics$cyclic$ffolParserAux());
}
function $author$project$LogicUS$FOL$SyntaxSemantics$cyclic$ffolParserAux() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$ignorer,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$Exists),
							$elm$parser$Parser$oneOf(
								_List_fromArray(
									[
										$elm$parser$Parser$symbol('!E'),
										$elm$parser$Parser$symbol('∃')
									]))),
						$elm$parser$Parser$symbol('[')),
					A2(
						$elm$parser$Parser$ignorer,
						$author$project$LogicUS$FOL$SyntaxSemantics$folVariableParser,
						$elm$parser$Parser$symbol(']'))),
				$elm$parser$Parser$lazy(
					function (_v0) {
						return $author$project$LogicUS$FOL$SyntaxSemantics$cyclic$ffolParserAux();
					})),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$ignorer,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$Forall),
							$elm$parser$Parser$oneOf(
								_List_fromArray(
									[
										$elm$parser$Parser$symbol('!A'),
										$elm$parser$Parser$symbol('∀')
									]))),
						$elm$parser$Parser$symbol('[')),
					A2(
						$elm$parser$Parser$ignorer,
						$author$project$LogicUS$FOL$SyntaxSemantics$folVariableParser,
						$elm$parser$Parser$symbol(']'))),
				$elm$parser$Parser$lazy(
					function (_v1) {
						return $author$project$LogicUS$FOL$SyntaxSemantics$cyclic$ffolParserAux();
					})),
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$Insat),
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							$elm$parser$Parser$symbol('!F'),
							$elm$parser$Parser$symbol('⊥')
						]))),
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$Taut),
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							$elm$parser$Parser$symbol('!T'),
							$elm$parser$Parser$symbol('⊤')
						]))),
				$elm$parser$Parser$backtrackable(
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$keeper,
						$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$Equal),
						A2(
							$elm$parser$Parser$ignorer,
							$author$project$LogicUS$FOL$SyntaxSemantics$folTermParser,
							$elm$parser$Parser$symbol('='))),
					$author$project$LogicUS$FOL$SyntaxSemantics$folTermParser)),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$Pred),
					$author$project$LogicUS$FOL$SyntaxSemantics$folPredIdentifierParser),
				$author$project$LogicUS$FOL$SyntaxSemantics$folListTermParser),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($author$project$LogicUS$FOL$SyntaxSemantics$Neg),
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								$elm$parser$Parser$symbol('¬'),
								$elm$parser$Parser$symbol('-')
							]))),
				$elm$parser$Parser$lazy(
					function (_v2) {
						return $author$project$LogicUS$FOL$SyntaxSemantics$cyclic$ffolParserAux();
					})),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$symbol('(')),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$lazy(
						function (_v3) {
							return $author$project$LogicUS$FOL$SyntaxSemantics$cyclic$expression();
						}),
					$elm$parser$Parser$symbol(')')))
			]));
}
try {
	var $author$project$LogicUS$FOL$SyntaxSemantics$expression = $author$project$LogicUS$FOL$SyntaxSemantics$cyclic$expression();
	$author$project$LogicUS$FOL$SyntaxSemantics$cyclic$expression = function () {
		return $author$project$LogicUS$FOL$SyntaxSemantics$expression;
	};
	var $author$project$LogicUS$FOL$SyntaxSemantics$ffolParserAux = $author$project$LogicUS$FOL$SyntaxSemantics$cyclic$ffolParserAux();
	$author$project$LogicUS$FOL$SyntaxSemantics$cyclic$ffolParserAux = function () {
		return $author$project$LogicUS$FOL$SyntaxSemantics$ffolParserAux;
	};
} catch ($) {
	throw 'Some top-level definitions from `LogicUS.FOL.SyntaxSemantics` are causing infinite recursion:\n\n  ┌─────┐\n  │    expression\n  │     ↓\n  │    expressionAux\n  │     ↓\n  │    ffolParserAux\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $author$project$LogicUS$FOL$SyntaxSemantics$ffolParser = A2(
	$elm$parser$Parser$keeper,
	$elm$parser$Parser$succeed($elm$core$Basics$identity),
	A2($elm$parser$Parser$ignorer, $author$project$LogicUS$FOL$SyntaxSemantics$ffolParserAux, $elm$parser$Parser$end));
var $elm$core$String$toUpper = _String_toUpper;
var $author$project$LogicUS$FOL$SyntaxSemantics$termToInputString = function (x) {
	if (x.$ === 'Var') {
		var _v1 = x.a;
		var vname = _v1.a;
		var sb = _v1.b;
		var sp = _v1.c;
		return _Utils_ap(
			A2(
				$elm$core$Basics$composeL,
				$elm$core$String$toUpper,
				$elm$core$String$left(1))(vname),
			_Utils_ap(
				A2($elm$core$String$dropLeft, 1, vname),
				_Utils_ap(
					$elm$core$List$isEmpty(sb) ? '' : ('_{' + (A2(
						$elm$core$String$join,
						',',
						A2($elm$core$List$map, $elm$core$String$fromInt, sb)) + '}')),
					(sp <= 0) ? '' : ('^{' + ($elm$core$String$fromInt(sp) + '}')))));
	} else {
		if (!x.a.b.b) {
			var _v2 = x.a;
			var fname = _v2.a;
			var ts = x.b;
			return _Utils_ap(
				A2(
					$elm$core$Basics$composeL,
					$elm$core$String$toLower,
					$elm$core$String$left(1))(fname),
				_Utils_ap(
					A2($elm$core$String$dropLeft, 1, fname),
					$author$project$LogicUS$FOL$SyntaxSemantics$termsToString(ts)));
		} else {
			var _v3 = x.a;
			var fname = _v3.a;
			var findices = _v3.b;
			var ts = x.b;
			return A2(
				$elm$core$Basics$composeL,
				$elm$core$String$toLower,
				$elm$core$String$left(1))(fname) + (A2($elm$core$String$dropLeft, 1, fname) + ('_{' + (A2(
				$elm$core$String$join,
				',',
				A2($elm$core$List$map, $elm$core$String$fromInt, findices)) + ('}' + $author$project$LogicUS$FOL$SyntaxSemantics$termsToString(ts)))));
		}
	}
};
var $author$project$LogicUS$FOL$SyntaxSemantics$termsToInputString = function (ts) {
	return $elm$core$List$isEmpty(ts) ? '' : ('(' + (A2(
		$elm$core$String$join,
		', ',
		A2($elm$core$List$map, $author$project$LogicUS$FOL$SyntaxSemantics$termToInputString, ts)) + ')'));
};
var $author$project$LogicUS$FOL$SyntaxSemantics$ffolToInputString = function (f) {
	switch (f.$) {
		case 'Exists':
			var x = f.a;
			var g = f.b;
			return '!E[' + ($author$project$LogicUS$FOL$SyntaxSemantics$termToInputString(
				$author$project$LogicUS$FOL$SyntaxSemantics$Var(x)) + (']' + $author$project$LogicUS$FOL$SyntaxSemantics$ffolToInputString(g)));
		case 'Forall':
			var x = f.a;
			var g = f.b;
			return '!A[' + ($author$project$LogicUS$FOL$SyntaxSemantics$termToInputString(
				$author$project$LogicUS$FOL$SyntaxSemantics$Var(x)) + (']' + $author$project$LogicUS$FOL$SyntaxSemantics$ffolToInputString(g)));
		case 'Pred':
			if (!f.a.b.b) {
				var _v1 = f.a;
				var pname = _v1.a;
				var ts = f.b;
				return _Utils_ap(
					A2(
						$elm$core$Basics$composeL,
						$elm$core$String$toUpper,
						$elm$core$String$left(1))(pname),
					_Utils_ap(
						A2($elm$core$String$dropLeft, 1, pname),
						$author$project$LogicUS$FOL$SyntaxSemantics$termsToInputString(ts)));
			} else {
				var _v2 = f.a;
				var pname = _v2.a;
				var pindices = _v2.b;
				var ts = f.b;
				return A2(
					$elm$core$Basics$composeL,
					$elm$core$String$toUpper,
					$elm$core$String$left(1))(pname) + (A2($elm$core$String$dropLeft, 1, pname) + ('_{' + (A2(
					$elm$core$String$join,
					',',
					A2($elm$core$List$map, $elm$core$String$fromInt, pindices)) + ('}' + $author$project$LogicUS$FOL$SyntaxSemantics$termsToInputString(ts)))));
			}
		case 'Equal':
			var t1 = f.a;
			var t2 = f.b;
			return $author$project$LogicUS$FOL$SyntaxSemantics$termToInputString(t1) + ('=' + $author$project$LogicUS$FOL$SyntaxSemantics$termToInputString(t2));
		case 'Neg':
			var g = f.a;
			return '¬' + $author$project$LogicUS$FOL$SyntaxSemantics$ffolToInputString(g);
		case 'Conj':
			var g = f.a;
			var h = f.b;
			return '(' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToInputString(g) + ('&' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToInputString(h) + ')')));
		case 'Disj':
			var g = f.a;
			var h = f.b;
			return '(' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToInputString(g) + ('|' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToInputString(h) + ')')));
		case 'Impl':
			var g = f.a;
			var h = f.b;
			return '(' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToInputString(g) + ('->' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToInputString(h) + ')')));
		case 'Equi':
			var g = f.a;
			var h = f.b;
			return '(' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToInputString(g) + ('<->' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToInputString(h) + ')')));
		case 'Taut':
			return '!T';
		default:
			return '!F';
	}
};
var $author$project$LogicUS$FOL$SyntaxSemantics$ffolReadFromString = function (x) {
	var _v0 = $author$project$LogicUS$FOL$SyntaxSemantics$cleanSpaces(x);
	if (_v0 === '') {
		return _Utils_Tuple3($elm$core$Maybe$Nothing, '', 'Argument is empty');
	} else {
		var s = _v0;
		var _v1 = A2($elm$parser$Parser$run, $author$project$LogicUS$FOL$SyntaxSemantics$ffolParser, '(' + (s + ')'));
		if (_v1.$ === 'Ok') {
			var y = _v1.a;
			return _Utils_Tuple3(
				$elm$core$Maybe$Just(y),
				$author$project$LogicUS$FOL$SyntaxSemantics$ffolToInputString(y),
				'');
		} else {
			var y = _v1.a;
			return _Utils_Tuple3(
				$elm$core$Maybe$Nothing,
				'(' + (s + ')'),
				'Error: ' + A3(
					$elm$core$String$replace,
					'\"',
					'\'',
					$elm$core$Debug$toString(y)));
		}
	}
};
var $author$project$FOLBasicProcessors$processFormulaFOLNode = function (content) {
	var _v0 = $author$project$LogicUS$FOL$SyntaxSemantics$ffolReadFromString(content);
	if (_v0.a.$ === 'Nothing') {
		var _v1 = _v0.a;
		var errDetails = _v0.c;
		return {
			errorCode: 1,
			message: $elm$json$Json$Encode$string(errDetails),
			result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
		};
	} else {
		var f = _v0.a.a;
		return {
			errorCode: 0,
			message: $elm$json$Json$Encode$string(
				$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f)),
			result: f
		};
	}
};
var $author$project$PLBasicProcessors$processFormulaPLNode = function (content) {
	var _v0 = $author$project$LogicUS$PL$SyntaxSemantics$fplReadFromString(content);
	if (_v0.a.$ === 'Nothing') {
		var _v1 = _v0.a;
		var errDetails = _v0.c;
		return {
			errorCode: 1,
			message: $elm$json$Json$Encode$string(errDetails),
			result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
		};
	} else {
		var f = _v0.a.a;
		return {
			errorCode: 0,
			message: $elm$json$Json$Encode$string(
				$author$project$LogicUS$PL$SyntaxSemantics$fplToString(f)),
			result: f
		};
	}
};
var $author$project$LogicUS$FOL$Herbrand$union2Signatures = F2(
	function (_v0, _v1) {
		var cs1 = _v0.a;
		var fs1 = _v0.b;
		var ps1 = _v0.c;
		var cs2 = _v1.a;
		var fs2 = _v1.b;
		var ps2 = _v1.c;
		var ps = A2($elm$core$Dict$union, ps1, ps2);
		var fs = A2($elm$core$Dict$union, fs1, fs2);
		var cs = A2($elm$core$Set$union, cs1, cs2);
		return _Utils_Tuple3(cs, fs, ps);
	});
var $author$project$LogicUS$FOL$Herbrand$signatureTerm = function (t) {
	if (t.$ === 'Var') {
		return _Utils_Tuple3($elm$core$Set$empty, $elm$core$Dict$empty, $elm$core$Dict$empty);
	} else {
		if (!t.b.b) {
			var f = t.a;
			return _Utils_Tuple3(
				$elm$core$Set$singleton(f),
				$elm$core$Dict$empty,
				$elm$core$Dict$empty);
		} else {
			var f = t.a;
			var terms = t.b;
			return A3(
				$elm$core$List$foldl,
				F2(
					function (x, ac) {
						return A2(
							$author$project$LogicUS$FOL$Herbrand$union2Signatures,
							ac,
							$author$project$LogicUS$FOL$Herbrand$signatureTerm(x));
					}),
				_Utils_Tuple3(
					$elm$core$Set$empty,
					A2(
						$elm$core$Dict$singleton,
						f,
						$elm$core$List$length(terms)),
					$elm$core$Dict$empty),
				terms);
		}
	}
};
var $author$project$LogicUS$FOL$Herbrand$ffolSignature = function (f) {
	ffolSignature:
	while (true) {
		switch (f.$) {
			case 'Pred':
				var p = f.a;
				var terms = f.b;
				return $elm$core$Maybe$Just(
					A3(
						$elm$core$List$foldl,
						F2(
							function (x, ac) {
								return A2(
									$author$project$LogicUS$FOL$Herbrand$union2Signatures,
									ac,
									$author$project$LogicUS$FOL$Herbrand$signatureTerm(x));
							}),
						_Utils_Tuple3(
							$elm$core$Set$empty,
							$elm$core$Dict$empty,
							A2(
								$elm$core$Dict$singleton,
								p,
								$elm$core$List$length(terms))),
						terms));
			case 'Equal':
				return $elm$core$Maybe$Nothing;
			case 'Neg':
				var x = f.a;
				var $temp$f = x;
				f = $temp$f;
				continue ffolSignature;
			case 'Conj':
				var x = f.a;
				var y = f.b;
				return A3(
					$elm$core$Maybe$map2,
					$author$project$LogicUS$FOL$Herbrand$union2Signatures,
					$author$project$LogicUS$FOL$Herbrand$ffolSignature(x),
					$author$project$LogicUS$FOL$Herbrand$ffolSignature(y));
			case 'Disj':
				var x = f.a;
				var y = f.b;
				return A3(
					$elm$core$Maybe$map2,
					$author$project$LogicUS$FOL$Herbrand$union2Signatures,
					$author$project$LogicUS$FOL$Herbrand$ffolSignature(x),
					$author$project$LogicUS$FOL$Herbrand$ffolSignature(y));
			case 'Impl':
				var x = f.a;
				var y = f.b;
				return A3(
					$elm$core$Maybe$map2,
					$author$project$LogicUS$FOL$Herbrand$union2Signatures,
					$author$project$LogicUS$FOL$Herbrand$ffolSignature(x),
					$author$project$LogicUS$FOL$Herbrand$ffolSignature(y));
			case 'Equi':
				var x = f.a;
				var y = f.b;
				return A3(
					$elm$core$Maybe$map2,
					$author$project$LogicUS$FOL$Herbrand$union2Signatures,
					$author$project$LogicUS$FOL$Herbrand$ffolSignature(x),
					$author$project$LogicUS$FOL$Herbrand$ffolSignature(y));
			case 'Forall':
				return $elm$core$Maybe$Nothing;
			case 'Exists':
				return $elm$core$Maybe$Nothing;
			case 'Insat':
				return $elm$core$Maybe$Just(
					_Utils_Tuple3($elm$core$Set$empty, $elm$core$Dict$empty, $elm$core$Dict$empty));
			default:
				return $elm$core$Maybe$Just(
					_Utils_Tuple3($elm$core$Set$empty, $elm$core$Dict$empty, $elm$core$Dict$empty));
		}
	}
};
var $author$project$LogicUS$FOL$Herbrand$sfolSignature = function (ls) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (f, ac) {
				return A3(
					$elm$core$Maybe$map2,
					$author$project$LogicUS$FOL$Herbrand$union2Signatures,
					ac,
					$author$project$LogicUS$FOL$Herbrand$ffolSignature(f));
			}),
		$elm$core$Maybe$Just(
			_Utils_Tuple3($elm$core$Set$empty, $elm$core$Dict$empty, $elm$core$Dict$empty)),
		ls);
};
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $elm$core$Set$isEmpty = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$isEmpty(dict);
};
var $author$project$LogicUS$FOL$Herbrand$signatureHerbrandUniverse = F2(
	function (_v0, n) {
		var cs = _v0.a;
		var fs = _v0.b;
		var ps = _v0.c;
		if (n <= 0) {
			return $elm$core$Set$isEmpty(cs) ? _List_fromArray(
				[
					A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Func,
					_Utils_Tuple2(
						'ç',
						_List_fromArray(
							[0])),
					_List_Nil)
				]) : A2(
				$elm$core$List$map,
				function (x) {
					return A2($author$project$LogicUS$FOL$SyntaxSemantics$Func, x, _List_Nil);
				},
				$elm$core$Set$toList(cs));
		} else {
			var uH_prev = A2(
				$author$project$LogicUS$FOL$Herbrand$signatureHerbrandUniverse,
				_Utils_Tuple3(cs, fs, ps),
				n - 1);
			return A3(
				$elm$core$List$foldl,
				F2(
					function (x, ac) {
						return A2($author$project$LogicUS$FOL$AuxiliarFuctions$uniqueConcatList, ac, x);
					}),
				uH_prev,
				A2(
					$elm$core$List$map,
					function (_v1) {
						var f = _v1.a;
						var a = _v1.b;
						return A2(
							$elm$core$List$map,
							function (ts) {
								return A2($author$project$LogicUS$FOL$SyntaxSemantics$Func, f, ts);
							},
							$elm_community$list_extra$List$Extra$cartesianProduct(
								A2($elm$core$List$repeat, a, uH_prev)));
					},
					$elm$core$Dict$toList(fs)));
		}
	});
var $author$project$LogicUS$FOL$Herbrand$signatureHerbrandBase = F2(
	function (_v0, n) {
		var cs = _v0.a;
		var fs = _v0.b;
		var ps = _v0.c;
		var uH = A2(
			$author$project$LogicUS$FOL$Herbrand$signatureHerbrandUniverse,
			_Utils_Tuple3(cs, fs, ps),
			n);
		return A3(
			$elm$core$List$foldl,
			F2(
				function (x, ac) {
					return A2($author$project$LogicUS$FOL$AuxiliarFuctions$uniqueConcatList, ac, x);
				}),
			_List_Nil,
			A2(
				$elm$core$List$map,
				function (_v1) {
					var p = _v1.a;
					var a = _v1.b;
					return A2(
						$elm$core$List$map,
						function (ts) {
							return A2($author$project$LogicUS$FOL$SyntaxSemantics$Pred, p, ts);
						},
						$elm_community$list_extra$List$Extra$cartesianProduct(
							A2($elm$core$List$repeat, a, uH)));
				},
				$elm$core$Dict$toList(ps)));
	});
var $author$project$LogicUS$FOL$Herbrand$sfolHerbrandBase = F2(
	function (fs, n) {
		return A2(
			$elm$core$Maybe$map,
			function (s) {
				return A2($author$project$LogicUS$FOL$Herbrand$signatureHerbrandBase, s, n);
			},
			$author$project$LogicUS$FOL$Herbrand$sfolSignature(fs));
	});
var $author$project$FOLBasicProcessors$processHerbrandBaseFOLNode = F2(
	function (content, outputsSFOL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: x, n: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['n']),
				$elm$json$Json$Decode$int));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var source = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(source.origin_id, source.origin_slot),
					outputsSFOL);
				if (_v2.$ === 'Just') {
					var fs = _v2.a;
					var _v3 = A2($author$project$LogicUS$FOL$Herbrand$sfolHerbrandBase, fs, c.n);
					if (_v3.$ === 'Just') {
						var s = _v3.a;
						return {
							errorCode: 0,
							message: $elm$json$Json$Encode$string(
								$author$project$LogicUS$FOL$SyntaxSemantics$sfolToString(s))
						};
					} else {
						return {
							errorCode: 1,
							message: $elm$json$Json$Encode$string('The FOL set given contains quantifiers or equalities, that are forbidden in Herbrand Works')
						};
					}
				} else {
					return {
						errorCode: 2,
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')'))))
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e))
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e))
			};
		}
	});
var $author$project$LogicUS$FOL$Herbrand$ffolTofpl = function (f) {
	switch (f.$) {
		case 'Pred':
			return $elm$core$Maybe$Just(
				$author$project$LogicUS$PL$SyntaxSemantics$Atom(
					_Utils_Tuple2(
						$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f),
						_List_Nil)));
		case 'Equal':
			return $elm$core$Maybe$Nothing;
		case 'Neg':
			var x = f.a;
			return A2(
				$elm$core$Maybe$map,
				$author$project$LogicUS$PL$SyntaxSemantics$Neg,
				$author$project$LogicUS$FOL$Herbrand$ffolTofpl(x));
		case 'Conj':
			var x = f.a;
			var y = f.b;
			return A3(
				$elm$core$Maybe$map2,
				$author$project$LogicUS$PL$SyntaxSemantics$Conj,
				$author$project$LogicUS$FOL$Herbrand$ffolTofpl(x),
				$author$project$LogicUS$FOL$Herbrand$ffolTofpl(y));
		case 'Disj':
			var x = f.a;
			var y = f.b;
			return A3(
				$elm$core$Maybe$map2,
				$author$project$LogicUS$PL$SyntaxSemantics$Disj,
				$author$project$LogicUS$FOL$Herbrand$ffolTofpl(x),
				$author$project$LogicUS$FOL$Herbrand$ffolTofpl(y));
		case 'Impl':
			var x = f.a;
			var y = f.b;
			return A3(
				$elm$core$Maybe$map2,
				$author$project$LogicUS$PL$SyntaxSemantics$Impl,
				$author$project$LogicUS$FOL$Herbrand$ffolTofpl(x),
				$author$project$LogicUS$FOL$Herbrand$ffolTofpl(y));
		case 'Equi':
			var x = f.a;
			var y = f.b;
			return A3(
				$elm$core$Maybe$map2,
				$author$project$LogicUS$PL$SyntaxSemantics$Equi,
				$author$project$LogicUS$FOL$Herbrand$ffolTofpl(x),
				$author$project$LogicUS$FOL$Herbrand$ffolTofpl(y));
		case 'Forall':
			return $elm$core$Maybe$Nothing;
		case 'Exists':
			return $elm$core$Maybe$Nothing;
		case 'Insat':
			return $elm$core$Maybe$Just($author$project$LogicUS$PL$SyntaxSemantics$Insat);
		default:
			return $elm$core$Maybe$Just($author$project$LogicUS$PL$SyntaxSemantics$Taut);
	}
};
var $author$project$LogicUS$FOL$Herbrand$herbrandExtensionAux = F2(
	function (f, uH) {
		var vs = $author$project$LogicUS$FOL$SyntaxSemantics$ffolVarSymbols(f);
		var substitutions = A2(
			$elm$core$List$map,
			function (x) {
				return A3(
					$elm$core$List$map2,
					F2(
						function (y, z) {
							return _Utils_Tuple2(y, z);
						}),
					vs,
					x);
			},
			$elm_community$list_extra$List$Extra$cartesianProduct(
				A2(
					$elm$core$List$repeat,
					$elm$core$List$length(vs),
					uH)));
		return A2(
			$elm$core$List$map,
			function (xs) {
				return A2(
					$elm$core$Maybe$withDefault,
					$author$project$LogicUS$PL$SyntaxSemantics$Insat,
					$author$project$LogicUS$FOL$Herbrand$ffolTofpl(
						A2(
							$author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution,
							$elm$core$Dict$fromList(xs),
							f)));
			},
			substitutions);
	});
var $author$project$LogicUS$FOL$Herbrand$sfolHerbrandUniverse = F2(
	function (fs, n) {
		return A2(
			$elm$core$Maybe$map,
			function (s) {
				return A2($author$project$LogicUS$FOL$Herbrand$signatureHerbrandUniverse, s, n);
			},
			$author$project$LogicUS$FOL$Herbrand$sfolSignature(fs));
	});
var $author$project$LogicUS$FOL$Herbrand$sfolHerbrandExtension = F2(
	function (fs, n) {
		return A2(
			$elm$core$Maybe$map,
			function (uH) {
				return $elm$core$List$concat(
					A2(
						$elm$core$List$map,
						function (f) {
							return A2($author$project$LogicUS$FOL$Herbrand$herbrandExtensionAux, f, uH);
						},
						fs));
			},
			A2($author$project$LogicUS$FOL$Herbrand$sfolHerbrandUniverse, fs, n));
	});
var $author$project$FOLBasicProcessors$processHerbrandExtensionFOLNode = F2(
	function (content, outputsSFOL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: x, n: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['n']),
				$elm$json$Json$Decode$int));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var source = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(source.origin_id, source.origin_slot),
					outputsSFOL);
				if (_v2.$ === 'Just') {
					var fs = _v2.a;
					var _v3 = A2($author$project$LogicUS$FOL$Herbrand$sfolHerbrandExtension, fs, c.n);
					if (_v3.$ === 'Just') {
						var s = _v3.a;
						return {
							errorCode: 0,
							message: $elm$json$Json$Encode$string(
								$author$project$LogicUS$PL$SyntaxSemantics$splToString(s)),
							result: s
						};
					} else {
						return {
							errorCode: 1,
							message: $elm$json$Json$Encode$string('The FOL set given contains quantifiers or equalities, that are forbidden in Herbrand Works'),
							result: _List_Nil
						};
					}
				} else {
					return {
						errorCode: 2,
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')')))),
						result: _List_Nil
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e)),
					result: _List_Nil
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: _List_Nil
			};
		}
	});
var $author$project$LogicUS$FOL$AuxiliarFuctions$powerset = A2(
	$elm$core$List$foldr,
	F2(
		function (x, acc) {
			return _Utils_ap(
				acc,
				A2(
					$elm$core$List$map,
					$elm$core$List$cons(x),
					acc));
		}),
	_List_fromArray(
		[_List_Nil]));
var $author$project$LogicUS$FOL$Herbrand$signatureHerbrandInterpretations = F2(
	function (s, n) {
		return $author$project$LogicUS$FOL$AuxiliarFuctions$powerset(
			A2($author$project$LogicUS$FOL$Herbrand$signatureHerbrandBase, s, n));
	});
var $author$project$LogicUS$FOL$Herbrand$sfolHerbrandInterpretations = F2(
	function (fs, n) {
		return A2(
			$elm$core$Maybe$map,
			function (s) {
				return A2($author$project$LogicUS$FOL$Herbrand$signatureHerbrandInterpretations, s, n);
			},
			$author$project$LogicUS$FOL$Herbrand$sfolSignature(fs));
	});
var $author$project$FOLBasicProcessors$processHerbrandInterpretationsFOLNode = F2(
	function (content, outputsSFOL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: x, n: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['n']),
				$elm$json$Json$Decode$int));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var source = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(source.origin_id, source.origin_slot),
					outputsSFOL);
				if (_v2.$ === 'Just') {
					var fs = _v2.a;
					var _v3 = A2($author$project$LogicUS$FOL$Herbrand$sfolHerbrandInterpretations, fs, c.n);
					if (_v3.$ === 'Just') {
						var s = _v3.a;
						return {
							errorCode: 0,
							message: $elm$json$Json$Encode$string(
								A2(
									$elm$core$String$join,
									';',
									A2($elm$core$List$map, $author$project$LogicUS$FOL$SyntaxSemantics$sfolToString, s)))
						};
					} else {
						return {
							errorCode: 1,
							message: $elm$json$Json$Encode$string('The FOL set given contains quantifiers or equalities, that are forbidden in Herbrand Works')
						};
					}
				} else {
					return {
						errorCode: 2,
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')'))))
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e))
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e))
			};
		}
	});
var $author$project$LogicUS$FOL$Herbrand$ffolInterpretsHerbrand = F3(
	function (f, iH, uH) {
		switch (f.$) {
			case 'Pred':
				return $elm$core$Maybe$Just(
					A2($elm$core$List$member, f, iH));
			case 'Equal':
				return $elm$core$Maybe$Nothing;
			case 'Neg':
				var f1 = f.a;
				return A2(
					$elm$core$Maybe$map,
					$elm$core$Basics$not,
					A3($author$project$LogicUS$FOL$Herbrand$ffolInterpretsHerbrand, f1, iH, uH));
			case 'Conj':
				var f1 = f.a;
				var f2 = f.b;
				var if2 = A3($author$project$LogicUS$FOL$Herbrand$ffolInterpretsHerbrand, f2, iH, uH);
				var if1 = A3($author$project$LogicUS$FOL$Herbrand$ffolInterpretsHerbrand, f1, iH, uH);
				return A3($elm$core$Maybe$map2, $elm$core$Basics$and, if1, if2);
			case 'Disj':
				var f1 = f.a;
				var f2 = f.b;
				var if2 = A3($author$project$LogicUS$FOL$Herbrand$ffolInterpretsHerbrand, f2, iH, uH);
				var if1 = A3($author$project$LogicUS$FOL$Herbrand$ffolInterpretsHerbrand, f1, iH, uH);
				return A3($elm$core$Maybe$map2, $elm$core$Basics$or, if1, if2);
			case 'Impl':
				var f1 = f.a;
				var f2 = f.b;
				var if2 = A3($author$project$LogicUS$FOL$Herbrand$ffolInterpretsHerbrand, f2, iH, uH);
				var if1 = A3($author$project$LogicUS$FOL$Herbrand$ffolInterpretsHerbrand, f1, iH, uH);
				return A3(
					$elm$core$Maybe$map2,
					F2(
						function (a, b) {
							return (!a) || b;
						}),
					if1,
					if2);
			case 'Equi':
				var f1 = f.a;
				var f2 = f.b;
				var if2 = A3($author$project$LogicUS$FOL$Herbrand$ffolInterpretsHerbrand, f2, iH, uH);
				var if1 = A3($author$project$LogicUS$FOL$Herbrand$ffolInterpretsHerbrand, f1, iH, uH);
				return A3($elm$core$Maybe$map2, $elm$core$Basics$eq, if1, if2);
			case 'Forall':
				return $elm$core$Maybe$Nothing;
			case 'Exists':
				return $elm$core$Maybe$Nothing;
			case 'Taut':
				return $elm$core$Maybe$Just(true);
			default:
				return $elm$core$Maybe$Just(false);
		}
	});
var $author$project$LogicUS$FOL$Herbrand$sfolInterpretsHerbrand = F3(
	function (fs, iH, uH) {
		return A3(
			$elm$core$List$foldl,
			$elm$core$Maybe$map2($elm$core$Basics$and),
			$elm$core$Maybe$Just(true),
			A2(
				$elm$core$List$map,
				function (f) {
					return A3($author$project$LogicUS$FOL$Herbrand$ffolInterpretsHerbrand, f, iH, uH);
				},
				fs));
	});
var $author$project$LogicUS$FOL$Herbrand$sfolHerbrandModels = F2(
	function (fs, n) {
		var uH = A2($author$project$LogicUS$FOL$Herbrand$sfolHerbrandUniverse, fs, n);
		var ms = A2(
			$elm$core$Maybe$map,
			$elm$core$List$filter(
				function (i) {
					return A2(
						$elm$core$Maybe$withDefault,
						false,
						A3(
							$author$project$LogicUS$FOL$Herbrand$sfolInterpretsHerbrand,
							fs,
							i,
							A2($elm$core$Maybe$withDefault, _List_Nil, uH)));
				}),
			A2($author$project$LogicUS$FOL$Herbrand$sfolHerbrandInterpretations, fs, n));
		return A3($elm$core$Maybe$map2, $elm$core$Tuple$pair, uH, ms);
	});
var $author$project$FOLBasicProcessors$processHerbrandModelsFOLNode = F2(
	function (content, outputsSFOL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: x, n: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['n']),
				$elm$json$Json$Decode$int));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var source = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(source.origin_id, source.origin_slot),
					outputsSFOL);
				if (_v2.$ === 'Just') {
					var fs = _v2.a;
					var _v3 = A2($author$project$LogicUS$FOL$Herbrand$sfolHerbrandModels, fs, c.n);
					if (_v3.$ === 'Just') {
						var _v4 = _v3.a;
						var s = _v4.b;
						return {
							errorCode: 0,
							message: $elm$json$Json$Encode$string(
								A2(
									$elm$core$String$join,
									';',
									A2($elm$core$List$map, $author$project$LogicUS$FOL$SyntaxSemantics$sfolToString, s)))
						};
					} else {
						return {
							errorCode: 1,
							message: $elm$json$Json$Encode$string('The FOL set given contains quantifiers or equalities, that are forbidden in Herbrand Works')
						};
					}
				} else {
					return {
						errorCode: 2,
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')'))))
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e))
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e))
			};
		}
	});
var $author$project$FOLBasicProcessors$processHerbrandUniverseFOLNode = F2(
	function (content, outputsSFOL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: x, n: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['n']),
				$elm$json$Json$Decode$int));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var source = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(source.origin_id, source.origin_slot),
					outputsSFOL);
				if (_v2.$ === 'Just') {
					var fs = _v2.a;
					var _v3 = A2($author$project$LogicUS$FOL$Herbrand$sfolHerbrandUniverse, fs, c.n);
					if (_v3.$ === 'Just') {
						var s = _v3.a;
						return {
							errorCode: 0,
							message: $elm$json$Json$Encode$string(
								$author$project$LogicUS$FOL$SyntaxSemantics$termsToString(s))
						};
					} else {
						return {
							errorCode: 1,
							message: $elm$json$Json$Encode$string('The FOL set given contains quantifiers or equalities, that are forbidden in Herbrand Works')
						};
					}
				} else {
					return {
						errorCode: 2,
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')'))))
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e))
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e))
			};
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2($elm$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});
var $elm$core$Set$diff = F2(
	function (_v0, _v1) {
		var dict1 = _v0.a;
		var dict2 = _v1.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$diff, dict1, dict2));
	});
var $elm$core$Set$filter = F2(
	function (isGood, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A2(
				$elm$core$Dict$filter,
				F2(
					function (key, _v1) {
						return isGood(key);
					}),
				dict));
	});
var $elm$core$Set$size = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$size(dict);
};
var $author$project$LogicUS$PL$HornRS$descendentsAbsorption = F3(
	function (desc, ref, facts) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, _v1) {
					var i = _v0.a;
					var dgs = _v0.b;
					var notabs = _v1.a;
					var abs = _v1.b;
					return A2(
						$elm$core$List$any,
						function (igs) {
							return $elm$core$Set$isEmpty(
								A2($elm$core$Set$diff, igs, dgs));
						},
						_Utils_ap(ref, notabs)) ? _Utils_Tuple2(
						notabs,
						A2($elm$core$List$cons, i, abs)) : _Utils_Tuple2(
						_Utils_ap(
							notabs,
							_List_fromArray(
								[dgs])),
						abs);
				}),
			_Utils_Tuple2(_List_Nil, _List_Nil),
			A2(
				$elm$core$List$sortBy,
				A2($elm$core$Basics$composeL, $elm$core$Set$size, $elm$core$Tuple$second),
				A2(
					$elm$core$List$map,
					function (_v2) {
						var i = _v2.a;
						var _v3 = _v2.b;
						var dgs = _v3.b;
						return _Utils_Tuple2(
							i,
							A2(
								$elm$core$Set$filter,
								function (g) {
									return !A2($elm$core$Set$member, g, facts);
								},
								dgs));
					},
					desc)));
	});
var $author$project$LogicUS$PL$HornRS$backwardChainingAux1 = F6(
	function (rules, opened, cancelOpened, explored, facts, step) {
		if (!opened.b) {
			return _Utils_Tuple2(
				false,
				_List_fromArray(
					[
						{
						currentNode: $elm$core$Maybe$Nothing,
						descendents: _List_Nil,
						goal: $elm$core$Maybe$Nothing,
						opened: A2(
							$elm$core$List$map,
							function (y) {
								return _Utils_Tuple2(false, y);
							},
							cancelOpened),
						step: step
					}
					]));
		} else {
			var x = opened.a;
			var xs = opened.b;
			var _v1 = $elm$core$Set$toList(x);
			if (!_v1.b) {
				return _Utils_Tuple2(
					true,
					_List_fromArray(
						[
							{
							currentNode: $elm$core$Maybe$Just($elm$core$Set$empty),
							descendents: _List_Nil,
							goal: $elm$core$Maybe$Nothing,
							opened: _Utils_ap(
								A2(
									$elm$core$List$map,
									function (y) {
										return _Utils_Tuple2(true, y);
									},
									opened),
								A2(
									$elm$core$List$map,
									function (y) {
										return _Utils_Tuple2(false, y);
									},
									cancelOpened)),
							step: step
						}
						]));
			} else {
				var g = _v1.a;
				var gs = _v1.b;
				var desc = A2(
					$elm$core$List$indexedMap,
					F2(
						function (i, _v7) {
							var ri = _v7.a;
							var _v8 = _v7.b;
							var ra = _v8.a;
							return _Utils_Tuple2(
								i,
								_Utils_Tuple2(
									ri,
									A2(
										$elm$core$Set$union,
										ra,
										$elm$core$Set$fromList(gs))));
						}),
					A2(
						$elm$core$List$filter,
						function (_v9) {
							var _v10 = _v9.b;
							var rc = _v10.b;
							return _Utils_eq(rc, g);
						},
						rules));
				var _v2 = A3(
					$author$project$LogicUS$PL$HornRS$descendentsAbsorption,
					desc,
					_Utils_ap(opened, explored),
					facts);
				var notabsDesc = _v2.a;
				var absDesc = _v2.b;
				var _v3 = A2(
					$elm$core$List$partition,
					function (igs) {
						return A2(
							$elm$core$List$all,
							function (dgs) {
								return !$elm$core$Set$isEmpty(
									A2($elm$core$Set$diff, dgs, igs));
							},
							notabsDesc);
					},
					xs);
				var openedSurvival = _v3.a;
				var newCancelOpened = _v3.b;
				var newOpened = A2(
					$elm$core$List$sortBy,
					$elm$core$Set$size,
					_Utils_ap(openedSurvival, notabsDesc));
				var descendents = A2(
					$elm$core$List$map,
					function (_v5) {
						var i = _v5.a;
						var _v6 = _v5.b;
						var ri = _v6.a;
						var igs = _v6.b;
						return _Utils_Tuple3(
							!A2($elm$core$List$member, i, absDesc),
							ri,
							A2(
								$elm$core$List$map,
								function (gi) {
									return _Utils_Tuple2(
										!A2($elm$core$Set$member, gi, facts),
										gi);
								},
								$elm$core$Set$toList(igs)));
					},
					desc);
				var _v4 = A6(
					$author$project$LogicUS$PL$HornRS$backwardChainingAux1,
					rules,
					newOpened,
					newCancelOpened,
					_Utils_ap(
						explored,
						_List_fromArray(
							[x])),
					facts,
					step + 1);
				var res = _v4.a;
				var tableRows = _v4.b;
				return _Utils_Tuple2(
					res,
					A2(
						$elm$core$List$cons,
						{
							currentNode: $elm$core$Maybe$Just(x),
							descendents: descendents,
							goal: $elm$core$Maybe$Just(g),
							opened: _Utils_ap(
								A2(
									$elm$core$List$map,
									function (y) {
										return _Utils_Tuple2(true, y);
									},
									opened),
								A2(
									$elm$core$List$map,
									function (y) {
										return _Utils_Tuple2(false, y);
									},
									cancelOpened)),
							step: step
						},
						tableRows));
			}
		}
	});
var $author$project$LogicUS$PL$HornRS$backwardChaining1 = F3(
	function (rules, facts, goal) {
		var avRules = A2($author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList, _List_Nil, rules);
		if (A2($elm$core$Set$member, goal, facts)) {
			return {goal: goal, initialKB: facts, res: true, rules: avRules, table: _List_Nil};
		} else {
			var _v0 = A6(
				$author$project$LogicUS$PL$HornRS$backwardChainingAux1,
				A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, avRules),
				_List_fromArray(
					[
						$elm$core$Set$fromList(
						_List_fromArray(
							[goal]))
					]),
				_List_Nil,
				_List_Nil,
				facts,
				1);
			var res = _v0.a;
			var table = _v0.b;
			return {goal: goal, initialKB: facts, res: res, rules: avRules, table: table};
		}
	});
var $author$project$LogicUS$PL$HornRS$hornFactToString = function (_v0) {
	var h = _v0.a;
	var pindices = _v0.b;
	return $elm$core$List$isEmpty(pindices) ? h : _Utils_ap(
		h,
		$author$project$LogicUS$PL$AuxiliarFunctions$replaceBySubscript(
			A2(
				$elm$core$String$join,
				',',
				A2($elm$core$List$map, $elm$core$String$fromInt, pindices))));
};
var $author$project$LogicUS$PL$HornRS$hornKBToStringComma = function (kb) {
	return A2(
		$elm$core$String$join,
		', ',
		A2(
			$elm$core$List$map,
			$author$project$LogicUS$PL$HornRS$hornFactToString,
			$elm$core$Set$toList(kb)));
};
var $author$project$LogicUS$PL$HornRS$hornKBToStringWedge = function (kb) {
	return A2(
		$elm$core$String$join,
		' ∧ ',
		A2(
			$elm$core$List$map,
			$author$project$LogicUS$PL$HornRS$hornFactToString,
			$elm$core$Set$toList(kb)));
};
var $author$project$LogicUS$PL$HornRS$hornRuleToString = function (_v0) {
	var ra = _v0.a;
	var rc = _v0.b;
	return $author$project$LogicUS$PL$HornRS$hornKBToStringWedge(ra) + (' → ' + $author$project$LogicUS$PL$HornRS$hornFactToString(rc));
};
var $author$project$LogicUS$PL$HornRS$hornRulesToString = function (rs) {
	return A2(
		$elm$core$String$join,
		', ',
		A2(
			$elm$core$List$indexedMap,
			F2(
				function (i, r) {
					return $author$project$LogicUS$PL$AuxiliarFunctions$replaceBySubscript('R') + ($elm$core$String$fromInt(i + 1) + (' : ' + $author$project$LogicUS$PL$HornRS$hornRuleToString(r)));
				}),
			rs));
};
var $author$project$LogicUS$PL$HornRS$backwardChainingResultToString = function (res) {
	var bchrowToTableString = function (row) {
		return A2(
			$elm$core$String$join,
			';',
			_List_fromArray(
				[
					$elm$core$String$fromInt(row.step),
					$elm$core$List$isEmpty(row.opened) ? '-' : A2(
					$elm$core$String$join,
					', ',
					A2(
						$elm$core$List$map,
						function (_v0) {
							var ncancel = _v0.a;
							var gs = _v0.b;
							return ncancel ? ('{' + ($author$project$LogicUS$PL$HornRS$hornKBToStringComma(gs) + '}')) : ('<del>{' + ($author$project$LogicUS$PL$HornRS$hornKBToStringComma(gs) + '}</del>'));
						},
						row.opened)),
					A2(
					$elm$core$Maybe$withDefault,
					'-',
					A2(
						$elm$core$Maybe$map,
						function (x) {
							return '{' + ($author$project$LogicUS$PL$HornRS$hornKBToStringComma(x) + '}');
						},
						row.currentNode)),
					A2(
					$elm$core$Maybe$withDefault,
					'-',
					A2($elm$core$Maybe$map, $author$project$LogicUS$PL$HornRS$hornFactToString, row.goal)),
					$elm$core$List$isEmpty(row.descendents) ? '-' : A2(
					$elm$core$String$join,
					', ',
					A2(
						$elm$core$List$map,
						function (_v1) {
							var ncancel = _v1.a;
							var ri = _v1.b;
							var gs = _v1.c;
							return ncancel ? (' (R' + ($author$project$LogicUS$PL$AuxiliarFunctions$replaceBySubscript(
								$elm$core$String$fromInt(ri + 1)) + (', {' + (A2(
								$elm$core$String$join,
								',',
								A2(
									$elm$core$List$map,
									function (_v2) {
										var nf = _v2.a;
										var g = _v2.b;
										return nf ? $author$project$LogicUS$PL$HornRS$hornFactToString(g) : ('<b>' + ($author$project$LogicUS$PL$HornRS$hornFactToString(g) + '</b>'));
									},
									gs)) + '})')))) : ('<del> (R' + ($author$project$LogicUS$PL$AuxiliarFunctions$replaceBySubscript(
								$elm$core$String$fromInt(ri + 1)) + (', {' + (A2(
								$elm$core$String$join,
								',',
								A2(
									$elm$core$List$map,
									function (_v3) {
										var nf = _v3.a;
										var g = _v3.b;
										return nf ? $author$project$LogicUS$PL$HornRS$hornFactToString(g) : ('<b>' + ($author$project$LogicUS$PL$HornRS$hornFactToString(g) + '</b>'));
									},
									gs)) + '})</del>'))));
						},
						row.descendents))
				]));
	};
	var rules = A2(
		$elm$core$String$join,
		';',
		_List_fromArray(
			[
				'Rules',
				$author$project$LogicUS$PL$HornRS$hornRulesToString(res.rules)
			]));
	var result = A2(
		$elm$core$String$join,
		';',
		_List_fromArray(
			[
				'RESULT',
				res.res ? 'TRUE' : 'FALSE'
			]));
	var initialfacts = A2(
		$elm$core$String$join,
		';',
		_List_fromArray(
			[
				'Initial facts',
				$author$project$LogicUS$PL$HornRS$hornKBToStringWedge(res.initialKB)
			]));
	var goal = A2(
		$elm$core$String$join,
		';',
		_List_fromArray(
			[
				'Goal',
				$author$project$LogicUS$PL$HornRS$hornFactToString(res.goal)
			]));
	return _List_fromArray(
		[
			initialfacts + ('\n' + (rules + ('\n' + (goal + ('\n' + result))))),
			A2(
			$elm$core$String$join,
			'\n',
			A2(
				$elm$core$List$cons,
				'Step;Opened ways;Selected way;Selected Goal;New Ways',
				A2($elm$core$List$map, bchrowToTableString, res.table)))
		]);
};
var $elm$json$Json$Decode$map6 = _Json_map6;
var $author$project$PLAlgProcessors$processHornBwChPL = F4(
	function (content, outputsRSHRS, outputsKBHRS, outputsFHRS) {
		var contentDecoder = A7(
			$elm$json$Json$Decode$map6,
			F6(
				function (rid, rsl, kbid, kbsl, gid, gsl) {
					return {origing_id: gid, origing_slot: gsl, originkb_id: kbid, originkb_slot: kbsl, originr_id: rid, originr_slot: rsl};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['originr_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['originr_slot']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['originkb_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['originkb_slot']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origing_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origing_slot']),
				$elm$json$Json$Decode$int));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var source = _v0.a;
			var _v1 = _Utils_Tuple3(
				A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(source.originr_id, source.originr_slot),
					outputsRSHRS),
				A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(source.originkb_id, source.originkb_slot),
					outputsKBHRS),
				A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(source.origing_id, source.origing_slot),
					outputsFHRS));
			if (_v1.a.$ === 'Nothing') {
				var _v2 = _v1.a;
				return {
					errorCode: 2,
					message: $elm$json$Json$Encode$string(
						'Unknown source rule set: (' + ($elm$core$String$fromInt(source.originr_id) + (', ' + ($elm$core$String$fromInt(source.originr_slot) + ')'))))
				};
			} else {
				if (_v1.b.$ === 'Nothing') {
					var _v3 = _v1.b;
					return {
						errorCode: 2,
						message: $elm$json$Json$Encode$string(
							'Unknown source KB (fact set): (' + ($elm$core$String$fromInt(source.originkb_id) + (', ' + ($elm$core$String$fromInt(source.originkb_slot) + ')'))))
					};
				} else {
					if (_v1.c.$ === 'Nothing') {
						var _v4 = _v1.c;
						return {
							errorCode: 2,
							message: $elm$json$Json$Encode$string(
								'Unknown source goal (fact): (' + ($elm$core$String$fromInt(source.origing_id) + (', ' + ($elm$core$String$fromInt(source.origing_slot) + ')'))))
						};
					} else {
						var rs = _v1.a.a;
						var kb = _v1.b.a;
						var g = _v1.c.a;
						var resCh = A3($author$project$LogicUS$PL$HornRS$backwardChaining1, rs, kb, g);
						return {
							errorCode: 0,
							message: $elm$json$Json$Encode$object(
								A3(
									$elm$core$List$map2,
									$elm$core$Tuple$pair,
									_List_fromArray(
										['info', 'process']),
									A2(
										$elm$core$List$map,
										$elm$json$Json$Encode$string,
										$author$project$LogicUS$PL$HornRS$backwardChainingResultToString(resCh))))
						};
					}
				}
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e))
			};
		}
	});
var $author$project$LogicUS$PL$HornRS$hornFactSymbParser = $elm$parser$Parser$getChompedString(
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(_Utils_Tuple0),
			$elm$parser$Parser$chompIf($elm$core$Char$isUpper)),
		$elm$parser$Parser$chompWhile($elm$core$Char$isAlphaNum)));
var $author$project$LogicUS$PL$HornRS$hornFactSubindexedParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($elm$core$Tuple$pair),
		$author$project$LogicUS$PL$HornRS$hornFactSymbParser),
	$elm$parser$Parser$sequence(
		{end: '}', item: $elm$parser$Parser$int, separator: ',', spaces: $elm$parser$Parser$spaces, start: '_{', trailing: $elm$parser$Parser$Forbidden}));
var $author$project$LogicUS$PL$HornRS$hornFactParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$backtrackable($author$project$LogicUS$PL$HornRS$hornFactSubindexedParser)),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				function (x) {
					return _Utils_Tuple2(x, _List_Nil);
				}),
			$author$project$LogicUS$PL$HornRS$hornFactSymbParser),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(
				_Utils_Tuple2('⟂', _List_Nil)),
			$elm$parser$Parser$symbol('!F')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(
				_Utils_Tuple2('⊤', _List_Nil)),
			$elm$parser$Parser$symbol('!T'))
		]));
var $author$project$LogicUS$PL$HornRS$hornFactOnlyParser = A2(
	$elm$parser$Parser$keeper,
	$elm$parser$Parser$succeed($elm$core$Basics$identity),
	A2($elm$parser$Parser$ignorer, $author$project$LogicUS$PL$HornRS$hornFactParser, $elm$parser$Parser$end));
var $author$project$LogicUS$PL$HornRS$hornFactToInputString = function (hf) {
	if (!hf.b.b) {
		var vname = hf.a;
		return $elm$core$String$toUpper(vname);
	} else {
		var vname = hf.a;
		var vindices = hf.b;
		return $elm$core$String$toUpper(vname) + ('_{' + (A2(
			$elm$core$String$join,
			',',
			A2($elm$core$List$map, $elm$core$String$fromInt, vindices)) + '}'));
	}
};
var $author$project$LogicUS$PL$HornRS$hornFactReadFromString = function (x) {
	var _v0 = $author$project$LogicUS$PL$AuxiliarFunctions$cleanSpaces(x);
	if (_v0 === '') {
		return _Utils_Tuple3($elm$core$Maybe$Nothing, '', 'Argument is empty');
	} else {
		var s = _v0;
		var _v1 = A2($elm$parser$Parser$run, $author$project$LogicUS$PL$HornRS$hornFactOnlyParser, s);
		if (_v1.$ === 'Ok') {
			var y = _v1.a;
			return _Utils_Tuple3(
				$elm$core$Maybe$Just(y),
				$author$project$LogicUS$PL$HornRS$hornFactToInputString(y),
				'');
		} else {
			var y = _v1.a;
			return _Utils_Tuple3(
				$elm$core$Maybe$Nothing,
				s,
				'Error: ' + A3(
					$elm$core$String$replace,
					'\"',
					'\'',
					$elm$core$Debug$toString(y)));
		}
	}
};
var $author$project$PLBasicProcessors$processHornFactPLNode = function (content) {
	var _v0 = $author$project$LogicUS$PL$HornRS$hornFactReadFromString(content);
	if (_v0.a.$ === 'Nothing') {
		var _v1 = _v0.a;
		var errDetails = _v0.c;
		return {
			errorCode: 1,
			message: $elm$json$Json$Encode$string(errDetails),
			result: _Utils_Tuple2('⟂', _List_Nil)
		};
	} else {
		var f = _v0.a.a;
		return {
			errorCode: 0,
			message: $elm$json$Json$Encode$string(
				$author$project$LogicUS$PL$SyntaxSemantics$fplToString(
					$author$project$LogicUS$PL$SyntaxSemantics$Atom(f))),
			result: f
		};
	}
};
var $author$project$LogicUS$PL$HornRS$hornFactReadExtraction = function (_v0) {
	var mf = _v0.a;
	return A2(
		$elm$core$Maybe$withDefault,
		_Utils_Tuple2('⟂', _List_Nil),
		mf);
};
var $author$project$PLBasicProcessors$processHornFactSetPLNode = F3(
	function (content, outputsFHRS, outputsKBHRS) {
		var inputDecoder = $elm$json$Json$Decode$list(
			A3(
				$elm$json$Json$Decode$map2,
				$elm$core$Tuple$pair,
				A2(
					$elm$json$Json$Decode$at,
					_List_fromArray(
						['origin_id']),
					$elm$json$Json$Decode$int),
				A2(
					$elm$json$Json$Decode$at,
					_List_fromArray(
						['origin_slot']),
					$elm$json$Json$Decode$int)));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = c.option;
			switch (_v1) {
				case 'spec':
					var parsedSet = A2(
						$elm$core$List$map,
						$author$project$LogicUS$PL$HornRS$hornFactReadFromString,
						A2($elm$core$String$split, ',', c.input));
					if (A2(
						$elm$core$List$any,
						function (_v2) {
							var f = _v2.a;
							return $elm_community$maybe_extra$Maybe$Extra$isNothing(f);
						},
						parsedSet)) {
						return {
							errorCode: 1,
							message: $elm$json$Json$Encode$string(
								A2(
									$elm$core$String$join,
									'.',
									A2(
										$elm$core$List$filter,
										$elm$core$String$isEmpty,
										A2(
											$elm$core$List$indexedMap,
											F2(
												function (i, _v3) {
													var m = _v3.c;
													return (m !== '') ? ('f' + ($elm$core$String$fromInt(i) + (' : ' + m))) : '';
												}),
											parsedSet)))),
							result: $elm$core$Set$empty
						};
					} else {
						var fs = $elm$core$Set$fromList(
							A2($elm$core$List$map, $author$project$LogicUS$PL$HornRS$hornFactReadExtraction, parsedSet));
						return {
							errorCode: 0,
							message: $elm$json$Json$Encode$string(
								$author$project$LogicUS$PL$HornRS$hornKBToStringComma(fs)),
							result: fs
						};
					}
				case 'collect':
					var _v4 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
					if (_v4.$ === 'Ok') {
						var sources = _v4.a;
						var fs = A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(
									x,
									A2($elm$core$Dict$get, x, outputsFHRS));
							},
							sources);
						var _v5 = A2(
							$elm$core$List$filter,
							A2($elm$core$Basics$composeL, $elm_community$maybe_extra$Maybe$Extra$isNothing, $elm$core$Tuple$second),
							fs);
						if (!_v5.b) {
							var fs_ = $elm$core$Set$fromList(
								A2(
									$elm$core$List$map,
									A2(
										$elm$core$Basics$composeL,
										$elm$core$Maybe$withDefault(
											_Utils_Tuple2('⟂', _List_Nil)),
										$elm$core$Tuple$second),
									fs));
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$HornRS$hornKBToStringComma(fs_)),
								result: fs_
							};
						} else {
							var undefSources = _v5;
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown sources:' + A2(
										$elm$core$String$join,
										'. ',
										A2(
											$elm$core$List$map,
											function (_v6) {
												var _v7 = _v6.a;
												var sid = _v7.a;
												var sslot = _v7.b;
												return '(' + ($elm$core$String$fromInt(sid) + (', ' + ($elm$core$String$fromInt(sslot) + ')')));
											},
											undefSources))),
								result: $elm$core$Set$empty
							};
						}
					} else {
						var e = _v4.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$json$Json$Decode$errorToString(e)),
							result: $elm$core$Set$empty
						};
					}
				case 'union':
					var _v8 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
					if (_v8.$ === 'Ok') {
						var sources = _v8.a;
						var fss = A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(
									x,
									A2($elm$core$Dict$get, x, outputsKBHRS));
							},
							sources);
						var _v9 = A2(
							$elm$core$List$filter,
							A2($elm$core$Basics$composeL, $elm_community$maybe_extra$Maybe$Extra$isNothing, $elm$core$Tuple$second),
							fss);
						if (!_v9.b) {
							var fs_ = A3(
								$elm$core$List$foldl,
								F2(
									function (_v10, ac) {
										var fs = _v10.b;
										return A2(
											$elm$core$Set$union,
											ac,
											A2($elm$core$Maybe$withDefault, $elm$core$Set$empty, fs));
									}),
								$elm$core$Set$empty,
								fss);
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$HornRS$hornKBToStringComma(fs_)),
								result: fs_
							};
						} else {
							var undefSources = _v9;
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown sources:' + A2(
										$elm$core$String$join,
										'. ',
										A2(
											$elm$core$List$map,
											function (_v11) {
												var _v12 = _v11.a;
												var sid = _v12.a;
												var sslot = _v12.b;
												return '(' + ($elm$core$String$fromInt(sid) + (', ' + ($elm$core$String$fromInt(sslot) + ')')));
											},
											undefSources))),
								result: $elm$core$Set$empty
							};
						}
					} else {
						var e = _v8.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$json$Json$Decode$errorToString(e)),
							result: $elm$core$Set$empty
						};
					}
				default:
					return {
						errorCode: 4,
						message: $elm$json$Json$Encode$string('undefined option for node of type HornFactSetPL'),
						result: $elm$core$Set$empty
					};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: $elm$core$Set$empty
			};
		}
	});
var $author$project$LogicUS$PL$HornRS$forwardChainingAux1 = F4(
	function (avRules, kb, goal, step) {
		var _v0 = A2(
			$elm$core$List$partition,
			function (_v1) {
				var _v2 = _v1.b;
				var ra = _v2.a;
				return A2(
					$elm$core$List$all,
					function (s) {
						return A2($elm$core$Set$member, s, kb);
					},
					ra);
			},
			avRules);
		var shooted = _v0.a;
		var rem = _v0.b;
		var newFacts = A2(
			$elm$core$Set$diff,
			$elm$core$Set$fromList(
				A2(
					$elm$core$List$map,
					A2($elm$core$Basics$composeL, $elm$core$Tuple$second, $elm$core$Tuple$second),
					shooted)),
			kb);
		var row = {
			avRules: A2($elm$core$List$map, $elm$core$Tuple$first, avRules),
			kb: kb,
			newFacts: newFacts,
			shRules: A2($elm$core$List$map, $elm$core$Tuple$first, shooted),
			step: step
		};
		if ($elm$core$Set$isEmpty(newFacts)) {
			return _Utils_Tuple2(
				false,
				_List_fromArray(
					[row]));
		} else {
			if (A2($elm$core$Set$member, goal, newFacts)) {
				return _Utils_Tuple2(
					true,
					_List_fromArray(
						[row]));
			} else {
				var _v3 = A4(
					$author$project$LogicUS$PL$HornRS$forwardChainingAux1,
					rem,
					A2($elm$core$Set$union, kb, newFacts),
					goal,
					step + 1);
				var res = _v3.a;
				var tableTail = _v3.b;
				return _Utils_Tuple2(
					res,
					A2($elm$core$List$cons, row, tableTail));
			}
		}
	});
var $author$project$LogicUS$PL$HornRS$forwardChaining1 = F3(
	function (rules, facts, goal) {
		var avRules = A2($author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList, _List_Nil, rules);
		if (A2($elm$core$Set$member, goal, facts)) {
			return {goal: goal, initialKB: facts, res: true, rules: avRules, table: _List_Nil};
		} else {
			var _v0 = A4(
				$author$project$LogicUS$PL$HornRS$forwardChainingAux1,
				A2(
					$elm$core$List$indexedMap,
					$elm$core$Tuple$pair,
					A2(
						$elm$core$List$map,
						function (_v1) {
							var ra = _v1.a;
							var rc = _v1.b;
							return _Utils_Tuple2(
								$elm$core$Set$toList(ra),
								rc);
						},
						avRules)),
				facts,
				goal,
				1);
			var res = _v0.a;
			var table = _v0.b;
			return {goal: goal, initialKB: facts, res: res, rules: avRules, table: table};
		}
	});
var $author$project$LogicUS$PL$HornRS$forwardChainingAux2 = F4(
	function (avRules, kb, goal, step) {
		var _v0 = A2(
			$elm$core$List$partition,
			function (_v1) {
				var _v2 = _v1.b;
				var ra = _v2.a;
				return A2(
					$elm$core$List$all,
					function (s) {
						return A2($elm$core$Set$member, s, kb);
					},
					ra);
			},
			avRules);
		var shooted = _v0.a;
		var rem = _v0.b;
		var newFacts = A2(
			$elm$core$Set$diff,
			$elm$core$Set$fromList(
				A2(
					$elm$core$List$map,
					A2($elm$core$Basics$composeL, $elm$core$Tuple$second, $elm$core$Tuple$second),
					shooted)),
			kb);
		var row = {
			avRules: A2($elm$core$List$map, $elm$core$Tuple$first, avRules),
			kb: kb,
			newFacts: newFacts,
			shRules: A2($elm$core$List$map, $elm$core$Tuple$first, shooted),
			step: step
		};
		if ($elm$core$Set$isEmpty(newFacts)) {
			return _Utils_Tuple2(
				false,
				_List_fromArray(
					[row]));
		} else {
			if (A2($elm$core$Set$member, goal, newFacts)) {
				return _Utils_Tuple2(
					true,
					_List_fromArray(
						[row]));
			} else {
				var _v3 = A4(
					$author$project$LogicUS$PL$HornRS$forwardChainingAux1,
					A2(
						$elm$core$List$filter,
						function (_v4) {
							var _v5 = _v4.b;
							var rc = _v5.b;
							return !A2($elm$core$Set$member, rc, newFacts);
						},
						rem),
					A2($elm$core$Set$union, kb, newFacts),
					goal,
					step + 1);
				var res = _v3.a;
				var tableTail = _v3.b;
				return _Utils_Tuple2(
					res,
					A2($elm$core$List$cons, row, tableTail));
			}
		}
	});
var $author$project$LogicUS$PL$HornRS$forwardChaining2 = F3(
	function (rules, facts, goal) {
		var avRules = A2($author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList, _List_Nil, rules);
		if (A2($elm$core$Set$member, goal, facts)) {
			return {goal: goal, initialKB: facts, res: true, rules: avRules, table: _List_Nil};
		} else {
			var _v0 = A4(
				$author$project$LogicUS$PL$HornRS$forwardChainingAux2,
				A2(
					$elm$core$List$indexedMap,
					$elm$core$Tuple$pair,
					A2(
						$elm$core$List$map,
						function (_v1) {
							var ra = _v1.a;
							var rc = _v1.b;
							return _Utils_Tuple2(
								$elm$core$Set$toList(ra),
								rc);
						},
						A2(
							$elm$core$List$filter,
							function (_v2) {
								var rc = _v2.b;
								return !A2($elm$core$Set$member, rc, facts);
							},
							avRules))),
				facts,
				goal,
				1);
			var res = _v0.a;
			var table = _v0.b;
			return {goal: goal, initialKB: facts, res: res, rules: avRules, table: table};
		}
	});
var $author$project$LogicUS$PL$HornRS$forwardChainingResultToString = function (res) {
	var fchrowToTableString = function (row) {
		return A2(
			$elm$core$String$join,
			';',
			_List_fromArray(
				[
					$elm$core$String$fromInt(row.step),
					$author$project$LogicUS$PL$HornRS$hornKBToStringComma(row.kb),
					$elm$core$List$isEmpty(row.avRules) ? '-' : A2(
					$elm$core$String$join,
					', ',
					A2(
						$elm$core$List$map,
						function (i) {
							return 'R' + $author$project$LogicUS$PL$AuxiliarFunctions$replaceBySubscript(
								$elm$core$String$fromInt(i + 1));
						},
						row.avRules)),
					$elm$core$List$isEmpty(row.shRules) ? '-' : A2(
					$elm$core$String$join,
					', ',
					A2(
						$elm$core$List$map,
						function (i) {
							return 'R' + $author$project$LogicUS$PL$AuxiliarFunctions$replaceBySubscript(
								$elm$core$String$fromInt(i + 1));
						},
						row.shRules)),
					$elm$core$Set$isEmpty(row.newFacts) ? '-' : $author$project$LogicUS$PL$HornRS$hornKBToStringComma(row.newFacts)
				]));
	};
	var rules = A2(
		$elm$core$String$join,
		';',
		_List_fromArray(
			[
				'Rules',
				$author$project$LogicUS$PL$HornRS$hornRulesToString(res.rules)
			]));
	var result = A2(
		$elm$core$String$join,
		';',
		_List_fromArray(
			[
				'RESULT',
				res.res ? 'TRUE' : 'FALSE'
			]));
	var initialfacts = A2(
		$elm$core$String$join,
		';',
		_List_fromArray(
			[
				'Initial facts',
				$author$project$LogicUS$PL$HornRS$hornKBToStringWedge(res.initialKB)
			]));
	var goal = A2(
		$elm$core$String$join,
		';',
		_List_fromArray(
			[
				'Goal',
				$author$project$LogicUS$PL$HornRS$hornFactToString(res.goal)
			]));
	return _List_fromArray(
		[
			initialfacts + ('\n' + (rules + ('\n' + (goal + ('\n' + result))))),
			A2(
			$elm$core$String$join,
			'\n',
			A2(
				$elm$core$List$cons,
				'Step;Knowledge Base;Available Rules;Shooted Rules;Deductions',
				A2($elm$core$List$map, fchrowToTableString, res.table)))
		]);
};
var $author$project$PLAlgProcessors$processHornFwChPL = F4(
	function (content, outputsRSHRS, outputsKBHRS, outputsFHRS) {
		var inputDecoder = A7(
			$elm$json$Json$Decode$map6,
			F6(
				function (rid, rsl, kbid, kbsl, gid, gsl) {
					return {origing_id: gid, origing_slot: gsl, originkb_id: kbid, originkb_slot: kbsl, originr_id: rid, originr_slot: rsl};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['originr_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['originr_slot']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['originkb_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['originkb_slot']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origing_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origing_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var source = _v1.a;
				var _v2 = _Utils_Tuple3(
					A2(
						$elm$core$Dict$get,
						_Utils_Tuple2(source.originr_id, source.originr_slot),
						outputsRSHRS),
					A2(
						$elm$core$Dict$get,
						_Utils_Tuple2(source.originkb_id, source.originkb_slot),
						outputsKBHRS),
					A2(
						$elm$core$Dict$get,
						_Utils_Tuple2(source.origing_id, source.origing_slot),
						outputsFHRS));
				if (_v2.a.$ === 'Nothing') {
					var _v3 = _v2.a;
					return {
						errorCode: 2,
						message: $elm$json$Json$Encode$string(
							'Unknown source rule set: (' + ($elm$core$String$fromInt(source.originr_id) + (', ' + ($elm$core$String$fromInt(source.originr_slot) + ')'))))
					};
				} else {
					if (_v2.b.$ === 'Nothing') {
						var _v4 = _v2.b;
						return {
							errorCode: 2,
							message: $elm$json$Json$Encode$string(
								'Unknown source KB (fact set): (' + ($elm$core$String$fromInt(source.originkb_id) + (', ' + ($elm$core$String$fromInt(source.originkb_slot) + ')'))))
						};
					} else {
						if (_v2.c.$ === 'Nothing') {
							var _v5 = _v2.c;
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown source goal (fact): (' + ($elm$core$String$fromInt(source.origing_id) + (', ' + ($elm$core$String$fromInt(source.origing_slot) + ')'))))
							};
						} else {
							var rs = _v2.a.a;
							var kb = _v2.b.a;
							var g = _v2.c.a;
							var _v6 = c.option;
							switch (_v6) {
								case 'remIrrel':
									var resCh = A3($author$project$LogicUS$PL$HornRS$forwardChaining2, rs, kb, g);
									return {
										errorCode: 0,
										message: $elm$json$Json$Encode$object(
											A3(
												$elm$core$List$map2,
												$elm$core$Tuple$pair,
												_List_fromArray(
													['info', 'process']),
												A2(
													$elm$core$List$map,
													$elm$json$Json$Encode$string,
													$author$project$LogicUS$PL$HornRS$forwardChainingResultToString(resCh))))
									};
								case 'remUsed':
									var resCh = A3($author$project$LogicUS$PL$HornRS$forwardChaining1, rs, kb, g);
									return {
										errorCode: 0,
										message: $elm$json$Json$Encode$object(
											A3(
												$elm$core$List$map2,
												$elm$core$Tuple$pair,
												_List_fromArray(
													['info', 'process']),
												A2(
													$elm$core$List$map,
													$elm$json$Json$Encode$string,
													$author$project$LogicUS$PL$HornRS$forwardChainingResultToString(resCh))))
									};
								default:
									return {
										errorCode: 4,
										message: $elm$json$Json$Encode$string('Unknown option (' + (c.option + ') for HornFwChPL'))
									};
							}
						}
					}
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e))
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e))
			};
		}
	});
var $author$project$LogicUS$PL$HornRS$hornLHSParser = A2(
	$elm$parser$Parser$map,
	$elm$core$Set$fromList,
	$elm$parser$Parser$sequence(
		{end: '', item: $author$project$LogicUS$PL$HornRS$hornFactParser, separator: '&', spaces: $elm$parser$Parser$spaces, start: '', trailing: $elm$parser$Parser$Forbidden}));
var $author$project$LogicUS$PL$HornRS$hornRuleParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($elm$core$Tuple$pair),
		A2(
			$elm$parser$Parser$ignorer,
			$author$project$LogicUS$PL$HornRS$hornLHSParser,
			$elm$parser$Parser$symbol('->'))),
	A2($elm$parser$Parser$ignorer, $author$project$LogicUS$PL$HornRS$hornFactParser, $elm$parser$Parser$end));
var $author$project$LogicUS$PL$HornRS$hornRuleReadFromString = function (x) {
	var _v0 = $author$project$LogicUS$PL$AuxiliarFunctions$cleanSpaces(x);
	if (_v0 === '') {
		return _Utils_Tuple3($elm$core$Maybe$Nothing, '', 'Argument is empty');
	} else {
		var s = _v0;
		var _v1 = A2($elm$parser$Parser$run, $author$project$LogicUS$PL$HornRS$hornRuleParser, s);
		if (_v1.$ === 'Ok') {
			var y = _v1.a;
			return _Utils_Tuple3(
				$elm$core$Maybe$Just(y),
				A2(
					$elm$core$String$join,
					' & ',
					A2(
						$elm$core$List$map,
						$author$project$LogicUS$PL$HornRS$hornFactToInputString,
						$elm$core$Set$toList(y.a))) + ('->' + $author$project$LogicUS$PL$HornRS$hornFactToInputString(y.b)),
				'');
		} else {
			var y = _v1.a;
			return _Utils_Tuple3(
				$elm$core$Maybe$Nothing,
				s,
				'Error: ' + A3(
					$elm$core$String$replace,
					'\"',
					'\'',
					$elm$core$Debug$toString(y)));
		}
	}
};
var $author$project$PLBasicProcessors$processHornRulePLNode = F3(
	function (content, outputsFHRS, outputsKBHRS) {
		var inputDecoder = A5(
			$elm$json$Json$Decode$map4,
			F4(
				function (x, y, u, v) {
					return {origin1_id: x, origin1_slot: y, origin2_id: u, origin2_slot: v};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin1_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin1_slot']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin2_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin2_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = c.option;
			switch (_v1) {
				case 'spec':
					var _v2 = $author$project$LogicUS$PL$HornRS$hornRuleReadFromString(c.input);
					if (_v2.a.$ === 'Nothing') {
						var _v3 = _v2.a;
						var errDetails = _v2.c;
						return {
							errorCode: 1,
							message: $elm$json$Json$Encode$string(errDetails),
							result: _Utils_Tuple2(
								$elm$core$Set$empty,
								_Utils_Tuple2('⟂', _List_Nil))
						};
					} else {
						var r = _v2.a.a;
						return {
							errorCode: 0,
							message: $elm$json$Json$Encode$string(
								$author$project$LogicUS$PL$HornRS$hornRuleToString(r)),
							result: r
						};
					}
				case 'inputs':
					var _v4 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
					if (_v4.$ === 'Ok') {
						var sources = _v4.a;
						var _v5 = _Utils_Tuple2(
							A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin1_id, sources.origin1_slot),
								outputsKBHRS),
							A2(
								$elm$core$Dict$get,
								_Utils_Tuple2(sources.origin2_id, sources.origin2_slot),
								outputsFHRS));
						if (_v5.a.$ === 'Nothing') {
							var _v6 = _v5.a;
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown source: (' + ($elm$core$String$fromInt(sources.origin1_id) + (',' + ($elm$core$String$fromInt(sources.origin1_slot) + ')')))),
								result: _Utils_Tuple2(
									$elm$core$Set$empty,
									_Utils_Tuple2('⟂', _List_Nil))
							};
						} else {
							if (_v5.b.$ === 'Nothing') {
								var _v7 = _v5.b;
								return {
									errorCode: 2,
									message: $elm$json$Json$Encode$string(
										'Unknown source: (' + ($elm$core$String$fromInt(sources.origin2_id) + (',' + ($elm$core$String$fromInt(sources.origin2_slot) + ')')))),
									result: _Utils_Tuple2(
										$elm$core$Set$empty,
										_Utils_Tuple2('⟂', _List_Nil))
								};
							} else {
								var fs = _v5.a.a;
								var f = _v5.b.a;
								return {
									errorCode: 0,
									message: $elm$json$Json$Encode$string(
										$author$project$LogicUS$PL$HornRS$hornRuleToString(
											_Utils_Tuple2(fs, f))),
									result: _Utils_Tuple2(fs, f)
								};
							}
						}
					} else {
						var e = _v4.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$json$Json$Decode$errorToString(e)),
							result: _Utils_Tuple2(
								$elm$core$Set$empty,
								_Utils_Tuple2('⟂', _List_Nil))
						};
					}
				default:
					return {
						errorCode: 4,
						message: $elm$json$Json$Encode$string('undefined option for node of type HornRulePL'),
						result: _Utils_Tuple2(
							$elm$core$Set$empty,
							_Utils_Tuple2('⟂', _List_Nil))
					};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: _Utils_Tuple2(
					$elm$core$Set$empty,
					_Utils_Tuple2('⟂', _List_Nil))
			};
		}
	});
var $author$project$PLBasicProcessors$processHornRuleSetPLNode = F3(
	function (content, outputsRHRS, outputsRSHRS) {
		var inputDecoder = $elm$json$Json$Decode$list(
			A3(
				$elm$json$Json$Decode$map2,
				$elm$core$Tuple$pair,
				A2(
					$elm$json$Json$Decode$at,
					_List_fromArray(
						['origin_id']),
					$elm$json$Json$Decode$int),
				A2(
					$elm$json$Json$Decode$at,
					_List_fromArray(
						['origin_slot']),
					$elm$json$Json$Decode$int)));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = c.option;
			switch (_v1) {
				case 'fromFile':
					var parsedSet = function () {
						var _v5 = $elm_community$list_extra$List$Extra$unconsLast(
							A2($elm$core$String$split, '.', c.input));
						if (_v5.$ === 'Just') {
							if (_v5.a.a === '') {
								if (!_v5.a.b.b) {
									var _v6 = _v5.a;
									return A2(
										$elm$core$List$map,
										$author$project$LogicUS$PL$HornRS$hornRuleReadFromString,
										_List_fromArray(
											['']));
								} else {
									var _v7 = _v5.a;
									var ls = _v7.b;
									return A2($elm$core$List$map, $author$project$LogicUS$PL$HornRS$hornRuleReadFromString, ls);
								}
							} else {
								var _v8 = _v5.a;
								var s = _v8.a;
								var ls = _v8.b;
								return A2(
									$elm$core$List$map,
									$author$project$LogicUS$PL$HornRS$hornRuleReadFromString,
									_Utils_ap(
										ls,
										_List_fromArray(
											[s])));
							}
						} else {
							return A2(
								$elm$core$List$map,
								$author$project$LogicUS$PL$HornRS$hornRuleReadFromString,
								_List_fromArray(
									['']));
						}
					}();
					if (A2(
						$elm$core$List$any,
						function (_v2) {
							var r = _v2.a;
							return $elm_community$maybe_extra$Maybe$Extra$isNothing(r);
						},
						parsedSet)) {
						return {
							errorCode: 1,
							message: $elm$json$Json$Encode$string(
								A2(
									$elm$core$String$join,
									'.',
									A2(
										$elm$core$List$indexedMap,
										F2(
											function (i, _v3) {
												var m = _v3.c;
												return (m !== '') ? ('R-' + ($elm$core$String$fromInt(i) + (' : ' + m))) : '';
											}),
										parsedSet))),
							result: _List_Nil
						};
					} else {
						var rs = $elm_community$list_extra$List$Extra$unique(
							A2(
								$elm$core$List$map,
								function (_v4) {
									var r = _v4.a;
									return A2(
										$elm$core$Maybe$withDefault,
										_Utils_Tuple2(
											$elm$core$Set$empty,
											_Utils_Tuple2('⟂', _List_Nil)),
										r);
								},
								parsedSet));
						return {
							errorCode: 0,
							message: $elm$json$Json$Encode$string(
								$author$project$LogicUS$PL$HornRS$hornRulesToString(rs)),
							result: rs
						};
					}
				case 'collect':
					var _v9 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
					if (_v9.$ === 'Ok') {
						var sources = _v9.a;
						var rs = A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(
									x,
									A2($elm$core$Dict$get, x, outputsRHRS));
							},
							sources);
						var _v10 = A2(
							$elm$core$List$filter,
							A2($elm$core$Basics$composeL, $elm_community$maybe_extra$Maybe$Extra$isNothing, $elm$core$Tuple$second),
							rs);
						if (!_v10.b) {
							var rs_ = $elm_community$list_extra$List$Extra$unique(
								A2(
									$elm$core$List$map,
									A2(
										$elm$core$Basics$composeL,
										$elm$core$Maybe$withDefault(
											_Utils_Tuple2(
												$elm$core$Set$empty,
												_Utils_Tuple2('⟂', _List_Nil))),
										$elm$core$Tuple$second),
									rs));
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$HornRS$hornRulesToString(rs_)),
								result: rs_
							};
						} else {
							var undefSources = _v10;
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown sources:' + A2(
										$elm$core$String$join,
										'. ',
										A2(
											$elm$core$List$map,
											function (_v11) {
												var _v12 = _v11.a;
												var sid = _v12.a;
												var sslot = _v12.b;
												return '(' + ($elm$core$String$fromInt(sid) + (', ' + ($elm$core$String$fromInt(sslot) + ')')));
											},
											undefSources))),
								result: _List_Nil
							};
						}
					} else {
						var e = _v9.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$json$Json$Decode$errorToString(e)),
							result: _List_Nil
						};
					}
				case 'union':
					var _v13 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
					if (_v13.$ === 'Ok') {
						var sources = _v13.a;
						var rss = A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(
									x,
									A2($elm$core$Dict$get, x, outputsRSHRS));
							},
							sources);
						var _v14 = A2(
							$elm$core$List$filter,
							A2($elm$core$Basics$composeL, $elm_community$maybe_extra$Maybe$Extra$isNothing, $elm$core$Tuple$second),
							rss);
						if (!_v14.b) {
							var rs_ = A3(
								$elm$core$List$foldl,
								F2(
									function (_v15, ac) {
										var rs = _v15.b;
										return A2(
											$author$project$Auxiliar$uniqueConcatList,
											ac,
											A2($elm$core$Maybe$withDefault, _List_Nil, rs));
									}),
								_List_Nil,
								rss);
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$HornRS$hornRulesToString(rs_)),
								result: rs_
							};
						} else {
							var undefSources = _v14;
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown sources:' + A2(
										$elm$core$String$join,
										'. ',
										A2(
											$elm$core$List$map,
											function (_v16) {
												var _v17 = _v16.a;
												var sid = _v17.a;
												var sslot = _v17.b;
												return '(' + ($elm$core$String$fromInt(sid) + (', ' + ($elm$core$String$fromInt(sslot) + ')')));
											},
											undefSources))),
								result: _List_Nil
							};
						}
					} else {
						var e = _v13.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$json$Json$Decode$errorToString(e)),
							result: _List_Nil
						};
					}
				default:
					return {
						errorCode: 4,
						message: $elm$json$Json$Encode$string('undefined option for node of type HornRuleSetPL'),
						result: _List_Nil
					};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: _List_Nil
			};
		}
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$ffolSubstitutionQuantifiedVars = F2(
	function (subs, g) {
		switch (g.$) {
			case 'Pred':
				return A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution, subs, g);
			case 'Equal':
				return A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution, subs, g);
			case 'Neg':
				var h = g.a;
				return $author$project$LogicUS$FOL$SyntaxSemantics$Neg(
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolSubstitutionQuantifiedVars, subs, h));
			case 'Conj':
				var h = g.a;
				var i = g.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Conj,
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolSubstitutionQuantifiedVars, subs, h),
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolSubstitutionQuantifiedVars, subs, i));
			case 'Disj':
				var h = g.a;
				var i = g.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Disj,
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolSubstitutionQuantifiedVars, subs, h),
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolSubstitutionQuantifiedVars, subs, i));
			case 'Impl':
				var h = g.a;
				var i = g.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Impl,
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolSubstitutionQuantifiedVars, subs, h),
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolSubstitutionQuantifiedVars, subs, i));
			case 'Equi':
				var h = g.a;
				var i = g.b;
				return A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Equi,
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolSubstitutionQuantifiedVars, subs, h),
					A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolSubstitutionQuantifiedVars, subs, i));
			case 'Forall':
				var _v1 = g.a;
				var xn = _v1.a;
				var xsbi = _v1.b;
				var xspi = _v1.c;
				var h = g.b;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple3(xn, xsbi, xspi),
					subs);
				if ((_v2.$ === 'Just') && (_v2.a.$ === 'Var')) {
					var v = _v2.a.a;
					return A2(
						$author$project$LogicUS$FOL$SyntaxSemantics$Forall,
						v,
						A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolSubstitutionQuantifiedVars, subs, h));
				} else {
					return A2(
						$author$project$LogicUS$FOL$SyntaxSemantics$Forall,
						_Utils_Tuple3(xn, xsbi, xspi),
						A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolSubstitutionQuantifiedVars, subs, h));
				}
			case 'Exists':
				var _v3 = g.a;
				var xn = _v3.a;
				var xsbi = _v3.b;
				var xspi = _v3.c;
				var h = g.b;
				var _v4 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple3(xn, xsbi, xspi),
					subs);
				if ((_v4.$ === 'Just') && (_v4.a.$ === 'Var')) {
					var v = _v4.a.a;
					return A2(
						$author$project$LogicUS$FOL$SyntaxSemantics$Exists,
						v,
						A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolSubstitutionQuantifiedVars, subs, h));
				} else {
					return A2(
						$author$project$LogicUS$FOL$SyntaxSemantics$Exists,
						_Utils_Tuple3(xn, xsbi, xspi),
						A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolSubstitutionQuantifiedVars, subs, h));
				}
			case 'Taut':
				return $author$project$LogicUS$FOL$SyntaxSemantics$Taut;
			default:
				return $author$project$LogicUS$FOL$SyntaxSemantics$Insat;
		}
	});
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$ffolRenameVars = function (f) {
	var aux = F3(
		function (g, cur, hist) {
			switch (g.$) {
				case 'Pred':
					var n = g.a;
					var ts = g.b;
					var s = A2(
						$elm$core$Dict$map,
						F2(
							function (_v1, v) {
								var vname = _v1.a;
								var vindices = _v1.b;
								return $author$project$LogicUS$FOL$SyntaxSemantics$Var(
									_Utils_Tuple3(vname, vindices, v));
							}),
						cur);
					return _Utils_Tuple2(
						A2(
							$author$project$LogicUS$FOL$SyntaxSemantics$Pred,
							n,
							A2(
								$elm$core$List$map,
								function (t) {
									return A2($author$project$LogicUS$FOL$SyntaxSemantics$termApplySubstitution, s, t);
								},
								ts)),
						hist);
				case 'Equal':
					var t1 = g.a;
					var t2 = g.b;
					var s = A2(
						$elm$core$Dict$map,
						F2(
							function (_v2, v) {
								var vname = _v2.a;
								var vindices = _v2.b;
								return $author$project$LogicUS$FOL$SyntaxSemantics$Var(
									_Utils_Tuple3(vname, vindices, v));
							}),
						cur);
					return _Utils_Tuple2(
						A2(
							$author$project$LogicUS$FOL$SyntaxSemantics$Equal,
							A2($author$project$LogicUS$FOL$SyntaxSemantics$termApplySubstitution, s, t1),
							A2($author$project$LogicUS$FOL$SyntaxSemantics$termApplySubstitution, s, t2)),
						hist);
				case 'Neg':
					var h = g.a;
					var _v3 = A3(aux, h, cur, hist);
					var nh = _v3.a;
					var nhist = _v3.b;
					return _Utils_Tuple2(
						$author$project$LogicUS$FOL$SyntaxSemantics$Neg(nh),
						nhist);
				case 'Conj':
					var h = g.a;
					var i = g.b;
					var _v4 = A3(aux, h, cur, hist);
					var nh = _v4.a;
					var nhist1 = _v4.b;
					var _v5 = A3(aux, i, cur, nhist1);
					var ni = _v5.a;
					var nhist2 = _v5.b;
					return _Utils_Tuple2(
						A2($author$project$LogicUS$FOL$SyntaxSemantics$Conj, nh, ni),
						nhist2);
				case 'Disj':
					var h = g.a;
					var i = g.b;
					var _v6 = A3(aux, h, cur, hist);
					var nh = _v6.a;
					var nhist1 = _v6.b;
					var _v7 = A3(aux, i, cur, nhist1);
					var ni = _v7.a;
					var nhist2 = _v7.b;
					return _Utils_Tuple2(
						A2($author$project$LogicUS$FOL$SyntaxSemantics$Disj, nh, ni),
						nhist2);
				case 'Impl':
					var h = g.a;
					var i = g.b;
					var _v8 = A3(aux, h, cur, hist);
					var nh = _v8.a;
					var nhist1 = _v8.b;
					var _v9 = A3(aux, i, cur, nhist1);
					var ni = _v9.a;
					var nhist2 = _v9.b;
					return _Utils_Tuple2(
						A2($author$project$LogicUS$FOL$SyntaxSemantics$Impl, nh, ni),
						nhist2);
				case 'Equi':
					var h = g.a;
					var i = g.b;
					var _v10 = A3(aux, h, cur, hist);
					var nh = _v10.a;
					var nhist1 = _v10.b;
					var _v11 = A3(aux, i, cur, nhist1);
					var ni = _v11.a;
					var nhist2 = _v11.b;
					return _Utils_Tuple2(
						A2($author$project$LogicUS$FOL$SyntaxSemantics$Equi, nh, ni),
						nhist2);
				case 'Forall':
					var _v12 = g.a;
					var xn = _v12.a;
					var xsbi = _v12.b;
					var xspi = _v12.c;
					var h = g.b;
					var xind = A2(
						$elm$core$Maybe$withDefault,
						0,
						A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(xn, xsbi),
							hist)) + 1;
					var nhist1 = A3(
						$elm$core$Dict$insert,
						_Utils_Tuple2(xn, xsbi),
						xind,
						hist);
					var ncur = A3(
						$elm$core$Dict$insert,
						_Utils_Tuple3(xn, xsbi, xspi),
						xind,
						cur);
					var _v13 = A3(aux, h, ncur, nhist1);
					var nh = _v13.a;
					var nhist2 = _v13.b;
					return _Utils_Tuple2(
						A2(
							$author$project$LogicUS$FOL$SyntaxSemantics$Forall,
							_Utils_Tuple3(xn, xsbi, xind),
							nh),
						nhist2);
				case 'Exists':
					var _v14 = g.a;
					var xn = _v14.a;
					var xsbi = _v14.b;
					var xspi = _v14.c;
					var h = g.b;
					var xind = A2(
						$elm$core$Maybe$withDefault,
						0,
						A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(xn, xsbi),
							hist)) + 1;
					var nhist1 = A3(
						$elm$core$Dict$insert,
						_Utils_Tuple2(xn, xsbi),
						xind,
						hist);
					var ncur = A3(
						$elm$core$Dict$insert,
						_Utils_Tuple3(xn, xsbi, xspi),
						xind,
						cur);
					var _v15 = A3(aux, h, ncur, nhist1);
					var nh = _v15.a;
					var nhist2 = _v15.b;
					return _Utils_Tuple2(
						A2(
							$author$project$LogicUS$FOL$SyntaxSemantics$Exists,
							_Utils_Tuple3(xn, xsbi, xind),
							nh),
						nhist2);
				case 'Taut':
					return _Utils_Tuple2($author$project$LogicUS$FOL$SyntaxSemantics$Taut, hist);
				default:
					return _Utils_Tuple2($author$project$LogicUS$FOL$SyntaxSemantics$Insat, hist);
			}
		});
	var renamed = A3(aux, f, $elm$core$Dict$empty, $elm$core$Dict$empty).a;
	var renamedVars = $author$project$LogicUS$FOL$SyntaxSemantics$ffolVarSymbols(renamed);
	var uniqueVars = $elm$core$Dict$fromList(
		A2(
			$elm$core$List$map,
			function (_v16) {
				var x = _v16.a;
				var i = _v16.b;
				var z = _v16.c;
				return _Utils_Tuple2(
					_Utils_Tuple3(x, i, z),
					$author$project$LogicUS$FOL$SyntaxSemantics$Var(
						_Utils_Tuple3(x, i, 0)));
			},
			A2(
				$elm$core$List$filter,
				function (_v17) {
					var x = _v17.a;
					var i = _v17.b;
					var s = _v17.c;
					return A2(
						$elm$core$List$all,
						function (_v18) {
							var y = _v18.a;
							var i2 = _v18.b;
							var s2 = _v18.c;
							return (!_Utils_eq(y, x)) || ((!_Utils_eq(i, i2)) || _Utils_eq(s, s2));
						},
						renamedVars);
				},
				renamedVars)));
	return A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolSubstitutionQuantifiedVars, uniqueVars, renamed);
};
var $author$project$Auxiliar$folVarNameParser = $elm$parser$Parser$getChompedString(
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(_Utils_Tuple0),
			$elm$parser$Parser$chompIf($elm$core$Char$isUpper)),
		$elm$parser$Parser$chompWhile($elm$core$Char$isAlpha)));
var $author$project$Auxiliar$folVarSubSuperIndexedParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				F3(
					function (x, y, z) {
						return _Utils_Tuple3(x, y, z);
					})),
			$author$project$Auxiliar$folVarNameParser),
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$sequence(
				{end: '}', item: $elm$parser$Parser$int, separator: ',', spaces: $elm$parser$Parser$spaces, start: '_{', trailing: $elm$parser$Parser$Forbidden}),
			$elm$parser$Parser$symbol('^{'))),
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$int,
		$elm$parser$Parser$symbol('}')));
var $author$project$Auxiliar$folVarSubindexedParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed(
			F2(
				function (x, y) {
					return _Utils_Tuple3(x, y, 0);
				})),
		$author$project$Auxiliar$folVarNameParser),
	$elm$parser$Parser$sequence(
		{end: '}', item: $elm$parser$Parser$int, separator: ',', spaces: $elm$parser$Parser$spaces, start: '_{', trailing: $elm$parser$Parser$Forbidden}));
var $author$project$Auxiliar$folVarSupindexedParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed(
			F2(
				function (x, y) {
					return _Utils_Tuple3(x, _List_Nil, y);
				})),
		A2(
			$elm$parser$Parser$ignorer,
			$author$project$Auxiliar$folVarNameParser,
			$elm$parser$Parser$symbol('^{'))),
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$int,
		$elm$parser$Parser$symbol('}')));
var $author$project$Auxiliar$folVariableParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$backtrackable($author$project$Auxiliar$folVarSubSuperIndexedParser)),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$backtrackable($author$project$Auxiliar$folVarSubindexedParser)),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$backtrackable($author$project$Auxiliar$folVarSupindexedParser)),
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				function (x) {
					return _Utils_Tuple3(x, _List_Nil, 0);
				}),
			$author$project$Auxiliar$folVarNameParser)
		]));
var $author$project$FOLBasicProcessors$processQuantifierFOLNode = F2(
	function (content, outputsffol) {
		var inputDecoder = A5(
			$elm$json$Json$Decode$map4,
			F4(
				function (x, y, z, u) {
					return {origin1_id: x, origin1_slot: y, origin2_id: z, origin2_slot: u};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin1_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin1_slot']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin2_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin2_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A4(
			$elm$json$Json$Decode$map3,
			F3(
				function (x, y, z) {
					return {input: y, option: x, _var: z};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['var']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var sources = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(sources.origin1_id, sources.origin1_slot),
					outputsffol);
				if (_v2.$ === 'Just') {
					var f = _v2.a;
					var _v3 = A2($elm$parser$Parser$run, $author$project$Auxiliar$folVariableParser, c._var);
					if (_v3.$ === 'Ok') {
						var v = _v3.a;
						if (A2(
							$elm$core$List$member,
							v,
							$author$project$LogicUS$FOL$SyntaxSemantics$ffolFreeVars(f))) {
							var _v4 = c.option;
							switch (_v4) {
								case 'exists':
									var f_ = $author$project$LogicUS$FOL$SyntaxSemantics$ffolRenameVars(
										A2($author$project$LogicUS$FOL$SyntaxSemantics$Exists, v, f));
									return {
										errorCode: 0,
										message: $elm$json$Json$Encode$string(
											$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f_)),
										result: f_
									};
								case 'forall':
									var f_ = $author$project$LogicUS$FOL$SyntaxSemantics$ffolRenameVars(
										A2($author$project$LogicUS$FOL$SyntaxSemantics$Forall, v, f));
									return {
										errorCode: 0,
										message: $elm$json$Json$Encode$string(
											$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f_)),
										result: f_
									};
								default:
									return {
										errorCode: 4,
										message: $elm$json$Json$Encode$string('undefined option for node of type QuantifierFOL'),
										result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
									};
							}
						} else {
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f)),
								result: f
							};
						}
					} else {
						var e = _v3.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$core$Debug$toString(e)),
							result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
						};
					}
				} else {
					return {
						errorCode: 2,
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(sources.origin1_id) + (', ' + ($elm$core$String$fromInt(sources.origin1_slot) + ')')))),
						result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e)),
					result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
			};
		}
	});
var $author$project$LogicUS$FOL$Clauses$csfolRemoveEqClauses = function (xs) {
	return A2(
		$author$project$LogicUS$FOL$AuxiliarFuctions$uniqueConcatList,
		_List_Nil,
		A2($elm$core$List$map, $author$project$LogicUS$FOL$Clauses$cfolSort, xs));
};
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				if (!list.b) {
					return $elm$core$List$reverse(memo);
				} else {
					var x = list.a;
					var xs = list.b;
					if (predicate(x)) {
						var $temp$memo = A2($elm$core$List$cons, x, memo),
							$temp$list = xs;
						memo = $temp$memo;
						list = $temp$list;
						continue takeWhileMemo;
					} else {
						return $elm$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(_List_Nil);
};
var $author$project$LogicUS$FOL$Resolution$openedUpdationSCFResolutionAux = F2(
	function (xs, new_opens) {
		var res = A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, _v1) {
					var li = _v0.a;
					var ri = _v0.b;
					var ac = _v1.a;
					var rest = _v1.b;
					var add_ac = A2(
						$elm_community$list_extra$List$Extra$takeWhile,
						function (_v4) {
							var lx = _v4.a;
							return _Utils_cmp(lx, li) < 1;
						},
						rest);
					return A2(
						$elm$core$List$any,
						function (_v2) {
							var x = _v2.b;
							return A2($author$project$LogicUS$FOL$Clauses$cfolSubsumes, x.c, ri.c);
						},
						_Utils_ap(ac, add_ac)) ? _Utils_Tuple2(
						_Utils_ap(ac, add_ac),
						A2(
							$elm$core$List$drop,
							$elm$core$List$length(add_ac),
							rest)) : _Utils_Tuple2(
						_Utils_ap(
							ac,
							_Utils_ap(
								add_ac,
								_List_fromArray(
									[
										_Utils_Tuple2(li, ri)
									]))),
						A2(
							$elm$core$List$filter,
							function (_v3) {
								var x = _v3.b;
								return !A2($author$project$LogicUS$FOL$Clauses$cfolSubsumes, ri.c, x.c);
							},
							A2(
								$elm$core$List$drop,
								$elm$core$List$length(add_ac),
								rest)));
				}),
			_Utils_Tuple2(_List_Nil, xs),
			new_opens);
		return _Utils_ap(res.a, res.b);
	});
var $author$project$LogicUS$FOL$Clauses$cfolAtomVarSymbols = function (ca) {
	if (ca.$ === 'P') {
		var ts = ca.b;
		return $author$project$LogicUS$FOL$SyntaxSemantics$termsVarSymbols(ts);
	} else {
		var t1 = ca.a;
		var t2 = ca.b;
		return $author$project$LogicUS$FOL$SyntaxSemantics$termsVarSymbols(
			_List_fromArray(
				[t1, t2]));
	}
};
var $author$project$LogicUS$FOL$Clauses$cfolVarSymbols = function (c) {
	return $elm$core$Set$fromList(
		$elm$core$List$concat(
			A2(
				$elm$core$List$map,
				A2($elm$core$Basics$composeL, $author$project$LogicUS$FOL$Clauses$cfolAtomVarSymbols, $elm$core$Tuple$first),
				c)));
};
var $author$project$LogicUS$FOL$Resolution$recoverResolutionPath = F2(
	function (i, refDict) {
		var _v0 = A2($elm$core$Dict$get, i, refDict);
		if (_v0.$ === 'Just') {
			var ri = _v0.a;
			var _v1 = A2($author$project$LogicUS$FOL$Resolution$recoverResolutionPath, ri.p2, refDict);
			var nodes2 = _v1.a;
			var edges2 = _v1.b;
			var _v2 = A2($author$project$LogicUS$FOL$Resolution$recoverResolutionPath, ri.p1, refDict);
			var nodes1 = _v2.a;
			var edges1 = _v2.b;
			return _Utils_Tuple2(
				_Utils_ap(
					A2($author$project$LogicUS$FOL$AuxiliarFuctions$uniqueConcatList, nodes1, nodes2),
					_List_fromArray(
						[
							A2($elm_community$graph$Graph$Node, i, ri.c)
						])),
				_Utils_ap(
					A2($author$project$LogicUS$FOL$AuxiliarFuctions$uniqueConcatList, edges1, edges2),
					_List_fromArray(
						[
							A3(
							$elm_community$graph$Graph$Edge,
							ri.p1,
							i,
							_Utils_Tuple2(
								$elm$core$Dict$empty,
								A2(
									$elm$core$Dict$filter,
									F2(
										function (k, _v3) {
											return A2(
												$elm$core$Set$member,
												k,
												$author$project$LogicUS$FOL$Clauses$cfolVarSymbols(
													A2(
														$elm$core$Maybe$withDefault,
														_List_Nil,
														A2(
															$elm$core$Maybe$map,
															function ($) {
																return $.c;
															},
															A2($elm$core$Dict$get, ri.p1, refDict)))));
										}),
									ri.mgu))),
							A3(
							$elm_community$graph$Graph$Edge,
							ri.p2,
							i,
							_Utils_Tuple2(
								ri.r,
								A2(
									$elm$core$Dict$filter,
									F2(
										function (k, _v4) {
											return A2(
												$elm$core$Set$member,
												k,
												$author$project$LogicUS$FOL$Clauses$cfolVarSymbols(
													A2(
														$elm$core$Maybe$withDefault,
														_List_Nil,
														A2(
															$elm$core$Maybe$map,
															function ($) {
																return $.c;
															},
															A2($elm$core$Dict$get, ri.p2, refDict)))));
										}),
									ri.mgu)))
						])));
		} else {
			return _Utils_Tuple2(_List_Nil, _List_Nil);
		}
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$substitutionComposition = F2(
	function (s1, s2) {
		return $elm$core$Dict$fromList(
			A2(
				$elm$core$List$filter,
				function (_v0) {
					var x = _v0.a;
					var t = _v0.b;
					return !_Utils_eq(
						$author$project$LogicUS$FOL$SyntaxSemantics$Var(x),
						t);
				},
				_Utils_ap(
					A2(
						$elm$core$List$map,
						function (_v1) {
							var x2 = _v1.a;
							var t2 = _v1.b;
							return _Utils_Tuple2(
								x2,
								A2($author$project$LogicUS$FOL$SyntaxSemantics$termApplySubstitution, s1, t2));
						},
						$elm$core$Dict$toList(s2)),
					A2(
						$elm$core$List$filter,
						function (_v2) {
							var x1 = _v2.a;
							return !A2($elm$core$Dict$member, x1, s2);
						},
						$elm$core$Dict$toList(s1)))));
	});
var $author$project$LogicUS$FOL$Unification$finalizelistTermMGU = function (s) {
	var sf = A2(
		$elm$core$Dict$filter,
		F2(
			function (x, tr) {
				return !_Utils_eq(
					$author$project$LogicUS$FOL$SyntaxSemantics$Var(x),
					tr);
			}),
		s);
	var _v0 = A2(
		$elm$core$List$filter,
		function (_v1) {
			var x = _v1.a;
			return A2(
				$elm$core$List$member,
				x,
				$author$project$LogicUS$FOL$SyntaxSemantics$termsVarSymbols(
					$elm$core$Dict$values(
						A2($elm$core$Dict$remove, x, sf))));
		},
		$elm$core$Dict$toList(sf));
	if (!_v0.b) {
		return sf;
	} else {
		var _v2 = _v0.a;
		var k = _v2.a;
		var v = _v2.b;
		return A2(
			$author$project$LogicUS$FOL$SyntaxSemantics$substitutionComposition,
			A2($elm$core$Dict$remove, k, sf),
			A2($elm$core$Dict$singleton, k, v));
	}
};
var $author$project$LogicUS$FOL$Unification$termMGU = F2(
	function (t1, t2) {
		if (t1.$ === 'Var') {
			var x = t1.a;
			if (t2.$ === 'Var') {
				var y = t2.a;
				return _Utils_eq(x, y) ? $elm$core$Maybe$Just($elm$core$Dict$empty) : $elm$core$Maybe$Just(
					$elm$core$Dict$fromList(
						_List_fromArray(
							[
								_Utils_Tuple2(x, t2)
							])));
			} else {
				return A2(
					$elm$core$List$member,
					x,
					$author$project$LogicUS$FOL$SyntaxSemantics$termVarSymbols(t2)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
					$elm$core$Dict$fromList(
						_List_fromArray(
							[
								_Utils_Tuple2(x, t2)
							])));
			}
		} else {
			var f = t1.a;
			var fts = t1.b;
			if (t2.$ === 'Var') {
				var y = t2.a;
				return A2(
					$elm$core$List$member,
					y,
					$author$project$LogicUS$FOL$SyntaxSemantics$termVarSymbols(t1)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
					$elm$core$Dict$fromList(
						_List_fromArray(
							[
								_Utils_Tuple2(y, t1)
							])));
			} else {
				var g = t2.a;
				var gts = t2.b;
				return _Utils_eq(f, g) ? A2($author$project$LogicUS$FOL$Unification$termsMGU, fts, gts) : $elm$core$Maybe$Nothing;
			}
		}
	});
var $author$project$LogicUS$FOL$Unification$termsMGU = F2(
	function (lt1, lt2) {
		var _v0 = _Utils_Tuple2(lt1, lt2);
		if (!_v0.a.b) {
			if (!_v0.b.b) {
				return $elm$core$Maybe$Just($elm$core$Dict$empty);
			} else {
				var _v2 = _v0.b;
				return $elm$core$Maybe$Nothing;
			}
		} else {
			if (!_v0.b.b) {
				var _v1 = _v0.a;
				return $elm$core$Maybe$Nothing;
			} else {
				var _v3 = _v0.a;
				var t = _v3.a;
				var ts = _v3.b;
				var _v4 = _v0.b;
				var r = _v4.a;
				var rs = _v4.b;
				var s1_ = A2($author$project$LogicUS$FOL$Unification$termMGU, t, r);
				if (s1_.$ === 'Just') {
					var s1 = s1_.a;
					var s2_ = A2(
						$author$project$LogicUS$FOL$Unification$termsMGU,
						A2(
							$elm$core$List$map,
							function (x) {
								return A2($author$project$LogicUS$FOL$SyntaxSemantics$termApplySubstitution, s1, x);
							},
							ts),
						A2(
							$elm$core$List$map,
							function (x) {
								return A2($author$project$LogicUS$FOL$SyntaxSemantics$termApplySubstitution, s1, x);
							},
							rs));
					return A2(
						$elm$core$Maybe$map,
						$author$project$LogicUS$FOL$Unification$finalizelistTermMGU,
						A2(
							$elm$core$Maybe$map,
							function (s) {
								return A2($author$project$LogicUS$FOL$SyntaxSemantics$substitutionComposition, s, s1);
							},
							s2_));
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $author$project$LogicUS$FOL$Unification$atomsMGU = F2(
	function (a1, a2) {
		var _v0 = _Utils_Tuple2(a1, a2);
		if ((_v0.a.$ === 'Pred') && (_v0.b.$ === 'Pred')) {
			var _v1 = _v0.a;
			var p1 = _v1.a;
			var ts1 = _v1.b;
			var _v2 = _v0.b;
			var p2 = _v2.a;
			var ts2 = _v2.b;
			return _Utils_eq(p1, p2) ? A2($author$project$LogicUS$FOL$Unification$termsMGU, ts1, ts2) : $elm$core$Maybe$Nothing;
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$LogicUS$FOL$Clauses$cfolAtomSymbol = function (ca) {
	if (ca.$ === 'P') {
		var x = ca.a;
		return x;
	} else {
		return _Utils_Tuple2('=', _List_Nil);
	}
};
var $author$project$LogicUS$FOL$Resolution$cfol2ContraryLiterals = F2(
	function (c1, c2) {
		var searchContraryLiteral = F2(
			function (_v2, c) {
				var a = _v2.a;
				var sign = _v2.b;
				return A2(
					$elm$core$List$filter,
					function (_v1) {
						var a_ = _v1.a;
						var sign_ = _v1.b;
						return _Utils_eq(
							$author$project$LogicUS$FOL$Clauses$cfolAtomSymbol(a),
							$author$project$LogicUS$FOL$Clauses$cfolAtomSymbol(a_)) && (!_Utils_eq(sign, sign_));
					},
					c);
			});
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, ac) {
					var a = _v0.a;
					var sign = _v0.b;
					return _Utils_ap(
						ac,
						A2(
							$elm$core$List$map,
							function (l) {
								return _Utils_Tuple2(
									_Utils_Tuple2(a, sign),
									l);
							},
							A2(
								searchContraryLiteral,
								_Utils_Tuple2(a, sign),
								c2)));
				}),
			_List_Nil,
			c1);
	});
var $author$project$LogicUS$FOL$Resolution$cfol2SeparationSubst = F2(
	function (c1, c2) {
		var vs_r = $elm$core$Set$toList(
			A2(
				$elm$core$Set$filter,
				function (x) {
					return A2(
						$elm$core$Set$member,
						x,
						$author$project$LogicUS$FOL$Clauses$cfolVarSymbols(c1));
				},
				$author$project$LogicUS$FOL$Clauses$cfolVarSymbols(c2)));
		var vs_c = A2(
			$elm$core$Set$union,
			$author$project$LogicUS$FOL$Clauses$cfolVarSymbols(c1),
			$author$project$LogicUS$FOL$Clauses$cfolVarSymbols(c2));
		var getIndex = F3(
			function (s, is, i) {
				getIndex:
				while (true) {
					if (A2(
						$elm$core$Set$member,
						_Utils_Tuple3(s, is, i),
						vs_c)) {
						var $temp$s = s,
							$temp$is = is,
							$temp$i = i + 1;
						s = $temp$s;
						is = $temp$is;
						i = $temp$i;
						continue getIndex;
					} else {
						return i;
					}
				}
			});
		var subs = $elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var s = _v0.a;
					var is = _v0.b;
					var i = _v0.c;
					return _Utils_Tuple2(
						_Utils_Tuple3(s, is, i),
						$author$project$LogicUS$FOL$SyntaxSemantics$Var(
							_Utils_Tuple3(
								s,
								is,
								A3(getIndex, s, is, 0))));
				},
				vs_r));
		return subs;
	});
var $author$project$LogicUS$FOL$Clauses$cfolAtomApplySubstitution = F2(
	function (s, ca) {
		if (ca.$ === 'P') {
			var x = ca.a;
			var ts = ca.b;
			return A2(
				$author$project$LogicUS$FOL$Clauses$P,
				x,
				A2(
					$elm$core$List$map,
					$author$project$LogicUS$FOL$SyntaxSemantics$termApplySubstitution(s),
					ts));
		} else {
			var t1 = ca.a;
			var t2 = ca.b;
			return A2(
				$author$project$LogicUS$FOL$Clauses$Eq,
				A2($author$project$LogicUS$FOL$SyntaxSemantics$termApplySubstitution, s, t1),
				A2($author$project$LogicUS$FOL$SyntaxSemantics$termApplySubstitution, s, t2));
		}
	});
var $author$project$LogicUS$FOL$Clauses$cfolApplySubstitution = F2(
	function (s, c) {
		return A2(
			$elm$core$List$map,
			function (_v0) {
				var a = _v0.a;
				var sign = _v0.b;
				return _Utils_Tuple2(
					A2($author$project$LogicUS$FOL$Clauses$cfolAtomApplySubstitution, s, a),
					sign);
			},
			c);
	});
var $author$project$LogicUS$FOL$Clauses$cfolUnion = F2(
	function (c1, c2) {
		return A2(
			$elm$core$List$sortWith,
			$author$project$LogicUS$FOL$Clauses$compareClauseFOLLiterals,
			A2(
				$author$project$LogicUS$FOL$AuxiliarFuctions$uniqueConcatList,
				_List_Nil,
				_Utils_ap(c1, c2)));
	});
var $author$project$LogicUS$FOL$Clauses$clauseFOLAtomToAtom = function (ca) {
	if (ca.$ === 'P') {
		var a = ca.a;
		var ts = ca.b;
		return A2($author$project$LogicUS$FOL$SyntaxSemantics$Pred, a, ts);
	} else {
		var t1 = ca.a;
		var t2 = ca.b;
		return A2($author$project$LogicUS$FOL$SyntaxSemantics$Equal, t1, t2);
	}
};
var $author$project$LogicUS$FOL$Resolution$cfol2AllResolvents = F2(
	function (c1, c2) {
		var r = A2($author$project$LogicUS$FOL$Resolution$cfol2SeparationSubst, c1, c2);
		var c2_ = A2($author$project$LogicUS$FOL$Clauses$cfolApplySubstitution, r, c2);
		var cls = A2($author$project$LogicUS$FOL$Resolution$cfol2ContraryLiterals, c1, c2_);
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, ac) {
					var _v1 = _v0.a;
					var a1 = _v1.a;
					var sg1 = _v1.b;
					var _v2 = _v0.b;
					var a2 = _v2.a;
					var sg2 = _v2.b;
					var _v3 = A2(
						$author$project$LogicUS$FOL$Unification$atomsMGU,
						$author$project$LogicUS$FOL$Clauses$clauseFOLAtomToAtom(a1),
						$author$project$LogicUS$FOL$Clauses$clauseFOLAtomToAtom(a2));
					if (_v3.$ === 'Just') {
						var mgu = _v3.a;
						var c2__ = A2(
							$elm$core$List$filter,
							function (x) {
								return !_Utils_eq(
									x,
									_Utils_Tuple2(
										A2($author$project$LogicUS$FOL$Clauses$cfolAtomApplySubstitution, mgu, a2),
										sg2));
							},
							A2($author$project$LogicUS$FOL$Clauses$cfolApplySubstitution, mgu, c2_));
						var c1__ = A2(
							$elm$core$List$filter,
							function (x) {
								return !_Utils_eq(
									x,
									_Utils_Tuple2(
										A2($author$project$LogicUS$FOL$Clauses$cfolAtomApplySubstitution, mgu, a1),
										sg1));
							},
							A2($author$project$LogicUS$FOL$Clauses$cfolApplySubstitution, mgu, c1));
						return _Utils_ap(
							ac,
							_List_fromArray(
								[
									{
									c1: c1,
									c2: c2,
									mgu: mgu,
									r: r,
									res: A2($author$project$LogicUS$FOL$Clauses$cfolUnion, c1__, c2__)
								}
								]));
					} else {
						return ac;
					}
				}),
			_List_Nil,
			cls);
	});
var $author$project$LogicUS$FOL$Resolution$resolventsWithClosedSCFResolutionAux = F3(
	function (closed, id, c) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, ac) {
					var i = _v0.a;
					var ri = _v0.b;
					return A3(
						$elm$core$List$foldl,
						F2(
							function (r, ac2) {
								return (!($author$project$LogicUS$FOL$Clauses$cfolIsTautology(r.res) || (A2(
									$elm$core$List$any,
									function (x) {
										return A2($author$project$LogicUS$FOL$Clauses$cfolSubsumes, x.c, r.res);
									},
									ac) || A2(
									$elm$core$List$any,
									function (_v1) {
										var x = _v1.b;
										return A2($author$project$LogicUS$FOL$Clauses$cfolSubsumes, x.c, r.res);
									},
									closed)))) ? A2(
									$elm$core$List$cons,
									{c: r.res, mgu: r.mgu, p1: id, p2: i, r: r.r},
									A2(
										$elm$core$List$filter,
										function (x) {
											return !A2($author$project$LogicUS$FOL$Clauses$cfolSubsumes, r.res, x.c);
										},
										ac2)) : ac2;
							}),
						ac,
						A2($author$project$LogicUS$FOL$Resolution$cfol2AllResolvents, ri.c, c));
				}),
			_List_Nil,
			closed);
	});
var $author$project$LogicUS$FOL$Resolution$csfolSCFResolutionAux = F3(
	function (closed, opened, nid) {
		csfolSCFResolutionAux:
		while (true) {
			if (!opened.b) {
				return _Utils_Tuple2(_List_Nil, _List_Nil);
			} else {
				var _v1 = opened.a;
				var ri = _v1.b;
				var xs = opened.b;
				if ($elm$core$List$isEmpty(ri.c)) {
					var refDict = $elm$core$Dict$fromList(
						_Utils_ap(
							closed,
							_List_fromArray(
								[
									_Utils_Tuple2(nid + 1, ri)
								])));
					return A2($author$project$LogicUS$FOL$Resolution$recoverResolutionPath, nid + 1, refDict);
				} else {
					var r_closed = A3($author$project$LogicUS$FOL$Resolution$resolventsWithClosedSCFResolutionAux, closed, nid + 1, ri.c);
					var new_opened = A2(
						$author$project$LogicUS$FOL$Resolution$openedUpdationSCFResolutionAux,
						xs,
						A2(
							$elm$core$List$sortBy,
							function (x) {
								return x.a;
							},
							A2(
								$elm$core$List$map,
								function (x) {
									return _Utils_Tuple2(
										$elm$core$List$length(x.c),
										x);
								},
								r_closed)));
					var new_closed = _Utils_ap(
						closed,
						_List_fromArray(
							[
								_Utils_Tuple2(nid + 1, ri)
							]));
					var $temp$closed = new_closed,
						$temp$opened = new_opened,
						$temp$nid = nid + 1;
					closed = $temp$closed;
					opened = $temp$opened;
					nid = $temp$nid;
					continue csfolSCFResolutionAux;
				}
			}
		}
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$LogicUS$FOL$Resolution$csfolSCFResolution = function (clauses) {
	var cs = $author$project$LogicUS$FOL$Clauses$csfolRemoveEqClauses(clauses);
	var new_cs = A2(
		$elm$core$List$sortBy,
		function (x) {
			return x.a;
		},
		A2(
			$elm$core$List$map,
			function (x) {
				return _Utils_Tuple2(
					$elm$core$List$length(x),
					{c: x, mgu: $elm$core$Dict$empty, p1: 0, p2: 0, r: $elm$core$Dict$empty});
			},
			$author$project$LogicUS$FOL$Clauses$csfolRemoveSubsumedClauses(
				$author$project$LogicUS$FOL$Clauses$csfolRemoveTautClauses(cs))));
	var _v0 = A3($author$project$LogicUS$FOL$Resolution$csfolSCFResolutionAux, _List_Nil, new_cs, 0);
	var nodes = _v0.a;
	var edges = _v0.b;
	var nodes_clauses = A2(
		$elm$core$List$map,
		function (x) {
			return x.label;
		},
		nodes);
	var nid_max = A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$List$maximum(
			A2(
				$elm$core$List$map,
				function (x) {
					return x.id;
				},
				nodes)));
	var final_nodes = _Utils_ap(
		A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$elm_community$graph$Graph$Node,
					x.id,
					_Utils_Tuple2(
						A2($elm$core$List$member, x.label, cs),
						x.label));
			},
			nodes),
		A2(
			$elm$core$List$indexedMap,
			F2(
				function (i, x) {
					return A2(
						$elm_community$graph$Graph$Node,
						(nid_max + i) + 1,
						_Utils_Tuple2(true, x));
				}),
			A2(
				$elm$core$List$filter,
				function (x) {
					return !A2($elm$core$List$member, x, nodes_clauses);
				},
				cs)));
	return _Utils_Tuple2(
		!_Utils_eq(edges, _List_Nil),
		A2($elm_community$graph$Graph$fromNodesAndEdges, final_nodes, edges));
};
var $author$project$LogicUS$FOL$SyntaxSemantics$substitutionToString = function (s) {
	return '{' + (A2(
		$elm$core$String$join,
		', ',
		A2(
			$elm$core$List$map,
			function (_v0) {
				var x = _v0.a;
				var t = _v0.b;
				return x + ('/' + $author$project$LogicUS$FOL$SyntaxSemantics$termToString(t));
			},
			A2(
				$elm$core$List$map,
				function (_v1) {
					var x = _v1.a;
					var y = _v1.b;
					return _Utils_Tuple2(
						$author$project$LogicUS$FOL$SyntaxSemantics$termToString(
							$author$project$LogicUS$FOL$SyntaxSemantics$Var(x)),
						y);
				},
				$elm$core$Dict$toList(s)))) + '}');
};
var $author$project$LogicUS$FOL$Resolution$resolutionTableauToDOT = function (g) {
	var toStringNode = function (_v1) {
		var cs = _v1.b;
		return $elm$core$Maybe$Just(
			$author$project$LogicUS$FOL$Clauses$cfolToString(cs));
	};
	var toStringEdge = function (_v0) {
		var rn = _v0.a;
		var mgu = _v0.b;
		return ($elm$core$Dict$isEmpty(rn) && $elm$core$Dict$isEmpty(mgu)) ? $elm$core$Maybe$Nothing : ($elm$core$Dict$isEmpty(rn) ? $elm$core$Maybe$Just(
			$author$project$LogicUS$FOL$SyntaxSemantics$substitutionToString(mgu)) : ($elm$core$Dict$isEmpty(mgu) ? $elm$core$Maybe$Just(
			$author$project$LogicUS$FOL$SyntaxSemantics$substitutionToString(rn)) : $elm$core$Maybe$Just(
			$author$project$LogicUS$FOL$SyntaxSemantics$substitutionToString(rn) + ('<BR/>' + $author$project$LogicUS$FOL$SyntaxSemantics$substitutionToString(mgu)))));
	};
	var initialNodes = A2(
		$elm$core$String$join,
		';',
		A2(
			$elm$core$List$map,
			$elm$core$String$fromInt,
			A3(
				$elm$core$List$foldl,
				F2(
					function (x, ac) {
						return x.label.a ? _Utils_ap(
							ac,
							_List_fromArray(
								[x.id])) : ac;
					}),
				_List_Nil,
				$elm_community$graph$Graph$nodes(g))));
	return A3(
		$elm$core$String$replace,
		'\n',
		'',
		A3(
			$elm$core$String$replace,
			'\n}',
			'\n\n  {rank=same; ' + (initialNodes + ';}\n}'),
			A3($elm_community$graph$Graph$DOT$output, toStringNode, toStringEdge, g)));
};
var $author$project$FOLAlgProcessors$processResolutionGraphFOL = F2(
	function (content, outputsCSFOL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var source = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(source.origin_id, source.origin_slot),
					outputsCSFOL);
				if (_v2.$ === 'Just') {
					var cs = _v2.a;
					var _v3 = c.option;
					switch (_v3) {
						case 'standard':
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$Resolution$resolutionTableauToDOT(
										$author$project$LogicUS$FOL$Resolution$csfolSCFResolution(cs).b))
							};
						case 'linear':
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$Resolution$resolutionTableauToDOT(
										$author$project$LogicUS$FOL$Resolution$csfolSCFResolution(cs).b))
							};
						case 'positive':
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$Resolution$resolutionTableauToDOT(
										$author$project$LogicUS$FOL$Resolution$csfolSCFResolution(cs).b))
							};
						case 'negative':
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$Resolution$resolutionTableauToDOT(
										$author$project$LogicUS$FOL$Resolution$csfolSCFResolution(cs).b))
							};
						default:
							return {
								errorCode: 4,
								message: $elm$json$Json$Encode$string('Unknown option (' + (c.option + ') for ResolutionGraphFOL'))
							};
					}
				} else {
					return {
						errorCode: 2,
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')'))))
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e))
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e))
			};
		}
	});
var $author$project$LogicUS$PL$Clauses$csplRemoveEqClauses = function (xs) {
	return A2(
		$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
		_List_Nil,
		A2($elm$core$List$map, $author$project$LogicUS$PL$Clauses$cplSort, xs));
};
var $author$project$LogicUS$PL$Resolution$filterSubsumedResolutionItems = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (x, ac) {
				return A2(
					$elm$core$List$any,
					function (y) {
						return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, y.c, x.c);
					},
					ac) ? ac : _Utils_ap(
					ac,
					_List_fromArray(
						[x]));
			}),
		_List_Nil,
		A2(
			$elm$core$List$sortBy,
			function (x) {
				return $elm$core$List$length(x.c);
			},
			xs));
};
var $author$project$LogicUS$PL$Resolution$openedUpdationSCFByEntriesResolutionAux = F2(
	function (xs, new_opens) {
		var res = A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, _v1) {
					var li = _v0.a;
					var ri = _v0.b;
					var ac = _v1.a;
					var rest = _v1.b;
					var add_ac = A2(
						$elm_community$list_extra$List$Extra$takeWhile,
						function (_v3) {
							var x = _v3.b;
							return _Utils_cmp(
								$elm$core$List$length(x.c),
								$elm$core$List$length(ri.c)) < 1;
						},
						rest);
					return A2(
						$elm$core$List$any,
						function (_v2) {
							var x = _v2.b;
							return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, ri.c);
						},
						_Utils_ap(ac, add_ac)) ? _Utils_Tuple2(
						_Utils_ap(ac, add_ac),
						A2(
							$elm$core$List$drop,
							$elm$core$List$length(add_ac),
							rest)) : _Utils_Tuple2(
						_Utils_ap(
							ac,
							_Utils_ap(
								add_ac,
								_List_fromArray(
									[
										_Utils_Tuple2(li, ri)
									]))),
						A2(
							$elm$core$List$drop,
							$elm$core$List$length(add_ac),
							rest));
				}),
			_Utils_Tuple2(_List_Nil, xs),
			new_opens);
		return _Utils_ap(res.a, res.b);
	});
var $author$project$LogicUS$PL$Resolution$recoverResolutionPath = F2(
	function (i, refDict) {
		var _v0 = A2($elm$core$Dict$get, i, refDict);
		if (_v0.$ === 'Just') {
			var ri = _v0.a;
			var _v1 = A2($author$project$LogicUS$PL$Resolution$recoverResolutionPath, ri.p2, refDict);
			var nodes2 = _v1.a;
			var edges2 = _v1.b;
			var _v2 = A2($author$project$LogicUS$PL$Resolution$recoverResolutionPath, ri.p1, refDict);
			var nodes1 = _v2.a;
			var edges1 = _v2.b;
			return _Utils_Tuple2(
				_Utils_ap(
					A2($author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList, nodes1, nodes2),
					_List_fromArray(
						[
							A2($elm_community$graph$Graph$Node, i, ri.c)
						])),
				_Utils_ap(
					A2($author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList, edges1, edges2),
					_List_fromArray(
						[
							A3($elm_community$graph$Graph$Edge, ri.p1, i, ri.l1),
							A3($elm_community$graph$Graph$Edge, ri.p2, i, ri.l2)
						])));
		} else {
			return _Utils_Tuple2(_List_Nil, _List_Nil);
		}
	});
var $author$project$LogicUS$PL$Resolution$cplResolventByPSymb = F3(
	function (c1, c2, v) {
		return (A2(
			$elm$core$List$member,
			_Utils_Tuple2(v, true),
			c1) && A2(
			$elm$core$List$member,
			_Utils_Tuple2(v, false),
			c2)) ? $elm$core$Maybe$Just(
			_Utils_Tuple3(
				$author$project$LogicUS$PL$Clauses$cplSort(
					A2(
						$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
						_List_Nil,
						_Utils_ap(
							A2(
								$elm$core$List$filter,
								function (x) {
									return !_Utils_eq(
										_Utils_Tuple2(v, true),
										x);
								},
								c1),
							A2(
								$elm$core$List$filter,
								function (x) {
									return !_Utils_eq(
										_Utils_Tuple2(v, false),
										x);
								},
								c2)))),
				_Utils_Tuple2(v, true),
				_Utils_Tuple2(v, false))) : ((A2(
			$elm$core$List$member,
			_Utils_Tuple2(v, true),
			c2) && A2(
			$elm$core$List$member,
			_Utils_Tuple2(v, false),
			c1)) ? $elm$core$Maybe$Just(
			_Utils_Tuple3(
				$author$project$LogicUS$PL$Clauses$cplSort(
					A2(
						$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
						_List_Nil,
						_Utils_ap(
							A2(
								$elm$core$List$filter,
								function (x) {
									return !_Utils_eq(
										_Utils_Tuple2(v, false),
										x);
								},
								c1),
							A2(
								$elm$core$List$filter,
								function (x) {
									return !_Utils_eq(
										_Utils_Tuple2(v, true),
										x);
								},
								c2)))),
				_Utils_Tuple2(v, false),
				_Utils_Tuple2(v, true))) : $elm$core$Maybe$Nothing);
	});
var $elm$core$Set$foldl = F3(
	function (func, initialState, _v0) {
		var dict = _v0.a;
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (key, _v1, state) {
					return A2(func, key, state);
				}),
			initialState,
			dict);
	});
var $elm$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			$elm$core$Dict$filter,
			F2(
				function (k, _v0) {
					return A2($elm$core$Dict$member, k, t2);
				}),
			t1);
	});
var $elm$core$Set$intersect = F2(
	function (_v0, _v1) {
		var dict1 = _v0.a;
		var dict2 = _v1.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$intersect, dict1, dict2));
	});
var $author$project$LogicUS$PL$Resolution$cplAllResolvents = F2(
	function (c1, c2) {
		return A3(
			$elm$core$Set$foldl,
			F2(
				function (v, ac) {
					var _v0 = A3($author$project$LogicUS$PL$Resolution$cplResolventByPSymb, c1, c2, v);
					if (_v0.$ === 'Nothing') {
						return ac;
					} else {
						var r = _v0.a;
						return A2(
							$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
							ac,
							_List_fromArray(
								[r]));
					}
				}),
			_List_Nil,
			A2(
				$elm$core$Set$intersect,
				$elm$core$Set$fromList(
					$author$project$LogicUS$PL$Clauses$cplSymbols(c1)),
				$elm$core$Set$fromList(
					$author$project$LogicUS$PL$Clauses$cplSymbols(c2))));
	});
var $author$project$LogicUS$PL$Resolution$resolventsWithClosedSCFByEntriesResolutionAux = F4(
	function (closed, resDone, id, rid) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, ac) {
					var i = _v0.a;
					var ri = _v0.b;
					return A3(
						$elm$core$List$foldl,
						F2(
							function (_v1, ac2) {
								var cj = _v1.a;
								var l1 = _v1.b;
								var l2 = _v1.c;
								return (!($author$project$LogicUS$PL$Clauses$cplIsTautology(cj) || (A2(
									$elm$core$List$any,
									function (x) {
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									ac) || A2(
									$elm$core$List$any,
									function (_v2) {
										var x = _v2.b;
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									closed)))) ? A2(
									$elm$core$List$cons,
									{c: cj, l1: l1, l2: l2, p1: id, p2: i},
									A2(
										$elm$core$List$filter,
										function (x) {
											return !A2($author$project$LogicUS$PL$Clauses$cplSubsumes, cj, x.c);
										},
										ac2)) : ac2;
							}),
						ac,
						A2($author$project$LogicUS$PL$Resolution$cplAllResolvents, rid.c, ri.c));
				}),
			_List_Nil,
			A2(
				$elm$core$List$filter,
				function (_v3) {
					var i = _v3.a;
					var ri = _v3.b;
					return ((!rid.p1) || (!ri.p1)) && (!A2(
						$elm$core$List$member,
						id,
						A2(
							$elm$core$Maybe$withDefault,
							_List_Nil,
							A2($elm$core$Dict$get, i, resDone))));
				},
				closed));
	});
var $author$project$LogicUS$PL$Resolution$resolventsWithOpenedSCFByEntriesResolutionAux = F3(
	function (opened, id, rid) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, ac) {
					var i = _v0.a;
					var ri = _v0.b;
					return A3(
						$elm$core$List$foldl,
						F2(
							function (_v1, ac2) {
								var cj = _v1.a;
								var l1 = _v1.b;
								var l2 = _v1.c;
								return (!($author$project$LogicUS$PL$Clauses$cplIsTautology(cj) || (A2(
									$elm$core$List$any,
									function (x) {
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									ac) || A2(
									$elm$core$List$any,
									function (_v2) {
										var x = _v2.b;
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									opened)))) ? A2(
									$elm$core$List$cons,
									{c: cj, l1: l1, l2: l2, p1: id, p2: i},
									A2(
										$elm$core$List$filter,
										function (x) {
											return !A2($author$project$LogicUS$PL$Clauses$cplSubsumes, cj, x.c);
										},
										ac2)) : ac2;
							}),
						ac,
						A2($author$project$LogicUS$PL$Resolution$cplAllResolvents, rid.c, ri.c));
				}),
			_List_Nil,
			A2(
				$elm$core$List$filter,
				function (_v3) {
					var ri = _v3.b;
					return (!rid.p1) || (!ri.p1);
				},
				opened));
	});
var $author$project$LogicUS$PL$Resolution$csplSCFByEntriesResolutionAux = F4(
	function (closed, resDone, opened, nid) {
		csplSCFByEntriesResolutionAux:
		while (true) {
			if (!opened.b) {
				return _Utils_Tuple2(_List_Nil, _List_Nil);
			} else {
				var _v1 = opened.a;
				var id = _v1.a;
				var rid = _v1.b;
				var xs = opened.b;
				if ($elm$core$List$isEmpty(rid.c)) {
					var refDict = $elm$core$Dict$fromList(
						_Utils_ap(closed, opened));
					return A2($author$project$LogicUS$PL$Resolution$recoverResolutionPath, id, refDict);
				} else {
					var resolvents_i = A2(
						$elm$core$List$indexedMap,
						F2(
							function (i, x) {
								return _Utils_Tuple2((nid + i) + 1, x);
							}),
						$author$project$LogicUS$PL$Resolution$filterSubsumedResolutionItems(
							A2(
								$elm$core$List$sortBy,
								function (x) {
									return $elm$core$List$length(x.c);
								},
								_Utils_ap(
									A4($author$project$LogicUS$PL$Resolution$resolventsWithClosedSCFByEntriesResolutionAux, closed, resDone, id, rid),
									A2(
										$elm$core$List$filter,
										function (ri) {
											return !A2(
												$elm$core$List$any,
												function (_v3) {
													var x = _v3.b;
													return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, ri.c);
												},
												closed);
										},
										A3($author$project$LogicUS$PL$Resolution$resolventsWithOpenedSCFByEntriesResolutionAux, xs, id, rid))))));
					var new_opened = A2($author$project$LogicUS$PL$Resolution$openedUpdationSCFByEntriesResolutionAux, xs, resolvents_i);
					var new_closed = _Utils_ap(
						closed,
						_List_fromArray(
							[
								_Utils_Tuple2(id, rid)
							]));
					var newResDone = A3(
						$elm$core$Dict$insert,
						id,
						A2(
							$elm$core$List$map,
							$elm$core$Tuple$first,
							_Utils_ap(closed, xs)),
						A2(
							$elm$core$Dict$map,
							F2(
								function (_v2, v) {
									return _Utils_ap(
										v,
										_List_fromArray(
											[id]));
								}),
							resDone));
					var $temp$closed = new_closed,
						$temp$resDone = newResDone,
						$temp$opened = new_opened,
						$temp$nid = (nid + $elm$core$List$length(resolvents_i)) + 1;
					closed = $temp$closed;
					resDone = $temp$resDone;
					opened = $temp$opened;
					nid = $temp$nid;
					continue csplSCFByEntriesResolutionAux;
				}
			}
		}
	});
var $author$project$LogicUS$PL$Resolution$csplSCFByEntriesResolution = function (clauses) {
	var cs = $author$project$LogicUS$PL$Clauses$csplRemoveEqClauses(clauses);
	var new_cs = A2(
		$elm$core$List$indexedMap,
		F2(
			function (i, x) {
				return _Utils_Tuple2(
					i + 1,
					{
						c: x,
						l1: _Utils_Tuple2(
							_Utils_Tuple2('', _List_Nil),
							true),
						l2: _Utils_Tuple2(
							_Utils_Tuple2('', _List_Nil),
							false),
						p1: 0,
						p2: 0
					});
			}),
		A2(
			$elm$core$List$sortBy,
			function (x) {
				return $elm$core$List$length(x);
			},
			$author$project$LogicUS$PL$Clauses$csplRemoveSubsumedClauses(
				$author$project$LogicUS$PL$Clauses$csplRemoveTautClauses(cs))));
	var _v0 = A4(
		$author$project$LogicUS$PL$Resolution$csplSCFByEntriesResolutionAux,
		_List_Nil,
		$elm$core$Dict$empty,
		new_cs,
		$elm$core$List$length(new_cs) + 1);
	var nodes = _v0.a;
	var edges = _v0.b;
	var nodes_clauses = A2(
		$elm$core$List$map,
		function (x) {
			return x.label;
		},
		nodes);
	var nid_max = A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$List$maximum(
			A2(
				$elm$core$List$map,
				function (x) {
					return x.id;
				},
				nodes)));
	var final_nodes = _Utils_ap(
		A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$elm_community$graph$Graph$Node,
					x.id,
					_Utils_Tuple2(
						A2($elm$core$List$member, x.label, cs),
						x.label));
			},
			nodes),
		A2(
			$elm$core$List$indexedMap,
			F2(
				function (i, x) {
					return A2(
						$elm_community$graph$Graph$Node,
						(nid_max + i) + 1,
						_Utils_Tuple2(true, x));
				}),
			A2(
				$elm$core$List$filter,
				function (x) {
					return !A2($elm$core$List$member, x, nodes_clauses);
				},
				cs)));
	return _Utils_Tuple2(
		!_Utils_eq(edges, _List_Nil),
		A2($elm_community$graph$Graph$fromNodesAndEdges, final_nodes, edges));
};
var $author$project$LogicUS$PL$Resolution$resolventsWithClosedSCFLinearResolutionAux = F4(
	function (closed, resDone, id, c) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, ac) {
					var i = _v0.a;
					var ri = _v0.b;
					return A3(
						$elm$core$List$foldl,
						F2(
							function (_v1, ac2) {
								var cj = _v1.a;
								var l1 = _v1.b;
								var l2 = _v1.c;
								return (!($author$project$LogicUS$PL$Clauses$cplIsTautology(cj) || (A2(
									$elm$core$List$any,
									function (x) {
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									ac) || A2(
									$elm$core$List$any,
									function (_v2) {
										var x = _v2.b;
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									closed)))) ? A2(
									$elm$core$List$cons,
									{c: cj, l1: l1, l2: l2, p1: id, p2: i},
									A2(
										$elm$core$List$filter,
										function (x) {
											return !A2($author$project$LogicUS$PL$Clauses$cplSubsumes, cj, x.c);
										},
										ac2)) : ac2;
							}),
						ac,
						A2($author$project$LogicUS$PL$Resolution$cplAllResolvents, c, ri.c));
				}),
			_List_Nil,
			A2(
				$elm$core$List$filter,
				function (_v3) {
					var i = _v3.a;
					return !A2(
						$elm$core$List$member,
						id,
						A2(
							$elm$core$Maybe$withDefault,
							_List_Nil,
							A2($elm$core$Dict$get, i, resDone)));
				},
				closed));
	});
var $author$project$LogicUS$PL$Resolution$resolventsWithOpenedSCFLinearResolutionAux = F3(
	function (opened, id, c) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, ac) {
					var i = _v0.a;
					var ri = _v0.b;
					return A3(
						$elm$core$List$foldl,
						F2(
							function (_v1, ac2) {
								var cj = _v1.a;
								var l1 = _v1.b;
								var l2 = _v1.c;
								return (!($author$project$LogicUS$PL$Clauses$cplIsTautology(cj) || (A2(
									$elm$core$List$any,
									function (x) {
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									ac) || A2(
									$elm$core$List$any,
									function (_v2) {
										var x = _v2.b;
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									opened)))) ? A2(
									$elm$core$List$cons,
									{c: cj, l1: l1, l2: l2, p1: id, p2: i},
									A2(
										$elm$core$List$filter,
										function (x) {
											return !A2($author$project$LogicUS$PL$Clauses$cplSubsumes, cj, x.c);
										},
										ac2)) : ac2;
							}),
						ac,
						A2($author$project$LogicUS$PL$Resolution$cplAllResolvents, c, ri.c));
				}),
			_List_Nil,
			opened);
	});
var $author$project$LogicUS$PL$Resolution$csplSCFLinearResolutionAux = F4(
	function (closed, resDone, opened, nid) {
		if (!opened.b) {
			return _Utils_Tuple2(_List_Nil, _List_Nil);
		} else {
			var _v1 = opened.a;
			var id = _v1.a;
			var rid = _v1.b;
			var xs = opened.b;
			if ($elm$core$List$isEmpty(rid.c)) {
				var refDict = $elm$core$Dict$fromList(
					_Utils_ap(closed, opened));
				return A2($author$project$LogicUS$PL$Resolution$recoverResolutionPath, id, refDict);
			} else {
				var resolvents_i = $author$project$LogicUS$PL$Resolution$filterSubsumedResolutionItems(
					A2(
						$elm$core$List$sortBy,
						function (x) {
							return $elm$core$List$length(x.c);
						},
						_Utils_ap(
							A4($author$project$LogicUS$PL$Resolution$resolventsWithClosedSCFLinearResolutionAux, closed, resDone, id, rid.c),
							A2(
								$elm$core$List$filter,
								function (ri) {
									return !A2(
										$elm$core$List$any,
										function (_v3) {
											var x = _v3.b;
											return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, ri.c);
										},
										closed);
								},
								A3($author$project$LogicUS$PL$Resolution$resolventsWithOpenedSCFLinearResolutionAux, xs, id, rid.c)))));
				var newResDone = A3(
					$elm$core$Dict$insert,
					id,
					A2(
						$elm$core$List$map,
						$elm$core$Tuple$first,
						_Utils_ap(closed, xs)),
					A2(
						$elm$core$Dict$map,
						F2(
							function (_v2, v) {
								return _Utils_ap(
									v,
									_List_fromArray(
										[id]));
							}),
						resDone));
				var newClosed = _Utils_ap(
					closed,
					_List_fromArray(
						[
							_Utils_Tuple2(id, rid)
						]));
				return A2(
					$elm$core$Maybe$withDefault,
					_Utils_Tuple2(_List_Nil, _List_Nil),
					$elm$core$List$head(
						A2(
							$elm$core$List$filter,
							A2(
								$elm$core$Basics$composeL,
								A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$List$isEmpty),
								$elm$core$Tuple$first),
							A2(
								$elm$core$List$map,
								function (ri) {
									return A4(
										$author$project$LogicUS$PL$Resolution$csplSCFLinearResolutionAux,
										newClosed,
										newResDone,
										A2(
											$elm$core$List$cons,
											_Utils_Tuple2(nid + 1, ri),
											xs),
										nid + 1);
								},
								resolvents_i))));
			}
		}
	});
var $author$project$LogicUS$PL$Resolution$csplSCFLinearResolution = function (clauses) {
	var cs = $author$project$LogicUS$PL$Clauses$csplRemoveEqClauses(clauses);
	var new_cs = A2(
		$elm$core$List$indexedMap,
		F2(
			function (i, x) {
				return _Utils_Tuple2(
					i + 1,
					{
						c: x,
						l1: _Utils_Tuple2(
							_Utils_Tuple2('', _List_Nil),
							true),
						l2: _Utils_Tuple2(
							_Utils_Tuple2('', _List_Nil),
							false),
						p1: 0,
						p2: 0
					});
			}),
		A2(
			$elm$core$List$sortBy,
			function (x) {
				return $elm$core$List$length(x);
			},
			$author$project$LogicUS$PL$Clauses$csplRemoveSubsumedClauses(
				$author$project$LogicUS$PL$Clauses$csplRemoveTautClauses(cs))));
	var _v0 = A4(
		$author$project$LogicUS$PL$Resolution$csplSCFLinearResolutionAux,
		_List_Nil,
		$elm$core$Dict$empty,
		new_cs,
		$elm$core$List$length(new_cs) + 1);
	var nodes = _v0.a;
	var edges = _v0.b;
	var nodes_clauses = A2(
		$elm$core$List$map,
		function (x) {
			return x.label;
		},
		nodes);
	var nid_max = A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$List$maximum(
			A2(
				$elm$core$List$map,
				function (x) {
					return x.id;
				},
				nodes)));
	var final_nodes = _Utils_ap(
		A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$elm_community$graph$Graph$Node,
					x.id,
					_Utils_Tuple2(
						A2($elm$core$List$member, x.label, cs),
						x.label));
			},
			nodes),
		A2(
			$elm$core$List$indexedMap,
			F2(
				function (i, x) {
					return A2(
						$elm_community$graph$Graph$Node,
						(nid_max + i) + 1,
						_Utils_Tuple2(true, x));
				}),
			A2(
				$elm$core$List$filter,
				function (x) {
					return !A2($elm$core$List$member, x, nodes_clauses);
				},
				cs)));
	return _Utils_Tuple2(
		!_Utils_eq(edges, _List_Nil),
		A2($elm_community$graph$Graph$fromNodesAndEdges, final_nodes, edges));
};
var $author$project$LogicUS$PL$Resolution$openedUpdationSCFNegativeResolutionAux = F2(
	function (xs, new_opens) {
		var res = A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, _v1) {
					var li = _v0.a;
					var ri = _v0.b;
					var ac = _v1.a;
					var rest = _v1.b;
					var add_ac = A2(
						$elm_community$list_extra$List$Extra$takeWhile,
						function (_v3) {
							var x = _v3.b;
							return _Utils_cmp(
								$elm$core$List$length(x.c),
								$elm$core$List$length(ri.c)) < 1;
						},
						rest);
					return A2(
						$elm$core$List$any,
						function (_v2) {
							var x = _v2.b;
							return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, ri.c);
						},
						_Utils_ap(ac, add_ac)) ? _Utils_Tuple2(
						_Utils_ap(ac, add_ac),
						A2(
							$elm$core$List$drop,
							$elm$core$List$length(add_ac),
							rest)) : _Utils_Tuple2(
						_Utils_ap(
							ac,
							_Utils_ap(
								add_ac,
								_List_fromArray(
									[
										_Utils_Tuple2(li, ri)
									]))),
						A2(
							$elm$core$List$drop,
							$elm$core$List$length(add_ac),
							rest));
				}),
			_Utils_Tuple2(_List_Nil, xs),
			new_opens);
		return _Utils_ap(res.a, res.b);
	});
var $author$project$LogicUS$PL$Clauses$cplIsNegative = function (c) {
	return A2(
		$elm$core$List$all,
		A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$Tuple$second),
		c);
};
var $author$project$LogicUS$PL$Resolution$resolventsWithClosedSCFNegativeResolutionAux = F4(
	function (closed, resDone, id, c) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, ac) {
					var i = _v0.a;
					var ri = _v0.b;
					return A3(
						$elm$core$List$foldl,
						F2(
							function (_v1, ac2) {
								var cj = _v1.a;
								var l1 = _v1.b;
								var l2 = _v1.c;
								return (!($author$project$LogicUS$PL$Clauses$cplIsTautology(cj) || (A2(
									$elm$core$List$any,
									function (x) {
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									ac) || A2(
									$elm$core$List$any,
									function (_v2) {
										var x = _v2.b;
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									closed)))) ? A2(
									$elm$core$List$cons,
									{c: cj, l1: l1, l2: l2, p1: id, p2: i},
									A2(
										$elm$core$List$filter,
										function (x) {
											return !A2($author$project$LogicUS$PL$Clauses$cplSubsumes, cj, x.c);
										},
										ac2)) : ac2;
							}),
						ac,
						A2($author$project$LogicUS$PL$Resolution$cplAllResolvents, c, ri.c));
				}),
			_List_Nil,
			A2(
				$elm$core$List$filter,
				function (_v3) {
					var i = _v3.a;
					var ri = _v3.b;
					return ($author$project$LogicUS$PL$Clauses$cplIsNegative(c) || $author$project$LogicUS$PL$Clauses$cplIsNegative(ri.c)) && (!A2(
						$elm$core$List$member,
						id,
						A2(
							$elm$core$Maybe$withDefault,
							_List_Nil,
							A2($elm$core$Dict$get, i, resDone))));
				},
				closed));
	});
var $author$project$LogicUS$PL$Resolution$resolventsWithOpenedSCFNegativeResolutionAux = F3(
	function (opened, id, c) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, ac) {
					var i = _v0.a;
					var ri = _v0.b;
					return A3(
						$elm$core$List$foldl,
						F2(
							function (_v1, ac2) {
								var cj = _v1.a;
								var l1 = _v1.b;
								var l2 = _v1.c;
								return (!($author$project$LogicUS$PL$Clauses$cplIsTautology(cj) || (A2(
									$elm$core$List$any,
									function (x) {
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									ac) || A2(
									$elm$core$List$any,
									function (_v2) {
										var x = _v2.b;
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									opened)))) ? A2(
									$elm$core$List$cons,
									{c: cj, l1: l1, l2: l2, p1: id, p2: i},
									A2(
										$elm$core$List$filter,
										function (x) {
											return !A2($author$project$LogicUS$PL$Clauses$cplSubsumes, cj, x.c);
										},
										ac2)) : ac2;
							}),
						ac,
						A2($author$project$LogicUS$PL$Resolution$cplAllResolvents, c, ri.c));
				}),
			_List_Nil,
			A2(
				$elm$core$List$filter,
				function (_v3) {
					var ri = _v3.b;
					return $author$project$LogicUS$PL$Clauses$cplIsNegative(c) || $author$project$LogicUS$PL$Clauses$cplIsNegative(ri.c);
				},
				opened));
	});
var $author$project$LogicUS$PL$Resolution$csplSCFNegativeResolutionAux = F4(
	function (closed, resDone, opened, nid) {
		csplSCFNegativeResolutionAux:
		while (true) {
			if (!opened.b) {
				return _Utils_Tuple2(_List_Nil, _List_Nil);
			} else {
				var _v1 = opened.a;
				var id = _v1.a;
				var rid = _v1.b;
				var xs = opened.b;
				if ($elm$core$List$isEmpty(rid.c)) {
					var refDict = $elm$core$Dict$fromList(
						_Utils_ap(closed, opened));
					return A2($author$project$LogicUS$PL$Resolution$recoverResolutionPath, id, refDict);
				} else {
					var resolvents_i = A2(
						$elm$core$List$indexedMap,
						F2(
							function (i, x) {
								return _Utils_Tuple2((nid + i) + 1, x);
							}),
						$author$project$LogicUS$PL$Resolution$filterSubsumedResolutionItems(
							A2(
								$elm$core$List$sortBy,
								function (x) {
									return $elm$core$List$length(x.c);
								},
								_Utils_ap(
									A4($author$project$LogicUS$PL$Resolution$resolventsWithClosedSCFNegativeResolutionAux, closed, resDone, id, rid.c),
									A2(
										$elm$core$List$filter,
										function (ri) {
											return !A2(
												$elm$core$List$any,
												function (_v3) {
													var x = _v3.b;
													return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, ri.c);
												},
												closed);
										},
										A3($author$project$LogicUS$PL$Resolution$resolventsWithOpenedSCFNegativeResolutionAux, xs, id, rid.c))))));
					var new_opened = A2($author$project$LogicUS$PL$Resolution$openedUpdationSCFNegativeResolutionAux, xs, resolvents_i);
					var new_closed = _Utils_ap(
						closed,
						_List_fromArray(
							[
								_Utils_Tuple2(id, rid)
							]));
					var newResDone = A3(
						$elm$core$Dict$insert,
						id,
						A2(
							$elm$core$List$map,
							$elm$core$Tuple$first,
							_Utils_ap(closed, xs)),
						A2(
							$elm$core$Dict$map,
							F2(
								function (_v2, v) {
									return _Utils_ap(
										v,
										_List_fromArray(
											[id]));
								}),
							resDone));
					var $temp$closed = new_closed,
						$temp$resDone = newResDone,
						$temp$opened = new_opened,
						$temp$nid = (nid + $elm$core$List$length(resolvents_i)) + 1;
					closed = $temp$closed;
					resDone = $temp$resDone;
					opened = $temp$opened;
					nid = $temp$nid;
					continue csplSCFNegativeResolutionAux;
				}
			}
		}
	});
var $author$project$LogicUS$PL$Resolution$csplSCFNegativeResolution = function (clauses) {
	var cs = $author$project$LogicUS$PL$Clauses$csplRemoveEqClauses(clauses);
	var new_cs = A2(
		$elm$core$List$indexedMap,
		F2(
			function (i, x) {
				return _Utils_Tuple2(
					i + 1,
					{
						c: x,
						l1: _Utils_Tuple2(
							_Utils_Tuple2('', _List_Nil),
							true),
						l2: _Utils_Tuple2(
							_Utils_Tuple2('', _List_Nil),
							false),
						p1: 0,
						p2: 0
					});
			}),
		A2(
			$elm$core$List$sortBy,
			function (x) {
				return $elm$core$List$length(x);
			},
			$author$project$LogicUS$PL$Clauses$csplRemoveSubsumedClauses(
				$author$project$LogicUS$PL$Clauses$csplRemoveTautClauses(cs))));
	var _v0 = A4(
		$author$project$LogicUS$PL$Resolution$csplSCFNegativeResolutionAux,
		_List_Nil,
		$elm$core$Dict$empty,
		new_cs,
		$elm$core$List$length(new_cs) + 1);
	var nodes = _v0.a;
	var edges = _v0.b;
	var nodes_clauses = A2(
		$elm$core$List$map,
		function (x) {
			return x.label;
		},
		nodes);
	var nid_max = A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$List$maximum(
			A2(
				$elm$core$List$map,
				function (x) {
					return x.id;
				},
				nodes)));
	var final_nodes = _Utils_ap(
		A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$elm_community$graph$Graph$Node,
					x.id,
					_Utils_Tuple2(
						A2($elm$core$List$member, x.label, cs),
						x.label));
			},
			nodes),
		A2(
			$elm$core$List$indexedMap,
			F2(
				function (i, x) {
					return A2(
						$elm_community$graph$Graph$Node,
						(nid_max + i) + 1,
						_Utils_Tuple2(true, x));
				}),
			A2(
				$elm$core$List$filter,
				function (x) {
					return !A2($elm$core$List$member, x, nodes_clauses);
				},
				cs)));
	return _Utils_Tuple2(
		!_Utils_eq(edges, _List_Nil),
		A2($elm_community$graph$Graph$fromNodesAndEdges, final_nodes, edges));
};
var $author$project$LogicUS$PL$Resolution$openedUpdationSCFPositiveResolutionAux = F2(
	function (xs, new_opens) {
		var res = A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, _v1) {
					var li = _v0.a;
					var ri = _v0.b;
					var ac = _v1.a;
					var rest = _v1.b;
					var add_ac = A2(
						$elm_community$list_extra$List$Extra$takeWhile,
						function (_v3) {
							var x = _v3.b;
							return _Utils_cmp(
								$elm$core$List$length(x.c),
								$elm$core$List$length(ri.c)) < 1;
						},
						rest);
					return A2(
						$elm$core$List$any,
						function (_v2) {
							var x = _v2.b;
							return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, ri.c);
						},
						_Utils_ap(ac, add_ac)) ? _Utils_Tuple2(
						_Utils_ap(ac, add_ac),
						A2(
							$elm$core$List$drop,
							$elm$core$List$length(add_ac),
							rest)) : _Utils_Tuple2(
						_Utils_ap(
							ac,
							_Utils_ap(
								add_ac,
								_List_fromArray(
									[
										_Utils_Tuple2(li, ri)
									]))),
						A2(
							$elm$core$List$drop,
							$elm$core$List$length(add_ac),
							rest));
				}),
			_Utils_Tuple2(_List_Nil, xs),
			new_opens);
		return _Utils_ap(res.a, res.b);
	});
var $author$project$LogicUS$PL$Clauses$cplIsPositive = function (c) {
	return A2($elm$core$List$all, $elm$core$Tuple$second, c);
};
var $author$project$LogicUS$PL$Resolution$resolventsWithClosedSCFPositiveResolutionAux = F4(
	function (closed, resDone, id, c) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, ac) {
					var i = _v0.a;
					var ri = _v0.b;
					return A3(
						$elm$core$List$foldl,
						F2(
							function (_v1, ac2) {
								var cj = _v1.a;
								var l1 = _v1.b;
								var l2 = _v1.c;
								return (!($author$project$LogicUS$PL$Clauses$cplIsTautology(cj) || (A2(
									$elm$core$List$any,
									function (x) {
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									ac) || A2(
									$elm$core$List$any,
									function (_v2) {
										var x = _v2.b;
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									closed)))) ? A2(
									$elm$core$List$cons,
									{c: cj, l1: l1, l2: l2, p1: id, p2: i},
									A2(
										$elm$core$List$filter,
										function (x) {
											return !A2($author$project$LogicUS$PL$Clauses$cplSubsumes, cj, x.c);
										},
										ac2)) : ac2;
							}),
						ac,
						A2($author$project$LogicUS$PL$Resolution$cplAllResolvents, c, ri.c));
				}),
			_List_Nil,
			A2(
				$elm$core$List$filter,
				function (_v3) {
					var i = _v3.a;
					var ri = _v3.b;
					return ($author$project$LogicUS$PL$Clauses$cplIsPositive(c) || $author$project$LogicUS$PL$Clauses$cplIsPositive(ri.c)) && (!A2(
						$elm$core$List$member,
						id,
						A2(
							$elm$core$Maybe$withDefault,
							_List_Nil,
							A2($elm$core$Dict$get, i, resDone))));
				},
				closed));
	});
var $author$project$LogicUS$PL$Resolution$resolventsWithOpenedSCFPositiveResolutionAux = F3(
	function (opened, id, c) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, ac) {
					var i = _v0.a;
					var ri = _v0.b;
					return A3(
						$elm$core$List$foldl,
						F2(
							function (_v1, ac2) {
								var cj = _v1.a;
								var l1 = _v1.b;
								var l2 = _v1.c;
								return (!($author$project$LogicUS$PL$Clauses$cplIsTautology(cj) || (A2(
									$elm$core$List$any,
									function (x) {
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									ac) || A2(
									$elm$core$List$any,
									function (_v2) {
										var x = _v2.b;
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									opened)))) ? A2(
									$elm$core$List$cons,
									{c: cj, l1: l1, l2: l2, p1: id, p2: i},
									A2(
										$elm$core$List$filter,
										function (x) {
											return !A2($author$project$LogicUS$PL$Clauses$cplSubsumes, cj, x.c);
										},
										ac2)) : ac2;
							}),
						ac,
						A2($author$project$LogicUS$PL$Resolution$cplAllResolvents, c, ri.c));
				}),
			_List_Nil,
			A2(
				$elm$core$List$filter,
				function (_v3) {
					var ri = _v3.b;
					return $author$project$LogicUS$PL$Clauses$cplIsPositive(c) || $author$project$LogicUS$PL$Clauses$cplIsPositive(ri.c);
				},
				opened));
	});
var $author$project$LogicUS$PL$Resolution$csplSCFPositiveResolutionAux = F4(
	function (closed, resDone, opened, nid) {
		csplSCFPositiveResolutionAux:
		while (true) {
			if (!opened.b) {
				return _Utils_Tuple2(_List_Nil, _List_Nil);
			} else {
				var _v1 = opened.a;
				var id = _v1.a;
				var rid = _v1.b;
				var xs = opened.b;
				if ($elm$core$List$isEmpty(rid.c)) {
					var refDict = $elm$core$Dict$fromList(
						_Utils_ap(closed, opened));
					return A2($author$project$LogicUS$PL$Resolution$recoverResolutionPath, id, refDict);
				} else {
					var resolvents_i = A2(
						$elm$core$List$indexedMap,
						F2(
							function (i, x) {
								return _Utils_Tuple2((nid + i) + 1, x);
							}),
						$author$project$LogicUS$PL$Resolution$filterSubsumedResolutionItems(
							A2(
								$elm$core$List$sortBy,
								function (x) {
									return $elm$core$List$length(x.c);
								},
								_Utils_ap(
									A4($author$project$LogicUS$PL$Resolution$resolventsWithClosedSCFPositiveResolutionAux, closed, resDone, id, rid.c),
									A2(
										$elm$core$List$filter,
										function (ri) {
											return !A2(
												$elm$core$List$any,
												function (_v3) {
													var x = _v3.b;
													return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, ri.c);
												},
												closed);
										},
										A3($author$project$LogicUS$PL$Resolution$resolventsWithOpenedSCFPositiveResolutionAux, xs, id, rid.c))))));
					var new_opened = A2($author$project$LogicUS$PL$Resolution$openedUpdationSCFPositiveResolutionAux, xs, resolvents_i);
					var new_closed = _Utils_ap(
						closed,
						_List_fromArray(
							[
								_Utils_Tuple2(id, rid)
							]));
					var newResDone = A3(
						$elm$core$Dict$insert,
						id,
						A2(
							$elm$core$List$map,
							$elm$core$Tuple$first,
							_Utils_ap(closed, xs)),
						A2(
							$elm$core$Dict$map,
							F2(
								function (_v2, v) {
									return _Utils_ap(
										v,
										_List_fromArray(
											[id]));
								}),
							resDone));
					var $temp$closed = new_closed,
						$temp$resDone = newResDone,
						$temp$opened = new_opened,
						$temp$nid = (nid + $elm$core$List$length(resolvents_i)) + 1;
					closed = $temp$closed;
					resDone = $temp$resDone;
					opened = $temp$opened;
					nid = $temp$nid;
					continue csplSCFPositiveResolutionAux;
				}
			}
		}
	});
var $author$project$LogicUS$PL$Resolution$csplSCFPositiveResolution = function (clauses) {
	var cs = $author$project$LogicUS$PL$Clauses$csplRemoveEqClauses(clauses);
	var new_cs = A2(
		$elm$core$List$indexedMap,
		F2(
			function (i, x) {
				return _Utils_Tuple2(
					i + 1,
					{
						c: x,
						l1: _Utils_Tuple2(
							_Utils_Tuple2('', _List_Nil),
							true),
						l2: _Utils_Tuple2(
							_Utils_Tuple2('', _List_Nil),
							false),
						p1: 0,
						p2: 0
					});
			}),
		A2(
			$elm$core$List$sortBy,
			function (x) {
				return $elm$core$List$length(x);
			},
			$author$project$LogicUS$PL$Clauses$csplRemoveSubsumedClauses(
				$author$project$LogicUS$PL$Clauses$csplRemoveTautClauses(cs))));
	var _v0 = A4(
		$author$project$LogicUS$PL$Resolution$csplSCFPositiveResolutionAux,
		_List_Nil,
		$elm$core$Dict$empty,
		new_cs,
		$elm$core$List$length(new_cs) + 1);
	var nodes = _v0.a;
	var edges = _v0.b;
	var nodes_clauses = A2(
		$elm$core$List$map,
		function (x) {
			return x.label;
		},
		nodes);
	var nid_max = A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$List$maximum(
			A2(
				$elm$core$List$map,
				function (x) {
					return x.id;
				},
				nodes)));
	var final_nodes = _Utils_ap(
		A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$elm_community$graph$Graph$Node,
					x.id,
					_Utils_Tuple2(
						A2($elm$core$List$member, x.label, cs),
						x.label));
			},
			nodes),
		A2(
			$elm$core$List$indexedMap,
			F2(
				function (i, x) {
					return A2(
						$elm_community$graph$Graph$Node,
						(nid_max + i) + 1,
						_Utils_Tuple2(true, x));
				}),
			A2(
				$elm$core$List$filter,
				function (x) {
					return !A2($elm$core$List$member, x, nodes_clauses);
				},
				cs)));
	return _Utils_Tuple2(
		!_Utils_eq(edges, _List_Nil),
		A2($elm_community$graph$Graph$fromNodesAndEdges, final_nodes, edges));
};
var $author$project$LogicUS$PL$Resolution$openedUpdationSCFResolutionAux = F2(
	function (xs, new_opens) {
		var res = A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, _v1) {
					var li = _v0.a;
					var ri = _v0.b;
					var ac = _v1.a;
					var rest = _v1.b;
					var add_ac = A2(
						$elm_community$list_extra$List$Extra$takeWhile,
						function (_v4) {
							var lx = _v4.a;
							return _Utils_cmp(lx, li) < 1;
						},
						rest);
					return A2(
						$elm$core$List$any,
						function (_v2) {
							var x = _v2.b;
							return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, ri.c);
						},
						_Utils_ap(ac, add_ac)) ? _Utils_Tuple2(
						_Utils_ap(ac, add_ac),
						A2(
							$elm$core$List$drop,
							$elm$core$List$length(add_ac),
							rest)) : _Utils_Tuple2(
						_Utils_ap(
							ac,
							_Utils_ap(
								add_ac,
								_List_fromArray(
									[
										_Utils_Tuple2(li, ri)
									]))),
						A2(
							$elm$core$List$filter,
							function (_v3) {
								var x = _v3.b;
								return !A2($author$project$LogicUS$PL$Clauses$cplSubsumes, ri.c, x.c);
							},
							A2(
								$elm$core$List$drop,
								$elm$core$List$length(add_ac),
								rest)));
				}),
			_Utils_Tuple2(_List_Nil, xs),
			new_opens);
		return _Utils_ap(res.a, res.b);
	});
var $author$project$LogicUS$PL$Resolution$resolventsWithClosedSCFResolutionAux = F3(
	function (closed, id, c) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, ac) {
					var i = _v0.a;
					var ri = _v0.b;
					return A3(
						$elm$core$List$foldl,
						F2(
							function (_v1, ac2) {
								var cj = _v1.a;
								var l1 = _v1.b;
								var l2 = _v1.c;
								return (!($author$project$LogicUS$PL$Clauses$cplIsTautology(cj) || (A2(
									$elm$core$List$any,
									function (x) {
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									ac) || A2(
									$elm$core$List$any,
									function (_v2) {
										var x = _v2.b;
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									closed)))) ? A2(
									$elm$core$List$cons,
									{c: cj, l1: l1, l2: l2, p1: id, p2: i},
									A2(
										$elm$core$List$filter,
										function (x) {
											return !A2($author$project$LogicUS$PL$Clauses$cplSubsumes, cj, x.c);
										},
										ac2)) : ac2;
							}),
						ac,
						A2($author$project$LogicUS$PL$Resolution$cplAllResolvents, c, ri.c));
				}),
			_List_Nil,
			closed);
	});
var $author$project$LogicUS$PL$Resolution$csplSCFResolutionAux = F3(
	function (closed, opened, nid) {
		csplSCFResolutionAux:
		while (true) {
			if (!opened.b) {
				return _Utils_Tuple2(_List_Nil, _List_Nil);
			} else {
				var _v1 = opened.a;
				var ri = _v1.b;
				var xs = opened.b;
				if ($elm$core$List$isEmpty(ri.c)) {
					var refDict = $elm$core$Dict$fromList(
						_Utils_ap(
							closed,
							_List_fromArray(
								[
									_Utils_Tuple2(nid + 1, ri)
								])));
					return A2($author$project$LogicUS$PL$Resolution$recoverResolutionPath, nid + 1, refDict);
				} else {
					var r_closed = A3($author$project$LogicUS$PL$Resolution$resolventsWithClosedSCFResolutionAux, closed, nid + 1, ri.c);
					var new_opened = A2(
						$author$project$LogicUS$PL$Resolution$openedUpdationSCFResolutionAux,
						xs,
						A2(
							$elm$core$List$sortBy,
							function (x) {
								return x.a;
							},
							A2(
								$elm$core$List$map,
								function (x) {
									return _Utils_Tuple2(
										$elm$core$List$length(x.c),
										x);
								},
								r_closed)));
					var new_closed = _Utils_ap(
						closed,
						_List_fromArray(
							[
								_Utils_Tuple2(nid + 1, ri)
							]));
					var $temp$closed = new_closed,
						$temp$opened = new_opened,
						$temp$nid = nid + 1;
					closed = $temp$closed;
					opened = $temp$opened;
					nid = $temp$nid;
					continue csplSCFResolutionAux;
				}
			}
		}
	});
var $author$project$LogicUS$PL$Resolution$csplSCFResolution = function (clauses) {
	var cs = $author$project$LogicUS$PL$Clauses$csplRemoveEqClauses(clauses);
	var new_cs = A2(
		$elm$core$List$sortBy,
		function (x) {
			return x.a;
		},
		A2(
			$elm$core$List$map,
			function (x) {
				return _Utils_Tuple2(
					$elm$core$List$length(x),
					{
						c: x,
						l1: _Utils_Tuple2(
							_Utils_Tuple2('', _List_Nil),
							true),
						l2: _Utils_Tuple2(
							_Utils_Tuple2('', _List_Nil),
							false),
						p1: 0,
						p2: 0
					});
			},
			$author$project$LogicUS$PL$Clauses$csplRemoveSubsumedClauses(
				$author$project$LogicUS$PL$Clauses$csplRemoveTautClauses(cs))));
	var _v0 = A3($author$project$LogicUS$PL$Resolution$csplSCFResolutionAux, _List_Nil, new_cs, 0);
	var nodes = _v0.a;
	var edges = _v0.b;
	var nodes_clauses = A2(
		$elm$core$List$map,
		function (x) {
			return x.label;
		},
		nodes);
	var nid_max = A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$List$maximum(
			A2(
				$elm$core$List$map,
				function (x) {
					return x.id;
				},
				nodes)));
	var final_nodes = _Utils_ap(
		A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$elm_community$graph$Graph$Node,
					x.id,
					_Utils_Tuple2(
						A2($elm$core$List$member, x.label, cs),
						x.label));
			},
			nodes),
		A2(
			$elm$core$List$indexedMap,
			F2(
				function (i, x) {
					return A2(
						$elm_community$graph$Graph$Node,
						(nid_max + i) + 1,
						_Utils_Tuple2(true, x));
				}),
			A2(
				$elm$core$List$filter,
				function (x) {
					return !A2($elm$core$List$member, x, nodes_clauses);
				},
				cs)));
	return _Utils_Tuple2(
		!_Utils_eq(edges, _List_Nil),
		A2($elm_community$graph$Graph$fromNodesAndEdges, final_nodes, edges));
};
var $author$project$LogicUS$PL$Resolution$openedUpdationSCFUnitaryResolutionAux = F2(
	function (xs, new_opens) {
		var res = A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, _v1) {
					var li = _v0.a;
					var ri = _v0.b;
					var ac = _v1.a;
					var rest = _v1.b;
					var add_ac = A2(
						$elm_community$list_extra$List$Extra$takeWhile,
						function (_v3) {
							var x = _v3.b;
							return _Utils_cmp(
								$elm$core$List$length(x.c),
								$elm$core$List$length(ri.c)) < 1;
						},
						rest);
					return A2(
						$elm$core$List$any,
						function (_v2) {
							var x = _v2.b;
							return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, ri.c);
						},
						_Utils_ap(ac, add_ac)) ? _Utils_Tuple2(
						_Utils_ap(ac, add_ac),
						A2(
							$elm$core$List$drop,
							$elm$core$List$length(add_ac),
							rest)) : _Utils_Tuple2(
						_Utils_ap(
							ac,
							_Utils_ap(
								add_ac,
								_List_fromArray(
									[
										_Utils_Tuple2(li, ri)
									]))),
						A2(
							$elm$core$List$drop,
							$elm$core$List$length(add_ac),
							rest));
				}),
			_Utils_Tuple2(_List_Nil, xs),
			new_opens);
		return _Utils_ap(res.a, res.b);
	});
var $author$project$LogicUS$PL$Resolution$resolventsWithClosedSCFUnitaryResolutionAux = F4(
	function (closed, resDone, id, c) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, ac) {
					var i = _v0.a;
					var ri = _v0.b;
					return A3(
						$elm$core$List$foldl,
						F2(
							function (_v1, ac2) {
								var cj = _v1.a;
								var l1 = _v1.b;
								var l2 = _v1.c;
								return (!($author$project$LogicUS$PL$Clauses$cplIsTautology(cj) || (A2(
									$elm$core$List$any,
									function (x) {
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									ac) || A2(
									$elm$core$List$any,
									function (_v2) {
										var x = _v2.b;
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									closed)))) ? A2(
									$elm$core$List$cons,
									{c: cj, l1: l1, l2: l2, p1: id, p2: i},
									A2(
										$elm$core$List$filter,
										function (x) {
											return !A2($author$project$LogicUS$PL$Clauses$cplSubsumes, cj, x.c);
										},
										ac2)) : ac2;
							}),
						ac,
						A2($author$project$LogicUS$PL$Resolution$cplAllResolvents, c, ri.c));
				}),
			_List_Nil,
			A2(
				$elm$core$List$filter,
				function (_v3) {
					var i = _v3.a;
					var ri = _v3.b;
					return (($elm$core$List$length(c) === 1) || ($elm$core$List$length(ri.c) === 1)) && (!A2(
						$elm$core$List$member,
						id,
						A2(
							$elm$core$Maybe$withDefault,
							_List_Nil,
							A2($elm$core$Dict$get, i, resDone))));
				},
				closed));
	});
var $author$project$LogicUS$PL$Resolution$resolventsWithOpenedSCFUnitaryResolutionAux = F3(
	function (opened, id, c) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, ac) {
					var i = _v0.a;
					var ri = _v0.b;
					return A3(
						$elm$core$List$foldl,
						F2(
							function (_v1, ac2) {
								var cj = _v1.a;
								var l1 = _v1.b;
								var l2 = _v1.c;
								return (!($author$project$LogicUS$PL$Clauses$cplIsTautology(cj) || (A2(
									$elm$core$List$any,
									function (x) {
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									ac) || A2(
									$elm$core$List$any,
									function (_v2) {
										var x = _v2.b;
										return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, cj);
									},
									opened)))) ? A2(
									$elm$core$List$cons,
									{c: cj, l1: l1, l2: l2, p1: id, p2: i},
									A2(
										$elm$core$List$filter,
										function (x) {
											return !A2($author$project$LogicUS$PL$Clauses$cplSubsumes, cj, x.c);
										},
										ac2)) : ac2;
							}),
						ac,
						A2($author$project$LogicUS$PL$Resolution$cplAllResolvents, c, ri.c));
				}),
			_List_Nil,
			A2(
				$elm$core$List$filter,
				function (_v3) {
					var ri = _v3.b;
					return ($elm$core$List$length(c) === 1) || ($elm$core$List$length(ri.c) === 1);
				},
				opened));
	});
var $author$project$LogicUS$PL$Resolution$csplSCFUnitaryResolutionAux = F4(
	function (closed, resDone, opened, nid) {
		csplSCFUnitaryResolutionAux:
		while (true) {
			if (!opened.b) {
				return _Utils_Tuple2(_List_Nil, _List_Nil);
			} else {
				var _v1 = opened.a;
				var id = _v1.a;
				var rid = _v1.b;
				var xs = opened.b;
				if ($elm$core$List$isEmpty(rid.c)) {
					var refDict = $elm$core$Dict$fromList(
						_Utils_ap(closed, opened));
					return A2($author$project$LogicUS$PL$Resolution$recoverResolutionPath, id, refDict);
				} else {
					var resolvents_i = A2(
						$elm$core$List$indexedMap,
						F2(
							function (i, x) {
								return _Utils_Tuple2((nid + i) + 1, x);
							}),
						$author$project$LogicUS$PL$Resolution$filterSubsumedResolutionItems(
							A2(
								$elm$core$List$sortBy,
								function (x) {
									return $elm$core$List$length(x.c);
								},
								_Utils_ap(
									A4($author$project$LogicUS$PL$Resolution$resolventsWithClosedSCFUnitaryResolutionAux, closed, resDone, id, rid.c),
									A2(
										$elm$core$List$filter,
										function (ri) {
											return !A2(
												$elm$core$List$any,
												function (_v3) {
													var x = _v3.b;
													return A2($author$project$LogicUS$PL$Clauses$cplSubsumes, x.c, ri.c);
												},
												closed);
										},
										A3($author$project$LogicUS$PL$Resolution$resolventsWithOpenedSCFUnitaryResolutionAux, xs, id, rid.c))))));
					var new_opened = A2($author$project$LogicUS$PL$Resolution$openedUpdationSCFUnitaryResolutionAux, xs, resolvents_i);
					var new_closed = _Utils_ap(
						closed,
						_List_fromArray(
							[
								_Utils_Tuple2(id, rid)
							]));
					var newResDone = A3(
						$elm$core$Dict$insert,
						id,
						A2(
							$elm$core$List$map,
							$elm$core$Tuple$first,
							_Utils_ap(closed, xs)),
						A2(
							$elm$core$Dict$map,
							F2(
								function (_v2, v) {
									return _Utils_ap(
										v,
										_List_fromArray(
											[id]));
								}),
							resDone));
					var $temp$closed = new_closed,
						$temp$resDone = newResDone,
						$temp$opened = new_opened,
						$temp$nid = (nid + $elm$core$List$length(resolvents_i)) + 1;
					closed = $temp$closed;
					resDone = $temp$resDone;
					opened = $temp$opened;
					nid = $temp$nid;
					continue csplSCFUnitaryResolutionAux;
				}
			}
		}
	});
var $author$project$LogicUS$PL$Resolution$csplSCFUnitaryResolution = function (clauses) {
	var cs = $author$project$LogicUS$PL$Clauses$csplRemoveEqClauses(clauses);
	var new_cs = A2(
		$elm$core$List$indexedMap,
		F2(
			function (i, x) {
				return _Utils_Tuple2(
					i + 1,
					{
						c: x,
						l1: _Utils_Tuple2(
							_Utils_Tuple2('', _List_Nil),
							true),
						l2: _Utils_Tuple2(
							_Utils_Tuple2('', _List_Nil),
							true),
						p1: 0,
						p2: 0
					});
			}),
		A2(
			$elm$core$List$sortBy,
			function (x) {
				return $elm$core$List$length(x);
			},
			$author$project$LogicUS$PL$Clauses$csplRemoveSubsumedClauses(
				$author$project$LogicUS$PL$Clauses$csplRemoveTautClauses(cs))));
	var _v0 = A4(
		$author$project$LogicUS$PL$Resolution$csplSCFUnitaryResolutionAux,
		_List_Nil,
		$elm$core$Dict$empty,
		new_cs,
		$elm$core$List$length(new_cs) + 1);
	var nodes = _v0.a;
	var edges = _v0.b;
	var nodes_clauses = A2(
		$elm$core$List$map,
		function (x) {
			return x.label;
		},
		nodes);
	var nid_max = A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$List$maximum(
			A2(
				$elm$core$List$map,
				function (x) {
					return x.id;
				},
				nodes)));
	var final_nodes = _Utils_ap(
		A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$elm_community$graph$Graph$Node,
					x.id,
					_Utils_Tuple2(
						A2($elm$core$List$member, x.label, cs),
						x.label));
			},
			nodes),
		A2(
			$elm$core$List$indexedMap,
			F2(
				function (i, x) {
					return A2(
						$elm_community$graph$Graph$Node,
						(nid_max + i) + 1,
						_Utils_Tuple2(true, x));
				}),
			A2(
				$elm$core$List$filter,
				function (x) {
					return !A2($elm$core$List$member, x, nodes_clauses);
				},
				cs)));
	return _Utils_Tuple2(
		!_Utils_eq(edges, _List_Nil),
		A2($elm_community$graph$Graph$fromNodesAndEdges, final_nodes, edges));
};
var $author$project$LogicUS$PL$Resolution$resolutionTableauToDOT = function (g) {
	var toStringNode = function (_v0) {
		var cs = _v0.b;
		return $elm$core$Maybe$Just(
			$author$project$LogicUS$PL$Clauses$cplToString(cs));
	};
	var toStringEdge = function (l) {
		return $elm$core$Maybe$Just(
			A2($elm$core$Basics$composeL, $author$project$LogicUS$PL$SyntaxSemantics$fplToString, $author$project$LogicUS$PL$Clauses$clauseLitToLiteral)(l));
	};
	var initialNodes = A2(
		$elm$core$String$join,
		';',
		A2(
			$elm$core$List$map,
			$elm$core$String$fromInt,
			A3(
				$elm$core$List$foldl,
				F2(
					function (x, ac) {
						return x.label.a ? _Utils_ap(
							ac,
							_List_fromArray(
								[x.id])) : ac;
					}),
				_List_Nil,
				$elm_community$graph$Graph$nodes(g))));
	return A3(
		$elm$core$String$replace,
		'\n',
		'',
		A3(
			$elm$core$String$replace,
			'\n}',
			'\n\n  {rank=same; ' + (initialNodes + ';}\n}'),
			A3($elm_community$graph$Graph$DOT$output, toStringNode, toStringEdge, g)));
};
var $author$project$PLAlgProcessors$processResolutionGraphPL = F2(
	function (content, outputsCSPL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var source = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(source.origin_id, source.origin_slot),
					outputsCSPL);
				if (_v2.$ === 'Just') {
					var cs = _v2.a;
					var _v3 = c.option;
					switch (_v3) {
						case 'standard':
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$Resolution$resolutionTableauToDOT(
										$author$project$LogicUS$PL$Resolution$csplSCFResolution(cs).b))
							};
						case 'linear':
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$Resolution$resolutionTableauToDOT(
										$author$project$LogicUS$PL$Resolution$csplSCFLinearResolution(cs).b))
							};
						case 'positive':
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$Resolution$resolutionTableauToDOT(
										$author$project$LogicUS$PL$Resolution$csplSCFPositiveResolution(cs).b))
							};
						case 'negative':
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$Resolution$resolutionTableauToDOT(
										$author$project$LogicUS$PL$Resolution$csplSCFNegativeResolution(cs).b))
							};
						case 'unitary':
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$Resolution$resolutionTableauToDOT(
										$author$project$LogicUS$PL$Resolution$csplSCFUnitaryResolution(cs).b))
							};
						case 'by entries':
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$Resolution$resolutionTableauToDOT(
										$author$project$LogicUS$PL$Resolution$csplSCFByEntriesResolution(cs).b))
							};
						default:
							return {
								errorCode: 4,
								message: $elm$json$Json$Encode$string('Unknown option (' + (c.option + ') for ResolutionGraphPL'))
							};
					}
				} else {
					return {
						errorCode: 2,
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')'))))
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e))
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e))
			};
		}
	});
var $author$project$LogicUS$PL$Resolution$csplAllResolventsByPsymb = F2(
	function (cs, v) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (c2, _v0) {
					var cs_ = _v0.a;
					var res = _v0.b;
					var rs_c2 = A3(
						$elm$core$List$foldl,
						F2(
							function (c1, ac) {
								var _v1 = A3($author$project$LogicUS$PL$Resolution$cplResolventByPSymb, c1, c2, v);
								if (_v1.$ === 'Nothing') {
									return ac;
								} else {
									var _v2 = _v1.a;
									var cr = _v2.a;
									return _Utils_ap(
										ac,
										_List_fromArray(
											[cr]));
								}
							}),
						_List_Nil,
						cs_);
					return _Utils_Tuple2(
						_Utils_ap(
							cs_,
							_List_fromArray(
								[c2])),
						A2($author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList, res, rs_c2));
				}),
			_Utils_Tuple2(_List_Nil, _List_Nil),
			cs).b;
	});
var $author$project$LogicUS$PL$Resolution$csplRegularResolutionAux = F3(
	function (hist, vars, clauses) {
		if (!clauses.b) {
			return $elm$core$Maybe$Just(
				_Utils_Tuple2(
					false,
					_Utils_ap(
						hist,
						_List_fromArray(
							[clauses]))));
		} else {
			if ((!clauses.a.b) && (!clauses.b.b)) {
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(
						true,
						_Utils_ap(
							hist,
							_List_fromArray(
								[clauses]))));
			} else {
				if (vars.b) {
					var v = vars.a;
					var vs = vars.b;
					var _v2 = A2(
						$elm$core$List$partition,
						$elm$core$List$all(
							function (x) {
								return !_Utils_eq(x.a, v);
							}),
						clauses);
					var u1 = _v2.a;
					var u2 = _v2.b;
					return A3(
						$author$project$LogicUS$PL$Resolution$csplRegularResolutionAux,
						_Utils_ap(
							hist,
							_List_fromArray(
								[clauses])),
						vs,
						$author$project$LogicUS$PL$Clauses$csplRemoveSubsumedClauses(
							$author$project$LogicUS$PL$Clauses$csplRemoveTautClauses(
								_Utils_ap(
									u1,
									A2($author$project$LogicUS$PL$Resolution$csplAllResolventsByPsymb, u2, v)))));
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $author$project$LogicUS$PL$Resolution$csplRegularResolution = F2(
	function (vars, clauses) {
		var cs = A2($elm$core$Basics$composeL, $author$project$LogicUS$PL$Clauses$csplRemoveSubsumedClauses, $author$project$LogicUS$PL$Clauses$csplRemoveTautClauses)(clauses);
		var new_vars = A2(
			$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
			_List_Nil,
			_Utils_ap(
				vars,
				$author$project$LogicUS$PL$Clauses$csplSymbols(cs)));
		return A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2(false, _List_Nil),
			A3($author$project$LogicUS$PL$Resolution$csplRegularResolutionAux, _List_Nil, new_vars, cs));
	});
var $author$project$LogicUS$PL$Resolution$csplAllResolvents = function (cs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (c, _v0) {
				var prev = _v0.a;
				var ac = _v0.b;
				var ri = A2(
					$elm$core$List$map,
					function (_v1) {
						var x = _v1.a;
						return x;
					},
					$elm$core$List$concat(
						A2(
							$elm$core$List$map,
							function (c2) {
								return A2($author$project$LogicUS$PL$Resolution$cplAllResolvents, c, c2);
							},
							prev)));
				return _Utils_Tuple2(
					_Utils_ap(
						prev,
						_List_fromArray(
							[c])),
					A2($author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList, ac, ri));
			}),
		_Utils_Tuple2(_List_Nil, _List_Nil),
		cs).b;
};
var $author$project$LogicUS$PL$Resolution$csplSaturationResolutionAux = F2(
	function (cs, hist) {
		csplSaturationResolutionAux:
		while (true) {
			if (A2($elm$core$List$any, $elm$core$List$isEmpty, cs)) {
				return _Utils_Tuple2(true, hist);
			} else {
				var cs2 = $author$project$LogicUS$PL$Resolution$csplAllResolvents(cs);
				if ($elm$core$List$isEmpty(cs2)) {
					return _Utils_Tuple2(
						false,
						_Utils_ap(
							hist,
							_List_fromArray(
								[cs])));
				} else {
					var $temp$cs = _Utils_ap(cs, cs2),
						$temp$hist = _Utils_ap(
						hist,
						_List_fromArray(
							[
								_Utils_ap(cs, cs2)
							]));
					cs = $temp$cs;
					hist = $temp$hist;
					continue csplSaturationResolutionAux;
				}
			}
		}
	});
var $author$project$LogicUS$PL$Resolution$csplSaturationResolution = function (cs) {
	return A2($author$project$LogicUS$PL$Resolution$csplSaturationResolutionAux, cs, _List_Nil);
};
var $author$project$LogicUS$PL$SyntaxSemantics$fplReadExtraction = function (_v0) {
	var fpl = _v0.a;
	return A2($elm$core$Maybe$withDefault, $author$project$LogicUS$PL$SyntaxSemantics$Insat, fpl);
};
var $author$project$LogicUS$PL$SyntaxSemantics$fplRead = A2($elm$core$Basics$composeL, $author$project$LogicUS$PL$SyntaxSemantics$fplReadExtraction, $author$project$LogicUS$PL$SyntaxSemantics$fplReadFromString);
var $author$project$LogicUS$PL$Resolution$resolutionProcessListToStringTable = function (hist) {
	return 'step; set of clauses \n' + A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$indexedMap,
			F2(
				function (i, cs) {
					return $elm$core$String$fromInt(i) + (';' + $author$project$LogicUS$PL$Clauses$csplToString(cs));
				}),
			hist));
};
var $author$project$PLAlgProcessors$processResolutionPL = F2(
	function (content, outputsCSPL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A4(
			$elm$json$Json$Decode$map3,
			F3(
				function (x, y, z) {
					return {choiceOrder: z, input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['choiceOrder']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var source = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(source.origin_id, source.origin_slot),
					outputsCSPL);
				if (_v2.$ === 'Just') {
					var cs = _v2.a;
					var _v3 = c.option;
					switch (_v3) {
						case 'saturation':
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$Resolution$resolutionProcessListToStringTable(
										$author$project$LogicUS$PL$Resolution$csplSaturationResolution(cs).b))
							};
						case 'regular':
							var symbols = $author$project$LogicUS$PL$Clauses$csplSymbols(cs);
							var choiceOrder = $elm$core$List$concat(
								A2(
									$elm$core$List$map,
									A2($elm$core$Basics$composeL, $author$project$LogicUS$PL$SyntaxSemantics$fplSymbols, $author$project$LogicUS$PL$SyntaxSemantics$fplRead),
									$elm_community$list_extra$List$Extra$unique(
										A2($elm$core$String$split, ',', c.choiceOrder))));
							return _Utils_eq(
								$elm$core$List$sort(choiceOrder),
								symbols) ? {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$Resolution$resolutionProcessListToStringTable(
										A2($author$project$LogicUS$PL$Resolution$csplRegularResolution, choiceOrder, cs).b))
							} : {
								errorCode: 6,
								message: $elm$json$Json$Encode$string('Invalid value for choice order (' + (c.option + ') for SPLTruthTable'))
							};
						default:
							return {
								errorCode: 4,
								message: $elm$json$Json$Encode$string('Unknown option (' + (c.option + ') for ResolutionPL'))
							};
					}
				} else {
					return {
						errorCode: 2,
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')'))))
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e))
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e))
			};
		}
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$IF = {$: 'IF'};
var $elm_community$graph$Graph$Tree$MkTree = F2(
	function (a, b) {
		return {$: 'MkTree', a: a, b: b};
	});
var $elm_community$graph$Graph$Tree$empty = A2($elm_community$graph$Graph$Tree$MkTree, 0, $elm$core$Maybe$Nothing);
var $author$project$LogicUS$FOL$SemanticTableauxEQ$A = {$: 'A'};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$B = {$: 'B'};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$D = {$: 'D'};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$DN = {$: 'DN'};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$E = {$: 'E'};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$G = {$: 'G'};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$I = {$: 'I'};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$L = {$: 'L'};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$NE = {$: 'NE'};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$T = {$: 'T'};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$ffolType = function (f) {
	switch (f.$) {
		case 'Pred':
			return $author$project$LogicUS$FOL$SemanticTableauxEQ$L;
		case 'Equal':
			return $author$project$LogicUS$FOL$SemanticTableauxEQ$E;
		case 'Conj':
			return $author$project$LogicUS$FOL$SemanticTableauxEQ$A;
		case 'Disj':
			return $author$project$LogicUS$FOL$SemanticTableauxEQ$B;
		case 'Impl':
			return $author$project$LogicUS$FOL$SemanticTableauxEQ$B;
		case 'Equi':
			return $author$project$LogicUS$FOL$SemanticTableauxEQ$A;
		case 'Exists':
			return $author$project$LogicUS$FOL$SemanticTableauxEQ$D;
		case 'Forall':
			return $author$project$LogicUS$FOL$SemanticTableauxEQ$G;
		case 'Taut':
			return $author$project$LogicUS$FOL$SemanticTableauxEQ$T;
		case 'Insat':
			return $author$project$LogicUS$FOL$SemanticTableauxEQ$I;
		default:
			switch (f.a.$) {
				case 'Neg':
					return $author$project$LogicUS$FOL$SemanticTableauxEQ$DN;
				case 'Pred':
					var _v1 = f.a;
					return $author$project$LogicUS$FOL$SemanticTableauxEQ$L;
				case 'Equal':
					var _v2 = f.a;
					return $author$project$LogicUS$FOL$SemanticTableauxEQ$NE;
				case 'Conj':
					var _v3 = f.a;
					return $author$project$LogicUS$FOL$SemanticTableauxEQ$B;
				case 'Disj':
					var _v4 = f.a;
					return $author$project$LogicUS$FOL$SemanticTableauxEQ$A;
				case 'Impl':
					var _v5 = f.a;
					return $author$project$LogicUS$FOL$SemanticTableauxEQ$A;
				case 'Equi':
					var _v6 = f.a;
					return $author$project$LogicUS$FOL$SemanticTableauxEQ$B;
				case 'Exists':
					var _v7 = f.a;
					return $author$project$LogicUS$FOL$SemanticTableauxEQ$G;
				case 'Forall':
					var _v8 = f.a;
					return $author$project$LogicUS$FOL$SemanticTableauxEQ$D;
				case 'Taut':
					var _v9 = f.a;
					return $author$project$LogicUS$FOL$SemanticTableauxEQ$I;
				default:
					var _v10 = f.a;
					return $author$project$LogicUS$FOL$SemanticTableauxEQ$T;
			}
	}
};
var $author$project$LogicUS$FOL$SyntaxSemantics$ffolUniversalClosure = function (f) {
	var openVars = A2(
		$elm$core$List$filter,
		function (v) {
			return A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolHasFreeInstanceOfVar, f, v);
		},
		$author$project$LogicUS$FOL$SyntaxSemantics$ffolVarSymbols(f));
	return $author$project$LogicUS$FOL$SyntaxSemantics$ffolRenameVars(
		A3(
			$elm$core$List$foldl,
			F2(
				function (x, ac) {
					return A2($author$project$LogicUS$FOL$SyntaxSemantics$Forall, x, ac);
				}),
			f,
			openVars));
};
var $elm_community$graph$Graph$Tree$isEmpty = function (tree) {
	return _Utils_eq(tree, $elm_community$graph$Graph$Tree$empty);
};
var $elm_community$graph$Graph$Tree$size = function (tree) {
	var n = tree.a;
	return n;
};
var $elm_community$graph$Graph$Tree$inner = F2(
	function (label, children) {
		var nonEmptyChildren = A2(
			$elm$core$List$filter,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm_community$graph$Graph$Tree$isEmpty),
			children);
		var totalSize = A3(
			$elm$core$List$foldl,
			A2($elm$core$Basics$composeL, $elm$core$Basics$add, $elm_community$graph$Graph$Tree$size),
			1,
			nonEmptyChildren);
		return A2(
			$elm_community$graph$Graph$Tree$MkTree,
			totalSize,
			$elm$core$Maybe$Just(
				_Utils_Tuple2(label, nonEmptyChildren)));
	});
var $elm_community$graph$Graph$Tree$root = function (tree) {
	var maybe = tree.b;
	return maybe;
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$translateID = F2(
	function (corresp, i) {
		return A2(
			$elm$core$Maybe$withDefault,
			i,
			A2($elm$core$Dict$get, i, corresp));
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$translateList = F2(
	function (corresp, l) {
		return A2(
			$elm$core$List$map,
			$author$project$LogicUS$FOL$SemanticTableauxEQ$translateID(corresp),
			l);
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$postProcessingSTEQ = F3(
	function (deep, corresp, tableau) {
		var _v0 = $elm_community$graph$Graph$Tree$root(tableau);
		if (_v0.$ === 'Nothing') {
			return _List_Nil;
		} else {
			var _v1 = _v0.a;
			var l = _v1.a;
			var ch = _v1.b;
			if (A2($elm$core$Dict$member, l.i, corresp)) {
				return $elm$core$List$concat(
					A2(
						$elm$core$List$map,
						A2($author$project$LogicUS$FOL$SemanticTableauxEQ$postProcessingSTEQ, deep, corresp),
						ch));
			} else {
				var newCorresp = A3($elm$core$Dict$insert, l.i, deep, corresp);
				var lsimp = A2($author$project$LogicUS$FOL$SemanticTableauxEQ$translateList, corresp, l.simp);
				var newl = {
					f: l.f,
					i: deep,
					p1: A2(
						$elm$core$Maybe$map,
						function (_v2) {
							var x = _v2.a;
							var y = _v2.b;
							return _Utils_Tuple2(
								A2($author$project$LogicUS$FOL$SemanticTableauxEQ$translateID, corresp, x),
								A2($author$project$LogicUS$FOL$SemanticTableauxEQ$translateList, corresp, y));
						},
						l.p1),
					p2: A2(
						$elm$core$Maybe$map,
						function (_v3) {
							var x = _v3.a;
							var y = _v3.b;
							return _Utils_Tuple2(
								A2($author$project$LogicUS$FOL$SemanticTableauxEQ$translateID, corresp, x),
								A2($author$project$LogicUS$FOL$SemanticTableauxEQ$translateList, corresp, y));
						},
						l.p2),
					r: l.r,
					simp: lsimp,
					subs: l.subs
				};
				return _List_fromArray(
					[
						A2(
						$elm_community$graph$Graph$Tree$inner,
						newl,
						$elm$core$List$concat(
							A2(
								$elm$core$List$map,
								A2($author$project$LogicUS$FOL$SemanticTableauxEQ$postProcessingSTEQ, deep + 1, newCorresp),
								ch)))
					]);
			}
		}
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$reduceDN = function (f) {
	reduceDN:
	while (true) {
		if ((f.$ === 'Neg') && (f.a.$ === 'Neg')) {
			var g = f.a.a;
			var $temp$f = g;
			f = $temp$f;
			continue reduceDN;
		} else {
			return f;
		}
	}
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$AR = {$: 'AR'};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$BR = {$: 'BR'};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$DR = {$: 'DR'};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$GR = {$: 'GR'};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$LL = {$: 'LL'};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$OL = {$: 'OL'};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$UE = {$: 'UE'};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$checkGoals = function (goals) {
	var _v0 = A2(
		$elm$core$List$filter,
		function (e) {
			return $elm$core$List$isEmpty(e.b.subgoals);
		},
		$elm$core$Dict$toList(goals));
	if (_v0.b) {
		var x = _v0.a;
		return $elm$core$Maybe$Just(
			{
				f1: A2($elm$core$Basics$composeL, $elm$core$Tuple$first, $elm$core$Tuple$first)(x),
				f2: A2($elm$core$Basics$composeL, $elm$core$Tuple$second, $elm$core$Tuple$first)(x),
				substitutions: x.b.substitutions
			});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$chooseAlpha = function (nodes) {
	return $elm$core$List$head(
		A2(
			$elm$core$List$filter,
			function (_v0) {
				var x = _v0.b;
				return _Utils_eq(x.t, $author$project$LogicUS$FOL$SemanticTableauxEQ$A) && (!x.u);
			},
			$elm$core$Dict$toList(nodes)));
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$chooseBeta = function (nodes) {
	return $elm$core$List$head(
		A2(
			$elm$core$List$filter,
			function (_v0) {
				var x = _v0.b;
				return _Utils_eq(x.t, $author$project$LogicUS$FOL$SemanticTableauxEQ$B) && (!x.u);
			},
			$elm$core$Dict$toList(nodes)));
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$chooseDelta = function (nodes) {
	return $elm$core$List$head(
		A2(
			$elm$core$List$filter,
			function (_v0) {
				var x = _v0.b;
				return _Utils_eq(x.t, $author$project$LogicUS$FOL$SemanticTableauxEQ$D) && (!x.u);
			},
			$elm$core$Dict$toList(nodes)));
};
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$termConstCount = function (t) {
	if (t.$ === 'Var') {
		return 0;
	} else {
		if (!t.b.b) {
			return 1;
		} else {
			var ts = t.b;
			return $elm$core$List$sum(
				A2($elm$core$List$map, $author$project$LogicUS$FOL$SemanticTableauxEQ$termConstCount, ts));
		}
	}
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$termFuncCount = function (t) {
	if (t.$ === 'Var') {
		return 0;
	} else {
		if (!t.b.b) {
			return 0;
		} else {
			var ts = t.b;
			return 1 + $elm$core$List$sum(
				A2($elm$core$List$map, $author$project$LogicUS$FOL$SemanticTableauxEQ$termFuncCount, ts));
		}
	}
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$termVarCount = function (t) {
	if (t.$ === 'Var') {
		return 1;
	} else {
		var ts = t.b;
		return $elm$core$List$sum(
			A2($elm$core$List$map, $author$project$LogicUS$FOL$SemanticTableauxEQ$termVarCount, ts));
	}
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$compareTerms = F2(
	function (t1, t2) {
		var t2V = $author$project$LogicUS$FOL$SemanticTableauxEQ$termVarCount(t2);
		var t2F = $author$project$LogicUS$FOL$SemanticTableauxEQ$termFuncCount(t2);
		var t2C = $author$project$LogicUS$FOL$SemanticTableauxEQ$termConstCount(t2);
		var t1V = $author$project$LogicUS$FOL$SemanticTableauxEQ$termVarCount(t1);
		var t1F = $author$project$LogicUS$FOL$SemanticTableauxEQ$termFuncCount(t1);
		var t1C = $author$project$LogicUS$FOL$SemanticTableauxEQ$termConstCount(t1);
		return ((_Utils_cmp(t1V, t2V) < 0) || ((_Utils_eq(t1V, t2V) && (_Utils_cmp(t1C, t2C) < 0)) || (_Utils_eq(t1V, t2V) && (_Utils_eq(t1C, t2C) && (_Utils_cmp(t1F, t2F) < 0))))) ? $elm$core$Basics$LT : ((_Utils_eq(t1V, t2V) && (_Utils_eq(t1C, t2C) && _Utils_eq(t1F, t2F))) ? A2(
			$elm$core$Basics$compare,
			$author$project$LogicUS$FOL$SyntaxSemantics$termToString(t1),
			$author$project$LogicUS$FOL$SyntaxSemantics$termToString(t2)) : $elm$core$Basics$GT);
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$termIsClosed = function (t) {
	return A2($elm$core$Basics$composeL, $elm$core$List$isEmpty, $author$project$LogicUS$FOL$SyntaxSemantics$termVarSymbols)(t);
};
var $author$project$LogicUS$FOL$SyntaxSemantics$termClosedTerms = function (t) {
	if (t.$ === 'Var') {
		return _List_Nil;
	} else {
		if (!t.b.b) {
			return _List_fromArray(
				[t]);
		} else {
			var ts = t.b;
			return A2(
				$author$project$LogicUS$FOL$AuxiliarFuctions$uniqueConcatList,
				_List_Nil,
				_Utils_ap(
					$elm$core$List$concat(
						A2($elm$core$List$map, $author$project$LogicUS$FOL$SyntaxSemantics$termClosedTerms, ts)),
					$author$project$LogicUS$FOL$SyntaxSemantics$termIsClosed(t) ? _List_fromArray(
						[t]) : _List_Nil));
		}
	}
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$compareEqualities = F2(
	function (_v0, _v1) {
		var t11 = _v0.a;
		var t12 = _v0.b;
		var t21 = _v1.a;
		var t22 = _v1.b;
		return _Utils_eq(t11, t21) ? A2($author$project$LogicUS$FOL$SemanticTableauxEQ$compareTerms, t12, t22) : (A2(
			$elm$core$List$member,
			t11,
			_Utils_ap(
				$author$project$LogicUS$FOL$SyntaxSemantics$termClosedTerms(t21),
				$author$project$LogicUS$FOL$SyntaxSemantics$termClosedTerms(t22))) ? $elm$core$Basics$LT : (A2(
			$elm$core$List$member,
			t21,
			_Utils_ap(
				$author$project$LogicUS$FOL$SyntaxSemantics$termClosedTerms(t11),
				$author$project$LogicUS$FOL$SyntaxSemantics$termClosedTerms(t12))) ? $elm$core$Basics$GT : A2($author$project$LogicUS$FOL$SemanticTableauxEQ$compareTerms, t11, t21)));
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$extractEQNEQTerms = function (f) {
	_v0$2:
	while (true) {
		switch (f.$) {
			case 'Equal':
				var t1 = f.a;
				var t2 = f.b;
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(t1, t2));
			case 'Neg':
				if (f.a.$ === 'Equal') {
					var _v1 = f.a;
					var t1 = _v1.a;
					var t2 = _v1.b;
					return $elm$core$Maybe$Just(
						_Utils_Tuple2(t1, t2));
				} else {
					break _v0$2;
				}
			default:
				break _v0$2;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$chooseEquality = function (nodes) {
	return $elm$core$List$head(
		A2(
			$elm$core$List$sortWith,
			F2(
				function (_v0, _v1) {
					var x1 = _v0.b;
					var x2 = _v1.b;
					return A2(
						$author$project$LogicUS$FOL$SemanticTableauxEQ$compareEqualities,
						A2(
							$elm$core$Maybe$withDefault,
							_Utils_Tuple2(
								$author$project$LogicUS$FOL$SyntaxSemantics$Var(
									_Utils_Tuple3('Err', _List_Nil, -1)),
								$author$project$LogicUS$FOL$SyntaxSemantics$Var(
									_Utils_Tuple3('Err', _List_Nil, -1))),
							$author$project$LogicUS$FOL$SemanticTableauxEQ$extractEQNEQTerms(x1.f)),
						A2(
							$elm$core$Maybe$withDefault,
							_Utils_Tuple2(
								$author$project$LogicUS$FOL$SyntaxSemantics$Var(
									_Utils_Tuple3('Err', _List_Nil, -1)),
								$author$project$LogicUS$FOL$SyntaxSemantics$Var(
									_Utils_Tuple3('Err', _List_Nil, -1))),
							$author$project$LogicUS$FOL$SemanticTableauxEQ$extractEQNEQTerms(x2.f)));
				}),
			A2(
				$elm$core$List$filter,
				function (_v2) {
					var x = _v2.b;
					return _Utils_eq(x.t, $author$project$LogicUS$FOL$SemanticTableauxEQ$E) && (!x.u);
				},
				$elm$core$Dict$toList(nodes))));
};
var $author$project$LogicUS$FOL$AuxiliarFuctions$listRemoveAll = F2(
	function (l1, l2) {
		return A2(
			$elm$core$List$filter,
			function (x) {
				return !A2($elm$core$List$member, x, l2);
			},
			l1);
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$chooseGamma = F2(
	function (universe, nodes) {
		return $elm_community$list_extra$List$Extra$last(
			A2(
				$elm$core$List$sortBy,
				function (_v0) {
					var unt = _v0.c;
					return $elm$core$List$length(unt);
				},
				A2(
					$elm$core$List$filter,
					function (_v1) {
						var unt = _v1.c;
						return A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$List$isEmpty)(unt);
					},
					A2(
						$elm$core$List$map,
						function (_v2) {
							var i = _v2.a;
							var ni = _v2.b;
							return _Utils_Tuple3(
								i,
								ni,
								A2($author$project$LogicUS$FOL$AuxiliarFuctions$listRemoveAll, universe, ni.ut));
						},
						A2(
							$elm$core$List$filter,
							function (_v3) {
								var ni = _v3.b;
								return _Utils_eq(ni.t, $author$project$LogicUS$FOL$SemanticTableauxEQ$G);
							},
							$elm$core$Dict$toList(nodes))))));
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$chooseInequality = function (nodes) {
	return $elm$core$List$head(
		A2(
			$elm$core$List$filter,
			function (_v0) {
				var x = _v0.b;
				return _Utils_eq(x.t, $author$project$LogicUS$FOL$SemanticTableauxEQ$NE) && (!x.u);
			},
			$elm$core$Dict$toList(nodes)));
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$chooseLiteral = function (nodes) {
	return $elm$core$List$head(
		A2(
			$elm$core$List$filter,
			function (_v0) {
				var x = _v0.b;
				return _Utils_eq(x.t, $author$project$LogicUS$FOL$SemanticTableauxEQ$L) && (!x.u);
			},
			$elm$core$Dict$toList(nodes)));
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$IR = {$: 'IR'};
var $elm_community$graph$Graph$Tree$leaf = function (val) {
	return A2($elm_community$graph$Graph$Tree$inner, val, _List_Nil);
};
var $elm_community$maybe_extra$Maybe$Extra$cons = F2(
	function (item, list) {
		if (item.$ === 'Just') {
			var v = item.a;
			return A2($elm$core$List$cons, v, list);
		} else {
			return list;
		}
	});
var $elm_community$maybe_extra$Maybe$Extra$values = A2($elm$core$List$foldr, $elm_community$maybe_extra$Maybe$Extra$cons, _List_Nil);
var $author$project$LogicUS$FOL$SemanticTableauxEQ$recoverPathFromNode = F2(
	function (nodes, _final) {
		var _v0 = A2($elm$core$Dict$get, _final, nodes);
		if (_v0.$ === 'Just') {
			var v = _v0.a;
			return _Utils_ap(
				$elm_community$list_extra$List$Extra$unique(
					$elm$core$List$concat(
						A2(
							$elm$core$List$map,
							$author$project$LogicUS$FOL$SemanticTableauxEQ$recoverPathFromNode(nodes),
							$elm_community$list_extra$List$Extra$unique(
								_Utils_ap(
									v.simp,
									A2(
										$elm$core$List$map,
										$elm$core$Tuple$first,
										$elm_community$maybe_extra$Maybe$Extra$values(
											_List_fromArray(
												[v.p1, v.p2])))))))),
				_List_fromArray(
					[_final]));
		} else {
			return _List_Nil;
		}
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$closeBranch = F3(
	function (inconsistence, deep, nodes) {
		return _Utils_Tuple2(
			$elm_community$graph$Graph$Tree$leaf(
				{
					f: $author$project$LogicUS$FOL$SyntaxSemantics$Insat,
					i: deep,
					p1: $elm$core$Maybe$Just(
						_Utils_Tuple2(inconsistence.f1, inconsistence.substitutions.a)),
					p2: _Utils_eq(inconsistence.f1, inconsistence.f2) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
						_Utils_Tuple2(inconsistence.f2, inconsistence.substitutions.b)),
					r: $author$project$LogicUS$FOL$SemanticTableauxEQ$IR,
					simp: _List_Nil,
					subs: $elm$core$Maybe$Nothing,
					t: $author$project$LogicUS$FOL$SemanticTableauxEQ$I,
					u: 0,
					ut: _List_Nil
				}),
			$elm_community$list_extra$List$Extra$unique(
				$elm$core$List$concat(
					A2(
						$elm$core$List$map,
						$author$project$LogicUS$FOL$SemanticTableauxEQ$recoverPathFromNode(nodes),
						$elm_community$list_extra$List$Extra$unique(
							_Utils_ap(
								_List_fromArray(
									[inconsistence.f1, inconsistence.f2]),
								_Utils_ap(inconsistence.substitutions.a, inconsistence.substitutions.b)))))));
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$extractElemsLiteral = function (f) {
	_v0$2:
	while (true) {
		switch (f.$) {
			case 'Pred':
				var ps = f.a;
				var pargs = f.b;
				return $elm$core$Maybe$Just(
					_Utils_Tuple3(true, ps, pargs));
			case 'Neg':
				if (f.a.$ === 'Pred') {
					var _v1 = f.a;
					var ps = _v1.a;
					var pargs = _v1.b;
					return $elm$core$Maybe$Just(
						_Utils_Tuple3(false, ps, pargs));
				} else {
					break _v0$2;
				}
			default:
				break _v0$2;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$getAComponents = function (f) {
	_v0$4:
	while (true) {
		switch (f.$) {
			case 'Conj':
				var g = f.a;
				var h = f.b;
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(g, h));
			case 'Neg':
				switch (f.a.$) {
					case 'Disj':
						var _v1 = f.a;
						var g = _v1.a;
						var h = _v1.b;
						return $elm$core$Maybe$Just(
							_Utils_Tuple2(
								$author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation(g),
								$author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation(h)));
					case 'Impl':
						var _v2 = f.a;
						var g = _v2.a;
						var h = _v2.b;
						return $elm$core$Maybe$Just(
							_Utils_Tuple2(
								g,
								$author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation(h)));
					default:
						break _v0$4;
				}
			case 'Equi':
				var g = f.a;
				var h = f.b;
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(
						A2($author$project$LogicUS$FOL$SyntaxSemantics$Impl, g, h),
						A2($author$project$LogicUS$FOL$SyntaxSemantics$Impl, h, g)));
			default:
				break _v0$4;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$getBComponents = function (f) {
	_v0$4:
	while (true) {
		switch (f.$) {
			case 'Disj':
				var g = f.a;
				var h = f.b;
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(g, h));
			case 'Impl':
				var g = f.a;
				var h = f.b;
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(
						$author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation(g),
						h));
			case 'Neg':
				switch (f.a.$) {
					case 'Conj':
						var _v1 = f.a;
						var g = _v1.a;
						var h = _v1.b;
						return $elm$core$Maybe$Just(
							_Utils_Tuple2(
								$author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation(g),
								$author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation(h)));
					case 'Equi':
						var _v2 = f.a;
						var g = _v2.a;
						var h = _v2.b;
						return $elm$core$Maybe$Just(
							_Utils_Tuple2(
								$author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation(
									A2($author$project$LogicUS$FOL$SyntaxSemantics$Impl, g, h)),
								$author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation(
									A2($author$project$LogicUS$FOL$SyntaxSemantics$Impl, h, g))));
					default:
						break _v0$4;
				}
			default:
				break _v0$4;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$getDGVarComponent = function (f) {
	_v0$4:
	while (true) {
		switch (f.$) {
			case 'Forall':
				var v = f.a;
				var g = f.b;
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(v, g));
			case 'Exists':
				var v = f.a;
				var g = f.b;
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(v, g));
			case 'Neg':
				switch (f.a.$) {
					case 'Forall':
						var _v1 = f.a;
						var v = _v1.a;
						var g = _v1.b;
						return $elm$core$Maybe$Just(
							_Utils_Tuple2(
								v,
								$author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation(g)));
					case 'Exists':
						var _v2 = f.a;
						var v = _v2.a;
						var g = _v2.b;
						return $elm$core$Maybe$Just(
							_Utils_Tuple2(
								v,
								$author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation(g)));
					default:
						break _v0$4;
				}
			default:
				break _v0$4;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$groundTermSize = function (t) {
	if (t.$ === 'Var') {
		return $elm$core$Maybe$Nothing;
	} else {
		var ts = t.b;
		var tsSizes = A2($elm$core$List$map, $author$project$LogicUS$FOL$SemanticTableauxEQ$groundTermSize, ts);
		return A2($elm$core$List$member, $elm$core$Maybe$Nothing, tsSizes) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
			1 + A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$List$maximum(
					$elm_community$maybe_extra$Maybe$Extra$values(tsSizes))));
	}
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$insertInUniverse = F2(
	function (universe, t) {
		var _v0 = A2(
			$elm$core$List$partition,
			function (e) {
				return _Utils_eq(
					A2($author$project$LogicUS$FOL$SemanticTableauxEQ$compareTerms, e, t),
					$elm$core$Basics$LT);
			},
			universe);
		var lts = _v0.a;
		var gts = _v0.b;
		var _v1 = A2(
			$elm$core$Maybe$map,
			function (e) {
				return _Utils_eq(
					A2($author$project$LogicUS$FOL$SemanticTableauxEQ$compareTerms, e, t),
					$elm$core$Basics$EQ);
			},
			$elm$core$List$head(gts));
		if ((_v1.$ === 'Just') && _v1.a) {
			return universe;
		} else {
			return _Utils_ap(
				lts,
				A2($elm$core$List$cons, t, gts));
		}
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$removeSubsumedGoals = function (goals) {
	var subsumesList = F2(
		function (l1, l2) {
			return A2(
				$elm$core$List$all,
				function (x) {
					return A2($elm$core$List$member, x, l2);
				},
				l1);
		});
	var goalList = A2(
		$elm$core$List$sortBy,
		function (e) {
			return $elm$core$List$length(e.b.subgoals);
		},
		$elm$core$Dict$toList(goals));
	return $elm$core$Dict$fromList(
		A3(
			$elm$core$List$foldl,
			F2(
				function (e, _v0) {
					var ac1 = _v0.a;
					var ac2 = _v0.b;
					var xs = e.b.subgoals;
					return A2(
						$elm$core$List$any,
						function (ys) {
							return A2(subsumesList, ys, xs);
						},
						ac2) ? _Utils_Tuple2(ac1, ac2) : _Utils_Tuple2(
						_Utils_ap(
							ac1,
							_List_fromArray(
								[e])),
						_Utils_ap(
							ac2,
							_List_fromArray(
								[xs])));
				}),
			_Utils_Tuple2(_List_Nil, _List_Nil),
			goalList).a);
};
var $elm$core$List$unzip = function (pairs) {
	var step = F2(
		function (_v0, _v1) {
			var x = _v0.a;
			var y = _v0.b;
			var xs = _v1.a;
			var ys = _v1.b;
			return _Utils_Tuple2(
				A2($elm$core$List$cons, x, xs),
				A2($elm$core$List$cons, y, ys));
		});
	return A3(
		$elm$core$List$foldr,
		step,
		_Utils_Tuple2(_List_Nil, _List_Nil),
		pairs);
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyTermWithEq = F2(
	function (_v1, t) {
		var lhs = _v1.a;
		var rhs = _v1.b;
		if (_Utils_eq(t, lhs)) {
			return _Utils_Tuple2(rhs, true);
		} else {
			if ((t.$ === 'Func') && t.b.b) {
				var f = t.a;
				var _v3 = t.b;
				var t1 = _v3.a;
				var ts = _v3.b;
				return function (_v4) {
					var ts_ = _v4.a;
					var isSimp = _v4.b;
					return _Utils_Tuple2(
						A2($author$project$LogicUS$FOL$SyntaxSemantics$Func, f, ts_),
						isSimp);
				}(
					A2(
						$author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyTermsWithEq,
						_Utils_Tuple2(lhs, rhs),
						A2($elm$core$List$cons, t1, ts)));
			} else {
				return _Utils_Tuple2(t, false);
			}
		}
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyTermsWithEq = F2(
	function (eq, ts) {
		return function (_v0) {
			var xs = _v0.a;
			var bools = _v0.b;
			return _Utils_Tuple2(
				xs,
				A2($elm$core$List$any, $elm$core$Basics$identity, bools));
		}(
			$elm$core$List$unzip(
				A2(
					$elm$core$List$map,
					$author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyTermWithEq(eq),
					ts)));
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyTermsWithEqsAux = F2(
	function (eqs, ts) {
		simplifyTermsWithEqsAux:
		while (true) {
			if (eqs.b) {
				var _v1 = eqs.a;
				var id = _v1.a;
				var eq = _v1.b;
				var xs = eqs.b;
				var _v2 = A2($author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyTermsWithEq, eq, ts);
				if (_v2.b) {
					var ts_ = _v2.a;
					return $elm$core$Maybe$Just(
						_Utils_Tuple2(ts_, id));
				} else {
					var $temp$eqs = xs,
						$temp$ts = ts;
					eqs = $temp$eqs;
					ts = $temp$ts;
					continue simplifyTermsWithEqsAux;
				}
			} else {
				return $elm$core$Maybe$Nothing;
			}
		}
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyTermsWithEqs = F3(
	function (eqs, ts, simps) {
		simplifyTermsWithEqs:
		while (true) {
			var _v0 = A2(
				$author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyTermsWithEqsAux,
				$elm$core$Dict$toList(eqs),
				ts);
			if (_v0.$ === 'Just') {
				var _v1 = _v0.a;
				var ts_ = _v1.a;
				var id = _v1.b;
				var $temp$eqs = eqs,
					$temp$ts = ts_,
					$temp$simps = A2($elm$core$List$cons, id, simps);
				eqs = $temp$eqs;
				ts = $temp$ts;
				simps = $temp$simps;
				continue simplifyTermsWithEqs;
			} else {
				return _Utils_Tuple2(ts, simps);
			}
		}
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyEqualityWithEqs = F2(
	function (_v0, equalities) {
		var t1 = _v0.a;
		var t2 = _v0.b;
		var simp = _v0.c;
		var _v1 = A3(
			$author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyTermsWithEqs,
			equalities,
			_List_fromArray(
				[t1, t2]),
			simp);
		var ts_ = _v1.a;
		var subs = _v1.b;
		var _v2 = function () {
			if ((ts_.b && ts_.b.b) && (!ts_.b.b.b)) {
				var a = ts_.a;
				var _v4 = ts_.b;
				var b = _v4.a;
				return _Utils_Tuple2(a, b);
			} else {
				return _Utils_Tuple2(t1, t2);
			}
		}();
		var t1_ = _v2.a;
		var t2_ = _v2.b;
		var _v5 = A2($author$project$LogicUS$FOL$SemanticTableauxEQ$compareTerms, t1_, t2_);
		if (_v5.$ === 'LT') {
			return _Utils_Tuple3(t2_, t1_, subs);
		} else {
			return _Utils_Tuple3(t1_, t2_, subs);
		}
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$termsClosedTerms = function (ts) {
	return $elm_community$list_extra$List$Extra$unique(
		$elm$core$List$concat(
			A2($elm$core$List$map, $author$project$LogicUS$FOL$SyntaxSemantics$termClosedTerms, ts)));
};
var $author$project$LogicUS$FOL$SemanticTableauxEQ$updateGoalWithEqs = F3(
	function (_v0, g, equalities) {
		var i1 = _v0.a;
		var i2 = _v0.b;
		if (_Utils_eq(i1, i2)) {
			var terms_ = A3(
				$author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyTermsWithEqs,
				equalities,
				A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					A2(
						$elm$core$Maybe$map,
						function (_v4) {
							var t1 = _v4.a;
							var t2 = _v4.b;
							return _List_fromArray(
								[t1, t2]);
						},
						$elm$core$List$head(g.subgoals))),
				g.substitutions.a);
			var subgoals = function () {
				if ((terms_.a.b && terms_.a.b.b) && (!terms_.a.b.b.b)) {
					var _v2 = terms_.a;
					var t1_ = _v2.a;
					var _v3 = _v2.b;
					var t2_ = _v3.a;
					return (!_Utils_eq(t1_, t2_)) ? _List_fromArray(
						[
							_Utils_Tuple2(t1_, t2_)
						]) : _List_Nil;
				} else {
					return _List_Nil;
				}
			}();
			var lhs_rhs_subs = terms_.b;
			return {
				subgoals: subgoals,
				substitutions: _Utils_Tuple2(lhs_rhs_subs, lhs_rhs_subs)
			};
		} else {
			var _v5 = A3(
				$author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyTermsWithEqs,
				equalities,
				A2($elm$core$List$map, $elm$core$Tuple$second, g.subgoals),
				g.substitutions.b);
			var rhs_subgoals = _v5.a;
			var rhs_subs = _v5.b;
			var _v6 = A3(
				$author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyTermsWithEqs,
				equalities,
				A2($elm$core$List$map, $elm$core$Tuple$first, g.subgoals),
				g.substitutions.a);
			var lhs_subgoals = _v6.a;
			var lhs_subs = _v6.b;
			return {
				subgoals: A2(
					$elm$core$List$filter,
					function (_v7) {
						var x = _v7.a;
						var y = _v7.b;
						return !_Utils_eq(x, y);
					},
					A3($elm$core$List$map2, $elm$core$Tuple$pair, lhs_subgoals, rhs_subgoals)),
				substitutions: _Utils_Tuple2(lhs_subs, rhs_subs)
			};
		}
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$updateGoalsWithEqs = F2(
	function (goals, equalities) {
		return A2(
			$elm$core$Dict$map,
			F2(
				function (_v0, g) {
					var i1 = _v0.a;
					var i2 = _v0.b;
					return A3(
						$author$project$LogicUS$FOL$SemanticTableauxEQ$updateGoalWithEqs,
						_Utils_Tuple2(i1, i2),
						g,
						equalities);
				}),
			goals);
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyTermWithEqs = F2(
	function (eqs, t) {
		return function (_v0) {
			var ts_ = _v0.a;
			var simps = _v0.b;
			return _Utils_Tuple2(
				A2(
					$elm$core$Maybe$withDefault,
					t,
					$elm$core$List$head(ts_)),
				simps);
		}(
			A3(
				$author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyTermsWithEqs,
				eqs,
				_List_fromArray(
					[t]),
				_List_Nil));
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$updateUniverseWithEqs = F2(
	function (universe, equalities) {
		return $elm_community$list_extra$List$Extra$unique(
			A2(
				$elm$core$List$sortWith,
				$author$project$LogicUS$FOL$SemanticTableauxEQ$compareTerms,
				A2(
					$elm$core$List$map,
					function (u) {
						return A2($author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyTermWithEqs, equalities, u).a;
					},
					universe)));
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$processAlpha = F9(
	function (_v64, deep, generatedConstants, maxConstants, maxSize, universe, nodes, equalities, goals) {
		var i = _v64.a;
		var ni = _v64.b;
		var _v65 = $elm$core$List$head(
			A2(
				$elm$core$List$filter,
				function (_v66) {
					var n = _v66.b;
					return (n.u === 1) && _Utils_eq(
						n.f,
						$author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation(ni.f));
				},
				$elm$core$Dict$toList(nodes)));
		if (_v65.$ === 'Just') {
			var _v67 = _v65.a;
			var j = _v67.a;
			return A3(
				$author$project$LogicUS$FOL$SemanticTableauxEQ$closeBranch,
				{
					f1: j,
					f2: i,
					substitutions: _Utils_Tuple2(_List_Nil, _List_Nil)
				},
				deep,
				nodes);
		} else {
			var relabelNi = _Utils_update(
				ni,
				{u: 1});
			var _v68 = A2(
				$elm$core$Maybe$withDefault,
				_Utils_Tuple2($author$project$LogicUS$FOL$SyntaxSemantics$Insat, $author$project$LogicUS$FOL$SyntaxSemantics$Insat),
				$author$project$LogicUS$FOL$SemanticTableauxEQ$getAComponents(ni.f));
			var f1 = _v68.a;
			var f2 = _v68.b;
			var newNodes = A2(
				$elm$core$Dict$union,
				A3($elm$core$Dict$insert, i, relabelNi, nodes),
				$elm$core$Dict$fromList(
					_List_fromArray(
						[
							_Utils_Tuple2(
							deep,
							{
								f: f1,
								i: deep,
								p1: $elm$core$Maybe$Just(
									_Utils_Tuple2(i, _List_Nil)),
								p2: $elm$core$Maybe$Nothing,
								r: $author$project$LogicUS$FOL$SemanticTableauxEQ$AR,
								simp: _List_Nil,
								subs: $elm$core$Maybe$Nothing,
								t: $author$project$LogicUS$FOL$SemanticTableauxEQ$ffolType(f1),
								u: 0,
								ut: _List_Nil
							}),
							_Utils_Tuple2(
							deep + 1,
							{
								f: f2,
								i: deep + 1,
								p1: $elm$core$Maybe$Just(
									_Utils_Tuple2(i, _List_Nil)),
								p2: $elm$core$Maybe$Nothing,
								r: $author$project$LogicUS$FOL$SemanticTableauxEQ$AR,
								simp: _List_Nil,
								subs: $elm$core$Maybe$Nothing,
								t: $author$project$LogicUS$FOL$SemanticTableauxEQ$ffolType(f2),
								u: 0,
								ut: _List_Nil
							})
						])));
			var _v69 = A8($author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauEqAux, deep + 2, generatedConstants, maxConstants, maxSize, universe, newNodes, equalities, goals);
			var subtree = _v69.a;
			var inconsPath = _v69.b;
			return (A2($elm$core$List$member, i, inconsPath) || _Utils_eq(inconsPath, _List_Nil)) ? _Utils_Tuple2(
				A2(
					$elm_community$graph$Graph$Tree$inner,
					relabelNi,
					_List_fromArray(
						[subtree])),
				inconsPath) : _Utils_Tuple2(subtree, inconsPath);
		}
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$processBeta = F9(
	function (_v57, deep, generatedConstants, maxConstants, maxSize, universe, nodes, equalities, goals) {
		var i = _v57.a;
		var ni = _v57.b;
		var _v58 = $elm$core$List$head(
			A2(
				$elm$core$List$filter,
				function (_v59) {
					var n = _v59.b;
					return (n.u === 1) && _Utils_eq(
						n.f,
						$author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation(ni.f));
				},
				$elm$core$Dict$toList(nodes)));
		if (_v58.$ === 'Just') {
			var _v60 = _v58.a;
			var j = _v60.a;
			return A3(
				$author$project$LogicUS$FOL$SemanticTableauxEQ$closeBranch,
				{
					f1: j,
					f2: i,
					substitutions: _Utils_Tuple2(_List_Nil, _List_Nil)
				},
				deep,
				nodes);
		} else {
			var _v61 = A2(
				$elm$core$Maybe$withDefault,
				_Utils_Tuple2($author$project$LogicUS$FOL$SyntaxSemantics$Insat, $author$project$LogicUS$FOL$SyntaxSemantics$Insat),
				$author$project$LogicUS$FOL$SemanticTableauxEQ$getBComponents(ni.f));
			var f1 = _v61.a;
			var f2 = _v61.b;
			var relabelNi = _Utils_update(
				ni,
				{u: 1});
			var newNodes1 = A3(
				$elm$core$Dict$insert,
				i,
				relabelNi,
				A3(
					$elm$core$Dict$insert,
					deep,
					{
						f: f1,
						i: deep,
						p1: $elm$core$Maybe$Just(
							_Utils_Tuple2(i, _List_Nil)),
						p2: $elm$core$Maybe$Nothing,
						r: $author$project$LogicUS$FOL$SemanticTableauxEQ$BR,
						simp: _List_Nil,
						subs: $elm$core$Maybe$Nothing,
						t: $author$project$LogicUS$FOL$SemanticTableauxEQ$ffolType(f1),
						u: 0,
						ut: _List_Nil
					},
					nodes));
			var _v62 = A8($author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauEqAux, deep + 1, generatedConstants, maxConstants, maxSize, universe, newNodes1, equalities, goals);
			var subtree = _v62.a;
			var inconsPath = _v62.b;
			if (_Utils_eq(inconsPath, _List_Nil)) {
				var subtree2 = $elm_community$graph$Graph$Tree$leaf(
					{f: $author$project$LogicUS$FOL$SyntaxSemantics$Taut, i: deep, p1: $elm$core$Maybe$Nothing, p2: $elm$core$Maybe$Nothing, r: $author$project$LogicUS$FOL$SemanticTableauxEQ$UE, simp: _List_Nil, subs: $elm$core$Maybe$Nothing, t: $author$project$LogicUS$FOL$SemanticTableauxEQ$T, u: 0, ut: _List_Nil});
				return _Utils_Tuple2(
					A2(
						$elm_community$graph$Graph$Tree$inner,
						relabelNi,
						_List_fromArray(
							[subtree, subtree2])),
					_List_Nil);
			} else {
				if (A2($elm$core$List$member, i, inconsPath)) {
					var newNodes2 = A3(
						$elm$core$Dict$insert,
						deep + 1,
						{
							f: f2,
							i: deep + 1,
							p1: $elm$core$Maybe$Just(
								_Utils_Tuple2(i, _List_Nil)),
							p2: $elm$core$Maybe$Nothing,
							r: $author$project$LogicUS$FOL$SemanticTableauxEQ$BR,
							simp: _List_Nil,
							subs: $elm$core$Maybe$Nothing,
							t: $author$project$LogicUS$FOL$SemanticTableauxEQ$ffolType(f2),
							u: 0,
							ut: _List_Nil
						},
						A3(
							$elm$core$Dict$insert,
							deep,
							{
								f: $author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation(f1),
								i: deep,
								p1: $elm$core$Maybe$Just(
									_Utils_Tuple2(i, _List_Nil)),
								p2: $elm$core$Maybe$Nothing,
								r: $author$project$LogicUS$FOL$SemanticTableauxEQ$BR,
								simp: _List_Nil,
								subs: $elm$core$Maybe$Nothing,
								t: $author$project$LogicUS$FOL$SemanticTableauxEQ$ffolType(
									$author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation(f1)),
								u: 0,
								ut: _List_Nil
							},
							A3($elm$core$Dict$insert, i, relabelNi, nodes)));
					var _v63 = A8($author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauEqAux, deep + 2, generatedConstants, maxConstants, maxSize, universe, newNodes2, equalities, goals);
					var subtree2 = _v63.a;
					var inconsPath2 = _v63.b;
					return _Utils_eq(inconsPath2, _List_Nil) ? _Utils_Tuple2(
						A2(
							$elm_community$graph$Graph$Tree$inner,
							relabelNi,
							_List_fromArray(
								[subtree, subtree2])),
						_List_Nil) : (A2($elm$core$List$member, i, inconsPath2) ? _Utils_Tuple2(
						A2(
							$elm_community$graph$Graph$Tree$inner,
							relabelNi,
							_List_fromArray(
								[subtree, subtree2])),
						$elm_community$list_extra$List$Extra$unique(
							_Utils_ap(inconsPath, inconsPath2))) : _Utils_Tuple2(subtree2, inconsPath2));
				} else {
					return _Utils_Tuple2(subtree, inconsPath);
				}
			}
		}
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$processDelta = F9(
	function (_v51, deep, generatedConstants, maxConstants, maxSize, universe, nodes, equalities, goals) {
		var i = _v51.a;
		var ni = _v51.b;
		var _v52 = $elm$core$List$head(
			A2(
				$elm$core$List$filter,
				function (_v53) {
					var n = _v53.b;
					return (n.u === 1) && _Utils_eq(
						n.f,
						$author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation(ni.f));
				},
				$elm$core$Dict$toList(nodes)));
		if (_v52.$ === 'Just') {
			var _v54 = _v52.a;
			var j = _v54.a;
			return A3(
				$author$project$LogicUS$FOL$SemanticTableauxEQ$closeBranch,
				{
					f1: j,
					f2: i,
					substitutions: _Utils_Tuple2(_List_Nil, _List_Nil)
				},
				deep,
				nodes);
		} else {
			var newC = A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Func,
				_Utils_Tuple2(
					'κ',
					_List_fromArray(
						[generatedConstants])),
				_List_Nil);
			var _v55 = A2(
				$elm$core$Maybe$withDefault,
				_Utils_Tuple2(
					_Utils_Tuple3('Err', _List_Nil, -1),
					$author$project$LogicUS$FOL$SyntaxSemantics$Insat),
				$author$project$LogicUS$FOL$SemanticTableauxEQ$getDGVarComponent(ni.f));
			var v = _v55.a;
			var g = _v55.b;
			var relabelNi = _Utils_update(
				ni,
				{u: 1});
			var newF = $author$project$LogicUS$FOL$SemanticTableauxEQ$reduceDN(
				A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution,
					A2($elm$core$Dict$singleton, v, newC),
					g));
			var newNodes = A3(
				$elm$core$Dict$insert,
				deep,
				{
					f: newF,
					i: deep,
					p1: $elm$core$Maybe$Just(
						_Utils_Tuple2(i, _List_Nil)),
					p2: $elm$core$Maybe$Nothing,
					r: $author$project$LogicUS$FOL$SemanticTableauxEQ$DR,
					simp: _List_Nil,
					subs: $elm$core$Maybe$Just(
						_Utils_Tuple2(v, newC)),
					t: $author$project$LogicUS$FOL$SemanticTableauxEQ$ffolType(newF),
					u: 0,
					ut: _List_Nil
				},
				A3($elm$core$Dict$insert, i, relabelNi, nodes));
			var _v56 = A8(
				$author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauEqAux,
				deep + 1,
				generatedConstants + 1,
				maxConstants,
				maxSize,
				A2($author$project$LogicUS$FOL$SemanticTableauxEQ$insertInUniverse, universe, newC),
				newNodes,
				equalities,
				goals);
			var subtree = _v56.a;
			var inconsPath = _v56.b;
			return (A2($elm$core$List$member, i, inconsPath) || _Utils_eq(inconsPath, _List_Nil)) ? _Utils_Tuple2(
				A2(
					$elm_community$graph$Graph$Tree$inner,
					relabelNi,
					_List_fromArray(
						[subtree])),
				inconsPath) : _Utils_Tuple2(subtree, inconsPath);
		}
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$processEquality = F9(
	function (_v39, deep, generatedConstants, maxConstants, maxSize, universe, nodes, equalities, goals) {
		var i = _v39.a;
		var ni = _v39.b;
		var _v40 = A2(
			$author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyEqualityWithEqs,
			function (_v41) {
				var t1 = _v41.a;
				var t2 = _v41.b;
				return _Utils_Tuple3(t1, t2, ni.simp);
			}(
				A2(
					$elm$core$Maybe$withDefault,
					_Utils_Tuple2(
						A2(
							$author$project$LogicUS$FOL$SyntaxSemantics$Func,
							_Utils_Tuple2('Err', _List_Nil),
							_List_Nil),
						A2(
							$author$project$LogicUS$FOL$SyntaxSemantics$Func,
							_Utils_Tuple2('Err', _List_Nil),
							_List_Nil)),
					$author$project$LogicUS$FOL$SemanticTableauxEQ$extractEQNEQTerms(ni.f))),
			equalities);
		var lhs = _v40.a;
		var rhs = _v40.b;
		var subs = _v40.c;
		if (!_Utils_eq(lhs, rhs)) {
			var _v42 = A2(
				$elm$core$List$partition,
				function (_v43) {
					var _v44 = _v43.b;
					var lj = _v44.a;
					var rj = _v44.b;
					return A2(
						$elm$core$List$member,
						lhs,
						$author$project$LogicUS$FOL$SyntaxSemantics$termClosedTerms(lj)) || A2(
						$elm$core$List$member,
						lhs,
						$author$project$LogicUS$FOL$SyntaxSemantics$termClosedTerms(rj));
				},
				$elm$core$Dict$toList(equalities));
			var remEqualities_ = _v42.a;
			var newEqualities_ = _v42.b;
			var newEqualities = _Utils_ap(
				newEqualities_,
				_List_fromArray(
					[
						_Utils_Tuple2(
						i,
						_Utils_Tuple2(lhs, rhs))
					]));
			var remEqualities = A2(
				$elm$core$List$map,
				function (_v49) {
					var j = _v49.a;
					var _v50 = _v49.b;
					var t1 = _v50.a;
					var t2 = _v50.b;
					return _Utils_Tuple2(
						j,
						A2(
							$author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyEqualityWithEqs,
							_Utils_Tuple3(t1, t2, _List_Nil),
							$elm$core$Dict$fromList(newEqualities)));
				},
				remEqualities_);
			var nodesRemEqs = A2(
				$elm$core$List$indexedMap,
				F2(
					function (k, _v47) {
						var j = _v47.a;
						var _v48 = _v47.b;
						var lj = _v48.a;
						var rj = _v48.b;
						var s = _v48.c;
						return _Utils_Tuple2(
							deep + k,
							{
								f: A2($author$project$LogicUS$FOL$SyntaxSemantics$Equal, lj, rj),
								i: deep + k,
								p1: $elm$core$Maybe$Just(
									_Utils_Tuple2(j, _List_Nil)),
								p2: $elm$core$Maybe$Nothing,
								r: $author$project$LogicUS$FOL$SemanticTableauxEQ$LL,
								simp: s,
								subs: $elm$core$Maybe$Nothing,
								t: $author$project$LogicUS$FOL$SemanticTableauxEQ$E,
								u: 0,
								ut: _List_Nil
							});
					}),
				remEqualities);
			var newUniverse = A2(
				$author$project$LogicUS$FOL$SemanticTableauxEQ$updateUniverseWithEqs,
				_Utils_ap(
					universe,
					$author$project$LogicUS$FOL$SyntaxSemantics$termsClosedTerms(
						_List_fromArray(
							[lhs, rhs]))),
				$elm$core$Dict$fromList(newEqualities));
			var newGoals = A2(
				$author$project$LogicUS$FOL$SemanticTableauxEQ$updateGoalsWithEqs,
				goals,
				$elm$core$Dict$fromList(newEqualities));
			var relabelNi = _Utils_update(
				ni,
				{
					f: A2($author$project$LogicUS$FOL$SyntaxSemantics$Equal, lhs, rhs),
					simp: subs,
					u: 1
				});
			var nodesUpdateGut = A2(
				$elm$core$Dict$map,
				F2(
					function (_v46, nj) {
						return _Utils_eq(nj.t, $author$project$LogicUS$FOL$SemanticTableauxEQ$G) ? _Utils_update(
							nj,
							{
								ut: A2(
									$author$project$LogicUS$FOL$SemanticTableauxEQ$updateUniverseWithEqs,
									nj.ut,
									$elm$core$Dict$fromList(newEqualities))
							}) : nj;
					}),
				nodes);
			var newNodes = A2(
				$elm$core$Dict$union,
				A3($elm$core$Dict$insert, i, relabelNi, nodesUpdateGut),
				$elm$core$Dict$fromList(nodesRemEqs));
			var _v45 = A8(
				$author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauEqAux,
				deep + $elm$core$List$length(nodesRemEqs),
				generatedConstants,
				maxConstants,
				maxSize,
				newUniverse,
				newNodes,
				$elm$core$Dict$fromList(newEqualities),
				newGoals);
			var subtree = _v45.a;
			var inconsPath = _v45.b;
			return (A2($elm$core$List$member, i, inconsPath) || _Utils_eq(inconsPath, _List_Nil)) ? _Utils_Tuple2(
				A2(
					$elm_community$graph$Graph$Tree$inner,
					relabelNi,
					_List_fromArray(
						[subtree])),
				inconsPath) : _Utils_Tuple2(subtree, inconsPath);
		} else {
			var newNodes = A2($elm$core$Dict$remove, i, nodes);
			return A8($author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauEqAux, deep, generatedConstants, maxConstants, maxSize, universe, newNodes, equalities, goals);
		}
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$processGamma = F9(
	function (_v33, deep, generatedConstants, maxConstants, maxSize, universe, nodes, equalities, goals) {
		var i = _v33.a;
		var ni = _v33.b;
		var t = _v33.c;
		var _v34 = $elm$core$List$head(
			A2(
				$elm$core$List$filter,
				function (_v35) {
					var n = _v35.b;
					return (n.u === 1) && _Utils_eq(
						n.f,
						$author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation(ni.f));
				},
				$elm$core$Dict$toList(nodes)));
		if (_v34.$ === 'Just') {
			var _v36 = _v34.a;
			var j = _v36.a;
			return A3(
				$author$project$LogicUS$FOL$SemanticTableauxEQ$closeBranch,
				{
					f1: j,
					f2: i,
					substitutions: _Utils_Tuple2(_List_Nil, _List_Nil)
				},
				deep,
				nodes);
		} else {
			var _v37 = A2(
				$elm$core$Maybe$withDefault,
				_Utils_Tuple2(
					_Utils_Tuple3('Err', _List_Nil, -1),
					$author$project$LogicUS$FOL$SyntaxSemantics$Insat),
				$author$project$LogicUS$FOL$SemanticTableauxEQ$getDGVarComponent(ni.f));
			var v = _v37.a;
			var g = _v37.b;
			var relabelNi = _Utils_update(
				ni,
				{
					u: 1,
					ut: _Utils_ap(
						ni.ut,
						_List_fromArray(
							[t]))
				});
			var newF = $author$project$LogicUS$FOL$SemanticTableauxEQ$reduceDN(
				A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution,
					A2($elm$core$Dict$singleton, v, t),
					g));
			var newNodes = A3(
				$elm$core$Dict$insert,
				deep,
				{
					f: newF,
					i: deep,
					p1: $elm$core$Maybe$Just(
						_Utils_Tuple2(i, _List_Nil)),
					p2: $elm$core$Maybe$Nothing,
					r: $author$project$LogicUS$FOL$SemanticTableauxEQ$GR,
					simp: _List_Nil,
					subs: $elm$core$Maybe$Just(
						_Utils_Tuple2(v, t)),
					t: $author$project$LogicUS$FOL$SemanticTableauxEQ$ffolType(newF),
					u: 0,
					ut: _List_Nil
				},
				A3($elm$core$Dict$insert, i, relabelNi, nodes));
			var _v38 = A8($author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauEqAux, deep + 1, generatedConstants, maxConstants, maxSize, universe, newNodes, equalities, goals);
			var subtree = _v38.a;
			var inconsPath = _v38.b;
			return (A2($elm$core$List$member, i, inconsPath) || _Utils_eq(inconsPath, _List_Nil)) ? _Utils_Tuple2(
				A2(
					$elm_community$graph$Graph$Tree$inner,
					relabelNi,
					_List_fromArray(
						[subtree])),
				inconsPath) : _Utils_Tuple2(subtree, inconsPath);
		}
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$processInequality = F9(
	function (_v29, deep, generatedConstants, maxConstants, maxSize, universe, nodes, equalities, goals) {
		var i = _v29.a;
		var ni = _v29.b;
		var _v30 = A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2(
				A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Func,
					_Utils_Tuple2('Err', _List_Nil),
					_List_Nil),
				A2(
					$author$project$LogicUS$FOL$SyntaxSemantics$Func,
					_Utils_Tuple2('Err', _List_Nil),
					_List_Nil)),
			$author$project$LogicUS$FOL$SemanticTableauxEQ$extractEQNEQTerms(ni.f));
		var t1 = _v30.a;
		var t2 = _v30.b;
		var _v31 = A2(
			$author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyEqualityWithEqs,
			_Utils_Tuple3(t1, t2, _List_Nil),
			equalities);
		var lhs = _v31.a;
		var rhs = _v31.b;
		var subs = _v31.c;
		var subgoal = (!_Utils_eq(lhs, rhs)) ? _List_fromArray(
			[
				_Utils_Tuple2(lhs, rhs)
			]) : _List_Nil;
		var relabelNi = _Utils_update(
			ni,
			{
				f: $author$project$LogicUS$FOL$SyntaxSemantics$Neg(
					A2($author$project$LogicUS$FOL$SyntaxSemantics$Equal, lhs, rhs)),
				simp: subs,
				u: 1
			});
		var newUniverse = A2(
			$author$project$LogicUS$FOL$SemanticTableauxEQ$updateUniverseWithEqs,
			_Utils_ap(
				universe,
				$author$project$LogicUS$FOL$SyntaxSemantics$termsClosedTerms(
					_List_fromArray(
						[lhs, rhs]))),
			equalities);
		var newNodes = A3($elm$core$Dict$insert, i, relabelNi, nodes);
		var newGoals = $author$project$LogicUS$FOL$SemanticTableauxEQ$removeSubsumedGoals(
			A3(
				$elm$core$Dict$insert,
				_Utils_Tuple2(i, i),
				{
					subgoals: subgoal,
					substitutions: _Utils_Tuple2(_List_Nil, _List_Nil)
				},
				goals));
		var _v32 = A8($author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauEqAux, deep + 1, generatedConstants, maxConstants, maxSize, newUniverse, newNodes, equalities, newGoals);
		var subtree = _v32.a;
		var inconsPath = _v32.b;
		return (A2($elm$core$List$member, i, inconsPath) || _Utils_eq(inconsPath, _List_Nil)) ? _Utils_Tuple2(
			A2(
				$elm_community$graph$Graph$Tree$inner,
				relabelNi,
				_List_fromArray(
					[subtree])),
			inconsPath) : _Utils_Tuple2(subtree, inconsPath);
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$processLiteral = F9(
	function (_v18, deep, generatedConstants, maxConstants, maxSize, universe, nodes, equalities, goals) {
		var i = _v18.a;
		var ni = _v18.b;
		var _v19 = A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple3(
				false,
				_Utils_Tuple2('Err', _List_Nil),
				_List_Nil),
			$author$project$LogicUS$FOL$SemanticTableauxEQ$extractElemsLiteral(ni.f));
		var signi = _v19.a;
		var psymbi = _v19.b;
		var ts = _v19.c;
		var arityi = $elm$core$List$length(ts);
		var _v20 = A3($author$project$LogicUS$FOL$SemanticTableauxEQ$simplifyTermsWithEqs, equalities, ts, _List_Nil);
		var ts_ = _v20.a;
		var subs = _v20.b;
		var opposableAtoms = A2(
			$elm$core$Dict$map,
			F2(
				function (_v23, _v24) {
					var tsj = _v24.c;
					return tsj;
				}),
			A2(
				$elm$core$Dict$filter,
				F2(
					function (_v25, _v26) {
						var signj = _v26.a;
						var psymbj = _v26.b;
						var tsj = _v26.c;
						return _Utils_eq(signj, !signi) && (_Utils_eq(psymbj, psymbi) && _Utils_eq(
							$elm$core$List$length(tsj),
							arityi));
					}),
				A2(
					$elm$core$Dict$map,
					F2(
						function (_v27, v) {
							return A2(
								$elm$core$Maybe$withDefault,
								_Utils_Tuple3(
									false,
									_Utils_Tuple2('Err', _List_Nil),
									_List_Nil),
								$author$project$LogicUS$FOL$SemanticTableauxEQ$extractElemsLiteral(v.f));
						}),
					A2(
						$elm$core$Dict$filter,
						F2(
							function (_v28, v) {
								return _Utils_eq(v.t, $author$project$LogicUS$FOL$SemanticTableauxEQ$L);
							}),
						nodes))));
		var relabelNi = signi ? _Utils_update(
			ni,
			{
				f: A2($author$project$LogicUS$FOL$SyntaxSemantics$Pred, psymbi, ts_),
				simp: subs,
				u: 1
			}) : _Utils_update(
			ni,
			{
				f: $author$project$LogicUS$FOL$SyntaxSemantics$Neg(
					A2($author$project$LogicUS$FOL$SyntaxSemantics$Pred, psymbi, ts_)),
				simp: subs,
				u: 1
			});
		var opposableGoals = A2(
			$elm$core$Dict$map,
			F2(
				function (k, v) {
					return A3($author$project$LogicUS$FOL$SemanticTableauxEQ$updateGoalWithEqs, k, v, equalities);
				}),
			$elm$core$Dict$fromList(
				A2(
					$elm$core$List$map,
					function (_v22) {
						var idop = _v22.a;
						var tsop = _v22.b;
						return _Utils_Tuple2(
							_Utils_Tuple2(idop, i),
							{
								subgoals: A3($elm$core$List$map2, $elm$core$Tuple$pair, tsop, ts),
								substitutions: _Utils_Tuple2(_List_Nil, _List_Nil)
							});
					},
					$elm$core$Dict$toList(opposableAtoms))));
		var newUniverse = A2(
			$elm$core$List$sortWith,
			$author$project$LogicUS$FOL$SemanticTableauxEQ$compareTerms,
			$elm_community$list_extra$List$Extra$unique(
				_Utils_ap(
					universe,
					$author$project$LogicUS$FOL$SyntaxSemantics$termsClosedTerms(ts_))));
		var newNodes = A3($elm$core$Dict$insert, i, relabelNi, nodes);
		var newGoals = $author$project$LogicUS$FOL$SemanticTableauxEQ$removeSubsumedGoals(
			A2($elm$core$Dict$union, goals, opposableGoals));
		var _v21 = A8($author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauEqAux, deep + 1, generatedConstants, maxConstants, maxSize, newUniverse, newNodes, equalities, newGoals);
		var subtree = _v21.a;
		var inconsPath = _v21.b;
		return (A2($elm$core$List$member, i, inconsPath) || _Utils_eq(inconsPath, _List_Nil)) ? _Utils_Tuple2(
			A2(
				$elm_community$graph$Graph$Tree$inner,
				relabelNi,
				_List_fromArray(
					[subtree])),
			inconsPath) : _Utils_Tuple2(subtree, inconsPath);
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauEqAux = F8(
	function (deep, generatedConstants, maxConstants, maxSize, universein, nodesin, equalities, goals) {
		var universe = A2(
			$elm$core$List$filter,
			function (t) {
				return _Utils_cmp(
					A2(
						$elm$core$Maybe$withDefault,
						maxSize + 1,
						$author$project$LogicUS$FOL$SemanticTableauxEQ$groundTermSize(t)),
					maxSize) < 1;
			},
			universein);
		var nodes = $elm$core$Dict$fromList(
			A3(
				$elm$core$List$foldl,
				F2(
					function (_v16, ac) {
						var i = _v16.a;
						var ni = _v16.b;
						return A2(
							$elm$core$List$any,
							function (_v17) {
								var nj = _v17.b;
								return _Utils_eq(nj.f, ni.f);
							},
							ac) ? ac : _Utils_ap(
							ac,
							_List_fromArray(
								[
									_Utils_Tuple2(i, ni)
								]));
					}),
				_List_Nil,
				A2(
					$elm$core$List$sortBy,
					$elm$core$Tuple$first,
					$elm$core$Dict$toList(nodesin))));
		var _v0 = $author$project$LogicUS$FOL$SemanticTableauxEQ$checkGoals(goals);
		if (_v0.$ === 'Just') {
			var inconsistence = _v0.a;
			return A3($author$project$LogicUS$FOL$SemanticTableauxEQ$closeBranch, inconsistence, deep, nodes);
		} else {
			var _v1 = $author$project$LogicUS$FOL$SemanticTableauxEQ$chooseEquality(nodes);
			if (_v1.$ === 'Just') {
				var _v2 = _v1.a;
				var i = _v2.a;
				var ni = _v2.b;
				return A9(
					$author$project$LogicUS$FOL$SemanticTableauxEQ$processEquality,
					_Utils_Tuple2(i, ni),
					deep,
					generatedConstants,
					maxConstants,
					maxSize,
					universe,
					nodes,
					equalities,
					goals);
			} else {
				var _v3 = $author$project$LogicUS$FOL$SemanticTableauxEQ$chooseInequality(nodes);
				if (_v3.$ === 'Just') {
					var _v4 = _v3.a;
					var i = _v4.a;
					var ni = _v4.b;
					return A9(
						$author$project$LogicUS$FOL$SemanticTableauxEQ$processInequality,
						_Utils_Tuple2(i, ni),
						deep,
						generatedConstants,
						maxConstants,
						maxSize,
						universe,
						nodes,
						equalities,
						goals);
				} else {
					var _v5 = $author$project$LogicUS$FOL$SemanticTableauxEQ$chooseLiteral(nodes);
					if (_v5.$ === 'Just') {
						var _v6 = _v5.a;
						var i = _v6.a;
						var ni = _v6.b;
						return A9(
							$author$project$LogicUS$FOL$SemanticTableauxEQ$processLiteral,
							_Utils_Tuple2(i, ni),
							deep,
							generatedConstants,
							maxConstants,
							maxSize,
							universe,
							nodes,
							equalities,
							goals);
					} else {
						var _v7 = $author$project$LogicUS$FOL$SemanticTableauxEQ$chooseAlpha(nodes);
						if (_v7.$ === 'Just') {
							var _v8 = _v7.a;
							var i = _v8.a;
							var ni = _v8.b;
							return A9(
								$author$project$LogicUS$FOL$SemanticTableauxEQ$processAlpha,
								_Utils_Tuple2(i, ni),
								deep,
								generatedConstants,
								maxConstants,
								maxSize,
								universe,
								nodes,
								equalities,
								goals);
						} else {
							var _v9 = $author$project$LogicUS$FOL$SemanticTableauxEQ$chooseBeta(nodes);
							if (_v9.$ === 'Just') {
								var _v10 = _v9.a;
								var i = _v10.a;
								var ni = _v10.b;
								return A9(
									$author$project$LogicUS$FOL$SemanticTableauxEQ$processBeta,
									_Utils_Tuple2(i, ni),
									deep,
									generatedConstants,
									maxConstants,
									maxSize,
									universe,
									nodes,
									equalities,
									goals);
							} else {
								var _v11 = _Utils_Tuple2(
									_Utils_cmp(generatedConstants, maxConstants) < 0,
									$author$project$LogicUS$FOL$SemanticTableauxEQ$chooseDelta(nodes));
								if (_v11.a && (_v11.b.$ === 'Just')) {
									var _v12 = _v11.b.a;
									var i = _v12.a;
									var ni = _v12.b;
									return A9(
										$author$project$LogicUS$FOL$SemanticTableauxEQ$processDelta,
										_Utils_Tuple2(i, ni),
										deep,
										generatedConstants,
										maxConstants,
										maxSize,
										universe,
										nodes,
										equalities,
										goals);
								} else {
									var universe_ = $elm$core$List$isEmpty(universe) ? _List_fromArray(
										[
											A2(
											$author$project$LogicUS$FOL$SyntaxSemantics$Func,
											_Utils_Tuple2(
												'κ',
												_List_fromArray(
													[generatedConstants])),
											_List_Nil)
										]) : universe;
									var _v13 = A2($author$project$LogicUS$FOL$SemanticTableauxEQ$chooseGamma, universe_, nodes);
									if ((_v13.$ === 'Just') && _v13.a.c.b) {
										var _v14 = _v13.a;
										var i = _v14.a;
										var ni = _v14.b;
										var _v15 = _v14.c;
										var t = _v15.a;
										return A9(
											$author$project$LogicUS$FOL$SemanticTableauxEQ$processGamma,
											_Utils_Tuple3(i, ni, t),
											deep,
											generatedConstants,
											maxConstants,
											maxSize,
											universe,
											nodes,
											equalities,
											goals);
									} else {
										return _Utils_Tuple2(
											$elm_community$graph$Graph$Tree$leaf(
												{f: $author$project$LogicUS$FOL$SyntaxSemantics$Taut, i: deep, p1: $elm$core$Maybe$Nothing, p2: $elm$core$Maybe$Nothing, r: $author$project$LogicUS$FOL$SemanticTableauxEQ$OL, simp: _List_Nil, subs: $elm$core$Maybe$Nothing, t: $author$project$LogicUS$FOL$SemanticTableauxEQ$T, u: 0, ut: _List_Nil}),
											_List_Nil);
									}
								}
							}
						}
					}
				}
			}
		}
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauEq = F3(
	function (fs, maxConstants, maxSize) {
		var generateNodeAuxFromF = F2(
			function (i, f) {
				return _Utils_Tuple2(
					i,
					{
						f: f,
						i: i,
						p1: $elm$core$Maybe$Nothing,
						p2: $elm$core$Maybe$Nothing,
						r: $author$project$LogicUS$FOL$SemanticTableauxEQ$IF,
						simp: _List_Nil,
						subs: $elm$core$Maybe$Nothing,
						t: $author$project$LogicUS$FOL$SemanticTableauxEQ$ffolType(f),
						u: 0,
						ut: _List_Nil
					});
			});
		var universe = _List_Nil;
		var nodes = $elm$core$Dict$fromList(
			A2(
				$elm$core$List$indexedMap,
				generateNodeAuxFromF,
				A2(
					$elm$core$List$map,
					A2($elm$core$Basics$composeL, $author$project$LogicUS$FOL$SemanticTableauxEQ$reduceDN, $author$project$LogicUS$FOL$SyntaxSemantics$ffolUniversalClosure),
					fs)));
		var tableau = A8(
			$author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauEqAux,
			$elm$core$Dict$size(nodes),
			0,
			maxConstants,
			maxSize,
			universe,
			nodes,
			$elm$core$Dict$empty,
			$elm$core$Dict$empty).a;
		var newTableau = A3(
			$elm$core$List$foldr,
			F2(
				function (f, _v0) {
					var i = _v0.a;
					var t = _v0.b;
					return _Utils_Tuple2(
						i - 1,
						A2(
							$elm_community$graph$Graph$Tree$inner,
							A2(generateNodeAuxFromF, i, f).b,
							_List_fromArray(
								[t])));
				}),
			_Utils_Tuple2(
				$elm$core$List$length(fs) - 1,
				tableau),
			fs).b;
		return A2(
			$elm$core$Maybe$withDefault,
			$elm_community$graph$Graph$Tree$empty,
			$elm$core$List$head(
				A3($author$project$LogicUS$FOL$SemanticTableauxEQ$postProcessingSTEQ, 1, $elm$core$Dict$empty, newTableau)));
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauNodeToDOTAux = F3(
	function (gid, p, t) {
		var _v18 = $elm_community$graph$Graph$Tree$root(t);
		if (_v18.$ === 'Just') {
			var _v19 = _v18.a;
			var l = _v19.a;
			var ch = _v19.b;
			return A4($author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauNodeToDOTAux2, gid, p, l, ch);
		} else {
			return _Utils_Tuple2('', -1);
		}
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauNodeToDOTAux2 = F4(
	function (gid, p, ni, children) {
		_v0$2:
		while (true) {
			if (children.b) {
				if (!children.b.b) {
					var c = children.a;
					var _v1 = A3($author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauNodeToDOTAux, gid + 1, gid, c);
					var res = _v1.a;
					var lgid = _v1.b;
					var _v2 = ni.r;
					switch (_v2.$) {
						case 'LL':
							return _Utils_Tuple2(
								$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(ni.f) + ('\"];\n' + (($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + ((A2(
									$elm$core$String$join,
									'⚬',
									A2(
										$elm$core$List$map,
										function (id) {
											return '𝓛𝓛' + $elm$core$String$fromInt(id);
										},
										ni.simp)) + ('(' + (A2(
									$elm$core$Maybe$withDefault,
									'',
									A2(
										$elm$core$Maybe$map,
										A2($elm$core$Basics$composeL, $elm$core$String$fromInt, $elm$core$Tuple$first),
										ni.p1)) + ')'))) + '\"];'))))) + ('\n' + res))))),
								lgid);
						case 'AR':
							return _Utils_Tuple2(
								$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(ni.f) + ('\"];\n' + (($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + (('𝛼(' + (A2(
									$elm$core$Maybe$withDefault,
									'',
									A2(
										$elm$core$Maybe$map,
										A2($elm$core$Basics$composeL, $elm$core$String$fromInt, $elm$core$Tuple$first),
										ni.p1)) + (').' + A2(
									$elm$core$String$join,
									'⚬',
									A2(
										$elm$core$List$map,
										function (id) {
											return '𝓛𝓛' + $elm$core$String$fromInt(id);
										},
										ni.simp))))) + '\"];'))))) + ('\n' + res))))),
								lgid);
						case 'BR':
							return _Utils_Tuple2(
								$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(ni.f) + ('\"];\n' + (($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + (('𝛽(' + (A2(
									$elm$core$Maybe$withDefault,
									'',
									A2(
										$elm$core$Maybe$map,
										A2($elm$core$Basics$composeL, $elm$core$String$fromInt, $elm$core$Tuple$first),
										ni.p1)) + (').' + A2(
									$elm$core$String$join,
									'⚬',
									A2(
										$elm$core$List$map,
										function (id) {
											return '𝓛𝓛' + $elm$core$String$fromInt(id);
										},
										ni.simp))))) + '\"];'))))) + ('\n' + res))))),
								lgid);
						case 'GR':
							return _Utils_Tuple2(
								$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(ni.f) + ('\"];\n' + (($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + (('𝛾(' + (A2(
									$elm$core$Maybe$withDefault,
									'',
									A2(
										$elm$core$Maybe$map,
										A2($elm$core$Basics$composeL, $elm$core$String$fromInt, $elm$core$Tuple$first),
										ni.p1)) + (')' + (A2(
									$elm$core$Maybe$withDefault,
									'',
									A2(
										$elm$core$Maybe$map,
										function (_v3) {
											var x = _v3.a;
											var y = _v3.b;
											return $author$project$LogicUS$FOL$SyntaxSemantics$substitutionToString(
												A2($elm$core$Dict$singleton, x, y));
										},
										ni.subs)) + ('.' + A2(
									$elm$core$String$join,
									'⚬',
									A2(
										$elm$core$List$map,
										function (id) {
											return '𝓛𝓛' + $elm$core$String$fromInt(id);
										},
										ni.simp))))))) + '\"];'))))) + ('\n' + res))))),
								lgid);
						case 'DR':
							return _Utils_Tuple2(
								$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(ni.f) + ('\"];\n' + (($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + (('𝛿(' + (A2(
									$elm$core$Maybe$withDefault,
									'',
									A2(
										$elm$core$Maybe$map,
										A2($elm$core$Basics$composeL, $elm$core$String$fromInt, $elm$core$Tuple$first),
										ni.p1)) + (')' + (A2(
									$elm$core$Maybe$withDefault,
									'',
									A2(
										$elm$core$Maybe$map,
										function (_v4) {
											var x = _v4.a;
											var y = _v4.b;
											return $author$project$LogicUS$FOL$SyntaxSemantics$substitutionToString(
												A2($elm$core$Dict$singleton, x, y));
										},
										ni.subs)) + ('.' + A2(
									$elm$core$String$join,
									'⚬',
									A2(
										$elm$core$List$map,
										function (id) {
											return '𝓛𝓛' + $elm$core$String$fromInt(id);
										},
										ni.simp))))))) + '\"];'))))) + ('\n' + res))))),
								lgid);
						case 'IF':
							return _Utils_Tuple2(
								$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(ni.f) + ('\"];\n' + (((p >= 0) ? ($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + '\n'))) : '') + res)))),
								lgid);
						default:
							return _Utils_Tuple2('', -2);
					}
				} else {
					if (!children.b.b.b) {
						var c1 = children.a;
						var _v5 = children.b;
						var c2 = _v5.a;
						var _v6 = A3($author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauNodeToDOTAux, gid + 1, gid, c1);
						var res1 = _v6.a;
						var lgid1 = _v6.b;
						var _v7 = A3($author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauNodeToDOTAux, lgid1 + 1, gid, c2);
						var res2 = _v7.a;
						var lgid2 = _v7.b;
						var _v8 = ni.r;
						switch (_v8.$) {
							case 'LL':
								return _Utils_Tuple2(
									$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(ni.f) + ('\"];\n' + (($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + ((A2(
										$elm$core$String$join,
										'⚬',
										A2(
											$elm$core$List$map,
											function (id) {
												return '𝓛𝓛' + $elm$core$String$fromInt(id);
											},
											ni.simp)) + ('(' + (A2(
										$elm$core$Maybe$withDefault,
										'',
										A2(
											$elm$core$Maybe$map,
											A2($elm$core$Basics$composeL, $elm$core$String$fromInt, $elm$core$Tuple$first),
											ni.p1)) + ')'))) + '\"];'))))) + ('\n' + (res1 + ('\n' + res2))))))),
									lgid2);
							case 'AR':
								return _Utils_Tuple2(
									$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(ni.f) + ('\"];\n' + (($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + (('𝛼(' + (A2(
										$elm$core$Maybe$withDefault,
										'',
										A2(
											$elm$core$Maybe$map,
											A2($elm$core$Basics$composeL, $elm$core$String$fromInt, $elm$core$Tuple$first),
											ni.p1)) + (').' + A2(
										$elm$core$String$join,
										'⚬',
										A2(
											$elm$core$List$map,
											function (id) {
												return '𝓛𝓛' + $elm$core$String$fromInt(id);
											},
											ni.simp))))) + '\"];'))))) + ('\n' + (res1 + ('\n' + res2))))))),
									lgid2);
							case 'BR':
								return _Utils_Tuple2(
									$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(ni.f) + ('\"];\n' + (($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + (('𝛽(' + (A2(
										$elm$core$Maybe$withDefault,
										'',
										A2(
											$elm$core$Maybe$map,
											A2($elm$core$Basics$composeL, $elm$core$String$fromInt, $elm$core$Tuple$first),
											ni.p1)) + (').' + A2(
										$elm$core$String$join,
										'⚬',
										A2(
											$elm$core$List$map,
											function (id) {
												return '𝓛𝓛' + $elm$core$String$fromInt(id);
											},
											ni.simp))))) + '\"];'))))) + ('\n' + (res1 + ('\n' + res2))))))),
									lgid2);
							case 'GR':
								return _Utils_Tuple2(
									$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(ni.f) + ('\"];\n' + (($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + (('𝛾(' + (A2(
										$elm$core$Maybe$withDefault,
										'',
										A2(
											$elm$core$Maybe$map,
											A2($elm$core$Basics$composeL, $elm$core$String$fromInt, $elm$core$Tuple$first),
											ni.p1)) + (')' + (A2(
										$elm$core$Maybe$withDefault,
										'',
										A2(
											$elm$core$Maybe$map,
											function (_v9) {
												var x = _v9.a;
												var y = _v9.b;
												return $author$project$LogicUS$FOL$SyntaxSemantics$substitutionToString(
													A2($elm$core$Dict$singleton, x, y));
											},
											ni.subs)) + ('.' + A2(
										$elm$core$String$join,
										'⚬',
										A2(
											$elm$core$List$map,
											function (id) {
												return '𝓛𝓛' + $elm$core$String$fromInt(id);
											},
											ni.simp))))))) + '\"];'))))) + ('\n' + (res1 + ('\n' + res2))))))),
									lgid2);
							case 'DR':
								return _Utils_Tuple2(
									$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(ni.f) + ('\"];\n' + (($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + (('𝛿(' + (A2(
										$elm$core$Maybe$withDefault,
										'',
										A2(
											$elm$core$Maybe$map,
											A2($elm$core$Basics$composeL, $elm$core$String$fromInt, $elm$core$Tuple$first),
											ni.p1)) + (')' + (A2(
										$elm$core$Maybe$withDefault,
										'',
										A2(
											$elm$core$Maybe$map,
											function (_v10) {
												var x = _v10.a;
												var y = _v10.b;
												return $author$project$LogicUS$FOL$SyntaxSemantics$substitutionToString(
													A2($elm$core$Dict$singleton, x, y));
											},
											ni.subs)) + ('.' + A2(
										$elm$core$String$join,
										'⚬',
										A2(
											$elm$core$List$map,
											function (id) {
												return '𝓛𝓛' + $elm$core$String$fromInt(id);
											},
											ni.simp))))))) + '\"];'))))) + ('\n' + (res1 + ('\n' + res2))))))),
									lgid2);
							case 'IF':
								return _Utils_Tuple2(
									$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(ni.f) + ('\"];\n' + (($elm$core$String$fromInt(p) + (' -> ' + $elm$core$String$fromInt(gid))) + ('\n' + (res1 + ('\n' + res2))))))),
									lgid2);
							default:
								return _Utils_Tuple2('', -2);
						}
					} else {
						break _v0$2;
					}
				}
			} else {
				break _v0$2;
			}
		}
		var _v11 = ni.r;
		switch (_v11.$) {
			case 'IR':
				var elabel = function () {
					var _v12 = ni.p2;
					if (_v12.$ === 'Nothing') {
						var _v13 = ni.p1;
						if (_v13.$ === 'Just') {
							var _v14 = _v13.a;
							var id1 = _v14.a;
							var simp1 = _v14.b;
							return '→←' + (A2(
								$elm$core$String$join,
								'⚬',
								A2(
									$elm$core$List$map,
									function (id) {
										return '𝓛𝓛' + $elm$core$String$fromInt(id);
									},
									simp1)) + ('(' + ($elm$core$String$fromInt(id1) + ')')));
						} else {
							return '';
						}
					} else {
						var _v15 = _v12.a;
						var id2 = _v15.a;
						var simp2 = _v15.b;
						var _v16 = ni.p1;
						if (_v16.$ === 'Just') {
							var _v17 = _v16.a;
							var id1 = _v17.a;
							var simp1 = _v17.b;
							return A2(
								$elm$core$String$join,
								'⚬',
								A2(
									$elm$core$List$map,
									function (id) {
										return '𝓛𝓛' + $elm$core$String$fromInt(id);
									},
									simp1)) + ('(' + ($elm$core$String$fromInt(id1) + (') ' + ('→←' + (A2(
								$elm$core$String$join,
								'⚬',
								A2(
									$elm$core$List$map,
									function (id) {
										return '𝓛𝓛' + $elm$core$String$fromInt(id);
									},
									simp2)) + ('(' + ($elm$core$String$fromInt(id2) + ') ')))))));
						} else {
							return '';
						}
					}
				}();
				return _Utils_Tuple2(
					$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(ni.f) + ('\"];\n' + ($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + (elabel + '\"];')))))))),
					gid);
			case 'OL':
				return _Utils_Tuple2(
					$elm$core$String$fromInt(gid) + (' [label=\"◯\"];\n' + ($elm$core$String$fromInt(p) + (' -> ' + $elm$core$String$fromInt(gid)))),
					gid);
			case 'UE':
				return _Utils_Tuple2(
					$elm$core$String$fromInt(gid) + (' [label=\"!\"];\n' + ($elm$core$String$fromInt(p) + (' -> ' + $elm$core$String$fromInt(gid)))),
					gid);
			default:
				return _Utils_Tuple2('', -2);
		}
	});
var $author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauToDOT = F2(
	function (t, style) {
		return 'digraph{\n' + (style + ('\n' + (A3($author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauNodeToDOTAux, 0, -1, t).a + '\n}')));
	});
var $author$project$FOLAlgProcessors$processSemanticTableauFOL = F2(
	function (content, outputsSFOL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A4(
			$elm$json$Json$Decode$map3,
			F3(
				function (y, z, u) {
					return {input: y, maxConstants: z, maxSize: u};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['maxConstants']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['maxSize']),
				$elm$json$Json$Decode$int));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var source = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(source.origin_id, source.origin_slot),
					outputsSFOL);
				if (_v2.$ === 'Just') {
					var s = _v2.a;
					return {
						errorCode: 0,
						message: $elm$json$Json$Encode$string(
							A2(
								$author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauToDOT,
								A3($author$project$LogicUS$FOL$SemanticTableauxEQ$semanticTableauEq, s, c.maxConstants, c.maxSize),
								''))
					};
				} else {
					return {
						errorCode: 2,
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')'))))
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e))
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e))
			};
		}
	});
var $author$project$LogicUS$PL$SemanticTableaux$INITR = {$: 'INITR'};
var $author$project$LogicUS$PL$SemanticTableaux$AR = {$: 'AR'};
var $author$project$LogicUS$PL$SemanticTableaux$BR = {$: 'BR'};
var $author$project$LogicUS$PL$SemanticTableaux$DNR = {$: 'DNR'};
var $author$project$LogicUS$PL$SemanticTableaux$IR = {$: 'IR'};
var $author$project$LogicUS$PL$SemanticTableaux$TR = {$: 'TR'};
var $author$project$LogicUS$PL$SemanticTableaux$A = {$: 'A'};
var $author$project$LogicUS$PL$SemanticTableaux$fplComponents = function (f) {
	switch (f.$) {
		case 'Atom':
			var psymb = f.a;
			return _List_fromArray(
				[
					$author$project$LogicUS$PL$SyntaxSemantics$Atom(psymb)
				]);
		case 'Conj':
			var p = f.a;
			var q = f.b;
			return _List_fromArray(
				[p, q]);
		case 'Disj':
			var p = f.a;
			var q = f.b;
			return _List_fromArray(
				[p, q]);
		case 'Impl':
			var p = f.a;
			var q = f.b;
			return _List_fromArray(
				[
					$author$project$LogicUS$PL$SyntaxSemantics$fplNegation(p),
					q
				]);
		case 'Equi':
			var p = f.a;
			var q = f.b;
			return _List_fromArray(
				[
					A2($author$project$LogicUS$PL$SyntaxSemantics$Impl, p, q),
					A2($author$project$LogicUS$PL$SyntaxSemantics$Impl, q, p)
				]);
		case 'Neg':
			switch (f.a.$) {
				case 'Atom':
					var psymb = f.a.a;
					return _List_fromArray(
						[
							$author$project$LogicUS$PL$SyntaxSemantics$Neg(
							$author$project$LogicUS$PL$SyntaxSemantics$Atom(psymb))
						]);
				case 'Neg':
					var p = f.a.a;
					return _List_fromArray(
						[p]);
				case 'Impl':
					var _v1 = f.a;
					var p = _v1.a;
					var q = _v1.b;
					return _List_fromArray(
						[
							p,
							$author$project$LogicUS$PL$SyntaxSemantics$fplNegation(q)
						]);
				case 'Disj':
					var _v2 = f.a;
					var p = _v2.a;
					var q = _v2.b;
					return _List_fromArray(
						[
							$author$project$LogicUS$PL$SyntaxSemantics$fplNegation(p),
							$author$project$LogicUS$PL$SyntaxSemantics$fplNegation(q)
						]);
				case 'Insat':
					var _v3 = f.a;
					return _List_fromArray(
						[$author$project$LogicUS$PL$SyntaxSemantics$Taut]);
				case 'Taut':
					var _v4 = f.a;
					return _List_fromArray(
						[$author$project$LogicUS$PL$SyntaxSemantics$Insat]);
				case 'Conj':
					var _v5 = f.a;
					var p = _v5.a;
					var q = _v5.b;
					return _List_fromArray(
						[
							$author$project$LogicUS$PL$SyntaxSemantics$fplNegation(p),
							$author$project$LogicUS$PL$SyntaxSemantics$fplNegation(q)
						]);
				default:
					var _v6 = f.a;
					var p = _v6.a;
					var q = _v6.b;
					return _List_fromArray(
						[
							$author$project$LogicUS$PL$SyntaxSemantics$fplNegation(
							A2($author$project$LogicUS$PL$SyntaxSemantics$Impl, p, q)),
							$author$project$LogicUS$PL$SyntaxSemantics$fplNegation(
							A2($author$project$LogicUS$PL$SyntaxSemantics$Impl, q, p))
						]);
			}
		case 'Insat':
			return _List_fromArray(
				[$author$project$LogicUS$PL$SyntaxSemantics$Insat]);
		default:
			return _List_fromArray(
				[$author$project$LogicUS$PL$SyntaxSemantics$Taut]);
	}
};
var $author$project$LogicUS$PL$SemanticTableaux$B = {$: 'B'};
var $author$project$LogicUS$PL$SemanticTableaux$DN = {$: 'DN'};
var $author$project$LogicUS$PL$SemanticTableaux$I = {$: 'I'};
var $author$project$LogicUS$PL$SemanticTableaux$L = {$: 'L'};
var $author$project$LogicUS$PL$SemanticTableaux$T = {$: 'T'};
var $author$project$LogicUS$PL$SemanticTableaux$fplType = function (f) {
	switch (f.$) {
		case 'Atom':
			return $author$project$LogicUS$PL$SemanticTableaux$L;
		case 'Neg':
			switch (f.a.$) {
				case 'Atom':
					return $author$project$LogicUS$PL$SemanticTableaux$L;
				case 'Neg':
					return $author$project$LogicUS$PL$SemanticTableaux$DN;
				case 'Conj':
					var _v1 = f.a;
					return $author$project$LogicUS$PL$SemanticTableaux$B;
				case 'Disj':
					var _v2 = f.a;
					return $author$project$LogicUS$PL$SemanticTableaux$A;
				case 'Impl':
					var _v3 = f.a;
					return $author$project$LogicUS$PL$SemanticTableaux$A;
				case 'Equi':
					var _v4 = f.a;
					return $author$project$LogicUS$PL$SemanticTableaux$B;
				case 'Insat':
					var _v5 = f.a;
					return $author$project$LogicUS$PL$SemanticTableaux$T;
				default:
					var _v6 = f.a;
					return $author$project$LogicUS$PL$SemanticTableaux$I;
			}
		case 'Conj':
			return $author$project$LogicUS$PL$SemanticTableaux$A;
		case 'Disj':
			return $author$project$LogicUS$PL$SemanticTableaux$B;
		case 'Impl':
			return $author$project$LogicUS$PL$SemanticTableaux$B;
		case 'Equi':
			return $author$project$LogicUS$PL$SemanticTableaux$A;
		case 'Insat':
			return $author$project$LogicUS$PL$SemanticTableaux$I;
		default:
			return $author$project$LogicUS$PL$SemanticTableaux$T;
	}
};
var $author$project$LogicUS$PL$SemanticTableaux$splRemoveTaut = function (fs) {
	return A2(
		$elm$core$List$filter,
		function (x) {
			return !_Utils_eq(
				$author$project$LogicUS$PL$SemanticTableaux$fplType(x),
				$author$project$LogicUS$PL$SemanticTableaux$T);
		},
		fs);
};
var $author$project$LogicUS$PL$SemanticTableaux$splExpandAlpha = F2(
	function (fs, f) {
		return (!_Utils_eq(
			$author$project$LogicUS$PL$SemanticTableaux$fplType(f),
			$author$project$LogicUS$PL$SemanticTableaux$A)) ? fs : $author$project$LogicUS$PL$SemanticTableaux$splRemoveTaut(
			A2(
				$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
				A2(
					$elm$core$List$filter,
					function (x) {
						return !_Utils_eq(x, f);
					},
					fs),
				$author$project$LogicUS$PL$SemanticTableaux$fplComponents(f)));
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $author$project$LogicUS$PL$SemanticTableaux$splExpandBeta = F2(
	function (fs, f) {
		if (!_Utils_eq(
			$author$project$LogicUS$PL$SemanticTableaux$fplType(f),
			$author$project$LogicUS$PL$SemanticTableaux$B)) {
			return _Utils_Tuple2(fs, fs);
		} else {
			var newfs = A2(
				$elm$core$List$filter,
				function (x) {
					return !_Utils_eq(x, f);
				},
				fs);
			var fcomponents = $author$project$LogicUS$PL$SemanticTableaux$fplComponents(f);
			return _Utils_Tuple2(
				$author$project$LogicUS$PL$SemanticTableaux$splRemoveTaut(
					A2(
						$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
						newfs,
						A2($elm$core$List$take, 1, fcomponents))),
				$author$project$LogicUS$PL$SemanticTableaux$splRemoveTaut(
					A2(
						$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
						newfs,
						A2($elm$core$List$drop, 1, fcomponents))));
		}
	});
var $author$project$LogicUS$PL$SemanticTableaux$splExpandDN = F2(
	function (fs, f) {
		return (!_Utils_eq(
			$author$project$LogicUS$PL$SemanticTableaux$fplType(f),
			$author$project$LogicUS$PL$SemanticTableaux$DN)) ? fs : $author$project$LogicUS$PL$SemanticTableaux$splRemoveTaut(
			A2(
				$author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList,
				A2(
					$elm$core$List$filter,
					function (x) {
						return !_Utils_eq(x, f);
					},
					fs),
				$author$project$LogicUS$PL$SemanticTableaux$fplComponents(f)));
	});
var $author$project$LogicUS$PL$SemanticTableaux$splSearchAlpha = function (fs) {
	return $elm$core$List$head(
		A2(
			$elm$core$List$filter,
			function (_v0) {
				var x = _v0.b;
				return _Utils_eq(
					$author$project$LogicUS$PL$SemanticTableaux$fplType(x),
					$author$project$LogicUS$PL$SemanticTableaux$A);
			},
			A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, fs)));
};
var $author$project$LogicUS$PL$SemanticTableaux$splSearchBeta = function (fs) {
	return $elm$core$List$head(
		A2(
			$elm$core$List$filter,
			function (_v0) {
				var x = _v0.b;
				return _Utils_eq(
					$author$project$LogicUS$PL$SemanticTableaux$fplType(x),
					$author$project$LogicUS$PL$SemanticTableaux$B);
			},
			A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, fs)));
};
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm_community$list_extra$List$Extra$findIndexHelp = F3(
	function (index, predicate, list) {
		findIndexHelp:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$predicate = predicate,
						$temp$list = xs;
					index = $temp$index;
					predicate = $temp$predicate;
					list = $temp$list;
					continue findIndexHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$findIndex = $elm_community$list_extra$List$Extra$findIndexHelp(0);
var $author$project$LogicUS$PL$SemanticTableaux$splSearchContradiction = function (fs) {
	var res = $elm$core$List$head(
		A2(
			$elm$core$List$filter,
			function (_v1) {
				var x = _v1.b;
				return A2(
					$elm$core$List$member,
					$author$project$LogicUS$PL$SyntaxSemantics$fplNegation(x),
					fs) || _Utils_eq(
					$author$project$LogicUS$PL$SemanticTableaux$fplType(x),
					$author$project$LogicUS$PL$SemanticTableaux$I);
			},
			A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, fs)));
	var p = function (_v0) {
		var i = _v0.a;
		var f = _v0.b;
		if (_Utils_eq(
			$author$project$LogicUS$PL$SemanticTableaux$fplType(f),
			$author$project$LogicUS$PL$SemanticTableaux$I)) {
			return $elm$core$Maybe$Just(
				_List_fromArray(
					[i]));
		} else {
			var j = A2(
				$elm$core$Maybe$withDefault,
				-1,
				A2(
					$elm_community$list_extra$List$Extra$findIndex,
					function (x) {
						return _Utils_eq(
							x,
							$author$project$LogicUS$PL$SyntaxSemantics$fplNegation(f));
					},
					fs));
			return $elm$core$Maybe$Just(
				_List_fromArray(
					[i, j]));
		}
	};
	return A2($elm$core$Maybe$andThen, p, res);
};
var $author$project$LogicUS$PL$SemanticTableaux$splSearchDN = function (fs) {
	return $elm$core$List$head(
		A2(
			$elm$core$List$filter,
			function (_v0) {
				var x = _v0.b;
				return _Utils_eq(
					$author$project$LogicUS$PL$SemanticTableaux$fplType(x),
					$author$project$LogicUS$PL$SemanticTableaux$DN);
			},
			A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, fs)));
};
var $author$project$LogicUS$PL$SemanticTableaux$splSemanticTableauBuilder = F4(
	function (xs, nid, rule, parent) {
		var _v0 = $author$project$LogicUS$PL$SemanticTableaux$splSearchContradiction(xs);
		if (_v0.$ === 'Just') {
			var incons = _v0.a;
			return A2(
				$elm_community$graph$Graph$Tree$inner,
				{
					fs: xs,
					id: nid,
					parents: _List_fromArray(
						[parent]),
					rule: rule
				},
				_List_fromArray(
					[
						$elm_community$graph$Graph$Tree$leaf(
						{
							fs: _List_fromArray(
								[$author$project$LogicUS$PL$SyntaxSemantics$Insat]),
							id: nid + 1,
							parents: A2(
								$elm$core$List$map,
								function (x) {
									return 1 + x;
								},
								incons),
							rule: $author$project$LogicUS$PL$SemanticTableaux$IR
						})
					]));
		} else {
			var _v1 = $author$project$LogicUS$PL$SemanticTableaux$splSearchDN(xs);
			if (_v1.$ === 'Just') {
				var _v2 = _v1.a;
				var i = _v2.a;
				var f = _v2.b;
				var newxs = A2($author$project$LogicUS$PL$SemanticTableaux$splExpandDN, xs, f);
				var child = A4($author$project$LogicUS$PL$SemanticTableaux$splSemanticTableauBuilder, newxs, nid + 1, $author$project$LogicUS$PL$SemanticTableaux$DNR, i + 1);
				return A2(
					$elm_community$graph$Graph$Tree$inner,
					{
						fs: xs,
						id: nid,
						parents: _List_fromArray(
							[parent]),
						rule: rule
					},
					_List_fromArray(
						[child]));
			} else {
				var _v3 = $author$project$LogicUS$PL$SemanticTableaux$splSearchAlpha(xs);
				if (_v3.$ === 'Just') {
					var _v4 = _v3.a;
					var i = _v4.a;
					var f = _v4.b;
					var newxs = A2($author$project$LogicUS$PL$SemanticTableaux$splExpandAlpha, xs, f);
					var child = A4($author$project$LogicUS$PL$SemanticTableaux$splSemanticTableauBuilder, newxs, nid + 1, $author$project$LogicUS$PL$SemanticTableaux$AR, i + 1);
					return A2(
						$elm_community$graph$Graph$Tree$inner,
						{
							fs: xs,
							id: nid,
							parents: _List_fromArray(
								[parent]),
							rule: rule
						},
						_List_fromArray(
							[child]));
				} else {
					var _v5 = $author$project$LogicUS$PL$SemanticTableaux$splSearchBeta(xs);
					if (_v5.$ === 'Just') {
						var _v6 = _v5.a;
						var i = _v6.a;
						var f = _v6.b;
						var _v7 = A2($author$project$LogicUS$PL$SemanticTableaux$splExpandBeta, xs, f);
						var newxs1 = _v7.a;
						var newxs2 = _v7.b;
						var child2 = A4($author$project$LogicUS$PL$SemanticTableaux$splSemanticTableauBuilder, newxs2, nid + 1, $author$project$LogicUS$PL$SemanticTableaux$BR, i + 1);
						var child1 = A4($author$project$LogicUS$PL$SemanticTableaux$splSemanticTableauBuilder, newxs1, nid + 1, $author$project$LogicUS$PL$SemanticTableaux$BR, i + 1);
						return A2(
							$elm_community$graph$Graph$Tree$inner,
							{
								fs: xs,
								id: nid,
								parents: _List_fromArray(
									[parent]),
								rule: rule
							},
							_List_fromArray(
								[child1, child2]));
					} else {
						return A2(
							$elm_community$graph$Graph$Tree$inner,
							{
								fs: xs,
								id: nid,
								parents: _List_fromArray(
									[parent]),
								rule: rule
							},
							_List_fromArray(
								[
									$elm_community$graph$Graph$Tree$leaf(
									{fs: xs, id: nid + 1, parents: _List_Nil, rule: $author$project$LogicUS$PL$SemanticTableaux$TR})
								]));
					}
				}
			}
		}
	});
var $author$project$LogicUS$PL$SemanticTableaux$semanticTableau = function (fs) {
	return A4(
		$author$project$LogicUS$PL$SemanticTableaux$splSemanticTableauBuilder,
		A2($author$project$LogicUS$PL$AuxiliarFunctions$uniqueConcatList, _List_Nil, fs),
		0,
		$author$project$LogicUS$PL$SemanticTableaux$INITR,
		-1);
};
var $author$project$LogicUS$PL$SemanticTableaux$semanticTableauOpenLeaves = function (st) {
	var _v0 = $elm_community$graph$Graph$Tree$root(st);
	if (_v0.$ === 'Just') {
		if (!_v0.a.b.b) {
			var _v1 = _v0.a;
			var label = _v1.a;
			return _Utils_eq(label.rule, $author$project$LogicUS$PL$SemanticTableaux$TR) ? _List_fromArray(
				[label.fs]) : _List_Nil;
		} else {
			var _v2 = _v0.a;
			var children = _v2.b;
			return $elm_community$list_extra$List$Extra$unique(
				$elm$core$List$concat(
					A2($elm$core$List$map, $author$project$LogicUS$PL$SemanticTableaux$semanticTableauOpenLeaves, children)));
		}
	} else {
		return _List_Nil;
	}
};
var $author$project$LogicUS$PL$SemanticTableaux$semanticTableauRelevantLeaves = function (st) {
	var subsumes = F2(
		function (l1, l2) {
			return A2(
				$elm$core$List$all,
				function (x) {
					return A2($elm$core$List$member, x, l2);
				},
				l1);
		});
	var subsumedBy = F2(
		function (l1, l2) {
			return A2(
				$elm$core$List$all,
				function (x) {
					return A2($elm$core$List$member, x, l1);
				},
				l2);
		});
	return A3(
		$elm$core$List$foldr,
		F2(
			function (x, ac) {
				return (!A2(
					$elm$core$List$any,
					subsumedBy(x),
					ac)) ? A2(
					$elm$core$List$cons,
					x,
					A2(
						$elm$core$List$filter,
						A2(
							$elm$core$Basics$composeL,
							$elm$core$Basics$not,
							subsumes(x)),
						ac)) : ac;
			}),
		_List_Nil,
		$author$project$LogicUS$PL$SemanticTableaux$semanticTableauOpenLeaves(st));
};
var $author$project$LogicUS$PL$SemanticTableaux$semanticTableauNodeToDOTAux = F3(
	function (gid, p, t) {
		var _v8 = $elm_community$graph$Graph$Tree$root(t);
		if (_v8.$ === 'Just') {
			var _v9 = _v8.a;
			var l = _v9.a;
			var ch = _v9.b;
			return A4($author$project$LogicUS$PL$SemanticTableaux$semanticTableauNodeToDOTAux2, gid, p, l, ch);
		} else {
			return _Utils_Tuple2('', -1);
		}
	});
var $author$project$LogicUS$PL$SemanticTableaux$semanticTableauNodeToDOTAux2 = F4(
	function (gid, p, ni, children) {
		_v0$2:
		while (true) {
			if (children.b) {
				if (!children.b.b) {
					var c = children.a;
					var _v1 = A3($author$project$LogicUS$PL$SemanticTableaux$semanticTableauNodeToDOTAux, gid + 1, gid, c);
					var res = _v1.a;
					var lgid = _v1.b;
					var _v2 = ni.rule;
					switch (_v2.$) {
						case 'AR':
							return _Utils_Tuple2(
								$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$PL$SyntaxSemantics$splToString(ni.fs) + ('\"];\n' + (($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + (('𝛼(' + (A2(
									$elm$core$String$join,
									',',
									A2($elm$core$List$map, $elm$core$String$fromInt, ni.parents)) + ')')) + '\"];'))))) + res)))),
								lgid);
						case 'BR':
							return _Utils_Tuple2(
								$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$PL$SyntaxSemantics$splToString(ni.fs) + ('\"];\n' + (($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + (('𝛽(' + (A2(
									$elm$core$String$join,
									',',
									A2($elm$core$List$map, $elm$core$String$fromInt, ni.parents)) + ')')) + '\"];'))))) + res)))),
								lgid);
						case 'DNR':
							return _Utils_Tuple2(
								$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$PL$SyntaxSemantics$splToString(ni.fs) + ('\"];\n' + (($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + (('𝒹𝒩(' + (A2(
									$elm$core$String$join,
									',',
									A2($elm$core$List$map, $elm$core$String$fromInt, ni.parents)) + ')')) + '\"];'))))) + res)))),
								lgid);
						case 'INITR':
							return _Utils_Tuple2(
								$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$PL$SyntaxSemantics$splToString(ni.fs) + ('\"];\n' + res))),
								lgid);
						default:
							return _Utils_Tuple2('', -2);
					}
				} else {
					if (!children.b.b.b) {
						var c1 = children.a;
						var _v3 = children.b;
						var c2 = _v3.a;
						var _v4 = A3($author$project$LogicUS$PL$SemanticTableaux$semanticTableauNodeToDOTAux, gid + 1, gid, c1);
						var res1 = _v4.a;
						var lgid1 = _v4.b;
						var _v5 = A3($author$project$LogicUS$PL$SemanticTableaux$semanticTableauNodeToDOTAux, lgid1 + 1, gid, c2);
						var res2 = _v5.a;
						var lgid2 = _v5.b;
						var _v6 = ni.rule;
						switch (_v6.$) {
							case 'AR':
								return _Utils_Tuple2(
									$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$PL$SyntaxSemantics$splToString(ni.fs) + ('\"];\n' + (($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + (('𝛼(' + (A2(
										$elm$core$String$join,
										',',
										A2($elm$core$List$map, $elm$core$String$fromInt, ni.parents)) + ')')) + '\"];'))))) + (res1 + ('\n' + res2)))))),
									lgid2);
							case 'BR':
								return _Utils_Tuple2(
									$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$PL$SyntaxSemantics$splToString(ni.fs) + ('\"];\n' + (($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + (('𝛽(' + (A2(
										$elm$core$String$join,
										',',
										A2($elm$core$List$map, $elm$core$String$fromInt, ni.parents)) + ')')) + '\"];'))))) + (res1 + ('\n' + res2)))))),
									lgid2);
							case 'DNR':
								return _Utils_Tuple2(
									$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$PL$SyntaxSemantics$splToString(ni.fs) + ('\"];\n' + (($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + (('𝒹𝒩(' + (A2(
										$elm$core$String$join,
										',',
										A2($elm$core$List$map, $elm$core$String$fromInt, ni.parents)) + ')')) + '\"];'))))) + (res1 + ('\n' + res2)))))),
									lgid2);
							case 'INITR':
								return _Utils_Tuple2(
									$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$PL$SyntaxSemantics$splToString(ni.fs) + ('\"];\n' + (res1 + ('\n' + res2))))),
									lgid2);
							default:
								return _Utils_Tuple2('', -2);
						}
					} else {
						break _v0$2;
					}
				}
			} else {
				break _v0$2;
			}
		}
		var _v7 = ni.rule;
		switch (_v7.$) {
			case 'IR':
				return _Utils_Tuple2(
					$elm$core$String$fromInt(gid) + (' [label=\"' + ($author$project$LogicUS$PL$SyntaxSemantics$fplToString($author$project$LogicUS$PL$SyntaxSemantics$Insat) + ('\"];\n' + ($elm$core$String$fromInt(p) + (' -> ' + ($elm$core$String$fromInt(gid) + (' [label=\"' + (A2(
						$elm$core$String$join,
						'→←',
						A2($elm$core$List$map, $elm$core$String$fromInt, ni.parents)) + '\"];')))))))),
					gid);
			case 'TR':
				return _Utils_Tuple2(
					$elm$core$String$fromInt(gid) + (' [label=\"◯\"];\n' + ($elm$core$String$fromInt(p) + (' -> ' + $elm$core$String$fromInt(gid)))),
					gid);
			default:
				return _Utils_Tuple2('', -2);
		}
	});
var $author$project$LogicUS$PL$SemanticTableaux$semanticTableauToDOT = function (t) {
	return 'digraph{' + (A3($author$project$LogicUS$PL$SemanticTableaux$semanticTableauNodeToDOTAux, 0, -1, t).a + '}');
};
var $author$project$PLAlgProcessors$processSemanticTableauPL = F2(
	function (content, outputsSPL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var source = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(source.origin_id, source.origin_slot),
					outputsSPL);
				if (_v2.$ === 'Just') {
					var s = _v2.a;
					var _v3 = c.option;
					switch (_v3) {
						case 'full_nosimp':
							var st = $author$project$LogicUS$PL$SemanticTableaux$semanticTableau(s);
							var res = $author$project$LogicUS$PL$SemanticTableaux$semanticTableauOpenLeaves(st);
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'result',
											$elm$json$Json$Encode$string(
												A2(
													$elm$core$String$join,
													'.',
													A2($elm$core$List$map, $author$project$LogicUS$PL$SyntaxSemantics$splToString, res)))),
											_Utils_Tuple2(
											'graph',
											$elm$json$Json$Encode$string(
												$author$project$LogicUS$PL$SemanticTableaux$semanticTableauToDOT(st)))
										])),
								result: {fpl: $author$project$LogicUS$PL$SyntaxSemantics$Insat, sspl: res},
								resultMode: 1
							};
						case 'full_minimal':
							var st = $author$project$LogicUS$PL$SemanticTableaux$semanticTableau(s);
							var res = $author$project$LogicUS$PL$SemanticTableaux$semanticTableauRelevantLeaves(st);
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'result',
											$elm$json$Json$Encode$string(
												A2(
													$elm$core$String$join,
													'.',
													A2($elm$core$List$map, $author$project$LogicUS$PL$SyntaxSemantics$splToString, res)))),
											_Utils_Tuple2(
											'graph',
											$elm$json$Json$Encode$string(
												$author$project$LogicUS$PL$SemanticTableaux$semanticTableauToDOT(st)))
										])),
								result: {fpl: $author$project$LogicUS$PL$SyntaxSemantics$Insat, sspl: res},
								resultMode: 1
							};
						case 'full_asformula':
							var st = $author$project$LogicUS$PL$SemanticTableaux$semanticTableau(s);
							var res = $author$project$LogicUS$PL$SyntaxSemantics$splDisjunction(
								A2(
									$elm$core$List$map,
									$author$project$LogicUS$PL$SyntaxSemantics$splConjunction,
									$author$project$LogicUS$PL$SemanticTableaux$semanticTableauRelevantLeaves(st)));
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'result',
											$elm$json$Json$Encode$string(
												$author$project$LogicUS$PL$SyntaxSemantics$fplToString(res))),
											_Utils_Tuple2(
											'graph',
											$elm$json$Json$Encode$string(
												$author$project$LogicUS$PL$SemanticTableaux$semanticTableauToDOT(st)))
										])),
								result: {fpl: res, sspl: _List_Nil},
								resultMode: 2
							};
						default:
							return {
								errorCode: 4,
								message: $elm$json$Json$Encode$string('Unknown option (' + (c.option + ') for PLSemanticTableau')),
								result: {fpl: $author$project$LogicUS$PL$SyntaxSemantics$Insat, sspl: _List_Nil},
								resultMode: 0
							};
					}
				} else {
					return {
						errorCode: 2,
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')')))),
						result: {fpl: $author$project$LogicUS$PL$SyntaxSemantics$Insat, sspl: _List_Nil},
						resultMode: 0
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e)),
					result: {fpl: $author$project$LogicUS$PL$SyntaxSemantics$Insat, sspl: _List_Nil},
					resultMode: 0
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: {fpl: $author$project$LogicUS$PL$SyntaxSemantics$Insat, sspl: _List_Nil},
				resultMode: 0
			};
		}
	});
var $author$project$FOLBasicProcessors$processSetFOLNode = F3(
	function (content, outputsffol, outputssfol) {
		var inputDecoder = $elm$json$Json$Decode$list(
			A3(
				$elm$json$Json$Decode$map2,
				$elm$core$Tuple$pair,
				A2(
					$elm$json$Json$Decode$at,
					_List_fromArray(
						['origin_id']),
					$elm$json$Json$Decode$int),
				A2(
					$elm$json$Json$Decode$at,
					_List_fromArray(
						['origin_slot']),
					$elm$json$Json$Decode$int)));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = c.option;
			switch (_v1) {
				case 'fromFile':
					var parsedSet = function () {
						var _v5 = $elm_community$list_extra$List$Extra$unconsLast(
							A2($elm$core$String$split, '.', c.input));
						if (_v5.$ === 'Just') {
							if (_v5.a.a === '') {
								if (!_v5.a.b.b) {
									var _v6 = _v5.a;
									return A2(
										$elm$core$List$map,
										$author$project$LogicUS$FOL$SyntaxSemantics$ffolReadFromString,
										_List_fromArray(
											['']));
								} else {
									var _v7 = _v5.a;
									var ls = _v7.b;
									return A2($elm$core$List$map, $author$project$LogicUS$FOL$SyntaxSemantics$ffolReadFromString, ls);
								}
							} else {
								var _v8 = _v5.a;
								var s = _v8.a;
								var ls = _v8.b;
								return A2(
									$elm$core$List$map,
									$author$project$LogicUS$FOL$SyntaxSemantics$ffolReadFromString,
									_Utils_ap(
										ls,
										_List_fromArray(
											[s])));
							}
						} else {
							return A2(
								$elm$core$List$map,
								$author$project$LogicUS$FOL$SyntaxSemantics$ffolReadFromString,
								_List_fromArray(
									['']));
						}
					}();
					if (A2(
						$elm$core$List$any,
						function (_v2) {
							var f = _v2.a;
							return $elm_community$maybe_extra$Maybe$Extra$isNothing(f);
						},
						parsedSet)) {
						return {
							errorCode: 1,
							message: $elm$json$Json$Encode$string(
								A2(
									$elm$core$String$join,
									'.',
									A2(
										$elm$core$List$indexedMap,
										F2(
											function (i, _v3) {
												var m = _v3.c;
												return (m !== '') ? ('f' + ($elm$core$String$fromInt(i) + (' : ' + m))) : '';
											}),
										parsedSet))),
							result: _List_Nil
						};
					} else {
						var fs = $elm_community$list_extra$List$Extra$unique(
							A2(
								$elm$core$List$map,
								function (_v4) {
									var f = _v4.a;
									return A2($elm$core$Maybe$withDefault, $author$project$LogicUS$FOL$SyntaxSemantics$Insat, f);
								},
								parsedSet));
						return {
							errorCode: 0,
							message: $elm$json$Json$Encode$string(
								$author$project$LogicUS$FOL$SyntaxSemantics$sfolToString(fs)),
							result: fs
						};
					}
				case 'collect':
					var _v9 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
					if (_v9.$ === 'Ok') {
						var sources = _v9.a;
						var fs = A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(
									x,
									A2($elm$core$Dict$get, x, outputsffol));
							},
							sources);
						var _v10 = A2(
							$elm$core$List$filter,
							A2($elm$core$Basics$composeL, $elm_community$maybe_extra$Maybe$Extra$isNothing, $elm$core$Tuple$second),
							fs);
						if (!_v10.b) {
							var fs_ = $elm_community$list_extra$List$Extra$unique(
								A2(
									$elm$core$List$map,
									A2(
										$elm$core$Basics$composeL,
										$elm$core$Maybe$withDefault($author$project$LogicUS$FOL$SyntaxSemantics$Insat),
										$elm$core$Tuple$second),
									fs));
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$sfolToString(fs_)),
								result: fs_
							};
						} else {
							var undefSources = _v10;
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown sources:' + A2(
										$elm$core$String$join,
										'. ',
										A2(
											$elm$core$List$map,
											function (_v11) {
												var _v12 = _v11.a;
												var sid = _v12.a;
												var sslot = _v12.b;
												return '(' + ($elm$core$String$fromInt(sid) + (', ' + ($elm$core$String$fromInt(sslot) + ')')));
											},
											undefSources))),
								result: _List_Nil
							};
						}
					} else {
						var e = _v9.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$json$Json$Decode$errorToString(e)),
							result: _List_Nil
						};
					}
				case 'union':
					var _v13 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
					if (_v13.$ === 'Ok') {
						var sources = _v13.a;
						var fss = A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(
									x,
									A2($elm$core$Dict$get, x, outputssfol));
							},
							sources);
						var _v14 = A2(
							$elm$core$List$filter,
							A2($elm$core$Basics$composeL, $elm_community$maybe_extra$Maybe$Extra$isNothing, $elm$core$Tuple$second),
							fss);
						if (!_v14.b) {
							var fs_ = A3(
								$elm$core$List$foldl,
								F2(
									function (_v15, ac) {
										var fs = _v15.b;
										return A2(
											$author$project$Auxiliar$uniqueConcatList,
											ac,
											A2($elm$core$Maybe$withDefault, _List_Nil, fs));
									}),
								_List_Nil,
								fss);
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$sfolToString(fs_)),
								result: fs_
							};
						} else {
							var undefSources = _v14;
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown sources:' + A2(
										$elm$core$String$join,
										'. ',
										A2(
											$elm$core$List$map,
											function (_v16) {
												var _v17 = _v16.a;
												var sid = _v17.a;
												var sslot = _v17.b;
												return '(' + ($elm$core$String$fromInt(sid) + (', ' + ($elm$core$String$fromInt(sslot) + ')')));
											},
											undefSources))),
								result: _List_Nil
							};
						}
					} else {
						var e = _v13.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$json$Json$Decode$errorToString(e)),
							result: _List_Nil
						};
					}
				default:
					return {
						errorCode: 4,
						message: $elm$json$Json$Encode$string('undefined option for node of type SetFOL'),
						result: _List_Nil
					};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: _List_Nil
			};
		}
	});
var $author$project$PLBasicProcessors$processSetPLNode = F3(
	function (content, outputsFPL, outputsSPL) {
		var inputDecoder = $elm$json$Json$Decode$list(
			A3(
				$elm$json$Json$Decode$map2,
				$elm$core$Tuple$pair,
				A2(
					$elm$json$Json$Decode$at,
					_List_fromArray(
						['origin_id']),
					$elm$json$Json$Decode$int),
				A2(
					$elm$json$Json$Decode$at,
					_List_fromArray(
						['origin_slot']),
					$elm$json$Json$Decode$int)));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = c.option;
			switch (_v1) {
				case 'fromFile':
					var parsedSet = function () {
						var _v5 = $elm_community$list_extra$List$Extra$unconsLast(
							A2($elm$core$String$split, '.', c.input));
						if (_v5.$ === 'Just') {
							if (_v5.a.a === '') {
								if (!_v5.a.b.b) {
									var _v6 = _v5.a;
									return A2(
										$elm$core$List$map,
										$author$project$LogicUS$PL$SyntaxSemantics$fplReadFromString,
										_List_fromArray(
											['']));
								} else {
									var _v7 = _v5.a;
									var ls = _v7.b;
									return A2($elm$core$List$map, $author$project$LogicUS$PL$SyntaxSemantics$fplReadFromString, ls);
								}
							} else {
								var _v8 = _v5.a;
								var s = _v8.a;
								var ls = _v8.b;
								return A2(
									$elm$core$List$map,
									$author$project$LogicUS$PL$SyntaxSemantics$fplReadFromString,
									_Utils_ap(
										ls,
										_List_fromArray(
											[s])));
							}
						} else {
							return A2(
								$elm$core$List$map,
								$author$project$LogicUS$PL$SyntaxSemantics$fplReadFromString,
								_List_fromArray(
									['']));
						}
					}();
					if (A2(
						$elm$core$List$any,
						function (_v2) {
							var f = _v2.a;
							return $elm_community$maybe_extra$Maybe$Extra$isNothing(f);
						},
						parsedSet)) {
						return {
							errorCode: 1,
							message: $elm$json$Json$Encode$string(
								A2(
									$elm$core$String$join,
									'.',
									A2(
										$elm$core$List$indexedMap,
										F2(
											function (i, _v3) {
												var m = _v3.c;
												return (m !== '') ? ('f' + ($elm$core$String$fromInt(i) + (' : ' + m))) : '';
											}),
										parsedSet))),
							result: _List_Nil
						};
					} else {
						var fs = $elm_community$list_extra$List$Extra$unique(
							A2(
								$elm$core$List$map,
								function (_v4) {
									var f = _v4.a;
									return A2($elm$core$Maybe$withDefault, $author$project$LogicUS$PL$SyntaxSemantics$Insat, f);
								},
								parsedSet));
						return {
							errorCode: 0,
							message: $elm$json$Json$Encode$string(
								$author$project$LogicUS$PL$SyntaxSemantics$splToString(fs)),
							result: fs
						};
					}
				case 'collect':
					var _v9 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
					if (_v9.$ === 'Ok') {
						var sources = _v9.a;
						var fs = A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(
									x,
									A2($elm$core$Dict$get, x, outputsFPL));
							},
							sources);
						var _v10 = A2(
							$elm$core$List$filter,
							A2($elm$core$Basics$composeL, $elm_community$maybe_extra$Maybe$Extra$isNothing, $elm$core$Tuple$second),
							fs);
						if (!_v10.b) {
							var fs_ = $elm_community$list_extra$List$Extra$unique(
								A2(
									$elm$core$List$map,
									A2(
										$elm$core$Basics$composeL,
										$elm$core$Maybe$withDefault($author$project$LogicUS$PL$SyntaxSemantics$Insat),
										$elm$core$Tuple$second),
									fs));
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$splToString(fs_)),
								result: fs_
							};
						} else {
							var undefSources = _v10;
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown sources:' + A2(
										$elm$core$String$join,
										'. ',
										A2(
											$elm$core$List$map,
											function (_v11) {
												var _v12 = _v11.a;
												var sid = _v12.a;
												var sslot = _v12.b;
												return '(' + ($elm$core$String$fromInt(sid) + (', ' + ($elm$core$String$fromInt(sslot) + ')')));
											},
											undefSources))),
								result: _List_Nil
							};
						}
					} else {
						var e = _v9.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$json$Json$Decode$errorToString(e)),
							result: _List_Nil
						};
					}
				case 'union':
					var _v13 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
					if (_v13.$ === 'Ok') {
						var sources = _v13.a;
						var fss = A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(
									x,
									A2($elm$core$Dict$get, x, outputsSPL));
							},
							sources);
						var _v14 = A2(
							$elm$core$List$filter,
							A2($elm$core$Basics$composeL, $elm_community$maybe_extra$Maybe$Extra$isNothing, $elm$core$Tuple$second),
							fss);
						if (!_v14.b) {
							var fs_ = $elm_community$list_extra$List$Extra$unique(
								A3(
									$elm$core$List$foldl,
									F2(
										function (_v15, gs) {
											var fs = _v15.b;
											return A2(
												$author$project$Auxiliar$uniqueConcatList,
												gs,
												A2($elm$core$Maybe$withDefault, _List_Nil, fs));
										}),
									_List_Nil,
									fss));
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$splToString(fs_)),
								result: fs_
							};
						} else {
							var undefSources = _v14;
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown sources:' + A2(
										$elm$core$String$join,
										'. ',
										A2(
											$elm$core$List$map,
											function (_v16) {
												var _v17 = _v16.a;
												var sid = _v17.a;
												var sslot = _v17.b;
												return '(' + ($elm$core$String$fromInt(sid) + (', ' + ($elm$core$String$fromInt(sslot) + ')')));
											},
											undefSources))),
								result: _List_Nil
							};
						}
					} else {
						var e = _v13.a;
						return {
							errorCode: 3,
							message: $elm$json$Json$Encode$string(
								$elm$json$Json$Decode$errorToString(e)),
							result: _List_Nil
						};
					}
				default:
					return {
						errorCode: 4,
						message: $elm$json$Json$Encode$string('undefined option for node of type SetPL'),
						result: _List_Nil
					};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: _List_Nil
			};
		}
	});
var $author$project$LogicUS$FOL$NormalForms$applyQuantifier = F2(
	function (c, f) {
		if (c.$ === 'A') {
			var x = c.a;
			return A2($author$project$LogicUS$FOL$SyntaxSemantics$Forall, x, f);
		} else {
			var x = c.a;
			return A2($author$project$LogicUS$FOL$SyntaxSemantics$Exists, x, f);
		}
	});
var $author$project$LogicUS$FOL$NormalForms$ffolApplyQuantifiers = F2(
	function (cs, f) {
		return A3($elm$core$List$foldr, $author$project$LogicUS$FOL$NormalForms$applyQuantifier, f, cs);
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$ffolExistentialClosure = function (f) {
	var openVars = A2(
		$elm$core$List$filter,
		function (v) {
			return A2($author$project$LogicUS$FOL$SyntaxSemantics$ffolHasFreeInstanceOfVar, f, v);
		},
		$author$project$LogicUS$FOL$SyntaxSemantics$ffolVarSymbols(f));
	return $author$project$LogicUS$FOL$SyntaxSemantics$ffolRenameVars(
		A3(
			$elm$core$List$foldl,
			F2(
				function (x, ac) {
					return A2($author$project$LogicUS$FOL$SyntaxSemantics$Exists, x, ac);
				}),
			f,
			openVars));
};
var $author$project$LogicUS$FOL$NormalForms$A = function (a) {
	return {$: 'A', a: a};
};
var $author$project$LogicUS$FOL$NormalForms$E = function (a) {
	return {$: 'E', a: a};
};
var $author$project$LogicUS$FOL$NormalForms$extractHeaderQuantifiers = function (f) {
	switch (f.$) {
		case 'Forall':
			var x = f.a;
			var g = f.b;
			var _v1 = $author$project$LogicUS$FOL$NormalForms$extractHeaderQuantifiers(g);
			var cuants = _v1.a;
			var h = _v1.b;
			return _Utils_Tuple2(
				A2(
					$elm$core$List$cons,
					$author$project$LogicUS$FOL$NormalForms$A(x),
					cuants),
				h);
		case 'Exists':
			var x = f.a;
			var g = f.b;
			var _v2 = $author$project$LogicUS$FOL$NormalForms$extractHeaderQuantifiers(g);
			var cuants = _v2.a;
			var h = _v2.b;
			return _Utils_Tuple2(
				A2(
					$elm$core$List$cons,
					$author$project$LogicUS$FOL$NormalForms$E(x),
					cuants),
				h);
		default:
			return _Utils_Tuple2(_List_Nil, f);
	}
};
var $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen = function (f) {
	ffolIsOpen:
	while (true) {
		switch (f.$) {
			case 'Neg':
				var g = f.a;
				var $temp$f = g;
				f = $temp$f;
				continue ffolIsOpen;
			case 'Conj':
				var g = f.a;
				var h = f.b;
				return $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(g) && $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(h);
			case 'Disj':
				var g = f.a;
				var h = f.b;
				return $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(g) && $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(h);
			case 'Impl':
				var g = f.a;
				var h = f.b;
				return $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(g) && $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(h);
			case 'Equi':
				var g = f.a;
				var h = f.b;
				return $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(g) && $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(h);
			case 'Exists':
				return false;
			case 'Forall':
				return false;
			default:
				return true;
		}
	}
};
var $author$project$LogicUS$FOL$NormalForms$ffolIsPrenex = function (f) {
	ffolIsPrenex:
	while (true) {
		switch (f.$) {
			case 'Pred':
				return true;
			case 'Equal':
				return true;
			case 'Neg':
				var g = f.a;
				return $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(g);
			case 'Conj':
				var g = f.a;
				var h = f.b;
				return $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(g) && $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(h);
			case 'Disj':
				var g = f.a;
				var h = f.b;
				return $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(g) && $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(h);
			case 'Impl':
				var g = f.a;
				var h = f.b;
				return $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(g) && $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(h);
			case 'Equi':
				var g = f.a;
				var h = f.b;
				return $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(g) && $author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(h);
			case 'Forall':
				var g = f.b;
				var $temp$f = g;
				f = $temp$f;
				continue ffolIsPrenex;
			case 'Exists':
				var g = f.b;
				var $temp$f = g;
				f = $temp$f;
				continue ffolIsPrenex;
			case 'Insat':
				return true;
			default:
				return true;
		}
	}
};
var $author$project$LogicUS$FOL$NormalForms$contraryQuantifier = function (c) {
	if (c.$ === 'A') {
		var x = c.a;
		return $author$project$LogicUS$FOL$NormalForms$E(x);
	} else {
		var x = c.a;
		return $author$project$LogicUS$FOL$NormalForms$A(x);
	}
};
var $elm_community$list_extra$List$Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			if (!list.b) {
				return _List_Nil;
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					var $temp$predicate = predicate,
						$temp$list = xs;
					predicate = $temp$predicate;
					list = $temp$list;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$span = F2(
	function (p, xs) {
		return _Utils_Tuple2(
			A2($elm_community$list_extra$List$Extra$takeWhile, p, xs),
			A2($elm_community$list_extra$List$Extra$dropWhile, p, xs));
	});
var $elm_community$list_extra$List$Extra$break = function (p) {
	return $elm_community$list_extra$List$Extra$span(
		A2($elm$core$Basics$composeL, $elm$core$Basics$not, p));
};
var $author$project$LogicUS$FOL$NormalForms$isEQuantifier = function (c) {
	if (c.$ === 'A') {
		return false;
	} else {
		return true;
	}
};
var $author$project$LogicUS$FOL$NormalForms$sortWithFirstEAux = F3(
	function (l1, l2, res) {
		sortWithFirstEAux:
		while (true) {
			if (!l1.b) {
				return _Utils_ap(res, l2);
			} else {
				if (l1.a.$ === 'E') {
					var x = l1.a.a;
					var ls1 = l1.b;
					var $temp$l1 = ls1,
						$temp$l2 = l2,
						$temp$res = _Utils_ap(
						res,
						_List_fromArray(
							[
								$author$project$LogicUS$FOL$NormalForms$E(x)
							]));
					l1 = $temp$l1;
					l2 = $temp$l2;
					res = $temp$res;
					continue sortWithFirstEAux;
				} else {
					if (!l2.b) {
						return _Utils_ap(res, l1);
					} else {
						if (l2.a.$ === 'E') {
							var x = l2.a.a;
							var ls2 = l2.b;
							var $temp$l1 = l1,
								$temp$l2 = ls2,
								$temp$res = _Utils_ap(
								res,
								_List_fromArray(
									[
										$author$project$LogicUS$FOL$NormalForms$E(x)
									]));
							l1 = $temp$l1;
							l2 = $temp$l2;
							res = $temp$res;
							continue sortWithFirstEAux;
						} else {
							var _v2 = A2(
								$elm_community$list_extra$List$Extra$break,
								function (x) {
									return $author$project$LogicUS$FOL$NormalForms$isEQuantifier(x);
								},
								l2);
							var xs2 = _v2.a;
							var ys2 = _v2.b;
							var _v3 = A2(
								$elm_community$list_extra$List$Extra$break,
								function (x) {
									return $author$project$LogicUS$FOL$NormalForms$isEQuantifier(x);
								},
								l1);
							var xs1 = _v3.a;
							var ys1 = _v3.b;
							if ($elm$core$List$isEmpty(ys2)) {
								return _Utils_ap(
									res,
									_Utils_ap(l1, xs2));
							} else {
								if ($elm$core$List$isEmpty(ys1)) {
									return _Utils_ap(
										res,
										_Utils_ap(l2, xs1));
								} else {
									if (_Utils_cmp(
										$elm$core$List$length(xs2),
										$elm$core$List$length(xs1)) < 0) {
										var $temp$l1 = l1,
											$temp$l2 = ys2,
											$temp$res = _Utils_ap(res, xs2);
										l1 = $temp$l1;
										l2 = $temp$l2;
										res = $temp$res;
										continue sortWithFirstEAux;
									} else {
										var $temp$l1 = ys1,
											$temp$l2 = l2,
											$temp$res = _Utils_ap(res, xs1);
										l1 = $temp$l1;
										l2 = $temp$l2;
										res = $temp$res;
										continue sortWithFirstEAux;
									}
								}
							}
						}
					}
				}
			}
		}
	});
var $author$project$LogicUS$FOL$NormalForms$sortWithFirstE = F2(
	function (l1, l2) {
		return A3($author$project$LogicUS$FOL$NormalForms$sortWithFirstEAux, l1, l2, _List_Nil);
	});
var $author$project$LogicUS$FOL$NormalForms$ffolToPrenexAux = F2(
	function (nid, f) {
		switch (f.$) {
			case 'Conj':
				var g = f.a;
				var h = f.b;
				var ret1 = A2($author$project$LogicUS$FOL$NormalForms$ffolToPrenexAux, nid + 1, g);
				var max_nid1 = nid + $elm$core$List$length(ret1.nodes);
				var ret2 = A2($author$project$LogicUS$FOL$NormalForms$ffolToPrenexAux, max_nid1 + 1, h);
				var max_nid2 = max_nid1 + $elm$core$List$length(ret2.nodes);
				var openFormula = A2($author$project$LogicUS$FOL$SyntaxSemantics$Conj, ret1.f, ret2.f);
				var cuants = A2($author$project$LogicUS$FOL$NormalForms$sortWithFirstE, ret1.cuants, ret2.cuants);
				var nodes = _Utils_ap(
					_List_fromArray(
						[
							A2($elm_community$graph$Graph$Node, nid, f),
							A2(
							$elm_community$graph$Graph$Node,
							max_nid2 + 1,
							A2($author$project$LogicUS$FOL$NormalForms$ffolApplyQuantifiers, cuants, openFormula))
						]),
					_Utils_ap(ret1.nodes, ret2.nodes));
				var edges = _Utils_ap(
					_List_fromArray(
						[
							A3(
							$elm_community$graph$Graph$Edge,
							nid,
							nid + 1,
							_Utils_Tuple2(false, _List_Nil)),
							A3(
							$elm_community$graph$Graph$Edge,
							nid,
							max_nid1 + 1,
							_Utils_Tuple2(false, _List_Nil)),
							A3(
							$elm_community$graph$Graph$Edge,
							max_nid1,
							max_nid2 + 1,
							_Utils_Tuple2(true, ret1.cuants)),
							A3(
							$elm_community$graph$Graph$Edge,
							max_nid2,
							max_nid2 + 1,
							_Utils_Tuple2(false, ret2.cuants))
						]),
					_Utils_ap(ret1.edges, ret2.edges));
				return {cuants: cuants, edges: edges, f: openFormula, nodes: nodes};
			case 'Disj':
				var g = f.a;
				var h = f.b;
				var ret1 = A2($author$project$LogicUS$FOL$NormalForms$ffolToPrenexAux, nid + 1, g);
				var max_nid1 = nid + $elm$core$List$length(ret1.nodes);
				var ret2 = A2($author$project$LogicUS$FOL$NormalForms$ffolToPrenexAux, max_nid1 + 1, h);
				var max_nid2 = max_nid1 + $elm$core$List$length(ret2.nodes);
				var openFormula = A2($author$project$LogicUS$FOL$SyntaxSemantics$Disj, ret1.f, ret2.f);
				var cuants = A2($author$project$LogicUS$FOL$NormalForms$sortWithFirstE, ret1.cuants, ret2.cuants);
				var nodes = _Utils_ap(
					_List_fromArray(
						[
							A2($elm_community$graph$Graph$Node, nid, f),
							A2(
							$elm_community$graph$Graph$Node,
							max_nid2 + 1,
							A2($author$project$LogicUS$FOL$NormalForms$ffolApplyQuantifiers, cuants, openFormula))
						]),
					_Utils_ap(ret1.nodes, ret2.nodes));
				var edges = _Utils_ap(
					_List_fromArray(
						[
							A3(
							$elm_community$graph$Graph$Edge,
							nid,
							nid + 1,
							_Utils_Tuple2(false, _List_Nil)),
							A3(
							$elm_community$graph$Graph$Edge,
							nid,
							max_nid1 + 1,
							_Utils_Tuple2(false, _List_Nil)),
							A3(
							$elm_community$graph$Graph$Edge,
							max_nid1,
							max_nid2 + 1,
							_Utils_Tuple2(true, ret1.cuants)),
							A3(
							$elm_community$graph$Graph$Edge,
							max_nid2,
							max_nid2 + 1,
							_Utils_Tuple2(false, ret2.cuants))
						]),
					_Utils_ap(ret1.edges, ret2.edges));
				return {cuants: cuants, edges: edges, f: openFormula, nodes: nodes};
			case 'Impl':
				var g = f.a;
				var h = f.b;
				var ret1 = A2($author$project$LogicUS$FOL$NormalForms$ffolToPrenexAux, nid + 1, g);
				var max_nid1 = nid + $elm$core$List$length(ret1.nodes);
				var ret2 = A2($author$project$LogicUS$FOL$NormalForms$ffolToPrenexAux, max_nid1 + 1, h);
				var max_nid2 = max_nid1 + $elm$core$List$length(ret2.nodes);
				var openFormula = A2($author$project$LogicUS$FOL$SyntaxSemantics$Impl, ret1.f, ret2.f);
				var cuants = A2(
					$author$project$LogicUS$FOL$NormalForms$sortWithFirstE,
					A2($elm$core$List$map, $author$project$LogicUS$FOL$NormalForms$contraryQuantifier, ret1.cuants),
					ret2.cuants);
				var nodes = _Utils_ap(
					_List_fromArray(
						[
							A2($elm_community$graph$Graph$Node, nid, f),
							A2(
							$elm_community$graph$Graph$Node,
							max_nid2 + 1,
							A2($author$project$LogicUS$FOL$NormalForms$ffolApplyQuantifiers, cuants, openFormula))
						]),
					_Utils_ap(ret1.nodes, ret2.nodes));
				var edges = _Utils_ap(
					_List_fromArray(
						[
							A3(
							$elm_community$graph$Graph$Edge,
							nid,
							nid + 1,
							_Utils_Tuple2(false, _List_Nil)),
							A3(
							$elm_community$graph$Graph$Edge,
							nid,
							max_nid1 + 1,
							_Utils_Tuple2(false, _List_Nil)),
							A3(
							$elm_community$graph$Graph$Edge,
							max_nid1,
							max_nid2 + 1,
							_Utils_Tuple2(
								true,
								A2($elm$core$List$map, $author$project$LogicUS$FOL$NormalForms$contraryQuantifier, ret1.cuants))),
							A3(
							$elm_community$graph$Graph$Edge,
							max_nid2,
							max_nid2 + 1,
							_Utils_Tuple2(false, ret2.cuants))
						]),
					_Utils_ap(ret1.edges, ret2.edges));
				return {cuants: cuants, edges: edges, f: openFormula, nodes: nodes};
			default:
				var g = f;
				var _v1 = $author$project$LogicUS$FOL$NormalForms$extractHeaderQuantifiers(g);
				var cuants1 = _v1.a;
				var h = _v1.b;
				if ($author$project$LogicUS$FOL$SyntaxSemantics$ffolIsOpen(h)) {
					return {
						cuants: cuants1,
						edges: _List_Nil,
						f: h,
						nodes: _List_fromArray(
							[
								A2($elm_community$graph$Graph$Node, nid, f)
							])
					};
				} else {
					var ret1 = A2($author$project$LogicUS$FOL$NormalForms$ffolToPrenexAux, nid + 1, h);
					var max_nid1 = nid + $elm$core$List$length(ret1.nodes);
					var cuants = _Utils_ap(cuants1, ret1.cuants);
					var nodes = _Utils_ap(
						_List_fromArray(
							[
								A2($elm_community$graph$Graph$Node, nid, f),
								A2(
								$elm_community$graph$Graph$Node,
								max_nid1 + 1,
								A2($author$project$LogicUS$FOL$NormalForms$ffolApplyQuantifiers, cuants, ret1.f))
							]),
						ret1.nodes);
					var edges = _Utils_ap(
						_List_fromArray(
							[
								A3(
								$elm_community$graph$Graph$Edge,
								nid,
								nid + 1,
								_Utils_Tuple2(false, _List_Nil)),
								A3(
								$elm_community$graph$Graph$Edge,
								max_nid1,
								max_nid1 + 1,
								_Utils_Tuple2(false, _List_Nil))
							]),
						ret1.edges);
					return {cuants: cuants, edges: edges, f: ret1.f, nodes: nodes};
				}
		}
	});
var $author$project$LogicUS$FOL$NormalForms$ffolToPrenex = function (f) {
	var f1 = $author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv(f);
	var f2 = $author$project$LogicUS$FOL$SyntaxSemantics$ffolRenameVars(f1);
	var f3 = $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg(f2);
	var ret1 = A2($author$project$LogicUS$FOL$NormalForms$ffolToPrenexAux, 3, f3);
	return A2($author$project$LogicUS$FOL$NormalForms$ffolApplyQuantifiers, ret1.cuants, ret1.f);
};
var $author$project$LogicUS$FOL$NormalForms$getSkolemSubs = function (cS) {
	var _v0 = A3(
		$elm$core$List$foldl,
		F2(
			function (c, _v1) {
				var res = _v1.a;
				var lF = _v1.b;
				var nE = _v1.c;
				if (c.$ === 'A') {
					var x = c.a;
					return _Utils_Tuple3(
						res,
						_Utils_ap(
							lF,
							_List_fromArray(
								[
									$author$project$LogicUS$FOL$SyntaxSemantics$Var(x)
								])),
						nE);
				} else {
					var x = c.a;
					var nres = A3(
						$elm$core$Dict$insert,
						x,
						A2(
							$author$project$LogicUS$FOL$SyntaxSemantics$Func,
							_Utils_Tuple2(
								'ş',
								_List_fromArray(
									[nE + 1])),
							lF),
						res);
					return _Utils_Tuple3(nres, lF, nE + 1);
				}
			}),
		_Utils_Tuple3($elm$core$Dict$empty, _List_Nil, 0),
		cS);
	var subs = _v0.a;
	return subs;
};
var $author$project$LogicUS$FOL$NormalForms$ffolToSkolem = function (f) {
	if ($author$project$LogicUS$FOL$NormalForms$ffolIsPrenex(f)) {
		var _v0 = $author$project$LogicUS$FOL$NormalForms$extractHeaderQuantifiers(f);
		var lc = _v0.a;
		var g = _v0.b;
		return A2(
			$author$project$LogicUS$FOL$SyntaxSemantics$ffolApplySubstitution,
			$author$project$LogicUS$FOL$NormalForms$getSkolemSubs(lc),
			g);
	} else {
		var f1 = $author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv(f);
		var f2 = $author$project$LogicUS$FOL$SyntaxSemantics$ffolRenameVars(f1);
		var f3 = $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg(f2);
		return $author$project$LogicUS$FOL$NormalForms$ffolToPrenex(
			A3($author$project$LogicUS$FOL$NormalForms$ffolToSkolem2Aux, true, 1, f3).a);
	}
};
var $author$project$LogicUS$FOL$NormalForms$ffolToNNF = function (f) {
	return A2(
		$elm$core$Basics$composeL,
		A2(
			$elm$core$Basics$composeL,
			A2($elm$core$Basics$composeL, $author$project$LogicUS$FOL$NormalForms$ffolToSkolem, $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg),
			$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllImpl),
		$author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv)(f);
};
var $author$project$LogicUS$FOL$NormalForms$ffolToCNF = function (f) {
	return $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeDisj(
		$author$project$LogicUS$FOL$NormalForms$ffolToNNF(f));
};
var $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeConj = function (f) {
	switch (f.$) {
		case 'Disj':
			var f1 = f.a;
			var f2 = f.b;
			return A2(
				$author$project$LogicUS$FOL$SyntaxSemantics$Disj,
				$author$project$LogicUS$FOL$NormalForms$ffolInteriorizeConj(f1),
				$author$project$LogicUS$FOL$NormalForms$ffolInteriorizeConj(f2));
		case 'Conj':
			if (f.a.$ === 'Disj') {
				var _v1 = f.a;
				var f1 = _v1.a;
				var f2 = _v1.b;
				var g = f.b;
				return $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeConj(
					A2(
						$author$project$LogicUS$FOL$SyntaxSemantics$Disj,
						A2($author$project$LogicUS$FOL$SyntaxSemantics$Conj, f1, g),
						A2($author$project$LogicUS$FOL$SyntaxSemantics$Conj, f2, g)));
			} else {
				if (f.b.$ === 'Disj') {
					var g = f.a;
					var _v2 = f.b;
					var f1 = _v2.a;
					var f2 = _v2.b;
					return $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeConj(
						A2(
							$author$project$LogicUS$FOL$SyntaxSemantics$Disj,
							A2($author$project$LogicUS$FOL$SyntaxSemantics$Conj, g, f1),
							A2($author$project$LogicUS$FOL$SyntaxSemantics$Conj, g, f2)));
				} else {
					var f1 = f.a;
					var f2 = f.b;
					var g2 = $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeConj(f2);
					var g1 = $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeConj(f1);
					if (g1.$ === 'Disj') {
						return $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeConj(
							A2($author$project$LogicUS$FOL$SyntaxSemantics$Conj, g1, g2));
					} else {
						if (g2.$ === 'Disj') {
							return $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeConj(
								A2($author$project$LogicUS$FOL$SyntaxSemantics$Conj, g1, g2));
						} else {
							return f;
						}
					}
				}
			}
		default:
			return f;
	}
};
var $author$project$LogicUS$FOL$NormalForms$ffolToDNF = function (f) {
	return $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeConj(
		$author$project$LogicUS$FOL$NormalForms$ffolToNNF(f));
};
var $author$project$LogicUS$FOL$NormalForms$ffolToPrenex2 = function (f) {
	var f1 = $author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv(f);
	var f2 = $author$project$LogicUS$FOL$SyntaxSemantics$ffolRenameVars(f1);
	var f3 = $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg(f2);
	var ret1 = A2($author$project$LogicUS$FOL$NormalForms$ffolToPrenexAux, 4, f3);
	var nodes_extra = _Utils_ap(
		(!_Utils_eq(f, f3)) ? _List_fromArray(
			[
				A2($elm_community$graph$Graph$Node, 1, f)
			]) : _List_Nil,
		_Utils_ap(
			((!_Utils_eq(f1, f)) && (!_Utils_eq(f1, f3))) ? _List_fromArray(
				[
					A2($elm_community$graph$Graph$Node, 2, f1)
				]) : _List_Nil,
			((!_Utils_eq(f2, f1)) && (!_Utils_eq(f2, f3))) ? _List_fromArray(
				[
					A2($elm_community$graph$Graph$Node, 3, f2)
				]) : _List_Nil));
	var edges_extra = $elm$core$List$isEmpty(nodes_extra) ? _List_Nil : A3(
		$elm$core$List$foldr,
		F2(
			function (n, _v0) {
				var j = _v0.a;
				var es = _v0.b;
				return _Utils_Tuple2(
					n.id,
					A2(
						$elm$core$List$cons,
						A3(
							$elm_community$graph$Graph$Edge,
							n.id,
							j,
							_Utils_Tuple2(false, _List_Nil)),
						es));
			}),
		_Utils_Tuple2(4, _List_Nil),
		nodes_extra).b;
	return _Utils_Tuple3(
		ret1.cuants,
		ret1.f,
		A2(
			$elm_community$graph$Graph$fromNodesAndEdges,
			_Utils_ap(nodes_extra, ret1.nodes),
			_Utils_ap(edges_extra, ret1.edges)));
};
var $author$project$LogicUS$FOL$NormalForms$prenexGraphToDOT = function (g) {
	var toStringQuantifier = function (c) {
		if (c.$ === 'A') {
			var t = c.a;
			return '∀' + $author$project$LogicUS$FOL$SyntaxSemantics$termToString(
				$author$project$LogicUS$FOL$SyntaxSemantics$Var(t));
		} else {
			var t = c.a;
			return '∃' + $author$project$LogicUS$FOL$SyntaxSemantics$termToString(
				$author$project$LogicUS$FOL$SyntaxSemantics$Var(t));
		}
	};
	return A3(
		$elm$core$String$replace,
		'\n',
		'',
		A3(
			$elm_community$graph$Graph$DOT$output,
			A2($elm$core$Basics$composeL, $elm$core$Maybe$Just, $author$project$LogicUS$FOL$SyntaxSemantics$ffolToString),
			function (_v0) {
				var cent = _v0.a;
				var xs = _v0.b;
				return _Utils_eq(xs, _List_Nil) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
					_Utils_ap(
						cent ? '*' : '',
						A2(
							$elm$core$String$join,
							',',
							A2($elm$core$List$map, toStringQuantifier, xs))));
			},
			g));
};
var $author$project$FOLBasicProcessors$processTransformFFOLNode = F2(
	function (content, outputsffol) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var sources = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(sources.origin_id, sources.origin_slot),
					outputsffol);
				if (_v2.$ === 'Just') {
					var f = _v2.a;
					var _v3 = c.option;
					switch (_v3) {
						case 'replaceEquiv':
							var f_ = $author$project$LogicUS$FOL$NormalForms$ffolRemoveAllEquiv(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f_)),
								result: f_
							};
						case 'replaceImpl':
							var f_ = $author$project$LogicUS$FOL$NormalForms$ffolRemoveAllImpl(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f_)),
								result: f_
							};
						case 'interiorizeNegs':
							var f_ = $author$project$LogicUS$FOL$NormalForms$ffolInteriorizeNeg(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f_)),
								result: f_
							};
						case 'toNNF':
							var f_ = $author$project$LogicUS$FOL$NormalForms$ffolToNNF(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f_)),
								result: f_
							};
						case 'toCNF':
							var f_ = $author$project$LogicUS$FOL$NormalForms$ffolToCNF(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f_)),
								result: f_
							};
						case 'toDNF':
							var f_ = $author$project$LogicUS$FOL$NormalForms$ffolToDNF(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f_)),
								result: f_
							};
						case '∀-closure':
							var f_ = $author$project$LogicUS$FOL$SyntaxSemantics$ffolUniversalClosure(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f_)),
								result: f_
							};
						case '∃-closure':
							var f_ = $author$project$LogicUS$FOL$SyntaxSemantics$ffolExistentialClosure(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f_)),
								result: f_
							};
						case 'varsRename':
							var f_ = $author$project$LogicUS$FOL$SyntaxSemantics$ffolRenameVars(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f_)),
								result: f_
							};
						case 'toPrenex':
							var _v4 = $author$project$LogicUS$FOL$NormalForms$ffolToPrenex2(f);
							var cs = _v4.a;
							var g = _v4.b;
							var graph = _v4.c;
							var graph_ = $author$project$LogicUS$FOL$NormalForms$prenexGraphToDOT(graph);
							var f_ = A2($author$project$LogicUS$FOL$NormalForms$ffolApplyQuantifiers, cs, g);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'f',
											$elm$json$Json$Encode$string(
												$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f_))),
											_Utils_Tuple2(
											'g',
											$elm$json$Json$Encode$string(graph_))
										])),
								result: f_
							};
						case 'toSkolem':
							var f_ = $author$project$LogicUS$FOL$NormalForms$ffolToSkolem(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(f_)),
								result: f_
							};
						default:
							return {
								errorCode: 4,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string('undefined option for node of type transformFFOL'),
								result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
							};
					}
				} else {
					return {
						errorCode: 2,
						id: _Utils_Tuple2(-1, -1),
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(sources.origin_id) + (', ' + ($elm$core$String$fromInt(sources.origin_slot) + ')')))),
						result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					id: _Utils_Tuple2(-1, -1),
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e)),
					result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				id: _Utils_Tuple2(-1, -1),
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: $author$project$LogicUS$FOL$SyntaxSemantics$Insat
			};
		}
	});
var $author$project$Auxiliar$fplInteriorizeAllConj2 = function (f) {
	switch (f.$) {
		case 'Atom':
			return f;
		case 'Disj':
			var f1 = f.a;
			var f2 = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Disj,
				$author$project$Auxiliar$fplInteriorizeAllConj2(f1),
				$author$project$Auxiliar$fplInteriorizeAllConj2(f2));
		case 'Conj':
			if (f.a.$ === 'Disj') {
				var _v1 = f.a;
				var f1 = _v1.a;
				var f2 = _v1.b;
				var g = f.b;
				return $author$project$Auxiliar$fplInteriorizeAllConj2(
					A2(
						$author$project$LogicUS$PL$SyntaxSemantics$Disj,
						A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, f1, g),
						A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, f2, g)));
			} else {
				if (f.b.$ === 'Disj') {
					var g = f.a;
					var _v2 = f.b;
					var f1 = _v2.a;
					var f2 = _v2.b;
					return $author$project$Auxiliar$fplInteriorizeAllConj2(
						A2(
							$author$project$LogicUS$PL$SyntaxSemantics$Disj,
							A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, g, f1),
							A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, g, f2)));
				} else {
					var f1 = f.a;
					var f2 = f.b;
					var g2 = $author$project$Auxiliar$fplInteriorizeAllConj2(f2);
					var g1 = $author$project$Auxiliar$fplInteriorizeAllConj2(f1);
					if (g1.$ === 'Disj') {
						var x1 = g1.a;
						var y1 = g1.b;
						if (g2.$ === 'Disj') {
							var x2 = g2.a;
							var y2 = g2.b;
							return $author$project$Auxiliar$fplInteriorizeAllConj2(
								A2(
									$author$project$LogicUS$PL$SyntaxSemantics$Conj,
									A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, x1, y1),
									A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, x2, y2)));
						} else {
							var x2 = g2;
							return $author$project$Auxiliar$fplInteriorizeAllConj2(
								A2(
									$author$project$LogicUS$PL$SyntaxSemantics$Conj,
									A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, x1, y1),
									x2));
						}
					} else {
						var x1 = g1;
						if (g2.$ === 'Disj') {
							var x2 = g2.a;
							var y2 = g2.b;
							return $author$project$Auxiliar$fplInteriorizeAllConj2(
								A2(
									$author$project$LogicUS$PL$SyntaxSemantics$Conj,
									x1,
									A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, x2, y2)));
						} else {
							var x2 = g2;
							return A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, x1, x2);
						}
					}
				}
			}
		default:
			return f;
	}
};
var $author$project$Auxiliar$fplInteriorizeAllDisj2 = function (f) {
	switch (f.$) {
		case 'Atom':
			return f;
		case 'Conj':
			var f1 = f.a;
			var f2 = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Conj,
				$author$project$Auxiliar$fplInteriorizeAllDisj2(f1),
				$author$project$Auxiliar$fplInteriorizeAllDisj2(f2));
		case 'Disj':
			if (f.a.$ === 'Conj') {
				var _v1 = f.a;
				var f1 = _v1.a;
				var f2 = _v1.b;
				var g = f.b;
				return $author$project$Auxiliar$fplInteriorizeAllDisj2(
					A2(
						$author$project$LogicUS$PL$SyntaxSemantics$Conj,
						A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, f1, g),
						A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, f2, g)));
			} else {
				if (f.b.$ === 'Conj') {
					var g = f.a;
					var _v2 = f.b;
					var f1 = _v2.a;
					var f2 = _v2.b;
					return $author$project$Auxiliar$fplInteriorizeAllDisj2(
						A2(
							$author$project$LogicUS$PL$SyntaxSemantics$Conj,
							A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, g, f1),
							A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, g, f2)));
				} else {
					var f1 = f.a;
					var f2 = f.b;
					var g2 = $author$project$Auxiliar$fplInteriorizeAllDisj2(f2);
					var g1 = $author$project$Auxiliar$fplInteriorizeAllDisj2(f1);
					if (g1.$ === 'Conj') {
						var x1 = g1.a;
						var y1 = g1.b;
						if (g2.$ === 'Conj') {
							var x2 = g2.a;
							var y2 = g2.b;
							return $author$project$Auxiliar$fplInteriorizeAllDisj2(
								A2(
									$author$project$LogicUS$PL$SyntaxSemantics$Disj,
									A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, x1, y1),
									A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, x2, y2)));
						} else {
							var x2 = g2;
							return $author$project$Auxiliar$fplInteriorizeAllDisj2(
								A2(
									$author$project$LogicUS$PL$SyntaxSemantics$Disj,
									A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, x1, y1),
									x2));
						}
					} else {
						var x1 = g1;
						if (g2.$ === 'Conj') {
							var x2 = g2.a;
							var y2 = g2.b;
							return $author$project$Auxiliar$fplInteriorizeAllDisj2(
								A2(
									$author$project$LogicUS$PL$SyntaxSemantics$Disj,
									x1,
									A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, x2, y2)));
						} else {
							var x2 = g2;
							return A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, x1, x2);
						}
					}
				}
			}
		default:
			return f;
	}
};
var $author$project$Auxiliar$fplInteriorizeAllNeg2 = function (f) {
	var fplInteriorizeAllNeg2Aux = function (p) {
		switch (p.$) {
			case 'Atom':
				var x = p.a;
				return $author$project$LogicUS$PL$SyntaxSemantics$Neg(
					$author$project$LogicUS$PL$SyntaxSemantics$Atom(x));
			case 'Neg':
				var x = p.a;
				return $author$project$Auxiliar$fplInteriorizeAllNeg2(x);
			case 'Conj':
				var x = p.a;
				var y = p.b;
				return A2(
					$author$project$LogicUS$PL$SyntaxSemantics$Disj,
					fplInteriorizeAllNeg2Aux(x),
					fplInteriorizeAllNeg2Aux(y));
			case 'Disj':
				var x = p.a;
				var y = p.b;
				return A2(
					$author$project$LogicUS$PL$SyntaxSemantics$Conj,
					fplInteriorizeAllNeg2Aux(x),
					fplInteriorizeAllNeg2Aux(y));
			case 'Impl':
				var x = p.a;
				var y = p.b;
				return $author$project$LogicUS$PL$SyntaxSemantics$Neg(
					A2(
						$author$project$LogicUS$PL$SyntaxSemantics$Impl,
						$author$project$Auxiliar$fplInteriorizeAllNeg2(x),
						$author$project$Auxiliar$fplInteriorizeAllNeg2(y)));
			case 'Equi':
				var x = p.a;
				var y = p.b;
				return $author$project$LogicUS$PL$SyntaxSemantics$Neg(
					A2(
						$author$project$LogicUS$PL$SyntaxSemantics$Equi,
						$author$project$Auxiliar$fplInteriorizeAllNeg2(x),
						$author$project$Auxiliar$fplInteriorizeAllNeg2(y)));
			case 'Insat':
				return $author$project$LogicUS$PL$SyntaxSemantics$Taut;
			default:
				return $author$project$LogicUS$PL$SyntaxSemantics$Insat;
		}
	};
	switch (f.$) {
		case 'Atom':
			var x = f.a;
			return $author$project$LogicUS$PL$SyntaxSemantics$Atom(x);
		case 'Neg':
			var x = f.a;
			return fplInteriorizeAllNeg2Aux(x);
		case 'Conj':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Conj,
				$author$project$Auxiliar$fplInteriorizeAllNeg2(x),
				$author$project$Auxiliar$fplInteriorizeAllNeg2(y));
		case 'Disj':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Disj,
				$author$project$Auxiliar$fplInteriorizeAllNeg2(x),
				$author$project$Auxiliar$fplInteriorizeAllNeg2(y));
		case 'Impl':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Impl,
				$author$project$Auxiliar$fplInteriorizeAllNeg2(x),
				$author$project$Auxiliar$fplInteriorizeAllNeg2(y));
		case 'Equi':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Equi,
				$author$project$Auxiliar$fplInteriorizeAllNeg2(x),
				$author$project$Auxiliar$fplInteriorizeAllNeg2(y));
		case 'Insat':
			return $author$project$LogicUS$PL$SyntaxSemantics$Insat;
		default:
			return $author$project$LogicUS$PL$SyntaxSemantics$Taut;
	}
};
var $author$project$LogicUS$PL$NormalForms$fplRemoveAllEquiv = function (f) {
	switch (f.$) {
		case 'Atom':
			var x = f.a;
			return $author$project$LogicUS$PL$SyntaxSemantics$Atom(x);
		case 'Neg':
			var x = f.a;
			return $author$project$LogicUS$PL$SyntaxSemantics$Neg(
				$author$project$LogicUS$PL$NormalForms$fplRemoveAllEquiv(x));
		case 'Conj':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Conj,
				$author$project$LogicUS$PL$NormalForms$fplRemoveAllEquiv(x),
				$author$project$LogicUS$PL$NormalForms$fplRemoveAllEquiv(y));
		case 'Disj':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Disj,
				$author$project$LogicUS$PL$NormalForms$fplRemoveAllEquiv(x),
				$author$project$LogicUS$PL$NormalForms$fplRemoveAllEquiv(y));
		case 'Impl':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Impl,
				$author$project$LogicUS$PL$NormalForms$fplRemoveAllEquiv(x),
				$author$project$LogicUS$PL$NormalForms$fplRemoveAllEquiv(y));
		case 'Equi':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Conj,
				A2(
					$author$project$LogicUS$PL$SyntaxSemantics$Impl,
					$author$project$LogicUS$PL$NormalForms$fplRemoveAllEquiv(x),
					$author$project$LogicUS$PL$NormalForms$fplRemoveAllEquiv(y)),
				A2(
					$author$project$LogicUS$PL$SyntaxSemantics$Impl,
					$author$project$LogicUS$PL$NormalForms$fplRemoveAllEquiv(y),
					$author$project$LogicUS$PL$NormalForms$fplRemoveAllEquiv(x)));
		case 'Insat':
			return $author$project$LogicUS$PL$SyntaxSemantics$Insat;
		default:
			return $author$project$LogicUS$PL$SyntaxSemantics$Taut;
	}
};
var $author$project$LogicUS$PL$NormalForms$fplRemoveAllImpl = function (f) {
	switch (f.$) {
		case 'Atom':
			var x = f.a;
			return $author$project$LogicUS$PL$SyntaxSemantics$Atom(x);
		case 'Neg':
			var x = f.a;
			return $author$project$LogicUS$PL$SyntaxSemantics$Neg(
				$author$project$LogicUS$PL$NormalForms$fplRemoveAllImpl(x));
		case 'Conj':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Conj,
				$author$project$LogicUS$PL$NormalForms$fplRemoveAllImpl(x),
				$author$project$LogicUS$PL$NormalForms$fplRemoveAllImpl(y));
		case 'Disj':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Disj,
				$author$project$LogicUS$PL$NormalForms$fplRemoveAllImpl(x),
				$author$project$LogicUS$PL$NormalForms$fplRemoveAllImpl(y));
		case 'Impl':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Disj,
				$author$project$LogicUS$PL$SyntaxSemantics$Neg(
					$author$project$LogicUS$PL$NormalForms$fplRemoveAllImpl(x)),
				$author$project$LogicUS$PL$NormalForms$fplRemoveAllImpl(y));
		case 'Equi':
			var x = f.a;
			var y = f.b;
			return A2(
				$author$project$LogicUS$PL$SyntaxSemantics$Conj,
				$author$project$LogicUS$PL$NormalForms$fplRemoveAllImpl(
					A2($author$project$LogicUS$PL$SyntaxSemantics$Impl, x, y)),
				$author$project$LogicUS$PL$NormalForms$fplRemoveAllImpl(
					A2($author$project$LogicUS$PL$SyntaxSemantics$Impl, y, x)));
		case 'Insat':
			return $author$project$LogicUS$PL$SyntaxSemantics$Insat;
		default:
			return $author$project$LogicUS$PL$SyntaxSemantics$Taut;
	}
};
var $author$project$LogicUS$PL$NormalForms$fplInteriorizeAllConj = function (f) {
	_v0$8:
	while (true) {
		switch (f.$) {
			case 'Atom':
				return $elm$core$Maybe$Just(f);
			case 'Disj':
				var f1 = f.a;
				var f2 = f.b;
				return A3(
					$elm$core$Maybe$map2,
					$author$project$LogicUS$PL$SyntaxSemantics$Disj,
					$author$project$LogicUS$PL$NormalForms$fplInteriorizeAllConj(f1),
					$author$project$LogicUS$PL$NormalForms$fplInteriorizeAllConj(f2));
			case 'Conj':
				if (f.a.$ === 'Disj') {
					var _v1 = f.a;
					var f1 = _v1.a;
					var f2 = _v1.b;
					var g = f.b;
					return $author$project$LogicUS$PL$NormalForms$fplInteriorizeAllConj(
						A2(
							$author$project$LogicUS$PL$SyntaxSemantics$Disj,
							A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, f1, g),
							A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, f2, g)));
				} else {
					if (f.b.$ === 'Disj') {
						var g = f.a;
						var _v2 = f.b;
						var f1 = _v2.a;
						var f2 = _v2.b;
						return $author$project$LogicUS$PL$NormalForms$fplInteriorizeAllConj(
							A2(
								$author$project$LogicUS$PL$SyntaxSemantics$Disj,
								A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, g, f1),
								A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, g, f2)));
					} else {
						var f1 = f.a;
						var f2 = f.b;
						var g2 = $author$project$LogicUS$PL$NormalForms$fplInteriorizeAllConj(f2);
						var g1 = $author$project$LogicUS$PL$NormalForms$fplInteriorizeAllConj(f1);
						if (g1.$ === 'Just') {
							if (g1.a.$ === 'Disj') {
								var _v4 = g1.a;
								var x1 = _v4.a;
								var y1 = _v4.b;
								if (g2.$ === 'Just') {
									if (g2.a.$ === 'Disj') {
										var _v6 = g2.a;
										var x2 = _v6.a;
										var y2 = _v6.b;
										return $author$project$LogicUS$PL$NormalForms$fplInteriorizeAllConj(
											A2(
												$author$project$LogicUS$PL$SyntaxSemantics$Conj,
												A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, x1, y1),
												A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, x2, y2)));
									} else {
										var x2 = g2.a;
										return $author$project$LogicUS$PL$NormalForms$fplInteriorizeAllConj(
											A2(
												$author$project$LogicUS$PL$SyntaxSemantics$Conj,
												A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, x1, y1),
												x2));
									}
								} else {
									return $elm$core$Maybe$Nothing;
								}
							} else {
								var x1 = g1.a;
								if (g2.$ === 'Just') {
									if (g2.a.$ === 'Disj') {
										var _v8 = g2.a;
										var x2 = _v8.a;
										var y2 = _v8.b;
										return $author$project$LogicUS$PL$NormalForms$fplInteriorizeAllConj(
											A2(
												$author$project$LogicUS$PL$SyntaxSemantics$Conj,
												x1,
												A2($author$project$LogicUS$PL$SyntaxSemantics$Disj, x2, y2)));
									} else {
										var x2 = g2.a;
										return $elm$core$Maybe$Just(
											A2($author$project$LogicUS$PL$SyntaxSemantics$Conj, x1, x2));
									}
								} else {
									return $elm$core$Maybe$Nothing;
								}
							}
						} else {
							return $elm$core$Maybe$Nothing;
						}
					}
				}
			case 'Neg':
				if (f.a.$ === 'Atom') {
					return $elm$core$Maybe$Just(f);
				} else {
					break _v0$8;
				}
			case 'Insat':
				return $elm$core$Maybe$Just($author$project$LogicUS$PL$SyntaxSemantics$Insat);
			case 'Taut':
				return $elm$core$Maybe$Just($author$project$LogicUS$PL$SyntaxSemantics$Taut);
			default:
				break _v0$8;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $author$project$LogicUS$PL$NormalForms$fplToDNF = function (f) {
	return A2(
		$elm$core$Maybe$withDefault,
		$author$project$LogicUS$PL$SyntaxSemantics$Insat,
		$author$project$LogicUS$PL$NormalForms$fplInteriorizeAllConj(
			$author$project$LogicUS$PL$NormalForms$fplToNNF(f)));
};
var $author$project$PLBasicProcessors$processTransformFPLNode = F2(
	function (content, outputsFPL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var sources = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(sources.origin_id, sources.origin_slot),
					outputsFPL);
				if (_v2.$ === 'Just') {
					var f = _v2.a;
					var _v3 = c.option;
					switch (_v3) {
						case 'replaceEquiv':
							var f_ = $author$project$LogicUS$PL$NormalForms$fplRemoveAllEquiv(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$fplToString(f_)),
								result: f_
							};
						case 'replaceImpl':
							var f_ = $author$project$LogicUS$PL$NormalForms$fplRemoveAllImpl(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$fplToString(f_)),
								result: f_
							};
						case 'interiorizeNegs':
							var f_ = $author$project$Auxiliar$fplInteriorizeAllNeg2(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$fplToString(f_)),
								result: f_
							};
						case 'interiorizeConjs':
							var f_ = $author$project$Auxiliar$fplInteriorizeAllConj2(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$fplToString(f_)),
								result: f_
							};
						case 'interiorizeDisjs':
							var f_ = $author$project$Auxiliar$fplInteriorizeAllDisj2(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$fplToString(f_)),
								result: f_
							};
						case 'toNNF':
							var f_ = $author$project$LogicUS$PL$NormalForms$fplToNNF(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$fplToString(f_)),
								result: f_
							};
						case 'toCNF':
							var f_ = $author$project$LogicUS$PL$NormalForms$fplToCNF(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$fplToString(f_)),
								result: f_
							};
						case 'toDNF':
							var f_ = $author$project$LogicUS$PL$NormalForms$fplToDNF(f);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$fplToString(f_)),
								result: f_
							};
						default:
							return {
								errorCode: 4,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string('undefined option for node of type transformSetPL'),
								result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
							};
					}
				} else {
					return {
						errorCode: 2,
						id: _Utils_Tuple2(-1, -1),
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(sources.origin_id) + (', ' + ($elm$core$String$fromInt(sources.origin_slot) + ')')))),
						result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					id: _Utils_Tuple2(-1, -1),
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e)),
					result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				id: _Utils_Tuple2(-1, -1),
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: $author$project$LogicUS$PL$SyntaxSemantics$Insat
			};
		}
	});
var $author$project$LogicUS$FOL$SyntaxSemantics$sfolConjunction = function (fs) {
	if (!fs.b) {
		return $author$project$LogicUS$FOL$SyntaxSemantics$Taut;
	} else {
		var x = fs.a;
		var xs = fs.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (f, ac) {
					return A2($author$project$LogicUS$FOL$SyntaxSemantics$Conj, ac, f);
				}),
			x,
			xs);
	}
};
var $author$project$LogicUS$FOL$SyntaxSemantics$sfolDisjunction = function (fs) {
	if (!fs.b) {
		return $author$project$LogicUS$FOL$SyntaxSemantics$Insat;
	} else {
		var x = fs.a;
		var xs = fs.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (f, ac) {
					return A2($author$project$LogicUS$FOL$SyntaxSemantics$Disj, ac, f);
				}),
			x,
			xs);
	}
};
var $author$project$LogicUS$FOL$NormalForms$sfolToDNF = function (fs) {
	return A2(
		$elm$core$List$map,
		$author$project$LogicUS$FOL$NormalForms$ffolInteriorizeConj,
		$author$project$LogicUS$FOL$NormalForms$sfolToNNF(fs));
};
var $author$project$FOLBasicProcessors$processTransformSetFOLNode = F2(
	function (content, outputsSPL) {
		var result = {cs: _List_Nil, f: $author$project$LogicUS$FOL$SyntaxSemantics$Insat, s: _List_Nil};
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var sources = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(sources.origin_id, sources.origin_slot),
					outputsSPL);
				if (_v2.$ === 'Just') {
					var fs = _v2.a;
					var _v3 = c.option;
					switch (_v3) {
						case 'neg_all':
							var fs_ = A2($elm$core$List$map, $author$project$LogicUS$FOL$SyntaxSemantics$ffolNegation, fs);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$sfolToString(fs_)),
								result: _Utils_update(
									result,
									{s: fs_}),
								succ_code: 1
							};
						case 'conj_all':
							var fs_ = $author$project$LogicUS$FOL$SyntaxSemantics$sfolConjunction(fs);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(fs_)),
								result: _Utils_update(
									result,
									{f: fs_}),
								succ_code: 2
							};
						case 'disj_all':
							var fs_ = $author$project$LogicUS$FOL$SyntaxSemantics$sfolDisjunction(fs);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$ffolToString(fs_)),
								result: _Utils_update(
									result,
									{f: fs_}),
								succ_code: 3
							};
						case '∀-closure':
							var fs_ = A2($elm$core$List$map, $author$project$LogicUS$FOL$SyntaxSemantics$ffolUniversalClosure, fs);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$sfolToString(fs_)),
								result: _Utils_update(
									result,
									{s: fs_}),
								succ_code: 4
							};
						case '∃-closure':
							var fs_ = A2($elm$core$List$map, $author$project$LogicUS$FOL$SyntaxSemantics$ffolExistentialClosure, fs);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$sfolToString(fs_)),
								result: _Utils_update(
									result,
									{s: fs_}),
								succ_code: 5
							};
						case 'toSkolem':
							var fs_ = $author$project$LogicUS$FOL$NormalForms$sfolToSkolem(fs);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$sfolToString(fs_)),
								result: _Utils_update(
									result,
									{s: fs_}),
								succ_code: 6
							};
						case 'toCNF':
							var fs_ = $author$project$LogicUS$FOL$NormalForms$sfolToCNF(fs);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$sfolToString(fs_)),
								result: _Utils_update(
									result,
									{s: fs_}),
								succ_code: 7
							};
						case 'toDNF':
							var fs_ = $author$project$LogicUS$FOL$NormalForms$sfolToDNF(fs);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$SyntaxSemantics$sfolToString(fs_)),
								result: _Utils_update(
									result,
									{s: fs_}),
								succ_code: 8
							};
						case 'toClauses':
							var fs_ = $author$project$LogicUS$FOL$Clauses$sfolToClauses(fs);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$FOL$Clauses$csfolToString(fs_)),
								result: _Utils_update(
									result,
									{cs: fs_}),
								succ_code: 9
							};
						default:
							return {
								errorCode: 4,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string('undefined option for node of type TransformSetFOL'),
								result: result,
								succ_code: 0
							};
					}
				} else {
					return {
						errorCode: 2,
						id: _Utils_Tuple2(-1, -1),
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(sources.origin_id) + (', ' + ($elm$core$String$fromInt(sources.origin_slot) + ')')))),
						result: result,
						succ_code: 0
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					id: _Utils_Tuple2(-1, -1),
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e)),
					result: result,
					succ_code: 0
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				id: _Utils_Tuple2(-1, -1),
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: result,
				succ_code: 0
			};
		}
	});
var $author$project$LogicUS$PL$SyntaxSemantics$splNegation = $elm$core$List$map($author$project$LogicUS$PL$SyntaxSemantics$fplNegation);
var $author$project$PLBasicProcessors$processTransformSetPLNode = F2(
	function (content, outputsSPL) {
		var result = {cs: _List_Nil, f: $author$project$LogicUS$PL$SyntaxSemantics$Insat, s: _List_Nil};
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var sources = _v1.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(sources.origin_id, sources.origin_slot),
					outputsSPL);
				if (_v2.$ === 'Just') {
					var fs = _v2.a;
					var _v3 = c.option;
					switch (_v3) {
						case 'neg_all':
							var fs_ = $author$project$LogicUS$PL$SyntaxSemantics$splNegation(fs);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$splToString(fs_)),
								result: _Utils_update(
									result,
									{s: fs_}),
								succ_code: 1
							};
						case 'conj_all':
							var fs_ = $author$project$LogicUS$PL$SyntaxSemantics$splConjunction(fs);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$fplToString(fs_)),
								result: _Utils_update(
									result,
									{f: fs_}),
								succ_code: 2
							};
						case 'disj_all':
							var fs_ = $author$project$LogicUS$PL$SyntaxSemantics$splDisjunction(fs);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$fplToString(fs_)),
								result: _Utils_update(
									result,
									{f: fs_}),
								succ_code: 3
							};
						case 'to_cnf':
							var fs_ = A2($elm$core$List$map, $author$project$LogicUS$PL$NormalForms$fplToCNF, fs);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$splToString(fs_)),
								result: _Utils_update(
									result,
									{s: fs_}),
								succ_code: 4
							};
						case 'to_dnf':
							var fs_ = A2($elm$core$List$map, $author$project$LogicUS$PL$NormalForms$fplToDNF, fs);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$splToString(fs_)),
								result: _Utils_update(
									result,
									{s: fs_}),
								succ_code: 5
							};
						case 'to_clauses':
							var fs_ = $author$project$LogicUS$PL$Clauses$splToClauses(fs);
							return {
								errorCode: 0,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$Clauses$csplToString(fs_)),
								result: _Utils_update(
									result,
									{cs: fs_}),
								succ_code: 6
							};
						default:
							return {
								errorCode: 4,
								id: _Utils_Tuple2(sources.origin_id, sources.origin_slot),
								message: $elm$json$Json$Encode$string('undefined option for node of type transformSetPL'),
								result: result,
								succ_code: 0
							};
					}
				} else {
					return {
						errorCode: 2,
						id: _Utils_Tuple2(-1, -1),
						message: $elm$json$Json$Encode$string(
							'Unknown source: (' + ($elm$core$String$fromInt(sources.origin_id) + (', ' + ($elm$core$String$fromInt(sources.origin_slot) + ')')))),
						result: result,
						succ_code: 0
					};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					id: _Utils_Tuple2(-1, -1),
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e)),
					result: result,
					succ_code: 0
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				id: _Utils_Tuple2(-1, -1),
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e)),
				result: result,
				succ_code: 0
			};
		}
	});
var $author$project$LogicUS$PL$AuxiliarFunctions$powerset = A2(
	$elm$core$List$foldr,
	F2(
		function (x, acc) {
			return _Utils_ap(
				acc,
				A2(
					$elm$core$List$map,
					$elm$core$List$cons(x),
					acc));
		}),
	_List_fromArray(
		[_List_Nil]));
var $author$project$LogicUS$PL$SyntaxSemantics$fplInterpretations = function (f) {
	return $elm$core$List$sort(
		A2(
			$elm$core$List$map,
			$elm$core$List$sort,
			$author$project$LogicUS$PL$AuxiliarFunctions$powerset(
				$author$project$LogicUS$PL$SyntaxSemantics$fplSymbols(f))));
};
var $author$project$LogicUS$PL$SyntaxSemantics$fplValuation = F2(
	function (f, i) {
		switch (f.$) {
			case 'Atom':
				var psymb = f.a;
				return A2($elm$core$List$member, psymb, i);
			case 'Neg':
				var p = f.a;
				return !A2($author$project$LogicUS$PL$SyntaxSemantics$fplValuation, p, i);
			case 'Conj':
				var p = f.a;
				var q = f.b;
				return A2($author$project$LogicUS$PL$SyntaxSemantics$fplValuation, p, i) && A2($author$project$LogicUS$PL$SyntaxSemantics$fplValuation, q, i);
			case 'Disj':
				var p = f.a;
				var q = f.b;
				return A2($author$project$LogicUS$PL$SyntaxSemantics$fplValuation, p, i) || A2($author$project$LogicUS$PL$SyntaxSemantics$fplValuation, q, i);
			case 'Impl':
				var p = f.a;
				var q = f.b;
				return (!A2($author$project$LogicUS$PL$SyntaxSemantics$fplValuation, p, i)) || A2($author$project$LogicUS$PL$SyntaxSemantics$fplValuation, q, i);
			case 'Equi':
				var p = f.a;
				var q = f.b;
				return A2(
					$author$project$LogicUS$PL$SyntaxSemantics$fplValuation,
					A2($author$project$LogicUS$PL$SyntaxSemantics$Impl, p, q),
					i) && A2(
					$author$project$LogicUS$PL$SyntaxSemantics$fplValuation,
					A2($author$project$LogicUS$PL$SyntaxSemantics$Impl, q, p),
					i);
			case 'Insat':
				return false;
			default:
				return true;
		}
	});
var $author$project$LogicUS$PL$SyntaxSemantics$fplTruthTable = function (f) {
	return A2(
		$elm$core$List$map,
		function (x) {
			return _Utils_Tuple2(
				x,
				A2($author$project$LogicUS$PL$SyntaxSemantics$fplValuation, f, x));
		},
		$author$project$LogicUS$PL$SyntaxSemantics$fplInterpretations(f));
};
var $author$project$LogicUS$PL$AuxiliarFunctions$fromListToTableString = function (xss) {
	return A2(
		$elm$core$String$join,
		' \n',
		A2(
			$elm$core$List$map,
			function (xs) {
				return A2($elm$core$String$join, ' ; ', xs);
			},
			xss));
};
var $author$project$LogicUS$PL$SyntaxSemantics$fplTruthTableString = function (f) {
	var tableEnters = $author$project$LogicUS$PL$SyntaxSemantics$fplTruthTable(f);
	var symbs = $author$project$LogicUS$PL$SyntaxSemantics$fplSymbols(f);
	var head = _Utils_ap(
		A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $author$project$LogicUS$PL$SyntaxSemantics$fplToString, $author$project$LogicUS$PL$SyntaxSemantics$Atom),
			symbs),
		_List_fromArray(
			[
				$author$project$LogicUS$PL$SyntaxSemantics$fplToString(f)
			]));
	var body = A2(
		$elm$core$List$map,
		function (_v0) {
			var i = _v0.a;
			var v = _v0.b;
			return _Utils_ap(
				A2(
					$elm$core$List$map,
					function (s) {
						return A2($elm$core$List$member, s, i) ? 'T' : 'F';
					},
					symbs),
				_List_fromArray(
					[
						v ? 'T' : 'F'
					]));
		},
		tableEnters);
	return $author$project$LogicUS$PL$AuxiliarFunctions$fromListToTableString(
		A2($elm$core$List$cons, head, body));
};
var $author$project$LogicUS$PL$SyntaxSemantics$splInterpretations = function (fs) {
	return $author$project$LogicUS$PL$AuxiliarFunctions$powerset(
		$author$project$LogicUS$PL$SyntaxSemantics$splSymbols(fs));
};
var $author$project$LogicUS$PL$SyntaxSemantics$splValuation = F2(
	function (fs, i) {
		return A2(
			$elm$core$List$all,
			function (p) {
				return A2($author$project$LogicUS$PL$SyntaxSemantics$fplValuation, p, i);
			},
			fs);
	});
var $author$project$LogicUS$PL$SyntaxSemantics$splTruthTable = function (fs) {
	return A2(
		$elm$core$List$map,
		function (x) {
			return _Utils_Tuple2(
				x,
				A2($author$project$LogicUS$PL$SyntaxSemantics$splValuation, fs, x));
		},
		$author$project$LogicUS$PL$SyntaxSemantics$splInterpretations(fs));
};
var $author$project$LogicUS$PL$SyntaxSemantics$splCompactTruthTableString = function (fs) {
	var tableEnters = $author$project$LogicUS$PL$SyntaxSemantics$splTruthTable(fs);
	var symbs = $author$project$LogicUS$PL$SyntaxSemantics$splSymbols(fs);
	var head = _Utils_ap(
		A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $author$project$LogicUS$PL$SyntaxSemantics$fplToString, $author$project$LogicUS$PL$SyntaxSemantics$Atom),
			symbs),
		_List_fromArray(
			['U']));
	var body = A2(
		$elm$core$List$map,
		function (_v0) {
			var i = _v0.a;
			var v = _v0.b;
			return _Utils_ap(
				A2(
					$elm$core$List$map,
					function (s) {
						return A2($elm$core$List$member, s, i) ? 'T' : 'F';
					},
					symbs),
				_List_fromArray(
					[
						v ? 'T' : 'F'
					]));
		},
		tableEnters);
	return $author$project$LogicUS$PL$AuxiliarFunctions$fromListToTableString(
		A2($elm$core$List$cons, head, body));
};
var $author$project$LogicUS$PL$SyntaxSemantics$splTruthTableString = function (fs) {
	var tableEnters = $author$project$LogicUS$PL$SyntaxSemantics$splTruthTable(fs);
	var symbs = $author$project$LogicUS$PL$SyntaxSemantics$splSymbols(fs);
	var head = _Utils_ap(
		A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $author$project$LogicUS$PL$SyntaxSemantics$fplToString, $author$project$LogicUS$PL$SyntaxSemantics$Atom),
			symbs),
		_Utils_ap(
			A2($elm$core$List$map, $author$project$LogicUS$PL$SyntaxSemantics$fplToString, fs),
			_List_fromArray(
				['U'])));
	var body = A2(
		$elm$core$List$map,
		function (_v0) {
			var i = _v0.a;
			var v = _v0.b;
			return _Utils_ap(
				A2(
					$elm$core$List$map,
					function (s) {
						return A2($elm$core$List$member, s, i) ? 'T' : 'F';
					},
					symbs),
				_Utils_ap(
					A2(
						$elm$core$List$map,
						function (p) {
							return A2($author$project$LogicUS$PL$SyntaxSemantics$fplValuation, p, i) ? 'T' : 'F';
						},
						fs),
					_List_fromArray(
						[
							v ? 'T' : 'F'
						])));
		},
		tableEnters);
	return $author$project$LogicUS$PL$AuxiliarFunctions$fromListToTableString(
		A2($elm$core$List$cons, head, body));
};
var $author$project$PLAlgProcessors$processTruthTablePL = F3(
	function (content, outputsFPL, outputsSPL) {
		var inputDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {origin_id: x, origin_slot: y};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_id']),
				$elm$json$Json$Decode$int),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['origin_slot']),
				$elm$json$Json$Decode$int));
		var contentDecoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (x, y) {
					return {input: y, option: x};
				}),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['option']),
				$elm$json$Json$Decode$string),
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['input']),
				$elm$json$Json$Decode$string));
		var _v0 = A2($elm$json$Json$Decode$decodeString, contentDecoder, content);
		if (_v0.$ === 'Ok') {
			var c = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, inputDecoder, c.input);
			if (_v1.$ === 'Ok') {
				var source = _v1.a;
				var _v2 = c.option;
				switch (_v2) {
					case 'FPL':
						var _v3 = A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(source.origin_id, source.origin_slot),
							outputsFPL);
						if (_v3.$ === 'Just') {
							var f = _v3.a;
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$fplTruthTableString(f))
							};
						} else {
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')'))))
							};
						}
					case 'SPL_full':
						var _v4 = A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(source.origin_id, source.origin_slot),
							outputsSPL);
						if (_v4.$ === 'Just') {
							var s = _v4.a;
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$splTruthTableString(s))
							};
						} else {
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')'))))
							};
						}
					case 'SPL_lite':
						var _v5 = A2(
							$elm$core$Dict$get,
							_Utils_Tuple2(source.origin_id, source.origin_slot),
							outputsSPL);
						if (_v5.$ === 'Just') {
							var s = _v5.a;
							return {
								errorCode: 0,
								message: $elm$json$Json$Encode$string(
									$author$project$LogicUS$PL$SyntaxSemantics$splCompactTruthTableString(s))
							};
						} else {
							return {
								errorCode: 2,
								message: $elm$json$Json$Encode$string(
									'Unknown source: (' + ($elm$core$String$fromInt(source.origin_id) + (', ' + ($elm$core$String$fromInt(source.origin_slot) + ')'))))
							};
						}
					default:
						return {
							errorCode: 4,
							message: $elm$json$Json$Encode$string('Unknown option (' + (c.option + ') for TruthTable'))
						};
				}
			} else {
				var e = _v1.a;
				return {
					errorCode: 3,
					message: $elm$json$Json$Encode$string(
						$elm$json$Json$Decode$errorToString(e))
				};
			}
		} else {
			var e = _v0.a;
			return {
				errorCode: 3,
				message: $elm$json$Json$Encode$string(
					$elm$json$Json$Decode$errorToString(e))
			};
		}
	});
var $author$project$AppCore$Query = F3(
	function (nodeId, nodeType, content) {
		return {content: content, nodeId: nodeId, nodeType: nodeType};
	});
var $author$project$AppCore$queryDecoder = A4(
	$elm$json$Json$Decode$map3,
	$author$project$AppCore$Query,
	A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['nodeId']),
		$elm$json$Json$Decode$int),
	A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['nodeType']),
		$elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['content']),
		$elm$json$Json$Decode$string));
var $author$project$AppCore$sendMessage = _Platform_outgoingPort('sendMessage', $elm$json$Json$Encode$string);
var $author$project$AppCore$update = F2(
	function (msg, model) {
		var s = msg.a;
		var _v1 = A2($elm$json$Json$Decode$decodeString, $author$project$AppCore$queryDecoder, s);
		if (_v1.$ === 'Ok') {
			var q = _v1.a;
			var _v2 = q.nodeType;
			switch (_v2) {
				case 'ClearModel':
					return $author$project$AppCore$init(_Utils_Tuple0);
				case 'RemoveNode':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsCFOL: A2(
									$elm$core$Dict$filter,
									F2(
										function (k, _v3) {
											return !_Utils_eq(k.a, q.nodeId);
										}),
									model.outputsCFOL),
								outputsCPL: A2(
									$elm$core$Dict$filter,
									F2(
										function (k, _v4) {
											return !_Utils_eq(k.a, q.nodeId);
										}),
									model.outputsCPL),
								outputsCSFOL: A2(
									$elm$core$Dict$filter,
									F2(
										function (k, _v5) {
											return !_Utils_eq(k.a, q.nodeId);
										}),
									model.outputsCSFOL),
								outputsCSPL: A2(
									$elm$core$Dict$filter,
									F2(
										function (k, _v6) {
											return !_Utils_eq(k.a, q.nodeId);
										}),
									model.outputsCSPL),
								outputsCSPPL: A2(
									$elm$core$Dict$filter,
									F2(
										function (k, _v7) {
											return !_Utils_eq(k.a, q.nodeId);
										}),
									model.outputsCSPPL),
								outputsFFOL: A2(
									$elm$core$Dict$filter,
									F2(
										function (k, _v8) {
											return !_Utils_eq(k.a, q.nodeId);
										}),
									model.outputsFFOL),
								outputsFHRS: A2(
									$elm$core$Dict$filter,
									F2(
										function (k, _v9) {
											return !_Utils_eq(k.a, q.nodeId);
										}),
									model.outputsFHRS),
								outputsFPL: A2(
									$elm$core$Dict$filter,
									F2(
										function (k, _v10) {
											return !_Utils_eq(k.a, q.nodeId);
										}),
									model.outputsFPL),
								outputsKBHRS: A2(
									$elm$core$Dict$filter,
									F2(
										function (k, _v11) {
											return !_Utils_eq(k.a, q.nodeId);
										}),
									model.outputsKBHRS),
								outputsRHRS: A2(
									$elm$core$Dict$filter,
									F2(
										function (k, _v12) {
											return !_Utils_eq(k.a, q.nodeId);
										}),
									model.outputsRHRS),
								outputsRSHRS: A2(
									$elm$core$Dict$filter,
									F2(
										function (k, _v13) {
											return !_Utils_eq(k.a, q.nodeId);
										}),
									model.outputsRSHRS),
								outputsSFOL: A2(
									$elm$core$Dict$filter,
									F2(
										function (k, _v14) {
											return !_Utils_eq(k.a, q.nodeId);
										}),
									model.outputsSFOL),
								outputsSPL: A2(
									$elm$core$Dict$filter,
									F2(
										function (k, _v15) {
											return !_Utils_eq(k.a, q.nodeId);
										}),
									model.outputsSPL)
							}),
						$elm$core$Platform$Cmd$none);
				case 'FormulaPL':
					var pq = $author$project$PLBasicProcessors$processFormulaPLNode(q.content);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsFPL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsFPL) : model.outputsFPL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'SetPL':
					var pq = A3($author$project$PLBasicProcessors$processSetPLNode, q.content, model.outputsFPL, model.outputsSPL);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsSPL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsSPL) : model.outputsSPL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'ConnectivePL':
					var pq = A2($author$project$PLBasicProcessors$processConnectivePLNode, q.content, model.outputsFPL);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsFPL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsFPL) : model.outputsFPL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'TransformFPL':
					var pq = A2($author$project$PLBasicProcessors$processTransformFPLNode, q.content, model.outputsFPL);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsFPL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsFPL) : model.outputsFPL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'TransformSetPL':
					var pq = A2($author$project$PLBasicProcessors$processTransformSetPLNode, q.content, model.outputsSPL);
					if (!pq.errorCode) {
						var model_ = _Utils_update(
							model,
							{
								outputsCSPL: A2(
									$elm$core$Dict$filter,
									F2(
										function (_v17, _v18) {
											var kid = _v17.a;
											return !_Utils_eq(kid, q.nodeId);
										}),
									model.outputsCSPL),
								outputsFPL: A2(
									$elm$core$Dict$filter,
									F2(
										function (_v19, _v20) {
											var kid = _v19.a;
											return !_Utils_eq(kid, q.nodeId);
										}),
									model.outputsFPL),
								outputsSPL: A2(
									$elm$core$Dict$filter,
									F2(
										function (_v21, _v22) {
											var kid = _v21.a;
											return !_Utils_eq(kid, q.nodeId);
										}),
									model.outputsSPL)
							});
						return _Utils_Tuple2(
							function () {
								var _v16 = pq.succ_code;
								switch (_v16) {
									case 1:
										return _Utils_update(
											model_,
											{
												outputsSPL: A3(
													$elm$core$Dict$insert,
													_Utils_Tuple2(q.nodeId, 0),
													pq.result.s,
													model.outputsSPL)
											});
									case 2:
										return _Utils_update(
											model_,
											{
												outputsFPL: A3(
													$elm$core$Dict$insert,
													_Utils_Tuple2(q.nodeId, 0),
													pq.result.f,
													model.outputsFPL)
											});
									case 3:
										return _Utils_update(
											model_,
											{
												outputsFPL: A3(
													$elm$core$Dict$insert,
													_Utils_Tuple2(q.nodeId, 0),
													pq.result.f,
													model.outputsFPL)
											});
									case 4:
										return _Utils_update(
											model_,
											{
												outputsSPL: A3(
													$elm$core$Dict$insert,
													_Utils_Tuple2(q.nodeId, 0),
													pq.result.s,
													model.outputsSPL)
											});
									case 5:
										return _Utils_update(
											model_,
											{
												outputsSPL: A3(
													$elm$core$Dict$insert,
													_Utils_Tuple2(q.nodeId, 0),
													pq.result.s,
													model.outputsSPL)
											});
									default:
										return _Utils_update(
											model_,
											{
												outputsCSPL: A3(
													$elm$core$Dict$insert,
													_Utils_Tuple2(q.nodeId, 0),
													pq.result.cs,
													model.outputsCSPL)
											});
								}
							}(),
							$author$project$AppCore$sendMessage(
								A2(
									$elm$json$Json$Encode$encode,
									0,
									$elm$json$Json$Encode$object(
										_List_fromArray(
											[
												_Utils_Tuple2(
												'errorCode',
												$elm$json$Json$Encode$int(pq.errorCode)),
												_Utils_Tuple2(
												'nodeId',
												$elm$json$Json$Encode$int(q.nodeId)),
												_Utils_Tuple2('message', pq.message)
											])))));
					} else {
						return _Utils_Tuple2(
							model,
							$author$project$AppCore$sendMessage(
								A2(
									$elm$json$Json$Encode$encode,
									0,
									$elm$json$Json$Encode$object(
										_List_fromArray(
											[
												_Utils_Tuple2(
												'errorCode',
												$elm$json$Json$Encode$int(pq.errorCode)),
												_Utils_Tuple2(
												'nodeId',
												$elm$json$Json$Encode$int(q.nodeId)),
												_Utils_Tuple2('message', pq.message)
											])))));
					}
				case 'ClausePL':
					var pq = $author$project$PLBasicProcessors$processClausePLNode(q.content);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsCPL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsCPL) : model.outputsCPL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'ClauseSetPL':
					var pq = A4($author$project$PLBasicProcessors$processClauseSetPLNode, q.content, model.outputsCPL, model.outputsSPL, model.outputsCSPL);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsCSPL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsCSPL) : model.outputsCSPL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'HornFactPL':
					var pq = $author$project$PLBasicProcessors$processHornFactPLNode(q.content);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsFHRS: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsFHRS) : model.outputsFHRS
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'HornFactSetPL':
					var pq = A3($author$project$PLBasicProcessors$processHornFactSetPLNode, q.content, model.outputsFHRS, model.outputsKBHRS);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsKBHRS: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsKBHRS) : model.outputsKBHRS
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'HornRulePL':
					var pq = A3($author$project$PLBasicProcessors$processHornRulePLNode, q.content, model.outputsFHRS, model.outputsKBHRS);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsRHRS: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsRHRS) : model.outputsRHRS
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'HornRuleSetPL':
					var pq = A3($author$project$PLBasicProcessors$processHornRuleSetPLNode, q.content, model.outputsRHRS, model.outputsRSHRS);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsRSHRS: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsRSHRS) : model.outputsRSHRS
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'HornFwChPL':
					var pq = A4($author$project$PLAlgProcessors$processHornFwChPL, q.content, model.outputsRSHRS, model.outputsKBHRS, model.outputsFHRS);
					return _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'HornBWCh':
					var pq = A4($author$project$PLAlgProcessors$processHornBwChPL, q.content, model.outputsRSHRS, model.outputsKBHRS, model.outputsFHRS);
					return _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'SemanticTableauPL':
					var pq = A2($author$project$PLAlgProcessors$processSemanticTableauPL, q.content, model.outputsSPL);
					if (!pq.errorCode) {
						var _v23 = pq.resultMode;
						if (_v23 === 1) {
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										outputsFPL: A2(
											$elm$core$Dict$remove,
											_Utils_Tuple2(q.nodeId, 0),
											model.outputsFPL),
										outputsSPL: A2(
											$elm$core$Dict$union,
											$elm$core$Dict$fromList(
												A2(
													$elm$core$List$indexedMap,
													F2(
														function (i, ls) {
															return _Utils_Tuple2(
																_Utils_Tuple2(q.nodeId, i),
																ls);
														}),
													pq.result.sspl)),
											model.outputsSPL)
									}),
								$author$project$AppCore$sendMessage(
									A2(
										$elm$json$Json$Encode$encode,
										0,
										$elm$json$Json$Encode$object(
											_List_fromArray(
												[
													_Utils_Tuple2(
													'errorCode',
													$elm$json$Json$Encode$int(0)),
													_Utils_Tuple2(
													'nodeId',
													$elm$json$Json$Encode$int(q.nodeId)),
													_Utils_Tuple2('message', pq.message)
												])))));
						} else {
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										outputsFPL: A3(
											$elm$core$Dict$insert,
											_Utils_Tuple2(q.nodeId, 0),
											pq.result.fpl,
											model.outputsFPL),
										outputsSPL: A2(
											$elm$core$Dict$filter,
											F2(
												function (k, _v24) {
													return !_Utils_eq(k.a, q.nodeId);
												}),
											model.outputsSPL)
									}),
								$author$project$AppCore$sendMessage(
									A2(
										$elm$json$Json$Encode$encode,
										0,
										$elm$json$Json$Encode$object(
											_List_fromArray(
												[
													_Utils_Tuple2(
													'errorCode',
													$elm$json$Json$Encode$int(0)),
													_Utils_Tuple2(
													'nodeId',
													$elm$json$Json$Encode$int(q.nodeId)),
													_Utils_Tuple2('message', pq.message)
												])))));
						}
					} else {
						return _Utils_Tuple2(
							model,
							$author$project$AppCore$sendMessage(
								A2(
									$elm$json$Json$Encode$encode,
									0,
									$elm$json$Json$Encode$object(
										_List_fromArray(
											[
												_Utils_Tuple2(
												'errorCode',
												$elm$json$Json$Encode$int(pq.errorCode)),
												_Utils_Tuple2(
												'nodeId',
												$elm$json$Json$Encode$int(q.nodeId)),
												_Utils_Tuple2('message', pq.message)
											])))));
					}
				case 'TruthTablePL':
					var pq = A3($author$project$PLAlgProcessors$processTruthTablePL, q.content, model.outputsFPL, model.outputsSPL);
					return (!pq.errorCode) ? _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(0)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										]))))) : _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'ResolutionPL':
					var pq = A2($author$project$PLAlgProcessors$processResolutionPL, q.content, model.outputsCSPL);
					return (!pq.errorCode) ? _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(0)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										]))))) : _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'ResolutionGraphPL':
					var pq = A2($author$project$PLAlgProcessors$processResolutionGraphPL, q.content, model.outputsCSPL);
					return (!pq.errorCode) ? _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(0)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										]))))) : _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'DPLLGraphPL':
					var pq = A2($author$project$PLAlgProcessors$processDPLLGraphPL, q.content, model.outputsCSPL);
					return (!pq.errorCode) ? _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(0)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										]))))) : _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'FormulaFOL':
					var pq = $author$project$FOLBasicProcessors$processFormulaFOLNode(q.content);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsFFOL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsFFOL) : model.outputsFFOL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'TransformFFOL':
					var pq = A2($author$project$FOLBasicProcessors$processTransformFFOLNode, q.content, model.outputsFFOL);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsFFOL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsFFOL) : model.outputsFFOL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'SetFOL':
					var pq = A3($author$project$FOLBasicProcessors$processSetFOLNode, q.content, model.outputsFFOL, model.outputsSFOL);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsSFOL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsSFOL) : model.outputsSFOL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'TransformSetFOL':
					var pq = A2($author$project$FOLBasicProcessors$processTransformSetFOLNode, q.content, model.outputsSFOL);
					if (!pq.errorCode) {
						var model_ = _Utils_update(
							model,
							{
								outputsCSPL: A2(
									$elm$core$Dict$filter,
									F2(
										function (_v26, _v27) {
											var kid = _v26.a;
											return !_Utils_eq(kid, q.nodeId);
										}),
									model.outputsCSPL),
								outputsFPL: A2(
									$elm$core$Dict$filter,
									F2(
										function (_v28, _v29) {
											var kid = _v28.a;
											return !_Utils_eq(kid, q.nodeId);
										}),
									model.outputsFPL),
								outputsSPL: A2(
									$elm$core$Dict$filter,
									F2(
										function (_v30, _v31) {
											var kid = _v30.a;
											return !_Utils_eq(kid, q.nodeId);
										}),
									model.outputsSPL)
							});
						return _Utils_Tuple2(
							function () {
								var _v25 = pq.succ_code;
								switch (_v25) {
									case 1:
										return _Utils_update(
											model_,
											{
												outputsSFOL: A3(
													$elm$core$Dict$insert,
													_Utils_Tuple2(q.nodeId, 0),
													pq.result.s,
													model.outputsSFOL)
											});
									case 2:
										return _Utils_update(
											model_,
											{
												outputsFFOL: A3(
													$elm$core$Dict$insert,
													_Utils_Tuple2(q.nodeId, 0),
													pq.result.f,
													model.outputsFFOL)
											});
									case 3:
										return _Utils_update(
											model_,
											{
												outputsFFOL: A3(
													$elm$core$Dict$insert,
													_Utils_Tuple2(q.nodeId, 0),
													pq.result.f,
													model.outputsFFOL)
											});
									case 4:
										return _Utils_update(
											model_,
											{
												outputsSFOL: A3(
													$elm$core$Dict$insert,
													_Utils_Tuple2(q.nodeId, 0),
													pq.result.s,
													model.outputsSFOL)
											});
									case 5:
										return _Utils_update(
											model_,
											{
												outputsSFOL: A3(
													$elm$core$Dict$insert,
													_Utils_Tuple2(q.nodeId, 0),
													pq.result.s,
													model.outputsSFOL)
											});
									case 6:
										return _Utils_update(
											model_,
											{
												outputsSFOL: A3(
													$elm$core$Dict$insert,
													_Utils_Tuple2(q.nodeId, 0),
													pq.result.s,
													model.outputsSFOL)
											});
									case 7:
										return _Utils_update(
											model_,
											{
												outputsSFOL: A3(
													$elm$core$Dict$insert,
													_Utils_Tuple2(q.nodeId, 0),
													pq.result.s,
													model.outputsSFOL)
											});
									case 8:
										return _Utils_update(
											model_,
											{
												outputsSFOL: A3(
													$elm$core$Dict$insert,
													_Utils_Tuple2(q.nodeId, 0),
													pq.result.s,
													model.outputsSFOL)
											});
									default:
										return _Utils_update(
											model_,
											{
												outputsCSFOL: A3(
													$elm$core$Dict$insert,
													_Utils_Tuple2(q.nodeId, 0),
													pq.result.cs,
													model.outputsCSFOL)
											});
								}
							}(),
							$author$project$AppCore$sendMessage(
								A2(
									$elm$json$Json$Encode$encode,
									0,
									$elm$json$Json$Encode$object(
										_List_fromArray(
											[
												_Utils_Tuple2(
												'errorCode',
												$elm$json$Json$Encode$int(pq.errorCode)),
												_Utils_Tuple2(
												'nodeId',
												$elm$json$Json$Encode$int(q.nodeId)),
												_Utils_Tuple2('message', pq.message)
											])))));
					} else {
						return _Utils_Tuple2(
							model,
							$author$project$AppCore$sendMessage(
								A2(
									$elm$json$Json$Encode$encode,
									0,
									$elm$json$Json$Encode$object(
										_List_fromArray(
											[
												_Utils_Tuple2(
												'errorCode',
												$elm$json$Json$Encode$int(pq.errorCode)),
												_Utils_Tuple2(
												'nodeId',
												$elm$json$Json$Encode$int(q.nodeId)),
												_Utils_Tuple2('message', pq.message)
											])))));
					}
				case 'ConnectiveFOL':
					var pq = A2($author$project$FOLBasicProcessors$processConnectiveFOLNode, q.content, model.outputsFFOL);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsFFOL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsFFOL) : model.outputsFFOL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'QuantifierFOL':
					var pq = A2($author$project$FOLBasicProcessors$processQuantifierFOLNode, q.content, model.outputsFFOL);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsFFOL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsFFOL) : model.outputsFFOL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'ClauseFOL':
					var pq = $author$project$FOLBasicProcessors$processClauseFOLNode(q.content);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsCFOL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsCFOL) : model.outputsCFOL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'ClauseSetFOL':
					var pq = A4($author$project$FOLBasicProcessors$processClauseSetFOLNode, q.content, model.outputsCFOL, model.outputsSFOL, model.outputsCSFOL);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsCSFOL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsCSFOL) : model.outputsCSFOL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'SemanticTableauFOL':
					var pq = A2($author$project$FOLAlgProcessors$processSemanticTableauFOL, q.content, model.outputsSFOL);
					return _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'ResolutionGraphFOL':
					var pq = A2($author$project$FOLAlgProcessors$processResolutionGraphFOL, q.content, model.outputsCSFOL);
					return (!pq.errorCode) ? _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(0)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										]))))) : _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'HerbrandUniverseFOL':
					var pq = A2($author$project$FOLBasicProcessors$processHerbrandUniverseFOLNode, q.content, model.outputsSFOL);
					return _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'HerbrandBaseFOL':
					var pq = A2($author$project$FOLBasicProcessors$processHerbrandBaseFOLNode, q.content, model.outputsSFOL);
					return _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'HerbrandInterpretationsFOL':
					var pq = A2($author$project$FOLBasicProcessors$processHerbrandInterpretationsFOLNode, q.content, model.outputsSFOL);
					return _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'HerbrandModelsFOL':
					var pq = A2($author$project$FOLBasicProcessors$processHerbrandModelsFOLNode, q.content, model.outputsSFOL);
					return _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'HerbrandExtensionFOL':
					var pq = A2($author$project$FOLBasicProcessors$processHerbrandExtensionFOLNode, q.content, model.outputsSFOL);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsSPL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsSPL) : model.outputsSPL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'CSPPL':
					var pq = $author$project$PLBasicProcessors$processCSPPL(q.content);
					var _v32 = pq.result;
					if (!_v32.b) {
						return _Utils_Tuple2(
							model,
							$author$project$AppCore$sendMessage(
								A2(
									$elm$json$Json$Encode$encode,
									0,
									$elm$json$Json$Encode$object(
										_List_fromArray(
											[
												_Utils_Tuple2(
												'errorCode',
												$elm$json$Json$Encode$int(pq.errorCode)),
												_Utils_Tuple2(
												'nodeId',
												$elm$json$Json$Encode$int(q.nodeId)),
												_Utils_Tuple2('message', pq.message)
											])))));
					} else {
						var bfs = _v32;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									outputsCSPPL: (!pq.errorCode) ? A3(
										$elm$core$Dict$insert,
										_Utils_Tuple2(q.nodeId, 0),
										bfs,
										model.outputsCSPPL) : model.outputsCSPPL
								}),
							$author$project$AppCore$sendMessage(
								A2(
									$elm$json$Json$Encode$encode,
									0,
									$elm$json$Json$Encode$object(
										_List_fromArray(
											[
												_Utils_Tuple2(
												'errorCode',
												$elm$json$Json$Encode$int(pq.errorCode)),
												_Utils_Tuple2(
												'nodeId',
												$elm$json$Json$Encode$int(q.nodeId)),
												_Utils_Tuple2('message', pq.message)
											])))));
					}
				case 'CSPPLtoDIMACS':
					var pq = A2($author$project$PLBasicProcessors$processCSPPLToDIMACS, q.content, model.outputsCSPPL);
					return _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'ForeignVarsFPL':
					var pq = A2($author$project$PLExtProcessors$processForeignVarsFPL, q.content, model.outputsFPL);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsFPL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsFPL) : model.outputsFPL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'ForeignVarsSPL':
					var pq = A2($author$project$PLExtProcessors$processForeignVarsSPL, q.content, model.outputsSPL);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsSPL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsSPL) : model.outputsSPL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'ConservativeRetractFPL':
					var pq = A2($author$project$PLExtProcessors$processConservativeRetractionFPL, q.content, model.outputsFPL);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsFPL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsFPL) : model.outputsFPL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				case 'ConservativeRetractSPL':
					var pq = A2($author$project$PLExtProcessors$processConservativeRetractionSPL, q.content, model.outputsSPL);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								outputsSPL: (!pq.errorCode) ? A3(
									$elm$core$Dict$insert,
									_Utils_Tuple2(q.nodeId, 0),
									pq.result,
									model.outputsSPL) : model.outputsSPL
							}),
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(pq.errorCode)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2('message', pq.message)
										])))));
				default:
					return _Utils_Tuple2(
						model,
						$author$project$AppCore$sendMessage(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'errorCode',
											$elm$json$Json$Encode$int(1)),
											_Utils_Tuple2(
											'nodeId',
											$elm$json$Json$Encode$int(q.nodeId)),
											_Utils_Tuple2(
											'message',
											$elm$json$Json$Encode$string('Error : nodeType ' + (q.nodeType + ' not available in core')))
										])))));
			}
		} else {
			var e = _v1.a;
			return _Utils_Tuple2(
				model,
				$author$project$AppCore$sendMessage(
					A2(
						$elm$json$Json$Encode$encode,
						0,
						$elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'errorCode',
									$elm$json$Json$Encode$int(-1)),
									_Utils_Tuple2(
									'message',
									$elm$json$Json$Encode$string(
										'Error - Undecodable message : ' + $elm$json$Json$Decode$errorToString(e)))
								])))));
		}
	});
var $author$project$AppCore$main = $elm$browser$Browser$element(
	{
		init: $author$project$AppCore$init,
		subscriptions: $author$project$AppCore$subscriptions,
		update: $author$project$AppCore$update,
		view: function (model) {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('app-core')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'outputsFPL:' + A2($author$project$AppCore$modelDictToString, model.outputsFPL, $author$project$LogicUS$PL$SyntaxSemantics$fplToString))
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'outputsSPL:' + A2($author$project$AppCore$modelDictToString, model.outputsSPL, $author$project$LogicUS$PL$SyntaxSemantics$splToString))
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'outputsCPL:' + A2($author$project$AppCore$modelDictToString, model.outputsCPL, $author$project$LogicUS$PL$Clauses$cplToString))
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'outputsCSPL:' + A2($author$project$AppCore$modelDictToString, model.outputsCSPL, $author$project$LogicUS$PL$Clauses$csplToString))
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'outputsFFOL:' + A2($author$project$AppCore$modelDictToString, model.outputsFFOL, $author$project$LogicUS$FOL$SyntaxSemantics$ffolToString))
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								'outputsSFOL:' + A2($author$project$AppCore$modelDictToString, model.outputsSFOL, $author$project$LogicUS$FOL$SyntaxSemantics$sfolToString))
							]))
					]));
		}
	});
_Platform_export({'AppCore':{'init':$author$project$AppCore$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));