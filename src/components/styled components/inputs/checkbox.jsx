"use client";
import * as React from "react";
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormHelperText,
} from "@mui/material";
import { Controller } from "react-hook-form";

export default function Checkbox2({ label, name, control }) {
	return (
		<div>
			<Controller
				name={name}
				control={control}
				render={({ field, fieldState: { error } }) => (
					<FormControl
						sx={{ m: 0 }}
						error={!!error}
						component="fieldset"
						variant="standard"
					>
						<FormControlLabel
							control={
								<Checkbox
									inputRef={field.ref}
									checked={field.value ?? false}
									onChange={field.onChange}
									onBlur={field.onBlur}
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label=<h6>{label}</h6>
						/>
						{error?.message ? (
							<FormHelperText>{error?.message}</FormHelperText>
						) : null}
					</FormControl>
				)}
			/>
		</div>
	);
}
