"use client";
import "./inputs.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

const SelectOption = ({
	list,
	node,
	label,
	disabled,
	softBg,
	borderRadius,
	register,
	name,
}) => {
	return (
		<div
			className={softBg ? "inputs softbg" : "inputs"}
			style={{ height: node && "27px" }}
		>
			<select
				disabled={disabled}
				id="mySelect"
				{...register(name)}
				className="input-field"
				style={{
					fontSize: node && "11px",
					borderRadius: borderRadius ? "5px" : "",
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

const SelectOptionPlain = ({
	list,
	node,
	label,
	disabled,
	softBg,
	borderRadius,
	onValueChange,
	value,
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
					onValueChange(e.target.value);
				}}
				className="input-field"
				style={{
					fontSize: node && "11px",
					borderRadius: borderRadius ? "5px" : "",
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

export { SelectOption, SelectOptionPlain };
