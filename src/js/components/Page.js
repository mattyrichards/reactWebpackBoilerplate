import React from 'react';
import { Link } from 'react-router';
import css from '../../css/components/Page.css';

// "Traditional" style stateless function
function Page(props) {
  return (
    <div>
      <h2>
        This is a new page. The path part is <b className={css.headerBold}>
        {props.params.pageNumber}</b>
      </h2>
      <p><Link to="/">Return to the home page</Link></p>
    </div>
  );
}

Page.propTypes = {
  params: React.PropTypes.object,
  pageNumber: React.PropTypes.number,
};

export default Page;
