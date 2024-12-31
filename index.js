const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function encodeBase62(n = null, length = 6) {
  let maxRange;

  if (length) maxRange = Math.pow(62, length) - 1;
  else maxRange = Math.pow(62, 6) - 1;
  if (n && length && (n > maxRange || n < 0)) {
    console.error(`Integer should be in range [0,${maxRange}]`);
    return;
  }

  let res = '';
  if (!n) {
    n = Math.random() * maxRange;
  }

  while (n > 0) {
    res += chars[n % 62];
    n = Math.floor(n / 62);
  }

  return res.padStart(6, '0').split('').reverse().join('');
}

module.exports = { encodeBase62 };
