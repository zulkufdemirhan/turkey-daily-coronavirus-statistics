import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Style.css'

export default function App() {

  const [date,setDate]=useState()

// !---------------------------------------------------------

  const [test,setTest]=useState()
  
  useEffect(()=>{
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(response=>setTest(response.data[date].tests))
    .catch(err=>console.log(err))
  },[test,date])

// !---------------------------------------------------------

  const [recover,recoverTest]=useState()

  useEffect(()=>{
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(response=>recoverTest(response.data[date].recovered))
    .catch(err=>console.log(err))
  },[recover,date])

// !---------------------------------------------------------
  
  const [death,deathTest]=useState()

  useEffect(()=>{
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(response=>deathTest(response.data[date].deaths))
    .catch(err=>console.log(err))
  },[death,date])
  
// !---------------------------------------------------------
  
  const [cases,casesTest]=useState()

  useEffect(()=>{
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(response=>casesTest(response.data[date].cases))
    .catch(err=>console.log(err))
  },[cases,date])

// !---------------------------------------------------------
  return (
    <div>

        <table className='box'>

          <h1> Turkey COVID - Coronavirus Statistics </h1>

        <div className='social-box'>
          <a href="https://github.com/zulkufdemirhan" className='social'><i class="fab fa-github" ></i></a>
          <a href="https://www.linkedin.com/in/zulkuf-demirhan/" className='social' ><i class="fab fa-linkedin" ></i></a>
        </div>

        <input className='search' placeholder='Example: 24/03/2022' value={date} onChange={e=>setDate(e.target.value)}/>

          <tr className='first-row'>
            <td className='baslık'>Tests</td>
            <td className='baslık'>Cases</td>
            <td className='baslık'>Recovered</td>
            <td className='baslık'>Deaths</td>
          </tr>

          <tr className='second-row'>
            <td className='deger bar-1'>{test}</td>
            <td className='deger bar-2'>{cases}</td>
            <td className='deger bar-3'>{recover}</td>
            <td className='deger bar-4'>{death}</td>
          </tr>

          <footer>
            <p>This application updates data sets by scarping data from the web site of of Turkish Ministry of Health <a href='https://covid19.saglik.gov.tr/'>(https://covid19.saglik.gov.tr/)</a> every 5 minutes. </p>
          </footer>

        </table>
      </div>
    
  )

}
