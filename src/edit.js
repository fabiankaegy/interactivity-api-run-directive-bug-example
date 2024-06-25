import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export const BlockEdit = () => {
	return (
		<p {...useBlockProps()}>
			{__('Plugins Example – hello from the editor!', 'plugins&#x2F;example')}
		</p>
	);
};
