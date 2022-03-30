import TableData2 from "./MenuData2";
function DynamicTable(){

// get table column
 const column = Object.keys(TableData2[0]);

 // get table heading data
 const ThData =()=>{
     return column.map((data)=>{
         return <th key={data}>{data.toUpperCase()}</th>
     })
 }

// get table row data
const tdData =() =>{
   
     return TableData2.map((data)=>{
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
      <table className="table" id="secondTable">
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