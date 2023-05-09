import React from 'react';

export function Modal() {
	return (
		<div
			className="modal fade"
			id="infoModal"
			tabIndex={-1}
			aria-labelledby="infoModalLabel"
			aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h2 className="modal-title" id="infoModalLabel">
							Search Information
						</h2>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<p>
							To clear a search or selected letter category please use the
							"Reset" button
						</p>
						<p>
							To add a Choctaw letter character to a search, select one of the
							character buttons (a̱,i̱,o̱, or ʋ) from below the search field.
						</p>
						<h2 className="modal-title">For Mobile:</h2>
						<p>
							To view the word that was typed in the bar. Click close menu at
							the top.
						</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
