"use strict"; function round(t, r) { return number(Math.round(t + "e" + r) + "e-" + r) } function randomInteger(t, r) { t += Math.random() * (r - t); return Math.floor(t) } function randomIntegerWithMax(t, r) { t += Math.random() * (r + 1 - t); return Math.floor(t) } const ZNAKI = "*+-/"; let isAllOperation = !0; const masVariant = [["01110", "10101", "11011", "10101", "01110"], ["11011", "01110", "10101", "01110", "11011"], ["11011", "10101", "01110", "10101", "11011"], ["10101", "01110", "11011", "01110", "10101"], ["01110", "11011", "10101", "11011", "01110"]]; let masItogNum = [[], [], [], [], [], [], [], [], []], masEditNum = [[], [], [], [], [], [], [], [], []]; function poisk(e) { let t = ""; e < 98 && (t += "+"), 2 < e && (t += "-"), isAllOperation && (e < 50 && (t += "*"), e % 4 == 0 && (t += "/")); var a = t[randomInteger(0, t.length)]; let n = 0, o = 0; switch (a) { case "*": n = 2 * randomInteger(0, Math.trunc(49 / e)) + 2, o = e * n; break; case "+": n = 2 * randomInteger(0, Math.trunc((98 - e) / 2)) + 2, o = e + n; break; case "-": n = 2 * randomInteger(0, Math.trunc((e - 2) / 2)) + 2, o = e - n; break; case "/": let t = 2, r = []; for (; t < 10;)e % (2 * t) == 0 && (r.push(t), r.push(Math.trunc(e / t))), t += 2; n = r[randomInteger(0, r.length)], o = Math.trunc(e / n) }return { result1: e, result2: n, result3: o, rezZnak: a } } function diapazon(t) { let r, e; return isAllOperation ? (r = 0, e = 3, 48 < t && (r = 1), 98 == t && (r = 2), t % 4 != 0 && (e = 2)) : (r = 1, e = 2, 98 == t && (r = 2)), t < 4 && (e = 1), [r, e] } function analiz(t, r, e) { let a = 0, n = !1; switch (t) { case "+": r + e < 100 && (a = r + e, n = !0); break; case "-": 0 < r - e && (a = r - e, n = !0); break; case "*": r * e < 100 && (a = r * e, n = !0); break; case "/": r % (2 * e) == 0 && (a = Math.trunc(r / e), n = !0) }return { number3: a, isOk: n } } function matSquare(n, o, u, s) { let t = !1, i = [], m = [], r, e, l, f, g, I, z, N;[r, e] = diapazon(u), [l, f] = diapazon(n), [g, I] = diapazon(o), [z, N] = diapazon(s); let c, d, h, k, M, p; for (c = 2; c < 98;) { for (let a = r; a <= e; a++)for (let e = l; e <= f; e++)for (let r = g; r <= I; r++)for (let t = z; t <= N; t++)({ number3: d, isOk: p } = analiz(ZNAKI[a], u, c)), p && ({ number3: h, isOk: p } = analiz(ZNAKI[e], n, c)), p && ({ number3: k, isOk: p } = analiz(ZNAKI[r], o, d)), p && ({ number3: M, isOk: p } = analiz(ZNAKI[t], s, h)), p && k === M && (i.push([c, d, h, k]), m.push([ZNAKI[a], ZNAKI[e], ZNAKI[r], ZNAKI[t]])); c += 2 } if (0 == i.length) return { isOk: t }; t = !0; var a = randomInteger(0, i.length); c = i[a][0], d = i[a][1], h = i[a][2], k = i[a][3]; var q = m[a][0], S = m[a][1], b = m[a][2], a = m[a][3]; return { f1: c, f2: d, f3: h, f4: k, z2: S, z3: b, z4: q, z5: a, isOk: t } } function getMasSquare(t, r, e, a, n, o, u, s, i, m, l, f, g, I, z) { return [[t, m, r, "=", e], [l, "", f, "", g], [a, I, n, "=", o], ["=", "", "=", "", "="], [u, z, s, "=", i]] } function initSquareForHorz(r, e, a, n) { let o, u, s, i, m, l, f, g, I, z, N, c, d; { let t = 1; if (t <= 50) return o = poisk(r), { result2: u, result3: s, rezZnak: g } = o, o = matSquare(e, a, u, s), { isOk: d } = o, d ? ({ f1: i, f2: m, f3: l, f4: f, z2: I, z3: z, z4: N, z5: c } = o, getMasSquare(r, e, a, u, i, m, s, l, f, n, g, I, z, N, c)) : [] } } function initSquareForVert(r, e, a, n) { let o, u, s, i, m, l, f, g, I, z, N, c, d; { let t = 1; if (t <= 50) return o = poisk(r), { result2: u, result3: s, rezZnak: g } = o, o = matSquare(u, s, e, a), { isOk: d } = o, d ? ({ f1: i, f2: m, f3: l, f4: f, z2: I, z3: z, z4: N, z5: c } = o, getMasSquare(r, u, s, e, i, m, a, l, f, g, n, I, z, N, c)) : [] } } function initSquareForHorzVert(t, r, e, a, n, o, u) { let s, i, m, l, f, g, I, z, N, c; return s = matSquare(r, e, n, o), { isOk: c } = s, c ? ({ f1: i, f2: m, f3: l, f4: f, z2: g, z3: I, z4: z, z5: N } = s, getMasSquare(t, r, e, n, i, m, o, l, f, a, u, g, I, z, N)) : [] } function addMasItogNumToPos(e, a, n) { for (let r = 0; r <= 4; r++)for (let t = 0; t <= 4; t++)masItogNum[r + e][t + a] = n[r][t] } function newMathMat(t) { isAllOperation = t; let r, e, a, n, o, u, s, i, m; for (let t = 1; t <= 50; t++) { for (let t = 1; t <= 50 && (r = 2 * randomInteger(0, 48) + 2, o = poisk(r), { result1: r, result2: e, result3: a, rezZnak: n } = o, u = initSquareForHorz(r, e, a, n), !(0 < u.length)); t++); addMasItogNumToPos(0, 0, u); for (let t = 1; t <= 50; t++) { for (let t = 1; t <= 50 && (s = initSquareForVert(masItogNum[0][4], masItogNum[2][4], masItogNum[4][4], masItogNum[1][4]), !(0 < s.length)); t++); addMasItogNumToPos(0, 4, s); for (let t = 1; t <= 50 && (i = initSquareForHorz(masItogNum[4][0], masItogNum[4][2], masItogNum[4][4], masItogNum[4][1]), !(0 < i.length)); t++); if (addMasItogNumToPos(4, 0, i), m = initSquareForHorzVert(masItogNum[4][4], masItogNum[4][6], masItogNum[4][8], masItogNum[4][5], masItogNum[6][4], masItogNum[8][4], masItogNum[5][4]), 0 < m.length) break } if (0 < m.length) break } addMasItogNumToPos(4, 4, m); for (let r = 0; r <= 8; r++)for (let t = 0; t <= 8; t++)masEditNum[r][t] = masItogNum[r][t]; return masItogNum }