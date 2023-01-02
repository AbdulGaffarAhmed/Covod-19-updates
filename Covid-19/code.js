var input = document.getElementById ('input')
input.addEventListener('submit',function(e){
    e.preventDefault()

    var country = document.getElementById('country').value
    var url = `https://api.covid19api.com/total/dayone/country/`+country
    fetch(url)
    
    .then((res) =>res.json())
    .then((res) =>{
        console.log(res)
        
        var length =res.length
        var index = length - 1
        var countryname = document.getElementById('countryname')
        var active = document.getElementById('active')
        var confirmed = document.getElementById('confirmed')
        var recovered = document.getElementById('recovered')
        var death = document.getElementById('death')
        var date = document.getElementById('Date')
         
        countryname.innerHTML = ''
        active.innerHTML = ''
        confirmed.innerHTML = ''
        recovered.innerHTML = ''
        death.innerHTML = ''
        date.innerHTML = ''
         
        countryname.append("Country:\n" +res[index].Country)
        active.append("Active Cases:\n" +res[index].Active)
        confirmed.append("Confirmed:\n"+res[index].Confirmed)
        recovered.append("Recovered:\n"+'<br>'+res[index].Recovered)
        death.append("Deaths:\n"+res[index].Deaths)
        date.append("Updated:\n"+res[index].Date)
    })
    .catch(err => alert('Please Enter Valid Country Name'))
})
