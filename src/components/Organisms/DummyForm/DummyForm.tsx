import Text from '../../Atoms/Text';
import Form from '../../Atoms/Form';
import TextField from '../../Molecules/TextField';
import { Col, Row } from '../../Atoms/Row';
import Button from '../../Atoms/Button';
import { useForm } from 'rc-field-form';

const DummyForm = () => {
  // Aqui es el ultimo nivel donde podemos seguir usando Fetchings o logica de negocio, pero ya no suele ser tan comun
  const [form] = useForm();

  const onCancel = () => {
    form.resetFields();
  };
  
  const onFinish = (values: object) => {
    console.log(values)
  };

  return (
    <div className="mt-5">
      <Text variant="h1">Dummy Form</Text>

      <Form form={form} className="mt-5" onFinish={onFinish}>
        <Row gutter={[10, 10]}>
          <Col xs={24} md={12}>
            <Form.Item name="name" isRequired>
              <TextField
                required
                placeholder="Insert your first name"
                label="First Name"
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item name="lastname" isRequired>
              <TextField
                required
                placeholder="Insert your last name"
                label="Last Name"
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item name="email" isRequired rules={[{ type: 'email' }]}>
              <TextField
                required
                placeholder="example@mail.com"
                label="Email"
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item name="nationality" isRequired>
              <TextField
                required
                label="Nacionality"
                placeholder="El Salvador"
              />
            </Form.Item>
          </Col>

          <Col xs={24} className="mt-10 text-right">
            <Button onClick={onCancel} type="outline">Cancel</Button>
            <Button htmlType="submit">Save</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default DummyForm;
