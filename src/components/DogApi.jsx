// import React, { useEffect, useState } from 'react'
// import { Card, Container, Row, Col } from 'react-bootstrap';

// const CardApi = () => {
//     let [data,setData]=useState([])
// useEffect(()=>{
//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//       .then(response => response.json())
//       .then(json => setData(json.abilities))
// },[])
//   return (
//     <>
//     <Container className="my-4">
//       <h1 className="text-center mb-4">React Bootstrap Cards with Images</h1>
//       <Row>
//         {data.map((item,i) => (
//           <Col md={4} className="mb-4" key={i}>
//             <Card>
//               {/* Card Image */}
//               <Card.Img 
//                 variant="top" 
//                 src={item.url} 
                
//               />
//               <Card.Body>
//                 {/* Card Title and Text */}
//                 <Card.Title>{item.name}</Card.Title>
              
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
  
  
//     </>
//   )
// }

// export default CardApi
// import React, { useEffect, useState } from 'react';
// import { Card, Container, Row, Col } from 'react-bootstrap';

// const CardApi = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//       .then(response => response.json())
//       .then(json => setData(json.abilities)) // Access the abilities array
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <>
//       <Container className="my-4">
//         <h1 className="text-center mb-4">React Bootstrap Cards with Images</h1>
//         <Row>
//           {data.map((item, i) => (
//             <Col md={4} className="mb-4" key={i}>
//               <Card>
//                 {/* Placeholder Card Image */}
//                 <Card.Img
//                   variant="top"
//                   src={item.ability.url}
//                   alt="Pokemon Ability"
//                 />
//                 <Card.Body>
//                   {/* Display the ability name */}
//                   <Card.Title>{item.ability.name}</Card.Title>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default CardApi;
// import React, { useEffect, useState } from 'react';
// import { Card, Container, Row, Col } from 'react-bootstrap';

// const DogApi = () => {
//   const [dogs, setDogs] = useState([]);

//   useEffect(() => {
//     const fetchDogs = async () => {
//       try {
//         const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=10');
//         const result = await response.json();
//         setDogs(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchDogs();
//   }, []);

//   return (
//     <Container className="my-4">
//       <h1 className="text-center mb-4">React Bootstrap Cards with Dog Images</h1>
//       <Row>
//         {dogs.map((dog, i) => (
//           <Col md={4} className="mb-4" key={i}>
//             <Card>
//               {/* Dog Image */}
//               <Card.Img
//                 variant="top"
//                 src={dog.url}
//                 alt={`Dog ${i + 1}`}
//               />
//               <Card.Body>
//                 {/* Placeholder Title */}
//                 <Card.Title>Dog {i + 1}</Card.Title>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default DogApi;
import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included
//import './App.css'; // Import custom CSS

const DogApi = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=9'); // Fetch 9 images
        const result = await response.json();
        setDogs(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDogs();
  }, []);

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Responsive Cards with Equal Heights</h1>
      <Row>
        {dogs.map((dog, i) => (
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex align-items-stretch" key={i}>
            <Card className="h-100 shadow-sm">
              {/* Dog Image */}
              <Card.Img
                variant="top"
                src={dog.url}
                alt={`Dog ${i + 1}`}
                className="card-img-top"
              />
              <Card.Body className="d-flex flex-column">
                {/* Placeholder Title */}
                <Card.Title className="text-center">Dog {i + 1}</Card.Title>
                <Card.Text className="mt-auto text-center">
                  This is a cute dog. ❤️
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DogApi;
