const isChrome = typeof navigator !== 'undefined' && /Chrom(?:e|ium)/.test(navigator.userAgent);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loosePolyfill = (callSite: TemplateStringsArray, ...substitutions: any[]) => {
  let t = '';
  const raw = callSite.raw;
  const length = raw.length - 1;
  for (let idx = 0; idx < length; idx++) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    t += raw[idx] + substitutions[idx];
  }
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  return t + raw[length];
};

// NOTE: Use polyfill because Chrome has performance issue for String.raw
const stringRaw: typeof String.raw = isChrome || typeof String.raw === 'undefined' ? loosePolyfill : String.raw;

export default stringRaw;
