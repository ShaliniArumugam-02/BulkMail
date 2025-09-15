import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import * as XLSX from 'xlsx';

const Main = () => {
  const[subject,setSubject]=useState("");
  const[body,setBody]=useState("");
  const[status,setStatus]=useState(false);
  const[emailList,setEmailList]=useState([])

  const handleFile= async(e)=>{
const file=e.target.files[0];

const reader = new FileReader()
reader.onload = (e)=> {
  const data= e.target.result;
  const workbook=XLSX.read(data,{type:'array'})
  const sheetName =workbook.SheetNames[0]
const worksheet=workbook.Sheets[sheetName]
const emailList=XLSX.utils.sheet_to_json(worksheet,{header:'A'})
const totalEmail = emailList.map((item,i)=>{
  return item.A
})
setEmailList(totalEmail);
}
reader.readAsArrayBuffer(file)
  }

  const handleSubmit= async(e)=>{
    e.preventDefault();
   
    setStatus(true)
    try {
      const res= await api.post('/sendmail', {subject:subject,body:body,emailList:emailList},
        {
          headers: {
          "Content-Type": "application/json",
        }
        })
        const data=res.data
        console.log(data)
        toast.success('Email sent successfully')
        setStatus(false)
    } catch (error) {
      console.log('error in sending email', error)
      toast.error('Could not send Email')
      setStatus(false)
    }
  }

  return (
    <div>
      <Header />
            <div className="p-5 sm:p-2">
      <div className="bg-[#CFAB8D] p-6 max-w-3xl mx-auto mt-10 flex flex-col text-amber-900 shadow-2xl rounded-lg shadow-amber-900">
  

        <div>
          <h1 className="font-semibold text-lg sm:text-2xl shadow-2xl shadow-amber-800 p-3 rounded-lg">
            Upload your E-mail list and send personalized emails to everyone at
            once.
          </h1>
        </div>
        <form onSubmit={handleSubmit}
        className="mt-6 space-y-4 flex  flex-col">
          <div>
            <label className="block sm:text-xl">Subject:</label>
            <input
            onChange={(e)=>setSubject(e.target.value)} value={subject}
              className="bg-[#EEE6CA] rounded h-10 w-full sm:w-11/12 mt-2 focus:outline-none p-2 placeholder:text-white"
              type="text"
              placeholder="Enter subject here"
            />
          </div>
          <div>
            <label className="block sm:text-xl">Body</label>
            <textarea onChange={(e)=>setBody(e.target.value)} value={body}
              className="bg-[#EEE6CA] rounded h-32 w-full sm:w-11/12 mt-2 focus:outline-none p-2 resize-none placeholder:text-white"
              placeholder="Enter your text... "
            ></textarea>
          </div>
          <div className="bg-[#EEE6CA] p-5 border-dashed border-amber-700 border-2 flex sm:justify-center w-12/12 sm:w-11/12">
            <input
            onChange={handleFile}
              className=" file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold file:bg-amber-800 file:text-white hover:file:bg-amber-600"
              type="file"
            />
          </div>
          <div>
            <p className="text-center sm:text-xl">Total Email in the file:{emailList.length}</p>
          </div>
          <div className="flex justify-center">
            <button 
            type="submit"
            disabled={status}
            className="bg-amber-800 text-white p-2 rounded-full w-9/12 hover:bg-amber-500">
         {status? 'sending...':'Send Email'}
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Main;
