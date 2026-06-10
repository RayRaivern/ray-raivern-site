<script lang="ts">
</script>

<button
	aria-label="open theme drawer"
>
	<div class="container">
		<div class="triangle">
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect
					x="0"
					y="0"
					width="24"
					height="24"
					fill="var(--md-sys-color-secondary-container)"
					mask="url(#triangleMask)"
				/>
				<path
					d="M10.2934 4.79256C11.0733 3.51643 12.9267 3.51643 13.7066 4.79256L21.1404 16.9571C21.9549 18.2898 20.9957 20 19.4339 20H4.56611C3.00425 20 2.04512 18.2898 2.85955 16.9571L10.2934 4.79256Z"
					stroke="var(--md-sys-color-on-secondary-container)"
					stroke-width="2"
				></path>
				<mask id="triangleMask">
					<rect x="0" y="0" width="24" height="24" fill="white" />
					<path
						d="M10.2934 4.79256C11.0733 3.51643 12.9267 3.51643 13.7066 4.79256L21.1404 16.9571C21.9549 18.2898 20.9957 20 19.4339 20H4.56611C3.00425 20 2.04512 18.2898 2.85955 16.9571L10.2934 4.79256Z"
						stroke="black"
						stroke-width="2"
						fill="black"
					/>
				</mask>
			</svg>
		</div>
		<div class="text">Theme Drawer</div>
		<div class="triangle">
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect
					x="0"
					y="0"
					width="24"
					height="24"
					fill="var(--md-sys-color-secondary-container)"
					mask="url(#triangleMask)"
				/>
				<path
					d="M10.2934 4.79256C11.0733 3.51643 12.9267 3.51643 13.7066 4.79256L21.1404 16.9571C21.9549 18.2898 20.9957 20 19.4339 20H4.56611C3.00425 20 2.04512 18.2898 2.85955 16.9571L10.2934 4.79256Z"
					stroke="var(--md-sys-color-on-secondary-container)"
					stroke-width="2"
				></path>
				<mask id="triangleMask">
					<rect x="0" y="0" width="24" height="24" fill="white" />
					<path
						d="M10.2934 4.79256C11.0733 3.51643 12.9267 3.51643 13.7066 4.79256L21.1404 16.9571C21.9549 18.2898 20.9957 20 19.4339 20H4.56611C3.00425 20 2.04512 18.2898 2.85955 16.9571L10.2934 4.79256Z"
						stroke="black"
						stroke-width="2"
						fill="black"
					/>
				</mask>
			</svg>
		</div>
	</div>
</button>

<style>
  button {
    all: unset;
    cursor: pointer;
    display: block;
  }

	.container {
		width: var(--sys-pane-left);
		height: var(--sys-size-m);
		display: grid;
		grid-template-columns: var(--sys-size-m) 1fr var(--sys-size-m);
		grid-template-areas: 't1 text t2';
		border-top: solid var(--md-sys-color-secondary) var(--sys-border-m);
		border-left: solid var(--md-sys-color-secondary) var(--sys-border-m);
		border-right: solid var(--md-sys-color-secondary) var(--sys-border-m);
		border-top-left-radius: var(--sys-border-radius-m);
		border-top-right-radius: var(--sys-border-radius-m);

		overflow: hidden;
	}

	.text {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		font-family: var(--sys-font-type2);
		font-weight: bold;
		color: var(--md-sys-color-on-secondary-container);
		font-size: 24px;
		letter-spacing: 10%;
		background-color: var(--md-sys-color-secondary-container);
	}

	.triangle {
		color: var(--md-sys-color-on-secondary-container);
		width: 100%;
		height: 100%;
		background: none;
	}
</style>
