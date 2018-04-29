const isChrome =
  // @ts-ignore
  typeof navigator !== 'undefined' && /Chrom(?:e|ium)/.test(navigator.userAgent);

const loosePolyfill = (callSite: TemplateStringsArray, ...substitutions: any[]) => {
  const raw = callSite.raw;
  const arr = [];
  const length = (arr.length = raw.length - 1);
  for (let idx = 0; idx < length; idx++) {
    arr.push(raw[idx]);
    arr.push(substitutions[idx]);
  }
  arr.push(raw[length]);
  return arr.join('');
};

// NOTE: Use polyfill because Chrome has performance issue for String.raw
const stringRaw: typeof String.raw = isChrome || typeof String.raw === 'undefined' ? loosePolyfill : String.raw;

export default stringRaw;
