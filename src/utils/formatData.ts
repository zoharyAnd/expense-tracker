export const getChartData = (data: any[], from: string, to: string) => {
  const localCategories = JSON.parse(localStorage.getItem('categories')) !== null ? JSON.parse(localStorage.getItem('categories')) : [];

  const formattedResult = {
    labels: Array.from(new Set(data.map((item: any) => item.date))),
    datasets: [],
  };
  const uniqueCategories = Array.from(new Set(data.map((item: any) => item.category)));

  const filteredData = data.filter((item: any) => new Date(item.date).setHours(0, 0, 0, 0) >= new Date(from).setHours(0, 0, 0, 0) && new Date(item.date).setHours(0, 0, 0, 0) <= new Date(to).setHours(0, 0, 0, 0));

  uniqueCategories.map((category: any) => {
    formattedResult.datasets.push({
      label: category,
      backgroundColor: localCategories.filter((cat: any) => cat.value === category)[0].color,
      data: filteredData.filter((item: any) => item.category === category).map((expense: any) => expense.price),
    });
    return formattedResult;
  });

  return formattedResult;
};

export const formatDate = (dDate: Date) => {
  const month = dDate.getMonth() + 1 > 10 ? dDate.getMonth() + 1 : `0${dDate.getMonth() + 1}`;

  const date = dDate.getDate() + 1 > 10 ? dDate.getDate() : `0${dDate.getDate()}`;

  return `${dDate.getUTCFullYear()}-${month}-${date}`;
};
