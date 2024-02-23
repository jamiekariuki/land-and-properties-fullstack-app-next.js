"use client";
import {
	Inputs2,
	TextArea2,
} from "@/components/styled components/inputs/inputs";
import React from "react";
import "./add.property.scss";
import PropertyImages from "./property images/property.images";

const AddProperty = () => {
	return (
		<div className="add-property-c">
			<div className="add-p-cont">
				<h1>Add Property</h1>
				<div className="add-image-container">
					<h6>Add Property Images</h6>
					<PropertyImages />
				</div>
				<div className="add-property">
					<h6>Property Title</h6>
					<Inputs2
						/* error={
									formData.title.replace(/\s/g, "").length >=
									maxTitleLength
								} */
						type={"text"}
						label={"Title"}
						id={"addproperty-title"}
						//value={initialUserData.username}
						borderRadius={true}

						/* changeValue={(e) => {
									handleChange("title", e);
								}} */
					/>
				</div>

				<div className="add-property">
					<h6>Property Description</h6>
					<TextArea2
						/* error={
							systemPrompt.replace(/\s/g, "").length >=
							systemPromptLength
						} */

						label={"Enter description..."}
						id={"addproperty-desc"}
						value={""}
						inputHeight={"100px"}
						borderRadius={true}
						/* changeValue={(e) => {
							setSystemPrompt(e);
						}} */
					/>
				</div>

				<div className="add-property">
					<h6>Property Location</h6>
					<Inputs2
						/* error={
									formData.Location.replace(/\s/g, "").length >=
									maxLocationLength
								} */
						type={"text"}
						label={"Location"}
						id={"addproperty-Location"}
						//value={initialUserData.username}
						borderRadius={true}

						/* changeValue={(e) => {
									handleChange("Location", e);
								}} */
					/>
				</div>

				<div className="add-property">
					<h6>Property Coordinates</h6>
					<Inputs2
						/* error={
									formData.Location.replace(/\s/g, "").length >=
									maxLocationLength
								} */
						type={"text"}
						label={"coordinates. Example 90,45"}
						id={"addproperty-cordinates"}
						//value={initialUserData.username}
						borderRadius={true}

						/* changeValue={(e) => {
									handleChange("Location", e);
								}} */
					/>
				</div>

				<div className="add-property">
					<h6>Amenities Arround</h6>
					<TextArea2
						/* error={
							systemPrompt.replace(/\s/g, "").length >=
							systemPromptLength
						} */

						label={
							"Enter amenities... example: Beach Access, hiking trails, Mall, Nearby restaurant "
						}
						id={"addproperty-amenities"}
						value={""}
						inputHeight={"100px"}
						borderRadius={true}
						/* changeValue={(e) => {
							setSystemPrompt(e);
						}} */
					/>
				</div>
				<div className="add-property">
					<h6>Why this property</h6>
					<TextArea2
						/* error={
							systemPrompt.replace(/\s/g, "").length >=
							systemPromptLength
						} */

						label={"Enter why visitors should choose this property"}
						id={"addproperty-why-this-prop"}
						value={""}
						inputHeight={"100px"}
						borderRadius={true}
						/* changeValue={(e) => {
							setSystemPrompt(e);
						}} */
					/>
				</div>
				<div className="add-property">
					<h6>Price (ksh)</h6>
					<Inputs2
						/* error={
									formData.Location.replace(/\s/g, "").length >=
									maxLocationLength
								} */
						type={"text"}
						label={"price"}
						id={"addproperty-price"}
						//value={initialUserData.username}
						borderRadius={true}

						/* changeValue={(e) => {
									handleChange("Location", e);
								}} */
					/>
				</div>

				<div className="add-property">
					<h6>Price quote</h6>
					<TextArea2
						/* error={
							systemPrompt.replace(/\s/g, "").length >=
							systemPromptLength
						} */

						label={"Enter price quote. example: 20% discount"}
						id={"addproperty-p-quote"}
						value={""}
						inputHeight={"50px"}
						borderRadius={true}
						/* changeValue={(e) => {
							setSystemPrompt(e);
						}} */
					/>
				</div>

				<button>
					<p>Post</p>
				</button>
			</div>
		</div>
	);
};

export default AddProperty;
