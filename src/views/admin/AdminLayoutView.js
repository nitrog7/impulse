import React from 'react';
//import { AppStore, FalcorStore } from 'stores';

export class AdminLayoutView extends React.Component {
  static propTypes() {
    return {
      children: React.PropTypes.object
    };
  }

  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    );
  }
}

export default AdminLayoutView;
