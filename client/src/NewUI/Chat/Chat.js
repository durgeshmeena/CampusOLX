import React, { useState, useEffect, createRef, Fragment, Component } from "react";
import Talk from "talkjs";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useIsAuthenticated } from "@azure/msal-react";



// const InboxContainer = () => {

//     const talkjsContainer = createRef();

//     const { accounts } = useMsal();
//     const [user, setUser] = useState({
//         id : accounts[0].homeAccountId.split('.')[0],
//         name: accounts[0].name,
//         email: accounts[0].username 
//     });
  
//     useEffect(() => {   
  
// 		async function readyTalky() {
// 			Talk.ready.then(() => {

// 				console.log("Talk is ready");
// 				console.log("user:", user);
// 				var me = new Talk.User({
// 					id: user.id,
// 					name: user.name,
// 					email: user.email,
// 					welcomeMessage: "Hey there! How are you? :-)",
// 					role: "booker"
// 				});
				
// 				window.talkSession = new Talk.Session({
// 					appId: "taWaWLjI",
// 					me: me
// 				});
				
// 				var other = new Talk.User({
// 					id: "456709848",
// 					name: "MONU",
// 					email: "demo@talkjs.com",
// 					welcomeMessage: "Hey, how can I help?",
// 					role: "booker"
// 				});

// 				var conversation = talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other));
// 					conversation.setParticipant(me);
// 					conversation.setParticipant(other);
// 					conversation.setAttributes({
// 					subject: "This is a testing conversation"
// 				});
				
// 				var inbox = talkSession.createInbox({selected: conversation});
// 				inbox.mount(talkjsContainer.current);
// 			}); 
// 		}

//     	readyTalky();
      
//     }, []);
  
//     const dims = {
//         height: "45rem",
//     }

//     return (
//         <div ref={talkjsContainer} style={dims} ></div>
//     );
    
// }




// function  Messaging() {

// 	const talkjsContainer = createRef();

// 	const { accounts } = useMsal();
//     const [user, setUser] = useState({
//         id : accounts[0].homeAccountId.split('.')[0],
//         name: accounts[0].name,
//         email: accounts[0].username,
// 		welcomeMessage: "Hey there! How are you? :-)",
// 		role: "booker"
	
//     });


// 	useEffect(() => {

// 		Talk.ready
//             .then(() => {
//                 const me = new Talk.User(user);
                
//                 if (!window.talkSession) {
//                     window.talkSession = new Talk.Session({
//                         appId: "taWaWLjI",
//                         me: me
//                     });
//                 }
            
//                 var inbox = window.talkSession.createInbox();
//                 inbox.mount(talkjsContainer.current);

//             })
//             .catch(e => console.error(e));	

// 	}, []);

    
// 	return (
// 		<Fragment>
// 			<div style={{height: '500px'}} className="inbox-container" ref={talkjsContainer}>Loading...</div>
// 		</Fragment>
// 	);
    
//   }



const Messaging = () => {

	const talkjsContainer = createRef();

	useEffect(() => {

		Talk.ready.then(function () {
			const me = new Talk.User({
			  id: '123456',
			  name: 'Alice',
			  email: 'alice@example.com',
			  photoUrl: 'https://demo.talkjs.com/img/alice.jpg',
			  welcomeMessage: 'Hey there! How are you? :-)',
			});

			const session = new Talk.Session({
			  appId: 'taWaWLjI',
			  me: me,
			});

			const other = new Talk.User({
			  id: '654321',
			  name: 'Sebast',
			  email: 'Sebastian@example.com',
			  photoUrl: 'https://demo.talkjs.com/img/sebastian.jpg',
			  welcomeMessage: 'Hey, how can I help?',
			});
		  
			const conversation = session.getOrCreateConversation(
			  Talk.oneOnOneId(me, other)
			);
			conversation.setParticipant(me);
			conversation.setParticipant(other);
		  
			const inbox = session.createInbox();
			inbox.select(conversation);
			inbox.mount(talkjsContainer.current);

		  });

	}, []);

	const dims = {
        height: "46rem",
    }

	return (
        <div ref={talkjsContainer} style={dims} ></div>
    );
	
}


const Chat = () => {
    return (
        <div >
            <AuthenticatedTemplate>
				<Messaging/>
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <h1>Please sign in to chat</h1>
            </UnauthenticatedTemplate>
        </div>
    );
}



export default Chat;