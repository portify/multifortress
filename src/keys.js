module.exports.KEY_BACKSPACE = 8;
module.exports.KEY_TAB = 9;
module.exports.KEY_ENTER = 13;
module.exports.KEY_SHIFT = 16;
module.exports.KEY_CTRL = 17;
module.exports.KEY_ALT = 18;
module.exports.KEY_ESCAPE = 27;
module.exports.KEY_SPACE = 32;
module.exports.KEY_LEFT = 37;
module.exports.KEY_UP = 38;
module.exports.KEY_RIGHT = 39;
module.exports.KEY_DOWN = 40;

module.exports.KEY_0 = 48;
module.exports.KEY_1 = 49;
module.exports.KEY_2 = 50;
module.exports.KEY_3 = 51;
module.exports.KEY_4 = 52;
module.exports.KEY_5 = 53;
module.exports.KEY_6 = 54;
module.exports.KEY_7 = 55;
module.exports.KEY_8 = 56;
module.exports.KEY_9 = 57;
module.exports.KEY_A = 65;
module.exports.KEY_B = 66;
module.exports.KEY_C = 67;
module.exports.KEY_D = 68;
module.exports.KEY_E = 69;
module.exports.KEY_F = 70;
module.exports.KEY_G = 71;
module.exports.KEY_H = 72;
module.exports.KEY_I = 73;
module.exports.KEY_J = 74;
module.exports.KEY_K = 75;
module.exports.KEY_L = 76;
module.exports.KEY_M = 77;
module.exports.KEY_N = 78;
module.exports.KEY_O = 79;
module.exports.KEY_P = 80;
module.exports.KEY_Q = 81;
module.exports.KEY_R = 82;
module.exports.KEY_S = 83;
module.exports.KEY_T = 84;
module.exports.KEY_U = 85;
module.exports.KEY_V = 86;
module.exports.KEY_W = 87;
module.exports.KEY_X = 88;
module.exports.KEY_Y = 89;
module.exports.KEY_Z = 90;
module.exports.KEY_NUMPAD0 = 96;
module.exports.KEY_NUMPAD1 = 97;
module.exports.KEY_NUMPAD2 = 98;
module.exports.KEY_NUMPAD3 = 99;
module.exports.KEY_NUMPAD4 = 100;
module.exports.KEY_NUMPAD5 = 101;
module.exports.KEY_NUMPAD6 = 102;
module.exports.KEY_NUMPAD7 = 103;
module.exports.KEY_NUMPAD8 = 104;
module.exports.KEY_NUMPAD9 = 105;
module.exports.KEY_F1 = 112;
module.exports.KEY_F2 = 113;
module.exports.KEY_F3 = 114;
module.exports.KEY_F4 = 115;
module.exports.KEY_F5 = 116;
module.exports.KEY_F6 = 117;
module.exports.KEY_F7 = 118;
module.exports.KEY_F8 = 119;
module.exports.KEY_F9 = 120;
module.exports.KEY_F10 = 121;
module.exports.KEY_F11 = 122;
module.exports.KEY_F12 = 123;

module.exports.KEY_COMMA = 188;
module.exports.KEY_DASH = 189;
module.exports.KEY_PERIOD = 190;

module.exports.keyName = {};

for (var key in module.exports) {
	module.exports.keyName[module.exports[key]] = key;
}
