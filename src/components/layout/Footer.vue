<template>
	<footer class="footer">
		<div class="footer-bottom">
			<span class="footer-bottom__copyright"> &copy; 2023 Kirill Zhakin</span>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
	.footer {
		display: flex;
		align-items: center;
		max-width: 1440px;
		height: 120px;
		&-bottom {
			display: flex;
			margin: 0 28px;
			width: 100%;
			padding-top: 22px;
			border-top: 1px solid rgba(0, 0, 0, 0.1);
			height: 68px;

			@media screen and (max-width: 620px) {
				margin: 48px auto 36px auto;
				justify-content: center;
			}
			&__copyright {
				font-size: 14px;
				color: var(--primary);
			}
		}
	}
</style>
