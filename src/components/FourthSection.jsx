
import icon1 from '../assets/ic1.png'
import icon2 from '../assets/ic2.png'
import icon3 from '../assets/ic4.png'
import Card from './Card';
export default function FourthSection() {
   const cardData = [
     {
       id: 1,
       icon: icon1,
       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
       text: "Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim, eiusmod tempor incididunt ut labore",
     },
     {
       id: 2,
       icon: icon2,
       title: "Sed do eiusmod tempor incididunt ut labore ",
       text: "Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim elit duis tristique solicitudin vel",
     },
     {
       id: 3,
       icon: icon3,
       title: "Quis autem vel eum iure reprehenderit qui in ea voluptate",
       text: "Look no further for seamless multi-channel attribution. Our process is complete and customizatible, allowing you to view your",
     },
   ];
  return (
    <div className="flex justify-center gap-[25px] mx-auto container">
      {cardData.map((card) => (
        <Card
          key={card.id}
          icon={<img src={card.icon} alt="Icon" />}
          title={card.title}
          text={card.text}
        />
      ))}
    </div>
  );
}
