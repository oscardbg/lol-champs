import "./About.scss";

function About() {
	return (
		<>
			<section className="about">
				<article>
					<img src="../img/Feature_FWoTD.png" alt="" />
					<h2>League of Legends Lore</h2>
					<span>Patch 13.19.1</span>
					<p>
						This application shows League of Legends champions and some
						information about them. Based on the official data of the game taken
						from the official API.
					</p>
					<p>
						You can filter the list by name, role, difficulty and resource of
						the champions.
					</p>
				</article>
				<article>
					<h4>Developed by:</h4>
					<p>Oscar Pastrano</p>
					<p>
						Github:
						<a href="https://github.com/oscardbg" target="_blank">
							{" "}
							/oscardbg
						</a>
					</p>
				</article>
			</section>
		</>
	);
}

export default About;
