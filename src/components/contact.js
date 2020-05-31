import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { colors, myColors, fontSizes, fonts } = theme;

const ContactContainer = styled(Section)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
`;
const ContactBox = styled.div`
  display: grid;
  width: auto;
  background: ${myColors.darkGray}
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  position: relative;
  ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
`;
const Title = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  color: ${myColors.skyScraper};
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`;
const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin: 0 auto
  margin-top: 10px;
  width: 80%;
`;
const FormGroupBox = styled(FormGroup)`
  margin-top: 30px;
`;
const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  padding-left: 7px;
  color: ${myColors.skyScraper}};
`;
const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${myColors.rubyRed};
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${myColors.sage};
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-color: ${myColors.sage};
  }
`;
const TextBox = styled.input`
  font-family: inherit;
  width: 100%;
  height: 200px;
  border: 2px solid ${myColors.rubyRed};
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
    padding-left: 7px;
  }

  &:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${myColors.sage};
      font-weight: 700;
      padding-left: 7px;
    }
    font-weight: 700;
    border-width: 3px;
    border-color: ${myColors.sage};
    padding-left: 7px;
  }
`;

const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title } = frontmatter;

  return (
    <ContactContainer id='contact'>
      <Title>{title}</Title>
      <ContactBox>
        <form method='post' action=''>
          <FormGroup>
            <Input
              type='input'
              className='form__field'
              placeholder='Name'
              name='name'
              id='name'
              title=''
              required
            />
            <Label htmlFor='name' className='form__label'>
              Name
            </Label>
          </FormGroup>
          <FormGroup>
            <Input
              type='input'
              className='form__field'
              placeholder='Email'
              name='email'
              id='email'
              title=''
              required
            />
            <Label htmlFor='email' className='form__label'>
              Email
            </Label>
          </FormGroup>
          <FormGroupBox>
            <TextBox
              type='input'
              className='form__field'
              placeholder='Message'
              name='message'
              id='message'
              title=''
              required
            />
            <Label htmlFor='message' className='form__label'>
              Message
            </Label>
          </FormGroupBox>
          <input type='submit' value='Submit' />
          <input type='reset' value='Cancel' />
        </form>
      </ContactBox>
    </ContactContainer>
  );
};

Contact.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Contact;
