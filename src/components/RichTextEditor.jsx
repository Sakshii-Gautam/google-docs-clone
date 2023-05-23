import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { useState, useEffect } from 'react';

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    const savedContent = localStorage.getItem('editorContent');
    // converting the saved content from localstorage to EditorState
    if (savedContent) {
      const contentState = convertFromRaw(JSON.parse(savedContent));
      return EditorState.createWithContent(contentState);
    }
    return EditorState.createEmpty();
  });

  useEffect(() => {
    const contentState = editorState.getCurrentContent();
    const serializedContent = JSON.stringify(convertToRaw(contentState));
    localStorage.setItem('editorContent', serializedContent);
  }, [editorState]);

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const toolbarOptions = {
    options: [
      'history',
      'emoji',
      'blockType',
      'fontFamily',
      'fontSize',
      'inline',
      'colorPicker',
      'link',
      'image',
      'textAlign',
      'list',
    ],
    inline: {
      options: ['bold', 'italic', 'underline'],
    },
  };

  return (
    <div className='bg-[#F8F9FA] flex-1 min-h-screen pb-16'>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName='google-docs-toolbar flex sticky top-0 z-50 !justify-center mx-12'
        editorClassName='min-h-screen mt-6 p-10 bg-white shadow-lg max-w-[80%] md:max-w-4xl mx-auto mb-12 border'
        toolbar={toolbarOptions}
      />
    </div>
  );
};

export default RichTextEditor;
