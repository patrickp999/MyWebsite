import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, media, Section, mixins } from "@styles";
import sr from "@utils/sr";
import { srConfig } from "@config";
const { colors, myColors } = theme;

const ContactContainer = styled(Section)`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 100px;
`;
const ContactBox = styled.div`
  display: grid;
  width: auto;
  background: ${myColors.darkGray}
  position: relative;
  transition: ${theme.transition};
  transition-duration: "1.5s";
`;
const FormContainer = styled.form`
  transition: ${theme.transition};
  transition-duration: "1.5s";
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  z-index: ${(props) => (props.isActive ? 2 : -1)};
  position: ${(props) => (props.isActive ? "relative" : "absolute")};
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  transition: ${theme.transition};
  transition-duration: ${(props) => (props.isActive ? "0.5s" : "0s")};
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
  padding: 15px 0 0 0;
  margin: 0 auto
  margin-top: 10px;
  width: 80%;
  ${media.phablet`width: 90%;`};
`;
const FormGroupBox = styled(FormGroup)`
  margin-top: 30px;
  padding: 20px 0 0 0;
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
  color: ${colors.lightestSlate};
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
    font-weight: 700;
    border-width: 3px;
    border-color: ${myColors.sage};
  }
`;
const TextBox = styled.textarea`
  height: 200px;
  font-family: inherit;
  width: 100%;
  resize: none;
  border: 2px solid ${myColors.rubyRed};
  border-radius: ${theme.borderRadius};
  outline: 0;
  font-size: 1.3rem;
  color: ${colors.lightestSlate};
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

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 30px;
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
    font-weight: 700;
    border-width: 3px;
    border-color: ${myColors.sage};
  }
`;
const FormButton = styled.button`
  ${mixins.bigButton};
  margin: 0.75rem auto
  padding: 0.75rem 1rem;
  width: 27%;
  ${media.tablet`width: 40%;`};
`;
const Button = styled.button`
  ${mixins.bigButton};
  padding: 0.75rem 1rem;
  margin: 0.5rem;
`;

const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title } = frontmatter;
  const revealContainer = useRef(null);
  const [isFormOpen, setOpenForm] = useState(false);

  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <ContactContainer id='contact' ref={revealContainer}>
      <Title>{title}</Title>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <ContactBox>
        <FormContainer
          action='https://getform.io/f/331f7bc4-17bc-4133-94c2-f4cf819ea6b1'
          method='POST'
          isActive={isFormOpen}
        >
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
          <Button type='submit'>Submit</Button>
          <Button type='reset'>Reset</Button>
        </FormContainer>

        <FormButton onClick={() => setOpenForm(true)} hidden={isFormOpen}>
          Say Hello
        </FormButton>
      </ContactBox>
    </ContactContainer>
  );
};

Contact.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Contact;
