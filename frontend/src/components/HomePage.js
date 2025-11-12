import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import btnStyles from "../styles/Button.module.css";
import styles from "../styles/HomePage.module.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/info');
    }

    const handleMore = () => {
        history.push('/more');
    }
    
    return (
        <Card className="bg-dark">
            <Card.Img
             src="https://res.cloudinary.com/dibjhrwcc/image/upload/v1747603650/hero-image_sf8q4b.png" 
             alt="Hero image" />
            <Card.ImgOverlay className='text-center text-white' md="auto">
                <Card.Title className={styles.Title}>Lobolo Insurance</Card.Title>
                <Card.Text className={styles.Text}>
                    Before You Say 'I Do', Make Sure You're Covered Too
                </Card.Text>
                <br />
                <Button
                 className={`${btnStyles.Button} ${btnStyles.Brown}`}
                 onClick={handleClick}>
                    Info
                </Button>
                <Button
                 className={`${btnStyles.Button} ${btnStyles.Secondary}`}
                 onClick={handleMore}
                 >
                    Learn More 
                </Button>
            </Card.ImgOverlay>
            <ListGroup variant="flush" className='text-center'>
                <ListGroup.Item>
                    <h4>How It Works</h4>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th><i className="fa-regular fa-file-lines"></i><br /> Choose Your Plan</th>
                                <th><i className="fa-solid fa-file-circle-check"></i><br />Apply Securely</th>
                                <th><i className="fa-solid fa-shield"></i><br />Stay Protected</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Flexible options for different lobola budget.</td>
                                <td>Easy online application, no paperwork needed.</td>
                                <td>We've got you covered when tradition calls.</td>
                            </tr>
                        </tbody>
                    </Table>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h4>Why Choose Us</h4>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th><i className="fa-solid fa-landmark"></i><br /> Respect for Culture</th>
                                <th><i className="fa-solid fa-wallet"></i><br />Affordable Coverage</th>
                                <th><i className="fa-regular fa-clock"></i><br />Stay Protected</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>We understand the importance of lobola.</td>
                                <td>Plans built for real financial needs.</td>
                                <td>24/7 claims assistance and guidance.</td>
                            </tr>
                        </tbody>
                    </Table>
                </ListGroup.Item>
            </ListGroup>
        </Card>  
    );
};

export default HomePage;