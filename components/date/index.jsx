const DateComponent = ({ dateString }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December',
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const day = days[new Date(dateString).getDay()];
  const month = months[new Date(dateString).getMonth()];
  const date = new Date(dateString).getDate();
  const year = new Date(dateString).getFullYear();

  return (
    <time>{`${day}, ${month} ${date}, ${year}`}</time>
  );
};

export default DateComponent;
