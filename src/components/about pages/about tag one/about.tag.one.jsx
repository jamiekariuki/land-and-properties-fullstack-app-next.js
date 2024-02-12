import React from "react";
import "./about.tag.one.scss";
import DoubleSPlit from "@/components/styled components/containers/double split/double.split";
import Cta from "@/components/landing pages/cta/cta";

const AboutTagOne = () => {
	return (
		<div className="about-tag-one">
			<div className="about-1">
				<h3>Our Commitment to Excellence</h3>
				<p>
					At Peculiarmarc Ventures Limited, excellence is not just a
					goal, it's our standard. Learn more about our unwavering
					commitment to quality
				</p>
				<h6>contact us: +254 701 944 155 </h6>
			</div>

			<DoubleSPlit
				image={
					"https://i.postimg.cc/xdLBJS8Z/Whats-App-Image-2024-02-02-at-01-31-55.jpg"
				}
				content={
					<>
						<h3>About US</h3>
						<p>
							Peculiarmarc ventures limited is one of the leading
							brands in the Kenyan real estate sector. Our main
							objecve is to empower property investors and
							transform the society.
							<br /> Peculiarmarc is on course to acquire and add
							value to land, which are parcularly enhanced to suit
							immediate residenal selement, commercial/
							Agricultural purposes and futurisc capital gain.
							Peculiarmarc is a one-stop shop offering an
							opportunity for Land & home ownership soluons to its
							customers.
						</p>
					</>
				}
				flexReverse={true}
			/>

			<div className="a-tag-second">
				<DoubleSPlit
					image={
						"https://i.postimg.cc/xdLBJS8Z/Whats-App-Image-2024-02-02-at-01-31-55.jpg"
					}
					content={
						<>
							<h3>Our Mission:</h3>
							<p>
								To provide an outstanding level of service,
								excellence and expertise in the real estate
								market to our clients. To always bear in mind
								that behind every real estate transaction, there
								is always a person’s sweat or family’s future
								involved.
								<br /> To act in the best interest of our
								clients at all times, by offering unquestionable
								ethics on all transactions and to develop
								long-lasting relationships with our clients by
								offering exceptional service and utmost customer
								satisfaction.
							</p>
						</>
					}
					fill={true}
				/>
			</div>

			<div className="about-1">
				<h3>Our Vision</h3>
				<p>
					The satisfaction of our customers is the main priority of
					Peculiarmarc Ventures Limited. Our goal is to be a one stop
					shop for everything Real estate & a point of reference in
					everything related to Real Estate. To make the Real Estate
					buying and selling of property as cost effective as possible
					while maintaining the highest level of service.
					<br /> Along with providing accurate and up-to-date
					information, skilled analysis and sound real estate advice
					and to continually explore new ideas and technology, to make
					the selling and buying of real estate faster, less costly
					and easier
				</p>
			</div>

			<DoubleSPlit
				image={
					"https://i.postimg.cc/xdLBJS8Z/Whats-App-Image-2024-02-02-at-01-31-55.jpg"
				}
				content={
					<>
						<h3>Why Us</h3>

						<p>
							Peculiarmarc ventures limited delivers real estate
							soluons at personalized level and is a market leader
							in providing lands and plots for sale at reasonable
							and affordable price.
						</p>

						<ol>
							<li>We add value on our properes.</li>
							<li>
								We ensure promptness in tle deed processing.
							</li>
							<li>We offer excellent customer service.</li>
							<li>We create job opportunies.</li>
							<li>
								We give back to the community through our CSR
								acvies.
							</li>
						</ol>
					</>
				}
				flexReverse={true}
			/>

			<DoubleSPlit
				image={
					"https://i.postimg.cc/xdLBJS8Z/Whats-App-Image-2024-02-02-at-01-31-55.jpg"
				}
				content={
					<>
						<h3>Working Methodology</h3>

						<p>
							Peculiarmarc ventures limited works through stable
							business networks and has a very well-established
							network with government relevant ministries. We have
							an excellent network with competent lawyers in
							Kenya. We work with various financial providers
							including KCB Bank & Cooperave Bank of Kenya. We
							work through patronage buying and treang all our
							current customers well. This leads to much post
							purchase referrals and thus the growth of our
							company. We value all our customers regardless of
							their status.
						</p>
					</>
				}
			/>

			<Cta />
		</div>
	);
};

export default AboutTagOne;
