import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
// import Navbar from "./navbar";
import Simple from "./carousel";
import Footer from "./footer";
import Milestones from "./timeline";

import Nav from "./nav";
import Lore from "./lore";
import Faq from "./faq";
import Header from './faqHead';














function App() {
  const [accounts, setAccounts] = useState([]);
  const [faqs, setfaqs] = useState([
    {
      question: 'What is OGrandma Rareapepe Club ?',
      answer: '10k OGrandma Rarepepe’s are coming to web3 for their lost OGrandpa’s who are held captive deep in web3 and are being experimented on for their genes and traits.',
      open: true
    },
    {
      question: 'How much is the  mint?',
      answer: ' Mint price is 0.01 ETH',
      open: false
    },
    {
      question: 'What is the total supply?',
      answer: '10000',
      open: false
    },
    {
      question: 'How many mints per wallet?',
      answer: ' 1',
      open: false
    },
    {
      question: 'What is the total supply?',
      answer: '10000',
      open: false
    },
    {
      question: 'Is there a whitelist?',
      answer: 'No',
      open: false
    },
   
    {
      question: 'When is the mint?',
      answer: ' 15th OCT 2022, 3 AM GMT.',
      open: false
    },
    {
      question: 'Still got questions??',
      answer: 'Join our Discord so our  Team and our amazing community can answer you.',
      open: false,
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }
  
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <div>
      <div className= "Back"></div>

        <Routes>
        <Route path="/" element={<Simple/>} />
        {/* <Route path="/" element={<Simple accounts={accounts} setAccounts={setAccounts}/>} /> */}
      
        {/* <Route path="carousel" element={<Simple accounts={accounts} setAccounts={setAccounts} />} /> */}
        <Route path="timeline" element={<Milestones />} />
        <Route path="footer" element={<Footer />} />
      
        </Routes>
        <Milestones/>
        <Lore/>
      <div>
        <div className="faqs">
          <Header />
         {faqs.map((faq, i) => (
         <Faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
           ))}
        </div>
      </div>
      <Footer />
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;


