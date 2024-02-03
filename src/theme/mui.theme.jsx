"use client";

export const getDesignTokens = (mode) => ({
	palette: {
		mode,
		...(mode === "light"
			? {
					primary: {
						main: "#1f563b",
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
						main: "#1f563b",
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
