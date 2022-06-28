const CURRENCY_FORMAT = Intl.NumberFormat("se-SE", {
  style: "currency",
  currency: "SEK"
});

export default function formatCurrency(price: string) {
  return CURRENCY_FORMAT.format(+price);
}
