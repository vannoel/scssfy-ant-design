const dye = (ansiCode, msg) => {
  const begin = `\x1b[${ansiCode || '0'}m`;
  const end = '\x1b[0m';
  return `${begin}${msg}${end}`;
};

module.exports = dye;
