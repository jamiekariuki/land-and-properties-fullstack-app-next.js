import React from "react";
import "./about.tag.one.scss";
import DoubleSPlit from "@/components/styled components/containers/double split/double.split";
import Cta from "@/components/landing pages/cta/cta";

const AboutTagOne = () => {
	return (
		<div className="about-tag-one">
			<div className="about-1">
				<h3>Quasi fugiat quis ipsum</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quia, vero, corporis similique perspiciatis adipisci
					consequuntur quasi fugiat fugit pariatur, quis ipsum
					quibusdam unde ratione magni sint magnam velit sed
					dignissimos?
				</p>
			</div>

			<DoubleSPlit
				image={
					"https://i.postimg.cc/xdLBJS8Z/Whats-App-Image-2024-02-02-at-01-31-55.jpg"
				}
				content={
					<>
						<h3>Lorem, ipsum dolor consectetur</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Necessitatibus quidem hic accusamus dolorem
							natus numquam maiores quis non corrupti, cupiditate,
							quam autem ut, corporis libero optio sapiente itaque
							porro molestias!
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
							<h3>Lorem, ipsum dolor consectetur</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Necessitatibus quidem hic
								accusamus dolorem natus numquam maiores quis non
								corrupti, cupiditate, quam autem ut, corporis
								libero optio sapiente itaque porro molestias!
							</p>
						</>
					}
					fill={true}
				/>
			</div>

			<div className="about-1">
				<h3>Quasi fugiat quis ipsum</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quia, vero, corporis similique perspiciatis adipisci
					consequuntur quasi fugiat fugit pariatur, quis ipsum
					quibusdam unde ratione magni sint magnam velit sed
					dignissimos?
				</p>
			</div>

			<DoubleSPlit
				image={
					"https://i.postimg.cc/xdLBJS8Z/Whats-App-Image-2024-02-02-at-01-31-55.jpg"
				}
				content={
					<>
						<h3>Lorem, ipsum dolor consectetur</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Necessitatibus quidem hic accusamus dolorem
							natus numquam maiores quis non corrupti, cupiditate,
							quam autem ut, corporis libero optio sapiente itaque
							porro molestias!
						</p>
					</>
				}
				flexReverse={true}
			/>

			<Cta />
		</div>
	);
};

export default AboutTagOne;
