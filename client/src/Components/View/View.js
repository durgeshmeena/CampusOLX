import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../contextStore/PostContext";
import { Firebase } from "../../firebase/config";
import { useHistory } from "react-router";
import "./View.css";
import CreateImage from "../CreateImage/CreateImage";



// function fetchSeller () {

//     const res = await fetch("/api/check/seller", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ _id: accounts[0].homeAccountId.split('.')[0] })
//     })
//     const sellerData = await res.json();
//     console.log(sellerData);

// 	return sellerData.seller;

  
// }
  


function View() {
	const { postContent } = useContext(PostContext);//from the global store PostContext we can get information about desired product post that we want to show (the user is clicked item on the card)
	console.log(postContent);
	const [userDetails, setUserDetails] = useState(null);//we want show the details of who is posted the add and we dont know,so we want retreive user data from firebase who is posted this add
	const history = useHistory();//if user click the refresh of the page then PostContext data will be erased so it will throws an error so that time we want redirect this page to home page
	
	if(!postContent){
		history.push("/");
	}
	
	useEffect(() => {
		let { seller } = postContent;
		if (seller === undefined) {
			history.push("/");
		} else {
			fetch("/api/check/seller", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ _id: seller })
			})
			.then((res) => res.json())
				.then((data) => {
					setUserDetails(data.seller);
					console.log(data);
				});
			
		}
	}, [history, postContent]);

	// if(!postContent)
	// 	return (
	// 		{

	// 		}
	// 	)


	return (
		
			 
			<div className="viewParentDiv">
				<div className="imageShowDiv">
					<div>
						<img style={{ width: "40rem" }} src={CreateImage(postContent)} alt="" />
					</div>
				</div>{" "}

				<div className="rightSection">
					<div className="productDetails">
						<p>&#x20B9; {postContent.price} </p>
						<span>{postContent.name}</span>
						<p>{postContent.category}</p>
						<span>{postContent.createdAt}</span>
					</div>

					<div className="productDescription">
						<p className="p-bold">Product Description</p>
						<p>{postContent.description}</p> 
					</div>
					
					<div className="productSeller">
						{ !userDetails
							? 
							<div className="loading">
								<p>Loading...</p>
							</div> 
							:

							<div className="contactDetails">
								<p className="p-bold">Seller Details</p>
								<p>Name: {userDetails.name}</p>
								<p>Email: {userDetails.email}</p>
								<p>Phone: {userDetails.mobile}</p>
								<p>OtherInfo: {userDetails.otherInfo}</p>
							</div>
						}
					</div>
						
					{/* {userDetails &&
					<div className="contactDetails">
						<p className="p-bold">Seller details</p>
						<p>Name : {userDetails.name}</p>
						<p>Phone : {userDetails.phone}</p>
					</div>
					} */}

				</div>
			</div>
				
			
		
	);
}
export default View;
