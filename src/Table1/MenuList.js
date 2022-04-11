import TableData from "./MenuData";
import { useState } from "react";

function DynamicTable() {
  // get table column
  const column = Object.keys(TableData[0]);

  let totalArr = [];
  // const [totalArr, setTotalArr] = useState([]);
  const [newArr, setNewArr] = useState([totalArr]);
  //const [total, setTotal] = useState(total);
  //const [total, setTotal] = useState(0);

  for (let i = 0; i < 46; i++) totalArr.push(0);
  // get table heading data
  const ThData = () => {
    return column.map((data) => {
      return <th key={data}>{data.toUpperCase()}</th>;
    });
  };

  const handleClick = (evt, sr, total, price) => {
    // setQuant(evt.target.value);
    
    //console.log(newArr[parseInt(sr) - 1]);
    //setTotal(evt.target.value * price.split("₹").pop());
    newArr[parseInt(sr)] = evt.target.value * price.split("₹").pop();
    //console.log(total);
    //setTotal(total);
    totalArr = newArr;
  };

  // get table row data
  const tdData = () => {
    return TableData.map((data) => {
      return (
        <tr>
          {column.map((v) => {
            if (v === "quantity") {
              console.log(totalArr, newArr);
              return (
                <td>
                  <input
                    type="number"
                    min="0"
                    onClick={(evt) =>
                      handleClick(evt, data["sr"], data["total"], data["price"])
                    }
                  ></input>
                </td>
              );
            }
            if (v === "total") {
              // let temp = data["price"].split("₹").pop();
                // return <td>{"₹" + newArr[parseInt(data["sr"]-1)] * temp}</td>; 
              return <td>{"₹" + newArr[parseInt(data["sr"])] }</td>;
            }
            return <td>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <table className="table" id="firstTable">
      <thead>
        <tr>{ThData()}</tr>
      </thead>
      <tbody>{tdData()}</tbody>
    </table>
  );
}
export default DynamicTable;
