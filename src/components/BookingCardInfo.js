import React, { useState } from "react";
import BookingCard from "./BookingCard";


function BookingCardInfo() {
  const [booking, setBooking] = useState([
    {
      id: 1,
      tutorImg: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=ShirtCrewNeck&clotheColor=White&graphicType=Hola&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Sad&skinColor=Brown",
      teacher: "sara",
      Exp: 2,
      Des:
        "is simply dummy text of the printing and typesetting industry. Lorem ",

      Price: 50,
    },
    {
      id: 2,
      tutorImg: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Blank&hairColor=PastelPink&facialHairType=BeardLight&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=PastelGreen&eyeType=Side&eyebrowType=RaisedExcitedNatural&mouthType=Sad&skinColor=Yellow",
      teacher: "leen",
      Exp: 1,
      Des:
        "Ipsum has been the industry's standard dummy text ever since the 1500s,",

      Price: 60,
    },
    {
      id: 3,
      tutorImg: "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&hairColor=Auburn&facialHairType=Blank&facialHairColor=Red&clotheType=CollarSweater&clotheColor=Blue01&eyeType=Close&eyebrowType=UnibrowNatural&mouthType=Twinkle&skinColor=DarkBrown",
      teacher: "mohamad",
      Exp: 5,
      Des:
        "when an unknown printer took a galley of type and scrambled it to make",

      Price: 50,
    },
    {
      id: 4,
      tutorImg: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
      teacher: "lila",
      Exp: 8,
      Des:
        "It has survived not only five centuries,but also the leap into electronic",

      Price: 30,
    },
    {
      id: 5,
      tutorImg: "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Blank&hatColor=PastelGreen&facialHairType=BeardLight&facialHairColor=BlondeGolden&clotheType=BlazerShirt&clotheColor=PastelGreen&eyeType=Close&eyebrowType=RaisedExcited&mouthType=Default&skinColor=DarkBrown",
      teacher: "Margret",
      Exp: 10,
      Des:
        "typesetting, remaining essentially unchanged. It was popularised in the 1960s",

      Price: 70,
    },
    {
      id: 6,
      tutorImg: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Wayfarers&hatColor=PastelBlue&hairColor=Black&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=Hoodie&clotheColor=White&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Disbelief&skinColor=DarkBrown",
      teacher: "Victoria",
      Exp: 3,
      Des:
        "with the release of Letraset sheets containing Lorem Ipsum passages",

      Price: 50,
    },
    {
      id: 7,
      tutorImg: "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&hairColor=BrownDark&facialHairType=MoustacheMagnum&facialHairColor=Brown&clotheType=GraphicShirt&clotheColor=Gray02&graphicType=Bat&eyeType=EyeRoll&eyebrowType=FlatNatural&mouthType=Sad&skinColor=Ligh",
      teacher: "Brad",
      Exp: 8,
      Des:
        "Contrary to popular belief, Lorem Ipsum is not simply random text",

      Price: 60,
    },
    {
      id: 8,
      tutorImg: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=Hoodie&clotheColor=Blue02&eyeType=Squint&eyebrowType=UpDownNatural&mouthType=Concerned&skinColor=Pale",
      teacher: "Yaser",
      Exp: 15,
      Des:
        "Hello!my hobbies are drawing ,playing video games and I really love teaching :)",
      Price: 50,
    },
  ]);
  const bookedArrFromStorage = (localStorage.getItem("bookingDetails") ? JSON.parse(localStorage.getItem("bookingDetails")) : "TEST");

  return (
    <div className="container">
      {booking.map((item) => {
        return <BookingCard key={item.id} item={item} />;
      })}
    </div>
  );
}

export default BookingCardInfo;
