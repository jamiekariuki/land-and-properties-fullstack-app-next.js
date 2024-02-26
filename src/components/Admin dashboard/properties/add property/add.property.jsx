"use client";
import {
	Inputs2,
	TextArea2,
} from "@/components/styled components/inputs/inputs";
import React, { useEffect, useState } from "react";
import "./add.property.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addProperties } from "@/lib/actions/properties";
import { PropertySchema } from "@/utils/validators/property.schema";
import PropertyImages from "./property images/property.images";
import { useToast } from "@/context/toastContext";
import { useRouter } from "next/navigation";
import Checkbox2 from "@/components/styled components/inputs/checkbox";

const AddProperty = () => {
	const { showToast } = useToast();

	const [error, setError] = useState("");
	const [picture, setPicture] = useState([]);
	const [submiting, setSubmiting] = useState(false);
	const [success, setSuccess] = useState("");

	const {
		control,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(PropertySchema),
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
		addProperties(data).then((data) => {
			setError(data?.error);
			setSuccess(data?.success);
			setSubmiting(false);
		});
	};

	return (
		<div className="add-property-c">
			<form className="add-p-cont" onSubmit={handleSubmit(onSubmit)}>
				<h1>Add Property</h1>
				<div className="add-image-container">
					<h6>Add Property Images</h6>
					<PropertyImages picture={picture} setPicture={setPicture} />
				</div>
				<div className="add-property">
					<h6>Property Title</h6>
					<Inputs2
						error={errors.title?.message}
						register={register}
						name={"title"}
						type={"text"}
						label={"Title"}
						id={"addproperty-title"}
						borderRadius={true}
					/>
				</div>

				<div className="add-property">
					<h6>Property Description</h6>
					<TextArea2
						error={errors.description?.message}
						register={register}
						name={"description"}
						type={"text"}
						label={"Enter description..."}
						id={"addproperty-desc"}
						inputHeight={"100px"}
						borderRadius={true}
					/>
				</div>

				<div className="add-property">
					<h6>Property Location</h6>
					<Inputs2
						error={errors.location?.message}
						register={register}
						name={"location"}
						type={"text"}
						label={"Location"}
						id={"addproperty-Location"}
						borderRadius={true}
					/>
				</div>

				<div className="add-property">
					<h6>Property Coordinates</h6>
					<Inputs2
						error={errors.coordinates?.message}
						register={register}
						name={"coordinates"}
						type={"text"}
						label={"coordinates. Example 90,45"}
						id={"addproperty-cordinates"}
						borderRadius={true}
					/>
				</div>

				<div className="add-property">
					<h6>Amenities Arround</h6>
					<TextArea2
						error={errors.amenities?.message}
						register={register}
						name={"amenities"}
						label={
							"Enter amenities... example: Beach Access, hiking trails, Mall, Nearby restaurant "
						}
						id={"addproperty-amenities"}
						inputHeight={"100px"}
						borderRadius={true}
					/>
				</div>
				<div className="add-property">
					<h6>Why this property</h6>
					<TextArea2
						error={errors.whyThisProperty?.message}
						register={register}
						name={"whyThisProperty"}
						label={"Enter why visitors should choose this property"}
						id={"addproperty-why-this-prop"}
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

				<div className="add-property">
					<h6>Price (ksh)</h6>
					<Inputs2
						error={errors.price?.message}
						register={register}
						name={"price"}
						type={"text"}
						label={"price"}
						id={"addproperty-price"}
						borderRadius={true}
					/>
				</div>

				<div className="add-property">
					<h6>Price quote</h6>
					<TextArea2
						error={errors.priceQuote?.message}
						register={register}
						name={"priceQuote"}
						label={"Enter price quote. example: 20% discount"}
						id={"addproperty-p-quote"}
						inputHeight={"50px"}
						borderRadius={true}
					/>
				</div>

				<button disabled={submiting}>
					{submiting ? <p>Submiting...</p> : <p>Post</p>}
				</button>
			</form>
		</div>
	);
};

export default AddProperty;
