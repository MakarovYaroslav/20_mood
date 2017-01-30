$(document).ready(function(){
  var jokes = [
    {
      "phrase": "Кукурузные хлопья - теперь без асбеста!",
      "signature": "©Неизвестный маркетолог"
    },
    {
      "phrase": "Собираюсь жить вечно, пока всё идёт нормально"
    },
    {
      "phrase": "Если ты будешь усердно работать по 8 часов в день, то обязательно станешь боссом и начнешь работать по 12"
    },
    {
      "phrase": "Всегда существует риск принять старого мудака за мудрого старика",
      "signature": "© Дмитрий Лавренков"
    }
  ]
  var random_number = Math.floor(Math.random() * jokes.length);
  var joke = jokes[random_number]['phrase'];
  var author = jokes[random_number]['signature'];
  $("#joke #text").text(joke);
  if(typeof(author)!="undefined") $("#joke #author").text(author);
});
