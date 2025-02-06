import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Button, Input, message } from 'antd';
import styles from './index.module.css';

const Editor: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = async () => {
    try {
      // 这里应该调用API保存到GitHub
      message.success('Successfully saved!');
    } catch (error) {
      message.error('Failed to save');
    }
  };

  return (
    <div className={styles.container}>
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.titleInput}
      />
      <MDEditor
        value={content}
        onChange={(value) => setContent(value || '')}
        className={styles.editor}
      />
      <Button type="primary" onClick={handleSave} className={styles.saveButton}>
        Save
      </Button>
    </div>
  );
};

export default Editor;
