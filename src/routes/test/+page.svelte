<div class="box-comparator">
	<div class="box box1"></div>
	<div class="box box2"></div>
	<div class="box box3"></div>
	<div class="box box4"></div>
	<div class="box box5"></div>
	<div class="box box6"></div>
</div>

<div class="font-comparator">
	<div class="font-row">
		<span class="label">alt (0.8rem)</span>
		<p class="preview font-alt">The quick brown fox jumps over the lazy dog.</p>
	</div>

	<div class="font-row">
		<span class="label">body (1rem)</span>
		<p class="preview font-body">The quick brown fox jumps over the lazy dog.</p>
	</div>

	<div class="font-row">
		<span class="label">title (2rem)</span>
		<p class="preview font-title">The quick brown fox jumps over the lazy dog.</p>
	</div>

	<div class="font-row">
		<span class="label">display (3rem)</span>
		<p class="preview font-display">The quick brown fox jumps over the lazy dog.</p>
	</div>
</div>

<div class="space-comparator">
	<div class="space-box1 space-box"></div>

	<div class="space-box2 space-box"></div>

	<div class="space-box3 space-box"></div>

	<div class="space-box4 space-box"></div>

	<div class="space-box5 space-box"></div>
	<div class="space-box"></div>
</div>

<style>
	/* Wrapper to stack them vertically and space them out */
	.box-comparator {
		display: flex;
		flex-direction: column;
		gap: 1rem; /* Puts space between the boxes */
		align-items: flex-start; /* Aligns them to the left to easily compare widths */
		padding: 1rem;
		background-color: #1a1a1a; /* Dark background so white borders stand out */
	}

	.box {
		border: 2px solid white;
		aspect-ratio: 1/1;
	}

	/* Apply your design system tokens to check sizes */
	.box1 {
		width: var(--sys-size-xs); /* Fallback included for testing */
	}

	.box2 {
		width: var(--sys-size-s);
	}

	.box3 {
		width: var(--sys-size-m);
	}

	.box4 {
		width: var(--sys-size-l);
	}

	.box5 {
		width: var(--sys-size-xl);
	}

	.box6 {
		width: var(--sys-size-xxl);
	}

	.font-comparator {
		display: flex;
		flex-direction: column;
		gap: 2rem; /* Generous gap so large text doesn't overlap */
		padding: 2rem;
		background-color: #1a1a1a;
		color: white;
		font-family: sans-serif;
	}

	.font-row {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border-bottom: 1px solid #333; /* Visual separator for each size tier */
		padding-bottom: 1.5rem;
	}

	/* Small technical label for context */
	.label {
		font-size: 0.75rem;
		color: #888;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	/* Reset default paragraph margins for clean alignment */
	.preview {
		margin: 0;
		line-height: 1.2; /* Keeps line height proportional to the dynamic font size */
	}

	/* Applying your system tokens */
	.font-alt {
		font-size: var(--sys-font-alt);
	}

	.font-body {
		font-size: var(--sys-font-body);
	}

	.font-title {
		font-size: var(--sys-font-title);
	}

	.font-display {
		font-size: var(--sys-font-display);
	}

	.space-comparator {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		background-color: #1a1a1a;
		font-family: sans-serif;
	}

	/* Identical baseline blocks to isolate the visual gap change */
	.space-box {
		width: 120px;
		height: 40px;
		background-color: cyan; /* Blue fill makes gaps easier to perceive than borders */
		border-radius: 4px;
	}

	.space-box1 {
		margin-bottom: var(--sys-space-xs);
	}

	.space-box2 {
		margin-bottom: var(--sys-space-s);
	}

	.space-box3 {
		margin-bottom: var(--sys-space-m);
	}

	.space-box4 {
		margin-bottom: var(--sys-space-l);
	}

	.space-box5 {
		margin-bottom: var(--sys-space-xl);
	}
</style>
