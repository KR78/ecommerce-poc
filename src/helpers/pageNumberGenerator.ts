const f = (
  {
    numberOfPages,
    currentPage,
  }: {
    currentPage: number,
    numberOfPages: number,
  },
) => {
  let i: number;
  let l: number;

  const current = currentPage;
  const last = numberOfPages;
  const delta = 2;
  const left = current - delta;
  const right = current + delta + 1;
  const range = [];
  const rangeWithDots: (string | number)[] = [];

  for (i = 1; i <= last; i++) {
    if ((i === 1 || i === last) || (i >= left && i < right)) {
      range.push(i);
    }
  }

  range.forEach((p) => {
    if (l) {
      if (p - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (p - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(p);
    l = p;
  });

  return rangeWithDots;
};

export default f;