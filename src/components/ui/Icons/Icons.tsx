// -- Icons --

export default function Icons() {
	return (
		<div style={{ display: 'none', visibility: 'hidden' }}>
			<svg>
				<symbol
					id='status-complete'
					viewBox='0 0 305 305'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<circle cx='153' cy='153' r='112' fill='url(#paint0_linear_2_22)' />
					<g filter='url(#filter0_d_2_22)'>
						<path
							d='M99.5541 154.719L143.819 203.48M206.523 111.387L144.74 204.3'
							stroke='white'
							strokeWidth='24'
							strokeLinecap='round'
						/>
					</g>
					<defs>
						<filter
							id='filter0_d_2_22'
							x='83.554'
							y='99.3855'
							width='138.97'
							height='124.916'
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
								result='effect1_dropShadow_2_22'
							/>
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='effect1_dropShadow_2_22'
								result='shape'
							/>
						</filter>
						<linearGradient
							id='paint0_linear_2_22'
							x1='153'
							y1='41'
							x2='153'
							y2='265'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#4ADD87' />
							<stop offset='1' stopColor='#099640' />
						</linearGradient>
					</defs>
				</symbol>

				<symbol
					id='status-expired'
					viewBox='0 0 305 305'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M91.1209 103.641C53.7745 190.272 44.3838 238.381 111.239 259.497C111.528 227.091 117.571 210.545 137.454 188.835C137.454 188.835 144.056 200.736 147.817 213.892C151.579 227.049 162.581 158.1 161.534 153.505C206.112 189.839 213.432 219.125 200.246 261C290.782 204.647 209.391 73.0709 209.391 75.8272C209.391 78.5835 216.097 113.162 209.391 115.919C202.685 118.675 181.599 61.7217 145.684 42C149.326 97.7182 106.972 133.709 103.923 134.461C100.875 135.213 91.1209 103.641 91.1209 103.641Z'
						fill='url(#paint0_linear_1_11)'
						stroke='url(#paint1_linear_1_11)'
						strokeWidth='12'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_1_11'
							x1='153'
							y1='6.5'
							x2='152.5'
							y2='261'
							gradientUnits='userSpaceOnUse'
						>
							<stop offset='0.179717' stopColor='#FAFF00' />
							<stop offset='0.59988' stopColor='#FE7122' />
							<stop offset='0.823254' stopColor='#FE651C' />
							<stop offset='0.99' stopColor='#BD1403' />
						</linearGradient>
						<linearGradient
							id='paint1_linear_1_11'
							x1='153'
							y1='6.5'
							x2='152.5'
							y2='261'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#FAFF00' />
							<stop offset='0.447801' stopColor='#FE7122' />
							<stop offset='0.78832' stopColor='#FE651C' />
							<stop offset='0.99' stopColor='#BD1403' />
						</linearGradient>
					</defs>
				</symbol>

				<symbol
					id='status-paused'
					viewBox='0 0 305 305'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M265 152C265 213.856 214.856 264 153 264C91.1441 264 41 213.856 41 152C41 90.1441 91.1441 40 153 40C214.856 40 265 90.1441 265 152Z'
						fill='#B4E0F9'
					/>
					<path
						d='M153.5 72V152M202 174L154 153M86 152H76M153 228.999L153.16 219M230 152H220M265 152C265 213.856 214.856 264 153 264C91.1441 264 41 213.856 41 152C41 90.1441 91.1441 40 153 40C214.856 40 265 90.1441 265 152Z'
						stroke='#0075FF'
						strokeWidth='15'
						strokeLinecap='round'
					/>
				</symbol>

				<symbol
					id='status-running'
					viewBox='0 0 305 305'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M265 152C265 213.856 214.856 264 153 264C91.1441 264 41 213.856 41 152C41 90.1441 91.1441 40 153 40C214.856 40 265 90.1441 265 152Z'
						fill='#B4E0F9'
					/>
					<path
						d='M153.5 72V152M202 174L154 153M86 152H76M153 228.999L153.16 219M230 152H220M265 152C265 213.856 214.856 264 153 264C91.1441 264 41 213.856 41 152C41 90.1441 91.1441 40 153 40C214.856 40 265 90.1441 265 152Z'
						stroke='#0075FF'
						strokeWidth='15'
						strokeLinecap='round'
					/>
				</symbol>

				<symbol
					id='trash-round'
					viewBox='0 0 305 305'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<circle cx='153' cy='153' r='112' fill='url(#paint0_linear_2_22)' />
					<path
						d='M125.747 148.009L125.747 205.061M152.5 144.839L152.5 208.23M179.253 148.009V205.061M94 96.2571H211M133 77H172M95.5406 117.923H209.46V211.462C209.46 221.148 201.613 229 191.934 229H113.067C103.387 229 95.5406 221.148 95.5406 211.462V117.923Z'
						stroke='white'
						strokeWidth='15'
						strokeLinecap='round'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_2_22'
							x1='153'
							y1='41'
							x2='153'
							y2='265'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#FF4E4E' />
							<stop offset='0.0001' stopColor='#FF7474' />
							<stop offset='1' stopColor='#840000' />
						</linearGradient>
					</defs>
				</symbol>

				<symbol
					id='plus-round'
					viewBox='0 0 305 305'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M232 152.5L152.5 152.5M152.5 152.5L73 152.5M152.5 152.5V73M152.5 152.5V232M278 153C278 222.036 222.036 278 153 278C83.9644 278 28 222.036 28 153C28 83.9644 83.9644 28 153 28C222.036 28 278 83.9644 278 153Z'
						stroke='currentColor'
						strokeWidth='30'
						strokeLinecap='round'
					/>
				</symbol>

				<symbol
					id='plus'
					viewBox='0 0 305 305'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M266 153L40 153M153 40V266'
						stroke='currentColor'
						strokeLinecap='round'
					/>
				</symbol>

				<symbol
					id='trash'
					viewBox='0 0 305 305'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						xmlns='http://www.w3.org/2000/svg'
						d='M106.705 141.463L106.705 239.051M152.5 136.041L152.5 244.473M198.295 141.463V239.051M52.3629 52.9397H252.637M119.121 20H185.879M55 90H250V250C250 266.569 236.569 280 220 280H85C68.4315 280 55 266.569 55 250V90Z'
						stroke='currentColor'
						strokeWidth='23'
						strokeLinecap='round'
					/>
				</symbol>
			</svg>
		</div>
	)
}
