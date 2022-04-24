import { useContext } from 'react';
import { EditorContext } from '../Context/EditorContext';
import { marked } from 'marked';
import './Preview.css';

marked.setOptions({
	breaks: true
  });

function Preview() {
	const context = useContext(EditorContext);

	const getMarkdownText = () => {
		/** parse string from text area values to html */
		const rawMarkup = marked.parse(context.editValues);
		return { __html: rawMarkup };
	};

	return (
		<div className="preview-box">
			<div className="title-bar">
				<i className="fa-brands fa-free-code-camp"></i>
				<span>Previewer</span>
				<div className="tool" onClick={context.handleClickPreview}>
					<i className="fas fa-expand-arrows-alt"></i>
					<i className="fa-solid fa-compress hide"></i>
				</div>
			</div>
			<div id="preview" dangerouslySetInnerHTML={getMarkdownText()}></div>
		</div>
	);
}

export default Preview;
