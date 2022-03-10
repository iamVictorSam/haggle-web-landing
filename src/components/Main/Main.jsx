import React from 'react';
import styles from './Main.module.css';

const Main = () => {
	return (
		<main>
			<div className={styles.main}>
				<h1>
					Buy from businesses on social media and{' '}
					<span className={styles.span_text}>spread the Payment</span>
				</h1>
				<p className={styles.p}>Shop on your terms , pay later</p>
				<div className={styles.button_div}>
					{' '}
					<div className={styles.google_play}>
						<img
							src="/images/download.png"
							alt=""
							className={styles.playstoreImg}
						/>
						<h5 className={styles.h5}>
							GET IT ON <span className={styles.google}>Google Play</span>
						</h5>
					</div>
					<div className={styles.apple_play}>
						<img
							src="/images/download (2).png"
							alt=""
							className={styles.apple}
						/>
						<h5 className={styles.h5_play}>
							Download on the{' '}
							<span className={styles.app_store}>App Store</span>
						</h5>
					</div>
					<span className={styles.span}>Coming soon</span>
				</div>
				<div className={styles.container}>
					{' '}
					<input
						type="search"
						placeholder="Input your email address"
						className={styles.text_input}
					/>
					<button className={styles.btn}>Join Waitlist</button>
				</div>
			</div>
			<div classname={styles.imgContainer}>
				<img src="/images/BannerCurves.png" alt="" className={styles.main_image}/>
			</div>
		</main>
	);
};

export default Main;
