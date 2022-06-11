// import React, {useContext} from 'react';
// import {observer} from "mobx-react-lite";
// import {Context} from "../index";
// import {ListGroup} from "react-bootstrap";
// // import {NavLink} from "react-router-dom";
// // import {APPOINTMENT_ROUTE} from "../utils/consts";
//
// const OrganizationBar = observer(() => {
//     const {organization} = useContext(Context)
//     return (
//         <div>
//             <ListGroup className="w-25 ">
//                 {organization.organizations.map(organization=>
//                     <ListGroup.Item
//                         key={organization.id}>
//                         {organization.name}
//                     </ListGroup.Item>
//                 )}
//                 {/*<ListGroup.Item>Cras justo odio</ListGroup.Item>*/}
//                 {/*<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>*/}
//                 {/*<ListGroup.Item>Morbi leo risus</ListGroup.Item>*/}
//                 {/*<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>*/}
//                 {/*<ListGroup.Item>Vestibulum at eros</ListGroup.Item>*/}
//             </ListGroup>
//         </div>
//     );
// });
//
// export default OrganizationBar;