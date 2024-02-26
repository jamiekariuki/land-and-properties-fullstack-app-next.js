import DashboardGallery from "@/components/Admin dashboard/gallery/gallery";
import { GetAllGallery } from "@/lib/data/gallery";
import React from "react";

const GalleryPage = async () => {
	const pictures = await GetAllGallery();
	const serializedpictures = JSON.stringify(pictures);
	const parsedpictures = JSON.parse(serializedpictures);

	return (
		<div>
			<DashboardGallery pictures={parsedpictures} />
		</div>
	);
};

export default GalleryPage;
