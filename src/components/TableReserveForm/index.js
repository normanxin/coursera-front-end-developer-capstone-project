import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import { bool, date, number, object, string } from 'yup';

const today = new Date();
const yesterday = new Date(new Date().setDate(today.getDate() - 1));
const TableReserveForm = ({ onSubmit }) => {
  const schema = object().shape({
    firstName: string().required('Please input your first name.'),
    lastName: string().required('Please input your last name.'),
    email: string()
      .email('Please input a valid email.')
      .required('Please input your email.'),
    phone: string()
      .matches(/^\d{10}$/, 'Please input a valid phone number.')
      .required('Please input your phone number.'),
    creditCard: string()
      .matches(/^\d{16}$/, 'Please input a valid credit card number.')
      .required('Please input a credit card number.'),
    cvv: string()
      .matches(/^\d{3}$/, 'Please input a valid CVV number.')
      .required('Please input a CVV number.'),
    date: date().min(
      yesterday,
      'Please input a valid date starting from today.'
    ),
    time: string()
      .matches(/^\d{2}:\d{2}$/, 'Please input a valid time.')
      .required('Please input a time.'),
    adults: number(),
    kids: number(),
    terms: bool()
      .required()
      .oneOf(
        [true],
        'Term must be accepted for Little Lemon table reservation.'
      ),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        creditCard: '',
        cvv: '',
        date: today.toISOString().split('T')[0],
        time: '12:00',
        adults: 1,
        kids: 0,
        terms: false,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        isValid,
        dirty,
      }) => (
        <Form
          noValidate
          onSubmit={handleSubmit}
          className="d-flex flex-column vh-100 p-3"
          data-testid="table-reserve-form"
        >
          <Row className="mb-3 text-start">
            <Form.Group as={Col} controlId="personalInfoForm.firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={errors.firstName}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="personalInfoForm.lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                isValid={touched.lastName && !errors.lastName}
                isInvalid={errors.lastName}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group
            className="mb-3 text-start"
            controlId="personalInfoForm.email"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={values.email}
              isValid={touched.email && !errors.email}
              isInvalid={errors.email}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-3 text-start"
            controlId="personalInfoForm.phone"
          >
            <Form.Label>Phone</Form.Label>
            <InputGroup>
              <InputGroup.Text>+1</InputGroup.Text>
              <Form.Control
                type="text"
                name="phone"
                value={values.phone}
                isValid={touched.phone && !errors.phone}
                isInvalid={errors.phone}
                onChange={handleChange}
                maxLength="10"
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Row className="mb-3 text-start">
            <Form.Group
              as={Col}
              xs="9"
              sm="9"
              controlId="personalInfoForm.creditCard"
            >
              <Form.Label>Credit card</Form.Label>
              <Form.Control
                type="text"
                name="creditCard"
                value={values.creditCard}
                isValid={touched.creditCard && !errors.creditCard}
                isInvalid={errors.creditCard}
                onChange={handleChange}
                maxLength="16"
              />
              <Form.Control.Feedback type="invalid">
                {errors.creditCard}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} xs="3" sm="3" controlId="personalInfoForm.cvv">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="text"
                name="cvv"
                value={values.cvv}
                isValid={touched.cvv && !errors.cvv}
                isInvalid={errors.cvv}
                onChange={handleChange}
                maxLength="3"
              />
              <Form.Control.Feedback type="invalid">
                {errors.cvv}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3 text-start">
            <Form.Group as={Col} controlId="personalInfoForm.date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={values.date}
                isValid={touched.date && !errors.date}
                isInvalid={errors.date}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {errors.date}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="personalInfoForm.time">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={values.time}
                isValid={touched.time && !errors.time}
                isInvalid={errors.time}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {errors.time}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-auto text-start">
            <Form.Group as={Col} controlId="personalInfoForm.adults">
              <Form.Label>Adults</Form.Label>
              <Form.Select
                name="adults"
                value={values.adults}
                isValid={touched.adults && !errors.adults}
                isInvalid={errors.adults}
                onChange={handleChange}
              >
                {Array(10)
                  .fill()
                  .map((_, i) => (
                    <option key={`adults_${i}`}>{i + 1}</option>
                  ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="personalInfoForm.kids">
              <Form.Label>Kids</Form.Label>
              <Form.Select
                name="kids"
                value={values.kids}
                isValid={touched.kids && !errors.kids}
                isInvalid={errors.kids}
                onChange={handleChange}
              >
                {Array(11)
                  .fill()
                  .map((_, i) => (
                    <option key={`kids_${i}`}>{i}</option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="personalInfoForm.term">
            <Form.Check
              required
              name="terms"
              label="I agree to receive text and message from the Little Lemon."
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit" disabled={!dirty || !isValid} className="w-100">
            Get a table
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default TableReserveForm;
