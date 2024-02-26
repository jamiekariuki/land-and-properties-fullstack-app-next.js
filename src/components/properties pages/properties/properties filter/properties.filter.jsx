"use client";
import React, { useState } from "react";
import "./properties.filter.scss";
import Search from "@/components/styled components/inputs/search";
import { Inputs2 } from "@/components/styled components/inputs/inputs";
import SelectOption from "@/components/styled components/inputs/select.option";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PropertiesFilter = () => {
	const [location, setLocation] = useState("");
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");

	const locations = ["Nairobi", "Malindi", "Nakuru", "Lamu", "Narok"];

	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();

	const handleLocation = (e) => {
		setLocation(e);
		const params = new URLSearchParams(searchParams);
		if (e) {
			params.set("location", e);
		} else {
			params.delete("location");
		}
		replace(`${pathname}?${params}`);
	};

	const handleMinPrice = (e) => {
		setMinPrice(e);
		const params = new URLSearchParams(searchParams);
		if (e) {
			params.set("min", e);
		} else {
			params.delete("min");
		}
		replace(`${pathname}?${params}`);
	};

	const handleMaxPrice = (e) => {
		setMaxPrice(e);
		const params = new URLSearchParams(searchParams);
		if (e) {
			params.set("max", e);
		} else {
			params.delete("max");
		}
		replace(`${pathname}?${params}`);
	};

	return (
		<div className="properties-filter">
			<div className="search-filter">
				<Search />
			</div>

			<div className="category-filter">
				<div className="location f-c">
					<p>Select Location</p>
					<SelectOption
						label={"Location"}
						list={locations}
						value={location}
						changeValue={(e) => {
							handleLocation(e);
						}}
					/>
				</div>
				<div className="min f-c">
					<p>Min Price</p>
					<Inputs2
						type={"number"}
						label={"Min"}
						id={"min-price"}
						value={minPrice}
						changeValue={(e) => {
							handleMinPrice(e);
						}}
					/>
				</div>
				<div className="max f-c">
					<p>Max price</p>
					<Inputs2
						type={"number"}
						label={"Max"}
						id={"max-price"}
						value={maxPrice}
						changeValue={(e) => {
							handleMaxPrice(e);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default PropertiesFilter;
