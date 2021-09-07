const formatter = Intl.NumberFormat('en-SG', {
  style: 'currency',
  currency: 'SGD',
});

export default function formatMoney(cents) {
  return formatter.format(cents / 100);
}
