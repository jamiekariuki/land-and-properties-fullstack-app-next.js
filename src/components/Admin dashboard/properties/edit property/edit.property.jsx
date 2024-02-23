"use client";
import {
	Inputs2,
	TextArea2,
} from "@/components/styled components/inputs/inputs";
import React from "react";
import "./edit.property.scss";
import EditPropertyImages from "./property images/property.images";

const EditProperty = ({ item }) => {
	return (
		<div className="edit-property-c">
			<div className="edit-p-cont">
				<h1>Edit Property</h1>
				<div className="edit-image-container">
					<h6>Add Property Images</h6>
					<EditPropertyImages picture={item.picture} />
				</div>

				<div className="edit-property">
					<h6>Property Title</h6>
					<Inputs2
						/* error={
									formData.title.replace(/\s/g, "").length >=
									maxTitleLength
								} */
						type={"text"}
						label={"Title"}
						id={"EditProperty-title"}
						value={item.title}
						borderRadius={true}

						/* changeValue={(e) => {
									handleChange("title", e);
								}} */
					/>
				</div>

				<div className="edit-property">
					<h6>Property Description</h6>
					<TextArea2
						/* error={
							systemPrompt.replace(/\s/g, "").length >=
							systemPromptLength
						} */

						label={"Enter description..."}
						id={"EditProperty-desc"}
						value={item.description}
						inputHeight={"100px"}
						borderRadius={true}
						/* changeValue={(e) => {
							setSystemPrompt(e);
						}} */
					/>
				</div>

				<div className="edit-property">
					<h6>Property Location</h6>
					<Inputs2
						/* error={
									formData.Location.replace(/\s/g, "").length >=
									maxLocationLength
								} */
						type={"text"}
						label={"Location"}
						id={"EditProperty-Location"}
						value={item.location}
						borderRadius={true}

						/* changeValue={(e) => {
									handleChange("Location", e);
								}} */
					/>
				</div>

				<div className="edit-property">
					<h6>Property Coordinates</h6>
					<Inputs2
						/* error={
									formData.Location.replace(/\s/g, "").length >=
									maxLocationLength
								} */
						type={"text"}
						label={"coordinates. Example 90,45"}
						id={"EditProperty-cordinates"}
						value={item.coordinates}
						borderRadius={true}

						/* changeValue={(e) => {
									handleChange("Location", e);
								}} */
					/>
				</div>

				<div className="edit-property">
					<h6>Amenities Arround</h6>
					<TextArea2
						/* error={
							systemPrompt.replace(/\s/g, "").length >=
							systemPromptLength
						} */

						label={
							"Enter amenities... example: Beach Access, hiking trails, Mall, Nearby restaurant "
						}
						id={"EditProperty-amenities"}
						value={""}
						inputHeight={"100px"}
						borderRadius={true}
						/* changeValue={(e) => {
							setSystemPrompt(e);
						}} */
					/>
				</div>

				<div className="edit-property">
					<h6>Why this property</h6>
					<TextArea2
						/* error={
							systemPrompt.replace(/\s/g, "").length >=
							systemPromptLength
						} */

						label={"Enter why visitors should choose this property"}
						id={"EditProperty-why-this-prop"}
						value={item.whyThisProperty}
						inputHeight={"100px"}
						borderRadius={true}
						/* changeValue={(e) => {
							setSystemPrompt(e);
						}} */
					/>
				</div>

				<div className="edit-property">
					<h6>Price (ksh)</h6>
					<Inputs2
						/* error={
									formData.Location.replace(/\s/g, "").length >=
									maxLocationLength
								} */
						type={"text"}
						label={"price"}
						id={"EditProperty-price"}
						value={item.price}
						borderRadius={true}

						/* changeValue={(e) => {
									handleChange("Location", e);
								}} */
					/>
				</div>

				<div className="edit-property">
					<h6>Price quote</h6>
					<TextArea2
						/* error={
							systemPrompt.replace(/\s/g, "").length >=
							systemPromptLength
						} */

						label={"Enter price quote. example: 20% discount"}
						id={"EditProperty-p-quote"}
						value={item.priceQuote}
						inputHeight={"50px"}
						borderRadius={true}
						/* changeValue={(e) => {
							setSystemPrompt(e);
						}} */
					/>
				</div>

				<button>
					<p>Update</p>
				</button>
			</div>
		</div>
	);
};

export default EditProperty;
