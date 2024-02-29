import * as yup from "yup";

export const MessageSchema = yup.object().shape({
	name: yup.string(),
	email: yup.string().email("Invalid email").required("Email is required"),
	number: yup.string(),
	message: yup.string().required("Message is required"),
});
