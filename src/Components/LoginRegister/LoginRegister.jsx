import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./LoginRegister.css"
 export default  function Login() {
  return (
 <>
 <section>
 <Container  className='d-flex   nz-c1'>
    <Container className='nz-d1'>   <Form className='nz-f1'>
    <h1 className='nz-h1'>login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="Email or username*" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password*" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className='nz-check' type="checkbox" label="Remember me" />
      </Form.Group>
      <Button className='nz-but'  type="submit">
        Login
      </Button>
      <Form.Text className="text-muted">
          Lost your password?
        </Form.Text>
    </Form></Container>
    <Container className='nz-d1'>  <Form className='nz-f1'>
    <h1 className='nz-h1'>Register</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Email*" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        
        <Form.Control type="email" placeholder="Username*" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>

      
      <Button className='nz-but' type="submit">
        Register
      </Button>
    </Form></Container>
    </Container>
    </section>
 
 </>
  );
}
