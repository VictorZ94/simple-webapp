import { getArticles } from '../model/model';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

const Articles = () => {

  const articles = getArticles();

  return (
    <div className="container mt-5">
      <h1 className='text-center'>Artículos agregados</h1>

      {!articles ? (
        <Alert size="lg" className="text-center mt-5" variant={"secondary"}>
          <Alert.Heading className='alert'>
            Todavía no has agregado artículos
          </Alert.Heading>
        </Alert>
        ) : (
          articles.map(({article, id}) => (
            <Card key={id} className="my-2">
              <Card.Body>{article}</Card.Body>
            </Card>
          )
      ))}
    </div>
  )
}

export default Articles;
