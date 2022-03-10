import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<header>
				<nav>
					<div>
						<img
							className={styles.img}
							src="/images/Haggle real logo 10.png"
							alt=""
						/>
					</div>

					<div className={styles.navbar__links}>
						<ul>
							<li>
								<Link to="/" exact>
									<button>Buy</button>
								</Link>
							</li>
							<li>
								<Link to="/sell" exact>
									<button>Sell</button>
								</Link>
							</li>
							<li>
								<button href="#">
									MarketPlace <span className={styles.span}>Coming soon</span>
								</button>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
