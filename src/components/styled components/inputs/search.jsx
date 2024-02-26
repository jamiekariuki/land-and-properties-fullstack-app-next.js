"use client";
import React from "react";
import "./inputs.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ borderRadius }) => {
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();

	const handleSearch = useDebouncedCallback((e) => {
		const params = new URLSearchParams(searchParams);

		//  params.set("page", 1);

		if (e.target.value) {
			e.target.value.length > 2 && params.set("q", e.target.value);
		} else {
			params.delete("q");
		}
		replace(`${pathname}?${params}`);
	}, 300);

	return (
		<div className="group">
			<svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
				<g>
					<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
				</g>
			</svg>
			<input
				placeholder="Search..."
				type="search"
				className="input"
				style={{ borderRadius: borderRadius ? "5px" : "" }}
				onChange={handleSearch}
			/>
		</div>
	);
};

export default Search;
