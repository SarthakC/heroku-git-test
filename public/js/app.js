const fetchWeatherData = function (location) {
    const address = encodeURIComponent(location)
    fetch('/weather?address=' + address).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data.location)
                console.log(data.forecast)
            }

        })
    })
}
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('p')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    fetchWeatherData(location)
})