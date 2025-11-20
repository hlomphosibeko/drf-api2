import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import btnStyles from "../../styles/Button.module.css";
import { useRedirect } from "../../hooks/useRedirect";

function QuoteCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const history = useHistory();

  
  const [quoteData, setQuoteData] = useState({
    age: 0,
    num_kids: 0,
    num_married: 0,
    tertiary_education: 0,
    cooker: 0,
    neat: 0,
    steady_income: 0,
    personality: 0,
    spirituality: 0,
    innocence: 0, 
    premium_plan: 0,
  });

  const {
    age,
    num_kids,
    num_married,
    tertiary_education,
    cooker,
    neat,
    steady_income,
    personality,
    spirituality,
    innocence,
    premium_plan,
  } = quoteData;

  
  useEffect(() => {
    const q =
      (1 / (parseInt(1 + innocence) || 1)) *
      (500 / (1 + parseInt(age)) +
        500 / (1 + parseInt(num_kids)) +
        500 / (1 + parseInt(num_married)) +
        500 * parseInt(tertiary_education) +
        500 * parseInt(cooker) +
        500 * parseInt(neat) +
        500 * parseInt(steady_income) +
        500 * parseInt(personality) +
        500 * parseInt(spirituality));
    const calculated = parseFloat(q / 12).toFixed(2);
    setQuoteData((prev) => ({ ...prev, premium_plan: calculated }));
  }, [
    age,
    num_kids,
    num_married,
    tertiary_education,
    cooker,
    neat,
    steady_income,
    personality,
    spirituality,
    innocence,
  ]);

  const handleChange = (field) => (event) => {
    setQuoteData({
      ...quoteData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    for (const key in quoteData) {
      formData.append(key, quoteData[key]);
    }

    try {
      const { data } = await axiosReq.post("/quotes/", formData);
      console.log("Quote created:", data);
      history.push(`/quotes/${data.id}`);
    } catch (err) {
      console.error(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data || {});
      }
    }
  };

  
  const renderRange = (label, field, min, max, description, unit = "") => (
    <div className="container mt-4">
      <h5>{label}</h5>
      <p>{description}</p>
      <input
        type="range"
        className="form-range"
        min={min}
        max={max}
        value={quoteData[field]}
        onChange={handleChange(field)}
      />
      <div className="mt-2">
        <strong>{quoteData[field]}</strong> {unit}
      </div>
      {errors?.[field]?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
    </div>
  );

  return (
    <Form onSubmit={handleSubmit} className="ticket-form">
      <Container className="mt-4">
        {renderRange("Age", "age", 0, 100, "Age of bride")}
        {renderRange( "Kids", "num_kids", 0, 10, "Number of kids")}
        {renderRange("Times Married", "num_married", 0, 10, "Marriage history")}
        {renderRange("Education", "tertiary_education", 0, 100, "Education %")}
        {renderRange("Cooking", "cooker", 0, 100, "% Cooking ability")}
        {renderRange("Neatness", "neat", 0, 100, "% Neatness")}
        {renderRange("Income Stability", "steady_income", 0, 100, "% Stability")}
        {renderRange("Personality", "personality", 0, 100, "% Personality")}
        {renderRange("Spirituality", "spirituality", 0, 100, "% Spiritual")}
        {renderRange("Experience", "innocence", 0, 100, "% Experience")}

        <hr />
        <div className="mt-3">
          <h5>Estimated Premium Plan</h5>
          <strong>{premium_plan}</strong>
        </div>

        <hr />
        <Button
          className={`${btnStyles.Button} ${btnStyles.Brown}`}
          onClick={() => history.goBack()}
        >
          cancel
        </Button>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Brown}`}
          type="submit"
        >
          create
        </Button>
      </Container>
    </Form>
  );
}

export default QuoteCreateForm;

