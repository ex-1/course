// -- Icons --

export default function Icons() {
	return (
		<div style={{ display: 'none', visibility: 'hidden' }}>
			<svg xmlns='http://www.w3.org/2000/svg'>
				{/* Plus */}
				<symbol
					id='plus'
					viewBox='0 0 305 305'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M266 153L40 153M153 40V266'
						stroke='currentColor'
						strokeWidth='35'
						strokeLinecap='round'
					/>
				</symbol>

				{/* Status-completed */}
				<symbol
					id='status-completed'
					viewBox='0 0 305 305'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<circle cx='153' cy='152' r='130' fill='url(#paint0_linear_10_61)' />
					<g filter='url(#filter0_d_10_61)'>
						<path
							d='M90.9645 153.996L142.343 210.593M215.125 103.699L143.413 211.545'
							stroke='white'
							strokeWidth='24'
							strokeLinecap='round'
						/>
					</g>
					<defs>
						<filter
							id='filter0_d_10_61'
							x='74.9645'
							y='91.6977'
							width='156.161'
							height='139.848'
							filterUnits='userSpaceOnUse'
							colorInterpolationFilters='sRGB'
						>
							<feFlood floodOpacity='0' result='BackgroundImageFix' />
							<feColorMatrix
								in='SourceAlpha'
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
								result='hardAlpha'
							/>
							<feOffset dy='4' />
							<feGaussianBlur stdDeviation='2' />
							<feComposite in2='hardAlpha' operator='out' />
							<feColorMatrix
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
							/>
							<feBlend
								mode='normal'
								in2='BackgroundImageFix'
								result='effect1_dropShadow_10_61'
							/>
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='effect1_dropShadow_10_61'
								result='shape'
							/>
						</filter>
						<linearGradient
							id='paint0_linear_10_61'
							x1='153'
							y1='22'
							x2='153'
							y2='282'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#4ADD87' />
							<stop offset='1' stopColor='#099640' />
						</linearGradient>
					</defs>
				</symbol>

				{/* Status-expired */}
				<symbol
					id='status-expired'
					viewBox='0 0 305 305'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M79.5912 94.9626C35.2294 198.911 24.0747 256.637 103.488 281.974C103.832 243.09 111.01 223.237 134.627 197.187C134.627 197.187 142.469 211.467 146.938 227.253C151.406 243.04 164.474 160.308 163.231 154.794C216.183 198.391 224.878 233.532 209.215 283.778C316.757 216.16 220.078 58.282 220.078 61.5892C220.078 64.8965 228.043 106.388 220.078 109.695C212.112 113.002 187.065 44.664 144.403 21C148.73 87.8562 98.4192 131.042 94.7986 131.944C91.1779 132.846 79.5912 94.9626 79.5912 94.9626Z'
						fill='url(#paint0_linear_1_11)'
						stroke='url(#paint1_linear_1_11)'
						strokeWidth='12'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_1_11'
							x1='153.094'
							y1='-21.5964'
							x2='152.488'
							y2='283.778'
							gradientUnits='userSpaceOnUse'
						>
							<stop offset='0.179717' stopColor='#FAFF00' />
							<stop offset='0.59988' stopColor='#FE7122' />
							<stop offset='0.823254' stopColor='#FE651C' />
							<stop offset='0.99' stopColor='#BD1403' />
						</linearGradient>
						<linearGradient
							id='paint1_linear_1_11'
							x1='153.094'
							y1='-21.5964'
							x2='152.488'
							y2='283.778'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#FAFF00' />
							<stop offset='0.447801' stopColor='#FE7122' />
							<stop offset='0.78832' stopColor='#FE651C' />
							<stop offset='0.99' stopColor='#BD1403' />
						</linearGradient>
					</defs>
				</symbol>

				{/* Status-paused */}
				<symbol
					id='status-paused'
					viewBox='0 0 305 305'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M283 152C283 223.797 224.797 282 153 282C81.203 282 23 223.797 23 152C23 80.203 81.203 22 153 22C224.797 22 283 80.203 283 152Z'
						fill='#FAE189'
					/>
					<path
						d='M119.339 96.2857L119.339 206.554M185.5 96.2857V206.554M283 152C283 223.797 224.797 282 153 282C81.203 282 23 223.797 23 152C23 80.203 81.203 22 153 22C224.797 22 283 80.203 283 152Z'
						stroke='#E4BF39'
						strokeWidth='18'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</symbol>

				{/* Status-running */}
				<symbol
					id='status-running'
					viewBox='0 0 305 305'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M283 152C283 223.797 224.797 282 153 282C81.203 282 23 223.797 23 152C23 80.203 81.203 22 153 22C224.797 22 283 80.203 283 152Z'
						fill='#B4E0F9'
					/>
					<path
						d='M153.58 59.1429V152M209.875 177.536L154.161 153.161M75.2321 152H63.625M153 241.374L153.186 229.768M242.375 152H230.768M283 152C283 223.797 224.797 282 153 282C81.203 282 23 223.797 23 152C23 80.203 81.203 22 153 22C224.797 22 283 80.203 283 152Z'
						stroke='#0075FF'
						strokeWidth='15'
						strokeLinecap='round'
					/>
				</symbol>

				{/* Trash round */}
				<symbol
					id='trash-round'
					viewBox='0 0 305 305'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<circle cx='153' cy='153' r='130' fill='url(#paint0_linear_2_22)' />
					<path
						d='M121.367 147.207L121.367 213.428M152.42 143.528L152.42 217.106M183.473 147.207V213.428M84.5178 87.1377H220.321M129.786 64.7857H175.054M86.306 112.286H218.533V220.857C218.533 232.1 209.426 241.214 198.191 241.214H106.649C95.4137 241.214 86.306 232.1 86.306 220.857V112.286Z'
						stroke='white'
						strokeWidth='15'
						strokeLinecap='round'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_2_22'
							x1='153'
							y1='23'
							x2='153'
							y2='283'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#FF4E4E' />
							<stop offset='0.0001' stopColor='#FF7474' />
							<stop offset='1' stopColor='#840000' />
						</linearGradient>
					</defs>
				</symbol>

				{/* Trash */}
				<symbol
					id='trash'
					viewBox='0 0 305 305'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M106.705 141.463L106.705 239.051M152.5 136.041L152.5 244.473M198.295 141.463V239.051M52.3629 52.9397H252.637M119.121 20H185.879M55 90H250V250C250 266.569 236.569 280 220 280H85C68.4315 280 55 266.569 55 250V90Z'
						stroke='white'
						strokeWidth='23'
						strokeLinecap='round'
					/>
				</symbol>
			</svg>
		</div>
	)
}
