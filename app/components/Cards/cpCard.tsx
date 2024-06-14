// import getData from '../../api/getData';
import { useState } from 'react';

const CPCard = () => {
    const reqUrlInfo = "https://codeforces.com/api/user.info?handles=Rishi_kumar_Singh";
    const reqUrlHandle = "https://codeforces.com/api/user.rating?handle=Rishi_kumar_Singh";
    
    const [info, setInfo] = useState({});
    const [handle, setHandle] = useState({});
    
    // let prom = getData({url: reqUrlInfo});
    
    // prom
    // .then((data) => {
    //     setInfo(data.result[0]);
    // })
    // .catch((error) => {
    //     console.error("Error fetching data:", error);
    // });

    // prom = getData({url: reqUrlHandle});
    // prom
    // .then((data) => {
    //     setHandle(data.result[0]);
    // })
    // .catch((error) => {
    //     console.error("Error fetching data:", error);
    // });
    
    return (
        <main className='bg-pall-dl bg-opacity-25 p-6 m-2'>
            <h1 className="text-h3">
                Codeforces
            </h1>
            <div>
                <div className="text-text">
                    Contest data
                </div>
                <div >
                    {
                        Object.keys(info).map((key) => {
                            return (
                                <div key={key}>
                                    {/* {key} : {info[key]} */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    );
}  

export default CPCard;