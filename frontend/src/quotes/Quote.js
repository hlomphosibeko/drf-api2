import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Quote = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    updated_at,
    setQuotes,

    // QUOTE FIELDS
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
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/quotes/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/quotes/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const SummaryItem = ({ label, value, unit = "" }) => (
    <div className="d-flex justify-content-between py-1 border-bottom">
      <span className="fw-semibold">{label}</span>
      <span>
        {value}
        {unit}
      </span>
    </div>
  );

  return (
    <Card className={`${styles.Post} p-2`}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`} className="d-flex align-items-center">
            <Avatar src={profile_image} height={55} />
            <span className="ms-2">{owner}</span>
          </Link>

          <div className="d-flex align-items-center">
            <span className="me-2">{updated_at}</span>

            {is_owner && (
              <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
            )}
          </div>
        </Media>
      </Card.Body>

      <Card.Body>
        <h4 className="text-center fw-bold mb-4">Quote Summary</h4>

        <SummaryItem label="Age Preference" value={age} unit=" yrs" />
        <SummaryItem label="Number of Kids" value={num_kids} />
        <SummaryItem label="Times Married" value={num_married} />
        <SummaryItem label="Tertiary Education" value={tertiary_education} unit="%" />
        <SummaryItem label="Cooking Ability" value={cooker} unit="%" />
        <SummaryItem label="Neatness Level" value={neat} unit="%" />
        <SummaryItem label="Income Stability" value={steady_income} unit="%" />
        <SummaryItem label="Personality" value={personality} unit="%" />
        <SummaryItem label="Spirituality" value={spirituality} unit="%" />
        <SummaryItem label="Experience Level" value={innocence} unit="%" />

        <div className="text-center mt-4 p-3 bg-light rounded">
          <h5 className="mb-1">Estimated Premium</h5>
          <h2 className="fw-bold">${premium_plan}</h2>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Quote;
