export function ColorThemeToggle() {
	return (
		<div className="color-theme-toggle">
			<span
				className="text-center dark-theme-mode h3"
				style={{ color: 'var(--color-primary)' }}>
				MODE
			</span>
			<div className="d-flex text-center align-items-center justify-content-center">
				<span className="lightmode">Light</span>
				<span className="fs-1 px-3 pb-3">
					<div className="dark-mode-switch form-check form-switch">
						<input
							aria-label="Switch between dark mode and light mode."
							className="form-check-input btn-toggle position-relative cursor-pointer color-theme-toggle"
							type="checkbox"
							id="dark-mode-inner"
						/>
					</div>
				</span>
				<span className="darkmode">Dark</span>
			</div>
		</div>
	);
}
// class DarkMode {
// 	#enableDarkMode = `bS-Dark-Mode=true`;
// 	#toggles = document.querySelectorAll('.color-theme-toggle');
// 	#body = document.querySelector('body');
// 	constructor() {
// 		if (this.#toggles.length != 2 || !this.#body) {
// 			console.error('darkmode toggle error!');
// 			return;
// 		}
// 		this.handleDarkMode();
// 	}
// 	handleDarkMode() {
// 		if (document.cookie === this.#enableDarkMode) {
// 			this.#toggles.forEach((toggle) => {
// 				toggle.checked = true;
// 				toggle.classList.add('active');
// 				this.#toggleDarkMode(toggle);
// 			});
// 		}
// 		this.#toggles.forEach((toggle) => {
// 			toggle.addEventListener('click', () => {
// 				toggle.classList.toggle('active');
// 				this.#toggleDarkMode(toggle);
// 			});
// 		});
// 	}
// 	#toggleDarkMode(toggle) {
// 		const ONE_MONTH = new Date(Date.now() + 2628000000);
// 		if (toggle.classList.contains('active')) {
// 			this.#body.classList.add('dark-theme');
// 			document.cookie = `${this.#enableDarkMode}; expires=${new Date(
// 				ONE_MONTH,
// 			)}`;
// 		} else {
// 			document.cookie = `${this.#enableDarkMode}; expires=${Date.now()}`;
// 			this.#body.classList.remove('dark-theme');
// 		}
// 	}
// }
