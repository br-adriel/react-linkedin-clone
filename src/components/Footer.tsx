import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterTag>
      <p>Adriel Santos, {new Date().getFullYear()}</p>
      <a
        href='https://github.com/br-adriel'
        target='_blank'
        rel='noopener noreferrer'
      >
        Github
      </a>
      <a
        href='https://linkedin.com/in/adriel-fsantos'
        target='_blank'
        rel='noopener noreferrer'
      >
        Linkedin
      </a>
    </FooterTag>
  );
};

const FooterTag = styled.footer`
  display: flex;
  gap: 4px;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: #0009;
  padding: 20px;

  a {
    color: inherit;
    font-weight: 600;
  }
`;

export default Footer;
