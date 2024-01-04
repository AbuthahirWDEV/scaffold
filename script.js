document.getElementById('location-form').addEventListener('submit', getWeather);

function getWeather(e) {
  e.preventDefault()
  //Write you code logic here

  // Error should be very specific
  // Error: Failed to fetch weather data,   should always fetch this error in case of any failure otherwise you test cases will get failed.

  let input = document.getElementById('input').value
  check(input)
  // console.log(input)

}

async function check(input){
  try{

    
    const url = await fetch('http://api.weatherapi.com/v1/current.json?key=2208aad54fa246feaaa121720240401&q='+input+'&aqi=no')
    if(!url.ok){
      throw new Error('City not found')
    }
    const data = await url.json()
    console.log(data)
  
    document.getElementById('city').innerHTML = `City : ${input} ` 
    document.getElementById('climate').innerHTML = `Temperature  : ${data.current.temp_f} `
    document.getElementById('img').src = `${data.current.condition.icon}`
  }
  catch(error){
    document.getElementById('error').innerHTML=error
    console.error('Error : ', error.message )
  }
 

}

