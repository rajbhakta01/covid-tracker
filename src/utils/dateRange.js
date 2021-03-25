function DateRange(s, e) {
  e.setDate(e.getDate() - 1);
  for (var a = [], d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
    a.push(new Date(d).toISOString().slice(0, 10));
  }
  return a;
}

function getLastDate(n) {
  let d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

export { DateRange, getLastDate };
