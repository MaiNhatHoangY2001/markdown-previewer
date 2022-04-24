import { useContext } from 'react';
import { EditorContext } from '../Context/EditorContext';
import './Editor.css';

function Editor() {
	const context = useContext(EditorContext);

	return (
		<div className="editor-box">
			<div className="title-bar">
				<i className="fa-brands fa-free-code-camp"></i>
				<span>Editor</span>
				<div className="tool" onClick={context.handleClickEditor}>
					<i className="fas fa-expand-arrows-alt"></i>
					<i className="fa-solid fa-compress hide"></i>
				</div>
			</div>
			<textarea id="editor" type="text" defaultValue={context.editValues} onChange={context.handleChange} />
		</div>
	);
}

export default Editor;
