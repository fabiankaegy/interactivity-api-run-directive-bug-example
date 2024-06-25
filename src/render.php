<?php

$additional_attributes = [
	'data-wp-interactive' => 'namespace/example',
	'data-wp-run'         => 'callbacks.logInView',
];

?>

<div <?php echo get_block_wrapper_attributes( $additional_attributes ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<p>Hello World!</p>
</div>
