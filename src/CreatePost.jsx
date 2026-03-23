import { useState } from 'react';

function CreatePost({ onBackToDiscussion }) {
  const [topic, setTopic] = useState('');
  const [type, setType] = useState('питання');
  const [book, setBook] = useState('Camp Blackwood');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onBackToDiscussion();
  };

  return (
    <main className="create-post-page">
      <section className="create-post-section">
        <div className="create-post-card">
          <h1>Create Post</h1>
          <form className="create-post-form" onSubmit={handleSubmit}>
            <label htmlFor="post-topic">Тема</label>
            <input
              id="post-topic"
              type="text"
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              required
            />

            <label htmlFor="post-type">Тип</label>
            <select id="post-type" value={type} onChange={(event) => setType(event.target.value)}>
              <option value="питання">питання</option>
              <option value="обговорення">обговорення</option>
            </select>

            <label htmlFor="post-book">Книга</label>
            <select id="post-book" value={book} onChange={(event) => setBook(event.target.value)}>
              <option value="Camp Blackwood">Camp Blackwood</option>
            </select>

            <label htmlFor="post-content">Основний текст</label>
            <textarea
              id="post-content"
              rows={7}
              value={content}
              onChange={(event) => setContent(event.target.value)}
              required
            />

            <button type="submit" className="create-post-submit">
              Додати
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default CreatePost;
