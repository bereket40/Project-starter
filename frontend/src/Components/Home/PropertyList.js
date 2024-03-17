import React from 'react';

const PropertyList = () => {
  const cardsData = [
    {
      id: 1,
      image: "/assets/image1.jpeg",
      name: "House Manali",
      address: "Manali, Himachal Pradesh, India",
      price: 1999,
    },
    {
      id: 2,
      image: "/assets/property3.webp",
      name: "Villa Home",
      address: "Coorg, India",
      price: 4000,
    },
  ];

  const Card = ({ image, address, price, name }) => {
    return (
      <figure className="property">
        <img src={image} alt="Propertyimg" />
        <h4>{name}</h4>
        <figcaption>
          <main className="propertydetails">
            <h5>{name}</h5>
            <h6>
              <span className="material-symbols-outlined houseicon">
                home_pin
              </span>
              <p>
                <span className='price'>₹{price}</span> per night
              </p>
            </h6>
          </main>
        </figcaption>
      </figure>
    );
  };

  return (
    <div className="propertylist">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          name={card.name}
          address={card.address}
          price={card.price}
        />
      ))}
    </div>
  );
};

export default PropertyList;
