import TableData from "./MenuData";
function DynamicTable(){

// get table column
 const column = Object.keys(TableData[0]);

 // get table heading data
 const ThData =()=>{
    
     return column.map((data)=>{
         return <th key={data}>{data.toUpperCase()}</th>
     })
 }

// get table row data
const tdData =() =>{
   
     return TableData.map((data)=>{
       return(
           <tr>
                {
                   column.map((v)=>{
                       return <td>{data[v]}</td>
                   })
                }
           </tr>
       )
     })
}


  return (
      <table className="table" id="firstTable">
        <thead>
         <tr>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
  )
}
export default DynamicTable;