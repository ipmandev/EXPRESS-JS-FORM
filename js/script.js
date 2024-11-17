document.getElementById("useForm").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const age =document.getElementById("age").value;
    const email =document.getElementById("email").value; 
    const data = {name,age,email};
    console.log (data);
    try{
        const response=await fetch("http://localhost:3000/form",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data),
        });
        if (response.ok){
            const responseData = await response.json();
            //mostramos los datos

            const output = document.getElementById("output");
            output.innerHTML=`
             <h1>datos</h1>
             <p>${responseData.name}</p>
             <p>${responseData.age}</p>
             <p>${responseData.email}</p>
            `;
           
        }
    }catch (error){
        console.log (error);
    }
});