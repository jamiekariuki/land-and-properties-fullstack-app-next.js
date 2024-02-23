"use client";

export const getDesignTokens = (mode) => ({
	palette: {
		mode,
		...(mode === "light"
			? {
					primary: {
						main: "#e82e59",
					},
					secondary: {
						main: "#e82e59",
					},

					background: {
						default: "#fdfdfd",
						paper: "#fdfdfd",
					},
			  }
			: {
					primary: {
						main: "#e82e59",
					},
					secondary: {
						main: "#e82e59",
					},
					background: {
						default: "rgb(11, 11, 11)",
						paper: "rgb(11, 11, 11)",
					},
			  }),
	},
});
