import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import fm from 'front-matter';

const BlogPost = () => {
  const { postId } = useParams();
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState({ title: '', date: '' });

  useEffect(() => {
    import(`../posts/${postId}.md`)
      .then(res => fetch(res.default))
      .then(res => res.text())
      .then(text => {
        const { attributes, body } = fm(text);
        setMetadata(attributes);
        setContent(body);
      });
  }, [postId]);

  return (
    <div>
      <h1>{metadata.title}</h1>
      <p>{metadata.date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
