
function closeForm(){
    bookTicket.style.display="none";

}


function closeTicket(){
    bookTicket.style.display="block";
}

var bookTicket=document.querySelector('.bookticket');
// console.log(bookTicket)
var plusButton=document.querySelector('.plus');
// console.log(plusButton)
plusButton.addEventListener('click',closeTicket);


function deletelogic(){
    let closebtnarray=document.querySelectorAll(".close");
    let minimizebtnarray=document.querySelectorAll(".minimize");

    for(let i=0;i<closebtnarray.length;i++)
    {
        closebtnarray[i].addEventListener('click',closeTicket);     
    }

    for(let i=0;i<minimizebtnarray.length;i++)
    {
        minimizebtnarray[i].addEventListener('click',minimizeTicket);     
    }

    function closeTicket(e){
        let box=e.target.closest('.dilog');
        box.style.display='none';
    }
    
    function minimizeTicket(e){
        let box=e.target.closest('.dilog');
        let textAdrs=box.querySelector('.TicketAddress')

        if(textAdrs.style.display!=="none")
        {
            textAdrs.style.display="none";
            
        }
        else
        {
            textAdrs.style.display="block";
        }
    }

}


function addDilogDetail(){
    var dilog=document.querySelector('.dilog')
var TicketFormName=document.querySelector('.ticketFormName')
var TicketFormAddress=document.querySelector('.ticketFormAddress') 
   
    var parent1=document.querySelector('.parent')
    var puranaHTML = parent1.innerHTML;
    parent1.innerHTML=puranaHTML+`
            
                <div class="dilog">
                    <div class="aboutTicket">
                        <div class="dilogButtons">
                            <button class="minimize">-</button>
                            <button class="close">X</button>
                            
                        </div>
                        <hr width="100%" color="green" />
                        <div class="dilogDetail">
                        <div class ="dilog-Name" >NAME</div>   
                        <div class="TicketName">${TicketFormName.value}</div>
                        <hr width="100%" color="green" />
                        </div>
                    </div>
                    <div class="TicketAddress"><textarea >${TicketFormAddress.value}</textarea></div>
                </div> 
            `  

            bookTicket.style.display="none";
            TicketFormName.value="";
            TicketFormAddress.value="";
            deletelogic();
    }



var AddBtn=document.querySelector('.addbtn')

AddBtn.addEventListener('click',addDilogDetail)