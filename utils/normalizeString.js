const normalizeString = (s) => {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u0301]/g, "")
    .toLowerCase();
};

module.exports = normalizeString;
