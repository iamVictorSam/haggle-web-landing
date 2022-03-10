import React from 'react';
import './Picture.css';

const PictureSection = () => {
	return (
		<section class="objective container--px">
			<div class="container">
				<div class="objective__imagecontainer">
					<div class="objective__image zIndex">
						<img
							class="objective__image1"
							src="./images/Buyer ordering.png"
							alt=""
							srcset=""
						/>
					</div>
					<div class="objective__image2">
						<img
							class="objective__image1"
							src="./images/Pay installments 1.png"
							alt=""
							srcset=""
						/>
					</div>
					<div class="objective__image3">
						<img
							class="objective__image1"
							src="./images/Haggle page.png"
							alt=""
							srcset=""
						/>
					</div>
				</div>

				<div class="objective__contents objective__text">
					<div class="">
						<div class="objective__textContents" id="content1">
							<div class="objective__number" id="number1">
								1
							</div>
							<div class="objective__content">
								<div class="objective__title">SHOP ON YOUR TERMS</div>
								<div class="objective__desc">
									Shop on your own terms by choosing how much you are willing to
									pay for your item and if the seller agrees, voila! we have a
									sale.
								</div>
							</div>
						</div>
					</div>

					<div class="objective__textContents" id="content2">
						<div class="objective__number" id="number2">
							2
						</div>
						<div class="objective__content">
							<div class="objective__title">BUY NOW, PAY LATER</div>
							<div class="objective__desc">
								We know that sometimes you want to spoil yourself but can’t
								exactly afford to do so. Don’t sweat it. Just opt to pay for
								your shopping in installments with
							</div>
						</div>
					</div>

					<div class="objective__textContents" id="content3">
						<div class="objective__number" id="number3">
							3
						</div>
						<div class="objective__content">
							<div class="objective__title">NEGOTIATE PRICES</div>
							<div class="objective__desc">
								If you can’t afford to pay the price of an item, you could
								negotiate prices with the seller by clicking on the Haggle
								button
							</div>
							-
						</div>
					</div>

					<div class="objective__vert"></div>
				</div>
			</div>
		</section>
	);
};

export default PictureSection;
