import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor = () => {
  return (
    <>
      <div className='bg-[#F8F9FA] flex-1 min-h-screen pb-16'>
        <Editor
          toolbarClassName='google-docs-toolbar flex sticky top-0 z-50 !justify-center mx-12'
          editorClassName=' min-h-screen mt-6 p-10 bg-white shadow-lg max-w-4xl mx-auto mb-12 border'
        />
      </div>
    </>
  );
};

export default RichTextEditor;
