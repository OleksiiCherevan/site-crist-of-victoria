import React from 'react';
import Iframe from 'react-iframe';
import styled from "styled-components";
import CenterChildren from './CenterChildren';

const StyledContacts = styled.span`
  box-sizing: border-box;
  padding: 40px 0;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
`


function Contacts() {
  return (
    <StyledContacts>
      <Title>Дякую за Увагу!
        <br />курсант 293 навчальної групи солдат Соботюк Я. О.
        <br/>До Вашого відома місце розташування посольства Великої Британії
        </Title>
      <CenterChildren>
      <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23396.634185448158!2d30.52731132793166!3d50.450687767726194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce44f450ec35%3A0x40ac6036742ef481!2z0J_QvtGB0L7Qu9GM0YHRgtCy0L4g0JLQtdC70LjQutC-0Zcg0JHRgNC40YLQsNC90ZbRlw!5e0!3m2!1suk!2sua!4v1669653989647!5m2!1suk!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
      </CenterChildren>
    </StyledContacts>
  );
}

export default Contacts;