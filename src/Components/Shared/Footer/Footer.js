import React from 'react';
import FooterColumn from './FooterColumn/FooterColumn';

const Footer = () => {
  const noNamed = [
    {name: "Emergency Dental Care" , link: "/emergency"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
    {name: "Tooth Extraction" , link: "/tooth-extract"},
    {name: "Check Up" , link: "/checkup"},
]
const ourAddress = [
    {name: "New York - 101010 Hudson" , link: "//google.com/map"},
    {name: "Yards" , link: "//google.com/map"},
   
]
const oralHealth = [
    {name: "Emergency Dental Care" , link: "/emergency"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
    {name: "Tooth Extraction" , link: "/tooth-extract"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"}
]
const services = [
    {name: "Emergency Dental Care" , link: "/emergency"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
    {name: "Tooth Extraction" , link: "/tooth-extract"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"}
]
  return (
    <footer className="mt-5">
      <div className="container-fluid bg-dark py-5">
        <div className="row">
          <FooterColumn menuTitle={''} menuItems = {noNamed}></FooterColumn>
          <FooterColumn menuTitle={'Services'} menuItems={oralHealth}></FooterColumn>
          <FooterColumn menuTitle={'Oral Health'} menuItems={services}></FooterColumn>
          <FooterColumn menuTitle={'Our Addresses'} menuItems={ourAddress}></FooterColumn>
        </div>
      </div>
    </footer>
  );
};

export default Footer;