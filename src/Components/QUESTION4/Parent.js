// import React from 'react';

// function Child(props) {
//     return (
//         <div>
//             {props.parentToChild}
//         </div>
//     );
// }

// export default Child;

import React from 'react';

function Parent(props) {
    return (
        <div>
            {props.childToParent}
        </div>
    );
}

export default Parent;