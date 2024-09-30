import { BS } from "./overUnderValue";

export const normalizePoint = (e) => {
    return (Math.floor(100 * parseFloat(e.toString())) / 100).toFixed(2);
  };
  
  export const limitWinningOdds = (e, maxWinningOdds) => {
    e = Math.min(e, maxWinningOdds);
    return parseFloat(normalizePoint(e));
  };
  
  export const calcOverunder = (e, rtpMultiplier, maxWinningOdds) => {
    const t = normalizePoint(e);
    const n = BS[t];
    if (!n) return { over: 0, under: 0 };
    const r = rtpMultiplier / n.u;
    const i = rtpMultiplier / n.o;
    return {
      under: limitWinningOdds(r, maxWinningOdds),
      over: limitWinningOdds(i, maxWinningOdds),
    };
  };
  
  export const calculateRange = (e, t, rtpMultiplier, maxWinningOdds) => {
    e = normalizePoint(e);
    t = normalizePoint(t);
    const n = BS[e];
    const r = BS[t];
    return n && r ? limitWinningOdds(rtpMultiplier / (n.o - r.o), maxWinningOdds) : 0;
  };