// import React, { useState } from 'react'
// import Child from './Child';

// export default function Parent() {
//     const [data, setData] = useState('HELLOWORLD');

//     const setDataOn = () => {
//         setData("MERNSTACK DEVELOPER");
//     }
//     return (
//         <div className="App">
//             <Child parentToChild={data} />
//             <div>
//                 <button primary onClick={() => setDataOn()}>Click Me</button>
//             </div>
//         </div>
//     )
// }
import React, { useState } from 'react'
import Parent from './Parent';

export default function Child() {
    const [data, setData] = useState('HELLOWORLD');

    const setDataOn = () => {
        setData("MERNSTACK DEVELOPER");
    }
    return (
        <div className="App" style={{marginTop:"25px"}}>
            <center>

            
            <Parent childToParent={data} />
            <div>
                <button primary onClick={() => setDataOn()}>Click Me</button>
            </div>
            </center>
        </div>
    )
}