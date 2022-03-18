

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
        
        document.getElementById('appoint').innerHTML = totalAppointment
        document.getElementById('patient').innerHTML = totalPatient
        document.getElementById('totalPatient').innerHTML = totalPatient
        document.getElementById('schedule').innerHTML = scheduledAppointment
        document.getElementById('waitingfroom').innerHTML = waitingRoom

        apt.forEach(elements => {
        console.log(elements.name)
        let d = new Date(elements.createdAt);
            let hour, mainHour, minute, timeFrame;
            if(d.getHours() > 11){
                hour = d.getHours() - 12;
                timeFrame = 'pm'
                if(hour <= 9){
                    mainHour = '0' + hour;
                } else {
                    mainHour = hour;
                }s
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
        document.querySelector('.patientsList').innerHTML += `
        <div class="darrel guy">
                                <div class="time">${time}</div>
                                <div>
                                    <div>
                                        <img src="Images/AdminPage/Ellipse 16 girl.svg" alt="">
                                        <p>
                                            ${elements.name}
                                        </p>
                                    </div>
                                    <i class="fa-solid fa-ellipsis"></i>
                                </div>
                     </div>
        `})
    })  

    let url2 = 'https://612b668c22bb490017893b1d.mockapi.io/health/v1/activites'
    fetch(url2)
    .then(response => response.json())
    .then(data=>{
        data.activities.forEach(element => {
            document.querySelector('.activities').innerHTML += `
                <div class="vec-mich">
                       <div class="vec-mich-img">
                           <img src="/Images/AdminPage/Group 9005.svg" alt="">
                       </div>
                       <div class="mich"> 
                           ${element.title}
                       </div>
                   </div>
            `
            console.log(element.title)
        });
       
    })


    



    