import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('blocks-course/edu-latest-posts', {
	edit: Edit,
	save,
});
