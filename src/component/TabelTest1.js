import useFetch from "../hooks/useFetch";
import TabelTest1Row from "../component/TabelTest1Row";

export default function TabelTest1(){

    //{"id":1, "name":"ryu1", "nickName":"dragon1", "age":21  },
    const myDataList = useFetch(`http://localhost:3300/myData`);


    function fnPAlert(){
        alert('부모함수');
    }

    return(
        <>
        <h3>myData List</h3>
        {myDataList.length === 0 && <span>Loading...</span>}
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>nickName</th>
                    <th>age</th>
                    <th>plus</th>
                    <th>del</th>
                    <th>부모함수</th>
                </tr>
            </thead>
            <tbody>
               {/*  {myDataList.map(data => (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.nickName}</td>
                        <td>{data.age}</td>
                    </tr>
                ))}
                */}

                {myDataList.length < 1 
                 ? <tr><td colSpan={7}>No Data.</td></tr>
                 : myDataList.map(data => (
                    <TabelTest1Row data={data} key={data.id} fnPAlert={fnPAlert} />
                   ))
                }
            </tbody>

        </table>
        </>
    );
}