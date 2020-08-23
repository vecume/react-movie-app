// Convert time to hours and minutes
export const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const getSliderSettings = (
  first,
  second,
  third,
  variableWidth = false
) => {
  return {
    dots: false,
    infinite: false,
    arrows: true,
    rows: 1,
    speed: 500,
    slidesToShow: first,
    slidesToScroll: 1,
    centerMode: false,
    swipeToSlide: true,
    variableWidth: variableWidth,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: second,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: third,
        },
      },
    ],
  };
};
