import styles from "./SideNavDots.module.css";

import React from "react";

const SideNavDots = () => {
	return (
		<div className={styles.sidenavContainer}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="36"
				height="537"
				viewBox="0 0 36 537"
			>
				<g transform="translate(-109 -362)">
					<path
						className={styles.a}
						d="M-345,5946v99.324"
						transform="translate(472.252 -5563.325)"
					/>
					<path
						className={styles.b}
						d="M-345,5946v99.324"
						transform="translate(472.252 -5464.325)"
					/>
					<path
						className={styles.b}
						d="M-345,5946v99.324"
						transform="translate(472.252 -5358.325)"
					/>
					<path
						className={styles.b}
						d="M-345,5946v99.324"
						transform="translate(472.252 -5266)"
					/>
					<path
						className={styles.b}
						d="M-345,5946v99.324"
						transform="translate(472 -5164.325)"
					/>
					<g transform="translate(-1678 0.325)">
					<a href="#01">
                   	<path
							className={styles.d}
							d="M18,0l6,10L18,20H6L0,10,6,0Z"
							transform="translate(1815 371.675) rotate(90)"
						/>
                    </a>
                    	
					</g>
					<g transform="translate(-1674.841 102.484)">
						{/* <circle
							className={styles.e}
							cx="7.841"
							cy="7.841"
							r="7.841"
							transform="translate(1794.252 371.675)"
						/> */}
					</g>
                    <a href="#02" >
                    <path
						className={styles.f}
						d="M18,0l6,10L18,20H6L0,10,6,0Z"
						transform="translate(137 472) rotate(90)"
					/>
				
                    </a>
					<a href="#03">
                    <path
						className={styles.f}
						d="M18,0l6,10L18,20H6L0,10,6,0Z"
						transform="translate(137 569) rotate(90)"
					/>
				
                    </a>
					<a href="#04">
                    <path
						className={styles.f}
						d="M18,0l6,10L18,20H6L0,10,6,0Z"
						transform="translate(137 668) rotate(90)"
					/>
				
                    </a>
					<a href="#05">
                    <path
						className={styles.f}
						d="M18,0l6,10L18,20H6L0,10,6,0Z"
						transform="translate(137 767) rotate(90)"
					/>
				
                    </a>
					<a href="#06">
                    <path
						className={styles.f}
						d="M18,0l6,10L18,20H6L0,10,6,0Z"
						transform="translate(137 875) rotate(90)"
					/>
				
                    </a>
				</g>
			</svg>
		</div>
	);
};

export default SideNavDots;
