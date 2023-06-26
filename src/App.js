import logo from './logo.svg';
import './App.css';
import Resume from './componets/Resume';
import AddRecord from './componets/AddRecord';


function App() {
  return (
    <>
      <Resume
        name="shahnawaz Bheda"
        Street="laxmi Nagar"
        Near="Bhakti Nagr RailWays Station"
        city="Rajkot 361170"
        Email="Shahnawazbheda@gmail.com"
        contactNo="9558362840"
        objective="I want to reactJS in this field with hard, perseverance and dedication"
        Courses="Bca"
        University="saurashtra"
        PassingYear="2021"
        Percetnage="76%"
        skills="ReactJS, Asp.net, Android"
        Hobbies="Reading Books, Newspapers, Travelling"
        Experience="1 Year"

      />

      <AddRecord />
    </>
  );
}

export default App;
