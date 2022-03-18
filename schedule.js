


let menubtn = document.querySelector('.toggle')
    let aside = document.querySelector('.menu')
    
    menubtn.addEventListener('click',()=>{
        aside.classList.toggle('menu-show')
    })




let url ="https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients"
fetch(url)
    .then(response => response.json())
    .then(data=> {

        let totalPatient = data.totalPatients
        let totalAppointment = data.appointments.length
        let scheduledAppointment = data.scheduledAppointments
        let waitingRoom = data.waitinfRoom
        let apt = data.appointments
        console.log(apt)
        
        

        apt.forEach(elements => {
            let d = new Date(elements.createdAt);
            let hour, mainHour, minute, timeFrame;
            if(d.getHours() > 11){
                hour = d.getHours() - 12;
                timeFrame = 'pm'
                if(hour <= 9){
                    mainHour = '0' + hour;
                } else {
                    mainHour = hour;
                }
            } else {
                hour = d.getHours();
                timeFrame = 'am'
                if(hour <= 9){
                    mainHour = '0' + hour;
                } else {
                    mainHour = hour;
                }
            }
            if(d.getMinutes() <= 9){
                minute = '0' + d.getMinutes()
            } else {
                minute = d.getMinutes()
            }

           let time = `${mainHour}:${minute}${timeFrame}`;
        // console.log(elements.name)
        document.querySelector('.next-patients ').innerHTML += `
        <div class="guy">
                                <div class="time">${time}</div>
                                <div>
                                    <img src="Images/AdminPage/Ellipse 16.svg" alt="">
                                    <p>${elements.name}
                                   </p>
                                    <i class="fa-solid fa-ellipsis"></i>
                                </div>
                            </div>
        `})
        console.log
    }) 
    
    

let url2 = 'https://612b668c22bb490017893b1d.mockapi.io/health/v1/activites'
    fetch(url2)
    .then(response => response.json())
    .then(data=>{
        data.activities.forEach(element => {
            document.querySelector('.activities').innerHTML += `
                 <div class="pink">
                        <div class="pink-img">
                            <img src="/Images/AdminPage/Vector-sche.svg" alt="">
                        </div>
                        <div class="pinktxt">
                           ${element.title}
                        </div>
                    </div>
            `
            console.log(element.title)
        });
       
    })

