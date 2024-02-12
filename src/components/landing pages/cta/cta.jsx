import React from "react";
import "./cta.scss";
import Link from "next/link";

const Cta = () => {
	return (
		<div className="cta">
			<div className="cta-info">
				<h3>Uncover Property Opportunities</h3>
				<p>
					Explore our extensive selection of land options, ranging
					from residential to commercial. Find the perfect plot to
					suit your needs and aspirations
				</p>
				<div>
					<Link href={"/properties"}>
						<button>
							<p>See Properties</p>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Cta;
