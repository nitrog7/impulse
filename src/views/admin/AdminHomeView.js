import React from 'react';
//import { AppStore, FalcorStore } from 'stores';

export class AdminHomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className='container'>
        <h1>Admin</h1>
      </div>
    );
  }
}

export default AdminHomeView;
