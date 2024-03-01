import {
	adminRoutes,
	apiAuthPrefix,
	loginRoutes,
	publicRoutes,
} from "@/utils/auth routes/routes";

export const authConfig = {
	pages: {
		signIn: "/login",
	},
	providers: [],
	callbacks: {
		// FOR MORE DETAIL ABOUT CALLBACK FUNCTIONS CHECK https://next-auth.js.org/configuration/callbacks
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.role = user._doc.role;
			}
			return token;
		},
		async session({ session, token }) {
			if (token) {
				session.user.id = token.id;
				session.user.role = token.role;
			}
			return session;
		},
		authorized({ auth, request }) {
			/* const user = auth?.user;

			const isOnAdminPanel =
				request.nextUrl?.pathname.startsWith("/dashboard");
			const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
			const isOnLoginPage =
				request.nextUrl?.pathname.startsWith("/login");

			// ONLY ADMIN CAN REACH THE ADMIN DASHBOARD

			if (isOnAdminPanel && !user?.role === "user") {
				return false;
			}

			// ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE

			if (isOnBlogPage && !user) {
				return false;
			}

			// ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE

			if (isOnLoginPage && user) {
				return Response.redirect(new URL("/", request.nextUrl));
			} */
			//console.log(request.nextUrl);
			const nextUrl = request.nextUrl;
			const user = auth?.user;

			const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
			//const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
			const isAdminRoute = nextUrl.pathname.startsWith(adminRoutes);
			const isLoginRoutes = loginRoutes.includes(nextUrl.pathname);

			if (isApiAuthRoute) {
				return null;
			}

			//none admins shouldnt go to dash
			if (isAdminRoute) {
				if (user) {
					if (!user?.role === "user") {
						return null;
					} else {
						return Response.redirect(new URL("/", nextUrl));
					}
				} else {
					return Response.redirect(new URL("/", nextUrl));
				}
			}

			//if in login pages , redirected to respective pages
			if (isLoginRoutes) {
				if (user) {
					if (user?.role === "user") {
						return Response.redirect(new URL("/", nextUrl));
					} else if (
						user?.role === "admin" ||
						user?.role === "super admin"
					) {
						return Response.redirect(
							new URL("/dashboard/users", nextUrl)
						);
					}
				}
			}

			return true;
		},
	},
};
