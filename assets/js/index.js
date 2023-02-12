'use strict';


// const formId = document.getElementById('add_user');
// const update_user = document.getElementById('update_user');

// formId.addEventListener('submit',function(event){
// alert("Data inserted Successfully!!");
// })

// update_user.addEventListener('submit',function(event){
//     alert("Data updated Successfully!!");
// })

if(window.location.pathname == '/'){
    const specificDeleteBtn = document.querySelectorAll('a.delete');
    for(let i = 0;i<specificDeleteBtn.length;i++){
        specificDeleteBtn[i].addEventListener('click',function(){
            // console.log("Checked");
            let id = this.getAttribute('data-id');
            // console.log(id);
            // axios.get('http://localhost:3000/api/users').then(data=>{  //works
            //     console.log(data.data);
            // }).catch(err=>{
            //     console.log(err);
            // })

    //    axios.delete(`http://localhost:3000/api/users/${id}`);   //WORKS


    //    try{
        fetch(`http://localhost:3000/api/users/${id}`,{method: 'DELETE'});//.then(data =>{
            //    return data.json();
            // }).then(jsonData=>{
            //     console.log(jsonData);
            // }).catch(err=>{
            // console.log(err);
            // });
    //    }catch{
    //     console.log('Error');
    //    }
      alert('Data Deleted!')
      window.location.reload();
            
           })
    }
}


if(window.location.pathname =='/add-user'){
    let addUserButton = document.querySelector('.add_user_btn');
    addUserButton.addEventListener('click',function(){
        alert("Data inserted Succesfully!")
    })
}


if(window.location.pathname =='/update-user'){
    let updateButton = document.querySelector('.update_btn');
    updateButton.addEventListener('click',function(e){
   
        alert('Data updated Successfully!');
    })
}



