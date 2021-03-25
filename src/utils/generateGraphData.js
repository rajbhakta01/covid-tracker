export default function generateGraphData(apiData) {
  let axes = [
    { primary: true, type: 'ordinal', position: 'bottom' },
    { type: 'linear', position: 'left' },
  ];
  let dailyconfirmed = [];
  let dailyrecovered = [];
  let dailydeceased = [];
  apiData.forEach((elem) => {
    dailyconfirmed.push([elem.dateymd, elem.dailyconfirmed]);
    dailyrecovered.push([elem.dateymd, elem.dailyrecovered]);
    dailydeceased.push([elem.dateymd, elem.dailydeceased]);
  });
  let data = [
    { label: 'Daily Confirmed', data: dailyconfirmed },
    { label: 'Daily recovered', data: dailyrecovered },
    { label: 'Daily Deceased', data: dailydeceased },
  ];
  return { data, axes };
}
