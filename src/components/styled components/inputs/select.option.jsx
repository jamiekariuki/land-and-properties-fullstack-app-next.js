"use client";
import "./inputs.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

const SelectOption = ({
	list,
	value,
	changeValue,
	node,
	label,
	disabled,
	softBg,
}) => {
	return (
		<div
			className={softBg ? "inputs softbg" : "inputs"}
			style={{ height: node && "27px" }}
		>
			<select
				disabled={disabled}
				id="mySelect"
				value={value}
				onChange={(e) => {
					changeValue(e.target.value);
				}}
				className="input-field"
				style={{
					fontSize: node && "11px",
				}}
			>
				<option value="" disabled hidden>
					{label}
				</option>
				{list.map((item, index) => (
					<option key={index} value={item}>
						{item}
					</option>
				))}
			</select>
			<div className="select-icon-container">
				<MdKeyboardArrowDown className="select-icon" />
			</div>
		</div>
	);
};

export default SelectOption;
