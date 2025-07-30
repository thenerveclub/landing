'use client';
import React from 'react';
import { FaDiscord, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
	// const currentYear = new Date().getFullYear();

	return (
		<>
			{/* Social Icons Section */}
			<div className="w-full flex justify-center mb-64">
				<div className="flex space-x-6">
					<a target="_blank" rel="noreferrer" href="https://twitter.com/thenerveclub" className="group" title="Twitter" aria-label="Twitter">
						<FaXTwitter className="w-6 h-6 fill-accent transition-transform group-hover:scale-110 group-hover:fill-accent" />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.instagram.com/thenerveclub"
						className="group"
						title="Instagram"
						aria-label="Instagram"
					>
						<FaInstagram className="w-6 h-6 fill-accent transition-transform group-hover:scale-110 group-hover:fill-accent" />
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@thenerveclub" className="group" title="TikTok" aria-label="TikTok">
						<FaTiktok className="w-6 h-6 fill-accent transition-transform group-hover:scale-110 group-hover:fill-accent" />
					</a>
					<a target="_blank" rel="noreferrer" href="https://discord.gg/Xuh5enTNB6" className="group" title="Discord" aria-label="Discord">
						<FaDiscord className="w-6 h-6 fill-accent transition-transform group-hover:scale-110 group-hover:fill-accent" />
					</a>
				</div>
			</div>

			{/* Footer Section */}
			{/* <footer className="w-full bg-transparent text-secondary py-4 px-8 flex flex-col md:flex-row justify-between items-center text-center">
				<div className="w-full flex justify-center">
					<p className="text-[0.5rem] xxl:text-sm">© {currentYear} Nerve Global GmbH. All rights reserved.</p>
				</div>
			</footer> */}
		</>
	);
};

export default Footer;
