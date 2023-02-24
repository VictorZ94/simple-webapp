import { useRef, useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { setArticles } from '../model/model';

export const Home = () => {
  const [article, setArticle] = useState("")
  const [isNewArticleAdded, setIsNewArticleAdded] = useState(false);
  const keyArticle = useRef(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setTimeout(() => setIsNewArticleAdded(false), 2000)
      setArticles(keyArticle, article);
    } catch (err) {
      console.log(err);
    } finally {
      setArticle("");
      setIsNewArticleAdded(true);
    }
  }

  return (
    <>
      <header className='container my-5'>
        <h1 className='text-center mb-5'>Artículos</h1>
        <Form onSubmit={handleSubmit} size="lg" className="d-flex justify-content-center">
          <Form.Control
            size="lg"
            className="w-50 d-inline-block mr-3"
            type="text"
            placeholder='TV, Computer, Camera...'
            onChange={e => setArticle(e.target.value)}
            value={article}
          />
          <Button disabled={isNewArticleAdded} size="lg" className="mx-3" type="submit">Agregar artículo</Button>
        </Form>
      </header>
      {isNewArticleAdded && (
        <Alert size="lg" className="p-5 text-center" variant={"success"}>
          <Alert.Heading className='alert'>
            Tu Artículo fue agregado correctamente.
          </Alert.Heading>
        </Alert>
      )}
    </>
  );
};
