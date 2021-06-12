//Selector
const selector = name => document.querySelector(name)
const selectorAll = names => document.querySelectorAll(names)

//Dom Select
const input = selector('.search-inp')
const btn = selector('.search-btn')
const cityName = selector('.city-name')
const degre = selector('.degre')
const status = selector('.status')
const statusIcon = selector('.status-img')
const rotobat = selector('.humidity')
const windSpeed = selector('.wind-speed')

//Sending Input value (city) to fetch

const apiKey = 'ed5204c26d50a225ce599d37e704f699'
const fetchWeather = city => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then(response => response.json())
    .then(data => displayInfo(data))
}

//Display Data
const displayInfo = data => {
  //Object Distructuring
  const { name } = data
  const { temp, humidity } = data.main
  const { description, icon } = data.weather[0]
  const { speed } = data.wind
  //Replacing the values
  cityName.innerText = name
  degre.innerText = `° ${Math.trunc(temp - 273.15)}`
  status.innerText = description
  statusIcon.src = `http://openweathermap.org/img/wn/${icon}.png`
  rotobat.innerText = humidity + '%'
  windSpeed.innerText = speed

  //Set Farsi cities
  switch (cityName.innerText) {
    case 'Azerbaijan':
      cityName.innerText = 'آذربایجان'
      break
    case 'Tabriz':
      cityName.innerText = 'تبریز'
      break
    case 'Rasht':
      cityName.innerText = 'رشت'
      break
    case 'Ardabil':
      cityName.innerText = 'اردبیل'
      break
    case 'Isfahan':
      cityName.innerText = 'اصفهان'
      break
    case 'Alborz':
      cityName.innerText = 'البرز'
      break
    case 'Īlām':
      cityName.innerText = 'ایلام'
      break
    case 'Bushehr':
      cityName.innerText = 'بوشهر'
      break
    case 'Tehran':
      cityName.innerText = 'تهران'
      break
    case 'Mashhad':
      cityName.innerText = 'مشهد'
      break
    case 'Khuzestan':
      cityName.innerText = 'خوزستان'
      break
    case 'Semnan':
      cityName.innerText = 'سمنان'
      break
    case 'Sistan and Baluchestan':
      cityName.innerText = 'سیستان و بلوچستان'
      break
    case 'Fars':
      cityName.innerText = 'فارس'
      break
    case 'Qom':
      cityName.innerText = 'قم'
      break
    case 'Kerman':
      cityName.innerText = 'کرمان'
      break
    case 'Kermanshah':
      cityName.innerText = 'کرمانشاه'
      break
    case 'Kermanshah':
      cityName.innerText = 'کرمانشاه'
      break
    case 'Golestan':
      cityName.innerText = 'گلستان'
      break
    case 'Hormozgan':
      cityName.innerText = 'هرمزگان'
      break
    case 'Hamedan':
      cityName.innerText = 'همدان'
      break
    case 'Yazd':
      cityName.innerText = 'یزد'
      break
    case 'Nasimshahr':
      cityName.innerText = 'نسیم شهر'
      break
  }
  //Set Farsi Description
  switch (status.innerText) {
    case 'clear sky':
      status.innerText = 'هوای صاف'
      break
    case 'few clouds':
      status.innerText = 'کمی ابری'
      break
    case 'fog':
      status.innerText = 'مه آلود'
      break
    case 'broken clouds':
      status.innerText = 'ابر های شکسته'
      break
    case 'scattered clouds':
      status.innerText = 'ابر های پراکنده'
      break
    case 'overcast clouds':
      status.innerText = 'ابری'
      break
  }
}

//Default city
window.addEventListener('load', () => fetchWeather('tehran'))

const getCityName = () => {
  if (input.value) {
    fetchWeather(input.value)
  } else {
    alert('لطفا نام یک شهر را وارد کنید')
  }
}

btn.addEventListener('click', () => getCityName())

//Set Enter Key Press
input.addEventListener('keypress', event => {
  if (event.keyCode == 13) {
    getCityName()
  }
})
