hexo.extend.helper.register('random_slogan', function() {
  const slogans = [
    "Nil",
    "NIL",
    "無",
    "生",
    "Saki",
    "SAKI",
    "0b10",
    "0b10saki"
  ];
  return slogans[Math.floor(Math.random() * slogans.length)];
});
