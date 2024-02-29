import { BsFillPeopleFill } from "react-icons/bs";
import { BsHousesFill } from "react-icons/bs";
import { BsChatLeftTextFill } from "react-icons/bs";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { BsFillImageFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { BsStack } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";

//----dashboard

export const NavigationLinks = [
	{
		icon: <BsFillPeopleFill className="nav-icons" />,
		text: "Users",
		link: "/dashboard/users",
	},
	{
		icon: <BsFillImageFill className="nav-icons" />,
		text: "Gallery",
		link: "/dashboard/gallery",
	},
	{
		icon: <BsHousesFill className="nav-icons" />,
		text: "properties",
		link: "/dashboard/properties",
	},
	{
		icon: <BsChatLeftTextFill className="nav-icons" />,
		text: "Messages",
		link: "/dashboard/messages",
	},
	/*{
		icon: <BsEnvelopeAtFill className="nav-icons" />,
		text: "mail",
		link: "/dashboard/mail",
	},
	{
		icon: <BsStack className="nav-icons" />,
		text: "blog",
		link: "/dashboard/blog",
	},
 */
	/* {
		icon: <BsPersonFill className="nav-icons" />,
		text: "Profile",
		link: "/dashboard/profile",
	}, */

	{
		icon: <IoIosLogOut className="nav-icons" />,
		text: "Logout",
	},
];
