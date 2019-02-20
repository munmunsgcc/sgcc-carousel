import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CONSTANTS from '../globals';

const Quote = ({
  text, by, age, program,
}) => {
  const QuoteItem = styled.div`
    margin: 20px 0;
    .QuoteText {
      font-family: Aileron;
      font-weight: bold;
      color: ${CONSTANTS.BLUE_5};
      text-align: center;
      margin-bottom: 16px;
    }
    hr {
      border: 1px solid ${CONSTANTS.BLUE_3};
      width: 30px;
      margin-bottom: 16px;
    }
    .QuoteBy {
      text-align: center;
      font-family: 'Cooper Hewitt';
      font-weight: 600;
      letter-spacing: 2px;
      font-size: 12px;
      p {
        margin: 0;
      }
    }
  `;

  return (
    <QuoteItem>
      <h3 className="QuoteText" dangerouslySetInnerHTML={{ __html: text }} />
      <hr />
      <div className="QuoteBy">
        <p>{`${by.toUpperCase()}, AGE ${age}`}</p>
        <p>{program.toUpperCase()}</p>
      </div>
    </QuoteItem>
  );
};

Quote.defaultProps = {
  text: '',
  by: '',
  age: '',
  program: '',
};

Quote.propTypes = {
  text: PropTypes.string,
  by: PropTypes.string,
  age: PropTypes.string,
  program: PropTypes.string,
};

export default Quote;
