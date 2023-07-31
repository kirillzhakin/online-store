<template>
	<footer class="footer">
		<div class="footer-bottom">
			<span class="footer-bottom__copyright"> &copy; 2023 Kirill Zhakin</span>
		</div>
	</footer>
</template>

<script setup></script>

<style lang="scss" scoped>
	.footer {
		display: flex;
		justify-content: center;
		color: #fff;
		height: 120px;
		&-bottom {
			display: flex;
			padding-top: 22px;
			max-width: 1277px;
			width: 100%;
			margin: auto 0 0 0;
			border-top: 1px solid rgba(0, 0, 0, 0.1);
			height: 68px;
			&__copyright {
				font-size: 14px;
				color: var(--primary);
			}
		}
	}
</style>
