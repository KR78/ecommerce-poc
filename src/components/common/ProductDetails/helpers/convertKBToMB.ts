const convertKBToMB = (KB: number) => {
  const getMB = KB * 0.0009765625;
  return Math.round(getMB);
}

export default convertKBToMB;
