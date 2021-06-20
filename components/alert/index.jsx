import Container from '../container';
import AlertStyles from './styles';

const Alert = () => (
  <AlertStyles>
    <Container>
      <p>
        This is page is a preview.{' '}
        <a
          href="/api/exit-preview"
          className="underline hover:text-cyan duration-200 transition-colors"
        >
          Click here
        </a>{' '}
        to exit preview mode.
      </p>
    </Container>
  </AlertStyles>
);

export default Alert;
