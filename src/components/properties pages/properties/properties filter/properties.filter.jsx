"use client";
import React, { useState } from "react";
import "./properties.filter.scss";
import Search from "@/components/styled components/inputs/search";
import { InputPlain } from "@/components/styled components/inputs/inputs";
import { SelectOptionPlain } from "@/components/styled components/inputs/select.option";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

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

	const handleMinPrice = useDebouncedCallback((e) => {
		setMinPrice(e);
		const params = new URLSearchParams(searchParams);
		if (e) {
			params.set("min", e);
		} else {
			params.delete("min");
		}
		replace(`${pathname}?${params}`);
	}, 300);

	const handleMaxPrice = useDebouncedCallback((e) => {
		setMaxPrice(e);
		const params = new URLSearchParams(searchParams);
		if (e) {
			params.set("max", e);
		} else {
			params.delete("max");
		}
		replace(`${pathname}?${params}`);
	}, 300);

	return (
		<div className="properties-filter">
			<div className="search-filter">
				<Search />
			</div>

			<div className="category-filter">
				<div className="location f-c">
					<p>Select Location</p>
					<SelectOptionPlain
						label={"Location"}
						list={locations}
						value={location}
						onValueChange={handleLocation}
					/>
				</div>
				<div className="min f-c">
					<p>Min Price</p>
					<InputPlain
						type={"number"}
						label={"Min"}
						id={"min-price"}
						value={minPrice}
						onValueChange={handleMinPrice}
					/>
				</div>
				<div className="max f-c">
					<p>Max price</p>
					<InputPlain
						type={"number"}
						label={"Max"}
						id={"max-price"}
						value={maxPrice}
						onValueChange={handleMaxPrice}
					/>
				</div>
			</div>
		</div>
	);
};

export default PropertiesFilter;
