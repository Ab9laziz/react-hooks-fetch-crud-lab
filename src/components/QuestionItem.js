import React from "react";

function QuestionItem({ question,allQues,setQues}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
 function handleClick(){
  const newArray=allQues.filter((item)=>{
    
    return item.id!==id
  })
  console.log(newArray)
  setQues(newArray)
    fetch(`http://localhost:4000/questions/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
 }

 function handleChange(e){
  fetch(`http://localhost:4000/questions/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body:JSON.stringify({
        correctIndex: e.target.value 
      })
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
 }
 


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={handleClick} id={id}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
