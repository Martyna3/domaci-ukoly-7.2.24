const weekdays = [
    'pondělí',
    'úterý',
    'středa',
    'čtvrtek',
    'pátek',
    'sobota',
    'neděle',
  ];
  const months = [
    {
      name: 'leden',
      days: 31,
    },
    {
      name: 'únor',
      days: 28,
    },
    {
      name: 'březen',
      days: 31,
    },
    {
      name: 'duben',
      days: 30,
    },
    {
      name: 'květen',
      days: 31,
    },
    {
      name: 'červen',
      days: 30,
    },
    {
      name: 'červenec',
      days: 31,
    },
    {
      name: 'srpen',
      days: 31,
    },
    {
      name: 'září',
      days: 30,
    },
    {
      name: 'říjen',
      days: 31,
    },
    {
      name: 'listopad',
      days: 30,
    },
    {
      name: 'prosinec',
      days: 31,
    },
  ];

  //1.
  const days = weekdays.map((weekday) => weekday.toUpperCase())
  console.log(days)

  //2.
  const shortDays = weekdays.map((weekday) => weekday.slice(0,2))
  console.log(shortDays)

  //3.
  const dayscount = months.map((month) => month.days )
  console.log(dayscount)

  //4.
  const firstDay = months.map((month) => `1. ${month.name} 2024` )
  console.log(firstDay)