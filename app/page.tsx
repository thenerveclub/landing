'use client';

export default function Landing() {
	// const currentYear = new Date().getFullYear();

	return (
		<>
			<div className="font-baskervville min-h-screen flex justify-center items-center p-0">
				<div className="flex flex-col items-center justify-center w-[80%] cursor-default text-center sm:w-[95%]">
					<div className="shine-text-container text-2xl xl:text-4xl xxl:text-6xl font-light uppercase mb-0">
						<span className="shine-text-base">The</span>
						<span className="shine-text-overlay">The</span>
					</div>
					<div className="shine-text-container text-4xl xl:text-6xl xxl:text-8xl font-light uppercase mb-10">
						<span className="shine-text-base">Nerve Club</span>
						<span className="shine-text-overlay">Nerve Club</span>
					</div>
				</div>

				{/* <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 flex space-x-6 text-sm mt-16 md:mt-0 w-full">
					<div className="flex items-start mt-1 ml-0 mb-2 md:mb-0 justify-center w-full cursor-default">
						<p className="text-[0.5rem] xxl:text-sm text-gray-400 text-left">© {currentYear} Nerve Global GmbH. All rights reserved.</p>
					</div>
				</div> */}
			</div>
		</>
	);
}
