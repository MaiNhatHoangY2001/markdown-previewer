import { useState, createContext } from 'react';

const $ = document.querySelector.bind(document);
const EditorContext = createContext();

const defaultValueTextArea = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;

function EditorProvider({ children }) {
	const [editValues, setEditValues] = useState(defaultValueTextArea);
	const [minimizeEditor, setMinimizeEditor] = useState(true);
	const [minimizePreview, setMinimizePreview] = useState(true);

	const setIcon = (bool, option) => {
		/** set icon on toolbar */
		if (bool) {
			$(option + ' .fa-expand-arrows-alt').classList.add('hide');
			$(option + ' .fa-compress').classList.remove('hide');
		} else {
			$(option + ' .fa-expand-arrows-alt').classList.remove('hide');
			$(option + ' .fa-compress').classList.add('hide');
		}
	};

	/** set resize */
	const handleClickEditor = () => {
		setMinimizePreview(!minimizePreview);
		/** set show/hide panel preview */
		if (minimizePreview) {
			$('.preview-box').classList.add('hide');
			$('.editor-box').classList.add('active');
		} else {
			$('.preview-box').classList.remove('hide');
			$('.editor-box').classList.remove('active');
		}
		setIcon(minimizePreview, '.editor-box');
	};

	const handleClickPreview = () => {
		/** set show/hide panel editor */
		setMinimizeEditor(!minimizeEditor);
		if (minimizeEditor) $('.editor-box').classList.add('hide');
		else $('.editor-box').classList.remove('hide');
		setIcon(minimizeEditor, '.preview-box');
	};
	/** end set resize */

	const handleChange = (e) => {
		setEditValues(e.target.value);
	};

	const values = {
		editValues,
		handleChange,
		minimizePreview,
		minimizeEditor,
		handleClickEditor,
		handleClickPreview,
	};

	return <EditorContext.Provider value={values}>{children}</EditorContext.Provider>;
}

export { EditorContext, EditorProvider };
