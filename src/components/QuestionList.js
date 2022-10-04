import React, {useState,useEffect}from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
const [ques,setQues]=useState([])
  useEffect(function(){
    fetch('http://localhost:4000/questions')
    .then(res=>res.json())
    .then(data=>setQues(data))
  },[])
console.log(ques)
  return (
    
    <section>
      <h1>Quiz Questions</h1>
      <ul>{ques.map((item)=>{
        return <QuestionItem key={item.id} question={item} allQues={ques} setQues={setQues}/>
      })}</ul>
    </section>
  );
}


export default QuestionList;
