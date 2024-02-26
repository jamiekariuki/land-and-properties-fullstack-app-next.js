"use client";
import {
	Inputs2,
	TextArea2,
} from "@/components/styled components/inputs/inputs";
import React, { useEffect, useState } from "react";
import "./edit.property.scss";
import EditPropertyImages from "./property images/property.images";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PropertySchema } from "@/utils/validators/property.schema";
import { useToast } from "@/context/toastContext";
import { updateProperty } from "@/lib/actions/properties";
import { useRouter } from "next/navigation";

const EditProperty = ({ item }) => {
	const { showToast } = useToast();
	const [error, setError] = useState("");
	const [picture, setPicture] = useState(item.picture);
	const [submiting, setSubmiting] = useState(false);
	const [success, setSuccess] = useState("");

	const {
		control,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(PropertySchema),
		defaultValues: item,
	});
	const router = useRouter();
	useEffect(() => {
		if (success !== "") {
			showToast(success, "success");
			//redirect here
			//	const router = useRouter();
			router.push("/dashboard/properties", { scroll: false });
		} else if (error !== "") {
			showToast(error, "error");
		}
		setError("");
		setSuccess("");
	}, [success, error]);

	const onSubmit = (data) => {
		setSubmiting(true);
		//server action
		data.picture = picture;
		updateProperty(item._id, data).then((data) => {
			setError(data?.error);
			setSuccess(data?.success);
			setSubmiting(false);
		});
	};

	return (
		<div className="edit-property-c">
			<form className="edit-p-cont" onSubmit={handleSubmit(onSubmit)}>
				<h1>Edit Property</h1>
				<div className="edit-image-container">
					<h6>Add Property Images</h6>
					<EditPropertyImages
						picture={picture}
						setPicture={setPicture}
					/>
				</div>

				<div className="edit-property">
					<h6>Property Title</h6>
					<Inputs2
						error={errors.title?.message}
						register={register}
						name={"title"}
						type={"text"}
						label={"Title"}
						id={"EditProperty-title"}
						borderRadius={true}
					/>
				</div>

				<div className="edit-property">
					<h6>Property Description</h6>
					<TextArea2
						error={errors.description?.message}
						register={register}
						name={"description"}
						type={"text"}
						label={"Enter description..."}
						id={"editproperty-desc"}
						inputHeight={"100px"}
						borderRadius={true}
					/>
				</div>

				<div className="edit-property">
					<h6>Property Location</h6>
					<Inputs2
						error={errors.location?.message}
						register={register}
						name={"location"}
						type={"text"}
						label={"Location"}
						id={"editproperty-Location"}
						borderRadius={true}
					/>
				</div>

				<div className="edit-property">
					<h6>Property Coordinates</h6>
					<Inputs2
						error={errors.coordinates?.message}
						register={register}
						name={"coordinates"}
						type={"text"}
						label={"coordinates. Example 90,45"}
						id={"editproperty-cordinates"}
						borderRadius={true}
					/>
				</div>

				<div className="edit-property">
					<h6>Amenities Arround</h6>
					<TextArea2
						error={errors.amenities?.message}
						register={register}
						name={"amenities"}
						label={
							"Enter amenities... example: Beach Access, hiking trails, Mall, Nearby restaurant "
						}
						id={"addproperty-amenities"}
						value={""}
						inputHeight={"100px"}
						borderRadius={true}
					/>
				</div>

				<div className="edit-property">
					<h6>Why this property</h6>
					<TextArea2
						error={errors.whyThisProperty?.message}
						register={register}
						name={"whyThisProperty"}
						label={"Enter why visitors should choose this property"}
						id={"editproperty-why-this-prop"}
						inputHeight={"100px"}
						borderRadius={true}
					/>
				</div>

				<Checkbox2
					control={control}
					label={"Featured"}
					name={"featured"}
				/>

				<Checkbox2
					control={control}
					label={"Popular"}
					name={"populard"}
				/>

				<div className="edit-property">
					<h6>Price (ksh)</h6>
					<Inputs2
						error={errors.price?.message}
						register={register}
						name={"price"}
						type={"text"}
						label={"price"}
						id={"editproperty-price"}
						borderRadius={true}
					/>
				</div>

				<div className="edit-property">
					<h6>Price quote</h6>
					<TextArea2
						error={errors.priceQuote?.message}
						register={register}
						name={"priceQuote"}
						label={"Enter price quote. example: 20% discount"}
						id={"editproperty-p-quote"}
						inputHeight={"50px"}
						borderRadius={true}
					/>
				</div>

				<button disabled={submiting}>
					{submiting ? <p>Updating...</p> : <p>Update</p>}
				</button>
			</form>
		</div>
	);
};

export default EditProperty;
