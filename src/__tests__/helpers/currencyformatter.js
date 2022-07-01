const CURRENCY_FORMAT = Intl.NumberFormat("se-SE", {
  style: "currency",
  currency: "SEK"
});

module.exports = function currencyFormatter(price) {
  return CURRENCY_FORMAT.format(+price);
};
